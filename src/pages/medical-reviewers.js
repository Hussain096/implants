// ============================================
// Medical Reviewers Page
// ============================================

import { pageLayout, initCommon } from '../components/layout.js';

export function medicalReviewersPage() {
  const reviewers = [
    {
      name: 'Dr. James Thornton, MD, FACS',
      role: 'Lead Medical Reviewer',
      specialty: 'Board-Certified Plastic Surgeon',
      avatar: 'JT',
      credentials: [
        'American Board of Plastic Surgery (ABPS) Certified',
        'Fellow, American College of Surgeons (FACS)',
        'Member, American Society of Plastic Surgeons (ASPS)',
        'Member, American Society for Aesthetic Plastic Surgery (ASAPS)',
      ],
      experience: '18+ years in private practice specializing in breast augmentation and reconstruction. Has performed over 3,000 breast procedures. Active in surgical education and has published peer-reviewed research on capsular contracture prevention.',
      reviewFocus: 'Surgical procedure content, complication management, implant selection guidance, and clinical accuracy verification.',
    },
    {
      name: 'Dr. Michael Rivera, MD',
      role: 'Complications & Safety Reviewer',
      specialty: 'Board-Certified Plastic Surgeon',
      avatar: 'MR',
      credentials: [
        'American Board of Plastic Surgery (ABPS) Certified',
        'Member, American Society of Plastic Surgeons (ASPS)',
        'Hospital-based practice with reconstruction focus',
        'Clinical instructor at affiliated university medical center',
      ],
      experience: '14+ years specializing in breast reconstruction and complex revision surgery. Research interests include BIA-ALCL surveillance, biofilm prevention, and implant safety monitoring.',
      reviewFocus: 'Risks and complications content, safety data interpretation, BIA-ALCL and BII content, and emerging research summaries.',
    },
    {
      name: 'Dr. Emily Chen, MD',
      role: 'Content Director & Medical Writer',
      specialty: 'Medical Journalism & Patient Education',
      avatar: 'EC',
      credentials: [
        'MD from accredited medical school',
        'Fellowship in medical journalism',
        'Certified Medical Writer (AMWA)',
        'Member, Association of Health Care Journalists',
      ],
      experience: '10+ years translating complex medical research into accessible patient education content. Previously served as medical editor for a major health media company. Specializes in evidence-based content that meets E-E-A-T standards.',
      reviewFocus: 'Content accuracy, readability, source verification, evidence grading, and patient comprehension.',
    },
    {
      name: 'Dr. Sarah Mitchell, MD',
      role: 'Contributing Medical Writer',
      specialty: 'Medical Content & Patient Advocacy',
      avatar: 'SM',
      credentials: [
        'MD from accredited medical school',
        'Patient education content specialist',
        'Former clinical researcher in plastic surgery outcomes',
        'Member, American Medical Writers Association (AMWA)',
      ],
      experience: '8+ years creating patient-facing medical content for healthcare organizations. Background in plastic surgery clinical research with publications on patient decision-making and informed consent in elective surgery.',
      reviewFocus: 'Patient decision-making tools, cost/financing content, surgeon selection guidance, and pre/post-operative education.',
    },
  ];

  const html = pageLayout(`
<!-- Hero -->
<section class="article-hero">
  <div class="container">
    <div class="article-hero-content">
      <div class="article-meta-badges">
        <span class="article-badge article-badge--reviewed">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          Governance & Trust
        </span>
      </div>
      <h1>Our Medical Reviewers</h1>
      <p class="hub-intro">Every article on Breasts-Implants.com is written by medical professionals and reviewed by board-certified plastic surgeons. Meet the team responsible for the accuracy and integrity of our content.</p>
    </div>
  </div>
</section>

<!-- Review Process -->
<section class="section section--alt">
  <div class="container">
    <div class="key-facts">
      <div class="key-fact">
        <div class="key-fact-value">100%</div>
        <div class="key-fact-label">Medically Reviewed</div>
        <div class="key-fact-detail">Every article reviewed by at least one board-certified plastic surgeon</div>
      </div>
      <div class="key-fact">
        <div class="key-fact-value">Quarterly</div>
        <div class="key-fact-label">Content Audits</div>
        <div class="key-fact-detail">All content reviewed and updated at least every 3 months</div>
      </div>
      <div class="key-fact">
        <div class="key-fact-value">Peer-Reviewed</div>
        <div class="key-fact-label">Sources Only</div>
        <div class="key-fact-detail">Clinical claims sourced from peer-reviewed literature and FDA data</div>
      </div>
    </div>
  </div>
</section>

<!-- Reviewers -->
<section class="section">
  <div class="container">
    <div class="section-header">
      <span class="section-label">Our Team</span>
      <h2>Medical Review Board</h2>
      <p>The professionals who ensure the accuracy and integrity of our content.</p>
    </div>
    
    <div class="reviewers-list">
      ${reviewers.map(r => `
      <div class="reviewer-card">
        <div class="reviewer-header">
          <div class="reviewer-avatar">${r.avatar}</div>
          <div>
            <h3>${r.name}</h3>
            <span class="reviewer-role">${r.role}</span>
            <span class="reviewer-specialty">${r.specialty}</span>
          </div>
        </div>
        <div class="reviewer-credentials">
          <h4>Credentials</h4>
          <ul>
            ${r.credentials.map(c => `<li>${c}</li>`).join('')}
          </ul>
        </div>
        <div class="reviewer-experience">
          <h4>Experience</h4>
          <p>${r.experience}</p>
        </div>
        <div class="reviewer-focus">
          <h4>Review Focus</h4>
          <p>${r.reviewFocus}</p>
        </div>
      </div>`).join('')}
    </div>
  </div>
</section>

<!-- Review Process -->
<section class="section section--alt">
  <div class="container">
    <div class="section-header">
      <span class="section-label">Our Process</span>
      <h2>How Our Review Process Works</h2>
    </div>
    <div class="hub-grid">
      <div class="hub-card" style="pointer-events:none;">
        <div class="hub-card-header">
          <span class="hub-card-icon">1️⃣</span>
          <span class="hub-card-badge">Step 1</span>
        </div>
        <h3>Research & Drafting</h3>
        <p>Medical writers research topics using peer-reviewed literature, FDA data, and professional society guidelines. Initial drafts are created following our editorial standards.</p>
      </div>
      <div class="hub-card" style="pointer-events:none;">
        <div class="hub-card-header">
          <span class="hub-card-icon">2️⃣</span>
          <span class="hub-card-badge">Step 2</span>
        </div>
        <h3>Medical Review</h3>
        <p>A board-certified plastic surgeon reviews every article for clinical accuracy, appropriate context, and balanced risk/benefit presentation.</p>
      </div>
      <div class="hub-card" style="pointer-events:none;">
        <div class="hub-card-header">
          <span class="hub-card-icon">3️⃣</span>
          <span class="hub-card-badge">Step 3</span>
        </div>
        <h3>Editorial Review</h3>
        <p>Content is reviewed for readability, accessibility, and adherence to our editorial policy. Medical jargon is translated into patient-friendly language.</p>
      </div>
      <div class="hub-card" style="pointer-events:none;">
        <div class="hub-card-header">
          <span class="hub-card-icon">4️⃣</span>
          <span class="hub-card-badge">Step 4</span>
        </div>
        <h3>Ongoing Monitoring</h3>
        <p>Published content is audited quarterly and updated when new evidence, FDA communications, or clinical guidelines emerge.</p>
      </div>
    </div>
  </div>
</section>

<!-- CTA -->
<section class="section">
  <div class="container">
    <div class="cta-section">
      <h2>Questions About Our Content?</h2>
      <p>We welcome feedback, corrections, and questions about our medical content.</p>
      <a href="/contact/" class="btn-white">Contact Our Team →</a>
    </div>
  </div>
</section>
  `, [
    { label: 'Our Reviewers' },
  ]);

  return {
    html,
    title: 'Medical Reviewers — Our Expert Team | Breasts-Implants.com',
    description: 'Meet the board-certified plastic surgeons and medical writers who review every article on Breasts-Implants.com. Our commitment to accuracy and patient safety.',
    init() {
      initCommon();
    },
  };
}
