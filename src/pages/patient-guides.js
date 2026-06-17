// ============================================
// Patient Guides Hub Page
// ============================================

import { pageLayout, initCommon } from '../components/layout.js';

export function patientGuidesPage() {
  const guides = [
    {
      category: 'Getting Started',
      icon: '🚀',
      items: [
        { title: 'How to Choose a Plastic Surgeon', desc: 'Verification checklist and red flags to watch for.', href: '/choosing-surgeon/', tag: 'Essential' },
        { title: 'Questions for Your Surgeon', desc: '30+ vetted questions for your consultation.', href: '/questions-for-surgeon/', tag: 'Tool' },
        { title: 'FDA Pre-Surgery Checklist', desc: 'Interactive preparation checklist based on FDA guidance.', href: '/fda-checklist/', tag: 'Tool' },
        { title: 'Breast Augmentation Surgery', desc: 'Step-by-step surgical walkthrough.', href: '/breast-augmentation-surgery/', tag: 'Guide' },
      ],
    },
    {
      category: 'Choosing Your Implant',
      icon: '🔬',
      items: [
        { title: 'Saline vs. Silicone', desc: 'The most common decision point for patients.', href: '/saline-vs-silicone-implants/', tag: 'Comparison' },
        { title: 'Shapes & Profiles Guide', desc: 'Round vs. teardrop and profile options.', href: '/breast-implants-shapes/', tag: 'Guide' },
        { title: 'CC Size Chart', desc: 'Visualize different implant volumes.', href: '/breast-implants-cc-size-chart/', tag: 'Tool' },
        { title: 'Brand Comparison', desc: 'Compare Allergan, Mentor, Sientra, and Motiva.', href: '/breast-implant-brands-comparison/', tag: 'Comparison' },
      ],
    },
    {
      category: 'Understanding Risks',
      icon: '⚠️',
      items: [
        { title: 'Capsular Contracture', desc: 'The most common complication explained.', href: '/capsular-contracture/', tag: 'Guide' },
        { title: 'Implant Rupture', desc: 'Detection, symptoms, and treatment.', href: '/breast-implant-rupture/', tag: 'Guide' },
        { title: 'Breast Implant Illness', desc: 'Systemic symptoms and current research.', href: '/breast-implant-illness/', tag: 'Guide' },
        { title: 'BIA-ALCL', desc: 'Rare lymphoma risk explained.', href: '/bia-alcl/', tag: 'Guide' },
      ],
    },
    {
      category: 'Costs & Planning',
      icon: '💰',
      items: [
        { title: 'Breast Implant Cost', desc: 'Itemized cost breakdown and averages.', href: '/breast-implant-cost/', tag: 'Guide' },
        { title: 'Financing Options', desc: 'CareCredit, loans, and payment plans.', href: '/breast-implant-financing-options/', tag: 'Guide' },
        { title: 'Insurance Coverage', desc: 'When insurance covers breast implants.', href: '/insurance-coverage-for-breast-implants/', tag: 'Guide' },
      ],
    },
    {
      category: 'Recovery & Aftercare',
      icon: '📅',
      items: [
        { title: 'Recovery Timeline', desc: 'Day-by-day and week-by-week recovery guide.', href: '/breast-augmentation-recovery-timeline/', tag: 'Guide' },
        { title: 'Incision Types', desc: 'Scarring expectations for each approach.', href: '/breast-implant-incision-types/', tag: 'Guide' },
        { title: 'Implant Placement', desc: 'Under vs. over the muscle and recovery impact.', href: '/breast-implant-placement/', tag: 'Guide' },
      ],
    },
    {
      category: 'Alternatives',
      icon: '🌿',
      items: [
        { title: 'Fat Transfer Augmentation', desc: 'Natural augmentation using your own fat.', href: '/fat-transfer-breast-augmentation/', tag: 'Guide' },
        { title: 'Composite Augmentation', desc: 'Implant + fat transfer combined.', href: '/composite-breast-augmentation/', tag: 'Guide' },
        { title: 'Non-Surgical Options', desc: 'What works and what doesn\'t.', href: '/non-surgical-options/', tag: 'Guide' },
      ],
    },
  ];

  const html = pageLayout(`
<!-- Hero -->
<section class="hub-hero">
  <div class="container">
    <div class="hub-hero-content">
      <span class="section-label">📖 Patient Resources</span>
      <h1>Patient Guides</h1>
      <p class="hub-intro">Your curated roadmap through the breast augmentation journey — from initial research through recovery. Every guide is evidence-based and medically reviewed.</p>
    </div>
  </div>
</section>

<!-- Guide Categories -->
${guides.map((cat, idx) => `
<section class="section${idx % 2 === 0 ? '' : ' section--alt'}">
  <div class="container">
    <div class="section-header" style="text-align:left;">
      <span class="section-label">${cat.icon} ${cat.category}</span>
    </div>
    <div class="article-list">
      ${cat.items.map(item => `
      <a href="${item.href}" class="article-list-item">
        <span class="article-list-title">${item.title}</span>
        <span class="article-list-desc" style="flex:1;color:var(--color-text-muted);font-size:0.9rem;">${item.desc}</span>
        <span class="article-list-tag">${item.tag}</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 3L11 8L6 13"/></svg>
      </a>`).join('')}
    </div>
  </div>
</section>`).join('')}

<!-- CTA Section -->
<section class="section section--alt">
  <div class="container">
    <div class="cta-section">
      <h2>Not Sure Where to Start?</h2>
      <p>Begin with our consultation preparation tools — they'll guide you through the most important first steps.</p>
      <a href="/questions-for-surgeon/" class="btn-white">Start with Consultation Questions →</a>
    </div>
  </div>
</section>
  `, [{ label: 'Patient Guides' }]);

  return {
    html,
    title: 'Patient Guides — Breast Augmentation Resources | Breasts-Implants.com',
    description: 'Curated breast augmentation patient guides: from choosing a surgeon and understanding risks to recovery planning. Evidence-based, medically reviewed resources.',
    init() {
      initCommon();
    },
  };
}
