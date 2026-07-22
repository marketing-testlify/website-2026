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
`;

export default function ReferralProgramPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <SiteHeader announcement="Refer a team, earn recurring commission" announcementCta="Join the program" />

      <section className="phero">
        <div className="wrap" style={{ maxWidth: "860px" }}>
          <p className="eyebrow reveal">Referral program<b>.</b></p>
          <h1 className="h1 reveal" style={{ transitionDelay: ".04s" }}>Share Testlify.<br />Get rewarded.</h1>
          <p className="lead reveal" style={{ margin: "22px auto 0", maxWidth: "640px", transitionDelay: ".08s" }}>Know a team drowning in resumes? Refer them to Testlify and earn recurring commission for every account that signs up — while helping them hire better.</p>
          <div className="reveal btnrow" style={{ marginTop: "30px", transitionDelay: ".12s" }}>
            <CtaButton label="Join the program" href="/contact" variant="primary" size="md" icon="arrow" />
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="center-head">
            <p className="eyebrow reveal">How it works<b>.</b></p>
            <h2 className="h2 reveal" style={{ transitionDelay: ".04s" }}>Three steps to earning</h2>
          </div>
          <div className="grid3">
            <div className="card reveal"><div style={{ width: "44px", height: "44px", borderRadius: "12px", background: "#F23F44", color: "#fff", fontWeight: 800, fontSize: "18px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>1</div><h3 className="h3" style={{ fontSize: "18px", marginBottom: "8px" }}>Get your link</h3><p className="body" style={{ fontSize: "14px" }}>Sign up in minutes and grab your unique referral link.</p></div>
            <div className="card reveal" style={{ transitionDelay: ".06s" }}><div style={{ width: "44px", height: "44px", borderRadius: "12px", background: "#F23F44", color: "#fff", fontWeight: 800, fontSize: "18px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>2</div><h3 className="h3" style={{ fontSize: "18px", marginBottom: "8px" }}>Share it</h3><p className="body" style={{ fontSize: "14px" }}>Send it to hiring teams, post it, or add it to your content.</p></div>
            <div className="card reveal" style={{ transitionDelay: ".12s" }}><div style={{ width: "44px", height: "44px", borderRadius: "12px", background: "#F23F44", color: "#fff", fontWeight: 800, fontSize: "18px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>3</div><h3 className="h3" style={{ fontSize: "18px", marginBottom: "8px" }}>Earn</h3><p className="body" style={{ fontSize: "14px" }}>Collect recurring commission for every paying account you refer.</p></div>
          </div>
        </div>
      </section>

      <section className="sec" style={{ background: "#FBF3EE" }}>
        <div className="wrap split">
          <div className="reveal">
            <p className="eyebrow">Why it&apos;s worth it<b>.</b></p>
            <h2 className="h2" style={{ marginBottom: "22px" }}>Good for you, good for them</h2>
            <ul className="chk">
              <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>Recurring commission, not a one-off payout</li>
              <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>No cap on how many teams you refer</li>
              <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>A product teams genuinely love — easy to recommend</li>
              <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>Real-time dashboard to track referrals and earnings</li>
            </ul>
          </div>
          <div className="reveal" style={{ transitionDelay: ".08s", background: "linear-gradient(160deg,#FFF4F3,#FBE9E9)", border: "1px solid #F6DCDD", borderRadius: "24px", padding: "40px" }}>
            <p className="h3" style={{ fontSize: "22px", lineHeight: 1.4, fontWeight: 600 }}>Ready to start earning? Join the Testlify referral program in minutes.</p>
            <div style={{ marginTop: "24px" }}>
              <CtaButton label="Get your link" href="/contact" variant="primary" size="md" icon="arrow" />
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
