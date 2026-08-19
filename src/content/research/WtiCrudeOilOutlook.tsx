import Image from "next/image";

export const wtiCrudeOilKeyPoints = [
  "WTI has reclaimed the $84-$85 pivot, but the recovery is not technically compelling until price absorbs the $90.8-$96.5 supply and liquidity region.",
  "The 2026 sequence shows how quickly conflict, easing and physical-flow expectations can add or remove crude-oil risk premium.",
  "An approximately 90-day rhythm is useful only as a scenario-planning observation; two phases are not a forecasting model.",
  "A sustained break into the long-term $110-$147 upper regime could carry inflation and cross-asset implications, but no such breakout has occurred."
] as const;

export const wtiCrudeOilSources = [
  {
    label:
      "Associated Press: U.S.-Oman-Iran tensions and Strait of Hormuz negotiations, 18 August 2026",
    href:
      "https://apnews.com/article/oman-iran-war-us-hormuz-a8298715a51159225d2f37a6d50ce682"
  },
  {
    label:
      "Reuters: Iran threatens an offensive posture in the Strait if diplomacy fails, 17 August 2026",
    href:
      "https://www.reuters.com/world/middle-east/iran-threatens-go-offensive-strait-hormuz-if-diplomacy-with-us-fails-2026-08-17/"
  },
  {
    label:
      "UKMTO / JMIC: Maritime security advisory for the Strait of Hormuz, 2 August 2026",
    href:
      "https://www.ukmto.org/-/media/ukmto/products/update-079-jmic-advisory-note-02-august-1.pdf"
  },
  {
    label:
      "U.S. Treasury: Sanctions targeting Iranian Strait of Hormuz maritime schemes and shadow-fleet vessels, 29 July 2026",
    href: "https://home.treasury.gov/news/press-releases/sb0581"
  },
  {
    label:
      "Oman Foreign Ministry: Oman-Iran joint statement on safe passage and Strait dialogue, 23 June 2026",
    href: "https://www.fm.gov.om/en/48943/"
  },
  {
    label:
      "U.S. EIA: Petroleum markets responded to Middle East disruptions in Q2 2026, 15 July 2026",
    href: "https://www.eia.gov/todayinenergy/detail.php?id=67865"
  },
  {
    label:
      "U.S. EIA: World oil transit chokepoints and Strait of Hormuz volumes, 2026 update",
    href:
      "https://www.eia.gov/international/content/analysis/special_topics/World_Oil_Transit_Chokepoints/"
  },
  {
    label:
      "Federal Reserve: FOMC statement, 29 July 2026",
    href:
      "https://www.federalreserve.gov/newsevents/pressreleases/monetary20260729a.htm"
  },
  {
    label:
      "U.S. BLS: Motor fuel in the Consumer Price Index, updated 2026",
    href: "https://www.bls.gov/cpi/factsheets/motor-fuel.htm"
  },
  {
    label:
      "U.S. EIA: Daily Cushing WTI spot-price history",
    href: "https://www.eia.gov/dnav/pet/hist/rwtcd.htm"
  },
  {
    label:
      "CME Group: WTI's July 2008 rise to the $147 record region",
    href:
      "https://www.cmegroup.com/education/featured-reports/crude-oils-next-move-clues-from-soybean-oil"
  },
  {
    label:
      "CME Group: Negative-price readiness for NYMEX energy contracts, April 2020",
    href:
      "https://www.cmegroup.com/notices/clearing/2020/04/Chadv20-160.html"
  },
  {
    label:
      "OPEC: Seven OPEC+ countries announce September 2026 production adjustment, 2 August 2026",
    href: "https://www.opec.org/pr-detail/1854611-2-august-2026.html"
  }
] as const;

type WtiChartProps = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

