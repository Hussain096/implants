// ============================================
// Hub Page Template
// Generates silo hub pages from navigation data
// ============================================

import { pageLayout, initCommon } from '../components/layout.js';
import { siloHubs } from '../data/navigation.js';
import { breadcrumbSchema, itemListSchema, organizationSchema, webSiteSchema } from '../data/schema.js';

// Extended content data for each hub page
const hubContent = {
  'implant-types': {
    title: 'Breast Implant Types — Your Complete Comparison Guide',
    metaDescription: 'Compare saline, silicone gel, gummy bear, and structured saline breast implants. Understand differences in feel, safety, cost, and FDA approval status.',
    heading: 'Breast Implant Types',
    intro: `Choosing the right implant type is one of the most important decisions in your augmentation journey. Each type has distinct advantages, risks, and ideal use cases. This hub provides evidence-based comparisons and in-depth guides for every FDA-approved implant type.`,
    keyFacts: [
      { label: 'FDA-Approved Types', value: '4', detail: 'Saline, silicone gel, gummy bear (form-stable), structured saline' },
      { label: 'Most Popular', value: 'Silicone Gel', detail: '~87% of augmentations in the US use silicone-filled implants' },
      { label: 'Newest Option', value: 'Structured', detail: 'IDEAL IMPLANT® — FDA approved 2014, combines saline safety with improved feel' },
    ],
    highlights: [
      { icon: '🔬', title: 'Saline Implants', desc: 'Filled with sterile saltwater after insertion. FDA-approved at 18. Easy rupture detection. Most affordable option.', href: '/saline-breast-implants/', badge: 'Established' },
      { icon: '✨', title: 'Silicone Gel Implants', desc: 'Pre-filled with cohesive gel for a natural feel. FDA-approved at 22. Most popular choice worldwide.', href: '/silicone-breast-implants/', badge: 'Most Popular' },
      { icon: '💎', title: 'Gummy Bear Implants', desc: 'Highly cohesive form-stable gel that maintains shape even if the shell breaks. Premium option.', href: '/gummy-bear-implants/', badge: 'Premium' },
      { icon: '🏗️', title: 'Structured Saline', desc: 'Internal baffles create a more natural feel while keeping saline\'s safety advantages.', href: '/structured-saline-implants/', badge: 'Innovative' },
    ],
    comparisonNote: 'Not sure which type is right for you? Start with our <a href="/saline-vs-silicone-implants/">Saline vs. Silicone comparison</a> — the most common decision point for patients.',
    relatedHubs: ['shapes-sizes', 'procedure', 'costs-financing', 'risks-complications'],
  },
  'shapes-sizes': {
    title: 'Breast Implant Shapes & Sizes — How to Choose',
    metaDescription: 'Understand breast implant shapes (round vs teardrop), profiles, projections, and CC sizing. Tools and guides to help you choose the right size.',
    heading: 'Implant Shapes & Sizes',
    intro: `Beyond implant type, shape and size are the decisions that most affect your aesthetic outcome. This guide covers round vs. teardrop shapes, profile options, CC volumes, and the tools surgeons use to help you find the right fit.`,
    keyFacts: [
      { label: 'Most Common Shape', value: 'Round', detail: 'Round implants are most frequently used — they provide fullness and are less prone to rotation' },
      { label: 'Size Range', value: '80–800cc', detail: 'Most patients choose between 250–450cc depending on body frame and goals' },
      { label: 'Profile Options', value: '4 Levels', detail: 'Low, moderate, moderate-plus, and high profile options affect projection' },
    ],
    highlights: [
      { icon: '⭕', title: 'Round Implants', desc: 'Uniform fill provides fullness in the upper pole. Cannot malposition rotationally. Available in all profiles.', href: '/round-vs-teardrop-implants/', badge: 'Popular' },
      { icon: '💧', title: 'Teardrop (Anatomical)', desc: 'Shaped to mimic natural breast anatomy. More fullness at the bottom, tapered at the top. Requires textured shell.', href: '/round-vs-teardrop-implants/', badge: 'Natural Look' },
      { icon: '📏', title: 'Size Guide & CC Charts', desc: 'Interactive sizing tools, CC comparison charts, and what different volumes look like on various body types.', href: '/breast-implants-cc-size-chart/', badge: 'Tool' },
      { icon: '📐', title: 'Understanding Profiles', desc: 'Low, moderate, moderate-plus, and high profiles — how projection affects your look relative to implant width.', href: '/breast-implant-profiles/', badge: 'Guide' },
    ],
    comparisonNote: 'Use our <a href="/breast-implants-cc-size-chart/">CC size chart</a> to visualize different volumes and see what other patients with similar frames chose.',
    relatedHubs: ['implant-types', 'procedure', 'costs-financing'],
  },
  'procedure': {
    title: 'Breast Implant Procedures — What to Expect',
    metaDescription: 'Comprehensive guide to the breast augmentation procedure. Learn about incision types, implant placement, surgery day, recovery timeline, and post-op care.',
    heading: 'Breast Implant Procedures',
    intro: `Understanding what happens before, during, and after breast augmentation surgery reduces anxiety and helps you prepare. From your first consultation through full recovery, here's what to expect at every stage.`,
    keyFacts: [
      { label: 'Surgery Duration', value: '1–2 Hours', detail: 'Most augmentations are completed in 60–120 minutes under general anesthesia' },
      { label: 'Recovery', value: '1–6 Weeks', detail: 'Desk work at 1 week, light exercise at 3 weeks, full activity at 6 weeks' },
      { label: 'Anesthesia', value: 'General', detail: 'Performed under general anesthesia as an outpatient procedure' },
    ],
    highlights: [
      { icon: '🏥', title: 'Surgery Overview', desc: 'Step-by-step walkthrough of what happens in the operating room, from anesthesia to closing.', href: '/breast-augmentation-surgery/', badge: 'Essential' },
      { icon: '📍', title: 'Implant Placement', desc: 'Submuscular (under the muscle) vs. subglandular (over the muscle) — pros, cons, and who each is best for.', href: '/breast-implant-placement/', badge: 'Guide' },
      { icon: '✂️', title: 'Incision Types', desc: 'Inframammary, periareolar, transaxillary, and transumbilical — scarring, access, and surgeon preference.', href: '/breast-implant-incision-types/', badge: 'Guide' },
      { icon: '📅', title: 'Recovery Timeline', desc: 'Day-by-day and week-by-week guide covering pain management, activity restrictions, and milestones.', href: '/breast-augmentation-recovery-timeline/', badge: 'Essential' },
      { icon: '❓', title: 'Questions for Your Surgeon', desc: '30+ essential questions to ask during your consultation — vetted by plastic surgeons.', href: '/questions-for-surgeon/', badge: 'Tool' },
    ],
    comparisonNote: 'Not sure if you\'re ready? Start with our <a href="/fda-checklist/">FDA pre-surgery checklist</a> to make sure you\'ve covered all the bases.',
    relatedHubs: ['implant-types', 'risks-complications', 'costs-financing'],
  },
  'costs-financing': {
    title: 'Costs & Financing — Complete Price Guide',
    metaDescription: 'How much do breast implants cost? Average prices, surgeon fees, implant costs, financing options, insurance coverage, and hidden expenses explained.',
    heading: 'Costs & Financing',
    intro: `Understanding the full cost of breast augmentation — beyond just the surgeon's fee — is essential for financial planning. Costs vary significantly by location, surgeon, implant type, and facility. We break it all down transparently.`,
    keyFacts: [
      { label: 'Total Range', value: '$6K–$12K', detail: 'All-inclusive cost including surgeon, anesthesia, facility, implants, and follow-up' },
      { label: 'Surgeon Fee', value: '$3.5K–$6K', detail: 'The largest single component — varies by experience, location, and demand' },
      { label: 'Insurance', value: 'Rarely', detail: 'Cosmetic augmentation is not covered; reconstruction after mastectomy is mandated' },
    ],
    highlights: [
      { icon: '💰', title: 'Complete Cost Breakdown', desc: 'Itemized breakdown: surgeon fee, anesthesia, facility, implants, garments, medications, and follow-up.', href: '/breast-implant-cost/', badge: 'Essential' },
      { icon: '💳', title: 'Financing Options', desc: 'CareCredit, Alphaeon, in-house plans — compare interest rates, terms, and approval requirements.', href: '/breast-implant-financing-options/', badge: 'Guide' },
      { icon: '🏥', title: 'Insurance Coverage', desc: 'When insurance covers breast implants: reconstruction, revision for complications, and the WHCRA.', href: '/insurance-coverage-for-breast-implants/', badge: 'Guide' },
    ],
    comparisonNote: '⚠️ <strong>Be cautious of unusually low prices.</strong> Board-certified surgeons operating in accredited facilities with proper anesthesia coverage have baseline costs that cannot be safely cut below certain thresholds.',
    relatedHubs: ['procedure', 'implant-types', 'brands'],
  },
  'risks-complications': {
    title: 'Breast Implant Risks & Complications — Evidence-Based Safety Guide',
    metaDescription: 'Evidence-based guide to breast implant risks: capsular contracture, rupture, BII, BIA-ALCL, infection, and more. What the data actually shows.',
    heading: 'Breast Implant Risks & Safety',
    intro: `Every surgical procedure carries risks, and breast augmentation is no exception. Understanding potential complications — their likelihood, symptoms, and treatments — is essential for informed consent. Our guides present the evidence without minimizing or exaggerating risk.`,
    keyFacts: [
      { label: 'Reoperation Rate', value: '~20%', detail: 'Approximately 1 in 5 patients requires additional surgery within 10 years' },
      { label: 'Capsular Contracture', value: '8–15%', detail: 'The most common complication — scar tissue hardens around the implant' },
      { label: 'BIA-ALCL Risk', value: '1 in 2,207–86,029', detail: 'Rare lymphoma associated primarily with textured implants' },
    ],
    highlights: [
      { icon: '🔴', title: 'Capsular Contracture', desc: 'The most common complication. Causes, Baker grading, risk factors, prevention strategies, and treatment options.', href: '/capsular-contracture/', badge: 'Common' },
      { icon: '💔', title: 'Implant Rupture', desc: 'Saline vs. silicone rupture differences, detection methods, symptoms, and what happens after rupture.', href: '/breast-implant-rupture/', badge: 'Guide' },
      { icon: '🧠', title: 'Breast Implant Illness (BII)', desc: 'Patient-reported systemic symptoms, current research, FDA position, and the explantation decision.', href: '/breast-implant-illness/', badge: 'Emerging' },
      { icon: '⚠️', title: 'BIA-ALCL', desc: 'Rare lymphoma linked to textured implants. Risk by implant type, symptoms, diagnosis, and treatment.', href: '/bia-alcl/', badge: 'Critical' },
      { icon: '🦠', title: 'Infection', desc: 'Risk factors, symptoms, prevention (including the 14-point plan), and treatment protocols.', href: '/breast-implant-infection/', badge: 'Guide' },
    ],
    comparisonNote: 'This section presents evidence from FDA post-approval studies, peer-reviewed literature, and manufacturer safety data. We do not minimize or exaggerate risks.',
    relatedHubs: ['procedure', 'implant-types', 'brands', 'research'],
  },
  'brands': {
    title: 'Breast Implant Brands & Manufacturers — Comparison Guide',
    metaDescription: 'Compare FDA-approved breast implant manufacturers: Allergan/Natrelle, Mentor, Sientra, and Motiva. Regulatory status, product lines, safety data, and warranties.',
    heading: 'Breast Implant Brands & Devices',
    intro: `There are currently four major manufacturers with FDA-approved breast implants in the US market. Each offers different product lines, warranty programs, and has distinct safety track records. We compare them objectively — we are not affiliated with any manufacturer.`,
    keyFacts: [
      { label: 'FDA-Approved', value: '4 Brands', detail: 'Allergan (Natrelle), Mentor (Johnson & Johnson), Sientra, and Motiva' },
      { label: 'Market Leader', value: 'Allergan', detail: 'Natrelle holds the largest US market share, though Mentor is close behind' },
      { label: 'Newest Entrant', value: 'Motiva', detail: 'FDA approved in 2022 — newer safety data, innovative surface technology' },
    ],
    highlights: [
      { icon: '🏷️', title: 'Allergan / Natrelle', desc: 'Inspira line, BIOCELL textured recall history, Natrelle 360+ program, and ConfidencePlus warranty.', href: '/allergan/', badge: 'Market Leader' },
      { icon: '🏷️', title: 'Mentor', desc: 'MemoryGel and MemoryShape implants, MENTOR Promise warranty, and long-term Core Study data.', href: '/mentor/', badge: 'Established' },
      { icon: '🏷️', title: 'Sientra', desc: 'Only brand exclusively sold to board-certified plastic surgeons. Opus line, Sientra Platinum20 warranty.', href: '/sientra/', badge: 'Surgeon-Only' },
      { icon: '🏷️', title: 'Motiva', desc: 'SmoothSilk/SilkSurface technology, Ergonomix2 implant, Progressive Gel, and Motiva Warranty.', href: '/motiva/', badge: 'Newest' },
    ],
    comparisonNote: 'Breasts-Implants.com has <strong>no financial relationships with any implant manufacturer</strong>. All brand comparisons are based on publicly available FDA data and peer-reviewed research.',
    relatedHubs: ['implant-types', 'risks-complications', 'research'],
  },
  'alternatives': {
    title: 'Breast Implant Alternatives — Non-Implant Augmentation Options',
    metaDescription: 'Explore alternatives to breast implants: fat transfer, composite augmentation, and non-surgical enhancement. Compare results, costs, risks, and candidacy.',
    heading: 'Alternatives to Implants',
    intro: `Breast implants aren't the only path to augmentation. Fat transfer, composite techniques, and even non-surgical options exist — each with distinct advantages and limitations. If you're undecided or want to explore every option, this section is for you.`,
    keyFacts: [
      { label: 'Fat Transfer', value: 'Natural', detail: 'Uses your own body fat — no foreign material. Limited to ~1 cup size increase per session.' },
      { label: 'Composite', value: 'Hybrid', detail: 'Combines a smaller implant with fat grafting for a more natural result' },
      { label: 'Non-Surgical', value: 'Temporary', detail: 'Fillers, vacuum devices — temporary effects with no surgery required' },
    ],
    highlights: [
      { icon: '🌿', title: 'Fat Transfer Augmentation', desc: 'Natural augmentation using your own fat, including how it compares with implants.', href: '/fat-transfer-breast-augmentation/', badge: 'Guide' },
      { icon: '🔀', title: 'Composite Augmentation', desc: 'The best of both worlds? A small implant combined with fat grafting for enhanced shape and natural feel.', href: '/composite-breast-augmentation/', badge: 'Hybrid' },
      { icon: '💉', title: 'Non-Surgical Options', desc: 'An honest look at non-surgical alternatives: what works, what doesn\'t, and what to avoid.', href: '/non-surgical-options/', badge: 'No Surgery' },
    ],
    comparisonNote: 'Alternatives have their own limitations and risks. We present each option honestly so you can discuss all possibilities with your surgeon.',
    relatedHubs: ['implant-types', 'procedure', 'costs-financing'],
  },
  'research': {
    title: 'Breast Implant Research & Clinical Data — Evidence Library',
    metaDescription: 'Access breast implant research: FDA post-approval studies, long-term clinical data, emerging research on BII, BIA-ALCL, and implant safety outcomes.',
    heading: 'Research & Data',
    intro: `Informed decision-making requires access to actual data — not just opinions. This section summarizes key clinical studies, FDA post-approval data, and emerging research in breast implant safety and outcomes.`,
    keyFacts: [
      { label: 'FDA Studies', value: 'Ongoing', detail: 'Post-approval studies required by FDA track long-term safety data for all approved devices' },
      { label: 'Study Duration', value: '10+ Years', detail: 'Long-term data now available from 10-year manufacturer-sponsored studies' },
      { label: 'Active Research', value: 'BII & BIA-ALCL', detail: 'Most active current research areas in breast implant safety' },
    ],
    highlights: [
      { icon: '📊', title: 'FDA Safety Data', desc: 'Summary of FDA MAUDE reports, post-approval study results, and device-specific safety communications.', href: '/fda-breast-implant-safety-data/', badge: 'Data' },
      { icon: '📈', title: 'Long-Term Studies', desc: 'Core Study results from Allergan, Mentor, and Sientra — 10-year complication rates and outcomes.', href: '/breast-implant-long-term-studies/', badge: 'Clinical' },
      { icon: '🔬', title: 'Emerging Research', desc: 'Latest research on BII, surface technology, biofilm theory, and next-generation implant designs.', href: '/emerging-research-in-breast-implant/', badge: 'New' },
    ],
    comparisonNote: 'All research summaries include links to original sources. We distinguish between peer-reviewed data, preliminary findings, and patient-reported outcomes.',
    relatedHubs: ['risks-complications', 'brands', 'implant-types'],
  },
};

