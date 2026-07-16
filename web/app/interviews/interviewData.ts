import type { TestIconKey } from "@/components/TestIcon";

/** Interview delivery mode — drives the coloured level tag + running-border tint. */
export type InterviewMode = "Video" | "Audio" | "Chat";

/** A single interview in the library, ported 1:1 from the prototype's `tests` array. */
export type Interview = {
  name: string;
  /** category key — reuses the shared TestIcon taxonomy keys */
  cat: TestIconKey;
  mode: InterviewMode;
  /** duration in minutes */
  dur: number;
  /** number of questions */
  questions: number;
  desc: string;
};

/**
 * 9 interview categories, ported verbatim from the prototype's `types` array.
 * The key reuses the shared TestIcon taxonomy; the label is interview-specific.
 */
export const INTERVIEW_CATEGORIES: { key: TestIconKey; label: string }[] = [
  { key: "programming", label: "Software engineering" },
  { key: "cognitive", label: "Sales" },
  { key: "language", label: "Marketing" },
  { key: "simulation", label: "Customer support" },
  { key: "personality", label: "HR & recruiting" },
  { key: "role", label: "Finance" },
  { key: "software", label: "Product & design" },
  { key: "coding", label: "Data" },
  { key: "engineering", label: "Operations" },
];

export const CATEGORY_LABEL: Record<string, string> = INTERVIEW_CATEGORIES.reduce(
  (m, c) => {
    m[c.key] = c.label;
    return m;
  },
  {} as Record<string, string>
);

export const INTERVIEW_MODES: InterviewMode[] = ["Video", "Audio", "Chat"];

/** 27 role-specific interviews, ported 1:1 from the prototype's `tests` array. */
export const INTERVIEWS: Interview[] = (
  [
    ["Frontend Engineer", "programming", "Video", 25, 8, "React, CSS and architecture questions with AI follow-ups on depth."],
    ["Backend Engineer", "programming", "Video", 25, 8, "APIs, databases, scaling trade-offs and system design reasoning."],
    ["DevOps Engineer", "programming", "Audio", 20, 7, "CI/CD, infrastructure-as-code and incident response scenarios."],
    ["Mobile Developer", "programming", "Video", 22, 7, "Platform patterns, performance and release judgement."],
    ["Sales Discovery Call", "cognitive", "Audio", 20, 6, "A simulated discovery call scoring questioning, listening and qualifying."],
    ["Account Executive", "cognitive", "Video", 25, 8, "Pipeline management, negotiation and closing judgement."],
    ["SDR Cold Outreach", "cognitive", "Chat", 15, 5, "Live chat scenario scoring objection handling and personalisation."],
    ["Digital Marketing Manager", "language", "Video", 22, 7, "Channel strategy, budget allocation and campaign analysis."],
    ["Content Strategist", "language", "Chat", 15, 5, "Brief-to-outline exercise scoring clarity, tone and audience fit."],
    ["SEO Specialist", "language", "Audio", 20, 6, "Technical audits, keyword strategy and prioritisation calls."],
    ["Customer Support Chat", "simulation", "Chat", 15, 5, "A realistic chat scenario scoring tone, accuracy and resolution."],
    ["Customer Success Manager", "simulation", "Video", 22, 7, "Renewal risk, escalation and expansion conversations."],
    ["Technical Support Engineer", "simulation", "Audio", 20, 6, "Troubleshooting under pressure with clear customer communication."],
    ["HR Business Partner", "personality", "Video", 22, 7, "Employee relations, coaching and policy judgement questions."],
    ["Talent Acquisition Specialist", "personality", "Audio", 20, 6, "Sourcing strategy, structured screening and candidate experience."],
    ["People Operations", "personality", "Chat", 15, 5, "Process, systems and prioritisation in a written scenario."],
    ["Financial Analyst", "role", "Video", 25, 8, "Modelling logic, variance analysis and stakeholder storytelling."],
    ["Accountant", "role", "Audio", 20, 6, "Reconciliation, reporting standards and month-end judgement."],
    ["Product Manager", "software", "Video", 25, 8, "Prioritisation, discovery and metric trade-offs with AI follow-ups."],
    ["Product Designer", "software", "Video", 22, 7, "Portfolio walkthrough prompts scoring process and rationale."],
    ["UX Researcher", "software", "Audio", 20, 6, "Method selection, synthesis and stakeholder influence."],
    ["Data Analyst", "coding", "Video", 22, 7, "SQL reasoning, metric definitions and insight communication."],
    ["Data Scientist", "coding", "Video", 25, 8, "Modelling choices, experiment design and business framing."],
    ["Analytics Engineer", "coding", "Chat", 18, 5, "Pipeline design and data-quality judgement in a written scenario."],
    ["Operations Manager", "engineering", "Audio", 20, 6, "Process bottlenecks, staffing and vendor trade-off scenarios."],
    ["Project Manager", "engineering", "Video", 22, 7, "Scoping, risk and stakeholder scenarios with AI follow-ups."],
    ["Executive Assistant", "engineering", "Chat", 15, 5, "Prioritisation, communication and calendar-conflict judgement."],
  ] as [string, TestIconKey, InterviewMode, number, number, string][]
).map(([name, cat, mode, dur, questions, desc]) => ({ name, cat, mode, dur, questions, desc }));

