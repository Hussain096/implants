// ============================================
// Shared Layout Components
// ============================================

import { siloHubs, governanceLinks, patientTools, isActivePath } from '../data/navigation.js';
import logoUrl from '../assets/breasts-implants-logo.webp';

/**
 * Render the trust banner
 */
export function trustBanner() {
  return `<div class="trust-banner">
  🛡️ <strong>Medically Reviewed Content</strong> — Independent, evidence-based breast implant education. Not affiliated with any device manufacturer.
</div>`;
}

/**
 * Render the mega menu header
 */
export function siteHeader() {
  return `<header class="site-header" id="site-header">
  <div class="header-top">
    <a href="/" class="logo header-logo" aria-label="Breasts Implants Home">
      <img src="${logoUrl}" alt="Breasts Implants Logo" class="logo-img" />
    </a>
    <nav class="nav-main" id="nav-main">
      ${siloHubs.map(hub => `
      <div class="nav-item-wrap">
        <a href="${hub.href}" class="nav-link${isActivePath(hub.href) ? ' active' : ''}" aria-haspopup="true" aria-expanded="false" aria-controls="menu-${hub.id}">${hub.label}
          <svg class="nav-chevron" width="10" height="10" viewBox="0 0 10 10"><path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" fill="none"/></svg>
        </a>
        <div class="mega-dropdown" id="menu-${hub.id}">
          <div class="mega-dropdown-inner">
            <div class="mega-header">
              <span class="mega-icon">${hub.icon}</span>
              <div>
                <h4>${hub.label}</h4>
                <p>${hub.description}</p>
              </div>
            </div>
            <div class="mega-links">
              ${hub.children.map(child => `
              <a href="${child.href}" class="mega-link">
                <span>${child.label}</span>
                <span class="mega-tag">${child.tag}</span>
              </a>`).join('')}
            </div>
            <a href="${hub.href}" class="mega-view-all">View all ${hub.label.toLowerCase()} →</a>
          </div>
        </div>
      </div>`).join('')}
    </nav>
    <div class="header-actions">
      <button class="theme-toggle" id="theme-toggle" aria-label="Toggle dark mode" title="Toggle dark mode">
        <svg class="icon-sun" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
          <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
        </svg>
        <svg class="icon-moon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
      </button>
      <a href="/patient-guides/" class="btn btn-primary btn-sm">Patient Guide</a>
      <button class="mobile-toggle" id="mobile-toggle" aria-label="Toggle menu" aria-controls="nav-main" aria-expanded="false">
        <span></span>
      </button>
    </div>
  </div>
</header>`;
}

/**
 * Render breadcrumbs
 * @param {Array<{label: string, href: string}>} crumbs
 */
export function breadcrumbs(crumbs) {
  if (!crumbs || crumbs.length === 0) return '';
  return `<nav class="breadcrumbs" aria-label="Breadcrumb">
  <div class="container">
    <ol>
      <li><a href="/">Home</a></li>
      ${crumbs.map((crumb, i) => {
        const isLast = i === crumbs.length - 1;
        return `<li>${isLast ? `<span aria-current="page">${crumb.label}</span>` : `<a href="${crumb.href}">${crumb.label}</a>`}</li>`;
      }).join('')}
    </ol>
  </div>
</nav>`;
}

/**
 * Render the site footer
 */
export function siteFooter() {
  return `<footer class="site-footer" id="site-footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <div class="logo footer-logo">
          <img src="${logoUrl}" alt="Breasts Implants Logo" class="logo-img" />
        </div>
        <p>Independent, medically reviewed breast implant education. Not affiliated with any device manufacturer, surgeon, or clinic.</p>
      </div>
      <div class="footer-col">
        <h4>Content</h4>
        ${siloHubs.slice(0, 7).map(h => `<a href="${h.href}">${h.label}</a>`).join('\n        ')}
      </div>
      <div class="footer-col">
        <h4>Patient Tools</h4>
        ${patientTools.map(t => `<a href="${t.href}">${t.label}</a>`).join('\n        ')}
      </div>
      <div class="footer-col">
        <h4>About</h4>
        ${governanceLinks.map(l => `<a href="${l.href}">${l.label}</a>`).join('\n        ')}
      </div>
    </div>
    <div class="footer-disclaimer">
      <strong>Medical Disclaimer:</strong> The content on Breasts-Implants.com is for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of a board-certified plastic surgeon or qualified healthcare provider with any questions regarding breast implants or any medical condition. <a href="/medical-disclaimer/" style="color:rgba(255,255,255,0.8);text-decoration:underline;">Read full disclaimer →</a>
    </div>
    <div class="footer-bottom">
      <span>© 2026 Breasts-Implants.com. All rights reserved.</span>
      <span>Content is medically reviewed and updated regularly.</span>
    </div>
  </div>
</footer>`;
}

/**
 * Wrap content in the full page layout
 */
export function pageLayout(content, crumbs) {
  return trustBanner() + siteHeader() + (crumbs ? breadcrumbs(crumbs) : '') + content + siteFooter();
}

/**
 * Initialize common interactive behaviors (header, mobile menu, dark mode)
 */
export function initCommon() {
  // Header scroll effect
  const header = document.getElementById('site-header');
  const scrollHandler = () => {
    if (header) header.classList.toggle('scrolled', window.scrollY > 10);
  };
  window.addEventListener('scroll', scrollHandler);
  scrollHandler();

  // Mobile menu toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMain = document.getElementById('nav-main');
  const mobileNavQuery = window.matchMedia('(max-width: 1280px)');
  const navItems = navMain?.querySelectorAll('.nav-item-wrap') ?? [];

  const closeSubmenus = (exceptItem = null) => {
    navItems.forEach(item => {
      if (item === exceptItem) return;
      item.classList.remove('submenu-open');
      item.querySelector('.nav-link')?.setAttribute('aria-expanded', 'false');
    });
  };

  mobileToggle?.addEventListener('click', () => {
    const isOpen = navMain.classList.toggle('open');
    mobileToggle.classList.toggle('active', isOpen);
    mobileToggle.setAttribute('aria-expanded', String(isOpen));
    if (!isOpen) closeSubmenus();
  });

  navItems.forEach(item => {
    const parentLink = item.querySelector('.nav-link');
    parentLink?.addEventListener('click', event => {
      if (!mobileNavQuery.matches) return;

      event.preventDefault();
      const willOpen = !item.classList.contains('submenu-open');
      closeSubmenus(item);
      item.classList.toggle('submenu-open', willOpen);
      parentLink.setAttribute('aria-expanded', String(willOpen));
    });
  });

  mobileNavQuery.addEventListener('change', event => {
    if (!event.matches) {
      navMain?.classList.remove('open');
      mobileToggle?.classList.remove('active');
      mobileToggle?.setAttribute('aria-expanded', 'false');
      closeSubmenus();
    }
  });

  // Dark mode toggle
  const themeToggle = document.getElementById('theme-toggle');
  themeToggle?.addEventListener('click', () => {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });

  // Smooth reveal for cards on scroll
  const observeCards = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observeCards.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.card, .pathway-card, .timeline-item, .hub-card').forEach((el, i) => {
    el.style.transitionDelay = `${i * 0.05}s`;
    el.classList.add('reveal');
    observeCards.observe(el);
  });

  // Animate stats on scroll
  const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        statObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.stat-number').forEach(el => {
    el.classList.add('reveal');
    statObserver.observe(el);
  });
}
