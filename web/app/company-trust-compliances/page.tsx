'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaButton from '@/components/CtaButton';
import CtaBand from '@/components/CtaBand';
import SecuritySection from '@/components/SecuritySection';

const css = `
*{box-sizing:border-box;}
html{scroll-behavior:smooth;}
body{margin:0;font-family:'Poppins',sans-serif;-webkit-font-smoothing:antialiased;color:#1A1014;background:#fff;}
a{text-decoration:none;color:inherit;}
.cmp-wrap{max-width:1240px;margin:0 auto;padding:0 28px;}
.cmp-sec{padding:96px 28px;}
.cmp-eyebrow{font-size:12.5px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:#8A7A7D;margin:0 0 18px;}
.cmp-eyebrow b{color:#F23F44;font-weight:700;}
.cmp-h1{font-size:56px;line-height:1.05;font-weight:800;letter-spacing:-1.6px;margin:0;color:#1A1014;}
.cmp-h2{font-size:40px;line-height:1.1;font-weight:800;letter-spacing:-1.2px;margin:0;color:#1A1014;}
.cmp-lead{font-size:19px;line-height:1.6;color:#5A4B4E;font-weight:400;}
.cmp-body{font-size:15.5px;line-height:1.64;color:#5A4B4E;}
.cmp-hero{padding:56px 28px 40px;background:radial-gradient(1100px 520px at 50% -12%,#FFF0EE 0%,rgba(255,240,238,0) 62%),#fff;text-align:center;}
.cmp-tabs{display:flex;gap:8px;justify-content:center;flex-wrap:wrap;margin-top:34px;}
.cmp-tab{display:inline-flex;align-items:center;gap:7px;font-size:13.5px;font-weight:600;padding:9px 16px;border-radius:999px;border:1px solid #F0E2E3;color:#6C5A5D;background:#fff;transition:border-color .2s,color .2s,box-shadow .2s,transform .2s;}
.cmp-tab:hover{border-color:#FBD0D1;color:#1A1014;transform:translateY(-1px);box-shadow:0 8px 18px rgba(110,11,14,.08);}
.cmp-tab.on{background:#F23F44;border-color:#F23F44;color:#fff;box-shadow:0 10px 22px rgba(242,63,68,.28);}
.cmp-certgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;}
.cmp-cert{position:relative;background:#fff;border:1px solid #F2E6E7;border-radius:20px;padding:28px;transition:transform .3s cubic-bezier(.2,.7,.3,1),border-color .3s,box-shadow .3s;}
.cmp-cert:hover{transform:translateY(-4px);border-color:#FBD0D1;box-shadow:0 18px 40px rgba(110,11,14,.10);}
.cmp-certtop{display:flex;align-items:center;gap:14px;margin-bottom:16px;}
.cmp-certic{width:52px;height:52px;flex:none;border-radius:14px;background:#FFF0F0;color:#F23F44;display:flex;align-items:center;justify-content:center;}
.cmp-certname{font-size:18px;font-weight:800;letter-spacing:-.3px;color:#1A1014;margin:0;}
.cmp-certtag{font-size:11.5px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;color:#1FA463;margin-top:3px;display:flex;align-items:center;gap:5px;}
.cmp-dotg{width:7px;height:7px;border-radius:50%;background:#1FA463;flex:none;}
.cmp-two{display:grid;grid-template-columns:1fr 1fr;gap:22px;}
.cmp-panel{background:#fff;border:1px solid #F2E6E7;border-radius:20px;padding:30px 32px;transition:transform .3s cubic-bezier(.2,.7,.3,1),border-color .3s,box-shadow .3s;}
.cmp-panel:hover{transform:translateY(-4px);border-color:#FBD0D1;box-shadow:0 18px 40px rgba(110,11,14,.10);}
.cmp-panelic{width:46px;height:46px;border-radius:13px;background:#FFF0F0;color:#F23F44;display:flex;align-items:center;justify-content:center;margin-bottom:18px;}
.cmp-checklist{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:1fr 1fr;gap:16px 40px;}
.cmp-checklist li{display:flex;align-items:flex-start;gap:12px;font-size:15px;color:#3A2C30;line-height:1.5;}
.cmp-checklist svg{flex:none;margin-top:2px;color:#1FA463;}
.cmp-reveal{opacity:0;transform:translateY(26px);}
.cmp-btnrow{display:flex;gap:14px;justify-content:center;flex-wrap:wrap;margin-top:30px;}
@media(max-width:920px){
  .cmp-h1{font-size:40px;letter-spacing:-1.2px;}
  .cmp-h2{font-size:30px;letter-spacing:-.9px;}
  .cmp-sec{padding:72px 22px;}
  .cmp-certgrid{grid-template-columns:1fr;}
  .cmp-two{grid-template-columns:1fr;}
  .cmp-checklist{grid-template-columns:1fr;}
}

h1,h2,h3,h4,.h1,.h2,.h3,.hero h1,.eyebrow{text-wrap:balance;}p,li,.body,.lead,.sub,figcaption,blockquote{text-wrap:pretty;}/*om-balance-rule*/
`;

