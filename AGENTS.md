<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes - APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` - verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Aeora Website Quality Assurance

This repository is the Aeora Research public website. The complete policy is in
`docs/website-quality-assurance.md`; it is mandatory for every website change.

## Non-negotiable QA gate

No website change is complete after code is written. Follow this sequence:

1. Understand the affected page, component, shared styles, and dependencies.
2. Implement the scoped change without regressing unrelated functionality.
3. Run the relevant code checks and the production build.
4. Render the affected experience in a real browser.
5. Inspect the required responsive screenshots and browser errors.
6. Fix findings, rerun the relevant checks, and give the owner the short QA report.

For frontend, navigation, form, shared-component, animation, responsive, or
layout work, run `npm run qa:web` unless a narrower documented check is clearly
proportionate. Never weaken a test merely to make a change pass.

## Required review areas

- Preserve navigation, homepage, research routes, assessment, forms, APIs,
  data integrations, SEO, analytics, legal pages, footer, and existing motion.
- For visual work, inspect mobile small (375x812), mobile standard (390x844),
  tablet (768x1024), laptop (1280x800), desktop (1440x1000), and large desktop
  (1920x1080). Verify alignment, spacing, typography, images, tap targets,
  navigation, horizontal overflow, links, and motion.
- Use browser tools to check new console errors, failed same-origin requests,
  hydration issues, and route failures. Check reduced motion when motion changes.
- For relevant changes, verify accessibility, metadata, canonical/indexing,
  external and internal links, form states, assets, performance impact, and
  security. Do not expose secrets or send real production communications during
  QA.
- For shared CSS, navigation, typography, animation, or layout work, inspect
  nearby and major page types, not only the edited page.

## Owner report

End website tasks with a short, plain-English report: what changed, what was
tested, Desktop/Tablet/Mobile, production build, visual alignment,
console/errors, warnings, any action required, and either `READY FOR OWNER
REVIEW` or `NOT READY - ISSUE REMAINS`.
