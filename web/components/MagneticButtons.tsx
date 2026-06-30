"use client";

import { useEffect } from "react";

/**
 * Magnetic / "drag" hover effect for CTAs — ported 1:1 from the prototype's
 * initMagnetic(): buttons follow the cursor while hovered, then spring back.
 * Targets every `.btn-sheen` and `[data-magnetic]` on the page (header CTA,
 * hero primary + secondary, etc.). Mounted once in the root layout, so it also
 * picks up CTAs added after client-side navigation via a MutationObserver.
 */
export default function MagneticButtons() {
  useEffect(() => {
    // No hover on touch devices, and respect reduced-motion.
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;

    const strength = 0.32;
    const lift = -2;
    const cleanups: Array<() => void> = [];

    const attach = (btn: HTMLElement) => {
      if ((btn as HTMLElement & { __mag?: boolean }).__mag) return;
      (btn as HTMLElement & { __mag?: boolean }).__mag = true;

      const move = (e: MouseEvent) => {
        const r = btn.getBoundingClientRect();
        const x = (e.clientX - (r.left + r.width / 2)) * strength;
        const y = (e.clientY - (r.top + r.height / 2)) * strength + lift;
        btn.style.transform = `translate(${x.toFixed(1)}px,${y.toFixed(1)}px)`;
      };
      const leave = () => {
        btn.style.transform = "";
      };

      btn.addEventListener("mousemove", move);
      btn.addEventListener("mouseleave", leave);
      btn.style.transition =
        "transform .18s cubic-bezier(.2,.7,.3,1), box-shadow .25s ease";

      cleanups.push(() => {
        btn.removeEventListener("mousemove", move);
        btn.removeEventListener("mouseleave", leave);
      });
    };

    const scan = () =>
      document
        .querySelectorAll<HTMLElement>(".btn-sheen, [data-magnetic]")
        .forEach(attach);

    scan();

    // Re-scan when CTAs mount after client-side navigation.
    const mo = new MutationObserver(scan);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      mo.disconnect();
      cleanups.forEach((fn) => fn());
    };
  }, []);

  return null;
}
