import Link from "next/link";
import { categories } from "@/data/site";
import { Icon } from "./icons";

const primary = categories.slice(0, 7);

export function Header() {
  return (
    <>
      <div className="trust-strip">
        <div className="container trust-strip__inner">
          <span><Icon name="shield" size={15} /> Independent patient education</span>
          <span>Evidence-led. Manufacturer-neutral. US-focused.</span>
        </div>
      </div>
      <header className="site-header">
        <div className="container header-inner">
          <Link href="/" className="brand" aria-label="Breasts-Implants.com home">
            <span className="brand-mark" aria-hidden="true">BI</span>
            <span>
              Breasts-Implants
              <strong>.com</strong>
            </span>
          </Link>

          <nav className="desktop-nav" aria-label="Main navigation">
            {primary.map((category) => (
              <Link key={category.slug} href={`/${category.slug}/`}>
                {category.label}
              </Link>
            ))}
          </nav>

          <div className="header-actions">
            <Link className="header-guide" href="/patient-guides/">
              Patient guides
            </Link>
            <details className="mobile-nav">
              <summary aria-label="Open navigation">
                <Icon name="menu" />
              </summary>
              <nav aria-label="Mobile navigation">
                {categories.map((category) => (
                  <Link key={category.slug} href={`/${category.slug}/`}>
                    {category.label}
                  </Link>
                ))}
              </nav>
            </details>
          </div>
        </div>
      </header>
    </>
  );
}
