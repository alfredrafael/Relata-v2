# Relata website

Next.js 16, React 19, and TypeScript application for the redesign of https://relata.us/.
Content currently lives in local components and `app/data/`. No CMS, database, or content webhook is required.

## Development

```sh
corepack enable
pnpm install --frozen-lockfile
pnpm dev
```

Open http://localhost:3000. To build and serve production: `pnpm build`, then `pnpm start`.

## Configuration

`site.config.ts` sets the site name, description, and production domain used by canonical URLs, the sitemap, and robots.txt.
Copy `.env.example` to `.env.local` and configure the EmailJS values to enable contact form delivery. The form fetches public EmailJS configuration from `/api/contact-config` at runtime.

## Structure

- `app/`: home, contact, resume, metadata routes, and `/api/og` image generation.
- `app/data/`: local navigation and content data.
- `components/`: layout, sections, forms, and UI components.
- `public/`: static assets.

The existing portfolio copy, contact details, logo, and externally hosted media are template content awaiting replacement with approved Relata content. Historical technology mentions in project/resume data describe portfolio work; they are not application integrations.

## Deployment

The Dockerfile builds a standalone Next.js server. Railway configuration is included. Set the public domain to `relata.us` in the hosting platform and configure DNS separately.

Set `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`, `NEXT_PUBLIC_EMAILJS_SERVICE_ID`, and `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` as Railway service variables. The runtime endpoint also accepts `EMAILJS_PUBLIC_KEY`, `EMAILJS_SERVICE_ID`, and `EMAILJS_TEMPLATE_ID` (preferred when both are set). Restart or redeploy after changing service variables. Manual Docker containers must receive these variables at startup using `--env-file` or `-e`; build arguments alone do not configure the running container. The endpoint returns only public browser credentials and never an EmailJS private key.

The contact form supports both the current EmailJS fields (`user_name`, `user_email`, `user_phone`, `message`) and the original template fields (`userFirstName`, `userLastName`, `userEmail`, `userPhone`). Configure the template's reply-to address using `user_email` or `userEmail`.

The application has no CMS runtime dependencies. Any future CMS can be added as a separate integration; the previous implementation remains in Git history.

MIT License: see [LICENSE](LICENSE).
