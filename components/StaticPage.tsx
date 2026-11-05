import type { ReactNode } from 'react';
import { breadcrumbLd, webPageLd } from '@/lib/seo';
import { img } from '@/lib/images';
import { CtaBand, Headline, JsonLd, Breadcrumbs } from './Blocks';

/** Shell for hand-written core pages: compact editorial header, no booking bar. */
export default function StaticPage({
  path, label, h1, lead, image, title, description, children, extraLd = [], wide = false,
}: {
  path: string; label: string; h1: string; lead: string; image: string; title: string; description: string;
  children: ReactNode; extraLd?: object[]; wide?: boolean;
}) {
  const crumbs = [{ href: '/', label: 'Home' }, { href: path, label }];
  return (
    <>
      <section className="wrap pb-14 pt-8 sm:pt-12">
        <Breadcrumbs items={crumbs} />
        <div className="mt-8 grid gap-6 border-b border-line pb-12 lg:mt-10 lg:grid-cols-[1fr_minmax(0,24rem)] lg:items-end lg:gap-16">
          <h1 className="display text-[2.6rem] sm:text-6xl lg:text-[4.75rem]"><Headline text={h1} /></h1>
          <p className="lead">{lead}</p>
        </div>
      </section>
      <div className={`wrap ${wide ? '' : 'max-w-[1080px]'}`}>{children}</div>
      <CtaBand image={image} />
      <JsonLd data={[webPageLd(path, title, description, img(image).src), breadcrumbLd(crumbs), ...extraLd]} />
    </>
  );
}
