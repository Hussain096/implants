// ============================================
// Breasts-Implants.com — Main Entry Point
// ============================================

import './style.css';
import { route, initRouter } from './router.js';
import { homePage } from './pages/home.js';
import { hubPage } from './pages/hub.js';
import { articlePage } from './pages/article.js';
import { aboutPage, medicalDisclaimerPage, medicalReviewPolicyPage, privacyPolicyPage, termsOfUsePage, editorialPolicyPage } from './pages/governance.js';
import { questionsPage } from './pages/questions.js';
import { ccSizeChartPage } from './pages/cc-size-chart.js';
import { fdaChecklistPage } from './pages/fda-checklist.js';
import { patientGuidesPage } from './pages/patient-guides.js';
import { medicalReviewersPage } from './pages/medical-reviewers.js';
import { contactPage } from './pages/contact.js';

// ============================================
// Dark Mode: Apply saved/system preference BEFORE render
// ============================================
(function initTheme() {
  const saved = localStorage.getItem('theme');
  if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
  }
})();

const lazyArticle = (loader, exportName) => async () => {
  const module = await loader();
  return articlePage(module[exportName]);
};

// ============================================
// Register Routes
// ============================================

// Homepage
route('/', homePage);

// Silo Hub Pages
route('/breast-implant-types/', () => hubPage('implant-types'));
route('/shapes-and-sizes/', () => hubPage('shapes-sizes'));
route('/breast-implant-procedures/', () => hubPage('procedure'));
route('/costs-financing/', () => hubPage('costs-financing'));
route('/breast-implants-risks-and-complications/', () => hubPage('risks-complications'));
route('/breast-implant-brands/', () => hubPage('brands'));
route('/breast-implants-alternatives/', () => hubPage('alternatives'));
route('/research-and-data/', () => hubPage('research'));

// Article Pages — Implant Types Silo
route('/saline-breast-implants/', lazyArticle(() => import('./data/articles/saline.js'), 'salineArticle'));
route('/silicone-breast-implants/', lazyArticle(() => import('./data/articles/silicone.js'), 'siliconeArticle'));
route('/saline-vs-silicone-implants/', lazyArticle(() => import('./data/articles/saline-vs-silicone.js'), 'salineVsSiliconeArticle'));
route('/gummy-bear-implants/', lazyArticle(() => import('./data/articles/gummy-bear.js'), 'gummyBearArticle'));
route('/structured-saline-implants/', lazyArticle(() => import('./data/articles/structured-saline.js'), 'structuredSalineArticle'));

// Article Pages — Shapes & Sizes Silo
route('/breast-implants-shapes/', lazyArticle(() => import('./data/articles/shapes-profiles.js'), 'shapesProfilesArticle'));
route('/round-vs-teardrop-implants/', lazyArticle(() => import('./data/articles/round-vs-teardrop.js'), 'roundVsTeardropArticle'));
route('/breast-implant-profiles/', lazyArticle(() => import('./data/articles/implant-profiles.js'), 'implantProfilesArticle'));
route('/breast-implants-cc-size-chart/', ccSizeChartPage);

// Article Pages — Procedure Silo
route('/breast-augmentation-surgery/', lazyArticle(() => import('./data/articles/breast-augmentation-surgery.js'), 'breastAugmentationSurgeryArticle'));
route('/breast-implant-placement/', lazyArticle(() => import('./data/articles/implant-placement.js'), 'implantPlacementArticle'));
route('/breast-implant-incision-types/', lazyArticle(() => import('./data/articles/incision-types.js'), 'incisionTypesArticle'));
route('/breast-augmentation-recovery-timeline/', lazyArticle(() => import('./data/articles/recovery-timeline.js'), 'recoveryTimelineArticle'));
route('/questions-for-surgeon/', questionsPage);
route('/choosing-surgeon/', lazyArticle(() => import('./data/articles/choosing-surgeon.js'), 'choosingSurgeonArticle'));
route('/breast-lift/', lazyArticle(() => import('./data/articles/breast-lift.js'), 'breastLiftArticle'));
route('/breast-lift-with-augmentation/', lazyArticle(() => import('./data/articles/breast-lift-augmentation.js'), 'breastLiftAugmentationArticle'));
route('/breast-implant-removal/', lazyArticle(() => import('./data/articles/breast-implant-removal.js'), 'breastImplantRemovalArticle'));
route('/breast-reconstruction/', lazyArticle(() => import('./data/articles/breast-reconstruction.js'), 'breastReconstructionArticle'));

