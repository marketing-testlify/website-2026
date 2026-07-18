'use client';

import { useState } from 'react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaBand from '@/components/CtaBand';

const css = `
.rfpcard{background:#fff;border:1px solid #F0E2E3;border-radius:22px;padding:36px;box-shadow:0 20px 44px rgba(110,11,14,.08);}
.rfpf{margin-bottom:18px;}
.rfpf label{display:block;font-size:13.5px;font-weight:700;color:#1A1014;margin-bottom:8px;}
.rfpin{width:100%;border:1.5px solid #EADDDE;border-radius:12px;padding:13px 16px;font-family:inherit;font-size:15px;font-weight:500;color:#1A1014;background:#FCFAFA;}
.rfpin:focus{outline:none;border-color:#F23F44;box-shadow:0 0 0 4px rgba(242,63,68,.12);background:#fff;}
textarea.rfpin{min-height:120px;resize:vertical;}
.rfpbtn{width:100%;height:54px;border:none;border-radius:13px;background:#F23F44;color:#fff;font-family:inherit;font-weight:700;font-size:15.5px;cursor:pointer;box-shadow:0 12px 26px rgba(242,63,68,.30);transition:transform .25s,box-shadow .25s;}
.rfpbtn:hover{transform:translateY(-2px);box-shadow:0 16px 34px rgba(242,63,68,.40);}
.rfpok{background:#E9F7EF;border:1px solid #C7E9D5;border-radius:14px;padding:22px 24px;color:#1F8A5B;font-weight:600;font-size:15px;}
.rfp2{display:grid;grid-template-columns:1fr 1fr;gap:16px;}
@media(max-width:640px){.rfp2{grid-template-columns:1fr;}}
`;

export default function SubmitRfpPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [volume, setVolume] = useState('');
  const [details, setDetails] = useState('');
  const [sent, setSent] = useState(false);

  const onSubmit = () => {
    if (email && email.indexOf('@') > 0 && company) setSent(true);
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <SiteHeader
        announcement="Submit an RFP for enterprise assessment"
        announcementCta="Talk to sales"
        homeHref="/"
      />

      <section className="phero">
        <div className="wrap" style={{ maxWidth: '820px' }}>
          <p className="eyebrow reveal">Submit an RFP<b>.</b></p>
          <h1 className="h1 reveal" style={{ transitionDelay: '.04s' }}>
            Let&apos;s respond to<br />your RFP
          </h1>
          <p className="lead reveal" style={{ margin: '22px auto 0', maxWidth: '600px', transitionDelay: '.08s' }}>
            Evaluating skills assessment, AI interviews and proctoring for your organisation? Send us your requirements and our team will respond promptly with a tailored proposal.
          </p>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: '20px' }}>
        <div className="wrap" style={{ maxWidth: '680px' }}>
          <div className="rfpcard reveal">
            {sent ? (
              <div className="rfpok">Thank you — we&apos;ve received your RFP. Our team will be in touch within two business days.</div>
            ) : (
              <>
                <div className="rfp2">
                  <div className="rfpf">
                    <label>Full name</label>
                    <input className="rfpin" type="text" value={name} onInput={(e) => setName((e.target as HTMLInputElement).value)} onChange={(e) => setName(e.target.value)} />
                  </div>
                  <div className="rfpf">
                    <label>Work email</label>
                    <input className="rfpin" type="email" value={email} onInput={(e) => setEmail((e.target as HTMLInputElement).value)} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                </div>
                <div className="rfp2">
                  <div className="rfpf">
                    <label>Company</label>
                    <input className="rfpin" type="text" value={company} onInput={(e) => setCompany((e.target as HTMLInputElement).value)} onChange={(e) => setCompany(e.target.value)} />
                  </div>
                  <div className="rfpf">
                    <label>Number of hires / year</label>
                    <input className="rfpin" type="text" value={volume} onInput={(e) => setVolume((e.target as HTMLInputElement).value)} onChange={(e) => setVolume(e.target.value)} />
                  </div>
                </div>
                <div className="rfpf">
                  <label>What are you looking to evaluate?</label>
                  <textarea
                    className="rfpin"
                    value={details}
                    onInput={(e) => setDetails((e.target as HTMLTextAreaElement).value)}
                    onChange={(e) => setDetails(e.target.value)}
                    placeholder="Skills assessment, AI interviews, proctoring, integrations, timelines, compliance needs…"
                  />
                </div>
                <button className="rfpbtn" onClick={onSubmit}>Submit RFP</button>
              </>
            )}
          </div>
        </div>
      </section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
