import Link from "next/link";
import { categories, siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-intro">
          <Link href="/" className="brand brand--footer">
            <span className="brand-mark">BI</span>
            <span>Breasts-Implants.com</span>
          </Link>
          <p>
            Independent education for informed conversations about breast
            implants. This website does not diagnose conditions or replace
            care from a qualified clinician.
          </p>
        </div>

        <div>
          <h2>Explore</h2>
          <div className="footer-links">
            {categories.slice(0, 4).map((category) => (
              <Link key={category.slug} href={`/${category.slug}/`}>
                {category.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2>Safety and choices</h2>
          <div className="footer-links">
            {categories.slice(4).map((category) => (
              <Link key={category.slug} href={`/${category.slug}/`}>
                {category.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2>About this site</h2>
          <div className="footer-links">
            <Link href="/about/">About</Link>
            <Link href="/editorial-policy/">Editorial policy</Link>
            <Link href="/medical-review-policy/">Medical review</Link>
            <Link href="/medical-disclaimer/">Medical disclaimer</Link>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>&copy; 2026 {siteConfig.name}</span>
        <span>Last site review: {siteConfig.updated}</span>
      </div>
    </footer>
  );
}
