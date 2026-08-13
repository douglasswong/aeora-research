export type ResearchArticle = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  excerpt: string;
  category: string;
  author: string;
  publishedAt: string;
  displayDate: string;
  readingTime: string;
  noteNumber: string;
  seoTitle?: string;
  socialImage?: string;
  socialImageWidth?: number;
  socialImageHeight?: number;
};

export const RESEARCH_ARTICLES: readonly ResearchArticle[] = [
  {
    slug: "sawit-ecotherm-palm-oil-ai-data-centre-fcpo",
    title: "Can Palm Oil Cool AI? What Sawit EcoTherm Could Mean for FCPO",
    shortTitle: "Palm Oil, AI and FCPO",
    description:
      "MPOB's Sawit EcoTherm could open a new palm-oil use case in AI data-centre cooling. Aeora Research examines what it really means for FCPO.",
    excerpt:
      "Sawit EcoTherm links palm-based cooling technology with AI infrastructure. The early opportunity is worth tracking, but it is not yet proof of material new demand for FCPO.",
    category: "Market Intelligence",
    author: "Aeora Research Team",
    publishedAt: "2026-08-13",
    displayDate: "13 August 2026",
    readingTime: "5 min read",
    noteNumber: "03",
    seoTitle: "Sawit EcoTherm: Can Palm Oil Cool AI Data Centres?",
    socialImage: "/research/sawit-ecotherm-ai-data-centre-fcpo.webp",
    socialImageWidth: 1600,
    socialImageHeight: 900
  },
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

export function getResearchArticle(slug: string) {
  return RESEARCH_ARTICLES.find((article) => article.slug === slug);
}
