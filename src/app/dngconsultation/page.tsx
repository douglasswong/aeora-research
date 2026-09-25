import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { SiteFooter } from "@/components/SiteFooter";
import { WealthStructureField } from "@/components/WealthStructureField";
import {
  DNG_CONSULTATION_CONTACT_URL,
  SITE_URL
} from "@/lib/site";

const SERVICES = [
  {
    index: "01",
    title: "Grow",
    lead: "Guidance for people building deliberate financial capability.",
    points: [
      "A structured pathway toward a seven-figure net-worth objective",
      "One-to-one mentoring",
      "Class-based mentoring"
    ]
  },
  {
    index: "02",
    title: "Save",
    lead: "Disciplined foundations for sustainable, risk-aware decisions.",
    points: [
      "Personal financial planning",
      "Personal tax management",
      "Financial capability and decision-making"
    ]
  },
  {
    index: "03",
    title: "Money Placement Solutions",
    lead: "A clearer view of where capital can sit and why.",
    points: [
      "Banking and cash placement advisory",
      "Structured investment portfolio solutions",
      "Risk-aware capital allocation"
    ]
  },
  {
    index: "04",
    title: "Structure",
    lead: "Organised support for personal and business financial matters.",
    points: [
      "Portfolio construction and management",
      "SME accounting and audit coordination support",
      "Private investment structures and private-fund-related portfolio services, where applicable"
    ]
  }
] as const;

export const metadata: Metadata = {
  title: "D&G Consultation | Financial Guidance & Wealth Solutions | Aeora Research",
  description:
    "Financial education, money management, portfolio solutions and personalised financial guidance for individuals and business owners under the Aeora Research ecosystem.",
  alternates: {
    canonical: "/dngconsultation"
  },
  openGraph: {
    title: "D&G Consultation | Financial Guidance & Wealth Solutions | Aeora Research",
    description:
      "Financial education, money management, portfolio solutions and personalised financial guidance under the Aeora Research ecosystem.",
    url: `${SITE_URL}/dngconsultation`
  }
};

export default function DngConsultationPage() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div id="top" className="site-shell site-shell--reading-progress dng-page">
        <Header />
        <main id="main">
          <section className="dng-hero" aria-labelledby="dng-title">
            <div className="section__inner dng-hero__inner">
              <div className="dng-hero__content">
                <p className="section-kicker">Other services / D&amp;G Consultation</p>
                <h1 id="dng-title">From Market Experience to Structured Wealth</h1>
                <p>
                  Under the same company umbrella, D&amp;G Consultation was founded in 2020 to bring together more than a decade of hands-on experience across trading, investing, financial markets and advisory work.
                </p>
                <p>
                  Today, we support Gen-Y and Gen-Z individuals through structured financial education, planning conversations and investment guidance focused on long-term capability rather than short-term hype.
                </p>
                <div className="dng-hero__path" aria-label="Experience, structure, financial capability, long-term wealth">
                  <span>Experience</span>
                  <i aria-hidden="true" />
                  <span>Structure</span>
                  <i aria-hidden="true" />
                  <span>Capability</span>
                  <i aria-hidden="true" />
                  <span>Long term</span>
                </div>
              </div>
              <WealthStructureField />
            </div>
          </section>

          <section className="dng-services section" aria-labelledby="dng-services-title">
            <div className="section__inner">
              <div className="dng-services__heading">
                <p className="section-kicker">What we also do</p>
                <h2 id="dng-services-title">A more structured financial journey.</h2>
                <p>
                  Clearer choices across earning, preservation, placement and the structures that support long-term financial progress.
                </p>
              </div>
              <div className="dng-services__grid">
                {SERVICES.map((service) => (
                  <article className="dng-service" key={service.index}>
                    <p>{service.index}</p>
                    <h3>{service.title}</h3>
                    <span>{service.lead}</span>
                    <ul>
                      {service.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="dng-contact section" aria-labelledby="dng-contact-title">
            <div className="section__inner dng-contact__inner">
              <div>
                <p className="section-kicker section-kicker--dark">Positioning</p>
                <h2 id="dng-contact-title">Progress is better when the pieces work together.</h2>
              </div>
              <div className="dng-contact__action">
                <p>
                  Financial progress rarely comes from one product, one trade or one shortcut. Our approach begins with where you are today, where you intend to go, and how knowledge, capital and execution can be structured around that journey.
                </p>
                <div className="dng-contact__steps" aria-label="Earn, preserve, allocate, structure">
                  <span>Earn</span>
                  <span>Preserve</span>
                  <span>Allocate</span>
                  <span>Structure</span>
                </div>
                <p className="dng-contact__prompt">Need something more specific?</p>
                <p>Speak with our team about your financial circumstances, objectives or requirements.</p>
                <a
                  className="button button--primary"
                  href={DNG_CONSULTATION_CONTACT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Have a D&G Consultation representative contact you via Google Form, opens in a new tab"
                >
                  Have our representative contact you
                </a>
              </div>
            </div>
          </section>
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
