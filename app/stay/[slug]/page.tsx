import Image from 'next/image';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { BedDouble, Bath, Check, MapPin, Users, Home as HomeIcon } from 'lucide-react';
import { LISTINGS, linkFor } from '@/data';
import { img } from '@/lib/images';
import { accommodationLd, breadcrumbLd, faqLd, pageMeta } from '@/lib/seo';
import { SITE, telLink } from '@/lib/site';
import { Breadcrumbs, CtaBand, FaqList, Gallery, HowToBook, JsonLd, RelatedLinks, SectionHead, WaButton } from '@/components/Blocks';
import ListingCard from '@/components/ListingCard';

export const dynamicParams = false;
export function generateStaticParams() {
  return LISTINGS.map((l) => ({ slug: l.slug }));
}

type P = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { slug } = await params;
  const l = LISTINGS.find((x) => x.slug === slug);
  if (!l) return {};
  return pageMeta({ path: `/stay/${l.slug}/`, title: l.title, description: l.description, image: img(l.images[0]).src, keywords: [l.keyword] });
}

export default async function ListingPage({ params }: P) {
  const { slug } = await params;
  const l = LISTINGS.find((x) => x.slug === slug);
  if (!l) notFound();
  const path = `/stay/${l.slug}/`;
  const crumbs = [{ href: '/', label: 'Home' }, { href: `/${l.hubs[0]}/`, label: linkFor(l.hubs[0]).label }, { href: path, label: l.name }];
  const msg = `Hi TwinCity Appartments, I want to book the ${l.name}. Please share availability.`;
  const from = l.prices.find((p) => p.value);
  const specs = [
    { icon: BedDouble, label: `${l.beds} ${l.beds > 1 ? 'Bedrooms' : 'Bed'}` },
    { icon: Bath, label: `${l.baths} ${l.baths > 1 ? 'Baths' : 'Bath'}` },
    { icon: Users, label: `Up to ${l.guests} guests` },
    { icon: HomeIcon, label: l.type },
  ];
  const shots = l.images.slice(0, 5).map(img);

  return (
    <>
      <section className="wrap pb-10 pt-8 sm:pt-12">
        <Breadcrumbs items={crumbs} />
        <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h1 className="display max-w-4xl text-[2.4rem] sm:text-6xl lg:text-[4.5rem]">{l.h1.split(', ')[0]},{' '}<span className="serif-i">{l.h1.split(', ').slice(1).join(', ')}</span></h1>
            <p className="mt-4 flex items-center gap-2 text-sm text-muted"><MapPin className="h-4 w-4" strokeWidth={1.5} /> Bahria Town, Rawalpindi</p>
          </div>
          <div className="lg:text-right">
            <p className="eyebrow">{from ? `From · ${from.label}` : 'Rates'}</p>
            <p className="numeral mt-2 text-5xl">{from ? from.amount : 'Best rates'}</p>
          </div>
        </div>
      </section>

      {/* Photo mosaic */}
      <div className="wrap">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:grid-rows-2 md:h-[560px]">
          {shots.map((s, i) => (
            <figure key={s.src} className={`img-zoom relative overflow-hidden rounded-[6px] bg-paper-2 ${i === 0 ? 'col-span-2 aspect-[4/3] md:row-span-2 md:aspect-auto' : 'aspect-square md:aspect-auto'} ${i > 2 ? 'hidden md:block' : ''}`}>
              <Image src={s.src} alt={s.alt} fill priority={i === 0} sizes={i === 0 ? '(max-width: 768px) 100vw, 50vw' : '25vw'} className="object-cover" />
              {i === 0 && <span className="tag absolute left-4 top-4">{l.type}</span>}
            </figure>
          ))}
        </div>
      </div>

      <div className="wrap mt-14 grid gap-14 lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-20">
        <article className="min-w-0 space-y-16">
          <ul className="grid grid-cols-2 border-y border-line sm:grid-cols-4">
            {specs.map(({ icon: Icon, label }, i) => (
              <li key={label} className={`flex items-center gap-3 py-5 text-sm ${i % 2 ? 'border-l border-line pl-5' : ''} ${i === 2 ? 'border-t border-line sm:border-l sm:border-t-0 sm:pl-5' : ''} ${i === 3 ? 'border-t sm:border-t-0' : ''}`}>
                <Icon className="h-5 w-5 text-bronze" strokeWidth={1.25} /> {label}
              </li>
            ))}
          </ul>

          <div>
            <p className="quick-answer text-2xl leading-snug tracking-[-0.02em]">{l.summary}</p>
            <div className="prose-tc mt-8">{l.body.map((p) => <p key={p.slice(0, 30)}>{p}</p>)}</div>
          </div>

          <section data-reveal>
            <h2 className="text-2xl tracking-[-0.025em]">Amenities</h2>
            <ul className="mt-6 grid border-t border-ink sm:grid-cols-2 sm:gap-x-10">
              {l.features.map((f) => (
                <li key={f} className="flex items-center gap-3 border-b border-line py-3.5 text-[0.9375rem]"><Check className="h-4 w-4 text-bronze" strokeWidth={1.5} />{f}</li>
              ))}
            </ul>
          </section>

          <section data-reveal>
            <h2 className="text-2xl tracking-[-0.025em]">House rules</h2>
            <ol className="mt-6 border-t border-ink">
              {l.rules.map((r, i) => (
                <li key={r} className="flex gap-5 border-b border-line py-3.5 text-[0.9375rem]"><span className="numeral w-6 text-faint">{String(i + 1).padStart(2, '0')}</span>{r}</li>
              ))}
            </ol>
          </section>

          <section className="rounded-[14px] bg-paper-2 p-7" data-reveal>
            <p className="eyebrow">Location</p>
            <p className="mt-3 max-w-xl text-[0.9375rem] leading-relaxed text-ink-2">Inside gated Bahria Town, Rawalpindi. The exact building and a location pin are shared on WhatsApp when you book.</p>
          </section>
        </article>

        <aside className="min-w-0 lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-[14px] border border-line bg-surface p-6 shadow-[0_24px_60px_-40px_rgba(21,20,18,.4)]">
            <div className="flex items-baseline justify-between">
              <h2 className="text-lg tracking-[-0.02em]">Reserve this stay</h2>
              <span className="eyebrow">PKR</span>
            </div>
            <dl className="mt-4">
              {l.prices.map((p) => (
                <div key={p.label} className="flex items-baseline justify-between gap-3 border-t border-line py-3.5 text-[0.875rem]">
                  <dt className="text-muted">{p.label}</dt><dd className="text-right font-medium tabular-nums">{p.amount}</dd>
                </div>
              ))}
            </dl>
            <WaButton message={msg} label="Book this stay" className="mt-5 w-full" cta="whatsapp-listing" />
            <a href={telLink} data-cta="call-listing" className="btn btn-ghost mt-2 w-full">Call {SITE.phoneDisplay}</a>
            <p className="mt-4 text-center text-xs text-muted">Pay on arrival · CNIC required · Reply within minutes</p>
          </div>
        </aside>
      </div>

      <div className="wrap mt-24 space-y-24 sm:mt-28 sm:space-y-28">
        <Gallery keys={l.images.slice(2)} title={`More of the ${l.name}`} />
        <HowToBook />
        <FaqList faqs={l.faqs} />
        <RelatedLinks title="See similar stays" links={l.hubs.map(linkFor)} />
        <section>
          <SectionHead eyebrow="Also available" title={<>Other rooms <span className="serif-i">&amp; apartments</span></>} />
          <div className="mt-10 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {LISTINGS.filter((x) => x.slug !== l.slug).slice(0, 3).map((x) => <ListingCard key={x.slug} listing={x} />)}
          </div>
        </section>
      </div>

      <CtaBand message={msg} image={l.images[1]} />
      <JsonLd
        data={[
          accommodationLd({ path, name: l.name, description: l.description, images: l.images.map((k) => img(k).src), beds: l.beds, baths: l.baths, guests: l.guests, type: l.type, features: l.features, prices: l.prices }),
          breadcrumbLd(crumbs),
          faqLd(l.faqs),
        ]}
      />
    </>
  );
}
