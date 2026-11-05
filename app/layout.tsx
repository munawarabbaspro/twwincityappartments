import type { Metadata, Viewport } from 'next';
import { Inter_Tight, Instrument_Serif } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyCta from '@/components/StickyCta';
import Analytics from '@/components/Analytics';
import SiteEffects from '@/components/SiteEffects';
import { JsonLd } from '@/components/Blocks';
import { SITE } from '@/lib/site';
import { siteGraph } from '@/lib/seo';

const sans = Inter_Tight({ subsets: ['latin'], variable: '--font-inter-tight', display: 'swap' });
const serif = Instrument_Serif({ subsets: ['latin'], weight: '400', style: ['normal', 'italic'], variable: '--font-instrument-serif', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  applicationName: SITE.name,
  title: { default: `Daily Rental Rooms & Apartments in Bahria Town | ${SITE.name}`, template: `%s | ${SITE.name}` },
  description: 'Daily, short-time, weekly and monthly furnished rooms and apartments in Bahria Town Rawalpindi & Islamabad. Book on WhatsApp 0313-0539832.',
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  formatDetection: { telephone: true, email: true, address: true },
  robots: { index: true, follow: true },
  category: 'travel',
  verification: {
    ...(SITE.verification.google ? { google: SITE.verification.google } : {}),
    ...(SITE.verification.bing ? { other: { 'msvalidate.01': SITE.verification.bing } } : {}),
  },
  other: { 'geo.region': 'PK-PB', 'geo.placename': 'Bahria Town, Rawalpindi' },
};

export const viewport: Viewport = {
  themeColor: '#f3f0ea',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-PK" className={`${sans.variable} ${serif.variable}`} suppressHydrationWarning>
      <body className="min-h-screen font-sans">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[70] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-paper">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <StickyCta />
        <SiteEffects />
        <JsonLd data={siteGraph()} />
        <Analytics />
      </body>
    </html>
  );
}
