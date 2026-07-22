'use client';

import { useState } from 'react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaButton from '@/components/CtaButton';
import FAQ from '@/components/FAQ';
import CtaBand from '@/components/CtaBand';

const CSS = `
*{box-sizing:border-box;}
html{scroll-behavior:smooth;}
body{margin:0;font-family:'Poppins',sans-serif;-webkit-font-smoothing:antialiased;color:#1A1014;background:#fff;}
a{text-decoration:none;color:inherit;}
::selection{background:#F23F44;color:#fff;}
.wrap{max-width:1240px;margin:0 auto;padding:0 28px;}
.sec{padding:80px 28px;}
.eyebrow{font-size:12.5px;font-weight:600;letter-spacing:.16em;text-transform:uppercase;color:#8A7A7D;margin:0 0 16px;}
.eyebrow b{color:#F23F44;font-weight:600;}
.h1{font-size:52px;line-height:1.06;font-weight:800;letter-spacing:-1.8px;margin:0;color:#1A1014;}
.h2{font-size:34px;line-height:1.12;font-weight:800;letter-spacing:-1.1px;margin:0;color:#1A1014;}
.h3{font-size:20px;line-height:1.25;font-weight:700;letter-spacing:-.4px;margin:0;color:#1A1014;}
.lead{font-size:19px;line-height:1.6;color:#5A4B4E;font-weight:400;}
.body{font-size:16px;line-height:1.66;color:#5A4B4E;}
.acc{color:#F23F44;}
.reveal{opacity:0;transform:translateY(28px);}
.hero{padding:72px 28px 20px;background:radial-gradient(1000px 480px at 22% 0%,#FFF0EE 0%,rgba(255,240,238,0) 62%),#fff;}
.contactgrid{display:grid;grid-template-columns:1.05fr 1fr;gap:56px;align-items:start;}
/* form */
.form{background:#fff;border:1px solid #F0E2E3;border-radius:22px;padding:34px;box-shadow:0 30px 70px rgba(110,11,14,.10);}
.frow{display:grid;grid-template-columns:1fr 1fr;gap:14px;}
.field{margin-bottom:16px;}
.field label{display:block;font-size:13px;font-weight:600;color:#2A1A1D;margin-bottom:7px;}
.field input,.field select,.field textarea{width:100%;font-family:inherit;font-size:15px;color:#1A1014;padding:13px 15px;border:1.5px solid #EEDFE0;border-radius:12px;background:#FEFCFB;transition:border-color .2s,box-shadow .2s;}
.field input:focus,.field select:focus,.field textarea:focus{outline:none;border-color:#F23F44;box-shadow:0 0 0 4px rgba(242,63,68,.12);}
.field textarea{resize:vertical;min-height:110px;}
.submit{width:100%;border:0;font-family:inherit;cursor:pointer;background:#F23F44;color:#fff;font-weight:700;font-size:16px;padding:15px;border-radius:13px;box-shadow:0 12px 26px rgba(242,63,68,.3);transition:transform .2s ease;}
.submit:hover{transform:translateY(-2px);}
.formnote{font-size:12.5px;color:#A9999C;text-align:center;margin-top:14px;}
.ok{background:#EAF8F0;border:1px solid #BFE8D2;color:#1B7F4B;border-radius:14px;padding:22px;font-size:15px;font-weight:600;text-align:center;}
/* channels */
.chan{display:flex;gap:16px;align-items:flex-start;padding:20px;border:1px solid #F2E6E7;border-radius:16px;margin-bottom:14px;transition:transform .28s ease,border-color .28s,box-shadow .28s;}
.chan:hover{transform:translateY(-3px);border-color:#FBD0D1;box-shadow:0 14px 30px rgba(110,11,14,.09);}
.chanic{flex:none;width:46px;height:46px;border-radius:13px;background:#FFF0F0;color:#F23F44;display:flex;align-items:center;justify-content:center;}
.demo-card{background:#1A1014;color:#F1E7E8;border-radius:22px;padding:34px;}
.demo-card .h3{color:#fff;}
.dchk{display:flex;gap:11px;align-items:flex-start;margin-top:14px;}
.dchk svg{flex:none;color:#FF7A52;margin-top:2px;}
.addr{display:flex;gap:14px;align-items:flex-start;font-size:14.5px;color:#5A4B4E;line-height:1.6;}
@media(max-width:960px){.contactgrid{grid-template-columns:1fr;gap:40px;}.frow{grid-template-columns:1fr;}.h1{font-size:38px;letter-spacing:-1.2px;}.h2{font-size:27px;}.sec{padding:56px 22px;}.hero{padding:44px 22px 10px;}}

h1,h2,h3,h4,.h1,.h2,.h3,.hero h1,.eyebrow{text-wrap:balance;}p,li,.body,.lead,.sub,figcaption,blockquote{text-wrap:pretty;}/*om-balance-rule*/
`;

