'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ArrowUpRight, Mail, Menu, Phone, Plus, X } from 'lucide-react';
import { SITE, telLink, waLink } from '@/lib/site';
import { WhatsAppIcon } from './Icons';

export type NavGroup = { label: string; columns: { title: string; links: { href: string; label: string }[] }[] };

export default function MobileMenu({ groups }: { groups: NavGroup[] }) {
  const [open, setOpen] = useState(false);
  const [section, setSection] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="grid h-10 w-10 place-items-center rounded-full bg-ink text-paper transition-transform active:scale-95"
        aria-label="Open menu"
        aria-expanded={open}
        aria-controls="mobile-menu"
      >
        <Menu className="h-[18px] w-[18px]" strokeWidth={1.5} />
      </button>

      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        className={`fixed inset-0 z-[60] flex flex-col bg-paper transition-[opacity,visibility] duration-300 ${open ? 'visible opacity-100' : 'invisible opacity-0'}`}
      >
        <div className="wrap flex h-[72px] shrink-0 items-center justify-between border-b border-line">
          <span className="eyebrow">Menu</span>
          <button type="button" onClick={() => setOpen(false)} className="grid h-10 w-10 place-items-center rounded-full border border-line" aria-label="Close menu">
            <X className="h-[18px] w-[18px]" strokeWidth={1.5} />
          </button>
        </div>

        <div className={`wrap flex-1 overflow-y-auto pb-10 transition-transform duration-500 ${open ? 'translate-y-0' : 'translate-y-3'}`}>
          <ul>
            {groups.map((g, i) => {
              const isOpen = section === g.label;
              return (
                <li key={g.label} className="border-b border-line">
                  <button type="button" onClick={() => setSection(isOpen ? null : g.label)} className="flex w-full items-center justify-between py-5 text-left" aria-expanded={isOpen}>
                    <span className="flex items-baseline gap-4">
                      <span className="numeral text-sm text-faint">0{i + 1}</span>
                      <span className="text-3xl tracking-[-0.03em]">{g.label}</span>
                    </span>
                    <Plus className={`h-5 w-5 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`} strokeWidth={1.25} />
                  </button>
                  <div className={`grid transition-[grid-template-rows] duration-500 ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                    <div className="overflow-hidden">
                      {g.columns.map((c) => (
                        <div key={c.title} className="pb-5 pl-9">
                          <p className="eyebrow mb-2">{c.title}</p>
                          <ul className="grid grid-cols-1 gap-x-4 sm:grid-cols-2">
                            {c.links.map((l) => (
                              <li key={l.href}><Link href={l.href} className="block py-1.5 text-[0.9375rem] text-ink-2">{l.label}</Link></li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </li>
              );
            })}
            {[['Journal', '/blog/'], ['Gallery', '/gallery/'], ['About', '/about/'], ['Contact', '/contact/']].map(([label, href], i) => (
              <li key={href} className="border-b border-line">
                <Link href={href} className="flex items-baseline gap-4 py-5">
                  <span className="numeral text-sm text-faint">0{groups.length + i + 1}</span>
                  <span className="text-3xl tracking-[-0.03em]">{label}</span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-8 grid gap-3">
            <a href={waLink()} target="_blank" rel="noopener" data-cta="whatsapp-menu" className="btn btn-primary btn-lg w-full">
              <span className="wa-dot"><WhatsAppIcon className="h-3.5 w-3.5" /></span> Book on WhatsApp <ArrowUpRight className="btn-arrow h-4 w-4" strokeWidth={1.5} />
            </a>
            <div className="grid grid-cols-2 gap-3">
              <a href={telLink} data-cta="call-menu" className="btn btn-ghost w-full"><Phone className="h-4 w-4" strokeWidth={1.5} /> Call</a>
              <a href={`mailto:${SITE.emailBooking}`} className="btn btn-ghost w-full"><Mail className="h-4 w-4" strokeWidth={1.5} /> Email</a>
            </div>
            <p className="mt-2 text-center text-xs text-muted">{SITE.phoneDisplay} · {SITE.hours}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
