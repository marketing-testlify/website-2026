import { routes } from "@/lib/routes";

/**
 * HR-tool calculator configs.
 *
 * The design prototype (resource-tools-detail.dc.html) ships a single fully
 * worked example — the Cost per hire calculator — whose logic class is ported
 * here VERBATIM (state defaults, num()/money() helpers, formula, benchmark
 * note thresholds, breakdown rows, FAQ + related copy). The other calculators
 * follow the same template with genuine, definitional HR arithmetic (no
 * invented benchmark statistics — Cost per hire keeps the source's $4,700).
 *
 * Both the server page (hero / how-it-works / FAQ / related copy) and the
 * "use client" <CalculatorPanel> read from this module; only the client calls
 * compute(), so the functions never cross the server→client boundary.
 */

export type CalcField = {
  key: string;
  label: string;
  hint?: string;
  /** currency symbol shown inside the input, e.g. "$" */
  prefix?: string;
  min?: number;
  value: number;
};

export type CalcRow = { label: string; value: string };

export type CalcResult = {
  /** the big gradient number (already formatted) */
  value: string;
  note: string;
  rows: CalcRow[];
};

export type CalculatorConfig = {
  slug: string;
  toolName: string;
  eyebrow: string;
  title: string;
  lead: string;
  fields: CalcField[];
  /** label above the big result number */
  resultLabel: string;
  compute: (s: Record<string, string>) => CalcResult;
  how: { heading: string; lead: string; steps: { h: string; d: string }[] };
  faq: { q: string; a: string }[];
  related: { t: string; d: string; href: string }[];
  cta: { heading: string; sub: string };
};

/* ---------- shared numeric helpers (match the prototype exactly) ---------- */
const num = (v: string) => {
  const n = parseFloat(v);
  return isNaN(n) || n < 0 ? 0 : n;
};
const money = (n: number) => "$" + Math.round(n).toLocaleString("en-US");
const intFmt = (n: number) => Math.round(n).toLocaleString("en-US");
const pct = (n: number) =>
  (Math.round(n * 10) / 10).toLocaleString("en-US") + "%";

const toolHref = (slug: string) => `${routes.resourcesTools}/${slug}`;

/* ======================================================================== */
/*  Calculators                                                             */
/* ======================================================================== */

