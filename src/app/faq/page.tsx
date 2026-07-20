import type { Metadata } from "next";
import { EditorialPage } from "@/components/EditorialPage";
import { CONTACT_EMAIL, SITE_URL } from "@/lib/site";

const FAQ_ITEMS = [
  {
    question: "What is Aeora Research?",
    answer:
      "Aeora Research is a research-led financial markets company being developed around market intelligence, trader development and disciplined professional market participation."
  },
  {
    question: "Is Aeora Research a broker, fund manager or financial adviser?",
    answer:
      "No. Aeora Research does not provide brokerage, execution, portfolio management or personalised financial advice through this website. Any future programme, service or participation pathway will be communicated under its own applicable terms."
  },
  {
    question: "Is the information on this website investment advice?",
    answer:
      "No. Website content is published for general informational, research and educational purposes only. It is not a recommendation, offer, solicitation or guarantee of performance, and should not be treated as the basis for an investment or trading decision."
  },
  {
    question: "Who is Aeora Trader Development for?",
    answer:
      "Aeora Trader Development is intended for participants who want a more deliberate foundation in market preparation, market context, risk awareness and execution practice. It is designed as an in-person learning and discussion environment."
  },
  {
    question: "When and where is the next Aeora Trader Development intake?",
    answer:
      "The next intake is currently marked TBC, with Q4 2026 in Kuala Lumpur, Malaysia listed as a possible timing and location. The format is planned as a physical event with limited seats."
  },
  {
    question: "Does registering interest guarantee a role on a prop desk?",
    answer:
      "No. Registering interest does not guarantee admission, evaluation, funding, employment or participation in any professional market pathway. Any future pathway will have its own criteria, process and terms."
  },
  {
    question: "What does Aeora Research focus on?",
    answer:
      "Aeora Research focuses on macro conditions, market structure, liquidity, positioning, cross-asset developments, decision quality and risk discipline. The emphasis is on preparation and process rather than prediction or trading signals."
  },
  {
    question: "Does Aeora Research provide trading signals?",
    answer:
      "No. Aeora Research is not positioned as a trading signals service. Its work is centred on contextual research, disciplined frameworks and the development of stronger market practice."
  },
  {
    question: "How can I connect with Aeora Research?",
    answer:
      `You can contact Aeora Research at ${CONTACT_EMAIL} for trader enquiries, research collaboration or institutional partnership discussions.`
  }
] as const;

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Aeora Research",
  description:
    "Answers to common questions about Aeora Research, Aeora Trader Development, market research, trader development and professional market participation.",
  alternates: {
    canonical: "/faq"
  },
  openGraph: {
    title: "Frequently Asked Questions | Aeora Research",
    description:
      "Common questions about Aeora Research, market intelligence and trader development.",
    url: `${SITE_URL}/faq`
  }
};

export default function FaqPage() {
  return (
    <EditorialPage
      kicker="FAQ"
      title="Clear answers. Deliberate next steps."
      intro="A concise guide to Aeora Research, Aeora Trader Development and the principles behind our market work."
      compactHero
    >
      <section className="faq section" aria-labelledby="faq-title">
        <div className="section__inner faq__inner">
          <div className="faq__intro">
            <p className="section-kicker">Common questions</p>
            <h2 id="faq-title">What you may want to know.</h2>
            <p>
              For enquiries not covered here, please contact the team directly.
            </p>
          </div>

          <div className="faq__list">
            {FAQ_ITEMS.map((item, index) => (
              <details className="faq__item" key={item.question}>
                <summary>
                  <span className="faq__index" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{item.question}</span>
                </summary>
                <div className="faq__answer">
                  <p>
                    {item.question === "How can I connect with Aeora Research?" ? (
                      <>
                        You can contact Aeora Research at{" "}
                        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>{" "}
                        for trader enquiries, research collaboration or
                        institutional partnership discussions.
                      </>
                    ) : (
                      item.answer
                    )}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </EditorialPage>
  );
}
