'use client';

import { useEffect, useRef, useState } from 'react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import FAQ from '@/components/FAQ';
import CtaBand from '@/components/CtaBand';

const CSS = `
*{box-sizing:border-box;}
html{scroll-behavior:smooth;}
body{margin:0;font-family:'Poppins',sans-serif;-webkit-font-smoothing:antialiased;color:#1A1014;background:#fff;}
a{text-decoration:none;color:inherit;}
.wrap{max-width:1240px;margin:0 auto;padding:0 28px;}
.sec{padding:104px 28px;}
.eyebrow{font-size:12.5px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:#8A7A7D;margin:0 0 18px;}
.eyebrow b{color:#F23F44;font-weight:600;}
.h1{font-size:62px;line-height:1.04;font-weight:800;letter-spacing:-2px;margin:0;color:#1A1014;}
.h2{font-size:43px;line-height:1.08;font-weight:800;letter-spacing:-1.4px;margin:0;color:#1A1014;}
.lead{font-size:19px;line-height:1.6;color:#5A4B4E;font-weight:400;}
.body{font-size:16px;line-height:1.66;color:#5A4B4E;}
.center-head{text-align:center;max-width:720px;margin:0 auto 56px;}
.reveal{opacity:0;transform:translateY(26px);transition:opacity .7s cubic-bezier(.2,.7,.2,1), transform .7s cubic-bezier(.2,.7,.2,1);}
.reveal.in{opacity:1;transform:none;}
.phero{padding:70px 28px 44px;background:radial-gradient(1100px 520px at 50% -10%,#FFF0EE 0%,rgba(255,240,238,0) 62%),#fff;}
.invgrid{display:grid;grid-template-columns:1.05fr 1fr;gap:56px;align-items:start;}
.herogrid{display:grid;grid-template-columns:1.1fr .9fr;gap:56px;align-items:center;text-align:left;}
.statrow{display:grid;grid-template-columns:repeat(4,1fr);}
.stat{text-align:center;padding:4px 22px;}
.stat + .stat{border-left:1px solid #EFE3E4;}
.statn{font-size:34px;font-weight:700;letter-spacing:-1px;line-height:1;color:#1A1014;font-variant-numeric:tabular-nums;}
.statn .u{color:#F23F44;font-weight:600;}
.statl{font-size:14px;color:#6C5A5D;font-weight:500;margin-top:12px;line-height:1.45;}
.factcard{background:linear-gradient(160deg,#FFF6F4,#FBEDEA);border:1px solid #F6DCDD;border-radius:24px;padding:36px;}
.factrow{display:flex;align-items:center;gap:16px;padding:16px 0;border-bottom:1px solid #F0DCDC;}
.factrow:last-child{border-bottom:0;}
.facticon{flex:none;width:44px;height:44px;border-radius:12px;background:#fff;color:#F23F44;display:flex;align-items:center;justify-content:center;box-shadow:0 6px 16px rgba(110,11,14,.08);}
.factlabel{font-size:12.5px;font-weight:600;color:#8A7A7D;margin:0 0 3px;}
.factval{font-size:16px;font-weight:700;color:#1A1014;margin:0;}
@media(max-width:920px){.herogrid{grid-template-columns:1fr;text-align:center;}}
.form{background:#fff;border:1px solid #F0E2E3;border-radius:22px;padding:34px;box-shadow:0 30px 70px rgba(110,11,14,.10);}
.frow{display:grid;grid-template-columns:1fr 1fr;gap:14px;}
.field{margin-bottom:16px;}
.field label{display:block;font-size:13px;font-weight:600;color:#2A1A1D;margin-bottom:7px;}
.field input,.field select,.field textarea{width:100%;font-family:inherit;font-size:15px;color:#1A1014;padding:13px 15px;border:1.5px solid #EEDFE0;border-radius:12px;background:#FEFCFB;transition:border-color .2s;box-sizing:border-box;}
.field input:focus,.field select:focus,.field textarea:focus{outline:none;border-color:#F23F44;box-shadow:0 0 0 4px rgba(242,63,68,.12);}
.field textarea{resize:vertical;min-height:96px;}
.submit{width:100%;border:0;font-family:inherit;cursor:pointer;background:#F23F44;color:#fff;font-weight:700;font-size:16px;padding:15px;border-radius:13px;box-shadow:0 12px 26px rgba(242,63,68,.3);transition:transform .2s;}
.submit:hover{transform:translateY(-2px);}
.ok{background:#EAF8F0;border:1px solid #BFE8D2;color:#1B7F4B;border-radius:14px;padding:22px;font-size:15px;font-weight:600;text-align:center;}
@media(max-width:920px){.invgrid,.frow{grid-template-columns:1fr;}}
h1,h2,h3,h4,.h1,.h2,.h3,.hero h1,.eyebrow{text-wrap:balance;}p,li,.body,.lead,.sub,figcaption,blockquote{text-wrap:pretty;}/*om-balance-rule*/
`;

