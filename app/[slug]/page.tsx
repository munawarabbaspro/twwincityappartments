import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import ContentPage from '@/components/ContentPage';
import { TOP_PAGES, getPage } from '@/data';
import { pageMeta } from '@/lib/seo';
import { img } from '@/lib/images';

export const dynamicParams = false;

export function generateStaticParams() {
  return TOP_PAGES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = getPage(slug);
  if (!page) return {};
  return pageMeta({
    path: `/${page.slug}/`,
    title: page.title,
    description: page.description,
    image: img(page.images[0]).src,
    keywords: [page.keyword, ...page.secondary],
  });
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getPage(slug);
  if (!page || page.slug.includes('/')) notFound();
  return <ContentPage page={page} />;
}
