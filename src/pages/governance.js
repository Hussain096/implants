// ============================================
// Governance / Trust Pages
// About, Medical Review Policy, Medical Disclaimer, etc.
// ============================================

import { pageLayout, initCommon } from '../components/layout.js';

/**
 * Generic governance page renderer
 */
function governancePage(data) {
  const html = pageLayout(`
<section class="section">
  <div class="container">
    <div class="governance-layout">
      <div class="governance-content">
        <div class="governance-header">
          <span class="section-label">${data.badge}</span>
          <h1>${data.title}</h1>
          ${data.subtitle ? `<p class="governance-subtitle">${data.subtitle}</p>` : ''}
          ${data.lastUpdated ? `<p class="governance-date">Last updated: ${data.lastUpdated}</p>` : ''}
        </div>
        ${data.content}
      </div>
    </div>
  </div>
</section>
  `, data.breadcrumbs || [{ label: data.title }]);

  return {
    html,
    title: `${data.title} | Breasts-Implants.com`,
    description: data.metaDescription,
    init() { initCommon(); },
  };
}

/**
 * About Page
 */
export function aboutPage() {
  return governancePage({
    title: 'About Breasts-Implants.com',
    badge: 'About Us',
    subtitle: 'Independent, medically reviewed breast implant education — not affiliated with any manufacturer, surgeon, or clinic.',
    lastUpdated: 'June 2026',
    metaDescription: 'Learn about Breasts-Implants.com — our mission, editorial team, medical review process, and commitment to independent, evidence-based patient education.',
    content: `
      <div class="governance-section">
        <h2>Our Mission</h2>
        <p>Breasts-Implants.com exists to provide <strong>comprehensive, medically reviewed, and unbiased information</strong> about breast implants and breast augmentation. We believe that patients deserve access to the same quality of evidence-based information that medical professionals use, presented in clear, accessible language.</p>
        <p>We are <strong>not affiliated with any implant manufacturer, surgical practice, or clinic</strong>. We do not accept advertising from device manufacturers, and our content is never influenced by commercial interests.</p>
      </div>

      <div class="governance-section">
        <h2>What We Cover</h2>
        <p>Our content library spans the full spectrum of breast implant topics:</p>
        <ul class="governance-list">
          <li><strong>Implant types:</strong> Saline, silicone gel, gummy bear, and structured saline — objective comparisons</li>
          <li><strong>Procedure information:</strong> Incision types, placement options, surgery day, and recovery</li>
          <li><strong>Risks and safety:</strong> Evidence-based coverage of capsular contracture, rupture, BII, BIA-ALCL, and other complications</li>
          <li><strong>Cost transparency:</strong> Real cost data, financing options, and insurance coverage</li>
          <li><strong>Manufacturer data:</strong> FDA safety data, warranty comparisons, and regulatory status for all brands</li>
          <li><strong>Research summaries:</strong> Plain-language summaries of peer-reviewed studies and FDA data</li>
        </ul>
      </div>

      <div class="governance-section">
        <h2>Our Editorial Standards</h2>
        <div class="governance-cards">
          <div class="governance-card">
            <span class="governance-card-icon">🛡️</span>
            <h4>Medically Reviewed</h4>
            <p>Every article is reviewed by a board-certified plastic surgeon before publication.</p>
          </div>
          <div class="governance-card">
            <span class="governance-card-icon">📚</span>
            <h4>Evidence-Based</h4>
            <p>Content is based on peer-reviewed research, FDA data, and clinical guidelines.</p>
          </div>
          <div class="governance-card">
            <span class="governance-card-icon">🔄</span>
            <h4>Regularly Updated</h4>
            <p>Articles are reviewed and updated at least annually or when new data emerges.</p>
          </div>
          <div class="governance-card">
            <span class="governance-card-icon">⚖️</span>
            <h4>Balanced & Honest</h4>
            <p>We present risks and benefits without minimizing or exaggerating either.</p>
          </div>
        </div>
      </div>

      <div class="governance-section">
        <h2>Independence & Conflicts of Interest</h2>
        <p>Transparency is a core value. Here are our commitments:</p>
        <ul class="governance-list">
          <li>We do <strong>not accept advertising or sponsorship</strong> from breast implant manufacturers.</li>
          <li>We have <strong>no financial relationships</strong> with any surgeon, clinic, or device company.</li>
          <li>Our editorial team has <strong>full independence</strong> over all content decisions.</li>
          <li>If we ever generate revenue (e.g., through general advertising), it will be clearly disclosed and will never influence content.</li>
          <li>All medical reviewers disclose any potential conflicts of interest.</li>
        </ul>
      </div>

      <div class="governance-section">
        <h2>Contact Us</h2>
        <p>We welcome corrections, feedback, and questions:</p>
        <ul class="governance-list">
          <li><strong>Editorial inquiries:</strong> editorial@breasts-implants.com</li>
          <li><strong>Corrections:</strong> corrections@breasts-implants.com</li>
          <li><strong>General contact:</strong> contact@breasts-implants.com</li>
        </ul>
        <p class="text-muted text-small" style="margin-top:1rem;">We cannot provide individual medical advice. Please consult a board-certified plastic surgeon for personal medical questions.</p>
      </div>
    `,
  });
}

