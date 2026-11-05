import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';
import {
  ArrowRight, ArrowUpRight, Bath, BedDouble, Car, ChefHat, Coffee, Droplets, KeyRound, Lock, Phone, Plus,
  ShieldCheck, Snowflake, Sparkles, UtensilsCrossed, WashingMachine, Wifi, Zap, Sofa, type LucideIcon,
} from 'lucide-react';
import { AMENITY_GROUPS, PRICE_ROWS, SITE, telLink, waLink } from '@/lib/site';
import { img } from '@/lib/images';
import type { Faq, PriceKey } from '@/lib/types';
import { WhatsAppIcon } from './Icons';
import QuickBook from './QuickBook';

/* ------------------------------------------------------------------ */
/* Primitives                                                          */
/* ------------------------------------------------------------------ */

export function JsonLd({ data }: { data: object | object[] }) {
  const arr = Array.isArray(data) ? data : [data];
  return (
    <>
      {arr.map((d, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d).replace(/</g, '\\u003c') }} />
      ))}
    </>
  );
}

/** Splits a heading so the place / final phrase is set in the italic serif. Text content stays identical (SEO-safe). */
export function Headline({ text }: { text: string }) {
  const m = text.match(/^(.*\s(?:in|near|for|with|from)\s)(.+)$/i) ?? text.match(/^(.*\s)(\S+)$/);
  if (!m) return <>{text}</>;
  return (<>{m[1]}<span className="serif-i">{m[2]}</span></>);
}

