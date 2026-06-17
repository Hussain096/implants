// ============================================
// Tool: Questions for Your Surgeon
// Interactive checklist page
// ============================================

import { pageLayout, initCommon } from '../components/layout.js';

const questionCategories = [
  {
    title: 'About the Surgeon',
    icon: '👨‍⚕️',
    questions: [
      'Are you board-certified by the American Board of Plastic Surgery (ABPS)?',
      'How many breast augmentations have you performed?',
      'Can I see before-and-after photos of patients with a similar body type?',
      'Do you have hospital privileges to perform this procedure?',
      'What is your complication rate for breast augmentation?',
      'How many years have you been performing breast augmentations?',
    ],
  },
  {
    title: 'About the Implant',
    icon: '🔬',
    questions: [
      'Which implant type (saline, silicone, gummy bear, structured) do you recommend for me and why?',
      'Which implant brand do you use most frequently and why?',
      'What size range do you recommend for my body frame?',
      'What profile (low, moderate, moderate-plus, high) would best achieve my goals?',
      'Do you recommend round or anatomical (teardrop) implants for me?',
      'What are the specific risks of the implant type you recommend?',
    ],
  },
  {
    title: 'About the Procedure',
    icon: '🏥',
    questions: [
      'Which incision location do you recommend (inframammary, periareolar, transaxillary)?',
      'Do you recommend submuscular or subglandular placement?',
      'Will you use a Keller funnel or "no-touch" technique?',
      'What steps do you take to prevent capsular contracture?',
      'What type of anesthesia will be used? Who is the anesthesiologist?',
      'Is the surgical facility accredited (AAAASF, AAAHC)?',
      'How long will the procedure take?',
      'Will drains be used?',
    ],
  },
  {
    title: 'About Recovery',
    icon: '📅',
    questions: [
      'What is the typical recovery timeline for your patients?',
      'When can I return to work? To exercise?',
      'What pain management approach do you use?',
      'How many follow-up visits are included in the cost?',
      'What post-operative restrictions will I have?',
      'When can I sleep on my side/stomach?',
    ],
  },
  {
    title: 'About Risks',
    icon: '⚠️',
    questions: [
      'What are the most common complications you see?',
      'What is your approach if I develop capsular contracture?',
      'What monitoring do you recommend for implant rupture?',
      'What are your thoughts on breast implant illness (BII)?',
      'What should I watch for after surgery that would require contacting you?',
      'What is your revision rate within the first year?',
    ],
  },
  {
    title: 'About Cost & Logistics',
    icon: '💰',
    questions: [
      'What is the total all-inclusive cost? Can I get an itemized breakdown?',
      'What does the quote include (anesthesia, facility, follow-up visits)?',
      'Do you offer financing or payment plans?',
      'What is the manufacturer warranty on the implants?',
      'What is your policy on revision surgery if needed within the first year?',
      'What are the additional costs I should budget for (garments, medications, MRI)?',
    ],
  },
];

