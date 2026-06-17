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

// Article Data — Implant Types Silo
import { salineArticle } from './data/articles/saline.js';
import { siliconeArticle } from './data/articles/silicone.js';
import { salineVsSiliconeArticle } from './data/articles/saline-vs-silicone.js';
import { gummyBearArticle } from './data/articles/gummy-bear.js';
import { structuredSalineArticle } from './data/articles/structured-saline.js';

// Article Data — Shapes & Sizes Silo
import { shapesProfilesArticle } from './data/articles/shapes-profiles.js';
import { roundVsTeardropArticle } from './data/articles/round-vs-teardrop.js';
import { implantProfilesArticle } from './data/articles/implant-profiles.js';

// Article Data — Procedure Silo
import { breastAugmentationSurgeryArticle } from './data/articles/breast-augmentation-surgery.js';
import { implantPlacementArticle } from './data/articles/implant-placement.js';
import { incisionTypesArticle } from './data/articles/incision-types.js';
import { recoveryTimelineArticle } from './data/articles/recovery-timeline.js';
import { choosingSurgeonArticle } from './data/articles/choosing-surgeon.js';
import { breastLiftArticle } from './data/articles/breast-lift.js';
import { breastLiftAugmentationArticle } from './data/articles/breast-lift-augmentation.js';
import { breastImplantRemovalArticle } from './data/articles/breast-implant-removal.js';
import { breastReconstructionArticle } from './data/articles/breast-reconstruction.js';

// Article Data — Costs & Financing Silo
import { breastImplantCostArticle } from './data/articles/breast-implant-cost.js';
import { financingOptionsArticle } from './data/articles/financing-options.js';
import { insuranceCoverageArticle } from './data/articles/insurance-coverage.js';

// Article Data — Risks & Complications Silo
import { capsularContractureArticle } from './data/articles/capsular-contracture.js';
import { biiArticle } from './data/articles/breast-implant-illness.js';
import { ruptureArticle } from './data/articles/rupture.js';
import { biaAlclArticle } from './data/articles/bia-alcl.js';
import { infectionArticle } from './data/articles/infection.js';

// Article Data — Brands Silo
import { brandsComparisonArticle } from './data/articles/brands-comparison.js';
import { allerganArticle } from './data/articles/allergan.js';
import { mentorArticle } from './data/articles/mentor.js';
import { sientraArticle } from './data/articles/sientra.js';
import { motivaArticle } from './data/articles/motiva.js';

// Article Data — Alternatives Silo
import { fatTransferArticle } from './data/articles/fat-transfer.js';
import { compositeAugmentationArticle } from './data/articles/composite-augmentation.js';
import { nonSurgicalOptionsArticle } from './data/articles/non-surgical-options.js';

// Article Data — Research Silo
import { fdaSafetyDataArticle } from './data/articles/fda-safety-data.js';
import { longTermStudiesArticle } from './data/articles/long-term-studies.js';
import { emergingResearchArticle } from './data/articles/emerging-research.js';

// ============================================
// Dark Mode: Apply saved/system preference BEFORE render
// ============================================
(function initTheme() {
  const saved = localStorage.getItem('theme');
  if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
  }
})();

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
route('/saline-breast-implants/', () => articlePage(salineArticle));
route('/silicone-breast-implants/', () => articlePage(siliconeArticle));
route('/saline-vs-silicone-implants/', () => articlePage(salineVsSiliconeArticle));
route('/gummy-bear-implants/', () => articlePage(gummyBearArticle));
route('/structured-saline-implants/', () => articlePage(structuredSalineArticle));

// Article Pages — Shapes & Sizes Silo
route('/breast-implants-shapes/', () => articlePage(shapesProfilesArticle));
route('/round-vs-teardrop-implants/', () => articlePage(roundVsTeardropArticle));
route('/breast-implant-profiles/', () => articlePage(implantProfilesArticle));
route('/breast-implants-cc-size-chart/', ccSizeChartPage);

// Article Pages — Procedure Silo
route('/breast-augmentation-surgery/', () => articlePage(breastAugmentationSurgeryArticle));
route('/breast-implant-placement/', () => articlePage(implantPlacementArticle));
route('/breast-implant-incision-types/', () => articlePage(incisionTypesArticle));
route('/breast-augmentation-recovery-timeline/', () => articlePage(recoveryTimelineArticle));
route('/questions-for-surgeon/', questionsPage);
route('/choosing-surgeon/', () => articlePage(choosingSurgeonArticle));
route('/breast-lift/', () => articlePage(breastLiftArticle));
route('/breast-lift-with-augmentation/', () => articlePage(breastLiftAugmentationArticle));
route('/breast-implant-removal/', () => articlePage(breastImplantRemovalArticle));
route('/breast-reconstruction/', () => articlePage(breastReconstructionArticle));

// Article Pages — Costs & Financing Silo
route('/breast-implant-cost/', () => articlePage(breastImplantCostArticle));
route('/breast-implant-financing-options/', () => articlePage(financingOptionsArticle));
route('/insurance-coverage-for-breast-implants/', () => articlePage(insuranceCoverageArticle));

// Article Pages — Risks & Complications Silo
route('/capsular-contracture/', () => articlePage(capsularContractureArticle));
route('/breast-implant-illness/', () => articlePage(biiArticle));
route('/breast-implant-rupture/', () => articlePage(ruptureArticle));
route('/bia-alcl/', () => articlePage(biaAlclArticle));
route('/breast-implant-infection/', () => articlePage(infectionArticle));

// Article Pages — Brands Silo
route('/breast-implant-brands-comparison/', () => articlePage(brandsComparisonArticle));
route('/allergan/', () => articlePage(allerganArticle));
route('/mentor/', () => articlePage(mentorArticle));
route('/sientra/', () => articlePage(sientraArticle));
route('/motiva/', () => articlePage(motivaArticle));

// Article Pages — Alternatives Silo
route('/fat-transfer-breast-augmentation/', () => articlePage(fatTransferArticle));
route('/composite-breast-augmentation/', () => articlePage(compositeAugmentationArticle));
route('/non-surgical-options/', () => articlePage(nonSurgicalOptionsArticle));

// Article Pages — Research Silo
route('/fda-breast-implant-safety-data/', () => articlePage(fdaSafetyDataArticle));
route('/breast-implant-long-term-studies/', () => articlePage(longTermStudiesArticle));
route('/emerging-research-in-breast-implant/', () => articlePage(emergingResearchArticle));

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
