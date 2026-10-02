import type { Metadata } from "next";
import { AuthorityPillarPage } from "@/components/AuthorityPillarPage";
import { requireAuthorityPillar } from "@/lib/seo-authority";
import { SITE_URL } from "@/lib/site";

const pillar = requireAuthorityPillar("professional-trader-career-malaysia");

export const metadata: Metadata = {
  title: "Professional Trader Career in Malaysia | Aeora Research",
  description: pillar.description,
  keywords: [
    "how to become a professional trader Malaysia",
    "trading career Malaysia",
    "professional trader roadmap Malaysia"
  ],
  alternates: {
    canonical: "/professional-trader-career-malaysia"
  },
  openGraph: {
    title: "How to Become a Professional Trader in Malaysia",
    description: pillar.description,
    url: `${SITE_URL}/professional-trader-career-malaysia`
  }
};

export default function ProfessionalTraderCareerMalaysiaPage() {
  return <AuthorityPillarPage pillar={pillar} />;
}
