import { routes } from "@/lib/routes";

/* ============================================================
   Solution-detail page data — extracted verbatim from the four
   template-solution-details-*.dc.html prototypes' DATA objects.
   ============================================================ */

export type Bullet = { label: string; href?: string; desc?: string };

export type SplitSection = {
  kind: "split";
  num?: string;
  h2: string;
  body: string[];
  bullets?: Bullet[];
  cta?: { label: string; href: string };
};

export type CardsSection = {
  kind: "cards";
  eyebrow: string;
  h2: string;
  intro?: string;
  cards: { title: string; desc: string }[];
};

export type GridSection = {
  kind: "grid";
  eyebrow: string;
  h2: string;
  intro?: string;
  cards: { title: string; desc: string }[];
};

export type ChipsSection = {
  kind: "chips";
  h2: string;
  chips: string[];
};

export type Section = SplitSection | CardsSection | GridSection | ChipsSection;

export type SolutionData = {
  crumb: string;
  eyebrow: string;
  title: string;
  lead: string;
  ctaLabel: string;
  ctaHref: string;
  stats: { t: string }[];
  logos?: string[];
  sections: Section[];
  faqs: { q: string; a: string }[];
  faqTitle?: string;
  ctaEyebrow: string;
  ctaTitle: string;
  ctaBody: string;
  ctaTicks: string[];
};

