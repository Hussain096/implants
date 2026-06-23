// ============================================
// Pure Node.js Pre-renderer (No Browser Required)
// Works on Cloudflare Pages, Vercel, GitHub Actions
// ============================================

import fs from 'fs';
import path from 'path';

const DIST_DIR = path.resolve('dist');
const SITE_URL = 'https://breasts-implants.com';

// ── Mock browser globals BEFORE any imports ──
global.window = {
  location: { pathname: '/', hostname: 'breasts-implants.com', origin: SITE_URL },
  history: { pushState: () => {}, replaceState: () => {} },
  addEventListener: () => {},
  removeEventListener: () => {},
  matchMedia: () => ({ matches: false, addEventListener: () => {} }),
  scrollTo: () => {},
  dataLayer: [],
};
global.document = {
  documentElement: { classList: { add: () => {}, contains: () => false, remove: () => {} } },
  querySelector: () => null,
  querySelectorAll: () => [],
  createElement: () => ({
    setAttribute: () => {}, getAttribute: () => null,
    appendChild: () => {}, textContent: '', type: '', dataset: {},
    setAttribute: () => {},
  }),
  head: { appendChild: () => {}, querySelectorAll: () => [] },
  body: { classList: { add: () => {}, remove: () => {}, toggle: () => {}, contains: () => false } },
  title: '',
  addEventListener: () => {},
};
global.localStorage = { getItem: () => null, setItem: () => {} };
global.sessionStorage = { getItem: () => null, setItem: () => {} };
global.requestAnimationFrame = (fn) => fn();
global.IntersectionObserver = class { observe() {} disconnect() {} };
global.MutationObserver = class { observe() {} disconnect() {} };
global.history = global.window.history;
global.location = global.window.location;
Object.defineProperty(global, 'navigator', {
  value: { userAgent: 'node' },
  writable: true,
  configurable: true,
});

// ── Load index.html template ──
const indexTemplate = fs.readFileSync(path.join(DIST_DIR, 'index.html'), 'utf8');

function setRoute(routePath) {
  global.window.location.pathname = routePath;
  global.location.pathname = routePath;
}

