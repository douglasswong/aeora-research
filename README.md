# Aeora Research Website

Production-oriented one-page corporate website for Aeora Research, built with Next.js, TypeScript, semantic HTML and custom CSS.

## Setup

Use Node.js 20 or newer.

Install dependencies:

```bash
npm install
```

## Local Development

Start the development server:

```bash
npm run dev
```

Then open `http://localhost:3000`.

## Build

Create a production build:

```bash
npm run build
```

Preview the production server locally:

```bash
npm run start
```

## Lint

Run the ESLint workflow:

```bash
npm run lint
```

## Deployment To Vercel

1. Push this folder to a Git repository.
2. Import the repository in Vercel.
3. Keep the framework preset as `Next.js`.
4. Use the default build command: `npm run build`.
5. Use the default output configuration.

No database or backend services are required.

## Replacing Logo Assets

Brand assets live in `public/brand`.

Current bundled assets:

- `public/brand/aeora-logo-dark.svg`
- `public/brand/aeora-logo-light.svg`
- `public/brand/aeora-mark.svg`
- `public/brand/aeora-logo-dark.png`
- `public/brand/aeora-logo-light.png`
- `public/brand/favicon.png`

The rendered site uses a text-based `ΛEORΛ / R E S E A R C H` lockup in `src/components/BrandLockup.tsx` so the visual wordmark remains crisp and editable. To switch to image assets later, replace that component with `next/image` references to the preferred files in `public/brand`.

## Changing Contact Email

Update `CONTACT_EMAIL` in:

```txt
src/lib/site.ts
```

All mail links and the visible contact email read from that constant.

## Changing Metadata

Update the site constants in:

```txt
src/lib/site.ts
```

Then review `src/app/layout.tsx` for Open Graph, canonical and icon settings. The social preview placeholder is `public/og-image.svg`.
