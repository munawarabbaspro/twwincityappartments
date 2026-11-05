import { SITE } from '@/lib/site';
import { LASTMOD, xmlResponse } from '@/lib/sitemap';

export const dynamic = 'force-static';

export function GET() {
  const maps = ['sitemap-pages.xml', 'sitemap-locations.xml', 'sitemap-listings.xml', 'sitemap-blog.xml'];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${maps
    .map((m) => `<sitemap><loc>${SITE.url}/${m}</loc><lastmod>${LASTMOD}</lastmod></sitemap>`)
    .join('\n')}\n</sitemapindex>`;
  return xmlResponse(xml);
}
