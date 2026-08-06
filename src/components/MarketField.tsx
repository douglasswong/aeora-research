const FIBONACCI_LEVELS = [
  ["38.2", "0.382"],
  ["50", "0.500"],
  ["61.8", "0.618"],
  ["78.6", "0.786"],
  ["100", "1.000"]
] as const;

const CANDLES = Array.from({ length: 9 }, (_, index) => index);

export function MarketField() {
  return (
    <div className="market-field" aria-hidden="true">
      <div className="market-field__grid" />
      <div className="market-field__axis market-field__axis--x" />
      <div className="market-field__axis market-field__axis--y" />
      <div className="market-field__trace market-field__trace--one" />
      <div className="market-field__trace market-field__trace--two" />
      <div className="market-field__candles">
        {CANDLES.map((candle) => (
          <span className="market-field__candle" key={candle} />
        ))}
      </div>
      <div className="market-field__fib">
        <p>FIB / RETRACEMENT</p>
        {FIBONACCI_LEVELS.map(([level, decimal]) => (
          <div className="market-field__fib-row" key={level}>
            <span className="market-field__fib-level">{level}</span>
            <i />
            <span className="market-field__fib-decimal">{decimal}</span>
          </div>
        ))}
      </div>
      <div className="market-field__scan" />
    </div>
  );
}
