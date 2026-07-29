import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import CtaBand from "@/components/CtaBand";

const css = `
/* Testlify shared base — tokens, layout, reveal. Poppins + coral system. */
*{box-sizing:border-box;}
html{scroll-behavior:smooth;}
body{margin:0;font-family:'Poppins',sans-serif;-webkit-font-smoothing:antialiased;color:#1A1014;background:#fff;}
a{text-decoration:none;color:inherit;}
a.lnk{color:#F23F44;font-weight:600;}
a.lnk:hover{color:#DC3137;}
.wrap{max-width:1240px;margin:0 auto;padding:0 28px;}
.sec{padding:104px 28px;}
.eyebrow{font-size:12.5px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:#8A7A7D;margin:0 0 18px;}
.eyebrow b{color:#F23F44;font-weight:600;}
.h1{font-size:62px;line-height:1.04;font-weight:800;letter-spacing:-2px;margin:0;color:#1A1014;}
.h2{font-size:43px;line-height:1.08;font-weight:800;letter-spacing:-1.4px;margin:0;color:#1A1014;}
.h3{font-size:22px;line-height:1.25;font-weight:700;letter-spacing:-.4px;margin:0;color:#1A1014;}
.lead{font-size:19px;line-height:1.6;color:#5A4B4E;font-weight:400;}
.body{font-size:16px;line-height:1.66;color:#5A4B4E;}
.phero{padding:70px 28px 44px;background:radial-gradient(1100px 520px at 50% -10%,#FFF0EE 0%,rgba(255,240,238,0) 62%),#fff;text-align:center;}
.center-head{max-width:660px;margin:0 auto 44px;text-align:center;}
.reveal{opacity:0;transform:translateY(26px);transition:opacity .7s cubic-bezier(.2,.7,.2,1), transform .7s cubic-bezier(.2,.7,.2,1);}
.reveal.in{opacity:1;transform:none;}
.grid2{display:grid;grid-template-columns:1fr 1fr;gap:18px;}
.grid3{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;}
.grid4{display:grid;grid-template-columns:repeat(4,1fr);gap:18px;}
.split{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;}
.card{background:#fff;border:1px solid #EFE2E3;border-radius:20px;padding:30px 26px;transition:transform .25s ease,box-shadow .25s ease,border-color .25s;}
.card:hover{transform:translateY(-4px);box-shadow:0 22px 46px rgba(110,11,14,.10);border-color:#F4D2D3;}
.cic{width:46px;height:46px;border-radius:13px;background:#FFF0F0;color:#F23F44;display:flex;align-items:center;justify-content:center;margin-bottom:18px;}
.chk{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:14px;}
.chk li{position:relative;padding-left:32px;font-size:15px;line-height:1.55;color:#5A4B4E;}
.chk li>svg{position:absolute;left:0;top:3px;color:#F23F44;}
.pill{font-size:14.5px;font-weight:600;color:#5A4B4E;background:#fff;border:1px solid #EADDDE;border-radius:100px;padding:11px 22px;}
.statrow{display:grid;grid-template-columns:repeat(4,1fr);}
.stat{text-align:center;padding:4px 22px;}
.stat + .stat{border-left:1px solid #EFE3E4;}
.statn{font-size:44px;font-weight:800;letter-spacing:-1.6px;line-height:1;color:#F23F44;font-variant-numeric:tabular-nums;}
.statl{font-size:14px;color:#6C5A5D;font-weight:500;margin-top:12px;line-height:1.45;}
.darkcta{background:#1A1014;color:#fff;text-align:center;}
.darkcta .h2{color:#fff;}
.darkcta .lead{color:rgba(255,255,255,.78);}
.btnrow{display:flex;gap:14px;justify-content:center;flex-wrap:wrap;}
@media(max-width:920px){
  .h1{font-size:42px;letter-spacing:-1.4px;}
  .h2{font-size:32px;letter-spacing:-1px;}
  .sec{padding:72px 22px;}
  .grid2,.grid3,.grid4,.split{grid-template-columns:1fr;gap:34px;}
  .statrow{grid-template-columns:1fr 1fr;row-gap:34px;}
  .stat + .stat{border-left:none;}
}
h1,h2,h3,h4,.h1,.h2,.h3,.hero h1,.eyebrow{text-wrap:balance;}
p,li,.body,.lead,.sub,figcaption,blockquote{text-wrap:pretty;}/*om-balance-rule*/

.presstabs{display:flex;justify-content:center;gap:8px;margin:0 0 30px;}
.presstab{font-size:14px;font-weight:600;color:#8A7A7D;text-decoration:none;padding:9px 18px;border-radius:999px;}
.presstab.on{background:#fff;color:#1A1014;box-shadow:0 4px 14px rgba(110,11,14,.10);}
.newsrow{display:flex;flex-direction:column;gap:0;}
.newsitem{display:grid;grid-template-columns:120px 1fr auto;gap:20px;align-items:center;padding:22px 0;border-bottom:1px solid #F0E2E3;}
.newsitem:last-child{border-bottom:none;}
.newsdate{font-size:13px;color:#8A7A7D;font-weight:600;}
.newstitle{font-size:16px;font-weight:700;color:#1A1014;line-height:1.4;}
.newslink{font-size:14px;font-weight:700;color:#F23F44;text-decoration:none;white-space:nowrap;}
.newslink:hover{color:#A91E23;}
@media(max-width:720px){.newsitem{grid-template-columns:1fr;gap:6px;}}
`;

