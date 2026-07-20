import type { Metadata } from "next";
import Link from "next/link";
import { EditorialPage } from "@/components/EditorialPage";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Team | Aeora Research",
  description:
    "Meet the leadership behind Aeora Research and its research-led approach to financial markets, prop desk development and market intelligence.",
  alternates: {
    canonical: "/team"
  },
  openGraph: {
    url: `${SITE_URL}/team`
  }
};

export default function TeamPage() {
  return (
    <EditorialPage
      kicker="Our Team"
      title="Built around disciplined market practice."
      intro="Aeora Research brings together leadership, market intelligence and trader development with a long-term view of professional market participation."
    >
      <section className="editorial-section section section--ruled">
        <div className="section__inner team-layout">
          <div className="team-layout__intro">
            <p className="section-kicker">Leadership</p>
            <h2>The people behind the process.</h2>
          </div>
          <article className="team-profile">
            <p className="team-profile__index">01</p>
            <div>
              <p className="team-profile__role">Head of PropDesk &amp; Research</p>
              <h3>Douglas Wong</h3>
              <p>
                Douglas leads the work at the intersection of research, trader
                development and prop desk direction at Aeora Research.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="editorial-section section">
        <div className="section__inner editorial-grid">
          <div>
            <p className="section-kicker">Working principles</p>
            <h2>Clear roles. Shared standards.</h2>
          </div>
          <div className="editorial-copy">
            <p>
              Team profiles will be introduced as the organisation develops.
              Each profile will be grounded in a defined role, relevant market
              experience and the responsibilities held within Aeora Research.
            </p>
            <div className="editorial-links">
              <Link href="/research">See the research approach</Link>
              <Link href="/#connect">Connect with Aeora</Link>
            </div>
          </div>
        </div>
      </section>
    </EditorialPage>
  );
}
