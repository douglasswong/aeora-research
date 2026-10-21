import Link from "next/link";

export const tankerFreightOilMarketKeyPoints = [
  "Oil can be available at the loading point while becoming slower, riskier and more expensive to deliver to the refinery.",
  "Public EIA and IEA analysis supports the mechanism: tanker risk, insurance, rerouting and vessel availability can raise delivered costs and pressure refinery margins.",
  "Goldman rate estimates reported by Reuters are useful context, but they are not an Aeora freight-rate series or a universal rule for every crude grade.",
  "The most useful monitor is resilience: whether normal routes, reliable transit and affordable delivery are returning, rather than simply whether a cargo moved."
] as const;

export const tankerFreightOilMarketSources = [
  {
    label:
      "Source context: @CRUDEOIL231 post sharing a Goldman oil-freight deck (caption and images reviewed from requester-supplied material)",
    href: "https://x.com/CRUDEOIL231/status/2112843941892821199"
  },
  {
    label:
      "Reuters: Goldman says high freight costs pose upside risk to its Brent forecast (21 October 2026)",
    href:
      "https://polity.org.za/article/goldman-says-high-freight-costs-pose-upside-risk-to-its-brent-forecast-2026-10-21"
  },
  {
    label:
      "U.S. Energy Information Administration: Short-Term Energy Outlook, October 2026",
    href: "https://www.eia.gov/outlooks/steo/pdf/steo_text.pdf"
  },
  {
    label:
      "International Energy Agency: Oil Market Report, October 2026",
    href:
      "https://www.iea.org/reports/oil-market-report-october-2026?language=es"
  },
  {
    label: "UK Maritime Trade Operations: Recent incidents",
    href: "https://www.ukmto.org/recent-incidents"
  }
] as const;

const freightTransmissionStages = [
  {
    title: "Security and route risk",
    detail: "Incident risk, transit restrictions and insurance decisions change which routes are viable."
  },
  {
    title: "Voyage mechanics",
    detail: "Rerouting, ship-to-ship transfers, delays and scarce vessels change the cost and timing of transport."
  },
  {
    title: "Delivered crude",
    detail: "The same benchmark barrel can reach different refiners with very different landed costs and reliability."
  },
  {
    title: "Refinery and fuel market",
    detail: "Margins, crude differentials and diesel or jet-fuel availability can react before the headline benchmark does."
  }
] as const;

