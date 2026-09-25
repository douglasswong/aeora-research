"use client";

import Script from "next/script";
import { createElement, useEffect, useState } from "react";

const TICKER_SYMBOLS =
  "FOREXCOM:SPXUSD,FOREXCOM:NSXUSD,FOREXCOM:DJI,FX:EURUSD,BITSTAMP:BTCUSD,CMCMARKETS:GOLD,BLACKBULL:WTI,FX_IDC:USDMYR";

export function TradingViewTickerTape() {
  const [shouldRenderTicker, setShouldRenderTicker] = useState(false);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 721px)");
    const updateTickerVisibility = () => setShouldRenderTicker(desktopQuery.matches);

    updateTickerVisibility();
    desktopQuery.addEventListener("change", updateTickerVisibility);

    return () => desktopQuery.removeEventListener("change", updateTickerVisibility);
  }, []);

  if (!shouldRenderTicker) {
    return null;
  }

  return (
    <section className="market-ticker" aria-label="Market quotes">
      <div className="market-ticker__widget">
        <Script
          src="https://widgets.tradingview-widget.com/w/en/tv-ticker-tape.js"
          strategy="afterInteractive"
          type="module"
        />
        {createElement("tv-ticker-tape", {
          symbols: TICKER_SYMBOLS,
          "hide-chart": "",
          "line-chart-type": "Line",
          "item-size": "compact"
        })}
      </div>
    </section>
  );
}