export function SectionHead({ eyebrow, title, aside, className = '' }: { eyebrow?: string; title: ReactNode; aside?: ReactNode; className?: string }) {
  return (
    <div className={`flex flex-col gap-4 md:flex-row md:items-end md:justify-between ${className}`} data-reveal>
      <div>
        {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
        <h2 className="h-section max-w-2xl">{title}</h2>
      </div>
      {aside && <div className="text-sm text-muted md:max-w-xs md:text-right">{aside}</div>}
    </div>
  );
}

export function WaButton({ message, label = 'Book on WhatsApp', size = '', tone = 'primary', className = '', cta = 'whatsapp' }: { message?: string; label?: string; size?: '' | 'btn-sm' | 'btn-lg'; tone?: 'primary' | 'light'; className?: string; cta?: string }) {
  return (
    <a href={waLink(message)} target="_blank" rel="noopener" data-cta={cta} className={`btn ${tone === 'light' ? 'btn-light' : 'btn-primary'} ${size} !pl-2 ${className}`}>
      <span className="wa-dot"><WhatsAppIcon className="h-3.5 w-3.5" /></span>
      {label}
      <ArrowUpRight className="btn-arrow h-4 w-4" strokeWidth={1.5} />
    </a>
  );
}

export function CtaButtons({ message, center = false, light = false }: { message?: string; center?: boolean; light?: boolean }) {
  return (
    <div className={`flex flex-wrap gap-3 ${center ? 'justify-center' : ''}`}>
      <WaButton message={message} tone={light ? 'light' : 'primary'} />
      <a href={telLink} data-cta="call" className={`btn ${light ? 'btn-ghost-dark' : 'btn-ghost'}`}>
        <Phone className="h-4 w-4" strokeWidth={1.5} /> {SITE.phoneDisplay}
      </a>
    </div>
  );
}

export function Breadcrumbs({ items, tone = 'ink' }: { items: { href: string; label: string }[]; tone?: 'ink' | 'paper' }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className={`eyebrow flex flex-wrap items-center gap-x-2 gap-y-1 ${tone === 'paper' ? '!text-paper/60' : ''}`}>
        {items.map((it, i) => (
          <li key={it.href} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden="true" className="opacity-50">/</span>}
            {i === items.length - 1 ? (
              <span aria-current="page" className={tone === 'paper' ? 'text-paper' : 'text-ink'}>{it.label}</span>
            ) : (
              <Link href={it.href} className="link-u">{it.label}</Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

export function PageHero({
  h1, lead, image, images, crumbs, stat, showBook = true,
}: {
  h1: string; lead: string; image: string; images?: string[]; crumbs?: { href: string; label: string }[];
  message?: string; badge?: string; stat?: { value: string; label: string }; showBook?: boolean;
}) {
  const main = img(image);
  const second = images?.[1] ? img(images[1]) : null;
  const s = stat ?? { value: 'Rs 4,500', label: 'Short stays from. Full nights from Rs 6,000 and monthly from Rs 55,000.' };
  return (
    <section className="pb-14 pt-8 sm:pt-12">
      <div className="wrap">
        {crumbs && <Breadcrumbs items={crumbs} />}
        <div className="mt-8 grid gap-8 lg:mt-10 lg:grid-cols-[1fr_300px] lg:items-end lg:gap-16">
          <div>
            <h1 className="display text-[2.6rem] sm:text-6xl lg:text-[5.25rem]"><Headline text={h1} /></h1>
            <p className="lead mt-6 max-w-xl">{lead}</p>
          </div>
          <div className="flex items-end gap-5 border-t border-line pt-5 lg:block lg:border-0 lg:pt-0">
            <p className="numeral text-5xl sm:text-6xl">{s.value}</p>
            <p className="max-w-[16rem] text-[0.8125rem] leading-relaxed text-muted lg:mt-3">{s.label}</p>
          </div>
        </div>
        {showBook && <div className="mt-10"><QuickBook /></div>}
      </div>

      <div className="wrap mt-10">
        <div className="grid gap-3 md:grid-cols-12">
          <figure className="img-zoom relative aspect-[4/3] overflow-hidden rounded-[6px] md:col-span-8 md:aspect-[16/10]">
            <Image src={main.src} alt={main.alt} fill priority sizes="(max-width: 768px) 100vw, 66vw" className="object-cover" />
            <span className="tag absolute left-4 top-4">Real photo</span>
          </figure>
          {second && (
            <figure className="img-zoom relative hidden overflow-hidden rounded-[6px] md:col-span-4 md:block">
              <Image src={second.src} alt={second.alt} fill sizes="33vw" className="object-cover" />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/75 to-transparent p-5 text-[0.8125rem] text-paper/90">{second.alt}</figcaption>
            </figure>
          )}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Content blocks                                                      */
/* ------------------------------------------------------------------ */

export function QuickAnswer({ text, label = 'In brief' }: { text: string; label?: string }) {
  return (
    <div className="grid gap-4 border-y border-line py-8 md:grid-cols-[160px_1fr] md:gap-10" data-reveal>
      <p className="eyebrow pt-1.5">{label}</p>
      <p className="quick-answer max-w-3xl text-xl leading-[1.55] tracking-[-0.01em] text-ink sm:text-[1.4rem]">{text}</p>
    </div>
  );
}

export function PriceTable({ keys, message }: { keys?: PriceKey[]; message?: string }) {
  const rows = keys?.length ? PRICE_ROWS.filter((r) => keys.includes(r.key as PriceKey)) : PRICE_ROWS;
  return (
    <section aria-labelledby="prices" className="rounded-[14px] border border-line bg-surface p-6">
      <div className="flex items-baseline justify-between">
        <h2 id="prices" className="text-lg tracking-[-0.02em]">Rates</h2>
        <span className="eyebrow">PKR · fixed</span>
      </div>
      <dl className="mt-4">
        {rows.map((r) => (
          <div key={r.stay + r.room} className="flex items-baseline justify-between gap-4 border-t border-line py-3.5">
            <dt className="text-[0.8125rem] leading-snug">
              <span className="block text-ink">{r.room}</span>
              <span className="text-muted">{r.stay}</span>
            </dt>
            <dd className="shrink-0 text-right text-[0.9375rem] font-medium tabular-nums">{r.price}</dd>
          </div>
        ))}
      </dl>
      <WaButton message={message} label="Check availability" className="mt-5 w-full" cta="whatsapp-prices" />
      <p className="mt-4 text-xs leading-relaxed text-muted">Breakfast, food and event décor available on demand. Full apartments at our best rates.</p>
    </section>
  );
}

export function Gallery({ keys, title = 'Photos', layout = 'mosaic' }: { keys: string[]; title?: string; layout?: 'mosaic' | 'masonry' }) {
  const list = layout === 'masonry' ? keys : keys.slice(0, 6);
  const head = (
    <div className="flex items-end justify-between gap-4" data-reveal>
      <h2 className="text-2xl tracking-[-0.025em] sm:text-3xl">{title}</h2>
      <span className="eyebrow">{list.length} photos</span>
    </div>
  );
  if (layout === 'masonry') {
    return (
      <section aria-label={title}>
        {head}
        <div className="mt-6 columns-2 gap-3 md:columns-3 lg:columns-4">
          {list.map((k) => {
            const im = img(k);
            return (
              <figure key={k} className="img-zoom mb-3 break-inside-avoid overflow-hidden rounded-[6px] bg-paper-2" data-reveal>
                <Image src={im.src} alt={im.alt} width={im.width} height={im.height} sizes="(max-width: 768px) 50vw, 25vw" className="h-auto w-full" loading="lazy" />
              </figure>
            );
          })}
        </div>
      </section>
    );
  }
  return (
    <section aria-label={title}>
      {head}
      {/* Mobile: swipeable strip. Desktop: editorial mosaic. */}
      <div className="-mx-4 mt-6 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-2 sm:-mx-6 sm:px-6 md:mx-0 md:grid md:grid-cols-4 md:grid-rows-2 md:overflow-visible md:px-0 md:pb-0 [scrollbar-width:none]">
        {list.map((k, i) => {
          const im = img(k);
          return (
            <figure key={k} className={`img-zoom relative w-[78%] shrink-0 snap-start overflow-hidden rounded-[6px] bg-paper-2 md:w-auto ${i === 0 ? 'aspect-[3/4] md:col-span-2 md:row-span-2 md:aspect-auto' : 'aspect-[3/4] md:aspect-[4/3]'} ${i > 4 ? 'md:hidden' : ''}`}>
              <Image src={im.src} alt={im.alt} fill sizes="(max-width: 768px) 78vw, (max-width: 1280px) 50vw, 640px" className="object-cover" loading="lazy" />
            </figure>
          );
        })}
      </div>
    </section>
  );
}

const AMENITY_ICONS: Record<string, LucideIcon> = {
  'Attached or private bathroom': Bath, 'Quality furniture': Sofa, 'Climate control': Snowflake, 'High-speed Wi-Fi': Wifi,
  'Kitchenette or shared kitchen': ChefHat, 'Clean drinking water': Droplets, 'Breakfast on demand': Coffee, 'Food on demand': UtensilsCrossed,
  'Electricity, gas and water': Zap, Laundry: WashingMachine, 'Power backup': Zap, 'Event decoration': Sparkles,
  'Car and bike parking': Car, '24/7 security': ShieldCheck, 'Gated community': Lock, 'Easy check-in': KeyRound,
};

export function Amenities({ compact = false }: { compact?: boolean }) {
  return (
    <section aria-labelledby="amenities">
      <SectionHead eyebrow="Included" title={<>Facilities in <span className="serif-i">every stay</span></>} aside="The same standard in every room and apartment, from a two-hour stay to a twelve-month one." />
      <div className="mt-10 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {AMENITY_GROUPS.map((g, gi) => (
          <div key={g.title} data-reveal style={{ ['--d' as string]: `${gi * 80}ms` }}>
            <p className="eyebrow border-b border-ink pb-3 !text-ink">{g.title}</p>
            <ul>
              {g.items.map(([name, desc]) => {
                const Icon = AMENITY_ICONS[name] ?? BedDouble;
                return (
                  <li key={name} className="flex gap-3 border-b border-line py-3.5">
                    <Icon className="mt-0.5 h-[18px] w-[18px] shrink-0 text-bronze" strokeWidth={1.25} />
                    <span className="text-[0.875rem] leading-snug">
                      <span className="text-ink">{name}</span>
                      {!compact && <span className="mt-0.5 block text-[0.8125rem] text-muted">{desc}</span>}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export function FaqList({ faqs, title = 'Frequently asked questions', intro }: { faqs: Faq[]; title?: string; intro?: string }) {
  const id = `faq-${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
  return (
    <section aria-labelledby={id} className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] lg:gap-16">
      <div className="lg:sticky lg:top-28 lg:self-start" data-reveal>
        <p className="eyebrow mb-3">Questions</p>
        <h2 id={id} className="h-section">{title}</h2>
        <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">{intro ?? 'Something not covered here? Our team replies on WhatsApp day and night.'}</p>
        <a href={waLink('Hi TwinCity Appartments, I have a question.')} target="_blank" rel="noopener" data-cta="whatsapp-faq" className="link-u mt-5 inline-flex items-center gap-2 text-sm text-ink">
          Ask a question <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
        </a>
      </div>
      <div className="border-t border-ink" data-reveal>
        {faqs.map((f, i) => (
          <details key={f.q} className="group border-b border-line" open={i === 0}>
            <summary className="flex items-start justify-between gap-6 py-5">
              <h3 className="text-[1.0625rem] leading-snug tracking-[-0.01em] transition-colors group-hover:text-bronze">{f.q}</h3>
              <span className="faq-icon mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full border border-line transition-transform duration-300">
                <Plus className="h-3.5 w-3.5" strokeWidth={1.5} />
              </span>
            </summary>
            <p className="faq-body max-w-2xl pb-6 pr-10 text-[0.9375rem] leading-relaxed text-ink-2">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function HowToBook() {
  const steps = [
    ['Message us', `Send your dates, guests and preferred area on WhatsApp — ${SITE.phoneDisplay}.`],
    ['Receive photos & price', 'We reply with real photos, the exact price and a location pin. No surprises.'],
    ['Check in', 'Show your CNIC, pay on arrival and settle in. We are a message away throughout.'],
  ];
  return (
    <section aria-labelledby="how">
      <SectionHead eyebrow="How it works" title={<>Booked in <span className="serif-i">three messages</span></>} />
      <ol className="mt-10 grid border-t border-line md:grid-cols-3">
        {steps.map(([t, d], i) => (
          <li key={t} className={`py-8 md:px-8 md:first:pl-0 md:last:pr-0 ${i > 0 ? 'border-t border-line md:border-l md:border-t-0' : ''}`} data-reveal style={{ ['--d' as string]: `${i * 100}ms` }}>
            <span className="numeral text-5xl text-bronze">0{i + 1}</span>
            <h3 className="mt-6 text-lg tracking-[-0.015em]">{t}</h3>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted">{d}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

/** Full-bleed closing band. Place outside any width-constrained container. */
export function CtaBand({ title, text, message, image = 'luxury-living-room-tv-wall' }: { title?: ReactNode; text?: string; message?: string; image?: string }) {
  const im = img(image);
  return (
    <section className="relative isolate mt-24 overflow-hidden bg-ink text-paper">
      <div className="absolute inset-y-0 right-0 -z-10 hidden w-[46%] lg:block">
        <Image src={im.src} alt="" fill sizes="46vw" className="object-cover opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/40 to-transparent" />
      </div>
      <div className="wrap py-20 sm:py-28">
        <div className="max-w-2xl" data-reveal>
          <p className="eyebrow !text-paper/50">Reservations · 24/7</p>
          <h2 className="mt-5 text-[2.4rem] leading-[1.02] tracking-[-0.035em] sm:text-6xl">
            {title ?? <>Your stay in Bahria Town, <span className="serif-i text-bronze-soft">arranged.</span></>}
          </h2>
          <p className="mt-6 max-w-lg text-[0.9375rem] leading-relaxed text-paper/70">{text ?? 'Short time from Rs 4,500 · Full night from Rs 6,000 · Monthly from Rs 55,000. One WhatsApp message and we take care of the rest.'}</p>
          <div className="mt-9"><CtaButtons message={message} light /></div>
        </div>
      </div>
    </section>
  );
}

/** Editorial index list of links: number · label · arrow */
export function RelatedLinks({ title, links, eyebrow = 'Explore' }: { title: string; links: { href: string; label: string }[]; eyebrow?: string }) {
  return (
    <section aria-label={title}>
      <SectionHead eyebrow={eyebrow} title={title} />
      <ul className="mt-8 grid border-t border-ink md:grid-cols-2 md:gap-x-12">
        {links.map((l, i) => (
          <li key={l.href} className="border-b border-line" data-reveal style={{ ['--d' as string]: `${(i % 6) * 50}ms` }}>
            <Link href={l.href} className="group flex items-center gap-5 py-5">
              <span className="numeral w-7 text-sm text-faint">{String(i + 1).padStart(2, '0')}</span>
              <span className="flex-1 text-[1.0625rem] tracking-[-0.015em] transition-transform duration-500 group-hover:translate-x-1.5">{l.label}</span>
              <span className="grid h-9 w-9 place-items-center rounded-full border border-line transition-all duration-300 group-hover:border-ink group-hover:bg-ink group-hover:text-paper">
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:-rotate-45" strokeWidth={1.5} />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function TrustRow() {
  const items = [
    ['24/7', 'WhatsApp replies'],
    ['13', 'Bahria Town areas'],
    ['0', 'Hidden charges'],
    ['100%', 'CNIC-verified guests'],
  ];
  return (
    <dl className="grid grid-cols-2 border-y border-line md:grid-cols-4">
      {items.map(([n, l], i) => (
        <div key={l} className={`py-7 md:px-8 md:first:pl-0 ${i % 2 === 1 ? 'border-l border-line pl-5' : ''} ${i >= 2 ? 'border-t border-line md:border-t-0' : ''} ${i === 2 ? 'md:border-l md:pl-8' : ''}`} data-reveal style={{ ['--d' as string]: `${i * 80}ms` }}>
          <dt className="sr-only">{l}</dt>
          <dd><span className="numeral block text-5xl">{n}</span><span className="mt-2 block text-[0.8125rem] text-muted">{l}</span></dd>
        </div>
      ))}
    </dl>
  );
}
