import Link from "next/link";

export const nfpGoldLiquidityShockKeyPoints = [
  "The NFP surprise mattered because it changed rate expectations, not because one payroll number mechanically determines gold.",
  "A fast move can reflect thinner executable depth as well as aggressive selling: few buyers at the old price can matter as much as many sellers.",
  "For CFD traders, direction risk and execution risk are separate. Spread, slippage and position size can turn a correct idea into a poor trade.",
  "Professional event preparation centres on scenario planning, exposure and liquidity conditions before the release, not on predicting every print."
] as const;

export const nfpGoldLiquidityShockSources = [
  {
    label: "U.S. Bureau of Labor Statistics: The Employment Situation, August 2026",
    href: "https://www.bls.gov/news.release/empsit.htm"
  },
  {
    label: "Reuters: Gold slides after robust U.S. payrolls boost rate-hike bets",
    href: "https://www.marketscreener.com/news/gold-slides-over-2-after-robust-us-payrolls-boosts-rate-hike-bets-ce785bdad08bf624"
  },
  {
    label: "Associated Press: Strong jobs report raises prospects of a September rate hike",
    href: "https://apnews.com/article/stocks-markets-oil-trump-iran-war-1af16359af43eb8abc66445465f633c8"
  },
  {
    label: "CME Group: Reassessing liquidity beyond order-book depth",
    href: "https://www.cmegroup.com/articles/2025/reassessing-liquidity-beyond-order-book-depth.html"
  },
  {
    label: "CME Group: Understanding the CME Liquidity Tool methodology",
    href: "https://www.cmegroup.com/education/articles-and-reports/understanding-the-cme-liquidity-tool-methodology"
  },
  {
    label: "U.S. Treasury: Daily Treasury par yield curve rates",
    href: "https://home.treasury.gov/resource-center/data-chart-center/interest-rates/TextView?field_tdr_date_value_month=0&type=daily_treasury_yield_curve"
  }
] as const;

const liquiditySequence = [
  "NFP surprise",
  "Fed repricing",
  "Yields and USD reprice",
  "Algorithmic and macro execution",
  "Liquidity withdrawal",
  "Stop and order cascade",
  "New price discovery"
] as const;