// Article Pages — Costs & Financing Silo
route('/breast-implant-cost/', lazyArticle(() => import('./data/articles/breast-implant-cost.js'), 'breastImplantCostArticle'));
route('/breast-implant-financing-options/', lazyArticle(() => import('./data/articles/financing-options.js'), 'financingOptionsArticle'));
route('/insurance-coverage-for-breast-implants/', lazyArticle(() => import('./data/articles/insurance-coverage.js'), 'insuranceCoverageArticle'));

// Article Pages — Risks & Complications Silo
route('/capsular-contracture/', lazyArticle(() => import('./data/articles/capsular-contracture.js'), 'capsularContractureArticle'));
route('/breast-implant-illness/', lazyArticle(() => import('./data/articles/breast-implant-illness.js'), 'biiArticle'));
route('/breast-implant-rupture/', lazyArticle(() => import('./data/articles/rupture.js'), 'ruptureArticle'));
route('/bia-alcl/', lazyArticle(() => import('./data/articles/bia-alcl.js'), 'biaAlclArticle'));
route('/breast-implant-infection/', lazyArticle(() => import('./data/articles/infection.js'), 'infectionArticle'));

// Article Pages — Brands Silo
route('/breast-implant-brands-comparison/', lazyArticle(() => import('./data/articles/brands-comparison.js'), 'brandsComparisonArticle'));
route('/allergan/', lazyArticle(() => import('./data/articles/allergan.js'), 'allerganArticle'));
route('/mentor/', lazyArticle(() => import('./data/articles/mentor.js'), 'mentorArticle'));
route('/sientra/', lazyArticle(() => import('./data/articles/sientra.js'), 'sientraArticle'));
route('/motiva/', lazyArticle(() => import('./data/articles/motiva.js'), 'motivaArticle'));

// Article Pages — Alternatives Silo
route('/fat-transfer-breast-augmentation/', lazyArticle(() => import('./data/articles/fat-transfer.js'), 'fatTransferArticle'));
route('/composite-breast-augmentation/', lazyArticle(() => import('./data/articles/composite-augmentation.js'), 'compositeAugmentationArticle'));
route('/non-surgical-options/', lazyArticle(() => import('./data/articles/non-surgical-options.js'), 'nonSurgicalOptionsArticle'));

// Article Pages — Research Silo
route('/fda-breast-implant-safety-data/', lazyArticle(() => import('./data/articles/fda-safety-data.js'), 'fdaSafetyDataArticle'));
route('/breast-implant-long-term-studies/', lazyArticle(() => import('./data/articles/long-term-studies.js'), 'longTermStudiesArticle'));
route('/emerging-research-in-breast-implant/', lazyArticle(() => import('./data/articles/emerging-research.js'), 'emergingResearchArticle'));

// Patient Tools
route('/patient-guides/', patientGuidesPage);
route('/fda-checklist/', fdaChecklistPage);

// Governance / Trust Pages
route('/about/', aboutPage);
route('/medical-disclaimer/', medicalDisclaimerPage);
route('/medical-review-policy/', medicalReviewPolicyPage);
route('/privacy/', privacyPolicyPage);
route('/terms/', termsOfUsePage);
route('/editorial-policy/', editorialPolicyPage);
route('/medical-reviewers/', medicalReviewersPage);
route('/contact/', contactPage);

// 404 fallback
route('*', () => ({
  html: `
    <div style="min-height:80vh;display:flex;align-items:center;justify-content:center;">
      <div style="text-align:center;max-width:480px;padding:2rem;">
        <div style="font-size:4rem;margin-bottom:1rem;">🔍</div>
        <h1 style="margin-bottom:0.5rem;">Page Not Found</h1>
        <p style="color:var(--color-text-muted);margin-bottom:1.5rem;">
          The page you're looking for doesn't exist yet. We're continuously expanding our content library.
        </p>
        <a href="/" class="btn btn-primary">← Return to Homepage</a>
      </div>
    </div>
  `,
  title: 'Page Not Found | Breasts-Implants.com',
  description: 'The requested page could not be found.',
  robots: 'noindex, follow',
}));

// ============================================
// Start Router
// ============================================
initRouter();
