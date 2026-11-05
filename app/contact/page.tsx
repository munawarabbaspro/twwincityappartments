import { ArrowUpRight, Clock, Mail, MapPin, Phone } from 'lucide-react';
import StaticPage from '@/components/StaticPage';
import { WhatsAppIcon } from '@/components/Icons';
import { lodgingLd, pageMeta } from '@/lib/seo';
import { SITE, telLink, waLink } from '@/lib/site';

const title = 'Contact & WhatsApp Booking – TwinCity Appartments';
const description = 'Call or WhatsApp 0313-0539832 to book a room or apartment in Bahria Town today. Email, map and 24/7 booking line for same-day stays.';
export const metadata = pageMeta({ path: '/contact/', title, description });

export default function Contact() {
  const rows = [
    { icon: <WhatsAppIcon className="h-5 w-5" />, t: 'WhatsApp · fastest', v: SITE.phoneDisplay, href: waLink(), cta: 'whatsapp-contact' },
    { icon: <Phone className="h-5 w-5" strokeWidth={1.25} />, t: 'Call', v: SITE.phoneDisplay, href: telLink, cta: 'call-contact' },
    { icon: <Mail className="h-5 w-5" strokeWidth={1.25} />, t: 'Bookings', v: SITE.emailBooking, href: `mailto:${SITE.emailBooking}`, cta: 'email-booking' },
    { icon: <Mail className="h-5 w-5" strokeWidth={1.25} />, t: 'General enquiries', v: SITE.emailInfo, href: `mailto:${SITE.emailInfo}`, cta: 'email-info' },
  ];
  return (
    <StaticPage path="/contact/" label="Contact" h1="Contact Us & Book on WhatsApp" lead="The fastest way to book is WhatsApp. We reply 24/7 with photos, prices and a location pin." image="drawing-room-sofa-set" title={title} description={description} extraLd={[lodgingLd(['/images/luxury-living-room-tv-wall.webp'])]}>
      <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <ul className="border-t border-ink">
          {rows.map((c) => (
            <li key={c.t} className="border-b border-line">
              <a href={c.href} data-cta={c.cta} {...(c.href.startsWith('http') ? { target: '_blank', rel: 'noopener' } : {})} className="group flex items-center gap-5 py-6">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-line text-ink transition-colors duration-300 group-hover:border-ink group-hover:bg-ink group-hover:text-paper">{c.icon}</span>
                <span className="min-w-0 flex-1">
                  <span className="eyebrow block">{c.t}</span>
                  <span className="mt-1 block break-all text-xl tracking-[-0.02em] sm:text-2xl">{c.v}</span>
                </span>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-faint transition-all group-hover:-translate-y-0.5 group-hover:text-ink" strokeWidth={1.25} />
              </a>
            </li>
          ))}
        </ul>
        <div className="space-y-6">
          <address className="rounded-[14px] bg-paper-2 p-7 not-italic">
            <p className="eyebrow">Address &amp; hours</p>
            <p className="mt-4 text-lg tracking-[-0.015em]">{SITE.name}</p>
            <p className="mt-3 flex gap-3 text-[0.9375rem] text-ink-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-bronze" strokeWidth={1.25} />{SITE.address.streetAddress}, {SITE.address.locality}, {SITE.address.region}, Pakistan</p>
            <p className="mt-2 flex gap-3 text-[0.9375rem] text-ink-2"><Clock className="mt-0.5 h-4 w-4 shrink-0 text-bronze" strokeWidth={1.25} />{SITE.hours}</p>
            <p className="mt-5 border-t border-line pt-5 text-[0.8125rem] leading-relaxed text-muted">Exact building locations are shared on WhatsApp when you book. We have units across Bahria Town phases and Bahria Enclave Islamabad.</p>
          </address>
          <iframe
            title="Map of Bahria Town Rawalpindi"
            src="https://www.google.com/maps?q=Bahria+Town+Rawalpindi&output=embed"
            className="h-80 w-full rounded-[14px] border border-line grayscale-[0.6]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </StaticPage>
  );
}
