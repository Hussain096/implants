import type { MetadataRoute } from "next";
import {
  articles,
  categories,
  siteConfig,
} from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const updated = new Date("2026-06-12");

  return [
    {
      url: siteConfig.url,
      lastModified: updated,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...categories.map((category) => ({
      url: `${siteConfig.url}/${category.slug}/`,
      lastModified: updated,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...articles.map((article) => ({
      url: `${siteConfig.url}/${article.slug}/`,
      lastModified: updated,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...[
      "about",
      "editorial-policy",
      "medical-review-policy",
      "medical-disclaimer",
    ].map((slug) => ({
      url: `${siteConfig.url}/${slug}/`,
      lastModified: updated,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];
}
