import { SITE } from './site';
import { ALL_CONTENT, LISTINGS, POSTS, STATIC_PAGES } from '@/data';
import { img } from './images';

export const LASTMOD = '2026-11-05';

type Entry = { path: string; images?: string[]; priority: number; changefreq: string };

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export function urlset(entries: Entry[]) {
  const body = entries
    .map((e) => {
      const imgs = (e.images ?? [])
        .slice(0, 6)
        .map((k) => `<image:image><image:loc>${SITE.url}${img(k).src}</image:loc></image:image>`)
        .join('');
      return `<url><loc>${esc(SITE.url + e.path)}</loc><lastmod>${LASTMOD}</lastmod><changefreq>${e.changefreq}</changefreq><priority>${e.priority.toFixed(1)}</priority>${imgs}</url>`;
    })
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${body}\n</urlset>`;
}

export function xmlResponse(xml: string) {
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8', 'Cache-Control': 'public, max-age=3600' } });
}

export const SITEMAPS = {
  pages: (): Entry[] => [
    ...STATIC_PAGES.map((s) => ({
      path: s.slug ? `/${s.slug}/` : '/',
      priority: s.slug === '' ? 1 : ['book-now', 'contact'].includes(s.slug) ? 0.9 : ['privacy-policy', 'terms', 'cancellation-policy'].includes(s.slug) ? 0.3 : 0.6,
      changefreq: s.slug === '' ? 'daily' : 'monthly',
      images: s.slug === 'gallery' ? ['luxury-living-room-tv-wall', 'luxury-lounge-curved-sofa', 'double-bed-room-wall-art'] : undefined,
    })),
    ...ALL_CONTENT.filter((p) => p.group !== 'location' && p.group !== 'phaseType').map((p) => ({
      path: `/${p.slug}/`, priority: p.group === 'type' || p.group === 'duration' ? 0.9 : 0.8, changefreq: 'weekly', images: p.images,
    })),
  ],
  locations: (): Entry[] =>
    ALL_CONTENT.filter((p) => p.group === 'location' || p.group === 'phaseType').map((p) => ({
      path: `/${p.slug}/`, priority: p.group === 'location' ? 0.9 : 0.8, changefreq: 'weekly', images: p.images,
    })),
  listings: (): Entry[] => LISTINGS.map((l) => ({ path: `/stay/${l.slug}/`, priority: 0.8, changefreq: 'weekly', images: l.images })),
  blog: (): Entry[] => POSTS.map((p) => ({ path: `/blog/${p.slug}/`, priority: 0.6, changefreq: 'monthly', images: [p.image] })),
};
