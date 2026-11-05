# TwinCity Appartments – website

Next.js 16 (App Router) site with 97 static, indexable pages for daily, short-time, weekly and monthly rooms and apartments in Bahria Town.

## Commands

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (all pages pre-rendered)
npm start
npm run images     # re-process photos from Twincityappartmentsimages/ into public/images/
npm run seo-check  # with the site running: crawls every sitemap URL and checks SEO rules
```

## Where to edit

| What | File |
| --- | --- |
| Phone, emails, address, domain, prices, GA4 / Search Console / Bing codes | `lib/site.ts` |
| Room-type & stay-length pages | `data/hubs.ts` |
| Bahria Town phase pages and phase × type pages | `data/locations.ts` |
| Landmark, audience, budget and amenity pages | `data/intents.ts` |
| Couple, honeymoon, nikah, birthday, marriage functions, food | `data/events.ts` |
| Property listings | `data/listings.ts` |
| Blog posts | `data/blog.ts` |
| Photo alt text and photo sets | `lib/images.ts` |
| Real guest reviews | `app/reviews/page.tsx` (`REVIEWS`) |

## Design system ("Paper & Ink")

- Tokens in `app/globals.css` (`@theme`): paper `#f3f0ea`, ink `#151412`, bronze accent `#8c6a3f`, hairline `#dcd7cb`
- Type: Inter Tight (UI/body) + Instrument Serif italic for accents and numerals, via `next/font` (self-hosted, no layout shift)
- Components: `components/Blocks.tsx` (hero, booking bar, rates, gallery, facilities, FAQ, CTA band, index lists), `ListingCard`, `Header` (mega menu) + `MobileMenu`, `Footer`
- Icons: `lucide-react` (1.25–1.5 stroke); WhatsApp brand mark in `components/Icons.tsx`
- Motion: CSS scroll-driven reveals (`data-reveal`), page fade (`app/template.tsx`); all disabled for `prefers-reduced-motion`

## SEO built in

- Canonical URL, title, description, Open Graph and Twitter tags on every page; no `noindex` anywhere
- JSON-LD: Organization, WebSite, LodgingBusiness, BreadcrumbList, FAQPage, ItemList, Service, BlogPosting, Accommodation + Offer (PKR), ImageGallery
- `/sitemap.xml` index → `sitemap-pages.xml`, `sitemap-locations.xml`, `sitemap-listings.xml`, `sitemap-blog.xml` (with image entries)
- `/robots.txt` allows all crawlers, including AI assistants (GPTBot, ClaudeBot, PerplexityBot, Google-Extended …)
- `/llms.txt` and `/llms-full.txt` for AI search / LLMs
- HTTPS hardening: HSTS, `upgrade-insecure-requests`, www → apex 301, trailing-slash URLs
- Sticky Call/WhatsApp bar on mobile, WhatsApp click tracking (GA4) once `gaId` is set

## Launch checklist

1. Confirm the domain in `lib/site.ts` (`SITE.url`) and `next.config.ts` (www redirect).
2. Add the exact street address to `SITE.address`; keep it identical on Google Business Profile, Bing Places and Apple Business Connect.
3. Deploy (e.g. Vercel), attach the domain, force HTTPS.
4. Google Search Console: verify the Domain property by DNS TXT, submit `/sitemap.xml`, request indexing for the top 20 pages.
5. Bing Webmaster Tools: import from Search Console, submit the sitemap. Create the Bing Places listing.
6. Google Business Profile: category "Guest house" (primary), "Apartment rental agency" (secondary), 20+ photos, link to `/book-now/`.
7. Paste the GA4 ID, verification codes, review link and social profile URLs into `lib/site.ts`.
8. Review the house rules, cancellation policy and approximate travel times before launch.
