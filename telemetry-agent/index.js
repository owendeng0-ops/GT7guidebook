#!/usr/bin/env node

const dgram = require("node:dgram");
const http = require("node:http");
const crypto = require("node:crypto");
const os = require("node:os");

const DEFAULTS = {
  listenPort: 33740,
  sendPort: 33739,
  healthPort: 8787,
  heartbeatMs: 10000,
};

const SALSA_KEY = Buffer.from("Simulator Interface Packet GT7 ver 0.0", "ascii").subarray(0, 32);
const GT7_MAGIC = 0x47375330;
const liveClients = new Set();
let lastLiveTickAt = 0;
let lastLastLapMs = -1;
let activeLap = null;
let activeLapStartedAt = 0;
let activeLapSamples = [];

const state = {
  startedAt: new Date().toISOString(),
  ps5Ip: null,
  listenPort: DEFAULTS.listenPort,
  sendPort: DEFAULTS.sendPort,
  healthPort: DEFAULTS.healthPort,
  heartbeatMs: DEFAULTS.heartbeatMs,
  heartbeatCount: 0,
  lastHeartbeatAt: null,
  packetCount: 0,
  decodedCount: 0,
  decodeErrors: 0,
  lastPacketAt: null,
  lastPacketFrom: null,
  lastPacketBytes: 0,
  lastError: null,
  lastTelemetry: null,
  samplesPerSecond: 0,
  status: "starting",
};

function parseArgs(argv) {
  const options = { ...DEFAULTS, ps5Ip: null, selfTest: false, broadcast: false };

  for (let i = 2; i < argv.length; i += 1) {
    const arg = argv[i];
    const next = argv[i + 1];

    if (arg === "--self-test") {
      options.selfTest = true;
      continue;
    }
    if (arg === "--broadcast") {
      options.broadcast = true;
      continue;
    }

    const setNumber = (name, key) => {
      if (arg !== name) return false;
      const value = Number(next);
      if (!Number.isInteger(value) || value <= 0 || value > 65535) {
        throw new Error(`Invalid value for ${name}: ${next}`);
      }
      options[key] = value;
      i += 1;
      return true;
    };

    if (arg === "--ps5") {
      if (!next) throw new Error("--ps5 requires an IP address");
      options.ps5Ip = next;
      i += 1;
    } else if (
      setNumber("--listen-port", "listenPort") ||
      setNumber("--send-port", "sendPort") ||
      setNumber("--health-port", "healthPort") ||
      setNumber("--heartbeat-ms", "heartbeatMs")
    ) {
      // handled
    } else if (arg === "--help" || arg === "-h") {
      printHelp();
      process.exit(0);
    } else {
      throw new Error(`Unknown argument: ${arg}`);
    }
  }

  return options;
}

function printHelp() {
  console.log(`GT7 Telemetry Agent Test

Usage:
  npm run telemetry -- --ps5 192.168.1.20
  npm run telemetry -- --self-test

Options:
  --ps5 <ip>              PS5 local network IP address
  --listen-port <port>    Local UDP receive port, default ${DEFAULTS.listenPort}
  --send-port <port>      PS5 UDP heartbeat port, default ${DEFAULTS.sendPort}
  --health-port <port>    Local HTTP health port, default ${DEFAULTS.healthPort}
  --heartbeat-ms <ms>     Heartbeat interval, default ${DEFAULTS.heartbeatMs}
  --broadcast             Send heartbeat as LAN broadcast
`);
}

function rotateLeft(value, bits) {
  return ((value << bits) | (value >>> (32 - bits))) >>> 0;
}

function quarterRound(x, a, b, c, d) {
  x[b] ^= rotateLeft((x[a] + x[d]) >>> 0, 7);
  x[c] ^= rotateLeft((x[b] + x[a]) >>> 0, 9);
  x[d] ^= rotateLeft((x[c] + x[b]) >>> 0, 13);
  x[a] ^= rotateLeft((x[d] + x[c]) >>> 0, 18);
}

function readU32LE(buffer, offset) {
  return buffer[offset] |
    (buffer[offset + 1] << 8) |
    (buffer[offset + 2] << 16) |
    (buffer[offset + 3] << 24);
}

function writeU32LE(buffer, value, offset) {
  buffer[offset] = value & 0xff;
  buffer[offset + 1] = (value >>> 8) & 0xff;
  buffer[offset + 2] = (value >>> 16) & 0xff;
  buffer[offset + 3] = (value >>> 24) & 0xff;
}

