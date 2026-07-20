const LADDER_ROWS = [
  { ask: "146", bid: "118", price: "2,388.6" },
  { ask: "128", bid: "094", price: "2,388.4" },
  { ask: "176", bid: "121", price: "2,388.2" },
  { ask: "112", bid: "153", price: "2,388.0" },
  { ask: "091", bid: "207", price: "2,387.8" }
];

export function MarketContextField() {
  return (
    <div className="market-context-field" aria-hidden="true">
      <div className="market-context-field__grid" />
      <div className="market-context-field__header">
        <span>Market context / study 01</span>
        <span>XAU/USD</span>
      </div>
      <div className="market-context-field__candles">
        <span className="market-context-field__candle market-context-field__candle--one">
          <span />
        </span>
        <span className="market-context-field__candle market-context-field__candle--two">
          <span />
        </span>
        <span className="market-context-field__candle market-context-field__candle--three">
          <span />
        </span>
        <span className="market-context-field__candle market-context-field__candle--four">
          <span />
        </span>
        <span className="market-context-field__candle market-context-field__candle--five">
          <span />
        </span>
        <span className="market-context-field__trace" />
        <span className="market-context-field__cursor" />
      </div>
      <div className="market-context-field__ladder">
        <div className="market-context-field__ladder-head">
          <span>Bid</span>
          <span>Price ladder</span>
          <span>Ask</span>
        </div>
        {LADDER_ROWS.map((row, index) => (
          <div className="market-context-field__ladder-row" key={row.price}>
            <span className={`market-context-field__bid market-context-field__bid--${index + 1}`}>
              {row.bid}
            </span>
            <span>{row.price}</span>
            <span className={`market-context-field__ask market-context-field__ask--${index + 1}`}>
              {row.ask}
            </span>
          </div>
        ))}
      </div>
      <span className="market-context-field__formula">dP / dt = f(L, V, R)</span>
      <span className="market-context-field__flow market-context-field__flow--one" />
      <span className="market-context-field__flow market-context-field__flow--two" />
      <span className="market-context-field__reading market-context-field__reading--one">LQ 02.84</span>
      <span className="market-context-field__reading market-context-field__reading--two">MC 04.17</span>
    </div>
  );
}
