import StaticPage from '@/components/StaticPage';
import BookingForm from '@/components/BookingForm';
import { HowToBook, PriceTable } from '@/components/Blocks';
import { pageMeta } from '@/lib/seo';

const title = 'Book a Room or Apartment in Bahria Town Online';
const description = 'Check availability and book a daily room or furnished apartment in Bahria Town in 2 minutes. Pick stay type, dates and guests. Instant WhatsApp confirmation.';
export const metadata = pageMeta({ path: '/book-now/', title, description });

export default function BookNow() {
  return (
    <StaticPage path="/book-now/" label="Book Now" h1="Book Your Stay in Bahria Town" lead="Fill in the form and send it to us on WhatsApp. We confirm availability and price in minutes." image="luxury-bedroom-golden-ceiling-lights" title={title} description={description} wide>
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-12 [&>*]:min-w-0">
        <BookingForm />
        <div className="lg:sticky lg:top-24 lg:self-start"><PriceTable /></div>
      </div>
      <div className="mt-24"><HowToBook /></div>
    </StaticPage>
  );
}