function salsa20Block(key, nonce, counter) {
  const constants = Buffer.from("expand 32-byte k", "ascii");
  const input = new Uint32Array(16);

  input[0] = readU32LE(constants, 0);
  input[5] = readU32LE(constants, 4);
  input[10] = readU32LE(constants, 8);
  input[15] = readU32LE(constants, 12);

  input[1] = readU32LE(key, 0);
  input[2] = readU32LE(key, 4);
  input[3] = readU32LE(key, 8);
  input[4] = readU32LE(key, 12);
  input[11] = readU32LE(key, 16);
  input[12] = readU32LE(key, 20);
  input[13] = readU32LE(key, 24);
  input[14] = readU32LE(key, 28);

  input[6] = readU32LE(nonce, 0);
  input[7] = readU32LE(nonce, 4);
  input[8] = counter & 0xffffffff;
  input[9] = Math.floor(counter / 0x100000000) >>> 0;

  const x = new Uint32Array(input);
  for (let i = 0; i < 10; i += 1) {
    quarterRound(x, 0, 4, 8, 12);
    quarterRound(x, 5, 9, 13, 1);
    quarterRound(x, 10, 14, 2, 6);
    quarterRound(x, 15, 3, 7, 11);
    quarterRound(x, 0, 1, 2, 3);
    quarterRound(x, 5, 6, 7, 4);
    quarterRound(x, 10, 11, 8, 9);
    quarterRound(x, 15, 12, 13, 14);
  }

  const out = Buffer.alloc(64);
  for (let i = 0; i < 16; i += 1) {
    writeU32LE(out, (x[i] + input[i]) >>> 0, i * 4);
  }
  return out;
}

function salsa20Xor(buffer, key, nonce) {
  const output = Buffer.alloc(buffer.length);
  let counter = 0;

  for (let offset = 0; offset < buffer.length; offset += 64) {
    const block = salsa20Block(key, nonce, counter);
    const length = Math.min(64, buffer.length - offset);
    for (let i = 0; i < length; i += 1) {
      output[offset + i] = buffer[offset + i] ^ block[i];
    }
    counter += 1;
  }

  return output;
}

function createGt7Nonce(packet) {
  if (packet.length < 0x44) {
    throw new Error(`Packet too short for nonce: ${packet.length} bytes`);
  }

  const seed = packet.readUInt32LE(0x40);
  const masked = (seed ^ 0xdeadbeaf) >>> 0;
  const nonce = Buffer.alloc(8);
  nonce.writeUInt32LE(masked, 0);
  nonce.writeUInt32LE(seed, 4);
  return nonce;
}

function decryptGt7Packet(packet) {
  const nonce = createGt7Nonce(packet);
  return salsa20Xor(packet, SALSA_KEY, nonce);
}

function readFloatLE(buffer, offset) {
  if (offset + 4 > buffer.length) return null;
  const value = buffer.readFloatLE(offset);
  return Number.isFinite(value) ? value : null;
}

function readInt16LE(buffer, offset) {
  return offset + 2 <= buffer.length ? buffer.readInt16LE(offset) : null;
}

function readInt32LE(buffer, offset) {
  return offset + 4 <= buffer.length ? buffer.readInt32LE(offset) : null;
}

function parseTelemetry(decoded) {
  if (decoded.length < 0x128) {
    throw new Error(`Decoded packet too short: ${decoded.length} bytes`);
  }

  const magic = decoded.readUInt32LE(0);
  if (magic !== GT7_MAGIC) {
    throw new Error(`Bad magic 0x${magic.toString(16).padStart(8, "0")}`);
  }

  const timeOnTrackMs = readInt32LE(decoded, 0x80);
  const bestLapMs = readInt32LE(decoded, 0x78);
  const lastLapMs = readInt32LE(decoded, 0x7c);
  const gearByte = decoded[0x90];

  return {
    receivedAt: new Date().toISOString(),
    packageId: decoded.readUInt32LE(0x70),
    speedKmh: readFloatLE(decoded, 0x4c) * 3.6,
    rpm: readFloatLE(decoded, 0x3c),
    currentGear: gearByte & 0b00001111,
    suggestedGear: gearByte >> 4,
    throttle: decoded[0x91] / 2.55,
    brake: decoded[0x92] / 2.55,
    currentLap: readInt16LE(decoded, 0x74),
    totalLaps: readInt16LE(decoded, 0x76),
    timeOnTrackMs,
    bestLapMs,
    lastLapMs,
    fuelCapacity: readFloatLE(decoded, 0x48),
    tireRadius: readFloatLE(decoded, 0xb4),
    position: {
      x: readFloatLE(decoded, 0x04),
      y: readFloatLE(decoded, 0x08),
      z: readFloatLE(decoded, 0x0c),
    },
    velocity: {
      x: readFloatLE(decoded, 0x10),
      y: readFloatLE(decoded, 0x14),
      z: readFloatLE(decoded, 0x18),
    },
    rotation: {
      pitch: readFloatLE(decoded, 0x1c),
      yaw: readFloatLE(decoded, 0x20),
      roll: readFloatLE(decoded, 0x24),
    },
    rawFlags: readInt16LE(decoded, 0x8e),
  };
}

