import type { Faq, PageDef } from '@/lib/types';
import { pickImages } from '@/lib/images';

type Area = {
  slug: string;
  name: string; // "Bahria Town Phase 4"
  short: string; // "Phase 4"
  title: string;
  description: string;
  h1: string;
  keyword: string;
  secondary: string[];
  character: string; // unique paragraph on the area
  goodFor: string[];
  getting: string; // access & travel
  nearby: string[]; // landmarks (approximate; verify before launch)
  faqs: Faq[];
  related: string[];
  hasSub?: boolean;
};

// NOTE: travel times are approximate and depend on traffic. Verify against your
// exact building before publishing and update if needed.
const AREAS: Area[] = [
  {
    slug: 'bahria-town-phase-1', name: 'Bahria Town Phase 1', short: 'Phase 1',
    title: 'Rooms & Apartments in Bahria Town Phase 1',
    description: 'Daily and monthly rooms and apartments in Bahria Town Phase 1, Rawalpindi. Quiet residential stays close to the main boulevard. From Rs 4,500. Book now.',
    h1: 'Stay in Bahria Town Phase 1', keyword: 'Bahria Town Phase 1 rooms', secondary: ['Phase 1 guest house', 'Phase 1 apartment rent'],
    character: 'Phase 1 is one of the original, fully settled parts of Bahria Town Rawalpindi. Streets are mature and tree-lined, houses are well established and the pace is calm. It suits guests who want a quiet, residential feel while staying close to the main boulevard and the older commercial areas.',
    goodFor: ['Families visiting relatives in Phases 1–3', 'Guests who prefer quiet residential streets', 'Monthly stays for working professionals'],
    getting: 'Phase 1 sits on the older side of Bahria Town with quick road access toward the Islamabad Expressway, which makes trips into Islamabad straightforward outside rush hour.',
    nearby: ['Main Bahria Town boulevard', 'Phase 2 and Phase 3 markets', 'Islamabad Expressway access', 'Civic Center in Phase 4 (short drive)'],
    faqs: [
      { q: 'Is Bahria Town Phase 1 a good area to stay?', a: 'Yes. Phase 1 is settled, quiet and family friendly, with quick access to the boulevard and the Expressway.' },
      { q: 'Can I get a room per day in Phase 1?', a: 'Yes. Rooms in and around Phase 1 are available for short time, per night and monthly. WhatsApp us for current availability.' },
      { q: 'How far is Phase 1 from Civic Center?', a: 'Civic Center in Phase 4 is a short drive from Phase 1, usually under 10 minutes.' },
      { q: 'Are monthly rentals available in Phase 1?', a: 'Yes. Monthly single rooms start from Rs 55,000 and double rooms from Rs 100,000.' },
    ],
    related: ['bahria-town-phase-2', 'bahria-town-phase-3', 'stays-for-families', 'monthly-rentals'],
  },
  {
    slug: 'bahria-town-phase-2', name: 'Bahria Town Phase 2', short: 'Phase 2',
    title: 'Rooms & Apartments in Bahria Town Phase 2',
    description: 'Furnished rooms and apartments for rent per day in Bahria Town Phase 2. Family friendly, parking, backup power. See photos, prices and book on WhatsApp.',
    h1: 'Stay in Bahria Town Phase 2', keyword: 'Bahria Town Phase 2 rooms', secondary: ['Phase 2 apartment per day', 'Phase 2 guest house'],
    character: 'Phase 2 is a compact, family-oriented sector between Phase 1 and Phase 3. It has neighbourhood shops, parks and mosques within walking distance, and the streets stay peaceful at night, which is why families visiting for weddings or hospital visits often choose it.',
    goodFor: ['Families and elderly guests', 'Short visits to relatives in nearby phases', 'Guests who want parks and walking space'],
    getting: 'Phase 2 links directly to Phase 1 and Phase 3, so the Expressway and the Civic Center commercial area in Phase 4 are both reachable in minutes.',
    nearby: ['Neighbourhood parks', 'Phase 1 and Phase 3 boundaries', 'Local markets and mosques', 'Civic Center (short drive)'],
    faqs: [
      { q: 'Is Phase 2 family friendly?', a: 'Yes. Phase 2 is a calm residential sector with parks and mosques nearby, popular with families.' },
      { q: 'What does an apartment per day cost in Phase 2?', a: 'Rooms start at Rs 6,000 per night for a single and Rs 14,500 for a double. Full apartments are quoted on WhatsApp at our best rates.' },
      { q: 'Is parking available in Phase 2?', a: 'Yes, our stays include car and bike parking.' },
      { q: 'Do you offer breakfast in Phase 2?', a: 'Yes, breakfast and food are available on demand at every TwinCity stay.' },
    ],
    related: ['bahria-town-phase-1', 'bahria-town-phase-3', 'family-apartments', 'wedding-guest-stays'],
  },
  {
    slug: 'bahria-town-phase-3', name: 'Bahria Town Phase 3', short: 'Phase 3',
    title: 'Rooms & Apartments in Bahria Town Phase 3',
    description: 'Book daily rooms and apartments in Bahria Town Phase 3. Clean, secure stays with Wi-Fi and parking. Short time, per night, weekly and monthly rates.',
    h1: 'Stay in Bahria Town Phase 3', keyword: 'Bahria Town Phase 3 rooms', secondary: ['Phase 3 guest house', 'Phase 3 rent per day'],
    character: 'Phase 3 sits in the middle of the older phases, next door to Phase 4 and its Civic Center. That makes it a practical base: quieter than the commercial core, yet close enough to walk or take a short ride to restaurants, banks and shops.',
    goodFor: ['Guests who want quiet nights near Civic Center', 'Business visitors on short trips', 'Weekly stays'],
    getting: 'From Phase 3 you reach Civic Center in Phase 4 within minutes, and the Expressway via the older-phase roads.',
    nearby: ['Civic Center, Phase 4', 'Phase 3 commercial strip', 'Banks and pharmacies', 'Islamabad Expressway access'],
    faqs: [
      { q: 'Why stay in Phase 3?', a: 'It is quiet but very close to Civic Center in Phase 4, giving you easy access to food and shopping.' },
      { q: 'Do you have short time rooms in Phase 3?', a: 'Short-time (2–4 hours) rooms start at Rs 4,500. Message us to check which buildings have availability today.' },
      { q: 'Are weekly stays available in Phase 3?', a: 'Yes, at discounted weekly rates. Send your dates on WhatsApp.' },
      { q: 'Is Phase 3 safe at night?', a: 'Bahria Town is a gated community with its own security patrols, and Phase 3 is a settled residential area.' },
    ],
    related: ['bahria-town-phase-4', 'civic-center-bahria-town', 'weekly-rentals', 'business-stays'],
  },
  {
    slug: 'bahria-town-phase-4', name: 'Bahria Town Phase 4', short: 'Phase 4',
    title: 'Rooms & Apartments in Bahria Town Phase 4',
    description: 'Daily rooms and apartments in Bahria Town Phase 4, near Civic Center restaurants and shops. Single, double and family stays. Book on WhatsApp today.',
    h1: 'Stay in Bahria Town Phase 4', keyword: 'Bahria Town Phase 4 rooms', secondary: ['Phase 4 apartments per day', 'Phase 4 guest house'],
    character: 'Phase 4 is home to Civic Center, the busiest commercial hub of the older Bahria Town phases. High-rise apartment buildings surround a square full of restaurants, cafés, banks, offices and shops, so everything you need is downstairs. It is the top choice for short stays, business trips and anyone who likes being in the middle of things.',
    goodFor: ['Business travellers and meetings', 'Guests who want food and shopping on foot', 'Short-time and one-night stays', 'Couples and honeymooners'],
    getting: 'Phase 4 connects to the Expressway side of Bahria Town and to Phases 3 and 5–7 by the main roads. Ride-hailing pickups are easy around Civic Center.',
    nearby: ['Civic Center square', 'Restaurants and cafés', 'Banks and ATMs', 'Pharmacies and grocery stores'],
    faqs: [
      { q: 'What is near Bahria Town Phase 4?', a: 'Civic Center, with restaurants, cafés, banks, offices and shops, sits at the heart of Phase 4.' },
      { q: 'How much are apartments per day in Phase 4?', a: 'Single rooms are Rs 6,000 and double rooms Rs 14,500 per night. Short stays start at Rs 4,500. Full apartments are quoted on WhatsApp.' },
      { q: 'Is Phase 4 noisy?', a: 'Civic Center is lively in the evening. If you prefer quiet, ask for a higher floor or a unit facing away from the square.' },
      { q: 'Do you have studio apartments in Phase 4?', a: 'Yes, studios with kitchenettes are among our most popular Phase 4 options.' },
    ],
    related: ['civic-center-bahria-town', 'bahria-town-phase-3', 'bahria-town-phase-5', 'business-stays'],
    hasSub: true,
  },
  {
    slug: 'bahria-town-phase-5', name: 'Bahria Town Phase 5', short: 'Phase 5',
    title: 'Rooms & Apartments in Bahria Town Phase 5',
    description: 'Affordable daily and monthly rooms in Bahria Town Phase 5, Rawalpindi. Furnished, secure and family friendly. Check prices from Rs 4,500 and book.',
    h1: 'Stay in Bahria Town Phase 5', keyword: 'Bahria Town Phase 5 rooms', secondary: ['Phase 5 apartment rent', 'Phase 5 guest house'],
    character: 'Phase 5 is a residential sector that often offers better value than the busy Civic Center area next door. Guests get the same Bahria Town security and services with a little more space and quiet, which makes it a good pick for longer stays on a budget.',
    goodFor: ['Budget-conscious guests', 'Monthly renters', 'Students and job seekers'],
    getting: 'Phase 5 sits between Phase 4 and Phases 6–7, so Civic Center and Spring North are both a short drive away.',
    nearby: ['Civic Center, Phase 4', 'Phase 6 markets', 'Spring North, Phase 7 (short drive)', 'Neighbourhood parks'],
    faqs: [
      { q: 'Is Phase 5 cheaper than Phase 4?', a: 'Monthly rents in Phase 5 are often a little lower than around Civic Center, with the same amenities.' },
      { q: 'Can students rent monthly in Phase 5?', a: 'Yes, monthly single rooms start from Rs 55,000.' },
      { q: 'Is there backup power?', a: 'Yes, every TwinCity stay has generator or UPS backup.' },
      { q: 'How do I book in Phase 5?', a: 'WhatsApp 0313-0539832 with your dates and number of guests.' },
    ],
    related: ['cheap-rooms-bahria-town', 'rooms-for-students', 'bahria-town-phase-4', 'bahria-town-phase-6'],
  },
  {
    slug: 'bahria-town-phase-6', name: 'Bahria Town Phase 6', short: 'Phase 6',
    title: 'Rooms & Apartments in Bahria Town Phase 6',
    description: 'Book rooms and furnished apartments in Bahria Town Phase 6 by the day, week or month. AC, Wi-Fi, parking and backup power included. See prices.',
    h1: 'Stay in Bahria Town Phase 6', keyword: 'Bahria Town Phase 6 rooms', secondary: ['Phase 6 apartment per day', 'Phase 6 guest house'],
    character: 'Phase 6 is a well-planned residential sector with its own markets and easy links to Phase 7. It balances the calm of a residential area with quick access to the newer commercial spots, a good fit for families and weekly guests.',
    goodFor: ['Families on weekly stays', 'Guests visiting both older and newer phases', 'Wedding guests'],
    getting: 'Phase 6 links straight to Phase 7 and Spring North, and back toward Phases 4–5 and the Expressway.',
    nearby: ['Phase 6 markets', 'Spring North, Phase 7', 'Mosques and parks', 'Civic Center (short drive)'],
    faqs: [
      { q: 'Is Phase 6 good for families?', a: 'Yes. It is residential, calm and close to markets and parks.' },
      { q: 'What is the rent per day in Phase 6?', a: 'Short time from Rs 4,500, per night Rs 6,000 (single) or Rs 14,500 (double).' },
      { q: 'Are there apartments with kitchens in Phase 6?', a: 'Yes, our apartments include kitchens or kitchenettes.' },
      { q: 'How far is Spring North from Phase 6?', a: 'Spring North in Phase 7 is a few minutes\' drive from Phase 6.' },
    ],
    related: ['bahria-town-phase-7', 'bahria-town-phase-5', 'weekly-rentals', 'family-apartments'],
    hasSub: true,
  },
  {
    slug: 'bahria-town-phase-7', name: 'Bahria Town Phase 7', short: 'Phase 7',
    title: 'Rooms & Apartments in Bahria Town Phase 7',
    description: 'Daily rooms and apartments in Bahria Town Phase 7 near Spring North and main commercial areas. Single, double and family options. Book on WhatsApp now.',
    h1: 'Stay in Bahria Town Phase 7', keyword: 'Bahria Town Phase 7 rooms', secondary: ['Phase 7 apartments per day', 'Phase 7 guest house', 'Spring North rooms'],
    character: 'Phase 7 is the bridge between the older phases and Phase 8. Its Spring North commercial area packs restaurants, cafés and shops close together, and modern apartment buildings line the main roads. Many of our guests say Phase 7 gives the best mix of convenience and calm.',
    goodFor: ['Couples and families', 'Food lovers who want restaurants nearby', '1 and 2 bed apartment stays', 'Weekly and monthly stays'],
    getting: 'Phase 7 has good road links to the Expressway and onward to Phase 8 and the GT Road side, making it a convenient base for both Islamabad and Rawalpindi.',
    nearby: ['Spring North commercial area', 'Restaurants and cafés', 'Phase 8 (short drive)', 'Expressway access'],
    faqs: [
      { q: 'What is Spring North in Bahria Town?', a: 'Spring North is a commercial area in Phase 7 with restaurants, cafés and shops.' },
      { q: 'Do you have 1 bed and 2 bed apartments in Phase 7?', a: 'Yes. Furnished 1 and 2 bed apartments are available per day, per week and per month.' },
      { q: 'Is Phase 7 safe at night?', a: 'Yes. Bahria Town is gated with its own security, and Phase 7 main roads stay well lit and busy in the evening.' },
      { q: 'How much is a room in Phase 7 per night?', a: 'Rs 6,000 for a single and Rs 14,500 for a double bed room.' },
    ],
    related: ['rooms-near-spring-north', 'bahria-town-phase-8', 'bahria-town-phase-6', 'couple-stays'],
    hasSub: true,
  },
  {
    slug: 'bahria-town-phase-8', name: 'Bahria Town Phase 8', short: 'Phase 8',
    title: 'Rooms & Apartments in Bahria Town Phase 8',
    description: 'Furnished rooms and apartments for rent per day in Bahria Town Phase 8, close to GT Road and the Expressway. Family stays, parking, backup power. Book today.',
    h1: 'Stay in Bahria Town Phase 8', keyword: 'Bahria Town Phase 8 rooms', secondary: ['Phase 8 apartment rent', 'Phase 8 guest house', '2 bed apartment for rent bahria town phase 8'],
    character: 'Phase 8 is the largest and newest part of Bahria Town Rawalpindi, with wide roads, new apartment towers, Safari Valley and several sub-sectors. It sits on the GT Road side, so it is the easiest phase to reach for guests driving in from Lahore, Jhelum or Peshawar.',
    goodFor: ['Road travellers on GT Road', 'Families wanting newer buildings', 'Large groups and wedding guests', 'Monthly stays'],
    getting: 'Phase 8 has access toward GT Road and links back to Phase 7 and the Expressway, so you can reach both Rawalpindi and Islamabad without crossing the city centre.',
    nearby: ['Safari Valley', 'GT Road access', 'Phase 7 and Spring North', 'Newer apartment towers and commercial blocks'],
    faqs: [
      { q: 'Is Phase 8 good for road travellers?', a: 'Yes. Phase 8 is on the GT Road side, so you avoid city traffic when driving in from Lahore or Peshawar.' },
      { q: 'Do you have 2 bed apartments in Phase 8?', a: 'Yes, 2 and 3 bed family apartments are available per day and per month.' },
      { q: 'Is Safari Valley part of Phase 8?', a: 'Yes, Safari Valley is a sub-sector of Bahria Town Phase 8.' },
      { q: 'What is the monthly rent in Phase 8?', a: 'Single rooms from Rs 55,000 and double rooms from Rs 100,000 per month.' },
    ],
    related: ['safari-valley', 'rooms-near-gt-road-expressway', 'bahria-town-phase-7', 'family-apartments'],
    hasSub: true,
  },
  {
    slug: 'safari-valley', name: 'Safari Valley, Bahria Town', short: 'Safari Valley',
    title: 'Rooms & Apartments in Safari Valley, Bahria Town',
    description: 'Book daily and monthly stays in Safari Valley, Bahria Town Phase 8. Peaceful furnished homes and apartments for families. See availability and prices.',
    h1: 'Stay in Safari Valley, Bahria Town', keyword: 'Safari Valley Bahria Town rooms', secondary: ['Safari Valley apartment', 'Safari Villas rent'],
    character: 'Safari Valley is a green, low-density pocket inside Phase 8, known for villa-style homes and open spaces. It is one of the quietest places to stay in Bahria Town, ideal for families who want peace, fresh air and room for children.',
    goodFor: ['Families with children', 'Long, quiet stays', 'Guests who want a villa-style feel'],
    getting: 'Safari Valley is reached through Phase 8, with the GT Road side and Phase 7 a short drive away.',
    nearby: ['Phase 8 commercial areas', 'Green belts and parks', 'GT Road access', 'Phase 7 (short drive)'],
    faqs: [
      { q: 'Where is Safari Valley?', a: 'Safari Valley is a sub-sector of Bahria Town Phase 8, Rawalpindi.' },
      { q: 'Is Safari Valley quiet?', a: 'Yes, it is one of the calmest, greenest parts of Bahria Town.' },
      { q: 'Can I rent a full home in Safari Valley?', a: 'Full apartments and family units are available at our best rates. Message us for current options.' },
      { q: 'Is food available in Safari Valley stays?', a: 'Yes, breakfast and meals are available on demand.' },
    ],
    related: ['bahria-town-phase-8', 'family-apartments', 'stays-for-families', 'monthly-rentals'],
  },
  {
    slug: 'bahria-enclave-islamabad', name: 'Bahria Enclave Islamabad', short: 'Bahria Enclave',
    title: 'Rooms & Apartments in Bahria Enclave Islamabad',
    description: 'Daily and monthly rooms and apartments in Bahria Enclave Islamabad. Green, quiet stays with parking and Wi-Fi. Compare prices and book on WhatsApp.',
    h1: 'Stay in Bahria Enclave Islamabad', keyword: 'Bahria Enclave rooms', secondary: ['Bahria Enclave apartment rent', 'guest house Bahria Enclave', 'apartments in bahria enclave islamabad'],
    character: 'Bahria Enclave is Bahria\'s Islamabad community, set among green hills on the city\'s quieter side. It feels more like a resort than a city sector, which makes it a favourite for honeymooners, families on holiday and anyone who wants fresh air within reach of Islamabad.',
    goodFor: ['Honeymoon and holiday stays', 'Families wanting a scenic setting', 'Guests with work in Islamabad'],
    getting: 'Bahria Enclave is on the Islamabad side and is reached by road from the city. It is a separate community from Bahria Town Rawalpindi, so allow extra time if you plan to visit both.',
    nearby: ['Green hills and walking areas', 'Enclave commercial area', 'Islamabad city sectors (drive)', 'Route toward Murree (drive)'],
    faqs: [
      { q: 'Is Bahria Enclave in Islamabad or Rawalpindi?', a: 'Bahria Enclave is in Islamabad. It is separate from Bahria Town Rawalpindi phases.' },
      { q: 'Is Bahria Enclave good for honeymoon?', a: 'Yes, its green, hilly setting makes it popular with couples. Ask about decoration packages.' },
      { q: 'What are the rates in Bahria Enclave?', a: 'Our standard rates apply: Rs 6,000 per night for a single room, Rs 14,500 for a double. Message us to confirm Enclave availability.' },
      { q: 'Is it far from Bahria Town Rawalpindi?', a: 'Yes, it is a separate community; plan for a drive between the two.' },
    ],
    related: ['honeymoon-suites', 'daily-rooms-islamabad', 'tourist-stays', 'couple-stays'],
  },
  {
    slug: 'bahria-town-west', name: 'Bahria Town West', short: 'West',
    title: 'Rooms & Apartments in Bahria Town West',
    description: 'Daily rooms and furnished apartments in Bahria Town West. Per night, weekly and monthly stays with parking and backup power. See prices and book now.',
    h1: 'Stay in Bahria Town West', keyword: 'Bahria Town West rooms', secondary: ['West apartments per day', 'West guest house'],
    character: 'The western side of Bahria Town is a newer, developing area with fresh buildings and lower rents than the central phases. Guests who are happy to drive a few extra minutes get newer interiors and better monthly value.',
    goodFor: ['Monthly renters on a budget', 'Guests with their own car', 'Long stays'],
    getting: 'Reach the western side by car from the main Bahria Town roads. Tell us your destination and we suggest the closest unit.',
    nearby: ['Main Bahria Town roads', 'Newer residential blocks', 'Neighbouring phases (drive)'],
    faqs: [
      { q: 'Are rents lower on the western side?', a: 'Monthly rents on newer, developing sides are often lower than around Civic Center or Spring North.' },
      { q: 'Do I need a car?', a: 'A car or ride-hailing app is recommended for newer areas.' },
      { q: 'Are daily stays available?', a: 'Yes, per night and short time stays are available subject to availability.' },
      { q: 'How do I check availability?', a: 'WhatsApp 0313-0539832 with your dates.' },
    ],
    related: ['monthly-rentals', 'cheap-rooms-bahria-town', 'bahria-town-phase-8', 'rooms-with-parking'],
  },
  {
    slug: 'civic-center-bahria-town', name: 'Civic Center, Bahria Town', short: 'Civic Center',
    title: 'Apartments Near Civic Center Bahria Town',
    description: 'Furnished apartments and rooms walking distance from Civic Center, Bahria Town Phase 4. Food, shopping and cafés next door. Book on WhatsApp now.',
    h1: 'Apartments Near Civic Center, Bahria Town', keyword: 'apartments Civic Center Bahria Town', secondary: ['Civic Center rooms per day', 'Phase 4 Civic Center stay'],
    character: 'Civic Center is the commercial square at the heart of Phase 4, surrounded by apartment towers. Staying here means restaurants, cafés, bakeries, banks and shops are a few steps from your door. It is the best location for guests without a car.',
    goodFor: ['Guests without a car', 'Business travellers', 'Couples who enjoy eating out', 'Short-time stays'],
    getting: 'Ride-hailing pickups are easy around Civic Center, and it is well connected to the older phases and the Expressway.',
    nearby: ['Restaurants and fast food', 'Cafés and bakeries', 'Banks and ATMs', 'Shops and pharmacies'],
    faqs: [
      { q: 'Can I walk to restaurants from your Civic Center apartments?', a: 'Yes, restaurants and cafés are within walking distance.' },
      { q: 'Are Civic Center apartments good for business trips?', a: 'Yes. They have Wi-Fi, backup power and work desks, with offices and banks nearby.' },
      { q: 'What is the price per night near Civic Center?', a: 'Rs 6,000 for a single room and Rs 14,500 for a double room.' },
      { q: 'Is there parking at Civic Center?', a: 'Yes, parking is provided with our units.' },
    ],
    related: ['bahria-town-phase-4', 'business-stays', 'studio-apartments', 'hotels-in-bahria-town'],
  },
];

