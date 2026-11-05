import Image from 'next/image';
import Link from 'next/link';
import type { Listing } from '@/lib/types';
import { img } from '@/lib/images';

const BADGE: Record<Listing['type'], string> = {
  Apartment: 'Full apartment',
  Suite: 'Signature suite',
  'Double Room': 'Most booked',
  'Single Room': 'Best value',
  Studio: 'With kitchenette',
};

/** Property card: portrait photo, badge, name/price line, spec strip. */
export default function ListingCard({ listing, priority = false }: { listing: Listing; priority?: boolean }) {
  const i = img(listing.images[0]);
  const from = listing.prices.find((p) => p.value);
  return (
    <Link href={`/stay/${listing.slug}/`} className="group block" data-reveal>
      <div className="img-zoom relative aspect-[4/3] overflow-hidden rounded-[6px] bg-paper-2 sm:aspect-[4/5]">
        <Image src={i.src} alt={i.alt} fill priority={priority} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover" />
        <span className="tag absolute left-3.5 top-3.5">{BADGE[listing.type]}</span>
        <span className="absolute bottom-3.5 right-3.5 translate-y-2 rounded-full bg-ink px-3.5 py-1.5 text-xs text-paper opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">View stay</span>
      </div>
      <div className="mt-4 flex items-baseline justify-between gap-4">
        <h3 className="text-[1.0625rem] tracking-[-0.015em]">{listing.name}</h3>
        <p className="shrink-0 text-[0.9375rem] font-medium tabular-nums">{from ? <><span className="text-[0.75rem] font-normal text-muted">from </span>{from.amount}</> : 'On request'}</p>
      </div>
      <p className="mt-0.5 text-[0.8125rem] text-muted">Bahria Town, Rawalpindi{from ? '' : ' · best rates on WhatsApp'}</p>
      <p className="mt-3 flex flex-wrap gap-x-4 gap-y-1 border-t border-line pt-3 text-[0.75rem] text-muted">
        <span>{listing.beds} {listing.beds > 1 ? 'Beds' : 'Bed'}</span>
        <span>{listing.baths} {listing.baths > 1 ? 'Baths' : 'Bath'}</span>
        <span>Up to {listing.guests} {listing.guests > 1 ? 'guests' : 'guest'}</span>
        <span>{listing.type}</span>
      </p>
    </Link>
  );
}
