import { useRef } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { ClipboardList, Send, BarChart3 } from "lucide-react"
import { SPRING, SPRING_SOFT, EASE_OUT, withDelay } from "@/lib/motion"
import { cn } from "@/lib/utils"

const steps = [
  {
    number: "01", icon: ClipboardList, title: "Build the assessment",
    description: "Pick from 3,500+ ready tests or let AI generate a custom one from your job description in under a minute.",
    accent: "oklch(0.55 0.22 25)", visual: <BuildVisual />,
  },
  {
    number: "02", icon: Send, title: "Invite candidates",
    description: "Share one link or sync from your ATS. Candidates complete a fair, proctored experience on any device.",
    accent: "oklch(0.68 0.2 50)", visual: <InviteVisual />,
  },
  {
    number: "03", icon: BarChart3, title: "Compare & shortlist",
    description: "Get an objective, ranked leaderboard. Move the strongest people forward in 30 minutes — bias left behind.",
    accent: "oklch(0.65 0.2 25)", visual: <ResultsVisual />,
  },
]

function BuildVisual() {
  const checks = ["JavaScript Fundamentals", "React & State Management", "System Design", "Problem Solving"]
  return (
    <div className="bg-surface-0 rounded-2xl border border-border/40 p-5 space-y-2.5">
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-semibold text-foreground">Assessment Builder</span>
        <span className="text-[10px] text-primary font-medium">4 modules selected</span>
      </div>
      {checks.map((item, i) => (
        <motion.div key={item} className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-surface-2 border border-border/30 group hover:border-primary/30 transition-colors"
          initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          transition={{ ...SPRING, delay: 0.3 + i * 0.08 }}>
          <div className="size-4 rounded-md border border-primary/60 bg-primary/20 flex items-center justify-center shrink-0">
            <div className="size-2 rounded-sm bg-primary" />
          </div>
          <span className="text-xs font-medium text-foreground">{item}</span>
          <span className="ml-auto text-[10px] text-muted-foreground">~10 min</span>
        </motion.div>
      ))}
      <motion.div className="flex justify-between items-center pt-2" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.8 }}>
        <span className="text-[10px] text-muted-foreground">Est. time: 40 min</span>
        <div className="px-4 py-1.5 rounded-lg bg-primary text-[11px] font-semibold text-primary-foreground cursor-default hover:bg-primary/90 transition-colors">Generate Assessment →</div>
      </motion.div>
    </div>
  )
}

