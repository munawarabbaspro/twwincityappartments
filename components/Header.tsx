import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, ChevronDown, Phone } from 'lucide-react';
import { HUBS, LOCATIONS, EVENTS, INTENTS } from '@/data';
import { SITE, telLink } from '@/lib/site';
import { img } from '@/lib/images';
import Logo from './Logo';
import MobileMenu, { type NavGroup } from './MobileMenu';

const L = (p: { slug: string; menu: string }) => ({ href: `/${p.slug}/`, label: p.menu });

export const NAV: (NavGroup & { feature: { image: string; title: string; text: string; href: string } })[] = [
  {
    label: 'Stays',
    columns: [
      { title: 'Rooms & apartments', links: HUBS.filter((p) => p.group === 'type').map(L) },
      { title: 'Length of stay', links: HUBS.filter((p) => p.group === 'duration').map(L) },
    ],
    feature: { image: 'luxury-bedroom-golden-ceiling-lights', title: 'Short time, 2–4 hours', text: 'From Rs 4,500', href: '/short-stay-rooms/' },
  },
  {
    label: 'Locations',
    columns: [
      { title: 'Bahria Town Rawalpindi', links: LOCATIONS.slice(0, 8).map(L) },
      { title: 'More areas', links: LOCATIONS.slice(8).map(L) },
    ],
    feature: { image: 'luxury-lounge-curved-sofa', title: 'Phase 7 · Spring North', text: 'Our most requested area', href: '/bahria-town-phase-7/' },
  },
  {
    label: 'Occasions',
    columns: [{ title: 'Celebrate with us', links: EVENTS.map(L) }],
    feature: { image: 'honeymoon-lounge-led-lights', title: 'Honeymoon suites', text: 'Decorated before you arrive', href: '/honeymoon-suites/' },
  },
  {
    label: 'Offers',
    columns: [
      { title: 'Price & quality', links: INTENTS.filter((p) => p.group === 'budget').map(L) },
      { title: 'Facilities', links: INTENTS.filter((p) => p.group === 'amenity').map(L) },
    ],
    feature: { image: 'double-bed-room-wall-art', title: 'Monthly stays', text: 'Single rooms from Rs 55k', href: '/monthly-rentals/' },
  },
];

export default function Header() {
  return (
    <header className="site-header sticky top-0 z-50">
      <nav className="wrap flex h-[72px] items-center justify-between gap-6" aria-label="Main">
        <Logo />

        <ul className="relative hidden items-center gap-1 lg:flex">
          {NAV.map((g) => (
            <li key={g.label} className="nav-item">
              <button type="button" className="flex items-center gap-1 rounded-full px-3.5 py-2 text-[0.8125rem] text-ink-2 transition-colors hover:text-ink" aria-haspopup="true">
                {g.label}
                <ChevronDown className="nav-caret h-3.5 w-3.5 text-faint transition-transform duration-300" strokeWidth={1.5} />
              </button>
              <div className="nav-panel absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3">
                <div className="flex w-max max-w-[min(860px,90vw)] overflow-hidden rounded-[18px] border border-line bg-surface shadow-[0_30px_80px_-30px_rgba(21,20,18,.35)]">
                  <div className="flex gap-10 p-7">
                    {g.columns.map((c) => (
                      <div key={c.title} className="min-w-[190px]">
                        <p className="eyebrow mb-3">{c.title}</p>
                        <ul className="space-y-0.5">
                          {c.links.map((l) => (
                            <li key={l.href}>
                              <Link href={l.href} className="group/l flex items-center justify-between gap-6 rounded-lg py-1.5 text-[0.875rem] text-ink-2 transition-colors hover:text-ink">
                                <span className="link-u">{l.label}</span>
                                <ArrowUpRight className="h-3.5 w-3.5 -translate-x-1 text-faint opacity-0 transition-all duration-300 group-hover/l:translate-x-0 group-hover/l:opacity-100" strokeWidth={1.5} />
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <Link href={g.feature.href} className="group relative hidden w-56 shrink-0 overflow-hidden xl:block">
                    <span className="img-zoom absolute inset-0">
                      <Image src={img(g.feature.image).src} alt="" fill sizes="224px" className="object-cover" />
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
                    <span className="absolute inset-x-5 bottom-5 text-paper">
                      <span className="serif-i block text-xl leading-tight">{g.feature.title}</span>
                      <span className="mt-1 block text-xs text-paper/75">{g.feature.text}</span>
                    </span>
                  </Link>
                </div>
              </div>
            </li>
          ))}
          <li><Link href="/blog/" className="link-u mx-3.5 text-[0.8125rem] text-ink-2 hover:text-ink">Journal</Link></li>
          <li><Link href="/about/" className="link-u mx-3.5 text-[0.8125rem] text-ink-2 hover:text-ink">About</Link></li>
        </ul>

        <div className="flex items-center gap-2">
          <a href={telLink} data-cta="call-header" className="hidden items-center gap-2 px-2 text-[0.8125rem] text-ink-2 hover:text-ink xl:flex">
            <Phone className="h-3.5 w-3.5" strokeWidth={1.5} /> {SITE.phoneDisplay}
          </a>
          <Link href="/contact/" className="btn btn-ghost btn-sm hidden sm:inline-flex lg:hidden xl:inline-flex">Contact</Link>
          <Link href="/book-now/" className="btn btn-primary btn-sm hidden sm:inline-flex">
            Book a stay <ArrowUpRight className="btn-arrow h-4 w-4" strokeWidth={1.5} />
          </Link>
          <a href={telLink} data-cta="call-header-mobile" aria-label={`Call ${SITE.phoneDisplay}`} className="btn btn-ghost btn-sm !px-3 sm:hidden">
            <Phone className="h-4 w-4" strokeWidth={1.5} />
          </a>
          <MobileMenu groups={NAV.map(({ label, columns }) => ({ label, columns }))} />
        </div>
      </nav>
    </header>
  );
}
