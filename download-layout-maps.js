const fs = require("node:fs/promises");
const path = require("node:path");

global.window = {};
require("./official-tracks-data.js");

const wikiPage = "https://www.gtwiki.co.uk/wiki/Tracks_in_Gran_Turismo_7";
const layoutDir = path.join(__dirname, "assets", "layout-maps");
const sourceFile = path.join(layoutDir, "sources.json");
const layoutAssetsFile = path.join(__dirname, "layout-assets.js");
const layoutVerificationFile = path.join(__dirname, "layout-verification.js");

const realLengthKm = {
  "Autodromo Nazionale Monza": {
    "Autodromo Nazionale Monza": 5.793,
    "Autodromo Nazionale Monza No Chicane": 5.765,
  },
  "Brands Hatch": {
    "Brands Hatch Grand Prix Circuit": 3.916,
    "Brands Hatch Indy Circuit": 1.944,
  },
  "Circuit de Barcelona-Catalunya": {
    "Circuit de Barcelona-Catalunya GP Layout": 4.657,
    "Circuit de Barcelona-Catalunya GP Layout No Chicane": 4.655,
    "Circuit de Barcelona-Catalunya National Layout": 2.977,
    "Circuit de Barcelona-Catalunya Rallycross Layout": 1.133,
  },
  "Circuit de Spa-Francorchamps": {
    "Circuit de Spa-Francorchamps": 7.004,
    "Spa 24h Layout": 7.004,
  },
  "Goodwood": {
    "Goodwood Motor Circuit": 3.809,
  },
  "24 Heures du Mans Racing Circuit": {
    "24 Heures du Mans Racing Circuit": 13.626,
    "24 Heures du Mans Racing Circuit No Chicane": 13.565,
  },
  "Nürburgring": {
    "Nürburgring 24h": 25.378,
    "Nürburgring Endurance": 23.864,
    "Nürburgring Endurance II": 23.864,
    "Nürburgring Nordschleife": 20.832,
    "Nürburgring Nordschleife Tourist": 20.832,
    "Nürburgring GP": 5.148,
    "Nürburgring Sprint": 3.629,
  },
  "Red Bull Ring": {
    "Red Bull Ring": 4.318,
    "Red Bull Ring Short Track": 2.331,
  },
  "Autopolis": {
    "Autopolis International Racing Course": 4.674,
    "Autopolis International Racing Course - Short Course": 3.022,
  },
  "Fuji International Speedway": {
    "Fuji International Speedway": 4.563,
    "Fuji International Speedway (Short)": 4.526,
  },
  "Tsukuba Circuit": {
    "Tsukuba Circuit": 2.045,
  },
  "Mount Panorama Circuit": {
    "Mount Panorama Motor Racing Circuit": 6.213,
  },
  "Suzuka Circuit": {
    "Suzuka Circuit": 5.807,
    "Suzuka Circuit East Course": 2.243,
  },
  "Autódromo de Interlagos": {
    "Autódromo de Interlagos": 4.309,
  },
  "WeatherTech Raceway Laguna Seca": {
    "WeatherTech Raceway Laguna Seca": 3.602,
  },
  "Daytona International Speedway": {
    "Daytona Road Course": 5.729,
    "Daytona Tri-Oval": 4.023,
  },
  "Watkins Glen International": {
    "Watkins Glen Long Course": 5.430,
    "Watkins Glen Short Course": 3.943,
  },
  "Willow Springs International Raceway": {
    "Willow Springs International Raceway: Big Willow": 4.023,
    "Willow Springs International Raceway: Streets of Willow Springs": 2.897,
    "Willow Springs International Raceway: Streets of Willow Springs Reverse": 2.897,
    "Willow Springs International Raceway: Horse Thief Mile": 1.609,
    "Willow Springs International Raceway: Horse Thief Mile Reverse": 1.609,
  },
  "Michelin Raceway Road Atlanta ": {
    "Michelin Raceway Road Atlanta ": 4.088,
  },
  "Circuit Gilles-Villeneuve": {
    "Circuit Gilles-Villeneuve": 4.361,
  },
  "Yas Marina Circuit": {
    "Yas Marina Circuit": 5.281,
  },
};

function canonicalName(value) {
  let normalized = decodeURIComponent(String(value))
    .replace(/^\/wiki\/File:/, "")
    .replace(/_\(GT7\)\.jpg$/i, "")
    .replace(/_/g, " ")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/:/g, " - ")
    .replace(/International Raceway- /g, "International Raceway - ")
    .replace(/\s*-\s*/g, " - ")
    .replace(/Grand Prix/g, "GP")
    .replace(/Layout ([ABC])/g, "$1")
    .replace(/Shortcut/g, "Short")
    .replace(/Short Course/g, "Short")
    .replace(/\(Short\)/g, "Short")
    .replace(/BB Raceway/g, "Broad Bean Raceway")
    .replace(/Nurburgring Endurance II/g, "Nurburgring Endurance")
    .replace(/Nurburgring Nordschleife Tourist/g, "Nurburgring Nordschleife")
    .replace(/\s+Reverse$/i, "")
    .replace(/\s+/g, " ")
    .trim();

  normalized = normalized
    .replace(/^Spa 24h Layout$/i, "Circuit de Spa - Francorchamps 24h Layout")
    .replace(/Fuji International Speedway Short$/i, "Fuji International Speedway - Short");

  return normalized.toLowerCase();
}