function InviteVisual() {
  return (
    <div className="bg-surface-0 rounded-2xl border border-border/40 p-5 space-y-4">
      <div className="text-xs font-semibold text-foreground mb-4">Invite Candidates</div>
      <div className="bg-surface-2 rounded-xl border border-border/30 p-3">
        <div className="text-[9px] text-muted-foreground mb-1.5 uppercase tracking-widest">Shareable Link</div>
        <div className="flex items-center gap-2">
          <span className="text-[11px] text-muted-foreground font-mono flex-1 truncate">testlify.com/a/sr-eng-2024</span>
          <span className="text-[10px] text-primary font-semibold cursor-default border border-primary/30 px-2 py-0.5 rounded-md hover:bg-primary/10 transition-colors">Copy</span>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 text-center">
        {[{ val: "247", label: "Sent" }, { val: "184", label: "Started" }, { val: "156", label: "Completed" }].map(({ val, label }) => (
          <div key={label} className="bg-surface-2 rounded-xl p-2.5 border border-border/30">
            <div className="text-base font-bold text-foreground">{val}</div>
            <div className="text-[9px] text-muted-foreground mt-0.5">{label}</div>
          </div>
        ))}
      </div>
      <div className="space-y-1.5">
        {[
          { name: "sarah.chen@company.com", status: "Completed", time: "32 min" },
          { name: "marcus.webb@startup.io", status: "In Progress", time: "18 min" },
          { name: "priya.sharma@corp.com", status: "Pending", time: "—" },
        ].map(({ name, status, time }) => (
          <div key={name} className="flex items-center gap-2 text-[10px] px-2 py-1.5 rounded-lg bg-surface-2 border border-border/20">
            <div className={cn("size-1.5 rounded-full shrink-0", status === "Completed" ? "bg-green-500" : status === "In Progress" ? "bg-yellow-500" : "bg-muted-foreground/40")} />
            <span className="text-muted-foreground flex-1 truncate">{name}</span>
            <span className={cn("font-medium", status === "Completed" ? "text-green-600" : status === "In Progress" ? "text-yellow-600" : "text-muted-foreground")}>{status}</span>
            <span className="text-muted-foreground/60">{time}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function ResultsVisual() {
  const candidates = [
    { name: "Sarah C.", score: 94, match: "Top Match", skills: [92, 96, 88, 98] },
    { name: "Marcus W.", score: 87, match: "Strong Fit", skills: [85, 90, 82, 91] },
    { name: "Priya S.", score: 79, match: "Good Fit", skills: [76, 82, 74, 84] },
  ]
  return (
    <div className="bg-surface-0 rounded-2xl border border-border/40 p-5">
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-semibold text-foreground">Ranked Results</span>
        <span className="text-[10px] text-muted-foreground">156 candidates</span>
      </div>
      <div className="space-y-2">
        {candidates.map(({ name, score, match, skills }, i) => (
          <motion.div key={name}
            className={cn("p-3 rounded-xl border transition-colors", i === 0 ? "border-primary/30 bg-primary/5" : "border-border/30 bg-surface-2")}
            initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ ...SPRING, delay: 0.3 + i * 0.1 }}>
            <div className="flex items-center gap-3 mb-2">
              <div className="size-7 rounded-full bg-primary/20 text-primary text-[10px] font-bold flex items-center justify-center">#{i + 1}</div>
              <span className="text-xs font-semibold text-foreground flex-1">{name}</span>
              <span className={cn("text-[9px] font-bold px-2 py-0.5 rounded-full", i === 0 ? "bg-green-500/15 text-green-600" : i === 1 ? "bg-orange-500/15 text-orange-600" : "bg-muted text-muted-foreground")}>{match}</span>
              <span className="text-sm font-black text-foreground">{score}</span>
            </div>
            <div className="flex gap-1">
              {skills.map((s, si) => (
                <div key={si} className="flex-1 h-1 rounded-full bg-surface-3 overflow-hidden">
                  <motion.div className="h-full rounded-full bg-primary/70" initial={{ width: 0 }} whileInView={{ width: `${s}%` }} viewport={{ once: true }}
                    transition={{ ...EASE_OUT, delay: 0.6 + si * 0.05 + i * 0.1 }} />
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function Step({ step, index }: { step: typeof steps[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const isEven = index % 2 === 0
  const Icon = step.icon
  return (
    <div ref={ref} className={cn("grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center", !isEven && "md:[&>*:first-child]:order-2")}>
      <div>
        <motion.div className="text-[5.5rem] font-black leading-none mb-3 select-none"
          style={{ color: `color-mix(in oklch, ${step.accent} 18%, transparent)` }}
          initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={withDelay(EASE_OUT, 0.05)}>
          {step.number}
        </motion.div>
        <div className="flex items-center gap-4 mb-4">
          <motion.div className="inline-flex items-center justify-center size-12 rounded-2xl shrink-0"
            style={{ background: `color-mix(in oklch, ${step.accent} 16%, transparent)` }}
            initial={{ opacity: 0, scale: 0.7, rotate: -10 }} animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}} transition={withDelay(SPRING, 0.15)}>
            <Icon className="size-6" style={{ color: step.accent }} />
          </motion.div>
          <motion.h3 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight"
            initial={{ opacity: 0, x: isEven ? -24 : 24 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={withDelay(EASE_OUT, 0.2)}>
            {step.title}
          </motion.h3>
        </div>
        <motion.p className="text-base text-muted-foreground leading-relaxed"
          initial={{ opacity: 0, x: isEven ? -24 : 24 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={withDelay(EASE_OUT, 0.3)}>
          {step.description}
        </motion.p>
      </div>
      <motion.div initial={{ opacity: 0, y: 32, scale: 0.94 }} animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}} transition={withDelay(SPRING_SOFT, 0.2)}>
        {step.visual}
      </motion.div>
    </div>
  )
}

export function HowItWorksSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start 0.8", "end 0.2"] })
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div ref={ref} className="text-center mb-24">
          <motion.span className="text-xs font-semibold tracking-widest text-primary uppercase block mb-3"
            initial={{ opacity: 0, y: 16 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={EASE_OUT}>
            How it works
          </motion.span>
          <motion.h2 className="text-[clamp(2rem,4.5vw,3.25rem)] font-bold tracking-tight text-balance text-foreground"
            initial={{ opacity: 0, y: 28 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={withDelay(EASE_OUT, 0.1)}>
            From open role to offer, <span className="gradient-text">watch it build</span>
          </motion.h2>
        </div>
        <div ref={containerRef} className="relative">
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-border/40">
            <motion.div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-primary/60 to-primary/20 rounded-full" style={{ height: lineHeight }} />
          </div>
          <div className="flex flex-col gap-28">
            {steps.map((step, i) => <Step key={step.number} step={step} index={i} />)}
          </div>
        </div>
      </div>
    </section>
  )
}
