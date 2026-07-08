# lemonguard.app

Marketing landing page + legal pages for [LemonGuard](https://apps.apple.com/us/app/lemon-guard/id6767219162), the used-car inspection iOS app. Live at [lemonguard.app](https://lemonguard.app), deployed on Vercel.

## Stack

- Next.js (App Router) + React + TypeScript
- Tailwind CSS v4 — design tokens live as CSS variables in `app/globals.css` (light default, `html.dark` override)
- Inter via `next/font`; Vercel Analytics + Speed Insights

## Structure

```
app/
├── layout.tsx        # Metadata (OG image, App Store Smart Banner via itunes.appId), JSON-LD, theme script
├── page.tsx          # Landing page — composes the section components
├── globals.css       # Design tokens + legal-page typography
├── privacy/ terms/   # Legal pages (sources: PRIVACY_POLICY.md / TERMS_OF_SERVICE.md)
├── robots.txt  sitemap.ts
components/           # Nav, Hero, StatsBar, Problem, HowItWorks, Features,
│                     #   Pricing, DownloadCTA, StoreButtons, AppMockup, Footer, LegalPage
lib/
├── constants.ts      # Store links/flags (IOS_AVAILABLE, ANDROID_AVAILABLE), APP_STORE_ID, SITE_URL, COPYRIGHT
└── useCountUp.ts     # Count-up-on-scroll hook (StatsBar)
public/
├── og.png            # 1200×630 social share image
└── screens/          # App screenshots used by AppMockup
```

## Development

```bash
npm run dev     # local dev server
npm run build   # production build (static prerender)
```

Store availability is gated by the flags in `lib/constants.ts` — flip `ANDROID_AVAILABLE` when the Play Store listing goes live; the buttons and "For iPhone" copy update everywhere via `StoreButtons`.
