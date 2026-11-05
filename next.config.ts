import type { NextConfig } from 'next';

const securityHeaders = [
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
  { key: 'Content-Security-Policy', value: 'upgrade-insecure-requests' },
];

const nextConfig: NextConfig = {
  // Every URL ends with "/" (e.g. /bahria-town-phase-7/). /about redirects to /about/ with a 308.
  trailingSlash: true,
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 2678400,
  },
  async headers() {
    return [
      { source: '/:path*', headers: securityHeaders },
      {
        source: '/images/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
    ];
  },
  async redirects() {
    return [
      // One canonical host: apex -> www (matches Vercel's domain setting and SITE.url in lib/site.ts)
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'twincityapartments.pk' }],
        destination: 'https://www.twincityapartments.pk/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
