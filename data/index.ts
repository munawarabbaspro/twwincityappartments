import type { PageDef } from '@/lib/types';
import { HUBS } from './hubs';
import { LOCATIONS, PHASE_TYPES, AREA_LIST } from './locations';
import { INTENTS } from './intents';
import { EVENTS } from './events';
import { LISTINGS } from './listings';
import { POSTS } from './blog';

/** Top-level content pages rendered by app/[slug] */
export const TOP_PAGES: PageDef[] = [...HUBS, ...LOCATIONS, ...INTENTS, ...EVENTS];
export const ALL_CONTENT: PageDef[] = [...TOP_PAGES, ...PHASE_TYPES];

const bySlug = new Map(ALL_CONTENT.map((p) => [p.slug, p]));
export const getPage = (slug: string) => bySlug.get(slug);

export { HUBS, LOCATIONS, PHASE_TYPES, INTENTS, EVENTS, LISTINGS, POSTS, AREA_LIST };

/** Static (hand-built) pages */
export const STATIC_PAGES = [
  { slug: '', label: 'Home', title: 'Daily Rental Rooms & Apartments in Bahria Town' },
  { slug: 'about', label: 'About Us' },
  { slug: 'contact', label: 'Contact & WhatsApp Booking' },
  { slug: 'book-now', label: 'Book Now' },
  { slug: 'faq', label: 'FAQs' },
  { slug: 'reviews', label: 'Guest Reviews' },
  { slug: 'blog', label: 'Stay Guides & Blog' },
  { slug: 'gallery', label: 'Photo Gallery' },
  { slug: 'amenities', label: 'Amenities & Facilities' },
  { slug: 'cancellation-policy', label: 'Cancellation Policy' },
  { slug: 'privacy-policy', label: 'Privacy Policy' },
  { slug: 'terms', label: 'Terms & House Rules' },
];

/** Resolve any internal slug to a link (href always has a trailing slash) */
export function linkFor(slug: string): { href: string; label: string } {
  const href = slug ? `/${slug}/` : '/';
  const page = bySlug.get(slug);
  if (page) return { href, label: page.h1 };
  if (slug.startsWith('blog/')) {
    const post = POSTS.find((p) => `blog/${p.slug}` === slug);
    if (post) return { href, label: post.h1 };
  }
  if (slug.startsWith('stay/')) {
    const l = LISTINGS.find((x) => `stay/${x.slug}` === slug);
    if (l) return { href, label: l.name };
  }
  const s = STATIC_PAGES.find((x) => x.slug === slug);
  if (s) return { href, label: s.label };
  throw new Error(`Unknown internal link: ${slug}`);
}

export function breadcrumbTrail(page: PageDef): { href: string; label: string }[] {
  const trail: { href: string; label: string }[] = [{ href: '/', label: 'Home' }];
  const parents: PageDef[] = [];
  let p = page.parent ? bySlug.get(page.parent) : undefined;
  while (p) {
    parents.unshift(p);
    p = p.parent ? bySlug.get(p.parent) : undefined;
  }
  for (const x of parents) trail.push({ href: `/${x.slug}/`, label: x.menu });
  trail.push({ href: `/${page.slug}/`, label: page.menu });
  return trail;
}

/** Every indexable URL path, used by sitemaps, llms.txt and tests */
export function allPaths() {
  return {
    pages: STATIC_PAGES.map((s) => (s.slug ? `/${s.slug}/` : '/')),
    content: TOP_PAGES.filter((p) => p.group !== 'location').map((p) => `/${p.slug}/`),
    locations: [...LOCATIONS, ...PHASE_TYPES].map((p) => `/${p.slug}/`),
    listings: LISTINGS.map((l) => `/stay/${l.slug}/`),
    blog: POSTS.map((p) => `/blog/${p.slug}/`),
  };
}