function buildHtml(routePath, result) {
  let html = indexTemplate;

  // Inject rendered content
  html = html.replace(
    '<div id="app"></div>',
    `<div id="app">${result.html || ''}</div>`
  );

  // Title
  if (result.title) {
    html = html.replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(result.title)}</title>`);
    html = html.replace(/(<meta property="og:title" content=")[^"]*"/, `$1${escapeAttr(result.title)}"`);
    html = html.replace(/(<meta name="twitter:title" content=")[^"]*"/, `$1${escapeAttr(result.title)}"`);
  }

  // Description (strip any stray HTML tags)
  if (result.description) {
    const desc = result.description.replace(/<[^>]+>/g, '');
    html = html.replace(/(<meta name="description" content=")[^"]*"/, `$1${escapeAttr(desc)}"`);
    html = html.replace(/(<meta property="og:description" content=")[^"]*"/, `$1${escapeAttr(desc)}"`);
    html = html.replace(/(<meta name="twitter:description" content=")[^"]*"/, `$1${escapeAttr(desc)}"`);
  }

  // Canonical + OG URL
  const canonicalUrl = `${SITE_URL}${routePath}`;
  html = html.replace(/(<link rel="canonical" href=")[^"]*"/, `$1${canonicalUrl}"`);
  html = html.replace(/(<meta property="og:url" content=")[^"]*"/, `$1${canonicalUrl}"`);

  // OG type
  if (result.ogType) {
    html = html.replace(/(<meta property="og:type" content=")[^"]*"/, `$1${result.ogType}"`);
  }

  // Robots
  if (result.robots) {
    html = html.replace(/(<meta name="robots" content=")[^"]*"/, `$1${result.robots}"`);
  }

  // Inject route schema
  if (result.schema) {
    const schemas = Array.isArray(result.schema) ? result.schema : [result.schema];
    const schemaScript = `<script type="application/ld+json" data-route-schema="true">${JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': schemas,
    })}</script>`;
    html = html.replace('</head>', `  ${schemaScript}\n</head>`);
  }

  return html;
}

function escapeHtml(str) {
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function escapeAttr(str) {
  return String(str).replace(/"/g, '&quot;').replace(/</g, '&lt;');
}

function saveHtml(routePath, html) {
  const filePath = routePath === '/'
    ? path.join(DIST_DIR, 'index.html')
    : path.join(DIST_DIR, routePath, 'index.html');
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, html, 'utf8');
}

async function prerender() {
  console.log('\n🔨 Pre-rendering pages (pure Node.js)...\n');

  // Dynamic imports AFTER globals are set
  const [
    { articlePage },
    { hubPage },
    { homePage },
    { salineArticle },
    { siliconeArticle },
    { salineVsSiliconeArticle },
    { gummyBearArticle },
    { structuredSalineArticle },
    { shapesProfilesArticle },
    { roundVsTeardropArticle },
    { implantProfilesArticle },
    { breastAugmentationSurgeryArticle },
    { implantPlacementArticle },
    { incisionTypesArticle },
    { recoveryTimelineArticle },
    { choosingSurgeonArticle },
    { breastLiftArticle },
    { breastLiftAugmentationArticle },
    { breastImplantRemovalArticle },
    { breastReconstructionArticle },
    { breastImplantCostArticle },
    { financingOptionsArticle },
    { insuranceCoverageArticle },
    { capsularContractureArticle },
    { biiArticle },
    { ruptureArticle },
    { biaAlclArticle },
    { infectionArticle },
    { brandsComparisonArticle },
    { allerganArticle },
    { mentorArticle },
    { sientraArticle },
    { motivaArticle },
    { fatTransferArticle },
    { compositeAugmentationArticle },
    { nonSurgicalOptionsArticle },
    { fdaSafetyDataArticle },
    { longTermStudiesArticle },
    { emergingResearchArticle },
    { ccSizeChartPage },
    { questionsPage },
    { patientGuidesPage },
    { fdaChecklistPage },
    { aboutPage, medicalDisclaimerPage, medicalReviewPolicyPage, privacyPolicyPage, termsOfUsePage, editorialPolicyPage },
    { medicalReviewersPage },
    { contactPage },
  ] = await Promise.all([
    import('./src/pages/article.js'),
    import('./src/pages/hub.js'),
    import('./src/pages/home.js'),
    import('./src/data/articles/saline.js'),
    import('./src/data/articles/silicone.js'),
    import('./src/data/articles/saline-vs-silicone.js'),
    import('./src/data/articles/gummy-bear.js'),
    import('./src/data/articles/structured-saline.js'),
    import('./src/data/articles/shapes-profiles.js'),
    import('./src/data/articles/round-vs-teardrop.js'),
    import('./src/data/articles/implant-profiles.js'),
    import('./src/data/articles/breast-augmentation-surgery.js'),
    import('./src/data/articles/implant-placement.js'),
    import('./src/data/articles/incision-types.js'),
    import('./src/data/articles/recovery-timeline.js'),
    import('./src/data/articles/choosing-surgeon.js'),
    import('./src/data/articles/breast-lift.js'),
    import('./src/data/articles/breast-lift-augmentation.js'),
    import('./src/data/articles/breast-implant-removal.js'),
    import('./src/data/articles/breast-reconstruction.js'),
    import('./src/data/articles/breast-implant-cost.js'),
    import('./src/data/articles/financing-options.js'),
    import('./src/data/articles/insurance-coverage.js'),
    import('./src/data/articles/capsular-contracture.js'),
    import('./src/data/articles/breast-implant-illness.js'),
    import('./src/data/articles/rupture.js'),
    import('./src/data/articles/bia-alcl.js'),
    import('./src/data/articles/infection.js'),
    import('./src/data/articles/brands-comparison.js'),
    import('./src/data/articles/allergan.js'),
    import('./src/data/articles/mentor.js'),
    import('./src/data/articles/sientra.js'),
    import('./src/data/articles/motiva.js'),
    import('./src/data/articles/fat-transfer.js'),
    import('./src/data/articles/composite-augmentation.js'),
    import('./src/data/articles/non-surgical-options.js'),
    import('./src/data/articles/fda-safety-data.js'),
    import('./src/data/articles/long-term-studies.js'),
    import('./src/data/articles/emerging-research.js'),
    import('./src/pages/cc-size-chart.js'),
    import('./src/pages/questions.js'),
    import('./src/pages/patient-guides.js'),
    import('./src/pages/fda-checklist.js'),
    import('./src/pages/governance.js'),
    import('./src/pages/medical-reviewers.js'),
    import('./src/pages/contact.js'),
  ]);

  const art = (data) => () => Promise.resolve(articlePage(data));
  const hub = (id) => () => Promise.resolve(hubPage(id));

  const routes = [
    ['/', () => Promise.resolve(homePage())],
    ['/breast-implant-types/', hub('implant-types')],
    ['/shapes-and-sizes/', hub('shapes-sizes')],
    ['/breast-implant-procedures/', hub('procedure')],
    ['/costs-financing/', hub('costs-financing')],
    ['/breast-implants-risks-and-complications/', hub('risks-complications')],
    ['/breast-implant-brands/', hub('brands')],
    ['/breast-implants-alternatives/', hub('alternatives')],
    ['/research-and-data/', hub('research')],
    ['/saline-breast-implants/', art(salineArticle)],
    ['/silicone-breast-implants/', art(siliconeArticle)],
    ['/saline-vs-silicone-implants/', art(salineVsSiliconeArticle)],
    ['/gummy-bear-implants/', art(gummyBearArticle)],
    ['/structured-saline-implants/', art(structuredSalineArticle)],
    ['/breast-implants-shapes/', art(shapesProfilesArticle)],
    ['/round-vs-teardrop-implants/', art(roundVsTeardropArticle)],
    ['/breast-implant-profiles/', art(implantProfilesArticle)],
    ['/breast-implants-cc-size-chart/', () => Promise.resolve(ccSizeChartPage())],
    ['/breast-augmentation-surgery/', art(breastAugmentationSurgeryArticle)],
    ['/breast-implant-placement/', art(implantPlacementArticle)],
    ['/breast-implant-incision-types/', art(incisionTypesArticle)],
    ['/breast-augmentation-recovery-timeline/', art(recoveryTimelineArticle)],
    ['/questions-for-surgeon/', () => Promise.resolve(questionsPage())],
    ['/choosing-surgeon/', art(choosingSurgeonArticle)],
    ['/breast-lift/', art(breastLiftArticle)],
    ['/breast-lift-with-augmentation/', art(breastLiftAugmentationArticle)],
    ['/breast-implant-removal/', art(breastImplantRemovalArticle)],
    ['/breast-reconstruction/', art(breastReconstructionArticle)],
    ['/breast-implant-cost/', art(breastImplantCostArticle)],
    ['/breast-implant-financing-options/', art(financingOptionsArticle)],
    ['/insurance-coverage-for-breast-implants/', art(insuranceCoverageArticle)],
    ['/capsular-contracture/', art(capsularContractureArticle)],
    ['/breast-implant-illness/', art(biiArticle)],
    ['/breast-implant-rupture/', art(ruptureArticle)],
    ['/bia-alcl/', art(biaAlclArticle)],
    ['/breast-implant-infection/', art(infectionArticle)],
    ['/breast-implant-brands-comparison/', art(brandsComparisonArticle)],
    ['/allergan/', art(allerganArticle)],
    ['/mentor/', art(mentorArticle)],
    ['/sientra/', art(sientraArticle)],
    ['/motiva/', art(motivaArticle)],
    ['/fat-transfer-breast-augmentation/', art(fatTransferArticle)],
    ['/composite-breast-augmentation/', art(compositeAugmentationArticle)],
    ['/non-surgical-options/', art(nonSurgicalOptionsArticle)],
    ['/fda-breast-implant-safety-data/', art(fdaSafetyDataArticle)],
    ['/breast-implant-long-term-studies/', art(longTermStudiesArticle)],
    ['/emerging-research-in-breast-implant/', art(emergingResearchArticle)],
    ['/patient-guides/', () => Promise.resolve(patientGuidesPage())],
    ['/fda-checklist/', () => Promise.resolve(fdaChecklistPage())],
    ['/about/', () => Promise.resolve(aboutPage())],
    ['/medical-disclaimer/', () => Promise.resolve(medicalDisclaimerPage())],
    ['/medical-review-policy/', () => Promise.resolve(medicalReviewPolicyPage())],
    ['/privacy/', () => Promise.resolve(privacyPolicyPage())],
    ['/terms/', () => Promise.resolve(termsOfUsePage())],
    ['/editorial-policy/', () => Promise.resolve(editorialPolicyPage())],
    ['/medical-reviewers/', () => Promise.resolve(medicalReviewersPage())],
    ['/contact/', () => Promise.resolve(contactPage())],
  ];

  let success = 0;
  let failed = 0;

  for (const [routePath, getFn] of routes) {
    try {
      setRoute(routePath);
      const result = await getFn();
      const html = buildHtml(routePath, result);
      saveHtml(routePath, html);
      const sizeKB = (Buffer.byteLength(html) / 1024).toFixed(1);
      console.log(`  ✅ ${routePath} (${sizeKB} KB)`);
      success++;
    } catch (err) {
      console.log(`  ❌ ${routePath} — ${err.message}`);
      failed++;
    }
  }

  console.log(`\n========================================`);
  console.log(`  Pre-rendering complete!`);
  console.log(`  ✅ Success: ${success}/${routes.length}`);
  if (failed > 0) console.log(`  ❌ Failed:  ${failed}`);
  console.log(`========================================\n`);

  if (failed > 0) process.exit(1);
}

prerender().catch((err) => {
  console.error('Pre-rendering failed:', err);
  process.exit(1);
});
