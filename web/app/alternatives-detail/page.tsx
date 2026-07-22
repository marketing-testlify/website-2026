'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaButton from '@/components/CtaButton';
import FAQ from '@/components/FAQ';
import CtaBand from '@/components/CtaBand';

const css = `
*{box-sizing:border-box;}
html{scroll-behavior:smooth;}
body{margin:0;font-family:'Poppins',sans-serif;-webkit-font-smoothing:antialiased;color:#1A1014;background:#fff;}
a{text-decoration:none;color:inherit;}
.ct-wrap{max-width:1080px;margin:0 auto;padding:0 28px;}
[data-reveal]{opacity:0;transform:translateY(24px);}
.ct-eyebrow{font-size:13px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:#F23F44;margin:0 0 14px;}
.ct-eyebrow .dot{color:#F23F44;}
.ct-crumb{font-size:13px;color:#8A7A7D;display:flex;gap:8px;align-items:center;justify-content:center;margin-bottom:18px;flex-wrap:wrap;}
.ct-crumb a:hover{color:#F23F44;}
.ct-hero{background:radial-gradient(1000px 460px at 50% -12%,#FFF0EE 0%,rgba(255,240,238,0) 62%),#fff;padding:60px 28px 46px;text-align:center;}
.ct-h1{font-size:46px;line-height:1.06;font-weight:800;letter-spacing:-1.4px;margin:0;}
.ct-h1 em{font-style:normal;color:#F23F44;}
.ct-sub{font-size:18px;line-height:1.6;color:#5A4B4E;margin:18px auto 0;max-width:600px;}
.ct-ctas{display:flex;gap:14px;justify-content:center;flex-wrap:wrap;margin-top:28px;}
/* verdict */
.ct-verdict{display:grid;grid-template-columns:1fr 1fr;gap:18px;max-width:900px;margin:44px auto 0;}
.ct-vcard{border-radius:18px;padding:26px 28px;text-align:left;}
.ct-vcard.win{background:radial-gradient(600px 300px at 30% 0%,#2A1417,#1A1014);color:#fff;}
.ct-vcard.other{background:#fff;border:1px solid #F0E2E3;}
.ct-vlg{width:44px;height:44px;border-radius:12px;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:17px;margin-bottom:14px;}
.ct-vcard.win .ct-vlg{background:linear-gradient(135deg,#FF7A52,#F23F44);color:#fff;}
.ct-vcard.other .ct-vlg{background:#F2E6E7;color:#8A7A7D;}
.ct-vname{font-size:18px;font-weight:800;letter-spacing:-.3px;margin:0 0 12px;}
.ct-vlist{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:9px;}
.ct-vlist li{display:flex;gap:9px;align-items:flex-start;font-size:14px;line-height:1.5;}
.ct-vcard.win li{color:#E8D8DA;}
.ct-vcard.other li{color:#6C5A5D;}
.ct-vlist .ck{flex:none;width:20px;height:20px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin-top:1px;}
.ct-vcard.win .ck{background:rgba(255,122,82,.22);color:#FF9F7A;}
.ct-vcard.other .ck{background:#F4E7E8;color:#B29A9E;}
/* table */
.ct-sec{padding:80px 28px;}
.ct-sec.sand{background:#FBF3EE;}
.ct-shead{text-align:center;max-width:720px;margin:0 auto 40px;}
.ct-h2{font-size:32px;font-weight:800;letter-spacing:-.8px;margin:0;}
.ct-h2p{font-size:16px;line-height:1.6;color:#6C5A5D;margin:12px 0 0;}
.ct-table{background:#fff;border:1px solid #F0E2E3;border-radius:20px;overflow:hidden;box-shadow:0 20px 44px rgba(110,11,14,.08);}
.ct-thead{display:grid;grid-template-columns:1.4fr 1fr 1fr;background:#1A1014;color:#fff;}
.ct-th{padding:18px 22px;font-size:14px;font-weight:700;letter-spacing:-.2px;display:flex;align-items:center;}
.ct-th.mid{background:linear-gradient(135deg,#F23F44,#DC3137);justify-content:center;}
.ct-th.end{justify-content:center;color:#C9B9BC;}
.ct-trow{display:grid;grid-template-columns:1.4fr 1fr 1fr;border-top:1px solid #F4E7E8;}
.ct-td{padding:16px 22px;font-size:14.5px;display:flex;align-items:center;}
.ct-td.feat{font-weight:600;color:#2A1A1D;}
.ct-td.mid{justify-content:center;background:#FFF8F7;}
.ct-td.end{justify-content:center;color:#8A7A7D;}
.ct-yes{width:26px;height:26px;border-radius:50%;background:#E7F6EE;color:#1F9D6B;display:flex;align-items:center;justify-content:center;}
.ct-no{width:26px;height:26px;border-radius:50%;background:#F7ECED;color:#C98A8D;display:flex;align-items:center;justify-content:center;}
.ct-part{font-size:12.5px;font-weight:700;color:#C08A3B;background:#FBF0E0;padding:4px 10px;border-radius:100px;}
.ct-cell{font-size:13px;font-weight:600;color:#2A1A1D;text-align:center;}
.ct-endcell{font-size:13px;font-weight:500;color:#8A7A7D;text-align:center;}
.ct-reasons{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:40px;}
.ct-reason{background:#fff;border:1px solid #F0E2E3;border-radius:18px;padding:26px;box-shadow:0 16px 30px rgba(110,11,14,.08);}
.ct-ric{width:44px;height:44px;border-radius:12px;background:#FFF0EF;color:#F23F44;display:flex;align-items:center;justify-content:center;margin-bottom:16px;}
.ct-rt{font-size:17px;font-weight:700;margin:0 0 8px;color:#1A1014;}
.ct-rd{font-size:14px;line-height:1.6;color:#6C5A5D;margin:0;}
.ct-social{display:flex;align-items:center;justify-content:center;gap:30px;flex-wrap:wrap;margin-top:44px;padding-top:34px;border-top:1px solid #F0E2E3;}
.ct-g2{display:flex;align-items:center;gap:12px;}
.ct-g2n{font-size:34px;font-weight:800;color:#F23F44;letter-spacing:-1px;}
.ct-g2l{font-size:13px;font-weight:600;color:#6C5A5D;line-height:1.4;}
.ct-badges{display:flex;gap:10px;flex-wrap:wrap;}
.ct-badge{border:1.5px solid #1A1014;border-radius:999px;padding:7px 15px;font-size:12px;font-weight:700;letter-spacing:.03em;color:#1A1014;}
/* faq */
.ct-faq{max-width:820px;margin:0 auto;}
@media(max-width:760px){.ct-verdict{grid-template-columns:1fr;}.ct-h1{font-size:34px;}.ct-thead,.ct-trow{grid-template-columns:1.3fr .85fr .85fr;}.ct-td,.ct-th{padding:13px 12px;font-size:13px;}.ct-sec{padding:56px 22px;}.ct-reasons{grid-template-columns:1fr;}}

h1,h2,h3,h4,.h1,.h2,.h3,.hero h1,.eyebrow{text-wrap:balance;}p,li,.body,.lead,.sub,figcaption,blockquote{text-wrap:pretty;}/*om-balance-rule*/
`;

