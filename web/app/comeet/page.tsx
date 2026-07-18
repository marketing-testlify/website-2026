import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaBand from '@/components/CtaBand';
import CtaButton from '@/components/CtaButton';

export default function ComeetPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
.wrap{max-width:1240px;margin:0 auto;padding:0 28px;}
.sec{padding:88px 28px;}
.eyebrow{font-size:12.5px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:#8A7A7D;margin:0 0 16px;}
.eyebrow b{color:#F23F44;font-weight:700;}
.h2{font-size:32px;line-height:1.14;font-weight:800;letter-spacing:-1px;margin:0;color:#1A1014;}
.lead{font-size:18px;line-height:1.62;color:#5A4B4E;margin:0;}
.cs-hero{background:radial-gradient(1000px 520px at 80% -14%,#FFF0EE 0%,rgba(255,240,238,0) 60%),#fff;padding:46px 28px 0;}
.cs-crumb{font-size:13px;color:#9A878A;font-weight:600;margin:0 0 30px;display:flex;align-items:center;gap:9px;flex-wrap:wrap;}
.cs-crumb .sep{color:#D6C4C7;}
.cs-logo{width:150px;height:52px;margin-bottom:24px;}
.cs-h1{font-size:44px;line-height:1.1;font-weight:800;letter-spacing:-1.6px;margin:0;max-width:820px;}
.cs-sub{font-size:19px;line-height:1.55;color:#5A4B4E;margin:20px 0 0;max-width:680px;}
.cs-metrics{display:grid;grid-template-columns:repeat(3,1fr);gap:0;margin-top:48px;border:1px solid #F0E2E3;border-radius:20px;overflow:hidden;background:#fff;box-shadow:0 20px 46px rgba(110,11,14,.08);}
.cs-metric{padding:30px 30px;border-right:1px solid #F4E7E8;}
.cs-metric:last-child{border-right:0;}
.cs-metric .n{font-size:40px;font-weight:800;letter-spacing:-1.4px;color:#F23F44;line-height:1;}
.cs-metric .l{font-size:14px;color:#6C5A5D;margin-top:11px;line-height:1.45;}
.cs-body{display:grid;grid-template-columns:1fr 336px;gap:64px;align-items:start;}
.cs-block{margin-bottom:44px;}
.cs-block:last-child{margin-bottom:0;}
.cs-block h2{font-size:24px;font-weight:800;letter-spacing:-.6px;color:#1A1014;margin:0 0 16px;}
.cs-block p{font-size:16.5px;line-height:1.72;color:#5A4B4E;margin:0 0 15px;}
.cs-block p:last-child{margin-bottom:0;}
.cs-quote{background:#FBF3EE;border-radius:20px;padding:38px 40px;margin:8px 0 44px;}
.cs-quote p{font-size:23px;line-height:1.42;font-weight:600;letter-spacing:-.4px;color:#1A1014;margin:0 0 22px;}
.cs-qby{display:flex;align-items:center;gap:14px;}
.cs-qav{width:48px;height:48px;border-radius:50%;overflow:hidden;flex:none;background:#F0E2E3;}
.cs-qn{font-size:15px;font-weight:700;color:#1A1014;}
.cs-qr{font-size:13.5px;color:#8A7A7D;}
.cs-card{position:sticky;top:120px;background:#fff;border:1px solid #EFE2E3;border-radius:20px;padding:28px;box-shadow:0 22px 50px rgba(110,11,14,.09);}
.cs-card h3{font-size:12px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#8A7A7D;margin:0 0 18px;}
.cs-facts{list-style:none;margin:0 0 22px;padding:0;}
.cs-facts li{padding:13px 0;border-bottom:1px solid #F4E7E8;}
.cs-facts li:last-child{border-bottom:0;}
.cs-facts .k{font-size:12.5px;color:#9A878A;font-weight:500;margin-bottom:3px;}
.cs-facts .v{font-size:15px;color:#1A1014;font-weight:700;}
.cs-prod{display:flex;flex-wrap:wrap;gap:8px;}
.cs-prodchip{font-size:12.5px;font-weight:600;color:#46383C;background:#FFF0EF;border:1px solid #FCE0DE;padding:6px 12px;border-radius:100px;}
.cs-card .btn{margin-top:22px;}
.cs-relgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;}
.cs-relcard{background:#fff;border:1px solid #EFE2E3;border-radius:18px;padding:26px;transition:transform .3s cubic-bezier(.2,.7,.3,1),box-shadow .3s,border-color .3s;display:block;}
.cs-relcard:hover{transform:translateY(-4px);border-color:#FBD0D1;box-shadow:0 16px 34px rgba(110,11,14,.10);}
.cs-relmetric{font-size:22px;font-weight:800;letter-spacing:-.6px;color:#F23F44;margin-bottom:12px;}
.cs-rellogo{font-size:14px;font-weight:700;color:#1A1014;margin-bottom:8px;}
.cs-relcard p{font-size:13.5px;line-height:1.55;color:#6C5A5D;margin:0;}
.cs-sh{max-width:640px;margin:0 auto 40px;text-align:center;}
@media(max-width:920px){
  .cs-h1{font-size:33px;letter-spacing:-1px;}
  .h2{font-size:26px;}
  .sec{padding:60px 22px;}
  .cs-metrics{grid-template-columns:1fr;}
  .cs-metric{border-right:0;border-bottom:1px solid #F4E7E8;}
  .cs-metric:last-child{border-bottom:0;}
  .cs-body{grid-template-columns:1fr;gap:40px;}
  .cs-card{position:static;}
  .cs-relgrid{grid-template-columns:1fr;}
}
h1,h2,h3,h4,.h1,.h2,.h3,.hero h1,.eyebrow{text-wrap:balance;}p,li,.body,.lead,.sub,figcaption,blockquote{text-wrap:pretty;}/*om-balance-rule*/
` }} />

      <SiteHeader announcement="See how Comeet tightened its hiring funnel" />

      <section className="cs-hero"><div className="wrap">
        <p className="cs-crumb reveal in"><Link href="/customer-success-stories">Customers</Link><span className="sep">›</span><span>Recruiting software</span><span className="sep">›</span><span>Comeet</span></p>
        <div className="cs-logo reveal in"></div>
        <h1 className="cs-h1 reveal in">How Comeet tightened its funnel with structured assessment</h1>
        <p className="cs-sub reveal in">Comeet helps teams run collaborative hiring. To practise what they preach, they added skills-based screening with Testlify.</p>
        <div className="cs-metrics reveal in">
          <div className="cs-metric"><div className="n">3.4×</div><div className="l">more qualified hires</div></div>
          <div className="cs-metric"><div className="n">47%</div><div className="l">less time screening</div></div>
          <div className="cs-metric"><div className="n">91%</div><div className="l">assessment completion</div></div>
        </div>
      </div></section>

      <section className="sec"><div className="wrap">
        <div className="cs-body">
          <div>
            <div className="cs-block reveal"><h2>The challenge</h2>
              <p>Collaborative hiring is powerful, but without an objective first filter, too many under-qualified candidates reached the team, diluting everyone’s time.</p>
              <p>Comeet wanted a consistent skills bar at the top of the funnel so collaboration focused only on strong candidates.</p>
            </div>
            <div className="cs-block reveal"><h2>The solution</h2>
              <p>Comeet added Testlify assessments as the first step, so every applicant proves ability before the hiring team weighs in.</p>
              <p>Structured scores and skill breakdowns give reviewers a shared, evidence-based starting point for their discussion.</p>
            </div>
            <div className="cs-quote reveal">
              <p>“Structured assessment gave our collaborative process a solid foundation. The team now debates strong candidates — not whether someone should even be in the room.”</p>
              <div className="cs-qby"><span className="cs-qav"></span><span><span className="cs-qn">Talent Team</span><br /><span className="cs-qr">Comeet</span></span></div>
            </div>
            <div className="cs-block reveal"><h2>The results</h2>
              <p>Comeet saw 3.4× more qualified hires and 47% less time spent screening, with completion at 91%.</p>
              <p>Their collaborative hiring got sharper because every conversation started from evidence.</p>
            </div>
          </div>
          <aside className="cs-card reveal">
            <h3>Company snapshot</h3>
            <ul className="cs-facts">
              <li><div className="k">Industry</div><div className="v">Recruiting software</div></li>
              <li><div className="k">Company size</div><div className="v">51–200 employees</div></li>
              <li><div className="k">Location</div><div className="v">Global</div></li>
              <li><div className="k">Use case</div><div className="v">Collaborative hiring</div></li>
            </ul>
            <div className="k" style={{ fontSize: '12.5px', color: '#9A878A', fontWeight: 500, marginBottom: '10px' }}>Products used</div>
            <div className="cs-prod">
              <span className="cs-prodchip">Skill assessments</span>
              <span className="cs-prodchip">AI resume screener</span>
              <span className="cs-prodchip">Video interviews</span>
            </div>
            <CtaButton label="Start your free trial" href="#" variant="primary" size="md" icon="arrow" />
          </aside>
        </div>
      </div></section>

      <section className="sec" style={{ background: '#FBF3EE' }}><div className="wrap">
        <div className="cs-sh"><p className="eyebrow reveal">More stories<b>.</b></p><h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>Teams hiring smarter with Testlify</h2></div>
        <div className="cs-relgrid">
          <Link className="cs-relcard reveal" href="/customer-success-stories-detail"><div className="cs-relmetric">58% less time-to-hire</div><div className="cs-rellogo">Arch Advisory Group</div><p>Skills-first screening made every hire defensible.</p></Link>
          <Link className="cs-relcard reveal" href="/customer-success-stories-detail"><div className="cs-relmetric">44% lower cost per hire</div><div className="cs-rellogo">Playroll</div><p>We scaled global hiring without lowering the bar.</p></Link>
          <Link className="cs-relcard reveal" href="/customer-success-stories-detail"><div className="cs-relmetric">3× qualified hires</div><div className="cs-rellogo">Udder</div><p>Engineers only interview people worth their time.</p></Link>
        </div>
      </div></section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