const faqItems = [
  { q: 'How quickly will I hear back?', a: 'Our team typically responds within one business day. For urgent questions, chat support is the fastest way to reach us.' },
  { q: 'Can I get a demo tailored to my roles?', a: "Yes — book a 30-minute demo and a product specialist will walk you through Testlify on the exact roles you're hiring for." },
  { q: 'Do I need a credit card to start?', a: 'No. Every plan starts with a 7-day free trial and no credit card is required during the trial period.' },
  { q: 'Can Testlify integrate with our ATS?', a: 'Yes — Testlify offers native two-way sync with 100+ ATS platforms including Greenhouse, Lever and Workday, plus a full API.' },
  { q: 'Can I customise assessments to our needs?', a: 'Testlify is fully customisable — tailor assessments, add custom questions, and white-label the candidate experience to match your brand.' },
];

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <SiteHeader announcement="Get a personalised walkthrough — see Testlify on your own roles." announcementCta="Book a demo" />

      <section className="hero"><div className="wrap">
        <div style={{ maxWidth: '720px' }}>
          <p className="eyebrow reveal">Contact us<b>.</b></p>
          <h1 className="h1 reveal" style={{ transitionDelay: '.04s' }}>Let&apos;s talk about<br />how you <span className="acc">hire.</span></h1>
          <p className="lead reveal" style={{ marginTop: '20px', maxWidth: '560px', transitionDelay: '.08s' }}>Whether you have a question, want a hands-on demo, or need help choosing a plan — our team is a message away. No bots, no cold replies.</p>
        </div>
      </div></section>

      <section className="sec" style={{ paddingTop: '44px' }}><div className="wrap"><div className="contactgrid">
        <div className="reveal">
          {sent ? (
            <div className="ok">Thanks — your message is on its way. Our team will get back to you within one business day.</div>
          ) : (
            <form className="form" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
              <div className="frow">
                <div className="field"><label>First name</label><input type="text" required placeholder="Jane" /></div>
                <div className="field"><label>Last name</label><input type="text" required placeholder="Doe" /></div>
              </div>
              <div className="frow">
                <div className="field"><label>Work email</label><input type="email" required placeholder="jane@company.com" /></div>
                <div className="field"><label>Company</label><input type="text" placeholder="Company Inc." /></div>
              </div>
              <div className="frow">
                <div className="field"><label>Company size</label><select><option>1–50</option><option>51–200</option><option>201–1,000</option><option>1,000+</option></select></div>
                <div className="field"><label>I&apos;m interested in</label><select><option>A product demo</option><option>Pricing &amp; plans</option><option>Enterprise &amp; security</option><option>Support</option><option>Partnerships</option></select></div>
              </div>
              <div className="field"><label>How can we help?</label><textarea placeholder="Tell us a little about your hiring and what you'd like to see…"></textarea></div>
              <button type="submit" className="submit">Send message</button>
              <p className="formnote">By submitting, you agree to receive email updates from Testlify. You can opt out anytime.</p>
            </form>
          )}
        </div>

        <div className="reveal" style={{ transitionDelay: '.08s' }}>
          <div className="demo-card">
            <p className="eyebrow" style={{ color: '#C9A9AB' }}>Prefer a live walkthrough<b style={{ color: '#FF7A52' }}>.</b></p>
            <h3 className="h3">Book a 30-minute demo</h3>
            <p className="body" style={{ color: '#C2B1B4', margin: '10px 0 0' }}>See Testlify on your own roles and get your questions answered by a product specialist.</p>
            <div className="dchk"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg><span className="body" style={{ color: '#E7DADD', margin: 0 }}>A walkthrough tailored to your hiring</span></div>
            <div className="dchk"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg><span className="body" style={{ color: '#E7DADD', margin: 0 }}>Improve shortlist quality and speed</span></div>
            <div className="dchk"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg><span className="body" style={{ color: '#E7DADD', margin: 0 }}>No credit card · used by 1,500+ teams</span></div>
            <div style={{ marginTop: '22px' }}><CtaButton label="Book a demo" href="#" variant="light" size="md" icon="arrow" /></div>
          </div>

          <div style={{ marginTop: '22px' }}>
            <a className="chan" href="#"><span className="chanic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg></span><span><span className="h3" style={{ fontSize: '16px' }}>Chat support</span><span className="body" style={{ display: 'block', fontSize: '13.5px', marginTop: '3px' }}>Quick questions answered in real time.</span></span></a>
            <a className="chan" href="mailto:hello@testlify.com"><span className="chanic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22 6 12 13 2 6"></polyline></svg></span><span><span className="h3" style={{ fontSize: '16px' }}>Email us</span><span className="body" style={{ display: 'block', fontSize: '13.5px', marginTop: '3px' }}>hello@testlify.com · sales@testlify.com</span></span></a>
            <a className="chan" href="tel:+18447558378"><span className="chanic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"></path></svg></span><span><span className="h3" style={{ fontSize: '16px' }}>Call us</span><span className="body" style={{ display: 'block', fontSize: '13.5px', marginTop: '3px' }}>+1 (844) 755 8378</span></span></a>
            <div className="addr" style={{ padding: '20px' }}><span className="chanic" style={{ background: '#FFF0F0' }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F23F44" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg></span><span><span className="h3" style={{ fontSize: '16px' }}>Visit us</span><span style={{ display: 'block', marginTop: '3px' }}>Testlify, Inc.<br />2823 Oakley Ave, Bensalem, PA 19020<br />United States</span></span></div>
          </div>
        </div>
      </div></div></section>

      <section className="sec" style={{ background: '#FBF3EE' }}><div className="wrap" style={{ maxWidth: '840px' }}>
        <div style={{ textAlign: 'center', marginBottom: '44px' }}>
          <p className="eyebrow reveal" style={{ justifyContent: 'center' }}>FAQ<b>.</b></p>
          <h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>Common questions</h2>
        </div>
        <div className="reveal">
          <FAQ items={faqItems} />
        </div>
      </div></section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
