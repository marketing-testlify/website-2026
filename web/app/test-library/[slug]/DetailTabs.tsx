"use client";

import { useState, type ReactNode } from "react";

export type AccordionItem = {
  /** heading / question text */
  q: ReactNode;
  /** expanded body content */
  content: ReactNode;
  /** "01" style number badge; omit for a flush (FAQ-style) row with no badge */
  num?: string;
};

const ChevronDown = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <path d="M6 9l6 6 6-6" />
  </svg>
);

/**
 * Accordion — powers the Skills measured, Interview kit and FAQ sections
 * on the test detail page. Ported from the prototype's `.acc`/`.ai`/`.ah`/`.ab`
 * pattern (numbered rows with a badge, or flush rows without one for FAQs).
 */
export default function Accordion({
  items,
  iconSize = 20,
}: {
  items: AccordionItem[];
  iconSize?: number;
}) {
  const [open, setOpen] = useState<Record<number, boolean>>({});

  return (
    <div className="flex flex-col gap-3">
      {items.map((it, i) => {
        const isOpen = !!open[i];
        return (
          <div
            key={i}
            className={`bg-white border-[1.4px] rounded-2xl overflow-hidden transition-[box-shadow,border-color] duration-200 ${
              isOpen
                ? "border-[#F4C7C8] shadow-[0_14px_30px_rgba(110,11,14,0.07)]"
                : "border-[#EFE1E2]"
            }`}
          >
            <button
              type="button"
              onClick={() => setOpen((s) => ({ ...s, [i]: !s[i] }))}
              className="flex items-center gap-[15px] w-full bg-transparent border-0 font-[inherit] cursor-pointer px-[22px] py-5 text-left transition-colors duration-150 hover:bg-[#FFFAF9]"
            >
              {it.num && (
                <span className="shrink-0 w-[30px] h-[30px] rounded-lg bg-[#FFF0EF] text-coral text-[12.5px] font-bold flex items-center justify-center">
                  {it.num}
                </span>
              )}
              <span
                className={`font-bold text-ink tracking-[-0.2px] ${
                  it.num ? "text-[16.5px]" : "text-[15px]"
                }`}
              >
                {it.q}
              </span>
              <span
                className={`ml-auto flex shrink-0 transition-transform duration-[240ms] ease-[cubic-bezier(.2,.7,.3,1)] ${
                  isOpen ? "rotate-180 text-coral" : "text-[#C0989B]"
                }`}
              >
                <ChevronDown size={iconSize} />
              </span>
            </button>
            {isOpen && (
              <div
                className={`${
                  it.num ? "pl-[67px] pr-[22px] pb-[22px]" : "px-[22px] pb-[22px]"
                }`}
              >
                {it.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