const name = 'Competitor X';
const initial = 'X';
const ourWins = [
  '3,500+ validated tests across roles and industries',
  'AI video, audio and chat interviews built in',
  'No annual contract — pay per candidate, cancel anytime',
  '100+ native ATS integrations on every paid plan',
];
const theirLimits = [
  'Smaller test library, fewer role-specific options',
  'Interviews often a separate tool or add-on',
  'Annual contracts and higher entry pricing',
  'ATS integrations gated to top tiers',
];
const whySwitch = [
  { t: 'A deeper test library', d: '3,500+ validated tests across roles and industries — not a few hundred generic ones.' },
  { t: 'Interviews built in', d: 'AI video, audio and chat interviews come standard, not a separate tool or paid add-on.' },
  { t: 'Fairer pricing', d: 'Pay per candidate with no annual lock-in — scale up or down without renegotiating a contract.' },
];
type Row = {
  feature: string;
  usYes?: boolean; us?: string;
  themYes?: boolean; themNo?: boolean; themPart?: boolean; them?: string;
};
const rows: Row[] = [
  { feature: 'Validated test library', us: '3,500+', them: '~300–500' },
  { feature: 'AI video, audio & chat interviews', usYes: true, themPart: true },
  { feature: 'Custom questions & build-your-own', usYes: true, themYes: true },
  { feature: 'Anti-cheating & proctoring', usYes: true, themYes: true },
  { feature: 'Native ATS integrations', us: '100+', them: 'Enterprise only' },
  { feature: 'Pay per candidate (no annual lock-in)', usYes: true, themNo: true },
  { feature: 'Candidate languages', us: '16+', them: 'Limited' },
  { feature: 'EEOC-defensible & SOC 2 / ISO 27001', usYes: true, themYes: true },
];
const faqItems = [
  { q: 'Can I migrate my existing assessments to Testlify?', a: 'Yes. You can rebuild assessments quickly from our 3,500+ test library or import your own questions, and our team helps enterprise customers migrate at no extra cost.' },
  { q: 'Is Testlify more affordable?', a: 'For most teams, yes — there’s no mandatory annual contract. You pay per candidate and can cancel anytime, which avoids paying for seats or volume you don’t use.' },
  { q: 'Do I lose any features by switching?', a: 'You gain a bigger library, built-in AI interviews and more integrations. Anti-cheating, custom questions and compliance are all standard.' },
  { q: 'How long does it take to get started?', a: 'Minutes. Start a 7-day free trial with no credit card, build an assessment from a template and invite candidates the same day.' },
];

