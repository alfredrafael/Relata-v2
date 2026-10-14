# Repository guidance

This is the Next.js 16 / React 19 application for the Relata redesign.

## Commands

- `pnpm dev`: development server
- `pnpm build`: production build
- `pnpm start`: production server
- `pnpm exec tsc --noEmit`: TypeScript check

## Architecture

Content lives in local components and `app/data/`. There is no CMS integration.
Routes: `/`, `/contact`, `/resume`, `/api/og`, `/sitemap.xml`, `/robots.txt`.
`site.config.ts` is the source of truth for the production domain and site metadata.
`next.config.ts` enables standalone output for Docker/Railway.
`components/craft.tsx` provides layout primitives. UI components use Radix, Tailwind CSS v4, and Lucide icons.
`lib/utils.ts` merges classes; `lib/metadata.ts` provides metadata and text helpers.

Preserve layout during focused maintenance. Portfolio content and external media remain to be replaced with approved Relata assets.
The optional EmailJS contact form uses the public build-time variables documented in `.env.example`.