// ---------- C1: Bahria Town hub ----------
const HUB: PageDef = {
  slug: 'bahria-town',
  group: 'location',
  menu: 'All Bahria Town Phases',
  title: 'Rooms & Apartments in All Bahria Town Phases',
  description: 'Browse daily rooms, apartments and guest houses phase by phase across Bahria Town Rawalpindi and Islamabad. Prices, photos and availability for every sector.',
  h1: 'Stay Anywhere in Bahria Town',
  keyword: 'rooms in Bahria Town',
  secondary: ['Bahria Town phases rentals', 'Bahria Town Rawalpindi accommodation', 'apartments for rent in bahria town rawalpindi', 'flats for rent in bahria town islamabad'],
  answer: 'TwinCity Appartments rents rooms and furnished apartments across Bahria Town Rawalpindi (Phases 1–8, Safari Valley, Civic Center) and Bahria Enclave Islamabad. Prices start at Rs 4,500 for short time, Rs 6,000 per night and Rs 55,000 per month.',
  intro: [
    'Bahria Town is a large gated community spread across Rawalpindi and Islamabad, and each phase has its own character. Choosing the right one saves you time on the road and makes your stay easier.',
    'Use this page to compare phases and jump to the one that fits your plans. Every phase page lists what is nearby, who it suits and the questions guests ask most.',
  ],
  sections: [
    {
      h2: 'Which Bahria Town phase should you stay in?',
      p: ['Pick by purpose:'],
      bullets: [
        'Food, shopping and no car: Phase 4 / Civic Center',
        'Restaurants with a calmer feel: Phase 7 near Spring North',
        'Driving in on GT Road: Phase 8 or Safari Valley',
        'Quiet family stays: Phases 1, 2 and 6',
        'Budget monthly stays: Phase 5 or the western side',
        'Scenic, Islamabad-side stays: Bahria Enclave',
      ],
    },
    {
      h2: 'Same standard in every phase',
      p: ['Wherever you stay with TwinCity Appartments, you get the same promise: real photos, fixed prices, an attached bath, AC, Wi-Fi, backup power, parking, and breakfast or food on demand.'],
    },
  ],
  faqs: [
    { q: 'Which phase of Bahria Town is best to stay in?', a: 'Phase 4 (Civic Center) and Phase 7 (Spring North) are best for convenience. Phases 1, 2 and 6 are quietest for families. Phase 8 suits GT Road travellers.' },
    { q: 'Is Bahria Town safe for guests?', a: 'Yes. It is a gated community with its own security. All our guests are CNIC-verified.' },
    { q: 'Is Bahria Town in Islamabad or Rawalpindi?', a: 'Bahria Town Phases 1–8 are in Rawalpindi. Bahria Enclave is in Islamabad.' },
    { q: 'Can I book rooms in different phases for a group?', a: 'Yes. Tell us your group size and we arrange nearby units.' },
  ],
  images: pickImages('bahria-town', 6, ['luxury-living-room-tv-wall', 'family-apartment-lounge-false-ceiling']),
  related: AREAS.map((a) => a.slug),
  prices: ['short', 'night', 'monthly', 'apartment'],
};

