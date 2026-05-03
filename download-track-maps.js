const fs = require('fs');
const path = require('path');
const html = fs.readFileSync('gtsport-tracklist.html', 'utf8');
const outDir = path.join('assets', 'track-maps');
fs.mkdirSync(outDir, { recursive: true });
const aliases = {
  'WeatherTech Raceway Laguna Seca': 'c75e61',
  'Circuit de Spa-Francorchamps': '000971',
  'Goodwood Motor Circuit': 'ee72eb',
  'AUTOPOLIS INTERNATIONAL RACING COURSE': '8d9953',
  'Circuit de Barcelona-Catalunya   Grand Prix Layout': '083de2',
  'Fuji Speedway': '664e17',
  'Red Bull Ring': 'f99788',
  'Circuit de la Sarthe': '1d5980',
  'Tsukuba Circuit': 'c5de8a',
  'Autodromo Nazionale Monza': 'f8bd64',
  'Autódromo De Interlagos': 'fe330b',
  'Nürburgring': '246f6d',
  'Willow Springs International Raceway': 'fb6d1f',
  'Brands Hatch': 'f3d2aa',
  'Mount Panorama Motor Racing Circuit': '28b64f',
  'Suzuka Circuit': 'fd167d',
  'Sardegna - Road Track': '748156',
  'Special Stage Route X': 'de15df',
  'Sainte-Croix Circuit': 'a768c9',
  'Kyoto Driving Park': '16ccbf',
  'Tokyo Expressway': 'e9dd33',
  'Dragon Trail': '08df62',
  'Autodromo Lago Maggiore': '39f155',
  'Northern Isle Speedway': '512b99',
  'Blue Moon Bay Speedway': '971481',
  'Broad Bean Raceway': '184eaa',
  'Alsace': 'bbe708',
  'Fishermans Ranch': 'f2875b',
  'Sardegna': '71bfba',
  'Colorado Springs': 'cea600',
};
const urls = {};
for (const block of html.matchAll(/<div class="tracklist">([\s\S]*?)<\/div>/g)) {
  const content = block[1];
  const name = content.match(/<h2>([\s\S]*?)<\/h2>/)?.[1]?.replace(/<[^>]+>/g, '').trim();
  const map = content.match(/<dl class="track_map">[\s\S]*?<img src="([^"]+)"/)?.[1];
  if (name && map && aliases[name]) urls[aliases[name]] = `https://www.gran-turismo.com${map}`;
}
(async () => {
  for (const [id, url] of Object.entries(urls)) {
    const ext = path.extname(new URL(url).pathname) || '.png';
    const res = await fetch(url);
    if (!res.ok) throw new Error(`${res.status} ${url}`);
    fs.writeFileSync(path.join(outDir, `${id}${ext}`), Buffer.from(await res.arrayBuffer()));
  }
  fs.writeFileSync(path.join(outDir, 'sources.json'), JSON.stringify(urls, null, 2));
  console.log(`downloaded ${Object.keys(urls).length}`);
})();
