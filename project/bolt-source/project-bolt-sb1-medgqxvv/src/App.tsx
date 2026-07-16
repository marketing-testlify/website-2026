import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { LogoStripSection, TestimonialsSection, CtaSection } from "@/components/sections"
import { FeaturesSection } from "@/components/features-section"
import { HowItWorksSection } from "@/components/how-it-works"
import {
  TestLibrarySection,
  SkillsIntelligenceSection,
  HiringScenariosSection,
  GlobalReachSection,
  IntegrationsSection,
  SecuritySection,
  FaqSection,
} from "@/components/new-sections"
import { Zap, ExternalLink } from "lucide-react"
import { EASE_OUT, withDelay } from "@/lib/motion"

const footerLinks = {
  Product: ["Assessments", "Integrations", "Analytics", "Proctoring", "API"],
  Solutions: ["Engineering", "Sales", "Marketing", "Operations", "Executive"],
  Company: ["About", "Blog", "Careers", "Press", "Partners"],
  Legal: ["Privacy", "Terms", "Security", "GDPR", "SOC2"],
}

function Footer() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })
  return (
    <footer ref={ref} className="border-t border-border/40 pt-16 pb-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          <motion.div className="col-span-2" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={EASE_OUT}>
            <div className="flex items-center gap-2 mb-4">
              <div className="size-8 rounded-xl bg-primary flex items-center justify-center">
                <Zap className="size-4 text-primary-foreground" />
              </div>
              <span className="text-base font-bold text-foreground">testlify</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-[220px]">
              The AI-powered skills assessment and interviewing platform helping teams hire the best talent — quickly, fairly, efficiently.
            </p>
            <div className="flex gap-3 mt-5">
              {[ExternalLink, ExternalLink, ExternalLink].map((Icon, i) => (
                <a key={i} href="#" className="size-8 rounded-lg border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all duration-200">
                  <Icon className="size-3.5" />
                </a>
              ))}
            </div>
          </motion.div>
          {Object.entries(footerLinks).map(([col, links], ci) => (
            <motion.div key={col} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={withDelay(EASE_OUT, 0.1 + ci * 0.07)}>
              <div className="text-xs font-semibold text-foreground uppercase tracking-widest mb-3">{col}</div>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">{link}</a></li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        <motion.div className="pt-6 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground"
          initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={withDelay(EASE_OUT, 0.5)}>
          <span>© 2024 Testlify Inc. All rights reserved.</span>
          <span className="flex items-center gap-1">Built with <span className="text-primary">♥</span> for modern talent teams</span>
        </motion.div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <LogoStripSection />
        <FeaturesSection />
        <HowItWorksSection />
        <TestLibrarySection />
        <SkillsIntelligenceSection />
        <HiringScenariosSection />
        <TestimonialsSection />
        <GlobalReachSection />
        <IntegrationsSection />
        <SecuritySection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}
