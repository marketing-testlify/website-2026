'use client';

import { useEffect } from 'react';

/**
 * Global scroll-reveal + data-driven animation engine, ported from the design's
 * shared reveal.js + the homepage reveal controller. Self-installing and
 * idempotent (each element animates once), so it drives reveals even when a
 * page's own effect fails to run. Handles:
 *   .reveal            → fade/rise in (adds `.in` for CSS that keys on it)
 *   [data-reveal]      → fade/rise in (honours data-delay)
 *   [data-bar]         → grow width to data-w %
 *   [data-count]       → count up to data-count (+ data-suffix)
 *   [data-grow]        → grow height to data-h % (honours data-delay)
 */
export default function RevealInit() {
  useEffect(() => {
    const done = new WeakSet<Element>();
    const now = () => performance.now();

    const animateReveal = (el: HTMLElement) => {
      const delay = parseFloat(el.getAttribute('data-delay') || '0') * 1000;
      const dur = 620, startY = 28;
      const run = () => {
        const start = now();
        const step = (t: number) => {
          const p = Math.min((t - start) / dur, 1);
          const e = 1 - Math.pow(1 - p, 3);
          el.style.opacity = String(e);
          el.style.transform = 'translateY(' + (startY * (1 - e)).toFixed(2) + 'px)';
          if (p < 1) requestAnimationFrame(step);
          else { el.style.opacity = '1'; el.style.transform = 'none'; }
        };
        requestAnimationFrame(step);
      };
      if (delay > 0) setTimeout(run, delay); else run();
    };

    const animateBar = (el: HTMLElement) => {
      const target = parseFloat(el.getAttribute('data-w') || '0');
      const dur = 1100, start = now();
      const step = (t: number) => {
        const p = Math.min((t - start) / dur, 1);
        const e = 1 - Math.pow(1 - p, 3);
        el.style.width = (target * e).toFixed(2) + '%';
        if (p < 1) requestAnimationFrame(step);
        else el.style.width = target + '%';
      };
      requestAnimationFrame(step);
    };

    const animateCount = (el: HTMLElement) => {
      const target = parseFloat(el.getAttribute('data-count') || '0');
      const suffix = el.getAttribute('data-suffix') || '';
      const dur = 1500, start = now();
      const isInt = target % 1 === 0;
      const step = (t: number) => {
        const p = Math.min((t - start) / dur, 1);
        const e = 1 - Math.pow(1 - p, 3);
        const v = target * e;
        el.textContent = (isInt ? Math.round(v).toLocaleString('en-US') : v.toFixed(1)) + suffix;
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    const animateGrow = (el: HTMLElement) => {
      const target = parseFloat(el.getAttribute('data-h') || '0');
      const delay = parseFloat(el.getAttribute('data-delay') || '0') * 1000;
      const run = () => {
        const start = now();
        const dur = 980;
        const step = (t: number) => {
          const p = Math.min((t - start) / dur, 1);
          const e = p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2;
          el.style.height = (target * e).toFixed(2) + '%';
          if (p < 1) requestAnimationFrame(step);
          else el.style.height = target + '%';
        };
        requestAnimationFrame(step);
      };
      if (delay > 0) setTimeout(run, delay); else run();
    };

    const activate = (el: HTMLElement) => {
      if (done.has(el)) return;
      done.add(el);
      if (el.hasAttribute('data-bar')) animateBar(el);
      else if (el.hasAttribute('data-count')) animateCount(el);
      else if (el.hasAttribute('data-grow')) animateGrow(el);
      else if (el.hasAttribute('data-reveal')) animateReveal(el);
      else { el.classList.add('in'); animateReveal(el); } // .reveal class
    };

    const sweep = () => {
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const nodes = document.querySelectorAll<HTMLElement>(
        '.reveal,[data-reveal],[data-bar],[data-count],[data-grow]'
      );
      nodes.forEach((el) => {
        if (done.has(el)) return;
        const r = el.getBoundingClientRect();
        if (r.top < vh + 200 && r.bottom > -200) activate(el);
      });
    };

    window.addEventListener('scroll', sweep, { passive: true });
    window.addEventListener('resize', sweep);
    const timers = [0, 120, 300, 600, 1200, 2200].map((t) => setTimeout(sweep, t));
    requestAnimationFrame(sweep);
    let mo: MutationObserver | undefined;
    try {
      mo = new MutationObserver(() => requestAnimationFrame(sweep));
      mo.observe(document.body, { childList: true, subtree: true });
    } catch {}

    return () => {
      window.removeEventListener('scroll', sweep);
      window.removeEventListener('resize', sweep);
      timers.forEach(clearTimeout);
      mo?.disconnect();
    };
  }, []);

  return null;
}
