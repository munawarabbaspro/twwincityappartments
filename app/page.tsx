import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { HUBS, LOCATIONS, EVENTS, LISTINGS, POSTS } from '@/data';
import { img, SETS } from '@/lib/images';
import { PRICES, SITE, rs, rsk, waLink } from '@/lib/site';
import { faqLd, lodgingLd, pageMeta, webPageLd } from '@/lib/seo';
import { Amenities, CtaBand, FaqList, Gallery, HowToBook, JsonLd, QuickAnswer, SectionHead, TrustRow } from '@/components/Blocks';
import { WhatsAppIcon } from '@/components/Icons';
import QuickBook from '@/components/QuickBook';
import ListingCard from '@/components/ListingCard';

const TITLE = 'Daily Rooms & Apartments in Bahria Town | TwinCity Appartments';
const DESC = 'Book daily rental rooms, single & double bed rooms and furnished apartments in Bahria Town. Short time from Rs 4,500, nights from Rs 6,000. Book on WhatsApp.';

export const metadata = pageMeta({
  path: '/',
  title: TITLE,
  description: DESC,
  keywords: ['daily rental rooms Bahria Town', 'rooms near me', 'daily apartment booking', 'cheap rooms near me', 'guest house Bahria Town', 'apartments for rent in bahria town rawalpindi'],
});

const FAQS = [
  { q: 'How much is a room per day in Bahria Town?', a: `Short time (2–4 hours) is ${rs(PRICES.shortSingle)} for a single bed and ${rs(PRICES.shortDouble)} for a double. A full night is ${rs(PRICES.nightSingle)} (single) or ${rs(PRICES.nightDouble)} (double).` },
  { q: 'Do you offer monthly rentals?', a: `Yes. Single bed rooms cost ${rsk(PRICES.monthSingleFrom)}–${rsk(PRICES.monthSingleTo)} and double bed rooms ${rsk(PRICES.monthDoubleFrom)}–${rsk(PRICES.monthDoubleTo)} per month. Full apartments are available at our best rates.` },
  { q: 'How do I book?', a: `WhatsApp or call ${SITE.phoneDisplay}. Send your dates and number of guests; we reply with photos, price and location. Pay on arrival for most bookings.` },
  { q: 'What do I need at check-in?', a: 'An original CNIC for each adult guest (passport/NICOP for overseas guests). Married couples may be asked for a Nikah Nama.' },
  { q: 'Is breakfast or food available?', a: 'Yes. Breakfast and meals are available on demand and delivered to your room.' },
  { q: 'Do you host nikah, birthdays or small functions?', a: 'Yes. We decorate apartments for nikah ceremonies, birthdays, honeymoons and small marriage functions such as dholki and mayun.' },
];

const RATES = [
  { t: 'Short time', s: '2–4 hours', a: rs(PRICES.shortSingle), b: rs(PRICES.shortDouble), href: '/short-stay-rooms/' },
  { t: 'Full night', s: 'Overnight stay', a: rs(PRICES.nightSingle), b: rs(PRICES.nightDouble), href: '/rooms-per-night/', featured: true },
  { t: 'Monthly', s: 'Furnished, no long lease', a: `${rsk(PRICES.monthSingleFrom)}–${rsk(PRICES.monthSingleTo).replace('Rs ', '')}`, b: `${rsk(PRICES.monthDoubleFrom)}–${rsk(PRICES.monthDoubleTo).replace('Rs ', '')}`, href: '/monthly-rentals/' },
];

