/* ============================================================
   Competitor-comparison detail data — extracted VERBATIM from
   the resource-competitors-detail.dc.html template's DATA object.
   The template ships exactly one instance (its default `data`);
   it is keyed here by its slug. Per the project's positioning
   rule the reference competitor (TestGorilla) is IMPLIED, never
   named — so the instance is framed as the "legacy assessment
   suites" category that the hub links to. All comparison content
   (intro, wins, limits, why-switch, rows, faqs) is verbatim from
   the template; only name/initial are aligned to the hub card.
   Add more competitor instances to this record to expand the
   [slug] route.
   ============================================================ */

export type Row = {
  feature: string;
  us?: string;
  usYes?: boolean;
  them?: string;
  themYes?: boolean;
  themNo?: boolean;
  themPart?: boolean;
};

export type WhySwitch = { t: string; d: string };
export type Faq = { q: string; a: string };

export type CompetitorDetail = {
  slug: string;
  name: string;
  initial: string;
  tagline: string;
  intro: string;
  ourWins: string[];
  theirLimits: string[];
  whySwitch: WhySwitch[];
  rows: Row[];
  faqs: Faq[];
};

/* The template's default `data` object, ported field-for-field. */
const legacyAssessmentSuites: CompetitorDetail = {
  slug: "legacy-assessment-suites",
  name: "legacy assessment suites",
  initial: "L",
  tagline: "the skills-first choice",
  intro:
    "Both platforms help you screen candidates with assessments. Here’s an honest look at where Testlify pulls ahead — on library depth, interviews, pricing and integrations — so you can pick the right fit.",
  ourWins: [
    "3,500+ validated tests across roles and industries",
    "AI video, audio and chat interviews built in",
    "No annual contract — pay per candidate, cancel anytime",
    "100+ native ATS integrations on every paid plan",
  ],
  theirLimits: [
    "Smaller test library, fewer role-specific options",
    "Interviews often a separate tool or add-on",
    "Annual contracts and higher entry pricing",
    "ATS integrations gated to top tiers",
  ],
  whySwitch: [
    {
      t: "A deeper test library",
      d: "3,500+ validated tests across roles and industries — not a few hundred generic ones.",
    },
    {
      t: "Interviews built in",
      d: "AI video, audio and chat interviews come standard, not a separate tool or paid add-on.",
    },
    {
      t: "Fairer pricing",
      d: "Pay per candidate with no annual lock-in — scale up or down without renegotiating a contract.",
    },
  ],
  rows: [
    { feature: "Validated test library", us: "3,500+", them: "~300–500" },
    { feature: "AI video, audio & chat interviews", usYes: true, themPart: true },
    { feature: "Custom questions & build-your-own", usYes: true, themYes: true },
    { feature: "Anti-cheating & proctoring", usYes: true, themYes: true },
    { feature: "Native ATS integrations", us: "100+", them: "Enterprise only" },
    { feature: "Pay per candidate (no annual lock-in)", usYes: true, themNo: true },
    { feature: "Candidate languages", us: "16+", them: "Limited" },
    { feature: "EEOC-defensible & SOC 2 / ISO 27001", usYes: true, themYes: true },
  ],
  faqs: [
    {
      q: "Can I migrate my existing assessments to Testlify?",
      a: "Yes. You can rebuild assessments quickly from our 3,500+ test library or import your own questions, and our team helps enterprise customers migrate at no extra cost.",
    },
    {
      q: "Is Testlify more affordable?",
      a: "For most teams, yes — there’s no mandatory annual contract. You pay per candidate and can cancel anytime, which avoids paying for seats or volume you don’t use.",
    },
    {
      q: "Do I lose any features by switching?",
      a: "You gain a bigger library, built-in AI interviews and more integrations. Anti-cheating, custom questions and compliance are all standard.",
    },
    {
      q: "How long does it take to get started?",
      a: "Minutes. Start a 7-day free trial with no credit card, build an assessment from a template and invite candidates the same day.",
    },
  ],
};

export const COMPETITORS: Record<string, CompetitorDetail> = {
  [legacyAssessmentSuites.slug]: legacyAssessmentSuites,
};

export const COMPETITOR_SLUGS = Object.keys(COMPETITORS);
