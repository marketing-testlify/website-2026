"use client";

import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import CtaButton from "@/components/CtaButton";
import CtaBand from "@/components/CtaBand";

const COMPS = [
  { n: "Testlify vs Testwise: Comparison guide for recruiters", img: "https://testlify.com/wp-content/uploads/2026/03/Testlify-vs-GL-Education.png", read: "14 min read", date: "18 June 2026", excerpt: "Compare Testlify vs Testwise across features, integrations, candidate experience, and pricing." },
  { n: "Testlify vs Symphony Talent: Which Is Better in 2026?", img: "https://testlify.com/wp-content/uploads/2026/01/Testlify-vs-Symphony-Talent.png", read: "9 min read", date: "3 July 2026", excerpt: "Discover which talent assessment platform: Testlify or Symphony Talent best suits your hiring needs by reading our expert comparison blog." },
  { n: "Testlify vs TestTrick: Which skills assessment platform is best for recruiters?", img: "https://testlify.com/wp-content/uploads/2025/12/Testlify-vs-TestTrick-1.png", read: "11 min read", date: "18 June 2026", excerpt: "Explore our in-depth comparison blog to find out whether Testlify or TestTrick is the right skills assessment platform for your hiring goals." },
  { n: "Testlify vs CodeSignal: Which Talent Assessment Platform is Best for You?", img: "https://testlify.com/wp-content/uploads/2025/10/Testlify-vs-CodeSignal.png", read: "11 min read", date: "18 June 2026", excerpt: "Explore our expert comparison article to find out which skills assessment platform: Testlify or CodeSignal best aligns with your hiring needs." },
  { n: "Testlify vs. Equip: Which Skills Assessment Platform is Best for HR Teams?", img: "https://testlify.com/wp-content/uploads/2025/09/Testlify-vs-Equip.png", read: "11 min read", date: "18 June 2026", excerpt: "Testlify vs. Equip: Discover which skills assessment platform best suits your hiring needs." },
  { n: "Testlify vs. Harver: Which Skills Assessment Platform is Best for HR Teams?", img: "https://testlify.com/wp-content/uploads/2025/09/Testlify-vs-Harver.png", read: "11 min read", date: "18 June 2026", excerpt: "Testlify vs. Harver: Discover which skills assessment platform best suits your hiring needs." },
  { n: "Testlify vs. Talview: Which Skills Assessment Platform is Best for HR Teams?", img: "https://testlify.com/wp-content/uploads/2025/09/Testlify-vs-Talview.png", read: "10 min read", date: "18 June 2026", excerpt: "Testlify vs. Talview: Discover which skills assessment platform best suits your hiring needs." },
  { n: "Testlify vs. Cangrade: Which Skills Assessment Platform is Best for HR Teams?", img: "https://testlify.com/wp-content/uploads/2025/09/Testlify-vs-Cangrade.png", read: "11 min read", date: "18 June 2026", excerpt: "Testlify vs. Cangrade: Discover which skills assessment platform best suits your hiring needs." },
  { n: "Testlify vs Test Partnership: Comparison Guide for HR Teams", img: "https://testlify.com/wp-content/uploads/2025/09/Testlify-vs-Test-Partnership.png", read: "9 min read", date: "6 July 2026", excerpt: "Testlify vs. Test Partnership: Discover which skills assessment platform best suits your hiring needs." },
  { n: "Testlify vs Alva Labs: Which Skills Assessment Platform Wins in 2026?", img: "https://testlify.com/wp-content/uploads/2025/09/Testlify-vs-Alva-Labs.png", read: "8 min read", date: "2 July 2026", excerpt: "Testlify vs. Alva Labs: Discover which skills assessment platform best suits your hiring needs." },
  { n: "Testlify vs. Pixonality: Which Skills Assessment Platform is Best for HR Teams?", img: "https://testlify.com/wp-content/uploads/2025/09/Testlify-vs-Pixonality.png", read: "12 min read", date: "18 June 2026", excerpt: "Testlify vs. Pixonality: Discover which skills assessment platform best suits your hiring needs." },
  { n: "Testlify vs. Perspect AI: Which Skills Assessment Platform is Best for HR Teams?", img: "https://testlify.com/wp-content/uploads/2025/09/Testlify-vs-PerspectAI.png", read: "12 min read", date: "18 June 2026", excerpt: "Testlify vs. Perspect AI: Discover which skills assessment platform best suits your hiring needs." },
  { n: "Testlify vs. Evalgator: Which Skills Assessment Platform is Best for HR Teams?", img: "https://testlify.com/wp-content/uploads/2025/09/Testlify-vs-Evalgator.png", read: "12 min read", date: "18 June 2026", excerpt: "Testlify vs. Evalgator: Discover which skills assessment platform best suits your hiring needs." },
  { n: "Testlify vs. Peoplogica Skills: Detailed comparison", img: "https://testlify.com/wp-content/uploads/2025/09/Testlify-vs-Peoplogica-Skills.png", read: "16 min read", date: "24 July 2026", excerpt: "Testlify vs. Peoplogica Skills: Discover which skills assessment platform best suits your hiring needs." },
  { n: "Testlify vs. Predictive Index: Which Skills Assessment Platform is Best for HR Teams?", img: "https://testlify.com/wp-content/uploads/2025/09/Testlify-vs-Predictve-Index.png", read: "13 min read", date: "18 June 2026", excerpt: "Testlify vs. Predictive Index: Discover which skills assessment platform best suits your hiring needs." },
  { n: "Testlify vs. Sova: Which Skills Assessment Platform is Best for HR Teams?", img: "https://testlify.com/wp-content/uploads/2025/09/Testlify-vs-Sova.png", read: "12 min read", date: "18 June 2026", excerpt: "Testlify vs. Sova: Discover which skills assessment platform best suits your hiring needs." },
  { n: "Testlify vs Glider AI: Best Skills Assessment Platform 2026", img: "https://testlify.com/wp-content/uploads/2025/09/Testlify-vs.-Glider-AI.png", read: "7 min read", date: "5 July 2026", excerpt: "Testlify vs. Glider AI: Discover which skills assessment platform best suits your hiring needs." },
  { n: "Testlify vs. Criteria Corp: Which Skills Assessment Platform is Best for HR Teams?", img: "https://testlify.com/wp-content/uploads/2025/08/Testlify-vs-Criteria-Corp.png", read: "13 min read", date: "18 June 2026", excerpt: "Testlify vs. Criteria Corp: Discover which skills assessment platform best suits your hiring needs." },
  { n: "Testlify vs. WeCP: Which Skills Assessment Platform is Best for HR Teams?", img: "https://testlify.com/wp-content/uploads/2025/08/Testlify-vs-WeCP.png", read: "12 min read", date: "25 June 2026", excerpt: "Testlify vs. WeCP: Discover which skills assessment platform best suits your hiring needs." },
  { n: "Testlify vs. Xobin: Which Skills Assessment Platform is Best for HR Teams?", img: "https://testlify.com/wp-content/uploads/2025/08/Testlify-vs-Xobin.png", read: "13 min read", date: "18 June 2026", excerpt: "Testlify vs. Xobin: Discover which skills assessment platform best suits your hiring needs." },
  { n: "Testlify vs. Saville Assessment: Which Platform is Best for HR Teams?", img: "https://testlify.com/wp-content/uploads/2025/08/Testlify-vs-Saville.png", read: "12 min read", date: "18 June 2026", excerpt: "Testlify vs. Saville: Discover which skills assessment platform best suits your hiring needs." },
  { n: "Testlify vs Talogy: Skills Assessment Platform Comparison", img: "https://testlify.com/wp-content/uploads/2025/08/Testlify-vs-Talogy.png", read: "8 min read", date: "11 July 2026", excerpt: "Testlify vs. Talogy: Discover which skills assessment platform best suits your hiring needs." },
  { n: "Testlify vs. Hire Success: Which Skills Assessment Platform is Best for HR Teams?", img: "https://testlify.com/wp-content/uploads/2025/08/Testlify-vs-Hire-Success.png", read: "12 min read", date: "18 June 2026", excerpt: "Testlify vs. Hire Success: Discover which skills assessment platform best suits your hiring needs." },
  { n: "Testlify vs. Testgrid: Which Skills Assessment Platform is Best for HR Teams?", img: "https://testlify.com/wp-content/uploads/2025/08/Testlify-vs-TestGrid-1.png", read: "12 min read", date: "18 June 2026", excerpt: "Testlify vs. Testgrid: Discover which skills assessment platform best suits your hiring needs." },
  { n: "Testlify vs. Testello: Which Skills Assessment Platform is Best for HR Teams?", img: "https://testlify.com/wp-content/uploads/2025/08/Testlify-vs-Testello.png", read: "12 min read", date: "18 June 2026", excerpt: "Testlify vs. Testello: Discover which skills assessment platform best suits your hiring needs." },
  { n: "Testlify vs. TalentLyft: Which Skills Assessment Platform is Best for HR Teams?", img: "https://testlify.com/wp-content/uploads/2025/08/Testlify-vs-Talentlyft.png", read: "13 min read", date: "18 June 2026", excerpt: "Testlify vs. TalentLyft: Discover which skills assessment platform best suits your hiring needs." },
  { n: "Testlify vs. Skillmeter: Which Skills Assessment Platform is Best for HR Teams?", img: "https://testlify.com/wp-content/uploads/2025/08/Testlify-vs-Skillmeter.png", read: "11 min read", date: "18 June 2026", excerpt: "Testlify vs. Skillmeter: Discover which skills assessment platform best suits your hiring needs." },
  { n: "Testlify vs. Talentate: Which Skills Assessment Platform is Best for HR Teams?", img: "https://testlify.com/wp-content/uploads/2025/08/Testlify-vs-Talentate.png", read: "11 min read", date: "18 June 2026", excerpt: "Testlify vs. Talentate: Discover which skills assessment platform best suits your hiring needs." },
  { n: "Testlify vs. TalentLens: Which Skills Assessment Platform is Best for HR Teams?", img: "https://testlify.com/wp-content/uploads/2025/08/Testlify-vs-TalentLens.png", read: "12 min read", date: "18 June 2026", excerpt: "Testlify vs. TalentLens: Discover which skills assessment platform best suits your hiring needs." },
  { n: "Testlify vs. TalentMesh: Which Skills Assessment Platform is Best for HR Teams?", img: "https://testlify.com/wp-content/uploads/2025/08/Testlify-vs-TalentMesh-1.png", read: "11 min read", date: "18 June 2026", excerpt: "Testlify vs. TalentMesh: Discover which skills assessment platform best suits your hiring needs." },
];

