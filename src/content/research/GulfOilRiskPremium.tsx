import Link from "next/link";

export const gulfOilRiskPremiumKeyPoints = [
  "Reported Gulf crude exports recovered quickly, but recovery in refined products was materially slower.",
  "A price premium can reflect future disruption, freight, insurance, inventories and refinery risk, not only today's crude-barrel count.",
  "The relevant distinction is between flow normalisation and a resilient energy system that can absorb another disruption.",
  "A professional oil framework separates outright price, prompt market structure, product tightness and operational risk instead of reducing the market to one headline."
] as const;

export const gulfOilRiskPremiumSources = [
  {
    label:
      "Reuters: Gulf crude-oil exports return to 2025 level, Goldman Sachs says (30 September 2026)",
    href:
      "https://boereport.com/2026/09/30/gulf-crude-oil-exports-return-to-2025-level-goldman-sachs-says/amp/"
  },
  {
    label: "U.S. Energy Information Administration: September 2026 Short-Term Energy Outlook",
    href: "https://www.eia.gov/outlooks/steo/archives/sep26.pdf"
  },
  {
    label:
      "Reuters: Oil steadies as stalled U.S.-Iran talks offset supply recovery (30 September 2026)",
    href:
      "https://www.lse.co.uk/news/oil-steadies-as-stalled-us-iran-talks-offset-supply-recovery-aymzbg3kxc3lb2e.html?mobile_view=desktop"
  },
  {
    label:
      "Business Times: JPMorgan and Goldman see Middle East oil flows near pre-war levels",
    href:
      "https://www.businesstimes.com.sg/companies-markets/energy-commodities/jpmorgan-and-goldman-see-middle-east-oil-flows-near-pre-war-levels/"
  }
] as const;

const gulfRecoveryMeasures = [
  {
    label: "Crude",
    detail: "19.0 mb/d / 108% of 2025 average",
    recovery: 90
  },
  {
    label: "Main refined products",
    detail: "Diesel, gasoline and jet fuel / 50%",
    recovery: 42
  },
  {
    label: "LPG",
    detail: "58% of 2025 average",
    recovery: 48
  },
  {
    label: "Other products",
    detail: "68% of 2025 average",
    recovery: 57
  }
] as const;

function GulfRecoveryFigure() {
  return (
    <figure className="oil-recovery-figure">
      <div className="oil-recovery-figure__headline">
        <div>
          <span>Latest total export estimate</span>
          <strong>23.3 mb/d</strong>
          <small>Against a 23.1 mb/d 2025 average</small>
        </div>
        <p>
          Crude accounted for nearly 90% of the reported September recovery.
        </p>
      </div>
      <ol aria-label="Recovery versus 2025 average by export category">
        {gulfRecoveryMeasures.map((measure) => (
          <li key={measure.label}>
            <div>
              <strong>{measure.label}</strong>
              <span>{measure.detail}</span>
            </div>
            <div className="oil-recovery-figure__track" aria-hidden="true">
              <span style={{ width: `${measure.recovery}%` }} />
            </div>
          </li>
        ))}
      </ol>
      <figcaption>
        Aeora Research visualisation based on supplied Goldman Sachs Global
        Investment Research and Kpler estimates dated 29 September 2026.
        Bar lengths use a 120% reference for comparison. Estimates incorporate
        expected revisions and may change.
      </figcaption>
    </figure>
  );
}

