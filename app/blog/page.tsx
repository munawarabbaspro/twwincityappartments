import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { POSTS } from '@/data';
import { img } from '@/lib/images';
import { breadcrumbLd, itemListLd, pageMeta } from '@/lib/seo';
import { Breadcrumbs, CtaBand, JsonLd } from '@/components/Blocks';

export const metadata = pageMeta({
  path: '/blog/',
  title: 'Bahria Town Stay Guides & Travel Tips | TwinCity Blog',
  description: 'Guides to Bahria Town phases, prices, safe booking tips, food, shopping and things to do near your room or apartment. Updated regularly.',
});

export default function BlogIndex() {
  const crumbs = [{ href: '/', label: 'Home' }, { href: '/blog/', label: 'Journal' }];
  const [lead, ...rest] = POSTS;
  const li = img(lead.image);
  return (
    <>
      <section className="wrap pb-12 pt-8 sm:pt-12">
        <Breadcrumbs items={crumbs} />
        <div className="mt-8 grid gap-6 border-b border-line pb-12 lg:mt-10 lg:grid-cols-[1fr_minmax(0,24rem)] lg:items-end lg:gap-16">
          <h1 className="display text-[2.6rem] sm:text-6xl lg:text-[5rem]">Bahria Town <span className="serif-i">Stay Guides</span></h1>
          <p className="lead">Practical guides on phases, prices, safe booking, food and day trips — written by our local team.</p>
        </div>
      </section>

      <div className="wrap">
        {/* Lead story */}
        <Link href={`/blog/${lead.slug}/`} className="group grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-12">
          <div className="img-zoom relative aspect-[4/3] overflow-hidden rounded-[6px] lg:col-span-7">
            <Image src={li.src} alt={li.alt} fill priority sizes="(max-width: 1024px) 100vw, 58vw" className="object-cover" />
            <span className="tag absolute left-4 top-4">Featured guide</span>
          </div>
          <div className="lg:col-span-5">
            <p className="eyebrow">{lead.readMins} min read</p>
            <h2 className="mt-4 text-3xl leading-[1.08] tracking-[-0.03em] transition-colors group-hover:text-bronze sm:text-[2.6rem]">{lead.h1}</h2>
            <p className="mt-5 max-w-md text-[0.9375rem] leading-relaxed text-muted">{lead.description}</p>
            <span className="btn btn-ghost mt-8">Read the guide <ArrowUpRight className="btn-arrow h-4 w-4" strokeWidth={1.5} /></span>
          </div>
        </Link>

        <ul className="mt-24 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((p, i) => {
            const im = img(p.image);
            return (
              <li key={p.slug} data-reveal style={{ ['--d' as string]: `${(i % 3) * 80}ms` }}>
                <Link href={`/blog/${p.slug}/`} className="group block">
                  <div className="img-zoom relative aspect-[3/2] overflow-hidden rounded-[6px]">
                    <Image src={im.src} alt={im.alt} fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover" />
                  </div>
                  <div className="mt-5 flex items-center justify-between border-b border-line pb-3">
                    <span className="numeral text-sm text-faint">{String(i + 2).padStart(2, '0')}</span>
                    <span className="eyebrow">{p.readMins} min read</span>
                  </div>
                  <h2 className="mt-4 text-xl leading-snug tracking-[-0.02em] transition-colors group-hover:text-bronze">{p.h1}</h2>
                  <p className="mt-2 line-clamp-2 text-[0.875rem] text-muted">{p.description}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <CtaBand />
      <JsonLd data={[breadcrumbLd(crumbs), itemListLd('Bahria Town Stay Guides', POSTS.map((p) => ({ href: `/blog/${p.slug}/`, label: p.h1 })))]} />
    </>
  );
}
