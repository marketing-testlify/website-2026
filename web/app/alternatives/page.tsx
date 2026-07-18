'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaBand from '@/components/CtaBand';

const COMPARISONS = [
  { name: 'legacy assessment suites', initial: 'L', desc: 'Modern, AI-native screening vs older test-only platforms with smaller libraries and rigid contracts.', href: '/alternatives-detail' },
  { name: 'coding-only platforms', initial: 'C', desc: 'One tool for coding, cognitive, personality and interviews — vs a developer-only point solution.', href: '/alternatives-detail' },
  { name: 'video-only interview tools', initial: 'V', desc: 'Skills tests plus AI video, audio and chat interviews — vs a tool that only does interviews.', href: '/alternatives-detail' },
  { name: 'general ATS testing add-ons', initial: 'A', desc: 'Purpose-built assessment depth and proctoring vs a light testing feature bolted onto an ATS.', href: '/alternatives-detail' },
  { name: 'enterprise-only vendors', initial: 'E', desc: 'Transparent per-candidate pricing and self-serve onboarding vs annual contracts and long sales cycles.', href: '/alternatives-detail' },
  { name: 'free quiz makers', initial: 'F', desc: 'Validated, EEOC-defensible, proctored assessments vs ungraded, unvalidated free quiz tools.', href: '/alternatives-detail' },
];

const CSS = `
*{box-sizing:border-box;}
html{scroll-behavior:smooth;}
body{margin:0;font-family:'Poppins',sans-serif;-webkit-font-smoothing:antialiased;color:#1A1014;background:#fff;}
a{text-decoration:none;color:inherit;}
.cp-wrap{max-width:1240px;margin:0 auto;padding:0 28px;}
[data-reveal]{opacity:0;transform:translateY(24px);}
.cp-eyebrow{font-size:13px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:#F23F44;margin:0 0 16px;}
.cp-eyebrow .dot{color:#F23F44;}
.cp-crumb{font-size:13px;color:#8A7A7D;display:flex;gap:8px;align-items:center;justify-content:center;margin-bottom:18px;}
.cp-crumb a:hover{color:#F23F44;}
.cp-hero{position:relative;overflow:hidden;padding:62px 28px 46px;background:radial-gradient(1000px 460px at 50% -12%,#FFF0EE 0%,rgba(255,240,238,0) 62%),#fff;text-align:center;}
.cp-h1{font-size:52px;line-height:1.05;font-weight:800;letter-spacing:-1.6px;margin:0;}
.cp-h1 em{font-style:normal;color:#F23F44;}
.cp-sub{font-size:18px;line-height:1.6;color:#5A4B4E;margin:18px auto 0;max-width:600px;}
/* why band */
.cp-why{padding:52px 28px;background:#FBF3EE;}
.cp-whyhead{text-align:center;max-width:720px;margin:0 auto 34px;}
.cp-h2{font-size:30px;font-weight:800;letter-spacing:-.7px;margin:0;}
.cp-h2p{font-size:16px;line-height:1.6;color:#6C5A5D;margin:12px 0 0;}
.cp-reasons{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;}
.cp-reason{background:#fff;border:1px solid #F0E2E3;border-radius:16px;padding:24px;box-shadow:0 16px 30px rgba(110,11,14,.06);}
.cp-rn{font-size:30px;font-weight:800;color:#F23F44;letter-spacing:-1px;line-height:1;}
.cp-rl{font-size:14px;line-height:1.5;color:#5A4B4E;font-weight:600;margin-top:10px;}
/* grid */
.cp-sec{padding:56px 28px 90px;}
.cp-shead{text-align:center;max-width:720px;margin:0 auto 34px;}
.cp-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:18px;}
.cp-card{display:flex;flex-direction:column;background:#fff;border:1px solid #F2E6E7;border-radius:18px;padding:26px 28px;transition:transform .3s cubic-bezier(.2,.7,.3,1),border-color .3s,box-shadow .3s;}
.cp-card:hover{transform:translateY(-4px);border-color:#FBD0D1;box-shadow:0 16px 34px rgba(110,11,14,.10);}
.cp-vs{display:flex;align-items:center;gap:12px;margin-bottom:12px;}
.cp-lg{width:40px;height:40px;border-radius:11px;background:linear-gradient(135deg,#FF7A52,#F23F44);color:#fff;font-weight:800;font-size:15px;display:flex;align-items:center;justify-content:center;flex:none;}
.cp-vst{font-size:12px;font-weight:700;color:#B29A9E;letter-spacing:.04em;}
.cp-lg2{width:40px;height:40px;border-radius:11px;background:#F2E6E7;color:#8A7A7D;font-weight:800;font-size:15px;display:flex;align-items:center;justify-content:center;flex:none;}
.cp-ct{font-size:18px;font-weight:700;letter-spacing:-.3px;margin:0 0 7px;}
.cp-cd{font-size:14.5px;line-height:1.55;color:#7C6A6D;margin:0 0 18px;}
.cp-go{margin-top:auto;display:inline-flex;align-items:center;gap:7px;font-size:14px;font-weight:700;color:#F23F44;}
.cp-go svg{transition:transform .25s;}
.cp-card:hover .cp-go svg{transform:translateX(3px);}
.cp-note{max-width:820px;margin:34px auto 0;text-align:center;font-size:13px;color:#A9999C;line-height:1.6;}
@media(max-width:1000px){.cp-reasons{grid-template-columns:repeat(2,1fr);}.cp-grid{grid-template-columns:1fr;}}
@media(max-width:640px){.cp-h1{font-size:36px;}.cp-reasons{grid-template-columns:1fr;}.cp-hero{padding:44px 22px 34px;}}

h1,h2,h3,h4,.h1,.h2,.h3,.hero h1,.eyebrow{text-wrap:balance;}p,li,.body,.lead,.sub,figcaption,blockquote{text-wrap:pretty;}/*om-balance-rule*/
`;

