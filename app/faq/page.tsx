import StaticPage from '@/components/StaticPage';
import { FaqList } from '@/components/Blocks';
import { faqLd, pageMeta } from '@/lib/seo';
import { SITE } from '@/lib/site';

const title = 'FAQs – Daily Rooms & Apartments in Bahria Town';
const description = 'Check-in, CNIC rules, couple and family policy, payment, cancellation, food and parking: answers to common questions about booking a stay in Bahria Town.';
export const metadata = pageMeta({ path: '/faq/', title, description });

const GROUPS = [
  {
    title: 'Booking & payment',
    faqs: [
      { q: 'How do I book a room?', a: `WhatsApp or call ${SITE.phoneDisplay}, or use our Book Now form. We confirm with photos, price and a location pin.` },
      { q: 'Do I need to pay in advance?', a: 'Most bookings are paid on arrival. During peak dates a small advance may be requested to hold the room.' },
      { q: 'Which payment methods do you accept?', a: 'Cash, bank transfer and mobile wallets.' },
      { q: 'Can I book for the same day?', a: 'Yes, same-day and late-night bookings are accepted subject to availability.' },
    ],
  },
  {
    title: 'Prices',
    faqs: [
      { q: 'What are your room rates?', a: 'Short time (2–4 hrs): Rs 4,500 single, Rs 5,500 double. Full night: Rs 6,000 single, Rs 14,500 double. Monthly: Rs 55k–150k single, Rs 100k–250k double.' },
      { q: 'Are full apartments available?', a: 'Yes, at our best rates. Message us your dates for a quote.' },
      { q: 'Are utilities included?', a: 'Included for short and nightly stays. Monthly stays are either inclusive or sub-metered, as agreed in advance.' },
    ],
  },
  {
    title: 'Check-in & rules',
    faqs: [
      { q: 'Is CNIC required?', a: 'Yes, an original CNIC for every adult guest. Overseas guests can use a passport or NICOP.' },
      { q: 'What are check-in and check-out times?', a: 'Times are flexible and confirmed on WhatsApp when you book. Short-time stays start when you arrive.' },
      { q: 'Do you allow couples?', a: 'Married couples are welcome. A Nikah Nama may be requested in line with local regulations.' },
      { q: 'Is smoking allowed?', a: 'No smoking inside rooms or apartments.' },
      { q: 'Are pets allowed?', a: 'Sorry, pets are not allowed.' },
    ],
  },
  {
    title: 'Facilities & services',
    faqs: [
      { q: 'Is there power backup?', a: 'Yes, every unit has generator or UPS backup.' },
      { q: 'Do you provide breakfast and food?', a: 'Yes, breakfast and meals on demand, delivered to your room.' },
      { q: 'Is parking available?', a: 'Yes, free car and bike parking.' },
      { q: 'Do you decorate rooms for events?', a: 'Yes, for honeymoons, birthdays, nikah ceremonies and small marriage functions.' },
      { q: 'Is laundry available?', a: 'Yes, washing machine access or laundry service.' },
    ],
  },
];

export default function Faq() {
  const all = GROUPS.flatMap((g) => g.faqs);
  return (
    <StaticPage path="/faq/" label="FAQs" h1="Frequently Asked Questions" lead="Everything you need to know before booking a room or apartment with us in Bahria Town." image="bedroom-wooden-floor-seating" title={title} description={description} extraLd={[faqLd(all)]}>
      <div className="space-y-12">
        {GROUPS.map((g) => <FaqList key={g.title} title={g.title} faqs={g.faqs} />)}
      </div>
    </StaticPage>
  );
}
