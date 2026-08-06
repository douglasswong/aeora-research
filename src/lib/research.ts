export const RESEARCH_ARTICLES = [
  {
    slug: "why-markets-rally-despite-bad-news",
    title: "Why Markets Rally Despite Bad News",
    shortTitle: "Why Markets Rally",
    description:
      "Markets can rise despite geopolitical risks, high rates and negative headlines. Aeora Research explains expectations, earnings and investor positioning.",
    excerpt:
      "Why do markets rise when the headlines remain negative? The answer often lies in expectations, earnings, liquidity and how investors were already positioned.",
    category: "Market Intelligence",
    author: "Aeora Research Team",
    publishedAt: "2026-08-06",
    displayDate: "6 August 2026",
    readingTime: "4 min read",
    noteNumber: "02"
  },
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
