export type Faq = { q: string; a: string };
export type Section = { h2: string; p: string[]; bullets?: string[] };
export type PriceKey = 'short' | 'night' | 'monthly' | 'apartment';

export type PageGroup =
  | 'type'
  | 'duration'
  | 'location'
  | 'phaseType'
  | 'landmark'
  | 'audience'
  | 'budget'
  | 'amenity'
  | 'event';

export type PageDef = {
  /** path without leading/trailing slash, e.g. "bahria-town-phase-4/daily-rooms" */
  slug: string;
  group: PageGroup;
  menu: string;
  title: string;
  description: string;
  h1: string;
  keyword: string;
  secondary: string[];
  /** Direct 2–3 sentence answer shown at the top (helps featured snippets and AI answers) */
  answer: string;
  intro: string[];
  sections: Section[];
  faqs: Faq[];
  images: string[];
  related: string[];
  prices?: PriceKey[];
  parent?: string;
  /** WhatsApp pre-filled message */
  wa?: string;
  /** Mark as a venue/service page (event schema) */
  service?: string;
};

export type Listing = {
  slug: string;
  name: string;
  type: 'Single Room' | 'Double Room' | 'Studio' | 'Apartment' | 'Suite';
  title: string;
  description: string;
  h1: string;
  keyword: string;
  beds: number;
  baths: number;
  guests: number;
  size?: string;
  prices: { label: string; amount: string; value?: number }[];
  summary: string;
  body: string[];
  features: string[];
  rules: string[];
  images: string[];
  hubs: string[];
  faqs: Faq[];
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  h1: string;
  keyword: string;
  date: string;
  updated: string;
  readMins: number;
  image: string;
  intro: string[];
  sections: Section[];
  faqs?: Faq[];
  links: string[];
};