function sampleForLapSummary(telemetry, receivedAtMs) {
  return {
    t: receivedAtMs,
    speedKmh: telemetry.speedKmh,
    rpm: telemetry.rpm,
    gear: telemetry.currentGear,
    throttle: telemetry.throttle,
    brake: telemetry.brake,
    position: telemetry.position,
  };
}

function resetActiveLap(telemetry, receivedAtMs) {
  activeLap = telemetry.currentLap > 0 ? telemetry.currentLap : null;
  activeLapStartedAt = receivedAtMs;
  activeLapSamples = [sampleForLapSummary(telemetry, receivedAtMs)];
}

function updateLapDetection(telemetry, receivedAtMs) {
  if (!telemetry || telemetry.currentLap == null) return null;
  if (activeLap == null || telemetry.currentLap <= 0) {
    resetActiveLap(telemetry, receivedAtMs);
    return null;
  }

  activeLapSamples.push(sampleForLapSummary(telemetry, receivedAtMs));
  if (activeLapSamples.length > 12000) activeLapSamples = activeLapSamples.slice(-12000);

  const lapFromLastLap = Number.isFinite(telemetry.lastLapMs) &&
    telemetry.lastLapMs > 10000 &&
    telemetry.lastLapMs !== lastLastLapMs;

  if (lapFromLastLap) {
    lastLastLapMs = telemetry.lastLapMs;
    const summary = buildLapSummary(activeLapSamples, telemetry.lastLapMs / 1000, "gt7_last_lap");
    resetActiveLap(telemetry, receivedAtMs);
    return summary;
  }

  const lapIncreased = telemetry.currentLap > activeLap;
  const wallSeconds = (receivedAtMs - activeLapStartedAt) / 1000;
  if (lapIncreased && wallSeconds > 5 && activeLapSamples.length > 180) {
    const summary = buildLapSummary(activeLapSamples, wallSeconds, wallSeconds > 20 ? "lap_counter" : "lap_counter_candidate");
    resetActiveLap(telemetry, receivedAtMs);
    return summary;
  }

  if (telemetry.currentLap !== activeLap && telemetry.currentLap > 0) {
    activeLap = telemetry.currentLap;
    activeLapStartedAt = receivedAtMs;
    activeLapSamples = [sampleForLapSummary(telemetry, receivedAtMs)];
  }

  return null;
}