export default function Home() {
  const hero = img('luxury-living-room-tv-wall');
  const heroB = img('luxury-bedroom-golden-ceiling-lights');
  const heroC = img('double-bed-room-wall-art');
  const types = HUBS.filter((h) => h.group === 'type');
  const durations = HUBS.filter((h) => h.group === 'duration');

  return (
    <>
      {/* ---------------- Hero ---------------- */}
      <section className="pb-16 pt-10 sm:pt-14">
        <div className="wrap">
          <p className="eyebrow">Bahria Town · Rawalpindi &amp; Islamabad</p>
          <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_300px] lg:items-end lg:gap-16">
            <h1 className="display text-[2.85rem] sm:text-7xl lg:text-[6.4rem]">
              Daily Rooms &amp; Apartments for Rent in <span className="serif-i">Bahria Town</span>
            </h1>
            <div className="flex items-end gap-5 border-t border-line pt-5 lg:block lg:border-0 lg:pt-0">
              <p className="numeral text-6xl">13</p>
              <p className="max-w-[16rem] text-[0.8125rem] leading-relaxed text-muted lg:mt-3">Areas across Bahria Town Phases 1–8, Safari Valley, Civic Center and Bahria Enclave.</p>
            </div>
          </div>
          <p className="lead mt-8 max-w-2xl">
            Clean, verified single &amp; double bed rooms and fully furnished apartments by the hour, night, week or month. Short time from <strong className="font-medium text-ink">Rs 4,500</strong>, full night from <strong className="font-medium text-ink">Rs 6,000</strong>.
          </p>
          <div className="mt-10"><QuickBook /></div>
        </div>

        {/* Editorial mosaic */}
        <div className="wrap mt-10">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-12 md:grid-rows-[repeat(2,minmax(0,1fr))]">
            <figure className="img-zoom relative col-span-2 aspect-[4/3] overflow-hidden rounded-[6px] md:col-span-8 md:row-span-2 md:aspect-auto md:min-h-[560px]">
              <Image src={hero.src} alt={hero.alt} fill priority sizes="(max-width: 768px) 100vw, 66vw" className="object-cover" />
              <span className="tag absolute left-4 top-4">Luxury 2 bed apartment</span>
            </figure>
            <figure className="img-zoom relative aspect-[3/4] overflow-hidden rounded-[6px] md:col-span-4 md:aspect-auto">
              <Image src={heroB.src} alt={heroB.alt} fill sizes="(max-width: 768px) 50vw, 33vw" className="object-cover" />
            </figure>
            <figure className="img-zoom relative aspect-[3/4] overflow-hidden rounded-[6px] md:col-span-4 md:aspect-auto">
              <Image src={heroC.src} alt={heroC.alt} fill sizes="(max-width: 768px) 50vw, 33vw" className="object-cover" />
              <figcaption className="absolute inset-x-0 bottom-0 hidden bg-gradient-to-t from-ink/75 to-transparent p-5 text-paper md:block">
                <span className="serif-i block text-2xl">From Rs 6,000</span>
                <span className="text-xs text-paper/75">a full night, double rooms Rs 14,500</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <div className="wrap space-y-24 sm:space-y-32">
        <QuickAnswer text={`${SITE.name} rents furnished rooms and apartments across Bahria Town Rawalpindi and Islamabad. Short time (2–4 hours): Rs 4,500 single, Rs 5,500 double. Full night: Rs 6,000 single, Rs 14,500 double. Monthly: Rs 55k–150k single, Rs 100k–250k double. Breakfast, food and event decoration on demand. Book on WhatsApp ${SITE.phoneDisplay}.`} />

        {/* ---------------- Rates ---------------- */}
        <section aria-labelledby="rates">
          <SectionHead eyebrow="Rates · PKR" title={<>Simple, <span className="serif-i">fixed</span> room rates</>} aside="No hidden charges. Full furnished apartments are also available at our best rates." />
          <div className="mt-10 grid border-t border-ink md:grid-cols-3">
            {RATES.map((c, i) => (
              <div key={c.t} className={`relative flex flex-col py-9 md:px-9 md:first:pl-0 md:last:pr-0 ${i > 0 ? 'border-t border-line md:border-l md:border-t-0' : ''}`} data-reveal style={{ ['--d' as string]: `${i * 90}ms` }}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl tracking-[-0.02em]">{c.t}</h3>
                    <p className="mt-1 text-[0.8125rem] text-muted">{c.s}</p>
                  </div>
                  {c.featured && <span className="tag !bg-ink !text-paper">Most booked</span>}
                </div>
                <dl className="mt-8 grid grid-cols-2 gap-4 md:block md:space-y-5">
                  <div><dt className="eyebrow">Single bed</dt><dd className="numeral mt-1.5 text-[2.6rem]">{c.a}</dd></div>
                  <div><dt className="eyebrow">Double bed</dt><dd className="numeral mt-1.5 text-[2.6rem]">{c.b}</dd></div>
                </dl>
                <div className="mt-9 flex items-center gap-4">
                  <a href={waLink(`Hi TwinCity Appartments, I want to book a ${c.t} stay.`)} target="_blank" rel="noopener" data-cta={`whatsapp-price-${i}`} className={`btn btn-sm !pl-1.5 ${c.featured ? 'btn-primary' : 'btn-ghost'}`}>
                    <span className="wa-dot !h-7 !w-7"><WhatsAppIcon className="h-3.5 w-3.5" /></span> Book {c.t.toLowerCase()}
                  </a>
                  <Link href={c.href} className="link-u text-[0.8125rem] text-muted hover:text-ink">Details</Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ---------------- Residences ---------------- */}
        <section aria-labelledby="featured">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between" data-reveal>
            <div>
              <p className="eyebrow mb-3">{LISTINGS.length} stays · Bahria Town</p>
              <h2 id="featured" className="h-section">Rooms worth <span className="serif-i">coming back to</span></h2>
            </div>
            <ul className="flex flex-wrap gap-2">
              {[['All rooms', '/daily-rental-rooms/'], ['Apartments', '/apartments-per-day/'], ['Couples', '/couple-stays/'], ['Families', '/family-apartments/'], ['Monthly', '/monthly-rentals/']].map(([l, h], i) => (
                <li key={h}><Link href={h} className={`chip ${i === 0 ? '!border-ink !bg-ink !text-paper' : ''}`}>{l}</Link></li>
              ))}
            </ul>
          </div>
          <div className="mt-10 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {LISTINGS.map((l) => <ListingCard key={l.slug} listing={l} />)}
          </div>
        </section>

        <TrustRow />

        {/* ---------------- Stay index ---------------- */}
        <section aria-labelledby="types" className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="lg:sticky lg:top-24 lg:self-start" data-reveal>
            <p className="eyebrow mb-3">Find the right stay</p>
            <h2 id="types" className="h-section">From two hours <span className="serif-i">to twelve months</span></h2>
            <figure className="img-zoom relative mt-8 hidden aspect-[4/5] overflow-hidden rounded-[6px] lg:block">
              <Image src={img('family-apartment-lounge-false-ceiling').src} alt={img('family-apartment-lounge-false-ceiling').alt} fill sizes="40vw" className="object-cover" />
            </figure>
          </div>
          <div className="space-y-12">
            {[['Rooms & apartments', types], ['Length of stay', durations]].map(([label, list]) => (
              <div key={label as string}>
                <p className="eyebrow border-b border-ink pb-3 !text-ink">{label as string}</p>
                <ul>
                  {(list as typeof HUBS).map((h, i) => (
                    <li key={h.slug} className="border-b border-line" data-reveal>
                      <Link href={`/${h.slug}/`} className="group grid grid-cols-[2rem_1fr_auto] items-center gap-4 py-5">
                        <span className="numeral text-sm text-faint">{String(i + 1).padStart(2, '0')}</span>
                        <span>
                          <span className="block text-xl tracking-[-0.02em] transition-transform duration-500 group-hover:translate-x-1.5">{h.menu}</span>
                          <span className="mt-1 line-clamp-1 block text-[0.8125rem] text-muted">{h.description}</span>
                        </span>
                        <ArrowUpRight className="h-5 w-5 text-faint transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" strokeWidth={1.25} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* ---------------- Occasions (dark) ---------------- */}
      <section aria-labelledby="occasions" className="mt-24 bg-ink py-24 text-paper sm:mt-32 sm:py-32">
        <div className="wrap">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end" data-reveal>
            <div>
              <p className="eyebrow !text-paper/50">Occasions · décor provided</p>
              <h2 id="occasions" className="mt-4 max-w-3xl text-[2.4rem] leading-[1.02] tracking-[-0.035em] sm:text-6xl">Moments worth <span className="serif-i text-bronze-soft">celebrating</span>, beautifully hosted.</h2>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-paper/60">Honeymoons, nikah ceremonies, birthdays and small marriage functions — decoration, breakfast and food arranged for you.</p>
          </div>
          <ul className="mt-14 grid gap-px overflow-hidden rounded-[6px] bg-line-dark sm:grid-cols-2 lg:grid-cols-3">
            {EVENTS.map((e, i) => {
              const im = img(e.images[0]);
              return (
                <li key={e.slug} className="bg-ink">
                  <Link href={`/${e.slug}/`} className="group flex h-full flex-col p-6 transition-colors duration-500 hover:bg-ink-2 sm:p-7" data-reveal>
                    <div className="img-zoom relative aspect-[16/10] overflow-hidden rounded-[4px]">
                      <Image src={im.src} alt={im.alt} fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
                    </div>
                    <div className="mt-6 flex items-start justify-between gap-4">
                      <div>
                        <span className="numeral text-sm text-paper/40">0{i + 1}</span>
                        <h3 className="mt-2 text-xl tracking-[-0.02em]">{e.menu}</h3>
                        <p className="mt-2 line-clamp-2 text-[0.8125rem] leading-relaxed text-paper/55">{e.description}</p>
                      </div>
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line-dark transition-colors duration-300 group-hover:border-paper group-hover:bg-paper group-hover:text-ink">
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:-rotate-45" strokeWidth={1.5} />
                      </span>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <div className="wrap mt-24 space-y-24 sm:mt-32 sm:space-y-32">
        {/* ---------------- Locations ---------------- */}
        <section aria-labelledby="locations">
          <SectionHead eyebrow="Locations" title={<>Stay in every <span className="serif-i">Bahria Town</span> phase</>} aside={<Link href="/bahria-town/" className="link-u text-ink">Compare all phases →</Link>} />
          <ul className="mt-10 grid border-t border-ink md:grid-cols-2 md:gap-x-12">
            {LOCATIONS.filter((l) => l.slug !== 'bahria-town').map((l, i) => (
              <li key={l.slug} className="border-b border-line" data-reveal style={{ ['--d' as string]: `${(i % 4) * 50}ms` }}>
                <Link href={`/${l.slug}/`} className="group flex items-baseline gap-5 py-5">
                  <span className="numeral w-7 text-sm text-faint">{String(i + 1).padStart(2, '0')}</span>
                  <span className="flex-1">
                    <span className="block text-xl tracking-[-0.02em] transition-colors group-hover:text-bronze">{l.menu}</span>
                    <span className="mt-1 line-clamp-1 block text-[0.8125rem] text-muted">{l.description}</span>
                  </span>
                  <ArrowUpRight className="h-5 w-5 self-center text-faint transition-all group-hover:text-ink" strokeWidth={1.25} />
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* ---------------- Why us (editorial split) ---------------- */}
        <section aria-labelledby="why" className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="relative lg:col-span-6" data-reveal>
            <figure className="img-zoom relative aspect-[4/5] overflow-hidden rounded-[6px]">
              <Image src={img('luxury-lounge-curved-sofa').src} alt={img('luxury-lounge-curved-sofa').alt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            </figure>
            <figure className="img-zoom absolute -bottom-10 right-4 hidden aspect-square w-[42%] overflow-hidden rounded-[6px] border-[6px] border-paper sm:block lg:-right-10">
              <Image src={img('open-kitchen-dining-area').src} alt={img('open-kitchen-dining-area').alt} fill sizes="20vw" className="object-cover" />
            </figure>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 lg:pt-10" data-reveal>
            <p className="eyebrow mb-3">Why TwinCity</p>
            <h2 id="why" className="h-section">Why guests choose {SITE.name}</h2>
            <blockquote className="mt-8 border-l border-bronze pl-6 text-2xl leading-snug tracking-[-0.02em]">
              <span className="serif-i">“The room you see is the room you get. The price we quote is the price you pay.”</span>
            </blockquote>
            <div className="prose-tc mt-8">
              <p>Finding a clean, safe and honest room in Bahria Town can be hard. Classified sites are full of copied photos and unclear prices. Every room and apartment on this website is managed by our own team, photographed as it really is, and priced in writing.</p>
              <p>Whether you need a room for a few hours before a function, a full night after a long drive, a decorated suite for your honeymoon or a furnished apartment for a month, we have the right option, in the right phase, at a fixed price.</p>
              <ul>
                <li>Gated, secure Bahria Town locations with CNIC-verified guests</li>
                <li>Rooms for families, couples, students, business travellers and overseas Pakistanis</li>
                <li>Same-day and late-night check-in</li>
                <li>Direct booking on WhatsApp — no agent commission</li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      <div className="mt-24 bg-paper-2 py-20 sm:mt-32 sm:py-24">
        <div className="wrap"><Amenities /></div>
      </div>

      <div className="wrap mt-24 space-y-24 sm:mt-32 sm:space-y-32">
        <Gallery keys={[...SETS.luxury.slice(0, 3), ...SETS.romantic.slice(0, 1), ...SETS.family.slice(1, 3)]} title="Inside our rooms & apartments" />
        <HowToBook />
        <FaqList faqs={FAQS} />

        {/* ---------------- Journal ---------------- */}
        <section aria-labelledby="guides">
          <SectionHead eyebrow="Journal" title={<>Bahria Town <span className="serif-i">stay guides</span></>} aside={<Link href="/blog/" className="link-u text-ink">All guides →</Link>} />
          <ul className="mt-10 grid gap-x-6 gap-y-12 md:grid-cols-3">
            {POSTS.slice(0, 3).map((p, i) => {
              const im = img(p.image);
              return (
                <li key={p.slug} data-reveal style={{ ['--d' as string]: `${i * 90}ms` }}>
                  <Link href={`/blog/${p.slug}/`} className="group block">
                    <div className="img-zoom relative aspect-[3/2] overflow-hidden rounded-[6px]">
                      <Image src={im.src} alt={im.alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                    </div>
                    <p className="eyebrow mt-5">{p.readMins} min read</p>
                    <h3 className="mt-2 text-xl leading-snug tracking-[-0.02em] transition-colors group-hover:text-bronze">{p.h1}</h3>
                    <p className="mt-2 line-clamp-2 text-[0.875rem] text-muted">{p.description}</p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      </div>

      <CtaBand />
      <JsonLd data={[webPageLd('/', TITLE, DESC, hero.src), lodgingLd(SETS.luxury.slice(0, 4).map((k) => img(k).src)), faqLd(FAQS)]} />
    </>
  );
}