function areaPage(a: Area): PageDef {
  return {
    slug: a.slug,
    group: 'location',
    menu: a.short,
    title: a.title,
    description: a.description,
    h1: a.h1,
    keyword: a.keyword,
    secondary: a.secondary,
    parent: 'bahria-town',
    answer: `TwinCity Appartments has furnished rooms and apartments in and around ${a.name}. Short-time stays start at Rs 4,500, a full night is Rs 6,000 (single) or Rs 14,500 (double), and monthly rent starts at Rs 55,000. Book on WhatsApp at 0313-0539832.`,
    intro: [
      a.character,
      `Our ${a.short} stays come with the TwinCity standard: an attached bathroom, AC, Wi-Fi, backup power, parking and breakfast or food on demand. Book for a few hours, a night, a week or a month.`,
    ],
    sections: [
      { h2: `Who ${a.short} is best for`, p: [`${a.name} works especially well for:`], bullets: a.goodFor },
      { h2: `Getting around from ${a.short}`, p: [a.getting] },
      { h2: `What is near our ${a.short} stays`, p: ['Approximate, depending on your exact unit:'], bullets: a.nearby },
    ],
    faqs: a.faqs,
    images: pickImages(a.slug, 6),
    related: [
      ...(a.hasSub ? ['daily-rooms', 'apartments', 'guest-house'].map((t) => `${a.slug}/${t}`) : []),
      ...a.related,
    ],
    prices: ['short', 'night', 'monthly'],
  };
}

