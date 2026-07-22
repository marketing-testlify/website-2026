'use client';

import { useState } from 'react';
import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaButton from '@/components/CtaButton';
import CtaBand from '@/components/CtaBand';

const css = `
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
.h3{font-size:22px;line-height:1.25;font-weight:700;letter-spacing:-.4px;margin:0;color:#1A1014;}
.lead{font-size:19px;line-height:1.6;color:#5A4B4E;font-weight:400;}
.body{font-size:16px;line-height:1.66;color:#5A4B4E;}
.btn{display:inline-flex;align-items:center;gap:9px;font-weight:600;font-size:15.5px;padding:14px 26px;border-radius:13px;transition:transform .25s ease, box-shadow .25s ease;cursor:pointer;border:none;}
.btn-primary{background:#F23F44;color:#fff;box-shadow:0 12px 26px rgba(242,63,68,.30);}
.btn-primary:hover{transform:translateY(-2px);box-shadow:0 16px 34px rgba(242,63,68,.40);}
.btn-ghost{background:#fff;color:#1A1014;border:1.5px solid #EADDDE;}
.btn-ghost:hover{transform:translateY(-2px);border-color:#F2B7B9;box-shadow:0 10px 24px rgba(110,11,14,.08);}
.reveal{opacity:0;transform:translateY(26px);transition:opacity .7s cubic-bezier(.2,.7,.2,1), transform .7s cubic-bezier(.2,.7,.2,1);}
.reveal.in{opacity:1;transform:none;}
.chero{padding:64px 28px 40px;background:radial-gradient(1100px 520px at 50% -10%,#FFF0EE 0%,rgba(255,240,238,0) 62%),#fff;text-align:center;}
.perks{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;}
.perk{background:#fff;border:1px solid #EFE2E3;border-radius:18px;padding:24px;transition:transform .22s ease, box-shadow .22s ease, border-color .22s;}
.perk:hover{transform:translateY(-3px);box-shadow:0 16px 34px rgba(110,11,14,.08);border-color:#F4D2D3;}
.perkic{width:44px;height:44px;border-radius:12px;background:#FFF0F0;color:#F23F44;display:flex;align-items:center;justify-content:center;margin-bottom:14px;}
.deptbar{display:flex;gap:10px;justify-content:center;flex-wrap:wrap;margin-bottom:32px;}
.dept{border:1px solid #EFE2E3;background:#fff;border-radius:999px;padding:9px 18px;font-size:13.5px;font-weight:600;color:#6A5A5D;cursor:pointer;transition:all .2s ease;font-family:inherit;}
.dept.on{background:#F23F44;color:#fff;border-color:#F23F44;}
.job{display:flex;align-items:center;justify-content:space-between;gap:20px;background:#fff;border:1px solid #EFE2E3;border-radius:16px;padding:22px 26px;margin-bottom:12px;transition:transform .2s ease, box-shadow .2s ease, border-color .2s;}
.job:hover{transform:translateY(-2px);box-shadow:0 16px 34px rgba(110,11,14,.08);border-color:#F4D2D3;}
.jobtitle{font-size:17px;font-weight:700;margin:0 0 5px;}
.jobmeta{font-size:13px;color:#9A878A;display:flex;gap:8px;flex-wrap:wrap;align-items:center;}
.jobtag{background:#FBF3EE;color:#8A4A2A;font-size:11px;font-weight:700;padding:3px 9px;border-radius:999px;}
.japply{flex:none;font-size:13.5px;font-weight:700;color:#F23F44;display:inline-flex;align-items:center;gap:6px;}
@media(max-width:920px){
  .h1{font-size:42px;letter-spacing:-1.4px;}
  .h2{font-size:32px;letter-spacing:-1px;}
  .sec{padding:72px 22px;}
  .perks{grid-template-columns:1fr 1fr;}
  .job{flex-direction:column;align-items:flex-start;gap:12px;}
}

h1,h2,h3,h4,.h1,.h2,.h3,.hero h1,.eyebrow{text-wrap:balance;}p,li,.body,.lead,.sub,figcaption,blockquote{text-wrap:pretty;}/*om-balance-rule*/
`;

const JOBS = [
  { title: 'Senior Frontend Engineer', dept: 'Engineering', group: 'eng', loc: 'Remote (global)', type: 'Full-time' },
  { title: 'Backend Engineer, Platform', dept: 'Engineering', group: 'eng', loc: 'Remote (EU)', type: 'Full-time' },
  { title: 'Machine Learning Engineer', dept: 'Engineering', group: 'eng', loc: 'Remote (global)', type: 'Full-time' },
  { title: 'Senior Product Designer', dept: 'Product & Design', group: 'prod', loc: 'Remote (global)', type: 'Full-time' },
  { title: 'Product Manager, Assessments', dept: 'Product & Design', group: 'prod', loc: 'Remote (US)', type: 'Full-time' },
  { title: 'Account Executive, Mid-Market', dept: 'Go-to-market', group: 'gtm', loc: 'Remote (US)', type: 'Full-time' },
  { title: 'Customer Success Manager', dept: 'Go-to-market', group: 'gtm', loc: 'Remote (EU)', type: 'Full-time' },
  { title: 'Content Marketing Lead', dept: 'Go-to-market', group: 'gtm', loc: 'Remote (global)', type: 'Full-time' },
];

