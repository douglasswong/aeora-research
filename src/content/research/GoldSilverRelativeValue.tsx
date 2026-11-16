import Link from "next/link";

export const goldSilverRelativeValueKeyPoints = [
  "The Silver Institute expects a sixth consecutive market deficit in 2026, but weaker total demand, recycling and ETP outflows show why a deficit alone does not determine price.",
  "A same-timestamp Reuters snapshot on 13 November put gold at $3,898.84 and silver at $49.91, implying a gold-silver ratio of 78.1 after the ratio was near 43 in January.",
  "Below $50 is an area for valuation research, not confirmation of a bottom. A recovery needs evidence in price acceptance, macro conditions and participation.",
  "A move near $70 requires explicit assumptions about both gold and ratio compression. The 80/50 rotation chart and its 7.4-times claim are not independently verified here."
] as const;

export const goldSilverRelativeValueSources = [
  {
    label: "Silver Institute: Silver market set for sixth consecutive annual deficit in 2026, 12 November 2026",
    href: "https://silverinstitute.org/silver-market-set-for-sixth-consecutive-annual-deficit-in-2026/"
  },
  {
    label: "Reuters via Kitco: Rate-hike bets keep gold on track for its worst week in four months, 13 November 2026",
    href: "https://www.kitco.com/news/off-the-wire/2026-11-13/rate-hike-bets-keep-gold-track-its-worst-week-four-months"
  },
  {
    label: "World Gold Council: Gold - safe haven versus silver - wildcard",
    href: "https://www.gold.org/goldhub/research/gold-safe-haven-versus-silver-wildcard"
  },
  {
    label: "U.S. Commodity Futures Trading Commission: COMEX Silver futures-only Commitments of Traders report",
    href: "https://www.cftc.gov/dea/futures/deacmxsf.htm"
  },
  {
    label: "CME Group: Silver futures contract information",
    href: "https://www.cmegroup.com/markets/metals/precious/silver.contractSpecs.html"
  }
] as const;

const scenarioRows = [
  { gold: "$3,500", values: ["$43.75", "$50.00", "$58.33", "$63.64", "$70.00"] },
  { gold: "$3,800", values: ["$47.50", "$54.29", "$63.33", "$69.09", "$76.00"] },
  { gold: "$4,000", values: ["$50.00", "$57.14", "$66.67", "$72.73", "$80.00"] },
  { gold: "$4,200", values: ["$52.50", "$60.00", "$70.00", "$76.36", "$84.00"] }
] as const;

function DataSnapshot() {
  return (
    <section className="silver-data-snapshot" aria-label="Dated market snapshot">
      <div>
        <span>Research cutoff</span>
        <strong>16 Nov 2026</strong>
      </div>
      <div>
        <span>Spot reference</span>
        <strong>13 Nov / 9:50 ET</strong>
      </div>
      <div>
        <span>Gold / silver</span>
        <strong>$3,898.84 / $49.91</strong>
      </div>
      <div>
        <span>Implied GSR</span>
        <strong>78.1</strong>
      </div>
    </section>
  );
}

function GoldSilverRatioFramework() {
  return (
    <figure className="gold-silver-framework">
      <div className="gold-silver-framework__header">
        <div>
          <span>Original framework / relative value</span>
          <strong>What a higher gold-silver ratio can and cannot say</strong>
        </div>
        <p>Ratio = gold spot price / silver spot price</p>
      </div>

      <div className="gold-silver-framework__scale" role="img" aria-label="Gold-silver ratio framework with a dated 78.1 reference, a hypothetical 80 watch threshold and a hypothetical 50 rotation threshold">
        <div className="gold-silver-framework__axis" aria-hidden="true">
          <span>40</span>
          <span>50</span>
          <span>60</span>
          <span>70</span>
          <span>80</span>
        </div>
        <div className="gold-silver-framework__bands" aria-hidden="true">
          <span className="gold-silver-framework__band gold-silver-framework__band--low" />
          <span className="gold-silver-framework__band gold-silver-framework__band--mid" />
          <span className="gold-silver-framework__band gold-silver-framework__band--high" />
        </div>
        <div className="gold-silver-framework__marker gold-silver-framework__marker--january">
          <span>~43</span>
          <small>January 2026</small>
        </div>
        <div className="gold-silver-framework__marker gold-silver-framework__marker--reference">
          <span>78.1</span>
          <small>13 Nov 2026</small>
        </div>
        <div className="gold-silver-framework__threshold gold-silver-framework__threshold--fifty">
          <span>50</span>
          <small>Hypothetical lower reference</small>
        </div>
        <div className="gold-silver-framework__threshold gold-silver-framework__threshold--eighty">
          <span>80</span>
          <small>Hypothetical watch threshold</small>
        </div>
      </div>

      <div className="gold-silver-framework__legend">
        <p><strong>Below 50:</strong> silver has historically been relatively strong in some cycles, but no automatic switch follows.</p>
        <p><strong>70 to 80:</strong> silver is underperforming gold on this measure; it can reflect relative value, macro stress or softer industrial expectations.</p>
        <p><strong>Above 80:</strong> a research prompt, not a buying signal. The absolute direction of both metals still matters.</p>
      </div>
      <figcaption>
        The January and November observations are source-dated. The 50 and 80
        markers are hypothetical analytical thresholds, not backtested signals.
        Aeora did not reproduce the unverified 7.4-times rotation claim or the
        unlicensed chart on which it appeared.
      </figcaption>
    </figure>
  );
}

