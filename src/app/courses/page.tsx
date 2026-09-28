import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { ScrollRevealController } from "@/components/ScrollRevealController";
import { SiteFooter } from "@/components/SiteFooter";
import { SITE_URL } from "@/lib/site";

type CourseMark =
  | "basic"
  | "advanced"
  | "psychology"
  | "institutional"
  | "blockchain"
  | "ultimate";

type Course = {
  id: CourseMark;
  label: string;
  title: string;
  tag?: string;
  note?: string;
  points: readonly string[];
};

type CoursePlan = {
  id: string;
  name: string;
  price: string;
  approximatePrice: string;
  label?: string;
  tag?: string;
  note?: string;
  features: readonly string[];
  href: string;
};

const COURSE_CATALOGUE: readonly Course[] = [
  {
    id: "basic",
    label: "Basic Course",
    title: "Build the Foundation",
    points: [
      "Beginner Friendly",
      "Balanced Learning",
      "Universal Application",
      "Entry Level"
    ]
  },
  {
    id: "advanced",
    label: "Advanced Course",
    title: "Elevate Your Trading Skill",
    tag: "Hot seller",
    points: [
      "Master the Charts (Technical Analysis)",
      "Forecast Price Action",
      "Develop Trading Execution",
      "Intermediate Level"
    ]
  },
  {
    id: "psychology",
    label: "Psychology Course",
    title: "Master the Mindset",
    points: [
      "Break the Plateau",
      "Develop Consistency",
      "Sharpen Your Edge",
      "Trading Psychology",
      "Expert Level"
    ]
  },
  {
    id: "institutional",
    label: "Institutional Programme",
    title: "Institutional Trading & Onboarding",
    note: "For Malaysian Participants Only*",
    points: [
      "Market Making",
      "Institutional-Level Market Structure",
      "Direct Market Access",
      "Professional Trading Environment",
      "Expert Level"
    ]
  },
  {
    id: "blockchain",
    label: "Blockchain & Crypto",
    title: "Master the 24/7 Market",
    points: [
      "Blockchain Basics",
      "Balanced Approach",
      "Digital Asset Markets",
      "Start Your Crypto Journey",
      "Digital Focus"
    ]
  },
  {
    id: "ultimate",
    label: "The Ultimate 3+1 Course",
    title: "Zero to Hundred",
    tag: "Complete learning path",
    points: [
      "Best Value Package",
      "Universal Mastery",
      "Total Immersion",
      "Combined Learning Path",
      "Future-Focused"
    ]
  }
] as const;

const COURSE_PLANS: readonly CoursePlan[] = [
  {
    id: "institutional",
    name: "Institutional Trading & Onboarding",
    price: "RM29,999",
    approximatePrice: "USD 7,500",
    label: "Malaysian participants only",
    note: "Available to Malaysian participants only*",
    features: [
      "One User",
      "Exclusive Softcopy Handbook",
      "QST Software & DMA",
      "2-Day Intensive Group Class",
      "On-Site Trading Desk Access"
    ],
    href: "https://app.doku.com/retail-api/v1/snp/177582384680"
  },
  {
    id: "basic",
    name: "Basic Course",
    price: "RM1,599",
    approximatePrice: "USD 350",
    features: [
      "One User",
      "Exclusive Softcopy Handbook",
      "Special Charting Tools",
      "2 Hours Expert After-Class Consultation",
      "1 Month Access to Private Member Group"
    ],
    href: "https://app.doku.com/retail/merchant/CHARTSDWORKSBYDGCONS6254/senangpay-177582351599"
  },
  {
    id: "advanced",
    name: "Advanced Course",
    price: "RM2,199",
    approximatePrice: "USD 500",
    label: "Hottest seller",
    features: [
      "One User",
      "Exclusive Softcopy Handbook",
      "Special Charting Tools",
      "3 Hours Expert After-Class Consultation",
      "2 Months Access to Private Member Group"
    ],
    href: "https://app.doku.com/retail/merchant/CHARTSDWORKSBYDGCONS6254/senangpay-177582359238"
  },
  {
    id: "psychology",
    name: "Psychology Course",
    price: "RM1,599",
    approximatePrice: "USD 350",
    features: [
      "One User",
      "Exclusive Softcopy Handbook",
      "Special Charting & Data Tools",
      "2 Hours Expert After-Class Consultation",
      "2 Months Access to Private Member Group"
    ],
    href: "https://app.doku.com/retail/merchant/CHARTSDWORKSBYDGCONS6254/senangpay-177582368453"
  },
  {
    id: "blockchain",
    name: "Blockchain & Cryptocurrency",
    price: "RM2,199",
    approximatePrice: "USD 500",
    features: [
      "One User",
      "Exclusive Softcopy Handbook",
      "Special Charting Tools & Data Analyzer",
      "3 Hours Expert After-Class Consultation",
      "1 Month Access to Private Member Group"
    ],
    href: "https://app.doku.com/retail/merchant/CHARTSDWORKSBYDGCONS6254/senangpay-177625723123"
  },
  {
    id: "ultimate",
    name: "The Ultimate 3+1",
    price: "RM6,199",
    approximatePrice: "USD 1,500",
    label: "All-in full course",
    tag: "Price saver",
    features: [
      "One User",
      "Exclusive Softcopy Handbook",
      "Special Charting & Data Tools",
      "One-Day Expert After-Class Consultation",
      "6 Months Access to Private Member Group"
    ],
    href: "https://app.doku.com/retail/merchant/CHARTSDWORKSBYDGCONS6254/senangpay-177625730232"
  }
] as const;

