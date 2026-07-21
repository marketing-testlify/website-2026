"use client";

import { useEffect } from "react";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import CtaButton from "@/components/CtaButton";
import CtaBand from "@/components/CtaBand";
import FAQ from "@/components/FAQ";
import SecuritySection from "@/components/SecuritySection";

const css = `
*{box-sizing:border-box;}
html{scroll-behavior:smooth;}
body{margin:0;font-family:'Poppins',sans-serif;-webkit-font-smoothing:antialiased;color:#1A1014;background:#fff;}
a{text-decoration:none;color:inherit;}
::selection{background:#F23F44;color:#fff;}
.wrap{max-width:1240px;margin:0 auto;padding:0 28px;}
.sec{padding:96px 28px;}
.eyebrow{font-size:12.5px;font-weight:600;letter-spacing:.16em;text-transform:uppercase;color:#8A7A7D;margin:0 0 18px;}
.eyebrow b{color:#F23F44;font-weight:600;}
.h1{font-size:60px;line-height:1.05;font-weight:800;letter-spacing:-2px;margin:0;color:#1A1014;}
.h2{font-size:42px;line-height:1.08;font-weight:800;letter-spacing:-1.4px;margin:0;color:#1A1014;}
.h3{font-size:22px;line-height:1.25;font-weight:700;letter-spacing:-.4px;margin:0;color:#1A1014;}
.lead{font-size:19px;line-height:1.6;color:#5A4B4E;font-weight:400;}
.body{font-size:16px;line-height:1.66;color:#5A4B4E;}
.acc{color:#F23F44;}
.reveal{opacity:0;transform:translateY(28px);}
.pill{display:inline-flex;align-items:center;gap:9px;background:#fff;border:1px solid #F4D9DA;border-radius:999px;padding:7px 15px 7px 8px;font-size:13px;font-weight:600;color:#A8323A;box-shadow:0 6px 16px rgba(110,11,14,.06);}
.pilltag{background:#F23F44;color:#fff;font-size:11px;font-weight:700;letter-spacing:.04em;padding:3px 9px;border-radius:999px;}
.heroctas{display:flex;align-items:center;gap:14px;flex-wrap:wrap;margin-top:30px;}
.trust{display:flex;align-items:center;gap:13px;flex-wrap:wrap;font-size:13.5px;color:#8A7A7D;font-weight:600;margin-top:26px;}
.dot{width:4px;height:4px;border-radius:50%;background:#D9C7C9;}
.hero{padding:72px 28px 88px;background:radial-gradient(1100px 540px at 78% 6%,#FFF0EE 0%,rgba(255,240,238,0) 60%),#fff;position:relative;overflow:hidden;}
.herogrid{display:grid;grid-template-columns:1.02fr 1.1fr;gap:60px;align-items:center;}
.matchtag{position:absolute;top:-14px;right:16px;z-index:3;background:#fff;border:1px solid #F0E2E3;border-radius:999px;padding:9px 15px;font-size:12.5px;font-weight:600;color:#1A1014;box-shadow:0 16px 30px rgba(110,11,14,.12);display:flex;align-items:center;gap:8px;}
.matchtag i{width:8px;height:8px;border-radius:50%;background:#1F9D6B;display:inline-block;}
.jumpnav{position:sticky;top:64px;z-index:40;background:rgba(255,255,255,.86);backdrop-filter:saturate(180%) blur(12px);border-top:1px solid #F4E7E8;border-bottom:1px solid #F4E7E8;}
.jumpnav-in{max-width:1240px;margin:0 auto;padding:0 28px;display:flex;gap:6px;overflow-x:auto;}
.jl{white-space:nowrap;padding:15px 14px;font-size:13.5px;font-weight:600;color:#6C5A5D;border-bottom:2px solid transparent;transition:color .2s,border-color .2s;}
.jl:hover{color:#F23F44;border-bottom-color:#F23F44;}
.split{display:grid;grid-template-columns:1.02fr 1.05fr;gap:64px;align-items:center;}
.chk{display:flex;gap:12px;align-items:flex-start;margin-bottom:14px;}
.chki{flex:none;width:24px;height:24px;border-radius:7px;background:transparent !important;display:flex;align-items:center;justify-content:center;margin-top:1px;}.chki svg{stroke:#1FA463;}
.mock{background:#fff;border:1px solid #F0E2E3;border-radius:20px;box-shadow:0 40px 90px rgba(110,11,14,.16);overflow:hidden;}
.mocktop{display:flex;align-items:center;gap:8px;padding:13px 16px;border-bottom:1px solid #F4ECEC;background:#FCFAFA;}
.mc{width:11px;height:11px;border-radius:50%;}
.mockbar{margin-left:12px;flex:1;height:26px;border-radius:8px;background:#F3EAEA;display:flex;align-items:center;padding:0 12px;font-size:11.5px;color:#A9999C;font-weight:500;}
.mockbody{padding:20px;}
.pline{display:flex;align-items:center;gap:12px;padding:12px 14px;border:1px solid #F1E6E7;border-radius:12px;margin-bottom:10px;font-size:13.5px;}
.pline .flag{margin-left:auto;font-size:10.5px;font-weight:700;letter-spacing:.05em;padding:4px 10px;border-radius:99px;}
.flag.ok{background:#EAF8F0;color:#1F9D6B;}
.flag.warn{background:#FFF4E6;color:#C7791B;}
.bargrp{display:flex;align-items:flex-end;gap:10px;height:130px;padding:10px 4px 0;}
.bar{flex:1;background:linear-gradient(180deg,#F23F44,#FF9E7A);border-radius:7px 7px 0 0;}
.bgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;}
.bgrid4{grid-template-columns:repeat(4,1fr);}
.bcard{background:#fff;border:1px solid #F2E6E7;border-radius:18px;padding:28px 24px;transition:transform .3s cubic-bezier(.2,.7,.3,1),border-color .3s,box-shadow .3s;}
.bcard:hover{transform:translateY(-4px);border-color:#FBD0D1;box-shadow:0 16px 34px rgba(110,11,14,.10);}
.bicon{width:48px;height:48px;border-radius:14px;background:#FFF0F0;color:#F23F44;display:flex;align-items:center;justify-content:center;margin-bottom:20px;}
.cardtag{display:inline-block;background:#FFF0F0;color:#A8323A;font-size:11px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;padding:5px 10px;border-radius:999px;margin-bottom:14px;}
.statgrid{display:grid;grid-template-columns:repeat(4,1fr);gap:24px;}
.statnum{font-size:46px;font-weight:800;letter-spacing:-1.6px;color:#F23F44;line-height:1;margin:0;}
.statlbl{font-size:14.5px;color:#6C5A5D;font-weight:500;margin:10px 0 0;}
.metricrow{display:grid;grid-template-columns:repeat(4,1fr);}
.metric{text-align:center;padding:4px 22px;}
.metric + .metric{border-left:1px solid #EFE3E4;}
.metricnum{font-size:34px;font-weight:700;letter-spacing:-1px;line-height:1;color:#1A1014;font-variant-numeric:tabular-nums;}
.metricnum .u{color:#C99;color:#D98C8F;font-weight:600;}
.metriclbl{font-size:14px;color:#6C5A5D;font-weight:500;margin-top:10px;line-height:1.45;}
.stepgrid{display:grid;grid-template-columns:repeat(5,1fr);gap:18px;}
.stepcard{background:#fff;border:1px solid #F2E6E7;border-radius:18px;padding:26px 22px;transition:transform .3s cubic-bezier(.2,.7,.3,1),border-color .3s,box-shadow .3s;}
.stepcard:hover{transform:translateY(-4px);border-color:#FBD0D1;box-shadow:0 16px 34px rgba(110,11,14,.10);}
.stepnum{width:38px;height:38px;border-radius:11px;background:#FFF0F0;color:#F23F44;font-weight:800;font-size:17px;display:flex;align-items:center;justify-content:center;margin-bottom:16px;}
.hiw{display:grid;grid-template-columns:.92fr 1.08fr;gap:44px;align-items:stretch;}
.hiwimg{position:relative;border-radius:22px;overflow:hidden;min-height:0;border:1px solid #F0E2E3;box-shadow:0 30px 60px rgba(110,11,14,.12);background:#FBF3EE;}
.hiwimg img,.hiwimg image-slot{position:absolute;inset:0;display:block;width:100%;height:100%;object-fit:cover;}
.hiwcta{position:absolute;left:18px;right:18px;bottom:18px;background:rgba(26,16,20,.62);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,.16);border-radius:18px;padding:22px 24px;display:flex;align-items:center;gap:18px;}
.hiwcta .t{color:#fff;font-weight:700;font-size:19px;margin:0 0 6px;letter-spacing:-.3px;}
.hiwcta .s{color:rgba(255,255,255,.82);font-size:13.5px;line-height:1.5;margin:0;}
.hiwcta a.arrow{flex:none;width:46px;height:46px;border-radius:50%;background:#fff;color:#F23F44;display:flex;align-items:center;justify-content:center;margin-left:auto;transition:transform .25s ease,box-shadow .25s ease;box-shadow:0 8px 20px rgba(0,0,0,.18);}
.hiwcta a.arrow:hover{transform:translateY(-2px);}
.steplist{display:flex;flex-direction:column;gap:14px;}
.stepitem{display:flex;gap:16px;align-items:flex-start;background:#fff;border:1px solid #F2E6E7;border-radius:16px;padding:20px 22px;transition:transform .3s cubic-bezier(.2,.7,.3,1),border-color .3s,box-shadow .3s;}
.stepitem:hover{transform:translateY(-3px);border-color:#FBD0D1;box-shadow:0 16px 34px rgba(110,11,14,.10);}
.stepbadge{flex:none;width:40px;height:40px;border-radius:11px;background:#F23F44;color:#fff;font-weight:800;font-size:17px;display:flex;align-items:center;justify-content:center;}
.cmpwrap{overflow-x:auto;padding:24px 24px 48px;margin:-24px -24px -48px;}
.cmp{width:100%;border-collapse:collapse;background:#fff;border:1px solid #F0E2E3;border-radius:18px;overflow:hidden;min-width:640px;box-shadow:0 18px 40px rgba(110,11,14,.09);}
.cmp th,.cmp td{padding:16px 18px;text-align:left;font-size:14.5px;border-bottom:1px solid #F4ECEC;color:#6C5A5D;}
.cmp thead th{font-size:13px;font-weight:700;color:#1A1014;background:#FBF3EE;}
.cmp thead th.us{color:#F23F44;}
.cmp td.feat{font-weight:600;color:#1A1014;}
.cmp td.us{font-weight:700;color:#1A1014;background:#FFF8F7;}
.cmp tbody tr:last-child td{border-bottom:none;}
.intg-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:14px;}
.intg-tile{display:flex;align-items:center;justify-content:center;height:88px;background:#fff;border:1px solid #F2E6E7;border-radius:16px;padding:16px 20px;transition:transform .28s ease,box-shadow .28s ease,border-color .28s ease;}
.intg-tile:hover{transform:translateY(-4px);border-color:#FBD0D1;box-shadow:0 16px 34px rgba(110,11,14,.10);}
.intg-tile img{max-width:100%;max-height:40px;object-fit:contain;}
@media(max-width:960px){
  .split,.herogrid{grid-template-columns:1fr !important;gap:44px;}
  .h1{font-size:42px;letter-spacing:-1.2px;}
  .h2{font-size:32px;letter-spacing:-1px;}
  .sec{padding:70px 22px;}
  .hero{padding:44px 22px 60px;}
  .bgrid,.bgrid4{grid-template-columns:1fr 1fr;}
  .statgrid{grid-template-columns:repeat(2,1fr);}
  .metricrow{grid-template-columns:repeat(2,1fr);row-gap:36px;}
  .metric + .metric{border-left:none;}
  .metricnum{font-size:30px;}
  .stepgrid{grid-template-columns:1fr 1fr;}
  .hiw{grid-template-columns:1fr;gap:34px;}
  .hiwimg{min-height:380px;}
  .intg-grid{grid-template-columns:repeat(3,1fr);}
  .jumpnav{top:56px;}
}
@media(max-width:560px){
  .bgrid,.bgrid4,.stepgrid{grid-template-columns:1fr;}
}

h1,h2,h3,h4,.h1,.h2,.h3,.hero h1,.eyebrow{text-wrap:balance;}p,li,.body,.lead,.sub,figcaption,blockquote{text-wrap:pretty;}/*om-balance-rule*/
`;

