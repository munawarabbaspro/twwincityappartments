import Link from 'next/link';
import { ArrowUpRight, Clock, Mail, MapPin, Phone } from 'lucide-react';
import { LOCATIONS, HUBS, EVENTS } from '@/data';
import { SITE, telLink, waLink } from '@/lib/site';
import Logo from './Logo';
import { WhatsAppIcon } from './Icons';

function Col({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div>
      <p className="eyebrow mb-5 !text-paper/45">{title}</p>
      <ul className="space-y-2.5">
        {links.map((l) => (
          <li key={l.href}><Link href={l.href} className="link-u text-[0.875rem] text-paper/75 transition-colors hover:text-paper">{l.label}</Link></li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();
  const social = SITE.sameAs.map((u) => ({ href: u, label: new URL(u).hostname.replace('www.', '').split('.')[0] }));
  return (
    <footer className="relative overflow-hidden bg-ink pb-28 text-paper md:pb-0">
      <div className="wrap">
        {/* Statement row */}
        <div className="grid gap-10 border-b border-line-dark py-16 lg:grid-cols-[1.2fr_1fr] lg:items-end lg:py-20">
          <div>
            <Logo tone="paper" />
            <p className="mt-8 max-w-xl text-3xl leading-[1.12] tracking-[-0.03em] sm:text-[2.6rem]">
              Clean, verified rooms and apartments across <span className="serif-i text-bronze-soft">Bahria Town</span> — by the hour, night, week or month.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <a href={waLink()} target="_blank" rel="noopener" data-cta="whatsapp-footer" className="btn btn-light btn-lg !pl-2.5">
              <span className="wa-dot"><WhatsAppIcon className="h-3.5 w-3.5" /></span> Book on WhatsApp <ArrowUpRight className="btn-arrow h-4 w-4" strokeWidth={1.5} />
            </a>
            <a href={telLink} data-cta="call-footer" className="btn btn-ghost-dark btn-lg"><Phone className="h-4 w-4" strokeWidth={1.5} /> {SITE.phoneDisplay}</a>
          </div>
        </div>

        {/* Link columns */}
        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          {/* NAP block: keep identical to Google Business Profile & Bing Places */}
          <div>
            <p className="eyebrow mb-5 !text-paper/45">Contact</p>
            <address className="space-y-4 text-[0.875rem] not-italic text-paper/75">
              <p className="text-paper">{SITE.name}</p>
              <p className="flex gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-bronze-soft" strokeWidth={1.25} />{SITE.address.streetAddress}, {SITE.address.locality}, {SITE.address.region}, Pakistan</p>
              <p className="flex gap-3"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-bronze-soft" strokeWidth={1.25} /><a href={telLink} className="link-u hover:text-paper">{SITE.phoneDisplay} · Phone / WhatsApp</a></p>
              <p className="flex gap-3"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-bronze-soft" strokeWidth={1.25} /><span className="flex flex-col gap-1"><a href={`mailto:${SITE.emailBooking}`} className="link-u w-fit break-all hover:text-paper">{SITE.emailBooking}</a><a href={`mailto:${SITE.emailInfo}`} className="link-u w-fit break-all hover:text-paper">{SITE.emailInfo}</a></span></p>
              <p className="flex gap-3"><Clock className="mt-0.5 h-4 w-4 shrink-0 text-bronze-soft" strokeWidth={1.25} />{SITE.hours}</p>
            </address>
            {social.length > 0 && (
              <ul className="mt-6 flex gap-2">
                {social.map((s) => (
                  <li key={s.href}><a href={s.href} target="_blank" rel="noopener" className="chip !border-line-dark capitalize !text-paper/75 hover:!border-paper hover:!text-paper">{s.label}</a></li>
                ))}
              </ul>
            )}
          </div>
          <Col title="Stays" links={HUBS.map((p) => ({ href: `/${p.slug}/`, label: p.menu }))} />
          <Col title="Locations" links={LOCATIONS.map((p) => ({ href: `/${p.slug}/`, label: p.slug === 'bahria-town' ? 'All phases' : p.menu }))} />
          <div className="space-y-12">
            <Col title="Occasions" links={EVENTS.map((p) => ({ href: `/${p.slug}/`, label: p.menu }))} />
            <Col title="Company" links={[
              { href: '/about/', label: 'About us' }, { href: '/amenities/', label: 'Amenities' }, { href: '/gallery/', label: 'Gallery' },
              { href: '/reviews/', label: 'Reviews' }, { href: '/faq/', label: 'FAQs' }, { href: '/blog/', label: 'Journal' }, { href: '/contact/', label: 'Contact' },
            ]} />
          </div>
        </div>
      </div>

      {/* Oversized wordmark */}
      <div aria-hidden="true" className="pointer-events-none select-none overflow-hidden border-t border-line-dark">
        <p className="wrap translate-y-[18%] whitespace-nowrap text-[21vw] leading-none tracking-[-0.06em] text-paper/[0.06] lg:text-[17.5vw]">
          Twin<span className="serif-i">City</span>
        </p>
      </div>

      <div className="border-t border-line-dark">
        <div className="wrap flex flex-col gap-4 py-6 text-[0.75rem] text-paper/50 md:flex-row md:items-center md:justify-between">
          <p>© {year} {SITE.name}. All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li><Link href="/cancellation-policy/" className="link-u hover:text-paper">Cancellation</Link></li>
            <li><Link href="/privacy-policy/" className="link-u hover:text-paper">Privacy</Link></li>
            <li><Link href="/terms/" className="link-u hover:text-paper">Terms &amp; house rules</Link></li>
            <li><a href="/sitemap.xml" className="link-u hover:text-paper">Sitemap</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
