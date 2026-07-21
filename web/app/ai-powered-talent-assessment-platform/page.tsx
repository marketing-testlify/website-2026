import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import CtaButton from "@/components/CtaButton";
import CtaBand from "@/components/CtaBand";
import FAQ from "@/components/FAQ";
import SecuritySection from "@/components/SecuritySection";
import Testimonials from "@/components/Testimonials";

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
.h1{font-size:62px;line-height:1.04;font-weight:800;letter-spacing:-2px;margin:0;color:#1A1014;}
.h2{font-size:43px;line-height:1.08;font-weight:800;letter-spacing:-1.4px;margin:0;color:#1A1014;}
.h3{font-size:22px;line-height:1.25;font-weight:700;letter-spacing:-.4px;margin:0;color:#1A1014;}
.lead{font-size:19px;line-height:1.6;color:#5A4B4E;font-weight:400;}
.body{font-size:16px;line-height:1.66;color:#5A4B4E;}
.muted{color:#8A7A7D;}
.acc{color:#F23F44;}
.plabel{font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#A9999C;}
.reveal{opacity:0;transform:translateY(28px);}
@keyframes marquee{0%{transform:translateX(0);}100%{transform:translateX(-50%);}}
.mqword{font-size:24px;font-weight:700;color:#C9B9BC;letter-spacing:-.5px;white-space:nowrap;}
/* hero */
.hero{padding:70px 28px 90px;background:radial-gradient(1100px 540px at 78% 6%,#FFF0EE 0%,rgba(255,240,238,0) 60%),#fff;position:relative;overflow:hidden;}
.herogrid{display:grid;grid-template-columns:1.02fr 1.08fr;gap:60px;align-items:center;position:relative;}
.pill{display:inline-flex;align-items:center;gap:9px;background:#fff;border:1px solid #F4D9DA;border-radius:999px;padding:7px 15px 7px 8px;font-size:13px;font-weight:600;color:#A8323A;box-shadow:0 6px 16px rgba(110,11,14,.06);}
.pilltag{background:#F23F44;color:#fff;font-size:11px;font-weight:700;letter-spacing:.04em;padding:3px 9px;border-radius:999px;}
.heroctas{display:flex;align-items:center;gap:14px;flex-wrap:wrap;margin-top:32px;}
.trust{display:flex;align-items:center;gap:13px;flex-wrap:wrap;font-size:13.5px;color:#8A7A7D;font-weight:600;margin-top:26px;}
.dot{width:4px;height:4px;border-radius:50%;background:#D9C7C9;}
/* mock */
.mock{background:#fff;border:1px solid #F0E2E3;border-radius:20px;box-shadow:0 40px 90px rgba(110,11,14,.16);overflow:hidden;}
.mocktop{display:flex;align-items:center;gap:8px;padding:13px 16px;border-bottom:1px solid #F4ECEC;background:#FCFAFA;}
.mc{width:11px;height:11px;border-radius:50%;}
.mockbar{margin-left:12px;flex:1;height:26px;border-radius:8px;background:#F3EAEA;display:flex;align-items:center;padding:0 12px;font-size:11.5px;color:#A9999C;font-weight:500;}
.mockbody{padding:20px;}
.ring{width:74px;height:74px;flex:none;border-radius:50%;background:conic-gradient(#F23F44 0deg 331deg,#F7E1E2 331deg 360deg);display:flex;align-items:center;justify-content:center;}
.ringin{width:58px;height:58px;border-radius:50%;background:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;}
.skrow{margin-bottom:13px;}
.skhead{display:flex;justify-content:space-between;font-size:12.5px;font-weight:600;margin-bottom:6px;}
.bar{height:7px;border-radius:99px;background:#F0E2E3;overflow:hidden;}
.barf{height:100%;background:linear-gradient(90deg,#F23F44,#FF7A52);border-radius:99px;}
.matchtag{position:absolute;top:-16px;left:24px;background:#1A1014;color:#fff;font-size:12.5px;font-weight:600;padding:9px 15px;border-radius:12px;box-shadow:0 16px 34px rgba(26,16,20,.30);display:flex;align-items:center;gap:8px;z-index:4;}
.matchtag i{width:7px;height:7px;border-radius:50%;background:#3DDC84;display:inline-block;box-shadow:0 0 0 4px rgba(61,220,132,.2);}
.floattag{position:absolute;bottom:-18px;right:26px;background:#fff;border:1px solid #F0E2E3;border-radius:14px;padding:12px 16px;box-shadow:0 20px 40px rgba(110,11,14,.14);display:flex;align-items:center;gap:11px;z-index:4;}
/* logos */
.logos{display:flex;align-items:center;justify-content:center;flex-wrap:wrap;gap:46px;}
.logos img{height:26px;filter:grayscale(1);opacity:.62;}
/* generic */
.split{display:grid;grid-template-columns:1.02fr 1fr;gap:64px;align-items:center;}
.chk{display:flex;gap:12px;align-items:flex-start;}
.chki{flex:none;width:24px;height:24px;border-radius:7px;background:transparent !important;display:flex;align-items:center;justify-content:center;margin-top:1px;}.chki svg{stroke:#1FA463;}
.dark{background:#1A1014;color:#F1E7E8;}
.dark .h2{color:#fff;}
.dark .h3{color:#fff;}
.dark .lead{color:#D3C3C6;}
.dark .body{color:#C2B1B4;}
.dark .eyebrow{color:#C9A9AB;}
.dark .eyebrow b{color:#FF7A52;}
/* dark cards */
.dcard{background:#241417;border:1px solid #3A2529;border-radius:18px;padding:26px;transition:transform .3s cubic-bezier(.2,.7,.3,1),border-color .3s;}
.dcard:hover{transform:translateY(-5px);border-color:#F23F44;}
.dsicon{width:46px;height:46px;border-radius:12px;background:rgba(242,63,68,.14);color:#FF7A52;display:flex;align-items:center;justify-content:center;margin-bottom:20px;}
.minibox{background:#1A1014;border:1px solid #3A2529;border-radius:12px;}
.wave{display:flex;align-items:center;gap:3px;height:34px;}
.wbar{width:3px;border-radius:2px;background:#5A3A3E;}
/* ats */
.atsgrid{display:grid;grid-template-columns:repeat(5,1fr);gap:14px;}
.atscell{background:#fff;border:1px solid #F0E2E3;border-radius:14px;height:82px;display:flex;align-items:center;justify-content:center;padding:16px;transition:transform .25s,box-shadow .25s,border-color .25s;}
.atscell:hover{transform:translateY(-3px);box-shadow:0 14px 28px rgba(110,11,14,.10);border-color:#FBC9CB;}
.atscell img{max-height:30px;max-width:120px;filter:grayscale(1);opacity:.66;}
.intg-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:14px;}
.intg-tile{display:flex;align-items:center;justify-content:center;height:88px;background:#fff;border:1px solid #F2E6E7;border-radius:16px;padding:16px 20px;transition:transform .28s ease,box-shadow .28s ease,border-color .28s ease;}
.intg-tile:hover{transform:translateY(-4px);border-color:#FBD0D1;box-shadow:0 16px 34px rgba(110,11,14,.10);}
.intg-tile img{max-width:100%;max-height:40px;object-fit:contain;}
.intglink{display:inline-flex;align-items:center;gap:8px;color:#F23F44;font-weight:600;font-size:16px;}
.ctabtn .cta-play{width:24px !important;height:24px !important;}
.ctabtn.v-primary,.ctabtn.v-light{border:1.5px solid transparent !important;}
/* security */
.badgerow{display:flex;flex-wrap:wrap;gap:12px;}
.badge{display:inline-flex;align-items:center;gap:9px;background:#241417;border:1px solid #3A2529;border-radius:12px;padding:12px 18px;font-size:14px;font-weight:600;color:#F1E7E8;}
.badge svg{color:#FF7A52;}
.statcard{background:#241417;border:1px solid #3A2529;border-radius:16px;padding:26px;}
.statn{font-size:52px;font-weight:800;letter-spacing:-2px;line-height:1;background:linear-gradient(180deg,#fff,#FFC9BD);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;}
/* awards */
.award{display:inline-flex;align-items:center;gap:10px;background:#fff;border:1px solid #F0E2E3;border-radius:12px;padding:13px 18px;font-size:13.5px;font-weight:600;color:#1A1014;box-shadow:0 8px 18px rgba(110,11,14,.05);}
.award b{color:#F23F44;font-weight:700;font-size:13px;}
/* cta */
.ctablock{background:radial-gradient(900px 420px at 80% 0%,#FFE3DD 0%,rgba(255,227,221,0) 60%),linear-gradient(135deg,#F23F44,#C0242B);border-radius:30px;padding:76px 56px;text-align:center;position:relative;overflow:hidden;color:#fff;}
@media(max-width:960px){
  .herogrid,.split{grid-template-columns:1fr !important;gap:44px;}
  .h1{font-size:44px;letter-spacing:-1.4px;}
  .h2{font-size:33px;letter-spacing:-1px;}
  .sec{padding:72px 22px;}
  .hero{padding:44px 22px 64px;}
  .atsgrid,.intg-grid{grid-template-columns:repeat(3,1fr);}
  .cards3{grid-template-columns:1fr !important;}
  .herogrid{text-align:center;}
  .herogrid > div{display:flex;flex-direction:column;align-items:center;}
  .h1,.lead{margin-left:auto;margin-right:auto;}
  .lead{max-width:560px !important;}
  .heroctas,.trust{justify-content:center;}
  .pill{flex-wrap:wrap;justify-content:center;border-radius:14px;padding:7px 12px 7px 8px;line-height:1.35;}
  .matchtag,.floattag{position:static !important;display:inline-flex;top:auto;bottom:auto;left:auto;right:auto;margin:0 auto 14px;}
  .floattag{margin:14px auto 0;}
  .mock{margin:0 auto;}
}
@media(max-width:640px){
  .hero{padding:34px 20px 52px;}
  .herogrid{gap:34px;}
  .h1{font-size:32px !important;letter-spacing:-.8px !important;}
  .heroctas{gap:10px;flex-wrap:wrap;}
}

h1,h2,h3,h4,.h1,.h2,.h3,.hero h1,.eyebrow{text-wrap:balance;}p,li,.body,.lead,.sub,figcaption,blockquote{text-wrap:pretty;}/*om-balance-rule*/
`;

const faqItems = [
  { q: "What types of questions can I use with this feature?", a: "You can input any open-ended, single-select and video questions relevant to your hiring needs, allowing candidates to provide detailed responses for evaluation." },
  { q: "What customisation options are available for skills assessments?", a: "Choose from a range of question types, select the number of questions, and save valuable time and resources in the assessment-creation process." },
  { q: "In which languages is the AI-powered custom assessment available?", a: "The feature is available in 9 languages: English, Arabic, French, Dutch, Spanish, Japanese, Italian and Portuguese." },
  { q: "How does the AI chat-simulation feature transform recruitment?", a: "Chat simulation streamlines recruitment by facilitating lifelike conversations and auto-evaluating candidate responses, ensuring consistent and objective assessments." },
  { q: "How does AI-driven assessment creation cater to specific roles?", a: "By providing key information such as preferred skills, experience level and desired question types, our AI crafts assessments tailored to the specific needs of the role you're hiring for." },
  { q: "How accurate is the AI evaluation of candidate responses?", a: "Our AI is trained to accurately evaluate candidate responses, providing consistent and objective assessments to help you make informed, defensible hiring decisions." },
];

const CheckIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
);

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <SiteHeader announcement="New — AI chat-simulation interviews are live. Assess real judgement, not just answers." announcementCta="See how" homeHref="core-home.dc.html" />

      <section className="hero"><div className="wrap"><div className="herogrid">
        <div>
          <div className="reveal" style={{ transitionDelay: ".02s" }}><span className="pill"><span className="pilltag">AI ASSESSMENT</span> Skills-based hiring, proven</span></div>
          <h1 className="h1 reveal" style={{ marginTop: "22px", transitionDelay: ".06s" }}>The AI talent<br />assessment platform<br />for <span className="acc">smarter hiring.</span></h1>
          <p className="lead reveal" style={{ marginTop: "22px", maxWidth: "520px", transitionDelay: ".1s" }}>Finding the right skills in a competitive market — bias-free and fast — is hard. Testlify gives you the tools and insight to make data-driven hiring decisions, every time.</p>
          <div className="heroctas reveal" style={{ transitionDelay: ".14s" }}><CtaButton label="Try for free" href="/pricing" variant="primary" size="md" icon="arrow" magnetic /><CtaButton label="Book a demo" href="#" variant="secondary" size="md" icon="play" /></div>
          <div className="trust reveal" style={{ transitionDelay: ".18s" }}><span style={{ display: "inline-flex", alignItems: "center", gap: "7px" }}><span style={{ color: "#F23F44", fontWeight: 700 }}>✓</span>7-day free trial</span><span style={{ display: "inline-flex", alignItems: "center", gap: "7px" }}><span style={{ color: "#F23F44", fontWeight: 700 }}>✓</span>No credit card required</span></div>
        </div>
        <div className="reveal" style={{ position: "relative", transitionDelay: ".12s", top: "20px" }}>
          <div className="matchtag"><i /> Auto-scored — 0 manual review</div>
          <div className="mock">
            <div className="mocktop"><span className="mc" style={{ background: "#FF5F57" }} /><span className="mc" style={{ background: "#FEBC2E" }} /><span className="mc" style={{ background: "#28C840" }} /><span className="mockbar">app.testlify.com/report/senior-pm</span></div>
            <div className="mockbody">
              <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
                <div className="ring"><div className="ringin"><div style={{ fontSize: "20px", fontWeight: 800, color: "#1A1014" }}>92</div><div className="plabel" style={{ fontSize: "8px" }}>Fit</div></div></div>
                <div><div className="h3" style={{ fontSize: "17px" }}>Amara Okoye</div><div className="body" style={{ fontSize: "13px", marginTop: "2px" }}>Senior Product Manager · verified assessment</div><div style={{ display: "inline-flex", alignItems: "center", gap: "6px", marginTop: "7px", background: "#FFF0F0", color: "#F23F44", fontSize: "11px", fontWeight: 700, letterSpacing: ".04em", padding: "3px 9px", borderRadius: "99px" }}>TOP 4%</div></div>
              </div>
              <div className="skrow"><div className="skhead"><span className="muted">Product strategy</span><span>Expert</span></div><div className="bar"><div className="barf" style={{ width: "94%" }} /></div></div>
              <div className="skrow"><div className="skhead"><span className="muted">Stakeholder judgement</span><span>Strong</span></div><div className="bar"><div className="barf" style={{ width: "86%" }} /></div></div>
              <div className="skrow"><div className="skhead"><span className="muted">Data &amp; analytics</span><span>Proven</span></div><div className="bar"><div className="barf" style={{ width: "81%" }} /></div></div>
              <div style={{ marginTop: "16px", padding: "13px 15px", borderRadius: "12px", background: "#FCF3F2", border: "1px solid #F4E0E0", fontSize: "12.5px", color: "#5A4B4E", lineHeight: 1.5 }}><b className="acc">AI summary:</b> Consistent, evidence-backed reasoning under ambiguity. Chat-simulation flagged strong prioritisation instincts.</div>
            </div>
          </div>
          <div className="floattag"><span style={{ fontSize: "22px", fontWeight: 800, letterSpacing: "-1px", color: "#F23F44" }}>30<span style={{ fontSize: "12px" }}>min</span></span><div style={{ fontSize: "12px", fontWeight: 600, lineHeight: 1.3 }}>typical<br />assessment</div></div>
        </div>
      </div></div></section>

      <section className="sec" style={{ background: "#FBF3EE" }}><div className="wrap"><div className="split">
        <div className="reveal">
          <p className="eyebrow">Custom assessments<b>.</b></p>
          <h2 className="h2" style={{ marginBottom: "20px" }}>Effortlessly build custom assessments with AI</h2>
          <p className="lead" style={{ marginBottom: "22px" }}>Create AI-driven assessments tailored to the exact role you're hiring for. Give it the skills, experience level and question types you want — and let Testlify handle the rest.</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            <div className="chk"><span className="chki"><CheckIcon /></span><p className="body" style={{ margin: 0 }}><b style={{ color: "#1A1014" }}>Intuitive prompts</b> — describe the role, get a ready assessment in seconds.</p></div>
            <div className="chk"><span className="chki"><CheckIcon /></span><p className="body" style={{ margin: 0 }}><b style={{ color: "#1A1014" }}>Smart suggestions</b> — question types and difficulty matched to the job.</p></div>
            <div className="chk"><span className="chki"><CheckIcon /></span><p className="body" style={{ margin: 0 }}><b style={{ color: "#1A1014" }}>9 languages</b> — build and deliver assessments in your candidates' language.</p></div>
          </div>
        </div>
        <div className="reveal" style={{ transitionDelay: ".08s" }}>
          <div className="mock">
            <div className="mocktop"><span className="mc" style={{ background: "#FF5F57" }} /><span className="mc" style={{ background: "#FEBC2E" }} /><span className="mc" style={{ background: "#28C840" }} /><span className="mockbar">AI assessment builder</span></div>
            <div className="mockbody">
              <div style={{ background: "#FCFAFA", border: "1px solid #F1E6E7", borderRadius: "13px", padding: "14px 16px", display: "flex", gap: "11px", alignItems: "flex-start", marginBottom: "16px" }}><span style={{ flex: "none", width: "28px", height: "28px", borderRadius: "8px", background: "#F23F44", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l1.6 5.4L19 9l-5.4 1.6L12 16l-1.6-5.4L5 9l5.4-1.6z" /></svg></span><div style={{ fontSize: "13.5px", color: "#46383C", lineHeight: 1.5 }}>Mid-level React developer — TypeScript, testing, accessibility. 30 minutes, mixed question types.</div></div>
              <div className="plabel" style={{ letterSpacing: ".08em", marginBottom: "11px" }}>Generated · 14 questions</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "9px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "11px", padding: "12px 14px", border: "1px solid #F1E6E7", borderRadius: "11px" }}><span style={{ fontSize: "11px", color: "#F23F44", fontWeight: 700 }}>Q1</span><span style={{ fontSize: "13.5px", flex: 1 }}>Refactor a component to eliminate re-renders</span><span style={{ fontSize: "10.5px", fontWeight: 700, color: "#F23F44", background: "#FFF0F0", padding: "3px 8px", borderRadius: "6px" }}>CODE</span></div>
                <div style={{ display: "flex", alignItems: "center", gap: "11px", padding: "12px 14px", border: "1px solid #F1E6E7", borderRadius: "11px" }}><span style={{ fontSize: "11px", color: "#F23F44", fontWeight: 700 }}>Q2</span><span style={{ fontSize: "13.5px", flex: 1 }}>Explain a tricky useEffect dependency bug</span><span style={{ fontSize: "10.5px", fontWeight: 700, color: "#F23F44", background: "#FFF0F0", padding: "3px 8px", borderRadius: "6px" }}>OPEN</span></div>
                <div style={{ display: "flex", alignItems: "center", gap: "11px", padding: "12px 14px", border: "1px solid #F1E6E7", borderRadius: "11px", opacity: .6 }}><span style={{ fontSize: "11px", color: "#F23F44", fontWeight: 700 }}>Q3</span><span style={{ fontSize: "13.5px", flex: 1 }}>Prioritise accessibility fixes before launch</span><span style={{ fontSize: "10.5px", fontWeight: 700, color: "#8A7A7D", background: "#F3EAEA", padding: "3px 8px", borderRadius: "6px" }}>MCQ</span></div>
              </div>
            </div>
          </div>
        </div>
      </div></div></section>

      <section className="sec" id="chat"><div className="wrap"><div className="split">
        <div className="reveal" style={{ order: 2 }}>
          <p className="eyebrow">Chat simulation<b>.</b></p>
          <h2 className="h2" style={{ marginBottom: "20px" }}>Go beyond conventional tests with chat simulation</h2>
          <p className="lead" style={{ marginBottom: "22px" }}>Create lifelike scenarios and virtual interviews by inputting questions and prompts. Testlify engages candidates in realistic conversations and auto-evaluates their responses — consistent, objective, at any scale.</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            <div className="chk"><span className="chki"><CheckIcon /></span><p className="body" style={{ margin: 0 }}><b style={{ color: "#1A1014" }}>Realistic role-play</b> — simulate on-the-job situations, not trivia.</p></div>
            <div className="chk"><span className="chki"><CheckIcon /></span><p className="body" style={{ margin: 0 }}><b style={{ color: "#1A1014" }}>Auto-evaluated</b> — every response scored against a consistent rubric.</p></div>
          </div>
        </div>
        <div className="reveal" style={{ order: 1, transitionDelay: ".08s" }}>
          <div className="mock">
            <div className="mocktop"><span className="mc" style={{ background: "#FF5F57" }} /><span className="mc" style={{ background: "#FEBC2E" }} /><span className="mc" style={{ background: "#28C840" }} /><span className="mockbar">Chat simulation · Customer Success</span></div>
            <div className="mockbody" style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}><span style={{ flex: "none", width: "30px", height: "30px", borderRadius: "9px", background: "#F23F44", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M12 2l1.6 5.4L19 9l-5.4 1.6L12 16l-1.6-5.4L5 9l5.4-1.6z" /></svg></span><div style={{ background: "#FCFAFA", border: "1px solid #F1E6E7", borderRadius: "4px 13px 13px 13px", padding: "11px 14px", fontSize: "13.5px", lineHeight: 1.5, maxWidth: "80%" }}>A key account threatens to churn over a missed SLA. They're on the phone now. What's your first move?</div></div>
              <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", flexDirection: "row-reverse" }}><span style={{ flex: "none", width: "30px", height: "30px", borderRadius: "9px", background: "#1A1014", color: "#FF7A52", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "12px" }}>RS</span><div style={{ background: "#1A1014", color: "#F1E7E8", borderRadius: "13px 4px 13px 13px", padding: "11px 14px", fontSize: "13.5px", lineHeight: 1.5, maxWidth: "80%" }}>Acknowledge the miss directly, own it, and get the facts before promising anything. I'd confirm impact, then offer a concrete recovery timeline.</div></div>
              <div style={{ marginTop: "4px", display: "flex", alignItems: "center", gap: "10px", padding: "12px 14px", borderRadius: "12px", background: "#F1FBF4", border: "1px solid #CBEBD5" }}><span style={{ flex: "none", width: "26px", height: "26px", borderRadius: "50%", background: "#3DDC84", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0A3D22" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg></span><div style={{ flex: 1, fontSize: "12.5px", color: "#1F7A46", fontWeight: 600 }}>Empathy + ownership + action detected</div><span style={{ fontSize: "18px", fontWeight: 800, color: "#1F7A46" }}>9.1</span></div>
            </div>
          </div>
        </div>
      </div></div></section>

      <section className="sec" style={{ background: "#FBF3EE" }}><div className="wrap"><div className="split" style={{ alignItems: "center" }}>
        <div className="reveal">
          <p className="eyebrow">Automated scoring<b>.</b></p>
          <h2 className="h2" style={{ marginBottom: "18px" }}>Score every answer format — automatically</h2>
          <p className="lead" style={{ marginBottom: "26px", maxWidth: "460px" }}>AI-driven analysis eliminates tedious manual scoring — consistent, objective, bias-free results across text, video and audio, with manual override whenever you want it.</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "440px" }}>
            <div style={{ display: "flex", gap: "13px", alignItems: "flex-start" }}><span style={{ flex: "none", width: "26px", height: "26px", borderRadius: "8px", background: "#FFF0EF", color: "#F23F44", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "1px" }}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg></span><p className="body" style={{ margin: 0 }}><b style={{ color: "#1A1014" }}>Open-ended &amp; written</b> — deep, consistent insight on free-text responses, no manual reading.</p></div>
            <div style={{ display: "flex", gap: "13px", alignItems: "flex-start" }}><span style={{ flex: "none", width: "26px", height: "26px", borderRadius: "8px", background: "#FFF0EF", color: "#F23F44", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "1px" }}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg></span><p className="body" style={{ margin: 0 }}><b style={{ color: "#1A1014" }}>Video interviews</b> — one-way and live, auto-scored instantly with manual scoring on tap.</p></div>
            <div style={{ display: "flex", gap: "13px", alignItems: "flex-start" }}><span style={{ flex: "none", width: "26px", height: "26px", borderRadius: "8px", background: "#FFF0EF", color: "#F23F44", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "1px" }}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg></span><p className="body" style={{ margin: 0 }}><b style={{ color: "#1A1014" }}>Audio questions</b> — clarity, fluency and linguistic proficiency, scored objectively.</p></div>
          </div>
        </div>
        <div className="reveal" style={{ transitionDelay: ".1s" }}>
          <div style={{ background: "#fff", border: "1px solid #F0E2E3", borderRadius: "18px", boxShadow: "0 16px 30px rgba(110,11,14,.10)", padding: 0, overflow: "hidden" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 20px", borderBottom: "1px solid #F0E2E3" }}>
              <span style={{ fontSize: "13.5px", fontWeight: 700, color: "#1A1014" }}>Scoring feed · Marketing Lead</span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "7px", fontSize: "11px", fontWeight: 700, letterSpacing: ".04em", color: "#F23F44" }}><span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#3DDC84", boxShadow: "0 0 0 4px rgba(61,220,132,.18)" }} />AUTO-SCORING</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "15px", padding: "18px 20px", borderBottom: "1px solid #F4ECEC" }}>
              <span style={{ margin: 0, width: "40px", height: "40px", flex: "none", borderRadius: "12px", background: "#FFF0EF", color: "#F23F44", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 6h16M4 12h16M4 18h11" /></svg></span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: "13.5px", fontWeight: 700, color: "#1A1014", marginBottom: "7px" }}>Open-ended question</div>
                <div style={{ height: "5px", borderRadius: "99px", background: "#F4E7E8", marginBottom: "6px", overflow: "hidden" }}><div style={{ width: "88%", height: "100%", background: "#FF7A52" }} /></div>
                <div style={{ height: "5px", borderRadius: "99px", background: "#F4E7E8", width: "70%", overflow: "hidden" }}><div style={{ width: "76%", height: "100%", background: "#F23F44" }} /></div>
              </div>
              <span style={{ flex: "none", fontSize: "20px", fontWeight: 800, color: "#F23F44", letterSpacing: "-.5px" }}>8.6</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "15px", padding: "18px 20px", borderBottom: "1px solid #F4ECEC" }}>
              <span style={{ flex: "none", width: "56px", height: "40px", borderRadius: "9px", background: "linear-gradient(135deg,#FFF0EF,#FCE0DE)", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}><svg width="14" height="14" viewBox="0 0 24 24" fill="#F23F44"><polygon points="5 3 19 12 5 21 5 3" /></svg></span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: "13.5px", fontWeight: 700, color: "#1A1014", marginBottom: "3px" }}>Video interview</div>
                <div className="plabel" style={{ color: "#8A7A7D", letterSpacing: ".04em" }}>02:14 · communication &amp; structure</div>
              </div>
              <span style={{ flex: "none", fontSize: "20px", fontWeight: 800, color: "#F23F44", letterSpacing: "-.5px" }}>9.0</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "15px", padding: "18px 20px" }}>
              <div className="wave" style={{ flex: "none", width: "56px" }}>
                <div className="wbar" style={{ height: "9px", background: "#E7D3D5" }} /><div className="wbar" style={{ height: "20px", background: "#FF7A52" }} /><div className="wbar" style={{ height: "13px", background: "#E7D3D5" }} /><div className="wbar" style={{ height: "26px", background: "#FF7A52" }} /><div className="wbar" style={{ height: "11px", background: "#E7D3D5" }} /><div className="wbar" style={{ height: "18px", background: "#FF7A52" }} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: "13.5px", fontWeight: 700, color: "#1A1014", marginBottom: "3px" }}>Audio question</div>
                <div className="plabel" style={{ color: "#8A7A7D", letterSpacing: ".04em" }}>Clarity · fluency · pronunciation</div>
              </div>
              <span style={{ flex: "none", fontSize: "20px", fontWeight: 800, color: "#F23F44", letterSpacing: "-.5px" }}>8.4</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 20px", background: "#FBF3EE", borderTop: "1px solid #F0E2E3" }}>
              <span className="plabel" style={{ color: "#8A7A7D", letterSpacing: ".04em" }}>Overall · weighted</span>
              <span style={{ display: "flex", alignItems: "center", gap: "10px" }}><span style={{ fontSize: "11px", fontWeight: 700, color: "#8A7A7D" }}>Manual override available</span><span style={{ fontSize: "15px", fontWeight: 800, color: "#F23F44", background: "#FFE7E6", borderRadius: "8px", padding: "4px 11px" }}>8.7</span></span>
            </div>
          </div>
        </div>
      </div></div></section>

      <section className="sec"><div className="wrap"><div className="split">
        <div className="reveal" style={{ transitionDelay: ".08s" }}>
          <div className="mock">
            <div className="mocktop"><span className="mc" style={{ background: "#FF5F57" }} /><span className="mc" style={{ background: "#FEBC2E" }} /><span className="mc" style={{ background: "#28C840" }} /><span className="mockbar">Bias controls · Marketing Lead</span></div>
            <div className="mockbody" style={{ padding: "8px 0" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "15px 20px", borderBottom: "1px solid #F4ECEC" }}><span style={{ flex: "none", width: "32px", height: "32px", borderRadius: "9px", background: "#FFF0F0", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F23F44" strokeWidth="2"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" /></svg></span><div style={{ flex: 1 }}><div style={{ fontSize: "13.5px", fontWeight: 600 }}>Names, photos &amp; schools hidden</div><div className="plabel" style={{ letterSpacing: ".04em" }}>Blind screening · applied to all</div></div><span style={{ fontSize: "11px", fontWeight: 700, color: "#1F9D6B" }}>ON</span></div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "15px 20px", borderBottom: "1px solid #F4ECEC" }}><span style={{ flex: "none", width: "32px", height: "32px", borderRadius: "9px", background: "#FFF0F0", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F23F44" strokeWidth="2"><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg></span><div style={{ flex: 1 }}><div style={{ fontSize: "13.5px", fontWeight: 600 }}>Same rubric, every candidate</div><div className="plabel" style={{ letterSpacing: ".04em" }}>318 assessed · consistent criteria</div></div><span style={{ fontSize: "11px", fontWeight: 700, color: "#1F9D6B" }}>DONE</span></div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "15px 20px" }}><span style={{ flex: "none", width: "32px", height: "32px", borderRadius: "9px", background: "#FFF0F0", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F23F44" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /></svg></span><div style={{ flex: 1 }}><div style={{ fontSize: "13.5px", fontWeight: 600 }}>Audit trail exported</div><div className="plabel" style={{ letterSpacing: ".04em" }}>EEOC-defensible · PDF</div></div><span style={{ fontSize: "11px", fontWeight: 700, color: "#8A7A7D" }}>PDF</span></div>
            </div>
          </div>
        </div>
        <div className="reveal" style={{ order: 2 }}>
          <p className="eyebrow">Fair by design<b>.</b></p>
          <h2 className="h2" style={{ marginBottom: "20px" }}>Reduce bias with AI-driven assessments</h2>
          <p className="lead" style={{ marginBottom: "22px" }}>Mitigate bias to create equitable opportunity for every candidate. Attract diverse top talent that aligns with your culture — and prove it with a defensible audit trail.</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "13px" }}>
            <div className="chk"><span className="chki"><CheckIcon /></span><p className="body" style={{ margin: 0, fontSize: "14.5px" }}>Identify &amp; address bias effectively</p></div>
            <div className="chk"><span className="chki"><CheckIcon /></span><p className="body" style={{ margin: 0, fontSize: "14.5px" }}>Build a diverse, inclusive workplace</p></div>
            <div className="chk"><span className="chki"><CheckIcon /></span><p className="body" style={{ margin: 0, fontSize: "14.5px" }}>Ensure regulatory compliance</p></div>
            <div className="chk"><span className="chki"><CheckIcon /></span><p className="body" style={{ margin: 0, fontSize: "14.5px" }}>Strengthen teams with fresh perspectives</p></div>
          </div>
        </div>
      </div></div></section>

      <section className="sec" style={{ background: "#FBF3EE" }} id="platform"><div className="wrap">
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

      <SecuritySection eyebrow="Security & compliance" heading="Built to keep your organisation secure" sub="Top-tier admin controls, strong data governance and comprehensive compliance audits — every assessment protected and EEOC-defensible." />

      <Testimonials />

      <section className="sec"><div className="wrap">
        <div style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto 44px" }}>
          <p className="eyebrow reveal" style={{ justifyContent: "center" }}>Recognition<b>.</b></p>
          <h2 className="h2 reveal" style={{ transitionDelay: ".04s" }}>Awarded by the people who use it</h2>
        </div>
        <div className="reveal" style={{ display: "flex", flexWrap: "wrap", gap: "14px", justifyContent: "center" }}>
          <span className="award"><b>G2</b> Leader · Talent Assessment</span>
          <span className="award"><b>G2</b> High Performer · Enterprise</span>
          <span className="award"><b>G2</b> High Performer · Mid-Market</span>
          <span className="award"><b>G2</b> Best Relationship</span>
          <span className="award"><b>G2</b> Users Most Likely to Recommend</span>
          <span className="award"><b>G2</b> Best Meets Requirements</span>
        </div>
        <p className="reveal plabel" style={{ textAlign: "center", letterSpacing: ".12em", margin: "36px 0 0" }}>Backed by SHRM Labs · Google for Startups · Microsoft for Startups · NVIDIA Inception</p>
      </div></section>

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
