import StaticPage from '@/components/StaticPage';
import { Gallery } from '@/components/Blocks';
import { SETS, img } from '@/lib/images';
import { pageMeta } from '@/lib/seo';
import { SITE } from '@/lib/site';

const title = 'Photo Gallery – Rooms & Apartments in Bahria Town';
const description = 'Real photos of TwinCity Appartments bedrooms, lounges, kitchens and bathrooms in Bahria Town. See exactly what you get before you book.';
export const metadata = pageMeta({ path: '/gallery/', title, description });

const SECTIONS = [
  { t: 'Luxury lounges & suites', k: SETS.luxury },
  { t: 'Bedrooms', k: SETS.bedrooms },
  { t: 'Honeymoon & couple rooms', k: SETS.romantic },
  { t: 'Family lounges', k: SETS.lounges },
  { t: 'Kitchens & bathrooms', k: [...SETS.kitchen, ...SETS.bath] },
];

export default function GalleryPage() {
  const all = [...new Set(SECTIONS.flatMap((s) => s.k))];
  const imageLd = {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    name: `${SITE.name} photo gallery`,
    image: all.map((k) => ({ '@type': 'ImageObject', contentUrl: `${SITE.url}${img(k).src}`, caption: img(k).alt })),
  };
  return (
    <StaticPage path="/gallery/" label="Gallery" h1="Photo Gallery" lead="Real, unedited photos of our rooms and apartments. What you see is what you get." image="luxury-lounge-curved-sofa" title={title} description={description} extraLd={[imageLd]} wide>
      <div className="space-y-24">
        {SECTIONS.map((s) => <Gallery key={s.t} keys={s.k} title={s.t} layout="masonry" />)}
      </div>
    </StaticPage>
  );
}
