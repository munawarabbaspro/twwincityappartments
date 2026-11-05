// Crawls every URL in the sitemaps on a running server and checks core SEO rules.
// Usage: npm run build && npm start, then: node scripts/seo-check.mjs http://localhost:3000
const BASE = process.argv[2] ?? 'http://localhost:3000';
const SITE = 'https://twincityappartments.com';

const get = (p, opts) => fetch(BASE + p, { redirect: 'manual', ...opts });
const problems = [];
const warn = (url, msg) => problems.push(`${url}: ${msg}`);

const index = await (await get('/sitemap.xml')).text();
const maps = [...index.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].replace(SITE, ''));
const urls = [];
for (const m of maps) {
  const xml = await (await get(m)).text();
  urls.push(...[...xml.matchAll(/<url><loc>([^<]+)<\/loc>/g)].map((x) => x[1].replace(SITE, '')));
}
console.log(`Sitemaps: ${maps.length}, URLs: ${urls.length}`);

const titles = new Map(), descs = new Map(), h1s = new Map();
const internalLinks = new Set();
for (const u of urls) {
  const r = await get(u);
  if (r.status !== 200) { warn(u, `status ${r.status}`); continue; }
  const h = await r.text();
  const title = h.match(/<title>([^<]*)<\/title>/)?.[1] ?? '';
  const desc = h.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? '';
  const canon = h.match(/<link rel="canonical" href="([^"]*)"/)?.[1];
  const h1Count = (h.match(/<h1[\s>]/g) ?? []).length;
  const h1 = h.match(/<h1[^>]*>(.*?)<\/h1>/)?.[1]?.replace(/<[^>]+>/g, '');
  if (canon !== SITE + u) warn(u, `canonical ${canon}`);
  if (/noindex/i.test(h)) warn(u, 'contains noindex');
  if (/http:\/\/(?!www\.w3\.org|www\.sitemaps|www\.google\.com\/schemas)/.test(h)) warn(u, 'insecure http:// reference');
  const tl = title.replace(/&amp;/g, '&').replace(/&#x27;/g, "'").length;
  if (tl < 30 || tl > 65) warn(u, `title length ${tl}: ${title}`);
  const dl = desc.replace(/&amp;/g, '&').replace(/&#x27;/g, "'").length;
  if (dl < 110 || dl > 170) warn(u, `description length ${dl}`);
  if (h1Count !== 1) warn(u, `h1 count ${h1Count}`);
  if (titles.has(title)) warn(u, `duplicate title with ${titles.get(title)}`); else titles.set(title, u);
  if (descs.has(desc)) warn(u, `duplicate description with ${descs.get(desc)}`); else descs.set(desc, u);
  if (h1s.has(h1)) warn(u, `duplicate h1 with ${h1s.get(h1)}`); else h1s.set(h1, u);
  for (const s of h.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try { JSON.parse(s[1]); } catch { warn(u, 'invalid JSON-LD'); }
  }
  for (const a of h.matchAll(/href="(\/[^"#?]*)"/g)) internalLinks.add(a[1]);
}

// Every internal link should resolve with 200 (no redirect chains, no 404s)
for (const l of internalLinks) {
  if (/^\/(_next|images|icon|manifest)/.test(l) || /\.(xml|txt|svg|webp|jpg)$/.test(l)) continue;
  const r = await get(l);
  if (r.status !== 200) warn(l, `internal link status ${r.status}`);
}
// Orphan check: every sitemap URL is linked from somewhere
for (const u of urls) if (!internalLinks.has(u)) warn(u, 'not linked from any page (orphan)');

// Redirects & files
const r1 = await get('/about');
if (r1.status !== 308 || r1.headers.get('location') !== '/about/') warn('/about', `expected 308 -> /about/, got ${r1.status} ${r1.headers.get('location')}`);
for (const f of ['/robots.txt', '/sitemap.xml', '/llms.txt', '/llms-full.txt', '/manifest.webmanifest', '/og-image.jpg']) {
  const r = await get(f);
  if (r.status !== 200) warn(f, `status ${r.status}`);
}
const nf = await get('/this-does-not-exist/');
if (nf.status !== 404) warn('/this-does-not-exist/', `expected 404, got ${nf.status}`);

console.log(`Checked ${urls.length} pages and ${internalLinks.size} internal links.`);
console.log(problems.length ? `\n${problems.length} problems:\n` + problems.join('\n') : 'No problems found.');