/**
 * Medical Disclaimer Page
 */
export function medicalDisclaimerPage() {
  return governancePage({
    title: 'Medical Disclaimer',
    badge: 'Legal',
    lastUpdated: 'June 2026',
    metaDescription: 'Medical disclaimer for Breasts-Implants.com. Our content is for informational purposes only and is not a substitute for professional medical advice.',
    content: `
      <div class="governance-section">
        <div class="article-safety-note" style="margin-bottom:2rem;">
          <span class="icon">⚠️</span>
          <div>
            <strong>Important Notice</strong>
            <p>The information provided on Breasts-Implants.com is for <strong>educational and informational purposes only</strong>. It is not intended as, and should not be considered, medical advice, diagnosis, or treatment.</p>
          </div>
        </div>
      </div>

      <div class="governance-section">
        <h2>Not Medical Advice</h2>
        <p>The content on this website, including text, graphics, images, and other material, is for informational purposes only. It is <strong>not intended to be a substitute for professional medical advice, diagnosis, or treatment</strong>.</p>
        <p>Always seek the advice of a <strong>board-certified plastic surgeon</strong> or other qualified healthcare provider with any questions you may have regarding breast implants, breast augmentation, or any medical condition. Never disregard professional medical advice or delay in seeking it because of something you have read on this website.</p>
      </div>

      <div class="governance-section">
        <h2>No Doctor-Patient Relationship</h2>
        <p>Use of this website does not create a doctor-patient or provider-patient relationship. The information on this site is general in nature and may not apply to your specific medical situation, anatomy, or health condition.</p>
      </div>

      <div class="governance-section">
        <h2>Accuracy and Limitations</h2>
        <p>While we strive to provide accurate, evidence-based information:</p>
        <ul class="governance-list">
          <li>Medical knowledge and FDA regulations evolve. Information may become outdated between review cycles.</li>
          <li>Statistics, costs, and clinical data are approximate and may vary by source, date, and location.</li>
          <li>Individual results, risks, and experiences vary based on personal anatomy, health, and surgical factors.</li>
          <li>We cannot guarantee the accuracy, completeness, or timeliness of all information on this site.</li>
        </ul>
      </div>

      <div class="governance-section">
        <h2>Emergency Situations</h2>
        <p>If you are experiencing a medical emergency, <strong>call 911 or your local emergency number immediately</strong>. Do not rely on this website for emergency medical information.</p>
      </div>

      <div class="governance-section">
        <h2>External Links</h2>
        <p>This website may contain links to external websites, including medical journals, FDA resources, and manufacturer sites. These links are provided for reference and convenience. We are not responsible for the content or accuracy of external websites.</p>
      </div>

      <div class="governance-section">
        <h2>Contact</h2>
        <p>If you have questions about this disclaimer or our content, please contact us at <strong>legal@breasts-implants.com</strong>.</p>
      </div>
    `,
  });
}

/**
 * Medical Review Policy Page
 */
