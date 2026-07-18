"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export type CtaVariant = "primary" | "secondary" | "light" | "outline-light";
export type CtaSize = "lg" | "md" | "sm";
export type CtaIcon = "arrow" | "play" | "none";

type Props = {
  label: string;
  href: string;
  variant?: CtaVariant;
  size?: CtaSize;
  icon?: CtaIcon;
  /** per-button cursor-follow effect, ported from the prototype's CTA Button component */
  magnetic?: boolean;
  className?: string;
};

const SIZE_CLASSES: Record<CtaSize, string> = {
  lg: "text-[17px] px-[30px] py-4 rounded-[15px]",
  md: "text-[16px] px-[26px] py-[14px] rounded-2xl",
  sm: "text-[14.5px] px-5 py-[11px] rounded-xl",
};

const VARIANT_CLASSES: Record<CtaVariant, string> = {
  primary:
    "btn-sheen bg-coral text-white shadow-[0_14px_30px_rgba(242,63,68,0.35)] transition-[translate,transform,box-shadow] duration-200 ease-[cubic-bezier(.2,.7,.3,1)] hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(242,63,68,0.45)]",
  secondary:
    "bg-white text-ink border-[1.5px] border-[#F0D9DA] transition-all duration-300 hover:-translate-y-[3px] hover:border-coral",
  light:
    "btn-sheen btn-sheen-light bg-white text-[#C0242B] shadow-[0_12px_28px_rgba(0,0,0,0.18)] transition-[translate,transform,box-shadow] duration-200 ease-[cubic-bezier(.2,.7,.3,1)] hover:-translate-y-0.5 hover:shadow-[0_18px_38px_rgba(0,0,0,0.24)]",
  "outline-light":
    "bg-white/[0.14] text-white border-[1.5px] border-white/40 transition-all duration-300 hover:-translate-y-[3px] hover:bg-white/[0.22] hover:border-white",
};

export default function CtaButton({
  label,
  href,
  variant = "primary",
  size = "lg",
  icon = "arrow",
  magnetic = false,
  className = "",
}: Props) {
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const btn = ref.current;
    if (!btn || !magnetic) return;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;

    const strength = 0.32;
    const lift = -3;

    const enter = () => {
      btn.style.transition = "transform .2s cubic-bezier(.2,.7,.3,1), box-shadow .25s ease";
      btn.style.transform = `translate(0px,${lift}px)`;
    };
    const move = (e: MouseEvent) => {
      btn.style.transition = "transform .08s linear, box-shadow .25s ease";
      const r = btn.getBoundingClientRect();
      const x = (e.clientX - (r.left + r.width / 2)) * strength;
      const y = (e.clientY - (r.top + r.height / 2)) * strength + lift;
      btn.style.transform = `translate(${x.toFixed(1)}px,${y.toFixed(1)}px)`;
    };
    const leave = () => {
      btn.style.transition = "transform .25s cubic-bezier(.2,.7,.3,1), box-shadow .25s ease";
      btn.style.transform = "";
    };

    btn.addEventListener("mouseenter", enter);
    btn.addEventListener("mousemove", move);
    btn.addEventListener("mouseleave", leave);
    return () => {
      btn.removeEventListener("mouseenter", enter);
      btn.removeEventListener("mousemove", move);
      btn.removeEventListener("mouseleave", leave);
    };
  }, [magnetic]);

  return (
    <Link
      ref={ref}
      href={href}
      className={`relative overflow-hidden inline-flex items-center gap-[9px] font-semibold whitespace-nowrap ${SIZE_CLASSES[size]} ${VARIANT_CLASSES[variant]} ${className}`.trim()}
    >
      {icon === "play" && (
        <span className="w-[30px] h-[30px] rounded-full bg-[#FFF0F0] inline-flex items-center justify-center text-coral">
          <svg width="9" height="11" viewBox="0 0 9 11" fill="currentColor" className="block ml-px" aria-hidden>
            <path d="M0 0.6v9.8l9-4.9z" />
          </svg>
        </span>
      )}
      {label}
      {icon === "arrow" && <span className="text-[19px] leading-none">→</span>}
    </Link>
  );
}
