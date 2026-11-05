import Link from 'next/link';
import type { PageDef } from '@/lib/types';
import { breadcrumbTrail, linkFor, LISTINGS } from '@/data';
import { img } from '@/lib/images';
import { SITE, telLink } from '@/lib/site';
import { breadcrumbLd, faqLd, itemListLd, lodgingLd, serviceLd, webPageLd } from '@/lib/seo';
import { Amenities, CtaBand, FaqList, Gallery, HowToBook, JsonLd, PageHero, PriceTable, QuickAnswer, RelatedLinks, SectionHead } from './Blocks';
import ListingCard from './ListingCard';

function listingsFor(page: PageDef) {
  const rel = LISTINGS.filter((l) => l.hubs.includes(page.slug) || page.related.some((r) => l.hubs.includes(r)));
  return (rel.length >= 3 ? rel : LISTINGS).slice(0, 3);
}

const GROUP_LABEL: Record<PageDef['group'], string> = {
  type: 'Stay type', duration: 'Length of stay', location: 'Location', phaseType: 'Location · stay type', landmark: 'Nearby',
  audience: 'Who it is for', budget: 'Offers', amenity: 'Facilities', event: 'Occasions',
};

export default function ContentPage({ page }: { page: PageDef }) {
  const path = `/${page.slug}/`;
  const crumbs = breadcrumbTrail(page);
  const related = page.related.map(linkFor);
  const listings = listingsFor(page);
  const hero = page.images[0];
  const message = page.wa ?? `Hi TwinCity Appartments, I am interested in: ${page.h1}. Please share availability.`;

  const ld: object[] = [
    webPageLd(path, page.title, page.description, img(hero).src, page.keyword),
    breadcrumbLd(crumbs),
    faqLd(page.faqs),
    itemListLd(page.h1, listings.map((l) => ({ href: `/stay/${l.slug}/`, label: l.name }))),
  ];
  if (page.group === 'location' || page.group === 'phaseType') ld.push(lodgingLd(page.images.slice(0, 3).map((k) => img(k).src)));
  if (page.service) ld.push(serviceLd(page.service, path, page.description));

  return (
    <>
      <PageHero h1={page.h1} lead={page.description} image={hero} images={page.images} crumbs={crumbs} message={message} />

      <div className="wrap space-y-24 sm:space-y-28">
        <QuickAnswer text={page.answer} />

        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-20">
          <article className="min-w-0">
            <p className="eyebrow mb-6">{GROUP_LABEL[page.group]}</p>
            <div className="prose-tc">
              {page.intro.map((p, i) => (
                <p key={p.slice(0, 40)} className={i === 0 ? 'text-lg !leading-[1.7] text-ink first-letter:float-left first-letter:mr-1.5 first-letter:mt-1 first-letter:font-[family-name:var(--font-serif)] first-letter:text-[3.6rem] first-letter:leading-[0.85]' : ''}>{p}</p>
              ))}
              {page.sections.map((s) => (
                <section key={s.h2} data-reveal>
                  <h2>{s.h2}</h2>
                  {s.p.map((p) => <p key={p.slice(0, 40)}>{p}</p>)}
                  {s.bullets && <ul>{s.bullets.map((b) => <li key={b}>{b}</li>)}</ul>}
                </section>
              ))}
            </div>
          </article>

          <aside className="min-w-0 space-y-5 lg:sticky lg:top-24 lg:self-start">
            <PriceTable keys={page.prices} message={message} />
            <div className="rounded-[14px] border border-line p-6">
              <p className="eyebrow">Also searched as</p>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {[page.keyword, ...page.secondary].map((k) => (
                  <li key={k} className="rounded-full bg-paper-2 px-2.5 py-1 text-[0.75rem] text-ink-2">{k}</li>
                ))}
              </ul>
              <p className="mt-5 border-t border-line pt-4 text-[0.8125rem] text-muted">
                Prefer to talk? <a href={telLink} data-cta="call-aside" className="link-u text-ink">{SITE.phoneDisplay}</a>
              </p>
            </div>
          </aside>
        </div>

        <section>
          <SectionHead eyebrow="Featured stays" title={<>Rooms that <span className="serif-i">fit this stay</span></>} aside={<Link href="/gallery/" className="link-u text-ink">See every photo →</Link>} />
          <div className="mt-10 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {listings.map((l) => <ListingCard key={l.slug} listing={l} />)}
          </div>
        </section>

        <Gallery keys={[...page.images.slice(2), ...page.images.slice(0, 2)]} title={`Inside: ${page.menu}`} />
      </div>

      <div className="mt-24 bg-paper-2 py-20 sm:mt-28 sm:py-24">
        <div className="wrap"><Amenities compact /></div>
      </div>

      <div className="wrap mt-24 space-y-24 sm:mt-28 sm:space-y-28">
        <HowToBook />
        <FaqList faqs={page.faqs} />
        <RelatedLinks title="Related stays & areas" links={related} />
      </div>

      <CtaBand message={message} image={page.images[2] ?? undefined} />
      <JsonLd data={ld} />
    </>
  );
}
