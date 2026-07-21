import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import CtaButton from "@/components/CtaButton";
import CtaBand from "@/components/CtaBand";
import FAQ from "@/components/FAQ";
import SecuritySection from "@/components/SecuritySection";
import Recognition from "@/components/Recognition";
import Testimonials from "@/components/Testimonials";

const css = `
*{box-sizing:border-box;}
.wrap{max-width:1240px;margin:0 auto;padding:0 28px;}
.sec{padding:96px 28px;}
.eyebrow{font-size:12.5px;font-weight:600;letter-spacing:.16em;text-transform:uppercase;color:#8A7A7D;margin:0 0 18px;}
.eyebrow b{color:#F23F44;font-weight:600;}
.h1{font-size:60px;line-height:1.05;font-weight:800;letter-spacing:-2px;margin:0;color:#1A1014;}
.h2{font-size:42px;line-height:1.08;font-weight:800;letter-spacing:-1.4px;margin:0;color:#1A1014;}
.h3{font-size:22px;line-height:1.25;font-weight:700;letter-spacing:-.4px;margin:0;color:#1A1014;}
.lead{font-size:19px;line-height:1.6;color:#5A4B4E;font-weight:400;}
.body{font-size:16px;line-height:1.66;color:#5A4B4E;}
.muted{color:#8A7A7D;}
.acc{color:#F23F44;}
.plabel{font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#A9999C;}
@keyframes marquee{0%{transform:translateX(0);}100%{transform:translateX(-50%);}}
.mqword{font-size:24px;font-weight:700;color:#C9B9BC;letter-spacing:-.5px;white-space:nowrap;}
.ctabtn .cta-play{width:24px !important;height:24px !important;}
.ctabtn.v-primary,.ctabtn.v-light{border:1.5px solid transparent !important;}
/* hero */
.hero{padding:72px 28px 88px;background:radial-gradient(1100px 540px at 78% 6%,#FFF0EE 0%,rgba(255,240,238,0) 60%),#fff;position:relative;overflow:hidden;}
.herogrid{display:grid;grid-template-columns:1.02fr 1.1fr;gap:60px;align-items:center;}
.pill{display:inline-flex;align-items:center;gap:9px;background:#fff;border:1px solid #F4D9DA;border-radius:999px;padding:7px 15px 7px 8px;font-size:13px;font-weight:600;color:#A8323A;box-shadow:0 6px 16px rgba(110,11,14,.06);}
.pilltag{background:#F23F44;color:#fff;font-size:11px;font-weight:700;letter-spacing:.04em;padding:3px 9px;border-radius:999px;}
.heroctas{display:flex;align-items:center;gap:14px;flex-wrap:wrap;margin-top:30px;}
.trust{display:flex;align-items:center;gap:13px;flex-wrap:wrap;font-size:13.5px;color:#8A7A7D;font-weight:600;margin-top:26px;}
.dot{width:4px;height:4px;border-radius:50%;background:#D9C7C9;}
/* mock */
.mock{background:#fff;border:1px solid #F0E2E3;border-radius:20px;box-shadow:0 40px 90px rgba(110,11,14,.16);overflow:hidden;}
.mocktop{display:flex;align-items:center;gap:8px;padding:13px 16px;border-bottom:1px solid #F4ECEC;background:#FCFAFA;}
.mc{width:11px;height:11px;border-radius:50%;}
.mockbar{margin-left:12px;flex:1;height:26px;border-radius:8px;background:#F3EAEA;display:flex;align-items:center;padding:0 12px;font-size:11.5px;color:#A9999C;font-weight:500;}
.mockbody{padding:20px;}
.scanhead{display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;}
.rowc{display:flex;align-items:center;gap:13px;padding:12px 14px;border:1px solid #F1E6E7;border-radius:14px;margin-bottom:10px;background:#fff;}
.rowc.top{border-color:#FBC9CB;box-shadow:0 14px 30px rgba(242,63,68,.12);background:linear-gradient(180deg,#FFF8F8,#fff);}
.av{width:38px;height:38px;border-radius:50%;flex:none;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;color:#fff;}
.rcname{font-size:14px;font-weight:700;color:#1A1014;line-height:1.2;}
.rcrole{font-size:11.5px;color:#9A878A;font-weight:500;}
.score{margin-left:auto;display:flex;align-items:center;gap:12px;}
.scorenum{font-size:18px;font-weight:800;letter-spacing:-.5px;}
.fit{font-size:10.5px;font-weight:700;letter-spacing:.05em;padding:4px 9px;border-radius:99px;}
.fit.hi{background:#EAF8F0;color:#1F9D6B;}
.fit.md{background:#FFF4E6;color:#C7791B;}
.fit.lo{background:#F3EAEA;color:#9A878A;}
.matchtag{position:absolute;top:-14px;right:30px;background:#1A1014;color:#fff;font-size:12.5px;font-weight:600;padding:9px 15px;border-radius:12px;box-shadow:0 16px 34px rgba(26,16,20,.30);display:flex;align-items:center;gap:8px;z-index:4;}
.matchtag i{width:7px;height:7px;border-radius:50%;background:#3DDC84;display:inline-block;box-shadow:0 0 0 4px rgba(61,220,132,.2);}
/* logos */
.logos{display:flex;align-items:center;justify-content:center;flex-wrap:wrap;gap:46px;}
.logos img{height:26px;filter:grayscale(1);opacity:.62;}
.g2chip{display:inline-flex;align-items:center;gap:10px;background:#fff;border:1px solid #F0E2E3;border-radius:999px;padding:8px 16px;font-size:13px;font-weight:700;color:#1A1014;box-shadow:0 8px 18px rgba(110,11,14,.05);}
/* benefits */
.bgrid{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;}
.bcard{background:#fff;border:1px solid #F2E6E7;border-radius:18px;padding:28px 24px;transition:transform .3s cubic-bezier(.2,.7,.3,1),border-color .3s,box-shadow .3s;}
.bcard:hover{transform:translateY(-4px);border-color:#FBD0D1;box-shadow:0 16px 34px rgba(110,11,14,.10);}
.bicon{width:48px;height:48px;border-radius:14px;background:#FFF0F0;color:#F23F44;display:flex;align-items:center;justify-content:center;margin-bottom:20px;}
/* steps */
.split{display:grid;grid-template-columns:1.02fr 1.05fr;gap:64px;align-items:center;}
.chk{display:flex;gap:12px;align-items:flex-start;}
.chki{flex:none;width:24px;height:24px;border-radius:7px;background:transparent !important;display:flex;align-items:center;justify-content:center;margin-top:1px;}.chki svg{stroke:#1FA463;}
.stepno{flex:none;display:inline-flex;align-items:center;justify-content:center;width:34px;height:34px;border-radius:10px;background:#F23F44;color:#fff;font-weight:800;font-size:15px;}
.stephead{display:flex;align-items:center;gap:14px;margin-bottom:14px;}
.rulerow{display:flex;align-items:center;gap:12px;padding:14px 16px;border:1px solid #F1E6E7;border-radius:13px;margin-bottom:10px;font-size:13.5px;}
.ruletag{margin-left:auto;font-size:10.5px;font-weight:700;letter-spacing:.05em;padding:4px 10px;border-radius:99px;}
.synced{background:#EAF8F0;color:#1F9D6B;}
.rejected{background:#F3EAEA;color:#9A878A;}
/* dark band */
.dark{background:#1A1014;color:#F1E7E8;}
.dark .h2{color:#fff;}
.dark .h3{color:#fff;}
.dark .lead{color:#D3C3C6;}
.dark .body{color:#C2B1B4;}
.dark .eyebrow{color:#C9A9AB;}
.dark .eyebrow b{color:#FF7A52;}
.valcard{background:#241417;border:1px solid #3A2529;border-radius:16px;padding:24px;transition:transform .3s cubic-bezier(.2,.7,.3,1),border-color .3s;}
.valcard:hover{transform:translateY(-4px);border-color:#F23F44;}
.valicon{width:44px;height:44px;border-radius:12px;background:rgba(242,63,68,.14);color:#FF7A52;display:flex;align-items:center;justify-content:center;margin-bottom:16px;}
.badgerow{display:flex;flex-wrap:wrap;gap:12px;}
.badge{display:inline-flex;align-items:center;gap:9px;background:#241417;border:1px solid #3A2529;border-radius:12px;padding:12px 18px;font-size:14px;font-weight:600;color:#F1E7E8;}
.badge svg{color:#FF7A52;}
.statcard{background:#241417;border:1px solid #3A2529;border-radius:16px;padding:26px;}
.statn{font-size:50px;font-weight:800;letter-spacing:-2px;line-height:1;background:linear-gradient(180deg,#fff,#FFC9BD);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;}
/* ats */
.atsgrid{display:grid;grid-template-columns:repeat(5,1fr);gap:14px;}
.atscell{background:#fff;border:1px solid #F0E2E3;border-radius:14px;height:82px;display:flex;align-items:center;justify-content:center;padding:16px;transition:transform .28s ease,box-shadow .28s ease,border-color .28s ease;}
.atscell:hover{transform:translateY(-4px);border-color:#FBD0D1;box-shadow:0 16px 34px rgba(110,11,14,.10);}
.atscell img{max-height:30px;max-width:120px;filter:grayscale(1);opacity:.66;}
.intg-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:14px;}
.intg-tile{display:flex;align-items:center;justify-content:center;height:88px;background:#fff;border:1px solid #F2E6E7;border-radius:16px;padding:16px 20px;transition:transform .28s ease,box-shadow .28s ease,border-color .28s ease;}
.intg-tile:hover{transform:translateY(-4px);border-color:#FBD0D1;box-shadow:0 16px 34px rgba(110,11,14,.10);}
.intg-tile img{max-width:100%;max-height:40px;object-fit:contain;}
.intglink{display:inline-flex;align-items:center;gap:8px;color:#F23F44;font-weight:600;font-size:16px;}
/* cta */
.ctablock{background:radial-gradient(900px 420px at 80% 0%,#FFE3DD 0%,rgba(255,227,221,0) 60%),linear-gradient(135deg,#F23F44,#C0242B);border-radius:30px;padding:74px 56px;text-align:center;position:relative;overflow:hidden;color:#fff;}
@media(max-width:960px){
  .herogrid,.split{grid-template-columns:1fr !important;gap:44px;}
  .h1{font-size:42px;letter-spacing:-1.2px;}
  .h2{font-size:32px;letter-spacing:-1px;}
  .sec{padding:70px 22px;}
  .hero{padding:44px 22px 60px;}
  .bgrid{grid-template-columns:1fr 1fr;}
  .atsgrid,.intg-grid{grid-template-columns:repeat(3,1fr);}
  .val3{grid-template-columns:1fr !important;}
}

h1,h2,h3,h4,.h1,.h2,.h3,.hero h1,.eyebrow{text-wrap:balance;}p,li,.body,.lead,.sub,figcaption,blockquote{text-wrap:pretty;}/*om-balance-rule*/
`;

