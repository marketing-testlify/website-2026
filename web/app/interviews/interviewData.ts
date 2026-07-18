/** Interview difficulty level — drives the coloured level tag + running-border tint. */
export type Level = "Beginner" | "Intermediate" | "Advanced";

/** A single interview in the library, ported 1:1 from the prototype's `tests` array. */
export type Interview = {
  name: string;
  /** category key — see INTERVIEW_CATEGORIES */
  cat: string;
  level: Level;
  /** duration in minutes */
  dur: number;
  /** number of questions */
  questions: number;
  desc: string;
};

/**
 * 12 interview categories, ported verbatim from the prototype's `types` array.
 */
export const INTERVIEW_CATEGORIES: { key: string; label: string }[] = [
  { key: "writing", label: "Writing" },
  { key: "product", label: "Product" },
  { key: "business", label: "Business" },
  { key: "marketing", label: "Marketing" },
  { key: "engineering", label: "Engineering" },
  { key: "hr", label: "HR & recruiting" },
  { key: "sales", label: "Sales" },
  { key: "support", label: "Customer support" },
  { key: "data", label: "Data & analytics" },
  { key: "finance", label: "Finance" },
  { key: "operations", label: "Operations" },
  { key: "design", label: "Design" },
];

export const CATEGORY_LABEL: Record<string, string> = INTERVIEW_CATEGORIES.reduce(
  (m, c) => {
    m[c.key] = c.label;
    return m;
  },
  {} as Record<string, string>
);

export const INTERVIEW_LEVELS: Level[] = ["Beginner", "Intermediate", "Advanced"];

/** 30 ready-to-use interviews, ported 1:1 from the prototype's `tests` array. */
export const INTERVIEWS: Interview[] = (
  [
    ["Background Check", "hr", "Intermediate", 15, 10, "A thorough AI interview to verify a candidate's identity, work history, education, certifications, references and eligibility to work."],
    ["Content Strategy for Writing", "writing", "Intermediate", 15, 8, "Evaluates the ability to develop content strategies, conduct audience research, and create and optimize content."],
    ["Copywriting for Writing", "writing", "Beginner", 15, 7, "Evaluates persuasive copy, tone control and message clarity across formats."],
    ["Technical Writing for Writing", "writing", "Advanced", 20, 9, "Assesses the ability to document complex products clearly for technical and non-technical readers."],
    ["Metrics and KPIs for Product Performance", "product", "Intermediate", 15, 8, "Evaluates the ability to define, analyze and report KPIs, with insight into data analysis and strategy."],
    ["Product Roadmapping for Product", "product", "Advanced", 20, 9, "Evaluates prioritisation, stakeholder alignment and roadmap trade-off reasoning."],
    ["User Research for Product", "product", "Intermediate", 15, 8, "Assesses method selection, synthesis and turning insight into product decisions."],
    ["Competitive Analysis for Business", "business", "Intermediate", 15, 8, "Evaluates skills in competitive analysis, strategy formulation and process improvement."],
    ["Process Improvement for Business", "business", "Intermediate", 15, 8, "Evaluates the ability to identify inefficiencies, apply improvement methodologies and measure success."],
    ["Stakeholder Management for Business", "business", "Intermediate", 15, 8, "Assesses communication, alignment and influence across stakeholders."],
    ["SEO for Marketing Strategy", "marketing", "Intermediate", 15, 9, "Evaluates the ability to plan and execute SEO — keyword research, on-page and technical SEO, content optimization and analytics."],
    ["Email Marketing Strategies for Marketing", "marketing", "Intermediate", 15, 8, "Evaluates skills in list segmentation, content creation, performance tracking, A/B testing and deliverability."],
    ["Brand Strategy for Marketing", "marketing", "Advanced", 20, 9, "Evaluates positioning, messaging and go-to-market reasoning."],
    ["Quality Assurance for Engineering", "engineering", "Intermediate", 15, 9, "Assesses expertise in QA processes, risk management, testing, automation, defect handling and collaboration."],
    ["Engineering Project Risk Management", "engineering", "Intermediate", 15, 8, "Evaluates the ability to identify, assess and mitigate risks in engineering projects."],
    ["System Design for Engineering", "engineering", "Advanced", 30, 10, "Assesses architecture trade-offs, scalability and reliability reasoning."],
    ["Debugging for Engineering", "engineering", "Intermediate", 15, 8, "Evaluates structured troubleshooting and root-cause analysis."],
    ["Recruitment Screening for HR", "hr", "Beginner", 15, 7, "Evaluates structured screening, candidate experience and sourcing judgement."],
    ["Employee Relations for HR", "hr", "Intermediate", 15, 8, "Assesses coaching, conflict resolution and policy judgement."],
    ["Lead Generation for Sales", "sales", "Intermediate", 15, 8, "Evaluates prospecting, qualification and pipeline-building judgement."],
    ["Negotiation for Sales", "sales", "Advanced", 20, 8, "Assesses discovery, objection handling and closing under realistic scenarios."],
    ["Ticket Handling for Customer Support", "support", "Beginner", 15, 6, "Evaluates tone, accuracy and resolution in realistic support scenarios."],
    ["Escalation Management for Customer Support", "support", "Intermediate", 15, 7, "Assesses judgement in prioritising, de-escalating and resolving complex issues."],
    ["Data Analysis for Data & Analytics", "data", "Intermediate", 15, 8, "Evaluates SQL reasoning, metric definitions and insight communication."],
    ["Experiment Design for Data & Analytics", "data", "Advanced", 20, 9, "Assesses hypothesis framing, test design and interpretation of results."],
    ["Financial Modeling for Finance", "finance", "Advanced", 20, 9, "Evaluates modelling logic, assumptions and scenario analysis for decision-making."],
    ["Budgeting and Forecasting for Finance", "finance", "Intermediate", 15, 8, "Assesses forecasting accuracy, variance analysis and financial storytelling."],
    ["Operations Planning for Operations", "operations", "Intermediate", 15, 8, "Evaluates process bottlenecks, staffing and vendor trade-off scenarios."],
    ["UX Design for Design", "design", "Intermediate", 15, 8, "Evaluates process, rationale and usability judgement through portfolio prompts."],
    ["Visual Design for Design", "design", "Beginner", 15, 7, "Assesses hierarchy, typography and brand-consistent execution."],
  ] as [string, string, Level, number, number, string][]
).map(([name, cat, level, dur, questions, desc]) => ({ name, cat, level, dur, questions, desc }));

