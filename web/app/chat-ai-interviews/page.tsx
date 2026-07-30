'use client';

import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaButton from '@/components/CtaButton';
import CtaBand from '@/components/CtaBand';
import FAQ from '@/components/FAQ';
import SecuritySection from '@/components/SecuritySection';
import Testimonials from '@/components/Testimonials';
import Recognition from '@/components/Recognition';

const CSS = `
.hero{padding:72px 28px 88px;background:radial-gradient(1100px 540px at 78% 6%,#FFF0EE 0%,rgba(255,240,238,0) 60%),#fff;position:relative;overflow:hidden;}
.herogrid{display:grid;grid-template-columns:1.02fr 1.1fr;gap:60px;align-items:center;}
.pill{display:inline-flex;align-items:center;gap:9px;background:#fff;border:1px solid #F4D9DA;border-radius:999px;padding:7px 15px 7px 8px;font-size:13px;font-weight:600;color:#A8323A;box-shadow:0 6px 16px rgba(110,11,14,.06);}
.pilltag{background:#F23F44;color:#fff;font-size:11px;font-weight:700;letter-spacing:.04em;padding:3px 9px;border-radius:999px;}
.heroctas{display:flex;align-items:center;gap:14px;flex-wrap:wrap;margin-top:30px;}
.trust{display:flex;align-items:center;gap:13px;flex-wrap:wrap;font-size:13.5px;color:#8A7A7D;font-weight:600;margin-top:26px;}
.mock{background:#fff;border:1px solid #F0E2E3;border-radius:20px;box-shadow:0 40px 90px rgba(110,11,14,.16);overflow:hidden;}
.mocktop{display:flex;align-items:center;gap:8px;padding:13px 16px;border-bottom:1px solid #F4ECEC;background:#FCFAFA;}
.mc{width:11px;height:11px;border-radius:50%;}
.mockbar{margin-left:12px;flex:1;height:26px;border-radius:8px;background:#F3EAEA;display:flex;align-items:center;padding:0 12px;font-size:11.5px;color:#A9999C;font-weight:500;}
.chatbody{padding:20px;display:flex;flex-direction:column;gap:12px;}
.chatrow{display:flex;gap:10px;align-items:flex-end;}
.chatrow.me{flex-direction:row-reverse;}
.chatav{width:30px;height:30px;border-radius:50%;flex:none;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:12px;color:#fff;background:linear-gradient(135deg,#6E62F2,#9A8BFF);}
.chatrow.me .chatav{background:linear-gradient(135deg,#F23F44,#FF7A52);}
.bubble{max-width:78%;padding:11px 15px;border-radius:16px;font-size:13.5px;line-height:1.5;background:#F3EAEA;color:#1A1014;}
.chatrow.me .bubble{background:#F23F44;color:#fff;border-bottom-right-radius:4px;}
.chatrow:not(.me) .bubble{border-bottom-left-radius:4px;}
.chatscore{margin:4px 20px 18px;display:flex;align-items:center;gap:8px;font-size:11.5px;font-weight:700;color:#1FA463;background:#E8F6EE;padding:8px 13px;border-radius:12px;width:fit-content;}
.matchtag{position:absolute;top:-38px;right:30px;background:#1A1014;color:#fff;font-size:12.5px;font-weight:600;padding:9px 15px;border-radius:12px;box-shadow:0 16px 34px rgba(26,16,20,.30);display:flex;align-items:center;gap:8px;}
.matchtag i{width:7px;height:7px;border-radius:50%;background:#3DDC84;display:inline-block;box-shadow:0 0 0 4px rgba(61,220,132,.2);}
.acc{color:#F23F44;}
.ss-sec{background:#FBF3EE!important;}
.intg-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:14px;}
.intg-tile{display:flex;align-items:center;justify-content:center;height:88px;background:#fff;border:1px solid #F2E6E7;border-radius:16px;padding:16px 20px;transition:transform .28s ease,box-shadow .28s ease,border-color .28s ease;}
.intg-tile:hover{transform:translateY(-4px);border-color:#FBD0D1;box-shadow:0 16px 34px rgba(110,11,14,.10);}
.intg-tile img{max-width:100%;max-height:40px;object-fit:contain;}
.casplit img{width:100%;border-radius:20px;box-shadow:0 20px 40px rgba(110,11,14,.10);display:block;}
@media(max-width:960px){.herogrid{grid-template-columns:1fr !important;gap:44px;}.hero{padding:44px 22px 60px;}.intg-grid{grid-template-columns:repeat(2,1fr);}}
`;

