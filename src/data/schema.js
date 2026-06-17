// ============================================
// JSON-LD Schema Generators
// ============================================

const SITE_URL = 'https://breasts-implants.com';
const ORG_NAME = 'Breasts-Implants.com';

/**
 * Generate the sitewide Organization schema
 */
export function organizationSchema() {
  return {
    '@type': 'Organization',
    name: ORG_NAME,
    url: SITE_URL,
    description: 'Independent, medically reviewed breast implant patient education',
    logo: `${SITE_URL}/favicon.svg`,
    email: 'contact@breasts-implants.com',
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'general inquiries',
        email: 'contact@breasts-implants.com',
      },
      {
        '@type': 'ContactPoint',
        contactType: 'editorial inquiries',
        email: 'editorial@breasts-implants.com',
      },
      {
        '@type': 'ContactPoint',
        contactType: 'corrections',
        email: 'corrections@breasts-implants.com',
      },
      {
        '@type': 'ContactPoint',
        contactType: 'privacy',
        email: 'privacy@breasts-implants.com',
      },
      {
        '@type': 'ContactPoint',
        contactType: 'legal',
        email: 'legal@breasts-implants.com',
      },
    ],
  };
}

/**
 * Generate the sitewide WebSite schema with search
 */
export function webSiteSchema() {
  return {
    '@type': 'WebSite',
    name: ORG_NAME,
    url: SITE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

/**
 * Generate BreadcrumbList schema
 * @param {Array<{name: string, url: string}>} items
 */
export function breadcrumbSchema(items) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`,
    })),
  };
}

/**
 * Generate MedicalWebPage schema
 * @param {Object} opts
 */
export function medicalWebPageSchema({
  name,
  url,
  description,
  lastReviewed,
  datePublished,
  dateModified,
  author,
  reviewedBy,
  about,
}) {
  const schema = {
    '@type': 'MedicalWebPage',
    name,
    url: url.startsWith('http') ? url : `${SITE_URL}${url}`,
    description,
    lastReviewed: lastReviewed || new Date().toISOString().split('T')[0],
  };

  if (datePublished) schema.datePublished = datePublished;
  if (dateModified) schema.dateModified = dateModified;

  if (author) {
    schema.author = {
      '@type': 'Person',
      name: author,
    };
  }

  if (reviewedBy) {
    schema.reviewedBy = {
      '@type': 'Person',
      name: reviewedBy,
      jobTitle: 'Board-Certified Plastic Surgeon',
    };
  }

  if (about) {
    schema.about = about;
  }

  return schema;
}

/**
 * Generate ItemList schema for hub pages
 * @param {Array<{name: string, url: string, description: string}>} items
 */
export function itemListSchema(items) {
  return {
    '@type': 'ItemList',
    numberOfItems: items.length,
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`,
      name: item.name,
      description: item.description || undefined,
    })),
  };
}

/**
 * Generate FAQPage schema
 * @param {Array<{question: string, answer: string}>} faqs
 */
export function faqPageSchema(faqs) {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Wrap schemas in a JSON-LD @graph script tag
 * @param {Array} schemas
 */
export function renderSchemaGraph(schemas) {
  const graph = {
    '@context': 'https://schema.org',
    '@graph': schemas,
  };
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(graph);
  document.head.appendChild(script);
}
