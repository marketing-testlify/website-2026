'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaBand from '@/components/CtaBand';

const css = `
*{box-sizing:border-box;}html{scroll-behavior:smooth;}
body{margin:0;font-family:'Poppins',sans-serif;-webkit-font-smoothing:antialiased;color:#1A1014;background:#fff;}
.tc-wrap{max-width:1240px;margin:0 auto;padding:0 28px;}
.tc-sec{padding:88px 28px;}
.tc-eyebrow{font-size:12.5px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:#8A7A7D;margin:0 0 18px;}
.tc-eyebrow b{color:#F23F44;font-weight:600;}
.tc-h1{font-size:60px;line-height:1.04;font-weight:800;letter-spacing:-2px;margin:0;}
.tc-h2{font-size:38px;line-height:1.08;font-weight:800;letter-spacing:-1.2px;margin:0;}
.tc-h3{font-size:18px;line-height:1.25;font-weight:700;letter-spacing:-.3px;margin:0 0 8px;}
.tc-lead{font-size:19px;line-height:1.6;color:#5A4B4E;font-weight:400;}
.tc-body{font-size:14px;line-height:1.62;color:#5A4B4E;margin:0;}
.tc-hero{padding:64px 28px 30px;background:radial-gradient(1100px 520px at 50% -10%,#FFF0EE 0%,rgba(255,240,238,0) 62%),#fff;text-align:center;}
.tc-badgerow{display:flex;gap:14px;justify-content:center;flex-wrap:wrap;margin-top:32px;}
.tc-badge{display:flex;flex-direction:column;align-items:center;gap:9px;background:#fff;border:1px solid #EFE2E3;border-radius:16px;padding:18px 24px;min-width:118px;transition:transform .2s ease, box-shadow .2s ease;}
.tc-badge:hover{transform:translateY(-3px);box-shadow:0 16px 34px rgba(110,11,14,.08);}
.tc-badgeic{width:44px;height:44px;border-radius:50%;background:#FFF0F0;color:#F23F44;display:flex;align-items:center;justify-content:center;}
.tc-badget{font-size:13px;font-weight:700;}
.tc-badges{font-size:11px;color:#A9999C;}
.tc-tabbar{display:flex;gap:8px;justify-content:center;flex-wrap:wrap;padding:22px 28px 0;}
.tc-ttab{display:inline-flex;align-items:center;gap:9px;background:#fff;border:1.5px solid #EADDDE;color:#6C5A5D;border-radius:999px;padding:12px 24px;font-family:inherit;font-size:15px;font-weight:600;cursor:pointer;transition:all .22s ease;}
.tc-ttab:hover{border-color:#F2B7B9;color:#1A1014;}
.tc-ttab.on{background:#F23F44;border-color:#F23F44;color:#fff;box-shadow:0 12px 26px rgba(242,63,68,.28);}
.tc-ttab svg{flex:none;}
.tc-panel{padding-top:56px;}.tc-sand{background:#FBF3EE;}
.tc-phead{max-width:660px;margin:0 auto 42px;text-align:center;}
.tc-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;}
.tc-card{background:#fff;border:1px solid #EFE2E3;border-radius:20px;padding:28px;transition:transform .25s ease, box-shadow .25s ease, border-color .25s;}
.tc-card:hover{transform:translateY(-4px);box-shadow:0 22px 46px rgba(110,11,14,.10);border-color:#F4D2D3;}
.tc-ic{width:46px;height:46px;border-radius:13px;background:#FFF0F0;color:#F23F44;display:flex;align-items:center;justify-content:center;margin-bottom:18px;}
.tc-check{list-style:none;margin:40px 0 0;padding:0;display:grid;grid-template-columns:1fr 1fr;gap:16px 40px;max-width:980px;margin-left:auto;margin-right:auto;}
.tc-check li{display:flex;align-items:flex-start;gap:12px;font-size:15px;color:#3A2C30;line-height:1.5;}
.tc-check svg{flex:none;margin-top:2px;color:#1FA463;}
.tc-cta{background:#1A1014;color:#fff;text-align:center;}
.tc-btn{display:inline-flex;align-items:center;gap:9px;font-weight:600;font-size:15.5px;padding:14px 26px;border-radius:13px;transition:transform .25s ease, box-shadow .25s ease;cursor:pointer;border:none;text-decoration:none;}
.tc-reveal{opacity:0;transform:translateY(26px);}
.tc-reveal.in{opacity:1;transform:none;}
@media(max-width:920px){.tc-h1{font-size:40px;letter-spacing:-1.2px;}.tc-h2{font-size:30px;letter-spacing:-.8px;}.tc-sec{padding:64px 22px;}.tc-grid{grid-template-columns:1fr;}.tc-check{grid-template-columns:1fr;}}

h1,h2,h3,h4,.h1,.h2,.h3,.hero h1,.eyebrow{text-wrap:balance;}p,li,.body,.lead,.sub,figcaption,blockquote{text-wrap:pretty;}/*om-balance-rule*/
`;