function WtiChart({ src, alt, caption, width, height }: WtiChartProps) {
  return (
    <figure className="wti-chart">
      <a
        className="wti-chart__link"
        href={src}
        target="_blank"
        rel="noreferrer"
        aria-label={`${alt}. Open the full-resolution chart in a new tab.`}
      >
        <div className="wti-chart__frame">
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            sizes="(max-width: 760px) 100vw, 760px"
          />
          <span className="wti-chart__zoom">Open full resolution</span>
        </div>
      </a>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

export function WtiCrudeOilCover() {
  return (
    <figure className="wti-cover">
      <a
        className="wti-cover__link"
        href="/research/wti-crude-oil-outlook-2026-daily.png"
        target="_blank"
        rel="noreferrer"
        aria-label="Annotated 2026 daily WTI CFD chart. Open the full-resolution chart in a new tab."
      >
        <Image
          src="/research/wti-crude-oil-outlook-2026-daily.png"
          alt="Annotated 2026 daily WTI CFD chart showing conflict, easing and recovery phases"
          width={1311}
          height={830}
          priority
          sizes="(max-width: 760px) 100vw, 1200px"
        />
        <span className="wti-chart__zoom">Open full resolution</span>
      </a>
      <figcaption>
        <span>WTI / 2026 decision map</span>
        <strong>$84-$85 pivot</strong>
        <small>TradingView / FXCM CFD reference</small>
      </figcaption>
    </figure>
  );
}

export function WtiCrudeOilArticle() {
  return (
    <>
      <p className="research-article__lede">
        Geopolitical tension is resurfacing as WTI revisits one of the most
        important technical decision areas of 2026. The confluence is notable;
        the outcome is not inevitable.
      </p>

      <div className="wti-disclosure">
        <strong>Technical disclosure</strong>
        <p>
          The supplied charts are TradingView FXCM CFD Crude Oil (WTI) charts,
          not necessarily the exact NYMEX CL front-month futures series. CFD
          pricing and rollover methodology may differ from exchange-traded
          futures. Article levels primarily refer to Aeora Research&apos;s FXCM CFD
          reference chart; historical comparisons are broad structural
          observations rather than exact cross-contract settlement comparisons.
        </p>
      </div>

      <section aria-labelledby="wti-2026-cycle">
        <p className="research-article__section-number">01</p>
        <h2 id="wti-2026-cycle">2026: Conflict, easing and repricing</h2>
        <p>
          Aeora&apos;s daily map begins near $55 in late 2025 and reaches roughly
          $119.50 after about 83 days. That is a 117.27% move, close to the
          chart&apos;s rounded +117% annotation. The advance coincided with a major
          conflict-repricing phase, but geopolitics cannot explain the whole
          move. Physical supply expectations, exports, shipping capacity,
          sanctions, OPEC+ policy, inventories, demand, positioning and the
          dollar all influence crude at the same time.
        </p>
        <p>
          The vertical repricing then gave way to a 65-bar, roughly 92-day Q2
          digestion between approximately $85 and $110. A June-July decline of
          about 30% carried price toward $67.50, almost exactly the chart&apos;s
          daily 78.6% Fibonacci reference at $67.51. This was confluence, not
          causation: easing expectations and changing probabilities met a
          technically important retracement.
        </p>
        <p>
          The following rebound was equally instructive. From around $67.50 to
          approximately $94, WTI recovered 39.26% in roughly two weeks. A later
          perceived-deal headline phase pulled price back toward $74, about a
          20% decline from the recovery high. From that area, early-August price
          action recovered approximately 15%-16% into the current $85-$86
          region. The lesson is not that every headline should be traded. It is
          that crude&apos;s risk premium can be added and removed with unusual speed
          when the expected path of shipping, exports or conflict changes.
        </p>

        <WtiChart
          src="/research/wti-crude-oil-outlook-2026-daily.png"
          alt="Daily WTI CFD chart with six annotated 2026 market phases and Fibonacci levels"
          width={1311}
          height={830}
          caption="WTI Daily — Aeora Research 2026 conflict/easing cycle map, major Fibonacci structure and current recovery toward the $90.8-$96.5 decision area."
        />
      </section>

      <section aria-labelledby="why-84-matters">
        <p className="research-article__section-number">02</p>
        <h2 id="why-84-matters">Why $84-$85 matters now</h2>
        <p>
          The daily 50% retracement sits at approximately $84.00. The same area
          also marks the former lower boundary of the Q2 range and has now been
          reclaimed. That gives $84-$85 three roles: a Fibonacci pivot, a
          structure test and a gauge of whether the latest recovery can retain
          momentum.
        </p>
        <p>
          Holding above it would preserve a sequence of improving short-term
          lows. Losing it would not automatically return price to the July
          bottom, but it would weaken the recovery and refocus attention on the
          H6 references at $82.83, $79.88 and $76.93. On the daily chart,
          $77.20 and $67.51 remain the larger downside references.
        </p>
      </section>

      <section aria-labelledby="technical-test">
        <p className="research-article__section-number">03</p>
        <h2 id="technical-test">The real technical test: $90.8-$96.5</h2>
        <p>
          The main decision region lies above current price. Its lower boundary
          aligns with the daily 38.2% retracement near $90.81; the upper area
          overlaps a June structural high and the descending trendline from the
          March region. The H6 chart labels this band as a liquidity gap. We
          treat that label as a map of potential supply and order interaction,
          not a promise that price must fill or break it.
        </p>
        <p>
          A rally into the band followed by rejection would leave the broader
          corrective range intact. The more constructive case requires several
          steps: entry into the region, absorption of selling, sustained
          acceptance, strong closes above it and a break of the descending
          trendline. Only then would the lower-high structure begin to fail,
          making $100 and eventually the $110-$120 historical region more
          relevant. Calling that breakout before it occurs would confuse a
          scenario with evidence.
        </p>

        <WtiChart
          src="/research/wti-crude-oil-outlook-2026-h6.png"
          alt="Six-hour WTI CFD chart showing current price, Fibonacci support and the 90.8 to 96.5 resistance zone"
          width={1153}
          height={837}
          caption="WTI H6 — Near-term structure highlighting the $84-$85 pivot, $90.8-$96.5 liquidity region and conditional upside-extension scenario."
        />
      </section>

      <section aria-labelledby="geopolitical-risk">
        <p className="research-article__section-number">04</p>
        <h2 id="geopolitical-risk">Geopolitical risk is returning at the decision point</h2>
        <p>
          The verified backdrop remains unresolved. On 18 August, Associated
          Press reported that Iran and Oman were close to a plan governing ship
          traffic through the Strait of Hormuz while Washington objected to
          elements of the arrangement. AP also reported a projectile strike on
          a vessel leaving the strait and said the negotiating window for a
          broader U.S.-Iran peace arrangement was expiring without visible
          convergence. Reuters separately reported on 17 August that a senior
          Iranian official described a shift toward a more offensive posture if
          diplomacy failed.
        </p>
        <p>
          Those reports sit against competing official positions. Oman has
          repeatedly advocated safe passage, international law and continued
          diplomacy. The U.S. Treasury has maintained pressure through sanctions
          on Iranian maritime and shadow-fleet networks. A 2 August UKMTO/JMIC
          advisory described reduced Strait traffic, persistent navigational
          interference and elevated maritime risk. The EIA estimates that 20.9
          million barrels per day moved through Hormuz in the first half of
          2025, illustrating why uncertainty around transit can influence far
          more than one regional market.
        </p>
        <p>
          These accounts do not resolve into one clean story. Tehran, Washington
          and Muscat are describing different interests, conditions and degrees
          of progress. The market is not only pricing escalation or
          de-escalation; it is pricing uncertainty around the credibility,
          timing and durability of both. Aeora&apos;s working view therefore leans
          toward unresolved negotiation and persistent Gulf-security risk, not
          toward certainty that a deal will fail.
        </p>
      </section>

      <section aria-labelledby="ninety-day-observation">
        <p className="research-article__section-number">05</p>
        <h2 id="ninety-day-observation">The 90-day observation</h2>
        <p>
          The first conflict-repricing phase lasted about 83 days; the following
          Q2 consolidation measured roughly 92 days. That is enough to establish
          a monitoring rhythm, but nowhere near enough to establish a model. We
          are using 90 days, plus or minus, as a Q4 scenario-planning window.
        </p>
        <div className="research-article__callout">
          <strong>A rough observational cycle, not a statistically validated forecasting model.</strong>
          <p>
            The sample contains only two phases. Geopolitical events do not
            repeat mechanically, event timing is unpredictable, magnitude
            changes, technical patterns fail and physical market conditions
            evolve. The observation tells us when to intensify monitoring, not
            where price must travel.
          </p>
        </div>
      </section>

      <section aria-labelledby="long-term-lens" className="wti-long-term">
        <p className="research-article__section-number">06 / Long-term lens</p>
        <h2 id="long-term-lens">Crude keeps returning to the same upper regime</h2>
        <p className="wti-long-term__subtitle">
          A crude-oil fun fact that may not be so fun for inflation.
        </p>
        <p>
          The monthly chart places 2026 inside a much larger structure. NYMEX
          WTI futures reached an intraday record above $147 in July 2008 before
          collapsing into the global financial crisis. The oil peak did not
          cause that crisis, but it remains the defining commodity-cycle high.
        </p>
        <p>
          From 2011 through mid-2014, WTI made repeated approaches to roughly
          $100-$112 before a major decline. The supplied chart&apos;s $105-$115
          description captures the upper boundary, but verified EIA spot data
          show much of the period traded below that band. The defensible reading
          is a multi-year upper regime around $100-$112, not three uninterrupted
          years above $105.
        </p>
        <p>
          In April 2020, the negative settlement often associated with WTI was
          specific to the expiring May 2020 NYMEX futures contract amid extreme
          storage and delivery pressure. It should not be treated as a universal
          negative print across spot, CFD and every futures maturity. The
          subsequent recovery carried EIA Cushing spot WTI to $123.64 on 8 March
          2022, while the monthly CFD chart presents the move as approximately
          $125-$130. In 2026, the supplied CFD chart records another peak around
          $119 and a stronger recovery attempt after correction.
        </p>

        <WtiChart
          src="/research/wti-crude-oil-outlook-2026-monthly.png"
          alt="Monthly WTI CFD chart from 2002 to 2026 showing major cyclical highs"
          width={1372}
          height={828}
          caption="WTI Monthly — Multi-cycle crude-oil structure showing repeated tests of the broad upper-price regime since 2008. Source chart: TradingView / FXCM CFD. Annotations and interpretation: Aeora Research."
        />
      </section>

      <section aria-labelledby="ceiling-break">
        <p className="research-article__section-number">07</p>
        <h2 id="ceiling-break">What happens if an 18-year ceiling finally breaks?</h2>
        <p>
          There is no single resistance line connecting $110, $120, $130 and
          $147. There is instead a broad multi-cycle upper resistance regime,
          approximately $110-$147, with meaningful sub-zones around $110-$120,
          $125-$130 and $145-$150. Repeated tests make an eventual sustained
          break more consequential; they do not make it inevitable. The same
          regime can keep rejecting price.
        </p>
        <p>
          A true multi-cycle breakout would require WTI to preserve the current
          recovery, clear $90.8-$96.5, reclaim $110-$120 and then establish
          sustained monthly acceptance above the historical upper region. A
          later challenge of the 2008 high would be another condition, not an
          automatic destination. Only that sequence would justify discussing a
          new structural crude-oil price regime rather than another cyclical
          spike.
        </p>
      </section>

      <section aria-labelledby="inflation-fed">
        <p className="research-article__section-number">08</p>
        <h2 id="inflation-fed">Why Black Gold could matter for inflation again</h2>
        <p>
          Oil enters headline inflation directly through motor fuel and
          indirectly through freight, aviation, petrochemicals and industrial
          inputs. BLS assigns motor fuel about 3% of the U.S. CPI basket, while
          the second-round effects depend on persistence, pass-through and how
          firms and households form expectations. Higher crude does not
          mechanically determine core inflation or Federal Reserve policy.
        </p>
        <p>
          It can still complicate the policy path. On 29 July, the Federal
          Reserve said inflation remained elevated relative to its 2% goal and
          explicitly referenced supply shocks, including energy. A persistent
          oil shock could make disinflation harder if transport and input costs
          broaden into expectations, wages or margins. A brief geopolitical
          spike that quickly reverses would be a different macro event from a
          sustained multi-month regime change.
        </p>
        <p>
          If crude ultimately escapes a resistance regime that has contained
          multiple major cycles since 2008, the market may be reminded why oil
          earned the nickname &quot;black gold.&quot;
        </p>
      </section>

      <section aria-labelledby="equity-headwind">
        <p className="research-article__section-number">09</p>
        <h2 id="equity-headwind">Could oil become an equity-market headwind?</h2>
        <p>
          A persistent crude repricing could become one additional macro
          headwind for the S&amp;P 500 and NASDAQ 100, particularly if it alters
          inflation expectations and the expected path of interest rates.
          Higher energy and transport costs can pressure margins and household
          disposable income; higher expected inflation can lift yields and
          compress valuation multiples, with high-duration growth stocks often
          more sensitive to discount-rate changes.
        </p>
        <p>
          This is not an &quot;oil up, technology down&quot; rule. Energy producers may
          benefit, commodity-linked sectors can rotate differently, and broad
          index outcomes still depend on earnings, growth, policy and starting
          valuations. Correlations change through time. Oil would be a
          transmission channel, not a standalone crash signal.
        </p>
      </section>

      <section aria-labelledby="three-scenarios">
        <p className="research-article__section-number">10</p>
        <h2 id="three-scenarios">Three scenarios from here</h2>
        <div className="wti-scenarios">
          <article>
            <span>A / Constructive repricing</span>
            <h3>Acceptance above the decision region</h3>
            <p>
              $84-$85 holds, higher lows continue and price absorbs
              $90.8-$96.5 while geopolitical and physical-market evidence
              support the move. References then progress through $100,
              $110-$120 and the Fibonacci extensions at $128.54, $134.88,
              $141.69 and $148.50. From $85 to $128.50 is 51.18%; from the
              chart&apos;s $85.75 area to $128.54 is 49.90%. These are technical
              scenario references, not targets or guarantees.
            </p>
          </article>
          <article>
            <span>B / Range and rejection</span>
            <h3>Volatility without structural resolution</h3>
            <p>
              WTI remains between the mid-to-high $70s and mid-$90s as
              geopolitical uncertainty persists without a decisive physical
              disruption. Repeated headline spikes, rejection at $90-$96 and
              rapid mean reversion would be frustrating for directional
              traders, but this may be the most realistic middle path.
            </p>
          </article>
          <article>
            <span>C / De-escalation or thesis failure</span>
            <h3>The recovery loses its support structure</h3>
            <p>
              A credible settlement, normalised transit, lower insurance costs,
              sanctions relief, stronger exports, OPEC+ supply, shale growth,
              SPR action, weak demand, inventory builds or a stronger dollar
              could remove risk premium. A failed $90-$96 test would refocus
              $77.20, the broader $70 area and $67.51. Sustained breaks through
              those zones would progressively weaken the constructive thesis.
            </p>
          </article>
        </div>
      </section>

      <section aria-labelledby="watching">
        <p className="research-article__section-number">11</p>
        <h2 id="watching">What Aeora Research is watching</h2>
        <ul className="research-article__checklist wti-watchlist">
          <li>$84-$85 recovery pivot</li>
          <li>$90.81 lower decision boundary</li>
          <li>$96.5 upper supply region</li>
          <li>March descending trendline</li>
          <li>$110-$120 historical sub-zone</li>
          <li>Hormuz shipping and tanker insurance</li>
          <li>U.S.-Iran negotiations and policy-reversal risk</li>
          <li>Oman&apos;s mediation and transit arrangements</li>
          <li>OPEC+ and U.S. shale production response</li>
          <li>EIA inventories, refinery runs and physical confirmation</li>
        </ul>
        <p>
          Secondary risks include Iranian export changes, sanctions enforcement
          or relief, China and India demand, freight normalisation, alternative
          routes, crowded positioning and liquidation. Similar geopolitical
          logic can apply to Brent because it is a seaborne global benchmark,
          but no Brent chart was supplied; WTI levels in this note should not be
          copied onto UKOIL.
        </p>
      </section>

      <section aria-labelledby="aeora-view">
        <p className="research-article__section-number">12</p>
        <h2 id="aeora-view">Aeora Research view</h2>
        <p>
          Our working bias remains constructive while the recovery structure
          survives, but the thesis does not become technically compelling until
          WTI demonstrates that it can absorb the $90.8-$96.5 supply and
          liquidity region.
        </p>
        <p>
          A sustained breakout would not merely reopen the 2026 highs. It would
          place crude back against a long-term price regime that has repeatedly
          contained major commodity cycles since 2008. If that regime
          eventually gives way, the implications may extend well beyond the oil
          market.
        </p>
      </section>

      <section className="wti-important-disclaimer" aria-labelledby="wti-disclaimer">
        <p className="research-article__section-number">Important disclaimer</p>
        <h2 id="wti-disclaimer">Research, not a recommendation</h2>
        <p>
          This publication is prepared solely for general market research,
          education and informational purposes by Aeora Research. It does not
          constitute investment, financial or trading advice, a solicitation,
          an offer to buy or sell any financial instrument, or a recommendation
          to enter any position.
        </p>
        <p>
          All views, scenarios, technical levels and projections are research
          observations and opinions at the time of writing and may change
          without notice. Forward-looking scenarios, price objectives and time
          estimates are inherently uncertain and may not occur. Historical
          behaviour, technical patterns, correlations and geopolitical
          developments are not reliable indicators of future performance.
        </p>
        <p>
          Crude oil, commodity derivatives and leveraged products can be highly
          volatile and involve substantial risk of loss. Readers should verify
          information independently, conduct their own due diligence, consider
          their circumstances and risk tolerance, and seek appropriately
          licensed professional advice where required. Cross-asset observations
          involving inflation, interest rates or equities are scenario analysis,
          not forecasts of Federal Reserve policy or stock-market performance.
          Aeora Research accepts no responsibility for decisions made from this
          publication.
        </p>
      </section>
    </>
  );
}
