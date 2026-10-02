import type { Metadata } from "next";
import { AuthorityPillarPage } from "@/components/AuthorityPillarPage";
import { requireAuthorityPillar } from "@/lib/seo-authority";
import { SITE_URL } from "@/lib/site";

const pillar = requireAuthorityPillar("institutional-trading-malaysia");

export const metadata: Metadata = {
  title: "Institutional Trading in Malaysia: Market Structure & Risk | Aeora Research",
  description: pillar.description,
  keywords: [
    "institutional trading Malaysia",
    "market structure Malaysia",
    "direct market access explained",
    "market liquidity education"
  ],
  alternates: {
    canonical: "/institutional-trading-malaysia"
  },
  openGraph: {
    title: "Institutional Trading in Malaysia: Market Structure, Access and Risk",
    description: pillar.description,
    url: `${SITE_URL}/institutional-trading-malaysia`
  }
};

export default function InstitutionalTradingMalaysiaPage() {
  return <AuthorityPillarPage pillar={pillar} />;
}
