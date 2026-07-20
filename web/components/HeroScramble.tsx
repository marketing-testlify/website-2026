'use client';

import { useEffect } from 'react';

/**
 * Homepage hero character-scramble animation, ported verbatim from the design's
 * standalone bolthero script: each `.tl-hero-line`'s inner `[data-bh-text]` span
 * shuffles random glyphs then resolves to its real text, staggered per line.
 */
export default function HeroScramble() {
  useEffect(() => {
    const CH = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%';

    const scramble = (el: HTMLElement) => {
      const text = el.getAttribute('data-bh-text') || el.textContent || '';
      let frame = 0;
      const total = text.length * 3;
      const iv = setInterval(() => {
        el.textContent = text
          .split('')
          .map((c, i) => {
            if (c === ' ') return ' ';
            return i < Math.floor(frame / 3) ? c : CH[Math.floor(Math.random() * CH.length)];
          })
          .join('');
        frame++;
        if (frame > total) {
          clearInterval(iv);
          el.textContent = text;
        }
      }, 30);
      return iv;
    };

    const lines = Array.from(document.querySelectorAll<HTMLElement>('.tl-hero-line'));
    const timers: ReturnType<typeof setTimeout>[] = [];
    const intervals: ReturnType<typeof setInterval>[] = [];

    lines.forEach((l, i) => {
      l.classList.add('is-in');
      const sc = l.querySelector<HTMLElement>('[data-bh-text]');
      if (!sc) return;
      const txt = sc.getAttribute('data-bh-text') || sc.textContent || '';
      sc.style.opacity = '1';
      sc.textContent = txt
        .split('')
        .map((c) => (c === ' ' ? ' ' : CH[Math.floor(Math.random() * CH.length)]))
        .join('');
      timers.push(setTimeout(() => intervals.push(scramble(sc)), i * 180));
    });

    // "How it works" scroll-linked timeline fill (ported from the design's bhow script).
    let onFill: (() => void) | null = null;
    const tl = document.getElementById('bhow-timeline');
    const fill = tl?.querySelector<HTMLElement>('[data-bhow-fill]');
    if (tl && fill) {
      onFill = () => {
        const r = tl.getBoundingClientRect();
        const vh = window.innerHeight || 800;
        const span = r.height + vh * 0.6;
        let p = (vh * 0.8 - r.top) / span;
        p = Math.max(0, Math.min(1, p));
        fill.style.height = p * 100 + '%';
      };
      window.addEventListener('scroll', onFill, { passive: true });
      window.addEventListener('resize', onFill);
      onFill();
    }

    return () => {
      timers.forEach(clearTimeout);
      intervals.forEach(clearInterval);
      if (onFill) {
        window.removeEventListener('scroll', onFill);
        window.removeEventListener('resize', onFill);
      }
    };
  }, []);

  return null;
}
