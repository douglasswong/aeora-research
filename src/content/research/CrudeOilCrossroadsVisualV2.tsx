import Link from "next/link";

export const crudeOilCrossroadsVisualV2KeyPoints = [
  "IEA reported a September recovery in Gulf producer crude exports and transit flows, but the numbers overlap and cannot be added into a single supply total.",
  "A visual market read should separate flow recovery, inventory buffers, positioning evidence and the Brent curve instead of treating Brent as one all-purpose price signal.",
  "The historical Barclays Sep 2027 minus Dec 2027 Brent idea is a relative-value structure: it needs September to strengthen against December, not merely a higher flat price.",
  "Aeora's V2 assessment remains conditional: credible de-escalation can compress risk, while tight buffers and fragile logistics can keep time-specific scarcity relevant."
] as const;

export const crudeOilCrossroadsVisualV2Sources = [
  {
    label: "International Energy Agency: Oil Market Report, October 2026",
    href: "https://www.iea.org/reports/oil-market-report-october-2026"
  },
  {
    label: "U.S. Energy Information Administration: Short-Term Energy Outlook, October 2026",
    href: "https://www.eia.gov/outlooks/steo/"
  },
  {
    label: "U.S. Energy Information Administration: Petroleum Supply Monthly, September 2026",
    href: "https://www.eia.gov/petroleum/supply/monthly/"
  },
  {
    label: "U.S. Commodity Futures Trading Commission: Commitments of Traders, Petroleum",
    href: "https://www.cftc.gov/dea/futures/petroleum_lf.htm"
  },
  {
    label: "ICE Futures Europe: Brent Crude Futures contract expiry calendar",
    href: "https://www.ice.com/products/219/brent-crude-futures/expiry"
  },
  {
    label: "U.S. Department of the Treasury: sanctions and oil-trade enforcement update, 8 October 2026",
    href: "https://home.treasury.gov/news/press-releases/sb0653"
  },
  {
    label: "Bank Negara Malaysia: Economic and Monetary Review 2025, Chapter 2",
    href: "https://www.bnm.gov.my/publications/emr2025/ch2"
  }
] as const;

const flowSnapshot = [
  {
    label: "Gulf producer crude exports",
    value: "13.9",
    unit: "mb/d",
    width: "100%",
    detail: "September 2026, IEA reported"
  },
  {
    label: "Hormuz flows",
    value: "10.9",
    unit: "mb/d",
    width: "78%",
    detail: "September 2026, IEA reported"
  },
  {
    label: "Pipeline bypass flows",
    value: "5.6",
    unit: "mb/d",
    width: "40%",
    detail: "September 2026, IEA reported"
  }
] as const;

const signals = [
  {
    state: "Observed",
    title: "Flows recovered",
    body: "Higher exports and transit flows show adaptation in the physical system. They do not prove spare capacity or normal delivered costs.",
    tone: "positive"
  },
  {
    state: "Observed",
    title: "Buffers remain important",
    body: "The October IEA report described lower observed stocks and constrained on-land availability. A smaller buffer can magnify a new disruption.",
    tone: "caution"
  },
  {
    state: "Not fully reproducible",
    title: "Positioning is contextual",
    body: "Public CFTC reports inform contract-level positioning, but cannot validate the supplied combined Brent-and-WTI percentile.",
    tone: "neutral"
  },
  {
    state: "Conditional",
    title: "Diplomacy needs proof",
    body: "The supplied source describes optimism. This note does not treat an unverified narrative as a completed agreement or normalised risk.",
    tone: "neutral"
  }
] as const;

const scenarios = [
  {
    code: "A",
    title: "Re-escalation",
    trigger: "A verified transit, loading, tanker or infrastructure disruption.",
    curve: "Prompt or mid-curve scarcity can become more valuable than deferred supply.",
    tone: "risk"
  },
  {
    code: "B",
    title: "Extended uncertainty",
    trigger: "Exports move, but workaround routes, freight and insurance remain expensive.",
    curve: "Relative-value behaviour can matter more than a dramatic flat-price move.",
    tone: "base"
  },
  {
    code: "C",
    title: "Credible de-escalation",
    trigger: "A verified, implementable agreement reduces operating and policy frictions.",
    curve: "Risk premia and time spreads can normalise if physical resilience follows the headline.",
    tone: "normalise"
  }
] as const;