export function questionsPage() {
  const html = pageLayout(`
<!-- Page Hero -->
<section class="hub-hero">
  <div class="container">
    <div class="hub-hero-content">
      <span class="section-label">❓ Patient Tool</span>
      <h1>Questions to Ask Your Plastic Surgeon</h1>
      <p class="hub-intro">Use this interactive checklist during your consultation to ensure you cover all important topics. Check off questions as you ask them, and print the list to bring to your appointment.</p>
      <div style="display:flex;gap:0.75rem;margin-top:1.5rem;flex-wrap:wrap;">
        <button class="btn btn-primary" id="btn-print" onclick="window.print()">🖨️ Print This Checklist</button>
        <button class="btn btn-outline" id="btn-clear">Clear All Checks</button>
      </div>
    </div>
  </div>
</section>

<!-- Questions -->
<section class="section">
  <div class="container">
    <div class="questions-progress" id="questions-progress">
      <div class="progress-bar"><div class="progress-fill" id="progress-fill"></div></div>
      <span class="progress-text" id="progress-text">0 of ${questionCategories.reduce((a, c) => a + c.questions.length, 0)} questions checked</span>
    </div>
    <div class="questions-grid">
      ${questionCategories.map((cat, ci) => `
      <div class="question-category">
        <div class="question-category-header">
          <span class="question-category-icon">${cat.icon}</span>
          <h2>${cat.title}</h2>
          <span class="question-count" id="cat-count-${ci}">0/${cat.questions.length}</span>
        </div>
        <div class="question-list">
          ${cat.questions.map((q, qi) => `
          <label class="question-item" id="q-${ci}-${qi}">
            <input type="checkbox" class="question-check" data-cat="${ci}">
            <span class="question-checkbox"></span>
            <span class="question-text">${q}</span>
          </label>`).join('')}
        </div>
      </div>`).join('')}
    </div>

    <!-- Tip -->
    <div class="hub-note" style="margin-top:2rem;">
      <span class="hub-note-icon">💡</span>
      <p><strong>Pro Tip:</strong> Schedule consultations with <strong>at least 2–3 surgeons</strong> before making your decision. Use this checklist at each appointment to compare responses. The surgeon who makes you feel most comfortable, answers questions thoroughly, and has the credentials to back up their recommendations is usually the right choice.</p>
    </div>
  </div>
</section>

<!-- CTA Section -->
<section class="section section--alt">
  <div class="container">
    <div class="cta-section">
      <h2>Ready for Your Consultation?</h2>
      <p>Print this checklist and bring it to your appointment. Being prepared leads to better outcomes.</p>
      <button class="btn-white" onclick="window.print()">🖨️ Print Checklist</button>
    </div>
  </div>
</section>
  `, [{ label: 'Questions for Your Surgeon' }]);

  return {
    html,
    title: 'Questions to Ask Your Plastic Surgeon | Breasts-Implants.com',
    description: '35+ essential questions to ask during your breast augmentation consultation. Interactive checklist — check questions off as you ask them and print the list.',
    init() {
      initCommon();
      initQuestions();
    }
  };
}

function initQuestions() {
  const totalQ = document.querySelectorAll('.question-check').length;
  const progressFill = document.getElementById('progress-fill');
  const progressText = document.getElementById('progress-text');
  const categories = questionCategories.length;

  // Load saved state
  const saved = JSON.parse(localStorage.getItem('surgeon-questions') || '{}');
  document.querySelectorAll('.question-check').forEach(cb => {
    const key = `${cb.dataset.cat}-${cb.closest('.question-item').id}`;
    if (saved[key]) {
      cb.checked = true;
      cb.closest('.question-item').classList.add('checked');
    }
  });

  function updateProgress() {
    const checked = document.querySelectorAll('.question-check:checked').length;
    const pct = (checked / totalQ) * 100;
    progressFill.style.width = `${pct}%`;
    progressText.textContent = `${checked} of ${totalQ} questions checked`;

    // Update category counts
    for (let i = 0; i < categories; i++) {
      const catChecks = document.querySelectorAll(`.question-check[data-cat="${i}"]`);
      const catChecked = document.querySelectorAll(`.question-check[data-cat="${i}"]:checked`);
      const countEl = document.getElementById(`cat-count-${i}`);
      if (countEl) countEl.textContent = `${catChecked.length}/${catChecks.length}`;
    }

    // Save state
    const state = {};
    document.querySelectorAll('.question-check').forEach(cb => {
      const key = `${cb.dataset.cat}-${cb.closest('.question-item').id}`;
      if (cb.checked) state[key] = true;
    });
    localStorage.setItem('surgeon-questions', JSON.stringify(state));
  }

  // Event listeners
  document.querySelectorAll('.question-check').forEach(cb => {
    cb.addEventListener('change', () => {
      cb.closest('.question-item').classList.toggle('checked', cb.checked);
      updateProgress();
    });
  });

  // Clear all
  document.getElementById('btn-clear')?.addEventListener('click', () => {
    document.querySelectorAll('.question-check').forEach(cb => {
      cb.checked = false;
      cb.closest('.question-item').classList.remove('checked');
    });
    localStorage.removeItem('surgeon-questions');
    updateProgress();
  });

  updateProgress();
}
