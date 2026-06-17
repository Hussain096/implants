// ============================================
// FDA Pre-Surgery Checklist Page
// Interactive patient tool
// ============================================

import { pageLayout, initCommon } from '../components/layout.js';

export function fdaChecklistPage() {
  const checklistSections = [
    {
      title: 'Understanding the Device',
      icon: '🔬',
      items: [
        'I understand the type of implant being used (saline, silicone gel, or structured).',
        'I know the brand, model, and size of my chosen implant.',
        'I understand the difference between smooth and textured surfaces.',
        'I know whether my implant is round or anatomical (shaped).',
        'I understand the implant profile selected and why it suits my anatomy.',
        'I have reviewed the manufacturer\'s patient information materials.',
      ],
    },
    {
      title: 'Risks & Complications',
      icon: '⚠️',
      items: [
        'I understand that breast implants are NOT lifetime devices and may require future surgery.',
        'I am aware of capsular contracture — scar tissue hardening around the implant.',
        'I am aware of implant rupture risk and how it is detected (MRI for silicone).',
        'I have been informed about BIA-ALCL — a rare lymphoma associated with textured implants.',
        'I have been informed about Breast Implant Illness (BII) — reported systemic symptoms.',
        'I understand the risks of infection, bleeding, and poor scarring.',
        'I know the reoperation rate (~20–25% within 10 years) and what this means.',
        'I understand that results may not be perfectly symmetrical.',
        'I am aware that breast implants may affect mammography and breastfeeding.',
      ],
    },
    {
      title: 'My Surgeon & Facility',
      icon: '👨‍⚕️',
      items: [
        'My surgeon is certified by the American Board of Plastic Surgery (ABPS).',
        'I have verified my surgeon\'s board certification at abplasticsurgery.org.',
        'The surgical facility is accredited (AAAASF, AAAHC, or state-licensed).',
        'Anesthesia will be administered by a board-certified anesthesiologist or CRNA.',
        'I have reviewed my surgeon\'s before/after photos of similar patients.',
        'I have discussed my goals and concerns with my surgeon directly.',
        'I trust my surgeon\'s judgment and feel comfortable with their recommendations.',
      ],
    },
    {
      title: 'Pre-Surgery Preparation',
      icon: '📋',
      items: [
        'I have completed all required pre-operative testing (labs, imaging).',
        'I have stopped smoking for at least 4 weeks (if applicable).',
        'I have stopped blood-thinning medications and supplements as directed.',
        'I have arranged for a responsible adult to drive me home and stay with me for 24 hours.',
        'I have filled all prescribed medications (pain, antibiotics, anti-nausea).',
        'I have prepared my recovery space at home.',
        'I have purchased required post-surgical garments (surgical bra).',
        'I have arranged time off work and necessary help at home.',
      ],
    },
    {
      title: 'Financial & Administrative',
      icon: '💰',
      items: [
        'I have received a detailed, itemized cost breakdown for the entire procedure.',
        'I understand that cosmetic augmentation is NOT covered by insurance.',
        'I understand the financial terms of any financing arrangement.',
        'I have reviewed and understand the surgeon\'s revision/reoperation policy.',
        'I have registered (or will register) my implants for the manufacturer warranty.',
        'I have received and signed the FDA Patient Decision Checklist.',
      ],
    },
    {
      title: 'Long-Term Monitoring',
      icon: '📅',
      items: [
        'I understand I need regular follow-up visits with my surgeon.',
        'For silicone implants: I understand the MRI/ultrasound monitoring schedule (first at 5–6 years, then every 2–3 years).',
        'I know the symptoms of rupture, capsular contracture, BIA-ALCL, and infection.',
        'I know when to contact my surgeon urgently (fever, sudden swelling, severe pain).',
        'I understand that future pregnancies, weight changes, and aging may affect my results.',
        'I have a plan for long-term implant monitoring costs.',
      ],
    },
  ];

  const html = pageLayout(`
<!-- Checklist Hero -->
<section class="article-hero">
  <div class="container">
    <div class="article-hero-content">
      <div class="article-meta-badges">
        <span class="article-badge article-badge--reviewed">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          Patient Safety Tool
        </span>
        <span class="article-badge">✅ Interactive Checklist</span>
      </div>
      <h1>FDA Pre-Surgery Checklist</h1>
      <p class="hub-intro">Use this interactive checklist to ensure you've covered all essential steps before breast augmentation surgery. Based on FDA guidance and medical best practices.</p>
    </div>
  </div>
</section>

<!-- Checklist Body -->
<section class="section">
  <div class="container">
    <div class="article-layout">
      <!-- Sidebar -->
      <aside class="article-sidebar" id="article-sidebar">
        <div class="toc" id="toc">
          <h4 class="toc-title">Progress</h4>
          <div class="checklist-progress-wrap">
            <div class="checklist-progress-bar">
              <div class="checklist-progress-fill" id="progress-fill" style="width: 0%"></div>
            </div>
            <span class="checklist-progress-text" id="progress-text">0 of ${checklistSections.reduce((sum, s) => sum + s.items.length, 0)} completed</span>
          </div>
          <nav>
            <ul>
              ${checklistSections.map((s, i) => `<li><a href="#section-${i}" class="toc-link">${s.icon} ${s.title}</a></li>`).join('')}
            </ul>
          </nav>
        </div>
      </aside>

      <!-- Main Content -->
      <article class="article-content" id="article-content">
        <!-- Safety Note -->
        <div class="article-safety-note">
          <span class="icon">📝</span>
          <div>
            <strong>How to Use This Checklist</strong>
            <p>Check off each item as you confirm it. Your progress is saved locally in your browser. This checklist is for personal preparation — it does not replace the official FDA Patient Decision Checklist your surgeon must provide.</p>
          </div>
        </div>

        ${checklistSections.map((section, sIdx) => `
        <div class="article-section checklist-section" id="section-${sIdx}">
          <h2>${section.icon} ${section.title}</h2>
          <div class="checklist-items">
            ${section.items.map((item, iIdx) => `
            <label class="checklist-item" id="check-${sIdx}-${iIdx}">
              <input type="checkbox" class="checklist-checkbox" data-section="${sIdx}" data-item="${iIdx}">
              <span class="checklist-checkmark"></span>
              <span class="checklist-label">${item}</span>
            </label>`).join('')}
          </div>
        </div>`).join('')}

        <!-- Actions -->
        <div class="article-section">
          <h2>Ready for Surgery?</h2>
          <div class="checklist-summary" id="checklist-summary">
            <div class="checklist-summary-status" id="summary-status">
              <span class="checklist-status-icon">📋</span>
              <p>Complete all items above to confirm your readiness.</p>
            </div>
          </div>
          <div style="display: flex; gap: 1rem; margin-top: 1.5rem; flex-wrap: wrap;">
            <button class="btn btn-primary" id="print-checklist" onclick="window.print()">🖨️ Print Checklist</button>
            <button class="btn btn-outline" id="reset-checklist">🔄 Reset All</button>
          </div>
        </div>

        <!-- Disclaimer -->
        <div class="article-disclaimer">
          <div class="article-disclaimer-icon">🛡️</div>
          <div>
            <strong>Medical Disclaimer</strong>
            <p>This checklist is for educational and personal preparation purposes only. It does not replace the official FDA Patient Decision Checklist, informed consent process, or medical advice from your board-certified plastic surgeon.</p>
          </div>
        </div>
      </article>
    </div>
  </div>
</section>

<!-- CTA Section -->
<section class="section section--alt">
  <div class="container">
    <div class="cta-section">
      <h2>Need Help Preparing?</h2>
      <p>Use our surgeon consultation question list to make the most of your appointment.</p>
      <a href="/questions-for-surgeon/" class="btn-white">Get the Question List →</a>
    </div>
  </div>
</section>
  `, [
    { label: 'Patient Tools', href: '/breast-implant-procedures/' },
    { label: 'FDA Pre-Surgery Checklist' }
  ]);

  return {
    html,
    title: 'FDA Pre-Surgery Checklist — Breast Augmentation Preparation | Breasts-Implants.com',
    description: 'Interactive pre-surgery checklist for breast augmentation based on FDA guidance. Track your preparation progress across surgeon verification, medical clearance, and recovery planning.',
    init() {
      initCommon();
      initChecklist();
    },
  };
}

