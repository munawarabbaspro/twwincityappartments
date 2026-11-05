import Link from 'next/link';
import { SITE } from '@/lib/site';

/** TwinCity monogram: two arches (the twin cities) inside a ring, with a spaced wordmark. */
export function Mark({ className = 'h-9 w-9' }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" aria-hidden="true">
      <circle cx="20" cy="20" r="19.25" stroke="currentColor" strokeWidth="1.1" />
      <path d="M11 28V18.5a4.5 4.5 0 0 1 9 0V28M20 28V15.5a4.5 4.5 0 0 1 9 0V28" stroke="currentColor" strokeWidth="1.1" />
      <path d="M9 28h22" stroke="currentColor" strokeWidth="1.1" />
    </svg>
  );
}

export default function Logo({ tone = 'ink' }: { tone?: 'ink' | 'paper' }) {
  const color = tone === 'ink' ? 'text-ink' : 'text-paper';
  return (
    <Link href="/" aria-label={`${SITE.name} – home`} className={`group inline-flex items-center gap-2.5 ${color}`}>
      <Mark className="h-9 w-9 shrink-0 transition-transform duration-700 group-hover:rotate-[8deg]" />
      <span className="flex flex-col leading-none">
        <span className="text-[1.05rem] font-medium tracking-[-0.02em]">TwinCity</span>
        <span className={`mt-1 text-[0.56rem] font-medium tracking-[0.32em] uppercase ${tone === 'ink' ? 'text-muted' : 'text-paper/60'}`}>Appartments</span>
      </span>
    </Link>
  );
}