export function NfpGoldLiquidityShockArticle() {
  return (
    <>
      <p className="research-article__lede">
        At 8:30 a.m. New York time on Friday, 4 September, the U.S. employment
        report reached the market. Gold did not simply &quot;fall on good data.&quot; It
        entered a rapid repricing process, where changing rate expectations,
        electronic execution and a thinner pool of immediately available
        liquidity all met at once.
      </p>

      <section aria-labelledby="nfp-change">
        <p className="research-article__section-number">01 / Macro surprise</p>
        <h2 id="nfp-change">What Did the NFP Report Actually Change?</h2>
        <p>
          The Bureau of Labor Statistics reported that nonfarm payrolls rose by
          162,000 in August. Unemployment held at 4.1%, while average hourly
          earnings rose 0.3% on the month and 3.1% from a year earlier. The
          payroll result was materially above the roughly 60,000 consensus range
          used by major market surveys. The June and July revisions also added a
          combined 55,000 jobs.
        </p>
        <p>
          Markets trade the gap between the data and what was already priced.
          A stronger labour signal made a near-term rate increase look more
          plausible, which supported Treasury yields and the U.S. dollar. For a
          non-yielding asset such as gold, that is an immediate headwind. The
          rate move was still not predetermined: the next inflation data and
          Federal Reserve meeting remained part of the same calculation.
        </p>
      </section>

      <section aria-labelledby="nfp-seconds">
        <p className="research-article__section-number">02 / Market mechanics</p>
        <h2 id="nfp-seconds">How Can Gold Move $50-$90 in Seconds?</h2>
        <p>
          Scheduled data releases are different from ordinary market minutes.
          Before the number, liquidity providers know an information shock is
          approaching. They may quote less size, widen prices or reduce the risk
          they are willing to hold. The market can look orderly immediately
          beforehand, while the amount of executable liquidity at the next few
          prices changes very quickly.
        </p>
        <p>
          Once the data arrives, systematic models compare payrolls, wages,
          unemployment and revisions with consensus in milliseconds. Macro funds,
          hedgers and discretionary participants then reprice alongside them.
          If sell orders meet less bid depth than expected, the market has to
          search lower for buyers. That is a liquidity air pocket: not a market
          with no liquidity, but a temporary deterioration in the depth willing
          to transact at the old price.
        </p>
        <div className="nfp-flow" aria-label="How an NFP surprise can create a gold liquidity shock">
          <p>Inside an NFP liquidity shock</p>
          <ol>
            {liquiditySequence.map((step, index) => (
              <li key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{step}</strong>
              </li>
            ))}
          </ol>
        </div>
        <p>
          Reuters reported that spot gold fell more than 2% after the release,
          reaching an intraday low near $4,364.99. That verified broader move is
          separate from any particular CFD screen: broker feeds, point
          conventions and first-seconds tick paths can differ.
        </p>
      </section>

      <section aria-labelledby="nfp-cfd-risk">
        <p className="research-article__section-number">03 / Execution risk</p>
        <h2 id="nfp-cfd-risk">Why Retail CFD Traders Often Get Burned</h2>
        <p>
          A trader can have the right directional view and still get a poor
          result. High leverage, an oversized position and a market order placed
          into the release make execution part of the trade thesis. CFD prices
          reference underlying markets but are not a single central order book;
          spreads, latency and the execution model vary by provider.
        </p>
        <p>
          A normal stop loss is an instruction to execute after a trigger, not
          necessarily a promise of the exact trigger price. In a fast market it
          can fill against the next available liquidity, producing negative
          slippage. Spreads can also widen as liquidity providers price greater
          uncertainty. These mechanics do not prove a broker has targeted a
          stop; they are reasons to understand an account&apos;s execution terms
          before using leverage around scheduled news.
        </p>
      </section>

      <section aria-labelledby="nfp-prop-desk">
        <p className="research-article__section-number">04 / Professional process</p>
        <h2 id="nfp-prop-desk">How a Professional Prop Desk Thinks</h2>
        <p>
          A professional desk does not need to predict every NFP. Sometimes the
          edge is simply refusing to pay for bad liquidity. Preparation can
          include pre-event scenarios, lower gross exposure, event-specific
          limits, flattening vulnerable positions or waiting for depth and
          spreads to normalise after the first reaction.
        </p>
        <p>
          Retail traders often begin with, &quot;Will gold go up or down?&quot; A desk may
          first ask, &quot;If we are right, can we execute efficiently? If we are
          wrong, how far can the market gap before we exit?&quot; Direction risk is
          not execution risk. The same distinction explains why markets can
          react differently to a similar headline when positioning and
          expectations have changed. Aeora covered that framework in
          <Link href="/research/why-markets-rally-despite-bad-news">
            {" Why Markets Rally Despite Bad News"}
          </Link>.
        </p>
      </section>

      <section aria-labelledby="nfp-fundamentals">
        <p className="research-article__section-number">05 / Looking ahead</p>
        <h2 id="nfp-fundamentals">The Bigger Fundamental Picture</h2>
        <p>
          Friday&apos;s move was a repricing of expectations, not a permanent verdict
          on gold. The market will keep weighing Federal Reserve policy, real
          and nominal yields, the dollar, inflation, labour-market strength,
          geopolitical risk and investment flows. A firm jobs report plus sticky
          inflation could reinforce higher-rate expectations and remain a
          headwind. Softer inflation could reverse part of that repricing.
        </p>
        <p>
          The useful question is therefore not whether one release was &quot;good&quot;
          or &quot;bad&quot; for gold. It is what changed relative to expectation, how
          broad the confirmation is across rates and the dollar, and whether
          liquidity has become orderly enough for an execution decision.
        </p>
      </section>

      <section aria-labelledby="nfp-faq">
        <p className="research-article__section-number">06 / Reader questions</p>
        <h2 id="nfp-faq">Frequently Asked Questions</h2>
        <div className="nfp-faq">
          <article>
            <h3>Why does gold move so much during NFP?</h3>
            <p>
              NFP can change expectations for Federal Reserve policy, Treasury
              yields and the U.S. dollar at the same moment. Those inputs matter
              for gold, while scheduled-news execution can temporarily raise
              volatility and lower immediately available depth.
            </p>
          </article>
          <article>
            <h3>Why does the XAUUSD spread widen during NFP?</h3>
            <p>
              Liquidity providers face more uncertainty when a material surprise
              can reprice the market in milliseconds. Wider spreads can reflect
              that risk and the cost of sourcing liquidity. The extent and rules
              vary between CFD providers and account types.
            </p>
          </article>
          <article>
            <h3>Can a stop loss slip during NFP?</h3>
            <p>
              Yes. Once triggered, a standard stop generally executes against
              available prices. During a rapid move, the next executable price
              may be worse than the trigger. Traders should distinguish a
              standard stop from any guaranteed-stop feature their provider may
              offer.
            </p>
          </article>
          <article>
            <h3>How do professional or prop traders manage NFP risk?</h3>
            <p>
              There is no universal approach. Common controls include reducing
              leverage or exposure, setting event-specific limits, defining
              scenarios before the release and waiting until liquidity conditions
              are clearer. The focus is managing both direction and execution.
            </p>
          </article>
        </div>
      </section>

      <section className="nfp-research-take" aria-labelledby="nfp-take">
        <p className="research-article__section-number">Aeora Research Take</p>
        <h2 id="nfp-take">The costly seconds are often the ones when everyone wants liquidity.</h2>
        <p>
          Friday&apos;s gold move was a real-time transmission of rate expectations
          through yields, the dollar and a rapidly changing liquidity environment.
          For retail traders, the lesson is not that NFP should never be traded.
          It is that event risk has two variables: market direction and execution
          risk. Professional process manages both.
        </p>
        <p className="nfp-research-take__disclaimer">
          This research is provided for educational and informational purposes
          only and does not constitute investment, financial or trading advice.
          Futures, CFDs and derivatives involve substantial risk. Market views
          may change as new information becomes available.
        </p>
      </section>
    </>
  );
}
