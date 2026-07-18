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

    return () => {
      timers.forEach(clearTimeout);
      intervals.forEach(clearInterval);
    };
  }, []);

  return null;
}
