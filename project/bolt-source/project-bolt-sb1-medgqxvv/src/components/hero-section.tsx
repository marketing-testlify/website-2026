import { useEffect, useRef, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { ArrowRight, Sparkles, Users, Clock, Star, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SPRING, SPRING_SOFT, EASE_OUT, withDelay } from "@/lib/motion"
import { cn } from "@/lib/utils"

const CHARS = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%"

function useTextScramble(finalText: string, delay: number = 0) {
  const [display, setDisplay] = useState("")
  useEffect(() => {
    const timeout = setTimeout(() => {
      let iteration = 0
      const total = finalText.length * 3
      const interval = setInterval(() => {
        setDisplay(
          finalText.split("").map((char, idx) => {
            if (char === " ") return " "
            if (idx < Math.floor(iteration / 3)) return char
            return CHARS[Math.floor(Math.random() * CHARS.length)]
          }).join("")
        )
        iteration++
        if (iteration > total) { clearInterval(interval); setDisplay(finalText) }
      }, 30)
      return () => clearInterval(interval)
    }, delay)
    return () => clearTimeout(timeout)
  }, [finalText, delay])
  return display || finalText.replace(/\S/g, "·")
}

function CursorGlow() {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const xSpring = useSpring(x, { stiffness: 80, damping: 18 })
  const ySpring = useSpring(y, { stiffness: 80, damping: 18 })
  useEffect(() => {
    const move = (e: MouseEvent) => { x.set(e.clientX); y.set(e.clientY) }
    window.addEventListener("mousemove", move)
    return () => window.removeEventListener("mousemove", move)
  }, [x, y])
  return (
    <motion.div
      className="fixed pointer-events-none z-[1] mix-blend-screen"
      style={{
        left: xSpring, top: ySpring, x: "-50%", y: "-50%",
        width: 500, height: 500, borderRadius: "50%",
        background: "radial-gradient(circle, oklch(0.55 0.22 25 / 8%) 0%, transparent 65%)",
      }}
    />
  )
}

function Particle({ i }: { i: number }) {
  const x = (i * 137.5) % 100
  const y = (i * 79.3) % 100
  const size = 1.5 + (i % 3) * 0.8
  const duration = 6 + (i % 5) * 2
  return (
    <motion.div
      className="absolute rounded-full bg-primary/40"
      style={{ left: `${x}%`, top: `${y}%`, width: size, height: size }}
      animate={{ y: [-10, 10, -10], opacity: [0.3, 0.8, 0.3] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
    />
  )
}

function ScoreRing({ score, label, color }: { score: number; label: string; color: string }) {
  const [shown, setShown] = useState(false)
  const radius = 28
  const circumference = 2 * Math.PI * radius
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setShown(true))
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return (
    <div ref={ref} className="flex flex-col items-center gap-1.5">
      <div className="relative size-16">
        <svg className="size-full -rotate-90" viewBox="0 0 64 64">
          <circle cx="32" cy="32" r={radius} fill="none" stroke="oklch(1 0 0 / 7%)" strokeWidth="4" />
          <motion.circle
            cx="32" cy="32" r={radius} fill="none" stroke={color} strokeWidth="4" strokeLinecap="round"
            strokeDasharray={circumference} strokeDashoffset={circumference}
            animate={shown ? { strokeDashoffset: circumference * (1 - score / 100) } : {}}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.span className="text-xs font-bold text-foreground" initial={{ opacity: 0 }} animate={shown ? { opacity: 1 } : {}} transition={{ delay: 0.5 }}>
            {score}
          </motion.span>
        </div>
      </div>
      <span className="text-[10px] text-muted-foreground text-center leading-tight max-w-[60px]">{label}</span>
    </div>
  )
}

export function HeroSection() {
  const heroLine1 = useTextScramble("Hire on skill,", 600)
  const heroLine2 = useTextScramble("not on", 900)
  const heroLine3 = useTextScramble("a résumé.", 1200)

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-28 pb-12">
      <CursorGlow />

      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background pointer-events-none" />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] orb-red pointer-events-none opacity-70" />
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] orb-orange pointer-events-none opacity-50" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] orb-rose pointer-events-none opacity-40" />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 24 }).map((_, i) => <Particle key={i} i={i} />)}
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -16, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={withDelay(EASE_OUT, 0.2)}
          className="mb-7"
        >
          <a href="#" className="inline-flex items-center gap-2 border border-primary/30 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-xs font-semibold hover:bg-primary/15 transition-colors group">
            <Sparkles className="size-3" />
            New · Testlify AI is here
            <ArrowRight className="size-3 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </motion.div>

        <h1 className="text-[clamp(2.8rem,7.5vw,6rem)] font-extrabold tracking-[-0.03em] leading-[1.0] mb-6 text-balance">
          <motion.span className="block text-foreground" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={withDelay(SPRING, 0.35)}>
            {heroLine1}
          </motion.span>
          <motion.span className="block gradient-text glow-text" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={withDelay(SPRING, 0.5)}>
            {heroLine2}
          </motion.span>
          <motion.span className="block text-foreground" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={withDelay(SPRING, 0.65)}>
            {heroLine3}
          </motion.span>
        </h1>

        <motion.p
          className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-10"
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={withDelay(EASE_OUT, 0.9)}
        >
          Your next great hire is already in your pipeline. Testlify surfaces them in 30 minutes with validated assessments — no resume bias, no gut-check interviews, no bad-hire regret.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center gap-4 mb-14"
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={withDelay(EASE_OUT, 1.05)}
        >
          <Button size="lg" className="relative h-12 px-8 text-base font-semibold rounded-xl bg-primary text-primary-foreground glow-md hover:glow-lg transition-all duration-300 overflow-hidden group">
            <span className="relative z-10 flex items-center gap-2">
              Start free trial
              <motion.span animate={{ x: [0, 3, 0] }} transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}>
                <ArrowRight className="size-4" />
              </motion.span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100" />
          </Button>
          <Button variant="outline" size="lg" className="h-12 px-8 text-base font-medium rounded-xl border-border/50 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 text-muted-foreground hover:text-foreground">
            Browse the library
          </Button>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center items-center gap-6 text-sm text-muted-foreground mb-4"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={withDelay(EASE_OUT, 1.2)}
        >
          {[
            { icon: Users, text: "10,000+ companies" },
            { icon: Star, text: "4.8/5 on G2" },
            { icon: Shield, text: "SOC2 certified" },
            { icon: Clock, text: "50% faster hiring" },
          ].map(({ icon: Icon, text }) => (
            <span key={text} className="flex items-center gap-1.5">
              <Icon className="size-3.5 text-primary" /> {text}
            </span>
          ))}
        </motion.div>
      </div>

      <HeroDashboard />
    </section>
  )
}