const FAQ_ITEMS = [
  { q: 'What does Testlify do?', a: "Testlify's mission is to help millions of organizations hire better. We offer a talent assessment platform with skill tests, data-driven assessments, end-to-end automation, a fast and fun candidate experience, and enterprise-grade business intelligence to help you hire the best candidates fast, fair, and at scale. We start free and scale to meet our customers' needs at any stage of growth." },
  { q: 'When was Testlify founded?', a: 'Testlify was founded on June 24, 2022.' },
  { q: "Where is Testlify's corporate headquarters?", a: 'Testlify, Inc., 2823 Oakley Ave, Bensalem PA 19020, United States.' },
  { q: "When does Testlify's fiscal year end?", a: 'Our fiscal year ends on December 31st.' },
  { q: 'Does Testlify pay dividends?', a: 'No. We do not currently pay dividends.' },
  { q: 'How do I contact Investor Relations with a question or request?', a: 'You can contact Testlify Investor Relations via email at investors@testlify.com.' },
];

function StatRow() {
  const ref = useRef<HTMLDivElement>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || done) return;
    const runCount = (target: HTMLElement) => {
      const to = +(target.dataset.to || '0');
      const comma = target.dataset.comma === '1';
      const dur = 1500;
      let st: number | null = null;
      const fmt = (n: number) => {
        n = Math.round(n);
        return comma ? n.toLocaleString('en-US') : String(n);
      };
      const tick = (t: number) => {
        if (st === null) st = t;
        const p = Math.min(1, (t - st) / dur);
        const e = 1 - Math.pow(1 - p, 3);
        target.textContent = fmt(to * e);
        if (p < 1) requestAnimationFrame(tick);
        else target.textContent = fmt(to);
      };
      requestAnimationFrame(tick);
    };
    let io: IntersectionObserver | null = null;
    try {
      io = new IntersectionObserver(
        (ents) => {
          ents.forEach((en) => {
            if (en.isIntersecting) {
              en.target.querySelectorAll<HTMLElement>('.v[data-to]').forEach(runCount);
              setDone(true);
              io?.unobserve(en.target);
            }
          });
        },
        { threshold: 0.4 }
      );
      io.observe(el);
    } catch {
      /* noop */
    }
    return () => io?.disconnect();
  }, [done]);

  return (
    <div className="statrow reveal" ref={ref}>
      <div className="stat">
        <div className="statn">
          <span className="v" data-to="1500" data-comma="1">0</span>
          <span className="u">+</span>
        </div>
        <div className="statl">hiring teams</div>
      </div>
      <div className="stat">
        <div className="statn">
          <span className="v" data-to="5" data-comma="1">0</span>
          <span className="u">M+</span>
        </div>
        <div className="statl">candidates assessed</div>
      </div>
      <div className="stat">
        <div className="statn">
          <span className="v" data-to="100">0</span>
          <span className="u">+</span>
        </div>
        <div className="statl">team members</div>
      </div>
      <div className="stat">
        <div className="statn">
          <span className="v" data-to="50">0</span>
          <span className="u">+</span>
        </div>
        <div className="statl">industries served</div>
      </div>
    </div>
  );
}