function buildLapSummary(samples, lapSeconds, source) {
  const valid = samples.filter((sample) => Number.isFinite(sample.speedKmh));
  const avg = (values) => values.length ? values.reduce((sum, value) => sum + value, 0) / values.length : 0;
  const max = (values) => values.length ? Math.max(...values) : 0;
  const speedValues = valid.map((sample) => sample.speedKmh);
  const throttleValues = samples.map((sample) => Number(sample.throttle)).filter(Number.isFinite);
  const brakeValues = samples.map((sample) => Number(sample.brake)).filter(Number.isFinite);
  let brakeEvents = 0;
  let wasBraking = false;

  for (const sample of samples) {
    const braking = Number(sample.brake) >= 20;
    if (braking && !wasBraking) brakeEvents += 1;
    wasBraking = braking;
  }

  const heavyBrakeSamples = brakeValues.filter((value) => value >= 70).length;
  const fullThrottleSamples = throttleValues.filter((value) => value >= 95).length;
  const traceId = `trace-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;

  return {
    type: "lap_completed",
    traceId,
    source,
    lapSeconds: Number(lapSeconds.toFixed(3)),
    vehicle: "",
    layoutCandidate: null,
    summary: {
      samples: samples.length,
      durationSeconds: Number(lapSeconds.toFixed(3)),
      maxSpeedKmh: Number(max(speedValues).toFixed(1)),
      avgSpeedKmh: Number(avg(speedValues).toFixed(1)),
      avgThrottle: Number(avg(throttleValues).toFixed(1)),
      avgBrake: Number(avg(brakeValues).toFixed(1)),
      brakeEvents,
      heavyBrakePct: brakeValues.length ? Number(((heavyBrakeSamples / brakeValues.length) * 100).toFixed(1)) : 0,
      fullThrottlePct: throttleValues.length ? Number(((fullThrottleSamples / throttleValues.length) * 100).toFixed(1)) : 0,
    },
    trace: downsampleTrace(samples, 240),
    timestamp: new Date().toISOString(),
  };
}

function downsampleTrace(samples, limit) {
  if (samples.length <= limit) return samples;
  const step = samples.length / limit;
  const result = [];
  for (let i = 0; i < limit; i += 1) {
    result.push(samples[Math.floor(i * step)]);
  }
  return result;
}

function formatTelemetry(sample) {
  const speed = sample.speedKmh == null ? "--" : `${sample.speedKmh.toFixed(1)} km/h`;
  const rpm = sample.rpm == null ? "--" : `${Math.round(sample.rpm)} rpm`;
  const lapMs = sample.timeOnTrackMs > 0 ? `${(sample.timeOnTrackMs / 1000).toFixed(3)}s` : "--";
  const throttle = sample.throttle == null ? "--" : `${sample.throttle.toFixed(0)}%`;
  const brake = sample.brake == null ? "--" : `${sample.brake.toFixed(0)}%`;
  return `speed=${speed} rpm=${rpm} gear=${sample.currentGear} lap=${sample.currentLap} time=${lapMs} throttle=${throttle} brake=${brake}`;
}

function getLocalIps() {
  return Object.values(os.networkInterfaces())
    .flat()
    .filter((entry) => entry && entry.family === "IPv4" && !entry.internal)
    .map((entry) => entry.address);
}

function buildHealthPayload() {
  const ageMs = state.lastPacketAt ? Date.now() - new Date(state.lastPacketAt).getTime() : null;
  let connection = "waiting_for_packets";

  if (!state.ps5Ip) connection = "missing_ps5_ip";
  else if (state.decodedCount > 0 && ageMs != null && ageMs < 5000) connection = "receiving_decoded";
  else if (state.packetCount > 0 && state.decodedCount === 0) connection = "receiving_but_decode_failed";
  else if (state.packetCount > 0) connection = "packet_seen_recently";

  return {
    ok: state.status === "listening",
    connection,
    localIps: getLocalIps(),
    ...state,
    secondsSinceLastPacket: ageMs == null ? null : Number((ageMs / 1000).toFixed(1)),
    hints: buildHints(connection),
  };
}

function buildLiveStatus() {
  const health = buildHealthPayload();
  return {
    type: "agent_status",
    ok: health.ok,
    connection: health.connection,
    ps5Ip: health.ps5Ip,
    listenPort: health.listenPort,
    sendPort: health.sendPort,
    packetCount: health.packetCount,
    decodedCount: health.decodedCount,
    decodeErrors: health.decodeErrors,
    samplesPerSecond: health.samplesPerSecond,
    secondsSinceLastPacket: health.secondsSinceLastPacket,
    lastError: health.lastError,
    hints: health.hints,
    localIps: health.localIps,
    timestamp: new Date().toISOString(),
  };
}

function buildHints(connection) {
  if (connection === "missing_ps5_ip") {
    return ["Use --ps5 <PS5 local IP>, for example --ps5 192.168.1.20."];
  }
  if (connection === "waiting_for_packets") {
    return [
      "Make sure PS5 and PC are on the same LAN.",
      "Enter a GT7 driving session, not only the main menu.",
      "Allow Node.js through Windows Firewall for UDP 33740.",
      "Close other GT7 telemetry apps that may already bind UDP 33740.",
    ];
  }
  if (connection === "receiving_but_decode_failed") {
    return [
      "UDP packets are arriving, so the network path works.",
      "Decode failed. GT7 packet format may have changed, or another app may be forwarding non-GT7 packets.",
    ];
  }
  return ["Telemetry path is active."];
}

function startHealthServer(port) {
  const server = http.createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host || "127.0.0.1"}`);
    if (url.pathname !== "/health") {
      res.writeHead(404, { "content-type": "application/json; charset=utf-8" });
      res.end(JSON.stringify({ ok: false, error: "Not found. Use /health." }));
      return;
    }

    res.writeHead(200, {
      "content-type": "application/json; charset=utf-8",
      "access-control-allow-origin": "*",
      "cache-control": "no-store",
    });
    res.end(JSON.stringify(buildHealthPayload(), null, 2));
  });

  server.on("upgrade", (req, socket) => {
    const url = new URL(req.url || "/", `http://${req.headers.host || "127.0.0.1"}`);
    if (url.pathname !== "/live") {
      socket.write("HTTP/1.1 404 Not Found\r\n\r\n");
      socket.destroy();
      return;
    }

    const key = req.headers["sec-websocket-key"];
    if (!key) {
      socket.write("HTTP/1.1 400 Bad Request\r\n\r\n");
      socket.destroy();
      return;
    }

    const accept = crypto
      .createHash("sha1")
      .update(`${key}258EAFA5-E914-47DA-95CA-C5AB0DC85B11`)
      .digest("base64");

    socket.write(
      "HTTP/1.1 101 Switching Protocols\r\n" +
        "Upgrade: websocket\r\n" +
        "Connection: Upgrade\r\n" +
        `Sec-WebSocket-Accept: ${accept}\r\n\r\n`
    );

    liveClients.add(socket);
    socket.on("close", () => liveClients.delete(socket));
    socket.on("error", () => liveClients.delete(socket));
    sendLiveMessage(socket, buildLiveStatus());
    if (state.lastTelemetry) {
      sendLiveMessage(socket, {
        type: "telemetry_tick",
        telemetry: state.lastTelemetry,
        timestamp: new Date().toISOString(),
      });
    }
  });

  server.listen(port, "127.0.0.1", () => {
    console.log(`[health] http://127.0.0.1:${port}/health`);
  });

  return server;
}

