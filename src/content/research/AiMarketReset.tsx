import Link from "next/link";

export const aiMarketResetKeyPoints = [
  "The 20 November US session was a sharp risk-off move: the S&P 500 fell 3.70%, while the supplied NAS100 platform reference tested 24,895.1 and closed at 25,205.8. That is meaningful stress, but it does not independently prove the viral $6 trillion market-cap estimate.",
  "Alphabet reported $51.4 billion of third-quarter capital expenditure and Meta $34.91 billion. Both reported negative quarterly free cash flow, which makes the cash-conversion question visible without determining the eventual return on AI investment.",
  "NVIDIA's reported $107.6 billion of Data Center revenue, up 110% year on year, confirms intense infrastructure demand. Supplier revenue is not the same thing as an attractive return on capital for every buyer.",
  "The Federal Reserve held its target range at 3.75% to 4.00% in October while describing inflation as elevated. A higher discount-rate environment can compress long-duration equity valuations even when earnings are still growing.",
  "20 November was the standard monthly US equity and index-options expiration date. It can concentrate hedging and roll flow, but the calendar alone cannot prove how much it contributed to the selloff."
] as const;

export const aiMarketResetSources = [
  {
    label:
      "Reuters via MarketScreener: Wall Street ends sharply lower on AI selloff, 20 November 2026",
    href: "https://ca.marketscreener.com/news/wall-st-ends-sharply-lower-on-ai-selloff-s-p-500-dow-in-correction-ce785ed3dd80f527"
  },
  {
    label: "Alphabet: Third Quarter 2026 Results, 28 October 2026",
    href: "https://abc.xyz/investor/news/news-details/2026/Alphabet-Announces-Third-Quarter-2026-Results-2026-FCcqxfIfmh/default.aspx"
  },
  {
    label: "Meta: Third Quarter 2026 Results, 29 October 2026",
    href: "https://investor.atmeta.com/investor-news/press-release-details/2026/Meta-Reports-Third-Quarter-2026-Results/default.aspx"
  },
  {
    label: "NVIDIA: Third Quarter Fiscal 2027 Financial Results, 17 November 2026",
    href: "https://investor.nvidia.com/news/press-release-details/2026/NVIDIA-Announces-Financial-Results-for-Third-Quarter-Fiscal-2027/default.aspx"
  },
  {
    label: "Federal Reserve: FOMC statement, 28 October 2026",
    href: "https://www.federalreserve.gov/monetarypolicy/files/monetary20261028a1.pdf"
  },
  {
    label: "MarketWatch: Options Expiration Calendar, November 2026",
    href: "https://www.marketwatch.com/tools/options-expiration-calendar"
  },
  {
    label: "SEC: Anthropic, PBC issuer free writing prospectus, 18 November 2026",
    href: "https://www.sec.gov/Archives/edgar/data/2130357/000162828026074937/anthropicpbc-fwppricing.htm"
  }
] as const;

const capexData = [
  {
    company: "Alphabet",
    mark: "G",
    markTone: "alphabet",
    capex: "$51.4B",
    capexLabel: "Q3 2026 capex",
    freeCashFlow: "-$9.1B",
    freeCashFlowLabel: "Q3 free cash flow",
    width: "100%"
  },
  {
    company: "Meta",
    mark: "M",
    markTone: "meta",
    capex: "$34.91B",
    capexLabel: "Q3 2026 capex",
    freeCashFlow: "-$2.12B",
    freeCashFlowLabel: "Q3 free cash flow",
    width: "68%"
  }
] as const;

function MarketResetSnapshot() {
  return (
    <ul className="research-article__calculation ai-market-snapshot" aria-label="Dated market and policy snapshot">
      <li>
        <span>US close / 20 Nov</span>
        <strong>S&amp;P 500 -3.70%</strong>
        <p>Closed at 6,910.42 in the reported risk-off session.</p>
      </li>
      <li>
        <span>NAS100 reference / 20 Nov</span>
        <strong>24,895.1 to 25,205.8</strong>
        <p>Intraday low and closing reference from the supplied NAS100 platform feed.</p>
      </li>
      <li>
        <span>Fed policy / 28 Oct</span>
        <strong>3.75% to 4.00%</strong>
        <p>Target range held; the statement still described inflation as elevated.</p>
      </li>
      <li>
        <span>NVIDIA / 17 Nov</span>
        <strong>$107.6B</strong>
        <p>Reported Data Center revenue, up 110% year on year.</p>
      </li>
    </ul>
  );
}

