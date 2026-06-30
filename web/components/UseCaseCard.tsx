import Link from "next/link";
import type { ReactNode } from "react";

export type UseCaseIcon =
  | "chart"
  | "globe"
  | "cap"
  | "users"
  | "code"
  | "headset"
  | "compass"
  | "bolt";

const ICONS: Record<UseCaseIcon, ReactNode> = {
  chart: (
    <>
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </>
  ),
  cap: (
    <>
      <path d="M22 10L12 5 2 10l10 5 10-5z" />
      <path d="M6 12v5c0 1 2.7 2.5 6 2.5s6-1.5 6-2.5v-5" />
    </>
  ),
  users: (
    <>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </>
  ),
  code: (
    <>
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </>
  ),
  headset: (
    <>
      <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z" />
      <path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </>
  ),
  bolt: <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />,
};

type Props = {
  icon?: UseCaseIcon;
  title: string;
  desc: string;
  href?: string;
  /** icon tile background */
  tint?: string;
  /** icon colour */
  ink?: string;
};

export default function UseCaseCard({
  icon = "chart",
  title,
  desc,
  href = "#",
  tint = "#FFEDED",
  ink = "#F23F44",
}: Props) {
  return (
    <Link
      href={href}
      className="uc block bg-white border border-warm3 rounded-[20px] p-[26px] no-underline transition-all duration-300 hover:-translate-y-1.5 hover:border-transparent hover:shadow-[0_22px_46px_rgba(80,40,60,0.12)] group"
    >
      <div
        className="uc-ic relative w-[52px] h-[52px] rounded-[16px] flex items-center justify-center transition-transform duration-300"
        style={{ background: tint, color: ink }}
      >
        <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          {ICONS[icon]}
        </svg>
      </div>
      <div className="text-[17px] font-bold tracking-[-0.2px] text-ink mt-[18px] mb-[7px]">{title}</div>
      <p className="text-[13.5px] leading-[1.5] text-body m-0">{desc}</p>
      <span className="text-coral text-[14px] font-semibold mt-3.5 inline-flex items-center gap-1.5 opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
        Explore →
      </span>
    </Link>
  );
}
