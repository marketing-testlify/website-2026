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

  /* ── Use-case pages (17-07 export) ─────────────────── */
  "lateral-hiring": {
    crumb: "Use case / Lateral hiring",
    eyebrow: "For lateral hiring",
    title: "Find the perfect fit with Testlify's lateral hiring software",
    lead: "Screen, assess and find experienced candidates faster with our lateral hiring software. Unlock exceptional, seasoned talent with an intuitive platform and eliminate potential mismatches.",
    ctaLabel: "Try for free",
    ctaHref: routes.pricing,
    stats: [{ t: "1,700+ role tests" }, { t: "5,000+ job roles" }, { t: "50+ industries" }],
    logos: ["LTIMindtree", "Sonatafy", "Thales", "Third Bridge", "Virtual", "Cogitotech"],
    sections: [
      { kind: "split", img: "https://testlify.com/wp-content/uploads/2024/09/Land-the-most-skilled-professionals-with-confidence-and-clarity.png", h2: "Land the most skilled professionals with confidence and clarity", body: ["Evaluate experienced candidates' skills to ensure they align perfectly with your job requirements. Our tailored assessments gauge how well lateral hires adapt to new environments through behavioral, psychometric and cognitive tests — helping you minimize turnover."], bullets: [{ label: "Over 1,700 tests for 5,000+ job roles across 50+ industries" }, { label: "Discrete screening tools to evaluate, compare and select top-tier candidates" }, { label: "Assess in-demand professionals anywhere in the world with our multilingual feature" }], cta: { label: "Try for free", href: routes.pricing } },
      { kind: "split", img: "https://testlify.com/wp-content/uploads/2024/09/Lateral-hiring-made-easy-backed-by-data-not-by-gut-feel.png", h2: "Lateral hiring made easy — backed by data, not gut feel", body: ["With our lateral hiring software, expertly hire for any role or skill, even beyond your own knowledge. Use role-specific assessments to evaluate lateral candidates effectively."], bullets: [{ label: "Auto grading with AI" }, { label: "Suspicious activity detection" }, { label: "Audio and video interviewing feature" }, { label: "Fully customizable assessments" }, { label: "Detailed analytics and reporting" }, { label: "Non-googleable questions" }] },
      { kind: "split", img: "https://testlify.com/wp-content/uploads/2024/09/Tailor-our-suite-of-tools-to-ensure-you-hire-the-best-fit-candidates.png", h2: "Tailor our suite of tools to hire the best-fit candidates", body: ["With Testlify's lateral hiring software, assessing experienced talent is a cakewalk."], bullets: [{ label: "Save time and onboard the right professionals with simulation-based assessments at different levels" }, { label: "AI-powered test evaluation identifies candidates' strengths and gaps effectively" }, { label: "Eliminate unconscious bias with data-driven insights for a fair, objective hiring process" }], cta: { label: "Try for free", href: routes.pricing } },
      { kind: "cards", eyebrow: "How it helps", h2: "A comprehensive solution for recruiting skilled professionals", intro: "Everything you need to assess experienced, senior talent with confidence.", cards: [
        { title: "Skills-based assessments", desc: "Evaluate candidates on technical skills, soft skills, knowledge, personality, situational judgment, cognitive ability and more." },
        { title: "Multiple difficulty levels", desc: "Assess candidates' on-the-job skills across numerous difficulty levels to find exactly the right fit." },
        { title: "Powerful proctoring features", desc: "Advanced proctoring detects impersonation through candidate snapshots, manages tab switching, tracks mouse movement and more." }
      ] }
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
  "diversity-and-inclusions": {
    crumb: "Use case / Diversity & inclusion",
    eyebrow: "For diverse hiring",
    title: "Build diverse teams with bias-free, skills-first hiring",
    lead: "Give every applicant an equal, unbiased chance to show what they can do — and find hidden talent traditional screening filters out.",
    ctaLabel: "Try for free",
    ctaHref: routes.pricing,
    stats: [{ t: "Structured, blind assessment" }, { t: "EEOC-defensible scoring" }, { t: "3,500+ validated tests" }],
    logos: ["Xneelo", "Kimp", "Endiprev", "Virtual Gurus", "HROne"],
    sections: [
      { kind: "split", num: "1", h2: "Remove bias at the source", body: ["Resumes carry signals — names, schools, gaps — that trigger unconscious bias. Skills-first assessment focuses on ability alone, so candidates advance on merit, not background."], bullets: [{ label: "Anonymised, structured assessment" }, { label: "Consistent scoring for everyone" }, { label: "Skills over pedigree" }, { label: "Wider, fairer funnels" }], cta: { label: "Why it works", href: routes.solutions } },
      { kind: "cards", eyebrow: "Fair by design", h2: "Inclusion built into every step", intro: "Fairness isn't a feature you add later — it's how the platform works.", cards: [
        { title: "Blind screening", desc: "Assess ability before identifying details influence the decision." },
        { title: "Validated tests", desc: "Built to BPS/EFPA standards and reviewed by I/O psychologists." },
        { title: "EEOC-defensible", desc: "Structured scoring and a full audit trail for every decision." },
        { title: "Multilingual", desc: "Candidates test in their own language for a level field." },
        { title: "Accessible", desc: "A clean, mobile-friendly experience for every candidate." },
        { title: "Analytics", desc: "Track funnel fairness and spot drop-off by stage." }
      ] },
      { kind: "split", num: "2", h2: "Find talent others miss", body: ["Self-taught, career-changers and non-traditional candidates often out-perform — if they get a fair shot. Skills-first hiring surfaces them."], bullets: [{ label: "Surface non-traditional talent" }, { label: "Reduce screening bias" }, { label: "Improve quality of hire" }] }
    ],
    faqs: [
      { q: "How does Testlify reduce bias?", a: "By assessing verified skills through structured, consistent tests before identifying details influence the decision — so candidates advance on ability." },
      { q: "Is skills-based hiring EEOC-defensible?", a: "Yes. Consistent scoring and a complete audit trail make every decision defensible." },
      { q: "Does it really improve diversity?", a: "Teams consistently report more diverse pipelines because skills-first hiring surfaces qualified people traditional filters overlook." },
      { q: "Are the tests validated?", a: "Yes — developed to BPS guidelines and the EFPA model, and reviewed by I/O psychologists." },
      { q: "Can candidates test in their own language?", a: "Yes. Multilingual support gives global candidates a fair, level experience." },
      { q: "Does it integrate with our ATS?", a: "Yes — 100+ native ATS integrations on every paid plan." }
    ],
    ctaEyebrow: "Get started",
    ctaTitle: "Hire for ability, build for diversity.",
    ctaBody: "Give every candidate a fair shot and find the talent others miss — start free.",
    ctaTicks: ["7-day free trial", "Unlimited assessments", "Cancel anytime"]
  },
  "remote-hiring": {
    crumb: "Use case / Remote hiring",
    eyebrow: "For remote hiring",
    title: "Hire top talent with our remote hiring software",
    lead: "Find, assess and onboard top talent from anywhere in the world with our remote hiring software. Developed by experts, it helps you discover the best talent for any job, anywhere.",
    ctaLabel: "Try for free",
    ctaHref: routes.pricing,
    stats: [{ t: "1,700+ tests" }, { t: "9+ languages" }, { t: "Proctored assessments" }],
    logos: ["LTIMindtree", "Sonatafy", "Thales", "Third Bridge", "Virtual", "Cogitotech"],
    sections: [
      { kind: "split", img: "https://testlify.com/wp-content/uploads/2024/10/Your-hunt-for-top-talent-ends-with-Testlify-1.png", h2: "Your hunt for top talent ends with Testlify", body: ["Finding the best talent is difficult but possible. Enhance your recruitment strategy and secure high-quality talent with our remote hiring software — an intelligent tool that provides a seamless hiring experience, real-time candidate insights and efficient evaluation."], bullets: [{ label: "Assess global talent with ease and precision" }, { label: "Better collaboration with real-time feedback and grading" }, { label: "Data-driven hiring decisions with advanced analytics and reporting" }] },
      { kind: "split", img: "https://testlify.com/wp-content/uploads/2024/10/Leverage-world-class-talent-faster-and-smarterhunt-for-top-talent-ends-with-Testlify-1024x1024.png", h2: "Leverage world-class talent faster and smarter", body: ["With Testlify's intuitive platform, companies can hire top talent more efficiently — improving both candidate and recruiter experience, enhancing accuracy and reducing time-to-hire."], bullets: [{ label: "1,700+ tests for 5,000+ job roles and 50+ industries" }, { label: "Advanced proctoring features to ensure assessment integrity" }, { label: "Comprehensive reporting to analyze performance at a glance" }, { label: "Video and audio interview features for a 360° evaluation" }, { label: "Multilingual assessments available in 9+ languages" }, { label: "Efficient candidate screening with skills assessments" }], cta: { label: "Try for free", href: routes.pricing } },
      { kind: "split", img: "https://testlify.com/wp-content/uploads/2024/11/Break-through-barriers-with-Testlify.png", h2: "Break through barriers with Testlify", body: ["Testlify's remote hiring software lets you conduct accurate assessments tailored to each job and assess talent across the globe. It also evaluates candidates' cultural fit, ensuring you hire talent that aligns with your organization's values and environment."], bullets: [{ label: "Say bye to technical challenges" }, { label: "Positive candidate experience" }, { label: "Reduce chances of mis-hires" }] },
      { kind: "split", img: "https://testlify.com/wp-content/uploads/2024/10/Explore-our-extensive-library-of-skills-tests-1024x1024.png", h2: "Explore our extensive library of skills tests", body: ["Select from various in-demand skills and aptitude evaluations to gain deeper insights into candidates' capabilities and expertise. Our comprehensive suite includes psychometric tests, behavioral evaluations, situational judgment tests, coding tests and more — all while efficiently managing your hiring workflow."], cta: { label: "Try for free", href: routes.pricing } }
    ],
    faqs: [
      { q: "What is a remote hire?", a: "A remote hire is an employee who works from outside a traditional office—usually from home or a chosen location—allowing them to fulfill job responsibilities without commuting." },
      { q: "How do I hire remotely using Testlify?", a: "Use Testlify's remote hiring software to simplify the remote recruitment process. Our platform offers seamless candidate evaluation, quick assessment, virtual and audio interview options, efficient hiring workflows, and more. With Testlify, you can assess top talent from anywhere, ensuring you find the best fit for your team without the hassle of traditional hiring methods." },
      { q: "How is diversity integrated into remote hiring?", a: "Diversity in remote hiring can be fostered by using inclusive job descriptions that attract a wide range of candidates without bias. Diverse interview panels and structured interviews help ensure fair evaluations for everyone. Focusing on skills and potential rather than traditional qualifications creates opportunities for underrepresented groups. Additionally, outreach efforts to diverse organizations help expand the candidate pool." },
      { q: "What kind of assessments does Testlify offer for remote hiring?", a: "Testlify's remote hiring platform offers a vast array of high-demand skills and aptitude tests, as well as situational tests, personality tests, role-specific tests, coding challenges, and more." },
      { q: "How does Testlify help in global team building?", a: "Testlify offers a user-friendly interface that enables you to assess and hire candidates remotely from anywhere in the world. Additionally, it evaluates cultural fit, behavioral traits, psychometric skills, and other essential factors for building a solid team. Also, with a multilingual feature, the question bank is available in more than 9 languages, helping you hire diverse talent across the globe." }
    ],
    faqTitle: "Frequently asked questions (FAQs)"
  },
  "blue-collar-hiring": {
    crumb: "Use case / Blue collar hiring",
    eyebrow: "For blue-collar hiring",
    title: "Best skills assessments for blue-collar hiring",
    lead: "Test real-world skills before you hire — from electricians to machine operators. Testlify's blue-collar hiring tests give you a comprehensive library to assess both the hard and soft skills of blue-collar workers, easily.",
    ctaLabel: "Try for free",
    ctaHref: routes.pricing,
    stats: [{ t: "3,500+ validated tests" }, { t: "10+ languages" }, { t: "Safety & technical tests" }],
    logos: ["LTIMindtree", "Sonatafy", "Thales", "Third Bridge", "Virtual", "Cogitotech"],
    sections: [
      { kind: "split", img: "https://testlify.com/wp-content/uploads/2022/09/Test-Libraries-dedicated-to-the-blockchain-Industry-1024x653.png", h2: "Built for the people who build your business", body: ["Blue-collar roles demand more than resumes — they require real-world skills, adaptability and attention to safety. Testlify's assessments help you identify capable candidates before they're on the floor and highlight training needs post-hire to boost productivity and reduce errors."], bullets: [{ label: "Carpenters" }, { label: "Maintenance & HVAC technicians" }, { label: "Assembly line & warehouse operatives" }, { label: "Machine operators" }, { label: "Welders and fabricators" }, { label: "Construction laborers, electricians & plumbers" }] },
      { kind: "split", img: "https://testlify.com/wp-content/uploads/2022/11/Better-Skill-Set-Evaluation-Process.png", h2: "Assess technical expertise, workplace safety and protocols", body: ["The timed assessment identifies candidates with the right technical expertise, problem-solving skills, practical knowledge and understanding of workplace safety and protocols. It looks at skills like hand-eye coordination, mechanical knowledge and following instructions — critical where precision and safety matter.", "It helps HR professionals identify candidates likely to do well in physically demanding jobs, highlights where training may be needed, and shows whether a candidate can work independently — reducing accidents, increasing productivity and ensuring quality work."], cta: { label: "Try for free", href: routes.pricing } },
      { kind: "split", img: "https://testlify.com/wp-content/uploads/2022/11/Difficulty-Scaling-Recruitment-Efforts-1024x1024-1.png", h2: "Evaluate skills in multiple languages and varying literacy levels", body: ["Our blue-collar screening tool supports multiple languages (10+) and varying literacy levels, so every candidate can take the assessment comfortably and demonstrate their skills regardless of background."], bullets: [{ label: "Assessed on true skills, not language proficiency or literacy" }, { label: "An inclusive environment where every worker feels confident" }, { label: "Reach a broader range of candidates from different regions" }, { label: "Build a more diverse workforce across linguistic and educational backgrounds" }] },
      { kind: "split", img: "https://testlify.com/wp-content/uploads/2023/02/white-lable-1024x672.png", h2: "Customize your assessments to meet your hiring needs", body: ["Different businesses have different hiring needs. Create customized assessments that evaluate the technical skills, soft skills or safety training that matter most to your business.", "Our user-friendly platform makes creating, assigning and monitoring assessments easy — add your own questions, choose the test duration, set the passing score and use weighted scoring to find the best candidates."], cta: { label: "Create your free assessment", href: routes.pricing } }
    ],
    faqs: [
      { q: "What is Testlify and how does it simplify blue-collar hiring?", a: "Testlify is an assessment tool that simplifies blue-collar hiring with a standardized, objective evaluation process." },
      { q: "How does Testlify save time and money in the hiring process?", a: "Testlify saves time and money by automating the screening process, allowing hiring managers to focus on top-performing candidates." },
      { q: "What types of assessments are available on Testlify?", a: "Testlify offers a wide range of assessments, including technical and soft skills, aptitude tests, situational judgment tests, and job-specific tests." },
      { q: "What is the process to get started with Testlify?", a: "To get started with Testlify, create an account, choose the assessments you need, and start evaluating candidates' skills with the user-friendly platform." },
      { q: "What type of assessments can be customized on the Testlify platform?", a: "Testlify enables customized assessments to meet your business's unique hiring needs, leading to better quality hires and reduced turnover rates." }
    ],
    faqTitle: "Frequently asked questions (FAQs)"
  },
  "freelance-hiring": {
    crumb: "Use case / Freelance hiring",
    eyebrow: "For freelance & contract hiring",
    title: "Hire freelancers you can trust, fast",
    lead: "Contract roles move quickly and there's no time for a bad fit. Verify skills up front so every freelancer you bring on can deliver from day one.",
    ctaLabel: "Try for free",
    ctaHref: routes.pricing,
    stats: [{ t: "Verify skills in minutes" }, { t: "3,500+ validated tests" }, { t: "Any device, anywhere" }],
    logos: ["Virtual Gurus", "Kimp", "Xneelo", "Endiprev", "HROne"],
    sections: [
      { kind: "split", num: "1", h2: "Prove skill before the project starts", body: ["Portfolios and profiles can be misleading. A short, role-specific assessment confirms a freelancer can actually do the work before you commit budget and deadlines."], bullets: [{ label: "Role-specific skills tests" }, { label: "Coding & design challenges" }, { label: "Real-world work samples" }, { label: "Fast, mobile-friendly" }], cta: { label: "Browse the test library", href: routes.testLibrary } },
      { kind: "split", num: "2", h2: "Screen a global talent pool fairly", body: ["Freelance hiring is borderless. Multilingual, objective assessment lets you compare candidates worldwide on the same fair standard."], bullets: [{ label: "Multilingual assessments" }, { label: "Consistent, objective scoring" }, { label: "Anti-cheat proctoring" }, { label: "Auto-ranking by fit" }] },
      { kind: "cards", eyebrow: "Why Testlify", h2: "Confidence in every contract hire", intro: "Everything you need to hire freelancers on proof.", cards: [
        { title: "Fast verification", desc: "Short assessments confirm skill in minutes, not days." },
        { title: "Work samples", desc: "See real output that mirrors the actual project." },
        { title: "Objective scoring", desc: "Compare freelancers on the same fair standard." },
        { title: "Anti-cheat proctoring", desc: "Trust the results you're hiring on." },
        { title: "Multilingual", desc: "Assess a global freelance pool fairly." },
        { title: "Integrations", desc: "100+ ATS integrations plus open API." }
      ] }
    ],
    faqs: [
      { q: "Why assess freelancers if they have a portfolio?", a: "Portfolios show past work, not who did it or whether they can repeat it. A short assessment verifies the skill you're actually paying for." },
      { q: "How long do assessments take?", a: "Most take around 30 minutes or less, so they fit the fast pace of contract hiring." },
      { q: "Can I assess a global talent pool?", a: "Yes. Multilingual, objective tests let you compare freelancers worldwide fairly." },
      { q: "How do you prevent cheating?", a: "Anti-cheat proctoring — webcam, full-screen and plagiarism detection — keeps results honest." },
      { q: "Does it integrate with our tools?", a: "Yes — 100+ native ATS integrations plus an open API." },
      { q: "Is it suitable for one-off hires?", a: "Yes. Pay-per-candidate pricing means it works whether you hire one freelancer or a hundred." }
    ],
    ctaEyebrow: "Get started",
    ctaTitle: "Hire freelancers who deliver.",
    ctaBody: "Verify skill before the project starts — start assessing in minutes.",
    ctaTicks: ["7-day free trial", "Pay per candidate", "Cancel anytime"]
  },
  "campus-hiring": {
    crumb: "Use case / Campus hiring",
    eyebrow: "For campus hiring",
    title: "Campus hiring made easy with our platform",
    lead: "Looking to hire the best talent from universities and colleges? We understand the challenges of finding and recruiting top campus talent — which is why our platform streamlines the entire campus hiring process for businesses.",
    ctaLabel: "Try for free",
    ctaHref: routes.pricing,
    stats: [{ t: "3,500+ validated tests" }, { t: "Unlimited users" }, { t: "Aptitude & role tests" }],
    logos: ["LTIMindtree", "Sonatafy", "Thales", "Third Bridge", "Virtual", "Cogitotech"],
    sections: [
      { kind: "split", img: "https://testlify.com/wp-content/uploads/2024/10/Make-hiring-structured.png", h2: "Make hiring structured", body: ["A structured recruitment process is essential for efficient, effective and objective hiring. With Testlify's pre-hiring assessments, recruiters standardize the process — evaluating candidates against a predetermined set of criteria for objective, consistent results.", "This helps you compare candidates more objectively and make informed decisions, while improving the candidate experience by giving everyone a fair chance to showcase their skills."] },
      { kind: "split", img: "https://testlify.com/wp-content/uploads/2024/10/Find-the-right-talent-in-competition.png", h2: "Find the right talent in competition", body: ["In today's highly competitive job market, finding the right talent can be daunting. Traditional recruitment is time-consuming and inefficient when sifting through a large pool of applicants.", "Testlify's pre-hiring assessments evaluate candidates' skills, knowledge and expertise — giving recruiters clear insight into abilities and helping them select the right talent quickly and efficiently."] },
      { kind: "split", img: "https://testlify.com/wp-content/uploads/2024/10/Reduce-turnover-rates.png", h2: "Reduce turnover rates", body: ["High employee turnover is costly and disruptive. Testlify's pre-hiring assessments help reduce it by evaluating candidates' skills and abilities accurately.", "By predicting job performance, recruiters can choose the best-suited candidate for the role — avoiding mis-hires and significantly reducing turnover."] },
      { kind: "split", img: "https://testlify.com/wp-content/uploads/2024/10/Customized-campus-hiring.png", h2: "Customized campus hiring", body: ["Tailor your campus hiring process to your specific needs. Design your recruitment program — schedule campus visits, conduct pre-placement talks and select specific assessment modules — for a more engaging, personalized experience that improves candidate engagement and retention.", "Getting started is easy: create an account, select the criteria that match your hiring needs and begin evaluating candidates' skills and aptitude."], cta: { label: "Book a demo", href: routes.contact } },
      { kind: "cards", eyebrow: "Why Testlify", h2: "Why use our campus hiring platform?", intro: "Features built for the scale and fairness campus recruitment demands.", cards: [
        { title: "Unlimited users", desc: "Add as many team members as you need — especially helpful when assessing a large volume of campus candidates." },
        { title: "Multiple formats", desc: "Assessment formats including multiple-choice questions, coding assessments and video-based assessments." },
        { title: "Comprehensive test library", desc: "An extensive library covering aptitude, technical skills, language proficiency and personality traits." },
        { title: "Difficulty levels", desc: "Assessments across varying difficulty levels, so you can evaluate candidates at different proficiency levels." },
        { title: "Objective test administration", desc: "Assessments administered objectively, ensuring all candidates are evaluated under the same conditions." },
        { title: "Reports and insights", desc: "Detailed reports and insights on candidate performance to help you make informed decisions." }
      ] }
    ],
    faqs: [
      { q: "Can Testlify be used for campus hiring?", a: "Yes, Testlify is highly beneficial for campus hiring, as it offers varying difficulty levels, a comprehensive test library, objective test administration, and detailed reports." },
      { q: "How does Testlify ensure fairness in the assessment process?", a: "Testlify's assessments are administered objectively, ensuring to eliminate any potential biases in the assessment process." },
      { q: "Why should businesses use our campus hiring platform?", a: "Businesses should use our campus hiring platform because it offers a streamlined and objective evaluation process to find highly skilled candidates efficiently." },
      { q: "What kind of assessments does your platform offer for campus hiring?", a: "Our platform offers a diverse test library covering various skills essential to campus recruitment, including aptitude tests, case studies, and customized assessments." },
      { q: "How does your platform help businesses find the right talent from campuses?", a: "Our platform helps businesses find the right talent from campuses through objective, skills-based assessments that quickly surface the most capable candidates for every role." }
    ],
    faqTitle: "Frequently asked questions (FAQs)"
  },
  "technical-hiring": {
    crumb: "Use case / Technical hiring",
    eyebrow: "For technical hiring",
    title: "Technical hiring, backed by real coding proof",
    lead: "Stop guessing from resumes. Assess engineers in real coding environments across 45+ languages, and only interview the ones who can actually build.",
    ctaLabel: "Try for free",
    ctaHref: routes.pricing,
    stats: [{ t: "45+ coding languages" }, { t: "Live coding environments" }, { t: "3,500+ validated tests" }],
    logos: ["LTIMindtree", "Sonatafy", "Thales", "Third Bridge", "Cogitotech"],
    sections: [
      { kind: "split", num: "1", h2: "See how engineers actually work", body: ["Interactive IDEs and real-world challenges test coding, debugging and system design the way the job demands — not trivia. You see the work, not just the claim."], bullets: [{ label: "Live coding in 45+ languages" }, { label: "Debugging & code-review tasks" }, { label: "System & API design" }, { label: "Frontend, backend, data & DevOps" }, { label: "Take-home and timed formats" }, { label: "Auto-scored for accuracy & efficiency" }], cta: { label: "Explore coding tests", href: routes.solutions } },
      { kind: "cards", eyebrow: "Why Testlify", h2: "Everything technical hiring needs", intro: "Assess deeply, rank objectively, protect your engineers' time.", cards: [
        { title: "Real coding environments", desc: "Interactive IDEs across 45+ stacks that mirror day-to-day work." },
        { title: "Automated scoring", desc: "Rank on accuracy, efficiency and code quality." },
        { title: "Anti-cheat proctoring", desc: "IP locking and plagiarism detection keep results honest." },
        { title: "Global benchmarking", desc: "Compare candidates against a worldwide talent pool." },
        { title: "Enterprise security", desc: "SOC 2 Type II, ISO 27001 and GDPR compliant." },
        { title: "Fully integratable", desc: "100+ ATS integrations plus Slack and open API." }
      ] },
      { kind: "split", num: "2", h2: "Protect your engineers' time", body: ["Only candidates who clear the skills bar reach a live interview, so senior engineers spend their hours on the strongest applicants."], bullets: [{ label: "Screen before you interview" }, { label: "Auto-ranked shortlists" }, { label: "Consistent, fair evaluation" }] }
    ],
    faqs: [
      { q: "Which languages and stacks are supported?", a: "45+ programming languages plus frontend, backend, data and DevOps scenarios, in interactive coding environments." },
      { q: "Can candidates cheat on coding tests?", a: "Anti-cheat proctoring, IP locking and plagiarism detection keep results trustworthy." },
      { q: "How are coding tests scored?", a: "Automatically, on accuracy, efficiency and code quality, with candidates auto-ranked." },
      { q: "Does it integrate with our ATS?", a: "Yes — 100+ native ATS integrations plus Slack and open API." },
      { q: "Can we customise tests to our stack?", a: "Yes. Tailor assessments to your languages, frameworks and role requirements." },
      { q: "Is it suitable for startups and enterprises?", a: "Yes. Testlify scales from a few hires to thousands across teams and regions." }
    ],
    ctaEyebrow: "Get started",
    ctaTitle: "Hire engineers on proof, not resumes.",
    ctaBody: "See who can actually build — start assessing technical talent in minutes.",
    ctaTicks: ["7-day free trial", "45+ coding languages", "Cancel anytime"]
  },
  "sales-hiring": {
    crumb: "Use case / Sales hiring",
    eyebrow: "For sales hiring",
    title: "Hire sales reps who actually close",
    lead: "Great interviewers don't always make great closers. Assess the skills that predict sales performance — communication, objection handling, resilience — before you hire.",
    ctaLabel: "Try for free",
    ctaHref: routes.pricing,
    stats: [{ t: "Role-specific sales tests" }, { t: "Situational judgment" }, { t: "3,500+ validated tests" }],
    logos: ["Xneelo", "Kimp", "Endiprev", "Virtual Gurus", "HROne"],
    sections: [
      { kind: "split", num: "1", h2: "Test for what makes a closer", body: ["Charisma in an interview doesn't equal quota attainment. Scenario-based assessments measure how candidates prospect, handle objections and stay resilient under pressure."], bullets: [{ label: "Communication & persuasion" }, { label: "Objection handling" }, { label: "Discovery & qualification" }, { label: "Resilience & drive" }, { label: "CRM & process knowledge" }, { label: "Situational judgment" }], cta: { label: "Browse the test library", href: routes.testLibrary } },
      { kind: "cards", eyebrow: "Why Testlify", h2: "Predict sales performance before you hire", intro: "Stop hiring on gut feel and first impressions.", cards: [
        { title: "Scenario-based tests", desc: "See how candidates handle real sales situations." },
        { title: "Personality & culture", desc: "Assess drive, resilience and team fit." },
        { title: "Objective scoring", desc: "Compare reps on the same fair standard." },
        { title: "Video interviews", desc: "Assess pitch and presence, scored consistently." },
        { title: "Anti-cheat proctoring", desc: "Trust every result." },
        { title: "Integrations", desc: "100+ ATS integrations plus open API." }
      ] },
      { kind: "split", num: "2", h2: "Ramp faster, churn less", body: ["Hiring reps who fit the role means faster ramp and lower turnover — measurable ROI on every sales hire."], bullets: [{ label: "Better quality of hire" }, { label: "Faster ramp to quota" }, { label: "Lower sales-team churn" }] }
    ],
    faqs: [
      { q: "Can you assess soft skills for sales?", a: "Yes. Communication, persuasion, resilience and situational judgment are all assessable alongside process knowledge." },
      { q: "Do you offer video interviews for sales?", a: "Yes. Assess pitch and presence with AI-scored video interviews, consistently across candidates." },
      { q: "How is sales fit measured?", a: "Through role-specific, personality and scenario-based tests that map to what predicts sales performance." },
      { q: "Does it integrate with our CRM/ATS?", a: "Yes — 100+ native ATS integrations plus an open API." },
      { q: "Can tests be customised?", a: "Yes. Tailor assessments to your sales motion, product and market." },
      { q: "Is it suitable for high-volume sales hiring?", a: "Yes. Screen large pools of reps quickly without lowering the bar." }
    ],
    ctaEyebrow: "Get started",
    ctaTitle: "Hire closers, not just talkers.",
    ctaBody: "Assess the skills that predict sales performance — start free in minutes.",
    ctaTicks: ["7-day free trial", "Unlimited assessments", "Cancel anytime"]
  },
  "skills-validation": {
    crumb: "Use case / Skills validation",
    eyebrow: "For skills validation",
    title: "Validate skills with evidence, not claims",
    lead: "Whether you're hiring, promoting or upskilling, confirm what people can really do with objective, validated assessments — and make every decision defensible.",
    ctaLabel: "Try for free",
    ctaHref: routes.pricing,
    stats: [{ t: "3,500+ validated tests" }, { t: "13+ question formats" }, { t: "EEOC-defensible scoring" }],
    logos: ["Xneelo", "Kimp", "Endiprev", "Virtual Gurus", "HROne"],
    sections: [
      { kind: "split", num: "1", h2: "Confirm ability objectively", body: ["Self-reported skills and resumes overstate reality. Validated assessments measure real ability against benchmarks, so you know exactly where people stand."], bullets: [{ label: "Role-specific & technical tests" }, { label: "Cognitive & personality" }, { label: "Benchmarked scoring" }, { label: "13+ question formats" }, { label: "Anti-cheat proctoring" }, { label: "Clear, actionable reports" }], cta: { label: "Browse the test library", href: routes.testLibrary } },
      { kind: "cards", eyebrow: "Why Testlify", h2: "Trusted, fair skills validation", intro: "Built and reviewed by experts, defensible by design.", cards: [
        { title: "Validated tests", desc: "Developed to BPS/EFPA standards, peer-reviewed by SMEs." },
        { title: "Benchmarked scoring", desc: "Compare every person against the same objective bar." },
        { title: "EEOC-defensible", desc: "Structured scoring and a full audit trail." },
        { title: "Anti-cheat proctoring", desc: "Keep validation honest and trustworthy." },
        { title: "Multilingual", desc: "Assess a global workforce fairly." },
        { title: "Integrations", desc: "100+ ATS integrations plus open API." }
      ] },
      { kind: "split", num: "2", h2: "Beyond hiring", body: ["Use validation for promotions, internal mobility and L&D — identify skill gaps and target development where it counts."], bullets: [{ label: "Promotion & mobility decisions" }, { label: "Training-needs analysis" }, { label: "Team capability mapping" }] }
    ],
    faqs: [
      { q: "What is skills validation?", a: "It's confirming what someone can actually do through objective, validated assessment — for hiring, promotion or development." },
      { q: "Are the assessments validated?", a: "Yes — developed to BPS guidelines and the EFPA model, and peer-reviewed by subject-matter experts." },
      { q: "Is it defensible?", a: "Yes. Consistent scoring and a complete audit trail make every decision EEOC-defensible." },
      { q: "Can I use it beyond hiring?", a: "Yes — for promotions, internal mobility and identifying training needs across teams." },
      { q: "How do you prevent cheating?", a: "Anti-cheat proctoring — webcam, full-screen and plagiarism detection — keeps results honest." },
      { q: "Does it integrate with our systems?", a: "Yes — 100+ native ATS integrations plus an open API." }
    ],
    ctaEyebrow: "Get started",
    ctaTitle: "Prove skill with evidence.",
    ctaBody: "Validate what people can really do — start assessing in minutes.",
    ctaTicks: ["7-day free trial", "Unlimited assessments", "Cancel anytime"]
  },


  /* ── Test-type pages (17-07 export) ─────────────────── */
"role-specific-tests": {
  crumb: "Test type / Role specific",
  eyebrow: "Role-specific tests",
  title: "Role-specific tests that match real-world skills",
  lead: "The best candidates aren't just skilled — they're skilled for the job you're hiring for. Testlify's role-specific tests go beyond resumes to uncover true job-readiness, with assessments designed around real responsibilities, tools and tasks. Hire people who can hit the ground running from day one.",
  ctaLabel: "Try for free",
  ctaHref: routes.pricing,
  stats: [{ t: "500+ roles covered" }, { t: "20+ departments" }, { t: "30% faster screening" }],
  logos: ["LTIMindtree", "Sonatafy", "Thales", "Third Bridge", "Virtual", "Cogitotech"],
  sections: [
    { kind: "split", img: "https://testlify.com/wp-content/uploads/2024/10/Candidate-comparison-2.png", h2: "What are role-specific tests?", body: ["Testlify's role-specific tests are expertly built assessments tailored to actual job requirements across departments and seniority levels. They help you identify real talent — people who can not only talk the talk, but actually do the job."], bullets: [{ label: "500+ curated tests across roles and industries" }, { label: "Entry to executive-level options" }, { label: "Real-world scenarios and simulations" }, { label: "Custom test creation and combination" }, { label: "Secure, anti-cheating infrastructure" }, { label: "DEI-aligned for fair hiring" }, { label: "Instant reports with benchmark comparisons" }] },
    { kind: "split", img: "https://testlify.com/wp-content/uploads/2024/10/Less-guessing-better-assessing.png", h2: "Why role-specific tests matter", body: ["Too often, hiring decisions rely on generic tests or surface-level interviews that don't reveal whether a candidate is truly fit for the role — leading to wasted interviews, frustrated teams and costly mis-hires.", "Our curated assessments dive deep into the real skills candidates need to succeed. Whether it's a Python developer, digital marketer or sales manager, we've got tests built for that exact job."], bullets: [{ label: "Tests aligned with day-to-day tasks" }, { label: "Role-ready challenges, not theoretical quizzes" }, { label: "Clear, actionable reports" }, { label: "Customizable for your exact job openings" }] },
    { kind: "split", img: "https://testlify.com/wp-content/uploads/2024/10/Candidate-comparison-2.png", h2: "Built for accuracy and speed", body: ["Fast for you. Fair for candidates. Accurate for everyone. Each test is rigorously designed and constantly validated by experts and real-world performance data — and you can customize questions and difficulty while delivering a smooth, engaging candidate experience."], bullets: [{ label: "Tests mapped to real job responsibilities" }, { label: "Role-based difficulty levels (junior to senior)" }, { label: "30% faster screening cycles" }, { label: "Built-in anti-cheating and diversity measures" }], cta: { label: "Try for free", href: routes.pricing } },
    { kind: "split", img: "https://testlify.com/wp-content/uploads/2024/10/Less-guessing-better-assessing.png", h2: "Covering every role you need", body: ["From tech to talent, sales to support, we've got it covered. With 500+ tests across 20+ departments and roles, Testlify offers one of the largest, most dynamic test libraries in the industry — browse by role, skill or domain."], bullets: [{ label: "Engineering — code-based, tech-stack-specific tests" }, { label: "Sales — real-world negotiation and communication tasks" }, { label: "Marketing — campaign analysis, content judgment, SEO skills" }, { label: "Customer support — scenario-based empathy and problem-solving" }, { label: "Finance & ops — accuracy, analytical thinking and tool familiarity" }, { label: "Product & design — prioritization, UX thinking and collaboration" }], cta: { label: "View our test library", href: routes.testLibrary } }
  ],
  faqs: [
    { q: "How are role-specific tests used in the hiring process?", a: "Role-specific tests are used to evaluate candidates as part of the pre-screening process. These tests can evaluate a vast range of skills for numerous job descriptions from bookkeepers, to marketers, to data scientists. The feedback gives you the insights to compare and select the best talent in an automated, consistent way — reducing time-to-decision and helping you scale hiring faster." },
    { q: "Are role-specific skill tests reliable?", a: "Our tests are highly accurate and have been tested to ensure their results are consistent. Role-specific tests minimize the complexity of testing candidates and the resources needed, providing a standardized platform to compare candidates and make better hiring decisions based on real data." },
    { q: "Why test a candidate's job skills?", a: "Finding the best talent requires not only the required qualifications but also aptitude for the position. Job-related skills tests give you deeper insights into a candidate's actual ability, increasing your team's ability to compare candidates with real-time scoring and insights that go beyond resumes." },
    { q: "Can testing job skills predict workplace performance?", a: "Testing a candidate's skills can help predict whether they will succeed in the workplace. Our tests evaluate a candidate's ability to understand, solve and find solutions to challenges that closely replicate real workplace environments." },
    { q: "What is the duration of a test?", a: "Each test evaluates one skill, and you may use several. Each is about 10 minutes in duration and can be customized to test for more skills, which affects the total assessment time." },
    { q: "How do I customize tests?", a: "Assessments can be customized by adding any additional skill test from our library. These can be a combination of aptitude, language, software development, software, or role-specific skills." },
    { q: "How do I schedule a demo?", a: "You can schedule a demo by filling out the request for a demo and we will contact you to make arrangements." }
  ],
  faqTitle: "Frequently asked questions (FAQs)"
},
"language-tests": {
  crumb: "Test type / Language",
  eyebrow: "Language proficiency tests",
  title: "Hire confidently with reliable Language proficiency tests",
  lead: "Language fluency can make or break collaboration, customer interactions and team dynamics. Testlify's Language proficiency tests deliver precise, role-ready insights into candidates' communication skills — so you hire people who understand and get things done, fluently, accurately and confidently.",
  ctaLabel: "Try for free",
  ctaHref: routes.pricing,
  stats: [{ t: "30+ global languages" }, { t: "CEFR-aligned (A1–C2)" }, { t: "AI + human scoring" }],
  logos: ["LTIMindtree", "Sonatafy", "Thales", "Third Bridge", "Virtual", "Cogitotech"],
  sections: [
    { kind: "split", img: "https://testlify.com/wp-content/uploads/2024/11/Language-tests-for-8-languages-1024x1024.png", h2: "Why Language proficiency testing matters", body: ["Your talent pool is global — your assessments should be too. Recruiters often rely on résumés or interviews to gauge fluency, but those don't tell the full story, and poor communication skills lead to misalignment, low productivity and lost deals. Our test goes beyond grammar quizzes."], bullets: [{ label: "Real-life communication scenarios" }, { label: "CEFR-aligned scoring" }, { label: "Instant, easy-to-read reports" }, { label: "Hire across borders with no guesswork" }, { label: "Reduce early-stage attrition due to language gaps" }] },
    { kind: "split", img: "https://testlify.com/wp-content/uploads/2024/11/Proficiency-levels-of-language-tests.png", h2: "Smart, structured and built to scale", body: ["A fully automated, CEFR-aligned assessment that evaluates candidates across all four core areas: reading, writing, speaking and listening."], bullets: [{ label: "Cheat-proof testing — secure, proctored and compliant" }, { label: "8 supported languages including English, Spanish, French, German, Mandarin, Japanese" }, { label: "Customizable proficiency levels — A1 to C2" }, { label: "Real-world, role-specific prompts" }, { label: "AI + human scoring — fast, accurate and fair" }, { label: "Instant reporting with visual breakdowns" }] },
    { kind: "split", img: "https://testlify.com/wp-content/uploads/2024/11/Skills-assessments-in-7-languages-1024x1024.png", h2: "Where language testing makes the biggest impact", body: ["From the frontline to leadership, language matters — use it for pre-hire screening, global mobility, employee upskilling and language benchmarking."], bullets: [{ label: "Customer support — fluent, empathetic responses for global service" }, { label: "Sales & business development — clear, persuasive communication" }, { label: "Training & instructional roles — effective knowledge transfer" }, { label: "Remote & distributed teams — collaboration across cultures" }, { label: "International relocations — language readiness before onboarding" }] },
    { kind: "split", img: "https://testlify.com/wp-content/uploads/2024/11/User-friendly-interface-seamless-experience-1-1024x1024.png", h2: "Fast, flexible tests that fit your workflow", body: ["Your hiring process is complex — we make skills assessment simple. Built for fast-moving global teams and high-volume hiring."], bullets: [{ label: "Integration with your ATS" }, { label: "Send test invites in seconds" }, { label: "Candidate benchmarking" }, { label: "Real-time data for faster, smarter decisions" }] },
    { kind: "split", img: "https://testlify.com/wp-content/uploads/2023/07/Before-you-continue-01-2-17-1024x761.png", h2: "Build a fluent, high-performance workforce", body: ["Testlify helps you identify candidates who can collaborate, lead and deliver — no matter where they're from. It's more than a test; it's a smarter way to build high-impact, multilingual teams."], bullets: [{ label: "Save time" }, { label: "Eliminate bias" }, { label: "Hire with precision" }], cta: { label: "Try for free", href: routes.pricing } }
  ],
  faqs: [
    { q: "How are language tests used in the hiring process?", a: "Assessments that test language skills are generally used to evaluate candidates as part of the pre-screening process. These assessments evaluate various skills relevant to a job role and can include language tests as part of the overall assessment. The feedback then gives organizations the insights to compare and select the best talent for a role." },
    { q: "Can language tests predict a candidate's ability to communicate effectively?", a: "Testing a candidate's language skills can help predict whether a candidate is capable of communicating effectively in a specific language. Our tests evaluate a candidate's ability to read, understand and communicate in a specified language." },
    { q: "What is the duration of a test?", a: "Each test evaluates one skill, and you may use several. Each is about 10 minutes in duration and can be customized to test for more skills, which affects the total assessment time." },
    { q: "How do I customize tests?", a: "Assessments can be customized by adding any additional skill test from our library. These can be a combination of aptitude, language, programming, software, or role-specific skills." },
    { q: "Are language tests reliable?", a: "Our language tests are highly accurate and have been tested to ensure their results are consistent even when taken again. They reduce the complexity of testing candidates, minimizing resources needed and providing powerful insights for informed decisions." },
    { q: "Why test a candidate's language skills?", a: "Testing an applicant's ability to communicate in a language gives you deeper insights into their actual ability and helps your selection process — increasing your team's ability to compare candidates with real-time scoring and insights that go beyond resumes." },
    { q: "How do I schedule a demo?", a: "You can schedule a demo by filling out the request for a demo and we will contact you to make arrangements." }
  ],
  faqTitle: "Frequently asked questions (FAQs)"
},
"programming-tests": {
  crumb: "Test type / Programming",
  eyebrow: "Programming tests",
  title: "Hire developers who actually deliver with programming tests",
  lead: "Evaluate developers on the skills that matter — hire candidates who solve problems, build systems and deliver results. With Testlify's coding tests, identify top tech talent with efficiency and accuracy.",
  ctaLabel: "Try for free",
  ctaHref: routes.pricing,
  stats: [{ t: "40+ languages" }, { t: "Live coding editor" }, { t: "Auto-graded" }],
  logos: ["LTIMindtree", "Sonatafy", "Thales", "Third Bridge", "Virtual", "Cogitotech"],
  sections: [
    { kind: "split", img: "https://testlify.com/wp-content/uploads/2023/03/BPO-Industry-2.png", h2: "From gut feeling to data-driven hiring", body: ["Testlify brings structure, speed and skill validation to your hiring process. Our programming assessments are crafted by experts to evaluate what really matters — how candidates think, code and solve problems in real time."], bullets: [{ label: "Choose a coding test that matches your open role" }, { label: "Customize or combine with other assessments" }, { label: "Invite candidates with a click or integrate your ATS" }, { label: "Review results, code quality and insights" }, { label: "Confidently move top talent to the next stage" }] },
    { kind: "split", img: "https://testlify.com/wp-content/uploads/2023/08/Before-you-continue-01-2-11-1024x761.png", h2: "Ready-to-use coding questions", body: ["Build assessments in minutes using our expert-curated question bank across difficulty levels — no dev time required."], bullets: [{ label: "Junior to senior-level challenges" }, { label: "Role-specific coding tasks" }, { label: "Supports 40+ programming languages" }] },
    { kind: "split", img: "https://testlify.com/wp-content/uploads/2022/11/Better-Skill-Set-Evaluation-Process.png", h2: "What sets our programming tests apart?", body: ["Combined with advanced analytics and anti-cheating and proctoring features, you'll know exactly who can code and who can't."], bullets: [{ label: "Assess full projects, debugging, API development and data structures" }, { label: "40+ languages: JavaScript, Python, SQL, Java, React and more" }, { label: "Scored on code quality, efficiency and logic — not just whether it compiles" }] },
    { kind: "cards", eyebrow: "Inside a test", h2: "What's inside a Testlify coding test?", intro: "Everything needed to evaluate real coding ability, fairly.", cards: [
      { title: "Problem statement", desc: "Well-defined challenges that simulate real dev tasks, backed by hidden test cases for unbiased evaluation." },
      { title: "Live coding editor", desc: "A live editor where candidates write, run and debug code in real time during the test." },
      { title: "Timed tests", desc: "Fixed time per question — candidates code in the language they know best." },
      { title: "Auto-graded submissions", desc: "Back-end scoring on efficiency, accuracy and edge cases, with the option for manual review." }
    ] },
    { kind: "cards", eyebrow: "Who it's for", h2: "For teams that can't afford a mis-hire", intro: "Clarity at every stage, whatever your scale.", cards: [
      { title: "For enterprises", desc: "Ensure consistency and fairness across multiple hiring teams and locations." },
      { title: "For scaleups", desc: "Standardize your process with reliable, repeatable screening." },
      { title: "For startups", desc: "Launch with confidence by hiring devs who can contribute from day one." },
      { title: "For agencies", desc: "Deliver client-ready candidates backed by verified coding-test results." }
    ] }
  ],
  faqs: [
    { q: "Why test a candidate's software development skills?", a: "Finding the best talent requires not only qualifications but also aptitude for the position. Testing an applicant's ability to solve problems gives you deeper insights into their actual ability and helps your selection process, with real-time scoring that goes beyond resumes." },
    { q: "Are software development tests reliable?", a: "Our software development tests are highly accurate and have been tested to ensure consistent results — minimizing the complexity of testing candidates and providing a standardized platform to compare candidates and make better decisions based on real data." },
    { q: "Can testing software development skills predict workplace performance?", a: "Testing a candidate's skills in software development can help predict whether they will succeed in the workplace. Our tests evaluate a candidate's ability to understand, solve and find solutions to challenges that closely replicate real workplace environments." },
    { q: "How are talent assessments used in the hiring process?", a: "Assessments that test software development are used to evaluate candidates as part of pre-screening — covering back-end development skills in PHP, Java, Python and JavaScript. The feedback gives you insights to compare and select the best talent in an automated, consistent way, reducing time-to-decision." },
    { q: "What is the duration of a test?", a: "Each test evaluates one skill, and you may use several. Each is about 10 minutes in duration and can be customized to test for more skills, which affects the total time." },
    { q: "How do I customize tests?", a: "Assessments can be customized by adding any additional skill test from our library. These can be a combination of aptitude, language, programming, software, or role-specific skills." }
  ],
  faqTitle: "Frequently asked questions (FAQs)"
},
"software-skills-tests": {
  crumb: "Test type / Software skills",
  eyebrow: "Software skills tests",
  title: "Hire job-ready talent with software skills tests",
  lead: "Testlify's software skills test validates candidates' proficiency with essential workplace tools like Microsoft Office, Canva, Slack and Google Workspace — so you hire people who are productive from day one.",
  ctaLabel: "Try for free",
  ctaHref: routes.pricing,
  stats: [{ t: "Real workplace tools" }, { t: "Timed scenarios" }, { t: "Instant top-performer flags" }],
  logos: ["LTIMindtree", "Sonatafy", "Thales", "Third Bridge", "Virtual", "Cogitotech"],
  sections: [
    { kind: "split", img: "https://testlify.com/wp-content/uploads/2022/11/Risk-to-Reputation.png", h2: "Start hiring with proof, not promises", body: ["Relying on resumes or self-assessments to gauge software fluency is a gamble. Candidates might claim proficiency in tools like Microsoft Office, Slack or Notion — but real skill is hard to fake when it's put to the test. It's faster, fairer and far more reliable than traditional screening."], bullets: [{ label: "Simulate everyday tasks within the actual tools candidates use on the job" }, { label: "Timed, scenario-based questions to assess speed, accuracy and confidence" }, { label: "Instantly highlight top performers before you invest time in interviews" }] },
    { kind: "split", img: "https://testlify.com/wp-content/uploads/2022/08/Reduce-Employee-Turnover-1024x1024.png", h2: "Practical, interactive and built for the modern workplace", body: ["A real-world assessment of daily tasks, customized to your roles and tools. From formatting spreadsheets to building simple visuals or navigating a CRM, we replicate real workflows so you can assess what matters."], bullets: [{ label: "Tool familiarity — can they use Excel shortcuts or Slack threads?" }, { label: "Execution quality — do they build documents cleanly and communicate clearly?" }, { label: "Efficiency — can they get things done under realistic conditions?" }] },
    { kind: "cards", eyebrow: "Why Testlify", h2: "The better way to test job skills", intro: "Increase the effectiveness of your hiring and save your team time — while making it simple.", cards: [
      { title: "Library of tests", desc: "A vast library covering in-demand, job-specific skills. Select the skills and difficulty, then add them to your assessment." },
      { title: "Custom questions", desc: "Add your own questions to refine how you test — multiple-choice or video-based answers." },
      { title: "Automate invitations", desc: "Automate candidate invites from one dashboard with real-time feedback — no switching between tools." },
      { title: "Enjoyable for candidates", desc: "Tests designed to keep candidates motivated and encouraged to finish." },
      { title: "Deeper insights", desc: "Monitor assessments in real time and compare top-performing candidates to hire the best, simply." },
      { title: "Hire at scale", desc: "Scale teams faster and reliably with automated tests and the capacity to assess large volumes of candidates." }
    ] },
    { kind: "split", img: "https://testlify.com/wp-content/uploads/2022/04/Why-Testlify-01-1.png", h2: "From admins to marketers, know who's really job-ready", body: ["Whether it's sending professional emails, managing projects or updating spreadsheets, digital fluency is essential across teams. These aren't generic assessments — they're role-based, tool-specific and performance-focused."], bullets: [{ label: "Administrative & executive assistants" }, { label: "Customer support & service reps" }, { label: "Marketing & social media coordinators" }, { label: "Project managers & ops staff" }, { label: "Sales & HR teams using CRM and communication tools" }], cta: { label: "Try for free", href: routes.pricing } }
  ],
  faqs: [
    { q: "How are software skills tests used in the hiring process?", a: "Assessments that test software frameworks are generally used to evaluate candidates as part of the pre-screening process. They evaluate various software frameworks including HTML, CSS, WordPress, Google Cloud, Azure, Amazon and more. The feedback gives organizations the data to compare and select the best talent in an organized way." },
    { q: "Can testing software skills predict a candidate's workplace performance?", a: "Testing a candidate's skills in software frameworks can help predict whether they will succeed in the workplace. Our tests evaluate a candidate's ability to learn, adapt to challenging work environments, find solutions, make decisions and more." },
    { q: "Why test a candidate's skills in software frameworks?", a: "Finding the best talent requires not only the required qualifications but also aptitude for the position. Testing an applicant's ability to solve problems gives you deeper insights into their actual ability, increasing your team's ability to compare candidates with real-time scoring that goes beyond resumes." },
    { q: "What is the duration of a test?", a: "Each test evaluates one skill, and you may use several. Each is about 10 minutes in duration and can be customized to test for more skills, which affects the total assessment time." },
    { q: "How do I customize tests?", a: "Assessments can be customized by adding any additional skill test from our library. These can be a combination of aptitude, language, programming, software, or role-specific skills." },
    { q: "Is testing a candidate's software skills a reliable gauge?", a: "Our tests are highly accurate and have been tested to ensure results are consistent even when taken again — minimizing complexity and resources needed while providing powerful insights for informed decisions." },
    { q: "How do I schedule a demo?", a: "You can schedule a demo by filling out the request for a demo and we will contact you to make arrangements." }
  ],
  faqTitle: "Frequently asked questions (FAQs)"
},
"psychometric-tests": {
  crumb: "Test type / Personality & culture",
  eyebrow: "Personality & culture tests",
  title: "Assess candidates with psychometric tests and hire the best",
  lead: "One of the main challenges in hiring is identifying candidates who possess the right skills and cultural fit for the organization. Use psychometric tests to overcome hiring challenges and ensure the selection of the best-fit candidates.",
  ctaLabel: "Try for free",
  ctaHref: routes.pricing,
  stats: [{ t: "DISC · SMART · Culture fit" }, { t: "Big Five-based" }, { t: "Bias-reduced hiring" }],
  logos: ["LTIMindtree", "Sonatafy", "Thales", "Third Bridge", "Virtual", "Cogitotech"],
  sections: [
    { kind: "split", img: "https://testlify.com/wp-content/uploads/2023/03/Psychometric-Tests-2.png", h2: "What are psychometric tests?", body: ["Psychometric tests are standardized, objective tools designed to measure aspects of an individual's cognitive abilities, emotional intelligence and personality. They're commonly used in education, employment and psychology to evaluate a person's aptitude, skills and overall suitability for a role or environment."], bullets: [{ label: "Comprehensive assessment of cognitive abilities" }, { label: "Insight into personality traits and behavior" }, { label: "Measures potential to perform specific tasks" }, { label: "Evaluates fit with organizational culture" }] },
    { kind: "split", img: "https://testlify.com/wp-content/uploads/2023/03/Benefits-of-psychometric-tests-for-recruitment-.png", h2: "Benefits of psychometric tests for recruitment", body: ["Psychometric tests offer numerous benefits — objective candidate evaluation, reduced bias and improved hiring decisions."], bullets: [{ label: "Objective evaluation of candidate skills" }, { label: "Reduced bias in the recruitment process" }, { label: "Improved accuracy in hiring decisions" }, { label: "Saves time and resources in recruitment" }] },
    { kind: "cards", eyebrow: "Choose your assessment", h2: "Three personality assessments, one platform", intro: "Pick the framework that fits your role and culture goals.", cards: [
      { title: "DISC personality test", desc: "Understand behavioral styles through statement-based questions on a 4-point Likert scale — aligning candidates' preferences with job requirements and supporting team development." },
      { title: "SMART personality test", desc: "Inspired by the Big Five, SMART evaluates Sociability, Mindfulness, Agreeableness, Receptivity and Temperamental Behavior — backed by rigorous research for recruitment, team building and development." },
      { title: "Cultural Fit test", desc: "Focuses on a candidate's alignment with your organization's ethos, values and work environment — minimizing turnover and maximizing productivity." }
    ] }
  ],
  faqs: [
    { q: "How can psychometric tests be used for recruitment and assessing candidates?", a: "Psychometric tests assess candidates' skills, personality, and cognitive abilities, aiding recruiters in making informed and objective hiring decisions." },
    { q: "What is the purpose of psychometric evaluation in hiring?", a: "Psychometric evaluation in hiring serves to identify candidate suitability, promoting objective assessment of traits crucial for job performance and team dynamics." },
    { q: "What is a personality test for hiring employees?", a: "A personality test for hiring employees evaluates traits like communication, teamwork, and adaptability, aiding in finding the right cultural fit." },
    { q: "What is the Big Five personality test for hiring?", a: "The Big Five personality test analyzes openness, conscientiousness, extraversion, agreeableness, and neuroticism, offering comprehensive insights into candidate traits." },
    { q: "Which personality test can be used by job recruiters?", a: "Recruiters can use various personality tests, such as the DISC personality test or the SMART personality test, to assess candidate suitability and predict on-the-job performance." },
    { q: "Should psychometric testing be used in the hiring process?", a: "Yes, psychometric testing enhances objectivity, improves candidate selection, and ensures a better fit for organizational needs and culture." }
  ],
  faqTitle: "Frequently asked questions (FAQs)"
},
"cognitive-ability-tests": {
  crumb: "Test type / Cognitive ability",
  eyebrow: "Cognitive ability tests",
  title: "Best cognitive ability tests for hiring smart",
  lead: "Resumes show experience. Cognitive tests reveal potential. Testlify's cognitive ability assessments evaluate logical reasoning, problem-solving and numerical ability — so you see how well a candidate can think, learn, reason and solve problems, and identify high-potential candidates with timed questions that test mental agility.",
  ctaLabel: "Try for free",
  ctaHref: routes.pricing,
  stats: [{ t: "Logic · math · verbal" }, { t: "3 difficulty levels" }, { t: "Global benchmarking" }],
  logos: ["LTIMindtree", "Sonatafy", "Thales", "Third Bridge", "Virtual", "Cogitotech"],
  sections: [
    { kind: "split", img: "https://testlify.com/wp-content/uploads/2022/04/cognitive-ability-01-1-1024x837.png", h2: "Identify top thinkers, fast learners and problem-solvers before the interview", body: ["Testlify offers a range of cognitive ability tests — numerical reasoning, verbal reasoning and quantitative aptitude — to thoroughly assess candidates' skills and ensure the best fit for your team."], cta: { label: "View cognitive ability tests", href: routes.testLibrary } },
    { kind: "cards", eyebrow: "What's in it for you", h2: "Everything you need to test cognition at scale", intro: "A complete toolkit for fast, fair cognitive screening.", cards: [
      { title: "Real-time feedback", desc: "A dashboard displaying real-time candidate results you can share with your team to track progress." },
      { title: "Create your own questions", desc: "Add your own questions to expand your testing capability for specific roles." },
      { title: "Candidate friendly", desc: "Challenging but enjoyable assessments so candidates complete tests without frustration." },
      { title: "Customizable", desc: "Design assessments as you require — include specific cognitive tests for any role." },
      { title: "Informed analysis", desc: "Results that help you identify patterns, trends, strengths and weaknesses per candidate." },
      { title: "Choose difficulty", desc: "Three levels — easy, medium and hard — to test different levels of experience and skill." }
    ] },
    { kind: "split", img: "https://testlify.com/wp-content/uploads/2022/05/Accurate-Insights-1024x773.png", h2: "Go beyond gut instinct and measure true potential", body: ["Our cognitive ability assessment clearly shows how candidates reason, solve problems and process new information. Whether hiring for a fast-paced sales role or a data-heavy analyst position, it measures core cognitive skills that predict on-the-job performance — before you make the offer. Tests are crafted by subject-matter experts and rigorously tested to minimize bias."], bullets: [{ label: "Timed questions to test mental agility" }, { label: "Covers logic, math, verbal reasoning and critical thinking" }, { label: "Instant, global-benchmarked scoring for data-driven decisions" }, { label: "Customize questions, timings and more per role" }] },
    { kind: "cards", eyebrow: "What we measure", h2: "The core cognitive skills we assess", intro: "Five research-backed dimensions, mixed and matched per role.", cards: [
      { title: "Numerical reasoning", desc: "Interpreting numbers, patterns, tables, charts, graphs and diagrams to draw conclusions quickly." },
      { title: "Critical & independent thinking", desc: "Solving three-part problems using deductive reasoning and finding new solutions independently." },
      { title: "Spatial reasoning", desc: "Understanding and reasoning about spatial relationships — essential for STEM roles." },
      { title: "Problem-solving", desc: "Analyzing information, thinking critically and arriving at effective solutions under pressure." },
      { title: "Verbal reasoning", desc: "Reasoning from words to reach valid conclusions — for reports, presentations and pitch decks." }
    ] }
  ],
  faqs: [
    { q: "How is cognitive ability testing used in the hiring process?", a: "Assessments that test cognitive ability are generally used to evaluate candidates as part of the pre-screening process. They evaluate cognitive aptitudes, problem-solving, critical thinking, working memory and more — giving organizations the data to compare and select the best talent while minimizing time-to-decision." },
    { q: "Can cognitive testing predict a candidate's workplace performance?", a: "Testing cognitive ability can help predict whether a candidate will succeed in the workplace. Our tests evaluate a candidate's ability to learn, adapt to challenging work environments, find solutions, make decisions and more." },
    { q: "What does a cognitive assessment consist of and what does it measure?", a: "Testlify's cognitive ability assessments evaluate various aptitudes including numerical reasoning, verbal reasoning, logical reasoning, spatial ability and working memory." },
    { q: "What is the duration of cognitive ability tests?", a: "Each test is about 10 minutes in duration, and you may use several. You can customize the assessment to test for more skills, which affects the total time." },
    { q: "How do I customize tests?", a: "Assessments can be customized by adding any additional skill test from our library. These can be a combination of aptitude, language, programming, software, or role-specific skills." },
    { q: "Why test a candidate's cognitive ability?", a: "Finding the best talent requires not only qualifications but also aptitude for the position. Testing an applicant's cognitive ability to solve problems gives you deeper insights into their actual ability, increasing your team's ability to compare candidates with real-time scoring beyond resumes." },
    { q: "Are cognitive ability tests reliable?", a: "Our cognitive aptitude tests are highly accurate and have been tested to ensure results are consistent even when taken again — minimizing complexity and resources needed while providing powerful insights for informed decisions." }
  ],
  faqTitle: "Frequently asked questions (FAQs)"
},
"situational-judgment": {
  crumb: "Test type / Situational judgment",
  eyebrow: "Situational judgment tests",
  title: "Test real-world thinking with situational judgment tests",
  lead: "When resumes blur together and interviews feel rehearsed, how do you really know how a candidate will perform on the job? Situational Judgment Tests simulate the everyday decisions your team faces — giving you a lens into soft skills, critical thinking and cultural fit. It's not guesswork; it's predictive, practical hiring at scale.",
  ctaLabel: "Try for free",
  ctaHref: routes.pricing,
  stats: [{ t: "Real-world scenarios" }, { t: "90%+ completion" }, { t: "DEI-first design" }],
  logos: ["LTIMindtree", "Sonatafy", "Thales", "Third Bridge", "Virtual", "Cogitotech"],
  sections: [
    { kind: "split", img: "https://testlify.com/wp-content/uploads/2022/10/Subject-assessment-1024x1024.png", h2: "Strategic relevance for hiring teams", body: ["A Situational Judgment Test helps you see what a resume can't — how candidates respond to practical, high-pressure situations before you make the hire.", "Our SJTs simulate the day-to-day decisions your team faces. From entry-level roles to leadership, you gain deeper insight into critical thinking, emotional intelligence and how well a candidate fits your team's culture."] },
    { kind: "split", img: "https://testlify.com/wp-content/uploads/2022/11/Better-Skill-Set-Evaluation-Process.png", h2: "Real scenarios, real insight, real talent", body: ["Anyone can say they're a problem solver — our situational judgment assessment makes them prove it. We work with domain experts to craft assessments grounded in real-world situations tailored to your industry, role and expectations."], bullets: [{ label: "Conflict resolution and interpersonal judgment" }, { label: "Prioritization and time management" }, { label: "Ethical decision-making under pressure" }, { label: "Leadership and collaboration dynamics" }] },
    { kind: "split", img: "https://testlify.com/wp-content/uploads/2022/11/Vast-Lib-1-1024x1024-1.png", h2: "Elevate your hiring game, not your workload", body: ["You need smarter hiring, not more complexity. Our SJTs integrate effortlessly into your existing workflows with ready-to-use templates, customizable test paths and built-in automation — saving time while giving more reliable hiring signals."], bullets: [{ label: "A vast library of assessments" }, { label: "Seamless ATS and HRMS integrations" }, { label: "Tailored tests for any role or seniority" }, { label: "Automated scoring, insights and filtering" }] },
    { kind: "split", img: "https://testlify.com/wp-content/uploads/2024/02/How-to-simplify-candidate-screening-with-salesforce-test-1024x761.png", h2: "A better experience for candidates means better talent for you", body: ["Great talent has choices, and a frustrating assessment could mean they choose someone else. Our SJTs are intuitive, fast and fair — no trick questions, no jargon, just realistic scenarios, clear instructions and a polished experience."], bullets: [{ label: "Mobile-friendly and accessible" }, { label: "DEI-first design that reduces bias" }, { label: "90%+ candidate completion rate" }] },
    { kind: "split", img: "https://testlify.com/wp-content/uploads/2022/10/team-1024x567.png", h2: "Actionable insights, not just scores", body: ["A raw score can't tell the full story — our situational judgment assessments can. Get deep, contextual insight into how candidates think and respond, with a reporting dashboard that helps you compare candidates and refine your hiring strategy over time."], bullets: [{ label: "Skill-by-skill breakdowns" }, { label: "Cultural and team fit indicators" }, { label: "Time-stamped decision tracking" }, { label: "Exportable reports for hiring managers and stakeholders" }], cta: { label: "Try for free", href: routes.pricing } }
  ],
  faqs: [
    { q: "What skills can I test under situational judgment tests?", a: "Based on the job role, you can test for business judgment, business communication, time management, business negotiation, critical thinking and business ethics." },
    { q: "How can I customize tests?", a: "Any new skill test from our test library can be added to assessments to make them more unique. Just add the assessments relevant to the job role." },
    { q: "Are the situational judgment tests reliable?", a: "Our situational judgment tests are extremely accurate and have been examined to verify that the results are reliable even after repeated administrations." },
    { q: "Can I add multiple skills to my custom assessment?", a: "Absolutely, yes. Your job description will be used to create a custom assessment that asks questions about all the essential abilities you've listed." },
    { q: "Does every candidate get the same questions?", a: "Yes, it makes it much simpler to evaluate candidates. The MCQ options and question order are both randomized, and we have proctoring and anti-cheating systems in place." },
    { q: "How do I schedule a demo?", a: "You can schedule a demo by filling out the request for a demo and we will contact you to make arrangements." }
  ],
  faqTitle: "Frequently asked questions (FAQs)"
},
"cefr-test": {
  crumb: "Test type / CEFR",
  eyebrow: "CEFR English test",
  title: "Easily and accurately test a person's English ability",
  lead: "Quickly send business-targeted English tests to your prospective candidates and save precious recruitment time by avoiding unnecessary interviews. Scored against the internationally recognized CEFR scale, from A1 to C2.",
  ctaLabel: "Try for free",
  ctaHref: routes.pricing,
  stats: [{ t: "6 levels (A1–C2)" }, { t: "30-min test" }, { t: "Downloadable certificate" }],
  logos: ["LTIMindtree", "Sonatafy", "Thales", "Third Bridge", "Virtual", "Cogitotech"],
  sections: [
    { kind: "cards", eyebrow: "How it works", h2: "From invite to certificate in three steps", intro: "No account needed for candidates — just an email and 48 hours.", cards: [
      { title: "1 · Add and invite candidates", desc: "Add candidate or employee details (bulk upload supported) and send tests to their email in seconds, with bulk-send options." },
      { title: "2 · They complete the test", desc: "Candidates receive an email to complete the CEFR English test — no account required — with 48 hours to take the 30-minute test at a suitable time." },
      { title: "3 · Results are in!", desc: "As soon as the test is completed, you and the candidate are notified instantly. View results and download the certificate from your dashboard to share with colleagues or third parties." }
    ] },
    { kind: "split", img: "https://testlify.com/wp-content/uploads/2022/11/Risk-to-Reputation.png", h2: "How does the Testlify CEFR test work?", body: ["The CEFR test assesses language proficiency to the same standards as the Common European Framework of Reference for Languages, a widely recognized system developed by the Council of Europe in 2001.", "It divides proficiency into six levels, A1 to C2, grouped into three broad categories: Basic User, Independent User and Proficient User.", "Unlike some tests, it does not assign a score unless a candidate reaches a certain level of proficiency — so you accurately assess language ability at all levels."], cta: { label: "View sample scorecard", href: "#" } },
    { kind: "cards", eyebrow: "The scale", h2: "Six CEFR levels, clearly benchmarked", intro: "Every result maps to a precise, internationally understood level.", cards: [
      { title: "A1 · Beginner", desc: "Understands and uses familiar everyday expressions and very basic phrases; can introduce themselves and answer simple personal questions." },
      { title: "A2 · Elementary", desc: "Understands frequently used expressions and communicates in simple, routine tasks on familiar matters." },
      { title: "B1 · Intermediate", desc: "Understands the main points of clear standard input and produces simple connected text on familiar topics." },
      { title: "B2 · Upper intermediate", desc: "Understands complex text on concrete and abstract topics and interacts with fluency and spontaneity." },
      { title: "C1 · Advanced", desc: "Understands demanding, longer texts and expresses ideas fluently for social, academic and professional purposes." },
      { title: "C2 · Mastery", desc: "Understands virtually everything with ease and expresses themselves precisely, differentiating finer shades of meaning." }
    ] }
  ],
  faqs: [
    { q: "What is CEFR grading?", a: "CEFR grading is a system used to evaluate and describe language proficiency. The Common European Framework of Reference for Languages is a standardized system widely used in Europe and beyond to assess and describe language proficiency." },
    { q: "Which skills and competencies are grouped in the Testlify CEFR test?", a: "It consists of four categories of skills and competencies: listening, speaking, reading and writing." },
    { q: "What are the different levels in CEFR?", a: "It consists of six levels of language proficiency, ranging from A1 (beginner) to C2 (proficient)." },
    { q: "Can talent assessments predict a candidate's performance in the workplace?", a: "Testing a candidate's technical skills and aptitudes can help predict whether a candidate is capable of performing in a specific role. Our tests evaluate numerous skills including general aptitudes, language, programming, software and role-specific skills." },
    { q: "How are the pre-employment tests created?", a: "Testlify's AI-powered pre-hire assessments help companies measure the skills and job fitment of a candidate — enabling quick screening, eliminating bias and increasing the productivity of recruiters and hiring managers." },
    { q: "What is the duration of a test?", a: "The CEFR test is about 30 minutes in duration and can be customized to test for more skills, which affects the total time of an assessment." }
  ],
  faqTitle: "Frequently asked questions (FAQs)"
},
"typing-test": {
  crumb: "Test type / Typing",
  eyebrow: "Typing test",
  title: "Streamline recruitment with a typing test",
  lead: "The main challenge in hiring is often identifying the right candidate who not only has the right qualifications but also the right skills for the role. Evaluate candidates' keyboard skills with Testlify's typing test and find the perfect fit for your needs — measuring speed and accuracy with precision.",
  ctaLabel: "Try for free",
  ctaHref: routes.pricing,
  stats: [{ t: "WPM & accuracy" }, { t: "30/60/120s options" }, { t: "3 difficulty levels" }],
  logos: ["LTIMindtree", "Sonatafy", "Thales", "Third Bridge", "Virtual", "Cogitotech"],
  sections: [
    { kind: "split", img: "https://testlify.com/wp-content/uploads/2024/11/Why-test-typing-speed-1.png", h2: "Why test typing speed?", body: ["Typing proficiency relates directly to productivity. Ensure workplace efficiency by assessing typing proficiency, comparing candidates objectively and gaining insights for informed hiring."], bullets: [{ label: "Fast screening" }, { label: "Predict performance" }, { label: "Data-driven decisions" }, { label: "Standardized benchmarks" }] },
    { kind: "split", img: "https://testlify.com/wp-content/uploads/2024/11/Customize-your-typing-test-1-1024x1024.png", h2: "Customize your typing test", body: ["Choose a time limit of 30, 60 or 120 seconds and a difficulty level of easy, medium or hard. Generate a paragraph to assess, or add your own custom paragraph."], bullets: [{ label: "Time flexibility" }, { label: "Tailor difficulty level" }, { label: "Branded experience" }, { label: "Customizable paragraphs" }] },
    { kind: "split", img: "https://testlify.com/wp-content/uploads/2024/11/Score-reports-and-insights-1-1024x1024.png", h2: "Score reports and insights", body: ["Get words per minute (WPM), accuracy and more. Quickly identify skilled candidates through comparative analysis, making informed hiring decisions."], bullets: [{ label: "Detailed breakdown" }, { label: "Comparative analysis" }, { label: "Identify top performers" }, { label: "Integration options" }] },
    { kind: "split", img: "https://testlify.com/wp-content/uploads/2024/11/Easy-setup-administration-2-1024x1024.png", h2: "Easy setup & administration", body: ["Send individual or bulk email invites and monitor test progress and completion. Accessible on any device, anywhere — Testlify simplifies candidate evaluation with mobile-friendly features."], bullets: [{ label: "Invite candidates" }, { label: "Real-time tracking" }, { label: "Mobile-friendly" }, { label: "Seamless user experience" }], cta: { label: "Try for free", href: routes.pricing } }
  ],
  faqs: [
    { q: "How long is a typing test assessment?", a: "The length can vary, ranging from 30 to 120 seconds. The specific length can be customized by the test creator." },
    { q: "Can I choose my own passages for the typing test?", a: "Yes — you can either use one of the passages provided by the platform or create your own by adding it to the text field provided." },
    { q: "How is my typing speed calculated?", a: "Your typing speed is calculated by dividing the number of words typed by the time it took to type them. For example, 50 words in 1 minute is 50 words per minute." },
    { q: "How do I know if I passed the typing test?", a: "After completing the test, you'll see a screen showing your typing speed, accuracy and other metrics. A passing score is determined by the employer or test creator based on the job's requirements." },
    { q: "How does Testlify help in my hiring process?", a: "Testlify's AI-powered pre-hire assessments help companies measure the skills and job fitment of a candidate — enabling quick screening, eliminating bias and increasing recruiter productivity as a proven solution against high turnover." },
    { q: "What types of questions are asked in the pre-employment assessment?", a: "Questions depend on the industry and job role and can include MCQs, video-based questions and open-ended (written or short answer) questions, with programming questions for coding tests." },
    { q: "What are the different types of tests on Testlify?", a: "Tests fall into three main types: Technical (programming, software, role-specific, DevOps, finance, accounting), Cognitive Ability (aptitude), and Personality & Culture and Situational Judgment tests." }
  ],
  faqTitle: "Frequently asked questions (FAQs)"
},
"engineering-skills": {
  crumb: "Test type / Engineering",
  eyebrow: "Engineering tests",
  title: "Redefine your engineering recruitment game",
  lead: "Identifying top engineering talent is no small feat. Our talent assessment tool transforms how recruiters evaluate candidates' skills — with comprehensive engineering tests that accurately gauge capabilities so you make informed, confident hiring decisions.",
  ctaLabel: "Try for free",
  ctaHref: routes.pricing,
  stats: [{ t: "Multi-discipline" }, { t: "Hands-on challenges" }, { t: "Anti-cheat & GDPR" }],
  logos: ["LTIMindtree", "Sonatafy", "Thales", "Third Bridge", "Virtual", "Cogitotech"],
  sections: [
    { kind: "split", img: "https://testlify.com/wp-content/uploads/2022/03/Product-image-1024x741.png", h2: "Assessments for diverse engineering disciplines", body: ["Engineering is a vast field, from software development to mechanical design. We offer a comprehensive range of assessments tailored to different specialties.", "Whether it's coding challenges, circuit design simulations or algorithmic problem-solving, our tests accurately evaluate candidates based on their specific expertise."], cta: { label: "Explore engineering tests", href: routes.testLibrary } },
    { kind: "split", img: "https://testlify.com/wp-content/uploads/2023/03/Work-time-pana.png", h2: "Unearth engineering skills that matter beyond resumes", body: ["Our talent assessment tool lets you delve deeper into a candidate's abilities — providing insights into practical skills, adaptability and creativity.", "Witness how candidates approach real-world challenges and make informed decisions about their compatibility with your team."] },
    { kind: "split", img: "https://testlify.com/wp-content/uploads/2022/06/affiliate-program_Join-the-Testlify-Partner-Program-1024x799.png", h2: "Set engineering skill standards with data-driven insights", body: ["We don't just provide results — we deliver meaningful insights. Our platform offers performance analytics to help you decide the right fit for your team.", "Make informed decisions with comprehensive data that showcases a candidate's strengths and areas for growth, helping you build a team that sets new standards of excellence."], cta: { label: "See reporting & analytics", href: "#" } },
    { kind: "split", img: "https://testlify.com/wp-content/uploads/2022/03/Product-image-1-1024x741.png", h2: "Protecting candidate privacy and test integrity", body: ["Our talent assessment tool is GDPR compliant and we handle candidate data with the utmost care and privacy. Our tests are designed to prevent cheating and plagiarism, guaranteeing the integrity of assessment results — so you can trust the insights into a candidate's engineering skills."], cta: { label: "Try for free", href: routes.pricing } }
  ],
  faqs: [
    { q: "What are engineering tests?", a: "Engineering tests are specialized assessments designed to evaluate practical skills, problem-solving and innovation in engineering candidates." },
    { q: "How do Testlify's engineering tests differ?", a: "Testlify's tests focus on hands-on application, critical thinking and domain-specific challenges, giving you insights beyond traditional assessments." },
    { q: "Are the engineering tests customizable?", a: "Yes. Testlify offers tailored assessments for various engineering domains, ensuring candidates are evaluated in line with their expertise." },
    { q: "How does Testlify integrate into our process?", a: "Testlify seamlessly integrates with popular ATS and HR systems, enhancing your recruitment workflow without disruption." },
    { q: "How are talent assessments used in the hiring process?", a: "Assessments that test engineering skills are used to evaluate candidates as part of pre-screening — covering instrumentation engineering, industrial machinery mechanics, fundamentals of electricity, electrical aptitude, operating system basics and much more." }
  ],
  faqTitle: "Frequently asked questions (FAQs)"
},


  /* ── Company-type & blockchain pages (17-07 export) ─────────────────── */
"for-startups": {
  crumb: "Company size / For startups",
  eyebrow: "For startups",
  title: "Build great teams",
  lead: "Testlify helps you develop a streamlined hiring process that candidates and hiring teams love — so you can find top talent from anywhere in the world and scale your startup with confidence.",
  ctaLabel: "Try for free",
  ctaHref: routes.pricing,
  stats: [{ t: "Launch in minutes" }, { t: "Standardized rubric" }, { t: "Scale without mis-hires" }],
  logos: ["LTIMindtree", "Sonatafy", "Thales", "Third Bridge", "Virtual", "Cogitotech"],
  sections: [
    {
      kind: "split",
      img: "https://testlify.com/wp-content/uploads/2023/04/online-test-1.png",
      h2: "Make your startup ready for effortless scaling",
      body: [
        "At scale, workflows, processes and controls get complicated. Having worked with top Fortune 100 firms and rapidly expanding startups, we've got your back when it comes to scaling, assessing and hiring with ease.",
        "Create a standardized hiring rubric to scale without compromising quality, and raise the bar for skill across the organization to draw talented candidates."
      ]
    },
    {
      kind: "split",
      img: "https://testlify.com/wp-content/uploads/2022/10/Subject-assessment-300x300.png",
      h2: "Identify skills beyond resumes",
      body: [
        "Resumes don't showcase a candidate's skill. Uncover a candidate's true potential with objective skills assessments — reducing bias, expanding your talent pool and helping you achieve your hiring goals."
      ]
    },
    {
      kind: "split",
      img: "https://testlify.com/wp-content/uploads/2022/11/Vast-Lib-1-1024x1024-1.png",
      h2: "Avoid costly mis-hires and reduce hiring costs",
      body: [
        "89% of bad hires lack important skills like adaptability, time management and problem-solving. By testing each candidate's job-ready skills, you avoid expensive mis-hires and decide with certainty. One assessment can examine many competencies and replace numerous hiring phases."
      ],
      bullets: [
        { label: "Multiple formats: spreadsheets, presentations, code challenges" },
        { label: "Go beyond video interviews" },
        { label: "One assessment, many competencies" }
      ],
      cta: { label: "View our test library", href: routes.testLibrary }
    },
    {
      kind: "split",
      img: "https://testlify.com/wp-content/uploads/2022/10/team-1024x567.png",
      h2: "An efficient way to hire at scale",
      body: [
        "Testlify lets you quickly scale your teams and compete for the greatest talent with a seamless hiring experience. There isn't a better way to accurately assess, evaluate and choose candidates with the right skills — while building a diverse team by default."
      ],
      cta: { label: "More on diversity", href: "#" }
    },
    {
      kind: "cards",
      eyebrow: "Ready to use",
      h2: "Predefined tests for a wide range of startup roles",
      intro: "From your first engineer to your first sales hire.",
      cards: [
        { title: "Information Technology", desc: "Data scientists, ML/AI engineers, full-stack, DevOps, system engineers and more." },
        { title: "Sales & Marketing", desc: "Communication, aptitude and role-specific tests for go-to-market hires." },
        { title: "Software Development", desc: "45+ languages, live coding and role-specific developer challenges." },
        { title: "Cloud & Architecture", desc: "Cloud engineering, system design and infrastructure knowledge." },
        { title: "Financial Services", desc: "Analytical thinking, accuracy and finance role-specific assessments." },
        { title: "Cognitive & role-specific", desc: "Cognitive ability, situational judgment, language and communication tests." }
      ]
    }
  ],
  faqs: [
    { q: "How are talent assessments used in the hiring process?", a: "Talent assessments are generally used to evaluate candidates as part of the pre-screening process. They evaluate various skills relevant to a job role, giving organizations the insights to compare and select the best talent for a role." },
    { q: "Are talent assessments reliable?", a: "Our talent assessments are highly accurate and have been tested to ensure their results are consistent even when taken again — reducing complexity and resources needed while providing powerful insights for informed decisions." },
    { q: "Can talent assessments predict a candidate's performance in the workplace?", a: "Testing a candidate's technical skills and aptitudes can help predict whether they're capable of performing in a specific role. Our tests evaluate numerous skills including general aptitudes, language, programming, software and role-specific skills." },
    { q: "How do I customize tests?", a: "Assessments can be customized by adding any additional skill test from our library. These can be a combination of aptitude, language, programming, software or role-specific skills." },
    { q: "What is the duration of a test?", a: "Each test evaluates one skill, and you may use several. Each is about 10 minutes in duration and can be customized to test for more skills, which affects the total time." }
  ],
  faqTitle: "Frequently asked questions (FAQs)"
},
"small-medium-businesses": {
  crumb: "Company size / SMBs",
  eyebrow: "For SMBs",
  title: "Smart skills assessments for SMBs",
  lead: "Make faster, bias-free hiring decisions with expertly designed assessments tailored for small and growing businesses. Testlify is built for the agility and speed SMBs need without compromising on quality — identify top talent with ready-to-use tests, automated workflows and instant insights.",
  ctaLabel: "Try for free",
  ctaHref: routes.pricing,
  stats: [{ t: "50% faster time-to-hire" }, { t: "3,000+ pre-built tests" }, { t: "No HR team needed" }],
  logos: ["LTIMindtree", "Sonatafy", "Thales", "Third Bridge", "Virtual", "Cogitotech"],
  sections: [
    {
      kind: "split",
      img: "https://testlify.com/wp-content/uploads/2022/10/Subject-assessment-1024x1024.png",
      h2: "One platform. Every skill you need",
      body: [
        "Whether you're hiring a marketing generalist, sales associate, developer or customer support rep, we've got you covered."
      ],
      bullets: [
        { label: "3,000+ pre-built tests" },
        { label: "Role-specific & industry-based" },
        { label: "Regularly updated by experts" },
        { label: "Soft skills, technical, cognitive & behavioral" }
      ]
    },
    {
      kind: "cards",
      eyebrow: "Backed by data",
      h2: "Make decisions backed by data",
      intro: "In-depth analytics on every test — compare candidates fairly and avoid bad hires.",
      cards: [
        { title: "Real-time candidate scoring", desc: "Manage hundreds of candidate profiles with a single click and see who's progressing, instantly." },
        { title: "Candidate benchmarking", desc: "Connect with top prospects against job postings while candidates enjoy a simple, professional experience." },
        { title: "Easy PDF reports", desc: "Fully branded assessments and clear PDF reports built for hiring managers to act on fast." }
      ]
    },
    {
      kind: "split",
      img: "https://testlify.com/wp-content/uploads/2022/11/Vast-Lib-1-1024x1024-1.png",
      h2: "A better experience for candidates too",
      body: [
        "Keep top talent engaged with short, relevant, branded assessments that feel like an extension of your company culture."
      ],
      bullets: [
        { label: "Mobile-friendly assessments" },
        { label: "Timed tests" },
        { label: "Custom welcome messages & branding" }
      ]
    },
    {
      kind: "cards",
      eyebrow: "Built for you",
      h2: "Built for teams that need results now",
      intro: "No HR department? No problem — anyone can launch tests in minutes.",
      cards: [
        { title: "Drag-and-drop test creation", desc: "Intuitive design means founders, office managers and team leads can build tests fast." },
        { title: "100+ ATS integrations", desc: "Works out of the box with your existing tools and recruitment workflow." },
        { title: "Anti-cheat & proctoring", desc: "Built-in proctoring and anti-cheating keep every assessment fair and secure." }
      ]
    }
  ],
  faqs: [
    { q: "What is Testlify?", a: "Testlify is the talent assessment platform helping companies hire the best talent quickly, easily, accurately and affordably. We take the stress out of finding the best candidates with deep analysis that's accurate, automated and unbiased." },
    { q: "What is pre-employment testing software?", a: "Pre-employment testing software is a powerful tool recruiters use to analyze prospective employees quickly and efficiently. Testlify's tests are carefully created to match your needs, with 200+ test libraries covering all recruitment tests." },
    { q: "Why is pre-employment testing important?", a: "It helps companies find candidates with relevant skills — saving time and money on training and increasing productivity — by testing on-the-job skills, identifying the best talent faster, building a diverse candidate pool and championing a data-driven HR culture." },
    { q: "How does Testlify help in my hiring process?", a: "Testlify's AI-powered pre-hire assessments measure the skills and job fitment of a candidate, enabling quick screening, eliminating bias and increasing recruiter productivity — a proven solution against high turnover." },
    { q: "What types of questions are asked in the assessment?", a: "Questions depend on the industry and role and can include MCQs, video-based questions and open-ended (written or short answer) questions, with programming questions for coding tests." },
    { q: "What types of tests are available on the platform?", a: "Three main types: Technical (programming, software, role-specific, DevOps, finance, accounting), Cognitive Ability (aptitude), and Personality & Culture and Situational Judgment tests." }
  ],
  faqTitle: "Frequently asked questions (FAQs)"
},
"non-profits": {
  crumb: "Company size / Non-profits",
  eyebrow: "For non-profits",
  title: "Affordable skills assessments for non-profits",
  lead: "Nonprofits often grapple with tight budgets that limit competitive salaries and recruitment resources. Our affordable skills assessment solution helps modern talent teams identify qualified candidates at scale — ensuring a seamless fit with unique roles and organizational culture, without straining your finances.",
  ctaLabel: "Try for free",
  ctaHref: routes.pricing,
  stats: [{ t: "25% non-profit discount" }, { t: "Full assessment access" }, { t: "Mission-aligned hiring" }],
  logos: ["LTIMindtree", "Sonatafy", "Thales", "Third Bridge", "Virtual", "Cogitotech"],
  sections: [
    {
      kind: "split",
      img: "https://testlify.com/wp-content/uploads/2024/01/Highly-Competitive-Market-for-Talent.png-1.webp",
      h2: "Affordable talent assessment solutions for non-profits",
      body: [
        "Enhance your nonprofit's hiring success without stretching your budget. We offer a special 25% discount exclusively for non-profit organizations — full access to all assessments at a reduced rate, without compromising on quality."
      ],
      bullets: [
        { label: "Exclusive 25% discount — use code TESTLIFYCARES25" },
        { label: "Budget-friendly, reliable solutions" },
        { label: "Full access to all assessments" },
        { label: "AI-powered interviews in video, audio & chat" }
      ]
    },
    {
      kind: "split",
      img: "https://testlify.com/wp-content/uploads/2022/10/Subject-assessment-1024x1024.png",
      h2: "Customized skills assessment for non-profit organizations",
      body: [
        "Unlock tailored success with tests crafted for nonprofit organizations — and create and customize your own. Harness sector-specific insights to cultivate mission-aligned skills for strategic talent development."
      ],
      bullets: [
        { label: "Sector-specific evaluations" },
        { label: "Customized competency testing" },
        { label: "Mission-aligned skill metrics" },
        { label: "Strategic talent development" }
      ]
    },
    {
      kind: "split",
      img: "https://testlify.com/wp-content/uploads/2024/01/Financial-Industry-2.png.webp",
      h2: "We understand non-profit roles",
      body: [
        "In the challenging landscape of nonprofit management — from surpassing fundraising targets to prudent financial stewardship — flawless hiring is non-negotiable.",
        "Discover candidates who not only meet but exceed performance targets, aligning seamlessly with your organizational culture, courtesy of our precision talent assessment solution."
      ],
      cta: { label: "Try for free", href: routes.pricing }
    }
  ],
  faqs: [
    { q: "What pricing options are available for non-profit organizations?", a: "Non-profit organizations benefit from an extra 25% discount on our talent assessment solution pricing." },
    { q: "How does the platform address recruitment challenges specific to nonprofits?", a: "Our platform provides tailored assessments for the nonprofit sector, simplifying hiring processes for efficient talent acquisition." },
    { q: "Can non-profits effectively manage hiring within budget constraints?", a: "Certainly — our cost-effective tools empower nonprofit recruiters to attract and assess top talent, even with limited financial resources." },
    { q: "How does the platform enhance workforce diversity?", a: "Effortlessly integrate diverse talents, from volunteers to part-time staff, fostering an inclusive organizational culture crucial for mission success." },
    { q: "Is the platform user-friendly for recruiters with limited resources?", a: "Absolutely — our streamlined tools optimize efficiency, ensuring ease of use for nonprofit recruiters managing the hiring process with limited resources." }
  ],
  faqTitle: "Frequently asked questions (FAQs)"
},
"public-sector-talent-assessment-solution": {
  crumb: "Company size / Public sector",
  eyebrow: "For public sector",
  title: "Public sector talent assessment solution",
  lead: "Testlify empowers public sector organizations to make informed hiring decisions, build a mission-ready workforce and cultivate top talent — deploying the right people at the right time and fostering a diverse, equitable and inclusive workforce.",
  ctaLabel: "Book a demo",
  ctaHref: routes.contact,
  stats: [{ t: "EEOC-defensible" }, { t: "Secure & confidential" }, { t: "DEI-first assessments" }],
  logos: ["LTIMindtree", "Sonatafy", "Thales", "Third Bridge", "Virtual", "Cogitotech"],
  sections: [
    {
      kind: "split",
      img: "https://testlify.com/wp-content/uploads/2022/09/Hire-Fast-or-Lose-1024x786.png",
      h2: "Streamline recruitment and deployment processes",
      body: [
        "Finding the right talent for crucial public sector roles is essential for success. Our comprehensive assessment solution helps you streamline recruitment and deployment.",
        "Advanced assessments identify candidates with the necessary skills, knowledge and competencies for specific positions — so you deploy the right talent at the right time and drive positive outcomes."
      ]
    },
    {
      kind: "split",
      img: "https://testlify.com/wp-content/uploads/2023/06/Product-image-1-4-1024x741.png",
      h2: "Identify promising candidates",
      body: [
        "Discovering new talent is key to the growth and success of any organization. With Testlify, you identify promising candidates with the skills and potential to excel in the public sector.",
        "Our assessments evaluate aptitude, problem-solving, critical thinking and more — uncovering hidden talent and individuals who can make a significant impact."
      ]
    },
    {
      kind: "split",
      img: "https://testlify.com/wp-content/uploads/2022/09/2.-Hyper-Growth-Industry-1024x1024.png",
      h2: "Nurture and develop your workforce",
      body: [
        "Building a strong workforce requires cultivating and developing top talent. Testlify provides the tools and insights to nurture the potential of your employees.",
        "With personalized development plans, tailored feedback and performance tracking, you enhance productivity, boost engagement and foster a culture of continuous improvement."
      ]
    },
    {
      kind: "split",
      img: "https://testlify.com/wp-content/uploads/2023/07/Before-you-continue-01-2-1024x761.png",
      h2: "Assess skills and competencies",
      body: [
        "Preparing your workforce for the challenges of the public sector requires a clear understanding of their skills. Testlify helps you assess capabilities, identify skills gaps and develop targeted training programs — building a mission-ready workforce equipped to drive positive change."
      ],
      cta: { label: "View our test library", href: routes.testLibrary }
    },
    {
      kind: "cards",
      eyebrow: "Built for public sector",
      h2: "Trusted, secure and inclusive by design",
      intro: "Everything public sector hiring demands, in one platform.",
      cards: [
        { title: "Reduced hiring time", desc: "Automated screening, assessment administration and scoring fill critical positions efficiently and effectively." },
        { title: "Secure & confidential", desc: "Industry-standard security protocols keep candidate information confidential and protected throughout." },
        { title: "White-label solution", desc: "Customize the platform with your logo, colors and design for a seamless, professional candidate experience." },
        { title: "Diverse & inclusive", desc: "Fair, unbiased assessments evaluate every candidate on ability — supporting your DEI initiatives." }
      ]
    }
  ],
  faqs: [
    { q: "How does Testlify help identify the right talent for public sector roles?", a: "Testlify uses advanced assessments that evaluate skills, knowledge and competencies specific to public sector positions, helping identify the most suitable candidates." },
    { q: "Can Testlify's assessments be customized to our specific hiring criteria?", a: "Yes — Testlify's assessments can be tailored to match your organization's unique hiring criteria, ensuring alignment with the specific skills and qualities you seek." },
    { q: "What metrics and insights does Testlify provide?", a: "Testlify offers comprehensive metrics and insights — performance scores, comparative analysis and detailed feedback — helping you make data-driven decisions." },
    { q: "How does Testlify foster diversity, equity and inclusion?", a: "Testlify promotes DEI by providing fair, unbiased assessments that remove biases to ensure equal opportunities for all candidates, fostering a diverse and inclusive workforce." },
    { q: "Can Testlify help identify skills gaps within our existing workforce?", a: "Absolutely — Testlify's talent assessment solution identifies skills gaps by evaluating your employees' capabilities, enabling targeted training programs to address them." },
    { q: "What sets Testlify apart for the public sector?", a: "A specialized focus on the public sector, with tailored assessments, DEI support and features designed to meet the unique needs of public sector organizations." }
  ],
  faqTitle: "Frequently asked questions (FAQs)"
},
"blockchain-industry": {
  crumb: "Industry / Blockchain",
  eyebrow: "For blockchain teams",
  title: "Hire top blockchain talent with confidence",
  lead: "Testlify helps you identify skilled developers, architects, and analysts in the blockchain industry with assessments designed for real-world skills that are accurate, fast, and bias-free.",
  ctaLabel: "Try for Free",
  ctaHref: routes.pricing,
  stats: [],
  logos: [],
  sections: [
    {
      kind: "split",
      img: "/assets/blockchain-talent-gap.png",
      h2: "The blockchain talent gap is real",
      body: [
        "Hiring in blockchain is hard. The tech is complex. Resumes are often exaggerated. And traditional interviews miss key skills like smart contract security, cryptography, or Ethereum dev experience.",
        "With Testlify, you no longer rely on gut feelings. Test candidates' actual ability, real coding skill, and practical blockchain knowledge, before they ever get to the interview.",
        "Save time without compromising on the results."
      ]
    },
    {
      kind: "split",
      img: "/assets/blockchain-real-skills.png",
      h2: "Real skills. Verified before you interview",
      body: [
        "Testlify simplifies technical hiring by giving you the tools to test blockchain skills early.",
        "From startups building dApps to enterprises hiring Web3 developers, we help teams cut time-to-hire, reduce bad hires, and scale confidently with:"
      ],
      bullets: [
        { label: "Pre-built blockchain assessments" },
        { label: "Custom tests tailored to your stack" },
        { label: "Anti-cheating features for remote hiring" },
        { label: "Easy integration with your ATS" },
        { label: "Advanced real-time analytics and reporting" },
        { label: "Global benchmark candidates in one place" },
        { label: "Sync candidate data effortlessly and automate workflows" }
      ],
      cta: { label: "Try for Free", href: routes.pricing }
    },
    {
      kind: "split",
      img: "/assets/blockchain-assessments.png",
      h2: "Testlify's blockchain assessments cover what matters most",
      body: [
        "Our library includes role-specific tests designed by blockchain experts. You can evaluate candidates on:",
        "You can mix and match these with soft skills and cognitive tests to get a 360° candidate profile."
      ],
      bullets: [
        { label: "Smart contract development (Solidity, Rust)" },
        { label: "Ethereum fundamentals and dApp architecture" },
        { label: "Blockchain security best practices" },
        { label: "Cryptographic algorithms" },
        { label: "Problem-solving in decentralized environments" }
      ]
    }
  ],
  faqs: [
    { q: "Can Testlify assess smart-contract skills?", a: "Yes. Interactive coding environments support Solidity, Rust and other Web3 languages, with real-world tasks and security scenarios." },
    { q: "Is Testlify suitable for startups and enterprises?", a: "Yes. Testlify scales from a handful of hires to thousands of candidates across regions and roles." },
    { q: "How is candidate data secured?", a: "All data is encrypted in transit and at rest with strict access controls. Testlify is SOC 2 Type II, ISO 27001 and GDPR compliant." },
    { q: "Does Testlify integrate with our ATS?", a: "Yes — 100+ native ATS integrations plus Slack and an open API, on every paid plan." },
    { q: "Can assessments be customized to our stack?", a: "Absolutely. Tailor tests to your chains, tooling and role requirements." }
  ],
  ctaEyebrow: "Get started",
  ctaTitle: "Hire blockchain talent you can trust.",
  ctaBody: "Resumes don't tell you who can secure the chain. Prove who can actually do the job — start assessing in minutes.",
  ctaTicks: ["7-day free trial", "Unlimited assessments", "Cancel anytime"]
}

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
