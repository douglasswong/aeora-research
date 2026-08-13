import Link from "next/link";

export const sawitEcoThermKeyPoints = [
  "MPOB introduced Sawit EcoTherm as a palm-based, non-conductive coolant for high-performance infrastructure, including data centres.",
  "Malaysia's data-centre buildout makes the use case relevant, but it does not establish commercial adoption or material palm-feedstock demand.",
  "A technology narrative becomes an FCPO consideration only after repeatable production, customer deployment and measurable physical volume.",
  "The useful watchlist is commercial partners, pilot evidence, manufacturing capacity and the eventual feedstock intensity of the coolant."
] as const;

export const sawitEcoThermSources = [
  {
    label:
      "Malaysian Palm Oil Board: MPOB introduces nine technologies at TOT MPOB 2026, 30 June 2026",
    href:
      "https://mpob.gov.my/2026/06/mpob-perkenal-sembilan-9-teknologi-baharu-pacu-daya-saing-industri-sawit/"
  },
  {
    label:
      "Malaysian Palm Oil Board: Chairman's address for the MPOB Sawit Technology Transfer Programme 2026",
    href:
      "https://mpob.gov.my/2026/06/teks-ucapan-pengerusi-mpob-program-pemindahan-teknologi-sawit-mpob/"
  },
  {
    label:
      "Malaysian Investment Development Authority: Malaysia's Q1 2026 approved-investment performance",
    href:
      "https://www.mida.gov.my/wp-content/uploads/2026/06/FINAL-08062026-Q12026_Investment-Performance_-Media-Release-2.pdf"
  }
] as const;

const demandSteps = [
  ["01", "Innovation", "A technology is introduced."],
  ["02", "Commercialisation", "A product and operating case are proven."],
  ["03", "Adoption", "Customers deploy it at working scale."],
  ["04", "Palm feedstock volume", "Repeat production draws on inputs."],
  ["05", "Incremental demand", "Physical consumption becomes measurable."],
  ["06", "Potential FCPO relevance", "The effect must matter beside the wider balance."]
] as const;

export function SawitEcoThermArticle() {
  return (
    <>
      <p className="research-article__lede">
        Sawit EcoTherm gives the palm-oil complex an intriguing link to AI
        infrastructure. It is a real technology announcement, but it is not
        yet evidence of a new material demand leg for FCPO.
      </p>

      <section aria-labelledby="what-mpob-announced">
        <p className="research-article__section-number">01</p>
        <h2 id="what-mpob-announced">What MPOB announced</h2>
        <p>
          On 30 June 2026, the Malaysian Palm Oil Board (MPOB) introduced
          Sawit EcoTherm during its Technology Transfer Programme. MPOB
          describes it as a palm-based, non-conductive coolant for
          high-performance infrastructure such as data centres. The announced
          use case places palm-derived chemistry in a part of the technology
          stack that is becoming more visible as computing density rises.
        </p>
        <p>
          MPOB also frames the technology as a possible lower-water,
          energy-efficiency-oriented alternative to conventional cooling and as
          a higher-value oleochemical opportunity. That is the opportunity
          statement. The public announcement does not provide a published
          product specification, named data-centre pilot, commercial order,
          production capacity or palm-feedstock volume.
        </p>
      </section>

      <section aria-labelledby="why-ai-matters">
        <p className="research-article__section-number">02</p>
        <h2 id="why-ai-matters">Why AI data centres create the narrative</h2>
        <p>
          The backdrop is tangible. MIDA reported RM34.6 billion of approved
          investment across 33 data-centre and cloud-computing projects in the
          first quarter of 2026. The same release cited around 4.6 GW of
          capacity planned or under construction in Malaysia. More computing
          capacity creates a larger need to manage heat, which is where
          non-conductive cooling fluids can become relevant.
        </p>
        <p>
          That scale makes Sawit EcoTherm worth watching, especially for the
          Malaysian palm-oil ecosystem. It does not tell us how much coolant
          will be used, how much of that coolant will be palm-derived, or when
          a customer might deploy it. Those details determine whether an
          engineering concept becomes a commodity-demand story.
        </p>

        <div className="sawit-data-callout">
          <span>Malaysia data-centre context / Q1 2026</span>
          <div>
            <strong>RM34.6bn</strong>
            <p>approved investment across 33 data-centre and cloud projects</p>
          </div>
          <div>
            <strong>4.6 GW</strong>
            <p>capacity planned or under construction, cited by MIDA</p>
          </div>
        </div>
      </section>

      <section aria-labelledby="narrative-demand-price">
        <p className="research-article__section-number">03</p>
        <h2 id="narrative-demand-price">Narrative is not demand. Demand is not a price catalyst.</h2>
        <p>
          The cleanest way to read this story is as a chain, not a shortcut. A
          new application can broaden the long-term addressable market for
          palm-based oleochemicals. That alone does not establish near-term
          demand for crude palm oil or an FCPO price response.
        </p>

        <div
          className="sawit-demand-chain"
          role="img"
          aria-label="Innovation leads to commercialisation, adoption, palm feedstock volume, incremental demand and potential FCPO relevance"
        >
          <p>We are currently near the beginning of this chain.</p>
          <ol>
            {demandSteps.map(([number, title, copy]) => (
              <li key={number}>
                <span>{number}</span>
                <strong>{title}</strong>
                <small>{copy}</small>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="fcpo-relevance">
        <p className="research-article__section-number">04</p>
        <h2 id="fcpo-relevance">Where FCPO relevance would actually enter</h2>
        <p>
          FCPO reflects a broad physical balance: production, yields, export
          demand, inventories, biofuel policy, substitution and wider
          vegetable-oil pricing. A specialised cooling fluid could matter only
          once recurring manufacturing requires enough palm-based input to be
          visible against that much larger system.
        </p>
        <p>
          The missing bridge is feedstock intensity. A finished coolant may use
          palm-derived ingredients without translating into a meaningful volume
          of crude palm oil. Until the formulation, conversion ratio,
          manufacturing scale and customer deployment are disclosed, any FCPO
          impact remains a possible long-term pathway rather than a measurable
          current driver.
        </p>
      </section>

      <section aria-labelledby="what-is-not-yet-known">
        <p className="research-article__section-number">05</p>
        <h2 id="what-is-not-yet-known">What is not yet known</h2>
        <ul className="research-article__checklist">
          <li>The exact palm-derived inputs and feedstock intensity.</li>
          <li>
            The coolant&apos;s published operating specifications and compatibility
            range.
          </li>
          <li>Named pilot sites, commercial partners, orders or adoption timelines.</li>
          <li>Manufacturing capacity, lifecycle results and any measurable energy or water outcomes.</li>
        </ul>
        <div className="research-article__callout">
          <strong>Potential is a research subject, not a price conclusion.</strong>
          <p>
            The practical watchlist is evidence of commercialisation: partner
            announcements, working deployments, production capacity and then
            recurring physical demand. Until then, Sawit EcoTherm is best read
            as a developing industrial narrative inside the wider palm-oil
            ecosystem.
          </p>
        </div>
        <p>
          Aeora Research will continue to follow market structure, physical
          demand and policy context across commodities. Explore the
          <Link href="/research"> research archive</Link> for more market
          intelligence notes.
        </p>
      </section>
    </>
  );
}
