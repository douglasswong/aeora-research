import Image from "next/image";

const CME_GROUP_MARKETS = [
  {
    name: "CBOT",
    logo: "/trading-access/cbot.png",
    width: 636,
    height: 195
  },
  {
    name: "COMEX",
    logo: "/trading-access/comex.png",
    width: 504,
    height: 128
  },
  {
    name: "NYMEX",
    logo: "/trading-access/nymex.png",
    width: 510,
    height: 112
  }
] as const;

export function TradingAccessSection() {
  return (
    <section
      id="trading-access"
      className="trading-access section"
      aria-labelledby="trading-access-title"
    >
      <div className="section__inner trading-access__inner">
        <div className="trading-access__heading">
          <p className="section-kicker">Direct market access</p>
          <h2 id="trading-access-title">
            <span>Our trading</span>
            <span>access</span>
          </h2>
        </div>

        <div className="trading-access__markets">
          <article className="trading-access__market trading-access__market--bursa">
            <div className="trading-access__index" aria-hidden="true">
              <span>01</span>
              <span>Malaysia</span>
            </div>
            <div className="trading-access__content">
              <h3 className="sr-only">Bursa Malaysia</h3>
              <Image
                className="trading-access__brand"
                src="/trading-access/bursa-malaysia.png"
                alt="Bursa Malaysia"
                width={738}
                height={218}
                sizes="(max-width: 720px) 62vw, 28vw"
              />
            </div>
          </article>

          <article className="trading-access__market trading-access__market--cme">
            <div className="trading-access__index" aria-hidden="true">
              <span>02</span>
              <span>Global futures</span>
            </div>
            <div className="trading-access__content">
              <h3 className="sr-only">CME Group</h3>
              <Image
                className="trading-access__brand"
                src="/trading-access/cme-group.png"
                alt="CME Group"
                width={738}
                height={146}
                sizes="(max-width: 720px) 62vw, 32vw"
              />
              <div className="trading-access__cme-markets">
                <p>CME Group markets</p>
                <ul aria-label="CME Group markets">
                  {CME_GROUP_MARKETS.map((market) => (
                    <li key={market.name}>
                      <Image
                        src={market.logo}
                        alt={`${market.name} logo`}
                        width={market.width}
                        height={market.height}
                        sizes="(max-width: 720px) 20vw, 10vw"
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
