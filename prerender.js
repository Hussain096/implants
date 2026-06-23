// ============================================
// Pre-render Script for Static HTML Generation
// Uses Vite's preview server for reliable serving.
// ============================================

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer } from 'http';
import puppeteer from 'puppeteer';

const DIST_DIR = path.resolve('dist');
const PORT = 4399;
const BASE_URL = `http://localhost:${PORT}`;

// All routes to pre-render
const ROUTES = [
  '/',
  '/breast-implant-types/',
  '/shapes-and-sizes/',
  '/breast-implant-procedures/',
  '/costs-financing/',
  '/breast-implants-risks-and-complications/',
  '/breast-implant-brands/',
  '/breast-implants-alternatives/',
  '/research-and-data/',
  '/saline-breast-implants/',
  '/silicone-breast-implants/',
  '/saline-vs-silicone-implants/',
  '/gummy-bear-implants/',
  '/structured-saline-implants/',
  '/breast-implants-shapes/',
  '/round-vs-teardrop-implants/',
  '/breast-implant-profiles/',
  '/breast-implants-cc-size-chart/',
  '/breast-augmentation-surgery/',
  '/breast-implant-placement/',
  '/breast-implant-incision-types/',
  '/breast-augmentation-recovery-timeline/',
  '/questions-for-surgeon/',
  '/choosing-surgeon/',
  '/breast-lift/',
  '/breast-lift-with-augmentation/',
  '/breast-implant-removal/',
  '/breast-reconstruction/',
  '/breast-implant-cost/',
  '/breast-implant-financing-options/',
  '/insurance-coverage-for-breast-implants/',
  '/capsular-contracture/',
  '/breast-implant-illness/',
  '/breast-implant-rupture/',
  '/bia-alcl/',
  '/breast-implant-infection/',
  '/breast-implant-brands-comparison/',
  '/allergan/',
  '/mentor/',
  '/sientra/',
  '/motiva/',
  '/fat-transfer-breast-augmentation/',
  '/composite-breast-augmentation/',
  '/non-surgical-options/',
  '/fda-breast-implant-safety-data/',
  '/breast-implant-long-term-studies/',
  '/emerging-research-in-breast-implant/',
  '/patient-guides/',
  '/fda-checklist/',
  '/about/',
  '/medical-disclaimer/',
  '/medical-review-policy/',
  '/privacy/',
  '/terms/',
  '/editorial-policy/',
  '/medical-reviewers/',
  '/contact/',
];

// Simple static file server that serves index.html for all routes (SPA fallback)
function startServer() {
  return new Promise((resolve) => {
    const mimeTypes = {
      '.html': 'text/html',
      '.js': 'application/javascript',
      '.css': 'text/css',
      '.json': 'application/json',
      '.webp': 'image/webp',
      '.svg': 'image/svg+xml',
      '.png': 'image/png',
      '.txt': 'text/plain',
      '.xml': 'application/xml',
      '.woff2': 'font/woff2',
      '.woff': 'font/woff',
    };

    const server = createServer((req, res) => {
      let filePath = path.join(DIST_DIR, req.url === '/' ? 'index.html' : req.url);

      // If file exists, serve it
      if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
        const ext = path.extname(filePath);
        const mime = mimeTypes[ext] || 'application/octet-stream';
        res.writeHead(200, { 'Content-Type': mime });
        fs.createReadStream(filePath).pipe(res);
      } else {
        // SPA fallback: serve index.html for all unmatched routes
        const indexPath = path.join(DIST_DIR, 'index.html');
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream(indexPath).pipe(res);
      }
    });

    server.listen(PORT, () => {
      console.log(`  📡 Static server running on port ${PORT}`);
      resolve(server);
    });
  });
}

async function prerender() {
  console.log(`\n🔨 Pre-rendering ${ROUTES.length} routes...\n`);

  // 1. Start static server
  const server = await startServer();

  // 2. Launch headless browser
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  let success = 0;
  let failed = 0;

  // 3. Render each route
  for (const route of ROUTES) {
    try {
      const page = await browser.newPage();

      // Block images/fonts to speed up rendering
      await page.setRequestInterception(true);
      page.on('request', (req) => {
        const type = req.resourceType();
        if (['image', 'font', 'media'].includes(type)) {
          req.abort();
        } else {
          req.continue();
        }
      });

      await page.goto(`${BASE_URL}${route}`, {
        waitUntil: 'networkidle0',
        timeout: 15000,
      });

      // Wait for the app to render content
      await page.waitForSelector('#app', { timeout: 5000 });
      // Extra wait for async article loading
      await new Promise(r => setTimeout(r, 800));

      // Get the full rendered HTML
      const html = await page.content();
      await page.close();

      // Determine output path
      const filePath = route === '/'
        ? path.join(DIST_DIR, 'index.html')
        : path.join(DIST_DIR, route, 'index.html');

      // Create directory if needed
      const dir = path.dirname(filePath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }

      fs.writeFileSync(filePath, html, 'utf8');

      const sizeKB = (Buffer.byteLength(html) / 1024).toFixed(1);
      console.log(`  ✅ ${route} (${sizeKB} KB)`);
      success++;
    } catch (err) {
      console.log(`  ❌ ${route} — ${err.message}`);
      failed++;
    }
  }

  // Cleanup
  await browser.close();
  server.close();

  console.log(`\n========================================`);
  console.log(`  Pre-rendering complete!`);
  console.log(`  ✅ Success: ${success}/${ROUTES.length}`);
  if (failed > 0) console.log(`  ❌ Failed: ${failed}`);
  console.log(`========================================\n`);

  if (failed > 0) process.exit(1);
}

prerender().catch((err) => {
  console.error('Pre-rendering failed:', err);
  process.exit(1);
});
