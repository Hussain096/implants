import Link from "next/link";
import type { Article } from "@/data/site";
import { Icon } from "./icons";

export function ArticleCard({
  article,
  compact = false,
}: {
  article: Article;
  compact?: boolean;
}) {
  return (
    <article className={`article-card${compact ? " article-card--compact" : ""}`}>
      <div>
        <span className="article-card__eyebrow">{article.eyebrow}</span>
        <h3>
          <Link href={`/${article.slug}/`}>{article.title}</Link>
        </h3>
        <p>{article.description}</p>
      </div>
      <div className="article-card__footer">
        <span>{article.readTime}</span>
        <Link href={`/${article.slug}/`} aria-label={`Read ${article.title}`}>
          Read guide <Icon name="arrow" size={17} />
        </Link>
      </div>
    </article>
  );
}
