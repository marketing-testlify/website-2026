'use client';

import { useEffect } from 'react';

export default function RevealInit() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
    if (els.length === 0) return;

    const vh = window.innerHeight || document.documentElement.clientHeight;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12 }
    );

    for (const el of els) {
      // Immediately reveal above-the-fold elements.
      const rect = el.getBoundingClientRect();
      if (rect.top < vh * 0.92) {
        el.classList.add('in');
      } else {
        observer.observe(el);
      }
    }

    return () => observer.disconnect();
  }, []);

  return null;
}