function CapexCashFlowFigure() {
  return (
    <figure className="ai-capex-figure">
      <div className="ai-capex-figure__header">
        <div>
          <span>Original source-dated comparison</span>
          <strong>Investment is visible. The return test is still ahead.</strong>
        </div>
        <p>Selected company-reported Q3 2026 figures. This is not a sector total.</p>
      </div>
      <div
        className="ai-capex-figure__plot"
        role="img"
        aria-label="Alphabet reported 51.4 billion dollars of third-quarter capital expenditure and minus 9.1 billion dollars of free cash flow. Meta reported 34.91 billion dollars of third-quarter capital expenditure and minus 2.12 billion dollars of free cash flow."
      >
        {capexData.map((company) => (
          <article key={company.company}>
            <div className="ai-capex-figure__company">
              <div className="ai-capex-figure__company-name">
                <span
                  className={`ai-capex-figure__company-mark ai-capex-figure__company-mark--${company.markTone}`}
                  aria-hidden="true"
                >
                  {company.mark}
                </span>
                <span>{company.company}</span>
              </div>
              <strong>{company.capex}</strong>
              <small>{company.capexLabel}</small>
            </div>
            <div className="ai-capex-figure__bar-track" aria-hidden="true">
              <span style={{ width: company.width }} />
            </div>
            <div className="ai-capex-figure__cash-flow">
              <span>{company.freeCashFlowLabel}</span>
              <strong>{company.freeCashFlow}</strong>
            </div>
          </article>
        ))}
      </div>
      <div className="ai-capex-figure__notes">
        <p>
          <strong>Read carefully:</strong> free cash flow captures more than AI
          spend, including working-capital timing and each company&apos;s reported
          definition. A negative quarter does not settle a multi-year return on
          invested capital.
        </p>
        <p>
          <strong>Why it matters:</strong> a higher capex plan can be rational
          when demand and monetisation compound. It becomes a valuation problem
          when revenue, margins or cash conversion fail to support that plan.
        </p>
      </div>
      <figcaption>
        Sources: Alphabet and Meta third-quarter 2026 results. Bar lengths compare
        the two disclosed capex values only; they are not a market-share or
        performance ranking.
      </figcaption>
    </figure>
  );
}

function ScenarioGrid() {
  return (
    <section className="ai-market-scenarios" aria-labelledby="ai-market-scenarios-title">
      <p className="research-article__section-number">04 / Scenario discipline</p>
      <h2 id="ai-market-scenarios-title">Three paths to monitor, without a forced forecast</h2>
      <div>
        <article className="ai-market-scenarios__item ai-market-scenarios__item--reset">
          <span>01</span>
          <h3>Healthy market reset</h3>
          <p>Follow-through would require resilient earnings, stabilising valuation multiples and evidence that cash generation can absorb investment. Broadening participation would strengthen the case.</p>
        </article>
        <article className="ai-market-scenarios__item ai-market-scenarios__item--wait">
          <span>02</span>
          <h3>Extended consolidation</h3>
          <p>Capex stays high, but monetisation takes longer to show in cash flow. Multiples remain constrained while the market distinguishes infrastructure demand from durable customer economics.</p>
        </article>
        <article className="ai-market-scenarios__item ai-market-scenarios__item--risk">
          <span>03</span>
          <h3>Deeper risk repricing</h3>
          <p>A further adjustment would need more than volatile headlines: weaker earnings revisions, persistent financing pressure, a narrower market or evidence that spending plans are outrunning commercial returns.</p>
        </article>
      </div>
    </section>
  );
}