/** Duration buckets — ported from the prototype's `durBucket`/`durDefs`. */
export type DurKey = "short" | "mid" | "long";
export const DUR_DEFS: [DurKey, string][] = [
  ["short", "Under 15 min"],
  ["mid", "15–22 min"],
  ["long", "22+ min"],
];
export const DUR_LABEL: Record<DurKey, string> = DUR_DEFS.reduce((m, [k, l]) => {
  m[k] = l;
  return m;
}, {} as Record<DurKey, string>);
export function durBucket(m: number): DurKey {
  return m <= 15 ? "short" : m <= 22 ? "mid" : "long";
}

/** Chat→beg, Audio→int, Video→adv (colour system ported from the prototype). */
export const MODE_TAG_CLASS: Record<InterviewMode, string> = {
  Chat: "bg-[#E8F6EE] text-[#1B7F4B]",
  Audio: "bg-[#FFF3E0] text-[#B5740F]",
  Video: "bg-[#FDE7E7] text-[#D23B40]",
};
/** running-border tint per mode */
export const MODE_CBC_CLASS: Record<InterviewMode, string> = {
  Chat: "ilib-cbc-beg",
  Audio: "ilib-cbc-int",
  Video: "ilib-cbc-adv",
};

export function interviewSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[()]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function findInterview(slug: string): Interview | undefined {
  return INTERVIEWS.find((t) => interviewSlug(t.name) === slug);
}

/* ------------------------------------------------------------------ *
 *  DETAIL TEMPLATE DATA (from library-interviews-detail.dc.html)      *
 * ------------------------------------------------------------------ */

export type Skill = { name: string; desc: string };
export type InterviewQ = { q: string; why: string; listen: string };
export type Faq = { q: string; a: string };
export type RelatedItem = { name: string; meta: string; tag: string; ic: "code" | "server" | "layers"; slug?: string };

export type InterviewDetail = {
  category: string;
  tag: string;
  title: string;
  lede: string;
  type: string;
  duration: string;
  questions: number;
  level: string;
  languages: string[];
  summary: string[];
  skills: Skill[];
  roles: string[];
  interview: InterviewQ[];
  faqTest: Faq[];
  related: RelatedItem[];
};

export const LANGUAGES = ["English", "Dutch", "French", "German", "Spanish"];

export const AI_TOOLS: { name: string; src: string }[] = [
  { name: "ChatGPT", src: "/logos/chatgpt.png" },
  { name: "Perplexity", src: "/logos/perplexity.png" },
  { name: "Gemini", src: "/logos/gemini.png" },
  { name: "Grok", src: "/logos/grok.png" },
  { name: "Claude", src: "/logos/claude.png" },
];

