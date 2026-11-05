import StaticPage from '@/components/StaticPage';
import { pageMeta } from '@/lib/seo';
import { SITE } from '@/lib/site';

const title = 'Privacy Policy | TwinCity Appartments';
const description = 'How TwinCity Appartments collects, uses and protects your personal data and CNIC details when you book a room or apartment in Bahria Town.';
export const metadata = pageMeta({ path: '/privacy-policy/', title, description });

export default function Privacy() {
  return (
    <StaticPage path="/privacy-policy/" label="Privacy Policy" h1="Privacy Policy" lead="Your privacy matters to us. Here is what we collect and why." image="bedroom-balcony-door-wardrobe" title={title} description={description}>
      <div className="prose-tc">
        <p>This policy explains how {SITE.name} (&ldquo;we&rdquo;) handles personal information when you visit {SITE.url.replace('https://', '')} or book a stay with us.</p>
        <h2>What we collect</h2>
        <ul>
          <li>Booking details you send us: name, phone number, dates, number of guests and requests</li>
          <li>Identity documents at check-in: CNIC, passport or NICOP, as required by law</li>
          <li>Basic, anonymous website analytics such as pages visited and button clicks</li>
        </ul>
        <h2>How we use it</h2>
        <ul>
          <li>To confirm and manage your booking</li>
          <li>To meet legal guest-registration requirements</li>
          <li>To improve our website and service</li>
        </ul>
        <h2>What we never do</h2>
        <p>We never sell your data, and we never share your identity documents with anyone except where required by law enforcement authorities.</p>
        <h2>Booking form</h2>
        <p>Our online booking form does not store your details on this website. It opens WhatsApp with your message so you can send it to us directly.</p>
        <h2>Cookies</h2>
        <p>We may use analytics cookies to understand how visitors use our site. You can block cookies in your browser settings.</p>
        <h2>Your rights</h2>
        <p>You can ask us to show, correct or delete the personal information we hold about you by emailing {SITE.emailInfo}.</p>
        <p>Last updated: 5 November 2026.</p>
      </div>
    </StaticPage>
  );
}
