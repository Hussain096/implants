import Image from "next/image";
import Link from "next/link";
import { ArticleCard } from "@/components/article-card";
import { Icon } from "@/components/icons";
import { JsonLd } from "@/components/json-ld";
import {
  categories,
  featuredArticles,
  siteConfig,
} from "@/data/site";

const faqItems = [
  {
    question: "What are the main types of breast implants?",
    answer:
      "In the United States, the two main fill types are saline and silicone gel. Gummy bear describes a more cohesive silicone gel rather than a separate fill category.",
  },
  {
    question: "How long do breast implants last?",
    answer:
      "Breast implants are not lifetime devices, but there is no universal expiration date. The chance of future imaging, revision, replacement, or removal increases over time.",
  },
  {
    question: "Do breast implants need to be replaced every 10 years?",
    answer:
      "Not automatically. Replacement decisions are based on symptoms, examination, imaging, device findings, preferences, and clinical advice.",
  },
  {
    question: "Can implants guarantee a cup size?",
    answer:
      "No. Cup sizing varies, and final appearance depends on existing tissue, chest dimensions, implant width, projection, profile, and healing.",
  },
];

const homeSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "@id": `${siteConfig.url}/#webpage`,
  url: siteConfig.url,
  name: "Breast Implants: Types, Safety, Cost & Recovery Guide",
  description: siteConfig.description,
  about: {
    "@type": "MedicalDevice",
    name: "Breast implant",
  },
  medicalAudience: {
    "@type": "MedicalAudience",
    audienceType: "Patient",
  },
  dateModified: "2026-06-12",
  publisher: { "@id": `${siteConfig.url}/#organization` },
};

const categoryIcons = [
  "layers",
  "scale",
  "heart",
  "cost",
  "warning",
  "book",
  "spark",
  "shield",
] as const;

