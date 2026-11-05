'use client';

import { useEffect } from 'react';

/** Sets html[data-scrolled] so the header can frost its background after the first scroll. */
export default function SiteEffects() {
  useEffect(() => {
    const d = document.documentElement;
    let ticking = false;
    const update = () => {
      d.setAttribute('data-scrolled', String(window.scrollY > 12));
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return null;
}
