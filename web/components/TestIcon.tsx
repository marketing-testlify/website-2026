import type { ReactNode } from "react";

/**
 * Line-icon set for the test-type taxonomy. Paths ported 1:1 from the
 * design prototype's mkIcon() so category tiles and card badges match.
 */
export type TestIconKey =
  | "role"
  | "cognitive"
  | "software"
  | "programming"
  | "coding"
  | "engineering"
  | "personality"
  | "language"
  | "situational"
  | "typing"
  | "bluecollar"
  | "simulation";

const paths: Record<TestIconKey, ReactNode> = {
  role: (
    <>
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    </>
  ),
  cognitive: <path d="M22 12h-4l-3 9L9 3l-3 9H2" />,
  software: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="9" y1="21" x2="9" y2="9" />
    </>
  ),
  programming: (
    <>
      <path d="M16 18l6-6-6-6" />
      <path d="M8 6l-6 6 6 6" />
    </>
  ),
  coding: (
    <>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M7 9l3 3-3 3" />
      <line x1="13" y1="15" x2="17" y2="15" />
    </>
  ),
  engineering: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-2.7 1.1V22a2 2 0 0 1-4 0v-.2a1.6 1.6 0 0 0-2.7-1l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.6 1.6 0 0 0-1-2.7H2a2 2 0 0 1 0-4h.2a1.6 1.6 0 0 0 1-2.7l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.6 1.6 0 0 0 1.8.3 1.6 1.6 0 0 0 1-1.5V2a2 2 0 0 1 4 0v.2a1.6 1.6 0 0 0 1 1.5 1.6 1.6 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0-.3 1.8 1.6 1.6 0 0 0 1.5 1H22a2 2 0 0 1 0 4h-.2a1.6 1.6 0 0 0-1.4 1z" />
    </>
  ),
  personality: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21a8 8 0 0 1 16 0" />
    </>
  ),
  language: (
    <>
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20" />
    </>
  ),
  situational: (
    <>
      <path d="M12 3v18" />
      <path d="M6 8l-4 6h8z" />
      <path d="M18 8l-4 6h8z" />
      <line x1="4" y1="21" x2="20" y2="21" />
    </>
  ),
  typing: (
    <>
      <rect x="2" y="6" width="20" height="12" rx="2" />
      <line x1="6" y1="10" x2="6.1" y2="10" />
      <line x1="10" y1="10" x2="10.1" y2="10" />
      <line x1="14" y1="10" x2="14.1" y2="10" />
      <line x1="7" y1="14" x2="17" y2="14" />
    </>
  ),
  bluecollar: (
    <>
      <path d="M2 18a10 10 0 0 1 20 0" />
      <path d="M9 18V9a3 3 0 0 1 6 0v9" />
      <line x1="2" y1="18" x2="22" y2="18" />
    </>
  ),
  simulation: (
    <>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      <path d="M10 9l4 2-4 2z" />
    </>
  ),
};

export default function TestIcon({
  name,
  size = 18,
}: {
  name: TestIconKey;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {paths[name]}
    </svg>
  );
}
