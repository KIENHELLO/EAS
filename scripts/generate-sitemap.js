import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { universities } from '../src/data/universities.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sitemapPath = path.join(__dirname, '../public/sitemap.xml');
const currentDate = new Date().toISOString().split('T')[0];

const urls = [
  { loc: 'https://eas-tuition.onrender.com/', priority: '1.0', changefreq: 'weekly' },
  { loc: 'https://eas-tuition.onrender.com/universities', priority: '0.9', changefreq: 'weekly' },
  { loc: 'https://eas-tuition.onrender.com/compare', priority: '0.8', changefreq: 'monthly' }
];

for (const u of universities) {
  urls.push({
    loc: `https://eas-tuition.onrender.com/university/${u.id}`,
    priority: '0.7',
    changefreq: 'monthly'
  });
}

const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>
`;

fs.writeFileSync(sitemapPath, sitemapContent);
const distSitemapPath = path.join(__dirname, '../dist/sitemap.xml');
if (fs.existsSync(path.dirname(distSitemapPath))) {
  fs.writeFileSync(distSitemapPath, sitemapContent);
  console.log(`Successfully generated public/sitemap.xml and dist/sitemap.xml with ${urls.length} links.`);
} else {
  console.log(`Successfully generated public/sitemap.xml with ${urls.length} links.`);
}
