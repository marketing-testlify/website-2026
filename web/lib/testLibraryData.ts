import type { TestIconKey } from "@/components/TestIcon";

export type Difficulty = "Beginner" | "Intermediate" | "Advanced";

export type TestType = {
  key: TestIconKey;
  label: string;
  count: number;
};

export type TestEntry = {
  name: string;
  type: TestIconKey;
  level: Difficulty;
  /** duration in minutes */
  dur: number;
  /** number of questions */
  questions: number;
  desc: string;
};

/** 12 real category filters, ported from the prototype. */
export const TEST_TYPES: TestType[] = [
  { key: "role", label: "Role specific", count: 1240 },
  { key: "cognitive", label: "Cognitive ability", count: 245 },
  { key: "software", label: "Software skills", count: 320 },
  { key: "programming", label: "Programming", count: 210 },
  { key: "coding", label: "Coding", count: 180 },
  { key: "engineering", label: "Engineering skills", count: 140 },
  { key: "personality", label: "Personality & culture", count: 86 },
  { key: "language", label: "Language", count: 95 },
  { key: "situational", label: "Situational judgment", count: 64 },
  { key: "typing", label: "Typing", count: 18 },
  { key: "bluecollar", label: "Blue collar", count: 110 },
  { key: "simulation", label: "Simulation", count: 24 },
];

export const TYPE_LABEL: Record<TestIconKey, string> = TEST_TYPES.reduce(
  (m, t) => {
    m[t.key] = t.label;
    return m;
  },
  {} as Record<TestIconKey, string>
);

export const DIFFICULTIES: Difficulty[] = [
  "Beginner",
  "Intermediate",
  "Advanced",
];

export const POPULAR = [
  "Attention to Detail",
  "JavaScript",
  "Excel",
  "English",
  "Leadership",
];

