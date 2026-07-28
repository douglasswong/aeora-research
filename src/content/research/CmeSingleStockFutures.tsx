export const cmeSingleStockFuturesKeyPoints = [
  "The contract follows one US-listed company rather than a broad stock index.",
  "A Standard contract represents 100 shares; a Micro contract represents 10.",
  "Margin reduces the cash required upfront, but it does not reduce the contract's full market risk.",
  "Liquidity, contract expiry and execution quality matter as much as the market view."
] as const;

export const cmeSingleStockFuturesSources = [
  {
    label: "CME Group: Single Stock Futures product page",
    href: "https://www.cmegroup.com/markets/equities/single-stock-futures.html"
  },
  {
    label: "CME Group: Single Stock Futures FAQ",
    href: "https://www.cmegroup.com/articles/faqs/faq-single-stock-futures.html"
  },
  {
    label:
      "CME Group: Capital and operational efficiencies with Single Stock Futures",
    href: "https://www.cmegroup.com/articles/2026/the-power-of-capital-and-operational-efficiencies-with-single-stock-futures.html"
  },
  {
    label: "ChartsDWorks: Detailed CME Single Stock Futures explainer",
    href: "https://chartsdworks.com/cme-single-stock-futures-explained/"
  }
] as const;

export function CmeSingleStockFuturesArticle() {
  return (
    <>
      <p className="research-article__lede">
        CME Single Stock Futures provide futures exposure to the price of one
        company, such as Nvidia, Apple or Microsoft. They can be useful, but
        they should not be confused with owning the company&apos;s shares.
      </p>

      <section aria-labelledby="what-are-single-stock-futures">
        <p className="research-article__section-number">01</p>
        <h2 id="what-are-single-stock-futures">
          What is a Single Stock Future?
        </h2>
        <p>
          A Single Stock Future, often shortened to SSF, is a standardised
          futures contract linked to one listed company. Buying the contract
          creates long exposure. Selling it creates short exposure.
        </p>
        <p>
          You do not receive the physical shares, voting rights or direct
          dividend payments. CME contracts are financially settled in US
          dollars, and they expire on a scheduled quarterly date.
        </p>
        <p>
          The futures price may also differ slightly from the cash-share price.
          Financing costs, expected dividends and the time remaining before
          expiry all influence that difference, known as the futures basis.
        </p>
      </section>

      <section aria-labelledby="contract-sizes">
        <p className="research-article__section-number">02</p>
        <h2 id="contract-sizes">Standard and Micro contract sizes</h2>
        <p>
          CME&apos;s July 2026 launch lineup lists 55 Standard contracts and 22
          Micro contracts. The smaller Micro format can make position sizing
          more precise, but smaller does not mean risk-free.
        </p>

        <div className="research-table-wrap">
          <table>
            <caption>Key CME Single Stock Futures specifications</caption>
            <thead>
              <tr>
                <th scope="col">Feature</th>
                <th scope="col">Standard</th>
                <th scope="col">Micro</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Contract exposure</th>
                <td>100 shares</td>
                <td>10 shares</td>
              </tr>
              <tr>
                <th scope="row">One-cent move</th>
                <td>$1.00 per contract</td>
                <td>$0.10 per contract</td>
              </tr>
              <tr>
                <th scope="row">Settlement</th>
                <td colSpan={2}>Financial settlement in US dollars</td>
              </tr>
              <tr>
                <th scope="row">Listed expiries</th>
                <td colSpan={2}>
                  March, June, September and December quarterlies
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section aria-labelledby="simple-example">
        <p className="research-article__section-number">03</p>
        <h2 id="simple-example">A simple $200 stock example</h2>
        <p>
          Assume a futures contract is priced at $200. This is an educational
          example, not a current market price or trading recommendation.
        </p>
        <ul className="research-article__calculation">
          <li>
            <span>Standard</span>
            <strong>100 x $200 = $20,000</strong>
            <p>A $5 price move changes the position by about $500.</p>
          </li>
          <li>
            <span>Micro</span>
            <strong>10 x $200 = $2,000</strong>
            <p>A $5 price move changes the position by about $50.</p>
          </li>
        </ul>

        <div className="research-article__callout">
          <strong>Margin is collateral, not a maximum loss.</strong>
          <p>
            CME states a 15% regulatory minimum margin for an outright Single
            Stock Futures position. Brokers can require more, and gains or
            losses still follow the full notional exposure.
          </p>
        </div>
      </section>

      <section aria-labelledby="why-use-them">
        <p className="research-article__section-number">04</p>
        <h2 id="why-use-them">Why might market participants use them?</h2>
        <p>
          The product can create targeted long or short exposure without buying
          or borrowing physical shares. It can also be used to hedge a
          particular company or to build relative-value positions between two
          stocks.
        </p>
        <p>
          Nearly round-the-clock trading provides a wider risk-management
          window than the regular US cash session. It does not guarantee deep
          liquidity throughout the day. Bid-ask spreads and order-book depth
          can be materially weaker outside active hours.
        </p>
      </section>

      <section aria-labelledby="beginner-checklist">
        <p className="research-article__section-number">05</p>
        <h2 id="beginner-checklist">A beginner&apos;s pre-trade checklist</h2>
        <ul className="research-article__checklist">
          <li>Confirm whether the contract is Standard or Micro.</li>
          <li>Translate one price move into an actual dollar gain or loss.</li>
          <li>Check the expiry month and understand when a position must roll.</li>
          <li>Review live volume, open interest, spread and order-book depth.</li>
          <li>Confirm broker access, margin, commissions and market-data fees.</li>
          <li>
            Account for US-dollar exposure, regulation and tax treatment in
            your own jurisdiction.
          </li>
        </ul>
      </section>

      <section aria-labelledby="risks">
        <p className="research-article__section-number">06</p>
        <h2 id="risks">The risks that matter most</h2>
        <p>
          Single Stock Futures combine company-specific price risk with
          leverage, margin calls, expiry and basis risk. Overnight gaps,
          corporate actions, thin liquidity and slippage can produce outcomes
          that differ from a simple chart-based expectation.
        </p>
        <p>
          Beginners should understand the contract multiplier and rehearse
          realistic loss scenarios before considering live capital. A smaller
          upfront margin requirement is not evidence that the position itself
          is small.
        </p>
        <blockquote>
          The contract creates access. Liquidity, execution and risk control
          determine whether that access is usable.
        </blockquote>
        <p className="research-article__trademark-note">
          CME and CME Group are referenced solely to identify the product
          provider. Aeora Research is independent and is not affiliated with or
          endorsed by CME Group.
        </p>
      </section>
    </>
  );
}