const faqItems = [
  { q: 'How customizable are the chat simulations?', a: 'Completely. You can adjust scenarios to include specific challenges or tasks relevant to the job role you are hiring for.' },
  { q: 'Can the AI evaluate technical skills?', a: 'Yes, the AI can be configured to assess technical knowledge and problem-solving skills relevant to the job.' },
  { q: 'Are candidate responses auto-scored?', a: 'Yes, with our AI-driven system you can experience the feature of automated scoring while you have the option to change the score manually.' },
  { q: 'How does Testlify ensure fairness in AI assessments?', a: 'We use a standardized process and AI-driven features like auto-scoring to prevent biases that could influence the assessment outcomes.' },
  { q: 'Can I integrate Testlify’s chat simulation with our existing HR systems?', a: 'Yes, Testlify offers seamless integration capabilities with most HRM systems to maintain a smooth workflow.' },
];

export default function ChatAiInterviewsPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <SiteHeader
        announcement="New — AI chat simulations for support &amp; sales hiring"
        announcementCta="Try for free"
        homeHref="/"
      />

      <section className="hero"><div className="wrap"><div className="herogrid">
        <div>
          <div className="reveal" data-reveal style={{ transitionDelay: '.02s' }}><span className="pill"><span className="pilltag">CHAT AI</span> Async chat simulations</span></div>
          <h1 className="h1 reveal" data-reveal style={{ marginTop: '22px', transitionDelay: '.06s' }}>Can they <span className="acc">communicate</span> when it counts?</h1>
          <p className="lead reveal" data-reveal style={{ marginTop: '22px', maxWidth: '520px', transitionDelay: '.1s' }}>The ability to write clearly, think fast, and stay professional under pressure isn&apos;t something you can spot on a resume. Testlify&apos;s Chat Simulation Assessment mirrors real-world communication scenarios — for support, sales, or remote roles.</p>
          <div className="heroctas reveal" data-reveal style={{ transitionDelay: '.14s' }}>
            <CtaButton label="Try for free" href="/pricing" variant="primary" size="md" icon="arrow" magnetic />
            <CtaButton label="Book a demo" href="/contact" variant="secondary" size="md" icon="play" />
          </div>
          <div className="trust reveal" data-reveal style={{ transitionDelay: '.18s' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '7px' }}><span style={{ color: '#F23F44', fontWeight: 700 }}>✓</span>7-day free trial</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '7px' }}><span style={{ color: '#F23F44', fontWeight: 700 }}>✓</span>No credit card required</span>
          </div>
        </div>
        <div className="reveal" data-reveal style={{ position: 'relative', transitionDelay: '.12s' }}>
          <div className="matchtag"><i></i> Auto-scored in real time</div>
          <div className="mock">
            <div className="mocktop"><span className="mc" style={{ background: '#FF5F57' }}></span><span className="mc" style={{ background: '#FEBC2E' }}></span><span className="mc" style={{ background: '#28C840' }}></span><span className="mockbar">chat-interview · customer-support-rep</span></div>
            <div className="chatbody">
              <div className="chatrow"><span className="chatav">AI</span><div className="bubble">A customer emails saying their order arrived damaged and they want a refund today. How do you respond?</div></div>
              <div className="chatrow me"><span className="chatav">C</span><div className="bubble">I&apos;d apologize for the experience, confirm the damage details, and offer an immediate replacement or refund — whichever they prefer.</div></div>
              <div className="chatrow"><span className="chatav">AI</span><div className="bubble">They&apos;re still upset and want to escalate. What&apos;s your next move?</div></div>
            </div>
            <div className="chatscore"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>Clarity 92 · Tone 88 · Empathy 95</div>
          </div>
        </div>
      </div></div></section>

      <section className="sec" style={{ background: '#FBF3EE' }}><div className="wrap" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
        <p className="eyebrow reveal" data-reveal>How it works<b>.</b></p>
        <h2 className="h2 reveal" data-reveal style={{ transitionDelay: '.04s' }}>See how chat AI works</h2>
        <p className="lead reveal" data-reveal style={{ marginTop: '14px', transitionDelay: '.08s' }}>Simulate real-time chat interviews to assess thinking speed and written communication. AI-led, async, and designed for efficient screening.</p>
        <div className="reveal" data-reveal style={{ marginTop: '34px' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://testlify.com/wp-content/uploads/2026/03/Chat-AI.png" alt="Chat AI" style={{ width: '100%', borderRadius: '20px', boxShadow: '0 30px 70px rgba(110,11,14,.14)', display: 'block' }} />
        </div>
      </div></section>

      <section className="sec"><div className="wrap split casplit">
        <div className="reveal" data-reveal>
          <h2 className="h2" style={{ marginBottom: '18px' }}>Your customers don&apos;t tolerate poor communication, why should you?</h2>
          <p className="body" style={{ marginBottom: '20px' }}>Every message your team sends shapes your brand. Whether it&apos;s a support ticket or a sales chat, tone and timing matter. Testlify&apos;s chat simulations place candidates in dynamic, workplace-style conversations that test how they write, respond, and resolve issues in real time.</p>
          <p className="body" style={{ fontWeight: 700, color: '#1A1014', marginBottom: '12px' }}>You&apos;ll see how they:</p>
          <ul className="chk">
            <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1FA463" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>Adapt their tone to different situations</li>
            <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1FA463" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>Manage multiple inquiries under time pressure</li>
            <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1FA463" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>Use clear language to explain, persuade, or de-escalate</li>
            <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1FA463" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>Respond with empathy and professionalism</li>
          </ul>
        </div>
        <div className="reveal" data-reveal style={{ transitionDelay: '.06s' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://testlify.com/wp-content/uploads/2023/03/Session-recording.png" alt="Session recording" />
        </div>
      </div></section>

      <section className="sec" style={{ background: '#FBF3EE' }}><div className="wrap split casplit">
        <div className="reveal" data-reveal style={{ order: 2 }}>
          <h2 className="h2" style={{ marginBottom: '18px' }}>Step into their chat window before you hire</h2>
          <p className="body" style={{ marginBottom: '20px' }}>Testlify&apos;s simulation doesn&apos;t just test grammar or typing speed. It replicates the environment your team actually works in: Slack threads, live customer chats, internal help desks, and more. You get to see how candidates behave in the setting they&apos;ll be hired into — no guesswork, no generic Q&amp;A.</p>
          <p className="body" style={{ fontWeight: 700, color: '#1A1014', marginBottom: '12px' }}>The test adjusts to your needs:</p>
          <ul className="chk">
            <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1FA463" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>Live-style, timed conversations for fast-paced roles</li>
            <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1FA463" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>Scenario-based simulations that test reasoning and customer handling</li>
            <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1FA463" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>Custom workflows to match your tone, product, and challenges</li>
          </ul>
        </div>
        <div className="reveal" data-reveal style={{ order: 1, transitionDelay: '.06s' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://testlify.com/wp-content/uploads/2024/04/image.png" alt="Chat simulation" />
        </div>
      </div></section>

      <section className="sec"><div className="wrap split casplit">
        <div className="reveal" data-reveal>
          <h2 className="h2" style={{ marginBottom: '18px' }}>The smartest way to assess written communication at scale</h2>
          <p className="body" style={{ marginBottom: '20px' }}>Hiring great communicators shouldn&apos;t require live interviews with every applicant. With our AI-enhanced platform, you can assess hundreds of candidates without sacrificing depth or quality.</p>
          <p className="body" style={{ fontWeight: 700, color: '#1A1014', marginBottom: '12px' }}>You&apos;ll benefit from:</p>
          <ul className="chk">
            <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1FA463" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>AI-powered analysis for speed and consistency</li>
            <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1FA463" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>Human review options for high-priority roles</li>
            <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1FA463" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>Auto-generated insights on clarity, tone, grammar, and problem-solving</li>
            <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1FA463" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>Structured performance reports that help your team make faster decisions</li>
          </ul>
        </div>
        <div className="reveal" data-reveal style={{ transitionDelay: '.06s' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://testlify.com/wp-content/uploads/2023/08/hiring-1.png" alt="Strategic human resource planning for remote teams" />
        </div>
      </div></section>

      <section className="sec" style={{ background: '#FBF3EE' }}><div className="wrap split casplit">
        <div className="reveal" data-reveal style={{ order: 2 }}>
          <h2 className="h2" style={{ marginBottom: '18px' }}>Made for modern hiring teams</h2>
          <p className="body" style={{ marginBottom: '20px' }}>Testlify&apos;s Chat Simulation Test is built for scale, speed, and seamless workflows. It&apos;s designed with both recruiters and candidates in mind — because a great experience on both sides leads to better hiring outcomes.</p>
          <ul className="chk">
            <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1FA463" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>Integrates with leading ATS platforms</li>
            <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1FA463" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>Supports multiple languages for global teams</li>
            <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1FA463" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>Provides cheat-proof assessments for accuracy</li>
            <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1FA463" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>Works beautifully on desktop and mobile</li>
            <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1FA463" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>Designed to reduce unconscious bias in early screening</li>
          </ul>
        </div>
        <div className="reveal" data-reveal style={{ order: 1, transitionDelay: '.06s' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://testlify.com/wp-content/uploads/2024/03/One-stop-solution-1024x1024.jpeg" alt="One stop solution" />
        </div>
      </div></section>

      <section className="sec"><div className="wrap">
        <div className="center-head">
          <p className="eyebrow reveal" data-reveal>Integrations<b>.</b></p>
          <h2 className="h2 reveal" data-reveal style={{ transitionDelay: '.04s' }}>Testlify integrates seamlessly with 100+ ATS tools</h2>
          <p className="lead reveal" data-reveal style={{ transitionDelay: '.06s' }}>Native integrations with Workday, Greenhouse, Lever, iCIMS, and 97 more ATS platforms — no middleware, no data mapping required.</p>
        </div>
        <div className="intg-grid reveal" data-reveal style={{ marginTop: '44px' }}>
          <div className="intg-tile">{/* eslint-disable-next-line @next/next/no-img-element */}<img src="https://testlify.com/wp-content/uploads/2024/09/Workday_Inc.-Logo.wine_-1-2048x1365-2.png" alt="Workday" /></div>
          <div className="intg-tile">{/* eslint-disable-next-line @next/next/no-img-element */}<img src="https://testlify.com/wp-content/uploads/2025/10/Successfactors-Logo-Vector.svg-.png" alt="SAP SuccessFactors" /></div>
          <div className="intg-tile">{/* eslint-disable-next-line @next/next/no-img-element */}<img src="https://testlify.com/wp-content/uploads/2025/10/Lever_Employ_Logo_Horizontal_Turquoise_Black-300x43-1.png" alt="Lever" /></div>
          <div className="intg-tile">{/* eslint-disable-next-line @next/next/no-img-element */}<img src="https://testlify.com/wp-content/uploads/2025/10/SR-SAP-Logo.svg" alt="SmartRecruiters" /></div>
          <div className="intg-tile">{/* eslint-disable-next-line @next/next/no-img-element */}<img src="https://testlify.com/wp-content/uploads/2024/09/BambooHR-Logo-1-2048x1152-2.png" alt="BambooHR" /></div>
          <div className="intg-tile">{/* eslint-disable-next-line @next/next/no-img-element */}<img src="https://testlify.com/wp-content/uploads/2023/03/629a0bbcb04c5ae587c411c2-1-1.png" alt="Greenhouse" /></div>
          <div className="intg-tile">{/* eslint-disable-next-line @next/next/no-img-element */}<img src="https://testlify.com/wp-content/uploads/2024/08/zoho-recruit-logo-1.png" alt="Zoho Recruit" /></div>
          <div className="intg-tile">{/* eslint-disable-next-line @next/next/no-img-element */}<img src="https://testlify.com/wp-content/uploads/2025/10/JazzHR_Employ_Logo_Horizontal_Purple_Black-1024x131.png" alt="JazzHR" /></div>
          <div className="intg-tile">{/* eslint-disable-next-line @next/next/no-img-element */}<img src="https://testlify.com/wp-content/uploads/2025/10/logo.svg" alt="UKG Pro Recruiting" /></div>
          <div className="intg-tile">{/* eslint-disable-next-line @next/next/no-img-element */}<img src="https://testlify.com/wp-content/uploads/2025/10/681b1f74457e6f968fdaaa8d_MASTER_RECRUITEE_COLOUR_PREFERRED-LOGO-TO-USE-1024x313.png" alt="Recruitee" /></div>
        </div>
        <div className="reveal" data-reveal style={{ textAlign: 'center', marginTop: '34px' }}>
          <a href="/integrations" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#F23F44', fontWeight: 700, fontSize: '15.5px', textDecoration: 'none' }}>View all ATS integrations<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></a>
        </div>
      </div></section>

      <SecuritySection
        eyebrow="Security"
        heading="Built to keep your organization secure"
        sub="Ensure the security of your recruitment data with top-tier admin management, enhanced security integrations, stringent data governance, comprehensive compliance audits, and strong privacy protections."
      />
      <Testimonials eyebrow="Testimonials" heading="What our customers are saying about Testlify" />
      <Recognition bg="#FBF3EE" />

      <section className="sec" style={{ background: '#fff' }}><div className="wrap">
        <div className="center-head">
          <p className="eyebrow reveal" data-reveal>FAQ<b>.</b></p>
          <h2 className="h2 reveal" data-reveal style={{ transitionDelay: '.04s' }}>Frequently asked questions (FAQs)</h2>
        </div>
        <div className="reveal" data-reveal style={{ maxWidth: '820px', margin: '44px auto 0' }}>
          <FAQ items={faqItems} />
        </div>
      </div></section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