/** 48 representative test cards, ported 1:1 from the prototype. */
export const TESTS: TestEntry[] = [
  ["Attention to Detail (Textual)", "cognitive", "Intermediate", 15, 10, "Spot inconsistencies and errors across written information under time pressure."],
  ["Attention to Detail (Visual)", "cognitive", "Intermediate", 12, 12, "Identify subtle differences in images, layouts and data at a glance."],
  ["Numerical Reasoning", "cognitive", "Intermediate", 20, 15, "Interpret charts, ratios and figures to draw accurate conclusions."],
  ["Verbal Reasoning", "cognitive", "Intermediate", 18, 14, "Evaluate arguments and draw logical inferences from written passages."],
  ["Logical Reasoning", "cognitive", "Advanced", 20, 15, "Solve abstract pattern and deduction problems that predict learning speed."],
  ["Abstract Reasoning", "cognitive", "Advanced", 18, 12, "Recognise rules and relationships in non-verbal sequences."],
  ["Critical Thinking", "cognitive", "Advanced", 25, 18, "Assess assumptions, evidence and conclusions in complex scenarios."],
  ["Problem Solving", "cognitive", "Intermediate", 20, 14, "Break down unfamiliar problems and reach sound, structured solutions."],
  ["JavaScript", "programming", "Intermediate", 20, 15, "Core language, ES6+, async, DOM and common front-end patterns."],
  ["Python", "programming", "Intermediate", 20, 15, "Syntax, data structures, OOP and standard-library fluency."],
  ["Java", "programming", "Advanced", 25, 18, "OOP design, collections, concurrency and JVM fundamentals."],
  ["React", "programming", "Advanced", 22, 16, "Hooks, state management, component design and performance."],
  ["Node.js", "programming", "Advanced", 22, 16, "Async I/O, Express, APIs and back-end architecture."],
  ["SQL", "programming", "Intermediate", 18, 14, "Joins, aggregation, sub-queries and query optimisation."],
  ["Data Structures", "coding", "Advanced", 30, 6, "Implement and reason about arrays, trees, graphs and hashing."],
  ["Algorithms", "coding", "Advanced", 35, 6, "Sorting, searching, recursion and complexity analysis in code."],
  ["Live Coding: Python", "coding", "Advanced", 40, 4, "Real-time coding challenge with an in-browser IDE and test cases."],
  ["Microsoft Excel", "software", "Intermediate", 20, 20, "Formulas, lookups, pivot tables and data modelling."],
  ["Microsoft Word", "software", "Beginner", 15, 15, "Formatting, styles, references and document collaboration."],
  ["Google Sheets", "software", "Intermediate", 18, 16, "Functions, queries, charts and shared-sheet workflows."],
  ["Adobe Photoshop", "software", "Intermediate", 20, 15, "Layers, masking, retouching and export for production."],
  ["Figma", "software", "Intermediate", 18, 14, "Components, auto-layout, prototyping and design systems."],
  ["Salesforce", "software", "Advanced", 22, 16, "Objects, automation, reports and admin best practices."],
  ["Mechanical Engineering", "engineering", "Advanced", 25, 18, "Statics, materials, thermodynamics and design principles."],
  ["Electrical Engineering", "engineering", "Advanced", 25, 18, "Circuits, signals, power systems and electronics fundamentals."],
  ["Big Five Personality (OCEAN)", "personality", "Beginner", 15, 50, "Measure the five core traits that predict workplace behaviour."],
  ["DISC Personality", "personality", "Beginner", 12, 28, "Map dominance, influence, steadiness and conscientiousness."],
  ["16 Personality Traits", "personality", "Beginner", 20, 60, "A comprehensive profile of work style and motivation."],
  ["Culture Fit", "personality", "Beginner", 12, 30, "Gauge alignment with your team values and ways of working."],
  ["Leadership Style", "personality", "Intermediate", 15, 24, "Reveal how a candidate motivates, decides and delegates."],
  ["English (CEFR)", "language", "Beginner", 30, 40, "Grammar, vocabulary and comprehension graded A1–C2."],
  ["Business English", "language", "Intermediate", 20, 25, "Professional writing, email and workplace communication."],
  ["Spanish", "language", "Beginner", 20, 25, "Reading, grammar and everyday conversational proficiency."],
  ["German", "language", "Beginner", 20, 25, "Foundational grammar, vocabulary and comprehension."],
  ["Digital Marketing", "role", "Intermediate", 20, 15, "SEO, paid media, analytics and campaign strategy essentials."],
  ["SEO Specialist", "role", "Intermediate", 18, 15, "On-page, technical and off-page optimisation know-how."],
  ["Content Writing", "role", "Intermediate", 20, 12, "Clarity, structure, tone and audience-aware editing."],
  ["Financial Analyst", "role", "Advanced", 25, 18, "Modelling, valuation, ratios and statement analysis."],
  ["Accounting", "role", "Intermediate", 22, 16, "Bookkeeping, reconciliation, GAAP and reporting basics."],
  ["HR Manager", "role", "Intermediate", 20, 15, "Hiring, employee relations, policy and compliance."],
  ["Project Management", "role", "Intermediate", 22, 16, "Scoping, scheduling, risk and stakeholder management."],
  ["Data Analyst", "role", "Advanced", 25, 18, "SQL, statistics, visualisation and insight communication."],
  ["Leadership SJT", "situational", "Intermediate", 20, 15, "Judgement on real leadership dilemmas and trade-offs."],
  ["Customer Service SJT", "situational", "Beginner", 15, 12, "Handle difficult customers and prioritise the right response."],
  ["Sales SJT", "situational", "Intermediate", 18, 14, "Navigate objections, qualifying and deal-stage decisions."],
  ["Typing Speed & Accuracy", "typing", "Beginner", 5, 1, "Measure words-per-minute and error rate in a timed test."],
  ["Warehouse Operations", "bluecollar", "Beginner", 15, 12, "Safety, inventory handling and process knowledge for ops roles."],
  ["Chat Support Simulation", "simulation", "Intermediate", 20, 8, "A realistic chat scenario scoring tone, accuracy and resolution."],
].map(([name, type, level, dur, questions, desc]) => ({
  name,
  type,
  level,
  dur,
  questions,
  desc,
}) as TestEntry);

export const DIFFICULTY_CLASSES: Record<
  Difficulty,
  { bg: string; fg: string }
> = {
  Beginner: { bg: "bg-beg-bg", fg: "text-beg-fg" },
  Intermediate: { bg: "bg-int-bg", fg: "text-int-fg" },
  Advanced: { bg: "bg-adv-bg", fg: "text-adv-fg" },
};

/** Slugify a test name for the detail-page route. */
export function testSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[()]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
