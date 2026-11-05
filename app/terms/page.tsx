import StaticPage from '@/components/StaticPage';
import { pageMeta } from '@/lib/seo';
import { SITE } from '@/lib/site';

const title = 'Terms & House Rules | TwinCity Appartments';
const description = 'Booking terms and house rules for our Bahria Town rooms and apartments: check-in, CNIC, guests, deposits, smoking, events and damage policy.';
export const metadata = pageMeta({ path: '/terms/', title, description });

export default function Terms() {
  return (
    <StaticPage path="/terms/" label="Terms & House Rules" h1="Terms & House Rules" lead="A few simple rules keep every stay safe, clean and peaceful." image="bedroom-headboard-wardrobe-ac" title={title} description={description}>
      <div className="prose-tc">
        <h2>Check-in</h2>
        <ul>
          <li>Every adult guest must show an original CNIC (passport or NICOP for overseas guests)</li>
          <li>Married couples only; a Nikah Nama may be requested</li>
          <li>Guests under 18 must be accompanied by a parent or guardian</li>
          <li>Check-in and check-out times are confirmed on WhatsApp at booking</li>
        </ul>
        <h2>During your stay</h2>
        <ul>
          <li>No smoking inside rooms or apartments</li>
          <li>No pets</li>
          <li>Visitors must be registered with the host; overnight visitors count as guests</li>
          <li>Quiet hours after 11 PM; events must be pre-approved</li>
          <li>No illegal activity of any kind; the booking will be cancelled without refund</li>
        </ul>
        <h2>Payments and deposits</h2>
        <ul>
          <li>Prices are as published on this website or quoted in writing on WhatsApp</li>
          <li>Monthly and some weekly stays require a refundable security deposit</li>
          <li>Breakfast, food, decoration and pickups are charged separately</li>
        </ul>
        <h2>Damage</h2>
        <p>Guests are responsible for any damage beyond normal wear and tear. Costs are deducted from the deposit or charged at check-out.</p>
        <h2>Liability</h2>
        <p>Please keep valuables secure. {SITE.name} is not responsible for loss of personal belongings left unattended.</p>
        <p>See also our cancellation policy. Questions: {SITE.phoneDisplay} · {SITE.emailInfo}</p>
      </div>
    </StaticPage>
  );
}
