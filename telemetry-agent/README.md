# GT7 Telemetry Agent Test

This is a local-only connectivity tester for Gran Turismo 7 telemetry.

It listens on UDP `33740`, sends heartbeat packets to the PS5 on UDP `33739`,
decrypts incoming telemetry packets, and exposes a simple health endpoint:

```powershell
npm run telemetry -- --ps5 192.168.1.20
```

Then open:

```text
http://127.0.0.1:8787/health
```

The main site connects to the live stream at:

```text
ws://127.0.0.1:8787/live
```

Useful options:

```text
--ps5 <ip>              PS5 local network IP address
--listen-port <port>    Local UDP receive port, default 33740
--send-port <port>      PS5 UDP heartbeat port, default 33739
--health-port <port>    Local HTTP health port, default 8787
--heartbeat-ms <ms>     Heartbeat interval, default 10000
--broadcast             Send heartbeat as LAN broadcast
--self-test             Run parser sanity checks and exit
```

Notes:

- GT7 telemetry is a community reverse-engineered interface, not an official
  Polyphony Digital API.
- The PS5 and this PC must be on the same LAN.
- Windows Firewall must allow Node.js to receive UDP traffic on `33740`.
- Only one app can usually bind UDP `33740` at a time. Close other GT7 telemetry
  dashboards before testing this agent.
- If direct PS5 IP receives no packets, try broadcast mode:

```powershell
npm run telemetry -- --ps5 255.255.255.255 --broadcast
```
