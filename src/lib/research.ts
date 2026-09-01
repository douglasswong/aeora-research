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
  openGraphTitle?: string;
  openGraphDescription?: string;
  tags?: readonly string[];
  socialImage?: string;
  socialImageWidth?: number;
  socialImageHeight?: number;
  draft?: boolean;
};

export const RESEARCH_ARTICLES: readonly ResearchArticle[] = [
  {
    slug: "warsh-fed-rate-hike-q4-2026-market-outlook",
    title: "Warsh Turns Hawkish: USD, Gold, Stocks & Bitcoin Into Q4 2026",
    shortTitle: "Warsh, Rates and Q4",
    description:
      "Aeora Research examines Kevin Warsh's August 2026 Jackson Hole speech, renewed rate-hike risk and the cross-asset outlook for the USD, gold, equities and Bitcoin into Q4.",
    excerpt:
      "The Fed debate has shifted from future easing toward renewed tightening risk. We map the implications for the dollar, gold, equities, Bitcoin and the September data calendar.",
    category: "Cross-Asset Outlook",
    author: "Aeora Research Team",
    publishedAt: "2026-09-01",
    displayDate: "1 September 2026",
    readingTime: "9 min read",
    noteNumber: "05",
    seoTitle: "Fed Outlook Q4 2026: USD, Gold, Stocks & Bitcoin",
    openGraphTitle: "Warsh Turns Hawkish: Q4 2026 Cross-Asset Outlook",
    openGraphDescription:
      "How Kevin Warsh's Jackson Hole speech reset the Fed debate and changed the Q4 setup for the USD, gold, equities and Bitcoin.",
    socialImage: "/research/warsh-fed-usd-policy-repricing-q4-2026-v2.png",
    socialImageWidth: 1668,
    socialImageHeight: 937,
    tags: [
      "Fed outlook Q4 2026",
      "Kevin Warsh rate hike",
      "USD outlook 2026",
      "Gold outlook Q4 2026",
      "Nasdaq outlook 2026",
      "S&P 500 outlook 2026",
      "Bitcoin outlook 2026",
      "Federal Reserve September 2026"
    ],
    draft: false
  },
  {
    slug: "wti-crude-oil-outlook-2026-geopolitical-90-day-scenario",
    title:
      "WTI Crude Oil at a Decision Zone: Is Another Geopolitical Repricing Cycle Forming?",
    shortTitle: "WTI at a Decision Zone",
    description:
      "Aeora Research examines WTI crude oil's 2026 geopolitical repricing cycle, the $90.8-$96.5 technical test and the long-term macro implications.",
    excerpt:
      "WTI has reclaimed a pivotal $84-$85 area while geopolitical uncertainty returns. The next test is not a forecast, but a decision region with cross-asset consequences.",
    category: "Commodities & Macro",
    author: "Aeora Research Team",
    publishedAt: "2026-08-19",
    displayDate: "19 August 2026",
    readingTime: "12 min read",
    noteNumber: "04",
    seoTitle: "WTI Crude Oil Outlook 2026: Geopolitical Decision Zone",
    socialImage: "/research/wti-crude-oil-outlook-2026-daily.png",
    socialImageWidth: 1311,
    socialImageHeight: 830
  },
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
