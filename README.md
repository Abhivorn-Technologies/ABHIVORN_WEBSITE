# Abhivorn Technologies — Website

Company website for **Abhivorn Technologies Pvt Ltd** — [www.abhivorn.com](https://www.abhivorn.com).

Built with **Next.js (App Router)**, TypeScript, Tailwind CSS and Framer Motion. Every page is pre-rendered as static HTML, so it loads fast and is fully readable by Google.

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in the keys
npm run dev                  # http://localhost:3000
```

| Command | What it does |
| --- | --- |
| `npm run dev` | Local development server |
| `npm run build` | Production build (also type-checks) |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |

## Where to edit content

| What | File |
| --- | --- |
| Company facts — stats, phone, email, offices, team, navigation | `src/lib/site.ts` |
| Projects / case studies | `src/lib/projects.ts` |
| Service landing pages (text, FAQs) | `src/lib/services.ts` |
| Blog posts | `src/lib/blog.ts` |
| Page layouts | `src/app/**/page.tsx` |

The sitemap (`/sitemap.xml`), robots.txt, social share image and structured data are generated automatically from these files.

## Environment variables

See `.env.example`. Add the same keys in **Vercel → Project → Settings → Environment Variables**. Never commit `.env` files.

## Analytics

| Tool | What you get | How to turn it on |
| --- | --- | --- |
| Vercel Web Analytics | Visitors, page views, top pages, referrers, countries, devices | Vercel → Project → **Analytics** → Enable |
| Vercel Speed Insights | Real visitors' loading experience (Core Web Vitals) | Vercel → Project → **Speed Insights** → Enable |
| Google Analytics 4 | Detailed traffic, sources, conversions (`generate_lead` event) | Create a GA4 property, set `NEXT_PUBLIC_GA_ID` |
| Microsoft Clarity | Heatmaps and session recordings of how people use each page | Create a free project at clarity.microsoft.com, set `NEXT_PUBLIC_CLARITY_ID` |

GA4 and Clarity load only after a visitor accepts the cookie banner. Tracked events: `cta_click`, `generate_lead`, `contact_form_start`, `whatsapp_click`, `phone_click`, `email_click`, `project_filter`, `outbound_click`.

Each contact-form email includes the lead's landing page and source (referrer / UTM campaign). Add `{{lead_source}}`, `{{landing_page}}` and `{{company_size}}` to the EmailJS template to see them.

## Deployment

Deployed on Vercel. Pushing to `main` deploys production; other branches get preview URLs.
