import type { ReactNode } from "react";
import type { IconKey } from "./data";

/* Line-icon set ported verbatim from the template's mkIcon(): 22px,
   viewBox 0 0 24 24, 1.9 stroke, currentColor. */
function svg(children: ReactNode) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.9}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {children}
    </svg>
  );
}

export function featureIcon(key: IconKey): ReactNode {
  switch (key) {
    case "monitor":
      return svg(
        <>
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8M12 17v4" />
        </>
      );
    case "camera":
      return svg(
        <>
          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
          <circle cx="12" cy="13" r="4" />
        </>
      );
    case "copy":
      return svg(
        <>
          <rect x="9" y="9" width="13" height="13" rx="2" />
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
        </>
      );
    case "search":
      return svg(
        <>
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.3-4.3" />
        </>
      );
    case "globe":
      return svg(
        <>
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20" />
        </>
      );
    case "clock":
      return svg(
        <>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </>
      );
    case "file":
      return svg(
        <>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <path d="M14 2v6h6M8 13h8M8 17h8" />
        </>
      );
    case "chart":
      return svg(
        <>
          <path d="M3 3v18h18" />
          <path d="M7 14l4-4 3 3 5-6" />
        </>
      );
    case "plug":
      return svg(<path d="M9 2v6M15 2v6M6 8h12v3a6 6 0 0 1-12 0zM12 17v5" />);
    default:
      return svg(<circle cx="12" cy="12" r="9" />);
  }
}
