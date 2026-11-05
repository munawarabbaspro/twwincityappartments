import Link from 'next/link';
import { HUBS } from '@/data';
import { CtaButtons } from '@/components/Blocks';

export default function NotFound() {
  return (
    <div className="wrap py-24 sm:py-32">
      <p className="eyebrow">Error 404</p>
      <h1 className="display mt-6 max-w-3xl text-5xl sm:text-7xl">This page has <span className="serif-i">checked out.</span></h1>
      <p className="lead mt-6 max-w-xl">The room may have moved, but we still have plenty available. Try one of these:</p>
      <ul className="mt-10 flex max-w-3xl flex-wrap gap-2">
        {HUBS.map((h) => <li key={h.slug}><Link href={`/${h.slug}/`} className="chip">{h.menu}</Link></li>)}
        <li><Link href="/bahria-town/" className="chip !border-ink !bg-ink !text-paper">All locations</Link></li>
      </ul>
      <div className="mt-12"><CtaButtons /></div>
    </div>
  );
}