export function medicalReviewPolicyPage() {
  return governancePage({
    title: 'Medical Review Policy',
    badge: 'Quality Standards',
    subtitle: 'How we ensure accuracy, objectivity, and clinical validity in every article.',
    lastUpdated: 'June 2026',
    metaDescription: 'Learn about our medical review process. Every article on Breasts-Implants.com is written by medical writers and reviewed by board-certified plastic surgeons.',
    content: `
      <div class="governance-section">
        <h2>Our Review Process</h2>
        <p>Every piece of medical content on Breasts-Implants.com goes through a rigorous multi-step review process before publication:</p>
        <div class="governance-steps">
          <div class="governance-step">
            <span class="governance-step-num">1</span>
            <div>
              <h4>Research & Drafting</h4>
              <p>Medical writers with healthcare backgrounds research the topic using peer-reviewed literature, FDA databases, clinical guidelines, and manufacturer data. A comprehensive draft is created with inline citations.</p>
            </div>
          </div>
          <div class="governance-step">
            <span class="governance-step-num">2</span>
            <div>
              <h4>Medical Review</h4>
              <p>A board-certified plastic surgeon reviews the draft for clinical accuracy, appropriate context, and balanced risk/benefit presentation. They flag any inaccuracies or areas needing revision.</p>
            </div>
          </div>
          <div class="governance-step">
            <span class="governance-step-num">3</span>
            <div>
              <h4>Editorial Review</h4>
              <p>The editorial team reviews for clarity, readability, bias, and adherence to our content guidelines. Medical jargon is translated into patient-friendly language without losing accuracy.</p>
            </div>
          </div>
          <div class="governance-step">
            <span class="governance-step-num">4</span>
            <div>
              <h4>Publication & Monitoring</h4>
              <p>After approval, the article is published with last-reviewed dates, author attribution, and reviewer credentials. Articles are monitored for reader feedback and flagged for update when new evidence emerges.</p>
            </div>
          </div>
          <div class="governance-step">
            <span class="governance-step-num">5</span>
            <div>
              <h4>Annual Review Cycle</h4>
              <p>All articles are reviewed at minimum annually. High-impact articles (safety, FDA data) are reviewed more frequently — especially when new clinical data, FDA communications, or regulatory changes occur.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="governance-section">
        <h2>Our Content Standards</h2>
        <ul class="governance-list">
          <li><strong>Evidence-based:</strong> Claims are supported by peer-reviewed research, FDA data, or established clinical guidelines.</li>
          <li><strong>Balanced:</strong> Risks and benefits are presented without minimizing or exaggerating.</li>
          <li><strong>Patient-centered:</strong> Information is framed around patient decision-making needs, not commercial interests.</li>
          <li><strong>Transparent:</strong> We distinguish between established evidence, emerging research, and patient-reported outcomes.</li>
          <li><strong>Referenced:</strong> Key claims include references to original sources.</li>
          <li><strong>Accessible:</strong> Medical terminology is explained in plain language.</li>
        </ul>
      </div>

      <div class="governance-section">
        <h2>Corrections Policy</h2>
        <p>If you identify an error in our content, we want to know. Please email <strong>corrections@breasts-implants.com</strong> with:</p>
        <ul class="governance-list">
          <li>The URL of the page containing the error</li>
          <li>A description of the error</li>
          <li>A reference to the correct information (if available)</li>
        </ul>
        <p>We will review and respond to all correction requests within 5 business days. Corrections are noted at the bottom of the affected article.</p>
      </div>
    `,
  });
}

/**
 * Privacy Policy Page
 */
export function privacyPolicyPage() {
  return governancePage({
    title: 'Privacy Policy',
    badge: 'Legal',
    lastUpdated: 'June 2026',
    metaDescription: 'Privacy policy for Breasts-Implants.com. Learn how we collect, use, and protect your data. We prioritize your privacy — especially given the sensitive nature of health information.',
    content: `
      <div class="governance-section">
        <h2>Introduction</h2>
        <p>Breasts-Implants.com ("we," "our," or "the site") is committed to protecting your privacy. Given the sensitive nature of health-related information, we take extra care with how we handle your data.</p>
        <p>This Privacy Policy explains what information we collect, how we use it, and your rights regarding that information.</p>
      </div>

      <div class="governance-section">
        <h2>Information We Collect</h2>
        <h3>Information You Provide</h3>
        <ul class="governance-list">
          <li><strong>Contact information:</strong> If you email us, we collect your email address and message content to respond to your inquiry.</li>
          <li><strong>Feedback:</strong> Voluntary feedback or corrections submitted through our contact channels.</li>
        </ul>
        <h3>Information Collected Automatically</h3>
        <ul class="governance-list">
          <li><strong>Analytics data:</strong> We use privacy-respecting analytics to understand how visitors use our site (pages visited, time on page, referral source). This data is aggregated and does not personally identify you.</li>
          <li><strong>Device information:</strong> Browser type, operating system, screen size — used for optimizing the reading experience.</li>
          <li><strong>Cookies:</strong> We use essential cookies for site functionality (e.g., dark mode preference). We do not use tracking cookies for advertising.</li>
        </ul>
      </div>

      <div class="governance-section">
        <h2>How We Use Your Information</h2>
        <ul class="governance-list">
          <li>To respond to your inquiries or correction requests</li>
          <li>To understand how visitors use our content (aggregate analytics)</li>
          <li>To improve our content and user experience</li>
          <li>To maintain site security and prevent abuse</li>
        </ul>
        <p><strong>We do NOT:</strong></p>
        <ul class="governance-list">
          <li>Sell your personal information to third parties</li>
          <li>Share your data with implant manufacturers, surgeons, or clinics</li>
          <li>Use your health-related browsing data for targeted advertising</li>
          <li>Create individual user profiles based on health content viewed</li>
        </ul>
      </div>

      <div class="governance-section">
        <h2>Your Rights</h2>
        <ul class="governance-list">
          <li><strong>Access:</strong> You may request a copy of any personal data we hold about you.</li>
          <li><strong>Deletion:</strong> You may request deletion of your personal data.</li>
          <li><strong>Correction:</strong> You may request correction of inaccurate data.</li>
          <li><strong>Opt-out:</strong> You may disable cookies through your browser settings.</li>
        </ul>
        <p>To exercise any of these rights, contact us at <strong>privacy@breasts-implants.com</strong>.</p>
      </div>

      <div class="governance-section">
        <h2>Data Security</h2>
        <p>We implement appropriate technical and organizational measures to protect your information, including encryption in transit (HTTPS), secure hosting, and limited data retention. However, no method of transmission over the Internet is 100% secure.</p>
      </div>

      <div class="governance-section">
        <h2>Children's Privacy</h2>
        <p>Our website is not directed at children under 13. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us immediately.</p>
      </div>

      <div class="governance-section">
        <h2>Changes to This Policy</h2>
        <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Last updated" date. Your continued use of the site after changes constitutes acceptance of the updated policy.</p>
      </div>

      <div class="governance-section">
        <h2>Contact</h2>
        <p>For privacy-related questions or requests, email <strong>privacy@breasts-implants.com</strong>.</p>
      </div>
    `,
  });
}