const faqItems = [
  { q: "What is a Testlify skill assessment?", a: "Testlify assessments measure what candidates can actually do — with 3,500+ expert-validated tests across coding, cognitive ability, personality, language and role-specific skills." },
  { q: "How many tests are in the library?", a: "3,500+ validated tests across 4,500+ job roles and 50+ industries, each built and reviewed by subject-matter experts." },
  { q: "Can I combine multiple tests in one assessment?", a: "Yes. Mix cognitive, role-specific, coding and personality tests into a single assessment, set duration and passing scores, and weight sections to match the role." },
  { q: "Are the tests validated and bias-free?", a: "Every test is expert-validated for reliability and fairness, and assessments apply the same criteria to every candidate for consistent, EEOC-defensible results." },
  { q: "Can candidates take assessments in their language?", a: "Yes. The candidate experience is available in 9 languages, so assessments can be delivered in your candidates’ language." },
  { q: "How long does a typical assessment take?", a: "Most assessments run about 30 minutes, with a 94% candidate satisfaction rate." },
];

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <SiteHeader
        announcement="New — AI résumé screening now syncs match scores straight back to your ATS."
        announcementCta="See how"
        homeHref="/"
      />
      <section className="hero"><div className="wrap"><div className="herogrid">
        <div>
          <div className="reveal" style={{ transitionDelay: ".02s" }}><span className="pill"><span className="pilltag">SKILL ASSESSMENTS</span> 3,500+ validated tests</span></div>
          <h1 className="h1 reveal" style={{ marginTop: "22px", transitionDelay: ".06s" }}>Assess real skills,<br />not <span className="acc">résumés.</span></h1>
          <p className="lead reveal" style={{ marginTop: "22px", maxWidth: "520px", transitionDelay: ".1s" }}>Measure what candidates can actually do with 3,500+ expert-validated tests across every role — from coding and cognitive ability to personality and role-specific skills.</p>
          <div className="heroctas reveal" style={{ transitionDelay: ".14s" }}><CtaButton label="Try for free" href="/pricing" variant="primary" size="md" icon="arrow" magnetic /><CtaButton label="Book a demo" href="#" variant="secondary" size="md" icon="play" /></div>
          <div className="trust reveal" style={{ transitionDelay: ".18s" }}><span style={{ display: "inline-flex", alignItems: "center", gap: "7px" }}><span style={{ color: "#F23F44", fontWeight: 700 }}>✓</span>7-day free trial</span><span style={{ display: "inline-flex", alignItems: "center", gap: "7px" }}><span style={{ color: "#F23F44", fontWeight: 700 }}>✓</span>No credit card required</span></div>
        </div>
        <div className="reveal" style={{ position: "relative", transitionDelay: ".12s" }}>
          <div className="matchtag"><i></i> 412 résumés · ranked in under 2 min</div>
          <div className="mock">
            <div className="mocktop"><span className="mc" style={{ background: "#FF5F57" }}></span><span className="mc" style={{ background: "#FEBC2E" }}></span><span className="mc" style={{ background: "#28C840" }}></span><span className="mockbar">app.testlify.com/screening/senior-frontend</span></div>
            <div className="mockbody">
              <div className="scanhead"><div className="h3" style={{ fontSize: "16px" }}>Ranked shortlist</div><div className="body" style={{ fontSize: "12px" }}>Job-fit scoring · role-specific criteria</div></div>
              <div className="rowc top"><span className="av" style={{ background: "linear-gradient(135deg,#F23F44,#FF7A52)" }}>AR</span><div><div className="rcname">Amelia Rao</div><div className="rcrole">Senior Frontend Engineer · 7 yrs</div></div><div className="score"><span className="fit hi">HIGH FIT</span><span className="scorenum" style={{ color: "#1F9D6B" }}>96</span></div></div>
              <div className="rowc"><span className="av" style={{ background: "linear-gradient(135deg,#6E62F2,#9A8BFF)" }}>DS</span><div><div className="rcname">Daniel Singh</div><div className="rcrole">Frontend Engineer · 5 yrs</div></div><div className="score"><span className="fit hi">HIGH FIT</span><span className="scorenum" style={{ color: "#1A1014" }}>91</span></div></div>
              <div className="rowc"><span className="av" style={{ background: "linear-gradient(135deg,#2AA6F2,#67C9FF)" }}>MK</span><div><div className="rcname">Mei Kawano</div><div className="rcrole">UI Engineer · 6 yrs</div></div><div className="score"><span className="fit md">MEDIUM</span><span className="scorenum" style={{ color: "#1A1014" }}>74</span></div></div>
              <div className="rowc" style={{ opacity: .62 }}><span className="av" style={{ background: "linear-gradient(135deg,#B59A9D,#D9C7C9)" }}>JP</span><div><div className="rcname">James Park</div><div className="rcrole">Web Developer · 4 yrs</div></div><div className="score"><span className="fit lo">LOW</span><span className="scorenum" style={{ color: "#A9999C" }}>48</span></div></div>
            </div>
          </div>
        </div>
      </div></div></section>
      <section className="sec"><div className="wrap">
        <div style={{ maxWidth: "660px", margin: "0 auto 52px", textAlign: "center" }}>
          <p className="eyebrow reveal" style={{ justifyContent: "center" }}>The old way<b>.</b></p>
          <h2 className="h2 reveal" style={{ transitionDelay: ".04s" }}>Résumés are broken. Gut-feel hiring is outdated.</h2>
        </div>
        <div className="split" style={{ alignItems: "stretch" }}>
          <div className="reveal" style={{ background: "#FBF3EE", border: "1px solid #F0E2E3", borderRadius: "20px", padding: "38px 36px" }}>
            <p className="body" style={{ margin: "0 0 14px" }}>Résumés tell half the story, interviews are inconsistent, and manual screening slows everything down.</p>
            <p className="body" style={{ margin: "0 0 14px" }}>Recruiters waste hours screening résumés that don&apos;t reflect actual skills — leading to mis-hires and overlooked top performers.</p>
            <p className="body" style={{ margin: "0 0 26px" }}>Most platforms lean on generic, one-size-fits-all quizzes that never reflect real on-the-job scenarios.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <div className="chk"><span className="chki" style={{ background: "#EADDDE" }}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#9A878A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></span><span className="body" style={{ margin: 0, color: "#8A7A7D", fontWeight: 600 }}>Biased hiring</span></div>
              <div className="chk"><span className="chki" style={{ background: "#EADDDE" }}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#9A878A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></span><span className="body" style={{ margin: 0, color: "#8A7A7D", fontWeight: 600 }}>Lengthy interview process</span></div>
              <div className="chk"><span className="chki" style={{ background: "#EADDDE" }}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#9A878A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></span><span className="body" style={{ margin: 0, color: "#8A7A7D", fontWeight: 600 }}>Lack of hiring data</span></div>
            </div>
          </div>
          <div className="reveal" style={{ transitionDelay: ".08s", background: "#1A1014", borderRadius: "20px", padding: "38px 36px" }}>
            <h3 className="h3" style={{ color: "#fff", marginBottom: "22px" }}>Hire smarter with Testlify&apos;s assessment &amp; interview tools</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <div className="chk"><span className="chki" style={{ background: "rgba(242,63,68,.16)" }}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#FF7A52" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span><span className="body" style={{ margin: 0, color: "#F1E7E8" }}>Identify top talent</span></div>
              <div className="chk"><span className="chki" style={{ background: "rgba(242,63,68,.16)" }}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#FF7A52" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span><span className="body" style={{ margin: 0, color: "#F1E7E8" }}>Reduce mis-hires</span></div>
              <div className="chk"><span className="chki" style={{ background: "rgba(242,63,68,.16)" }}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#FF7A52" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span><span className="body" style={{ margin: 0, color: "#F1E7E8" }}>Shorten time-to-hire by 55%</span></div>
              <div className="chk"><span className="chki" style={{ background: "rgba(242,63,68,.16)" }}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#FF7A52" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span><span className="body" style={{ margin: 0, color: "#F1E7E8" }}>Bias-free, data-backed hiring decisions</span></div>
              <div className="chk"><span className="chki" style={{ background: "rgba(242,63,68,.16)" }}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#FF7A52" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span><span className="body" style={{ margin: 0, color: "#F1E7E8" }}>Improve recruiter efficiency by 6x</span></div>
              <div className="chk"><span className="chki" style={{ background: "rgba(242,63,68,.16)" }}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#FF7A52" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span><span className="body" style={{ margin: 0, color: "#F1E7E8" }}>Boost candidate satisfaction to 94%</span></div>
            </div>
          </div>
        </div>
      </div></section>
      <section className="sec" style={{ background: "#FBF3EE" }}><div className="wrap">
        <div style={{ maxWidth: "660px", margin: "0 auto 52px", textAlign: "center" }}>
          <p className="eyebrow reveal" style={{ justifyContent: "center" }}>Why skills-based<b>.</b></p>
          <h2 className="h2 reveal" style={{ transitionDelay: ".04s" }}>Hire on proven ability, not guesswork</h2>
          <p className="lead reveal" style={{ marginTop: "16px", transitionDelay: ".08s" }}>Measure the skills the role actually needs, standardise evaluation and make faster, evidence-based hiring decisions — across every role you hire for.</p>
        </div>
        <div className="bgrid reveal">
          <div className="bcard">
            <div className="bicon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 7v5l3 2"></path></svg></div>
            <h3 className="h3" style={{ fontSize: "18px", marginBottom: "9px" }}>Save time &amp; effort</h3>
            <p className="body" style={{ fontSize: "14.5px", margin: 0 }}>Automate screening and cut manual shortlisting by up to 70% — freeing recruiters for high-value hiring work.</p>
          </div>
          <div className="bcard">
            <div className="bicon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"></circle><circle cx="12" cy="12" r="4"></circle><circle cx="12" cy="12" r="1" fill="currentColor"></circle></svg></div>
            <h3 className="h3" style={{ fontSize: "18px", marginBottom: "9px" }}>Hire the right candidates</h3>
            <p className="body" style={{ fontSize: "14.5px", margin: 0 }}>Objective, skills-based scoring surfaces the candidates who can actually do the job — improving the quality of every shortlist.</p>
          </div>
          <div className="bcard">
            <div className="bicon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v18"></path><path d="M5 7l7-2 7 2"></path><path d="M5 7l-2.5 6a4 4 0 0 0 5 0z"></path><path d="M19 7l2.5 6a4 4 0 0 1-5 0z"></path></svg></div>
            <h3 className="h3" style={{ fontSize: "18px", marginBottom: "9px" }}>Standardise &amp; reduce bias</h3>
            <p className="body" style={{ fontSize: "14.5px", margin: 0 }}>Apply consistent, role-specific criteria across every candidate and team for fair, objective evaluation.</p>
          </div>
          <div className="bcard">
            <div className="bicon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.5 1.5"></path><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7L12 19"></path></svg></div>
            <h3 className="h3" style={{ fontSize: "18px", marginBottom: "9px" }}>Seamless ATS integration</h3>
            <p className="body" style={{ fontSize: "14.5px", margin: 0 }}>Match scores and assessment results sync straight back to your ATS for a fully automated workflow.</p>
          </div>
        </div>
      </div></section>
      <section className="sec"><div className="wrap">
        <div style={{ maxWidth: "640px", margin: "0 auto 56px", textAlign: "center" }}>
          <p className="eyebrow reveal" style={{ justifyContent: "center" }}>How it works<b>.</b></p>
          <h2 className="h2 reveal" style={{ transitionDelay: ".04s" }}>From test to shortlist in three steps</h2>
          <p className="lead reveal" style={{ marginTop: "16px", transitionDelay: ".08s" }}>Testlify turns skills testing into a quick, accurate, automated process — so you rank candidates on real ability, fast.</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "64px" }}>
          <div className="split">
            <div className="reveal">
              <div className="stephead"><span className="stepno">1</span><h3 className="h3">Pick or build your assessment</h3></div>
              <p className="lead" style={{ fontSize: "17px" }}>Choose from 3,500+ expert-validated tests across 4,500+ roles, or generate a custom assessment with AI. Combine tests, set weights, timing and passing scores in minutes.</p>
            </div>
            <div className="reveal" style={{ transitionDelay: ".08s" }}>
              <div className="mock">
                <div className="mocktop"><span className="mc" style={{ background: "#FF5F57" }}></span><span className="mc" style={{ background: "#FEBC2E" }}></span><span className="mc" style={{ background: "#28C840" }}></span><span className="mockbar">Assessment results · Senior Frontend</span></div>
                <div className="mockbody">
                  <div className="rowc top"><span className="av" style={{ background: "linear-gradient(135deg,#F23F44,#FF7A52)" }}>AR</span><div><div className="rcname">Amelia Rao</div><div className="rcrole">React · TypeScript · Accessibility</div></div><div className="score"><span className="fit hi">HIGH</span><span className="scorenum" style={{ color: "#1F9D6B" }}>96</span></div></div>
                  <div className="rowc"><span className="av" style={{ background: "linear-gradient(135deg,#2AA6F2,#67C9FF)" }}>MK</span><div><div className="rcname">Mei Kawano</div><div className="rcrole">UI Engineer · 6 yrs</div></div><div className="score"><span className="fit md">MEDIUM</span><span className="scorenum" style={{ color: "#1A1014" }}>74</span></div></div>
                  <div className="rowc" style={{ marginBottom: 0 }}><span className="av" style={{ background: "linear-gradient(135deg,#B59A9D,#D9C7C9)" }}>JP</span><div><div className="rcname">James Park</div><div className="rcrole">Web Developer · 4 yrs</div></div><div className="score"><span className="fit lo">LOW</span><span className="scorenum" style={{ color: "#A9999C" }}>48</span></div></div>
                  <div style={{ marginTop: "16px", padding: "13px 15px", borderRadius: "12px", background: "#FCF3F2", border: "1px solid #F4E0E0", fontSize: "12.5px", color: "#5A4B4E", lineHeight: 1.5 }}><b className="acc">Why 96:</b> 7 yrs React, design-system rebuild in portfolio, open-source a11y contributor.</div>
                </div>
              </div>
            </div>
          </div>
          <div className="split">
            <div className="reveal" style={{ order: 2 }}>
              <div className="stephead"><span className="stepno">2</span><h3 className="h3">Invite candidates at any scale</h3></div>
              <p className="lead" style={{ fontSize: "17px" }}>Send a branded assessment link to one candidate or your whole pipeline. They take it on any device, with proctoring and anti-cheating built in — no scheduling required.</p>
            </div>
            <div className="reveal" style={{ order: 1, transitionDelay: ".08s" }}>
              <div className="mock">
                <div className="mocktop"><span className="mc" style={{ background: "#FF5F57" }}></span><span className="mc" style={{ background: "#FEBC2E" }}></span><span className="mc" style={{ background: "#28C840" }}></span><span className="mockbar">Automation rules · Senior Frontend</span></div>
                <div className="mockbody">
                  <div className="rulerow"><span style={{ flex: "none", width: "30px", height: "30px", borderRadius: "9px", background: "#EAF8F0", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#1F9D6B" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span><span>If job-fit <b>≥ 80</b> → invite to assessment</span><span className="ruletag synced">AUTO</span></div>
                  <div className="rulerow"><span style={{ flex: "none", width: "30px", height: "30px", borderRadius: "9px", background: "#EAF8F0", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#1F9D6B" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span><span>If <b>50–79</b> → send to reviewer queue</span><span className="ruletag synced">AUTO</span></div>
                  <div className="rulerow" style={{ marginBottom: 0 }}><span style={{ flex: "none", width: "30px", height: "30px", borderRadius: "9px", background: "#F3EAEA", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#9A878A" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></span><span>If <b>&lt; 50</b> → reject with feedback</span><span className="ruletag rejected">AUTO</span></div>
                </div>
              </div>
            </div>
          </div>
          <div className="split">
            <div className="reveal">
              <div className="stephead"><span className="stepno">3</span><h3 className="h3">Auto-scored results, synced to your ATS</h3></div>
              <p className="lead" style={{ fontSize: "17px" }}>Every submission is scored instantly with per-skill breakdowns and benchmarks. Ranked results and reports flow back to your ATS automatically — a single view of candidate ability where your team already works.</p>
            </div>
            <div className="reveal" style={{ transitionDelay: ".08s" }}>
              <div className="mock">
                <div className="mocktop"><span className="mc" style={{ background: "#FF5F57" }}></span><span className="mc" style={{ background: "#FEBC2E" }}></span><span className="mc" style={{ background: "#28C840" }}></span><span className="mockbar">Sync log · Greenhouse</span></div>
                <div className="mockbody" style={{ padding: "8px 0" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "15px 20px", borderBottom: "1px solid #F4ECEC" }}><span style={{ flex: "none", width: "32px", height: "32px", borderRadius: "9px", background: "#FFF0F0", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F23F44" strokeWidth="2"><path d="M9 11l3 3L22 4"></path><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg></span><div style={{ flex: 1 }}><div style={{ fontSize: "13.5px", fontWeight: 600 }}>Assessment scores pushed to Greenhouse</div><div className="plabel" style={{ letterSpacing: ".04em" }}>318 candidates · 09:16</div></div><span className="ruletag synced">SYNCED</span></div>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "15px 20px", borderBottom: "1px solid #F4ECEC" }}><span style={{ flex: "none", width: "32px", height: "32px", borderRadius: "9px", background: "#FFF0F0", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F23F44" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><path d="M14 2v6h6"></path></svg></span><div style={{ flex: 1 }}><div style={{ fontSize: "13.5px", fontWeight: 600 }}>Assessment results attached</div><div className="plabel" style={{ letterSpacing: ".04em" }}>Complete candidate profile · 09:18</div></div><span className="ruletag synced">SYNCED</span></div>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "15px 20px" }}><span style={{ flex: "none", width: "32px", height: "32px", borderRadius: "9px", background: "#FFF0F0", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F23F44" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.5 1.5"></path><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7L12 19"></path></svg></span><div style={{ flex: 1 }}><div style={{ fontSize: "13.5px", fontWeight: 600 }}>Two-way connection live</div><div className="plabel" style={{ letterSpacing: ".04em" }}>No middleware · no data mapping</div></div><span className="ruletag synced">ON</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div></section>
      <section className="sec" style={{ background: "#FBF3EE" }}><div className="wrap"><div className="split">
        <div className="reveal">
          <p className="eyebrow">Test library<b>.</b></p>
          <h2 className="h2" style={{ marginBottom: "20px" }}>Test real-world skills, not résumés</h2>
          <p className="lead" style={{ marginBottom: "26px" }}>Build role-specific assessments in minutes from our validated library, or customise your own to fit any role — from engineering to sales and beyond.</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <div className="chk"><span className="chki"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span><span className="body" style={{ margin: 0 }}>3,500+ ready-to-use tests across 4,500+ job roles</span></div>
            <div className="chk"><span className="chki"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span><span className="body" style={{ margin: 0 }}>Audio and video interview tools built in</span></div>
            <div className="chk"><span className="chki"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span><span className="body" style={{ margin: 0 }}>Scientifically designed and validated by subject-matter experts</span></div>
            <div className="chk"><span className="chki"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span><span className="body" style={{ margin: 0 }}>Multi-language support in 16+ languages with custom branding</span></div>
            <div className="chk"><span className="chki"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span><span className="body" style={{ margin: 0 }}>13+ advanced anti-cheating and proctoring features</span></div>
          </div>
        </div>
        <div className="reveal" style={{ transitionDelay: ".08s" }}><div className="mock" style={{ boxShadow: "0 30px 70px rgba(110,11,14,.14)" }}><div className="mocktop"><span className="mc" style={{ background: "#FF5F57" }}></span><span className="mc" style={{ background: "#FEBC2E" }}></span><span className="mc" style={{ background: "#28C840" }}></span><span className="mockbar">Assessment library</span></div><div style={{ display: "block", width: "100%", height: "340px", background: "#F3EAEA" }}></div></div></div>
      </div></div></section>
      <section className="sec"><div className="wrap"><div className="split">
        <div className="reveal" style={{ order: 2 }}>
          <p className="eyebrow">Real-world simulations<b>.</b></p>
          <h2 className="h2" style={{ marginBottom: "20px" }}>Test both hard and soft skills in real-world scenarios</h2>
          <p className="lead" style={{ marginBottom: "26px" }}>With Testlify&apos;s job-specific simulations, you see how candidates actually perform before you make a hire.</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <div className="chk"><span className="chki"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span><span className="body" style={{ margin: 0 }}>Interactive, role-based tasks that mirror real job responsibilities</span></div>
            <div className="chk"><span className="chki"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span><span className="body" style={{ margin: 0 }}>Live coding tests in 45+ programming languages</span></div>
            <div className="chk"><span className="chki"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span><span className="body" style={{ margin: 0 }}>Simulations using Microsoft Excel, Google Sheets, Word and G-Suite tools</span></div>
            <div className="chk"><span className="chki"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span><span className="body" style={{ margin: 0 }}>Communication and problem-solving evaluations tailored to each role</span></div>
            <div className="chk"><span className="chki"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span><span className="body" style={{ margin: 0 }}>Instant scoring and detailed reports to benchmark performance</span></div>
          </div>
        </div>
        <div className="reveal" style={{ order: 1, transitionDelay: ".08s" }}><div className="mock" style={{ boxShadow: "0 30px 70px rgba(110,11,14,.14)" }}><div className="mocktop"><span className="mc" style={{ background: "#FF5F57" }}></span><span className="mc" style={{ background: "#FEBC2E" }}></span><span className="mc" style={{ background: "#28C840" }}></span><span className="mockbar">Live coding simulation</span></div><div style={{ display: "block", width: "100%", height: "340px", background: "#F3EAEA" }}></div></div></div>
      </div></div></section>
      <section className="sec" style={{ background: "#FBF3EE" }}><div className="wrap"><div className="split">
        <div className="reveal">
          <p className="eyebrow">AI interviews<b>.</b></p>
          <h2 className="h2" style={{ marginBottom: "20px" }}>Smarter interviews. Less effort. More insight.</h2>
          <p className="lead" style={{ marginBottom: "26px" }}>Testlify offers one-way and two-way interviewing powered by AI — assess communication, confidence and critical thinking at scale.</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <div className="chk"><span className="chki"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span><span className="body" style={{ margin: 0 }}>AI video interviews with dynamic, job-relevant questions</span></div>
            <div className="chk"><span className="chki"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span><span className="body" style={{ margin: 0 }}>Two-way live interviews to connect with candidates in-platform</span></div>
            <div className="chk"><span className="chki"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span><span className="body" style={{ margin: 0 }}>Bulk audio screening to evaluate large candidate volumes fast</span></div>
            <div className="chk"><span className="chki"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span><span className="body" style={{ margin: 0 }}>One-way async responses to screen candidates without scheduling</span></div>
            <div className="chk"><span className="chki"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span><span className="body" style={{ margin: 0 }}>Recordings and insights auto-saved and shareable for collaborative decisions</span></div>
          </div>
        </div>
        <div className="reveal" style={{ transitionDelay: ".08s" }}><div className="mock" style={{ boxShadow: "0 30px 70px rgba(110,11,14,.14)" }}><div className="mocktop"><span className="mc" style={{ background: "#FF5F57" }}></span><span className="mc" style={{ background: "#FEBC2E" }}></span><span className="mc" style={{ background: "#28C840" }}></span><span className="mockbar">AI interview · review</span></div><div style={{ display: "block", width: "100%", height: "340px", background: "#F3EAEA" }}></div></div></div>
      </div></div></section>
      <section className="sec dark"><div className="wrap"><div className="split" style={{ alignItems: "center" }}>
        <div className="reveal">
          <p className="eyebrow">Built for your workflow<b>.</b></p>
          <h2 className="h2" style={{ marginBottom: "20px" }}>Need a custom assessment for your roles?</h2>
          <p className="lead" style={{ marginBottom: "28px" }}>Talk to our team to build role-specific assessments mapped to the exact skills you hire for — backed by expert validation and built to scale with your team.</p>
          <CtaButton label="Talk to sales" href="#" variant="light" size="md" icon="arrow" />
        </div>
        <div className="reveal val3" style={{ transitionDelay: ".08s", display: "grid", gridTemplateColumns: "1fr", gap: "16px" }}>
          <div className="valcard"><div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}><span className="valicon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 17l6-6 4 4 8-8"></path><path d="M17 7h4v4"></path></svg></span><div><h3 className="h3" style={{ fontSize: "17px", marginBottom: "6px" }}>Validated test library</h3><p className="body" style={{ margin: 0, fontSize: "14px" }}>3,500+ expert-built tests across 4,500+ roles — or create your own with AI.</p></div></div></div>
          <div className="valcard"><div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}><span className="valicon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.5 1.5"></path><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7L12 19"></path></svg></span><div><h3 className="h3" style={{ fontSize: "17px", marginBottom: "6px" }}>Seamless ATS integration</h3><p className="body" style={{ margin: 0, fontSize: "14px" }}>Match scores and assessment results sync automatically, keeping your hiring workflow smooth.</p></div></div></div>
          <div className="valcard"><div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}><span className="valicon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg></span><div><h3 className="h3" style={{ fontSize: "17px", marginBottom: "6px" }}>Expert support</h3><p className="body" style={{ margin: 0, fontSize: "14px" }}>We guide implementation, provide training and ensure adoption across your teams.</p></div></div></div>
        </div>
      </div></div></section>
      <section className="sec" style={{ background: "#FBF3EE" }}><div className="wrap">
        <div style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto 44px" }}>
          <p className="eyebrow reveal" style={{ justifyContent: "center" }}>Integrations<b>.</b></p>
          <h2 className="h2 reveal" style={{ transitionDelay: ".06s" }}>Connected to 100+ ATS tools</h2>
          <p className="lead reveal" style={{ marginTop: "14px", transitionDelay: ".12s" }}>Native two-way sync with Workday, Greenhouse, Lever and 97 more — no middleware, no data mapping.</p>
        </div>
        <div className="reveal intg-grid" style={{ transitionDelay: ".16s" }}>
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
        <div className="reveal" style={{ textAlign: "center", marginTop: "26px", transitionDelay: ".2s" }}><Link href="/integrations" className="intglink">View all integrations<span>→</span></Link></div>
      </div></section>
      <SecuritySection
        eyebrow="Security & compliance"
        heading="Built to keep your organisation secure"
        sub="Top-tier admin controls, strong data governance and comprehensive compliance audits — your recruitment data stays protected and EEOC-defensible at every step."
      />
      <Recognition bg="#FBF3EE" eyebrow="Awards and recognitions" />
      <Testimonials eyebrow="Loved by hiring teams" heading="What our customers say about Testlify" />
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
