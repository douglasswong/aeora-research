export const warshFedQ42026KeyPoints = [
  "Warsh's Jackson Hole speech reset the policy debate from future easing toward a live risk of renewed tightening.",
  "With less routine forward guidance, payrolls, inflation and FOMC communications can carry greater cross-asset impact.",
  "A firmer dollar and higher real yields are a near-term headwind for gold, long-duration equities and Bitcoin.",
  "AI earnings remain the critical counterweight for the Nasdaq 100, while the broader S&P 500 has more sectoral resilience.",
  "The September 16 decision matters less as a standalone 25-basis-point event than as evidence on the Q4 policy regime."
] as const;

export const warshFedQ42026Sources = [
  {
    label: "Federal Reserve: Chairman Kevin Warsh, In Our Time, 28 August 2026",
    href: "https://www.federalreserve.gov/newsevents/speech/warsh20260828a.htm"
  },
  {
    label: "CME Group: FedWatch probability tool",
    href: "https://www.cmegroup.com/fedwatch"
  },
  {
    label: "BLS: September 2026 release calendar",
    href: "https://www.bls.gov/schedule/2026/09_sched_list.htm"
  },
  {
    label: "Federal Reserve: 2026 FOMC meeting calendar",
    href: "https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm"
  },
  {
    label: "Reuters: Rate-hike expectations rise on Warsh's Jackson Hole speech",
    href: "https://www.marketscreener.com/news/rate-hike-expectations-rise-on-warsh-speech-at-jackson-hole-ce7858dfde8af62d"
  },
  {
    label: "Reuters: Barclays sees 25-basis-point Fed increases in September and December",
    href: "https://uk.marketscreener.com/news/barclays-sees-two-more-fed-rate-hikes-this-year-after-warsh-speech-ce7858dcdd8cff24"
  },
  {
    label: "Kenanga Research: September hold view and first-cut forecast for Q2 2027",
    href: "https://www.businesstoday.com.my/2026/09/01/kenanga-sees-fed-holding-rate-in-september-keeps-ringgit-forecast-at-3-95/"
  },
  {
    label: "Reuters: Bond yields rise as U.S. and Iran resume attacks",
    href: "https://wealthinsights.metrobank.com.ph/news/treasuries-bond-yields-rise-as-us-iran-resume-attacks"
  },
  {
    label: "Reuters: Gold slips as traders await U.S. jobs data and monitor Middle East tensions",
    href: "https://www.marketscreener.com/news/gold-steadies-as-traders-await-us-jobs-data-monitor-mideast-tensions-ce7858ddda8ff122"
  },
  {
    label: "Reuters: S&P 500 to end 2026 slightly above current levels on profit optimism",
    href: "https://www.investing.com/news/stock-market-news/sp-500-to-end-2026-slightly-above-current-levels-on-profit-optimism-reuters-poll-4876978"
  },
  {
    label: "NVIDIA: Q2 fiscal 2027 earnings-call transcript, 26 August 2026",
    href: "https://investor.nvidia.com/files/content_files/TRANSCRIPT_-NVIDIA-Corp-NVDA-US-Q2-2027-Earnings-Call-26-August-2026-5_00-PM-ET.pdf"
  },
  {
    label: "CoinDesk: Bitcoin reaction to Warsh's Jackson Hole address",
    href: "https://www.coindesk.com/business/2026/08/28/live-updates-bitcoin-options-worth-usd6-4-billion-just-expired-as-prices-hover-near-usd80-000?post-id=9fa13ea7b219"
  }
] as const;

const snapshotRows = [
  ["September hike probability", "66%", "CME FedWatch, reported 1 Sep"],
  ["DXY", "99.62", "Reuters, 1 Sep"],
  ["Spot gold", "$4,383/oz", "6:35 PM MYT, 1 Sep"],
  ["S&P 500", "7,655", "6:35 PM MYT, 1 Sep"],
  ["Nasdaq 100", "29,200", "6:35 PM MYT, 1 Sep"],
  ["Bitcoin", "$78,000", "6:35 PM MYT, 1 Sep"],
  ["U.S. 2-year / 10-year", "4.35% / 4.76%", "1 Sep market reports"],
  ["USD/MYR", "4.0375", "6:35 PM MYT, 1 Sep"]
] as const;

