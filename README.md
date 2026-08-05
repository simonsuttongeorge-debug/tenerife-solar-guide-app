# The Tenerife Solar Guide

Next.js 14 (App Router) site for thetenerifesolarguide.com — an independent
solar energy guide and lead-generation site for Tenerife, covering 18
expat-priority towns and 4 services (residential, commercial, battery
storage, EV charging), each with real cost/savings content, FAQ schema
markup, and a lead form that emails you.

## IMPORTANT — before you run anything

This project folder currently has a leftover `node_modules/` and `.next/`
from testing during development. **Delete both folders** before doing
anything else:

```bash
cd tenerife-solar-guide
rm -rf node_modules .next
npm install
```

## Local development

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## Verifying the build

```bash
npm run build
```

Note: during development I confirmed this project type-checks cleanly
(`npx tsc --noEmit` — zero errors) and compiles successfully end-to-end
(webpack build + all 26 static pages generated correctly) in a full test
run. My sandbox environment was too resource-constrained to complete a
full `npm run build` within its execution window every time I re-ran it,
so please run `npm run build` yourself once locally (or just let Railway
build it — see below) as a final sanity check before pointing DNS at it.
If anything does fail, the error will be a specific file/line, easy to
fix or send back to me.

## Environment variables (set these on Railway)

| Variable | Required | Purpose |
|---|---|---|
| `RESEND_API_KEY` | Yes, to receive leads by email | API key from resend.com (free tier covers this easily) |
| `LEAD_TO_EMAIL` | Yes | The email address that should receive every lead — e.g. simonsuttongeorge@gmail.com |
| `LEAD_FROM_EMAIL` | Recommended | A "from" address on a domain verified in Resend, e.g. `leads@thetenerifesolarguide.com`. Until you verify a domain in Resend, you can use their default `onboarding@resend.dev` sender for testing. |

**Until these are set**, the lead form still works and won't lose
submissions — it logs them to the server console instead of emailing you.
Don't launch publicly without email configured, though, or you'll miss
leads.

## Deploying to Railway

1. Push this folder to a new GitHub repo (`git init`, commit, push).
2. In Railway: New Project → Deploy from GitHub repo → select this repo.
3. Railway will auto-detect Next.js via Nixpacks and use the build/start
   commands in `railway.json` (`npm run build` / `npm run start`).
4. Add the three environment variables above under the service's
   Variables tab.
5. Under Settings → Networking, add your custom domain
   `thetenerifesolarguide.com` and follow Railway's DNS instructions
   (usually a CNAME to the Railway-provided address).
6. Once live, submit `https://thetenerifesolarguide.com/sitemap.xml` in
   Google Search Console.

## What's included

- **18 town pages** at `/solar-panels-[town]` — Adeje, Arona, Los
  Cristianos, Costa Adeje, Puerto de la Cruz, La Orotava, Santa Cruz de
  Tenerife, La Laguna, Guía de Isora, Santiago del Teide, Icod de los
  Vinos, Candelaria, Güímar, Granadilla de Abona, El Rosario, Tacoronte,
  Los Realejos, San Miguel de Abona.
- **4 service pages**: `/residential-solar-tenerife`,
  `/commercial-solar-tenerife`, `/solar-battery-storage-tenerife`,
  `/ev-charger-installation-tenerife`.
- **Homepage** (`/`) — island-wide hub linking to every town and service.
- **`/faq`** — full FAQ hub (20 island-wide Q&As).
- **`/about`**, **`/get-a-quote`**, **`/privacy-policy`**.
- **FAQPage, LocalBusiness, Organization and BreadcrumbList JSON-LD**
  schema on every relevant page, for both Google rich results and
  AI/LLM answer engines.
- **`/public/llms.txt`** — a plain-language site summary for AI crawlers
  (ChatGPT, Claude, Perplexity, etc.) — an emerging convention for
  "GEO"/AI-search visibility.
- **Auto-generated `sitemap.xml` and `robots.txt`** via Next.js.
- **Lead form** on every page, posting to `/api/lead`, which emails you
  via Resend.

## Content structure — how to edit or add content

All real content lives in `/content`, separate from the page templates,
so you (or I) can edit facts and wording without touching any React code:

- `content/towns.ts` — one object per town. Add a new town by copying an
  existing entry and changing every field; it will automatically get a
  page, appear in the homepage grid, footer, and sitemap.
- `content/services.ts` — one object per service, same pattern.
- `content/faqs.ts` — the island-wide FAQ bank used on the homepage and
  `/faq`.
- `content/siteConfig.ts` — site-wide facts (sun hours, tax rate, savings
  ranges) reused across every page. Keep these consistent — Google and
  AI search engines both trust a site more when the same fact is stated
  identically everywhere it appears.

## Known gaps / what to do before launch

1. **Delete `node_modules` and `.next`** (see top of this file).
2. **Set up Resend** and add the three env vars, or you won't receive
   leads.
3. **Replace the Privacy Policy placeholder** (`app/privacy-policy/page.tsx`)
   with a proper GDPR/LOPDGDD-compliant version — get a Spanish gestor
   or lawyer to review it, since the site collects personal data.
4. **Verify current grant/subsidy figures** before publishing — funding
   windows for Canarian solar subsidies open and close; the ranges cited
   in the content are sourced from 2026 research but should be checked
   against the current Gobierno de Canarias programme before relying on
   them commercially.
5. **13 remaining rural/interior Tenerife municipalities** are not yet
   built (only the 18 expat-priority towns are) — add them the same way
   via `content/towns.ts` whenever you're ready to expand.
6. **Add real photos** — every page currently ships without imagery;
   worth adding at least one hero image per town for both user trust and
   SEO (alt text is free additional keyword relevance).