export default function InvestorsPage() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <SiteHeader
        announcement="Backed by SHRM Labs, Google, Microsoft & NVIDIA"
        announcementCta="Read our story"
        homeHref="/"
      />

      <section className="phero" style={{ textAlign: 'left' }}>
        <div className="wrap herogrid">
          <div>
            <p className="eyebrow reveal">
              Investors<b>.</b>
            </p>
            <h1 className="h1 reveal" style={{ transitionDelay: '.04s' }}>
              Testlify is a <span style={{ color: '#F23F44' }}>privately-owned</span> company
            </h1>
          </div>
          <div className="reveal factcard" style={{ transitionDelay: '.08s' }}>
            <div className="factrow">
              <span className="facticon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </span>
              <div>
                <p className="factlabel">Founded</p>
                <p className="factval">June 24, 2022</p>
              </div>
            </div>
            <div className="factrow">
              <span className="facticon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </span>
              <div>
                <p className="factlabel">Headquarters</p>
                <p className="factval">Bensalem, PA · USA</p>
              </div>
            </div>
            <div className="factrow">
              <span className="facticon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </span>
              <div>
                <p className="factlabel">Ownership</p>
                <p className="factval">Privately held</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec" style={{ background: '#FBF3EE', paddingTop: '28px', paddingBottom: '28px' }}>
        <div className="wrap">
          <StatRow />
        </div>
      </section>

      <section className="sec">
        <div className="wrap invgrid">
          <div className="reveal">
            <p className="body">
              We take pride in the fact that we've built our company from the ground up. We have always been proud of our independent spirit and our commitment to staying true to our principles. However, we also recognize that in order to reach our full potential and bring our vision to life, we need to explore all avenues of growth.
            </p>
            <p className="body" style={{ marginTop: '16px' }}>
              We believe that by partnering with like-minded investors who share our values and our passion for innovation, we can achieve even greater success and make an even bigger impact in the industry. Join us on our journey and be a part of something truly unique and inspiring.
            </p>
            <p className="body" style={{ marginTop: '16px' }}>
              You can get in touch with us at{' '}
              <a href="mailto:investors@testlify.com" style={{ color: '#F23F44', fontWeight: 600 }}>
                investors@testlify.com
              </a>
              . We'd love to hear from you!
            </p>
          </div>
          <div className="reveal" style={{ transitionDelay: '.06s' }}>
            <p className="eyebrow" style={{ marginBottom: '14px' }}>
              Investor interest form<b>.</b>
            </p>
            {sent ? (
              <div className="ok">Thanks — we'll be in touch shortly.</div>
            ) : (
              <form className="form" onSubmit={onSubmit}>
                <div className="frow">
                  <div className="field">
                    <label>First name</label>
                    <input type="text" required placeholder="Jane" />
                  </div>
                  <div className="field">
                    <label>Last name</label>
                    <input type="text" required placeholder="Doe" />
                  </div>
                </div>
                <div className="field">
                  <label>Email</label>
                  <input type="email" required placeholder="jane@fund.com" />
                </div>
                <div className="field">
                  <label>Company name</label>
                  <input type="text" required placeholder="Fund LP" />
                </div>
                <div className="field">
                  <label>Phone</label>
                  <input type="tel" required placeholder="(555) 123-4567" />
                </div>
                <div className="field">
                  <label>What's your role?</label>
                  <input type="text" required placeholder="Partner, Analyst, etc." />
                </div>
                <div className="field">
                  <label>Additional comments</label>
                  <textarea required placeholder="Tell us about your interest..." />
                </div>
                <button type="submit" className="submit">
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="sec" style={{ background: '#FBF3EE' }}>
        <div className="wrap">
          <div className="center-head">
            <p className="eyebrow reveal">
              FAQ<b>.</b>
            </p>
            <h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>
              Frequently asked questions
            </h2>
            <p className="lead reveal" style={{ marginTop: '14px', transitionDelay: '.08s' }}>
              Want to know more about Testlify? Here are answers to the most commonly asked questions about our company.
            </p>
          </div>
          <div className="reveal" style={{ maxWidth: '820px', margin: '0 auto' }}>
            <FAQ items={FAQ_ITEMS} />
          </div>
        </div>
      </section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