function SilverStructureMap() {
  const zones = [
    { price: "$70", label: "Conditional bullish scenario", tone: "recovery" },
    { price: "$60", label: "Intermediate scenario checkpoint", tone: "recovery" },
    { price: "$52-54", label: "Recovery validation area to test", tone: "recovery" },
    { price: "$50", label: "Psychological pivot / initial recovery objective", tone: "pivot" },
    { price: "$45-50", label: "Initial valuation-interest range", tone: "interest" },
    { price: "$40-45", label: "Preferred deeper-value research range", tone: "value" },
    { price: "$37-40", label: "Further downside; reassess the thesis", tone: "risk" }
  ] as const;

  return (
    <figure className="silver-structure-map">
      <div className="silver-structure-map__header">
        <div>
          <span>Original framework / price structure</span>
          <strong>Silver zones separate valuation interest from confirmation</strong>
        </div>
        <p>Owner-proposed research levels, not validated support or resistance.</p>
      </div>
      <ol>
        {zones.map((zone) => (
          <li key={zone.price} className={`silver-structure-map__zone silver-structure-map__zone--${zone.tone}`}>
            <strong>{zone.price}</strong>
            <span>{zone.label}</span>
          </li>
        ))}
      </ol>
      <div className="silver-structure-map__reference">
        <span>Dated spot reference / Reuters / 13 Nov 2026</span>
        <strong>$49.91</strong>
        <p>Below the $50 pivot. This is a timestamped observation, not a live quote.</p>
      </div>
      <figcaption>
        The $52-54 range was supplied as a volume-profile area, but the original
        TradingView range and settings were not attached. It is therefore a
        validation area to revisit, not a published Point of Control.
      </figcaption>
    </figure>
  );
}

