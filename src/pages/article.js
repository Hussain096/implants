// ============================================
// Medical Article Template
// Reusable template for all medical content articles
// ============================================

import { pageLayout, initCommon } from '../components/layout.js';
import { breadcrumbSchema, faqPageSchema, medicalWebPageSchema, organizationSchema, webSiteSchema } from '../data/schema.js';

/**
 * Render the article page
 * @param {Object} articleData - Article content data
 */
export function articlePage(articleData) {
  const {
    title,
    metaTitle,
    metaDescription,
    hubId,
    hubLabel,
    hubHref,
    lastReviewed = 'June 2026',
    readTime = '8 min read',
    author = 'Medical Content Team',
    reviewer = 'Board-Certified Plastic Surgeon',
    keyTakeaways = [],
    sections = [],
    faqs = [],
    references = [],
    relatedArticles = [],
    safetyNote = '',
  } = articleData;

  // Build table of contents from sections
  const toc = sections
    .filter(s => s.heading)
    .map(s => ({
      id: slugify(s.heading),
      label: s.heading,
    }));

  const html = pageLayout(`
<!-- Article Hero -->
<section class="article-hero">
  <div class="container">
    <div class="article-hero-content">
      <div class="article-meta-badges">
        <span class="article-badge article-badge--reviewed">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          Medically Reviewed
        </span>
        <span class="article-badge">📅 Updated ${lastReviewed}</span>
        <span class="article-badge">⏱️ ${readTime}</span>
      </div>
      <h1>${title}</h1>
      <div class="article-byline">
        <div class="article-author">
          <div class="author-avatar">${author.charAt(0)}</div>
          <div>
            <span class="author-name">Written by ${author}</span>
            <span class="author-role">Reviewed by ${reviewer}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Article Body -->
<section class="section">
  <div class="container">
    <div class="article-layout">
      <!-- Sidebar / TOC -->
      <aside class="article-sidebar" id="article-sidebar">
        <div class="toc" id="toc">
          <h4 class="toc-title">Table of Contents</h4>
          <nav>
            <ul>
              ${keyTakeaways.length > 0 ? `<li><a href="#key-takeaways" class="toc-link">Key Takeaways</a></li>` : ''}
              ${toc.map(item => `<li><a href="#${item.id}" class="toc-link">${item.label}</a></li>`).join('')}
              ${faqs.length > 0 ? `<li><a href="#faq" class="toc-link">FAQ</a></li>` : ''}
              ${references.length > 0 ? `<li><a href="#references" class="toc-link">References</a></li>` : ''}
            </ul>
          </nav>
        </div>
      </aside>

      <!-- Main Content -->
      <article class="article-content" id="article-content">
        ${keyTakeaways.length > 0 ? `
        <!-- Key Takeaways Box -->
        <div class="key-takeaways" id="key-takeaways">
          <div class="key-takeaways-header">
            <span>💡</span>
            <h3>Key Takeaways</h3>
          </div>
          <ul>
            ${keyTakeaways.map(t => `<li>${t}</li>`).join('')}
          </ul>
        </div>` : ''}

        ${safetyNote ? `
        <div class="article-safety-note">
          <span class="icon">⚠️</span>
          <div>
            <strong>Important Safety Information</strong>
            <p>${safetyNote}</p>
          </div>
        </div>` : ''}

        ${sections.map(section => renderSection(section)).join('')}

        ${faqs.length > 0 ? `
        <!-- FAQ Section -->
        <div class="article-section" id="faq">
          <h2>Frequently Asked Questions</h2>
          <div class="faq-list faq-list--article">
            ${faqs.map(faq => `
            <div class="faq-item">
              <button class="faq-question">
                ${faq.question}
                <span class="faq-chevron">▼</span>
              </button>
              <div class="faq-answer">
                <div class="faq-answer-inner">${faq.answer}</div>
              </div>
            </div>`).join('')}
          </div>
        </div>` : ''}

        ${references.length > 0 ? `
        <!-- References Section -->
        <div class="article-section article-references" id="references">
          <h2>References & Sources</h2>
          <ol class="references-list">
            ${references.map((ref, i) => `
            <li id="ref-${i + 1}">
              ${ref.authors ? `<span class="ref-authors">${ref.authors}</span> ` : ''}
              ${ref.title ? `<em class="ref-title">${ref.title}</em>. ` : ''}
              ${ref.journal ? `<span class="ref-journal">${ref.journal}</span>` : ''}
              ${ref.year ? ` (${ref.year})` : ''}
              ${ref.url ? `. <a href="${ref.url}" target="_blank" rel="noopener noreferrer">View source ↗</a>` : ''}
            </li>`).join('')}
          </ol>
        </div>` : ''}

        <!-- Medical Disclaimer -->
        <div class="article-disclaimer">
          <div class="article-disclaimer-icon">🛡️</div>
          <div>
            <strong>Medical Disclaimer</strong>
            <p>This article is for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Always consult with a board-certified plastic surgeon or qualified healthcare provider before making any medical decisions.</p>
          </div>
        </div>

        ${relatedArticles.length > 0 ? `
        <!-- Related Articles -->
        <div class="article-section">
          <h2>Related Articles</h2>
          <div class="related-grid">
            ${relatedArticles.map(article => `
            <a href="${article.href}" class="related-card">
              <span class="related-card-icon">${article.icon || '📄'}</span>
              <div>
                <h4>${article.title}</h4>
                <p>${article.desc}</p>
              </div>
              <span class="related-card-arrow">→</span>
            </a>`).join('')}
          </div>
        </div>` : ''}
      </article>
    </div>
  </div>
</section>

<!-- CTA Section -->
<section class="section section--alt">
  <div class="container">
    <div class="cta-section">
      <h2>Preparing for a Consultation?</h2>
      <p>Download our free checklist of questions to ask your plastic surgeon.</p>
      <a href="/questions-for-surgeon/" class="btn-white">Get the Consultation Checklist →</a>
    </div>
  </div>
</section>
  `, [
    { label: hubLabel, href: hubHref },
    { label: title }
  ]);

  return {
    html,
    title: metaTitle || `${title} | Breasts-Implants.com`,
    description: metaDescription,
    ogType: 'article',
    schema: [
      organizationSchema(),
      webSiteSchema(),
      breadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: hubLabel, url: hubHref },
        { name: title, url: window.location.pathname },
      ]),
      medicalWebPageSchema({
        name: title,
        url: window.location.pathname,
        description: metaDescription,
        lastReviewed: normalizeReviewedDate(lastReviewed),
        author,
        reviewedBy: reviewer,
        about: {
          '@type': 'MedicalProcedure',
          name: 'Breast Augmentation',
          procedureType: 'https://schema.org/SurgicalProcedure',
        },
      }),
      ...(faqs.length > 0 ? [faqPageSchema(faqs)] : []),
    ],
    init() {
      initCommon();
      initArticle();
    }
  };
}

