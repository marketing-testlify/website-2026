import { useRef, useEffect, useState } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowRight, CircleCheck as CheckCircle2, Quote, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SPRING, SPRING_SOFT, EASE_OUT, withDelay } from "@/lib/motion"
import { cn } from "@/lib/utils"

const LOGOS = [
  "Shopify", "Stripe", "Notion", "Figma", "Vercel", "Linear",
  "Loom", "Segment", "Webflow", "Brex", "Rippling", "Lattice",
]

function Marquee({ items, speed = 25, rtl = false }: { items: string[]; speed?: number; rtl?: boolean }) {
  const doubled = [...items, ...items]
  return (
    <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]">
      <motion.div
        className="flex gap-4 shrink-0"
        animate={{ x: rtl ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
      >
        {doubled.map((name, i) => (
          <motion.div
            key={`${name}-${i}`}
            className="shrink-0 flex items-center justify-center px-6 py-2.5 rounded-xl border border-border/40 bg-surface-1/80 text-muted-foreground text-sm font-semibold whitespace-nowrap hover:border-primary/30 hover:text-foreground hover:bg-surface-2 transition-all duration-300 cursor-default"
            whileHover={{ scale: 1.04, y: -2 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            {name}
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export function LogoStripSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })
  return (
    <section ref={ref} className="py-20 overflow-hidden">
      <motion.p className="text-center text-sm font-medium text-muted-foreground mb-8"
        initial={{ opacity: 0, y: 16 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={EASE_OUT}>
        Trusted by leading talent teams worldwide
      </motion.p>
      <motion.div className="flex flex-col gap-3" initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={withDelay(EASE_OUT, 0.2)}>
        <Marquee items={LOGOS} speed={30} />
        <Marquee items={[...LOGOS].reverse()} speed={24} rtl />
      </motion.div>
    </section>
  )
}

function useCountUp(end: number, duration: number = 1800, start: boolean = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return
    let startTime: number | null = null
    const step = (ts: number) => {
      if (!startTime) startTime = ts
      const progress = Math.min((ts - startTime) / duration, 1)
      const ease = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(ease * end))
      if (progress < 1) requestAnimationFrame(step)
      else setCount(end)
    }
    requestAnimationFrame(step)
  }, [end, duration, start])
  return count
}

interface StatItem { value: number; suffix: string; label: string; description: string }

function StatCard({ stat, index }: { stat: StatItem; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const count = useCountUp(stat.value, 1600, isInView)
  return (
    <motion.div
      ref={ref}
      className="relative group flex flex-col items-center text-center p-8 rounded-2xl border border-border/40 bg-surface-1/50 overflow-hidden hover:border-primary/30 transition-all duration-500"
      initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={withDelay(SPRING, index * 0.1)}
      whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 18 } }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10">
        <div className="text-[clamp(2.8rem,5vw,4.5rem)] font-black gradient-text leading-none mb-2 tabular-nums">
          {count}{stat.suffix}
        </div>
        <div className="text-base font-semibold text-foreground mb-1">{stat.label}</div>
        <div className="text-sm text-muted-foreground">{stat.description}</div>
      </div>
    </motion.div>
  )
}

export function StatsSection() {
  const stats: StatItem[] = [
    { value: 3500, suffix: "+", label: "Validated tests", description: "Across every role and skill" },
    { value: 100, suffix: "+", label: "ATS integrations", description: "Native two-way sync" },
    { value: 9, suffix: "", label: "Languages supported", description: "Assess globally, fairly" },
    { value: 67, suffix: "%", label: "Less screening time", description: "On average, per role" },
  ]
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 dot-bg opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] orb-red opacity-25 pointer-events-none" />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => <StatCard key={stat.label} stat={stat} index={i} />)}
        </div>
      </div>
    </section>
  )
}

const testimonials = [
  { quote: "We cut screening time by two-thirds. The ranked shortlist is the first thing my hiring managers open every morning.", name: "Chrissie Blom", role: "Talent Lead, Xneelo", rating: 5, avatar: "CB", color: "bg-red-500/15 text-red-600" },
  { quote: "Skills-based assessments doubled our shortlist diversity and our offer-acceptance rate. The data finally backs every decision.", name: "Senthu Velnayagam", role: "Head of People, Kimp", rating: 5, avatar: "SV", color: "bg-orange-500/15 text-orange-600" },
  { quote: "Setup took an afternoon. Within a week we'd replaced three rounds of phone screens with one fair assessment.", name: "Daniela Santos", role: "Recruiting Manager, Endiprev", rating: 5, avatar: "DS", color: "bg-emerald-500/15 text-emerald-600" },
  { quote: "Candidates actually thank us for the experience. It feels fair, it's fast, and our drop-off fell off a cliff.", name: "Abby Belin", role: "VP Talent, Virtual Gurus", rating: 5, avatar: "AB", color: "bg-yellow-500/15 text-yellow-600" },
]

function TestimonialCard({ item, index }: { item: typeof testimonials[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })
  return (
    <motion.div
      ref={ref}
      className="group relative flex flex-col gap-4 rounded-2xl border border-border/40 bg-surface-1/80 p-6 hover:border-primary/30 transition-all duration-500 overflow-hidden"
      initial={{ opacity: 0, y: 40, scale: 0.96 }} animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={withDelay(SPRING, index * 0.1)}
      whileHover={{ y: -6, transition: { type: "spring", stiffness: 250, damping: 20 } }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/4 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10">
        <div className="flex gap-0.5 mb-3">
          {Array.from({ length: item.rating }).map((_, i) => <Star key={i} className="size-3.5 fill-yellow-400 text-yellow-400" />)}
        </div>
        <Quote className="size-6 text-primary/40 mb-2" />
        <p className="text-sm text-foreground/80 leading-relaxed">{item.quote}</p>
      </div>
      <div className="relative z-10 flex items-center gap-3 mt-auto pt-4 border-t border-border/30">
        <div className={cn("size-9 rounded-full text-xs font-bold flex items-center justify-center shrink-0", item.color)}>{item.avatar}</div>
        <div>
          <div className="text-sm font-semibold text-foreground">{item.name}</div>
          <div className="text-xs text-muted-foreground">{item.role}</div>
        </div>
      </div>
    </motion.div>
  )
}

export function TestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div ref={ref} className="text-center mb-14">
          <motion.span className="text-xs font-semibold tracking-widest text-primary uppercase block mb-3"
            initial={{ opacity: 0, y: 16 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={EASE_OUT}>
            Loved by HR teams
          </motion.span>
          <motion.h2 className="text-[clamp(2rem,4.5vw,3.25rem)] font-bold tracking-tight text-foreground text-balance"
            initial={{ opacity: 0, y: 28 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={withDelay(EASE_OUT, 0.1)}>
            Hiring managers don't go <span className="gradient-text">back</span>
          </motion.h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {testimonials.map((t, i) => <TestimonialCard key={t.name} item={t} index={i} />)}
        </div>
      </div>
    </section>
  )
}

export function CtaSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  return (
    <section ref={ref} className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 orb-red opacity-50 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent pointer-events-none" />
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0, scale: 0.93, y: 40 }} animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}} transition={withDelay(SPRING_SOFT, 0.05)}>
          <div className="animated-border rounded-2xl p-[1px]">
            <div className="rounded-[calc(1rem-1px)] bg-surface-1/90 backdrop-blur-sm p-10 md:p-16">
              <motion.span className="text-xs font-semibold tracking-widest text-primary uppercase block mb-5"
                initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={withDelay(EASE_OUT, 0.2)}>
                Get started today
              </motion.span>
              <motion.h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight text-foreground mb-6 text-balance"
                initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={withDelay(EASE_OUT, 0.25)}>
                Your next great hire is already in your <span className="gradient-text">pipeline</span>
              </motion.h2>
              <motion.p className="text-lg text-muted-foreground max-w-lg mx-auto mb-10 leading-relaxed"
                initial={{ opacity: 0, y: 16 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={withDelay(EASE_OUT, 0.3)}>
                Build your first assessment in about two minutes and start surfacing proven talent today — free for 7 days.
              </motion.p>
              <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
                initial={{ opacity: 0, y: 16 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={withDelay(EASE_OUT, 0.38)}>
                <Button size="lg" className="h-12 px-8 text-base font-semibold bg-primary text-primary-foreground glow-md hover:glow-lg rounded-xl transition-all duration-300">
                  Start hiring on skill <ArrowRight className="size-4 ml-1" />
                </Button>
                <Button variant="ghost" size="lg" className="h-12 px-8 text-base text-muted-foreground hover:text-foreground rounded-xl">
                  Talk to sales
                </Button>
              </motion.div>
              <motion.div className="flex flex-wrap justify-center gap-5 text-sm text-muted-foreground"
                initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={withDelay(EASE_OUT, 0.45)}>
                {["Free 7-day trial", "No credit card", "Cancel anytime", "SOC2 secure"].map((text) => (
                  <span key={text} className="flex items-center gap-1.5"><CheckCircle2 className="size-3.5 text-primary" /> {text}</span>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
