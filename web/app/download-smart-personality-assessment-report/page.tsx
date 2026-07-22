'use client';

import { useState } from 'react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaBand from '@/components/CtaBand';

const css = `
.dlcard{background:#fff;border:1px solid #F0E2E3;border-radius:22px;padding:40px;box-shadow:0 20px 44px rgba(110,11,14,.08);}
.dlfield{margin-bottom:18px;}
.dlfield label{display:block;font-size:13.5px;font-weight:700;color:#1A1014;margin-bottom:8px;}
.dlinput{width:100%;height:50px;border:1.5px solid #EADDDE;border-radius:12px;padding:0 16px;font-family:inherit;font-size:15px;font-weight:500;color:#1A1014;background:#FCFAFA;}
.dlinput:focus{outline:none;border-color:#F23F44;box-shadow:0 0 0 4px rgba(242,63,68,.12);background:#fff;}
.dlbtn{width:100%;height:52px;border:none;border-radius:13px;background:#F23F44;color:#fff;font-family:inherit;font-weight:700;font-size:15.5px;cursor:pointer;box-shadow:0 12px 26px rgba(242,63,68,.30);transition:transform .25s,box-shadow .25s;}
.dlbtn:hover{transform:translateY(-2px);box-shadow:0 16px 34px rgba(242,63,68,.40);}
.dlok{background:#FFF0EF;border:1px solid #FCE0DE;border-radius:14px;padding:18px 20px;color:#A91E23;font-weight:600;font-size:14.5px;}
`;

export default function Page() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [sent, setSent] = useState(false);

  const onSubmit = () => {
    if (email && email.indexOf('@') > 0) setSent(true);
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <SiteHeader announcement="Download a sample personality report" announcementCta="Try for free" />

      <section className="phero"><div className="wrap" style={{ maxWidth: '860px' }}>
        <p className="eyebrow reveal">Download the report<b>.</b></p>
        <h1 className="h1 reveal" style={{ transitionDelay: '.04s' }}>Get the sample report</h1>
        <p className="lead reveal" style={{ margin: '22px auto 0', maxWidth: '620px', transitionDelay: '.08s' }}>See exactly what a completed Smart Personality Assessment report looks like. Tell us where to send it.</p>
      </div></section>

      <section className="sec" style={{ paddingTop: '20px' }}><div className="wrap" style={{ maxWidth: '520px' }}>
        <div className="dlcard reveal">
          {sent ? (
            <div className="dlok">Thanks! Your sample report is on its way to your inbox.</div>
          ) : (
            <>
              <div className="dlfield"><label>Full name</label><input className="dlinput" type="text" value={name} onInput={(e) => setName((e.target as HTMLInputElement).value)} /></div>
              <div className="dlfield"><label>Work email</label><input className="dlinput" type="email" value={email} onInput={(e) => setEmail((e.target as HTMLInputElement).value)} /></div>
              <div className="dlfield" style={{ marginBottom: '22px' }}><label>Company</label><input className="dlinput" type="text" value={company} onInput={(e) => setCompany((e.target as HTMLInputElement).value)} /></div>
              <button className="dlbtn" onClick={onSubmit}>Send me the report</button>
            </>
          )}
        </div>
      </div></section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