export function AiMarketResetArticle() {
  return (
    <>
      <p className="research-article__lede">
        A violent technology-led selloff can make every AI investment look like a
        bubble in reverse. That is exactly when the questions need to be separated.
        Price action tells us how aggressively investors are repricing risk;
        company disclosures tell us how much capital is actually being committed;
        future cash returns remain the unresolved bridge between the two.
      </p>

      <MarketResetSnapshot />

      <section aria-labelledby="ai-market-correction">
        <p className="research-article__section-number">01 / The correction</p>
        <h2 id="ai-market-correction">A sharp selloff is real. The viral aggregate is not a substitute for measurement.</h2>
        <p>
          Reuters reported that the S&amp;P 500 fell 3.70% to 6,910.42 on 20
          November. The supplied NAS100 platform reference printed an intraday
          low of 24,895.1 before closing at 25,205.8. Platform and CFD feeds can
          differ from the cash-index methodology, so Aeora labels that observation
          as NAS100 rather than treating it as a Nasdaq Composite close. Together,
          the moves establish a genuine risk-off session, with AI-linked technology
          names at the centre of the discussion. They do not, by themselves,
          establish whether a long-term investment cycle has failed.
        </p>
        <p>
          The widely circulated claim that US equities lost about $6 trillion over
          45 days is not used as an Aeora fact. The answer varies with the index or
          market-cap universe, the start and end timestamps, free-float treatment
          and whether international listings are included. A drawdown can be
          substantial without a single social-media aggregate being reproducible.
          The more useful question is whether earnings expectations and cash-flow
          capacity now justify the price investors were paying.
        </p>
        <aside className="research-article__callout ai-market-opex">
          <strong>Options-expiration context</strong>
          <p>
            Friday, 20 November was the standard monthly expiration date for US
            equity and index options. Expiry can concentrate dealer hedging,
            position-roll and closing-auction flows around important strikes, so
            options-market mechanics are a relevant part of Friday&apos;s market
            structure. The calendar alone cannot identify how much of the decline
            was caused by those flows without position, strike and gamma data.
          </p>
        </aside>
      </section>

      <section aria-labelledby="ai-market-capex">
        <p className="research-article__section-number">02 / Capital intensity</p>
        <h2 id="ai-market-capex">The investment cycle is tangible, but spend is not the same as value creation.</h2>
        <p>
          The cash commitment is no longer theoretical. Alphabet reported $51.4
          billion of third-quarter capital expenditure, largely for technical
          infrastructure, and Meta reported $34.91 billion including principal
          payments on finance leases. Both companies reported negative quarterly
          free cash flow. That makes the timing mismatch visible: infrastructure
          cost is immediate, while a return can arrive later, unevenly or not at
          all.
        </p>
        <CapexCashFlowFigure />
        <p>
          That mismatch should not be confused with a verdict. NVIDIA reported
          Data Center revenue of $107.6 billion for its third fiscal quarter, up
          110% year on year. It is powerful confirmation that demand for compute
          infrastructure is active. It is not proof that every purchaser will earn
          a satisfactory return, or that every supplier&apos;s multiple is insulated
          from a change in expectations.
        </p>
      </section>

      <section aria-labelledby="ai-market-rates">
        <p className="research-article__section-number">03 / Valuation and policy</p>
        <h2 id="ai-market-rates">Earnings can grow while the multiple falls.</h2>
        <p>
          The Federal Reserve maintained its 3.75% to 4.00% target range at its
          28 October meeting and said inflation remained elevated. For long-duration
          equities, that matters because a larger share of the expected value sits
          in future cash flows. A higher required return can reduce a present
          valuation even if reported revenue and earnings are still increasing.
        </p>
        <p>
          This is why the debate should not be framed as &quot;AI works&quot; versus
          &quot;AI fails.&quot; A transformative technology can coexist with an expensive
          equity cohort, a delayed monetisation cycle and an ordinary correction in
          a concentrated market. It can also coexist with a more serious reset if
          earnings revisions weaken alongside capital spending. The evidence must
          be refreshed quarter by quarter, not inferred from one volatile session.
        </p>
        <aside className="research-article__callout">
          <strong>What we are not calling</strong>
          <p>
            Aeora has not treated the 20 November decline as capitulation or a
            confirmed bottom. We have also not used an unverified VIX, hedge-fund
            flow or market-cap statistic to manufacture that conclusion.
          </p>
        </aside>
      </section>

      <ScenarioGrid />

      <section className="ai-market-assessment" aria-labelledby="ai-market-assessment-title">
        <p className="research-article__section-number">Aeora Research assessment</p>
        <h2 id="ai-market-assessment-title">Treat this as a return-on-capital test, not a one-word narrative.</h2>
        <p>
          The cleanest current interpretation is neither automatic capitulation nor
          automatic opportunity. The market is testing the price paid for future AI
          cash flows against today&apos;s funding costs and capital commitments. The
          next useful evidence is concrete: revenue tied to AI products, margin
          resilience, free-cash-flow conversion, the pace of capex guidance and
          whether strength spreads beyond a narrow group of leaders.
        </p>
        <ul className="research-article__checklist">
          <li>Company guidance for 2027 infrastructure spend and the commercial returns attached to it</li>
          <li>Revenue, margin and cash-flow updates from the largest AI buyers as well as suppliers</li>
          <li>Federal Reserve language, inflation and real-rate conditions that influence long-duration valuations</li>
          <li>Market breadth and earnings revisions, rather than a single-session rebound</li>
        </ul>
        <div className="ai-market-assessment__cta">
          <p>Preparation before prediction.</p>
          <Link href="/pinnacle">Explore Aeora Trader Development</Link>
        </div>
      </section>
    </>
  );
}
