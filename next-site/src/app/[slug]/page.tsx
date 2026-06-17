import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/article-card";
import { Icon } from "@/components/icons";
import { JsonLd } from "@/components/json-ld";
import {
  articleBySlug,
  articles,
  categories,
  categoryBySlug,
  getArticlesForCategory,
  siteConfig,
} from "@/data/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return [
    ...categories.map((category) => ({ slug: category.slug })),
    ...articles.map((article) => ({ slug: article.slug })),
    { slug: "about" },
    { slug: "editorial-policy" },
    { slug: "medical-review-policy" },
    { slug: "medical-disclaimer" },
  ];
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = categoryBySlug.get(slug);
  if (category) {
    return {
      title: category.title,
      description: category.description,
      alternates: { canonical: `/${slug}/` },
    };
  }

  const article = articleBySlug.get(slug);
  if (article) {
    return {
      title: article.title,
      description: article.description,
      alternates: { canonical: `/${slug}/` },
      openGraph: {
        type: "article",
        title: article.title,
        description: article.description,
        url: `/${slug}/`,
        modifiedTime: "2026-06-12",
      },
    };
  }

  const policy = policyPages[slug];
  if (policy) {
    return {
      title: policy.title,
      description: policy.description,
      alternates: { canonical: `/${slug}/` },
    };
  }

  return {};
}

export default async function SlugPage({ params }: PageProps) {
  const { slug } = await params;
  const category = categoryBySlug.get(slug);
  if (category) return <CategoryPage slug={slug} />;

  const article = articleBySlug.get(slug);
  if (article) return <ArticlePage slug={slug} />;

  const policy = policyPages[slug];
  if (policy) return <PolicyPage policy={policy} />;

  notFound();
}

function CategoryPage({ slug }: { slug: string }) {
  const category = categoryBySlug.get(slug);
  if (!category) notFound();
  const categoryArticles = getArticlesForCategory(slug);

  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${siteConfig.url}/${slug}/#webpage`,
    url: `${siteConfig.url}/${slug}/`,
    name: category.title,
    description: category.description,
    isPartOf: { "@id": `${siteConfig.url}/#website` },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteConfig.url,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: category.label,
          item: `${siteConfig.url}/${slug}/`,
        },
      ],
    },
  };

  return (
    <>
      <JsonLd data={schema} />
      <section className={`topic-hero topic-hero--${category.accent}`}>
        <div className="container">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span>/</span><span>{category.label}</span>
          </nav>
          <div className="topic-hero__content">
            <span className="section-label">Topic hub</span>
            <h1>{category.title}</h1>
            <p>{category.description}</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container hub-layout">
          <aside className="hub-aside">
            <div className="aside-card">
              <Icon name="book" size={24} />
              <h2>About this topic</h2>
              <p>{category.intro}</p>
            </div>
            <div className="aside-card aside-card--soft">
              <Icon name="shield" size={24} />
              <h2>Use with a consultation</h2>
              <p>
                These guides support informed questions. They do not select a
                device or diagnose a complication.
              </p>
              <Link href="/questions-for-surgeon/" className="text-link">
                Prepare your questions <Icon name="arrow" size={17} />
              </Link>
            </div>
          </aside>
          <div>
            <div className="section-heading section-heading--left">
              <span className="section-label">Guides in this topic</span>
              <h2>Start with the essentials.</h2>
            </div>
            <div className="article-grid article-grid--two">
              {categoryArticles.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container next-step">
          <div>
            <span className="section-label">Next step</span>
            <h2>Turn reading into better consultation questions.</h2>
          </div>
          <Link className="button button--primary" href="/fda-checklist/">
            Open the FDA checklist guide <Icon name="arrow" />
          </Link>
        </div>
      </section>
    </>
  );
}

