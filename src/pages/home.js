// ============================================
// Homepage
// ============================================

import { pageLayout, initCommon } from '../components/layout.js';
import { faqPageSchema, medicalWebPageSchema, organizationSchema, webSiteSchema } from '../data/schema.js';
import heroImg from '../assets/hero-medical-480.webp';
import hero560Img from '../assets/hero-medical-560.webp';

export function homePage() {
  const html = pageLayout(`
<!-- Hero Section -->
<section class="hero" id="hero">
  <div class="container">
    <div class="hero-content">
      <div class="hero-badge">
        <span class="dot"></span>
        Medically reviewed · Updated June 2026
      </div>
      <h1>Your Complete Guide to Breast Implants</h1>
      <p class="hero-desc">
        Evidence based information to help you make informed decisions about perfect breast augmentation (often called boob augmentation or a boob operation). 
        Explore various types of breast enhancement, understand the options for safe breast enlargement, know the risks, and prepare for every step of your chest augmentation journey.
      </p>
      <div class="hero-actions">
        <a href="/breast-implant-types/" class="btn btn-primary btn-lg">Explore Implant Types →</a>
        <a href="/breast-implant-procedures/" class="btn btn-outline btn-lg">Understand the Procedure</a>
      </div>
      <div class="review-badge" style="margin-top:1.5rem">
        <span class="shield">🛡️</span>
        Content reviewed by board-certified plastic surgeons
      </div>
    </div>
    <div class="hero-image">
      <img src="${heroImg}" srcset="${heroImg} 480w, ${hero560Img} 560w" sizes="(max-width: 768px) 320px, 480px" alt="Breast implant patient education" width="480" height="480" loading="eager" fetchpriority="high" decoding="async" />
    </div>
  </div>
</section>

<!-- Stats Section -->
<section class="section section--alt">
  <div class="container">
    <div class="stats-row">
      <div class="stat-item">
        <div class="stat-number">300K+</div>
        <div class="stat-label">Augmentations performed annually in the US</div>
      </div>
      <div class="stat-item">
        <div class="stat-number">178</div>
        <div class="stat-label">Evidence-based articles in our library</div>
      </div>
      <div class="stat-item">
        <div class="stat-number">24</div>
        <div class="stat-label">Board-certified reviewers on our panel</div>
      </div>
      <div class="stat-item">
        <div class="stat-number">100%</div>
        <div class="stat-label">Independent — no manufacturer affiliations</div>
      </div>
    </div>
  </div>
</section>

<!-- Decision Pathways -->
<section class="section" id="pathways">
  <div class="container">
    <div class="section-header">
      <span class="section-label">Start Here</span>
      <h2>Where Are You in Your Journey?</h2>
      <p>Select the path that best describes your situation for personalized guidance.</p>
    </div>
    <div class="pathways">
      <a href="/breast-implant-types/" class="pathway-card">
        <span class="pathway-emoji">🤔</span>
        <h3>Considering Implants</h3>
        <p>Learn the basics: types, shapes, sizes, and what to expect</p>
      </a>
      <a href="/fda-checklist/" class="pathway-card">
        <span class="pathway-emoji">📋</span>
        <h3>Preparing for Surgery</h3>
        <p>Surgeon selection, consultations, pre-op checklist</p>
      </a>
      <a href="/breast-augmentation-recovery-timeline/" class="pathway-card">
        <span class="pathway-emoji">🩹</span>
        <h3>In Recovery</h3>
        <p>Week-by-week timeline, what's normal, when to call your surgeon</p>
      </a>
      <a href="/breast-implants-risks-and-complications/" class="pathway-card">
        <span class="pathway-emoji">⚠️</span>
        <h3>Concerned About Symptoms</h3>
        <p>Understand complications, BII, capsular contracture, and more</p>
      </a>
      <a href="/breast-implant-removal/" class="pathway-card">
        <span class="pathway-emoji">🔄</span>
        <h3>Considering Revision</h3>
        <p>When and why implants are replaced or removed</p>
      </a>
      <a href="/breast-implants-alternatives/" class="pathway-card">
        <span class="pathway-emoji">💡</span>
        <h3>Exploring Alternatives</h3>
        <p>Fat transfer, composite augmentation, and non-surgical options</p>
      </a>
    </div>
  </div>
</section>

<!-- Implant Types Comparison -->
<section class="section section--alt" id="implant-types">
  <div class="container">
    <div class="section-header">
      <span class="section-label">Compare Options</span>
      <h2>Implant Types at a Glance</h2>
      <p>A quick comparison of the major implant types currently available.</p>
    </div>
    <div style="overflow-x:auto;border-radius:var(--radius-lg);">
      <table class="comparison-table">
        <thead>
          <tr>
            <th>Feature</th>
            <th>Saline</th>
            <th>Silicone Gel</th>
            <th>Gummy Bear (Form-Stable)</th>
            <th>Structured Saline</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Fill Material</strong></td>
            <td>Sterile saltwater</td>
            <td>Cohesive silicone gel</td>
            <td>Highly cohesive silicone</td>
            <td>Saline + internal structure</td>
          </tr>
          <tr>
            <td><strong>FDA Min. Age</strong></td>
            <td>18 years</td>
            <td>22 years</td>
            <td>22 years</td>
            <td>18 years</td>
          </tr>
          <tr>
            <td><strong>Feel</strong></td>
            <td>Firmer, less natural</td>
            <td>Soft, natural</td>
            <td>Firm, shape-retaining</td>
            <td>More natural than saline</td>
          </tr>
          <tr>
            <td><strong>Rupture Detection</strong></td>
            <td><span class="table-badge badge-approved">Easy — visible deflation</span></td>
            <td><span class="table-badge badge-caution">Requires MRI / ultrasound</span></td>
            <td><span class="table-badge badge-caution">Requires imaging</span></td>
            <td><span class="table-badge badge-approved">Visible deflation</span></td>
          </tr>
          <tr>
            <td><strong>Avg. Cost Range</strong></td>
            <td>$5,000 – $8,000</td>
            <td>$6,000 – $10,000</td>
            <td>$6,500 – $12,000</td>
            <td>$7,000 – $10,000</td>
          </tr>
          <tr>
            <td><strong>Learn More</strong></td>
            <td><a href="/saline-breast-implants/">Saline Guide →</a></td>
            <td><a href="/silicone-breast-implants/">Silicone Guide →</a></td>
            <td><a href="/gummy-bear-implants/">Gummy Bear Guide →</a></td>
            <td><a href="/structured-saline-implants/">Structured Guide →</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

<!-- Procedure Journey Timeline -->
<section class="section" id="procedure-journey">
  <div class="container">
    <div class="section-header">
      <span class="section-label">The Procedure</span>
      <h2>Your Augmentation Journey</h2>
      <p>From first consultation to full recovery — here's what to expect at each stage.</p>
    </div>
    <div style="max-width:700px;margin:0 auto;">
      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <h4>1. Research & Self-Education</h4>
          <p>Understand your options, goals, and realistic expectations. Use our guides to learn about implant types, shapes, sizes, and risks before your first consultation.</p>
        </div>
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <h4>2. Surgeon Consultation</h4>
          <p>Meet with 2–3 board-certified plastic surgeons. Discuss your anatomy, preferences, and review our <a href="/questions-for-surgeon/">questions to ask your surgeon</a>.</p>
        </div>
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <h4>3. Pre-Op Preparation</h4>
          <p>Medical clearance, lab work, medication adjustments, and preparing your recovery space. Follow our <a href="/fda-checklist/">FDA pre-surgery checklist</a>.</p>
        </div>
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <h4>4. Surgery Day</h4>
          <p>The procedure typically takes 1–2 hours under general anesthesia. Most augmentations are outpatient — you go home the same day.</p>
        </div>
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <h4>5. Recovery & Follow-Up</h4>
          <p>Most patients return to desk work within 1 week and full activity by 6 weeks. Follow our <a href="/breast-augmentation-recovery-timeline/">week-by-week recovery timeline</a>.</p>
        </div>
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <h4>6. Long-Term Monitoring</h4>
          <p>Implants are not lifetime devices. Regular self-exams and imaging per FDA guidelines help ensure ongoing safety.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Content Silos -->
<section class="section section--alt" id="topics">
  <div class="container">
    <div class="section-header">
      <span class="section-label">Explore Topics</span>
      <h2>Our Content Library</h2>
      <p>Deep-dive into any topic with medically reviewed, evidence-based articles.</p>
    </div>
    <div class="grid-4">
      <a href="/breast-implant-types/" class="card">
        <div class="card-icon card-icon--blue">🔬</div>
        <h3>Implant Types</h3>
        <p>Saline, silicone, gummy bear, structured — compare every option available today.</p>
      </a>
      <a href="/shapes-and-sizes/" class="card">
        <div class="card-icon card-icon--teal">📐</div>
        <h3>Shapes & Sizes</h3>
        <p>Round vs. teardrop, profiles, CC sizing charts, and how to choose what fits your frame.</p>
      </a>
      <a href="/breast-implant-procedures/" class="card">
        <div class="card-icon card-icon--blue">🏥</div>
        <h3>The Procedure</h3>
        <p>Incision types, placement options, anesthesia, and what happens in the operating room.</p>
      </a>
      <a href="/costs-financing/" class="card">
        <div class="card-icon card-icon--amber">💰</div>
        <h3>Costs & Financing</h3>
        <p>Average prices, cost breakdowns, insurance, financing options, and hidden fees.</p>
      </a>
      <a href="/breast-implants-risks-and-complications/" class="card">
        <div class="card-icon card-icon--red">⚠️</div>
        <h3>Risks & Safety</h3>
        <p>Capsular contracture, rupture, BII, BIA-ALCL, infection — what the evidence says.</p>
      </a>
      <a href="/breast-implant-brands/" class="card">
        <div class="card-icon card-icon--blue">🏷️</div>
        <h3>Brands & Devices</h3>
        <p>Allergan, Mentor, Sientra, Motiva — regulatory status, safety data, and warranties.</p>
      </a>
      <a href="/breast-implants-alternatives/" class="card">
        <div class="card-icon card-icon--green">🌿</div>
        <h3>Alternatives</h3>
        <p>Fat transfer, composite augmentation, and non-surgical enhancement options.</p>
      </a>
      <a href="/research-and-data/" class="card">
        <div class="card-icon card-icon--teal">📚</div>
        <h3>Research & Data</h3>
        <p>Clinical studies, FDA data, long-term outcomes, and emerging research summaries.</p>
      </a>
    </div>
  </div>
</section>

<!-- Safety Callout -->
<section class="section" id="safety">
  <div class="container">
    <div class="safety-callout">
      <span class="icon">⚠️</span>
      <div>
        <h4>Important Safety Information</h4>
        <p>Breast implants are not lifetime devices. The FDA recommends regular monitoring including MRI or ultrasound screening. 
        All breast implants carry risks including capsular contracture, implant rupture, and BIA-ALCL (a rare lymphoma). 
        <a href="/breast-implants-risks-and-complications/">Read our complete safety overview →</a></p>
      </div>
    </div>
  </div>
</section>

<!-- Costs Overview -->
<section class="section section--alt" id="costs">
  <div class="container">
    <div class="section-header">
      <span class="section-label">Financial Planning</span>
      <h2>Understanding the Costs</h2>
      <p>Breast augmentation costs vary widely. Here's a transparent breakdown.</p>
    </div>
    <div class="grid-3">
      <div class="card" style="text-align:center;">
        <div class="stat-number" style="font-size:2rem;">$6,000–$12,000</div>
        <h4 style="margin:0.5rem 0 0.25rem;">Total Average Range</h4>
        <p>Includes surgeon, anesthesia, facility, implants, and follow-up care.</p>
      </div>
      <div class="card" style="text-align:center;">
        <div class="stat-number" style="font-size:2rem;color:var(--color-accent-warm);">$1,000–$2,500</div>
        <h4 style="margin:0.5rem 0 0.25rem;">Implant Cost Alone</h4>
        <p>Varies by type: saline is least expensive, gummy bear is most.</p>
      </div>
      <div class="card" style="text-align:center;">
        <div class="stat-number" style="font-size:2rem;color:var(--color-accent);">$3,500–$6,000</div>
        <h4 style="margin:0.5rem 0 0.25rem;">Surgeon's Fee</h4>
        <p>The largest cost component. Varies by geography and experience.</p>
      </div>
    </div>
    <p style="text-align:center;margin-top:1.5rem;">
      <a href="/breast-implant-cost/" class="btn btn-outline">See Full Cost Breakdown →</a>
    </p>
  </div>
</section>

<!-- FAQ Section -->
<section class="section" id="faq">
  <div class="container">
    <div class="section-header">
      <span class="section-label">Common Questions</span>
      <h2>Frequently Asked Questions</h2>
      <p>Quick answers to the most common questions about breast implants.</p>
    </div>
    <div class="faq-list">
      <div class="faq-item">
        <button class="faq-question">
          How long do breast implants last?
          <span class="faq-chevron">▼</span>
        </button>
        <div class="faq-answer">
          <div class="faq-answer-inner">
            Breast implants are not considered lifetime devices. While many implants last 10–20 years or longer, the FDA does not specify an expiration date. The likelihood of complications increases over time, and most patients will need at least one revision surgery in their lifetime. Regular monitoring with your surgeon is essential.
          </div>
        </div>
      </div>
      <div class="faq-item">
        <button class="faq-question">
          What are the best breast implants for my body?
          <span class="faq-chevron">▼</span>
        </button>
        <div class="faq-answer">
          <div class="faq-answer-inner">
            There is no single "best breast implants" option. The perfect breast implants for you will depend on your unique anatomy, lifestyle, and aesthetic goals. Your surgeon will help you decide between saline and silicone, round and teardrop shapes, and various profiles based on your tissue elasticity and chest width.
          </div>
        </div>
      </div>
      <div class="faq-item">
        <button class="faq-question">
          What's the difference between saline and silicone implants?
          <span class="faq-chevron">▼</span>
        </button>
        <div class="faq-answer">
          <div class="faq-answer-inner">
            Saline implants are filled with sterile saltwater after insertion, while silicone implants come pre-filled with cohesive silicone gel. Silicone generally feels more natural but requires imaging to detect rupture. Saline ruptures are immediately visible as the implant deflates. Both are FDA-approved and safe. <a href="/saline-vs-silicone-implants/">Read our full comparison →</a>
          </div>
        </div>
      </div>
      <div class="faq-item">
        <button class="faq-question">
          Is breast augmentation painful?
          <span class="faq-chevron">▼</span>
        </button>
        <div class="faq-answer">
          <div class="faq-answer-inner">
            Most patients describe discomfort rather than severe pain. The first 3–5 days are typically the most uncomfortable, especially with submuscular placement. Pain is manageable with prescribed medication. Most patients transition to over-the-counter pain relief within a week.
          </div>
        </div>
      </div>
      <div class="faq-item">
        <button class="faq-question">
          Can breast implants cause cancer?
          <span class="faq-chevron">▼</span>
        </button>
        <div class="faq-answer">
          <div class="faq-answer-inner">
            BIA-ALCL (Breast Implant-Associated Anaplastic Large Cell Lymphoma) is a rare cancer of the immune system — not breast cancer — that has been associated primarily with textured-surface implants. The risk is estimated at 1 in 2,207 to 1 in 86,029 depending on implant type. Smooth implants have a significantly lower risk. <a href="/bia-alcl/">Learn more about BIA-ALCL →</a>
          </div>
        </div>
      </div>
      <div class="faq-item">
        <button class="faq-question">
          What is breast implant illness (BII)?
          <span class="faq-chevron">▼</span>
        </button>
        <div class="faq-answer">
          <div class="faq-answer-inner">
            BII is a term used by patients to describe a variety of systemic symptoms — including fatigue, brain fog, joint pain, and autoimmune-like symptoms — that they attribute to their breast implants. While the FDA acknowledges patient reports, there is no diagnostic test for BII. Some patients report symptom improvement after explantation. <a href="/breast-implant-illness/">Read our BII evidence review →</a>
          </div>
        </div>
      </div>
      <div class="faq-item">
        <button class="faq-question">
          Will insurance cover breast implant surgery?
          <span class="faq-chevron">▼</span>
        </button>
        <div class="faq-answer">
          <div class="faq-answer-inner">
            Cosmetic breast augmentation is almost never covered by insurance. However, reconstructive breast surgery after mastectomy is federally mandated to be covered under the Women's Health and Cancer Rights Act (WHCRA). Some revision surgeries for complications may also be partially covered. <a href="/costs-financing/">See our insurance and financing guide →</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- CTA Section -->
<section class="section">
  <div class="container">
    <div class="cta-section">
      <h2>Ready to Learn More?</h2>
      <p>Download our free patient guide with everything you need to know before your consultation.</p>
      <a href="/patient-guides/" class="btn-white">Download Free Patient Guide →</a>
    </div>
  </div>
</section>
  `);

  return {
    html,
    title: 'Breast Implants Guide — Evidence-Based Patient Education | Breasts-Implants.com',
    description: 'Comprehensive, medically reviewed guide to breast implants. Compare saline vs silicone, understand risks, costs, procedure steps, and recovery.',
    schema: [
      organizationSchema(),
      webSiteSchema(),
      medicalWebPageSchema({
        name: 'Your Complete Guide to Breast Implants',
        url: '/',
        description: 'Comprehensive, medically reviewed guide to breast implants. Compare saline vs silicone, understand risks, costs, procedure steps, and recovery.',
        lastReviewed: '2026-06-01',
        reviewedBy: 'Board-Certified Plastic Surgeon',
        about: {
          '@type': 'MedicalProcedure',
          name: 'Breast Augmentation',
          procedureType: 'https://schema.org/SurgicalProcedure',
        },
      }),
      faqPageSchema([
        {
          question: 'Are breast implants safe?',
          answer: 'Breast implants are FDA-approved medical devices, but they are not lifetime devices and can require additional surgery. Patients should understand rupture, capsular contracture, BIA-ALCL, BII reports, and routine follow-up before deciding.',
        },
        {
          question: 'What is the difference between saline and silicone implants?',
          answer: 'Saline implants are filled with sterile saltwater and usually deflate visibly after rupture. Silicone implants are filled with cohesive gel and generally feel more natural, but silent rupture may require imaging to detect.',
        },
        {
          question: 'How long is breast implant recovery?',
          answer: 'Many patients return to desk work in about one week, resume light exercise around three weeks, and return to full activity around six weeks, depending on surgeon guidance and individual healing.',
        },
      ]),
    ],
    init() {
      initCommon();

      // FAQ Accordion
      document.querySelectorAll('.faq-question').forEach(btn => {
        btn.addEventListener('click', () => {
          const item = btn.parentElement;
          const wasOpen = item.classList.contains('open');
          document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
          if (!wasOpen) item.classList.add('open');
        });
      });
    }
  };
}