const assetRows = [
  ["U.S. dollar", "Constructive", "Rate differential, yield support and a resilient U.S. economy", "Weak employment or softer inflation that unwinds hike pricing"],
  ["Gold", "Near-term cautious", "Higher yields and a firmer dollar", "Oil/geopolitical stress or fiscal concerns that revive defensive demand"],
  ["Nasdaq 100", "Cautious / volatile", "Higher discount rates versus strong AI earnings", "AI earnings and capex continue to outrun valuation pressure"],
  ["S&P 500", "Neutral-constructive", "Earnings breadth and sector diversification", "Oil-led inflation, higher yields or earnings disappointment"],
  ["Bitcoin", "Cautious", "Liquidity, front-end rates and dollar direction", "Fast dovish repricing or renewed institutional-flow strength"]
] as const;

export function WarshFedQ42026OutlookArticle() {
  return (
    <>
      <p className="research-article__lede">
        The Federal Reserve has changed the conversation. After Kevin Warsh&apos;s
        Jackson Hole speech, markets are no longer debating only how long rates
        will stay unchanged. They are again pricing the possibility that rates
        may need to rise. That shift, reinforced by higher oil and Treasury
        yields, now frames September&apos;s policy decision and the Q4 outlook.
      </p>

      <section aria-labelledby="market-snapshot">
        <p className="research-article__section-number">01 / Market snapshot</p>
        <h2 id="market-snapshot">The repricing is real, not settled</h2>
        <p>
          The immediate reaction was familiar: the dollar firmed, short-dated
          Treasury yields rose, gold fell sharply and rate-sensitive risk assets
          lost some momentum. CME FedWatch pricing reported on 1 September put
          the probability of a 25-basis-point September increase near 66%, up
          from about 35% before the speech. That is meaningful repricing, not a
          policy decision. Warsh did not confirm a September hike; he reopened
          the door to further tightening and left the decision data-dependent.
        </p>
        <p>
          The professional forecast range remains wide. Barclays now expects
          25-basis-point increases in both September and December; Kenanga
          Research instead expects a September hold and places its first rate
          cut in Q2 2027. The shared point is not the number of moves. It is
          that inflation, energy and labour data have become more important to
          the Q4 reaction function than a pre-announced easing path.
        </p>
        <div className="warsh-snapshot" aria-label="Cross-asset market snapshot">
          {snapshotRows.map(([label, value, detail]) => (
            <div key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
              <small>{detail}</small>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="warsh-fed">
        <p className="research-article__section-number">02</p>
        <h2 id="warsh-fed">The Warsh Fed: inflation first, guidance second</h2>
        <p>
          The original speech matters more than the market shorthand. Warsh
          reaffirmed a firm 2% PCE target, described labour markets as stable
          and the economy as resilient, and argued that broad financial
          conditions did not look restrictive. He highlighted rapidly rising
          business investment, especially AI-related capital expenditure, and
          strong S&amp;P 500 profitability. His inflation assessment was less
          forgiving: 12-month PCE inflation stood at 3.7%, the six-month pace at
          4.1%, and 54% of PCE components had risen by more than 3% over the
          previous year.
        </p>
        <p>
          He also called for less routine forward guidance. That does not make
          the Fed mechanically hawkish. It does mean markets must do more of the
          work of interpreting payrolls, inflation, credit conditions and
          geopolitics. A quieter Fed can create a more volatile data calendar:
          without an explicit path to anchor expectations, each release can
          change the perceived reaction function more abruptly.
        </p>
        <div className="research-article__callout">
          <strong>
            The relevant transition is from an easing debate to a tightening
            debate. It is not a declaration that a September hike is certain.
          </strong>
        </div>
      </section>

      <section aria-labelledby="dollar-gold">
        <p className="research-article__section-number">03</p>
        <h2 id="dollar-gold">The dollar leads; gold absorbs the first shock</h2>
        <p>
          DXY traded around 99.62 on 1 September as the repricing and renewed
          Middle East tensions supported the dollar. The constructive case holds
          while September hike odds remain elevated, Treasury yields stay high
          and incoming data support the resilient-growth view. Strong payrolls,
          sticky CPI or PPI, another oil advance and a hawkish September
          projection set would reinforce it. A weak labour print or a soft
          inflation surprise would challenge the narrative quickly.
        </p>
        <p>
          Gold&apos;s move was more direct. Spot gold fell 3% on the Friday reaction
          and was $4,383 per ounce at 6:35 PM Malaysia time on 1 September.
          Higher nominal and
          real yields raise the opportunity cost of a non-yielding asset, while
          a stronger dollar tightens the near-term constraint. This is a
          corrective setup, not evidence that the structural gold thesis has
          ended. Sustained energy inflation, fiscal concern, sovereign-debt
          anxiety or a deterioration in policy credibility can restore defensive
          demand even in a tighter policy environment.
        </p>
      </section>

      <section aria-labelledby="equities">
        <p className="research-article__section-number">04</p>
        <h2 id="equities">Nasdaq has the valuation test; the S&amp;P has the breadth</h2>
        <p>
          The Nasdaq 100 is the cleanest equity expression of the new rate risk.
          Its larger growth and technology weight makes its valuation more
          sensitive to discount rates, funding costs and long-end yields. That
          creates a genuine Q4 contest between AI fundamentals and valuation
          pressure. NVIDIA&apos;s latest results support the former: the company
          reported $96.2 billion in quarterly revenue and forecast roughly 70%
          revenue growth for fiscal 2028. The market does not need to choose
          between those facts. Strong AI demand can coexist with a lower
          multiple if yields keep rising.
        </p>
        <p>
          The S&amp;P 500 is more diversified. Financials, energy and industrials
          can behave differently from long-duration technology, and earnings
          resilience still provides support. Reuters&apos; late-August strategist
          poll put the median year-end target at 7,900, only 2.9% above the
          26 August close. The message is not that Wall Street has turned
          bearish; it is that the remaining upside is more dependent on
          earnings delivery and less forgiving of higher yields, oil or margin
          disappointment.
        </p>
      </section>

      <section aria-labelledby="bitcoin-oil">
        <p className="research-article__section-number">05</p>
        <h2 id="bitcoin-oil">Bitcoin is the liquidity test; oil is the wildcard</h2>
        <p>
          Bitcoin dropped below $78,000 after the Jackson Hole speech and was
          trading around $78,000 at 6:35 PM Malaysia time on 1 September. The
          transmission mechanism
          is straightforward but not absolute: higher expected policy rates can
          lift cash and Treasury yields, firm the dollar and tighten global
          liquidity, raising the hurdle for a high-volatility asset. ETF flows,
          regulation, adoption and supply dynamics still matter; a simple
          &quot;rates up, Bitcoin down&quot; rule does not.
        </p>
        <p>
          The oil channel now deserves equal attention. Brent moved above $91 as
          renewed U.S.-Iran conflict threatened shipping through the Strait of
          Hormuz. A sustained energy shock can create a difficult loop:
          geopolitical escalation raises oil, oil lifts inflation concern, bond
          yields rise, the Fed has less room to ease and the dollar gains.
          Oil alone does not determine policy, but persistence and pass-through
          would make the Fed&apos;s inflation problem harder precisely as Warsh is
          emphasizing credibility.
        </p>
      </section>

      <section aria-labelledby="matrix">
        <p className="research-article__section-number">06 / Aeora matrix</p>
        <h2 id="matrix">The working cross-asset map</h2>
        <p>
          These are conditional working biases for the September close into Q4,
          not price targets or trading instructions. The central variable is
          whether the data validate the market&apos;s hawkish repricing.
        </p>
        <div className="cross-asset-matrix" role="region" aria-label="Aeora Q4 2026 cross-asset matrix" tabIndex={0}>
          <table>
            <thead>
              <tr>
                <th>Asset</th>
                <th>Current bias</th>
                <th>Main driver</th>
                <th>Primary risk</th>
              </tr>
            </thead>
            <tbody>
              {assetRows.map(([asset, bias, driver, risk]) => (
                <tr key={asset}>
                  <th scope="row">{asset}</th>
                  <td>{bias}</td>
                  <td>{driver}</td>
                  <td>{risk}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section aria-labelledby="scenarios">
        <p className="research-article__section-number">07</p>
        <h2 id="scenarios">Three Q4 paths</h2>
        <div className="warsh-scenarios">
          <article>
            <span>A / Hawkish Fed, firm dollar</span>
            <h3>Inflation stays sticky and a hike becomes reality</h3>
            <p>
              Strong employment, firm CPI and elevated oil sustain the September
              repricing, with December also remaining live. The dollar and cash
              yields benefit. Gold faces near-term pressure; the Nasdaq becomes
              more correction-prone; the S&amp;P is likely range-bound to softer;
              and Bitcoin remains vulnerable to liquidity pressure.
            </p>
          </article>
          <article>
            <span>B / One hike, then pause</span>
            <h3>Policy tightens once, then waits for confirmation</h3>
            <p>
              A September increase is followed by stabilising inflation and a
              modest softening in employment. The dollar initially stays firm,
              then settles. Gold can stabilise, earnings regain importance for
              equities, and Bitcoin can consolidate before improving. This is
              the most balanced path for risk assets, not a risk-free one.
            </p>
          </article>
          <article>
            <span>C / Hold and rapid dovish repricing</span>
            <h3>Growth data weakens before the FOMC</h3>
            <p>
              Weak payrolls, softer CPI and growth concern collapse the hike
              premium. The dollar and yields fall; gold, the Nasdaq and Bitcoin
              can initially respond positively to easier liquidity expectations.
              A severe economic deterioration would eventually turn into a
              negative earnings and equity problem rather than a clean risk-on
              outcome.
            </p>
          </article>
        </div>
      </section>

      <section aria-labelledby="calendar">
        <p className="research-article__section-number">08</p>
        <h2 id="calendar">What we are watching</h2>
        <ul className="research-article__checklist">
          <li><strong>4 September:</strong> U.S. Employment Situation for August</li>
          <li><strong>10 September:</strong> U.S. PPI for August</li>
          <li><strong>11 September:</strong> U.S. CPI for August</li>
          <li><strong>15-16 September:</strong> FOMC meeting, projections and Warsh press conference</li>
          <li><strong>27-28 October:</strong> FOMC meeting</li>
          <li><strong>8-9 December:</strong> FOMC meeting and projections</li>
        </ul>
      </section>

      <section aria-labelledby="aeora-conclusion">
        <p className="research-article__section-number">09 / Aeora view</p>
        <h2 id="aeora-conclusion">The regime question now matters more than one meeting</h2>
        <p>
          The most important shift is not simply that Warsh sounded hawkish. It
          is that markets have moved from asking when the Fed can ease to asking
          whether it needs to tighten again. Our working framework is
          constructive USD, near-term corrective gold with its macro-hedge case
          intact, a rate-sensitive Nasdaq supported by AI earnings, a more
          resilient but earnings-dependent S&amp;P 500, and a Bitcoin market
          sensitive to liquidity and dollar strength.
        </p>
        <p>
          The September employment and inflation data can still materially
          change that framework. The 16 September FOMC may therefore become less
          about one 25-basis-point decision and more about whether markets are
          entering a renewed tightening cycle into year-end.
        </p>
      </section>

      <section className="warsh-important-disclaimer" aria-labelledby="warsh-disclaimer">
        <p className="research-article__section-number">Important disclaimer</p>
        <h2 id="warsh-disclaimer">Research, not a recommendation</h2>
        <p>
          This publication is prepared solely for general market research,
          educational and informational purposes by Aeora Research. It does not
          constitute investment advice, financial advice, trading advice, a
          solicitation, an offer to buy or sell any financial instrument, or a
          recommendation to enter any position.
        </p>
        <p>
          The market views and scenarios discussed reflect Aeora Research&apos;s
          interpretation of information available at the time of publication and
          may change without notice. Forward-looking scenarios are inherently
          uncertain and may not occur. Financial markets, including equities,
          commodities, foreign exchange and digital assets, can be volatile and
          involve substantial risk of loss.
        </p>
        <p>
          Readers should independently verify information, conduct their own due
          diligence, assess their financial circumstances and risk tolerance,
          and seek appropriately licensed professional advice where required.
          Aeora Research accepts no responsibility for trading or investment
          decisions made based on this publication.
        </p>
      </section>
    </>
  );
}
