import sizes from '@/data/image-sizes.json';

export type Img = { src: string; alt: string; width: number; height: number };

const ALT: Record<string, string> = {
  'master-bedroom-led-ceiling-bahria-town': 'Master bedroom with LED false ceiling and dresser in a furnished apartment in Bahria Town Rawalpindi',
  'living-lounge-led-ceiling-sofa-set': 'Furnished apartment lounge with sofa set, TV and LED ceiling lights in Bahria Town',
  'double-bed-room-lounge-chairs-led-lights': 'Double bed room with lounge chairs and soft LED lighting, available per night in Bahria Town',
  'studio-apartment-kitchenette-mirror': 'Studio apartment in Bahria Town with kitchenette, microwave and full-length mirror',
  'double-bed-room-wall-art': 'Clean double bed room with fresh white linen and wall art in Bahria Town',
  'luxury-bed-headboard-detail': 'Close-up of a luxury padded headboard in a TwinCity Appartments bedroom',
  'kitchenette-stove-microwave-fridge': 'Apartment kitchenette with stove, microwave and mini fridge for self-cooking',
  'double-bed-room-ambient-lighting': 'Double bed room with ambient lighting, ideal for couples and honeymoon stays',
  'double-bed-room-ac-blackout-curtains': 'Double bed room with split AC and blackout curtains in Bahria Town Rawalpindi',
  'bedroom-split-ac-wall-panelling': 'Furnished bedroom with split AC and decorative wall panelling, available daily or monthly',
  'bedroom-balcony-door-wardrobe': 'Bedroom with wardrobe, AC and balcony door in a Bahria Town apartment',
  'double-bed-room-floral-bedsheet': 'Double bed room with side tables and floral bedsheet, rent per night in Bahria Town',
  'apartment-open-kitchen-tv-lounge': 'Furnished apartment with open kitchen, refrigerator and TV lounge in Bahria Town',
  'drawing-room-sofa-set': 'Drawing room with sofa set and centre table in a family apartment',
  'bedroom-side-tables-floral-bed': 'Spacious bedroom with king bed and side tables for family stays',
  'bedroom-wooden-floor-black-bed': 'Bedroom with wooden floor and attached bath in a Bahria Town furnished apartment',
  'attached-bathroom-tiled': 'Clean attached bathroom with modern fittings and hot and cold water',
  'family-apartment-lounge-false-ceiling': 'Family apartment lounge with false ceiling, smart TV and open kitchen in Bahria Town',
  'luxury-bedroom-golden-ceiling-lights': 'Luxury bedroom with golden ceiling lights and seating area in Bahria Town',
  'luxury-lounge-curved-sofa': 'Luxury apartment lounge with curved sofa, marble floor and indoor plants',
  'bedroom-headboard-wardrobe-ac': 'Bedroom with designer headboard, wardrobe and air conditioning',
  'bedroom-wooden-floor-seating': 'Bright bedroom with wooden floor, seating chairs and large windows',
  'tufted-sofa-coffee-table': 'Tufted sofa and glass coffee table in a furnished apartment lounge',
  'bedroom-blue-ambient-light': 'Cosy bedroom with blue ambient lighting and rug, popular for couples',
  'bathroom-electric-geyser': 'Attached bathroom with electric geyser, washbasin and mirror',
  'luxury-living-room-tv-wall': 'Luxury living room with TV wall, curved sofa and false ceiling in Bahria Town',
  'open-kitchen-dining-area': 'Open kitchen with dining stools, fridge and cabinets in a furnished apartment',
  'honeymoon-lounge-led-lights': 'Lounge with sofa and colourful LED lights, decorated for honeymoon and birthday stays',
  'bedroom-wooden-wardrobe': 'Bedroom with wooden wardrobe and double bed in a Bahria Town apartment',
  'tv-lounge-green-feature-wall': 'TV lounge with green feature wall and sofa set in a family apartment',
  'family-tv-lounge-green-sofas': 'Family TV lounge with green sofas and centre table, suitable for small gatherings',
  'lounge-tufted-sofa-balcony': 'Lounge with tufted sofa and balcony view in Bahria Town',
  'bedroom-wardrobe-wood-panels': 'Bedroom with wood-panelled wardrobe and double bed',
};

export const IMAGES: Record<string, Img> = Object.fromEntries(
  Object.entries(sizes as Record<string, { width: number; height: number }>).map(([k, v]) => [
    k,
    { src: `/images/${k}.webp`, alt: ALT[k] ?? k.replace(/-/g, ' '), width: v.width, height: v.height },
  ]),
);

export const ALL_IMAGE_KEYS = Object.keys(IMAGES);

export const img = (key: string): Img => IMAGES[key] ?? IMAGES['luxury-living-room-tv-wall'];

// Image sets by theme, used to give every page its own photo selection
export const SETS = {
  bedrooms: ['double-bed-room-wall-art', 'double-bed-room-ac-blackout-curtains', 'double-bed-room-floral-bedsheet', 'bedroom-split-ac-wall-panelling', 'bedroom-wooden-wardrobe', 'bedroom-headboard-wardrobe-ac', 'bedroom-wardrobe-wood-panels', 'bedroom-side-tables-floral-bed'],
  luxury: ['luxury-living-room-tv-wall', 'luxury-lounge-curved-sofa', 'luxury-bedroom-golden-ceiling-lights', 'master-bedroom-led-ceiling-bahria-town', 'luxury-bed-headboard-detail', 'family-apartment-lounge-false-ceiling'],
  romantic: ['double-bed-room-ambient-lighting', 'bedroom-blue-ambient-light', 'honeymoon-lounge-led-lights', 'double-bed-room-lounge-chairs-led-lights', 'living-lounge-led-ceiling-sofa-set', 'luxury-bed-headboard-detail'],
  family: ['family-apartment-lounge-false-ceiling', 'family-tv-lounge-green-sofas', 'tv-lounge-green-feature-wall', 'drawing-room-sofa-set', 'apartment-open-kitchen-tv-lounge', 'bedroom-side-tables-floral-bed'],
  kitchen: ['kitchenette-stove-microwave-fridge', 'open-kitchen-dining-area', 'apartment-open-kitchen-tv-lounge', 'studio-apartment-kitchenette-mirror'],
  bath: ['attached-bathroom-tiled', 'bathroom-electric-geyser'],
  lounges: ['tufted-sofa-coffee-table', 'lounge-tufted-sofa-balcony', 'living-lounge-led-ceiling-sofa-set', 'family-tv-lounge-green-sofas', 'drawing-room-sofa-set', 'luxury-lounge-curved-sofa'],
  work: ['bedroom-wooden-floor-seating', 'bedroom-balcony-door-wardrobe', 'bedroom-wooden-floor-black-bed', 'studio-apartment-kitchenette-mirror'],
};

/** Deterministic pick of n images, rotated by a seed so neighbouring pages differ. */
export function pickImages(seed: string, n = 6, prefer: string[] = []): string[] {
  let h = 0;
  for (const c of seed) h = (h * 31 + c.charCodeAt(0)) >>> 0;
  const rest = ALL_IMAGE_KEYS.filter((k) => !prefer.includes(k));
  const rotated = [...rest.slice(h % rest.length), ...rest.slice(0, h % rest.length)];
  return [...prefer, ...rotated].filter((k) => IMAGES[k]).slice(0, n);
}