export default function CareersPage() {
  const [dept, setDept] = useState('all');
  const jobs = dept === 'all' ? JOBS : JOBS.filter((x) => x.group === dept);
  const cls = (k: string) => (dept === k ? 'on' : '');

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <SiteHeader announcement="Remote-first · 4-day onboarding · Real ownership" announcementCta="Why Testlify" />

      <section className="chero"><div className="wrap" style={{ maxWidth: 840 }}>
        <p className="eyebrow reveal">Careers<b>.</b></p>
        <h1 className="h1 reveal" style={{ transitionDelay: '.04s' }}>Do the best work<br />of your career</h1>
        <p className="lead reveal" style={{ margin: '22px auto 0', maxWidth: 600, transitionDelay: '.08s' }}>We&apos;re a remote-first team building the platform that makes hiring fair for everyone. Big problems, real ownership, and people who care.</p>
        <div className="reveal" style={{ marginTop: 30, transitionDelay: '.12s' }}><CtaButton label="See open roles" href="#openings" variant="primary" size="md" icon="arrow" magnetic /></div>
      </div></section>

      <section className="sec"><div className="wrap">
        <div style={{ maxWidth: 640, margin: '0 auto 44px', textAlign: 'center' }}>
          <p className="eyebrow reveal">Life at Testlify<b>.</b></p>
          <h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>Perks that actually matter</h2>
        </div>
        <div className="perks">
          <div className="perk reveal"><span className="perkic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M2 12h20"></path></svg></span><h3 className="h3" style={{ fontSize: '16.5px', marginBottom: 6 }}>Remote-first</h3><p className="body" style={{ fontSize: '13.5px' }}>Work from anywhere. We&apos;re built for distributed teams from the ground up.</p></div>
          <div className="perk reveal" style={{ transitionDelay: '.05s' }}><span className="perkic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg></span><h3 className="h3" style={{ fontSize: '16.5px', marginBottom: 6 }}>Real equity</h3><p className="body" style={{ fontSize: '13.5px' }}>Meaningful ownership for everyone. When Testlify wins, you win.</p></div>
          <div className="perk reveal" style={{ transitionDelay: '.1s' }}><span className="perkic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg></span><h3 className="h3" style={{ fontSize: '16.5px', marginBottom: 6 }}>Flexible time off</h3><p className="body" style={{ fontSize: '13.5px' }}>Unlimited PTO with a 3-week minimum — because rest isn&apos;t optional.</p></div>
          <div className="perk reveal" style={{ transitionDelay: '.15s' }}><span className="perkic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l1.6 5.4L19 9l-5.4 1.6L12 16l-1.6-5.4L5 9l5.4-1.6z"></path></svg></span><h3 className="h3" style={{ fontSize: '16.5px', marginBottom: 6 }}>Growth budget</h3><p className="body" style={{ fontSize: '13.5px' }}>An annual learning stipend and real time to use it.</p></div>
        </div>
      </div></section>

      <section className="sec" id="openings" style={{ background: '#FBF3EE' }}><div className="wrap" style={{ maxWidth: 900 }}>
        <div style={{ margin: '0 auto 40px', textAlign: 'center' }}>
          <p className="eyebrow reveal">Open roles<b>.</b></p>
          <h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>Find your seat</h2>
        </div>
        <div className="deptbar reveal">
          <button className={`dept ${cls('all')}`} onClick={() => setDept('all')}>All</button>
          <button className={`dept ${cls('eng')}`} onClick={() => setDept('eng')}>Engineering</button>
          <button className={`dept ${cls('prod')}`} onClick={() => setDept('prod')}>Product &amp; Design</button>
          <button className={`dept ${cls('gtm')}`} onClick={() => setDept('gtm')}>Go-to-market</button>
        </div>
        <div className="reveal">
          {jobs.map((j, i) => (
            <div className="job" key={i}><div><p className="jobtitle">{j.title}</p><div className="jobmeta"><span className="jobtag">{j.dept}</span><span>{j.loc}</span><span>·</span><span>{j.type}</span></div></div><span className="japply">Apply →</span></div>
          ))}
        </div>
        <p className="reveal" style={{ textAlign: 'center', color: '#A9999C', fontSize: 14, marginTop: 24 }}>Don&apos;t see your role? <a href="#" style={{ color: '#F23F44', fontWeight: 700 }}>Send us an open application →</a></p>
      </div></section>

      <section className="sec" style={{ background: '#1A1014', color: '#fff', textAlign: 'center' }}><div className="wrap" style={{ maxWidth: 720 }}>
        <h2 className="h2 reveal" style={{ color: '#fff' }}>We hire the way we build</h2>
        <p className="lead reveal" style={{ color: 'rgba(255,255,255,.78)', margin: '18px auto 30px', transitionDelay: '.04s' }}>Skills-first, structured and fair — you&apos;ll experience our own product as a candidate.</p>
        <div className="reveal" style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', transitionDelay: '.08s' }}>
          <CtaButton label="Browse roles" href="#openings" variant="light" size="md" icon="arrow" />
          <CtaButton label="About Testlify" href="/about" variant="outline-light" size="md" icon="none" />
        </div>
      </div></section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
