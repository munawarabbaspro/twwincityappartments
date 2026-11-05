import Image from 'next/image';
import Link from 'next/link';
import StaticPage from '@/components/StaticPage';
import { Amenities, TrustRow } from '@/components/Blocks';
import { pageMeta } from '@/lib/seo';
import { SITE } from '@/lib/site';
import { img } from '@/lib/images';

const title = 'About TwinCity Appartments – Trusted Stays in Bahria Town';
const description = 'Local team offering verified, clean daily rooms and furnished apartments across Bahria Town Rawalpindi and Islamabad. See how we check every property.';
export const metadata = pageMeta({ path: '/about/', title, description });

const CHECKS = ['Personal inspection before a unit is listed', 'Cleaning and linen change before every new guest', 'AC, geyser, Wi-Fi and power backup checked regularly', 'Secure building in gated Bahria Town', 'CNIC verification for every adult guest'];

export default function About() {
  const a = img('family-apartment-lounge-false-ceiling');
  const b = img('double-bed-room-wall-art');
  return (
    <StaticPage path="/about/" label="About Us" h1={`About ${SITE.name}`} lead="A local team making short and long stays in Bahria Town simple, safe and honest." image="family-apartment-lounge-false-ceiling" title={title} description={description} wide>
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <p className="text-2xl leading-[1.35] tracking-[-0.02em] sm:text-[1.9rem]">
            {SITE.name} was started by a local Bahria Town team with one goal: give travellers, families and professionals in the <span className="serif-i">twin cities</span> of Rawalpindi and Islamabad a room they can trust.
          </p>
        </div>
        <div className="prose-tc lg:col-span-6 lg:col-start-7">
          <p>Too many guests have arrived at a rental to find it nothing like the photos, with surprise charges and no one answering the phone. We built {SITE.name} to fix that. Every room on this website is managed by us, every photo is real and every price is written down.</p>
          <h2>What we offer</h2>
          <p>Short-time rooms (2–4 hours), nightly single and double bed rooms, weekly and monthly furnished rentals and full apartments. We also arrange breakfast, food and decoration for honeymoons, nikah ceremonies, birthdays and small marriage functions.</p>
          <p>See our <Link href="/daily-rental-rooms/">daily rental rooms</Link>, <Link href="/apartments-per-day/">furnished apartments per day</Link> and <Link href="/monthly-rentals/">monthly rentals</Link>, or browse <Link href="/bahria-town/">all Bahria Town phases</Link>.</p>
        </div>
      </div>

      <div className="mt-20 grid grid-cols-12 gap-3">
        <figure className="img-zoom relative col-span-12 aspect-[16/10] overflow-hidden rounded-[6px] md:col-span-8"><Image src={a.src} alt={a.alt} fill sizes="66vw" className="object-cover" /></figure>
        <figure className="img-zoom relative col-span-12 aspect-[4/5] overflow-hidden rounded-[6px] md:col-span-4 md:mt-24 md:aspect-auto"><Image src={b.src} alt={b.alt} fill sizes="33vw" className="object-cover" /></figure>
      </div>

      <section className="mt-24 grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <div>
          <p className="eyebrow mb-3">Standards</p>
          <h2 className="h-section">How we check <span className="serif-i">every property</span></h2>
        </div>
        <ol className="border-t border-ink">
          {CHECKS.map((c, i) => (
            <li key={c} className="flex gap-5 border-b border-line py-5 text-[1.0625rem] tracking-[-0.01em]" data-reveal><span className="numeral w-8 text-faint">0{i + 1}</span>{c}</li>
          ))}
        </ol>
      </section>

      <div className="mt-24"><TrustRow /></div>
      <div className="mt-24"><Amenities /></div>
      <p className="mt-16 border-t border-line pt-6 text-sm text-muted">Phone / WhatsApp: {SITE.phoneDisplay} · Email: {SITE.emailInfo} · Bookings: {SITE.emailBooking}</p>
    </StaticPage>
  );
}
