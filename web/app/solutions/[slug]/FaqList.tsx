"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";

/**
 * FAQ accordion matching the template's .tsd-faq styles exactly:
 * bordered rows, rose "+" chip that rotates 45deg when open,
 * answer toggling display none/block.
 */
export default function FaqList({
  items,
}: {
  items: { q: string; a: string }[];
}) {
  const [open, setOpen] = useState<Record<number, boolean>>({});
  const toggle = (i: number) => setOpen((s) => ({ ...s, [i]: !s[i] }));

  return (
    <div className="max-w-[820px] mt-11 mx-auto">
      {items.map((f, i) => {
        const isOpen = !!open[i];
        return (
          <Reveal key={f.q} delay={i * 0.05}>
            <div
              role="button"
              tabIndex={0}
              onClick={() => toggle(i)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  toggle(i);
                }
              }}
              className="border-b border-warm py-[22px] px-[2px] cursor-pointer"
            >
              <div className="flex justify-between items-center gap-5 text-[16.5px] font-bold text-ink">
                {f.q}
                <span
                  className="w-7 h-7 rounded-full bg-rose-100 text-coral flex items-center justify-center text-[18px] font-bold flex-none transition-transform duration-[250ms]"
                  style={{ transform: isOpen ? "rotate(45deg)" : "none" }}
                  aria-hidden
                >
                  +
                </span>
              </div>
              <div
                className="text-[15px] leading-[1.64] text-body mt-3 max-w-[720px]"
                style={{ display: isOpen ? "block" : "none" }}
              >
                {f.a}
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
