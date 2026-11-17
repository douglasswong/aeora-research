# Article View Counting

## Status and scope

This is a **disabled-by-default** first-party readership feature for published
Aeora Research articles. It starts recording only when an owner connects the
approved Redis storage in the production Vercel project and explicitly enables
it. It does not use Google Analytics, alter the existing analytics-consent
behaviour, or create a public ranking while it has no genuine data.

The initial metric is a **qualified article view**, not a claim about unique
readers, reach, people, or visits. A qualified view is recorded only after an
article has been visible in an active browser for approximately eight seconds.
The total is durable across later sessions and visits once production storage
is enabled. It is deliberately an aggregate editorial signal, not a person-level
analytics product.

## Storage recommendation

Use **Upstash Redis through the Vercel Marketplace** for this first release.
It is a serverless REST-backed key-value store that fits a small counter without
adding a database driver or exposing credentials to the browser. The route uses
one atomic Redis Lua script for the dedupe, rate-limit and increment decision,
so concurrent qualifying requests cannot turn into a read-modify-write race.

The public source code uses the standard `UPSTASH_REDIS_REST_URL` and
`UPSTASH_REDIS_REST_TOKEN` names, and also accepts the older Marketplace
`KV_REST_API_URL` and `KV_REST_API_TOKEN` aliases when present. All of these
must remain server-only variables.

At the time this implementation was prepared, Upstash publishes a free Redis
tier with 256 MB storage and 500,000 commands per month. One qualifying view
uses one Redis command; a Research-listing lookup uses one batched `MGET`, and
an article page normally performs one lookup plus at most one qualified-view
attempt. A small editorial site should therefore begin inside the free tier,
but the owner should verify current plan limits, region, data-processing terms
and pricing before activation. Do not enable paid usage or create the
integration automatically from this branch.

## Data model and retention

Redis keys are namespaced and versioned:

| Key pattern | Purpose | Lifetime |
| --- | --- | --- |
| `aeora:research:views:v1:<viewId>` | Durable aggregate qualified-view total per editorial article | Retained until an owner intentionally deletes or migrates it |
| `aeora:research:views:dedupe:v1:<hash>` | Per-article duplicate suppression | 30 minutes |
| `aeora:research:views:rate:v1:<hash>` | Abuse-control rate limit | 10 minutes |

`viewId` is a stable editorial identifier separate from the URL slug. If a
slug changes, retain its existing `viewId`; this prevents a rename from losing
or misattributing its aggregate total. New entries in `RESEARCH_ARTICLES`
require a `viewId` at compile time, so future research notes and field guides
are registered automatically in the listing and API without manual database
rows.

The durable totals start at zero when the owner activates storage. No historical
article count is fabricated or inferred. Existing published articles become
eligible automatically from activation onward. A future seven-day or thirty-day
report needs separate daily buckets; that is intentionally not added here so a
lifetime total is never presented as a time-window metric. Likewise, a public
"Most Read" module should wait for sufficient genuine data and an agreed
editorial threshold.

## Qualified-view methodology

1. The article page waits for about eight seconds of visible, focused reading.
2. The browser keeps a `sessionStorage` marker so it does not repeatedly submit
   the same article during the current browser session.
3. The server accepts only same-origin JSON requests for a public, non-draft
   Research article.
4. Obvious crawlers, pre-renderers and headless clients are ignored.
5. The server uses an HMAC of the transient client address, user agent and
   article ID for the short-lived per-article dedupe key. A separate HMAC of
   the transient client address and user agent controls the rate limit.
6. A single Redis `EVAL` script atomically checks the 30-minute duplicate key,
   applies a 24-request-per-10-minute limit, and increments the total only when
   the read qualifies.

This deliberately favours conservative totals over inflated activity. It cannot
prove that every viewer is a distinct individual: shared networks can be
under-counted, and separate browsers or sessions can still represent the same
person. The site should call the metric **article views**, never unique readers.

## Privacy and security

- The browser receives only aggregate counts and never a storage credential.
- Raw IP addresses and user-agent strings are not persisted by this feature.
  They are used transiently in request handling to generate keyed hashes for
  abuse control.
- The session marker lasts only for the browser session; it is not a cookie and
  is not used for cross-site or cross-session tracking.
- POST requests require an origin or referrer that matches the request origin,
  have a small JSON payload limit, accept only public article slugs, and reject
  cross-origin calls.
- Redis credentials and the HMAC secret are server-only. Do not prefix them
  with `NEXT_PUBLIC_`, log them, or include them in client code.
- The public privacy notice discloses the aggregate measurement and temporary
  abuse-control handling. An owner should obtain the appropriate privacy,
  legal and data-protection review for the selected storage region before
  enabling production collection.

If Redis is unavailable or misconfigured, the API returns an unavailable state
and the user interface hides the count. It never substitutes a misleading zero
or blocks the article from loading.

## Listing and article UI

- A single article shows an accessible eye icon and compact count only when a
  positive count exists. Assistive technology receives the exact count, while
  the visible value uses compact notation such as `1.2K views`.
- The Research hub makes one batched request for all displayed Research cards;
  it does not issue a request per card.
- Missing, zero, disabled and unavailable counts stay hidden. This avoids a
  noisy empty state during pre-launch or storage outages.

## Backup and export approach

The Redis integration is not provisioned by this branch, so no backup schedule
exists yet. Before launch, the owner should select a plan and region with a
documented export/backup policy. At minimum, retain a dated export of the
`aeora:research:views:v1:*` totals before migrations or key-version changes.
Use the storage provider's authenticated dashboard or REST tooling from a
restricted operational environment; never place credentials in this repository.
If a later reporting requirement needs historical time series, introduce a
scheduled server-side export or daily aggregate job after the owner approves
the retention policy and any associated service cost.

## Owner activation checklist

1. Review the proposed Redis provider, region, plan, pricing, retention and
   privacy terms. This branch does not purchase or create the integration.
2. Connect the chosen Redis integration to the **production** Vercel project.
3. Add the provider credentials as server-only production environment variables:
   `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN` (or the supported
   `KV_REST_API_*` aliases).
4. Generate a unique 32-character-or-longer server secret and set
   `ARTICLE_VIEW_COUNTER_RATE_LIMIT_SECRET`.
5. Set `ARTICLE_VIEW_COUNTER_ENABLED=true` only in production. Keep previews
   and local development disabled.
6. Deploy an approved release, then perform a same-origin article read test,
   verify that exactly one qualifying count is added, inspect the Research hub
   batch response, and confirm that no credential appears in browser requests.
7. Review the production privacy notice and record the approved launch date.

Until step 5 is complete, requests remain intentionally inert and no data is
written.
