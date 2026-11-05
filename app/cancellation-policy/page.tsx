import StaticPage from '@/components/StaticPage';
import { pageMeta } from '@/lib/seo';
import { SITE } from '@/lib/site';

const title = 'Cancellation & Refund Policy | TwinCity Appartments';
const description = 'Clear cancellation and refund rules for short-time, nightly, weekly and monthly bookings in Bahria Town. Know your free-cancellation window before you book.';
export const metadata = pageMeta({ path: '/cancellation-policy/', title, description });

export default function Cancellation() {
  return (
    <StaticPage path="/cancellation-policy/" label="Cancellation Policy" h1="Cancellation & Refund Policy" lead="Simple, fair rules so you can book with confidence." image="bedroom-wardrobe-wood-panels" title={title} description={description}>
      <div className="prose-tc">
        <p>Most {SITE.name} bookings are paid on arrival, so there is nothing to refund if your plans change. Just tell us as early as possible so we can offer the room to another guest. The rules below apply when an advance has been paid.</p>
        <h2>Short-time and nightly stays</h2>
        <ul>
          <li>Cancel 24 hours or more before check-in: full refund of any advance</li>
          <li>Cancel less than 24 hours before check-in: advance may be kept, or moved to a new date within 30 days</li>
          <li>No-show without notice: advance is non-refundable</li>
        </ul>
        <h2>Weekly stays</h2>
        <ul>
          <li>Cancel 3 days or more before check-in: full refund of any advance</li>
          <li>Leaving early: unused nights are recalculated at the nightly rate</li>
        </ul>
        <h2>Monthly stays</h2>
        <ul>
          <li>Cancel 7 days or more before move-in: full refund of advance</li>
          <li>Notice period to leave: as stated in your monthly agreement</li>
          <li>Security deposit refunded after check-out inspection, minus any damage or unpaid bills</li>
        </ul>
        <h2>Events and decoration</h2>
        <p>Decoration and catering ordered for nikah ceremonies, birthdays and functions may be non-refundable once purchased. We will confirm costs before ordering.</p>
        <h2>How refunds are paid</h2>
        <p>Refunds are paid by the same method used for the advance (bank transfer or mobile wallet) within 3–5 working days.</p>
        <p>Questions? WhatsApp {SITE.phoneDisplay} or email {SITE.emailBooking}.</p>
      </div>
    </StaticPage>
  );
}
