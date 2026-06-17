// ============================================
// Tool: CC Size Chart — Interactive Implant Sizing
// ============================================

import { pageLayout, initCommon } from '../components/layout.js';

const sizeData = [
  { cc: '150–200', cup: 'Small A → Full A/Small B', projection: 'Subtle', notes: 'Very natural. Minimal visible change in clothing.' },
  { cc: '200–250', cup: 'A → B', projection: 'Subtle–Moderate', notes: 'Natural enhancement. Noticeable but not dramatic.' },
  { cc: '250–300', cup: 'A/B → Full B/Small C', projection: 'Moderate', notes: 'Most popular "natural" range. Fills out clothing nicely.' },
  { cc: '300–350', cup: 'B → C/D', projection: 'Moderate', notes: 'Very popular size range. Noticeable enhancement.' },
  { cc: '350–400', cup: 'B/C → D', projection: 'Moderate–High', notes: 'Fuller look. Most popular range overall.' },
  { cc: '400–450', cup: 'B/C → D/DD', projection: 'High', notes: 'Significant enhancement. Requires adequate tissue.' },
  { cc: '450–500', cup: 'C → DD/E', projection: 'High', notes: 'Large enhancement. Body frame must accommodate.' },
  { cc: '500–550', cup: 'C/D → E/F', projection: 'Very High', notes: 'Very large. Increased complication risk discussed.' },
  { cc: '550–650', cup: 'D → F+', projection: 'Very High', notes: 'Extra large. Careful patient selection required.' },
  { cc: '650–800', cup: 'D+ → G+', projection: 'Maximum', notes: 'Largest available. Significant surgical considerations.' },
];

const bodyProfiles = [
  {
    frame: 'Petite Frame',
    icon: '👤',
    bwd: '10–11 cm',
    weight: 'Under 120 lbs',
    recommended: '200–350cc',
    profile: 'Moderate Plus to High',
    notes: 'Narrow chest — higher profile gives adequate projection without overly wide implant.',
  },
  {
    frame: 'Average Frame',
    icon: '👤',
    bwd: '11–13 cm',
    weight: '120–160 lbs',
    recommended: '275–425cc',
    profile: 'Moderate to Moderate Plus',
    notes: 'Widest range of options. Most implant sizes and profiles work well.',
  },
  {
    frame: 'Athletic Frame',
    icon: '🏃‍♀️',
    bwd: '12–14 cm',
    weight: '130–170 lbs',
    recommended: '300–450cc',
    profile: 'Moderate to Moderate Plus',
    notes: 'Well-developed chest muscle may affect projection. Submuscular placement considerations.',
  },
  {
    frame: 'Larger Frame',
    icon: '👤',
    bwd: '13–15 cm',
    weight: '160+ lbs',
    recommended: '350–550cc',
    profile: 'Moderate to Low',
    notes: 'Wider chest accommodates wider-base implants. Moderate profile avoids excessive projection.',
  },
];