function fileTitleFromHref(href) {
  return decodeURIComponent(href.replace("/wiki/", ""));
}

function fileNameFromTitle(title) {
  return title.replace(/^File:/, "");
}

async function fetchImageUrl(fileTitle) {
  const url = new URL("https://www.gtwiki.co.uk/w/api.php");
  url.searchParams.set("action", "query");
  url.searchParams.set("titles", fileTitle);
  url.searchParams.set("prop", "imageinfo");
  url.searchParams.set("iiprop", "url");
  url.searchParams.set("format", "json");
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Image info failed for ${fileTitle}: ${response.status}`);
  const json = await response.json();
  const page = Object.values(json.query.pages)[0];
  const imageUrl = page?.imageinfo?.[0]?.url;
  if (!imageUrl) throw new Error(`Image URL missing for ${fileTitle}`);
  return imageUrl;
}

function milesToKm(miles) {
  return Number((miles * 1.609344).toFixed(3));
}

function verificationFor(layout) {
  const officialKm = milesToKm(layout.length_v);
  const referenceKm = realLengthKm[layout.nameBase]?.[layout.nameLong];

  if (!referenceKm) {
    return {
      status: "game-only",
      officialLength: layout.length,
      officialLengthKm: officialKm,
      note: "原创/游戏专用布局，无现实赛道基准",
    };
  }

  const deltaKm = Number((officialKm - referenceKm).toFixed(3));
  return {
    status: Math.abs(deltaKm) <= 0.08 ? "verified" : "variant",
    officialLength: layout.length,
    officialLengthKm: officialKm,
    realLengthKm: referenceKm,
    deltaKm,
    note: Math.abs(deltaKm) <= 0.08 ? "GT7 官方长度与真实赛道参考一致" : "GT7 游戏布局与真实参考存在可见差异",
  };
}

async function main() {
  await fs.mkdir(layoutDir, { recursive: true });

  const html = await (await fetch(wikiPage)).text();
  const hrefs = [
    ...new Set([...html.matchAll(/\/wiki\/File:[^"<>]*\(GT7\)\.jpg/g)].map((match) => decodeURIComponent(match[0]))),
  ];
  const fileByCanonical = new Map(hrefs.map((href) => [canonicalName(href), href]));
  const sourceByHref = {};
  const layoutAssets = {};
  const layoutVerification = {};

  for (const layout of Object.values(window.OfficialTracks)) {
    const href = fileByCanonical.get(canonicalName(layout.nameLong));
    if (!href) throw new Error(`No GT Wiki layout map for ${layout.nameLong}`);

    const fileTitle = fileTitleFromHref(href);
    if (!sourceByHref[href]) {
      const imageUrl = await fetchImageUrl(fileTitle);
      sourceByHref[href] = {
        fileTitle,
        fileName: fileNameFromTitle(fileTitle),
        filePage: `https://www.gtwiki.co.uk${href}`,
        imageUrl,
      };
    }

    const source = sourceByHref[href];
    const target = path.join(layoutDir, `${layout.id}.jpg`);
    try {
      await fs.access(target);
    } catch {
      const imageResponse = await fetch(source.imageUrl);
      if (!imageResponse.ok) throw new Error(`Image download failed for ${layout.nameLong}: ${imageResponse.status}`);
      await fs.writeFile(target, Buffer.from(await imageResponse.arrayBuffer()));
    }

    layoutAssets[layout.id] = {
      mapSrc: `./assets/layout-maps/${layout.id}.jpg`,
      sourceName: "GT Wiki",
      sourceUrl: source.filePage,
      sourceType: "GT7 layout map",
      fileName: source.fileName,
    };
    layoutVerification[layout.id] = verificationFor(layout);
  }

  await fs.writeFile(sourceFile, JSON.stringify(sourceByHref, null, 2));
  await fs.writeFile(layoutAssetsFile, `window.LayoutAssets = ${JSON.stringify(layoutAssets, null, 2)};\n`);
  await fs.writeFile(layoutVerificationFile, `window.LayoutVerification = ${JSON.stringify(layoutVerification, null, 2)};\n`);

  console.log(`Generated ${Object.keys(layoutAssets).length} layout assets from ${Object.keys(sourceByHref).length} source maps.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
