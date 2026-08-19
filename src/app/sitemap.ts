import type { MetadataRoute } from "next";
import { RESEARCH_ARTICLES } from "@/lib/research";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const corePages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: `${SITE_URL}/team`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: `${SITE_URL}/pinnacle`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: `${SITE_URL}/atfx-wtc`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8
    },
    {
      url: `${SITE_URL}/research`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9
    },
    {
      url: `${SITE_URL}/terms-conditions`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3
    },
    {
      url: `${SITE_URL}/faq`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6
    }
  ];

  const researchArticles: MetadataRoute.Sitemap = RESEARCH_ARTICLES.filter(
    (article) => !article.draft
  ).map(
    (article) => ({
      url: `${SITE_URL}/research/${article.slug}`,
      lastModified: new Date(article.publishedAt),
      changeFrequency: "monthly",
      priority: 0.85
    })
  );

  return [...corePages, ...researchArticles];
}