function HeroDashboard() {
  const candidates = [
    { name: "Sarah Chen", role: "Frontend Eng", score: 94, status: "Top Match", avatar: "SC", color: "bg-red-500/15 text-red-600" },
    { name: "Marcus Webb", role: "Backend Eng", score: 87, status: "Shortlisted", avatar: "MW", color: "bg-orange-500/15 text-orange-600" },
    { name: "Priya Sharma", role: "Data Scientist", score: 79, status: "In Review", avatar: "PS", color: "bg-emerald-500/15 text-emerald-600" },
    { name: "James O'Brien", role: "DevOps Eng", score: 63, status: "Pending", avatar: "JO", color: "bg-yellow-500/15 text-yellow-600" },
  ]

  return (
    <motion.div
      className="relative z-10 w-full max-w-5xl mx-auto mt-16 px-4"
      initial={{ opacity: 0, y: 100, rotateX: 15, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
      transition={withDelay(SPRING_SOFT, 1.1)}
      style={{ perspective: "1200px" }}
    >
      <div className="absolute -top-12 left-0 right-0 h-12 bg-gradient-to-b from-background to-transparent z-30 pointer-events-none" />

      <div className="border-glow-pulse rounded-2xl overflow-hidden bg-surface-1 shadow-2xl shadow-black/10">
        <div className="flex items-center gap-2 px-4 py-3 bg-surface-2 border-b border-border/50">
          <div className="flex gap-1.5">
            <div className="size-2.5 rounded-full bg-red-500/60" />
            <div className="size-2.5 rounded-full bg-yellow-500/60" />
            <div className="size-2.5 rounded-full bg-green-500/60" />
          </div>
          <div className="flex-1 flex justify-center">
            <div className="bg-surface-3 rounded-md px-4 py-1 text-[11px] text-muted-foreground font-mono flex items-center gap-2">
              <div className="size-2 rounded-full bg-green-400/80" />
              app.testlify.com/assessments
            </div>
          </div>
          <div className="text-[10px] text-muted-foreground font-mono">v4.2.1</div>
        </div>

        <div className="grid grid-cols-12 min-h-[380px]">
          <div className="col-span-2 bg-surface-2/50 border-r border-border/40 p-3 flex flex-col gap-1">
            {[
              { label: "Overview", active: false },
              { label: "Assessments", active: true },
              { label: "Candidates", active: false },
              { label: "Reports", active: false },
              { label: "Settings", active: false },
            ].map(({ label, active }, i) => (
              <motion.div
                key={label}
                className={cn("px-2 py-1.5 rounded-md text-[11px] font-medium cursor-default", active ? "bg-primary/15 text-primary" : "text-muted-foreground")}
                initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }}
                transition={withDelay(SPRING, 1.5 + i * 0.06)}
              >
                {label}
              </motion.div>
            ))}
          </div>

          <div className="col-span-10 p-4 flex flex-col gap-4">
            <div className="grid grid-cols-4 gap-3">
              {[
                { label: "Total Candidates", value: "1,284", change: "+12%", color: "text-green-600" },
                { label: "Tests Sent", value: "342", change: "+8%", color: "text-green-600" },
                { label: "Avg Score", value: "74.2", change: "+3.1", color: "text-green-600" },
                { label: "Time Saved", value: "180h", change: "this mo.", color: "text-blue-600" },
              ].map(({ label, value, change, color }, i) => (
                <motion.div key={label} className="bg-surface-2 rounded-xl p-3 border border-border/40"
                  initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={withDelay(SPRING, 1.6 + i * 0.07)}>
                  <div className="text-[9px] text-muted-foreground mb-1.5 font-medium uppercase tracking-wide">{label}</div>
                  <div className="text-base font-bold text-foreground">{value}</div>
                  <div className={cn("text-[9px] font-semibold mt-0.5", color)}>{change}</div>
                </motion.div>
              ))}
            </div>

            <motion.div className="bg-surface-2 rounded-xl border border-border/40 overflow-hidden flex-1"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={withDelay(EASE_OUT, 1.9)}>
              <div className="px-4 py-2.5 border-b border-border/40 flex items-center justify-between">
                <span className="text-xs font-semibold text-foreground">Recent Candidates</span>
                <span className="text-[10px] text-primary cursor-default hover:text-primary/80">View all →</span>
              </div>
              <div className="divide-y divide-border/30">
                {candidates.map(({ name, role, score, status, avatar, color }, i) => {
                  const statusColors: Record<string, string> = {
                    "Top Match": "bg-green-500/12 text-green-600",
                    "Shortlisted": "bg-orange-500/12 text-orange-600",
                    "In Review": "bg-yellow-500/12 text-yellow-600",
                    "Pending": "bg-muted text-muted-foreground",
                  }
                  return (
                    <motion.div key={name} className="flex items-center gap-3 px-4 py-2.5"
                      initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} transition={withDelay(SPRING, 2.0 + i * 0.08)}>
                      <div className={cn("size-7 rounded-full text-[10px] font-bold flex items-center justify-center shrink-0", color)}>{avatar}</div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-semibold text-foreground">{name}</div>
                        <div className="text-[10px] text-muted-foreground">{role}</div>
                      </div>
                      <div className="flex items-center gap-2 mr-1">
                        <div className="w-20 h-1.5 rounded-full bg-surface-3 overflow-hidden">
                          <motion.div
                            className={cn("h-full rounded-full", score >= 80 ? "bg-green-500" : score >= 70 ? "bg-yellow-500" : "bg-orange-500")}
                            initial={{ width: 0 }} animate={{ width: `${score}%` }} transition={withDelay(EASE_OUT, 2.3 + i * 0.08)}
                          />
                        </div>
                        <span className="text-[11px] font-mono font-bold text-foreground w-6 text-right">{score}</span>
                      </div>
                      <span className={cn("text-[9px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap", statusColors[status])}>{status}</span>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>

            <motion.div className="flex items-center justify-around bg-surface-2 rounded-xl border border-border/40 px-4 py-3"
              initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={withDelay(EASE_OUT, 2.1)}>
              <ScoreRing score={92} label="Technical Skills" color="oklch(0.65 0.2 25)" />
              <ScoreRing score={78} label="Problem Solving" color="oklch(0.68 0.2 50)" />
              <ScoreRing score={85} label="Communication" color="oklch(0.72 0.17 140)" />
              <ScoreRing score={70} label="Culture Fit" color="oklch(0.7 0.19 60)" />
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-1 left-0 right-0 h-28 bg-gradient-to-t from-background via-background/70 to-transparent pointer-events-none" />
    </motion.div>
  )
}
