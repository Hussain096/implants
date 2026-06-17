// ============================================
// Simple Client-Side Router
// ============================================

const routes = {};
let currentCleanup = null;
let renderToken = 0;
const SITE_URL = 'https://breasts-implants.com';

/**
 * Register a route
 * @param {string} path - URL path pattern
 * @param {Function} handler - Function returning { html, init?, cleanup? }
 */
export function route(path, handler) {
  routes[path] = handler;
}

/**
 * Navigate to a path
 * @param {string} path
 */
export function navigate(path) {
  if (path === window.location.pathname) return;
  window.history.pushState({}, '', path);
  render();
}

/**
 * Initialize the router
 */
export function initRouter() {
  // Handle browser back/forward
  window.addEventListener('popstate', () => render());

  // Intercept link clicks for SPA navigation
  document.addEventListener('click', (e) => {
    if (e.defaultPrevented) return;

    const link = e.target.closest('a[href]');
    if (!link) return;

    const href = link.getAttribute('href');

    // Only handle internal links
    if (!href || href.startsWith('http') || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) return;

    e.preventDefault();
    navigate(href);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Initial render
  render();
}

/**
 * Render current route
 */
async function render() {
  const token = ++renderToken;
  const path = window.location.pathname;

  // Cleanup previous page
  if (currentCleanup) {
    currentCleanup();
    currentCleanup = null;
  }

  // Try exact match, then pattern match
  let handler = routes[path];

  if (!handler) {
    // Try without trailing slash
    handler = routes[path.replace(/\/$/, '')] || routes[path + '/'];
  }

  if (!handler) {
    // Try matching route patterns (e.g., /breast-implant-brands/:slug/)
    for (const [pattern, h] of Object.entries(routes)) {
      if (pattern.includes(':')) {
        const regex = new RegExp('^' + pattern.replace(/:[^/]+/g, '([^/]+)') + '$');
        const match = path.match(regex);
        if (match) {
          handler = () => h(...match.slice(1));
          break;
        }
      }
    }
  }

  // Fallback to 404
  if (!handler) handler = routes['*'] || (() => ({ html: '<div class="container section"><h1>Page Not Found</h1><p>The page you\'re looking for doesn\'t exist.</p><a href="/" class="btn btn-primary">Go Home</a></div>' }));

  const result = await handler();
  if (token !== renderToken) return;
  const app = document.querySelector('#app');

  if (result.html) {
    app.innerHTML = result.html;
  }

  // Run page init
  if (result.init) {
    requestAnimationFrame(() => result.init());
  }

  // Store cleanup
  if (result.cleanup) {
    currentCleanup = result.cleanup;
  }

  // Update document title
  if (result.title) {
    document.title = result.title;
  }

  updateSeo(result, path);
}

function updateSeo(result, path) {
  const title = result.title || document.title;
  const description = result.description || document.querySelector('meta[name="description"]')?.content || '';
  const canonicalUrl = result.canonical || `${SITE_URL}${path === '/' ? '/' : path}`;
  const image = result.image || `${SITE_URL}/favicon.webp`;
  const robots = result.robots || (routes[path] ? 'index, follow' : 'noindex, follow');

  setMeta('name', 'description', description);
  setMeta('name', 'robots', robots);
  setLink('canonical', canonicalUrl);

  setMeta('property', 'og:title', result.ogTitle || title);
  setMeta('property', 'og:description', result.ogDescription || description);
  setMeta('property', 'og:type', result.ogType || 'website');
  setMeta('property', 'og:url', canonicalUrl);
  setMeta('property', 'og:image', image);
  setMeta('property', 'og:site_name', 'Breasts-Implants.com');

  setMeta('name', 'twitter:card', 'summary_large_image');
  setMeta('name', 'twitter:title', result.twitterTitle || result.ogTitle || title);
  setMeta('name', 'twitter:description', result.twitterDescription || result.ogDescription || description);
  setMeta('name', 'twitter:image', image);

  updateSchema(result.schema);
}

function setMeta(attr, key, content) {
  if (!content) return;
  let meta = document.querySelector(`meta[${attr}="${key}"]`);
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute(attr, key);
    document.head.appendChild(meta);
  }
  meta.setAttribute('content', content);
}

function setLink(rel, href) {
  let link = document.querySelector(`link[rel="${rel}"]`);
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', rel);
    document.head.appendChild(link);
  }
  link.setAttribute('href', href);
}

function updateSchema(schema) {
  document.querySelectorAll('script[data-route-schema]').forEach(script => script.remove());
  if (!schema) return;

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.dataset.routeSchema = 'true';
  script.textContent = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': Array.isArray(schema) ? schema : [schema],
  });
  document.head.appendChild(script);
}