export default function CompanyTrustCenterPage() {
  useEffect(() => {
    const sweep = () => {
      const vh = window.innerHeight || document.documentElement.clientHeight;
      document.querySelectorAll<HTMLElement>('.tc-reveal:not(.in)').forEach((n) => {
        if (n.getBoundingClientRect().top < vh + 600) {
          n.classList.add('in');
          const _d = (parseFloat(n.style.transitionDelay || '0') || 0) * 1000;
          const _dur = 700, _sy = 26;
          let _st: number | null = null;
          const _tick = (t: number) => {
            if (_st === null) _st = t;
            const p = Math.min(1, (t - _st) / _dur);
            const e = 1 - Math.pow(1 - p, 3);
            n.style.opacity = String(e);
            n.style.transform = 'translateY(' + (_sy * (1 - e)).toFixed(2) + 'px)';
            if (p < 1) requestAnimationFrame(_tick);
            else { n.style.opacity = '1'; n.style.transform = 'none'; }
          };
          setTimeout(() => requestAnimationFrame(_tick), _d);
        }
      });
    };
    window.addEventListener('scroll', sweep, { passive: true });
    window.addEventListener('resize', sweep);
    const timers = [0, 150, 400, 800, 1500].map((t) => setTimeout(sweep, t));
    requestAnimationFrame(sweep);
    return () => {
      window.removeEventListener('scroll', sweep);
      window.removeEventListener('resize', sweep);
      timers.forEach(clearTimeout);
    };
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <SiteHeader announcement="Testlify is SOC 2 Type II and ISO 27001 certified" />

      <section className="tc-hero"><div className="tc-wrap" style={{ maxWidth: '840px' }}>
        <p className="tc-eyebrow tc-reveal">Trust center<b>.</b></p>
        <h1 className="tc-h1 tc-reveal" style={{ transitionDelay: '.04s' }}>Security, data and<br />privacy — in one place</h1>
        <p className="tc-lead tc-reveal" style={{ margin: '22px auto 0', maxWidth: '620px', transitionDelay: '.08s' }}>Candidate data is some of the most sensitive you handle. Here&apos;s exactly how Testlify secures it, where it lives, and the rights every candidate keeps.</p>
        <div className="tc-reveal tc-badgerow" style={{ transitionDelay: '.12s' }}>
          <div className="tc-badge"><span className="tc-badgeic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg></span><span className="tc-badget">SOC 2 Type II</span><span className="tc-badges">Audited annually</span></div>
          <div className="tc-badge"><span className="tc-badgeic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg></span><span className="tc-badget">ISO 27001</span><span className="tc-badges">Certified</span></div>
          <div className="tc-badge"><span className="tc-badgeic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z"></path></svg></span><span className="tc-badget">GDPR</span><span className="tc-badges">Compliant</span></div>
          <div className="tc-badge"><span className="tc-badgeic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg></span><span className="tc-badget">CCPA</span><span className="tc-badges">Compliant</span></div>
        </div>
      </div></section>

      <section className="tc-sec tc-panel"><div className="tc-wrap">
        <div className="tc-phead tc-reveal"><p className="tc-eyebrow">How we protect you<b>.</b></p><h2 className="tc-h2">Security at every layer</h2><p className="tc-body" style={{ fontSize: '16px', marginTop: '14px' }}>Defense in depth, from the network edge to the database — audited by independent third parties every year.</p></div>
        <div className="tc-grid">
          <div className="tc-card tc-reveal"><span className="tc-ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg></span><h3 className="tc-h3">Encryption everywhere</h3><p className="tc-body">Data is encrypted in transit with TLS 1.3 and at rest with AES-256. Keys are rotated and managed in a dedicated KMS.</p></div>
          <div className="tc-card tc-reveal" style={{ transitionDelay: '.06s' }}><span className="tc-ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path><circle cx="12" cy="12" r="10"></circle></svg></span><h3 className="tc-h3">Access controls</h3><p className="tc-body">Role-based permissions, SSO/SAML, SCIM provisioning and full audit logs keep access tight and traceable.</p></div>
          <div className="tc-card tc-reveal" style={{ transitionDelay: '.12s' }}><span className="tc-ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg></span><h3 className="tc-h3">Reliability &amp; uptime</h3><p className="tc-body">99.9% uptime SLA, multi-region redundancy, automated backups and continuous monitoring with on-call response.</p></div>
        </div>
        <ul className="tc-check tc-reveal">
          <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>Annual third-party penetration testing</li>
          <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>24/7 monitoring &amp; anomaly detection</li>
          <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>Documented incident response plan</li>
          <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>Secure SDLC with mandatory code review</li>
          <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>Responsible disclosure &amp; bug bounty</li>
          <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>Vendor &amp; sub-processor security review</li>
        </ul>
      </div></section>

      <section className="tc-sec tc-panel tc-sand"><div className="tc-wrap">
        <div className="tc-phead tc-reveal"><p className="tc-eyebrow">Your data, your control<b>.</b></p><h2 className="tc-h2">You own your candidate data</h2><p className="tc-body" style={{ fontSize: '16px', marginTop: '14px' }}>Testlify is the processor, never the owner. You decide where data lives, how long it&apos;s kept and when it&apos;s gone.</p></div>
        <div className="tc-grid">
          <div className="tc-card tc-reveal"><span className="tc-ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12l2 2 4-4"></path><circle cx="12" cy="12" r="10"></circle></svg></span><h3 className="tc-h3">You own it, always</h3><p className="tc-body">Your candidate data belongs to you. We process it on your instructions and never sell or repurpose it.</p></div>
          <div className="tc-card tc-reveal" style={{ transitionDelay: '.06s' }}><span className="tc-ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z"></path></svg></span><h3 className="tc-h3">Data residency</h3><p className="tc-body">Choose where candidate data is stored, with hosting regions in the EU and the US to meet local requirements.</p></div>
          <div className="tc-card tc-reveal" style={{ transitionDelay: '.12s' }}><span className="tc-ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg></span><h3 className="tc-h3">Retention &amp; deletion</h3><p className="tc-body">Set configurable retention windows and trigger permanent deletion on request or on schedule.</p></div>
        </div>
        <ul className="tc-check tc-reveal">
          <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>Automated, encrypted daily backups</li>
          <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>Multi-region redundancy &amp; failover</li>
          <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>Logically isolated tenant data</li>
          <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>Export your data any time</li>
          <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>Published sub-processor list</li>
          <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>Data minimization by default</li>
        </ul>
      </div></section>

      <section className="tc-sec tc-panel"><div className="tc-wrap">
        <div className="tc-phead tc-reveal"><p className="tc-eyebrow">Privacy by design<b>.</b></p><h2 className="tc-h2">Every candidate keeps their rights</h2><p className="tc-body" style={{ fontSize: '16px', marginTop: '14px' }}>Compliance isn&apos;t a checkbox — it&apos;s built into how assessments are designed, delivered and stored.</p></div>
        <div className="tc-grid">
          <div className="tc-card tc-reveal"><span className="tc-ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z"></path></svg></span><h3 className="tc-h3">Global compliance</h3><p className="tc-body">GDPR, CCPA and EEOC-aligned by design, so you can hire across regions without compliance gaps.</p></div>
          <div className="tc-card tc-reveal" style={{ transitionDelay: '.06s' }}><span className="tc-ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path></svg></span><h3 className="tc-h3">Candidate rights</h3><p className="tc-body">Built-in workflows for access, portability and right-to-erasure requests keep every candidate in control.</p></div>
          <div className="tc-card tc-reveal" style={{ transitionDelay: '.12s' }}><span className="tc-ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg></span><h3 className="tc-h3">Clear agreements</h3><p className="tc-body">Signed Data Processing Agreements and a transparent sub-processor list, ready for your legal team.</p></div>
        </div>
        <ul className="tc-check tc-reveal">
          <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>Signed Data Processing Agreements (DPA)</li>
          <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>Explicit candidate consent capture</li>
          <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>Bias-audit aligned assessments</li>
          <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>Right-to-erasure &amp; access workflows</li>
          <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>Transparent sub-processor disclosures</li>
          <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>Plain-language privacy policy</li>
        </ul>
      </div></section>

      <section className="tc-sec tc-cta"><div className="tc-wrap" style={{ maxWidth: '720px' }}>
        <h2 className="tc-h2 tc-reveal" style={{ color: '#fff' }}>Need our documentation?</h2>
        <p className="tc-lead tc-reveal" style={{ color: 'rgba(255,255,255,.78)', margin: '18px auto 30px', transitionDelay: '.04s' }}>Access our SOC 2 report, compliance certificates and DPA, or reach the security team directly.</p>
        <div className="tc-reveal" style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap', transitionDelay: '.08s' }}>
          <Link className="tc-btn" href="/company-trust-compliances" style={{ background: '#fff', color: '#C0242B' }}>View compliances<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"></path></svg></Link>
          <Link className="tc-btn" href="/contact" style={{ background: 'rgba(255,255,255,.14)', color: '#fff', border: '1.5px solid rgba(255,255,255,.4)' }}>Contact security team</Link>
        </div>
      </div></section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