export const SOLUTIONS: Record<string, SolutionData> = {
  /* ── Use case / Volume hiring ─────────────────────────────── */
  "volume-hiring": {
    crumb: "Use case / Volume hiring",
    eyebrow: "For high-volume hiring",
    title: "Bulk hiring made easy with Testlify's volume hiring software",
    lead: "Overwhelmed with applications or need to fill roles fast? Screen high volumes accurately with AI-driven assessments that protect quality while saving you time.",
    ctaLabel: "Try for free",
    ctaHref: routes.pricing,
    stats: [
      { t: "Up to 75% less screening time" },
      { t: "Screen thousands in hours" },
      { t: "3,500+ validated tests" },
    ],
    sections: [
      {
        kind: "split",
        num: "1",
        h2: "Hiring at scale just got faster, smarter, and more precise",
        body: [
          "Move applicants through screening automatically, without manual review of every resume. Testlify surfaces the candidates worth your time so your team focuses on the shortlist, not the pile.",
        ],
        bullets: [
          { label: "Video and audio interviewing" },
          { label: "3,500+ technical & non-technical tests" },
          { label: "Best-in-class proctoring" },
          { label: "Auto-advance candidates by results" },
        ],
        cta: { label: "View our test library", href: routes.testLibrary },
      },
      {
        kind: "cards",
        eyebrow: "Confidence at scale",
        h2: "Hire candidates in bulk with confidence",
        intro: "Speed doesn't have to mean compromise. Every high-volume hire is backed by data.",
        cards: [
          {
            title: "Powerful proctoring",
            desc: "Snapshots, tab-switch and mouse tracking keep results trustworthy at any volume.",
          },
          {
            title: "Diverse assessment types",
            desc: "Combine cognitive, role-specific and behavioral tests in one flow.",
          },
          {
            title: "Robust reporting & analytics",
            desc: "Spot bottlenecks, benchmark candidates and prove time-to-hire gains.",
          },
        ],
      },
      {
        kind: "split",
        num: "2",
        h2: "Attract top talent with a skills-first approach",
        body: [
          "Combine ready-made tests, your existing candidate pool or your own questionnaire. Candidates advance automatically based on results — so quality rises even as volume grows.",
        ],
        cta: { label: "Try for free", href: routes.pricing },
      },
      {
        kind: "split",
        num: "3",
        h2: "One-stop solution for every hiring need",
        body: [
          "Automate repetitive tasks, centralize candidates and let analytics find where applicants drop off.",
        ],
        bullets: [
          { label: "Identify skills gaps early" },
          { label: "Improve time-to-hire" },
          { label: "Benchmark against a global pool" },
        ],
      },
    ],
    faqs: [
      {
        q: "What is the best volume hiring software?",
        a: "Testlify is built for volume hiring — automated screening, proctoring and analytics let you assess thousands of candidates in hours without losing quality.",
      },
      {
        q: "What is volume hiring?",
        a: "Volume hiring (or bulk hiring) is filling many open roles quickly, often for seasonal, frontline or high-turnover positions where manual screening can't keep up.",
      },
      {
        q: "How do I hire for high-volume roles with Testlify?",
        a: "Create a skills-based assessment, invite candidates in bulk, and let auto-advancement surface top performers for interview.",
      },
      {
        q: "What is volume staffing?",
        a: "Volume staffing is sourcing and placing large numbers of candidates at once — Testlify standardizes the screening step so every applicant is evaluated fairly.",
      },
      {
        q: "Can I customize the tests?",
        a: "Yes. Build your own questions, set duration and passing scores, and weight sections to match the role.",
      },
    ],
    ctaEyebrow: "Get started",
    ctaTitle: "Cut through the noise. Hire with clarity.",
    ctaBody:
      "Resumes don't tell you everything. Prove who can actually do the job — start screening at scale in minutes.",
    ctaTicks: ["7-day free trial", "Unlimited assessments", "Cancel anytime"],
  },

  /* ── Industry / IT & technology ───────────────────────────── */
  "it-technology": {
    crumb: "Industry / IT & technology",
    eyebrow: "For IT teams",
    title: "The all-in-one talent assessment platform built for IT teams",
    lead: "From developers and DevOps to data analysts, assess real-world skills, cut hiring time in half, and build high-performing tech teams faster.",
    ctaLabel: "Try for free",
    ctaHref: routes.pricing,
    stats: [
      { t: "3,500+ validated tests" },
      { t: "45+ coding languages" },
      { t: "100+ ATS integrations" },
    ],
    logos: ["LTIMindtree", "Sonatafy", "Thales", "Third Bridge", "Cogitotech"],
    sections: [
      {
        kind: "split",
        num: "1",
        h2: "Hire the right tech talent with real-world skill validation",
        body: [
          "Assessments designed by developers, for developers. Interactive coding environments and 45+ language challenges mimic on-the-job responsibilities — so you see how candidates actually work, not just what they claim.",
        ],
        bullets: [
          { label: "Full-stack development" },
          { label: "Frontend (React, Angular, Vue)" },
          { label: "Backend (Node.js, Java, Python)" },
          { label: "Data science & analytics" },
          { label: "QA & automation" },
          { label: "DevOps & cloud" },
        ],
        cta: { label: "Explore IT assessments", href: routes.testLibrary },
      },
      {
        kind: "split",
        num: "2",
        h2: "Assess tech talent in one platform with 15+ interactive question types",
        body: [
          "Combine MCQs, live coding simulations, system design and debugging tasks into a single assessment. Auto-rank candidates by performance, accuracy and efficiency.",
        ],
        bullets: [
          { label: "Role-specific tests with 15+ question types" },
          { label: "Mix coding, real-world and logic tasks" },
          { label: "Simulate frontend, backend, data & DevOps scenarios" },
          { label: "Auto-rank by performance and efficiency" },
        ],
      },
      {
        kind: "cards",
        eyebrow: "Why Testlify",
        h2: "Enterprise-ready. Scalable. Built for global tech hiring",
        intro: "Everything a modern engineering org needs to hire on proof, not resumes.",
        cards: [
          {
            title: "Real-world coding environments",
            desc: "Interactive IDEs across 45+ stacks that mirror day-to-day engineering work.",
          },
          {
            title: "Automated enterprise-grade evaluation",
            desc: "Logic-based scoring ranks candidates on accuracy, efficiency and code quality.",
          },
          {
            title: "Global benchmarking",
            desc: "Real-time insights against a worldwide talent pool for every role.",
          },
          {
            title: "Enterprise security & compliance",
            desc: "AI proctoring, IP locking, plagiarism detection, GDPR and ISO 27001.",
          },
          {
            title: "Support for 45+ tech stacks",
            desc: "From modern web frameworks to systems languages and data tooling.",
          },
          {
            title: "Fully integratable",
            desc: "100+ native ATS integrations plus Slack and open API access.",
          },
        ],
      },
      {
        kind: "split",
        num: "3",
        h2: "Cost-effective at scale",
        body: [
          "Reduce cost-per-hire and recruiter hours through automation, with scalable, transparent pricing. Fewer mis-hires means measurable ROI on every requisition.",
        ],
        cta: { label: "See pricing", href: routes.pricing },
      },
    ],
    faqs: [
      {
        q: "Is Testlify suitable for both startups and enterprises?",
        a: "Yes. Testlify scales from a handful of hires to thousands of candidates across regions and roles, with pricing and workflows to match.",
      },
      {
        q: "Can I assess soft skills as well as technical skills?",
        a: "Primarily technical, but you can add soft-skill, cognitive and situational-judgment evaluations to any assessment.",
      },
      {
        q: "How is candidate data secured?",
        a: "All data is encrypted in transit and at rest, stored on secure servers with strict access controls. Testlify is SOC 2 Type II, ISO 27001 and GDPR compliant.",
      },
      {
        q: "Does Testlify integrate with our ATS?",
        a: "Yes — 100+ native ATS integrations plus Slack and an open API, available on every paid plan.",
      },
      {
        q: "Can assessments be customized to our stack?",
        a: "Absolutely. Tailor tests to your tech stacks, job requirements and industry standards.",
      },
      {
        q: "Can it handle high-volume hiring peaks?",
        a: "Yes. The platform is built to scale, so you can screen thousands of applicants in hours without compromising quality.",
      },
    ],
    ctaEyebrow: "Get started",
    ctaTitle: "Cut through the noise. Hire with clarity.",
    ctaBody:
      "Resumes don't tell you everything. Prove who can actually do the job — start assessing IT talent in minutes.",
    ctaTicks: ["7-day free trial", "Unlimited assessments", "Cancel anytime"],
  },

  /* ── Company / Enterprise ─────────────────────────────────── */
  enterprise: {
    crumb: "Company / Enterprise",
    eyebrow: "For enterprises",
    title: "One-stop solution for global enterprise hiring",
    lead: "Volume, cross-functional and global hiring, internal mobility and senior roles — assess with accuracy, speed and scale, with zero guesswork.",
    ctaLabel: "Talk to sales",
    ctaHref: "#demo",
    stats: [
      { t: "3,500+ tests · 4,500+ roles" },
      { t: "SOC 2 · ISO 27001 · GDPR" },
      { t: "100+ ATS integrations" },
    ],
    logos: ["LTIMindtree", "Thales", "Third Bridge", "Schweiger", "Adium"],
    sections: [
      {
        kind: "split",
        num: "1",
        h2: "A better way to assess enterprise talent",
        body: [
          "Evaluate thousands of candidates across regions and roles from a single platform, with the controls and integrations large teams need.",
        ],
        bullets: [
          { label: "15+ question types" },
          { label: "3,500+ tests, 4,500+ roles" },
          { label: "45+ coding languages" },
          { label: "Custom workflows" },
          { label: "Global benchmarking" },
          { label: "100+ ATS, Slack & API" },
        ],
      },
      {
        kind: "grid",
        eyebrow: "Outcomes that matter",
        h2: "More than features — outcomes that matter",
        intro: "Enterprise hiring is measured on cost, speed and defensibility. Testlify delivers on all three.",
        cards: [
          {
            title: "Role-based access & permissions",
            desc: "Give every team the right level of control across regions and business units.",
          },
          {
            title: "Reduce cost-per-hire",
            desc: "Automate screening so recruiters spend time only on qualified candidates.",
          },
          {
            title: "Customizable workflow",
            desc: "Map assessments to your existing hiring stages and approval flows.",
          },
          {
            title: "Scale without overhead",
            desc: "From 10 to 10,000 candidates on predictable, transparent pricing.",
          },
          {
            title: "Enterprise-grade security",
            desc: "SOC 2 Type II, ISO 27001 and GDPR, with full audit trails.",
          },
          {
            title: "Advanced analytics & insights",
            desc: "Benchmark talent globally and prove quality-of-hire to leadership.",
          },
        ],
      },
      {
        kind: "split",
        num: "2",
        h2: "White-labeling & employer branding",
        body: [
          "Deliver a fully branded assessment experience end to end — your logo, your colors, your candidate journey.",
        ],
        cta: { label: "Explore white-label", href: "#" },
      },
      {
        kind: "split",
        num: "3",
        h2: "A fully functional free trial",
        body: [
          "Explore the full platform — candidate portal, evaluation cards, reporting and proctoring — with no credit card required. Rated 4.7 on G2 by enterprise recruiters.",
        ],
        cta: { label: "See pricing", href: routes.pricing },
      },
    ],
    faqs: [
      {
        q: "How does Testlify support global, multi-region hiring?",
        a: "Assess candidates across regions from one platform, with role-based access, 16+ languages and global benchmarking so every team hires to the same bar.",
      },
      {
        q: "Is Testlify secure and compliant enough for enterprise?",
        a: "Yes. Testlify is SOC 2 Type II, ISO 27001, GDPR and CCPA compliant, with full audit trails and EEOC-defensible assessments.",
      },
      {
        q: "Can it integrate with our existing HR stack?",
        a: "100+ native ATS integrations plus Slack and an open API mean scores flow into the systems your teams already use.",
      },
      {
        q: "How does pricing scale for large teams?",
        a: "Predictable, transparent pricing scales from 10 to 10,000+ candidates without per-seat surprises.",
      },
      {
        q: "Can we brand the candidate experience?",
        a: "Yes — white-label the entire assessment journey with your logo, colors and domain.",
      },
    ],
    ctaEyebrow: "Get started",
    ctaTitle: "Standardize hiring across every team.",
    ctaBody:
      "Give every requisition the same defensible, skills-based bar — and prove quality-of-hire to leadership. Talk to our enterprise team.",
    ctaTicks: ["Dedicated onboarding", "SSO & audit trails", "Volume pricing"],
  },

  /* ── Test type / Coding tests ─────────────────────────────── */
  "coding-tests": {
    crumb: "Test type / Coding tests",
    eyebrow: "Coding tests",
    title: "Identify top developers with live coding and programming tests",
    lead: "Run live coding assessments in 45+ languages with real-world tasks in a secure, fully proctored environment — and hire engineers who actually deliver.",
    ctaLabel: "Try for free",
    ctaHref: routes.pricing,
    stats: [
      { t: "45+ coding languages" },
      { t: "Live VS Code environment" },
      { t: "Fully proctored" },
    ],
    sections: [
      {
        kind: "cards",
        eyebrow: "Key features",
        h2: "Everything you need in a coding test",
        intro: "Real tasks, real environments, real proof of ability.",
        cards: [
          {
            title: "Single & multi-file questions",
            desc: "45+ languages, with multi-file projects in Node.js, Python and Java.",
          },
          {
            title: "Proctoring built in",
            desc: "Video, screen recording, snapshots, mouse tracking and copy-paste prevention.",
          },
          {
            title: "Flexible test duration",
            desc: "Choose 30, 60 or 90 minutes — or set a custom limit per role.",
          },
        ],
      },
      {
        kind: "split",
        num: "1",
        h2: "Coding projects in a proctored VS Code environment",
        body: [
          "Candidates write, run and debug real code in a live VS Code editor on the platform. Multi-file projects in Node.js, Python and Java let you test how they actually build, not just solve puzzles.",
        ],
        bullets: [
          { label: "Real-time evaluation with hidden test cases" },
          { label: "Scored on quality, efficiency and logic" },
          { label: "Comprehensive reporting and analytics" },
        ],
      },
      {
        kind: "grid",
        eyebrow: "What we offer",
        h2: "What does Testlify have to offer?",
        intro: "A complete coding-assessment toolkit for teams that can't afford a mis-hire.",
        cards: [
          {
            title: "Extensive test library",
            desc: "350+ ready-to-use coding and programming tests.",
          },
          {
            title: "Live coding tests",
            desc: "Interactive editor with run, debug and hidden test cases.",
          },
          {
            title: "White labeling",
            desc: "Brand the candidate experience end to end.",
          },
          {
            title: "Customizable assessments",
            desc: "Combine questions, set difficulty and time limits.",
          },
          {
            title: "Advanced analytics",
            desc: "Section-wise breakdowns and global benchmarking.",
          },
          {
            title: "User-friendly interface",
            desc: "Effortless for recruiters and candidates alike.",
          },
        ],
      },
      {
        kind: "chips",
        h2: "Languages and technologies Testlify supports",
        chips: [
          "JavaScript",
          "TypeScript",
          "Python",
          "Java",
          "C",
          "C++",
          "C#",
          "Go",
          "Ruby",
          "Swift",
          "Kotlin",
          "PHP",
          "Rust",
          "Scala",
          "SQL",
          "R",
          "Bash",
          "Perl",
          "Haskell",
          "Elixir",
        ],
      },
      {
        kind: "split",
        num: "2",
        h2: "Effortless integration with your workflow",
        body: [
          "Push results straight into your HR tech stack. Testlify connects to 100+ ATS platforms so coding scores land where your team already works.",
        ],
        cta: { label: "See all integrations", href: routes.integrations },
      },
    ],
    faqs: [
      {
        q: "How are coding tests evaluated?",
        a: "Submissions run against hidden test cases and are scored automatically on correctness, efficiency and edge-case handling, with the option for manual code review.",
      },
      {
        q: "Will this help me make better hiring decisions?",
        a: "Yes. You see how candidates actually write and debug code, not just whether they can answer trivia — a far stronger signal than a resume.",
      },
      {
        q: "Do you support multi-file projects?",
        a: "Yes. Multi-file coding projects are supported in Node.js, Python and Java within a live VS Code environment.",
      },
      {
        q: "Can coding tests be time-limited?",
        a: "Yes — choose 30, 60 or 90 minutes, or set a custom duration per assessment.",
      },
      {
        q: "Which languages support multi-file questions?",
        a: "Node.js, Python and Java currently support full multi-file projects, with 45+ languages available for single-file questions.",
      },
    ],
    ctaEyebrow: "Get started",
    ctaTitle: "Cut through the noise. Hire with clarity.",
    ctaBody:
      "Resumes don't tell you who can code. Give every developer a real task and hire on proof — start in minutes.",
    ctaTicks: ["7-day free trial", "Unlimited assessments", "Cancel anytime"],
  },
};

export const SOLUTION_SLUGS = Object.keys(SOLUTIONS);
