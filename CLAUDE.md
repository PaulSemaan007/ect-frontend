# ECT Security — Project Guide

## Project Overview

- **Framework**: Next.js 16 + React 19 + TypeScript 5
- **Styling**: Tailwind CSS 4 with custom design tokens
- **CMS**: WordPress via WPGraphQL (headless)
- **Hosting**: Vercel (frontend) + GoDaddy (WordPress backend)
- **Repo**: github.com/PaulSemaan007/ect-frontend
- **Domain**: ectsecurity.com

## Business Rules (MUST follow)

- Coverage area: **California and Nevada** (never say "Southern California only" or "6 counties")
- Phone: **(714) 474-4788** — use this everywhere
- Email: info@ectsecurity.com
- Do NOT claim 24/7 availability
- Do NOT add back removed pages: Blog, Case Studies, Licenses
- Do NOT add back removed services: VIP Protection, Nightlife & Hospitality, Private Security
- Do NOT reference "24/7 Monitoring" as a service feature

## Active Services

1. Events & Festivals
2. Venue Security
3. Corporate Security
4. Parking Assistance

## Key File Paths

- Site config (central source of truth): `src/config/site.ts`
- Pages: `src/app/[page]/page.tsx`
- Shared components: `src/components/Header.tsx`, `src/components/Footer.tsx`, `src/components/Hero.tsx`
- UI components: `src/components/ui/`
- Design tokens: `src/styles/tokens.css`
- WordPress types: `src/types/wordpress.ts`
- GraphQL client: `src/lib/graphql-client.ts`
- Environment vars: `.env.local`

## Brand Guidelines

- Primary color: Neon green (#39FF14)
- Background: Near-black (#0a0a0a)
- Foreground: Light gray (#ededed)
- Tone: Professional, confident, no hype
- No emojis in website content
- Font: Geist Sans (primary), Geist Mono (code)

## Workflow

1. Read this file and CHANGELOG.md before starting any work
2. Check the Task Queue below for next tasks
3. Create a feature branch for changes
4. Make changes
5. Run `npm run validate` (type-check + lint + format:check + build)
6. Run `npm test` to verify all tests pass
7. Commit with descriptive messages (husky auto-lints staged files)
8. Update CHANGELOG.md with what you did
9. Push and open a PR — CI runs full quality gate
10. After merge, deploy with `npx vercel --prod --token <token> --scope <scope>`

## Available Scripts

- `npm run validate` — Run all checks (type-check + lint + format:check + build)
- `npm test` — Run Vitest unit tests
- `npm run test:watch` — Run tests in watch mode
- `npm run type-check` — TypeScript type checking
- `npm run lint` / `npm run lint:fix` — ESLint
- `npm run format` / `npm run format:check` — Prettier
- `npm run screenshots` — Capture screenshots of all pages via Puppeteer

## Task Queue

### Tier 1 — SEO (Critical for Google Indexing)

- [x] Add `src/app/sitemap.ts` — auto-generates XML sitemap for all pages
- [x] Add `src/app/robots.ts` — allows crawlers, points to sitemap
- [x] Add Open Graph + Twitter Card meta tags to layout.tsx and per-page overrides
- [x] Add JSON-LD structured data (LocalBusiness schema with phone, email, service areas)
- [x] Add canonical URLs via Next.js metadata API
- [x] Add `generateMetadata` to pages missing it: home, services/[service], [slug]

### Tier 2 — Performance & Security

- [x] Add dynamic imports for heavy client components (HomeServices, StatsCounter, WhyECT, MobileMenu)
- [x] Add `loading.tsx` to service routes for instant perceived navigation
- [x] Optimize LCP: preload hero image in layout
- [x] Add security headers via next.config.ts (X-Frame-Options, CSP, Referrer-Policy)

### Tier 3 — Conversion & Business Growth

- [ ] Add Google Analytics 4 via @next/third-parties (needs GA_MEASUREMENT_ID env var)
- [ ] Add conversion tracking events to form submissions
- [ ] Add FAQ page with common security service questions
- [ ] Enhance service area page with specific California/Nevada city lists
- [ ] Add "Request Callback" floating CTA or sticky mobile CTA

### Tier 4 — Code Quality & Testing

- [ ] Add tests for QuoteForm and ApplyForm validation
- [ ] Add tests for API routes (quote, apply) with mocked Resend
- [ ] Remove unused Badge variants to reduce bundle size
- [ ] Add Lighthouse CI to GitHub Actions

### Tier 5 — Content & UX Polish

- [ ] Improve privacy/terms pages with professional legal copy
- [ ] Add breadcrumb navigation to service detail pages
- [ ] Add "Back to Services" link on individual service pages

## Parked — Needs Boss Input

- [ ] Resend API key (get from resend.com dashboard)
- [ ] Google Analytics measurement ID
- [ ] Real team photos (replace AI-generated)
- [ ] Real testimonials / client logos
- [ ] Real stats for counters (events secured, years in business)
- [ ] Business hours
- [ ] Company address
- [ ] Specific Nevada cities served
- [ ] Social media URL verification
