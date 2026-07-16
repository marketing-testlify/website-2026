import { routes } from "@/lib/routes";

/* ============================================================
   Customer-story detail data — extracted VERBATIM from the
   company-customers-detail.dc.html template's DATA object.
   The template ships exactly one instance (Arch Advisory
   Group); it is keyed here by its slug. Add more story
   instances to this record to expand the [slug] route.
   ============================================================ */

export type Metric = { n: string; l: string };
export type Fact = { k: string; v: string };
export type StoryBlock = { heading: string; paras: string[] };
export type Related = { metric: string; company: string; quote: string; href: string };

export type CustomerStory = {
  slug: string;
  announcement: string;
  company: string;
  industry: string;
  headline: string;
  subhead: string;
  metrics: Metric[];
  facts: Fact[];
  products: string[];
  story: StoryBlock[];
  quote: string;
  quoteName: string;
  quoteRole: string;
  /** initials for the quote avatar (no photo asset in the prototype) */
  quoteInitials: string;
  storyAfter: StoryBlock[];
  related: Related[];
  showRelated: boolean;
};

/* The template's default `data` object, ported field-for-field. */
const archAdvisoryGroup: CustomerStory = {
  slug: "arch-advisory-group",
  announcement: "See how Arch Advisory Group cut time-to-hire by 58%",
  company: "Arch Advisory Group",
  industry: "Professional services",
  headline:
    "How Arch Advisory Group replaced gut-feel screening with verified skills",
  subhead:
    "A lean advisory team was spending days on phone screens and still mis-hiring. With Testlify, they built a skills-first shortlist in hours — and made every hire defensible.",
  metrics: [
    { n: "58%", l: "less time-to-hire" },
    { n: "3.4×", l: "more qualified candidates shortlisted" },
    { n: "92%", l: "assessment completion rate" },
  ],
  facts: [
    { k: "Industry", v: "Professional services" },
    { k: "Company size", v: "50–200 employees" },
    { k: "Location", v: "Cape Town, South Africa" },
    { k: "Use case", v: "Volume + specialist hiring" },
  ],
  products: ["Skill assessments", "AI resume screener", "Video interviews"],
  story: [
    {
      heading: "The challenge",
      paras: [
        "Arch Advisory Group hires across finance, consulting and operations, where a single wrong hire costs months of billable momentum. Their recruiters were manually reading hundreds of résumés per role, then running back-to-back phone screens to sort the pile.",
        "The process was slow, subjective and impossible to defend. Two recruiters could rank the same candidate completely differently, and there was no consistent record of why anyone advanced.",
      ],
    },
    {
      heading: "The solution",
      paras: [
        "The team moved screening to the front of the funnel. Every applicant now takes a role-specific Testlify assessment before a human ever reads a résumé, and the AI resume screener ranks the rest against the same structured skill profile.",
        "Recruiters review a single ranked shortlist with the evidence attached — scores, skill breakdowns and integrity flags — instead of a stack of PDFs. High-stakes roles add a short async video interview, scored against the same rubric.",
      ],
    },
  ],
  quote:
    "“We replaced three rounds of gut-feel screening with one Testlify assessment. The AI shortlist is genuinely better than what we were producing by hand — and now every decision has evidence behind it.”",
  quoteName: "Chrissie Blom",
  quoteRole: "Head of Talent, Arch Advisory Group",
  quoteInitials: "CB",
  storyAfter: [
    {
      heading: "The results",
      paras: [
        "Within a quarter, time-to-hire dropped 58% and recruiters were shortlisting 3.4× more candidates who actually cleared later stages. Completion rates held at 92% because the assessments stayed short and candidate-friendly.",
        "Most importantly, hiring managers stopped second-guessing the pipeline. Consistent, EEOC-defensible scoring meant every shortlist could be explained — to a hiring manager, to legal, or to the candidate.",
      ],
    },
  ],
  related: [
    {
      metric: "↓ 44% cost per hire",
      company: "Finovo",
      quote:
        "Structured assessments removed bias from our first round and widened our funnel.",
      href: routes.customers,
    },
    {
      metric: "91% completion rate",
      company: "Orbit Retail",
      quote:
        "We hire seasonal staff at huge volume — Testlify keeps quality high without slowing us down.",
      href: routes.customers,
    },
    {
      metric: "3.4× qualified hires",
      company: "Vela Health",
      quote:
        "Compliance loved the audit trail; recruiters loved the time it gave back.",
      href: routes.customers,
    },
  ],
  showRelated: true,
};

export const STORIES: Record<string, CustomerStory> = {
  [archAdvisoryGroup.slug]: archAdvisoryGroup,
};

export const STORY_SLUGS = Object.keys(STORIES);
