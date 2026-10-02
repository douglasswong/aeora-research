# SEO Malaysia Authority Plan - October 2026

## Objective

Help search engines and prospective readers understand Aeora Research as a
research-led Malaysian destination for market intelligence, trader development,
professional market practice and disciplined risk education. This is an
authority and clarity initiative, not a ranking, funding, career, access or
performance promise.

## October build delivered on this branch

### Pillar pages

- `/prop-desk-malaysia`
- `/institutional-trading-malaysia`
- `/professional-trader-career-malaysia`

### Supporting resources

- `/research/prop-firm-vs-prop-desk-malaysia`
- `/research/professional-trader-roadmap-malaysia`
- `/research/trading-career-malaysia`
- `/research/market-making-explained`
- `/research/direct-market-access-explained`
- `/research/retail-vs-institutional-trading`
- `/research/trading-desk-risk-management`
- `/research/order-flow-and-volume-profile`

## Audience and intent

| Audience | Need | Primary path |
| --- | --- | --- |
| Curious Malaysian trader | Wants clear terms and a credible learning frame | Prop Desk pillar to supporting guides |
| Career explorer | Needs a grounded explanation rather than a vacancy promise | Professional Trader Career pillar to career guide |
| Market-structure learner | Wants liquidity, execution and risk concepts | Institutional Trading pillar to DMA, market-making and order-flow guides |
| Course visitor | Wants current commercial course information | Courses, with one contextual institutional-guide link |
| Programme visitor | Wants current trader-development information | Pinnacle, with one contextual career-guide link |

## Content architecture

- Keep the three pillars evergreen and definition-led.
- Keep the eight supporting guides narrow and cross-linked.
- Keep dated market analysis separate from evergreen explainers on the
  Research index.
- Do not add 20 thin pages. Expand only where Search Console, owner expertise
  or primary source material shows a clear non-overlapping need.
- Use direct answers, comparison tables, realistic FAQs, visible author/date,
  sources and a non-advice disclaimer.

## E-E-A-T and trust controls

- Existing articles use `Aeora Research Team` as the visible author. This
  build does not invent an individual author, biography, credentials or review
  history.
- A named author page should be added only when the owner can verify the
  person's role, biography, publication oversight and consent.
- All new guides distinguish education from brokerage, execution, funding,
  recruitment, licensing and personalised advice.
- Malaysia references are tied to official market infrastructure or professional
  learning sources where relevant. The site does not claim regulatory approval,
  regional availability or a local trading role it cannot verify.
- The FAQ and programme metadata were adjusted to avoid a stale statement that
  an ended intake was the next intake.

## Structured data and technical plan

- Site-wide factual `Organization` JSON-LD uses current legal name, contact
  details, address and configured social profiles.
- Research articles publish `Article` and `BreadcrumbList` JSON-LD from their
  canonical route data.
- Pillar pages publish `BreadcrumbList` and factual `FAQPage` JSON-LD.
- The existing FAQ page now publishes `FAQPage` JSON-LD from the visible FAQs.
- New pillars and guides are included in the XML sitemap. The robots policy and
  existing noindex assessment routes remain unchanged.
- No review schema, rating schema, salary, job-posting or unsupported course
  offer schema was added.

## Internal linking map

- Research index: separates evergreen field guides from dated research notes.
- Footer: links to the three broad authority guides only.
- Courses: links once to institutional trading context.
- Pinnacle: links once to professional trader-career context.
- Pillars and guides: follow the mapping in
  `docs/MALAYSIA_KEYWORD_PAGE_MAP_2026-10.md`.

## Google Search Console plan

Search Console access was not available in this repository. The owner should
provide a verified property or export:

1. Submit and inspect the sitemap after a separately approved production
   release.
2. Monitor indexing and canonical selection for the three pillars and eight
   guides after 14, 30, 60 and 90 days.
3. Export query/page pairs by country and device. Do not optimise from a single
   aggregate number.
4. Look for impressions around the mapped query families before expanding
   titles, snippets or sections.
5. Investigate pages with impressions but weak CTR using the actual SERP and
   snippet context, not generic title rewrites.

## 30 / 60 / 90-day measurement plan

| Window | Owner action | Decision gate |
| --- | --- | --- |
| 0-30 days | Verify sitemap, canonical, index coverage and rendered metadata. Collect baseline query/page data. | Fix crawl, canonical or noindex problems before publishing more pages. |
| 31-60 days | Review impressions, clicks, CTR, country/device mix, internal-link discovery and external mentions. | Expand the page that is earning relevant impressions; consolidate overlap. |
| 61-90 days | Assess whether one or two P2 topics deserve original research or a glossary. | Publish only where the page map has a durable gap and owner expertise. |

## November content backlog

Prioritise only after the October pages are indexed and query data is available:

1. Institutional trading glossary: liquidity, spread, market maker, DMA, order
   book, order flow, volume profile, slippage, execution, limit order, market
   order, VWAP, TWAP, risk limit, drawdown and position sizing.
2. Market structure explained for a Malaysian learner audience.
3. Trading psychology as process design, not motivation.
4. A carefully sourced article on professional market skills, only after owner
   review of any role or licensing statements.
5. Original local research based on verified market data, events or experts;
   not generic AI-written commentary.

## Owner inputs still needed

- Search Console access or a 90-day export.
- Confirmed individual author information, if Aeora wants named bylines.
- Any verified employment, partnership, licensing, product-availability or
  regulatory claims that should appear on future pages.
- A legacy ChartsDWorks URL inventory before any redirect work.
- Review of all course terms, prices and payment-provider wording before adding
  Course schema or stronger commercial metadata.

## WHAT THIS OCTOBER BUILD IS TRYING TO MAKE GOOGLE UNDERSTAND

Aeora Research is a Malaysian, research-led publisher and trader-development
educator that explains prop-desk concepts, institutional market structure,
professional trading careers, execution and risk in a careful, non-promissory
way. It is not presenting itself as a broker, fund manager, prop firm,
recruiter, signal service or provider of guaranteed capital, access or results.
