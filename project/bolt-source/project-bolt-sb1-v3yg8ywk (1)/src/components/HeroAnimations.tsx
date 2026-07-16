import { useEffect, useRef, useState } from 'react';

/* Character set used for the scramble effect */
const SCRAMBLE_CHARS = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%';

/**
 * Text scramble / decode effect.
 * Characters start as random glyphs, then progressively resolve
 * left-to-right into the final string.
 */
export function ScrambleText({
  text,
  delay = 0,
  className = '',
}: {
  text: string;
  delay?: number;
  className?: string;
}) {
  const [display, setDisplay] = useState(() => text.replace(/\S/g, '·'));

  useEffect(() => {
    let frame = 0;
    let interval: ReturnType<typeof setInterval>;
    const startTimer = setTimeout(() => {
      const total = text.length * 3;
      interval = setInterval(() => {
        setDisplay(
          text
            .split('')
            .map((ch, i) => {
              if (ch === ' ') return ' ';
              return i < Math.floor(frame / 3)
                ? ch
                : SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
            })
            .join(''),
        );
        frame++;
        if (frame > total) {
          clearInterval(interval);
          setDisplay(text);
        }
      }, 30);
    }, delay);
    return () => {
      clearTimeout(startTimer);
      clearInterval(interval);
    };
  }, [text, delay]);

  return <span className={className}>{display}</span>;
}

/**
 * A soft radial-gradient orb that follows the cursor with spring physics.
 * Rendered as a fixed, pointer-events-none overlay with mix-blend-screen.
 */
export function MouseOrb() {
  const ref = useRef<HTMLDivElement>(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const velocity = useRef({ x: 0, y: 0 });

  useEffect(() => {
    target.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    const onMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', onMove);

    let raf = 0;
    const stiffness = 0.08;
    const damping = 0.78;
    const tick = () => {
      const dx = target.current.x - current.current.x;
      const dy = target.current.y - current.current.y;
      velocity.current.x = (velocity.current.x + dx * stiffness) * damping;
      velocity.current.y = (velocity.current.y + dy * stiffness) * damping;
      current.current.x += velocity.current.x;
      current.current.y += velocity.current.y;
      if (ref.current) {
        ref.current.style.transform = `translate(-50%, -50%) translate(${current.current.x}px, ${current.current.y}px)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: 500,
        height: 500,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(242,63,68,0.08) 0%, transparent 65%)',
        pointerEvents: 'none',
        zIndex: 1,
        mixBlendMode: 'screen',
        willChange: 'transform',
      }}
    />
  );
}

/**
 * A set of small floating particles that gently drift up and down.
 */
export function FloatingParticles({ count = 24 }: { count?: number }) {
  return (
    <div aria-hidden style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
      {Array.from({ length: count }).map((_, i) => {
        const left = (i * 137.5) % 100;
        const top = (i * 79.3) % 100;
        const size = 1.5 + (i % 3) * 0.8;
        const duration = 6 + (i % 5) * 2;
        return (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: `${left}%`,
              top: `${top}%`,
              width: size,
              height: size,
              borderRadius: '50%',
              background: 'rgba(242,63,68,0.4)',
              animation: `tl-floaty ${duration}s ease-in-out infinite`,
              animationDelay: `${i * 0.4}s`,
            }}
          />
        );
      })}
    </div>
  );
}

/**
 * Renders a headline line that rises+fades in on mount, wrapping a
 * ScrambleText so the decode runs after the rise completes.
 */
export function HeroLine({
  text,
  scrambleDelay,
  riseDelay,
  className = '',
  gradient = false,
}: {
  text: string;
  scrambleDelay: number;
  riseDelay: number;
  className?: string;
  gradient?: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const t = setTimeout(() => el.classList.add('is-in'), riseDelay);
    return () => clearTimeout(t);
  }, [riseDelay]);

  return (
    <span
      ref={ref}
      className={`tl-hero-line ${gradient ? 'tl-gradient-text tl-glow-text' : 'text-ink'} ${className}`.trim()}
    >
      <ScrambleText text={text} delay={scrambleDelay} />
    </span>
  );
}
