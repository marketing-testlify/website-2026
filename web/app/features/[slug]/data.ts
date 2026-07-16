import { routes } from "@/lib/routes";

/* ============================================================
   Feature-detail page data — extracted VERBATIM from the
   product-features-detail.dc.html template's DATA object.
   The template ships exactly one instance (Anti-cheating &
   proctoring); it is keyed here by its slug. Add more feature
   instances to this record to expand the [slug] route.
   ============================================================ */

export type IconKey =
  | "monitor"
  | "camera"
  | "copy"
  | "search"
  | "globe"
  | "clock"
  | "file"
  | "chart"
  | "plug";

export type Capability = { ic: IconKey; name: string; desc: string };
export type Stat = { n: string; l: string };
export type Faq = { q: string; a: string };
export type Related = { ic: IconKey; name: string; desc: string; href: string };

export type FeatureDetail = {
  slug: string;
  announcement: string;
  category: string;
  tag: string;
  title: string;
  lede: string;
  heroShot: string;
  capsEyebrow: string;
  capsHeading: string;
  capabilities: Capability[];
  splitAEyebrow: string;
  splitAHeading: string;
  splitABody: string;
  splitAPoints: string[];
  splitAShot: string;
  statEyebrow: string;
  statHeading: string;
  stats: Stat[];
  splitBEyebrow: string;
  splitBHeading: string;
  splitBBody: string;
  splitBPoints: string[];
  splitBShot: string;
  faq: Faq[];
  related: Related[];
  showFaq: boolean;
  showRelated: boolean;
};

/* The template's default `data` object, ported field-for-field. */
const antiCheatingProctoring: FeatureDetail = {
  slug: "anti-cheating-proctoring",
  announcement: "New — real-time proctoring flags on every assessment",
  category: "Assessment integrity",
  tag: "Integrity & proctoring",
  title: "Anti-cheating & proctoring",
  lede: "Keep every assessment fair and defensible. Full-screen detection, webcam snapshots, plagiarism checks and IP logging catch dishonesty in real time — so the scores you shortlist on are the scores you can trust.",
  heroShot: "Proctoring dashboard — live candidate flags",
  capsEyebrow: "What you get",
  capsHeading: "Six layers of integrity, on by default",
  capabilities: [
    {
      ic: "monitor",
      name: "Full-screen detection",
      desc: "Candidates are locked to the assessment window. Every tab switch or exit is timestamped and surfaced in the report.",
    },
    {
      ic: "camera",
      name: "Webcam snapshots",
      desc: "Periodic image capture verifies the person taking the test is the person you invited — no intrusive video streaming required.",
    },
    {
      ic: "copy",
      name: "Copy-paste blocking",
      desc: "Paste is disabled on open-ended and coding questions, and pasted content is flagged when it does slip through.",
    },
    {
      ic: "search",
      name: "Plagiarism detection",
      desc: "Free-text and code answers are compared against a large corpus and each other to catch copied or AI-generated work.",
    },
    {
      ic: "globe",
      name: "IP & location logging",
      desc: "Multiple candidates from one IP, or unexpected locations, are highlighted so you can investigate volume fraud.",
    },
    {
      ic: "clock",
      name: "Question timers",
      desc: "Per-question and full-test limits keep everyone on a level field and make lookup-heavy answers obvious.",
    },
  ],
  splitAEyebrow: "In the report",
  splitAHeading: "Every flag, in plain English",
  splitABody:
    "You don't get a wall of raw logs. Testlify rolls proctoring signals into a single integrity summary per candidate — green, amber or red — with the evidence one click away, so recruiters act fast and defensibly.",
  splitAPoints: [
    "Single integrity score per candidate",
    "Timestamped event timeline",
    "Snapshot gallery inline",
    "Exportable for compliance review",
  ],
  splitAShot: "Candidate integrity summary card",
  statEyebrow: "Proven at scale",
  statHeading: "Integrity you can defend to legal",
  stats: [
    { n: "5M+", l: "candidates assessed under proctoring" },
    { n: "SOC 2", l: "Type II certified data handling" },
    { n: "13+", l: "question formats, all proctorable" },
    { n: "EEOC", l: "defensible, consistent criteria" },
  ],
  splitBEyebrow: "Candidate-friendly",
  splitBHeading: "Fair without feeling like surveillance",
  splitBBody:
    "Heavy-handed proctoring wrecks completion rates. Testlify keeps integrity lightweight — no downloads, no screen-share demands — so candidates finish and you keep a 94% satisfaction score while still catching bad actors.",
  splitBPoints: [
    "No plugin or download to install",
    "Works on any modern browser",
    "Clear consent before the test",
    "94% candidate satisfaction",
  ],
  splitBShot: "Candidate assessment start screen",
  faq: [
    {
      q: "Does proctoring slow candidates down?",
      a: "No. Detection runs quietly in the browser with no plugin or download. Candidates take the test as normal; the signals are collected in the background and surfaced only to you.",
    },
    {
      q: "Is webcam monitoring required?",
      a: "It is optional and configurable per assessment. You can run snapshot-based verification, disable the camera entirely, or require it only for high-stakes roles.",
    },
    {
      q: "How does plagiarism detection work?",
      a: "Open-ended and coding answers are compared against a large reference corpus and against other candidates in your pipeline, with likely AI-generated text flagged for review.",
    },
    {
      q: "Is this compliant with hiring regulations?",
      a: "Yes. Proctoring applies the same criteria to every candidate and produces an exportable audit trail, keeping decisions EEOC-defensible and GDPR-compliant.",
    },
    {
      q: "Can I turn specific checks off?",
      a: "Every layer — full-screen lock, snapshots, copy-paste blocking, IP logging and timers — is toggled independently per assessment so integrity matches the stakes of the role.",
    },
  ],
  related: [
    {
      ic: "file",
      name: "Custom question types",
      desc: "13+ formats from coding to video, so every skill is measured the right way.",
      href: `${routes.productFeatures}#question-types`,
    },
    {
      ic: "chart",
      name: "Reporting & analytics",
      desc: "Benchmarked scorecards and pipeline insights that make shortlisting objective.",
      href: `${routes.productFeatures}#analytics`,
    },
    {
      ic: "plug",
      name: "ATS integrations",
      desc: "100+ native connections so results flow straight into your existing workflow.",
      href: routes.integrations,
    },
  ],
  showFaq: true,
  showRelated: true,
};

export const FEATURES: Record<string, FeatureDetail> = {
  [antiCheatingProctoring.slug]: antiCheatingProctoring,
};

export const FEATURE_SLUGS = Object.keys(FEATURES);
