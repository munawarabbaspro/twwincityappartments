// Single source of truth for business details. Keep NAP (name, address, phone)
// identical to Google Business Profile, Bing Places and Apple Business Connect.

export const SITE = {
  name: 'TwinCity Appartments',
  shortName: 'TwinCity',
  // Canonical host = the one Vercel serves (apex redirects to www). No trailing slash, https only.
  url: 'https://www.twincityapartments.pk',
  locale: 'en_PK',
  phoneDisplay: '0313-0539832',
  phoneIntl: '+923130539832',
  whatsapp: '923130539832',
  emailInfo: 'info@twincityappart.com',
  emailBooking: 'booking@twincityappartments.com',
  address: {
    // TODO: add your exact office/building address when available
    streetAddress: 'Bahria Town',
    locality: 'Rawalpindi',
    region: 'Punjab',
    postalCode: '46220',
    country: 'PK',
  },
  areaServed: ['Bahria Town Rawalpindi', 'Bahria Town Islamabad', 'Bahria Enclave Islamabad', 'Rawalpindi', 'Islamabad'],
  hours: 'Open 24 hours, 7 days a week for bookings',
  foundingYear: '2026',
  // Paste profile URLs here once created (used in Organization schema "sameAs")
  sameAs: [] as string[],
  googleReviewUrl: '', // e.g. https://g.page/r/XXXX/review
  // Search engine verification codes (Search Console, Bing Webmaster Tools)
  verification: { google: '', bing: '' },
  gaId: '', // Google Analytics 4 ID, e.g. G-XXXXXXX
};

export const PRICES = {
  shortSingle: 4500,
  shortDouble: 5500,
  nightSingle: 6000,
  nightDouble: 14500,
  monthSingleFrom: 55000,
  monthSingleTo: 150000,
  monthDoubleFrom: 100000,
  monthDoubleTo: 250000,
};

export const rs = (n: number) => `Rs ${n.toLocaleString('en-PK')}`;
export const rsk = (n: number) => `Rs ${Math.round(n / 1000)}k`;

export const PRICE_ROWS = [
  { stay: 'Short time (2–4 hours)', room: 'Single bed room', price: rs(PRICES.shortSingle), key: 'short' },
  { stay: 'Short time (2–4 hours)', room: 'Double bed / 2 bed', price: rs(PRICES.shortDouble), key: 'short' },
  { stay: 'Full night', room: 'Single bed room', price: rs(PRICES.nightSingle), key: 'night' },
  { stay: 'Full night', room: 'Double bed room', price: rs(PRICES.nightDouble), key: 'night' },
  { stay: 'Monthly', room: 'Single bed room', price: `${rsk(PRICES.monthSingleFrom)} – ${rsk(PRICES.monthSingleTo)}`, key: 'monthly' },
  { stay: 'Monthly', room: 'Double bed room', price: `${rsk(PRICES.monthDoubleFrom)} – ${rsk(PRICES.monthDoubleTo)}`, key: 'monthly' },
  { stay: 'Daily / weekly / monthly', room: 'Full furnished apartment', price: 'Best rates – ask on WhatsApp', key: 'apartment' },
] as const;

export const PRICE_RANGE = `${rs(PRICES.shortSingle)} – ${rs(PRICES.monthDoubleTo)}`;

export function waLink(message = `Hi ${SITE.name}, I want to book a room. Please share availability.`) {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}
export const telLink = `tel:${SITE.phoneIntl}`;

export const AMENITY_GROUPS = [
  {
    title: 'Basic Living & Comfort',
    items: [
      ['Attached or private bathroom', 'Clean sanitary fittings with running hot and cold water.'],
      ['Quality furniture', 'Comfortable bed and mattress, wardrobe, and a work desk with chair.'],
      ['Climate control', 'Air conditioning in summer and heating in winter.'],
      ['High-speed Wi-Fi', 'Reliable internet included in every room and apartment.'],
    ],
  },
  {
    title: 'Kitchen & Dining',
    items: [
      ['Kitchenette or shared kitchen', 'Gas stove or induction plate, refrigerator and basic crockery.'],
      ['Clean drinking water', 'Filtered water or a water dispenser.'],
      ['Breakfast on demand', 'Fresh desi or continental breakfast served to your room.'],
      ['Food on demand', 'Lunch and dinner ordered in for you whenever you need.'],
    ],
  },
  {
    title: 'Utilities & Services',
    items: [
      ['Electricity, gas and water', 'Clear billing: included in short stays, sub-metered or included on monthly stays.'],
      ['Laundry', 'Washing machine access or a dedicated laundry and drying area.'],
      ['Power backup', 'Generator or UPS support during load-shedding.'],
      ['Event decoration', 'Decor arranged for nikah, birthdays, honeymoons and small functions.'],
    ],
  },
  {
    title: 'Security & Access',
    items: [
      ['Car and bike parking', 'Dedicated or safe parking space.'],
      ['24/7 security', 'CCTV, gated entrance and a responsive host around the clock.'],
      ['Gated community', 'All stays are inside secure Bahria Town.'],
      ['Easy check-in', 'Quick CNIC-verified check-in, confirmed on WhatsApp.'],
    ],
  },
] as const;

export const AMENITY_NAMES = AMENITY_GROUPS.flatMap((g) => g.items.map((i) => i[0]));