function sendLiveMessage(socket, payload) {
  if (socket.destroyed || !socket.writable) return;
  const data = Buffer.from(JSON.stringify(payload), "utf8");
  let header;
  if (data.length < 126) {
    header = Buffer.from([0x81, data.length]);
  } else if (data.length <= 0xffff) {
    header = Buffer.alloc(4);
    header[0] = 0x81;
    header[1] = 126;
    header.writeUInt16BE(data.length, 2);
  } else {
    header = Buffer.alloc(10);
    header[0] = 0x81;
    header[1] = 127;
    header.writeBigUInt64BE(BigInt(data.length), 2);
  }
  socket.write(Buffer.concat([header, data]));
}

function broadcastLive(payload) {
  for (const client of [...liveClients]) {
    if (client.destroyed || !client.writable) {
      liveClients.delete(client);
      continue;
    }
    sendLiveMessage(client, payload);
  }
}

function startTelemetry(options) {
  Object.assign(state, {
    ps5Ip: options.ps5Ip,
    listenPort: options.listenPort,
    sendPort: options.sendPort,
    healthPort: options.healthPort,
  heartbeatMs: options.heartbeatMs,
    broadcast: options.broadcast,
  });

  const socket = dgram.createSocket("udp4");
  let lastRateCheck = Date.now();
  let packetsAtLastRateCheck = 0;

  socket.on("message", (packet, remote) => {
    const now = Date.now();
    state.packetCount += 1;
    state.lastPacketAt = new Date().toISOString();
    state.lastPacketFrom = `${remote.address}:${remote.port}`;
    state.lastPacketBytes = packet.length;

    try {
      const decoded = decryptGt7Packet(packet);
      const telemetry = parseTelemetry(decoded);
      state.decodedCount += 1;
      state.lastTelemetry = telemetry;
      state.lastError = null;
      const completedLap = updateLapDetection(telemetry, now);

      if (state.decodedCount === 1 || state.decodedCount % 60 === 0) {
        console.log(`[telemetry] decoded #${state.decodedCount}: ${formatTelemetry(telemetry)}`);
      }

      if (completedLap) {
        console.log(
          `[lap] completed ${completedLap.lapSeconds.toFixed(3)}s via ${completedLap.source}; ` +
            `max=${completedLap.summary.maxSpeedKmh}km/h samples=${completedLap.summary.samples}`
        );
        broadcastLive(completedLap);
      }

      if (now - lastLiveTickAt >= 100) {
        lastLiveTickAt = now;
        broadcastLive({
          type: "telemetry_tick",
          telemetry,
          samplesPerSecond: state.samplesPerSecond,
          packetCount: state.packetCount,
          decodedCount: state.decodedCount,
          timestamp: new Date().toISOString(),
        });
      }
    } catch (error) {
      state.decodeErrors += 1;
      state.lastError = error.message;
      if (state.decodeErrors === 1 || state.decodeErrors % 30 === 0) {
        console.warn(`[decode] ${error.message}`);
      }
    }

    if (now - lastRateCheck >= 1000) {
      state.samplesPerSecond = state.packetCount - packetsAtLastRateCheck;
      packetsAtLastRateCheck = state.packetCount;
      lastRateCheck = now;
    }
  });

  socket.on("error", (error) => {
    state.status = "error";
    state.lastError = error.message;
    console.error(`[udp] ${error.message}`);
  });

  socket.bind(options.listenPort, "0.0.0.0", () => {
    state.status = "listening";
    if (options.broadcast) socket.setBroadcast(true);
    const address = socket.address();
    console.log(`[udp] listening on ${address.address}:${address.port}`);
    console.log(`[udp] heartbeat target ${options.ps5Ip}:${options.sendPort}${options.broadcast ? " (broadcast)" : ""}`);
    console.log(`[info] local IPv4 candidates: ${getLocalIps().join(", ") || "none"}`);
    console.log("[info] Start GT7 on PS5 and enter a driving session. Waiting for packets...");
  });

  const heartbeatPayload = Buffer.from("A", "ascii");
  const sendHeartbeat = () => {
    if (!options.ps5Ip) return;
    socket.send(heartbeatPayload, options.sendPort, options.ps5Ip, (error) => {
      state.heartbeatCount += 1;
      state.lastHeartbeatAt = new Date().toISOString();
      if (error) {
        state.lastError = error.message;
        console.warn(`[heartbeat] ${error.message}`);
      } else if (state.heartbeatCount === 1 || state.heartbeatCount % 6 === 0) {
        console.log(`[heartbeat] sent #${state.heartbeatCount} to ${options.ps5Ip}:${options.sendPort}`);
      }
    });
  };

  sendHeartbeat();
  const heartbeatTimer = setInterval(sendHeartbeat, options.heartbeatMs);
  const liveStatusTimer = setInterval(() => {
    broadcastLive(buildLiveStatus());
  }, 2000);
  const statusTimer = setInterval(() => {
    if (state.decodedCount > 0) return;
    const payload = buildHealthPayload();
    console.log(`[status] ${payload.connection}; packets=${state.packetCount}; decoded=${state.decodedCount}; errors=${state.decodeErrors}`);
  }, 15000);

  process.on("SIGINT", () => {
    clearInterval(heartbeatTimer);
    clearInterval(liveStatusTimer);
    clearInterval(statusTimer);
    socket.close();
    console.log("\n[exit] telemetry test stopped");
    process.exit(0);
  });

  return socket;
}

