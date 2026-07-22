import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import CtaButton from "@/components/CtaButton";
import CtaBand from "@/components/CtaBand";

const css = `
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
.grid3{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;}
.split{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;}
.card{background:#fff;border:1px solid #EFE2E3;border-radius:20px;padding:30px 26px;transition:transform .25s ease,box-shadow .25s ease,border-color .25s;}
.card:hover{transform:translateY(-4px);box-shadow:0 22px 46px rgba(110,11,14,.10);border-color:#F4D2D3;}
.chk{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:14px;}
.chk li{position:relative;padding-left:32px;font-size:15px;line-height:1.55;color:#5A4B4E;}
.chk li>svg{position:absolute;left:0;top:3px;color:#F23F44;}
.btnrow{display:flex;gap:14px;justify-content:center;flex-wrap:wrap;}
@media(max-width:920px){
  .h1{font-size:42px;letter-spacing:-1.4px;}
  .h2{font-size:32px;letter-spacing:-1px;}
  .sec{padding:72px 22px;}
  .grid3,.split{grid-template-columns:1fr;gap:34px;}
}
h1,h2,h3,h4,.h1,.h2,.h3,.hero h1,.eyebrow{text-wrap:balance;}
p,li,.body,.lead,.sub,figcaption,blockquote{text-wrap:pretty;}/*om-balance-rule*/
.code{background:#1A1014;border-radius:18px;padding:26px 28px;font-family:'SFMono-Regular',Consolas,'Liberation Mono',Menlo,monospace;font-size:13.5px;line-height:1.7;color:#F3E9E9;overflow-x:auto;box-shadow:0 16px 30px rgba(110,11,14,.16);}
.code .k{color:#FF9E7A;}.code .s{color:#8FD4A8;}.code .c{color:#8A7A7D;}
`;

export default function ApiPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <SiteHeader announcement="Build with the Testlify API" announcementCta="Read the docs" />

      <section className="phero">
        <div className="wrap" style={{ maxWidth: 860 }}>
          <p className="eyebrow reveal">Developer API<b>.</b></p>
          <h1 className="h1 reveal" style={{ transitionDelay: ".04s" }}>Assessment,<br />built into your stack</h1>
          <p className="lead reveal" style={{ margin: "22px auto 0", maxWidth: 640, transitionDelay: ".08s" }}>A clean REST API and webhooks let you create assessments, invite candidates and pull results programmatically — so Testlify fits right into your product or workflow.</p>
          <div className="reveal btnrow" style={{ marginTop: 30, transitionDelay: ".12s" }}>
            <CtaButton label="Get API access" href="/contact" variant="primary" size="md" icon="arrow" />
            <CtaButton label="Integration program" href="/integration-program" variant="ghost" size="md" icon="none" />
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap split">
          <div className="reveal">
            <p className="eyebrow">Simple by design<b>.</b></p>
            <h2 className="h2" style={{ marginBottom: 20 }}>A few lines to your first assessment</h2>
            <p className="body">Authenticate, create an assessment, and invite a candidate with a handful of calls. Webhooks push results back to you the moment they&apos;re ready.</p>
            <ul className="chk" style={{ marginTop: 22 }}>
              <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>REST endpoints with predictable JSON</li>
              <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>Webhooks for real-time result events</li>
              <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>Scoped API keys and sandbox environment</li>
            </ul>
          </div>
          <div className="reveal" style={{ transitionDelay: ".08s" }}>
            <div className="code"><span className="c"># Invite a candidate to an assessment</span><br />POST /v1/invitations<br />Authorization: Bearer <span className="s">&lt;API_KEY&gt;</span><br /><br />{"{"}<br />&nbsp;&nbsp;<span className="k">&quot;assessment_id&quot;</span>: <span className="s">&quot;asmt_9k2&quot;</span>,<br />&nbsp;&nbsp;<span className="k">&quot;email&quot;</span>: <span className="s">&quot;jordan@acme.com&quot;</span>,<br />&nbsp;&nbsp;<span className="k">&quot;send_email&quot;</span>: <span className="k">true</span><br />{"}"}</div>
          </div>
        </div>
      </section>

      <section className="sec" style={{ background: "#FBF3EE" }}>
        <div className="wrap">
          <div className="center-head">
            <p className="eyebrow reveal">What you can build<b>.</b></p>
            <h2 className="h2 reveal" style={{ transitionDelay: ".04s" }}>Endless possibilities</h2>
          </div>
          <div className="grid3">
            <div className="card reveal"><h3 className="h3" style={{ fontSize: 18, marginBottom: 8 }}>Embed assessment</h3><p className="body" style={{ fontSize: 14 }}>Add skills testing directly inside your own product or careers site.</p></div>
            <div className="card reveal" style={{ transitionDelay: ".06s" }}><h3 className="h3" style={{ fontSize: 18, marginBottom: 8 }}>Automate workflows</h3><p className="body" style={{ fontSize: 14 }}>Trigger assessments from your ATS or CRM and sync results automatically.</p></div>
            <div className="card reveal" style={{ transitionDelay: ".12s" }}><h3 className="h3" style={{ fontSize: 18, marginBottom: 8 }}>Custom reporting</h3><p className="body" style={{ fontSize: 14 }}>Pull scores and analytics into your own dashboards and data warehouse.</p></div>
          </div>
        </div>
      </section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
