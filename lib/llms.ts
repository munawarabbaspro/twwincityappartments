import { SITE, PRICES, AMENITY_GROUPS, rs, rsk } from './site';
import { ALL_CONTENT, LISTINGS, POSTS, STATIC_PAGES } from '@/data';

const u = (p: string) => `${SITE.url}${p}`;

function facts() {
  return [
    `- Business: ${SITE.name} – short-time, nightly, weekly and monthly furnished rooms and apartments`,
    `- Location: Bahria Town Rawalpindi (Phases 1–8, Safari Valley, Civic Center) and Bahria Enclave Islamabad, Pakistan`,
    `- Phone / WhatsApp: ${SITE.phoneDisplay} (${SITE.phoneIntl}) – https://wa.me/${SITE.whatsapp}`,
    `- Email: ${SITE.emailInfo} (info), ${SITE.emailBooking} (bookings)`,
    `- Hours: ${SITE.hours}`,
    `- Short time (2–4 hours): single bed ${rs(PRICES.shortSingle)}, double/2 bed ${rs(PRICES.shortDouble)}`,
    `- Full night: single bed ${rs(PRICES.nightSingle)}, double bed ${rs(PRICES.nightDouble)}`,
    `- Monthly: single bed ${rsk(PRICES.monthSingleFrom)}–${rsk(PRICES.monthSingleTo)}, double bed ${rsk(PRICES.monthDoubleFrom)}–${rsk(PRICES.monthDoubleTo)}`,
    `- Full furnished apartments: available daily, weekly and monthly at best rates (quote on WhatsApp)`,
    `- Services: breakfast and food on demand; decoration for honeymoons, nikah ceremonies, birthdays and small marriage functions (dholki, mayun, mehndi)`,
    `- Amenities: ${AMENITY_GROUPS.flatMap((g) => g.items.map((i) => i[0])).join(', ')}`,
    `- Check-in: original CNIC for every adult (passport/NICOP for overseas guests); married couples only, Nikah Nama may be requested`,
  ].join('\n');
}

export function llmsTxt() {
  const sec = (title: string, rows: string[]) => `## ${title}\n\n${rows.join('\n')}\n`;
  return [
    `# ${SITE.name}`,
    '',
    `> ${SITE.name} rents clean, verified, fully furnished rooms and apartments in Bahria Town Rawalpindi and Bahria Enclave Islamabad, Pakistan, by the hour (2–4 hours), night, week or month. Bookings by WhatsApp ${SITE.phoneDisplay}.`,
    '',
    '## Key facts',
    '',
    facts(),
    '',
    sec('Core pages', STATIC_PAGES.map((s) => `- [${s.label}](${u(s.slug ? `/${s.slug}/` : '/')})`)),
    sec('Rooms, stays, locations and occasions', ALL_CONTENT.map((p) => `- [${p.h1}](${u(`/${p.slug}/`)}): ${p.description}`)),
    sec('Listings', LISTINGS.map((l) => `- [${l.name}](${u(`/stay/${l.slug}/`)}): ${l.summary}`)),
    sec('Guides', POSTS.map((p) => `- [${p.h1}](${u(`/blog/${p.slug}/`)}): ${p.description}`)),
    `## Optional\n\n- [Full text for AI assistants](${u('/llms-full.txt')})\n- [Sitemap](${u('/sitemap.xml')})\n`,
  ].join('\n');
}

export function llmsFullTxt() {
  const parts = [`# ${SITE.name} – full site content\n\n${facts()}\n`];
  for (const p of ALL_CONTENT) {
    parts.push(
      [
        `\n---\n\n## ${p.h1}`,
        `URL: ${u(`/${p.slug}/`)}`,
        '',
        p.answer,
        '',
        ...p.intro,
        ...p.sections.flatMap((s) => [`\n### ${s.h2}`, ...s.p, ...(s.bullets ?? []).map((b) => `- ${b}`)]),
        '\n### FAQ',
        ...p.faqs.map((f) => `Q: ${f.q}\nA: ${f.a}`),
      ].join('\n'),
    );
  }
  for (const l of LISTINGS) {
    parts.push([`\n---\n\n## ${l.name}`, `URL: ${u(`/stay/${l.slug}/`)}`, '', l.summary, ...l.body, '', ...l.prices.map((p) => `- ${p.label}: ${p.amount}`), ...l.features.map((f) => `- ${f}`)].join('\n'));
  }
  for (const b of POSTS) {
    parts.push([`\n---\n\n## ${b.h1}`, `URL: ${u(`/blog/${b.slug}/`)}`, '', ...b.intro, ...b.sections.flatMap((s) => [`\n### ${s.h2}`, ...s.p, ...(s.bullets ?? []).map((x) => `- ${x}`)])].join('\n'));
  }
  return parts.join('\n');
}