export default function PressKitPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <SiteHeader announcement="Press &amp; media enquiries welcome" announcementCta="Contact press" homeHref="/" />

      <section className="phero">
        <div className="wrap" style={{ maxWidth: "860px" }}>
          <div className="presstabs reveal">
            <a className="presstab" href="/press-room">Latest press</a>
            <a className="presstab" href="/awards">Awards and recognition</a>
            <a className="presstab on" href="/press-kit">Press kit</a>
          </div>
          <p className="eyebrow reveal" style={{ transitionDelay: ".04s" }}>Press &amp; media<b>.</b></p>
          <h1 className="h1 reveal" style={{ transitionDelay: ".08s" }}>Assets for press &amp; <span style={{ color: "#F23F44" }}>media</span></h1>
          <p className="lead reveal" style={{ margin: "22px auto 0", maxWidth: "640px", transitionDelay: ".12s" }}>Explore Testlify&apos;s official press kit, including brand guidelines, logos, product visuals, executive headshots, company facts, and media-ready resources.</p>
          <div className="grid2 reveal" style={{ marginTop: "36px", transitionDelay: ".16s", maxWidth: "640px", marginLeft: "auto", marginRight: "auto" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://testlify.com/wp-content/uploads/2026/05/Assets-for-press-media-867x1024.png" alt="Assets for press media" style={{ width: "100%", borderRadius: "16px", boxShadow: "0 16px 30px rgba(110,11,14,.10)" }} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://testlify.com/wp-content/uploads/2026/05/Press-and-media-kit-867x1024.png" alt="Press and media kit" style={{ width: "100%", borderRadius: "16px", boxShadow: "0 16px 30px rgba(110,11,14,.10)" }} />
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="center-head">
            <p className="eyebrow reveal">Downloads<b>.</b></p>
            <h2 className="h2 reveal" style={{ transitionDelay: ".04s" }}>Press and media kit</h2>
          </div>
          <div className="grid4">
            <div className="card reveal">
              <h3 className="h3" style={{ fontSize: "16px", marginBottom: "8px" }}>Testlify brand assets</h3>
              <a className="lnk" href="https://testlify.com/wp-content/uploads/2026/05/Testlify-Brand-Assets.zip" target="_blank" rel="noopener" style={{ fontSize: "14px" }}>Download →</a>
            </div>
            <div className="card reveal" style={{ transitionDelay: ".05s" }}>
              <h3 className="h3" style={{ fontSize: "16px", marginBottom: "8px" }}>Executive leadership headshots</h3>
              <a className="lnk" href="https://testlify.com/wp-content/uploads/2026/05/Executive-leadership-headshots.zip" target="_blank" rel="noopener" style={{ fontSize: "14px" }}>Download →</a>
            </div>
            <div className="card reveal" style={{ transitionDelay: ".1s" }}>
              <h3 className="h3" style={{ fontSize: "16px", marginBottom: "8px" }}>About Testlify demo video</h3>
              <a className="lnk" href="https://www.youtube.com/watch?v=MV2FFw_mDuE" target="_blank" rel="noopener" style={{ fontSize: "14px" }}>Watch now →</a>
            </div>
            <div className="card reveal" style={{ transitionDelay: ".12s" }}>
              <h3 className="h3" style={{ fontSize: "16px", marginBottom: "8px" }}>About Testlify interview library</h3>
              <a className="lnk" href="https://www.youtube.com/watch?v=N63GktITauw" target="_blank" rel="noopener" style={{ fontSize: "14px" }}>Watch now →</a>
            </div>
            <div className="card reveal" style={{ transitionDelay: ".15s" }}>
              <h3 className="h3" style={{ fontSize: "16px", marginBottom: "8px" }}>Founder bios &amp; company boilerplate</h3>
              <a className="lnk" href="https://docs.google.com/document/d/1z0wRm7Alt1eL_AJ3xzMc3_mxzt5Xi3d820jLbSb4ios/export?format=pdf" target="_blank" rel="noopener" style={{ fontSize: "14px" }}>Download →</a>
            </div>
          </div>
        </div>
      </section>

      <section className="sec" style={{ background: "#FBF3EE" }}>
        <div className="wrap">
          <div className="center-head">
            <p className="eyebrow reveal">Learn more<b>.</b></p>
            <h2 className="h2 reveal" style={{ transitionDelay: ".04s" }}>Resources for modern hiring teams</h2>
          </div>
          <div className="grid3" style={{ marginTop: "36px" }}>
            <div className="card reveal">
              <h3 className="h3" style={{ fontSize: "15.5px", marginBottom: "10px" }}>What are the top platforms for pre-hire assessments in enterprises?</h3>
              <a className="lnk" href="https://testlify.com/top-10-pre-hire-assessment-platforms-for-enterprises/" target="_blank" rel="noopener" style={{ fontSize: "14px" }}>Read the article →</a>
            </div>
            <div className="card reveal" style={{ transitionDelay: ".05s" }}>
              <h3 className="h3" style={{ fontSize: "15.5px", marginBottom: "10px" }}>Best skills assessment question libraries: 3500+ skills coverage (Tech &amp; non-tech)</h3>
              <a className="lnk" href="https://testlify.com/best-skills-assessment-question-libraries/" target="_blank" rel="noopener" style={{ fontSize: "14px" }}>Read the article →</a>
            </div>
            <div className="card reveal" style={{ transitionDelay: ".1s" }}>
              <h3 className="h3" style={{ fontSize: "15.5px", marginBottom: "10px" }}>How does skills mapping enable skills-based organizations?</h3>
              <a className="lnk" href="https://testlify.com/skills-based-organizations/" target="_blank" rel="noopener" style={{ fontSize: "14px" }}>Read the article →</a>
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="center-head">
            <p className="eyebrow reveal">HR tools<b>.</b></p>
            <h2 className="h2 reveal" style={{ transitionDelay: ".04s" }}>Free tools &amp; calculators for HR teams</h2>
          </div>
          <div className="grid3" style={{ marginTop: "36px" }}>
            <div className="card reveal">
              <h3 className="h3" style={{ fontSize: "15.5px", marginBottom: "10px" }}>Free AI job description generator</h3>
              <a className="lnk" href="/job-description-generator" style={{ fontSize: "14px" }}>Try now →</a>
            </div>
            <div className="card reveal" style={{ transitionDelay: ".05s" }}>
              <h3 className="h3" style={{ fontSize: "15.5px", marginBottom: "10px" }}>Attrition rate calculator</h3>
              <a className="lnk" href="/attrition-rate-calculator" style={{ fontSize: "14px" }}>Calculate attrition rates →</a>
            </div>
            <div className="card reveal" style={{ transitionDelay: ".1s" }}>
              <h3 className="h3" style={{ fontSize: "15.5px", marginBottom: "10px" }}>Employee Net Promoter Score (eNPS) calculator</h3>
              <a className="lnk" href="/free-employee-net-promoter-score-enps-calculator" style={{ fontSize: "14px" }}>Know eNPS →</a>
            </div>
          </div>
          <div className="reveal" style={{ textAlign: "center", marginTop: "26px", transitionDelay: ".15s" }}>
            <a className="lnk" href="/resource-tools-detail">Browse 12+ free hiring calculators →</a>
          </div>
        </div>
      </section>

      <section className="sec" style={{ background: "#FBF3EE" }}>
        <div className="wrap">
          <div className="center-head">
            <p className="eyebrow reveal">About<b>.</b></p>
            <h2 className="h2 reveal" style={{ transitionDelay: ".04s" }}>About Testlify</h2>
          </div>
          <div className="reveal" style={{ maxWidth: "760px", margin: "0 auto", transitionDelay: ".08s" }}>
            <p className="body">Testlify is a leading AI-native skills assessment and interviewing platform helping companies hire faster, smarter, and more confidently.</p>
            <p className="body" style={{ marginTop: "14px" }}>With a library of 3,500+ technical and non-technical skill assessments, Testlify helps companies identify top talent across engineering, sales, customer support, marketing, operations, and more.</p>
            <p className="body" style={{ marginTop: "14px" }}>Trusted by 40,000+ recruiters and 1,500+ companies across 50+ countries, Testlify supports organizations of all sizes in building stronger, fairer, and more efficient hiring processes. The platform is built with enterprise-grade security and compliance standards, including SOC 2, GDPR, and ISO certifications.</p>
            <p className="body" style={{ marginTop: "14px" }}>Testlify has also been recognized through leading industry programs and startup ecosystems, including SHRM Labs&apos; Workplace Innovator Program, and is backed by industry leaders and HR innovators shaping the future of work.</p>
            <p className="body" style={{ marginTop: "14px" }}>From startups to global enterprises, Testlify is helping teams reduce bias, improve hiring quality, and make confident talent decisions at scale.</p>
            <p className="body" style={{ marginTop: "14px" }}>For the latest company announcements, media coverage, awards, and brand resources, visit the <a className="lnk" href="/press-room">Testlify Press &amp; Media page</a>.</p>
          </div>
        </div>
      </section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
