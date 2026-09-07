import type { ContentRecommendation } from "@/lib/audience/types";

const CONTENT_LIBRARY: ContentRecommendation[] = [
  {
    title: "Why Markets Rally Despite Bad News",
    href: "/research/why-markets-rally-despite-bad-news",
    reason: "A useful starting point for traders looking to connect headlines, expectations and market context.",
    tags: ["macro", "market context", "market structure"]
  },
  {
    title: "CME Single Stock Futures Explained",
    href: "/research/cme-single-stock-futures-explained",
    reason: "A practical explainer for traders exploring listed derivatives and more structured market access.",
    tags: ["futures", "risk management", "institutional trading"]
  },
  {
    title: "Can Palm Oil Cool AI? What Sawit EcoTherm Could Mean for FCPO",
    href: "/research/sawit-ecotherm-palm-oil-ai-data-centre-fcpo",
    reason: "Relevant for FCPO and commodity traders wanting to connect industry developments with market context.",
    tags: ["fcpo", "commodities", "market context"]
  },
  {
    title: "WTI Crude Oil Outlook",
    href: "/research/wti-crude-oil-outlook-2026-geopolitical-90-day-scenario",
    reason: "A context-led note for traders following crude oil and broader macro conditions.",
    tags: ["crude oil", "commodities", "macro"]
  }
];

export function recommendContent(
  painPoints: string[],
  markets: string[],
  developmentIntent: string[]
): ContentRecommendation | null {
  const signals = [...painPoints, ...markets, ...developmentIntent]
    .join(" ")
    .toLowerCase();

  if (signals.includes("fcpo") || signals.includes("palm")) {
    return CONTENT_LIBRARY[2];
  }

  if (signals.includes("macro") || signals.includes("context")) {
    return CONTENT_LIBRARY[0];
  }

  if (signals.includes("futures") || signals.includes("prop") || signals.includes("institutional")) {
    return CONTENT_LIBRARY[1];
  }

  if (signals.includes("crude") || signals.includes("oil")) {
    return CONTENT_LIBRARY[3];
  }

  return null;
}

export { CONTENT_LIBRARY };