/** Platform-level FAQ — identical for every interview (ported verbatim). */
export const FAQ_PLATFORM: Faq[] = [
  { q: "Can I try a sample test first?", a: "Yes — start a free trial to explore the platform hands-on and see how Testlify simplifies your hiring process." },
  { q: "How do I choose tests from the library?", a: "Browse the Test Library by category — role-specific, language, programming, software skills, cognitive, situational judgment and more — or search by name." },
  { q: "What are ready-to-go tests?", a: "Pre-built assessments ready for immediate use, no customization needed, spanning thousands of skills across every category." },
  { q: "Can you integrate with our ATS?", a: "Yes — Testlify offers native integrations with popular ATS platforms like Lever, BambooHR, Greenhouse and JazzHR. Contact us for a specific ATS." },
  { q: "Are your tests valid and reliable?", a: "Yes — tests are built by subject-matter experts and reviewed by I/O psychologists to ensure strong validity and reliability, with accurate results." },
];

/**
 * The fully authored Frontend Engineer instance, extracted VERBATIM from the
 * prototype's `test` object. Used directly when the slug resolves to it.
 */
export const FRONTEND_ENGINEER_DETAIL: InterviewDetail = {
  category: "Software engineering",
  tag: "AI video interview",
  title: "Frontend Engineer Interview",
  lede: "A structured, AI-led video interview for frontend roles — React, CSS, architecture and collaboration. Every candidate answers the same questions with intelligent follow-ups, and every answer is scored against the same rubric.",
  type: "Video · AI-led",
  duration: "25 min",
  questions: 8,
  level: "Video",
  languages: LANGUAGES,
  summary: [
    "The Frontend Engineer interview evaluates how candidates think and communicate about real front-end work — component architecture, state management, performance and debugging — in their own words, on camera.",
    "The AI interviewer asks eight structured questions and probes deeper with follow-ups based on each answer. Every candidate gets the same interview, removing interviewer variance and scheduling bottlenecks entirely.",
    "Each answer is scored independently against a role-specific rubric covering technical depth, problem solving and communication — and you get the full transcript and recording to review in minutes, not hours.",
  ],
  skills: [
    { name: "Technical depth", desc: "How far a candidate can go past surface answers — internals, trade-offs and edge cases surfaced by AI follow-up questions." },
    { name: "Problem solving", desc: "Structure and reasoning when walking through unfamiliar problems: framing, decomposition and validating assumptions out loud." },
    { name: "Communication", desc: "Clarity, structure and audience-awareness — can they explain a technical decision to an engineer and to a stakeholder?" },
    { name: "Code reasoning", desc: "Talking through code behaviour, state flow and rendering — evidence they read and reason about code, not just write it." },
    { name: "Architecture judgement", desc: "Component boundaries, state placement and when to reach for a library versus the platform — judgement, not memorised patterns." },
    { name: "Debugging approach", desc: "A repeatable method for isolating faults: reproduce, narrow, instrument — and knowing which tools to reach for first." },
    { name: "Performance mindset", desc: "Awareness of what makes UIs slow and how to measure before optimising — bundle size, re-renders, network and perception." },
    { name: "Collaboration", desc: "How they handle code review, disagreement and hand-offs — signals of a teammate, drawn from behavioural questions." },
    { name: "Ownership", desc: "Taking responsibility end-to-end: shipping, monitoring, fixing — and the examples they choose to talk about." },
  ],
  roles: ["Frontend Developer", "React Developer", "UI Developer", "Web Developer", "Full Stack Developer", "JavaScript Developer", "Senior Frontend Engineer"],
  interview: [
    { q: "Walk me through a component you built recently. What were the hardest decisions?", why: "Open-ended and grounded in real work — it reveals depth of experience and how candidates frame trade-offs without a rehearsed answer.", listen: "Specificity of the example, clear articulation of trade-offs, and follow-up depth on state, boundaries and testing." },
    { q: "A page renders slowly after a data update. How do you find out why?", why: "Debugging under uncertainty is daily frontend work; the method matters more than the answer.", listen: "A repeatable approach — reproduce, profile, isolate — plus naming concrete tools and distinguishing measurement from guessing." },
    { q: "When would you choose local component state over a global store?", why: "Tests architecture judgement and whether the candidate reasons from principles rather than habits.", listen: "Awareness of co-location, ownership, sharing costs and refactor paths — with examples from real projects." },
    { q: "Tell me about a code review disagreement. How was it resolved?", why: "Behavioural signal on collaboration and ego — strong ICs disagree productively.", listen: "Steel-manning the other side, focusing on the code not the person, and a concrete resolution or learning." },
    { q: "How do you decide something is accessible enough to ship?", why: "Separates candidates who treat accessibility as a checklist from those who treat it as a quality bar.", listen: "Concrete practices — semantics, keyboard paths, contrast, screen-reader passes — and honest limits of their process." },
  ],
  faqTest: [
    { q: "What is the Frontend Engineer interview?", a: "A structured, AI-led video interview that asks every candidate the same role-specific questions, probes with intelligent follow-ups, and scores each answer against an explicit rubric." },
    { q: "Is it live or asynchronous?", a: "Asynchronous — candidates take it on their own schedule from any device with a camera. No coordination, no time zones, no interviewer calendars." },
    { q: "Can I customise the questions?", a: "Yes — use the interview as-is, swap individual questions, or generate a fresh set from your own job description with scoring criteria included." },
    { q: "How does AI scoring work?", a: "Each answer is evaluated against per-question criteria (depth, correctness, structure, communication). You get per-competency scores, a transcript, and the recording — and you can always override a score." },
    { q: "What do candidates experience?", a: "A clean, guided flow: question on screen, thinking time, then a timed recorded answer. Practice question included — 94% of candidates rate the experience positively." },
  ],
  related: [
    { name: "React Developer Test", meta: "Coding + MCQ · 35 min", tag: "Skills test", ic: "code" },
    { name: "Backend Engineer Interview", meta: "Video · 8 Q · 25 min", tag: "Interview", ic: "server", slug: "backend-engineer" },
    { name: "Culture Add Interview", meta: "Video · 6 Q · 20 min", tag: "Interview", ic: "layers" },
  ],
};

