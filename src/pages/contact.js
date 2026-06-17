// ============================================
// Contact Page
// ============================================

import { pageLayout, initCommon } from '../components/layout.js';

export function contactPage() {
  const html = pageLayout(`
<!-- Hero -->
<section class="article-hero">
  <div class="container">
    <div class="article-hero-content">
      <h1>Contact Us</h1>
      <p class="hub-intro">Have a question about our content, need to report an error, or want to provide feedback? We'd love to hear from you.</p>
    </div>
  </div>
</section>

<!-- Contact Content -->
<section class="section">
  <div class="container">
    <div class="article-layout">
      <aside class="article-sidebar" id="article-sidebar">
        <div class="toc" id="toc">
          <h4 class="toc-title">Quick Links</h4>
          <nav>
            <ul>
              <li><a href="#contact-form" class="toc-link">Send a Message</a></li>
              <li><a href="#content-corrections" class="toc-link">Content Corrections</a></li>
              <li><a href="#media-inquiries" class="toc-link">Media Inquiries</a></li>
              <li><a href="#important-note" class="toc-link">Important Note</a></li>
            </ul>
          </nav>
        </div>
      </aside>

      <article class="article-content" id="article-content">
        <!-- Safety Note -->
        <div class="article-safety-note">
          <span class="icon">⚠️</span>
          <div>
            <strong>Medical Emergency?</strong>
            <p>If you are experiencing a medical emergency, call 911 or go to your nearest emergency room immediately. We are an educational website and cannot provide personal medical advice or emergency assistance.</p>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="article-section" id="contact-form">
          <h2>Send Us a Message</h2>
          <form class="contact-form" id="contactForm">
            <div class="form-group">
              <label for="contact-name">Your Name</label>
              <input type="text" id="contact-name" name="name" required placeholder="Full name" class="form-input">
            </div>
            <div class="form-group">
              <label for="contact-email">Email Address</label>
              <input type="email" id="contact-email" name="email" required placeholder="you@example.com" class="form-input">
            </div>
            <div class="form-group">
              <label for="contact-subject">Subject</label>
              <select id="contact-subject" name="subject" required class="form-input">
                <option value="">Select a topic...</option>
                <option value="content-feedback">Content Feedback</option>
                <option value="content-correction">Report a Content Error</option>
                <option value="general-question">General Question</option>
                <option value="media-inquiry">Media / Press Inquiry</option>
                <option value="partnership">Partnership / Collaboration</option>
                <option value="technical-issue">Technical Issue</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div class="form-group">
              <label for="contact-page">Related Page (if applicable)</label>
              <input type="text" id="contact-page" name="page" placeholder="e.g., /capsular-contracture/" class="form-input">
            </div>
            <div class="form-group">
              <label for="contact-message">Message</label>
              <textarea id="contact-message" name="message" required rows="6" placeholder="Tell us more..." class="form-input form-textarea"></textarea>
            </div>
            <button type="submit" class="btn btn-primary" id="contact-submit">Send Message →</button>
            <div class="form-status" id="form-status" style="display:none;"></div>
          </form>
        </div>

        <!-- Content Corrections -->
        <div class="article-section" id="content-corrections">
          <h2>Report a Content Error</h2>
          <p>We take the accuracy of our medical content extremely seriously. If you've identified a factual error, outdated statistic, missing context, or any inaccuracy in our content, please let us know:</p>
          <ul class="article-list">
            <li><strong>Specify the page URL</strong> where the error appears.</li>
            <li><strong>Quote the specific text</strong> you believe is inaccurate.</li>
            <li><strong>Provide the correction</strong> with supporting evidence or source if possible.</li>
            <li><strong>Include your credentials</strong> if relevant (e.g., if you are a healthcare professional).</li>
          </ul>
          <p>All reported errors are reviewed by our medical review team within 48 hours. Corrections are published promptly when verified.</p>
        </div>

        <!-- Media Inquiries -->
        <div class="article-section" id="media-inquiries">
          <h2>Media & Press Inquiries</h2>
          <p>For media inquiries, interview requests, or permission to cite our content, please use the contact form above with "Media / Press Inquiry" as the subject. We aim to respond to media inquiries within 24 hours.</p>
          <p>When citing our content, please credit <strong>Breasts-Implants.com</strong> and link to the specific article. We encourage media to verify claims with the original sources cited in our references sections.</p>
        </div>

        <!-- Important Note -->
        <div class="article-section" id="important-note">
          <h2>Important Note</h2>
          <div class="article-callout article-callout--info">
            <span class="article-callout-icon">ℹ️</span>
            <div>
              <strong>We Cannot Provide Personal Medical Advice</strong>
              <p>Breasts-Implants.com is an educational resource. We are unable to answer personal medical questions, recommend specific surgeons, or provide individual treatment advice. For personal medical guidance, please consult with a board-certified plastic surgeon in your area.</p>
            </div>
          </div>
        </div>

        <!-- Response Times -->
        <div class="article-section">
          <h2>Response Times</h2>
          <div class="article-table-wrap">
            <table class="comparison-table">
              <thead><tr><th>Inquiry Type</th><th>Typical Response</th></tr></thead>
              <tbody>
                <tr><td><strong>Content corrections</strong></td><td>Within 48 hours</td></tr>
                <tr><td><strong>General feedback</strong></td><td>Within 3–5 business days</td></tr>
                <tr><td><strong>Media inquiries</strong></td><td>Within 24 hours</td></tr>
                <tr><td><strong>Technical issues</strong></td><td>Within 48 hours</td></tr>
                <tr><td><strong>Partnership inquiries</strong></td><td>Within 5–7 business days</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Disclaimer -->
        <div class="article-disclaimer">
          <div class="article-disclaimer-icon">🛡️</div>
          <div>
            <strong>Independence Statement</strong>
            <p>Breasts-Implants.com has no financial relationships with any breast implant manufacturer, plastic surgery practice, or medical device company. We do not accept sponsorships, paid placements, or referral fees. Our content is editorially independent.</p>
          </div>
        </div>
      </article>
    </div>
  </div>
</section>
  `, [
    { label: 'Contact Us' },
  ]);

  return {
    html,
    title: 'Contact Us | Breasts-Implants.com',
    description: 'Contact the Breasts-Implants.com team for content feedback, error reports, media inquiries, or general questions about our breast implant education resources.',
    init() {
      initCommon();
      initContactForm();
    },
  };
}

function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const status = document.getElementById('form-status');
    const btn = document.getElementById('contact-submit');

    // Simulate form submission (no backend)
    btn.disabled = true;
    btn.textContent = 'Sending...';

    setTimeout(() => {
      if (status) {
        status.style.display = 'block';
        status.className = 'form-status form-status--success';
        status.innerHTML = '<strong>✅ Message sent!</strong> Thank you for reaching out. We\'ll respond within the timeframes listed above.';
      }
      btn.textContent = 'Message Sent ✓';
      form.reset();

      setTimeout(() => {
        btn.disabled = false;
        btn.textContent = 'Send Message →';
      }, 3000);
    }, 1500);
  });
}
