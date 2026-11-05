// Converts the original WhatsApp photos into SEO-named, compressed WebP files.
// Run: npm run images
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const SRC = 'Twincityappartmentsimages';
const OUT = 'public/images';
fs.mkdirSync(OUT, { recursive: true });

// Index = position in the alphabetically sorted source folder.
// null = skipped (photos 32 and 34 carry another brand's watermark).
const NAMES = [
  'master-bedroom-led-ceiling-bahria-town',
  'living-lounge-led-ceiling-sofa-set',
  'double-bed-room-lounge-chairs-led-lights',
  'studio-apartment-kitchenette-mirror',
  'double-bed-room-wall-art',
  'luxury-bed-headboard-detail',
  'kitchenette-stove-microwave-fridge',
  'double-bed-room-ambient-lighting',
  'double-bed-room-ac-blackout-curtains',
  'bedroom-split-ac-wall-panelling',
  'bedroom-balcony-door-wardrobe',
  'double-bed-room-floral-bedsheet',
  'apartment-open-kitchen-tv-lounge',
  'drawing-room-sofa-set',
  'bedroom-side-tables-floral-bed',
  'bedroom-wooden-floor-black-bed',
  'attached-bathroom-tiled',
  'family-apartment-lounge-false-ceiling',
  'luxury-bedroom-golden-ceiling-lights',
  'luxury-lounge-curved-sofa',
  'bedroom-headboard-wardrobe-ac',
  'bedroom-wooden-floor-seating',
  'tufted-sofa-coffee-table',
  'bedroom-blue-ambient-light',
  'bathroom-electric-geyser',
  'luxury-living-room-tv-wall',
  'open-kitchen-dining-area',
  'honeymoon-lounge-led-lights',
  'bedroom-wooden-wardrobe',
  'tv-lounge-green-feature-wall',
  'family-tv-lounge-green-sofas',
  'lounge-tufted-sofa-balcony',
  null,
  'bedroom-wardrobe-wood-panels',
  null,
];

const files = fs.readdirSync(SRC).filter((f) => /\.jpe?g$/i.test(f)).sort();
const meta = {};
for (let i = 0; i < files.length; i++) {
  const name = NAMES[i];
  if (!name) continue;
  const out = path.join(OUT, `${name}.webp`);
  const info = await sharp(path.join(SRC, files[i]))
    .rotate()
    .resize({ width: 1600, height: 1600, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 76 })
    .toFile(out);
  meta[name] = { width: info.width, height: info.height };
}
fs.writeFileSync('data/image-sizes.json', JSON.stringify(meta, null, 2));

// Social share image (1200x630)
await sharp(path.join(SRC, files[25])).rotate().resize(1200, 630, { fit: 'cover' }).jpeg({ quality: 82 })
  .toFile('public/og-image.jpg');
console.log('Processed', Object.keys(meta).length, 'images');