const check = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>
);

export default function Page() {
  useEffect(() => {
    const sweep = () => {
      const vh = window.innerHeight || document.documentElement.clientHeight;
      document.querySelectorAll<HTMLElement>('.cmp-reveal:not(.cmp-done)').forEach((n) => {
        if (n.getBoundingClientRect().top < vh + 600) {
          n.classList.add('cmp-done');
          const _d = (parseFloat(n.style.transitionDelay || '0') || 0) * 1000;
          const _dur = 700, _sy = 26; let _st: number | null = null;
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

      <section className="cmp-hero"><div className="cmp-wrap" style={{ maxWidth: '860px' }}>
        <p className="cmp-eyebrow cmp-reveal">Trust center · Compliances<b>.</b></p>
        <h1 className="cmp-h1 cmp-reveal" style={{ transitionDelay: '.04s' }}>Compliance you can prove,<br />not just promise</h1>
        <p className="cmp-lead cmp-reveal" style={{ margin: '22px auto 0', maxWidth: '640px', transitionDelay: '.08s' }}>Every framework recruiters and legal teams ask about — audited, certified and documented. Candidate data handled to the standards trusted by banks, hospitals and governments.</p>
        <div className="cmp-tabs cmp-reveal" style={{ transitionDelay: '.12s' }}>
          <span className="cmp-tab on">Compliances</span>
          <Link className="cmp-tab" href="/trust">Security</Link>
          <Link className="cmp-tab" href="/trust">Data management</Link>
          <Link className="cmp-tab" href="/trust">Data requests</Link>
          <Link className="cmp-tab" href="/trust">Privacy</Link>
        </div>
      </div></section>

      <section className="cmp-sec" style={{ background: '#FBF3EE' }}><div className="cmp-wrap">
        <div style={{ maxWidth: '660px', margin: '0 auto 46px', textAlign: 'center' }}>
          <p className="cmp-eyebrow cmp-reveal">Certifications &amp; frameworks<b>.</b></p>
          <h2 className="cmp-h2 cmp-reveal" style={{ transitionDelay: '.04s' }}>Independently verified</h2>
          <p className="cmp-body cmp-reveal" style={{ margin: '16px auto 0', maxWidth: '560px', transitionDelay: '.08s' }}>Not self-attested. Each certification below is audited by an accredited third party and renewed on a fixed cadence.</p>
        </div>
        <div className="cmp-certgrid">
          <div className="cmp-cert cmp-reveal"><div className="cmp-certtop"><span className="cmp-certic"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="M9 12l2 2 4-4"></path></svg></span><div><h3 className="cmp-certname">SOC 2 Type II</h3><div className="cmp-certtag"><span className="cmp-dotg"></span>Audited annually</div></div></div><p className="cmp-body">An independent auditor evaluates our controls for security, availability and confidentiality over a continuous observation window — not a single point in time.</p></div>
          <div className="cmp-cert cmp-reveal" style={{ transitionDelay: '.05s' }}><div className="cmp-certtop"><span className="cmp-certic"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg></span><div><h3 className="cmp-certname">ISO 27001</h3><div className="cmp-certtag"><span className="cmp-dotg"></span>Certified</div></div></div><p className="cmp-body">Our information security management system (ISMS) is certified to the international standard for managing and continually improving security risk.</p></div>
          <div className="cmp-cert cmp-reveal" style={{ transitionDelay: '.1s' }}><div className="cmp-certtop"><span className="cmp-certic"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M2 12h20"></path><path d="M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z"></path></svg></span><div><h3 className="cmp-certname">GDPR</h3><div className="cmp-certtag"><span className="cmp-dotg"></span>Compliant</div></div></div><p className="cmp-body">Signed DPAs, EU Standard Contractual Clauses, lawful bases for processing and full candidate rights — access, portability and erasure — built into the product.</p></div>
          <div className="cmp-cert cmp-reveal"><div className="cmp-certtop"><span className="cmp-certic"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg></span><div><h3 className="cmp-certname">CCPA</h3><div className="cmp-certtag"><span className="cmp-dotg"></span>Compliant</div></div></div><p className="cmp-body">California residents can exercise their rights to know, delete and opt out. We never sell personal information and honor consumer requests within statutory timelines.</p></div>
          <div className="cmp-cert cmp-reveal" style={{ transitionDelay: '.05s' }}><div className="cmp-certtop"><span className="cmp-certic"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"></path><circle cx="12" cy="12" r="3"></circle></svg></span><div><h3 className="cmp-certname">EU–US Data Privacy Framework</h3><div className="cmp-certtag"><span className="cmp-dotg"></span>Self-certified</div></div></div><p className="cmp-body">A lawful, recognized mechanism for transferring personal data from the EU, UK and Switzerland to the United States, backed by enforceable commitments.</p></div>
          <div className="cmp-cert cmp-reveal" style={{ transitionDelay: '.1s' }}><div className="cmp-certtop"><span className="cmp-certic"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"></path><path d="M3 12h18"></path><path d="M3 18h18"></path><circle cx="8" cy="6" r="1.6" fill="currentColor"></circle><circle cx="16" cy="12" r="1.6" fill="currentColor"></circle><circle cx="10" cy="18" r="1.6" fill="currentColor"></circle></svg></span><div><h3 className="cmp-certname">EEOC-defensible</h3><div className="cmp-certtag"><span className="cmp-dotg"></span>Validated</div></div></div><p className="cmp-body">Assessments are validated to measure job-relevant skills and reduce adverse impact — giving your hiring decisions a defensible, audit-ready basis.</p></div>
        </div>
      </div></section>

      <SecuritySection eyebrow="Certified &amp; recognized" heading="The standards your legal team asks for" sub="Every badge below is backed by an independent audit or a formal compliance program — verifiable on request." />

      <section className="cmp-sec" style={{ background: '#FBF3EE' }}><div className="cmp-wrap">
        <div style={{ maxWidth: '660px', margin: '0 auto 46px', textAlign: 'center' }}>
          <p className="cmp-eyebrow cmp-reveal">Regional &amp; regulatory<b>.</b></p>
          <h2 className="cmp-h2 cmp-reveal" style={{ transitionDelay: '.04s' }}>Built for global, defensible hiring</h2>
        </div>
        <div className="cmp-two" style={{ marginBottom: '24px' }}>
          <div className="cmp-panel cmp-reveal"><span className="cmp-panelic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M2 12h20"></path><path d="M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z"></path></svg></span><h3 className="cmp-certname" style={{ marginBottom: '10px' }}>Data privacy &amp; residency</h3><p className="cmp-body">Choose where candidate data lives with EU and US residency options. Signed DPAs, a transparent sub-processor list and configurable retention keep processing lawful across every region you hire in.</p></div>
          <div className="cmp-panel cmp-reveal" style={{ transitionDelay: '.06s' }}><span className="cmp-panelic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"></path><path d="M3 12h18"></path><path d="M3 18h18"></path><circle cx="8" cy="6" r="1.6" fill="currentColor"></circle><circle cx="16" cy="12" r="1.6" fill="currentColor"></circle><circle cx="10" cy="18" r="1.6" fill="currentColor"></circle></svg></span><h3 className="cmp-certname" style={{ marginBottom: '10px' }}>Fair, bias-audited assessments</h3><p className="cmp-body">Assessments are validated for job relevance and reviewed for adverse impact, aligning with EEOC guidance. Standardized scoring gives every candidate the same, defensible evaluation.</p></div>
        </div>
        <div className="cmp-panel cmp-reveal" style={{ transitionDelay: '.1s' }}>
          <h3 className="cmp-certname" style={{ marginBottom: '22px' }}>What we commit to</h3>
          <ul className="cmp-checklist">
            <li>{check}Signed Data Processing Agreements (DPA)</li>
            <li>{check}EU Standard Contractual Clauses</li>
            <li>{check}EU &amp; US data residency options</li>
            <li>{check}Candidate right-to-erasure workflows</li>
            <li>{check}Configurable data retention policies</li>
            <li>{check}Transparent sub-processor list</li>
            <li>{check}Immutable audit log of data access</li>
            <li>{check}Annual third-party penetration testing</li>
          </ul>
        </div>
      </div></section>

      <section className="cmp-sec" style={{ background: '#1A1014', color: '#fff', textAlign: 'center' }}><div className="cmp-wrap" style={{ maxWidth: '720px' }}>
        <p className="cmp-eyebrow cmp-reveal" style={{ color: '#C9B9BC' }}>Documentation<b>.</b></p>
        <h2 className="cmp-h2 cmp-reveal" style={{ color: '#fff', transitionDelay: '.04s' }}>Need our compliance reports?</h2>
        <p className="cmp-lead cmp-reveal" style={{ color: 'rgba(255,255,255,.78)', margin: '18px auto 4px', transitionDelay: '.08s' }}>Access our SOC 2 report, ISO certificate, penetration-test summary and signed DPA through the Testlify Trust Center.</p>
        <div className="cmp-btnrow cmp-reveal" style={{ transitionDelay: '.12s' }}>
          <CtaButton label="Visit Trust Center" href="/trust" variant="light" size="md" icon="arrow" />
          <CtaButton label="Contact security team" href="/contact" variant="outline-light" size="md" icon="none" />
        </div>
      </div></section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
