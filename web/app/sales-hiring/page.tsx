"use client";

import { useState } from "react";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import CtaButton from "@/components/CtaButton";
import SecuritySection from "@/components/SecuritySection";
import Testimonials from "@/components/Testimonials";
import Recognition from "@/components/Recognition";
import CtaBand from "@/components/CtaBand";

const css = `
body{margin:0;font-family:'Poppins',sans-serif;color:#1A1014;background:#fff;}
.tsdw{max-width:1240px;margin:0 auto;padding:0 28px;}
.tsd-sec{padding:96px 0;}
.tsd-sand{background:#FBF3EE;}
.eyebrow{font-size:13px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:#8A7A7D;margin:0;}.eyebrow b{color:#F23F44;}
.tsd-h1{font-size:52px;font-weight:800;letter-spacing:-1.4px;line-height:1.08;margin:16px 0 0;}.tsd-h1 .tac{color:#F23F44;}
.tsd-h2{font-size:34px;font-weight:800;letter-spacing:-.8px;line-height:1.16;margin:14px 0 0;}
.tsd-lead{font-size:17.5px;line-height:1.6;color:#5A4B4E;margin:20px 0 0;}
.tsd-p{font-size:15.5px;line-height:1.64;color:#5A4B4E;margin:14px 0 0;}
.tsd-crumb{font-size:13px;color:#8A7A7D;display:flex;gap:8px;align-items:center;margin-bottom:18px;}.tsd-crumb a{color:#8A7A7D;text-decoration:none;}.tsd-crumb a:hover{color:#F23F44;}
.tsd-hero{padding:74px 0 96px;background:linear-gradient(180deg,#FFF8F7 0%,#fff 82%);}
.tsd-hgrid{display:grid;grid-template-columns:1.04fr .96fr;gap:60px;align-items:center;}
.tsd-ticks{display:flex;gap:22px;flex-wrap:wrap;margin-top:24px;}
.tsd-tick{display:flex;align-items:center;gap:8px;font-size:13.5px;font-weight:600;color:#6C5A5D;}
.tsd-ctas{display:flex;gap:14px;flex-wrap:wrap;margin-top:26px;}
.tsd-stats{display:flex;gap:10px;flex-wrap:wrap;margin-top:26px;}
.tsd-statc{background:#fff;border:1px solid #F0E2E3;border-radius:999px;padding:8px 16px;font-size:13px;font-weight:600;color:#1A1014;box-shadow:0 8px 18px rgba(110,11,14,.06);}
.tsd-shot{background:#fff;border:1px solid #F0E2E3;border-radius:22px;padding:0;box-shadow:0 40px 90px rgba(110,11,14,.14);overflow:hidden;}
.tsd-shotimg{display:block;width:100%;height:360px;background-size:contain;background-repeat:no-repeat;background-position:center;background-color:#fff;border-radius:14px;}
.ithero-wrap{position:relative;}
.ithero-card{position:relative;background:#fff;border:1px solid #F0E2E3;border-radius:20px;box-shadow:0 40px 90px rgba(110,11,14,.14);overflow:hidden;animation:itfloat 6s ease-in-out infinite;}
@keyframes itfloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)}}
.ithero-top{display:flex;align-items:center;gap:7px;padding:14px 18px;border-bottom:1px solid #F4E9E9;background:#FCF6F5;}
.ithero-dot{width:11px;height:11px;border-radius:50%;}.ithero-dot.r{background:#FF5F57;}.ithero-dot.y{background:#FEBC2E;}.ithero-dot.g{background:#28C840;}
.ithero-file{font-size:12.5px;color:#8A7A7D;font-weight:600;margin-left:8px;}
.ithero-live{margin-left:auto;font-size:11.5px;font-weight:700;color:#1FA463;}
.ithero-scores{padding:18px 20px 22px;display:flex;flex-direction:column;gap:13px;}
.ithero-scr{display:flex;align-items:center;gap:12px;}
.ithero-scl{font-size:12.5px;font-weight:600;color:#46383C;width:118px;flex:none;}
.ithero-scbar{flex:1;height:8px;border-radius:6px;background:#F4E7E8;overflow:hidden;}
.ithero-scbar i{display:block;height:100%;border-radius:6px;background:linear-gradient(90deg,#FF7A52,#F23F44);width:0;animation:itfill 1.5s cubic-bezier(.4,0,.2,1) forwards;}
@keyframes itfill{to{width:var(--w);}}
.ithero-scv{font-size:13px;font-weight:800;color:#F23F44;width:26px;text-align:right;flex:none;}
.ithero-badge{position:absolute;display:inline-flex;align-items:center;gap:7px;background:#fff;border:1px solid #F0E2E3;border-radius:12px;padding:9px 14px;font-size:12.5px;font-weight:700;color:#1A1014;box-shadow:0 14px 30px rgba(110,11,14,.14);}
.ithero-badge svg{color:#1FA463;}
.ithero-badge.b1{top:26px;right:-14px;animation:itfloat 5s ease-in-out infinite;}
.ithero-badge.b2{bottom:-20px;right:36px;animation:itfloat 5.6s ease-in-out .4s infinite;}
.rt-cand{display:flex;align-items:center;gap:12px;padding:16px 18px;border-bottom:1px solid #F4E9E9;}
.rt-av{width:42px;height:42px;border-radius:50%;background:linear-gradient(135deg,#FF7A52,#F23F44);color:#fff;font-weight:800;font-size:15px;display:flex;align-items:center;justify-content:center;flex:none;}
.rt-ci{display:flex;flex-direction:column;}
.rt-nm{font-size:15px;font-weight:700;color:#1A1014;}
.rt-role{font-size:12.5px;color:#8A7A7D;font-weight:500;}
.rt-fit{margin-left:auto;font-size:11.5px;font-weight:700;color:#1FA463;background:#E8F6EE;padding:5px 11px;border-radius:100px;}
.tsd-grid2{display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:center;}
.tsd-flip .tsd-copy{order:2;}.tsd-flip .tsd-media{order:1;}
.tsd-bl{display:grid;grid-template-columns:1fr;gap:12px;margin-top:22px;}
.tsd-bi{display:flex;gap:10px;align-items:flex-start;}
.tsd-bi svg{flex:none;margin-top:2px;color:#F23F44;}
.tsd-bt{font-size:14.5px;font-weight:600;color:#1A1014;display:block;line-height:1.5;}
.tsd-shead{text-align:center;max-width:760px;margin:0 auto;}
.tsd-cards{display:grid;grid-template-columns:repeat(3,1fr);gap:22px;margin-top:46px;}
.tsd-card{background:#fff;border:1px solid #F0E2E3;border-radius:18px;padding:28px 26px;transition:transform .3s cubic-bezier(.2,.7,.3,1),border-color .3s,box-shadow .3s;}
.tsd-card:hover{transform:translateY(-4px);border-color:#FBD0D1;box-shadow:0 16px 34px rgba(110,11,14,.10);}
.tsd-ic{width:44px;height:44px;border-radius:13px;background:#FFF0EF;color:#F23F44;display:flex;align-items:center;justify-content:center;margin-bottom:16px;}
.tsd-ct{font-size:17px;font-weight:700;margin:0;}
.tsd-cd{font-size:14px;line-height:1.6;color:#6C5A5D;margin:8px 0 0;}
.tsd-faqw{max-width:820px;margin:44px auto 0;}
.tsd-faq{border-bottom:1px solid #F0E2E3;padding:22px 2px;cursor:pointer;}
.tsd-faqq{display:flex;justify-content:space-between;align-items:center;gap:20px;font-size:16.5px;font-weight:700;color:#1A1014;}
.tsd-faqx{width:28px;height:28px;border-radius:50%;background:#FFF0EF;color:#F23F44;display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:700;flex:none;transition:transform .25s;}
.tsd-faqa{display:none;font-size:15px;line-height:1.64;color:#5A4B4E;margin-top:12px;max-width:720px;}
.tsd-open .tsd-faqa{display:block;}
.tsd-open .tsd-faqx{transform:rotate(45deg);}
.reveal{opacity:0;transform:translateY(26px);}
.reveal.in{opacity:1;transform:none;}
@media(max-width:960px){.tsd-hgrid,.tsd-grid2{grid-template-columns:1fr;gap:40px;}.tsd-flip .tsd-copy{order:1;}.tsd-flip .tsd-media{order:2;}.tsd-cards{grid-template-columns:1fr;}.tsd-h1{font-size:38px;}.tsd-h2{font-size:27px;}.tsd-sec{padding:64px 0;}.tsd-shotimg{height:280px;}}

h1,h2,h3,h4,.h1,.h2,.h3,.hero h1,.eyebrow{text-wrap:balance;}p,li,.body,.lead,.sub,figcaption,blockquote{text-wrap:pretty;}/*om-balance-rule*/
`;

