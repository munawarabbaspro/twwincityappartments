'use client';

import Script from 'next/script';
import { useEffect } from 'react';
import { SITE } from '@/lib/site';

declare global {
  interface Window { gtag?: (...args: unknown[]) => void }
}

/** GA4 + click tracking for WhatsApp/Call buttons (data-cta). Inactive until SITE.gaId is set. */
export default function Analytics() {
  useEffect(() => {
    if (!SITE.gaId) return;
    const onClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement).closest<HTMLElement>('[data-cta]');
      if (!el) return;
      const id = el.dataset.cta ?? '';
      const event = id.startsWith('whatsapp') ? 'whatsapp_click' : id.startsWith('call') ? 'call_click' : 'cta_click';
      window.gtag?.('event', event, { cta_id: id, page_path: location.pathname });
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  if (!SITE.gaId) return null;
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${SITE.gaId}`} strategy="afterInteractive" />
      <Script id="ga4" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${SITE.gaId}');`}
      </Script>
    </>
  );
}