// ---------- C2: phase x property type ----------
const TYPES = {
  'daily-rooms': {
    label: 'Daily Rooms',
    kw: (s: string) => `room per day ${s} Bahria Town`,
    sec: (s: string) => [`single bed room ${s}`, `double room ${s}`],
    body: 'Single and double bed rooms with attached bath, AC, Wi-Fi and backup power, rented by short time (2–4 hours), per night or per day.',
    bullets: ['Single bed: Rs 4,500 short time / Rs 6,000 night', 'Double bed: Rs 5,500 short time / Rs 14,500 night', 'Fresh linen and toiletries', 'Breakfast on demand'],
    prices: ['short', 'night'] as const,
    imgs: ['double-bed-room-wall-art', 'bedroom-headboard-wardrobe-ac'],
  },
  apartments: {
    label: 'Apartments',
    kw: (s: string) => `apartment per day ${s} Bahria Town`,
    sec: (s: string) => [`${s} apartment monthly`, `family apartment ${s}`, `1 bed flat for rent in bahria town ${s.toLowerCase()}`],
    body: 'Furnished 1, 2 and 3 bed apartments with a lounge, kitchen, Wi-Fi, backup power and parking, available per day, per week or per month.',
    bullets: ['1, 2 and 3 bedroom layouts', 'Equipped kitchen', 'TV lounge and dining', 'Monthly from Rs 55,000 (single) / Rs 100,000 (double)'],
    prices: ['apartment', 'monthly'] as const,
    imgs: ['apartment-open-kitchen-tv-lounge', 'family-apartment-lounge-false-ceiling'],
  },
  'guest-house': {
    label: 'Guest House',
    kw: (s: string) => `guest house ${s} Bahria Town`,
    sec: (s: string) => [`hotel ${s} Bahria Town`],
    body: 'Guest-house rooms with personal service: room service, breakfast and meals on demand, laundry, parking and 24/7 support on WhatsApp.',
    bullets: ['Room service and food on demand', 'Laundry service', '24/7 check-in support', 'Event decoration on request'],
    prices: ['short', 'night'] as const,
    imgs: ['drawing-room-sofa-set', 'tufted-sofa-coffee-table'],
  },
};

