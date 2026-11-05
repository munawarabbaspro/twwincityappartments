import type { Metadata } from 'next';
import { SITE, PRICE_RANGE, AMENITY_NAMES } from './site';
import type { Faq } from './types';

const abs = (path: string) => (path.startsWith('http') ? path : `${SITE.url}${path}`);

export function pageMeta(opts: {
  path: string;
  title: string;
  description: string;
  image?: string;
  type?: 'website' | 'article';
  keywords?: string[];
}): Metadata {
  // Social previews (WhatsApp/Facebook) need a 1200x630 JPG; page photos are portrait WebP.
  const image = opts.image?.endsWith('.jpg') ? opts.image : '/og-image.jpg';
  return {
    title: { absolute: opts.title },
    description: opts.description,
    keywords: opts.keywords,
    alternates: { canonical: opts.path },
    openGraph: {
      type: opts.type ?? 'website',
      url: opts.path,
      title: opts.title,
      description: opts.description,
      siteName: SITE.name,
      locale: SITE.locale,
      images: [{ url: image, width: 1200, height: 630, alt: opts.title }],
    },
    twitter: { card: 'summary_large_image', title: opts.title, description: opts.description, images: [image] },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 } },
  };
}

const address = {
  '@type': 'PostalAddress',
  streetAddress: SITE.address.streetAddress,
  addressLocality: SITE.address.locality,
  addressRegion: SITE.address.region,
  postalCode: SITE.address.postalCode,
  addressCountry: SITE.address.country,
};

export const ORG_ID = `${SITE.url}/#organization`;
export const LODGING_ID = `${SITE.url}/#lodging`;

export function siteGraph() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': ORG_ID,
        name: SITE.name,
        url: `${SITE.url}/`,
        logo: `${SITE.url}/icon.svg`,
        email: SITE.emailInfo,
        telephone: SITE.phoneIntl,
        sameAs: SITE.sameAs,
        contactPoint: [
          { '@type': 'ContactPoint', telephone: SITE.phoneIntl, contactType: 'reservations', email: SITE.emailBooking, availableLanguage: ['English', 'Urdu'], areaServed: 'PK' },
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE.url}/#website`,
        url: `${SITE.url}/`,
        name: SITE.name,
        publisher: { '@id': ORG_ID },
        inLanguage: 'en-PK',
      },
    ],
  };
}

export function lodgingLd(images: string[]) {
  return {
    '@context': 'https://schema.org',
    '@type': ['LodgingBusiness', 'LocalBusiness'],
    '@id': LODGING_ID,
    name: SITE.name,
    url: `${SITE.url}/`,
    description: 'Daily, short-time, weekly and monthly furnished rooms and apartments in Bahria Town Rawalpindi and Islamabad, with breakfast, food and event decoration on demand.',
    telephone: SITE.phoneIntl,
    email: SITE.emailBooking,
    image: images.map(abs),
    priceRange: PRICE_RANGE,
    currenciesAccepted: 'PKR',
    paymentAccepted: 'Cash, Bank Transfer, Mobile Wallet',
    address,
    areaServed: SITE.areaServed.map((name) => ({ '@type': 'Place', name })),
    openingHoursSpecification: [{ '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], opens: '00:00', closes: '23:59' }],
    amenityFeature: AMENITY_NAMES.map((name) => ({ '@type': 'LocationFeatureSpecification', name, value: true })),
    petsAllowed: false,
    parentOrganization: { '@id': ORG_ID },
    sameAs: SITE.sameAs,
  };
}

export function breadcrumbLd(items: { href: string; label: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.label, item: abs(it.href) })),
  };
}

export function faqLd(faqs: Faq[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
}

export function itemListLd(name: string, items: { href: string; label: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, url: abs(it.href), name: it.label })),
  };
}

export function webPageLd(path: string, name: string, description: string, image: string, about?: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${abs(path)}#webpage`,
    url: abs(path),
    name,
    description,
    inLanguage: 'en-PK',
    isPartOf: { '@id': `${SITE.url}/#website` },
    primaryImageOfPage: abs(image),
    about: about ? { '@type': 'Thing', name: about } : { '@id': LODGING_ID },
    speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.quick-answer'] },
  };
}

export function serviceLd(name: string, path: string, description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    serviceType: name,
    url: abs(path),
    description,
    provider: { '@id': LODGING_ID },
    areaServed: SITE.areaServed.map((n) => ({ '@type': 'Place', name: n })),
  };
}

export function articleLd(p: { path: string; title: string; description: string; image: string; date: string; updated: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: p.title,
    description: p.description,
    image: [abs(p.image)],
    datePublished: p.date,
    dateModified: p.updated,
    mainEntityOfPage: abs(p.path),
    author: { '@type': 'Organization', name: SITE.name, url: `${SITE.url}/` },
    publisher: { '@id': ORG_ID },
    inLanguage: 'en-PK',
  };
}

export function accommodationLd(l: {
  path: string; name: string; description: string; images: string[]; beds: number; baths: number; guests: number; type: string;
  features: string[]; prices: { label: string; value?: number }[];
}) {
  const t = l.type === 'Apartment' || l.type === 'Studio' ? 'Apartment' : l.type === 'Suite' ? 'Suite' : 'HotelRoom';
  const id = `${abs(l.path)}#accommodation`;
  const offers = l.prices.filter((p) => p.value).map((p) => ({
    '@type': 'Offer',
    name: `${l.name} – ${p.label}`,
    price: p.value,
    priceCurrency: 'PKR',
    availability: 'https://schema.org/InStock',
    url: abs(l.path),
    itemOffered: { '@id': id },
    offeredBy: { '@id': LODGING_ID },
  }));
  const node = {
    '@type': t,
    '@id': id,
    name: l.name,
    description: l.description,
    url: abs(l.path),
    image: l.images.map(abs),
    numberOfRooms: l.beds,
    numberOfBathroomsTotal: l.baths,
    occupancy: { '@type': 'QuantitativeValue', maxValue: l.guests },
    amenityFeature: l.features.map((name) => ({ '@type': 'LocationFeatureSpecification', name, value: true })),
    address,
    containedInPlace: { '@id': LODGING_ID },
  };
  return { '@context': 'https://schema.org', '@graph': [node, ...offers] };
}
