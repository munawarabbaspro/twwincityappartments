import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.name,
    short_name: SITE.shortName,
    description: 'Daily, weekly and monthly rooms and apartments in Bahria Town',
    start_url: '/',
    display: 'standalone',
    background_color: '#f3f0ea',
    theme_color: '#f3f0ea',
    icons: [{ src: '/icon.svg', sizes: 'any', type: 'image/svg+xml' }],
  };
}