const SUB_INTRO: Record<string, string> = {
  'bahria-town-phase-4/daily-rooms': 'Rooms a short walk from Civic Center are the quickest way to a comfortable night in Phase 4. Step out for dinner, come back to a cool, quiet room.',
  'bahria-town-phase-4/apartments': 'Phase 4 apartment towers around Civic Center put a full furnished home right above the busiest square in the older phases.',
  'bahria-town-phase-4/guest-house': 'Our Phase 4 guest-house rooms pair hotel-style service with Civic Center convenience, ideal for business visitors and short stays.',
  'bahria-town-phase-6/daily-rooms': 'Phase 6 daily rooms offer quieter residential streets with Spring North and Civic Center both within a short drive.',
  'bahria-town-phase-6/apartments': 'Families who want calm streets and their own kitchen often choose a furnished apartment in Phase 6.',
  'bahria-town-phase-6/guest-house': 'Phase 6 guest-house rooms give families and wedding guests a peaceful place to stay with food and laundry on demand.',
  'bahria-town-phase-7/daily-rooms': 'Daily rooms near Spring North in Phase 7 put restaurants and cafés minutes from your door, with a calmer feel than Civic Center.',
  'bahria-town-phase-7/apartments': 'Phase 7 is one of the most searched places for 1 and 2 bed furnished apartments in Bahria Town, thanks to Spring North and good road links.',
  'bahria-town-phase-7/guest-house': 'Our Phase 7 guest-house rooms near Spring North combine friendly service with easy access to food and shopping.',
  'bahria-town-phase-8/daily-rooms': 'Driving in on GT Road? Phase 8 daily rooms let you check in without crossing Rawalpindi traffic.',
  'bahria-town-phase-8/apartments': 'Phase 8 has the newest apartment towers in Bahria Town Rawalpindi, with larger 2 and 3 bed layouts for families.',
  'bahria-town-phase-8/guest-house': 'Phase 8 guest-house rooms suit road travellers and large wedding groups who need several rooms close together.',
};

