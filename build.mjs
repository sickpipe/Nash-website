// Builds the site into dist/: every page in src/pages rendered through the shared layout,
// plus everything in public/ copied as is. No dependencies: `node build.mjs`.
import { cpSync, mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { page, COMPANY } from './src/site.mjs';
import home from './src/pages/home.mjs';
import services from './src/pages/services.mjs';
import other from './src/pages/other.mjs';

const OUT = 'dist';
const pages = [home, ...services, ...other];

rmSync(OUT, { recursive: true, force: true });
cpSync('public', OUT, { recursive: true });

for (const p of pages) {
  const file = join(OUT, p.file ?? join(p.path, 'index.html'));
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, page(p));
}

const urls = pages.filter((p) => !p.file).map((p) => `  <url><loc>${COMPANY.url}${p.path}</loc></url>`);
writeFileSync(join(OUT, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>
`);

console.log(`Built ${pages.length} pages into ${OUT}/`);
