// ============================================
// Automatically update sitemap lastmod dates to current date
// ============================================

import fs from 'fs';
import path from 'path';

const sitemapPath = path.resolve('public/sitemap.xml');

try {
  let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
  
  // Format current date as YYYY-MM-DD
  const today = new Date().toISOString().split('T')[0];
  
  // Replace all <lastmod>YYYY-MM-DD</lastmod> with today's date
  const updatedContent = sitemapContent.replace(
    /<lastmod>\d{4}-\d{2}-\d{2}<\/lastmod>/g,
    `<lastmod>${today}</lastmod>`
  );
  
  fs.writeFileSync(sitemapPath, updatedContent, 'utf8');
  console.log(`✅ Sitemap lastmod dates updated to: ${today}`);
} catch (error) {
  console.error('⚠️ Failed to update sitemap:', error.message);
}