function FlowSnapshotFigure() {
  return (
    <figure className="oil-v2-flow-figure">
      <div className="oil-v2-flow-figure__header">
        <div>
          <span>Verified flow snapshot</span>
          <strong>September Gulf flows, shown at their reported scale</strong>
        </div>
        <p>
          The figures are separate, overlapping measures. They are displayed for
          comparison only and must not be summed into a supply total.
        </p>
      </div>
      <ol aria-label="September 2026 Gulf flow snapshot">
        {flowSnapshot.map((item) => (
          <li key={item.label}>
            <div className="oil-v2-flow-figure__numbers">
              <span>{item.label}</span>
              <strong>
                {item.value} <small>{item.unit}</small>
              </strong>
            </div>
            <div className="oil-v2-flow-figure__track" aria-hidden="true">
              <span style={{ width: item.width }} />
            </div>
            <small>{item.detail}</small>
          </li>
        ))}
      </ol>
      <figcaption>
        Source: International Energy Agency, Oil Market Report, October 2026.
        Original Aeora presentation; not a reconstruction of the supplied
        Barclays or Kpler charts.
      </figcaption>
    </figure>
  );
}

function SignalBoard() {
  return (
    <section className="oil-v2-signal-board" aria-labelledby="oil-v2-signal-board-title">
      <div className="oil-v2-signal-board__heading">
        <div>
          <p className="research-article__section-number">Market dashboard</p>
          <h2 id="oil-v2-signal-board-title">Four signals, four different levels of confidence</h2>
        </div>
        <p>
          The point is not to turn every observation into a bullish or bearish
          vote. It is to keep evidence, inference and unknowns distinct.
        </p>
      </div>
      <ol>
        {signals.map((signal, index) => (
          <li className={`oil-v2-signal-board__item--${signal.tone}`} key={signal.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <small>{signal.state}</small>
            <h3>{signal.title}</h3>
            <p>{signal.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

function BrentSpreadFigure() {
  return (
    <figure className="oil-v2-spread-figure">
      <div className="oil-v2-spread-figure__header">
        <div>
          <span>Historical source structure</span>
          <strong>What a long Sep 2027 versus Dec 2027 Brent spread measures</strong>
        </div>
        <p>
          The historical Barclays reference near $3.40/bbl is not a current
          quote, Aeora entry level or recommendation.
        </p>
      </div>
      <div className="oil-v2-spread-figure__legs" aria-label="Calendar-spread legs">
        <div className="oil-v2-spread-figure__leg oil-v2-spread-figure__leg--long">
          <span>Long</span>
          <strong>September 2027</strong>
          <p>Benefits if September gains value relative to December.</p>
        </div>
        <div className="oil-v2-spread-figure__operator" aria-hidden="true">minus</div>
        <div className="oil-v2-spread-figure__leg oil-v2-spread-figure__leg--short">
          <span>Short</span>
          <strong>December 2027</strong>
          <p>Offsets outright exposure but creates a relative-value risk.</p>
        </div>
      </div>
      <ol>
        <li>
          <span>Wider spread</span>
          <p>September strengthens faster than December.</p>
        </li>
        <li>
          <span>Narrower spread</span>
          <p>December strengthens faster, or September weakens more.</p>
        </li>
        <li>
          <span>What to verify</span>
          <p>Curve shape, liquidity, physical premiums, inventories and the timing of any disruption.</p>
        </li>
      </ol>
      <figcaption>
        Original Aeora explanatory diagram based on ICE contract-month
        nomenclature. It does not plot market settlements or predict returns.
      </figcaption>
    </figure>
  );
}

function ScenarioCards() {
  return (
    <section className="oil-v2-scenarios" aria-labelledby="oil-v2-scenarios-title">
      <div>
        <p className="research-article__section-number">Scenario radar</p>
        <h2 id="oil-v2-scenarios-title">Watch for the evidence that changes the story</h2>
      </div>
      <ol>
        {scenarios.map((scenario) => (
          <li className={`oil-v2-scenarios__item--${scenario.tone}`} key={scenario.code}>
            <span>{scenario.code}</span>
            <h3>{scenario.title}</h3>
            <p>{scenario.trigger}</p>
            <strong>Curve read</strong>
            <p>{scenario.curve}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function CrudeOilCrossroadsVisualV2Article() {
  return (
    <>
      <p className="research-article__lede">
        Oil is not one price and not one headline. This visual briefing puts the
        physical flows, inventory buffers, positioning limits and Brent curve on
        one page, so the market can be scanned before it is interpreted.
      </p>

      <section aria-labelledby="oil-v2-start">
        <p className="research-article__section-number">01 / The market in 90 seconds</p>
        <h2 id="oil-v2-start">Flows recovered. Resilience is still the question.</h2>
        <p>
          The October IEA Oil Market Report described a sharp September recovery
          in Gulf producer crude exports and transit flows. That is meaningful
          evidence of adaptation. It is not the same as a declaration that
          every route, product supply chain, tanker market and inventory buffer
          has returned to normal.
        </p>
        <p>
          The immediate task is to separate what has been observed from what it
          may mean. A higher flow count can coexist with freight pressure,
          uneven product recovery and a thinner margin for a new disruption.
        </p>
        <FlowSnapshotFigure />
      </section>

      <SignalBoard />

      <section aria-labelledby="oil-v2-physical">
        <p className="research-article__section-number">02 / Physical market check</p>
        <h2 id="oil-v2-physical">The delivered barrel is the harder test</h2>
        <p>
          A benchmark futures price says something about the market&apos;s broad
          expectations. A delivered barrel has to be loaded, insured,
          transported, discharged and processed. This is where route risk,
          tanker availability, freight, quality differences and refinery
          economics enter the market before a consumer ever sees a fuel price.
        </p>
        <p>
          The IEA&apos;s October report links these channels: a crude-flow recovery
          occurred alongside elevated freight and pressure on refining margins,
          while products and LPG recovered more slowly. The visual conclusion is
          simple: look for redundancy, not just movement. An export figure can
          improve before a delivery system becomes robust.
        </p>
      </section>

      <section aria-labelledby="oil-v2-curve">
        <p className="research-article__section-number">03 / Curve, not just price</p>
        <h2 id="oil-v2-curve">Brent spreads show which delivery window matters</h2>
        <p>
          A calendar spread compares two futures months. It can react to the
          timing of inventory pressure, physical availability, storage value and
          risk differently from the flat Brent price. Backwardation can be
          consistent with prompt tightness; contango can be consistent with
          carry, storage or more available nearby supply. Neither shape explains
          itself without physical context.
        </p>
        <BrentSpreadFigure />
      </section>

      <section aria-labelledby="oil-v2-premiums">
        <p className="research-article__section-number">04 / Physical premiums</p>
        <h2 id="oil-v2-premiums">Use a physical premium as a local clue, not a global verdict</h2>
        <p>
          A premium for a deliverable cargo can reflect local grade demand,
          freight, terminal access, refinery suitability and immediate supply
          availability. When a firm premium and a strong nearby curve agree,
          they can reinforce a prompt-tightness reading. When they disagree,
          the difference can be the more informative signal.
        </p>
        <p>
          The supplied Barclays material uses licensed Argus assessments for its
          physical-premium chart. Aeora does not recreate the series or infer
          exact values from the screenshot. The V2 note explains what to read
          when a public or licensed source is available to the market
          participant.
        </p>
      </section>

      <ScenarioCards />

      <section aria-labelledby="oil-v2-malaysia">
        <p className="research-article__section-number">05 / Malaysia relevance</p>
        <h2 id="oil-v2-malaysia">For Malaysian traders, follow the transmission chain</h2>
        <div className="oil-v2-local-grid">
          <article>
            <span>Brent</span>
            <p>Global supply, demand and risk conditions shape the benchmark and the curve.</p>
          </article>
          <article>
            <span>USD/MYR</span>
            <p>Energy shocks can interact with inflation expectations and the currency through more than one channel.</p>
          </article>
          <article>
            <span>FCPO</span>
            <p>Feedstock, transport and substitution effects can matter at the margin, but the relationship is not fixed.</p>
          </article>
        </div>
      </section>

      <section className="oil-v2-watchlist" aria-labelledby="oil-v2-watchlist-title">
        <p className="research-article__section-number">06 / What changes the view</p>
        <h2 id="oil-v2-watchlist-title">A short list for the next research pass</h2>
        <ul>
          <li>Verified diplomatic implementation, rather than unconfirmed optimism</li>
          <li>Crude, product and LPG flows separated by route and reliability</li>
          <li>Freight, insurance and tanker availability alongside the flat price</li>
          <li>Commercial inventory changes by region, stock type and product</li>
          <li>Brent curve and physical-premium behaviour, with liquidity context</li>
        </ul>
      </section>

      <section className="energy-research-take" aria-labelledby="oil-v2-take">
        <p className="research-article__section-number">Aeora visual assessment</p>
        <h2 id="oil-v2-take">The market is more useful when its signals are kept separate.</h2>
        <p>
          Flow recovery, a calm headline and a weaker flat price can all be
          true at once. The research discipline is to test those observations
          against buffers, logistics and the curve before treating them as a
          market conclusion or an execution decision.
        </p>
        <div className="energy-research-take__cta">
          <p>Market structure before execution.</p>
          <Link href="/pinnacle">Explore Aeora Trader Development</Link>
        </div>
      </section>
    </>
  );
}