const CONFIGS: CalculatorConfig[] = [
  /* ---- 1. Cost per hire — VERBATIM port of the prototype logic class ---- */
  {
    slug: "cost-per-hire-calculator",
    toolName: "Cost per hire calculator",
    eyebrow: "Cost per hire calculator",
    title: "Calculate your true cost per hire",
    lead: "Add your recruiting spend and the number of roles you filled — see your real cost per hire instantly, and how it compares to the industry benchmark.",
    resultLabel: "Cost per hire",
    fields: [
      {
        key: "internal",
        label: "Internal recruiting cost",
        hint: "salaries, referrals, tools",
        prefix: "$",
        min: 0,
        value: 12000,
      },
      {
        key: "external",
        label: "External recruiting cost",
        hint: "agencies, job boards, ads",
        prefix: "$",
        min: 0,
        value: 8000,
      },
      {
        key: "hires",
        label: "Total hires",
        hint: "in the period",
        min: 1,
        value: 6,
      },
    ],
    compute: (s) => {
      const internal = num(s.internal);
      const external = num(s.external);
      const hires = Math.max(1, Math.round(num(s.hires)) || 1);
      const total = internal + external;
      const cph = total / hires;
      const note =
        cph <= 4700
          ? "Below the ~$4,700 industry benchmark — efficient hiring."
          : "Above the ~$4,700 industry benchmark — room to optimize.";
      return {
        value: money(cph),
        note,
        rows: [
          { label: "Total recruiting spend", value: money(total) },
          { label: "Total hires", value: intFmt(hires) },
          { label: "Industry benchmark", value: "$4,700" },
        ],
      };
    },
    how: {
      heading: "Cost per hire, explained",
      lead: "Cost per hire adds up everything you spend to fill a role — internal and external — and divides it by the number of hires. Lower it by screening on skill earlier and cutting time-to-shortlist.",
      steps: [
        {
          h: "Add your costs",
          d: "Internal (recruiter time, referrals, ATS) plus external (agencies, ads, job boards).",
        },
        {
          h: "Enter total hires",
          d: "The number of roles you actually filled over the same period.",
        },
        {
          h: "See your number",
          d: "Compare against the ~$4,700 benchmark and find where to trim.",
        },
      ],
    },
    faq: [
      {
        q: "What is a good cost per hire?",
        a: "The average cost per hire sits around $4,700, though it varies widely by role, seniority and industry. Anything meaningfully below that with strong quality of hire is a healthy sign.",
      },
      {
        q: "What should I include in cost per hire?",
        a: "Add every internal cost (recruiter time, referral bonuses, ATS and tooling) and every external cost (agency fees, job-board ads, sourcing), then divide by the number of hires in the same period.",
      },
      {
        q: "How can I reduce cost per hire?",
        a: "Screen on verified skill earlier to cut agency reliance and time-to-shortlist, reduce bad hires with structured assessments, and automate manual screening so recruiters spend time only on qualified candidates.",
      },
      {
        q: "Does cost per hire include onboarding?",
        a: "No — cost per hire covers recruiting spend up to the point of hire. Onboarding and training are tracked separately as part of overall cost of hire.",
      },
    ],
    related: [
      {
        t: "Time to hire calculator",
        d: "Measure your average time to fill",
        href: toolHref("time-to-hire-calculator"),
      },
      {
        t: "Attrition rate calculator",
        d: "Track turnover and its real cost",
        href: toolHref("attrition-rate-calculator"),
      },
      {
        t: "eNPS calculator",
        d: "Gauge employee sentiment",
        href: toolHref("enps-calculator"),
      },
      {
        t: "Hiring ROI calculator",
        d: "Prove the value of better hiring",
        href: routes.resourcesTools,
      },
    ],
    cta: {
      heading: "Cut your cost per hire with skills-based screening",
      sub: "Shortlist on verified skill in minutes — fewer agency fees, fewer bad hires, faster fills.",
    },
  },

  /* ---- 2. Time to hire ---- */
  {
    slug: "time-to-hire-calculator",
    toolName: "Time to hire calculator",
    eyebrow: "Time to hire calculator",
    title: "Measure your true time to hire",
    lead: "Add the days each stage takes, from first touch to an accepted offer — see your total time to hire and the single stage that's slowing you down most.",
    resultLabel: "Time to hire",
    fields: [
      { key: "sourcing", label: "Sourcing to screen", hint: "days", min: 0, value: 8 },
      { key: "screen", label: "Screen to interview", hint: "days", min: 0, value: 10 },
      { key: "interview", label: "Interview to offer", hint: "days", min: 0, value: 9 },
      { key: "offer", label: "Offer to accept", hint: "days", min: 0, value: 4 },
    ],
    compute: (s) => {
      const stages = [
        { label: "Sourcing to screen", v: num(s.sourcing) },
        { label: "Screen to interview", v: num(s.screen) },
        { label: "Interview to offer", v: num(s.interview) },
        { label: "Offer to accept", v: num(s.offer) },
      ];
      const total = stages.reduce((a, b) => a + b.v, 0);
      const slowest = stages.reduce((a, b) => (b.v > a.v ? b : a), stages[0]);
      const note =
        total <= 30
          ? "A month or less from first touch to accepted offer — a tight, candidate-friendly loop."
          : "Over a month to close — trim the slowest stage below to keep candidates from dropping off.";
      return {
        value: `${intFmt(total)} days`,
        note,
        rows: [
          { label: "Total time to hire", value: `${intFmt(total)} days` },
          { label: "Slowest stage", value: slowest.label },
          { label: "Longest stage length", value: `${intFmt(slowest.v)} days` },
        ],
      };
    },
    how: {
      heading: "Time to hire, explained",
      lead: "Time to hire is the number of days between a candidate entering your pipeline and accepting an offer. Break it down by stage to find the bottleneck — the longest gap is where candidates go cold and drop out.",
      steps: [
        { h: "Log each stage", d: "Enter the average days each step takes across your recent hires." },
        { h: "Add them up", d: "The total is your end-to-end time to hire from first touch to accept." },
        { h: "Attack the bottleneck", d: "The slowest stage is your fastest win — often manual screening." },
      ],
    },
    faq: [
      {
        q: "What is a good time to hire?",
        a: "It varies by role and seniority — technical and senior roles take longer. The goal is a consistent, predictable pipeline where no single stage stalls candidates for weeks.",
      },
      {
        q: "How is time to hire different from time to fill?",
        a: "Time to hire counts days from when a candidate enters the pipeline to accepting; time to fill counts from when the role opens. Time to hire measures your process speed for the candidates you engage.",
      },
      {
        q: "How do I reduce time to hire?",
        a: "Replace manual resume screening with skills assessments that shortlist automatically, batch interviews, and give candidates fast, clear feedback so they don't accept elsewhere.",
      },
    ],
    related: [
      { t: "Cost per hire calculator", d: "Find your true cost to fill", href: toolHref("cost-per-hire-calculator") },
      { t: "Applicant funnel calculator", d: "See where candidates drop", href: toolHref("applicant-funnel-calculator") },
      { t: "Offer acceptance rate", d: "Measure how often offers land", href: toolHref("offer-acceptance-rate-calculator") },
      { t: "Recruiting conversion rate", d: "Track pipeline efficiency", href: toolHref("recruiting-conversion-rate") },
    ],
    cta: {
      heading: "Cut time to hire with skills-based screening",
      sub: "Auto-shortlist on verified skill so recruiters spend days, not weeks, getting to a confident yes.",
    },
  },

  /* ---- 3. Quality of hire ---- */
  {
    slug: "quality-of-hire-calculator",
    toolName: "Quality of hire calculator",
    eyebrow: "Quality of hire calculator",
    title: "Score your quality of hire",
    lead: "Rate new hires across the factors that actually predict success — performance, ramp, fit and retention — for a single quality-of-hire index you can track over time.",
    resultLabel: "Quality of hire index",
    fields: [
      { key: "performance", label: "Performance score", hint: "0–100", min: 0, value: 82 },
      { key: "ramp", label: "Ramp-up speed", hint: "0–100", min: 0, value: 74 },
      { key: "fit", label: "Cultural fit", hint: "0–100", min: 0, value: 88 },
      { key: "retention", label: "Retention likelihood", hint: "0–100", min: 0, value: 79 },
    ],
    compute: (s) => {
      const parts = [
        { label: "Performance", v: Math.min(100, num(s.performance)) },
        { label: "Ramp-up speed", v: Math.min(100, num(s.ramp)) },
        { label: "Cultural fit", v: Math.min(100, num(s.fit)) },
        { label: "Retention likelihood", v: Math.min(100, num(s.retention)) },
      ];
      const avg = parts.reduce((a, b) => a + b.v, 0) / parts.length;
      const weakest = parts.reduce((a, b) => (b.v < a.v ? b : a), parts[0]);
      const note =
        avg >= 80
          ? "Strong quality of hire — this profile is paying off."
          : avg >= 60
          ? "Solid, with room to grow — target the weakest factor below."
          : "Below par — dig into the lowest-scoring factor before you scale this hire.";
      return {
        value: `${Math.round(avg)}`,
        note,
        rows: [
          { label: "Average score", value: `${Math.round(avg)} / 100` },
          { label: "Strongest factor", value: parts.reduce((a, b) => (b.v > a.v ? b : a), parts[0]).label },
          { label: "Weakest factor", value: weakest.label },
        ],
      };
    },
    how: {
      heading: "Quality of hire, explained",
      lead: "Quality of hire blends the signals that show whether a hire was actually a good one — on-the-job performance, how fast they ramped, how well they fit, and whether they stay. Scoring it consistently turns a gut feeling into a number you can improve.",
      steps: [
        { h: "Rate each factor", d: "Score every new hire 0–100 on performance, ramp, fit and retention." },
        { h: "Get the index", d: "The calculator averages them into one quality-of-hire score." },
        { h: "Coach the gap", d: "The weakest factor tells you where hiring or onboarding needs work." },
      ],
    },
    faq: [
      {
        q: "How do you measure quality of hire?",
        a: "Combine post-hire signals — manager performance ratings, ramp-up speed, cultural fit and retention — into a single weighted index, then track it by role and by sourcing channel.",
      },
      {
        q: "When should I score quality of hire?",
        a: "Take a first reading around 90 days and again at 6–12 months. Early scores flag onboarding issues; later scores validate whether your selection criteria predict real performance.",
      },
      {
        q: "How does skills-based hiring improve quality of hire?",
        a: "Assessing verified skills before the interview means you shortlist on proven ability, not proxies like résumés — which correlates far better with on-the-job performance and retention.",
      },
    ],
    related: [
      { t: "Attrition rate calculator", d: "Track who stays and who leaves", href: toolHref("attrition-rate-calculator") },
      { t: "eNPS calculator", d: "Gauge employee sentiment", href: toolHref("enps-calculator") },
      { t: "Cost per hire calculator", d: "Find your true cost to fill", href: toolHref("cost-per-hire-calculator") },
      { t: "Recruiting conversion rate", d: "Track pipeline efficiency", href: toolHref("recruiting-conversion-rate") },
    ],
    cta: {
      heading: "Raise quality of hire with verified skills",
      sub: "Shortlist on proven ability, not proxies — and watch performance and retention climb.",
    },
  },

  /* ---- 4. Attrition rate ---- */
  {
    slug: "attrition-rate-calculator",
    toolName: "Attrition rate calculator",
    eyebrow: "Attrition rate calculator",
    title: "Calculate your attrition rate",
    lead: "Enter how many people left and your average headcount for the period — see your attrition rate and retention rate instantly, so you can catch turnover early.",
    resultLabel: "Attrition rate",
    fields: [
      { key: "left", label: "Employees who left", hint: "in the period", min: 0, value: 18 },
      { key: "headcount", label: "Average headcount", hint: "over the period", min: 1, value: 220 },
    ],
    compute: (s) => {
      const left = num(s.left);
      const headcount = Math.max(1, num(s.headcount));
      const rate = (left / headcount) * 100;
      const note =
        rate <= 10
          ? "At or below 10% — turnover looks healthy for most teams."
          : "Above 10% — worth investigating which teams and roles are driving it.";
      return {
        value: pct(rate),
        note,
        rows: [
          { label: "Employees who left", value: intFmt(left) },
          { label: "Average headcount", value: intFmt(headcount) },
          { label: "Retention rate", value: pct(Math.max(0, 100 - rate)) },
        ],
      };
    },
    how: {
      heading: "Attrition rate, explained",
      lead: "Attrition rate is the share of employees who leave over a period, divided by average headcount. Tracked regularly it's an early-warning signal — rising attrition in a team almost always shows up before the exit interviews do.",
      steps: [
        { h: "Count departures", d: "Total employees who left during the period you're measuring." },
        { h: "Enter headcount", d: "Your average number of employees across that same period." },
        { h: "Read the rate", d: "The percentage — plus your retention rate — tells you where to dig." },
      ],
    },
    faq: [
      {
        q: "What is a good attrition rate?",
        a: "It's highly industry-dependent, but many teams treat annual attrition around 10% as healthy. What matters more is the trend and whether your strongest performers are the ones leaving.",
      },
      {
        q: "How do you calculate attrition rate?",
        a: "Divide the number of employees who left during a period by the average headcount over that same period, then multiply by 100 to get a percentage.",
      },
      {
        q: "How is attrition different from turnover?",
        a: "The terms are often used interchangeably. Some teams reserve 'attrition' for roles left unfilled and 'turnover' for all departures — the formula is the same either way.",
      },
    ],
    related: [
      { t: "eNPS calculator", d: "Gauge employee sentiment", href: toolHref("enps-calculator") },
      { t: "Quality of hire calculator", d: "Score new-hire success", href: toolHref("quality-of-hire-calculator") },
      { t: "Cost per hire calculator", d: "Find your true cost to fill", href: toolHref("cost-per-hire-calculator") },
      { t: "Time to hire calculator", d: "Measure your average time to fill", href: toolHref("time-to-hire-calculator") },
    ],
    cta: {
      heading: "Reduce attrition with better hiring decisions",
      sub: "Hires selected on verified skill and fit stay longer — cut regretted turnover at the source.",
    },
  },

  /* ---- 5. eNPS ---- */
  {
    slug: "enps-calculator",
    toolName: "eNPS calculator",
    eyebrow: "eNPS calculator",
    title: "Calculate your employee NPS",
    lead: "Enter how your team answered the one question that matters — how likely are they to recommend working here — and get your eNPS score from -100 to +100.",
    resultLabel: "Employee NPS",
    fields: [
      { key: "promoters", label: "Promoters", hint: "scored 9–10", min: 0, value: 62 },
      { key: "passives", label: "Passives", hint: "scored 7–8", min: 0, value: 24 },
      { key: "detractors", label: "Detractors", hint: "scored 0–6", min: 0, value: 14 },
    ],
    compute: (s) => {
      const p = num(s.promoters);
      const pa = num(s.passives);
      const d = num(s.detractors);
      const total = p + pa + d;
      const promPct = total ? (p / total) * 100 : 0;
      const detrPct = total ? (d / total) * 100 : 0;
      const enps = Math.round(promPct - detrPct);
      const note =
        enps >= 30
          ? "Excellent — your team is actively championing the workplace."
          : enps >= 10
          ? "Good — positive sentiment, with clear room to build on."
          : enps >= 0
          ? "Needs work — as many detractors as champions."
          : "Concerning — more detractors than promoters. Act on the feedback fast.";
      return {
        value: `${enps}`,
        note,
        rows: [
          { label: "Promoters", value: pct(promPct) },
          { label: "Detractors", value: pct(detrPct) },
          { label: "Total responses", value: intFmt(total) },
        ],
      };
    },
    how: {
      heading: "eNPS, explained",
      lead: "Employee Net Promoter Score asks one question — how likely are you to recommend us as a place to work, 0 to 10 — and subtracts the percentage of detractors (0–6) from the percentage of promoters (9–10). The result runs from -100 to +100.",
      steps: [
        { h: "Group responses", d: "Sort answers into promoters (9–10), passives (7–8) and detractors (0–6)." },
        { h: "Enter the counts", d: "Drop in how many people fell into each group." },
        { h: "Read your score", d: "Promoter % minus detractor % gives your eNPS from -100 to +100." },
      ],
    },
    faq: [
      {
        q: "What is a good eNPS score?",
        a: "Because it runs from -100 to +100, any positive score means more champions than detractors. Many teams treat 10–30 as good and 30+ as excellent, but track your own trend over time.",
      },
      {
        q: "How is eNPS calculated?",
        a: "Take the percentage of promoters (scored 9–10) and subtract the percentage of detractors (scored 0–6). Passives (7–8) count toward the total but not the score itself.",
      },
      {
        q: "How often should I run an eNPS survey?",
        a: "Quarterly is common — frequent enough to catch shifts in sentiment, spaced enough to act on feedback between surveys and see whether changes moved the number.",
      },
    ],
    related: [
      { t: "Attrition rate calculator", d: "Track turnover and its cost", href: toolHref("attrition-rate-calculator") },
      { t: "Quality of hire calculator", d: "Score new-hire success", href: toolHref("quality-of-hire-calculator") },
      { t: "Cost per hire calculator", d: "Find your true cost to fill", href: toolHref("cost-per-hire-calculator") },
      { t: "Time to hire calculator", d: "Measure your average time to fill", href: toolHref("time-to-hire-calculator") },
    ],
    cta: {
      heading: "Great teams start with great hires",
      sub: "Skills-based hiring builds teams that fit and thrive — the foundation of a healthy eNPS.",
    },
  },

  /* ---- 6. Applicant funnel ---- */
  {
    slug: "applicant-funnel-calculator",
    toolName: "Applicant funnel calculator",
    eyebrow: "Applicant funnel calculator",
    title: "Map your applicant funnel",
    lead: "Enter the number of candidates at each stage, from application to hire — see your overall conversion rate and exactly where your pipeline leaks the most.",
    resultLabel: "Applicant-to-hire rate",
    fields: [
      { key: "applicants", label: "Applicants", hint: "top of funnel", min: 0, value: 500 },
      { key: "screened", label: "Screened in", hint: "passed screening", min: 0, value: 120 },
      { key: "interviewed", label: "Interviewed", hint: "reached interview", min: 0, value: 48 },
      { key: "offers", label: "Offers made", min: 0, value: 12 },
      { key: "hires", label: "Hires", hint: "accepted", min: 0, value: 8 },
    ],
    compute: (s) => {
      const applicants = num(s.applicants);
      const screened = num(s.screened);
      const offers = num(s.offers);
      const hires = num(s.hires);
      const overall = applicants ? (hires / applicants) * 100 : 0;
      const screenRate = applicants ? (screened / applicants) * 100 : 0;
      const offerToHire = offers ? (hires / offers) * 100 : 0;
      const note =
        overall >= 2
          ? "A healthy applicant-to-hire rate — your funnel is converting efficiently."
          : "A tight funnel — check whether screening is filtering out qualified candidates.";
      return {
        value: pct(overall),
        note,
        rows: [
          { label: "Applicant → screen", value: pct(screenRate) },
          { label: "Offer → hire", value: pct(offerToHire) },
          { label: "Candidates per hire", value: hires ? intFmt(applicants / hires) : "—" },
        ],
      };
    },
    how: {
      heading: "The applicant funnel, explained",
      lead: "Your applicant funnel tracks how candidates narrow from application to hire. Conversion between each stage shows where you lose people — a steep drop at screening often means your top-of-funnel is noisy or your screen is too blunt.",
      steps: [
        { h: "Count each stage", d: "Applicants, screened in, interviewed, offers made and hires." },
        { h: "See the conversion", d: "The calculator finds your applicant-to-hire rate and stage rates." },
        { h: "Fix the leak", d: "Wherever the drop is steepest is where to focus first." },
      ],
    },
    faq: [
      {
        q: "What is a good applicant-to-hire rate?",
        a: "It depends heavily on role and sourcing, but many teams see roughly 1–3% of applicants become hires. A very low rate can mean too many unqualified applicants, not a broken process.",
      },
      {
        q: "Which funnel stage matters most?",
        a: "Screening. It's where the largest volume is filtered, so a smarter screen — assessing verified skills instead of scanning résumés — has the biggest impact on downstream quality.",
      },
      {
        q: "How do I improve funnel conversion?",
        a: "Sharpen your top of funnel with clearer job posts, replace manual screening with skills assessments that surface qualified candidates automatically, and remove unnecessary interview rounds.",
      },
    ],
    related: [
      { t: "Recruiting conversion rate", d: "Track pipeline efficiency", href: toolHref("recruiting-conversion-rate") },
      { t: "Offer acceptance rate", d: "Measure how often offers land", href: toolHref("offer-acceptance-rate-calculator") },
      { t: "Time to hire calculator", d: "Measure your average time to fill", href: toolHref("time-to-hire-calculator") },
      { t: "Cost per hire calculator", d: "Find your true cost to fill", href: toolHref("cost-per-hire-calculator") },
    ],
    cta: {
      heading: "Fix your funnel with smarter screening",
      sub: "Skills assessments surface qualified candidates automatically — a cleaner funnel, top to bottom.",
    },
  },

  /* ---- 7. Offer acceptance rate ---- */
  {
    slug: "offer-acceptance-rate-calculator",
    toolName: "Offer acceptance rate calculator",
    eyebrow: "Offer acceptance rate calculator",
    title: "Calculate your offer acceptance rate",
    lead: "Enter how many offers you extended and how many candidates said yes — see your offer acceptance rate and how many offers are slipping away.",
    resultLabel: "Offer acceptance rate",
    fields: [
      { key: "extended", label: "Offers extended", hint: "in the period", min: 1, value: 40 },
      { key: "accepted", label: "Offers accepted", min: 0, value: 34 },
    ],
    compute: (s) => {
      const extended = Math.max(1, num(s.extended));
      const accepted = Math.min(extended, num(s.accepted));
      const rate = (accepted / extended) * 100;
      const note =
        rate >= 90
          ? "Strong close rate — candidates are choosing you with confidence."
          : rate >= 80
          ? "Solid, but a few offers are slipping — check comp, speed and experience."
          : "Below 80% — too many offers are being declined. Look at process and positioning.";
      return {
        value: pct(rate),
        note,
        rows: [
          { label: "Offers extended", value: intFmt(extended) },
          { label: "Offers accepted", value: intFmt(accepted) },
          { label: "Offers declined", value: intFmt(extended - accepted) },
        ],
      };
    },
    how: {
      heading: "Offer acceptance rate, explained",
      lead: "Offer acceptance rate is the share of offers candidates say yes to. A dip is one of the clearest signals in hiring — it usually points to slow processes, misaligned comp, or a candidate experience that cooled between interview and offer.",
      steps: [
        { h: "Count offers", d: "How many formal offers you extended over the period." },
        { h: "Count acceptances", d: "How many of those candidates accepted." },
        { h: "Read the rate", d: "A falling rate flags comp, speed or experience problems." },
      ],
    },
    faq: [
      {
        q: "What is a good offer acceptance rate?",
        a: "Many teams aim for 90% or higher. Below that, candidates are declining often enough that it's worth examining compensation, decision speed and the overall candidate experience.",
      },
      {
        q: "Why do candidates decline offers?",
        a: "Usually competing offers, compensation gaps, a slow or impersonal process, or a mismatch between the role sold and the role offered. A slow pipeline is one of the most common and fixable causes.",
      },
      {
        q: "How do I improve offer acceptance?",
        a: "Move faster, keep candidates warm with clear communication, benchmark compensation, and make sure the interview experience reflects a place people actually want to work.",
      },
    ],
    related: [
      { t: "Time to hire calculator", d: "Measure your average time to fill", href: toolHref("time-to-hire-calculator") },
      { t: "Applicant funnel calculator", d: "See where candidates drop", href: toolHref("applicant-funnel-calculator") },
      { t: "Recruiting conversion rate", d: "Track pipeline efficiency", href: toolHref("recruiting-conversion-rate") },
      { t: "Cost per hire calculator", d: "Find your true cost to fill", href: toolHref("cost-per-hire-calculator") },
    ],
    cta: {
      heading: "Win more offers with a faster, fairer process",
      sub: "Skills-based hiring keeps candidates engaged and moving — so more of your best offers land.",
    },
  },

  /* ---- 8. Sourcing channel efficiency ---- */
  {
    slug: "sourcing-channel-efficiency",
    toolName: "Sourcing channel efficiency",
    eyebrow: "Sourcing channel efficiency",
    title: "Measure sourcing channel efficiency",
    lead: "Enter a channel's spend, the qualified candidates it produced and the hires that came from it — see cost per hire and cost per qualified candidate for that channel.",
    resultLabel: "Cost per hire",
    fields: [
      { key: "spend", label: "Channel spend", hint: "ads, fees, tooling", prefix: "$", min: 0, value: 6000 },
      { key: "qualified", label: "Qualified candidates", hint: "passed screening", min: 0, value: 40 },
      { key: "hires", label: "Hires from channel", min: 1, value: 5 },
    ],
    compute: (s) => {
      const spend = num(s.spend);
      const qualified = num(s.qualified);
      const hires = Math.max(1, Math.round(num(s.hires)) || 1);
      const cph = spend / hires;
      const cpq = qualified ? spend / qualified : 0;
      const qualToHire = qualified ? (hires / qualified) * 100 : 0;
      const note =
        cph <= 4700
          ? "Efficient — this channel delivers hires below the ~$4,700 benchmark."
          : "Pricey per hire — compare against your other channels before doubling down.";
      return {
        value: money(cph),
        note,
        rows: [
          { label: "Cost per qualified candidate", value: qualified ? money(cpq) : "—" },
          { label: "Qualified → hire rate", value: pct(qualToHire) },
          { label: "Total channel spend", value: money(spend) },
        ],
      };
    },
    how: {
      heading: "Sourcing channel efficiency, explained",
      lead: "Not every sourcing channel is worth the spend. Efficiency compares what a channel costs against the qualified candidates and hires it actually produces — so you can shift budget toward the channels that deliver, not just the ones that deliver volume.",
      steps: [
        { h: "Enter the spend", d: "Everything you invested in one channel over the period." },
        { h: "Add the output", d: "Qualified candidates and hires that came from it." },
        { h: "Compare channels", d: "Run each channel and back the ones with the best cost per hire." },
      ],
    },
    faq: [
      {
        q: "How do I measure sourcing channel efficiency?",
        a: "For each channel, divide its total spend by the number of hires it produced for cost per hire, and by qualified candidates for cost per qualified candidate. Compare channels side by side.",
      },
      {
        q: "Why look at qualified candidates, not just applicants?",
        a: "A channel that floods you with unqualified applicants looks cheap per applicant but expensive per hire. Measuring qualified candidates and hires shows which channels bring real signal.",
      },
      {
        q: "How can I make sourcing more efficient?",
        a: "Concentrate budget on the channels with the lowest cost per qualified hire, and use skills assessments to qualify candidates automatically so every channel's output is easier to compare.",
      },
    ],
    related: [
      { t: "Cost per hire calculator", d: "Find your true cost to fill", href: toolHref("cost-per-hire-calculator") },
      { t: "Applicant funnel calculator", d: "See where candidates drop", href: toolHref("applicant-funnel-calculator") },
      { t: "Recruiting conversion rate", d: "Track pipeline efficiency", href: toolHref("recruiting-conversion-rate") },
      { t: "Quality of hire calculator", d: "Score new-hire success", href: toolHref("quality-of-hire-calculator") },
    ],
    cta: {
      heading: "Spend on the channels that actually hire",
      sub: "Qualify every candidate on verified skill — so you can compare channels on outcomes, not volume.",
    },
  },

  /* ---- 9. Recruiting conversion rate ---- */
  {
    slug: "recruiting-conversion-rate",
    toolName: "Recruiting conversion rate",
    eyebrow: "Recruiting conversion rate",
    title: "Calculate your recruiting conversion rate",
    lead: "Enter how many candidates entered your pipeline and how many you hired — see the share that convert, and how many candidates it takes to make one hire.",
    resultLabel: "Conversion rate",
    fields: [
      { key: "candidates", label: "Candidates in pipeline", hint: "entered the process", min: 1, value: 240 },
      { key: "hires", label: "Candidates hired", min: 0, value: 8 },
    ],
    compute: (s) => {
      const candidates = Math.max(1, num(s.candidates));
      const hires = Math.min(candidates, num(s.hires));
      const rate = (hires / candidates) * 100;
      const perHire = hires ? candidates / hires : 0;
      const note =
        rate >= 3
          ? "An efficient pipeline — a healthy share of candidates convert to hires."
          : "A low conversion rate — worth checking whether screening filters out qualified people.";
      return {
        value: pct(rate),
        note,
        rows: [
          { label: "Candidates in pipeline", value: intFmt(candidates) },
          { label: "Candidates hired", value: intFmt(hires) },
          { label: "Candidates per hire", value: hires ? intFmt(perHire) : "—" },
        ],
      };
    },
    how: {
      heading: "Recruiting conversion rate, explained",
      lead: "Recruiting conversion rate is the share of candidates in your pipeline who become hires. It's a single-number read on pipeline efficiency — low conversion can mean noisy sourcing, an over-aggressive screen, or too many drop-off points between application and offer.",
      steps: [
        { h: "Enter your pipeline", d: "How many candidates entered the hiring process." },
        { h: "Enter your hires", d: "How many of them you actually hired." },
        { h: "Read the rate", d: "Plus candidates-per-hire, so you can plan pipeline volume." },
      ],
    },
    faq: [
      {
        q: "What is a good recruiting conversion rate?",
        a: "It varies by role and sourcing quality, but many teams see a few percent of pipeline candidates convert to hires. Use it to forecast how many candidates you need to fill a role.",
      },
      {
        q: "How is conversion rate different from acceptance rate?",
        a: "Conversion rate spans the whole pipeline — candidates in to hires out. Acceptance rate only measures the final step: how many of the offers you extend get accepted.",
      },
      {
        q: "How do I improve recruiting conversion?",
        a: "Tighten sourcing so more of the top of funnel is genuinely qualified, replace manual screening with skills assessments, and cut unnecessary stages where candidates drop off.",
      },
    ],
    related: [
      { t: "Applicant funnel calculator", d: "See where candidates drop", href: toolHref("applicant-funnel-calculator") },
      { t: "Offer acceptance rate", d: "Measure how often offers land", href: toolHref("offer-acceptance-rate-calculator") },
      { t: "Time to hire calculator", d: "Measure your average time to fill", href: toolHref("time-to-hire-calculator") },
      { t: "Cost per hire calculator", d: "Find your true cost to fill", href: toolHref("cost-per-hire-calculator") },
    ],
    cta: {
      heading: "Convert more of your pipeline into hires",
      sub: "Skills-based screening keeps qualified candidates moving — a tighter pipeline, end to end.",
    },
  },
];

export const CALCULATORS: Record<string, CalculatorConfig> = Object.fromEntries(
  CONFIGS.map((c) => [c.slug, c])
);

export const CALCULATOR_SLUGS = CONFIGS.map((c) => c.slug);
