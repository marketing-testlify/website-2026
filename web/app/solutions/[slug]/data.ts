import { routes } from "@/lib/routes";

/* ============================================================
   Solution-detail page data — extracted verbatim from the four
   template-solution-details-*.dc.html prototypes' DATA objects.
   ============================================================ */

export type Bullet = { label: string; href?: string; desc?: string };

export type Testimonial = { quote: string; name: string; role: string };

export type SplitSection = {
  kind: "split";
  num?: string;
  h2: string;
  body: string[];
  bullets?: Bullet[];
  /** Force a single-column bullet list (matches the prototype `blOneCol`). */
  blOneCol?: boolean;
  /** Real per-section image URL (testlify.com asset). Falls back to Shot. */
  img?: string;
  cta?: { label: string; href: string };
};

export type BulletsSection = {
  kind: "bullets";
  eyebrow?: string;
  h2: string;
  body: string[];
  bullets: Bullet[];
  blOneCol?: boolean;
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

export type StepsSection = {
  kind: "steps";
  eyebrow: string;
  h2: string;
  steps: { title: string; desc: string }[];
};

export type Section =
  | SplitSection
  | BulletsSection
  | CardsSection
  | GridSection
  | ChipsSection
  | StepsSection;

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
  /** Per-variant testimonials; falls back to DEFAULT_TESTIMONIALS when omitted. */
  testimonials?: Testimonial[];
  faqs: { q: string; a: string }[];
  faqTitle?: string;
  ctaEyebrow?: string;
  ctaTitle?: string;
  ctaBody?: string;
  ctaTicks?: string[];
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
    testimonials: [
      {
        quote:
          "We cut first-round screening from days to hours. The shortlist Testlify hands us is genuinely job-ready.",
        name: "Priya Nair",
        role: "Head of TA, Fintech scale-up",
      },
      {
        quote:
          "Auto-advancement means every applicant gets a fair, identical evaluation — no matter how many apply.",
        name: "Marcus Bell",
        role: "Talent Partner, SaaS",
      },
      {
        quote:
          "The proctoring and reporting gave our hiring managers confidence to trust scores over gut feel.",
        name: "Sofia Ramirez",
        role: "Recruiting Lead, Retail",
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
    lead: "From developers and DevOps to data analysts, assess real-world skills, cut hiring time in half, and build high-performing tech teams faster. Simulate real-world coding scenarios, automate screening, and reduce mis-hires with expert-crafted, timed questions.",
    ctaLabel: "Try for free",
    ctaHref: routes.pricing,
    stats: [
      { t: "3,500+ validated tests" },
      { t: "45+ coding languages" },
      { t: "100+ ATS integrations" },
    ],
    logos: ["LTIMindtree", "Sonatafy", "Thales", "Third Bridge", "Virtual", "Cogitotech"],
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
    eyebrow: "Coding & programming tests",
    title: "Hire developers on proof of skill, not a resume",
    lead: "Put real code in front of candidates. Testlify's coding tests measure how developers actually build, debug and reason across 45+ languages — auto-scored, proctored and ready in minutes.",
    ctaLabel: "Try for free",
    ctaHref: routes.pricing,
    stats: [
      { t: "45+ programming languages" },
      { t: "Live IDE & real test cases" },
      { t: "Auto-scored in minutes" },
    ],
    sections: [
      {
        kind: "split",
        num: "1",
        h2: "Real coding challenges, not multiple-choice trivia",
        body: [
          "Candidates write and run code in a full in-browser IDE against hidden test cases — so you see working solutions, not memorized definitions. Every submission is scored on correctness, efficiency and code quality.",
        ],
        bullets: [
          { label: "45+ languages & frameworks" },
          { label: "Live IDE with real test cases" },
          { label: "Debugging & code-review tasks" },
          { label: "Auto-scored on correctness & efficiency" },
        ],
        cta: { label: "Browse coding tests", href: routes.testLibrary },
      },
      {
        kind: "cards",
        eyebrow: "Beyond syntax",
        h2: "Assess the full engineering skill set",
        intro:
          "One test type, every developer competency — from fundamentals to real-world problem solving.",
        cards: [
          {
            title: "Language & framework fluency",
            desc: "Python, Java, JavaScript, Go, C#, SQL and 40+ more — test the exact stack of the role.",
          },
          {
            title: "Problem solving & DSA",
            desc: "Algorithmic challenges reveal how candidates reason, optimize and handle edge cases.",
          },
          {
            title: "Live coding & debugging",
            desc: "Pair on a live challenge, or have candidates fix broken code the way they would on the job.",
          },
        ],
      },
      {
        kind: "split",
        num: "2",
        h2: "Fair, cheat-resistant, and defensible",
        body: [
          "Every coding test is proctored by default — webcam snapshots, tab-switch detection and plagiarism checks keep scores trustworthy. Standardized challenges mean every developer is measured against the same bar.",
        ],
        bullets: [
          { label: "Webcam & tab-switch proctoring" },
          { label: "Plagiarism & AI-answer detection" },
          { label: "EEOC-defensible, standardized scoring" },
        ],
        cta: { label: "See how it works", href: routes.productScience },
      },
      {
        kind: "steps",
        eyebrow: "How it works",
        h2: "From role to ranked shortlist in four steps",
        steps: [
          {
            title: "Pick your challenges",
            desc: "Choose from validated coding tests or add your own questions and languages.",
          },
          {
            title: "Invite developers",
            desc: "Share a link or sync to your ATS — candidates code on their own schedule.",
          },
          {
            title: "Auto-score submissions",
            desc: "Hidden test cases grade correctness, efficiency and quality instantly.",
          },
          {
            title: "Shortlist with confidence",
            desc: "Compare ranked results side by side and advance the strongest builders.",
          },
        ],
      },
      {
        kind: "chips",
        h2: "45+ languages and frameworks supported",
        chips: [
          "Python",
          "JavaScript",
          "TypeScript",
          "Java",
          "C#",
          "C++",
          "Go",
          "Ruby",
          "PHP",
          "Swift",
          "Kotlin",
          "Rust",
          "SQL",
          "React",
          "Node.js",
          "Django",
        ],
      },
    ],
    faqs: [
      {
        q: "What are coding tests used for?",
        a: "Coding tests measure a developer's real programming ability — writing, running and debugging code — so you can screen for on-the-job skill instead of relying on resumes or trivia questions.",
      },
      {
        q: "Which programming languages does Testlify support?",
        a: "Testlify supports 45+ languages and frameworks including Python, Java, JavaScript, Go, C#, SQL, React and Node.js, with a full in-browser IDE for every candidate.",
      },
      {
        q: "How are coding tests scored?",
        a: "Submissions run against hidden test cases and are auto-scored on correctness and efficiency in minutes, with code available for manual review when you want a closer look.",
      },
      {
        q: "Can I create my own coding challenges?",
        a: "Yes. Add your own questions, set languages, time limits and passing scores, or send custom challenges for expert review before going live.",
      },
      {
        q: "How do you prevent cheating on coding tests?",
        a: "Every test is proctored by default with webcam snapshots, tab-switch detection and plagiarism plus AI-answer detection, so scores stay defensible.",
      },
    ],
    ctaEyebrow: "Get started",
    ctaTitle: "Stop guessing who can code. Start proving it.",
    ctaBody:
      "Resumes don't compile. Put real challenges in front of every developer and hire the ones who can actually build.",
    ctaTicks: ["7-day free trial", "45+ languages", "Cancel anytime"],
  },

  /* ── Industry / Recruitment ───────────────────────────────── */
  "recruitment-industry": {
    crumb: "Industry / Recruitment",
    eyebrow: "For recruitment teams",
    title: "Empowering recruitment with talent assessments",
    lead: "Time is everything in recruitment. A complete suite of assessments lets you evaluate skills, aptitude and cultural fit efficiently — from pre-employment tests to behavioral assessments, everything you need to identify the right candidates fast.",
    ctaLabel: "Try for free",
    ctaHref: routes.pricing,
    stats: [
      { t: "1,500+ hiring teams" },
      { t: "3,500+ validated tests" },
      { t: "100+ ATS integrations" },
    ],
    sections: [
      {
        kind: "split",
        num: "1",
        h2: "Your partner in talent acquisition",
        body: [
          "Assess candidates across every domain — technical skills, cognitive ability, behavioral traits and more — with customizable assessments that align to your unique requirements.",
          "Gain insight into each candidate's potential and match them to the exact role.",
        ],
        bullets: [
          { label: "Technical & role-specific skills" },
          { label: "Cognitive ability" },
          { label: "Behavioral & personality traits" },
          { label: "Cultural-fit evaluation" },
          { label: "Customizable to your requirements" },
          { label: "Objective, bias-reduced scoring" },
        ],
        cta: { label: "Explore the test library", href: routes.testLibrary },
      },
      {
        kind: "split",
        num: "2",
        h2: "Built on recruitment industry expertise",
        body: [
          "We understand the pressures recruiters face. Assessments are developed alongside HR professionals and recruiters to address real, industry-specific hiring needs — not generic tests bolted onto a job.",
          "Every assessment reflects how the role is actually performed.",
        ],
      },
      {
        kind: "cards",
        eyebrow: "Why Testlify",
        h2: "Everything a modern recruitment team needs",
        intro: "Screen faster, shortlist smarter and give every candidate a great experience.",
        cards: [
          {
            title: "Positive candidate experience",
            desc: "Intuitive interfaces, clear instructions and timely communication keep completion rates high and your employer brand strong.",
          },
          {
            title: "White-label branding",
            desc: "Add your logo, colors and identity across the assessment for a seamless, professional candidate journey.",
          },
          {
            title: "100+ ATS integrations",
            desc: "Connect Testlify to your existing stack, import candidates effortlessly and skip manual data entry.",
          },
          {
            title: "Situational judgment tests",
            desc: "Role-play simulations gauge resilience, decision-making and performance under pressure.",
          },
          {
            title: "Adaptability & leadership",
            desc: "Assess candidates' ability to learn, adapt and step into managerial roles as the landscape shifts.",
          },
          {
            title: "Post-hire assessments",
            desc: "Evaluate onboarding experience, identify training needs and track performance and growth.",
          },
        ],
      },
      {
        kind: "split",
        num: "3",
        h2: "Make your brand the candidate's first impression",
        body: [
          "A powerful white-label solution lets you customize the platform with your own branding. Candidates feel familiarity and connection with your organization at every step — enhancing your employer brand and leaving a polished impression.",
          "Seamless ATS integration then moves results straight into your workflow.",
        ],
        cta: { label: "See how integrations work", href: routes.integrations },
      },
    ],
    faqs: [
      {
        q: "Can Testlify assess how candidates handle high-pressure situations?",
        a: "Yes. Situational judgment tests and role-play simulations assess resilience, decision-making and the ability to perform under pressure.",
      },
      {
        q: "Can it evaluate adaptability and flexibility?",
        a: "Yes. Assessments measure candidates' adaptability to change, ability to learn new technologies and flexibility in navigating an evolving recruitment landscape.",
      },
      {
        q: "Can it evaluate leadership and managerial potential?",
        a: "Testlify provides assessments that evaluate leadership qualities, strategic thinking and the ability to manage teams effectively.",
      },
      {
        q: "How does Testlify handle remote hiring for distributed teams?",
        a: "A secure, user-friendly online platform supports remote assessments, candidate collaboration and real-time feedback for distributed recruitment teams.",
      },
      {
        q: "Does it support post-hire assessments?",
        a: "Yes. Post-hire assessments evaluate onboarding experience, identify training needs and track performance and growth over time.",
      },
    ],
    ctaEyebrow: "Get started",
    ctaTitle: "Cut through the noise. Hire with clarity.",
    ctaBody:
      "Resumes don't tell you everything. Get the insight to hire the right people with assessments that are accurate, automated and unbiased.",
    ctaTicks: ["7-day free trial", "Unlimited assessments", "Cancel anytime"],
  },

  /* ── Industry / Retail ────────────────────────────────────── */
  "retail-industry": {
    crumb: "Industry / Retail",
    eyebrow: "For retail teams",
    title: "Say goodbye to high turnover with retail skills tests",
    lead: "Employment testing for retail helps you hire people with the right skills and the personality to stay and thrive. Make smarter decisions and cut turnover with assessments that match the best talent to your retail roles.",
    ctaLabel: "Try for free",
    ctaHref: routes.pricing,
    stats: [
      { t: "3,500+ validated tests" },
      { t: "65% avg. retail turnover" },
      { t: "100+ ATS integrations" },
    ],
    sections: [
      {
        kind: "split",
        num: "1",
        h2: "Cut turnover, boost retention",
        body: [
          "With an average turnover rate of 65%, retail needs a smarter way to hire. Skill and personality assessments identify candidates with the aptitude — and the temperament — to stay longer.",
          "Retail-specific competency tests measure the skills that actually drive store performance.",
        ],
        bullets: [
          { label: "Cross-selling & upselling" },
          { label: "Visual merchandising" },
          { label: "Customer engagement" },
          { label: "Product knowledge" },
          { label: "Attention to detail" },
          { label: "Literacy & numeracy" },
        ],
        cta: { label: "Explore retail assessments", href: routes.testLibrary },
      },
      {
        kind: "split",
        num: "2",
        h2: "Find the right fit for every retail role",
        body: [
          "Hiring store managers, clerks or sales associates? Retail aptitude tests, customer-service tests and role-specific assessments confirm candidates have the attention to detail and service instinct the job demands.",
          "Behavioral assessments for retail leadership surface adaptability, decision-making and conflict resolution — so you spot tomorrow's leaders today.",
        ],
      },
      {
        kind: "cards",
        eyebrow: "Why Testlify",
        h2: "Everything you need to hire retail talent on proof",
        intro: "Assess real-world retail ability, not resume claims.",
        cards: [
          {
            title: "Situational judgment tests",
            desc: "See how candidates handle difficult customers, inventory shortages and team conflicts before you hire.",
          },
          {
            title: "Retail analytics & data",
            desc: "Measure the ability to read sales reports, KPIs and retail data for smarter decision-making.",
          },
          {
            title: "Product & POS proficiency",
            desc: "Assess familiarity with point-of-sale systems and the retail technology your teams use daily.",
          },
          {
            title: "Customer service aptitude",
            desc: "Evaluate communication, empathy and complaint resolution in realistic service scenarios.",
          },
          {
            title: "Tailored role assessments",
            desc: "Build tests for any retail role from a pre-vetted question pool or your own custom questions.",
          },
          {
            title: "Enterprise security",
            desc: "AI proctoring, plagiarism detection, SOC 2 Type II, ISO 27001 and GDPR compliance.",
          },
        ],
      },
      {
        kind: "split",
        num: "3",
        h2: "Create tailored assessments for every retail role",
        body: [
          "Hiring for more than one position? Design assessments specific to each retail role with Testlify's intuitive builder — incorporate real-life scenarios, keywords and challenges that reflect the fast-paced, customer-centric floor.",
          "Pick from the pre-vetted question pool or write your own.",
        ],
        cta: { label: "See pricing", href: routes.pricing },
      },
    ],
    faqs: [
      {
        q: "Can Testlify assess proficiency with retail software and technology?",
        a: "Yes. Testlify measures candidates' familiarity and proficiency with retail software, point-of-sale systems and the technology used across the industry.",
      },
      {
        q: "Can it evaluate inventory management and stock control skills?",
        a: "Assessments cover inventory management concepts including stock control, ordering and replenishment to gauge skills in this critical retail area.",
      },
      {
        q: "Can it evaluate problem-solving in retail-specific scenarios?",
        a: "Assessments incorporate retail scenarios to evaluate critical thinking, problem-solving and decision-making in real-life situations.",
      },
      {
        q: "Can it measure understanding of retail trends and consumer behavior?",
        a: "Yes — assessments measure knowledge of the latest retail trends, consumer behavior and the ability to adapt to evolving customer preferences.",
      },
      {
        q: "Does it assess handling customer complaints and conflict?",
        a: "Yes. Testlify assesses skills in handling complaints, resolving conflict and turning challenging situations into positive outcomes.",
      },
      {
        q: "How do you keep retail assessments relevant and up to date?",
        a: "Assessments are created by industry experts and updated regularly to stay relevant to the current retail landscape.",
      },
    ],
    ctaEyebrow: "Get started",
    ctaTitle: "Cut through the noise. Hire with clarity.",
    ctaBody:
      "Resumes don't tell you everything. Get the insight to hire the right retail people with assessments that are accurate, automated and unbiased.",
    ctaTicks: ["7-day free trial", "Unlimited assessments", "Cancel anytime"],
  },

  /* ── Audited industry pages (17-07 design export) ─────────── */
  "it-industry": {
    crumb: "Industry / IT & technology",
    eyebrow: "For IT teams",
    title: "The all-in-one talent assessment platform built for IT teams",
    lead: "From developers and DevOps to data analysts, assess real-world skills, cut hiring time in half, and build high-performing tech teams faster. Simulate real-world coding scenarios, automate screening, and reduce mis-hires with expert-crafted, timed questions.",
    ctaLabel: "Try for free",
    ctaHref: routes.pricing,
    stats: [{ t: "3,500+ validated tests" }, { t: "45+ coding languages" }, { t: "100+ ATS integrations" }],
    logos: ["LTIMindtree", "Sonatafy", "Thales", "Third Bridge", "Virtual", "Cogitotech"],
    sections: [
      {
        kind: "split",
        num: "1",
        img: "https://testlify.com/wp-content/uploads/2024/11/Tailored-assessments-for-the-IT-Industry.png",
        h2: "Hire the right tech talent with real-world skill validation",
        body: ["Testlify's skills assessment platform is designed by developers for developers, with interactive coding environments, 45+ programming language-specific challenges, and tasks that mimic on-the-job responsibilities."],
        bullets: [
          { label: "Full-stack development" },
          { label: "Frontend (React, Angular, Vue)" },
          { label: "Backend (Node.js, Java, Python)" },
          { label: "Data science and analytics" },
          { label: "QA & automation testing" },
          { label: "DevOps & cloud engineers" }
        ],
        cta: { label: "Explore IT assessments", href: routes.testLibrary }
      },
      {
        kind: "split",
        num: "2",
        img: "https://testlify.com/wp-content/uploads/2024/11/Problem-solving-and-logical-reasoning-assessment.png",
        h2: "Assess tech talent in one platform with 15+ interactive question types",
        body: [
          "From MCQs and coding simulations to system design and debugging challenges, Testlify gives you all the tools to assess IT candidates on one unified platform at scale.",
          "You don't need multiple tools or coding platforms to evaluate your candidates — whether you're hiring a Python developer, a React engineer, or a cloud architect."
        ],
        bullets: [
          { label: "Create role-specific assessments using 15+ dynamic question types" },
          { label: "Mix coding questions, real-world challenges, and logic tests" },
          { label: "Simulate job scenarios for frontend, backend, full-stack, data, QA, and DevOps roles" },
          { label: "Automatically rank candidates based on performance, accuracy, and efficiency" }
        ]
      },
      {
        kind: "split",
        num: "3",
        img: "https://testlify.com/wp-content/uploads/2024/11/Streamline-your-hiring-process.png",
        h2: "Cost-effective at scale",
        body: [
          "Our skills assessment for IT industry is built to help companies hire smart and spend wiser — designed for enterprises that demand high-volume hiring without high costs.",
          "Testlify helps enterprise tech teams reduce cost-per-hire and recruiter hours through automation, while offering scalable, transparent pricing.",
          "Its data-driven assessments cut down on mis-hires and provide measurable ROI by tracking quality and performance impact in one unified platform."
        ],
        cta: { label: "See pricing", href: routes.pricing }
      },
      {
        kind: "cards",
        eyebrow: "Why Testlify",
        h2: "Enterprise-ready. Scalable. Built for global tech hiring",
        intro: "Designed for high-growth and global organizations, Testlify delivers a scalable way to assess tech talent across regions, roles, and time zones.",
        cards: [
          { title: "Real-world coding environments", desc: "No theoretical fluff. Assess candidates' true capabilities in live coding environments that mimic the tools your team actually uses." },
          { title: "Automated, enterprise-grade evaluation", desc: "Detailed logic-based scoring helps your hiring teams make confident, data-backed decisions." },
          { title: "Support for 45+ tech stacks", desc: "Whether you're hiring for Python, Go, React, SQL, or legacy systems, assess candidates in the languages and frameworks that matter to your teams." },
          { title: "Enterprise-level security & compliance", desc: "Anti-cheating tools like AI proctoring, IP locking and plagiarism detection ensure test integrity at scale, with full GDPR and ISO compliance." },
          { title: "Global benchmarking", desc: "Access real-time insights and performance comparisons against a global candidate pool to spot top talent instantly." },
          { title: "Fully integratable with your hiring ecosystem", desc: "From 100+ ATS integrations and Slack notifications to API access, Testlify fits into your current workflow, not the other way around." }
        ]
      },
      {
        kind: "split",
        num: "4",
        img: "https://testlify.com/wp-content/uploads/2024/09/Seamless-integration-and-customization.png",
        h2: "Seamless integration and customization",
        body: [
          "We understand that every organization has unique requirements. Testlify seamlessly integrates with your existing recruitment systems, making the transition effortless.",
          "Customize IT skills assessments to align with your company's values, specific job requirements, and industry standards — so every assessment accurately reflects the skills needed for success in your organization."
        ]
      }
    ],
    faqs: [
      { q: "Is Testlify suitable for both small startups and large enterprises in the IT industry?", a: "Yes, Testlify is designed to cater to the hiring needs of organizations of all sizes in the IT industry. Whether you're a small startup or a large enterprise, Testlify's customizable assessments can help you find the right talent." },
      { q: "Can Testlify assess soft skills in addition to technical skills?", a: "While Testlify primarily focuses on assessing technical skills, we also offer the option to include soft skill evaluations in the assessment process. Our platform allows you to customize assessments according to your specific requirements, ensuring a holistic evaluation of candidates." },
      { q: "How secure is the Testlify platform in terms of protecting candidate data?", a: "We take data security seriously at Testlify. Our platform adheres to industry-leading security standards to protect candidate data. We utilize encryption protocols, secure servers, and strict access controls to ensure the confidentiality and integrity of all information stored on our platform." },
      { q: "Can Testlify integrate with our existing applicant tracking system (ATS)?", a: "Yes, Testlify seamlessly integrates with popular applicant tracking systems (ATS), making it easy to incorporate our talent assessment tool into your existing hiring workflow. Our integration capabilities ensure a smooth transition and efficient collaboration between Testlify and your ATS." },
      { q: "Are the assessments provided by Testlify customizable?", a: "Absolutely! We understand that each organization has unique hiring needs. With Testlify, you can customize assessments to align with your company's specific requirements, technical stacks, and industry standards. Tailor the assessments to accurately evaluate candidates for the roles you are hiring for." },
      { q: "Can Testlify handle a large volume of candidates during peak hiring seasons?", a: "Yes, Testlify is built to handle high volumes of candidates efficiently. Our platform is designed to scale, ensuring optimal performance even during peak hiring seasons. You can trust Testlify to provide a seamless experience, regardless of the number of candidates you need to assess." }
    ],
    faqTitle: "Frequently asked questions (FAQs)",
    ctaEyebrow: "Get started",
    ctaTitle: "Cut through the noise, hire with clarity.",
    ctaBody: "Resumes don't tell you everything! Testlify gives you the insights you need to hire the right people with skills assessments that are accurate, automated, and unbiased.",
    ctaTicks: ["7-day free trial", "Unlimited assessments", "Cancel anytime"]
  },
  "bpo-industry": {
    crumb: "Industry / BPO",
    eyebrow: "For BPO teams",
    title: "Find top talent with Testlify in the BPO industry",
    lead: "As a recruiter in the BPO industry, you know the importance of finding the right candidate for the job. Hiring the wrong person can be a costly mistake that can impact your business's productivity and reputation. That's where Testlify comes in.",
    ctaLabel: "Try for free",
    ctaHref: routes.pricing,
    stats: [{ t: "3,500+ validated tests" }, { t: "Comms & aptitude tests" }, { t: "16+ languages" }],
    logos: ["LTIMindtree", "Sonatafy", "Thales", "Third Bridge", "Virtual", "Cogitotech"],
    sections: [
      {
        kind: "split",
        img: "https://testlify.com/wp-content/uploads/2024/10/Get-targeted-insights-about-your-candidates-1024x1024.png",
        h2: "Get targeted insights about your candidates",
        body: [
          "Our BPO industry assessments are tailored to give you relevant insights about your candidates. We understand each industry has unique requirements, and our tests cover a range of competencies essential for success in BPO.",
          "Assessments cover communication skills, problem-solving, analytical abilities and more — so you get the most relevant information about your candidates and make informed hiring decisions."
        ]
      },
      {
        kind: "split",
        img: "https://testlify.com/wp-content/uploads/2024/09/Create-your-own-pre-hiring-assessments-with-ease.png",
        h2: "Create your own pre-hiring assessments with ease",
        body: [
          "Creating pre-hiring assessments for the BPO industry has never been easier. Our user-friendly platform lets you create and customize assessments to fit your specific hiring needs.",
          "Choose from a range of question types to evaluate candidates' knowledge, cognitive abilities and behavioral traits. Say goodbye to time-consuming, expensive traditional hiring and streamline your process with Testlify."
        ]
      },
      {
        kind: "split",
        img: "https://testlify.com/wp-content/uploads/2024/10/Why-choose-Testlify-for-hiring-in-the-BPO-industry-1.png",
        h2: "Why choose Testlify for hiring in the BPO industry?",
        body: ["Our assessments are tailored to the unique needs of the BPO industry, ensuring you hire the most qualified candidates for your organization."],
        blOneCol: true,
        bullets: [
          { label: "Vast library of pre-built tests" },
          { label: "Customizable assessments" },
          { label: "Accurate assessment of candidates' skills" },
          { label: "Quick and easy setup" },
          { label: "Time and cost-effective" }
        ]
      },
      {
        kind: "split",
        img: "https://testlify.com/wp-content/uploads/2024/09/Effortlessly-manage-candidates-with-Testlifys-ATS-integration.png",
        h2: "Effortlessly manage candidates with Testlify's ATS integration",
        body: ["Simplify your hiring process with Testlify's ATS integration, which seamlessly merges our talent assessments with your ATS. Streamline candidate management and focus on what matters most — finding the right talent for your team."],
        cta: { label: "View our test library", href: routes.testLibrary }
      },
      {
        kind: "split",
        img: "https://testlify.com/wp-content/uploads/2024/10/Expansive-hiring-process-for-the-BPO-industry-1-1024x1024.png",
        h2: "Expansive hiring process for the BPO industry",
        body: ["Everything you need to run a fair, reliable BPO hiring process at scale."],
        blOneCol: true,
        bullets: [
          { label: "A comprehensive test library with a wide range of assessments" },
          { label: "Customizable assessments tailored to your specific needs" },
          { label: "Easy-to-use platform to manage candidates and track progress" },
          { label: "Reliable results that accurately measure candidate performance" },
          { label: "Unbiased assessments that ensure a fair selection process" }
        ],
        cta: { label: "Try for free", href: routes.pricing }
      },
      {
        kind: "bullets",
        eyebrow: "Test coverage",
        h2: "Accurate insights into candidates' skills and aptitudes",
        body: ["Our assessments are designed to provide you with accurate insights into candidates' skills and aptitudes. With our platform, you can test candidates' knowledge, cognitive abilities, and behavioral traits to make informed hiring decisions."],
        bullets: [
          { label: "Communication Skills" },
          { label: "Customer support" },
          { label: "Time Management" },
          { label: "Teamwork" },
          { label: "Problem solving" },
          { label: "Customer Service" }
        ],
        cta: { label: "View our test library", href: routes.testLibrary }
      }
    ],
    faqs: [
      { q: "What are the common skills required for a BPO job?", a: "Communication skills, customer service skills, problem-solving skills, adaptability, teamwork, and computer literacy." },
      { q: "How can Testlify help me in hiring for BPO roles?", a: "Testlify offers a comprehensive test library with customizable assessments covering various BPO skills, helping you find top-performing candidates quickly and easily." },
      { q: "Can I track candidates' progress through Testlify?", a: "Yes, Testlify's easy-to-use platform allows you to manage candidates and track their progress throughout the hiring process." },
      { q: "Can I tailor the assessments to my specific needs?", a: "Yes, Testlify's customizable assessments can be tailored to fit your specific hiring needs, including entry-level or experienced roles." },
      { q: "Are the assessments unbiased and fair?", a: "Yes, Testlify's assessments are designed to eliminate any chance of discrimination and ensure a fair selection process." }
    ],
    faqTitle: "Frequently asked questions (FAQs)"
  },
  "edtech-industry": {
    crumb: "Industry / Edtech",
    eyebrow: "For edtech teams",
    title: "Maximizing your hiring success in the Edtech industry",
    lead: "As the Edtech industry continues to grow, it's more important than ever to find the right candidates for your team. Testlify helps you do exactly that with a comprehensive assessment of each candidate's skills — giving you accurate insights into their knowledge and abilities, so you focus only on candidates who meet your requirements.",
    ctaLabel: "Try for free",
    ctaHref: routes.pricing,
    stats: [{ t: "3,500+ validated tests" }, { t: "Role & cognitive tests" }, { t: "Data-driven results" }],
    logos: ["LTIMindtree", "Sonatafy", "Thales", "Third Bridge", "Virtual", "Cogitotech"],
    sections: [
      {
        kind: "split",
        img: "https://testlify.com/wp-content/uploads/2024/11/Assessing-key-competencies-1-1024x1024.png",
        h2: "Assessing key competencies",
        body: [
          "To ensure that your Edtech team is staffed with the most qualified candidates, it's important to evaluate their competencies.",
          "Our pre-designed assessments are specifically tailored to measure the essential competencies for the Edtech industry.",
          "By using our assessments, you can be sure that you are hiring candidates who possess the necessary skills and knowledge to succeed in the fast-paced world of EdTech."
        ]
      },
      {
        kind: "split",
        img: "https://testlify.com/wp-content/uploads/2024/11/Enhancing-the-quality-of-hire-1-1024x1024.png",
        h2: "Enhancing the quality of hire",
        body: [
          "Selecting the right candidates for your Edtech team is critical to its success. Testlify provides a reliable solution to help you identify the best talent for your team.",
          "Our assessments are meticulously designed to evaluate the competencies and skills required to excel in the EdTech industry. This helps you to improve the quality of your hiring decisions, leading to a more productive and successful team overall.",
          "Hiring the right talent enables you to deliver a better user experience, generate innovative solutions for the market, and have a positive impact on education."
        ]
      },
      {
        kind: "split",
        img: "https://testlify.com/wp-content/uploads/2024/11/Optimizing-the-recruitment-process-with-ATS-integration.png",
        h2: "Optimizing the recruitment process with ATS integration",
        body: [
          "Improve your candidate management process with Testlify's ATS integration. By seamlessly integrating our talent assessments with your existing ATS system, you can simplify your hiring process and concentrate on the most critical task: finding the right talent for your team.",
          "With Testlify's ATS integration, managing candidates becomes effortless, enabling you to streamline your workflow and improve overall recruitment efficiency."
        ],
        cta: { label: "View our test library", href: routes.testLibrary }
      },
      {
        kind: "bullets",
        eyebrow: "Test coverage",
        h2: "Gain valuable insight into candidates' skills",
        body: ["Our assessments are designed to provide you with accurate insights into candidates' skills and aptitudes. With our platform, you can test candidates' knowledge, cognitive abilities, and behavioral traits to make informed hiring decisions."],
        bullets: [
          { label: "Communication Skills" },
          { label: "Customer support" },
          { label: "Time Management" },
          { label: "Teamwork" }
        ],
        cta: { label: "View our test library", href: routes.testLibrary }
      },
      {
        kind: "split",
        img: "https://testlify.com/wp-content/uploads/2024/11/Why-choose-Testlify-for-hiring-in-the-Edtech-industry-1-1024x1024.png",
        h2: "Why choose Testlify for hiring in the Edtech industry?",
        body: [
          "Testlify offers a specialized hiring process designed for the Edtech industry, enabling recruiters to evaluate candidates' skills with precision.",
          "Our data-driven results provide an objective evaluation of candidates, increasing the efficiency of the recruitment process."
        ],
        blOneCol: true,
        bullets: [
          { label: "Assess a Candidate's Skills" },
          { label: "Curate your own Assessments" },
          { label: "Objective and Data-Driven Results" },
          { label: "Increased Efficiency" }
        ],
        cta: { label: "Try for free", href: routes.pricing }
      }
    ],
    faqs: [
      { q: "What are the benefits of using Testlify for hiring in the Edtech industry?", a: "Testlify offers customizable assessments, objective and data-driven results, increased efficiency, and ATS integration to optimize the recruitment process." },
      { q: "Why should I choose Testlify for hiring in the Edtech industry?", a: "Testlify provides reliable solutions to assess candidates' skills and competencies, leading to better hiring decisions and an efficient recruitment process." },
      { q: "How does Testlify ensure the accuracy of assessment results?", a: "Testlify's assessments are meticulously designed to evaluate the competencies and skills required to excel in the EdTech industry. The platform also uses data-driven results to ensure accuracy." },
      { q: "Can I create my own assessments on Testlify?", a: "Yes, Testlify offers customizable assessments that allow you to curate assessments tailored to your specific needs." },
      { q: "How does Testlify help organizations hire the right talent for their team?", a: "By assessing candidates' skills and competencies, Testlify provides valuable insights into candidates' abilities, helping organizations make informed hiring decisions to ensure the right talent is hired for their team." }
    ],
    faqTitle: "Frequently asked questions (FAQs)"
  },
  "health-care-industry": {
    crumb: "Industry / Health care",
    eyebrow: "For healthcare teams",
    title: "Less complexity. More insights.",
    lead: "Screen, compare and select the best healthcare candidates with accurate, reliable insights.",
    ctaLabel: "Try for free",
    ctaHref: routes.pricing,
    stats: [{ t: "3,500+ validated tests" }, { t: "Cognitive & SJT tests" }, { t: "EEOC-defensible" }],
    logos: ["LTIMindtree", "Sonatafy", "Thales", "Third Bridge", "Virtual", "Cogitotech"],
    sections: [
      {
        kind: "cards",
        eyebrow: "The challenge",
        h2: "Hiring healthcare workers isn't easy",
        cards: [
          { title: "Long hiring process", desc: "Complex requirements for healthcare, long evaluation process, and endless interviews are slowing down your ability to hire the best medical staff." },
          { title: "High agency costs", desc: "Your inability to manage your recruitment internally is forcing you to rely on hiring agencies that are increasing the cost of hiring every year." },
          { title: "Lack of insights", desc: "Reliance on resumes has led to hours spent screening resumes, unnecessary interviews, and no reliable insights to select the best healthcare personnel." }
        ]
      },
      {
        kind: "split",
        img: "https://testlify.com/wp-content/uploads/2024/11/Stop-relying-on-resumes.png",
        h2: "Stop relying on resumes",
        body: ["Talent assessments reveal candidates' skills and aptitudes to help you predict workplace success."],
        blOneCol: true,
        bullets: [
          { label: "Exaggerated experience" },
          { label: "Subjective interviews" },
          { label: "Fancy qualifications" }
        ],
        cta: { label: "What are talent assessments?", href: routes.solutions }
      },
      {
        kind: "split",
        img: "https://testlify.com/wp-content/uploads/2024/11/A-growing-test-library.png",
        h2: "A growing test library",
        body: ["Select from a growing library of high-demand skills and aptitude tests to gain deeper insights into healthcare candidates."],
        cta: { label: "View our test library", href: routes.testLibrary }
      },
      {
        kind: "split",
        img: "https://testlify.com/wp-content/uploads/2024/11/A-recruiters-dream.png",
        h2: "A recruiter's dream",
        body: [],
        blOneCol: true,
        bullets: [
          { label: "No technical expertise is required." },
          { label: "Select from predefined roles." },
          { label: "Send unlimited invitations." }
        ],
        cta: { label: "Book a demo", href: routes.contact }
      },
      {
        kind: "split",
        img: "https://testlify.com/wp-content/uploads/2024/11/Diversity-is-standard.png",
        h2: "Diversity is standard",
        body: [
          "76% of job seekers report that they consider diversity an important factor when evaluating companies and job offers.",
          "Limit the impact of bias and prejudice to build a diverse and inclusive workforce."
        ],
        cta: { label: "More on diversity", href: routes.solutions }
      },
      {
        kind: "split",
        img: "https://testlify.com/wp-content/uploads/2024/11/Hire-for-the-long-term.png",
        h2: "Hire for the long-term",
        body: ["Gain insights to identify suitable candidates for every position and increase employee retention to build a successful healthcare organization."]
      },
      {
        kind: "split",
        img: "https://testlify.com/wp-content/uploads/2024/11/Less-guessing-better-assessing.png",
        h2: "Less guessing, better assessing!",
        body: ["Our talent assessments have predefined tests to help you assess healthcare candidates' skills and aptitudes, including:"],
        bullets: [
          { label: "Cognitive Ability Tests" },
          { label: "Situational Judgement" },
          { label: "Personality & Culture" },
          { label: "Language Tests" },
          { label: "Software Skills Tests" },
          { label: "Programming Tests" }
        ]
      }
    ],
    faqs: [
      { q: "How are talent assessments used in the hiring process?", a: "Talent assessments are generally used to evaluate candidates as part of the pre-screening process. These assessments evaluate various skills relevant to a job role and can include any relevant tests. The feedback from these tests can then give organizations the necessary insights to compare and select the best talent for a role." },
      { q: "Are talent assessments reliable?", a: "Our talent assessments are highly accurate and have been tested to ensure their results are consistent even when taken again. Our assessments can help reduce the complexity of testing candidates, minimizing the resources needed and providing powerful insights for organizations to make informed decisions." },
      { q: "Can talent assessments predict a candidate's performance in the workplace?", a: "Testing a candidate's technical skills and aptitudes can help predict whether a candidate is capable of performing in a specific role. Our tests can evaluate numerous skills including general aptitudes, language, programming, software, or role-specific skills." },
      { q: "Why test a candidate's language skills?", a: "Testing an applicant's skills and aptitudes will give you deeper insights into their actual ability and help your selection process. This will ultimately increase your recruitment team's ability to compare candidates' skills with real-time scoring and insights that go beyond what they see on resumes." },
      { q: "How do I customize tests?", a: "Assessments can be customized by adding any additional skill test from our library of tests. These can be a combination of aptitude, language, programming, software, or role-specific skills." },
      { q: "What is the duration of a test?", a: "Each test will evaluate one skill, and you may use several. Each is about 10 minutes in duration, and can be customized to test for more skills which will affect the total time of an assessment." },
      { q: "How do I schedule a demo?", a: "You can schedule a demo by filling out the request for a demo and we will contact you to make arrangements." }
    ],
    faqTitle: "Frequently asked questions (FAQs)"
  },
  "hospitality-industry": {
    crumb: "Industry / Hospitality",
    eyebrow: "For hospitality teams",
    title: "Transform hiring in the hospitality industry",
    lead: "The hospitality industry runs on people — and finding the right ones fast is the difference between a great guest experience and a bad review. Testlify helps you screen for service, communication and composure at scale, so you hire staff who are ready for the floor.",
    ctaLabel: "Try for free",
    ctaHref: routes.pricing,
    stats: [{ t: "3,500+ validated tests" }, { t: "Role & personality tests" }, { t: "94% candidate satisfaction" }],
    logos: ["LTIMindtree", "Sonatafy", "Thales", "Third Bridge", "Virtual", "Cogitotech"],
    sections: [
      {
        kind: "cards",
        eyebrow: "The challenge",
        h2: "Hiring hospitality staff isn't easy",
        cards: [
          { title: "Staff shortages", desc: "According to a recent report, 97% of surveyed hotels state they are experiencing staff shortages, leading to high competition for qualified candidates." },
          { title: "Slow hiring process", desc: "High volumes of applications are slowing down your hiring process, leading to a loss of revenue, productivity and candidates to the competition." },
          { title: "High staff turnover", desc: "Vetting candidates is often compromised to fill open positions and relies on subjective resumes, which adversely affects hiring decisions." }
        ]
      },
      {
        kind: "split",
        img: "https://testlify.com/wp-content/uploads/2024/11/Overcoming-hiring-challenges-in-the-hospitality-industry.png",
        h2: "Overcoming hiring challenges in the hospitality industry",
        body: [
          "The hospitality industry is highly dynamic and demanding, requiring individuals with exceptional skills, a customer-centric mindset, and the ability to thrive in a fast-paced environment.",
          "However, identifying these qualities in candidates can be a daunting task. Traditional hiring methods often fall short, leading to poor hiring decisions and a high turnover rate."
        ]
      },
      {
        kind: "split",
        img: "https://testlify.com/wp-content/uploads/2024/11/Discover-the-power-of-Testlify-in-the-hospitality-industry.png",
        h2: "Discover the power of Testlify in the hospitality industry",
        body: ["Testlify is a cutting-edge talent assessment tool designed specifically for the hospitality industry. Our platform offers a range of scientifically validated assessments and simulations that provide deep insights into a candidate's abilities, personality traits, and job fit. By leveraging the power of data and analytics, Testlify revolutionizes the way you hire in the hospitality industry."]
      },
      {
        kind: "split",
        img: "https://testlify.com/wp-content/uploads/2024/11/Easy-to-create.png",
        h2: "Easy to create",
        body: [],
        blOneCol: true,
        bullets: [
          { label: "No technical expertise is required." },
          { label: "Select from predefined roles." },
          { label: "Send unlimited invitations." }
        ],
        cta: { label: "Book a Demo", href: routes.contact }
      },
      {
        kind: "split",
        img: "https://testlify.com/wp-content/uploads/2024/11/Foster-diversity.png",
        h2: "Foster diversity",
        body: [
          "Employer biases influence the perception of candidates and affect their decision-making.",
          "Limit the impact of bias and prejudice to build a diverse and inclusive workforce."
        ],
        cta: { label: "More on diversity", href: routes.solutions }
      },
      {
        kind: "split",
        img: "https://testlify.com/wp-content/uploads/2024/11/Increase-retention-1.png",
        h2: "Increase retention",
        body: ["Gain insights to identify suitable candidates for every position and increase employee retention to build a successful organization."]
      }
    ],
    faqs: [
      { q: "How can Testlify help me hire better in the hospitality industry?", a: "Testlify provides skills-based assessments tailored to hospitality roles, evaluating service orientation, communication, problem-solving and role-specific knowledge — so you identify candidates who will perform well and stay longer." },
      { q: "Can Testlify handle high-volume hospitality hiring?", a: "Yes. Testlify is built for volume — send unlimited invitations, screen thousands of applicants automatically, and shortlist top candidates in hours instead of weeks." },
      { q: "Does Testlify offer assessments for specific hospitality roles?", a: "Yes. Choose from predefined roles across front desk, housekeeping, food and beverage, guest services and management, or customize assessments to match your specific requirements." },
      { q: "Can Testlify assess soft skills like communication and customer service?", a: "Absolutely. Alongside role-specific knowledge, Testlify measures communication, empathy, composure and situational judgment — the soft skills that define great hospitality staff." },
      { q: "How does Testlify reduce staff turnover in hospitality?", a: "By hiring for genuine fit — attitude, resilience and service mindset — rather than resumes alone, you make better hiring decisions that lead to longer tenure and stronger performance." },
      { q: "Does Testlify integrate with our existing hiring tools?", a: "Yes. Testlify integrates natively with 100+ ATS and HR platforms, so candidate data and assessment results flow straight into your existing workflow." },
      { q: "How does Testlify ensure a fair and unbiased hiring process?", a: "Testlify automates scoring against objective criteria, removing human bias and giving every candidate the same fair, consistent evaluation — supporting diverse and defensible hiring." }
    ],
    faqTitle: "Frequently asked questions (FAQs)"
  },
  "media-industry": {
    crumb: "Industry / Media",
    eyebrow: "For media teams",
    title: "Skills assessments for the Media industry",
    lead: "Recruiters in the media industry face the challenge of hiring top-tier creative talent, ensuring alignment with evolving digital trends and evaluating diverse skill sets. Testlify's skills assessments for media use engaging, perceptive tests to validate candidates' skills — removing uncertainty from the hiring process.",
    ctaLabel: "Try for free",
    ctaHref: routes.pricing,
    stats: [{ t: "3,500+ validated tests" }, { t: "Creative & soft-skill tests" }, { t: "Role-specific assessments" }],
    logos: ["LTIMindtree", "Sonatafy", "Thales", "Third Bridge", "Virtual", "Cogitotech"],
    sections: [
      {
        kind: "split",
        img: "https://testlify.com/wp-content/uploads/2024/11/Upgrade-your-talent-search-for-media-industry-professionals.png",
        h2: "Upgrade your talent search for media industry professionals",
        body: ["Find qualified, skilled candidates by assessing them across all aspects — and hire the best for your organization."],
        blOneCol: true,
        bullets: [
          { label: "Identify top-tier media professionals" },
          { label: "Use excellent features for accurate insights" },
          { label: "Customize assessments to match your industry requirements" },
          { label: "Experience a seamless media hiring workflow" }
        ],
        cta: { label: "Explore features", href: routes.solutions }
      },
      {
        kind: "split",
        img: "https://testlify.com/wp-content/uploads/2024/11/Curated-role-specific-assessments-for-the-media-industry.png",
        h2: "Curated role-specific assessments for the media industry",
        body: ["Skills assessment is the key to identifying the perfect fit for your team's unique roles. Discover unparalleled efficiency and accuracy as you customize assessments."],
        blOneCol: true,
        bullets: [
          { label: "Assess writers, editors and content creators" },
          { label: "Evaluate social media strategists and managers" },
          { label: "Gauge the skills of audio and video professionals" },
          { label: "Customize assessments for your unique media positions" }
        ],
        cta: { label: "Check out our test library", href: routes.testLibrary }
      },
      {
        kind: "split",
        img: "https://testlify.com/wp-content/uploads/2024/11/Soft-skills-to-assess-for-Media-industry-role.png",
        h2: "Soft skills to assess for Media industry roles",
        body: ["Build an amazing media team by assessing essential soft skills — measuring every skill required for any role you're hiring for with precision."],
        blOneCol: true,
        bullets: [
          { label: "Communication skills" },
          { label: "Language proficiency skills" },
          { label: "Creativity skills" },
          { label: "Collaboration skills" },
          { label: "Time management skills" }
        ]
      },
      {
        kind: "split",
        img: "https://testlify.com/wp-content/uploads/2024/11/What-do-we-have-for-you-to-hire-media-industry-professionals.png",
        h2: "What do we have for you to hire media industry professionals?",
        body: ["We've proven to be a catalyst for enhancing efficiency in the quest for top-tier media talent. Explore our comprehensive assessments, tailor-made for diverse media roles, and leverage customizable tests aligned with your unique hiring goals."],
        blOneCol: true,
        bullets: [
          { label: "Cutting-edge technology for precise evaluations" },
          { label: "Comprehensive assessments for diverse media roles" },
          { label: "Customizable tests to align with your hiring goals" },
          { label: "Proven success in enhancing recruitment efficiency" }
        ],
        cta: { label: "Book a demo", href: routes.contact }
      }
    ],
    faqs: [
      { q: "How do you assess candidate skills to hire in the media industry?", a: "Evaluate candidate skills in the media industry through a combination of portfolio review and skills assessments tailored to specific job requirements." },
      { q: "What is a skills assessment test in media industry hiring?", a: "A skills assessment test in media hiring gauges candidates' abilities through tasks related to their role, ensuring alignment with job expectations." },
      { q: "What skills assessment tests should be incorporated for hiring freshers in the media industry?", a: "For freshers in media, the skills assessment test should cover basic industry knowledge, creativity, communication, and adaptability, offering them a fair entry point." },
      { q: "Which tests are useful in hiring decision in media industry?", a: "Effective tests in media hiring include role-specific assignments, industry-related case studies, and behavioral assessments, aiding informed decisions." },
      { q: "What are the hard and soft skills to be assessed when hiring for media industry roles?", a: "Media industry hiring assesses hard skills like video editing, graphic design, and journalism, alongside soft skills such as communication, teamwork, and creativity." }
    ],
    faqTitle: "Frequently asked questions (FAQs)"
  },
};

export const SOLUTION_SLUGS = Object.keys(SOLUTIONS);

/* ============================================================
   Shared always-on bands — every solution page shows the same
   testimonials (unless a variant overrides), ATS logos and awards,
   matching the prototypes' TEST_D / ATS_D / AWARDS_D defaults.
   ============================================================ */

export const DEFAULT_TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "We cut first-round screening from days to hours. The shortlist Testlify hands us is genuinely job-ready.",
    name: "Priya Nair",
    role: "Head of TA, Fintech scale-up",
  },
  {
    quote:
      "Every applicant gets a fair, identical evaluation — no matter how many apply.",
    name: "Marcus Bell",
    role: "Talent Partner, SaaS",
  },
  {
    quote:
      "The proctoring and reporting gave our hiring managers confidence to trust scores over gut feel.",
    name: "Sofia Ramirez",
    role: "Recruiting Lead, Retail",
  },
];

export const ATS_LOGOS = [
  "Greenhouse",
  "Lever",
  "Workday",
  "BambooHR",
  "Zoho Recruit",
  "SAP SuccessFactors",
  "Ashby",
  "JazzHR",
];

export const AWARDS: { t: string; s: string }[] = [
  { t: "High Performer", s: "G2 · 2026" },
  { t: "Easiest To Use", s: "G2 · 2026" },
  { t: "Best Support", s: "G2 · 2026" },
  { t: "Momentum Leader", s: "G2 · 2026" },
];