function subPage(a: Area, t: keyof typeof TYPES): PageDef {
  const T = TYPES[t];
  const slug = `${a.slug}/${t}`;
  const titles: Record<string, [string, string, string]> = {
    'daily-rooms': [
      `Daily Rooms in Bahria Town ${a.short} – Single & Double`,
      `Single and double bed rooms per day in Bahria Town ${a.short}. Attached bath, AC, Wi-Fi. Short time from Rs 4,500, nights from Rs 6,000. Book on WhatsApp.`,
      `Daily Rooms in Bahria Town ${a.short}`,
    ],
    apartments: [
      `Apartments Per Day in Bahria Town ${a.short}`,
      `1, 2 and 3 bed furnished apartments for daily or monthly rent in Bahria Town ${a.short}. Kitchen, lounge, parking. Ideal for families. Book now.`,
      `Furnished Apartments in ${a.short}`,
    ],
    'guest-house': [
      `Guest House in Bahria Town ${a.short}`,
      `Guest house rooms in Bahria Town ${a.short} with room service, food on demand, parking and 24/7 check-in. Rooms from Rs 6,000 per night. Book now.`,
      `Guest Houses in Bahria Town ${a.short}`,
    ],
  };
  const [title, description, h1] = titles[t];
  return {
    slug,
    group: 'phaseType',
    menu: `${a.short} ${T.label}`,
    title,
    description,
    h1,
    keyword: T.kw(a.short),
    secondary: T.sec(a.short),
    parent: a.slug,
    answer: `TwinCity Appartments offers ${T.label.toLowerCase()} in Bahria Town ${a.short}. ${T.body} Book on WhatsApp at 0313-0539832.`,
    intro: [SUB_INTRO[slug], a.character.split('. ').slice(0, 2).join('. ') + '.'],
    sections: [
      { h2: `${T.label} in ${a.short}: what you get`, p: [T.body], bullets: T.bullets },
      { h2: `Why choose ${a.short} for your stay`, p: [a.getting], bullets: a.goodFor },
      { h2: `Nearby`, p: ['Approximate, depending on your exact unit:'], bullets: a.nearby },
    ],
    faqs: [
      { q: `How much is ${T.label.toLowerCase()} in Bahria Town ${a.short}?`, a: t === 'apartments' ? 'Full apartments are quoted on WhatsApp at our best rates. Rooms are Rs 6,000 (single) and Rs 14,500 (double) per night; monthly from Rs 55,000.' : 'Short time (2–4 hours) is Rs 4,500 single / Rs 5,500 double. A full night is Rs 6,000 single / Rs 14,500 double.' },
      { q: `Can I book ${T.label.toLowerCase()} in ${a.short} today?`, a: 'Yes, same-day bookings are possible subject to availability. WhatsApp 0313-0539832.' },
      ...a.faqs.slice(0, 2),
      { q: 'What do I need at check-in?', a: 'An original CNIC (or passport) for every adult guest. Payment is made on arrival for most bookings.' },
    ],
    images: [...T.imgs, ...pickImages(slug, 4)],
    related: [a.slug, ...(['daily-rooms', 'apartments', 'guest-house'] as const).filter((x) => x !== t).map((x) => `${a.slug}/${x}`), t === 'daily-rooms' ? 'daily-rental-rooms' : t === 'apartments' ? 'apartments-per-day' : 'guest-houses', ...a.related.slice(0, 2)],
    prices: [...T.prices],
  };
}

export const LOCATIONS: PageDef[] = [HUB, ...AREAS.map(areaPage)];
export const PHASE_TYPES: PageDef[] = AREAS.filter((a) => a.hasSub).flatMap((a) =>
  (['daily-rooms', 'apartments', 'guest-house'] as const).map((t) => subPage(a, t)),
);
export const AREA_LIST = AREAS.map((a) => ({ slug: a.slug, short: a.short, name: a.name }));
