import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ArrowUpRight } from 'lucide-react';
import { POSTS, linkFor } from '@/data';
import { img } from '@/lib/images';
import { articleLd, breadcrumbLd, faqLd, pageMeta } from '@/lib/seo';
import { SITE } from '@/lib/site';
import { Breadcrumbs, CtaBand, FaqList, Headline, JsonLd, PriceTable, RelatedLinks } from '@/components/Blocks';

export const dynamicParams = false;
export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

type P = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { slug } = await params;
  const p = POSTS.find((x) => x.slug === slug);
  if (!p) return {};
  return pageMeta({ path: `/blog/${p.slug}/`, title: p.title, description: p.description, image: img(p.image).src, type: 'article', keywords: [p.keyword] });
}

const fmt = (d: string) => new Date(d).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

export default async function PostPage({ params }: P) {
  const { slug } = await params;
  const p = POSTS.find((x) => x.slug === slug);
  if (!p) notFound();
  const path = `/blog/${p.slug}/`;
  const crumbs = [{ href: '/', label: 'Home' }, { href: '/blog/', label: 'Journal' }, { href: path, label: p.h1 }];
  const hero = img(p.image);
  const ld: object[] = [articleLd({ path, title: p.title, description: p.description, image: hero.src, date: p.date, updated: p.updated }), breadcrumbLd(crumbs)];
  if (p.faqs?.length) ld.push(faqLd(p.faqs));
  const more = POSTS.filter((x) => x.slug !== p.slug).slice(0, 4);

  return (
    <>
      <header className="wrap pb-12 pt-8 sm:pt-12">
        <Breadcrumbs items={crumbs} />
        <div className="mx-auto mt-12 max-w-4xl text-center">
          <p className="eyebrow">Journal · {p.readMins} min read</p>
          <h1 className="display mt-6 text-[2.5rem] sm:text-6xl lg:text-[4.25rem]"><Headline text={p.h1} /></h1>
          <p className="lead mx-auto mt-6 max-w-2xl">{p.description}</p>
          <p className="mt-6 text-[0.8125rem] text-muted">
            By the {SITE.name} team · Updated <time dateTime={p.updated}>{fmt(p.updated)}</time>
          </p>
        </div>
      </header>

      <div className="wrap">
        <figure className="relative aspect-[4/3] overflow-hidden rounded-[6px] sm:aspect-[21/9]">
          <Image src={hero.src} alt={hero.alt} fill priority sizes="100vw" className="object-cover" />
        </figure>
      </div>

      <div className="wrap mt-16 grid gap-14 lg:grid-cols-[220px_minmax(0,1fr)_300px] lg:gap-14">
        {/* Table of contents */}
        <nav aria-label="Contents" className="lg:sticky lg:top-24 lg:self-start">
          <p className="eyebrow border-b border-ink pb-3 !text-ink">In this guide</p>
          <ol className="text-[0.8125rem]">
            {p.sections.map((s, i) => (
              <li key={s.h2} className="border-b border-line">
                <a href={`#s${i}`} className="flex gap-3 py-2.5 text-ink-2 transition-colors hover:text-ink">
                  <span className="numeral text-faint">{String(i + 1).padStart(2, '0')}</span>{s.h2}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <article className="min-w-0">
          <div className="prose-tc">
            {p.intro.map((t, i) => (
              <p key={t.slice(0, 30)} className={i === 0 ? 'text-xl !leading-[1.65] text-ink' : ''}>{t}</p>
            ))}
            {p.sections.map((s, i) => (
              <section key={s.h2} id={`s${i}`} className="scroll-mt-28">
                <h2>{s.h2}</h2>
                {s.p.map((t) => <p key={t.slice(0, 30)}>{t}</p>)}
                {s.bullets && <ul>{s.bullets.map((b) => <li key={b}>{b}</li>)}</ul>}
              </section>
            ))}
          </div>
        </article>

        <aside className="min-w-0 space-y-6 lg:sticky lg:top-24 lg:self-start">
          <PriceTable />
        </aside>
      </div>

      <div className="wrap mt-24 space-y-24 sm:space-y-28">
        {p.faqs?.length ? <FaqList faqs={p.faqs} /> : null}
        <RelatedLinks title="Useful pages" links={p.links.map(linkFor)} eyebrow="Read next" />
        <section>
          <p className="eyebrow border-b border-ink pb-3 !text-ink">More from the journal</p>
          <ul className="grid gap-x-6 sm:grid-cols-2 lg:grid-cols-4">
            {more.map((m) => (
              <li key={m.slug} className="border-b border-line" data-reveal>
                <Link href={`/blog/${m.slug}/`} className="group flex h-full items-start justify-between gap-4 py-6">
                  <span className="text-[1.0625rem] leading-snug tracking-[-0.015em] transition-colors group-hover:text-bronze">{m.h1}</span>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-faint transition-colors group-hover:text-ink" strokeWidth={1.5} />
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <CtaBand image={p.image} />
      <JsonLd data={ld} />
    </>
  );
}
