# ChartsDWorks SEO Migration Targets

## Scope

This is a destination-architecture document only. It does not introduce
redirects, DNS changes, canonical changes, hosting changes or a claim that
ChartsDWorks and Aeora Research are legally or operationally interchangeable.
Any redirect requires a separate inventory, a signed-off source/target map and
verification of the current legacy URL behaviour.

## Proposed topic destinations

| Legacy topic family | Proposed Aeora destination | Rationale | Owner decision required |
| --- | --- | --- | --- |
| Introductory trading education | `/courses` | Commercial course information belongs on the course catalogue. | Confirm current course scope, terms and payment ownership. |
| Professional trading process | `/professional-trader-career-malaysia` | Broader educational career path without employment promises. | Confirm whether legacy claims can be reused word-for-word. |
| Prop-desk and trader-development education | `/prop-desk-malaysia` | Defines the concept and Aeora's non-prop-firm boundary. | Confirm any historical programme terminology. |
| Institutional trading concepts | `/institutional-trading-malaysia` | Educational market-structure pillar. | Confirm that no legacy page claims execution or access. |
| Market making / DMA / liquidity explainers | Relevant `/research/...` field guide | Each topic has one narrow explanatory destination. | Inventory the exact legacy articles before redirect planning. |
| Technical-analysis and trading-psychology education | `/courses` or a future verified resource | Preserve course-intent separation from market-structure explainers. | Confirm whether a factual evergreen article should be created. |
| D&G Consultation education / consulting context | `/dngconsultation` | Keep service identity distinct from Aeora Research trader-development material. | Confirm legal and operational ownership. |
| Old gallery or event material | `/pinnacle#gallery-title` only if the event belongs to Aeora's current history | Historical media should not be redirected mechanically. | Confirm original event ownership and consent. |

## Future redirect process

1. Crawl and export every legacy URL, title, canonical, indexed status,
   backlinks, traffic and conversions.
2. Match only pages with an equivalent user intent and a clearly factual Aeora
   destination.
3. Send unmatched pages to a review queue; do not mass-redirect them to the
   homepage.
4. Implement temporary redirects only after owner approval and retain a
   rollback file.
5. Validate status code, canonical, final page relevance, sitemap inclusion and
   Search Console coverage after release.