function runSelfTest() {
  const sample = Buffer.alloc(0x128);
  sample.writeUInt32LE(GT7_MAGIC, 0);
  sample.writeFloatLE(100 / 3.6, 0x4c);
  sample.writeFloatLE(7200, 0x3c);
  sample.writeUInt32LE(123, 0x70);
  sample.writeInt16LE(2, 0x74);
  sample.writeInt16LE(5, 0x76);
  sample.writeInt32LE(83456, 0x80);
  sample[0x90] = 0x43;
  sample[0x91] = 82;
  sample[0x92] = 12;

  const parsed = parseTelemetry(sample);
  const keyOk = SALSA_KEY.length === 32;
  const parsedOk =
    Math.round(parsed.speedKmh) === 100 &&
    Math.round(parsed.rpm) === 7200 &&
    parsed.currentLap === 2 &&
    parsed.currentGear === 3 &&
    parsed.suggestedGear === 4 &&
    parsed.timeOnTrackMs === 83456 &&
    buildLapSummary([sampleForLapSummary(parsed, Date.now())], 83.456, "self_test").lapSeconds === 83.456;

  if (!keyOk || !parsedOk) {
    console.error("[self-test] failed", { keyOk, parsed });
    process.exit(1);
  }

  console.log("[self-test] parser sanity check passed");
  console.log(`[self-test] ${formatTelemetry(parsed)}`);
}

function main() {
  try {
    const options = parseArgs(process.argv);
    if (options.selfTest) {
      runSelfTest();
      return;
    }
    if (!options.ps5Ip) {
      printHelp();
      throw new Error("Missing required --ps5 <ip> for live telemetry test.");
    }
    startHealthServer(options.healthPort);
    startTelemetry(options);
  } catch (error) {
    console.error(`[fatal] ${error.message}`);
    process.exit(1);
  }
}

main();