export function ccSizeChartPage() {
  const html = pageLayout(`
<!-- Page Hero -->
<section class="hub-hero">
  <div class="container">
    <div class="hub-hero-content">
      <span class="section-label">📏 Patient Tool</span>
      <h1>Breast Implant CC Size Chart</h1>
      <p class="hub-intro">Use this interactive reference to understand how different implant volumes (CC) relate to cup size increases. Remember: CC-to-cup conversions are approximate — results vary significantly by body type, placement, and profile.</p>
    </div>
  </div>
</section>

<!-- Important Disclaimer -->
<section class="section" style="padding-top:1.5rem;padding-bottom:0;">
  <div class="container">
    <div class="article-safety-note">
      <span class="icon">⚠️</span>
      <div>
        <strong>These Are Approximations Only</strong>
        <p>There is <strong>no reliable universal conversion</strong> between CC volume and bra cup size. Cup sizes vary across brands, and the same CC volume looks completely different depending on your chest width, body fat, tissue elasticity, implant profile, and placement. This chart provides general guidance — your surgeon's measurements and recommendations are what matter.</p>
      </div>
    </div>
  </div>
</section>

<!-- CC Chart -->
<section class="section">
  <div class="container">
    <h2>CC Volume to Cup Size Reference</h2>
    <p style="color:var(--color-text-muted);margin-bottom:1.5rem;">Approximate cup size increase from starting size. Based on average body frame with submuscular placement.</p>
    <div class="article-table-wrap">
      <table class="comparison-table">
        <thead>
          <tr>
            <th>CC Volume</th>
            <th>Approximate Cup Change</th>
            <th>Projection Level</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          ${sizeData.map(row => `
          <tr>
            <td><strong>${row.cc} cc</strong></td>
            <td>${row.cup}</td>
            <td>${row.projection}</td>
            <td><span style="font-size:0.85rem;color:var(--color-text-muted);">${row.notes}</span></td>
          </tr>`).join('')}
        </tbody>
      </table>
    </div>

    <h2 style="margin-top:3rem;">Recommendations by Body Type</h2>
    <p style="color:var(--color-text-muted);margin-bottom:1.5rem;">General sizing guidance based on body frame. Your surgeon will refine these recommendations based on precise measurements.</p>
    <div class="size-cards">
      ${bodyProfiles.map(bp => `
      <div class="size-card">
        <div class="size-card-header">
          <span class="size-card-icon">${bp.icon}</span>
          <h3>${bp.frame}</h3>
        </div>
        <div class="size-card-body">
          <div class="size-card-stat">
            <span class="size-stat-label">Breast Width</span>
            <span class="size-stat-value">${bp.bwd}</span>
          </div>
          <div class="size-card-stat">
            <span class="size-stat-label">Body Weight</span>
            <span class="size-stat-value">${bp.weight}</span>
          </div>
          <div class="size-card-stat">
            <span class="size-stat-label">Recommended CC</span>
            <span class="size-stat-value size-stat-highlight">${bp.recommended}</span>
          </div>
          <div class="size-card-stat">
            <span class="size-stat-label">Best Profile</span>
            <span class="size-stat-value">${bp.profile}</span>
          </div>
          <p class="size-card-note">${bp.notes}</p>
        </div>
      </div>`).join('')}
    </div>

    <!-- Key Facts -->
    <div class="key-takeaways" style="margin-top:2.5rem;">
      <div class="key-takeaways-header">
        <span>💡</span>
        <h3>Important Sizing Facts</h3>
      </div>
      <ul>
        <li>Each breast is different — you may need different CC volumes for each side to achieve symmetry.</li>
        <li>Higher profile = more projection from a narrower base. Lower profile = wider, more subtle spread.</li>
        <li>Submuscular placement can make implants appear slightly smaller than subglandular placement.</li>
        <li>3D imaging and sizer try-ons during consultation are far more accurate than CC-to-cup charts.</li>
        <li>Don't choose a size based on someone else's results — body proportions make every outcome unique.</li>
      </ul>
    </div>
  </div>
</section>

<!-- CTA -->
<section class="section section--alt">
  <div class="container">
    <div class="cta-section">
      <h2>Want to Visualize Your Results?</h2>
      <p>Ask your surgeon about 3D imaging or sizer try-ons during your consultation for the most accurate preview.</p>
      <a href="/questions-for-surgeon/" class="btn-white">Get Our Consultation Checklist →</a>
    </div>
  </div>
</section>
  `, [
    { label: 'Shapes & Sizes', href: '/shapes-and-sizes/' },
    { label: 'CC Size Chart' }
  ]);

  return {
    html,
    title: 'Breast Implant CC Size Chart — Volume to Cup Size Guide | Breasts-Implants.com',
    description: 'Interactive breast implant CC size chart. See how 150cc–800cc translates to cup sizes by body type. Includes recommendations by frame size and profile.',
    init() { initCommon(); }
  };
}
