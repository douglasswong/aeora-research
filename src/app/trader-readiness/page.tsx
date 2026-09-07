import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { SiteFooter } from "@/components/SiteFooter";
import { TraderReadinessAssessment } from "@/components/TraderReadinessAssessment";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Trader Institutional Readiness Assessment | Aeora Research",
  description: "A practical self-assessment for traders developing a more structured process around context, risk, review and execution.",
  alternates: { canonical: "/trader-readiness" },
  robots: { index: false, follow: false },
  openGraph: {
    title: "Trader Institutional Readiness Assessment | Aeora Research",
    description: "A practical self-assessment for a more structured trading process.",
    url: `${SITE_URL}/trader-readiness`
  }
};

export default function TraderReadinessPage() {
  const captureEnabled = false;

  return (
    <div id="top" className="site-shell">
      <Header />
      <main className="assessment-page">
        <section className="assessment-page__hero section">
          <div className="section__inner">
            <p className="section-kicker">Aeora Trader Development</p>
            <h1><span>Trader Institutional</span>{" "}<span>Readiness Assessment.</span></h1>
            <p className="assessment-page__lede">
              How ready are you to move beyond retail trading habits and operate with a more professional process?
            </p>
            <div className="assessment-page__notes" aria-label="Assessment information">
              <span>10 questions</span>
              <span>Approx. 5 minutes</span>
              <span>Useful feedback, not a trading recommendation</span>
            </div>
          </div>
        </section>

        <section className="section assessment-page__assessment">
          <div className="section__inner">
            <TraderReadinessAssessment captureEnabled={captureEnabled} />
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
