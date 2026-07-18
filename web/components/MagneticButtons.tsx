"use client";

import { useEffect } from "react";

/**
 * Magnetic / "drag" hover effect — ported 1:1 from the prototype's
 * initMagnetic(): buttons follow the cursor while hovered, then spring back.
 *
 * Scoped on purpose: it only attaches to `[data-magnetic]` elements inside the
 * element referenced by `scopeRef`. It is used for the homepage hero CTAs ONLY
 * — do not mount it elsewhere.
 */
export default function MagneticButtons({
  scopeRef,
}: {
  scopeRef: React.RefObject<HTMLElement | null>;
}) {
  useEffect(() => {
    const root = scopeRef.current;
    if (!root) return;

    // No hover on touch devices, and respect reduced-motion.
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;

    const strength = 0.32;
    const lift = -2;
    const cleanups: Array<() => void> = [];

    root.querySelectorAll<HTMLElement>("[data-magnetic]").forEach((btn) => {
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
        btn.style.transform = "";
        btn.style.transition = "";
      });
    });

    return () => cleanups.forEach((fn) => fn());
  }, [scopeRef]);

  return null;
}