const faqItems = [
  { q: "Can I build a custom assessment, or do I have to use pre-built tests?", a: "You can do both. Choose from 3,500+ validated assessments in our library, build your own from scratch, or combine the two. Testlify supports 13+ question formats, including video, audio, coding challenges, Google Docs/Sheets simulations, and fill-in-the-blank questions, giving you complete flexibility to evaluate role-specific and company-specific skills." },
  { q: "How does Testlify prevent candidates from cheating during remote assessments?", a: "Testlify helps maintain assessment integrity with built-in proctoring tools such as Focus Guard, full-screen enforcement, tab-switch and copy-paste detection, webcam snapshots, IP and location verification, and optional live proctoring. Every assessment includes an activity log, allowing recruiters to review flagged behavior before making hiring decisions." },
  { q: "Does Testlify integrate with the ATS my team already uses?", a: "Most likely, yes. Testlify integrates with 100+ ATS and HRIS platforms, including Workday and Greenhouse. Candidate scores, reports, and hiring statuses sync automatically, helping your team manage assessments without leaving your existing workflow." },
  { q: "How does AI scoring work, and can I trust it?", a: "Testlify automatically evaluates responses across video, audio, chat, and coding assessments. Recruiters receive skill-level insights, benchmark comparisons, and candidate summaries to support faster, more informed decisions. AI-generated results are designed to assist evaluation, while recruiters remain in control of final hiring decisions." },
  { q: "Can candidates take assessments on mobile devices, and how long do they take?", a: "Yes. Candidates can complete assessments from any modern browser on desktop, tablet, or mobile without installing additional software. Most assessments are designed to take less than 45 minutes, providing a thorough evaluation without creating unnecessary candidate drop-off." },
  { q: "Is Testlify compliant with GDPR, CCPA, and other data privacy standards?", a: "Yes. Testlify is ISO 27001 certified, SOC 2 Type II compliant, and supports both GDPR and CCPA requirements. The platform also includes role-based access controls and configurable data retention policies to help organizations manage candidate data securely." },
  { q: "Can we white-label assessments with our own branding?", a: "Yes. With Testlify's white-label option, you can remove Testlify branding, use a custom domain, configure your own email infrastructure, and add a custom support email. This creates a seamless branded experience for candidates from assessment invitation through reporting." },
];