function ArticlePage({ slug }: { slug: string }) {
  const article = articleBySlug.get(slug);
  if (!article) notFound();
  const category = categoryBySlug.get(article.category);
  if (!category) notFound();

  const related = getArticlesForCategory(article.category)
    .filter((candidate) => candidate.slug !== article.slug)
    .slice(0, 3);

  const schema = {
    "@context": "https://schema.org",
    "@type": ["MedicalWebPage", "Article"],
    "@id": `${siteConfig.url}/${article.slug}/#webpage`,
    url: `${siteConfig.url}/${article.slug}/`,
    headline: article.title,
    description: article.description,
    datePublished: "2026-06-12",
    dateModified: "2026-06-12",
    author: {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: "Breasts-Implants.com Editorial Team",
    },
    publisher: { "@id": `${siteConfig.url}/#organization` },
    medicalAudience: {
      "@type": "MedicalAudience",
      audienceType: "Patient",
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteConfig.url,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: category.label,
          item: `${siteConfig.url}/${category.slug}/`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: article.title,
          item: `${siteConfig.url}/${article.slug}/`,
        },
      ],
    },
  };

  return (
    <>
      <JsonLd data={schema} />
      <article>
        <header className="article-hero">
          <div className="container article-hero__inner">
            <nav className="breadcrumbs" aria-label="Breadcrumb">
              <Link href="/">Home</Link><span>/</span>
              <Link href={`/${category.slug}/`}>{category.label}</Link>
              <span>/</span><span>Guide</span>
            </nav>
            <span className="section-label">{article.eyebrow}</span>
            <h1>{article.title}</h1>
            <p className="article-deck">{article.description}</p>
            <div className="article-meta">
              <span><Icon name="book" size={17} /> {article.readTime}</span>
              <span><Icon name="check" size={17} /> {article.reviewed}</span>
            </div>
          </div>
        </header>

        <div className="container article-layout">
          <aside className="article-aside">
            <div className="review-card">
              <Icon name="shield" size={28} />
              <h2>Review status</h2>
              <p>
                Editorial review complete. Named clinician review will be
                displayed only after credentials and disclosures are verified.
              </p>
              <Link href="/medical-review-policy/">Our review policy</Link>
            </div>
            <nav className="on-page" aria-label="On this page">
              <strong>On this page</strong>
              <a href="#answer">Direct answer</a>
              <a href="#takeaways">Key takeaways</a>
              {article.sections.map((section) => (
                <a
                  href={`#${toId(section.title)}`}
                  key={section.title}
                >
                  {section.title}
                </a>
              ))}
              {article.faqs.length > 0 && <a href="#faqs">Questions</a>}
              <a href="#sources">Sources</a>
            </nav>
          </aside>

          <div className="article-content">
            <section className="answer-box" id="answer">
              <span>Direct answer</span>
              <p>{article.directAnswer}</p>
            </section>

            <section id="takeaways">
              <h2>Key takeaways</h2>
              <ul className="check-list">
                {article.takeaways.map((takeaway) => (
                  <li key={takeaway}><Icon name="check" size={19} /> {takeaway}</li>
                ))}
              </ul>
            </section>

            {article.sections.map((section) => (
              <section key={section.title} id={toId(section.title)}>
                <h2>{section.title}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.bullets && (
                  <ul>
                    {section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                  </ul>
                )}
              </section>
            ))}

            <aside className="medical-note">
              <Icon name="warning" size={23} />
              <div>
                <strong>Seek care for concerning changes</strong>
                <p>
                  New persistent swelling, a mass, increasing redness, fever,
                  drainage, severe pain, breathing difficulty, or sudden
                  breast changes need prompt clinical assessment.
                </p>
              </div>
            </aside>

            {article.faqs.length > 0 && (
              <section id="faqs">
                <h2>Common questions</h2>
                <div className="faq-list faq-list--article">
                  {article.faqs.map((faq) => (
                    <details key={faq.question}>
                      <summary>{faq.question}</summary>
                      <p>{faq.answer}</p>
                    </details>
                  ))}
                </div>
              </section>
            )}

            <section id="sources" className="sources">
              <h2>Sources and further reading</h2>
              <ol>
                {article.sources.map((source) => (
                  <li key={source.url}>
                    <a href={source.url} rel="noreferrer" target="_blank">
                      {source.label}
                    </a>
                  </li>
                ))}
              </ol>
              <p className="source-note">
                Source list reviewed June 12, 2026. Product labeling and
                regulatory guidance can change.
              </p>
            </section>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="section section--tint">
          <div className="container">
            <div className="section-heading section-heading--left">
              <span className="section-label">Related guides</span>
              <h2>Continue with this topic.</h2>
            </div>
            <div className="article-grid article-grid--three">
              {related.map((item) => (
                <ArticleCard key={item.slug} article={item} compact />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

type Policy = {
  title: string;
  description: string;
  sections: { title: string; paragraphs: string[]; bullets?: string[] }[];
};

const policyPages: Record<string, Policy> = {
  about: {
    title: "About Breasts-Implants.com",
    description:
      "Our purpose, scope, independence, and approach to breast implant patient education.",
    sections: [
      {
        title: "Our purpose",
        paragraphs: [
          "Breasts-Implants.com is being built as an independent patient-education library. Its purpose is to help readers prepare for informed conversations with qualified clinicians.",
          "The site is not a clinic, implant manufacturer, referral marketplace, or substitute for medical care.",
        ],
      },
      {
        title: "Our commitments",
        paragraphs: [],
        bullets: [
          "Use regulator guidance and primary sources wherever possible.",
          "Distinguish established facts from uncertainty and expert judgment.",
          "Name commercial relationships and conflicts.",
          "Correct material errors transparently.",
        ],
      },
    ],
  },
  "editorial-policy": {
    title: "Editorial Policy",
    description:
      "How topics are selected, researched, written, sourced, updated, and corrected.",
    sections: [
      {
        title: "Editorial standards",
        paragraphs: [
          "Pages are written for patient understanding without promising outcomes or diagnosing readers. Benefits are presented alongside risks, limitations, alternatives, and uncertainty.",
          "Regulatory status is dated and specific to geography. Manufacturer materials may support product facts but do not replace independent evidence.",
        ],
      },
      {
        title: "Updates and corrections",
        paragraphs: [
          "Evergreen medical pages are scheduled for regular review and earlier review after important safety communications, recalls, labeling changes, or new evidence.",
        ],
      },
    ],
  },
  "medical-review-policy": {
    title: "Medical Review Policy",
    description:
      "How clinical reviewers will be selected, verified, disclosed, and credited.",
    sections: [
      {
        title: "Reviewer verification",
        paragraphs: [
          "A medical review badge will appear only after the reviewer's identity, active credentials, relevant expertise, and conflicts are verified.",
          "Until that process is complete, pages are labeled as editorially reviewed rather than medically reviewed.",
        ],
      },
      {
        title: "What review means",
        paragraphs: [
          "Clinical review checks medical accuracy, balance, terminology, escalation guidance, and whether sources support the claims. It does not create a clinician-patient relationship.",
        ],
      },
    ],
  },
  "medical-disclaimer": {
    title: "Medical Disclaimer",
    description:
      "Important limits on the educational information provided by this website.",
    sections: [
      {
        title: "Educational information only",
        paragraphs: [
          "Content on this website is general education and is not medical advice, diagnosis, treatment, or a recommendation for a particular device, procedure, clinician, or facility.",
          "Contact a qualified healthcare professional for personal advice. Call local emergency services for a medical emergency.",
        ],
      },
    ],
  },
};

function PolicyPage({ policy }: { policy: Policy }) {
  return (
    <>
      <header className="article-hero policy-hero">
        <div className="container article-hero__inner">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span>/</span><span>Site information</span>
          </nav>
          <span className="section-label">Site information</span>
          <h1>{policy.title}</h1>
          <p className="article-deck">{policy.description}</p>
        </div>
      </header>
      <div className="container policy-content">
        {policy.sections.map((section) => (
          <section key={section.title}>
            <h2>{section.title}</h2>
            {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            {section.bullets && (
              <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
            )}
          </section>
        ))}
      </div>
    </>
  );
}

function toId(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
