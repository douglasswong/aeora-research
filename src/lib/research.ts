export const RESEARCH_ARTICLES = [
  {
    slug: "cme-single-stock-futures-explained",
    title: "CME Single Stock Futures: A Beginner's Guide",
    shortTitle: "CME Single Stock Futures",
    description:
      "A clear introduction to CME Single Stock Futures, contract sizes, margin, expiry and the risks beginners should understand before trading.",
    excerpt:
      "A practical introduction to gaining futures exposure to one US-listed company, including Standard and Micro contract sizes, margin and the risks that matter.",
    category: "Market Structure",
    author: "Aeora Research Team",
    publishedAt: "2026-07-28",
    displayDate: "28 July 2026",
    readingTime: "5 min read",
    noteNumber: "01"
  }
] as const;

export type ResearchArticle = (typeof RESEARCH_ARTICLES)[number];

export function getResearchArticle(slug: string) {
  return RESEARCH_ARTICLES.find((article) => article.slug === slug);
}