/**
 * Generate a hub page
 * @param {string} hubId - ID matching a siloHubs entry
 */
export function hubPage(hubId) {
  const hub = siloHubs.find(h => h.id === hubId);
  const content = hubContent[hubId];

  if (!hub || !content) {
    return {
      html: '<div class="container section"><h1>Hub not found</h1></div>',
      title: 'Not Found',
    };
  }

  const relatedHubData = (content.relatedHubs || [])
    .map(id => siloHubs.find(h => h.id === id))
    .filter(Boolean);

  const html = pageLayout(`
<!-- Hub Hero -->
<section class="hub-hero">
  <div class="container">
    <div class="hub-hero-content">
      <span class="section-label">${hub.icon} ${hub.label}</span>
      <h1>${content.heading}</h1>
      <p class="hub-intro">${content.intro}</p>
    </div>
  </div>
</section>

<!-- Key Facts -->
<section class="section section--alt">
  <div class="container">
    <div class="key-facts">
      ${content.keyFacts.map(fact => `
      <div class="key-fact">
        <div class="key-fact-value">${fact.value}</div>
        <div class="key-fact-label">${fact.label}</div>
        <div class="key-fact-detail">${fact.detail}</div>
      </div>`).join('')}
    </div>
  </div>
</section>

<!-- Topic Cards -->
<section class="section" id="topics">
  <div class="container">
    <div class="section-header">
      <span class="section-label">In-Depth Guides</span>
      <h2>Explore ${hub.label}</h2>
      <p>Evidence-based, medically reviewed articles in this topic area.</p>
    </div>
    <div class="hub-grid">
      ${content.highlights.map(item => `
      <a href="${item.href}" class="hub-card">
        <div class="hub-card-header">
          <span class="hub-card-icon">${item.icon}</span>
          <span class="hub-card-badge">${item.badge}</span>
        </div>
        <h3>${item.title}</h3>
        <p>${item.desc}</p>
        <span class="hub-card-link">Read guide →</span>
      </a>`).join('')}
    </div>
    ${content.comparisonNote ? `
    <div class="hub-note">
      <span class="hub-note-icon">💡</span>
      <p>${content.comparisonNote}</p>
    </div>` : ''}
  </div>
</section>

<!-- Child Pages List -->
<section class="section section--alt">
  <div class="container">
    <div class="section-header">
      <span class="section-label">All Articles</span>
      <h2>All ${hub.label} Articles</h2>
    </div>
    <div class="article-list">
      ${hub.children.map(child => `
      <a href="${child.href}" class="article-list-item">
        <span class="article-list-title">${child.label}</span>
        <span class="article-list-tag">${child.tag}</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 3L11 8L6 13"/></svg>
      </a>`).join('')}
    </div>
  </div>
</section>

<!-- Related Hubs -->
${relatedHubData.length > 0 ? `
<section class="section">
  <div class="container">
    <div class="section-header">
      <span class="section-label">Related Topics</span>
      <h2>Continue Your Research</h2>
      <p>Explore related content areas for a complete understanding.</p>
    </div>
    <div class="grid-${Math.min(relatedHubData.length, 4)}">
      ${relatedHubData.map(rh => `
      <a href="${rh.href}" class="card">
        <div class="card-icon card-icon--blue">${rh.icon}</div>
        <h3>${rh.label}</h3>
        <p>${rh.description}</p>
      </a>`).join('')}
    </div>
  </div>
</section>` : ''}

<!-- Safety Callout -->
<section class="section section--alt">
  <div class="container">
    <div class="safety-callout">
      <span class="icon">🛡️</span>
      <div>
        <h4>Medically Reviewed Content</h4>
        <p>All articles in this section are written by medical writers and reviewed by board-certified plastic surgeons. 
        <a href="/medical-review-policy/">Learn about our review process →</a></p>
      </div>
    </div>
  </div>
</section>

<!-- CTA Section -->
<section class="section">
  <div class="container">
    <div class="cta-section">
      <h2>Have Questions?</h2>
      <p>Use our consultation checklist to prepare for your surgeon visit with confidence.</p>
      <a href="/questions-for-surgeon/" class="btn-white">Get the Consultation Checklist →</a>
    </div>
  </div>
</section>
  `, [{ label: hub.label, href: hub.href }]);

  return {
    html,
    title: content.title,
    description: content.metaDescription,
    schema: [
      organizationSchema(),
      webSiteSchema(),
      breadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: content.heading, url: hub.href },
      ]),
      itemListSchema(hub.children.map(child => ({
        name: child.label,
        url: child.href,
        description: `${child.label} guide from the ${content.heading} section.`,
      }))),
    ],
    init() {
      initCommon();
    }
  };
}