export default function Home() {
  return (
    <>
      <JsonLd data={homeSchema} />
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="kicker">
              <span className="status-dot" />
              Editorially reviewed and updated June 2026
            </div>
            <h1>Clear answers for a more informed breast implant decision.</h1>
            <p className="hero-lead">
              Understand implant types, surgery, recovery, costs, and risks
              through independent, evidence-led patient education.
            </p>
            <div className="hero-actions">
              <Link className="button button--primary" href="/implant-types/">
                Compare implant types <Icon name="arrow" />
              </Link>
              <Link className="button button--secondary" href="/fda-checklist/">
                Open the decision guide
              </Link>
            </div>
            <div className="hero-proof">
              <span><Icon name="shield" size={18} /> Manufacturer-neutral</span>
              <span><Icon name="book" size={18} /> Primary sources cited</span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-image-frame">
              <Image
                src="/hero-medical.png"
                alt="Open medical reference book representing patient education"
                width={1024}
                height={1024}
                priority
              />
            </div>
            <div className="hero-note">
              <Icon name="shield" size={22} />
              <div>
                <strong>Education, not a sales funnel</strong>
                <span>Benefits, limitations, uncertainty, and alternatives</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section start-section">
        <div className="container">
          <div className="section-heading section-heading--split">
            <div>
              <span className="section-label">Start with your question</span>
              <h2>Find the right path through the decision.</h2>
            </div>
            <p>
              Whether you are comparing options or concerned about an existing
              implant, begin with the information that matches your situation.
            </p>
          </div>
          <div className="path-grid">
            <Link href="/implant-types/" className="path-card">
              <span className="path-card__number">01</span>
              <Icon name="layers" size={26} />
              <h3>I am considering implants</h3>
              <p>Compare fill, shape, profile, size, and realistic outcomes.</p>
              <span className="text-link">Explore options <Icon name="arrow" size={17} /></span>
            </Link>
            <Link href="/procedure/" className="path-card">
              <span className="path-card__number">02</span>
              <Icon name="heart" size={26} />
              <h3>I am preparing for surgery</h3>
              <p>Understand consultation, planning, surgery, and aftercare.</p>
              <span className="text-link">Follow the process <Icon name="arrow" size={17} /></span>
            </Link>
            <Link href="/recovery-timeline/" className="path-card">
              <span className="path-card__number">03</span>
              <Icon name="spark" size={26} />
              <h3>I am recovering</h3>
              <p>Review general milestones, restrictions, and warning signs.</p>
              <span className="text-link">View recovery guide <Icon name="arrow" size={17} /></span>
            </Link>
            <Link href="/risks-complications/" className="path-card path-card--alert">
              <span className="path-card__number">04</span>
              <Icon name="warning" size={26} />
              <h3>I am concerned about symptoms</h3>
              <p>Learn what deserves routine, prompt, or urgent assessment.</p>
              <span className="text-link">Review safety guides <Icon name="arrow" size={17} /></span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <div className="section-heading">
            <span className="section-label">Explore the library</span>
            <h2>One topic. Every part of the decision.</h2>
            <p>
              Category hubs keep every guide easy to find, while short article
              URLs make pages easy to share and remember.
            </p>
          </div>
          <div className="category-grid">
            {categories.map((category, index) => (
              <Link
                href={`/${category.slug}/`}
                className={`category-card category-card--${category.accent}`}
                key={category.slug}
              >
                <span className="category-card__icon">
                  <Icon name={categoryIcons[index]} size={25} />
                </span>
                <h3>{category.label}</h3>
                <p>{category.description}</p>
                <span className="text-link">
                  View topic <Icon name="arrow" size={17} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section comparison-section">
        <div className="container">
          <div className="section-heading section-heading--split">
            <div>
              <span className="section-label">At-a-glance comparison</span>
              <h2>Saline and silicone are the two main fill types.</h2>
            </div>
            <p>
              Gummy bear implants are highly cohesive silicone gel implants,
              not a third basic fill category.
            </p>
          </div>
          <div className="comparison-wrap">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Saline</th>
                  <th>Silicone gel</th>
                  <th>Highly cohesive gel</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Fill</th>
                  <td>Sterile saltwater</td>
                  <td>Silicone gel</td>
                  <td>More form-stable silicone gel</td>
                </tr>
                <tr>
                  <th>Shell</th>
                  <td>Silicone elastomer</td>
                  <td>Silicone elastomer</td>
                  <td>Silicone elastomer</td>
                </tr>
                <tr>
                  <th>Rupture</th>
                  <td>Often visible deflation</td>
                  <td>Can be silent</td>
                  <td>Can be silent</td>
                </tr>
                <tr>
                  <th>Key discussion</th>
                  <td>Rippling and tissue coverage</td>
                  <td>Feel and imaging follow-up</td>
                  <td>Firmness, shape, and surface</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="center-action">
            <Link className="button button--secondary" href="/saline-vs-silicone/">
              Read the full comparison <Icon name="arrow" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section safety-panel-section">
        <div className="container safety-panel">
          <div className="safety-panel__icon"><Icon name="warning" size={30} /></div>
          <div>
            <span className="section-label">Important safety context</span>
            <h2>Breast implants are not lifetime devices.</h2>
            <p>
              Future imaging, revision, replacement, or removal may be needed.
              New persistent swelling, a mass, increasing redness, fever,
              severe pain, drainage, or sudden breast changes deserve prompt
              clinical assessment.
            </p>
            <div className="safety-links">
              <Link href="/risks-complications/">Explore risks and complications</Link>
              <Link href="/fda-checklist/">Review the FDA decision checklist</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <div className="section-heading section-heading--split">
            <div>
              <span className="section-label">Cornerstone guides</span>
              <h2>Build your knowledge before the consultation.</h2>
            </div>
            <p>
              Start with the decisions that affect device choice, surgical
              planning, recovery, cost, and long-term care.
            </p>
          </div>
          <div className="article-grid">
            {featuredArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container faq-layout">
          <div className="faq-intro">
            <span className="section-label">Common questions</span>
            <h2>Direct answers, with the limits made clear.</h2>
            <p>
              These general answers cannot determine which operation or device
              is appropriate for an individual.
            </p>
            <Link className="text-link" href="/patient-guides/">
              Browse patient guides <Icon name="arrow" size={17} />
            </Link>
          </div>
          <div className="faq-list">
            {faqItems.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section source-band">
        <div className="container source-band__inner">
          <div>
            <span className="section-label">How we work</span>
            <h2>Primary sources first. Marketing claims last.</h2>
          </div>
          <div className="source-points">
            <span><Icon name="check" /> FDA labeling and safety communications</span>
            <span><Icon name="check" /> Named authors, reviewers, and update dates</span>
            <span><Icon name="check" /> Benefits, risks, alternatives, and uncertainty</span>
          </div>
        </div>
      </section>
    </>
  );
}
