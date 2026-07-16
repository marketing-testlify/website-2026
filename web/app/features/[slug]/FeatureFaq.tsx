"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import type { Faq } from "./data";

/**
 * Feature-detail FAQ accordion — ports the template's .ft-acc / .ft-ai
 * markup exactly: bordered white cards, chevron that rotates 180deg and
 * turns coral when open, warm shadow on the open card.
 */
export default function FeatureFaq({ items }: { items: Faq[] }) {
  const [open, setOpen] = useState<Record<number, boolean>>({});
  const toggle = (i: number) => setOpen((s) => ({ ...s, [i]: !s[i] }));

  return (
    <div className="flex flex-col gap-3 max-w-[860px] mx-auto">
      {items.map((f, i) => {
        const isOpen = !!open[i];
        return (
          <Reveal key={f.q} delay={i * 0.05}>
            <div
              className={`bg-white border-[1.4px] rounded-2xl overflow-hidden transition-[box-shadow,border-color] duration-200 ${
                isOpen
                  ? "border-[#F4C7C8] shadow-[0_14px_30px_rgba(110,11,14,0.07)]"
                  : "border-[#EFE1E2]"
              }`}
            >
              <button
                type="button"
                onClick={() => toggle(i)}
                aria-expanded={isOpen}
                className="flex items-center gap-[15px] w-full bg-transparent border-0 font-[inherit] cursor-pointer px-[22px] py-5 text-left hover:bg-[#FFFAF9]"
              >
                <span className="text-[16px] font-bold text-ink tracking-[-0.2px]">
                  {f.q}
                </span>
                <span
                  className={`ml-auto flex transition-transform duration-[240ms] ease-[cubic-bezier(.2,.7,.3,1)] ${
                    isOpen ? "rotate-180 text-coral" : "text-[#C0989B]"
                  }`}
                  aria-hidden
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </button>
              {isOpen && (
                <div className="px-[22px] pb-[22px]">
                  <p className="m-0 text-[15px] leading-[1.64] text-body">
                    {f.a}
                  </p>
                </div>
              )}
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