const Check = ({ w = 13 }: { w?: number }) => (
  <svg width={w} height={w} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={w < 12 ? 3.2 : 3} strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
);

export default function FeaturesPage() {
  useEffect(() => {
    const runCount = (el: HTMLElement) => {
      const to = Number(el.dataset.to);
      const comma = el.dataset.comma === "1";
      const dur = 1500;
      let st: number | null = null;
      const fmt = (n: number) => {
        n = Math.round(n);
        return comma ? n.toLocaleString("en-US") : String(n);
      };
      const tick = (t: number) => {
        if (st === null) st = t;
        const p = Math.min(1, (t - st) / dur);
        const e = 1 - Math.pow(1 - p, 3);
        el.textContent = fmt(to * e);
        if (p < 1) requestAnimationFrame(tick);
        else el.textContent = fmt(to);
      };
      requestAnimationFrame(tick);
    };
    const io = new IntersectionObserver(
      (ents) => {
        ents.forEach((en) => {
          if (en.isIntersecting) {
            en.target.querySelectorAll<HTMLElement>(".v[data-to]").forEach(runCount);
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    document.querySelectorAll(".metricrow, .countup").forEach((r) => io.observe(r));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <SiteHeader
        announcement="13+ question types, AI proctoring and full analytics — all in one platform."
        announcementCta="Explore features"
        homeHref="/"
      />

      <section className="hero"><div className="wrap"><div className="herogrid">
        <div>
          <div className="reveal" style={{ transitionDelay: ".02s" }}><span className="pill"><span className="pilltag">FEATURES</span> Everything you need to assess</span></div>
          <h1 className="h1 reveal" style={{ marginTop: "22px", transitionDelay: ".06s" }}>Every tool your team needs to<br />hire on <span className="acc">evidence.</span></h1>
          <p className="lead reveal" style={{ marginTop: "22px", maxWidth: "520px", transitionDelay: ".1s" }}>Assess skills objectively, screen at any volume, and make hiring decisions backed by data — not résumés. From 13+ question types and AI proctoring to deep analytics and a full API.</p>
          <div className="heroctas reveal" style={{ transitionDelay: ".14s" }}><CtaButton label="Try for free" href="/pricing" variant="primary" size="md" icon="arrow" magnetic /><CtaButton label="Book a demo" href="#" variant="secondary" size="md" icon="play" /></div>
          <div className="trust reveal" style={{ transitionDelay: ".18s" }}><span style={{ display: "inline-flex", alignItems: "center", gap: "7px" }}><span style={{ color: "#F23F44", fontWeight: 700 }}>✓</span>No credit card</span><span style={{ display: "inline-flex", alignItems: "center", gap: "7px" }}><span style={{ color: "#F23F44", fontWeight: 700 }}>✓</span>3,500+ tests ready</span><span style={{ display: "inline-flex", alignItems: "center", gap: "7px" }}><span style={{ color: "#F23F44", fontWeight: 700 }}>✓</span>Up in minutes</span></div>
        </div>
        <div className="reveal" style={{ position: "relative", transitionDelay: ".12s" }}>
          <div className="matchtag"><i></i> Senior Engineer · 18 submissions</div>
          <div className="mock">
            <div className="mocktop"><span className="mc" style={{ background: "#FF5F57" }}></span><span className="mc" style={{ background: "#FEBC2E" }}></span><span className="mc" style={{ background: "#28C840" }}></span><span className="mockbar">app.testlify.com/assessment/senior-engineer</span></div>
            <div className="mockbody">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "16px" }}><div style={{ fontSize: "16px", fontWeight: 700, color: "#1A1014" }}>Ranked shortlist</div><div style={{ fontSize: "12px", color: "#8A7A7D", fontWeight: 600 }}>80% faster shortlist</div></div>
              <div className="pline"><span style={{ width: "28px", height: "28px", borderRadius: "8px", background: "linear-gradient(135deg,#F23F44,#FF7A52)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "11px" }}>AK</span>Anika Kapoor · 5 yrs<span className="flag ok">92%</span></div>
              <div className="pline"><span style={{ width: "28px", height: "28px", borderRadius: "8px", background: "linear-gradient(135deg,#6E62F2,#9A8BFF)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "11px" }}>MS</span>Marco Silva · 4 yrs<span className="flag ok">85%</span></div>
              <div className="pline" style={{ marginBottom: 0 }}><span style={{ width: "28px", height: "28px", borderRadius: "8px", background: "linear-gradient(135deg,#2AA6F2,#67C9FF)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "11px" }}>JL</span>Jamie Lee · 3 yrs<span className="flag warn">77%</span></div>
            </div>
          </div>
        </div>
      </div></div></section>

      <section className="sec" style={{ background: "#FBF3EE", paddingTop: "44px", paddingBottom: "44px" }}><div className="wrap">
        <div className="metricrow reveal">
          <div className="metric"><div className="metricnum"><span className="v" data-to="3500" data-comma="1">0</span><span className="u">+</span></div><div className="metriclbl">Validated tests in the library</div></div>
          <div className="metric"><div className="metricnum"><span className="v" data-to="80">0</span><span className="u">%</span></div><div className="metriclbl">Faster time-to-hire on average</div></div>
          <div className="metric"><div className="metricnum"><span className="v" data-to="45">0</span><span className="u">+</span></div><div className="metriclbl">Live coding languages supported</div></div>
          <div className="metric"><div className="metricnum"><span className="v" data-to="100">0</span><span className="u">+</span></div><div className="metriclbl">Native ATS &amp; HRIS integrations</div></div>
        </div>
      </div></section>

      <section className="sec" id="how"><div className="wrap">
        <div style={{ maxWidth: "680px", margin: "0 auto 52px", textAlign: "center" }}>
          <p className="eyebrow reveal" style={{ justifyContent: "center" }}>How it works<b>.</b></p>
          <h2 className="h2 reveal" style={{ transitionDelay: ".04s" }}>From job opening to hire in five steps</h2>
          <p className="lead reveal" style={{ marginTop: "16px", transitionDelay: ".08s" }}>A clear, supportive process designed to help you launch, score and decide — without confusion or overwhelm.</p>
        </div>
        <div className="hiw">
          <div className="hiwimg reveal">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/features-how.png" alt="Recruiters reviewing a hiring pipeline dashboard" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }} />
            <div className="hiwcta">
              <div>
                <p className="t">Start your free trial now</p>
                <p className="s">Explore tests, question types and scoring — no credit card required.</p>
              </div>
              <Link className="arrow" href="/pricing" aria-label="Get started"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg></Link>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div className="steplist reveal" style={{ width: "100%", transitionDelay: ".14s" }}>
              <div className="stepitem"><div className="stepbadge">1</div><div><h3 className="h3" style={{ fontSize: "17px", marginBottom: "5px" }}>Build your assessment</h3><p className="body" style={{ fontSize: "14px", margin: 0 }}>Choose from 3,500+ validated tests or create custom questions in 13+ formats.</p></div></div>
              <div className="stepitem"><div className="stepbadge">2</div><div><h3 className="h3" style={{ fontSize: "17px", marginBottom: "5px" }}>Invite candidates</h3><p className="body" style={{ fontSize: "14px", margin: 0 }}>Send a branded link to one applicant or your entire pool at once.</p></div></div>
              <div className="stepitem"><div className="stepbadge">3</div><div><h3 className="h3" style={{ fontSize: "17px", marginBottom: "5px" }}>AI scores instantly</h3><p className="body" style={{ fontSize: "14px", margin: 0 }}>Every submission — video, audio, chat and text — is auto-evaluated in real time.</p></div></div>
              <div className="stepitem"><div className="stepbadge">4</div><div><h3 className="h3" style={{ fontSize: "17px", marginBottom: "5px" }}>Collaborate and decide</h3><p className="body" style={{ fontSize: "14px", margin: 0 }}>Share scorecards, compare side-by-side and align as a team.</p></div></div>
              <div className="stepitem"><div className="stepbadge">5</div><div><h3 className="h3" style={{ fontSize: "17px", marginBottom: "5px" }}>Hire with confidence</h3><p className="body" style={{ fontSize: "14px", margin: 0 }}>Push the decision to your ATS and close roles faster on objective evidence.</p></div></div>
            </div>
          </div>
        </div>
      </div></section>

      <section className="sec" id="features" style={{ background: "#FBF3EE" }}><div className="wrap">
        <div style={{ maxWidth: "680px", margin: "0 auto 48px", textAlign: "center" }}>
          <p className="eyebrow reveal" style={{ justifyContent: "center" }}>Core capabilities<b>.</b></p>
          <h2 className="h2 reveal" style={{ transitionDelay: ".04s" }}>Everything hiring teams actually need</h2>
          <p className="lead reveal" style={{ marginTop: "16px", transitionDelay: ".08s" }}>Built for speed, objectivity and a candidate experience worth bragging about.</p>
        </div>
        <div className="bgrid reveal">
          <div className="bcard"><div className="bicon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg></div><h3 className="h3" style={{ fontSize: "18px", marginBottom: "9px" }}>AI candidate insights</h3><p className="body" style={{ fontSize: "14.5px", margin: 0 }}>Full report cards with per-skill breakdowns, global benchmarks, AI-written pros &amp; cons and pipeline trends.</p></div>
          <div className="bcard"><div className="bicon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg></div><h3 className="h3" style={{ fontSize: "18px", marginBottom: "9px" }}>Live coding tests</h3><p className="body" style={{ fontSize: "14.5px", margin: 0 }}>Real-time IDE in 45+ languages — candidates write, run and debug so you see how they think.</p></div>
          <div className="bcard"><div className="bicon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.5 1.5"></path><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7L12 19"></path></svg></div><h3 className="h3" style={{ fontSize: "18px", marginBottom: "9px" }}>Native ATS integration</h3><p className="body" style={{ fontSize: "14.5px", margin: 0 }}>Two-way sync of assessment data with Workday, Greenhouse and 98 more — no middleware.</p></div>
          <div className="bcard"><div className="bicon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg></div><h3 className="h3" style={{ fontSize: "18px", marginBottom: "9px" }}>Custom question types</h3><p className="body" style={{ fontSize: "14.5px", margin: 0 }}>13+ formats: qualifier, audio, video, fill-in-the-blank, coding, Google Docs/Sheets, rating, date, SJT.</p></div>
          <div className="bcard"><div className="bicon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l7 4v6c0 5-3.5 8-7 10-3.5-2-7-5-7-10V6z"></path></svg></div><h3 className="h3" style={{ fontSize: "18px", marginBottom: "9px" }}>Anti-cheating &amp; proctoring</h3><p className="body" style={{ fontSize: "14.5px", margin: 0 }}>Webcam snapshots, IP restriction, tab-switch detection, full-screen enforcement and AI plagiarism scoring.</p></div>
          <div className="bcard"><div className="bicon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M2 12h20"></path><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg></div><h3 className="h3" style={{ fontSize: "18px", marginBottom: "9px" }}>White-label branding</h3><p className="body" style={{ fontSize: "14.5px", margin: 0 }}>Custom domain, logo, colours and email templates — candidates see your brand, not ours.</p></div>
        </div>
      </div></section>

      <section className="sec" id="more"><div className="wrap">
        <div style={{ maxWidth: "680px", margin: "0 auto 48px", textAlign: "center" }}>
          <p className="eyebrow reveal" style={{ justifyContent: "center" }}>Beyond the basics<b>.</b></p>
          <h2 className="h2 reveal" style={{ transitionDelay: ".04s" }}>More ways to assess, verify and hire</h2>
          <p className="lead reveal" style={{ marginTop: "16px", transitionDelay: ".08s" }}>Capabilities most platforms don't have at all — built into every Testlify plan.</p>
        </div>
        <div className="bgrid reveal">
          <div className="bcard"><span className="cardtag">AI Interviews</span><h3 className="h3" style={{ fontSize: "18px", marginBottom: "9px" }}>Conversational AI Interviews</h3><p className="body" style={{ fontSize: "14.5px", margin: "0 0 16px" }}>Assess real-time communication and problem-solving at scale using three formats:</p><div className="chk" style={{ marginBottom: "9px" }}><span className="chki" style={{ width: "20px", height: "20px", borderRadius: "6px" }}><Check w={11} /></span><p className="body" style={{ margin: 0, fontSize: "13.5px", lineHeight: 1.45 }}>Chat AI simulation for written communication roles</p></div><div className="chk" style={{ marginBottom: "9px" }}><span className="chki" style={{ width: "20px", height: "20px", borderRadius: "6px" }}><Check w={11} /></span><p className="body" style={{ margin: 0, fontSize: "13.5px", lineHeight: 1.45 }}>Voice AI with pronunciation insights and fluency scoring</p></div><div className="chk" style={{ marginBottom: 0 }}><span className="chki" style={{ width: "20px", height: "20px", borderRadius: "6px" }}><Check w={11} /></span><p className="body" style={{ margin: 0, fontSize: "13.5px", lineHeight: 1.45 }}>Video AI with confidence and articulation analysis</p></div></div>
          <div className="bcard"><span className="cardtag">Global Hiring</span><h3 className="h3" style={{ fontSize: "18px", marginBottom: "9px" }}>Multilingual Assessment Support</h3><p className="body" style={{ fontSize: "14.5px", margin: "0 0 16px" }}>Run assessments in 16+ languages so every candidate tests in the language they work in. Includes full UI translation and a translatable test library.</p><div className="chk" style={{ marginBottom: "9px" }}><span className="chki" style={{ width: "20px", height: "20px", borderRadius: "6px" }}><Check w={11} /></span><p className="body" style={{ margin: 0, fontSize: "13.5px", lineHeight: 1.45 }}>English, Arabic, Chinese, Dutch, French, German</p></div><div className="chk" style={{ marginBottom: "9px" }}><span className="chki" style={{ width: "20px", height: "20px", borderRadius: "6px" }}><Check w={11} /></span><p className="body" style={{ margin: 0, fontSize: "13.5px", lineHeight: 1.45 }}>Italian, Japanese, Spanish, Russian, Turkish, Korean</p></div><div className="chk" style={{ marginBottom: 0 }}><span className="chki" style={{ width: "20px", height: "20px", borderRadius: "6px" }}><Check w={11} /></span><p className="body" style={{ margin: 0, fontSize: "13.5px", lineHeight: 1.45 }}>CEFR-aligned English tests from A1 to C2</p></div></div>
          <div className="bcard"><span className="cardtag">Role Simulations</span><h3 className="h3" style={{ fontSize: "18px", marginBottom: "9px" }}>Tech stack proficiency</h3><p className="body" style={{ fontSize: "14.5px", margin: "0 0 16px" }}>Go beyond multiple-choice. Test candidates inside the tools they will actually use on the job:</p><div className="chk" style={{ marginBottom: "9px" }}><span className="chki" style={{ width: "20px", height: "20px", borderRadius: "6px" }}><Check w={11} /></span><p className="body" style={{ margin: 0, fontSize: "13.5px", lineHeight: 1.45 }}>Microsoft Excel, Word, PowerPoint</p></div><div className="chk" style={{ marginBottom: "9px" }}><span className="chki" style={{ width: "20px", height: "20px", borderRadius: "6px" }}><Check w={11} /></span><p className="body" style={{ margin: 0, fontSize: "13.5px", lineHeight: 1.45 }}>Google Sheets, Docs, Slides</p></div><div className="chk" style={{ marginBottom: 0 }}><span className="chki" style={{ width: "20px", height: "20px", borderRadius: "6px" }}><Check w={11} /></span><p className="body" style={{ margin: 0, fontSize: "13.5px", lineHeight: 1.45 }}>File upload tasks and AI chat scenarios</p></div></div>
          <div className="bcard"><span className="cardtag">Resume Screening</span><h3 className="h3" style={{ fontSize: "18px", marginBottom: "9px" }}>AI Resume Screening</h3><p className="body" style={{ fontSize: "14.5px", margin: "0 0 16px" }}>Automatically extract and rank candidate details from resumes inside Testlify. Reduces manual screening work and surfaces top-fit profiles before a single test is run.</p><div className="chk" style={{ marginBottom: "9px" }}><span className="chki" style={{ width: "20px", height: "20px", borderRadius: "6px" }}><Check w={11} /></span><p className="body" style={{ margin: 0, fontSize: "13.5px", lineHeight: 1.45 }}>Resume parser (Feb 2026)</p></div><div className="chk" style={{ marginBottom: "9px" }}><span className="chki" style={{ width: "20px", height: "20px", borderRadius: "6px" }}><Check w={11} /></span><p className="body" style={{ margin: 0, fontSize: "13.5px", lineHeight: 1.45 }}>AI resume scoring with Greenhouse integration</p></div><div className="chk" style={{ marginBottom: 0 }}><span className="chki" style={{ width: "20px", height: "20px", borderRadius: "6px" }}><Check w={11} /></span><p className="body" style={{ margin: 0, fontSize: "13.5px", lineHeight: 1.45 }}>Structured candidate profiles, auto-populated</p></div></div>
          <div className="bcard"><span className="cardtag">Proctoring</span><h3 className="h3" style={{ fontSize: "18px", marginBottom: "9px" }}>20+ Anti-Cheating Measures</h3><p className="body" style={{ fontSize: "14.5px", margin: "0 0 16px" }}>The most complete proctoring suite at this price point. Includes:</p><div className="chk" style={{ marginBottom: "9px" }}><span className="chki" style={{ width: "20px", height: "20px", borderRadius: "6px" }}><Check w={11} /></span><p className="body" style={{ margin: 0, fontSize: "13.5px", lineHeight: 1.45 }}>Photo ID verification and face detection</p></div><div className="chk" style={{ marginBottom: "9px" }}><span className="chki" style={{ width: "20px", height: "20px", borderRadius: "6px" }}><Check w={11} /></span><p className="body" style={{ margin: 0, fontSize: "13.5px", lineHeight: 1.45 }}>Talking prohibition and AI assistance detection</p></div><div className="chk" style={{ marginBottom: "9px" }}><span className="chki" style={{ width: "20px", height: "20px", borderRadius: "6px" }}><Check w={11} /></span><p className="body" style={{ margin: 0, fontSize: "13.5px", lineHeight: 1.45 }}>Focus Guard anti-cheat mode and screenshot monitoring</p></div><div className="chk" style={{ marginBottom: 0 }}><span className="chki" style={{ width: "20px", height: "20px", borderRadius: "6px" }}><Check w={11} /></span><p className="body" style={{ margin: 0, fontSize: "13.5px", lineHeight: 1.45 }}>Location tracking and country-based restrictions</p></div></div>
          <div className="bcard"><span className="cardtag">Workflow</span><h3 className="h3" style={{ fontSize: "18px", marginBottom: "9px" }}>Multi-Stage Hiring Workflows</h3><p className="body" style={{ fontSize: "14.5px", margin: "0 0 16px" }}>Run structured, sequential hiring pipelines without manual follow-up:</p><div className="chk" style={{ marginBottom: "9px" }}><span className="chki" style={{ width: "20px", height: "20px", borderRadius: "6px" }}><Check w={11} /></span><p className="body" style={{ margin: 0, fontSize: "13.5px", lineHeight: 1.45 }}>360 Feedback Review from multiple stakeholders</p></div><div className="chk" style={{ marginBottom: "9px" }}><span className="chki" style={{ width: "20px", height: "20px", borderRadius: "6px" }}><Check w={11} /></span><p className="body" style={{ margin: 0, fontSize: "13.5px", lineHeight: 1.45 }}>Auto-invites for sequential assessments</p></div><div className="chk" style={{ marginBottom: "9px" }}><span className="chki" style={{ width: "20px", height: "20px", borderRadius: "6px" }}><Check w={11} /></span><p className="body" style={{ margin: 0, fontSize: "13.5px", lineHeight: 1.45 }}>AI-suggested interview questions per candidate</p></div><div className="chk" style={{ marginBottom: 0 }}><span className="chki" style={{ width: "20px", height: "20px", borderRadius: "6px" }}><Check w={11} /></span><p className="body" style={{ margin: 0, fontSize: "13.5px", lineHeight: 1.45 }}>Weighted scoring to prioritize what matters most</p></div></div>
        </div>
      </div></section>

      <section className="sec" id="reporting" style={{ background: "#FBF3EE" }}><div className="wrap"><div className="split">
        <div className="reveal">
          <p className="eyebrow">Reporting &amp; analytics<b>.</b></p>
          <h2 className="h2" style={{ marginBottom: "20px" }}>Know exactly who to advance, with data</h2>
          <p className="lead" style={{ marginBottom: "24px" }}>AI Insights generates an automatic performance summary for every candidate — scorecards, per-skill breakdowns and suggested follow-up questions, ready before your debrief call.</p>
          <div className="chk"><span className="chki"><Check /></span><p className="body" style={{ margin: 0 }}>See strengths and gaps by skill area.</p></div>
          <div className="chk"><span className="chki"><Check /></span><p className="body" style={{ margin: 0 }}>Rank candidates against global benchmarks.</p></div>
          <div className="chk"><span className="chki"><Check /></span><p className="body" style={{ margin: 0 }}>Compare top applicants instantly.</p></div>
          <div className="chk" style={{ marginBottom: 0 }}><span className="chki"><Check /></span><p className="body" style={{ margin: 0 }}>Improve assessments with question-level analytics.</p></div>
        </div>
        <div className="reveal" style={{ transitionDelay: ".08s" }}>
          <div className="mock">
            <div className="mocktop"><span className="mc" style={{ background: "#FF5F57" }}></span><span className="mc" style={{ background: "#FEBC2E" }}></span><span className="mc" style={{ background: "#28C840" }}></span><span className="mockbar">Candidate report · Senior PM</span></div>
            <div className="mockbody">
              <div className="pline"><span>Priya Ramanathan · Top 4%</span><span className="flag ok">94%</span></div>
              <div className="pline"><span>David Lim · Top 11%</span><span className="flag ok">87%</span></div>
              <div className="pline" style={{ marginBottom: "16px" }}><span>Sara Kowalski · Top 19%</span><span className="flag warn">79%</span></div>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <div><div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", color: "#6C5A5D", marginBottom: "5px" }}><span>Product strategy</span><span style={{ fontWeight: 700, color: "#1A1014" }}>96%</span></div><div style={{ height: "7px", borderRadius: "99px", background: "#F3E7E8", overflow: "hidden" }}><div style={{ height: "100%", width: "96%", background: "linear-gradient(90deg,#F23F44,#FF7A52)" }}></div></div></div>
                <div><div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", color: "#6C5A5D", marginBottom: "5px" }}><span>Data-driven decisions</span><span style={{ fontWeight: 700, color: "#1A1014" }}>91%</span></div><div style={{ height: "7px", borderRadius: "99px", background: "#F3E7E8", overflow: "hidden" }}><div style={{ height: "100%", width: "91%", background: "linear-gradient(90deg,#F23F44,#FF7A52)" }}></div></div></div>
                <div><div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", color: "#6C5A5D", marginBottom: "5px" }}><span>Stakeholder management</span><span style={{ fontWeight: 700, color: "#1A1014" }}>88%</span></div><div style={{ height: "7px", borderRadius: "99px", background: "#F3E7E8", overflow: "hidden" }}><div style={{ height: "100%", width: "88%", background: "linear-gradient(90deg,#F23F44,#FF7A52)" }}></div></div></div>
              </div>
            </div>
          </div>
        </div>
      </div></div></section>

      <section className="sec" id="coding"><div className="wrap"><div className="split">
        <div className="reveal" style={{ order: 2 }}>
          <p className="eyebrow">Live coding<b>.</b></p>
          <h2 className="h2" style={{ marginBottom: "20px" }}>Assess real coding skill, not memorised answers</h2>
          <p className="lead" style={{ marginBottom: "24px" }}>Candidates code in a real-world environment while AI evaluates quality, correctness and performance automatically.</p>
          <div className="chk"><span className="chki"><Check /></span><p className="body" style={{ margin: 0 }}>45+ programming languages supported.</p></div>
          <div className="chk"><span className="chki"><Check /></span><p className="body" style={{ margin: 0 }}>Custom challenges for your tech stack.</p></div>
          <div className="chk"><span className="chki"><Check /></span><p className="body" style={{ margin: 0 }}>AI-powered code evaluation on quality and performance.</p></div>
          <div className="chk" style={{ marginBottom: 0 }}><span className="chki"><Check /></span><p className="body" style={{ margin: 0 }}>Live coding and pair-programming interviews.</p></div>
          <div style={{ marginTop: "26px" }}><Link href="/test-library" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#F23F44", fontWeight: 600 }}>Browse coding tests →</Link></div>
        </div>
        <div className="reveal" style={{ order: 1, transitionDelay: ".08s" }}>
          <div className="mock">
            <div className="mocktop"><span className="mc" style={{ background: "#FF5F57" }}></span><span className="mc" style={{ background: "#FEBC2E" }}></span><span className="mc" style={{ background: "#28C840" }}></span><span className="mockbar">Python · Algorithms</span></div>
            <div className="mockbody" style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: "12.5px", lineHeight: 1.7, color: "#5A4B4E", background: "#FCFAFA" }}>
              <div style={{ color: "#A9999C" }}># Merge two sorted linked lists</div>
              <div><span style={{ color: "#2A6FDB" }}>def</span> <span style={{ color: "#F23F44" }}>merge_sorted</span>(l1, l2):</div>
              <div style={{ paddingLeft: "16px" }}>dummy = head = ListNode(0)</div>
              <div style={{ paddingLeft: "16px" }}><span style={{ color: "#2A6FDB" }}>while</span> l1 <span style={{ color: "#2A6FDB" }}>and</span> l2:</div>
              <div style={{ paddingLeft: "32px" }}><span style={{ color: "#2A6FDB" }}>if</span> l1.val &lt;= l2.val:</div>
              <div style={{ paddingLeft: "48px" }}>head.next, l1 = l1, l1.next</div>
              <div style={{ paddingLeft: "32px" }}><span style={{ color: "#2A6FDB" }}>else</span>:</div>
              <div style={{ paddingLeft: "48px" }}>head.next, l2 = l2, l2.next</div>
              <div style={{ paddingLeft: "32px" }}>head = head.next</div>
              <div style={{ paddingLeft: "16px" }}><span style={{ color: "#2A6FDB" }}>return</span> dummy.next</div>
              <div style={{ marginTop: "8px", color: "#1F9D6B" }}>✓ All 8 test cases passed · O(n+m) · 41ms</div>
            </div>
          </div>
        </div>
      </div></div></section>

      <section className="sec" style={{ background: "#FBF3EE" }}><div className="wrap"><div className="split">
        <div className="reveal">
          <p className="eyebrow">White-label<b>.</b></p>
          <h2 className="h2" style={{ marginBottom: "20px" }}>Your brand. Your experience. No footnotes</h2>
          <p className="lead" style={{ marginBottom: "24px" }}>Testlify disappears completely — candidates interact with your brand from invite email to results page, lifting completion rates and strengthening your employer brand.</p>
          <div className="chk"><span className="chki"><Check /></span><p className="body" style={{ margin: 0 }}>Custom subdomain and branded candidate portal.</p></div>
          <div className="chk"><span className="chki"><Check /></span><p className="body" style={{ margin: 0 }}>Your logo, brand colours and typography throughout.</p></div>
          <div className="chk" style={{ marginBottom: 0 }}><span className="chki"><Check /></span><p className="body" style={{ margin: 0 }}>Custom invite and results email templates.</p></div>
        </div>
        <div className="reveal" style={{ transitionDelay: ".08s" }}>
          <div className="mock">
            <div className="mocktop"><span className="mc" style={{ background: "#FF5F57" }}></span><span className="mc" style={{ background: "#FEBC2E" }}></span><span className="mc" style={{ background: "#28C840" }}></span><span className="mockbar">assessments.acmecorp.com</span></div>
            <div className="mockbody">
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "18px" }}><span style={{ width: "34px", height: "34px", borderRadius: "9px", background: "linear-gradient(135deg,#2A6FDB,#67C9FF)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800 }}>A</span><div><div style={{ fontSize: "14px", fontWeight: 700, color: "#1A1014" }}>Acme Corp</div><div style={{ fontSize: "11.5px", color: "#8A7A7D" }}>Engineering Assessment · 45 minutes</div></div></div>
              <div style={{ fontSize: "15px", fontWeight: 700, color: "#1A1014", marginBottom: "6px" }}>Welcome, Jamie</div>
              <p className="body" style={{ fontSize: "13px", margin: "0 0 18px" }}>This assessment helps us understand your engineering approach. Take your time — there's no trick to it.</p>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#2A6FDB", color: "#fff", fontWeight: 600, fontSize: "13.5px", padding: "11px 20px", borderRadius: "11px" }}>Begin assessment →</span>
            </div>
          </div>
        </div>
      </div></div></section>

      <section className="sec" id="compare"><div className="wrap">
        <div style={{ maxWidth: "680px", margin: "0 auto 44px", textAlign: "center" }}>
          <p className="eyebrow reveal" style={{ justifyContent: "center" }}>Compare<b>.</b></p>
          <h2 className="h2 reveal" style={{ transitionDelay: ".04s" }}>Not all tools are created equal</h2>
          <p className="lead reveal" style={{ marginTop: "16px", transitionDelay: ".08s" }}>How Testlify stacks up on the features that move hiring outcomes.</p>
        </div>
        <div className="cmpwrap reveal">
          <table className="cmp">
            <thead><tr><th>Feature</th><th className="us">Testlify</th><th>HackerRank</th><th>Codility</th></tr></thead>
            <tbody>
              <tr><td className="feat">AI auto-scoring (video + text)</td><td className="us">All plans</td><td>Not available</td><td>Not available</td></tr>
              <tr><td className="feat">Test library size</td><td className="us">3,500+ across all roles</td><td>7,500+ questions, dev only</td><td>1,100+ coding tasks only</td></tr>
              <tr><td className="feat">Non-technical role coverage</td><td className="us">4,500+ roles, 50+ industries</td><td>Dev and tech only</td><td>Dev and tech only</td></tr>
              <tr><td className="feat">Async and live video interviews</td><td className="us">All plans</td><td>Live only (CodePair)</td><td>Live only (CodeLive)</td></tr>
              <tr><td className="feat">Advanced proctoring</td><td className="us">All plans — 20+ measures</td><td>Tab-switch, webcam, plagiarism</td><td>Anti-plagiarism only</td></tr>
              <tr><td className="feat">White-label branding</td><td className="us">All plans</td><td>Enterprise only</td><td>Enterprise only</td></tr>
              <tr><td className="feat">Native ATS integrations</td><td className="us">100+</td><td>40+</td><td>20+</td></tr>
              <tr><td className="feat">Multilingual assessments (UI)</td><td className="us">14 languages</td><td>English + Canadian French only</td><td>10 languages</td></tr>
              <tr><td className="feat">Free trial — no card required</td><td className="us">7-day free trial</td><td>No free trial</td><td>Demo only</td></tr>
              <tr><td className="feat">Pricing model</td><td className="us">From $139/mo, no annual lock-in</td><td>From $165/mo (annual billed)</td><td>From $1,200/yr (annual only)</td></tr>
            </tbody>
          </table>
        </div>
      </div></section>

      <section className="sec" id="proctoring" style={{ background: "#FBF3EE" }}><div className="wrap">
        <div style={{ maxWidth: "680px", margin: "0 auto 48px", textAlign: "center" }}>
          <p className="eyebrow reveal" style={{ justifyContent: "center" }}>Anti-cheating &amp; proctoring<b>.</b></p>
          <h2 className="h2 reveal" style={{ transitionDelay: ".04s" }}>Results you can actually defend</h2>
          <p className="lead reveal" style={{ marginTop: "16px", transitionDelay: ".08s" }}>Multi-layer proctoring ships on every plan, so every score reflects genuine ability.</p>
        </div>
        <div className="hiw" style={{ gridTemplateColumns: "1.08fr .92fr" }}>
          <div className="hiwimg reveal" style={{ order: 2 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/features-proctoring.png" alt="Candidate taking a proctored assessment with face verification, plagiarism and geo-lock active" style={{ width: "557px", height: "613px", objectFit: "cover", objectPosition: "top", display: "block", left: "0px", top: "-104px", position: "absolute" }} />
          </div>
          <div style={{ display: "flex", alignItems: "center", order: 1 }}>
            <div className="steplist reveal" style={{ width: "100%", transitionDelay: ".14s" }}>
              <div className="stepitem"><div className="stepbadge"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg></div><div><h3 className="h3" style={{ fontSize: "17px", marginBottom: "5px" }}>Webcam snapshot proctoring</h3><p className="body" style={{ fontSize: "14px", margin: 0 }}>Random photo captures with AI presence verification to flag unattended sessions.</p></div></div>
              <div className="stepitem"><div className="stepbadge"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg></div><div><h3 className="h3" style={{ fontSize: "17px", marginBottom: "5px" }}>IP &amp; location restriction</h3><p className="body" style={{ fontSize: "14px", margin: 0 }}>Lock assessments to specific IP ranges or geographies to prevent proxy submissions.</p></div></div>
              <div className="stepitem"><div className="stepbadge"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><line x1="2" y1="9" x2="22" y2="9"></line><line x1="6" y1="6.5" x2="6.01" y2="6.5"></line><line x1="9" y1="6.5" x2="9.01" y2="6.5"></line></svg></div><div><h3 className="h3" style={{ fontSize: "17px", marginBottom: "5px" }}>Tab-switch detection</h3><p className="body" style={{ fontSize: "14px", margin: 0 }}>Full-screen enforcement with real-time alerts and automatic logging when candidates navigate away.</p></div></div>
              <div className="stepitem"><div className="stepbadge"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l7 4v6c0 5-3.5 8-7 10-3.5-2-7-5-7-10V6z"></path><path d="M9 12l2 2 4-4"></path></svg></div><div><h3 className="h3" style={{ fontSize: "17px", marginBottom: "5px" }}>AI plagiarism &amp; GPT detection</h3><p className="body" style={{ fontSize: "14px", margin: 0 }}>Detects copy-paste patterns, AI-generated text and shared answers across your pipeline.</p></div></div>
            </div>
          </div>
        </div>
      </div></section>

      <section className="sec" style={{ background: "#1A1014" }}><div className="wrap" style={{ maxWidth: "960px", textAlign: "center" }}>
        <p className="eyebrow reveal" style={{ justifyContent: "center", color: "#C9B9BC" }}>Hear from our clients<b>.</b></p>
        <p className="reveal" style={{ fontSize: "26px", lineHeight: 1.5, fontWeight: 600, color: "#fff", margin: "18px 0 26px", transitionDelay: ".04s" }}>&quot;The biggest change was moving from a process we were managing to a <span className="acc">system we could trust</span>. Now we hire faster, develop smarter, and make decisions backed by real data.&quot;</p>
        <p className="reveal" style={{ color: "#fff", fontWeight: 700, margin: 0, transitionDelay: ".08s" }}>Andrei Ivanov</p>
        <p className="reveal" style={{ color: "#A9999C", fontSize: "14px", margin: "4px 0 40px", transitionDelay: ".1s" }}>Training Co-ordinator, inDrive</p>
        <div className="statgrid countup reveal" style={{ gridTemplateColumns: "repeat(3,1fr)", maxWidth: "640px", margin: "0 auto", transitionDelay: ".12s" }}>
          <div><p className="statnum"><span className="v" data-to="67">0</span>%</p><p className="statlbl" style={{ color: "#C9B9BC" }}>Faster time-to-hire</p></div>
          <div><p className="statnum"><span className="v" data-to="4">0</span>x</p><p className="statlbl" style={{ color: "#C9B9BC" }}>Recruiter efficiency</p></div>
          <div><p className="statnum"><span className="v" data-to="82">0</span>%</p><p className="statlbl" style={{ color: "#C9B9BC" }}>More L&amp;D participation</p></div>
        </div>
      </div></section>

      <section className="sec" id="integrations" style={{ background: "#FBF3EE" }}><div className="wrap">
        <div style={{ maxWidth: "680px", margin: "0 auto 44px", textAlign: "center" }}>
          <p className="eyebrow reveal" style={{ justifyContent: "center" }}>Integrations<b>.</b></p>
          <h2 className="h2 reveal" style={{ transitionDelay: ".04s" }}>Works with 100+ ATS &amp; HRIS tools</h2>
          <p className="lead reveal" style={{ marginTop: "16px", transitionDelay: ".08s" }}>Streamline hiring from assessment to onboarding — sync candidate data, automate workflows and stay in your existing stack.</p>
        </div>
        <div className="intg-grid reveal">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <div className="intg-tile"><img src="https://testlify.com/wp-content/uploads/2024/09/Workday_Inc.-Logo.wine_-1-2048x1365-2.png" alt="Workday" /></div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <div className="intg-tile"><img src="https://testlify.com/wp-content/uploads/2023/03/629a0bbcb04c5ae587c411c2-1-1.png" alt="Greenhouse" /></div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <div className="intg-tile"><img src="https://testlify.com/wp-content/uploads/2025/10/Lever_Employ_Logo_Horizontal_Turquoise_Black-300x43-1.png?wsr" alt="Lever" /></div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <div className="intg-tile"><img src="https://testlify.com/wp-content/uploads/2025/10/SR-SAP-Logo.svg" alt="SmartRecruiters" /></div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <div className="intg-tile"><img src="https://testlify.com/wp-content/uploads/2024/09/BambooHR-Logo-1-2048x1152-2.png" alt="BambooHR" /></div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <div className="intg-tile"><img src="https://testlify.com/wp-content/uploads/2025/10/Successfactors-Logo-Vector.svg-.png?wsr" alt="SuccessFactors" /></div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <div className="intg-tile"><img src="https://testlify.com/wp-content/uploads/2025/10/logo.svg" alt="UKG" /></div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <div className="intg-tile"><img src="https://testlify.com/wp-content/uploads/2025/10/681b1f74457e6f968fdaaa8d_MASTER_RECRUITEE_COLOUR_PREFERRED-LOGO-TO-USE-1024x313.png?wsr" alt="Recruitee" /></div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <div className="intg-tile"><img src="https://testlify.com/wp-content/uploads/2024/08/zoho-recruit-logo-1.png" alt="Zoho Recruit" /></div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <div className="intg-tile"><img src="https://testlify.com/wp-content/uploads/2025/10/JazzHR_Employ_Logo_Horizontal_Purple_Black-1024x131.png?wsr" alt="JazzHR" /></div>
        </div>
        <div className="reveal" style={{ textAlign: "center", marginTop: "26px" }}><Link href="/integrations" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#F23F44", fontWeight: 600 }}>View all integrations →</Link></div>
      </div></section>

      <SecuritySection
        eyebrow="Security & compliance"
        heading="Enterprise-grade security by default"
        sub="SOC 2 Type II, ISO 27001 and GDPR compliance, granular admin controls and full audit trails keep your assessment data protected at every step."
      />

      <section className="sec" style={{ background: "#FBF3EE" }}><div className="wrap" style={{ maxWidth: "840px" }}>
        <div style={{ textAlign: "center", marginBottom: "44px" }}>
          <p className="eyebrow reveal" style={{ justifyContent: "center" }}>FAQ<b>.</b></p>
          <h2 className="h2 reveal" style={{ transitionDelay: ".04s" }}>Frequently asked questions</h2>
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