function GoldSilverScenarioMatrix() {
  return (
    <figure className="gold-silver-matrix">
      <div className="gold-silver-matrix__header">
        <div>
          <span>Original scenario mathematics</span>
          <strong>What ratio compression would imply for silver</strong>
        </div>
        <p>Implied silver price = gold price / gold-silver ratio</p>
      </div>
      <div className="gold-silver-matrix__table-wrap">
        <table>
          <thead>
            <tr>
              <th scope="col">Gold assumption</th>
              <th scope="col">GSR 80</th>
              <th scope="col">GSR 70</th>
              <th scope="col">GSR 60</th>
              <th scope="col">GSR 55</th>
              <th scope="col">GSR 50</th>
            </tr>
          </thead>
          <tbody>
            {scenarioRows.map((row) => (
              <tr key={row.gold}>
                <th scope="row">{row.gold}</th>
                {row.values.map((value) => (
                  <td
                    key={`${row.gold}-${value}`}
                    className={value === "$70.00" ? "gold-silver-matrix__target" : undefined}
                  >
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="gold-silver-matrix__notes">
        <p><strong>Near $70:</strong> $3,500 gold at GSR 50, or $4,200 gold at GSR 60.</p>
        <p><strong>Important:</strong> a lower ratio can occur because silver rises, gold falls more slowly, or both. It is not a standalone price target.</p>
      </div>
      <figcaption>
        Scenario inputs are illustrative, not forecasts. Values are simple arithmetic,
        rounded to two decimals.
      </figcaption>
    </figure>
  );
}

function ScenarioOutlook() {
  return (
    <section className="silver-scenarios" aria-labelledby="silver-scenarios-title">
      <p className="research-article__section-number">08 / Scenario discipline</p>
      <h2 id="silver-scenarios-title">Three paths, none of them automatic</h2>
      <ol>
        <li className="silver-scenarios__item silver-scenarios__item--recovery">
          <span>01</span>
          <div>
            <h3>Bullish recovery</h3>
            <p>
              Silver stabilises, gold remains firm, real yields and the dollar ease,
              investment participation improves and price can hold above $50 before
              working through $52-54. Only then do $60 and a conditional extension
              toward $70 become a coherent scenario.
            </p>
          </div>
        </li>
        <li className="silver-scenarios__item silver-scenarios__item--base">
          <span>02</span>
          <div>
            <h3>Base building</h3>
            <p>
              Silver remains volatile below $50 while macro conditions and investor
              flows stay mixed. Failed rallies and a broad range can be useful
              information: a sustained base is usually built through time.
            </p>
          </div>
        </li>
        <li className="silver-scenarios__item silver-scenarios__item--risk">
          <span>03</span>
          <div>
            <h3>Deeper correction</h3>
            <p>
              Persistent restrictive policy, stronger yields or dollar, industrial
              weakness and renewed ETP liquidation could shift attention to $40-45
              and then $37-40. Those areas require a fresh thesis check, not an
              unlimited commitment to averaging down.
            </p>
          </div>
        </li>
      </ol>
    </section>
  );
}

export function GoldSilverRelativeValueArticle() {
  return (
    <>
      <p className="research-article__lede">
        Silver has become a much more interesting relative-value question than a
        simple directional call. The case for studying weakness is real; the case
        for assuming that every fall is a bargain is not. Aeora&apos;s constructive
        bias is therefore conditional: prepare for selective research below $50,
        demand evidence before treating a rebound as a durable recovery, and keep
        the downside thesis alive rather than hidden.
      </p>

      <DataSnapshot />

      <section aria-labelledby="silver-fundamentals">
        <p className="research-article__section-number">01 / Fundamental case</p>
        <h2 id="silver-fundamentals">A deficit is supportive context, not a price guarantee</h2>
        <p>
          The Silver Institute expects the global silver market to record a sixth
          consecutive annual deficit in 2026, around 35 million ounces. That is a
          structural fact. Yet total demand is forecast at 1.08 billion ounces,
          down 5% year on year, while recycling rises 6%. Mine supply is broadly
          flat to slightly lower, and above-ground metal can bridge a deficit. A
          deficit matters without forcing an immediate higher price.
        </p>
        <p>
          Silver&apos;s dual identity explains why. It responds to monetary conditions,
          gold, real yields, the dollar and investment flows as a precious metal;
          it also answers to electronics, solar, autos, grid investment and the
          manufacturing cycle as an industrial material. The World Gold Council
          describes this as a higher-beta, more cyclical profile than gold. That
          creates upside when monetary and industrial inputs reinforce each other,
          but deeper drawdowns when they do not.
        </p>
        <p>
          Solar remains a good example of both forces at once. The Silver Institute
          expects industrial demand to be about 640 million ounces in 2026. Demand
          excluding photovoltaics is expected to grow, while PV demand faces
          thrifting and material substitution. More solar capacity does not
          automatically mean more silver demand per watt. Jewellery and silverware
          weakness reinforce the need to read demand by end market.
        </p>
      </section>

      <section aria-labelledby="silver-relative-value">
        <p className="research-article__section-number">02 / Relative value</p>
        <h2 id="silver-relative-value">The ratio is a question, not a command</h2>
        <p>
          The gold-silver ratio divides the gold price by the silver price. Using
          the same Reuters timestamp on 13 November, spot gold at $3,898.84 and
          spot silver at $49.91 produced a ratio of 78.1. The Silver Institute had
          reported a ratio near 43 in January, when silver reached a record
          $121.65 per ounce. That swing captures silver&apos;s volatility.
        </p>
        <p>
          A high ratio can signal relative silver underperformance, but it does not
          say why. It can appear during a silver-specific liquidation, a broader
          precious-metals decline, a rising dollar and real-yield episode, or a
          deteriorating industrial outlook. A falling ratio also does not guarantee
          a rising silver price. Relative value has to sit beside absolute price
          and macro conditions.
        </p>
        <GoldSilverRatioFramework />
        <p>
          The popular 80/50 rotation illustration deserves a firm boundary. Its
          claimed 7.4-times bullion result has not been independently reproduced
          here. The original creator, data set, precise switch rules, number of
          rotations, dealing spreads, taxes, storage costs and possible look-ahead
          bias have not been established. The economic intuition can be useful -
          compare the two metals when their relative pricing becomes stretched - but
          the chart does not establish a repeatable performance result.
        </p>
      </section>

      <section aria-labelledby="silver-macro">
        <p className="research-article__section-number">03 / Macro and positioning</p>
        <h2 id="silver-macro">The policy headwind has not disappeared</h2>
        <p>
          At the research cutoff, Reuters reported that rate-hike expectations were
          pressuring non-yielding metals alongside a firmer dollar and higher
          Treasury yields. Those conditions increase the opportunity cost of
          holding metals. A constructive thesis needs a clear answer to that
          pressure, not just a low ratio-adjusted price.
        </p>
        <p>
          Positioning is evidence, but it is delayed evidence. The CFTC&apos;s COMEX
          futures-only report for 3 November listed non-commercial gross longs of
          37,002 contracts, gross shorts of 15,751 and 21,202 spread positions. The
          directional difference before spreads was therefore 21,251 contracts.
          It is not a current flow measure and cannot reveal physical demand or
          retail CFD positioning.
        </p>
        <p>
          Silver-backed ETP holdings show the same ambiguity. The Silver Institute
          reported holdings of 1.25 billion ounces on 3 November, 4% lower year to
          date, after a partial recovery from the end of June. A deficit and uneven
          investment flows can coexist; durable participation would be stronger
          recovery evidence than price alone.
        </p>
      </section>

      <section aria-labelledby="silver-technical">
        <p className="research-article__section-number">04 / Technical case</p>
        <h2 id="silver-technical">Start with price acceptance, not a prediction</h2>
        <p>
          The verifiable 13 November spot reference was $49.91, just below the
          $50 psychological pivot. That makes $50 a sensible level to observe, not
          proof of support or resistance. An initial recovery case improves only if
          price can regain and hold above that area, then show acceptance through
          the owner-proposed $52-54 review zone. Closing behaviour and a pattern of
          higher highs and higher lows matter more than a single intraday poke.
        </p>
        <p>
          The supplied four-hour screenshot referred to a volume-profile Point of
          Control near $52.14. A POC is the most traded price within a selected
          range; change the range or settings and the level can change. Because the
          screenshot and its settings are not available in this project, Aeora does
          not publish it or present $52.14 as a confirmed market fact. The $52-54
          band is a transparent validation area pending a reproducible profile.
        </p>
        <SilverStructureMap />
        <p>
          Below $50, the distinction is deliberate. The $45-50 range is initial
          valuation interest; $40-45 is the preferred deeper-value research range;
          and $37-40 is an additional downside scenario that must trigger thesis
          reassessment. Oversold is not reversed: valuation and trend confirmation
          deserve separate risk decisions.
        </p>
      </section>

      <section aria-labelledby="silver-seventy">
        <p className="research-article__section-number">05 / The $70 question</p>
        <h2 id="silver-seventy">Make the upside scenario do the arithmetic</h2>
        <p>
          A $70 silver outcome is not established by an 80/50 framework. It needs
          both an absolute gold assumption and a relative-ratio assumption. The
          matrix shows the combinations. At $4,200 gold, a 60 ratio implies $70
          silver. At $3,500 gold, it needs a 50 ratio. Near $4,000, the required
          ratio is about 57.1. Each path asks for a different balance of gold,
          silver outperformance and macro conditions.
        </p>
        <GoldSilverScenarioMatrix />
        <p>
          A credible route toward $70 would therefore need more than a low nominal
          price. It would likely include firm or rising gold, a weaker dollar or
          lower real yields, stronger investment participation, evidence that the
          physical market remains tight and a sustained recovery through $50 and
          $52-54. The matrix exposes those assumptions rather than concealing them.
        </p>
      </section>

      <ScenarioOutlook />

      <section className="silver-preparation" aria-labelledby="silver-preparation-title">
        <p className="research-article__section-number">Aeora Research view</p>
        <h2 id="silver-preparation-title">Preparation over prediction</h2>
        <p>
          Aeora is constructively watching silver&apos;s medium- to long-term
          relative-value opportunity, with a preference for studying weakness
          rather than chasing rallies. That preference is not a claim that $40-45
          must hold, that $50 marks a bottom or that $70 is inevitable. Valuation
          interest, trend confirmation and risk acceptance are separate questions.
        </p>
        <div className="silver-preparation__grid">
          <div>
            <span>For bullion or spot ownership</span>
            <p>Consider dealer premiums, bid-ask spread, storage, liquidity, product purity and USD/MYR exposure before treating a spot price as the entire cost.</p>
          </div>
          <div>
            <span>For leveraged XAGUSD CFDs</span>
            <p>Leverage, financing, broker pricing and gap risk make the product materially different from unleveraged physical ownership. A CFD is not a substitute for a bar in storage.</p>
          </div>
          <div>
            <span>For every scenario</span>
            <p>Maintain liquidity, avoid overconcentration, define the maximum acceptable downside and revisit the thesis when fundamentals, flows or market structure change.</p>
          </div>
        </div>
        <p className="silver-preparation__disclaimer">
          This publication represents the independent market research and
          conditional outlook of Aeora Research as of the stated date. It is
          provided for educational and general informational purposes only and
          does not constitute personalized investment advice, a solicitation, or
          a guarantee of future market performance. Precious metals are volatile,
          and prices may move materially against the scenarios discussed. Readers
          should independently evaluate risks, product structures, transaction
          costs and suitability before making financial decisions.
        </p>
        <div className="silver-preparation__cta">
          <div>
            <span>Go beyond market predictions</span>
            <p>Explore Aeora&apos;s structured trader-development resources, market intelligence and professional trading education.</p>
          </div>
          <Link href="/pinnacle">Explore Aeora Trader Development</Link>
        </div>
      </section>
    </>
  );
}
