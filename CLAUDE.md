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
- Phone: **562-716-8376** — use this everywhere
- Email: Rsemaan1@yahoo.com
- Do NOT claim 24/7 availability
- Do NOT add back removed pages: Blog, Case Studies, Licenses, About, FAQ, Careers, Services, Privacy, Terms, Service Area
- Do NOT add back removed services or service listings
- Do NOT reference "24/7 Monitoring" as a service feature
- Site is intentionally minimal: homepage + quote form only

## Active Pages

1. Homepage (`/`) — Hero + Contact section
2. Quote Form (`/quote`) — Quote request form
3. Thank You (`/thank-you`) — Form confirmation

## Key File Paths

- Site config (central source of truth): `src/config/site.ts`
- Homepage: `src/app/page.tsx`
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

## Task Queue

- [ ] Add Google Analytics 4 via @next/third-parties (needs GA_MEASUREMENT_ID env var)
- [ ] Add conversion tracking to quote form submission
- [ ] Replace hero image with preferred photo
- [ ] Add E2E smoke test for homepage with Playwright
- [ ] Add Google Search Console verification meta tag (needs verification code)

## Parked — Needs Boss Input

- [ ] Resend API key (get from resend.com dashboard)
- [ ] Google Analytics measurement ID
- [ ] Preferred hero photo (replace current one)
- [ ] Business hours
- [ ] Company address
- [ ] Social media URL verification