function initChecklist() {
  const STORAGE_KEY = 'fda-checklist-state';
  const checkboxes = document.querySelectorAll('.checklist-checkbox');
  const totalItems = checkboxes.length;

  // Load saved state
  const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
  checkboxes.forEach(cb => {
    const key = `${cb.dataset.section}-${cb.dataset.item}`;
    if (saved[key]) {
      cb.checked = true;
      cb.closest('.checklist-item').classList.add('checked');
    }
  });

  updateProgress();

  // Listen for changes
  checkboxes.forEach(cb => {
    cb.addEventListener('change', () => {
      const key = `${cb.dataset.section}-${cb.dataset.item}`;
      const state = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');

      if (cb.checked) {
        state[key] = true;
        cb.closest('.checklist-item').classList.add('checked');
      } else {
        delete state[key];
        cb.closest('.checklist-item').classList.remove('checked');
      }

      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      updateProgress();
    });
  });

  // Reset button
  const resetBtn = document.getElementById('reset-checklist');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (confirm('Reset all checklist items? This cannot be undone.')) {
        localStorage.removeItem(STORAGE_KEY);
        checkboxes.forEach(cb => {
          cb.checked = false;
          cb.closest('.checklist-item').classList.remove('checked');
        });
        updateProgress();
      }
    });
  }

  function updateProgress() {
    const checked = document.querySelectorAll('.checklist-checkbox:checked').length;
    const pct = Math.round((checked / totalItems) * 100);
    const fill = document.getElementById('progress-fill');
    const text = document.getElementById('progress-text');
    const status = document.getElementById('summary-status');

    if (fill) fill.style.width = `${pct}%`;
    if (text) text.textContent = `${checked} of ${totalItems} completed (${pct}%)`;

    if (status) {
      if (pct === 100) {
        status.innerHTML = `
          <span class="checklist-status-icon">✅</span>
          <div>
            <strong>Checklist Complete!</strong>
            <p>You've confirmed all preparation items. You appear well-prepared for your consultation and surgery. Remember, this checklist supplements — but does not replace — your surgeon's guidance and the official FDA Patient Decision Checklist.</p>
          </div>
        `;
      } else if (pct >= 50) {
        status.innerHTML = `
          <span class="checklist-status-icon">📋</span>
          <div>
            <strong>Good Progress — ${totalItems - checked} items remaining</strong>
            <p>You're on track. Review the unchecked items above and address them before your surgery date.</p>
          </div>
        `;
      } else {
        status.innerHTML = `
          <span class="checklist-status-icon">📋</span>
          <div>
            <strong>${totalItems - checked} items remaining</strong>
            <p>Complete all items above to confirm your readiness for breast augmentation surgery.</p>
          </div>
        `;
      }
    }
  }
}
