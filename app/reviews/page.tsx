import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import StaticPage from '@/components/StaticPage';
import { WaButton } from '@/components/Blocks';
import { pageMeta } from '@/lib/seo';
import { SITE } from '@/lib/site';

const title = 'Guest Reviews – Rooms & Apartments in Bahria Town';
const description = 'Read and leave reviews for TwinCity Appartments rooms and apartments in Bahria Town. See what we promise every guest and how we handle feedback.';
export const metadata = pageMeta({ path: '/reviews/', title, description });

// Add only real guest reviews here (name/initials, date, text). Never invent reviews.
const REVIEWS: { name: string; date: string; text: string; stay: string }[] = [];

const PROMISES = [
  ['The room you see is the room you get', 'Every photo on this site is of our own rooms, unedited.'],
  ['The price we quote is the price you pay', 'Rates are published and confirmed in writing on WhatsApp.'],
  ['Clean and working on arrival', 'Fresh linen, a clean bathroom and working AC, every time.'],
  ['Someone always answers', 'A reply on WhatsApp whenever you need us, day or night.'],
];

export default function Reviews() {
  return (
    <StaticPage path="/reviews/" label="Reviews" h1="What Our Guests Say" lead="Honest feedback from families, couples, students and business guests who stayed with us." image="double-bed-room-wall-art" title={title} description={description}>
      {REVIEWS.length > 0 ? (
        <ul className="grid gap-px overflow-hidden rounded-[14px] border border-line bg-line sm:grid-cols-2">
          {REVIEWS.map((r) => (
            <li key={r.name + r.date} className="bg-surface p-8">
              <p className="serif-i text-2xl leading-snug">“{r.text}”</p>
              <p className="eyebrow mt-6">{r.name} · {r.stay} · {r.date}</p>
            </li>
          ))}
        </ul>
      ) : (
        <div className="grid gap-8 rounded-[14px] bg-ink p-8 text-paper sm:p-12 md:grid-cols-[1.4fr_1fr] md:items-end">
          <div>
            <p className="eyebrow !text-paper/50">Verified reviews only</p>
            <p className="mt-4 text-3xl leading-[1.12] tracking-[-0.03em] sm:text-4xl">Stayed with us? <span className="serif-i text-bronze-soft">Your words</span> help the next guest choose well.</p>
          </div>
          <div className="flex flex-col gap-3">
            {SITE.googleReviewUrl && <a href={SITE.googleReviewUrl} className="btn btn-light" target="_blank" rel="noopener">Review us on Google <ArrowUpRight className="btn-arrow h-4 w-4" strokeWidth={1.5} /></a>}
            <WaButton tone="light" label="Send feedback on WhatsApp" message="Hi TwinCity Appartments, I would like to share feedback about my stay." cta="whatsapp-review" />
          </div>
        </div>
      )}

      <section className="mt-24">
        <p className="eyebrow mb-3">Our promise to every guest</p>
        <h2 className="h-section">Four things we <span className="serif-i">never compromise on</span></h2>
        <ol className="mt-10 grid border-t border-ink sm:grid-cols-2 sm:gap-x-12">
          {PROMISES.map(([t, d], i) => (
            <li key={t} className="flex gap-5 border-b border-line py-7" data-reveal>
              <span className="numeral text-3xl text-bronze">0{i + 1}</span>
              <span><span className="block text-lg tracking-[-0.015em]">{t}</span><span className="mt-1 block text-sm text-muted">{d}</span></span>
            </li>
          ))}
        </ol>
      </section>

      <div className="prose-tc mt-20">
        <h2>How we use feedback</h2>
        <p>Every comment is read by our team. When a guest points out a problem, such as a slow geyser, a noisy unit or a missing item, we fix it and recheck the room before the next booking. That is how we keep standards consistent across all our <Link href="/bahria-town/">Bahria Town locations</Link>.</p>
        <p>Read our guide on <Link href="/blog/how-to-book-safe-guest-house/">how to book a safe guest house</Link>, or compare <Link href="/best-hotels-bahria-town/">the best stays in Bahria Town</Link>.</p>
      </div>
    </StaticPage>
  );
}