const chk = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>
);

const cards = [
  { title: "Role-based sales assessments", icon: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM12 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2z", desc: "Evaluate persuasion, objection handling, communication, resilience, personality, situational judgement, and cognitive ability in one comparable score." },
  { title: "Situational judgement and role-play", icon: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", desc: "Put candidates through realistic sales scenarios and role-play so you see how they handle objections and prioritize a pipeline, not just what they say." },
  { title: "Powerful proctoring features", icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z", desc: "Advanced proctoring keeps results trustworthy: candidate snapshots detect impersonation, plus tab-switch monitoring and mouse tracking." },
];

const faqs = [
  { q: "How do you test if someone can actually sell?", a: "Use role-based sales assessments and situational-judgement scenarios that mirror real selling, scored on a fixed rubric so ability is measured the same way for every candidate, rather than judged on interview charisma." },
  { q: "What does a sales assessment measure?", a: "Persuasion, objection handling, communication, resilience, and cognitive drive, combined with role-specific knowledge for inside, outside, or field sales and account management." },
  { q: "Does this work for SDR and account-management roles?", a: "Yes. Testlify covers the full sales org, from SDRs and inside sales to field reps and account managers, with tests matched to each role and difficulty level." },
  { q: "Does Testlify integrate with our ATS and CRM workflow?", a: "Yes. Testlify connects to your ATS and hiring workflow with 100+ integrations, including BambooHR, Ashby, Breezy HR, Comeet, and Cornerstone, so sales screening fits the process your team already runs." },
  { q: "How do I customize tests?", a: "Assessments can be customized by adding any additional skill test from our library of tests. These can be a combination of aptitude, language, programming, software, or role-specific skills." },
  { q: "What is the duration of a test?", a: "Each test will evaluate one skill, and you may use several. Each is about 10 minutes in duration. And can be customized to test for more skills which will affect the total time of an assessment." },
  { q: "How do I schedule a demo?", a: "You can schedule a demo by filling out the request for a demo and we will contact you to make arrangements." },
];

export default function SalesHiringPage() {
  const [open, setOpen] = useState<Record<number, boolean>>({});
  const toggle = (i: number) => setOpen((s) => ({ ...s, [i]: !s[i] }));

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <SiteHeader
        announcement="Testlify AI is here — screen, interview & score candidates automatically."
        announcementCta="See what's new →"
      />

      <section className="tsd-hero" data-screen-label="Hero"><div className="tsdw tsd-hgrid">
        <div className="tsd-copy reveal">
          <div className="tsd-crumb"><Link href="/solution-index">Solutions</Link><span>/</span><span>Use case / Sales hiring</span></div>
          <p className="eyebrow">For sales hiring<b>.</b></p>
          <h1 className="tsd-h1">Hire sales reps who close with Testlify&apos;s <span className="tac">sales hiring software</span></h1>
          <p className="tsd-lead">Screen, assess, and shortlist sales reps faster on proven selling ability, not resume claims. Build a team that hits quota and cut the cost of a bad sales hire.</p>
          <div className="tsd-stats">
            <span className="tsd-statc">Role-based sales tests</span>
            <span className="tsd-statc">Situational judgement</span>
            <span className="tsd-statc">1,700+ validated tests</span>
          </div>
          <div className="tsd-ctas">
            <CtaButton label="Try for free" href="/pricing" variant="primary" size="md" icon="arrow" magnetic />
            <CtaButton label="Book a demo" href="/contact" variant="secondary" size="md" icon="play" />
          </div>
          <div className="tsd-ticks"><span className="tsd-tick"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#F23F44" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>No credit card required</span><span className="tsd-tick"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#F23F44" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>7-day free trial</span></div>
        </div>
        <div className="tsd-media"><div className="ithero-wrap">
          <div className="ithero-card">
            <div className="ithero-top"><span className="ithero-dot r"></span><span className="ithero-dot y"></span><span className="ithero-dot g"></span><span className="ithero-file">sales-scorecard</span><span className="ithero-live">Match 93%</span></div>
            <div className="rt-cand"><span className="rt-av">MR</span><div className="rt-ci"><span className="rt-nm">Marcus Reed</span><span className="rt-role">Account Executive · Inside sales</span></div><span className="rt-fit">Quota-ready</span></div>
            <div className="ithero-scores">
              <div className="ithero-scr"><span className="ithero-scl">Persuasion</span><span className="ithero-scbar"><i style={{ ["--w" as string]: "94%", animationDelay: ".15s" }}></i></span><span className="ithero-scv">94</span></div>
              <div className="ithero-scr"><span className="ithero-scl">Objection handling</span><span className="ithero-scbar"><i style={{ ["--w" as string]: "90%", animationDelay: ".3s" }}></i></span><span className="ithero-scv">90</span></div>
              <div className="ithero-scr"><span className="ithero-scl">Communication</span><span className="ithero-scbar"><i style={{ ["--w" as string]: "88%", animationDelay: ".45s" }}></i></span><span className="ithero-scv">88</span></div>
              <div className="ithero-scr"><span className="ithero-scl">Resilience</span><span className="ithero-scbar"><i style={{ ["--w" as string]: "85%", animationDelay: ".6s" }}></i></span><span className="ithero-scv">85</span></div>
            </div>
          </div>
          <div className="ithero-badge b1"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>Quota-ready</div>
          <div className="ithero-badge b2"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>AI-scored</div>
        </div></div>
      </div></section>

      {/* Section 0 — split, white, shotBg #F3F6F9 */}
      <section className="tsd-sec"><div className="tsdw">
        <div className="tsd-grid2">
          <div className="tsd-copy reveal">
            <h2 className="tsd-h2">Screen for real selling ability, not interview charisma</h2>
            <p className="tsd-p">Evaluate sales candidates on the skills that predict quota attainment, persuasion, objection handling, communication, resilience, and drive, with role-based assessments for inside, outside, and field sales, SDR, and account-management roles.</p>
            <p className="tsd-p">Our tailored assessments gauge how well sales candidates perform in realistic scenarios through behavioral, psychometric, and cognitive tests, helping you minimize turnover.</p>
            <div className="tsd-bl">
              <div className="tsd-bi">{chk}<span className="tsd-bt">Over 1,700 tests for 5,000+ job roles across 50+ industries</span></div>
              <div className="tsd-bi">{chk}<span className="tsd-bt">Discrete screening tools to evaluate, compare, and select top-tier candidates.</span></div>
              <div className="tsd-bi">{chk}<span className="tsd-bt">Assess in-demand professionals anywhere in the world with our multilingual feature.</span></div>
            </div>
            <div className="tsd-ctas"><CtaButton label="Try for free" href="/pricing" variant="primary" size="md" icon="arrow" magnetic /></div>
          </div>
          <div className="tsd-media reveal"><div className="tsd-shot" style={{ background: "#F3F6F9" }}><div className="tsd-shotimg" style={{ backgroundColor: "#F3F6F9", backgroundImage: 'url("https://testlify.com/wp-content/uploads/2024/09/Land-the-most-skilled-professionals-with-confidence-and-clarity.png")' }}></div></div></div>
        </div>
      </div></section>

      {/* Section 1 — split flip, sand, shotBg #FFF */}
      <section className="tsd-sec tsd-sand"><div className="tsdw">
        <div className="tsd-grid2 tsd-flip">
          <div className="tsd-copy reveal">
            <h2 className="tsd-h2">Sales hiring backed by evidence, not gut feel</h2>
            <p className="tsd-p">Hire across the full sales org, from SDRs and inside sales to field reps and account managers, with role-specific tests matched to each seat.</p>
            <div className="tsd-bl">
              <div className="tsd-bi">{chk}<span className="tsd-bt">Auto grading with AI</span></div>
              <div className="tsd-bi">{chk}<span className="tsd-bt">Suspicious activity detection</span></div>
              <div className="tsd-bi">{chk}<span className="tsd-bt">Audio and video interviewing feature</span></div>
              <div className="tsd-bi">{chk}<span className="tsd-bt">Fully customizable assessments</span></div>
              <div className="tsd-bi">{chk}<span className="tsd-bt">Detailed analytics and reporting</span></div>
              <div className="tsd-bi">{chk}<span className="tsd-bt">Non-googleable questions</span></div>
            </div>
          </div>
          <div className="tsd-media reveal"><div className="tsd-shot" style={{ background: "#FFF" }}><div className="tsd-shotimg" style={{ backgroundColor: "#FFF", backgroundImage: 'url("https://testlify.com/wp-content/uploads/2024/09/Lateral-hiring-made-easy-backed-by-data-not-by-gut-feel.png")' }}></div></div></div>
        </div>
      </div></section>

      {/* Section 2 — split, white, shotBg #F3F6F9 */}
      <section className="tsd-sec"><div className="tsdw">
        <div className="tsd-grid2">
          <div className="tsd-copy reveal">
            <h2 className="tsd-h2">Test the exact sales role you are hiring for</h2>
            <p className="tsd-p">With Testlify&apos;s sales hiring software, screening reps at scale is effortless.</p>
            <div className="tsd-bl">
              <div className="tsd-bi">{chk}<span className="tsd-bt">Save time and onboard the right professionals by conducting simulation-based assessments at different levels.</span></div>
              <div className="tsd-bi">{chk}<span className="tsd-bt">AI-powered tests evaluation identifies the strengths and gaps of candidates effectively.</span></div>
              <div className="tsd-bi">{chk}<span className="tsd-bt">Eliminate unconscious bias with data-driven insights, ensuring a fair and objective hiring process.</span></div>
            </div>
            <div className="tsd-ctas"><CtaButton label="Try for free" href="/pricing" variant="primary" size="md" icon="arrow" magnetic /></div>
          </div>
          <div className="tsd-media reveal"><div className="tsd-shot" style={{ background: "#F3F6F9" }}><div className="tsd-shotimg" style={{ backgroundColor: "#F3F6F9", backgroundImage: 'url("https://testlify.com/wp-content/uploads/2024/09/Tailor-our-suite-of-tools-to-ensure-you-hire-the-best-fit-candidates.png")' }}></div></div></div>
        </div>
      </div></section>

      {/* Section 3 — cards, sand */}
      <section className="tsd-sec tsd-sand"><div className="tsdw">
        <div className="tsd-shead reveal"><p className="eyebrow">Sales screening<b>.</b></p><h2 className="tsd-h2">A complete platform for sales screening</h2></div>
        <div className="tsd-cards">
          {cards.map((c, i) => (
            <div className="tsd-card reveal" key={i}>
              <div className="tsd-ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={c.icon}></path></svg></div>
              <p className="tsd-ct">{c.title}</p>
              <p className="tsd-cd">{c.desc}</p>
            </div>
          ))}
        </div>
      </div></section>

      <SecuritySection eyebrow="Security" heading="Built to keep your organization secure" sub="Ensure the security of your recruitment data with top-tier admin management, enhanced security integrations, stringent data governance, comprehensive compliance audits, and strong privacy protections." />

      <Testimonials eyebrow="Testimonials" heading="What our customers are saying about Testlify" />

      <Recognition bg="#fff" />

      <section className="tsd-sec tsd-sand"><div className="tsdw">
        <div className="tsd-shead reveal"><p className="eyebrow">FAQ<b>.</b></p><h2 className="tsd-h2">Frequently asked questions (FAQs)</h2></div>
        <div className="tsd-faqw">
          {faqs.map((f, i) => (
            <div className={"tsd-faq reveal" + (open[i] ? " tsd-open" : "")} key={i} onClick={() => toggle(i)}>
              <div className="tsd-faqq">{f.q}<span className="tsd-faqx">+</span></div>
              <div className="tsd-faqa">{f.a}</div>
            </div>
          ))}
        </div>
      </div></section>

      <CtaBand
        eyebrow="Get started"
        heading="Ready to replace gut instinct with verified skills?"
        sub="Your next great hire is in your candidate pool right now. Testlify's assessments surface them in 30 minutes — no resume bias, no interview gut checks, no bad hire regret."
      />
      <SiteFooter />
    </>
  );
}
