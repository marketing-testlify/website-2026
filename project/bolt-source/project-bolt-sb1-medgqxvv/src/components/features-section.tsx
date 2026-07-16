import { useRef, useState } from "react"
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Brain, ChartBar as BarChart2, Users as Users2, Shield, Code as Code2 } from "lucide-react"
import { SPRING, EASE_OUT, withDelay } from "@/lib/motion"
import { cn } from "@/lib/utils"

function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const xSpring = useSpring(x, { stiffness: 200, damping: 20 })
  const ySpring = useSpring(y, { stiffness: 200, damping: 20 })
  const rotateX = useTransform(ySpring, [-0.5, 0.5], ["8deg", "-8deg"])
  const rotateY = useTransform(xSpring, [-0.5, 0.5], ["-8deg", "8deg"])
  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    x.set((e.clientX - rect.left - rect.width / 2) / rect.width)
    y.set((e.clientY - rect.top - rect.height / 2) / rect.height)
  }
  const reset = () => { x.set(0); y.set(0) }
  return (
    <motion.div ref={ref} className={cn("tilt-card", className)} onMouseMove={handleMouse} onMouseLeave={reset} style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}>
      {children}
    </motion.div>
  )
}

function AnalyticsVisual() {
  const bars = [62, 75, 58, 88, 71, 94, 83]
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })
  return (
    <div ref={ref} className="flex items-end gap-1.5 h-20 mt-3">
      {bars.map((h, i) => (
        <motion.div key={i} className="flex-1 rounded-t-md bg-primary/50 hover:bg-primary transition-colors duration-200"
          initial={{ scaleY: 0, originY: 1 }} animate={isInView ? { scaleY: 1 } : {}}
          transition={{ ...SPRING, delay: 1.9 + i * 0.07 }}
          style={{ height: `${h}%`, transformOrigin: "bottom" }} />
      ))}
    </div>
  )
}

function CodeVisual() {
  const lines = [
    { text: 'const assessment = await testlify.create({', color: "text-foreground" },
    { text: '  role: "Senior Engineer",', color: "text-blue-600" },
    { text: '  skills: ["React", "Node.js", "SQL"],', color: "text-green-600" },
    { text: '  duration: 45, // minutes', color: "text-muted-foreground" },
    { text: "});", color: "text-foreground" },
    { text: "", color: "" },
    { text: "await assessment.invite(candidates);", color: "text-red-600" },
  ]
  return (
    <div className="bg-surface-2 rounded-xl border border-border/40 p-4 font-mono text-xs leading-relaxed mt-3 overflow-hidden">
      {lines.map((line, i) => (
        <motion.div key={i} className={cn("whitespace-pre", line.color || "h-3")}
          initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }}
          transition={{ ...EASE_OUT, delay: 1.8 + i * 0.08 }}>
          {line.text}
        </motion.div>
      ))}
    </div>
  )
}

interface Feature {
  icon: React.ElementType; title: string; description: string
  tag?: string; accent: string; span?: "full" | "half"; visual?: React.ReactNode
}

const features: Feature[] = [
  { icon: Brain, title: "AI reads every résumé so you don't have to", description: "Every applicant is scored against the role's must-have skills and ranked instantly — surfacing real signal long before the first interview.", tag: "New", accent: "oklch(0.55 0.22 25)", span: "half" },
  { icon: BarChart2, title: "A test for every role, skill and level", description: "Role-specific, cognitive, coding, language and personality assessments — or let AI generate a custom one from your job description in under a minute.", accent: "oklch(0.68 0.2 50)", span: "half", visual: <AnalyticsVisual /> },
  { icon: Code2, title: "Structured interviews everyone scores fairly", description: "Async and live video with shared scorecards, so every reviewer judges the same things the same way — and bias has nowhere to hide.", accent: "oklch(0.65 0.22 25)", span: "full", visual: <CodeVisual /> },
  { icon: Users2, title: "Collaborative hiring", description: "Share scorecards, leave comments, and align your team around objective data — all inside one workspace.", accent: "oklch(0.65 0.2 40)", span: "half" },
  { icon: Shield, title: "AI Proctoring", description: "Webcam monitoring, tab-switch detection, and question randomization keep every assessment integrity-proof.", accent: "oklch(0.7 0.18 60)", span: "half" },
]

function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })
  const Icon = feature.icon
  const [hovered, setHovered] = useState(false)

  return (
    <TiltCard className={cn("col-span-1", feature.span === "full" ? "md:col-span-2" : "")}>
      <motion.div
        ref={ref}
        className="group relative h-full rounded-2xl border border-border/40 bg-surface-1/80 p-6 overflow-hidden cursor-default"
        initial={{ opacity: 0, y: 36 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={withDelay(SPRING, index * 0.09)}
        onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      >
        <motion.div className="absolute inset-0 pointer-events-none" animate={{ opacity: hovered ? 1 : 0 }} transition={{ duration: 0.4 }}
          style={{ background: `radial-gradient(ellipse at 30% 30%, color-mix(in oklch, ${feature.accent} 12%, transparent) 0%, transparent 65%)` }} />
        <motion.div className="absolute inset-0 rounded-2xl pointer-events-none" animate={{ opacity: hovered ? 1 : 0 }} transition={{ duration: 0.3 }}
          style={{ boxShadow: `inset 0 0 0 1px color-mix(in oklch, ${feature.accent} 35%, transparent)` }} />

        {hovered && (
          <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
            <div className="absolute inset-0 -translate-x-full beam" style={{ background: `linear-gradient(105deg, transparent 30%, color-mix(in oklch, ${feature.accent} 8%, transparent) 50%, transparent 70%)` }} />
          </div>
        )}

        <div className="relative z-10">
          <motion.div className="mb-4 inline-flex size-11 items-center justify-center rounded-xl"
            style={{ background: `color-mix(in oklch, ${feature.accent} 16%, transparent)` }}
            animate={hovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}>
            <Icon className="size-5" style={{ color: feature.accent }} />
          </motion.div>
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-base font-semibold text-foreground">{feature.title}</h3>
            {feature.tag && <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-primary/20 text-primary uppercase tracking-widest">{feature.tag}</span>}
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
          {feature.visual && <div className="mt-1">{feature.visual}</div>}
        </div>
      </motion.div>
    </TiltCard>
  )
}

export function FeaturesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-28 relative overflow-hidden" id="features">
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] orb-rose opacity-30 pointer-events-none" />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div ref={ref} className="text-center mb-16">
          <motion.span className="text-xs font-semibold tracking-widest text-primary uppercase block mb-3"
            initial={{ opacity: 0, y: 16 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={EASE_OUT}>
            Why Testlify
          </motion.span>
          <motion.h2 className="text-[clamp(2rem,4.5vw,3.25rem)] font-bold tracking-tight text-balance text-foreground"
            initial={{ opacity: 0, y: 28 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={withDelay(EASE_OUT, 0.1)}>
            Stop screening on resumes. <span className="gradient-text">Start hiring on proof.</span>
          </motion.h2>
          <motion.p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={withDelay(EASE_OUT, 0.2)}>
            Resumes tell you where someone has been — not what they can actually do. Testlify replaces guesswork with verified, job-relevant evidence.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4" style={{ perspective: "1000px" }}>
          {features.map((f, i) => <FeatureCard key={f.title} feature={f} index={i} />)}
        </div>
      </div>
    </section>
  )
}