function normalizeReviewedDate(value) {
  if (/^\d{4}-\d{2}-\d{2}$/.test(value)) return value;
  if (/june\s+2026/i.test(value)) return '2026-06-01';
  return '2026-06-01';
}

/**
 * Render a content section
 */
function renderSection(section) {
  const id = section.heading ? slugify(section.heading) : '';
  let html = `<div class="article-section"${id ? ` id="${id}"` : ''}>`;

  if (section.heading) {
    html += `<h2>${section.heading}</h2>`;
  }

  if (section.content) {
    html += section.content;
  }

  if (section.list) {
    html += `<ul class="article-list">${section.list.map(li => `<li>${li}</li>`).join('')}</ul>`;
  }

  if (section.table) {
    html += renderTable(section.table);
  }

  if (section.callout) {
    html += `<div class="article-callout article-callout--${section.callout.type || 'info'}">
      <span class="article-callout-icon">${section.callout.icon || 'ℹ️'}</span>
      <div>
        ${section.callout.title ? `<strong>${section.callout.title}</strong>` : ''}
        <p>${section.callout.text}</p>
      </div>
    </div>`;
  }

  if (section.subsections) {
    section.subsections.forEach(sub => {
      html += `<h3>${sub.heading}</h3>`;
      if (sub.content) html += sub.content;
      if (sub.list) html += `<ul class="article-list">${sub.list.map(li => `<li>${li}</li>`).join('')}</ul>`;
      if (sub.table) html += renderTable(sub.table);
    });
  }

  html += `</div>`;
  return html;
}

/**
 * Render a comparison/data table
 */
function renderTable(tableData) {
  const { headers, rows, caption } = tableData;
  let html = `<div class="article-table-wrap">`;
  if (caption) html += `<p class="table-caption">${caption}</p>`;
  html += `<table class="comparison-table">
    <thead><tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr></thead>
    <tbody>${rows.map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`).join('')}</tbody>
  </table></div>`;
  return html;
}

/**
 * Initialize article-specific interactivity
 */
function initArticle() {
  // FAQ accordion
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement;
      const wasOpen = item.classList.contains('open');
      // Close siblings
      item.closest('.faq-list')?.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
  });

  // Sticky TOC with active state tracking
  const tocLinks = document.querySelectorAll('.toc-link');
  const articleSections = document.querySelectorAll('.article-section[id]');

  if (tocLinks.length > 0 && articleSections.length > 0) {
    const tocObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          tocLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
          });
        }
      });
    }, { rootMargin: '-80px 0px -60% 0px', threshold: 0 });

    articleSections.forEach(section => tocObserver.observe(section));

    // Also observe key-takeaways and faq/references
    const extraSections = document.querySelectorAll('#key-takeaways, #faq, #references');
    extraSections.forEach(section => tocObserver.observe(section));
  }

  // Smooth scroll for TOC links
  document.querySelectorAll('.toc-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Update URL hash without triggering scroll
        history.replaceState(null, '', link.getAttribute('href'));
      }
    });
  });
}

/**
 * Slugify a heading for use as an ID
 */
function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}