export default function AlternativesPage() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const base = rootRef.current;
    const root: Document | ShadowRoot = (base && base.getRootNode && (base.getRootNode() as Document | ShadowRoot)) || document;
    const animateReveal = (el: HTMLElement, delay: number) => {
      const dur = 620, startY = 24;
      let start: number | null = null;
      const tick = (t: number) => {
        if (start === null) start = t;
        const p = Math.min(1, (t - start) / dur);
        const e = 1 - Math.pow(1 - p, 3);
        el.style.opacity = String(e);
        el.style.transform = 'translateY(' + (startY * (1 - e)).toFixed(2) + 'px)';
        if (p < 1) requestAnimationFrame(tick);
        else { el.style.opacity = '1'; el.style.transform = 'none'; }
      };
      setTimeout(() => requestAnimationFrame(tick), delay);
    };
    const run = () => {
      root.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) =>
        animateReveal(el, parseInt(el.getAttribute('data-delay') || '0', 10))
      );
    };
    const r = requestAnimationFrame(() => requestAnimationFrame(run));
    return () => cancelAnimationFrame(r);
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <SiteHeader announcement="Comparing assessment platforms? See how Testlify stacks up — no annual contract, 3,500+ tests" announcementCta="Compare now" />

      <section className="cp-hero" ref={rootRef}>
        <div className="cp-wrap" style={{ maxWidth: '820px' }}>
          <div className="cp-crumb">
            <Link href="/blog">Resources</Link>
            <span>/</span>
            <span>Competitors</span>
          </div>
          <p className="cp-eyebrow" data-reveal="">Testlify vs the rest<span className="dot">.</span></p>
          <h1 className="cp-h1" data-reveal="" data-delay="60">See how Testlify<br /><em>compares</em></h1>
          <p className="cp-sub" data-reveal="" data-delay="120">Honest, side-by-side comparisons against the platforms you&apos;re evaluating — so you can choose the assessment tool that actually fits how you hire.</p>
        </div>
      </section>

      <section className="cp-why">
        <div className="cp-wrap">
          <div className="cp-whyhead" data-reveal="">
            <h2 className="cp-h2">Why teams pick Testlify</h2>
            <p className="cp-h2p">The differences that show up on every comparison, whoever you&apos;re weighing us against.</p>
          </div>
          <div className="cp-reasons" data-reveal="" data-delay="100">
            <div className="cp-reason"><div className="cp-rn">3,500+</div><div className="cp-rl">Validated tests — roughly 10x the typical competitor library.</div></div>
            <div className="cp-reason"><div className="cp-rn">$0</div><div className="cp-rl">Annual contract required — pay per candidate, cancel anytime.</div></div>
            <div className="cp-reason"><div className="cp-rn">100+</div><div className="cp-rl">Native ATS integrations on every paid plan, not just enterprise.</div></div>
            <div className="cp-reason"><div className="cp-rn">3-in-1</div><div className="cp-rl">AI video, audio and chat interviews — all on one platform.</div></div>
          </div>
        </div>
      </section>

      <section className="cp-sec">
        <div className="cp-wrap">
          <div className="cp-shead" data-reveal="">
            <p className="cp-eyebrow">Comparisons<span className="dot">.</span></p>
            <h2 className="cp-h2">Pick your comparison</h2>
          </div>
          <div className="cp-grid">
            {COMPARISONS.map((c, i) => (
              <Link key={i} className="cp-card" href={c.href}>
                <div className="cp-vs">
                  <span className="cp-lg">T</span>
                  <span className="cp-vst">VS</span>
                  <span className="cp-lg2">{c.initial}</span>
                </div>
                <p className="cp-ct">Testlify vs {c.name}</p>
                <p className="cp-cd">{c.desc}</p>
                <span className="cp-go">See the comparison<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></span>
              </Link>
            ))}
          </div>
          <p className="cp-note" data-reveal="">Comparison names shown are category placeholders. Swap in the specific platforms you compare against by editing the comparison template&apos;s data.</p>
        </div>
      </section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
