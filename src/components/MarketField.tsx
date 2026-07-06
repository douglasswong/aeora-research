const DEPTH_ROWS = [
  ["48.2", "51.8", "03"],
  ["42.7", "57.3", "08"],
  ["56.4", "43.6", "13"],
  ["39.1", "60.9", "21"],
  ["52.8", "47.2", "34"]
] as const;

const FIELD_TICKS = Array.from({ length: 18 }, (_, index) => index);

export function MarketField() {
  return (
    <div className="market-field" aria-hidden="true">
      <div className="market-field__grid" />
      <div className="market-field__axis market-field__axis--x" />
      <div className="market-field__axis market-field__axis--y" />
      <div className="market-field__trace market-field__trace--one" />
      <div className="market-field__trace market-field__trace--two" />
      <div className="market-field__depth">
        {DEPTH_ROWS.map(([bid, ask, level]) => (
          <div className="market-field__row" key={level}>
            <span>{bid}</span>
            <span>{level}</span>
            <span>{ask}</span>
          </div>
        ))}
      </div>
      <div className="market-field__ticks">
        {FIELD_TICKS.map((tick) => (
          <span key={tick} />
        ))}
      </div>
      <div className="market-field__scan" />
    </div>
  );
}
