# Changelog

All changes to the ECT Security website are logged here.

## [2026-02-17] Code Quality & Testing

### Added

- QuoteForm validation tests: renders fields, validates required fields, tests successful submission, tests error handling (4 tests)
- ApplyForm validation tests: renders fields, validates required fields, tests successful submission, tests error handling (4 tests)
- API route tests for /api/quote: validates required fields (400), missing API key (500), successful submission (200), missing email/serviceType (5 tests)
- API route tests for /api/apply: validates required fields (400), missing API key (500), successful submission (200), missing experience/details (5 tests)
- @testing-library/user-event for form interaction testing
- Explicit cleanup in vitest.setup.ts for DOM cleanup between tests

### Removed

- Unused Badge preset components: NewBadge, FeaturedBadge, PopularBadge, TwentyFourSevenBadge, LiveBadge, OnlineBadge, OfflineBadge (none were imported anywhere)

### Changed

- Test count: 13 → 31 tests across 7 test files

## [2026-02-17] Conversion & Business Growth

### Added

- FAQ page at `/faq` with 10 common security service questions and FAQ structured data (FAQPage schema for Google rich snippets)
- Floating mobile CTA: sticky "Get a Free Quote" button appears on scroll (hidden on quote/apply pages, desktop)
- FAQ link added to footer navigation and sitemap

### Changed

- Enhanced service area page with specific city lists: 26 California cities across 3 regions (Southern, Central, Northern) and 6 Nevada cities
- Improved service area page layout with region cards, services grid, and better CTA section

## [2026-02-17] Performance & Security

### Added

- Dynamic imports for HomeServices, StatsCounter, WhyECT (page.tsx) and MobileMenu (Header.tsx)
- Loading skeleton (`loading.tsx`) for service detail pages
- Hero image preload in layout `<head>` for improved LCP
- Security headers via `next.config.ts`: X-Frame-Options (DENY), X-Content-Type-Options (nosniff), Referrer-Policy, HSTS, Permissions-Policy, X-DNS-Prefetch-Control

## [2026-02-17] SEO Foundations

### Added

- XML sitemap at /sitemap.xml (auto-generated for all 13 pages)
- robots.txt at /robots.txt (allows crawlers, blocks /api/ and /thank-you)
- Open Graph meta tags (title, description, image, locale, site name)
- Twitter Card meta tags (summary_large_image)
- JSON-LD structured data (LocalBusiness schema with phone, email, services, service areas)
- Canonical URLs on all pages via Next.js metadata API
- `generateMetadata` on dynamic service pages (services/[service])
- Homepage-specific metadata with targeted title and description
- Title template: `%s | ECT Security` for consistent branding

## [2026-02-17] Autonomy Infrastructure

### Added

- Vitest + Testing Library test framework (13 tests across 3 suites)
- Husky + lint-staged pre-commit hooks (auto-format on commit)
- Error boundaries: `error.tsx` (route-level) and `global-error.tsx` (root-level)
- `.env.example` documenting required environment variables
- npm scripts: `validate`, `test`, `test:watch`, `type-check`, `format`, `format:check`, `lint:fix`, `screenshots`

### Changed

- Enhanced CI pipeline: type-check → lint → format:check → test → build
- Updated CLAUDE.md with workflow, available scripts, and prioritized task queue
- Fixed 18 ESLint errors across 6 files (unused imports, unescaped entities, JSX in try/catch)
- Formatted all 59 files with Prettier

## [2026-02-17] Forms & Infrastructure

### Added

- Quote request form on /quote page (name, email, phone, service type, event details, attendees)
- Careers application form on /careers/apply (experience, availability, guard card, certifications)
- API routes: /api/quote and /api/apply (Resend email integration)
- Resend package for transactional email delivery
- Puppeteer MCP server for visual testing
- Branch protection on main (requires CI pass)

### Changed

- Updated Next.js from 16.0.1 to 16.1.6 (security fix)
- Expanded Claude Code permissions for autonomous workflow
- Made GitHub repo public (enables branch protection)
- Fixed npm audit vulnerabilities (js-yaml, lodash)

### Infrastructure

- Merged PR #2 (content overhaul) into main
- Set WP_GRAPHQL_ENDPOINT as GitHub Actions secret
- Added ectsecurity.com and www.ectsecurity.com as Vercel custom domains
- Deployed production build to Vercel

## [2026-02-16] Content Overhaul

### Changed

- Updated coverage area from "Southern California" to "California and Nevada" across all pages
- Updated phone number from placeholder to (714) 474-4788
- Replaced homepage trust indicators: CA & NV Licensed, Trained Guards, Parking Assistance (was: 24/7, Licensed Guards, 6 Counties, Expert Team)
- Removed VIP Protection from Events & Festivals features
- Removed 24/7 Monitoring from Venue Security features
- Removed "Opportunities for advancement" from Careers benefits
- Removed Open Positions section from Careers page
- Removed "Licensed & Insured" section from About page
- Removed "24/7 availability" and "6 counties" from About Why Choose Us list
- Updated Service Area page to California & Nevada (was: 6 SoCal counties)
- Updated Footer description and removed hours display
- Updated Services page metadata

### Added

- Parking Assistance service (listing card + detail page at /services/parking)
- CLAUDE.md project guide for autonomous development
- CHANGELOG.md for tracking all changes
- GitHub Actions CI workflow (.github/workflows/ci.yml)
- Prettier code formatter (.prettierrc)

### Removed

- Case Studies page (/case-studies)
- Blog pages (/blog and /blog/[slug])
- Licenses page (/licenses)
- Nightlife & Hospitality service
- Private Security service
- Navigation links to all removed pages
- Licenses & Insurance from legal navigation
