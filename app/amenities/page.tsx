import Link from 'next/link';
import StaticPage from '@/components/StaticPage';
import { Amenities, Gallery } from '@/components/Blocks';
import { pageMeta } from '@/lib/seo';

const title = 'Amenities & Facilities – TwinCity Appartments Bahria Town';
const description = 'Attached bath, AC, Wi-Fi, kitchen, laundry, power backup, parking, 24/7 security, breakfast and food on demand in every Bahria Town stay.';
export const metadata = pageMeta({ path: '/amenities/', title, description });

export default function AmenitiesPage() {
  return (
    <StaticPage path="/amenities/" label="Amenities" h1="Amenities & Facilities" lead="Everything you need for a comfortable stay, from a few hours to a few months." image="apartment-open-kitchen-tv-lounge" title={title} description={description}>
      <Amenities />
      <div className="prose-tc mt-12">
        <h2>Utilities and billing</h2>
        <p>Electricity, gas and water are included in short-time and nightly stays. For monthly stays, utilities are either included in the rent or tracked on separate sub-meters, and this is agreed in writing before you move in.</p>
        <h2>Services on demand</h2>
        <ul>
          <li><Link href="/breakfast-and-food/">Breakfast and food on demand</Link></li>
          <li>Laundry and ironing</li>
          <li>Airport pickup and drop</li>
          <li>Decoration for <Link href="/honeymoon-suites/">honeymoons</Link>, <Link href="/birthday-party-venue/">birthdays</Link>, <Link href="/nikah-ceremony-venue/">nikah ceremonies</Link> and <Link href="/marriage-functions/">small marriage functions</Link></li>
        </ul>
        <h2>Find stays by facility</h2>
        <ul>
          <li><Link href="/rooms-with-kitchen/">Rooms and apartments with kitchen</Link></li>
          <li><Link href="/rooms-with-backup-power/">Rooms with UPS, solar and generator backup</Link></li>
          <li><Link href="/rooms-with-parking/">Rooms with free parking</Link></li>
          <li><Link href="/work-friendly-stays/">Work-friendly stays with fast Wi-Fi</Link></li>
        </ul>
      </div>
      <div className="mt-12"><Gallery keys={['kitchenette-stove-microwave-fridge', 'attached-bathroom-tiled', 'bathroom-electric-geyser', 'open-kitchen-dining-area', 'bedroom-split-ac-wall-panelling', 'family-tv-lounge-green-sofas']} title="Facilities in photos" /></div>
    </StaticPage>
  );
}
