import type { Transition, Variants } from "framer-motion"

export const SPRING: Transition = { type: "spring", stiffness: 100, damping: 20 }
export const SPRING_FAST: Transition = { type: "spring", stiffness: 180, damping: 22 }
export const SPRING_SOFT: Transition = { type: "spring", stiffness: 70, damping: 18 }
export const EASE_OUT: Transition = { duration: 0.75, ease: [0.16, 1, 0.3, 1] }
export const EASE_IN_OUT: Transition = { duration: 0.6, ease: [0.4, 0, 0.2, 1] }

export function withDelay(t: Transition, delay: number): Transition {
  return { ...t, delay }
}

export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number = 0) => ({ opacity: 1, y: 0, transition: { ...SPRING, delay: i * 0.07 } }),
}
export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (i: number = 0) => ({ opacity: 1, transition: { ...EASE_OUT, delay: i * 0.06 } }),
}
export const scaleUpVariants: Variants = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: (i: number = 0) => ({ opacity: 1, scale: 1, transition: { ...SPRING_SOFT, delay: i * 0.08 } }),
}
export const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}
