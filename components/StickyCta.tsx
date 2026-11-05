import { Phone } from 'lucide-react';
import { SITE, telLink, waLink } from '@/lib/site';
import { WhatsAppIcon } from './Icons';

/** Mobile: floating booking dock. Desktop: discreet WhatsApp pill. */
export default function StickyCta() {
  return (
    <>
      <div className="fixed inset-x-3 bottom-3 z-40 flex gap-2 rounded-full bg-ink p-1.5 shadow-[0_18px_40px_-12px_rgba(21,20,18,.55)] md:hidden">
        <a href={telLink} data-cta="call-sticky" className="btn btn-ghost-dark btn-sm flex-1 !border-transparent">
          <Phone className="h-4 w-4" strokeWidth={1.5} /> Call
        </a>
        <a href={waLink()} target="_blank" rel="noopener" data-cta="whatsapp-sticky" className="btn btn-light btn-sm flex-[1.6] !pl-1.5">
          <span className="wa-dot !h-7 !w-7"><WhatsAppIcon className="h-3.5 w-3.5" /></span> Book on WhatsApp
        </a>
      </div>
      <a
        href={waLink()}
        target="_blank"
        rel="noopener"
        data-cta="whatsapp-float"
        aria-label={`Chat on WhatsApp ${SITE.phoneDisplay}`}
        className="group fixed bottom-6 right-6 z-40 hidden items-center gap-2 rounded-full bg-ink py-1.5 pl-1.5 pr-4 text-sm text-paper shadow-[0_18px_40px_-12px_rgba(21,20,18,.55)] transition-transform duration-300 hover:-translate-y-0.5 md:flex"
      >
        <span className="wa-dot !h-9 !w-9"><WhatsAppIcon className="h-[18px] w-[18px]" /></span>
        Chat with us
      </a>
    </>
  );
}