/**
 * Build detail data for any interview in the library. The Frontend Engineer
 * slug returns the verbatim authored instance above; every other interview is
 * generated from its library row using the same structure so hub cards resolve.
 */
export function buildDetail(iv: Interview): InterviewDetail {
  if (interviewSlug(iv.name) === "frontend-engineer") return FRONTEND_ENGINEER_DETAIL;

  const cat = CATEGORY_LABEL[iv.cat];
  const catLower = cat.toLowerCase();
  const modeLower = iv.mode.toLowerCase();
  const title = `${iv.name} Interview`;

  const summary = [
    `The ${iv.name} interview evaluates how candidates think and communicate about real ${catLower} work — ${iv.desc.replace(/\.$/, "").toLowerCase()} — in their own words.`,
    `The AI interviewer asks ${iv.questions} structured questions and probes deeper with follow-ups based on each answer. Every candidate gets the same interview, removing interviewer variance and scheduling bottlenecks entirely.`,
    `Each answer is scored independently against a role-specific rubric covering depth, judgement and communication — and you get the full transcript${iv.mode === "Chat" ? "" : " and recording"} to review in minutes, not hours.`,
  ];

  const skills: Skill[] = [
    { name: "Role depth", desc: `How far a candidate can go past surface answers in ${catLower} — trade-offs and edge cases surfaced by AI follow-up questions.` },
    { name: "Problem solving", desc: "Structure and reasoning when walking through unfamiliar problems: framing, decomposition and validating assumptions out loud." },
    { name: "Communication", desc: "Clarity, structure and audience-awareness — can they explain a decision to a peer and to a stakeholder?" },
    { name: "Judgement", desc: `Sound calls under ambiguity — prioritising, weighing options and knowing when good-enough beats perfect in ${catLower}.` },
    { name: "Applied experience", desc: "Concrete, specific examples from real work rather than rehearsed theory — evidence they have actually done the job." },
    { name: "Collaboration", desc: "How they handle disagreement, feedback and hand-offs — signals of a teammate, drawn from behavioural questions." },
    { name: "Ownership", desc: "Taking responsibility end-to-end — following through, measuring outcomes and the examples they choose to talk about." },
  ];

  const roles = [`${iv.name}`, `Senior ${iv.name}`, `${cat} Specialist`, `${cat} Lead`, `${cat} Associate`];

  const interview: InterviewQ[] = [
    { q: `Walk me through a recent piece of ${catLower} work you're proud of. What were the hardest decisions?`, why: "Open-ended and grounded in real work — it reveals depth of experience and how candidates frame trade-offs without a rehearsed answer.", listen: "Specificity of the example, clear articulation of trade-offs, and follow-up depth on the decisions they made." },
    { q: `Tell me about a time a ${catLower} problem didn't go as planned. How did you respond?`, why: "Behaviour under uncertainty is daily work in this role; the method matters more than the outcome.", listen: "A repeatable approach — diagnose, act, verify — plus honesty about what they'd do differently." },
    { q: "How do you decide what to prioritise when everything feels urgent?", why: "Tests judgement and whether the candidate reasons from principles rather than habits.", listen: "Awareness of impact, effort and stakeholders — with examples from real projects, not a generic framework." },
    { q: "Tell me about a disagreement with a colleague. How was it resolved?", why: "Behavioural signal on collaboration and ego — strong performers disagree productively.", listen: "Steel-manning the other side, focusing on the goal not the person, and a concrete resolution or learning." },
    { q: `How do you know when your ${catLower} work is good enough to ship or hand over?`, why: "Separates candidates who treat quality as a checklist from those who treat it as a bar.", listen: "Concrete standards, honest limits of their process, and how they check before calling something done." },
  ];

  const faqTest: Faq[] = [
    { q: `What is the ${iv.name} interview?`, a: "A structured, AI-led interview that asks every candidate the same role-specific questions, probes with intelligent follow-ups, and scores each answer against an explicit rubric." },
    { q: "Is it live or asynchronous?", a: `Asynchronous — candidates take it on their own schedule from any device${iv.mode === "Video" ? " with a camera" : ""}. No coordination, no time zones, no interviewer calendars.` },
    { q: "Can I customise the questions?", a: "Yes — use the interview as-is, swap individual questions, or generate a fresh set from your own job description with scoring criteria included." },
    { q: "How does AI scoring work?", a: "Each answer is evaluated against per-question criteria (depth, judgement, structure, communication). You get per-competency scores, a transcript, and can always override a score." },
    { q: "What do candidates experience?", a: `A clean, guided flow: question on screen, thinking time, then a ${modeLower} answer. Practice question included — 94% of candidates rate the experience positively.` },
  ];

  // three related items: two same-category interviews + one skills-test pairing
  const sameCat = INTERVIEWS.filter((t) => t.cat === iv.cat && t.name !== iv.name).slice(0, 2);
  const related: RelatedItem[] = [
    { name: `${iv.name} Skills Test`, meta: "Skills test · 20 Q · 25 min", tag: "Skills test", ic: "code" as RelatedItem["ic"] },
    ...sameCat.map((t, i) => ({
      name: `${t.name} Interview`,
      meta: `${t.mode} · ${t.questions} Q · ${t.dur} min`,
      tag: "Interview",
      ic: (i === 0 ? "server" : "layers") as RelatedItem["ic"],
      slug: interviewSlug(t.name),
    })),
  ].slice(0, 3);

  return {
    category: cat,
    tag: `AI ${modeLower} interview`,
    title,
    lede: `A structured, AI-led ${modeLower} interview for ${iv.name} roles — ${iv.desc.replace(/\.$/, "").toLowerCase()}. Every candidate answers the same questions with intelligent follow-ups, and every answer is scored against the same rubric.`,
    type: `${iv.mode} · AI-led`,
    duration: `${iv.dur} min`,
    questions: iv.questions,
    level: iv.mode,
    languages: LANGUAGES,
    summary,
    skills,
    roles,
    interview,
    faqTest,
    related,
  };
}
