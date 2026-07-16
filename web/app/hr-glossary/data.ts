/**
 * HR Glossary data — ported verbatim from the prototype logic classes
 * (resource-glossary.dc.html term list + resource-glossary-detail.dc.html DATA).
 * Copy/data is extracted exactly; never invented.
 */

/** URL-friendly slug for a term title. */
export function termSlug(term: string): string {
  return term
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export type Term = { term: string; short: string };

/** The 29 seed terms shipped by the hub prototype (scaling to 500+). */
export const TERMS: Term[] = [
  { term: "Adverse Impact", short: "When a hiring practice disproportionately screens out a protected group, even without intent to discriminate." },
  { term: "Applicant Tracking System (ATS)", short: "Software that manages job applications and moves candidates through each hiring stage." },
  { term: "Aptitude Test", short: "An assessment that measures a candidate’s natural ability to learn or perform specific tasks." },
  { term: "Assessment", short: "A structured method of measuring a candidate’s skills, knowledge or traits against the job." },
  { term: "Behavioral Interview", short: "An interview technique that asks about past situations to predict future on-the-job behavior." },
  { term: "Benchmarking", short: "Comparing candidate scores against a role-specific or industry standard to judge fit." },
  { term: "Blind Hiring", short: "Removing identifying details from applications to reduce unconscious bias in screening." },
  { term: "Candidate Experience", short: "The overall impression a candidate forms of your company across the hiring process." },
  { term: "Cognitive Ability Test", short: "A test of reasoning, problem-solving and learning speed — a strong predictor of job performance." },
  { term: "Competency", short: "A measurable skill, knowledge area or behavior required to perform a role well." },
  { term: "Cost Per Hire", short: "The total recruiting spend divided by the number of hires made in a period." },
  { term: "Culture Add", short: "Hiring for the perspectives and strengths a candidate brings that your team currently lacks." },
  { term: "Diversity, Equity & Inclusion (DEI)", short: "Practices that build a fair, representative and inclusive workforce." },
  { term: "EEOC Compliance", short: "Meeting U.S. Equal Employment Opportunity Commission rules against discriminatory hiring." },
  { term: "Employer Branding", short: "How a company presents itself as a place to work to attract and retain talent." },
  { term: "Job Analysis", short: "A systematic study of a role’s tasks and requirements to define what to assess." },
  { term: "Job Simulation", short: "A realistic task that mimics actual work so you can see how a candidate performs." },
  { term: "Onboarding", short: "The process of integrating and equipping a new hire to be productive quickly." },
  { term: "Predictive Validity", short: "How well an assessment score actually forecasts future job performance." },
  { term: "Proctoring", short: "Monitoring an online assessment to keep results honest and defensible." },
  { term: "Quality of Hire", short: "A measure of the value a new hire adds, from performance to retention." },
  { term: "Screening", short: "The early filtering of applicants to identify who is worth a closer look." },
  { term: "Situational Judgment Test", short: "A test presenting realistic scenarios to assess decision-making and judgment." },
  { term: "Skills-Based Hiring", short: "Hiring on proven ability rather than degrees, titles or years of experience." },
  { term: "Structured Interview", short: "A consistent interview using the same questions and scoring for every candidate." },
  { term: "Time to Hire", short: "The number of days from a candidate applying to accepting an offer." },
  { term: "Unconscious Bias", short: "Automatic assumptions that influence hiring decisions without the recruiter realizing." },
  { term: "Validity", short: "The degree to which an assessment measures what it claims to measure." },
  { term: "Work Sample Test", short: "A hands-on task drawn from real job duties to evaluate practical skill." },
];

/** The advertised full library size (from the prototype's TOTAL). */
export const TOTAL = 500;

export type HowStep = { title: string; desc: string };

export type TermDetail = {
  term: string;
  letter: string;
  oneLiner: string;
  definition: string[];
  callout: string;
  whyPoints: string[];
  howTitle: string;
  howSteps: HowStep[];
  related: string[];
  ctaTitle: string;
  ctaBody: string;
};

/**
 * Full definition-article data, keyed by slug. Only the sample term(s) the
 * detail prototype ships with are populated — verbatim from its DATA object.
 * Unknown slugs fall through to notFound().
 */
export const GLOSSARY: Record<string, TermDetail> = {
  "skills-based-hiring": {
    term: "Skills-Based Hiring",
    letter: "S",
    oneLiner:
      "is the practice of evaluating and hiring candidates on their proven ability to do the job — rather than proxies like degrees, job titles or years of experience.",
    definition: [
      "Skills-based hiring flips the traditional process on its head. Instead of screening resumes for the right school or the right past employer, you define the skills a role actually requires and measure candidates against them directly — usually through validated assessments, work samples or structured interviews.",
      "The result is a shortlist built on evidence. A candidate who can demonstrably do the work rises to the top, even if their background looks unconventional on paper. That widens your talent pool and reduces the bias baked into credential-first screening.",
    ],
    callout:
      "“The best predictor of whether someone can do a job is watching them do a version of it — not reading where they went to school.”",
    whyPoints: [
      "Predicts performance better — skills tests and work samples are far stronger predictors of on-the-job success than resumes.",
      "Widens the talent pool — you surface capable candidates who lack traditional credentials but have the ability.",
      "Reduces bias — standardized, job-relevant measures give every candidate the same fair shot.",
      "Speeds up hiring — automated screening cuts time spent on resumes and unqualified phone screens.",
    ],
    howTitle: "How to put skills-based hiring into practice",
    howSteps: [
      { title: "Define the skills that matter", desc: "Run a quick job analysis to list the technical and soft skills the role genuinely requires." },
      { title: "Assess every candidate the same way", desc: "Use validated tests or work samples so each applicant is measured against the same bar." },
      { title: "Rank on evidence, then interview", desc: "Shortlist by results and reserve interviews for candidates who’ve already proven capability." },
    ],
    related: ["Assessment", "Work Sample Test", "Cognitive Ability Test", "Structured Interview", "Quality of Hire"],
    ctaTitle: "Hire on skill, not on paper",
    ctaBody:
      "Testlify turns any role into a validated, skills-based assessment — so you shortlist the people who can actually do the job.",
  },
};

export const GLOSSARY_SLUGS = Object.keys(GLOSSARY);
