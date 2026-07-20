import type { Metadata } from "next";
import Link from "next/link";
import { EditorialPage } from "@/components/EditorialPage";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Research | Aeora Research Market Intelligence",
  description:
    "Aeora Research approaches financial markets through macro context, market structure, liquidity, positioning and disciplined risk frameworks.",
  alternates: {
    canonical: "/research"
  },
  openGraph: {
    url: `${SITE_URL}/research`
  }
};

export default function ResearchPage() {
  return (
    <EditorialPage
      kicker="Research"
      title="Context before conviction."
      intro="Aeora Research approaches markets through structured research, contextual intelligence and disciplined decision frameworks."
    >
      <section className="editorial-section section section--ruled">
        <div className="section__inner research-framework">
          <div className="research-framework__intro">
            <p className="section-kicker">Research framework</p>
            <h2>Read the market as a system.</h2>
          </div>
          <ol className="research-framework__list">
            <li>
              <span>01</span>
              <div>
                <h3>Macro context</h3>
                <p>
                  Identify the economic conditions and cross-asset forces that
                  shape the broader market environment.
                </p>
              </div>
            </li>
            <li>
              <span>02</span>
              <div>
                <h3>Market structure</h3>
                <p>
                  Examine the conditions, levels and mechanics that influence
                  how a market is behaving.
                </p>
              </div>
            </li>
            <li>
              <span>03</span>
              <div>
                <h3>Liquidity and positioning</h3>
                <p>
                  Consider participation, liquidity and positioning alongside
                  price action rather than in isolation.
                </p>
              </div>
            </li>
            <li>
              <span>04</span>
              <div>
                <h3>Risk and decision quality</h3>
                <p>
                  Frame every decision through risk, invalidation and the
                  quality of the process before execution.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section className="editorial-section section">
        <div className="section__inner editorial-grid">
          <div>
            <p className="section-kicker">Publication standard</p>
            <h2>Useful, dated and accountable.</h2>
          </div>
          <div className="editorial-copy">
            <p>
              Future research notes will identify their author, publication
              date, relevant sources and analytical scope. They will be
              published to inform discussion, not to provide investment advice
              or promise a market outcome.
            </p>
            <p>
              This is the foundation for a growing library of market
              intelligence, maintained with the same emphasis on clarity and
              disciplined refinement that informs the broader Aeora ecosystem.
            </p>
            <div className="editorial-links">
              <Link href="/about">About Aeora Research</Link>
              <Link href="/#connect">Research collaboration enquiries</Link>
            </div>
          </div>
        </div>
      </section>
    </EditorialPage>
  );
}
