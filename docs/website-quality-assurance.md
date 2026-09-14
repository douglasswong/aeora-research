# Aeora Website Quality Assurance Policy

## Purpose

Aeora website changes are owned end to end. Code that compiles is not enough:
the rendered experience must work, fit, remain accessible, and preserve the
research-led institutional standard.

## Required workflow

For every change, use professional judgement to scale QA to its risk. The base
sequence is always:

`understand -> implement -> build -> test -> render -> inspect -> fix -> retest -> report`

A single factual copy edit may need lint, a production build, and a focused
route check. Any shared component, CSS, navigation, visual, responsive, form,
animation, assessment, API, data, or SEO change requires the full relevant QA
gate. Create a Git checkpoint before substantial work when appropriate.

## Automated gate

Run `npm run qa:web` before handing over substantial website work. It runs:

1. ESLint with warnings treated as failures.
2. The webpack production build, including TypeScript and route generation.
3. A real Chrome production-server check of every route published in the
   sitemap, plus homepage internal links and primary navigation.
4. Browser error, failed same-origin request, and horizontal-overflow checks.
5. Serious and critical WCAG 2 A/AA checks on primary audience journeys.
6. Screenshots of the homepage, trader development, event, research, and
   trader-readiness pages at 375x812, 390x844, 768x1024, 1280x800, 1440x1000,
   and 1920x1080.
7. A reduced-motion check of the homepage.

Use `QA_BASE_URL` to point the browser suite at a reviewed preview when needed.
The default runs against a local production server on port 3110. The artifacts
are local only in `qa-screenshots/`, `test-results/`, and `playwright-report/`.

Automation catches regressions, but it cannot judge brand polish alone. For
substantial visual work, inspect the screenshots yourself after the test run.
Check horizontal and vertical alignment, spacing, grid consistency, content
widths, wrapping, image crops, button alignment, navigation, the footer,
overflow, and whether mobile feels deliberately designed rather than merely
compressed.

## Browser and responsive expectations

Test at these minimum viewports for visual work:

| Device | Viewport |
| --- | --- |
| Mobile small | 375x812 |
| Mobile standard | 390x844 |
| Tablet | 768x1024 |
| Laptop | 1280x800 |
| Desktop | 1440x1000 |
| Large desktop | 1920x1080 |

Check page load, normal and fast scrolling, backwards scrolling, resize,
repeat navigation, and reduced motion when a changed feature is animated.
Motion must not flicker, hide content, overlap copy, block interaction, create
layout shift, trap the user, or leave large blank space.

## Additional checks by change type

### Shared layout or navigation

Check the logo home link, desktop and mobile navigation, CTA links, active and
sticky states, footer, core landing pages, research listing, research article,
trader development, event, and trader-readiness routes.

### Forms, assessment, APIs, or data

Check empty, valid, invalid, loading, success, and duplicate-submission states
where applicable. Do not send real communications or alter production data
unless explicitly authorised. Keep all secrets server-side. Mark market data as
live, delayed, static, or illustrative as appropriate; never fabricate live
prices.

### Content, media, and SEO

Check visible copy for typos, dates, duplicate text, malformed symbols, and
approved Aeora branding. Confirm image URLs, aspect ratios, alt text, and
appropriate loading behavior. For new or substantially changed pages, verify
title, description, canonical, H1 and heading order, Open Graph metadata,
indexing, and relevant structured data or internal links.

### Security and performance

When dependencies, auth, inputs, uploads, APIs, database access, or server
configuration change, run proportionate security checks. Review introduced
dependencies, unsafe input handling, unauthorised routes, exposed secrets, and
dependency audit findings. For substantial visual work, watch image weight,
JavaScript cost, unnecessary rerenders, animation cost, LCP, CLS, and INP.

## Final release gate

Do not state that a website task is complete if a required item is failing.
Fix it when it is safe and within scope, then rerun the relevant check. Report
a plain-English status using:

| Check | Status |
| --- | --- |
| Code check | PASS / FAIL |
| Production build | PASS / FAIL |
| Desktop | PASS / FAIL |
| Tablet | PASS / FAIL |
| Mobile | PASS / FAIL |
| Visual alignment | PASS / FAIL |
| Console/errors | PASS / FAIL |
| Links/routes | PASS / FAIL |
| Forms | PASS / FAIL / NOT APPLICABLE |
| Animations | PASS / FAIL / NOT APPLICABLE |
| Accessibility | PASS / FAIL |
| SEO | PASS / FAIL / NOT APPLICABLE |
| Performance | PASS / WARNING / NOT APPLICABLE |
| Security | PASS / WARNING / NOT APPLICABLE |
| Regression check | PASS / FAIL |

Finish with either `READY FOR OWNER REVIEW` or `NOT READY - ISSUE REMAINS`.
