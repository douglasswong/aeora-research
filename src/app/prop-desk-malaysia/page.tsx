import type { Metadata } from "next";
import { AuthorityPillarPage } from "@/components/AuthorityPillarPage";
import { requireAuthorityPillar } from "@/lib/seo-authority";
import { SITE_URL } from "@/lib/site";

const pillar = requireAuthorityPillar("prop-desk-malaysia");

export const metadata: Metadata = {
  title: "Prop Desk Development in Malaysia | Aeora Research",
  description: pillar.description,
  keywords: [
    "prop desk Malaysia",
    "professional trader development Malaysia",
    "proprietary trading education Malaysia"
  ],
  alternates: {
    canonical: "/prop-desk-malaysia"
  },
  openGraph: {
    title: "Prop Desk & Professional Trader Development in Malaysia",
    description: pillar.description,
    url: `${SITE_URL}/prop-desk-malaysia`
  }
};

export default function PropDeskMalaysiaPage() {
  return <AuthorityPillarPage pillar={pillar} />;
}
