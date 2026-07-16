import { useState } from "react"
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion"
import { Zap, X, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { EASE_OUT, withDelay } from "@/lib/motion"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Test Library", href: "#test-library" },
  { label: "Platform", href: "#features" },
  { label: "Integrations", href: "#integrations" },
  { label: "Security", href: "#security" },
  { label: "FAQ", href: "#faq" },
]

export function Navbar() {
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 30))

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 px-4"
        initial={{ y: -72, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={EASE_OUT}
      >
        <motion.div
          className={cn(
            "mx-auto max-w-6xl mt-3 rounded-2xl flex items-center justify-between px-5 py-3 transition-all duration-500",
            scrolled
              ? "bg-surface-1/90 backdrop-blur-2xl border border-border/60 shadow-lg shadow-black/5"
              : "bg-surface-1/60 backdrop-blur-md border border-border/30"
          )}
        >
          <a href="#" className="flex items-center gap-2.5 shrink-0 group">
            <motion.div
              className="size-8 rounded-xl bg-primary flex items-center justify-center relative overflow-hidden"
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              <div className="absolute inset-0 shimmer" />
              <Zap className="size-4 text-primary-foreground relative z-10" />
            </motion.div>
            <span className="text-[15px] font-bold text-foreground tracking-tight">testlify</span>
          </a>

          <nav className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link, i) => (
              <NavLink key={link.label} href={link.href} label={link.label} delay={i * 0.04} />
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <motion.a
              href="#"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={withDelay(EASE_OUT, 0.4)}
            >
              Sign in
            </motion.a>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={withDelay(EASE_OUT, 0.45)}
            >
              <Button
                size="sm"
                className="relative overflow-hidden bg-primary text-primary-foreground font-semibold px-5 rounded-xl glow-sm hover:glow-md transition-all duration-300"
              >
                <span className="relative z-10">Get started free</span>
                <div className="absolute inset-0 shimmer opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </motion.div>
          </div>

          <button
            className="md:hidden text-muted-foreground hover:text-foreground p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </motion.div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-surface-0/95 backdrop-blur-xl flex flex-col items-center justify-center gap-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                className="text-2xl font-semibold text-foreground hover:text-primary transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={withDelay(EASE_OUT, i * 0.06)}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.div
              className="flex flex-col items-center gap-3 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={withDelay(EASE_OUT, 0.4)}
            >
              <Button size="lg" className="bg-primary text-primary-foreground px-10 rounded-xl">
                Get started free
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function NavLink({ href, label, delay }: { href: string; label: string; delay: number }) {
  const [hovered, setHovered] = useState(false)
  return (
    <motion.a
      href={href}
      className="relative px-3.5 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 rounded-lg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={withDelay(EASE_OUT, delay)}
    >
      {hovered && (
        <motion.div
          className="absolute inset-0 rounded-lg bg-black/5"
          layoutId="nav-hover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
        />
      )}
      <span className="relative z-10">{label}</span>
    </motion.a>
  )
}