export default function AlternativesDetailPage() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const base = rootRef.current;
    const root: Document | ShadowRoot =
      (base && base.getRootNode && (base.getRootNode() as Document | ShadowRoot)) || document;
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
    requestAnimationFrame(() => requestAnimationFrame(run));
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <SiteHeader announcement="Comparing assessment platforms? See how Testlify stacks up — no annual contract, 3,500+ tests" announcementCta="Compare now" />

      <section className="ct-hero" ref={rootRef}><div className="ct-wrap">
        <div className="ct-crumb"><Link href="/blog">Resources</Link><span>/</span><Link href="/alternatives">Competitors</Link><span>/</span><span>Testlify vs {name}</span></div>
        <p className="ct-eyebrow" data-reveal="">Comparison<span className="dot">.</span></p>
        <h1 className="ct-h1" data-reveal="" data-delay="60">Testlify vs {name}:<br /><em>the skills-first choice</em></h1>
        <p className="ct-sub" data-reveal="" data-delay="110">Both platforms help you screen candidates with assessments. Here’s an honest look at where Testlify pulls ahead — on library depth, interviews, pricing and integrations — so you can pick the right fit.</p>
        <div className="ct-ctas" data-reveal="" data-delay="160">
          <CtaButton label="Try Testlify free" href="/pricing" variant="primary" size="lg" icon="arrow" magnetic />
          <CtaButton label="Book a demo" href="/contact" variant="secondary" size="lg" icon="play" />
        </div>
        <div className="ct-verdict" data-reveal="" data-delay="200">
          <div className="ct-vcard win"><div className="ct-vlg">T</div><p className="ct-vname">Testlify</p><ul className="ct-vlist">
            {ourWins.map((w, i) => (
              <li key={i}><span className="ck"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 6"></path></svg></span>{w}</li>
            ))}
          </ul></div>
          <div className="ct-vcard other"><div className="ct-vlg">{initial}</div><p className="ct-vname">{name}</p><ul className="ct-vlist">
            {theirLimits.map((l, i) => (
              <li key={i}><span className="ck"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="6" y1="6" x2="18" y2="18"></line><line x1="18" y1="6" x2="6" y2="18"></line></svg></span>{l}</li>
            ))}
          </ul></div>
        </div>
      </div></section>

      <section className="ct-sec sand"><div className="ct-wrap">
        <div className="ct-shead" data-reveal=""><p className="ct-eyebrow">Feature by feature<span className="dot">.</span></p><h2 className="ct-h2">The full comparison</h2><p className="ct-h2p">Where the two platforms line up — and where they don&apos;t.</p></div>
        <div className="ct-table" data-reveal="" data-delay="100">
          <div className="ct-thead"><div className="ct-th">Feature</div><div className="ct-th mid">Testlify</div><div className="ct-th end">{name}</div></div>
          {rows.map((r, i) => (
            <div className="ct-trow" key={i}>
              <div className="ct-td feat">{r.feature}</div>
              <div className="ct-td mid">
                {r.usYes ? <span className="ct-yes"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 6"></path></svg></span> : null}
                {typeof r.us === 'string' ? <span className="ct-cell">{r.us}</span> : null}
              </div>
              <div className="ct-td end">
                {r.themYes ? <span className="ct-yes"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 6"></path></svg></span> : null}
                {r.themNo ? <span className="ct-no"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="6" y1="6" x2="18" y2="18"></line><line x1="18" y1="6" x2="6" y2="18"></line></svg></span> : null}
                {r.themPart ? <span className="ct-part">Limited</span> : null}
                {typeof r.them === 'string' ? <span className="ct-endcell">{r.them}</span> : null}
              </div>
            </div>
          ))}
        </div>
      </div></section>

      <section className="ct-sec"><div className="ct-wrap">
        <div className="ct-shead" data-reveal=""><p className="ct-eyebrow">Why switch<span className="dot">.</span></p><h2 className="ct-h2">Why teams choose Testlify</h2><p className="ct-h2p">The reasons hiring teams move from {name} — and stay.</p></div>
        <div className="ct-reasons">
          {whySwitch.map((r, i) => (
            <div className="ct-reason" data-reveal="" key={i}><div className="ct-ric"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 12l3 3 5-6"></path></svg></div><p className="ct-rt">{r.t}</p><p className="ct-rd">{r.d}</p></div>
          ))}
        </div>
        <div className="ct-social" data-reveal=""><div className="ct-g2"><span className="ct-g2n">4.7</span><span className="ct-g2l">Rated 4.7 on G2<br />by 1,000+ reviewers</span></div><div className="ct-badges"><span className="ct-badge">SOC 2 TYPE II</span><span className="ct-badge">ISO 27001</span><span className="ct-badge">GDPR</span><span className="ct-badge">CCPA</span><span className="ct-badge">100+ ATS INTEGRATIONS</span></div></div>
      </div></section>

      <section className="ct-sec sand"><div className="ct-wrap">
        <div className="ct-shead" data-reveal=""><p className="ct-eyebrow">Questions<span className="dot">.</span></p><h2 className="ct-h2">Switching to Testlify, answered</h2></div>
        <div className="ct-faq" data-reveal="" data-delay="100"><FAQ items={faqItems} /></div>
      </div></section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