const css = `
*{box-sizing:border-box;}
html{scroll-behavior:smooth;}
body{margin:0;font-family:'Poppins',sans-serif;-webkit-font-smoothing:antialiased;color:#1A1014;background:#fff;}
a{text-decoration:none;color:inherit;}
a:hover{color:#F23F44;}
.cp-wrap{max-width:1240px;margin:0 auto;padding:0 28px;}
.reveal{opacity:0;transform:translateY(20px);transition:opacity .6s cubic-bezier(.2,.7,.2,1),transform .6s cubic-bezier(.2,.7,.2,1);}
.reveal.in{opacity:1;transform:none;}
.cp-eyebrow{font-size:13px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:#8A7A7D;margin:0 0 16px;}
.cp-eyebrow b{color:#F23F44;font-weight:700;}
.cp-crumb{font-size:13px;color:#8A7A7D;display:flex;gap:8px;align-items:center;justify-content:center;margin-bottom:18px;}
.cp-crumb a:hover{color:#F23F44;}
.cp-hero{position:relative;overflow:hidden;padding:62px 28px 44px;background:radial-gradient(1000px 460px at 50% -12%,#FFF0EE 0%,rgba(255,240,238,0) 62%),#fff;text-align:center;}
.cp-h1{font-size:46px;line-height:1.08;font-weight:800;letter-spacing:-1.4px;margin:0;}
.cp-h1 em{font-style:normal;color:#F23F44;}
.cp-sub{font-size:18px;line-height:1.62;color:#5A4B4E;margin:20px auto 0;max-width:660px;}
.cp-btns{display:flex;gap:12px;justify-content:center;margin-top:28px;flex-wrap:wrap;}
.cp-btn{border-radius:12px;padding:14px 26px;font-size:15px;font-weight:700;transition:transform .2s,box-shadow .2s;}
.cp-btn.pri{background:#F23F44;color:#fff;}
.cp-btn.pri:hover{transform:translateY(-2px);box-shadow:0 14px 30px rgba(242,63,68,.28);color:#fff;}
.cp-btn.gh{border:1.5px solid #F0E2E3;color:#1A1014;}
.cp-btn.gh:hover{transform:translateY(-2px);border-color:#FBD0D1;box-shadow:0 14px 30px rgba(110,11,14,.10);}
.cp-search{display:flex;align-items:center;gap:11px;max-width:520px;margin:0 auto 22px;background:#fff;border:1.5px solid #F0E2E3;border-radius:14px;padding:13px 18px;box-shadow:0 12px 30px rgba(110,11,14,.07);transition:border-color .2s,box-shadow .2s;}
.cp-search:focus-within{border-color:#FBD0D1;box-shadow:0 12px 34px rgba(242,63,68,.14);}
.cp-search svg{color:#B29A9E;flex:none;}
.cp-search input{border:0;outline:0;font-family:inherit;font-size:16px;color:#1A1014;background:transparent;width:100%;}
.cp-search input::placeholder{color:#B29A9E;}
.cp-btns .ctabtn .cta-play{width:24px!important;height:24px!important;}
.cp-btns .ctabtn.v-primary,.cp-btns .ctabtn.v-light{border:1.5px solid transparent!important;}
.cp-sec{padding:52px 28px 90px;}
.cp-count{font-size:13.5px;color:#8A7A7D;font-weight:500;margin:0 0 30px;text-align:center;}
.cp-count b{color:#F23F44;font-weight:700;}
.cp-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;}
@property --bang{syntax:'<angle>';initial-value:0deg;inherits:false;}
@keyframes runborder{to{--bang:360deg;}}
.cp-card{position:relative;display:flex;flex-direction:column;background:#fff;border:1px solid #EFE2E3;border-radius:20px;overflow:hidden;transition:box-shadow .3s,border-color .3s;}
.cp-card::before{content:'';position:absolute;inset:0;z-index:2;border-radius:20px;padding:1.8px;background:conic-gradient(from var(--bang),transparent 0deg,#FF7A52 35deg,#F23F44 80deg,transparent 150deg,transparent 360deg);-webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask-composite:exclude;opacity:0;pointer-events:none;}
.cp-img,.cp-body{position:relative;z-index:1;}
.cp-card:hover{transform:translateY(-4px);box-shadow:0 22px 46px rgba(110,11,14,.10);}
.cp-card:hover::before{opacity:1;animation:runborder 2.4s linear infinite;}
.cp-img{position:relative;aspect-ratio:16/9;overflow:hidden;background:#FBF3EE center/cover no-repeat;transition:transform .55s cubic-bezier(.2,.7,.3,1);}
.cp-card:hover .cp-img{transform:scale(1.06);}
.cp-body{padding:22px 22px 24px;display:flex;flex-direction:column;flex:1;}
.cp-cat{font-size:11px;font-weight:700;letter-spacing:.07em;text-transform:uppercase;color:#F23F44;margin:0 0 11px;}
.cp-title{font-size:17.5px;font-weight:700;letter-spacing:-.3px;line-height:1.32;margin:0 0 12px;color:#1A1014;}
.cp-exc{font-size:14px;color:#6A5A5D;line-height:1.55;margin:0 0 18px;}
.cp-meta{font-size:12.5px;color:#9A878A;margin-top:auto;display:flex;gap:8px;align-items:center;flex-wrap:wrap;}
.cp-empty{text-align:center;padding:60px 20px;color:#8A7A7D;font-size:16px;}
.cp-empty b{color:#1A1014;}
@media(max-width:1000px){.cp-grid{grid-template-columns:repeat(2,1fr);}}
@media(max-width:600px){.cp-grid{grid-template-columns:1fr;}}
@media(max-width:480px){.cp-h1{font-size:32px;}.cp-hero{padding:44px 22px 32px;}}
h1,h2,h3,h4,.cp-h1,.cp-eyebrow,.cp-name{text-wrap:balance;}p,li,.cp-sub{text-wrap:pretty;}/*om-balance-rule*/
`;

