import Link from "next/link";

export const whyMarketsRallyKeyPoints = [
  "Markets price the difference between new information and what investors already expected.",
  "Resilient earnings and continued AI investment can support equities even when macro risks remain.",
  "Liquidity, positioning and the cost of hedging can amplify a move in either direction.",
  "A rally is not proof that risk has disappeared; it is a live reassessment of its probability and impact."
] as const;

export const whyMarketsRallySources = [
  {
    label: "Associated Press: U.S. stocks hit records as profits continue to build",
    href: "https://apnews.com/article/fbbe6128d618509e33d45a493c2615b1"
  },
  {
    label: "Associated Press: Easing oil prices calm inflation concerns",
    href: "https://apnews.com/article/d19a8f9a77b6fceca41da3e4b6bf17aa"
  },
  {
    label: "Federal Reserve: July 2026 Monetary Policy Report summary",
    href: "https://www.federalreserve.gov/monetarypolicy/2026-07-mpr-summary.htm"
  },
  {
    label: "Associated Press: Stocks pull back modestly after a record close",
    href: "https://apnews.com/article/cb27a1f9f4298b2a4dd595169bb17d16"
  }
] as const;

export function WhyMarketsRallyDespiteBadNewsArticle() {
  return (
    <>
      <p className="research-article__lede">
        Geopolitical tension, still-restrictive rates and expensive equity
        valuations can coexist with a market advance. That feels counter-
        intuitive only when a headline is treated as the whole market story.
      </p>

      <section aria-labelledby="expectations-not-headlines">
        <p className="research-article__section-number">01</p>
        <h2 id="expectations-not-headlines">
          Markets trade expectations, not headlines
        </h2>
        <p>
          Prices are forward-looking. The relevant question is not whether a
          development is good or bad in isolation; it is whether it is better
          or worse than investors had already allowed for. A difficult event
          can be absorbed when its expected economic or earnings impact does
          not deteriorate further.
        </p>
        <p>
          That is why markets can rise through uncertainty. If the feared
          outcome becomes less severe, less likely or more manageable than
          expected, investors may need to reprice risk upward even while the
          underlying risk remains real.
        </p>

        <div className="expectation-flow" aria-label="How expectations affect market pricing">
          <div>
            <span>01</span>
            <strong>Headline</strong>
            <p>New event or data point</p>
          </div>
          <i aria-hidden="true" />
          <div>
            <span>02</span>
            <strong>Expectation</strong>
            <p>What was already priced in?</p>
          </div>
          <i aria-hidden="true" />
          <div>
            <span>03</span>
            <strong>Revision</strong>
            <p>Probability or impact changes</p>
          </div>
          <i aria-hidden="true" />
          <div>
            <span>04</span>
            <strong>Price</strong>
            <p>Positioning adjusts</p>
          </div>
        </div>
      </section>

      <section aria-labelledby="earnings-support">
        <p className="research-article__section-number">02</p>
        <h2 id="earnings-support">Earnings can outweigh macro fear</h2>
        <p>
          Equity prices ultimately depend on the cash flows investors expect
          companies to generate. Recent market strength has been supported by
          an earnings backdrop that has remained more resilient than many
          investors feared, particularly among companies tied to investment in
          AI infrastructure and semiconductors.
        </p>
        <p>
          That support is not a blank cheque for every company or valuation.
          It simply explains why a broad negative narrative can fail to push
          the index lower when the earnings picture is holding up better than
          anticipated.
        </p>
      </section>

      <section aria-labelledby="positioning-and-liquidity">
        <p className="research-article__section-number">03</p>
        <h2 id="positioning-and-liquidity">Liquidity and positioning matter</h2>
        <p>
          Markets are also shaped by who already owns risk, who is hedged and
          who has to act next. Cautious positioning can leave room for a rally
          when bearish hedges are reduced or short positions are covered.
          Softer oil prices and a less acute inflation impulse can also reduce
          pressure on rate expectations, helping risk assets at the margin.
        </p>
        <p>
          This is not a mechanical formula. Thin liquidity, concentrated
          leadership and crowded trades can reverse quickly. They are reasons
          to study market structure, not reasons to chase a move.
        </p>
      </section>

      <section aria-labelledby="risk-remains">
        <p className="research-article__section-number">04</p>
        <h2 id="risk-remains">A rally does not mean risk disappeared</h2>
        <p>
          Interest-rate policy remains restrictive by recent standards, and
          earnings assumptions, geopolitics and inflation can all change. A
          higher market price is a current assessment, not a guarantee about
          the next one.
        </p>
        <div className="research-article__callout">
          <strong>
            The market is not ignoring reality. It is continuously repricing
            the next version of reality.
          </strong>
          <p>
            For participants, the practical task is to separate a headline
            from the change it creates in earnings, rates, liquidity and risk
            appetite. That is the discipline behind Aeora&apos;s approach to
            <Link href="/#focus"> market intelligence</Link> and structured
            decision-making.
          </p>
        </div>
        <p>
          For another example of how contract mechanics and execution shape a
          market view, read our note on
          <Link href="/research/cme-single-stock-futures-explained">
            {" "}CME Single Stock Futures
          </Link>
          .
        </p>
      </section>
    </>
  );
}
