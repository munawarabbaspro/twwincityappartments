import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import ContentPage from '@/components/ContentPage';
import { PHASE_TYPES, getPage } from '@/data';
import { pageMeta } from '@/lib/seo';
import { img } from '@/lib/images';

export const dynamicParams = false;

export function generateStaticParams() {
  return PHASE_TYPES.map((p) => {
    const [slug, sub] = p.slug.split('/');
    return { slug, sub };
  });
}

type P = { params: Promise<{ slug: string; sub: string }> };

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { slug, sub } = await params;
  const page = getPage(`${slug}/${sub}`);
  if (!page) return {};
  return pageMeta({
    path: `/${page.slug}/`,
    title: page.title,
    description: page.description,
    image: img(page.images[0]).src,
    keywords: [page.keyword, ...page.secondary],
  });
}

export default async function Page({ params }: P) {
  const { slug, sub } = await params;
  const page = getPage(`${slug}/${sub}`);
  if (!page) notFound();
  return <ContentPage page={page} />;
}