/**
 * Terms of Use Page
 */
export function termsOfUsePage() {
  return governancePage({
    title: 'Terms of Use',
    badge: 'Legal',
    lastUpdated: 'June 2026',
    metaDescription: 'Terms of use for Breasts-Implants.com. Understand the rules and conditions governing use of our medical education website.',
    content: `
      <div class="governance-section">
        <h2>Acceptance of Terms</h2>
        <p>By accessing and using Breasts-Implants.com ("the Site"), you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use the Site.</p>
      </div>

      <div class="governance-section">
        <h2>Purpose of the Site</h2>
        <p>Breasts-Implants.com provides <strong>educational information</strong> about breast implants and breast augmentation. The Site is intended for informational purposes only and is <strong>not a substitute for professional medical advice</strong>. See our <a href="/medical-disclaimer/">Medical Disclaimer</a> for complete details.</p>
      </div>

      <div class="governance-section">
        <h2>Permitted Use</h2>
        <p>You may use the Site for personal, non-commercial, educational purposes. You may:</p>
        <ul class="governance-list">
          <li>Read and share our articles for personal education</li>
          <li>Print articles for your own use or to bring to medical consultations</li>
          <li>Link to our content from other websites with proper attribution</li>
        </ul>
        <p>You may <strong>not</strong>:</p>
        <ul class="governance-list">
          <li>Reproduce our content in bulk for commercial purposes without permission</li>
          <li>Present our content as your own or remove attribution</li>
          <li>Use our content to create competing websites without substantial original contribution</li>
          <li>Attempt to interfere with the Site's operation or security</li>
          <li>Use automated tools to scrape or download our content</li>
        </ul>
      </div>

      <div class="governance-section">
        <h2>Intellectual Property</h2>
        <p>All content on Breasts-Implants.com — including text, design, graphics, logos, and compilation — is the property of Breasts-Implants.com and is protected by copyright and intellectual property laws. Our original content may be cited with attribution; wholesale reproduction is prohibited without permission.</p>
      </div>

      <div class="governance-section">
        <h2>Disclaimer of Warranties</h2>
        <p>The Site is provided "as is" and "as available." We make no warranties, express or implied, regarding the accuracy, completeness, reliability, or suitability of the information. Medical information changes rapidly; despite our review process, some information may become outdated between review cycles.</p>
      </div>

      <div class="governance-section">
        <h2>Limitation of Liability</h2>
        <p>Breasts-Implants.com, its contributors, editors, and medical reviewers shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use of or inability to use the Site or its content. This includes, without limitation, any reliance on information obtained from the Site.</p>
      </div>

      <div class="governance-section">
        <h2>External Links</h2>
        <p>The Site may contain links to third-party websites (medical journals, FDA resources, manufacturer sites). These links are provided for reference. We are not responsible for the content, accuracy, or practices of external sites.</p>
      </div>

      <div class="governance-section">
        <h2>Changes to Terms</h2>
        <p>We reserve the right to modify these Terms of Use at any time. Changes become effective upon posting. Your continued use of the Site after changes constitutes acceptance.</p>
      </div>

      <div class="governance-section">
        <h2>Contact</h2>
        <p>Questions about these Terms? Contact <strong>legal@breasts-implants.com</strong>.</p>
      </div>
    `,
  });
}