export function GulfOilRiskPremiumArticle() {
  return (
    <>
      <p className="research-article__lede">
        A recovered crude barrel does not automatically restore the whole oil
        system. In late September, reported Persian Gulf export flows moved
        back toward their 2025 average. Yet oil still carried a meaningful
        geopolitical premium because refinery capacity, refined-product supply,
        tanker economics and the risk of a renewed disruption had not recovered
        at the same speed.
      </p>

      <section aria-labelledby="oil-apparent-contradiction">
        <p className="research-article__section-number">01 / Market frame</p>
        <h2 id="oil-apparent-contradiction">
          Export volume has recovered. The system has not.
        </h2>
        <p>
          The apparent contradiction in oil is straightforward: crude can be
          available while the market still pays up for resilience. A cargo is
          only one part of the energy chain. It still needs a viable route, a
          willing insurer, operating refinery capacity, a buyer and a way to
          move the resulting diesel, gasoline, jet fuel or LPG to its end user.
        </p>
        <p>
          Reuters reported that Goldman Sachs estimated total Gulf exports,
          including less-visible or &quot;dark&quot; flows, at roughly 23.3 million
          barrels per day in September. That was broadly in line with the 2025
          average. It is important evidence that the initial physical supply
          shock was smaller and shorter than many feared. It is not proof that
          geopolitical and operational risk have disappeared.
        </p>
        <div className="research-article__callout">
          <strong>
            Normalisation describes today&apos;s flow. Resilience describes how the
            system behaves when the next disruption arrives.
          </strong>
          <p>
            The gap between those two ideas is where a persistent risk premium
            can live. It also explains why a desk can be less concerned about
            an outright crude shortage while remaining highly alert to the
            physical market around it.
          </p>
        </div>
      </section>

      <section aria-labelledby="oil-recovery-numbers">
        <p className="research-article__section-number">02 / Supply chain</p>
        <h2 id="oil-recovery-numbers">
          The recovery is concentrated in crude, not refined products
        </h2>
        <p>
          The detail beneath the headline matters. Goldman estimated crude
          exports at about 19 million barrels per day, or 108% of the 2025
          average. Crude therefore accounted for nearly 90% of the reported
          September export recovery. At the same time, major refined-product
          exports were estimated near half of their 2025 average, while LPG and
          other product flows recovered only partially.
        </p>
        <GulfRecoveryFigure />
        <p>
          That is a different market from one with a broad, fully functioning
          supply chain. Refineries turn crude into the fuels businesses and
          households consume. When refinery outages remain elevated, the market
          can be relatively comfortable about crude availability yet still be
          tight in middle distillates and jet fuel. The exact estimates can be
          revised as vessel, cargo and port data improve, so they are best read
          as a current map of the system rather than a permanent fact set.
        </p>
        <p>
          The supplied research attributes the export recovery to greater
          Hormuz flow, ship-to-ship transfers and redirection toward eastern
          ports. It estimates Saudi export volumes at about 11.6 mb/d after
          more than doubling in September, while UAE exports were above their
          2025 average. Goldman also reported no September seaborne crude or
          major refined-product exports from Iran in its data set. These are
          useful signals of adaptation, not a reason to assume that every route
          or fuel market has normalised.
        </p>
      </section>

      <section aria-labelledby="oil-risk-premium">
        <p className="research-article__section-number">03 / Price mechanism</p>
        <h2 id="oil-risk-premium">What is Brent still pricing?</h2>
        <p>
          Oil is not priced only from this morning&apos;s loading programme. It is
          also priced from the probability-weighted cost of something worse.
          In this case, that includes the prospect of damage to production or
          refinery infrastructure, disruption to shipping routes, higher tanker
          insurance and security costs, and a renewed scramble to rebuild
          inventories. A stable export print can reduce immediate shortage risk
          without removing those contingencies.
        </p>
        <p>
          The September note described the global oil market as roughly balanced
          at the time: Gulf flows had improved, visible inventories were broadly
          flat and OECD commercial stocks had returned close to late-February
          levels. A balanced market is not necessarily a relaxed market. When
          inventories are not generous and logistics remain fragile, consumers,
          refiners and traders all have a stronger incentive to secure optionality.
        </p>
        <p>
          This is why physical pricing and futures structure deserve separate
          attention. If stable exports persist, the extreme scarcity embedded in
          prompt time spreads can ease even while a longer-lived geopolitical
          premium remains. If infrastructure or shipping conditions deteriorate,
          the same premium can expand abruptly. The direction of a headline is
          less informative than the part of the system it actually changes.
        </p>
      </section>

      <section aria-labelledby="oil-scenarios">
        <p className="research-article__section-number">04 / Scenario map</p>
        <h2 id="oil-scenarios">Three routes from the same starting point</h2>
        <div className="oil-scenarios">
          <article>
            <span>A / Stable export recovery</span>
            <h3>Risk premium can fade gradually</h3>
            <p>
              Gulf export estimates remain near their 2025 average, product
              availability improves and no major infrastructure is impaired.
              The key development would be better physical resilience, not
              simply one more reassuring headline. Under that condition, prompt
              tightness and some of the premium can ease over time.
            </p>
          </article>
          <article>
            <span>B / Infrastructure or tanker disruption</span>
            <h3>Crude and products can reprice differently</h3>
            <p>
              A disruption to loading, refining, shipping capacity or tanker
              safety could make the product market materially tighter even if
              crude is still available elsewhere. The likely impact would not
              be limited to the flat Brent price: freight, fuel cracks and
              nearby time spreads could all become more sensitive.
            </p>
          </article>
          <article>
            <span>C / Faster system normalisation</span>
            <h3>Physical tightness is disproved more quickly</h3>
            <p>
              More transparent flows, higher Saudi and UAE loadings, restored
              refining capacity and inventory rebuilding would challenge the
              remaining premium. Goldman&apos;s published $85 end-2026 and $80
              2027 Brent estimates belong in this context: they are a
              third-party scenario reference, not an Aeora target or a trading
              call.
            </p>
          </article>
        </div>
      </section>

      <section aria-labelledby="oil-professional-process">
        <p className="research-article__section-number">05 / Desk process</p>
        <h2 id="oil-professional-process">
          How professional oil analysis stays broader than &quot;buy or sell&quot;
        </h2>
        <p>
          A retail conversation often starts and ends with a directional view:
          is oil bullish or bearish? A professional process has to separate
          several exposures that can move differently. Outright crude price,
          the curve, regional differentials, refined-product margins, tanker
          freight and execution risk are connected, but they are not the same
          trade or the same risk.
        </p>
        <p>
          That does not mean an independent trader needs a bank&apos;s balance sheet
          or a refinery&apos;s data feed. It means the first question should be,
          &quot;What mechanism am I actually relying on?&quot; A view based on recovered
          crude volumes should be tested against product availability and route
          risk. A view based on conflict should be tested against actual cargo
          evidence, inventories and the market structure already in price.
        </p>
        <p>
          This same discipline is relevant to the longer-term framework in
          Aeora&apos;s earlier
          <Link href="/research/wti-crude-oil-outlook-2026-geopolitical-90-day-scenario">
            {" WTI decision-zone research note"}
          </Link>
          : map conditions, define what would invalidate the view and avoid
          turning uncertainty into an oversized position.
        </p>
      </section>

      <section aria-labelledby="oil-monitor-list">
        <p className="research-article__section-number">06 / Monitor list</p>
        <h2 id="oil-monitor-list">The indicators worth watching next</h2>
        <ul className="research-article__checklist oil-watchlist">
          <li>Persian Gulf export estimates against the 23 mb/d area</li>
          <li>Saudi, UAE and less-visible ship-to-ship flow revisions</li>
          <li>Strait shipping activity, insurance costs and tanker freight</li>
          <li>Middle East refinery outages and recovery in diesel, gasoline and jet fuel exports</li>
          <li>Brent prompt spreads and the gap between physical and futures pricing</li>
          <li>OECD and non-OECD inventory rebuilding, including Chinese import adaptation</li>
          <li>Evidence that a headline has changed cargoes, refinery runs or market access rather than sentiment alone</li>
        </ul>
        <p>
          No checklist eliminates uncertainty. It does turn a dramatic news
          cycle into a sequence of observable tests. That is more useful than
          treating a price spike as proof of a permanent shortage, or a recovered
          export figure as proof that all risk has vanished.
        </p>
      </section>

      <section aria-labelledby="oil-research-take">
        <p className="research-article__section-number">Aeora Research take</p>
        <h2 id="oil-research-take">
          Oil has moved from a volume story to a resilience story.
        </h2>
        <p>
          The late-September evidence points to a faster-than-feared recovery in
          Gulf crude exports. The remaining premium is therefore less about an
          immediate absence of barrels and more about the cost of operating an
          energy system with fragile refining, shipping and inventory buffers.
        </p>
        <p>
          The practical lesson is not to chase every geopolitical move. It is
          to distinguish flow from resilience, crude from products and a scenario
          from confirmation. In energy markets, the most important question is
          often not where the next barrel is, but how reliably the next fuel
          cargo can still be delivered.
        </p>
      </section>
    </>
  );
}