function FreightTransmissionFigure() {
  return (
    <figure className="freight-transmission-figure">
      <div className="freight-transmission-figure__header">
        <div>
          <span>Original Aeora framework</span>
          <strong>Where freight enters the oil market</strong>
        </div>
        <p>
          The benchmark barrel is only the first cost. The delivered barrel
          includes the route, vessel, security and conversion chain behind it.
        </p>
      </div>
      <ol aria-label="How freight pressure transmits through the oil market">
        {freightTransmissionStages.map((stage, index) => (
          <li key={stage.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{stage.title}</h3>
            <p>{stage.detail}</p>
          </li>
        ))}
      </ol>
      <figcaption>
        Aeora Research explanatory framework. It is not a freight-rate model,
        an estimate of a particular voyage or a price forecast.
      </figcaption>
    </figure>
  );
}

export function TankerFreightOilMarketArticle() {
  return (
    <>
      <p className="research-article__lede">
        A barrel can be produced, loaded and sold while becoming materially more
        expensive to deliver. That is why tanker freight has moved from a
        logistics footnote to a market variable: it links maritime security,
        routing, insurance, crude differentials, refinery economics and the
        fuel price paid at the end of the chain.
      </p>

      <section aria-labelledby="freight-delivered-barrel">
        <p className="research-article__section-number">01 / Market frame</p>
        <h2 id="freight-delivered-barrel">
          A benchmark barrel is not the same as a delivered barrel
        </h2>
        <p>
          Crude oil is often discussed as if supply ends at the loading
          terminal. It does not. A buyer needs a viable route, an available
          vessel, insurance, financing, port access, refinery capacity and a
          predictable delivery schedule. When any one of those links becomes
          more expensive or uncertain, the landed cost of crude can rise even
          if the headline benchmark looks calmer.
        </p>
        <p>
          The U.S. Energy Information Administration&apos;s October outlook makes
          that mechanism explicit. It describes heightened tanker risk, higher
          insurance costs, longer routes around conflict areas and tighter
          vessel availability as sources of pressure on delivered crude costs.
          The point is not that every cargo pays the same surcharge. It is that
          logistics can change which barrels are economical, dependable and
          attractive to a given refinery.
        </p>
        <div className="research-article__callout">
          <strong>
            Volume answers whether a barrel exists. Freight helps answer whether
            that barrel can be delivered safely, predictably and economically.
          </strong>
          <p>
            That distinction matters whenever traders draw a simple conclusion
            from a recovering export count. More shipments are useful evidence.
            They are not, on their own, proof that the transport system has
            regained normal resilience.
          </p>
        </div>
      </section>

      <section aria-labelledby="freight-source-boundary">
        <p className="research-article__section-number">02 / Evidence boundary</p>
        <h2 id="freight-source-boundary">
          What the recent freight evidence supports, and what it does not
        </h2>
        <p>
          The discussion began with a Goldman Sachs Commodities Research deck
          shared in a social-media thread. Reuters reported on 21 October that
          Goldman estimated global average crude freight above $20 per barrel,
          versus about $3 a year earlier, while costs on Middle East routes were
          above $35. Reuters also reported Goldman&apos;s view that Hormuz crossing
          risk and ship-to-ship transfers explained more than half of the
          year-on-year increase.
        </p>
        <p>
          Those are Goldman estimates, not a public Aeora rate series. The
          underlying voyage data, modelling choices and route-specific contract
          terms are not fully observable in the supplied material. We therefore
          treat the figures as attributed context, not as a universal freight
          bill for every producer, cargo or refinery.
        </p>
        <p>
          The broader mechanism is independently supported. EIA expects
          bypass routes and ship-to-ship transfers to help Middle East flows
          continue, while acknowledging that such workarounds can leave costs
          and volatility elevated. UK Maritime Trade Operations incident
          notices also show that security risk around the relevant waterways is
          an operational condition, not merely a theoretical tail risk.
        </p>
        <FreightTransmissionFigure />
      </section>

      <section aria-labelledby="freight-refineries">
        <p className="research-article__section-number">03 / Market transmission</p>
        <h2 id="freight-refineries">
          Why refiners and fuel markets can feel the pressure first
        </h2>
        <p>
          Freight does not affect every participant equally. A refiner supplied
          by domestic or short-haul crude generally has more alternatives than
          one dependent on long-haul imports. The same is true after refining:
          a refinery may remain operational while crude inputs, bunker fuel,
          product exports or replacement cargoes all become harder to move.
        </p>
        <p>
          The International Energy Agency&apos;s October Oil Market Report said
          record freight and crude costs had compressed margins in Europe and
          Asia. It also warned that freight tension could raise delivered diesel
          prices in major importing markets if the pressure spread through more
          tanker categories. This is why a freight shock should be viewed as a
          delivered-energy problem, not simply an outright crude-supply story.
        </p>
        <p>
          <strong>Inference:</strong> higher freight can widen regional and
          grade differentials, while refining margins and product availability
          react differently from outright Brent. A lower-risk nearby grade may
          become more valuable to a refinery than a cheaper cargo that is
          slower, harder to insure or exposed to an uncertain passage.
        </p>
      </section>

      <section aria-labelledby="freight-original-argument">
        <p className="research-article__section-number">04 / Assessment</p>
        <h2 id="freight-original-argument">
          The useful insight is structural, not a price target
        </h2>
        <p>
          The source deck is most useful when it treats freight as part of the
          physical oil market rather than a secondary statistic. Security risk
          has a cost before a cargo is lost. Rerouting, insurance and vessel
          availability can constrain effective supply. Ship-to-ship transfers
          can keep barrels moving while making the system slower and more
          complex. Refined products and refiner margins can react differently
          from the flat crude price.
        </p>
        <p>
          Its precise route spreads, contribution waterfall, fleet shares and
          margin charts should not be read with the same confidence as publicly
          audited data. Freight is heterogeneous by vessel class, origin,
          destination, cargo quality, contract structure, insurance cover,
          waiting time and whether a voyage is actually executable. A tidy
          freight number can be useful context without being a universal rule.
        </p>
        <p>
          Aeora&apos;s earlier research on
          <Link href="/research/why-oil-still-prices-risk-after-gulf-exports-recover">
            {" Gulf export recovery and resilience risk"}
          </Link>{" "}
          reached a related conclusion: visible flow normalisation and a
          resilient energy system are not the same thing. Freight is one of the
          channels that separates them.
        </p>
      </section>

      <section aria-labelledby="freight-scenarios">
        <p className="research-article__section-number">05 / Scenario map</p>
        <h2 id="freight-scenarios">
          Three transport regimes matter more than a single oil call
        </h2>
        <div className="freight-scenarios">
          <article>
            <span>A / Improving normalisation</span>
            <h3>Reliability returns before capacity changes</h3>
            <p>
              Fewer verified maritime incidents, predictable Hormuz transits,
              easing insurance stress and less reliance on workaround routes
              would make delivered costs less fragile. The confirming evidence
              would be a sustained improvement in route reliability rather than
              one reassuring export headline.
            </p>
          </article>
          <article>
            <span>B / Managed high-cost transport</span>
            <h3>Barrels move, but the system remains expensive</h3>
            <p>
              This is the middle case: crude flows continue while rerouting,
              vessel risk and insurance costs remain high. A severe physical
              shortage may be avoided, yet refinery margins, imported-product
              costs and geographic differentials can remain under pressure.
            </p>
          </article>
          <article>
            <span>C / Renewed disruption</span>
            <h3>Freight, prompt supply and products reprice together</h3>
            <p>
              Additional verified attacks, a new infrastructure outage, a
              material loss of tanker availability or a worsening inventory draw
              could increase stress across the delivery chain. This is a risk
              scenario, not an Aeora price forecast or trade recommendation.
            </p>
          </article>
        </div>
      </section>

      <section aria-labelledby="freight-monitor-list">
        <p className="research-article__section-number">06 / Monitor list</p>
        <h2 id="freight-monitor-list">What to watch next</h2>
        <ul className="research-article__checklist freight-watchlist">
          <li>UKMTO incident notices and whether reports are verified, investigated or resolved</li>
          <li>EIA updates on Middle East flows, shut-ins, inventory draws and forecast assumptions</li>
          <li>IEA commentary on refinery runs, product availability and margin pressure</li>
          <li>Evidence of normal route restoration versus continued reliance on ship-to-ship transfers</li>
          <li>Changes in delivered crude and product costs, rather than only the flat Brent headline</li>
          <li>Whether a geopolitical headline has altered cargo flows, refinery operations or available inventory</li>
        </ul>
      </section>

      <section className="freight-research-take" aria-labelledby="freight-take">
        <p className="research-article__section-number">Aeora Research take</p>
        <h2 id="freight-take">
          Freight is the transmission channel between security risk and fuel risk.
        </h2>
        <p>
          The disciplined conclusion is not that freight dictates one direction
          for oil. It is that the benchmark barrel and the delivered barrel are
          different instruments. When the delivery chain is impaired, a calm
          export headline does not automatically mean that crude, refinery and
          fuel-market resilience has returned.
        </p>
        <p className="freight-research-take__disclaimer">
          This research is for general informational and educational purposes
          only. It is not investment advice, a recommendation, a trade signal
          or a guarantee of performance. Market conditions and source estimates
          can change as new information becomes available.
        </p>
      </section>
    </>
  );
}
