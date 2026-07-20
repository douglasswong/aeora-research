import type { Metadata } from "next";
import Link from "next/link";
import { EditorialPage } from "@/components/EditorialPage";
import {
  COMPANY_ADDRESS_LINES,
  COMPANY_NAME,
  COMPANY_REGISTRATION,
  SITE_URL
} from "@/lib/site";

export const metadata: Metadata = {
  title: "About Aeora Research | Financial Markets Research",
  description:
    "Learn about Aeora Research PLT, a Malaysian research-led financial markets company focused on market intelligence, trader development and disciplined market participation.",
  alternates: {
    canonical: "/about"
  },
  openGraph: {
    url: `${SITE_URL}/about`
  }
};

export default function AboutPage() {
  return (
    <EditorialPage
      kicker="About Aeora"
      title="Built for the evolving market landscape."
      intro="Aeora Research is being built as a research-led market ecosystem connecting intelligence, trader development and professional market participation."
    >
      <section className="editorial-section section section--ruled">
        <div className="section__inner editorial-grid">
          <div>
            <p className="section-kicker">Direction</p>
            <h2>Deliberate by design.</h2>
          </div>
          <div className="editorial-copy">
            <p>
              Our long-term direction is centred on creating stronger pathways
              between research, disciplined trading practice and institutional
              market participation.
            </p>
            <p>
              The work is anchored in context, structure, risk and conviction:
              the essential ingredients of a durable market process.
            </p>
            <div className="editorial-links">
              <Link href="/research">Explore our research approach</Link>
              <Link href="/team">Meet the team</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="editorial-section section">
        <div className="section__inner company-record">
          <div>
            <p className="section-kicker">Company record</p>
            <h2>Identity, clearly stated.</h2>
          </div>
          <dl>
            <div>
              <dt>Legal name</dt>
              <dd>{COMPANY_NAME}</dd>
            </div>
            <div>
              <dt>Registration</dt>
              <dd>{COMPANY_REGISTRATION}</dd>
            </div>
            <div>
              <dt>Location</dt>
              <dd>{COMPANY_ADDRESS_LINES.join(" ")}</dd>
            </div>
          </dl>
        </div>
      </section>
    </EditorialPage>
  );
}