const INCLUDED_BENEFITS = [
  "Full after-class mentoring & support",
  "Lifetime privilege to our trading community",
  "Special discounts for Private Member Group subscriptions",
  "Access to selected portfolio / investment-management services subject to eligibility and applicable requirements",
  "Other Aeora / D&G services and privileges where applicable"
] as const;

const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Browse Courses",
    copy: "Find the course that fits your needs."
  },
  {
    step: "02",
    title: "Enrol & Pay",
    copy: "Secure your place using the available payment options."
  },
  {
    step: "03",
    title: "Access Anytime",
    copy: "Attend your online course at your convenience."
  },
  {
    step: "04",
    title: "After-Class Consultation",
    copy: "Schedule your included consultation with our educator where applicable."
  }
] as const;

const COURSE_REVEAL_SELECTORS = [
  ".courses-hero__field",
  ".courses-overview__heading",
  ".courses-card",
  ".courses-actions__inner",
  ".courses-pricing__intro",
  ".courses-pricing__card",
  ".courses-process__heading",
  ".courses-process__step",
  ".courses-cta__inner"
] as const;

function CoursePanelSignal({ mark }: { mark: CourseMark }) {
  return (
    <span
      className={`courses-card__signal courses-card__signal--${mark}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 72 52" focusable="false">
        {mark === "basic" ? (
          <>
            <path d="M11 40H61" />
            <path d="M18 40V28" />
            <path d="M34 40V20" />
            <path d="M50 40V11" />
          </>
        ) : null}
        {mark === "advanced" ? (
          <>
            <path d="M10 40L25 28L37 33L61 12" />
            <circle cx="25" cy="28" r="2.5" />
            <circle cx="37" cy="33" r="2.5" />
            <circle cx="61" cy="12" r="3" />
          </>
        ) : null}
        {mark === "psychology" ? (
          <>
            <circle cx="36" cy="26" r="15" />
            <circle cx="36" cy="26" r="7" />
            <path d="M10 26H24" />
            <path d="M48 26H62" />
          </>
        ) : null}
        {mark === "institutional" ? (
          <>
            <path d="M12 11H60V41H12Z" />
            <path d="M28 11V41" />
            <path d="M44 11V41" />
            <path d="M12 26H60" />
          </>
        ) : null}
        {mark === "blockchain" ? (
          <>
            <path d="M19 15L36 9L53 20L48 39L27 43L14 29Z" />
            <circle cx="19" cy="15" r="3" />
            <circle cx="53" cy="20" r="3" />
            <circle cx="48" cy="39" r="3" />
            <circle cx="27" cy="43" r="3" />
          </>
        ) : null}
        {mark === "ultimate" ? (
          <>
            <path d="M10 39L25 29L36 34L51 18L61 10" />
            <circle cx="61" cy="10" r="5" />
            <path d="M58 10H64" />
            <path d="M61 7V13" />
          </>
        ) : null}
      </svg>
    </span>
  );
}

export const metadata: Metadata = {
  title: "Trading & Investing Courses | Aeora Research",
  description:
    "Explore Aeora Research courses covering trading foundations, technical analysis, trading psychology, institutional markets, blockchain and cryptocurrency.",
  alternates: {
    canonical: "/courses"
  },
  openGraph: {
    title: "Trading & Investing Courses | Aeora Research",
    description:
      "Explore Aeora Research courses covering trading foundations, technical analysis, trading psychology, institutional markets, blockchain and cryptocurrency.",
    url: `${SITE_URL}/courses`
  }
};

export default function CoursesPage() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div id="top" className="site-shell site-shell--reading-progress courses-page">
        <Header />
        <ScrollRevealController
          rootSelector=".courses-page"
          revealSelectors={COURSE_REVEAL_SELECTORS}
        />
        <main id="main">
          <section className="courses-hero" aria-labelledby="courses-title">
            <div className="section__inner courses-hero__inner">
              <div className="courses-hero__content">
                <p className="section-kicker">Aeora learning pathways</p>
                <h1 id="courses-title" className="courses-hero__title">
                  <span>Master Investing{" "}</span>
                  <span>and Trading from{" "}</span>
                  <span>Anywhere, Anytime.</span>
                </h1>
                <p>
                  Join our expert-led online courses designed to help you build
                  practical knowledge and progress through your financial-market
                  learning journey.
                </p>
                <ol className="courses-hero__flow" aria-label="Learning progression">
                  <li>
                    <span>01</span>
                    Learn
                  </li>
                  <li>
                    <span>02</span>
                    Apply
                  </li>
                  <li>
                    <span>03</span>
                    Develop
                  </li>
                  <li>
                    <span>04</span>
                    Progress
                  </li>
                </ol>
              </div>
              <div className="courses-hero__field" aria-hidden="true">
                <div className="courses-hero__field-label">
                  <span>Learning model</span>
                  <span>01-04</span>
                </div>
                <svg viewBox="0 0 560 462" preserveAspectRatio="none">
                  <path d="M26 406H534" />
                  <path d="M26 406V42" />
                  <path d="M26 318H534" />
                  <path d="M26 230H534" />
                  <path d="M26 142H534" />
                  <path className="courses-hero__field-route" d="M48 350L166 286L248 310L362 190L492 96" />
                  <circle cx="166" cy="286" r="7" />
                  <circle cx="248" cy="310" r="7" />
                  <circle cx="362" cy="190" r="7" />
                  <circle className="courses-hero__field-node" cx="492" cy="96" r="9" />
                </svg>
                <div className="courses-hero__field-key">
                  <span>Foundation</span>
                  <span>Practice</span>
                  <span>Process</span>
                  <span>Capability</span>
                </div>
              </div>
            </div>
          </section>

          <section className="courses-overview section" aria-labelledby="catalogue-title">
            <div className="section__inner">
              <div className="courses-overview__heading">
                <div>
                  <p className="section-kicker">Course overview</p>
                  <h2 id="catalogue-title" className="courses-overview__title">
                    <span>Build the market knowledge{" "}</span>
                    <span>that fits your next step.</span>
                  </h2>
                </div>
                <p>
                  Six focused learning pathways, from first principles through
                  to specialist market practice.
                </p>
              </div>
              <div className="courses-grid">
                {COURSE_CATALOGUE.map((course) => (
                  <article
                    className={`courses-card courses-card--${course.id}`}
                    key={course.id}
                  >
                    <CoursePanelSignal mark={course.id} />
                    <div className="courses-card__header">
                      <p>{course.label}</p>
                      {course.tag ? <span>{course.tag}</span> : null}
                    </div>
                    <h3>{course.title}</h3>
                    {course.note ? <p className="courses-card__note">{course.note}</p> : null}
                    <ul>
                      {course.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="courses-actions section section--ruled" aria-labelledby="courses-actions-title">
            <div className="section__inner courses-actions__inner">
              <div>
                <p className="section-kicker">Course action</p>
                <h2 id="courses-actions-title" className="courses-actions__title">
                  <span>View the full course{" "}</span>
                  <span>catalogue or enrol.</span>
                </h2>
              </div>
              <div className="courses-actions__buttons">
                <a
                  className="button button--primary"
                  href="https://drive.google.com/file/d/1yAIRDcNIlw7Mp0P8Yo1NmlzNGkonSNMb/view"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Full catalogue
                </a>
                <a
                  className="button button--secondary courses-actions__button--enrol"
                  href="#pricing"
                >
                  Enrol now
                </a>
                <a
                  className="button button--secondary courses-actions__button--subscription"
                  href="https://app.doku.com/bill-collection-web/subscriptions/pricing/177625987965"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="courses-actions__subscription-mark" aria-hidden="true">
                    <i />
                    <i />
                  </span>
                  <span>Subscription</span>
                </a>
              </div>
            </div>
          </section>

          <section id="pricing" className="courses-pricing section" aria-labelledby="pricing-title">
            <div className="section__inner">
              <div className="courses-pricing__intro">
                <div>
                  <p className="section-kicker">Courses &amp; enrolment</p>
                  <h2 id="pricing-title">Courses &amp; Enrolment</h2>
                  <p>
                    All courses include selected learning and community benefits
                    designed to support participants beyond the classroom.
                  </p>
                </div>
                <aside className="courses-benefits" aria-labelledby="benefits-title">
                  <h3 id="benefits-title">Included course benefits</h3>
                  <ul>
                    {INCLUDED_BENEFITS.map((benefit) => (
                      <li key={benefit}>{benefit}</li>
                    ))}
                  </ul>
                </aside>
              </div>
              <div className="courses-pricing__grid">
                {COURSE_PLANS.map((plan) => (
                  <article
                    className={`courses-pricing__card courses-pricing__card--${plan.id}`}
                    key={plan.id}
                  >
                    <div className="courses-pricing__card-header">
                      <p>{plan.label ?? "Online course"}</p>
                      {plan.tag ? <span>{plan.tag}</span> : null}
                    </div>
                    <h3>{plan.name}</h3>
                    <p className="courses-pricing__price">{plan.price}</p>
                    <p className="courses-pricing__approximate">&asymp; {plan.approximatePrice}</p>
                    <ul>
                      {plan.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                    <a
                      className="button button--primary"
                      href={plan.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Purchase
                    </a>
                    <p
                      className="courses-pricing__note"
                      aria-hidden={plan.note ? undefined : true}
                    >
                      {plan.note ?? ""}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="courses-process section section--ruled" aria-labelledby="how-it-works-title">
            <div className="section__inner">
              <div className="courses-process__heading">
                <div>
                  <p className="section-kicker">Step-by-Step Guide</p>
                  <h2 id="how-it-works-title">How It Works</h2>
                </div>
                <p>A clear route from course selection to supported learning.</p>
              </div>
              <ol className="courses-process__steps">
                {HOW_IT_WORKS.map((step) => (
                  <li className="courses-process__step" key={step.step}>
                    <span>{step.step}</span>
                    <h3>{step.title}</h3>
                    <p>{step.copy}</p>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section className="courses-cta" aria-labelledby="courses-cta-title">
            <div className="section__inner courses-cta__inner">
              <div>
                <p className="section-kicker section-kicker--dark">Interested to Know More?</p>
                <h2 id="courses-cta-title">Learn Professional Trading with Aeora.</h2>
              </div>
              <div className="courses-cta__action">
                <div className="courses-cta__buttons">
                  <a
                    className="button"
                    href="https://forms.gle/5JtxMrrjjSH7bHj18"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Register interest
                  </a>
                  <a
                    className="button courses-cta__button--preview"
                    href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ30hoptFH1Jzhk-ASb6rYvUbpNmWVLLdlZ__WDRRsC9nMCLgSBdNKqYtasXWzmQYWGz1RREssGD"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book 30-min preview
                  </a>
                </div>
                <aside className="courses-cta__notice" aria-labelledby="courses-cta-notice-title">
                  <h3 id="courses-cta-notice-title">Programme and payment information</h3>
                  <p>
                    D&amp;G Consultation manages the education, consulting and payment
                    administration for this course catalogue within the Douglas business
                    group. Aeora Research focuses on trader onboarding, prop-desk
                    pathways, trader development and related trading learning.
                  </p>
                </aside>
              </div>
            </div>
          </section>
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
