'use client';

import { useState } from 'react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaButton from '@/components/CtaButton';
import CtaBand from '@/components/CtaBand';
import FAQ from '@/components/FAQ';
import SecuritySection from '@/components/SecuritySection';
import Testimonials from '@/components/Testimonials';
import Recognition from '@/components/Recognition';

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
.hero{position:relative;overflow:hidden;padding:96px 28px 60px;background:radial-gradient(1100px 560px at 50% -12%,#FFE9E7 0%,rgba(255,240,238,0) 60%),#fff;text-align:center;}
.hero-in{position:relative;z-index:2;max-width:760px;margin:0 auto;}
.hblob{position:absolute;border-radius:50%;filter:blur(46px);opacity:.55;z-index:0;pointer-events:none;}
.hblob.b1{width:380px;height:380px;background:radial-gradient(circle,#FF7A52,rgba(255,122,82,0));top:-120px;left:-80px;animation:hblur 9s ease-in-out infinite;}
.hblob.b2{width:340px;height:340px;background:radial-gradient(circle,#F23F44,rgba(242,63,68,0));top:-10px;right:-90px;animation:hblur 12s ease-in-out infinite 1s;}
@keyframes hblur{0%,100%{filter:blur(40px);opacity:.42;transform:scale(1);}50%{filter:blur(84px);opacity:.7;transform:scale(1.16);}}
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
.chan{display:flex;gap:14px;align-items:flex-start;padding:8px 6px;border:0;border-radius:14px;margin-bottom:2px;}
.chan-chat{transition:transform .25s ease,background-color .25s ease;}
.chan-chat:hover{background:#FFF6F5;transform:translateX(4px);}
.chanic{flex:none;width:40px;height:40px;border-radius:11px;background:#FFF0F0;color:#F23F44;display:flex;align-items:center;justify-content:center;}
.demo-card{background:#1A1014;color:#F1E7E8;border-radius:22px;padding:26px 30px;}
.demo-card .h3{color:#fff;}
.dchk{display:flex;gap:11px;align-items:flex-start;margin-top:14px;}
.dchk svg{flex:none;color:#FF7A52;margin-top:2px;}
.addr{display:flex;gap:14px;align-items:flex-start;font-size:14.5px;color:#5A4B4E;line-height:1.6;}
/* contact feature rows */
.csplit{display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:center;}
.csplit.rev .csimg{order:2;}
.csimgs{display:grid;grid-template-columns:1fr 1fr;gap:14px;}
.csimgs img{width:100%;height:220px;object-fit:cover;border-radius:18px;box-shadow:0 24px 50px rgba(110,11,14,.12);}
.csimgs img:nth-child(2){margin-top:28px;}
.support3{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;}
.support3 .valcard{background:#fff;border:1px solid #EFE2E3;border-radius:18px;padding:26px 24px;}
.valic{width:46px;height:46px;border-radius:13px;background:#FFF0F0;color:#F23F44;display:flex;align-items:center;justify-content:center;margin-bottom:16px;}
.vald{font-size:14px;line-height:1.55;color:#6C5A5D;margin:0;}
.slackrow{position:relative;overflow:hidden;background:#1A1014;border-radius:0;padding:88px 28px;text-align:center;box-shadow:0 30px 60px rgba(110,11,14,.24);width:100vw;margin-left:calc(50% - 50vw);}
.slackrow-bg{position:absolute;top:50%;right:-40px;transform:translateY(-50%);width:460px;height:460px;pointer-events:none;opacity:.9;}
.slackrow-in{position:relative;z-index:1;max-width:640px;margin:0 auto;}
.slackrow .h2{color:#fff;}
.slackrow p{color:#C9B9BC;font-size:17px;line-height:1.6;margin:16px auto 0;}
.slackrow .eyebrow{color:#F76A6E;justify-content:center;}
.slackrow .eyebrow b{color:#F23F44;}
@media(max-width:920px){.slackrow{padding:44px 28px;}}
.intg-tile{display:flex;align-items:center;justify-content:center;height:88px;background:#fff;border:1px solid #F2E6E7;border-radius:16px;padding:16px 20px;transition:transform .28s ease, box-shadow .28s ease, border-color .28s ease;}
.intg-tile:hover{transform:translateY(-4px);border-color:#FBD0D1;box-shadow:0 16px 34px rgba(110,11,14,.10);}
.intg-tile img{max-width:100%;max-height:40px;object-fit:contain;}
@media(max-width:960px){.csplit{grid-template-columns:1fr;gap:28px;}.csplit.rev .csimg{order:0;}.support3{grid-template-columns:1fr;}.intg-grid{grid-template-columns:repeat(3,1fr) !important;}}
@media(max-width:960px){.contactgrid{grid-template-columns:1fr;gap:40px;}.frow{grid-template-columns:1fr;}.h1{font-size:38px;letter-spacing:-1.2px;}.h2{font-size:27px;}.sec{padding:56px 22px;}.hero{padding:44px 22px 10px;}}

h1,h2,h3,h4,.h1,.h2,.h3,.hero h1,.eyebrow{text-wrap:balance;}p,li,.body,.lead,.sub,figcaption,blockquote{text-wrap:pretty;}/*om-balance-rule*/
`;

const faqItems = [
  { q: 'How can I schedule a product demo with Testlify?', a: 'Go to the demo page and watch the demo video. Still curious to get a hands-on experience? Sign up for a free trial.' },
  { q: 'Can I customize assessments to match our specific hiring needs?', a: "Testlify is designed to be flexible and customisable. We offer a range of assessment customization options, allowing you to tailor assessments to your organization's unique hiring needs." },
  { q: "What makes Testlify's user interface user-friendly?", a: "Testlify prides itself on its intuitive and user-friendly interface. We've invested in user experience design to ensure that our platform is easy to navigate and understand." },
  { q: "How do Testlify's features help in assessing candidates and customising assessments?", a: 'Our features are specifically designed to streamline talent assessment and development. Testlify offers a range of pre-made tests plus, you can also customize the tests and create your own unique assessments.' },
  { q: 'Can I integrate Testlify with other HR or recruitment tools we currently use?', a: 'Yes, Testlify is designed with integrations in mind. We offer integrations with a variety of popular Applicant Tracking Systems (ATS).' },
  { q: 'Does Testlify offer ongoing product updates and enhancements?', a: 'We are committed to continuous improvement. We regularly release updates and enhancements to our platform to keep it up-to-date with the latest industry trends and technological advancements.' },
];

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      <SiteHeader
        announcement="Get a personalised walkthrough — see Testlify on your own roles."
        announcementCta="Book a demo"
      />

      <section className="hero">
        <div className="hblob b1"></div><div className="hblob b2"></div>
        <div className="hero-in">
          <p className="eyebrow reveal" style={{ justifyContent: 'center' }}>Contact us<b>.</b></p>
          <h1 className="h1 reveal" style={{ marginTop: '14px', transitionDelay: '.04s' }}>Let&apos;s talk about how you <span className="acc">hire.</span></h1>
          <p className="lead reveal" style={{ margin: '20px auto 0', maxWidth: '560px', transitionDelay: '.08s' }}>Whether you have a question, want a hands-on demo, or need help choosing a plan — our team is a message away. No bots, no cold replies.</p>
        </div>
      </section>

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
                <div className="field"><label>Phone number</label><div style={{ display: 'flex', gap: '8px' }}>
                  <select style={{ flex: 'none', width: '92px' }}><option>+1</option><option>+44</option><option>+91</option><option>+61</option><option>+49</option><option>+33</option><option>+81</option><option>+971</option></select>
                  <input type="tel" placeholder="(555) 123-4567" style={{ flex: 1 }} />
                </div></div>
              </div>
              <div className="field"><label>I&apos;m interested in</label><select><option>A product demo</option><option>Pricing &amp; plans</option><option>Enterprise &amp; security</option><option>Support</option><option>Partnerships</option></select></div>
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
            <div className="dchk" style={{ marginTop: '10px' }}><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg><span className="body" style={{ color: '#E7DADD', margin: 0 }}>A walkthrough tailored to your hiring</span></div>
            <div className="dchk"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg><span className="body" style={{ color: '#E7DADD', margin: 0 }}>Improve shortlist quality and speed</span></div>
            <div className="dchk"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg><span className="body" style={{ color: '#E7DADD', margin: 0 }}>No credit card · used by 1,500+ teams</span></div>
            <div style={{ marginTop: '16px' }}><CtaButton label="Book a demo" href="#" variant="light" size="md" icon="arrow" /></div>
          </div>

          <div style={{ marginTop: '28px' }}>
            <a className="chan chan-chat" href="#" style={{ alignItems: 'center' }}><span className="chanic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg></span><span style={{ flex: 1 }}><span className="h3" style={{ fontSize: '16px', display: 'inline-flex', alignItems: 'center', gap: '7px' }}>Chat support<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#F23F44" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M8 7h9v9"></path></svg></span><span className="body" style={{ display: 'block', fontSize: '13.5px', marginTop: '3px' }}>Quick questions answered in real time.</span></span></a>
            <div className="chan"><span className="chanic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22 6 12 13 2 6"></polyline></svg></span><span><span className="h3" style={{ fontSize: '16px' }}>Email us</span><span className="body" style={{ display: 'block', fontSize: '13.5px', marginTop: '3px' }}>hello@testlify.com · sales@testlify.com</span></span></div>
            <div className="chan"><span className="chanic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"></path></svg></span><span><span className="h3" style={{ fontSize: '16px' }}>Call us</span><span className="body" style={{ display: 'block', fontSize: '13.5px', marginTop: '3px' }}>+1 (844) 755 8378</span></span></div>
            <div className="addr" style={{ padding: '8px 6px' }}><span className="chanic" style={{ background: '#FFF0F0' }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F23F44" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg></span><span><span className="h3" style={{ fontSize: '16px' }}>Visit us</span><span style={{ display: 'block', marginTop: '3px' }}>Testlify, Inc.<br />2823 Oakley Ave, Bensalem, PA 19020<br />United States</span></span></div>
          </div>
        </div>
      </div></div></section>

      <section className="sec" style={{ background: '#FBF3EE' }}><div className="wrap" style={{ maxWidth: '720px', textAlign: 'center' }}>
        <p className="eyebrow reveal" style={{ justifyContent: 'center' }}>Get in touch<b>.</b></p>
        <h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>We&apos;re just a message away</h2>
        <p className="lead reveal" style={{ marginTop: '16px', transitionDelay: '.08s' }}>Whether you have a question, need a hand, or simply want to explore how Testlify can help, we&apos;re always happy to chat.</p>
        <p className="body reveal" style={{ marginTop: '18px', transitionDelay: '.12s' }}>Support that feels human — no matter how you choose to reach out, we&apos;re here to make your experience seamless, helpful, and supportive, just like it should be.</p>
      </div></section>

      <section className="sec"><div className="wrap csplit reveal">
        <div className="csimgs csimg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://testlify.com/wp-content/uploads/2023/08/5-4-1024x799.webp" alt="Chat support" loading="lazy" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://testlify.com/wp-content/uploads/2023/09/Demystifying-data-driven-hiring-decisions.webp" alt="Chat support" loading="lazy" />
        </div>
        <div>
          <p className="eyebrow">Chat support<b>.</b></p>
          <h2 className="h2" style={{ marginTop: '14px' }}>Chat support for instant answers at your fingertips</h2>
          <p className="body" style={{ marginTop: '16px' }}>Got a quick question or need guidance in real time? Our chat support is always just a click away. Whether it&apos;s a simple query or a small hiccup, we&apos;re ready to respond with clarity and care, right when you need it.</p>
        </div>
      </div></section>

      <section className="sec" style={{ background: '#FBF3EE' }}><div className="wrap csplit rev reveal">
        <div className="csimgs csimg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://testlify.com/wp-content/uploads/2024/02/How-to-simplify-candidate-screening-with-salesforce-test-1024x761.png" alt="Email support" loading="lazy" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://testlify.com/wp-content/uploads/2023/03/online-test-main.png" alt="Email support" loading="lazy" />
        </div>
        <div>
          <p className="eyebrow">Email us<b>.</b></p>
          <h2 className="h2" style={{ marginTop: '14px' }}>Prefer to send emails?</h2>
          <p className="body" style={{ marginTop: '16px' }}>Some questions deserve more than a quick reply. If you&apos;re looking for detailed answers or have more complex inquiries, our email support team is here to help with thorough, thoughtful responses every time.</p>
          <div style={{ marginTop: '22px' }}><a href="mailto:support@testlify.com" style={{ color: '#F23F44', fontWeight: 700, fontSize: '15px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>Send us email <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"></path></svg></a></div>
        </div>
      </div></section>

      <section className="sec"><div className="wrap csplit reveal">
        <div className="csimgs csimg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://testlify.com/wp-content/uploads/2024/09/BambooHR-Logo-1-2048x1152-2.png" alt="Call support" loading="lazy" style={{ objectFit: 'contain', background: '#fff' }} />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://testlify.com/wp-content/uploads/2023/03/online-test-main.png" alt="Call support" loading="lazy" />
        </div>
        <div>
          <p className="eyebrow">Call us<b>.</b></p>
          <h2 className="h2" style={{ marginTop: '14px' }}>Call us for real conversations that matter</h2>
          <p className="body" style={{ marginTop: '16px' }}>Prefer to talk it through? Let&apos;s connect voice-to-voice. Whether you&apos;re exploring partnerships, have sales-related questions, or simply want better clarity, our most vetted customer executive will resolve your issues.</p>
          <div style={{ marginTop: '22px' }}><a href="tel:+18447558378" style={{ color: '#F23F44', fontWeight: 700, fontSize: '15px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>Call us <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"></path></svg></a></div>
        </div>
      </div></section>

      <section style={{ padding: 0 }}><div style={{ maxWidth: 'none' }}>
        <div className="slackrow reveal">
          <div className="slackrow-bg"><svg viewBox="0 0 480 480" width="100%" height="100%" fill="none"><g opacity=".55" stroke="#F23F44" strokeWidth="1.6"><path d="M150 150h140a24 24 0 0 1 24 24v70a24 24 0 0 1-24 24H210l-40 34v-34h-20a24 24 0 0 1-24-24v-70a24 24 0 0 1 24-24z"></path><path d="M230 230h130a22 22 0 0 1 22 22v58a22 22 0 0 1-22 22h-16v30l-36-30h-78a22 22 0 0 1-22-22v-58a22 22 0 0 1 22-22z"></path></g><g fill="#F23F44"><circle cx="185" cy="197" r="6"></circle><circle cx="222" cy="197" r="6"></circle><circle cx="259" cy="197" r="6"></circle><circle cx="270" cy="280" r="5"></circle><circle cx="300" cy="280" r="5"></circle><circle cx="330" cy="280" r="5"></circle></g></svg></div>
          <div className="slackrow-in">
            <p className="eyebrow">Community<b>.</b></p>
            <h2 className="h2" style={{ marginTop: '14px' }}>Join our Slack community</h2>
            <p>A space for HR leaders, recruiters, and Testlify users to share insights, stay up to date on features, and get support from real professionals who&apos;ve been in your shoes. Collaboration, learning, and support, all in one place.</p>
            <div style={{ marginTop: '26px' }}><CtaButton label="Join our Slack" href="https://testlifycommunity.slack.com/" variant="light" size="md" icon="arrow" /></div>
          </div>
        </div>
      </div></section>

      <section className="sec"><div className="wrap">
        <div style={{ maxWidth: '680px', margin: '0 auto 44px', textAlign: 'center' }}>
          <p className="eyebrow reveal" style={{ justifyContent: 'center' }}>Our promise<b>.</b></p>
          <h2 className="h2 reveal" style={{ marginTop: '14px', transitionDelay: '.04s' }}>Support that truly supports</h2>
          <p className="lead reveal" style={{ marginTop: '16px', transitionDelay: '.08s' }}>At Testlify, support isn&apos;t just a feature; it&apos;s part of our promise. From your first question to your hundredth hire (or more), we&apos;re here to make your journey smoother, smarter, and more successful.</p>
        </div>
        <div className="support3 reveal">
          <div className="valcard"><div className="valic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9z"></path></svg></div><p className="h3" style={{ fontSize: '17px' }}>Fast, reliable responses</p><p className="vald" style={{ marginTop: '8px' }}>We know hiring moves fast, and so do we. Whether it&apos;s a tech hiccup, a product query, or help setting up your next assessment, you won&apos;t be left waiting.</p></div>
          <div className="valcard"><div className="valic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="5"></circle><path d="M20 21a8 8 0 1 0-16 0"></path></svg></div><p className="h3" style={{ fontSize: '17px' }}>Real expertise, real solutions</p><p className="vald" style={{ marginTop: '8px' }}>Our team lives and breathes talent assessments. We&apos;ll guide you with insights that go beyond the surface, helping you make confident, data-driven hiring decisions.</p></div>
          <div className="valcard"><div className="valic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8z"></path></svg></div><p className="h3" style={{ fontSize: '17px' }}>Friendly, human support</p><p className="vald" style={{ marginTop: '8px' }}>We keep things simple, approachable, and helpful. No bots. No cold replies. Just real people who genuinely care about your success.</p></div>
        </div>
      </div></section>

      <section className="sec" style={{ background: '#FBF3EE' }}><div className="wrap">
        <div style={{ maxWidth: '680px', margin: '0 auto 40px', textAlign: 'center' }}>
          <p className="eyebrow reveal" style={{ justifyContent: 'center' }}>Integrations<b>.</b></p>
          <h2 className="h2 reveal" style={{ marginTop: '14px', transitionDelay: '.04s' }}>Testlify integrates seamlessly with 100+ ATS tools</h2>
          <p className="lead reveal" style={{ marginTop: '16px', transitionDelay: '.08s' }}>Streamline your hiring process from assessment to onboarding. Sync candidate data effortlessly, automate workflows, and gain deeper insights to make informed hiring decisions faster.</p>
        </div>
        <div className="intg-grid reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: '14px' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <div className="intg-tile"><img src="https://testlify.com/wp-content/uploads/2024/09/Workday_Inc.-Logo.wine_-1-2048x1365-2.png" alt="Workday" loading="lazy" /></div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <div className="intg-tile"><img src="https://testlify.com/wp-content/uploads/2023/03/629a0bbcb04c5ae587c411c2-1-1.png" alt="Greenhouse" loading="lazy" /></div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <div className="intg-tile"><img src="https://testlify.com/wp-content/uploads/2025/10/Lever_Employ_Logo_Horizontal_Turquoise_Black-300x43-1.png?wsr" alt="Lever" loading="lazy" /></div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <div className="intg-tile"><img src="https://testlify.com/wp-content/uploads/2025/10/SR-SAP-Logo.svg" alt="SmartRecruiters" loading="lazy" /></div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <div className="intg-tile"><img src="https://testlify.com/wp-content/uploads/2024/09/BambooHR-Logo-1-2048x1152-2.png" alt="BambooHR" loading="lazy" /></div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '26px' }}><a href="/integrations" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#F23F44', fontWeight: 600, fontSize: '16px' }}>View all ATS integrations<span>→</span></a></div>
      </div></section>

      <SecuritySection eyebrow="Security" heading="Built to keep your organization secure" sub="Ensure the security of your recruitment data with top-tier admin management, enhanced security integrations, stringent data governance, comprehensive compliance audits, and strong privacy protections." />
      <Testimonials eyebrow="Testimonials" heading="What our customers are saying about Testlify" />
      <Recognition bg="#FBF3EE" />

      <section className="sec"><div className="wrap" style={{ maxWidth: '840px' }}>
        <div style={{ textAlign: 'center', marginBottom: '44px' }}>
          <p className="eyebrow reveal" style={{ justifyContent: 'center' }}>FAQ<b>.</b></p>
          <h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>Frequently asked questions</h2>
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
