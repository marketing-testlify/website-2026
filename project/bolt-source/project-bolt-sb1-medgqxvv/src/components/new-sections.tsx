import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import {
  Search, Code2, FileText, Brain, Users, Sparkles,
  Globe, Shield, ChevronDown, CheckCircle2,
} from "lucide-react"
import { EASE_OUT, SPRING, SPRING_SOFT, withDelay } from "@/lib/motion"
import { cn } from "@/lib/utils"

/* ───────────────────────────── Test Library ───────────────────────────── */

const testChips = [
  "JavaScript (Coding)", "React", "Python (Coding)", "Java", "TypeScript", "Node.js",
  "SQL", "AWS", "Docker", "Cognitive Ability", "Verbal Reasoning", "Personality Fit",
  "Customer Service", "Sales Aptitude", "Data Analysis", "Leadership",
]

export function TestLibrarySection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const [query, setQuery] = useState("")
  const filtered = testChips.filter((c) => c.toLowerCase().includes(query.toLowerCase()))

  return (
    <section id="test-library" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 dot-bg opacity-30 pointer-events-none" />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div ref={ref} className="text-center mb-12">
          <motion.span className="text-xs font-semibold tracking-widest text-primary uppercase block mb-3"
            initial={{ opacity: 0, y: 16 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={EASE_OUT}>
            The test library
          </motion.span>
          <motion.h2 className="text-[clamp(2rem,4.5vw,3.25rem)] font-bold tracking-tight text-balance text-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 28 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={withDelay(EASE_OUT, 0.1)}>
            3,500+ validated tests. A match for <span className="gradient-text">every role you hire.</span>
          </motion.h2>
          <motion.p className="text-lg text-muted-foreground mt-5 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={withDelay(EASE_OUT, 0.2)}>
            Search by role, skill or language — Testlify pulls a job-ready assessment in minutes, every test expert-validated and bias-checked.
          </motion.p>
        </div>

        <motion.div className="max-w-xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={withDelay(EASE_OUT, 0.3)}>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by role, skill or language…"
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-surface-1 border border-border/50 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/40 focus:ring-2 focus:ring-primary/10 transition-all"
            />
          </div>
        </motion.div>

        <motion.div className="flex flex-wrap justify-center gap-2.5 max-w-3xl mx-auto"
          initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={withDelay(EASE_OUT, 0.4)}>
          {filtered.slice(0, 12).map((chip, i) => (
            <motion.span key={chip}
              className="px-4 py-2 rounded-full bg-surface-1 border border-border/40 text-sm font-medium text-foreground hover:border-primary/30 hover:bg-accent transition-all cursor-default"
              initial={{ opacity: 0, scale: 0.8 }} animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={withDelay(SPRING, 0.4 + i * 0.04)}>
              {chip}
            </motion.span>
          ))}
        </motion.div>
        <motion.p className="text-center text-sm text-muted-foreground mt-8"
          initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={withDelay(EASE_OUT, 0.6)}>
          Showing {Math.min(filtered.length, 12)}+ of 3,500+ validated tests
        </motion.p>
      </div>
    </section>
  )
}

/* ───────────────────────── Skills Intelligence ───────────────────────── */

export function SkillsIntelligenceSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  return (
    <section className="py-28 relative overflow-hidden bg-surface-1/50">
      <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.span className="text-xs font-semibold tracking-widest text-primary uppercase block mb-3"
          initial={{ opacity: 0, y: 16 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={EASE_OUT}>
          Skills intelligence
        </motion.span>
        <motion.h2 className="text-[clamp(2rem,4.5vw,3.25rem)] font-bold tracking-tight text-balance text-foreground"
          initial={{ opacity: 0, y: 28 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={withDelay(EASE_OUT, 0.1)}>
          From application to ranked shortlist — <span className="gradient-text">automatically</span>
        </motion.h2>
        <motion.p className="text-lg text-muted-foreground mt-5 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={withDelay(EASE_OUT, 0.2)}>
          Every candidate is scored the moment they finish. Testlify validates skills, weighs them against the role, and surfaces your strongest people — no spreadsheets, no bias, no waiting.
        </motion.p>
      </div>
    </section>
  )
}

/* ───────────────────────── Hiring Scenarios ──────────────────────────── */

const scenarios = [
  { icon: Users, title: "High-volume hiring", description: "Screen thousands of applicants automatically and surface the top few in minutes." },
  { icon: Globe, title: "Global assessments", description: "Assess candidates anywhere, in 9 languages, with a consistent, fair experience." },
  { icon: Brain, title: "Aptitude & potential", description: "Evaluate potential and aptitude at scale — no experience required to shine." },
  { icon: Shield, title: "Bias-free screening", description: "Remove bias from screening and build teams on merit, not pedigree." },
  { icon: Code2, title: "Developer screening", description: "Live coding, real-world dev tasks and auto-scored challenges across 50+ stacks." },
  { icon: Sparkles, title: "Situational judgement", description: "Role-play simulations and situational judgement tests that mirror the real job." },
  { icon: Users, title: "Personality & culture", description: "Personality, aptitude and cognitive insight to build cohesive, high-trust teams." },
  { icon: FileText, title: "Senior role validation", description: "Validate deep, role-specific expertise before you commit to a senior hire." },
]

export function HiringScenariosSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  return (
    <section className="py-28 relative overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div ref={ref} className="text-center mb-16">
          <motion.span className="text-xs font-semibold tracking-widest text-primary uppercase block mb-3"
            initial={{ opacity: 0, y: 16 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={EASE_OUT}>
            Built for every hiring scenario
          </motion.span>
          <motion.h2 className="text-[clamp(2rem,4.5vw,3.25rem)] font-bold tracking-tight text-balance text-foreground"
            initial={{ opacity: 0, y: 28 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={withDelay(EASE_OUT, 0.1)}>
            One platform, <span className="gradient-text">every way you hire</span>
          </motion.h2>
          <motion.p className="text-lg text-muted-foreground mt-5 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={withDelay(EASE_OUT, 0.2)}>
            From high-volume frontline roles to senior leadership, teams use Testlify to hire fairly and fast across every function and region.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {scenarios.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div key={s.title}
                className="group p-6 rounded-2xl bg-surface-1 border border-border/40 hover:border-primary/25 hover:shadow-lg hover:shadow-black/5 transition-all"
                initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={withDelay(SPRING_SOFT, 0.1 + i * 0.06)}>
                <div className="size-10 rounded-xl bg-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="size-5 text-primary" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ──────────────────────────── Global Reach ───────────────────────────── */

export function GlobalReachSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  return (
    <section className="py-28 relative overflow-hidden bg-surface-1/50">
      <div className="absolute inset-0 dot-bg opacity-20 pointer-events-none" />
      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.span className="text-xs font-semibold tracking-widest text-primary uppercase block mb-3"
          initial={{ opacity: 0, y: 16 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={EASE_OUT}>
          Global reach
        </motion.span>
        <motion.h2 className="text-[clamp(2rem,4.5vw,3.25rem)] font-bold tracking-tight text-balance text-foreground"
          initial={{ opacity: 0, y: 28 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={withDelay(EASE_OUT, 0.1)}>
          Find the best talent <span className="gradient-text">anywhere in the world</span>
        </motion.h2>
        <motion.p className="text-lg text-muted-foreground mt-5 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={withDelay(EASE_OUT, 0.2)}>
          A smooth, simple hiring experience that candidates and hiring teams love every step of the way.
        </motion.p>
        <motion.div className="flex flex-wrap justify-center gap-3 mt-10"
          initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={withDelay(EASE_OUT, 0.3)}>
          {["9 languages", "150+ countries", "24/7 support", "99.9% uptime"].map((stat) => (
            <span key={stat} className="px-5 py-2 rounded-full bg-surface-0 border border-border/40 text-sm font-medium text-foreground">
              {stat}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

/* ──────────────────────────── Integrations ───────────────────────────── */

const integrations = [
  "Workday", "Greenhouse", "Lever", "SmartRecruiters", "BambooHR",
  "SuccessFactors", "UKG", "Recruitee", "Zoho Recruit", "JazzHR",
]

export function IntegrationsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  return (
    <section id="integrations" className="py-28 relative overflow-hidden">
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.span className="text-xs font-semibold tracking-widest text-primary uppercase block mb-3"
          initial={{ opacity: 0, y: 16 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={EASE_OUT}>
          Integrations
        </motion.span>
        <motion.h2 className="text-[clamp(2rem,4.5vw,3.25rem)] font-bold tracking-tight text-balance text-foreground"
          initial={{ opacity: 0, y: 28 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={withDelay(EASE_OUT, 0.1)}>
          Connected to <span className="gradient-text">100+ ATS tools</span>
        </motion.h2>
        <motion.p className="text-lg text-muted-foreground mt-5 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={withDelay(EASE_OUT, 0.2)}>
          Native two-way sync with Workday, Greenhouse, Lever and 97 more — no middleware, no data mapping.
        </motion.p>
        <motion.div className="flex flex-wrap justify-center gap-3 mt-12"
          initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={withDelay(EASE_OUT, 0.3)}>
          {integrations.map((name, i) => (
            <motion.div key={name}
              className="px-6 py-3 rounded-xl bg-surface-1 border border-border/40 text-sm font-semibold text-foreground hover:border-primary/25 hover:shadow-md hover:shadow-black/5 transition-all"
              initial={{ opacity: 0, scale: 0.9 }} animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={withDelay(SPRING, 0.3 + i * 0.04)}>
              {name}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

/* ─────────────────────────── Security & Compliance ───────────────────── */

const compliance = ["SOC 2 Type 2", "ISO 27001", "EEOC-defensible", "CCPA", "GDPR"]

export function SecuritySection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  return (
    <section id="security" className="py-28 relative overflow-hidden bg-surface-1/50">
      <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />
      <div ref={ref} className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <motion.span className="text-xs font-semibold tracking-widest text-primary uppercase block mb-3"
            initial={{ opacity: 0, y: 16 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={EASE_OUT}>
            Security & compliance
          </motion.span>
          <motion.h2 className="text-[clamp(2rem,4.5vw,3.25rem)] font-bold tracking-tight text-balance text-foreground"
            initial={{ opacity: 0, y: 28 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={withDelay(EASE_OUT, 0.1)}>
            Built to keep your <span className="gradient-text">organization secure</span>
          </motion.h2>
          <motion.p className="text-lg text-muted-foreground mt-5 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={withDelay(EASE_OUT, 0.2)}>
            Audited controls, strong data governance and privacy protections — every assessment validated and EEOC-defensible.
          </motion.p>
        </div>
        <motion.div className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={withDelay(EASE_OUT, 0.3)}>
          {compliance.map((cert, i) => (
            <motion.div key={cert}
              className="flex items-center gap-2.5 px-5 py-3 rounded-xl bg-surface-0 border border-border/40"
              initial={{ opacity: 0, y: 16 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={withDelay(SPRING, 0.3 + i * 0.06)}>
              <CheckCircle2 className="size-4 text-primary" />
              <span className="text-sm font-semibold text-foreground">{cert}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

/* ──────────────────────────────── FAQ ────────────────────────────────── */

const faqs = [
  { q: "What is Testlify?", a: "Testlify is a skills assessment and interviewing platform that helps companies hire top talent quickly, accurately and affordably. We take the stress out of finding the best candidates with deep analysis that's accurate, automated and unbiased." },
  { q: "How do the assessments work?", a: "Testlify's AI-powered pre-hire assessments measure the skills and job fitment of a candidate. These tests allow for quick screening, eliminate bias in hiring, and increase the productivity of recruiters and hiring managers — a proven solution against high employee turnover." },
  { q: "Are the tests validated?", a: "Tests are built by subject-matter experts and I/O psychologists, validated psychometrically to accurately measure skills and predict job performance. Randomized question banks prevent answer sharing, while bias reviews ensure every candidate is assessed purely on merit." },
  { q: "Are the assessments legally defensible?", a: "Our assessments are validated by I/O psychologists and built to withstand EEOC scrutiny. We prioritize on-the-job skills over trick questions, use non-googleable questions with advanced proctoring, and keep tests low-stress and adaptive — just 30 minutes, with minimal drop-off." },
  { q: "What question types are supported?", a: "Depending on the role: multiple choice, descriptive, video and audio questions, open-ended, typing tests, file upload, Google Docs/Sheets/Slides questions, programming questions and live coding challenges." },
]

export function FaqSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  return (
    <section id="faq" className="py-28 relative overflow-hidden">
      <div ref={ref} className="relative z-10 max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <motion.span className="text-xs font-semibold tracking-widest text-primary uppercase block mb-3"
            initial={{ opacity: 0, y: 16 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={EASE_OUT}>
            FAQ
          </motion.span>
          <motion.h2 className="text-[clamp(2rem,4.5vw,3.25rem)] font-bold tracking-tight text-balance text-foreground"
            initial={{ opacity: 0, y: 28 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={withDelay(EASE_OUT, 0.1)}>
            Questions, <span className="gradient-text">answered</span>
          </motion.h2>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div key={faq.q}
              className="rounded-xl bg-surface-1 border border-border/40 overflow-hidden"
              initial={{ opacity: 0, y: 16 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={withDelay(EASE_OUT, 0.1 + i * 0.06)}>
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left">
                <span className="text-sm font-semibold text-foreground">{faq.q}</span>
                <ChevronDown className={cn("size-4 text-muted-foreground shrink-0 transition-transform", openIndex === i && "rotate-180")} />
              </button>
              <motion.div
                initial={false}
                animate={{ height: openIndex === i ? "auto" : 0, opacity: openIndex === i ? 1 : 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden">
                <p className="px-5 pb-4 text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