/** Duration buckets — ported from the prototype's `durBucket`/`durDefs`. */
export type DurKey = "short" | "mid" | "long";
export const DUR_DEFS: [DurKey, string][] = [
  ["short", "15 min or less"],
  ["mid", "16–20 min"],
  ["long", "20+ min"],
];
export const DUR_LABEL: Record<DurKey, string> = DUR_DEFS.reduce((m, [k, l]) => {
  m[k] = l;
  return m;
}, {} as Record<DurKey, string>);
export function durBucket(m: number): DurKey {
  return m <= 15 ? "short" : m <= 20 ? "mid" : "long";
}

/** level → coloured tag classes (ported from the prototype's `.lv-*`). */
export const LEVEL_TAG_CLASS: Record<Level, string> = {
  Beginner: "bg-[#E8F6EE] text-[#1B7F4B]",
  Intermediate: "bg-[#FFF3E0] text-[#B5740F]",
  Advanced: "bg-[#FDE7E7] text-[#D23B40]",
};
/** running-border tint per level */
export const LEVEL_CBC_CLASS: Record<Level, string> = {
  Beginner: "ilib-cbc-beg",
  Intermediate: "ilib-cbc-int",
  Advanced: "ilib-cbc-adv",
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
 *  DETAIL TEMPLATE DATA (consumed by app/interviews/[slug])           *
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
 * Build detail data for any interview in the library. Generated from the
 * library row using a consistent structure so hub cards resolve to a detail page.
 */
export function buildDetail(iv: Interview): InterviewDetail {
  const cat = CATEGORY_LABEL[iv.cat] ?? iv.cat;
  const catLower = cat.toLowerCase();
  const title = `${iv.name} Interview`;

  const summary = [
    `The ${iv.name} interview evaluates how candidates think and communicate about real ${catLower} work — ${iv.desc.replace(/\.$/, "").toLowerCase()} — in their own words.`,
    `The AI interviewer asks ${iv.questions} structured questions and probes deeper with follow-ups based on each answer. Every candidate gets the same interview, removing interviewer variance and scheduling bottlenecks entirely.`,
    `Each answer is scored independently against a role-specific rubric covering depth, judgement and communication — and you get the full transcript and recording to review in minutes, not hours.`,
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
    { q: "Is it live or asynchronous?", a: "Asynchronous — candidates take it on their own schedule from any device. No coordination, no time zones, no interviewer calendars." },
    { q: "Can I customise the questions?", a: "Yes — use the interview as-is, swap individual questions, or generate a fresh set from your own job description with scoring criteria included." },
    { q: "How does AI scoring work?", a: "Each answer is evaluated against per-question criteria (depth, judgement, structure, communication). You get per-competency scores, a transcript, and can always override a score." },
    { q: "What do candidates experience?", a: "A clean, guided flow: question on screen, thinking time, then a scored answer in video, audio or chat. Practice question included — 94% of candidates rate the experience positively." },
  ];

  // three related items: two same-category interviews + one skills-test pairing
  const sameCat = INTERVIEWS.filter((t) => t.cat === iv.cat && t.name !== iv.name).slice(0, 2);
  const related: RelatedItem[] = [
    { name: `${iv.name} Skills Test`, meta: "Skills test · 20 Q · 25 min", tag: "Skills test", ic: "code" as RelatedItem["ic"] },
    ...sameCat.map((t, i) => ({
      name: `${t.name} Interview`,
      meta: `${t.level} · ${t.questions} Q · ${t.dur} min`,
      tag: "Interview",
      ic: (i === 0 ? "server" : "layers") as RelatedItem["ic"],
      slug: interviewSlug(t.name),
    })),
  ].slice(0, 3);

  return {
    category: cat,
    tag: "AI-scored interview",
    title,
    lede: `A structured, AI-led interview for ${iv.name} roles — ${iv.desc.replace(/\.$/, "").toLowerCase()}. Every candidate answers the same questions with intelligent follow-ups, and every answer is scored against the same rubric.`,
    type: "Video · Audio · Chat",
    duration: `${iv.dur} min`,
    questions: iv.questions,
    level: iv.level,
    languages: LANGUAGES,
    summary,
    skills,
    roles,
    interview,
    faqTest,
    related,
  };
}