export default function AlternativesPage() {
  const [query, setQuery] = useState("");

  const q = query.trim().toLowerCase();
  const comps = COMPS.filter((c) => !q || c.n.toLowerCase().includes(q));
  const isEmpty = comps.length === 0;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <SiteHeader
        announcement="Comparing assessment platforms? See how Testlify stacks up — no annual contract, 3,500+ tests"
        announcementCta="Compare now"
        homeHref="/"
      />

      <section className="cp-hero">
        <div className="cp-wrap" style={{ maxWidth: 820 }}>
          <p className="cp-eyebrow reveal">
            Competitors<b>.</b>
          </p>
          <h1 className="cp-h1 reveal">
            A close look at the <em>alternatives</em>
          </h1>
          <p className="cp-sub reveal">
            Let&apos;s delve into the competitors and analyze their strengths and weaknesses in comparison to Testlify.
            While some competitors may offer unique features, they fall short in other areas — making Testlify the
            superior choice for organizations seeking a top-notch testing and interviewing solution.
          </p>
          <div className="cp-btns reveal">
            <CtaButton label="Try for free" href="https://app.testlify.com/register" variant="primary" size="lg" icon="arrow" magnetic />
            <CtaButton label="Book a demo" href="https://hs.testlify.com/meetings/testlify/demo" variant="secondary" size="lg" icon="play" />
          </div>
        </div>
      </section>

      <section className="cp-sec">
        <div className="cp-wrap">
          {isEmpty && (
            <div className="cp-empty">
              No comparison matches &ldquo;<b>{query}</b>&rdquo;. Try another name.
            </div>
          )}
          <div className="cp-search reveal">
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="7"></circle>
              <path d="M21 21l-4.3-4.3"></path>
            </svg>
            <input
              type="text"
              placeholder="Search competitor comparisons…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div className="cp-grid reveal">
            {comps.map((c) => (
              <a className="cp-card" href="/alternatives-detail" key={c.n}>
                <div
                  className="cp-img"
                  role="img"
                  aria-label={c.n}
                  style={{ backgroundImage: `url("${c.img}")` }}
                ></div>
                <div className="cp-body">
                  <p className="cp-cat">Competitor Comparisons</p>
                  <h3 className="cp-title">{c.n}</h3>
                  <p className="cp-exc">{c.excerpt}</p>
                  <div className="cp-meta">
                    <span>{c.read}</span>
                    <span>·</span>
                    <span>{c.date}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