/**
 * Editorial Policy Page
 */
export function editorialPolicyPage() {
  return governancePage({
    title: 'Editorial Policy',
    badge: 'Quality Standards',
    subtitle: 'Our commitment to accuracy, independence, and patient-centered content.',
    lastUpdated: 'June 2026',
    metaDescription: 'Editorial policy for Breasts-Implants.com. Learn about our content creation process, independence standards, sourcing requirements, and commitment to accuracy.',
    content: `
      <div class="governance-section">
        <h2>Editorial Independence</h2>
        <p>Breasts-Implants.com maintains <strong>complete editorial independence</strong>. Our content decisions are made solely by our editorial and medical teams based on:</p>
        <ul class="governance-list">
          <li>Patient information needs and search demand</li>
          <li>Clinical significance and public health importance</li>
          <li>Availability of quality evidence</li>
          <li>Reader feedback and questions</li>
        </ul>
        <p>No external party — including implant manufacturers, surgical practices, advertising partners, or financial sponsors — has any influence over our editorial content, publication decisions, or conclusions.</p>
      </div>

      <div class="governance-section">
        <h2>Content Creation Standards</h2>
        <div class="governance-cards">
          <div class="governance-card">
            <span class="governance-card-icon">🎯</span>
            <h4>Patient-First Focus</h4>
            <p>Every article is written to serve the patient's decision-making needs, not commercial interests.</p>
          </div>
          <div class="governance-card">
            <span class="governance-card-icon">📊</span>
            <h4>Data-Driven</h4>
            <p>Statistics and claims are sourced from peer-reviewed studies, FDA data, or established medical guidelines.</p>
          </div>
          <div class="governance-card">
            <span class="governance-card-icon">⚖️</span>
            <h4>Balanced Reporting</h4>
            <p>We present both benefits and risks honestly. We never minimize complications or exaggerate benefits.</p>
          </div>
          <div class="governance-card">
            <span class="governance-card-icon">🔬</span>
            <h4>Evidence Hierarchy</h4>
            <p>We distinguish between strong evidence, emerging research, expert opinion, and patient-reported outcomes.</p>
          </div>
        </div>
      </div>

      <div class="governance-section">
        <h2>Source Requirements</h2>
        <p>Our content is sourced from the following types of evidence, in order of priority:</p>
        <ul class="governance-list">
          <li><strong>Tier 1:</strong> Systematic reviews, meta-analyses, and randomized controlled trials</li>
          <li><strong>Tier 2:</strong> FDA safety communications, premarket approval studies, and post-approval data</li>
          <li><strong>Tier 3:</strong> Large cohort studies, manufacturer data, and professional society guidelines (ASPS, ASAPS)</li>
          <li><strong>Tier 4:</strong> Expert consensus, case series, and clinical experience</li>
          <li><strong>Tier 5:</strong> Patient-reported outcomes and survey data (labeled as such)</li>
        </ul>
        <p>When we cite lower-tier evidence, we explicitly note the evidence level so readers can assess reliability.</p>
      </div>

      <div class="governance-section">
        <h2>Content We Will Not Publish</h2>
        <ul class="governance-list">
          <li>Specific surgeon or clinic recommendations or endorsements</li>
          <li>Content that promotes one manufacturer's products over others without evidence-based justification</li>
          <li>Unsubstantiated health claims or miracle cure language</li>
          <li>Content that minimizes known risks or complications</li>
          <li>Fear-based content designed to discourage informed patient decision-making</li>
          <li>Sponsored content disguised as editorial articles</li>
        </ul>
      </div>

      <div class="governance-section">
        <h2>Updates and Corrections</h2>
        <p>We are committed to keeping our content current and accurate:</p>
        <ul class="governance-list">
          <li><strong>Scheduled reviews:</strong> All articles are reviewed at minimum annually</li>
          <li><strong>Triggered updates:</strong> Articles are updated immediately when FDA safety communications, product recalls, or significant studies are published</li>
          <li><strong>Corrections:</strong> Factual errors are corrected promptly with a correction notice</li>
          <li><strong>Transparency:</strong> "Last reviewed" dates are displayed on every article</li>
        </ul>
      </div>

      <div class="governance-section">
        <h2>Feedback</h2>
        <p>We welcome editorial feedback, correction requests, and content suggestions. Email us at <strong>editorial@breasts-implants.com</strong>.</p>
      </div>
    `,
  });
}
