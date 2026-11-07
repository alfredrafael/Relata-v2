# Relata

![Relata website preview](https://www.alfredorafael.com/wp-content/uploads/2026/11/Relata-Thumbnail.png)

The marketing website for [Relata](https://relata.us), built with Next.js 16, React 19, TypeScript, and Tailwind CSS 4. The site introduces Relata’s communications and creative services, presents the team, and accepts inquiries through EmailJS.

Content lives in React components and local data files. No CMS or database is required. EmailJS configuration is only needed to send contact form submissions.

## Getting started

Use Node.js 20.9 or newer and **pnpm 10.33.0**, the package manager pinned in `package.json`. The Docker build uses Node.js 20. The install script enforces pnpm; keep dependency changes in `pnpm-lock.yaml`.

From the repository root:

```sh
corepack enable
corepack prepare pnpm@10.33.0 --activate
pnpm install --frozen-lockfile
cp .env.example .env.local
pnpm dev
```

Open [localhost:3000](http://localhost:3000). Development uses Turbopack. EmailJS values can remain blank while working on content and styling; contact submissions will be unavailable until all three values are configured.

## Commands

| Command                  | Purpose                                                 |
| ------------------------ | ------------------------------------------------------- |
| `pnpm dev`               | Start the development server with Turbopack.            |
| `pnpm build`             | Create a production build and standalone server output. |
| `pnpm start`             | Serve a production build; run `pnpm build` first.       |
| `pnpm exec tsc --noEmit` | Check TypeScript without emitting files.                |

The existing `pnpm lint` script invokes `next lint`, which is unavailable in Next.js 16. It needs migration to the ESLint CLI and compatible configuration before it can serve as a validation step. There is currently no automated test script.

## Pages and endpoints

| Route                                    | Purpose                                                           |
| ---------------------------------------- | ----------------------------------------------------------------- |
| `/`                                      | Homepage with introduction, service highlights, and contact form. |
| `/services`                              | Full service offering.                                            |
| `/the-team`                              | Team profiles (temporarily hidden).                               |
| `/contact`                               | Standalone contact page.                                          |
| `/style-guide`                           | Visual reference for typography, colors, and interactions.        |
| `/api/contact-config`                    | Runtime public EmailJS configuration for the browser.             |
| `/api/og?title=Relata&description=Hello` | Generate a 1200 × 630 Open Graph image.                           |
| `/sitemap.xml`                           | Sitemap for the homepage, contact, services, and team pages.      |
| `/robots.txt`                            | Crawler rules and sitemap location.                               |

## Project structure

```text
app/
  page.tsx                 Homepage
  services/                Services page
  the-team/                Team page and profile content
  contact/                 Contact page
  style-guide/             Visual reference and scoped styles
  api/contact-config/      Runtime EmailJS configuration endpoint
  api/og/                  Open Graph image generation
  data/                    Navigation and service content
  layout.tsx               Shared layout, metadata, theme, and analytics
  globals.css              Global styles and Tailwind setup
  sitemap.ts               Sitemap generation
  robots.ts                Crawler configuration
components/
  nav/                     Shared navigation
  theme/                   Theme provider
  ui/                      Shared UI components
  relata-contact.tsx       Contact form and submission states
  relata-footer.tsx        Shared footer
  craft.tsx                Layout primitives
lib/utils.ts               Class name utilities
public/
  media/                   Local logo, hero video, and service image
  favicons/                Browser and app icons
site.config.ts             Site name, description, and production domain
Dockerfile                 Multi-stage standalone production build
railway.json               Railway build and restart configuration
railway.toml               Additional Railway deployment configuration
```

Imports use the `@/` alias for the repository root. Shared UI uses Radix primitives and Lucide icons, and the root layout includes Vercel Analytics.

## Editing content and branding

- Update `site.config.ts` for the site name, description, and production URL used by metadata, the sitemap, and crawler configuration.
- Edit `app/data/navbarData.tsx`, `app/data/homepageServices.tsx`, and `app/data/allServices.tsx` for navigation and service listings.
- Edit page components for page copy and team profiles, and shared components for the header, footer, and contact form.
- Use `app/globals.css` for global design changes and `/style-guide` as a visual reference.
- Place local assets in `public/`; they are served from the site root, such as `/media/relata-hero.mp4`.

Some team portraits and social preview images are hosted externally. Review those URLs and profile content before publishing, and update page-level metadata when changing preview images or descriptions. Add new public pages to `app/sitemap.ts` when they should appear in the sitemap.

## Contact form setup

Create an EmailJS email service and template, then populate `.env.local` using the names provided in `.env.example`:

```dotenv
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY="your-public-key"
NEXT_PUBLIC_EMAILJS_SERVICE_ID="your-service-id"
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID="your-template-id"
```

The endpoint also accepts `EMAILJS_PUBLIC_KEY`, `EMAILJS_SERVICE_ID`, and `EMAILJS_TEMPLATE_ID`. Each unprefixed value takes precedence over its `NEXT_PUBLIC_` equivalent. Use either naming convention consistently in the hosting environment and restart or redeploy after changing values.

On submission, the browser fetches `/api/contact-config` without caching and sends the message directly through `@emailjs/browser`. The endpoint reads environment variables at request time and returns HTTP 503 when any required value is missing. It exposes public browser credentials only; never place an EmailJS private key in these variables.

Configure the EmailJS template with these parameters:

| Parameter    | Value                 |
| ------------ | --------------------- |
| `user_name`  | Full name             |
| `user_email` | Email address         |
| `user_phone` | Optional phone number |
| `message`    | Inquiry text          |

Legacy template fields `userFirstName`, `userLastName`, `userEmail`, and `userPhone` are also populated. Set the template’s reply-to field to `{{user_email}}` or `{{userEmail}}`.

If delivery fails, check that `/api/contact-config` returns a successful response, confirm the service and template IDs in EmailJS, and verify the template parameters. Complete a real submission to verify delivery after configuring the service.

## Production deployment

For a local production preview:

```sh
pnpm build
pnpm start
```

### Docker

The multi-stage Dockerfile installs locked dependencies, builds Next.js with `output: "standalone"`, and runs `server.js` as a non-root user.

```sh
docker build -t relata-v2 .
docker run --rm -p 3000:3000 --env-file .env.local relata-v2
```

Supply EmailJS variables to the running container using `--env-file` or `-e`. The Dockerfile accepts `NEXT_PUBLIC_EMAILJS_*` build arguments, but those alone do not configure the final runtime container. The server binds to `0.0.0.0` and accepts the hosting platform’s `PORT` variable.

### Railway

Railway configuration is included in `railway.json` and `railway.toml`, and uses the repository’s Dockerfile. Both files define restart settings with different retry counts; keep them aligned when changing deployment policy and verify the effective settings in Railway.

Set the three EmailJS variables on the Railway service and deploy. Configure the `relata.us` custom domain and DNS separately, and keep `site.config.ts` aligned with the intended public URL.

## Validation

For code changes, run:

```sh
pnpm exec tsc --noEmit
pnpm build
```

Preview affected pages at mobile and desktop widths, check navigation and media loading, and exercise contact form validation, success, and failure states when changing the form. Email delivery requires a configured EmailJS service and a real submission.

## License

[MIT](LICENSE).
