import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaButton from '@/components/CtaButton';
import FAQ from '@/components/FAQ';
import SecuritySection from '@/components/SecuritySection';
import Testimonials from '@/components/Testimonials';
import Recognition from '@/components/Recognition';
import CtaBand from '@/components/CtaBand';

const CSS = `
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
}

h1,h2,h3,h4,.h1,.h2,.h3,.hero h1,.eyebrow{text-wrap:balance;}p,li,.body,.lead,.sub,figcaption,blockquote{text-wrap:pretty;}/*om-balance-rule*/
.tsm-sec{background:#FBF3EE !important;}
`;

const faqItems = [
  { q: 'What is the purpose of talent assessments?', a: 'Talent assessments help organizations find the best people by providing insights into candidates’ technical skills and aptitudes to predict their chances of success in a job.' },
  { q: 'Are talent assessments reliable?', a: 'Our talent assessments are developed by experts using proven frameworks and are constantly monitored for effectiveness, making them reliable and trustworthy.' },
  { q: 'How are talent assessments designed for diversity?', a: 'Our platform is designed with diversity in mind and allows organizations to hide details like gender, age, or race to ensure equal opportunities for all candidates.' },
  { q: 'What kind of insights do talent assessments provide?', a: 'After candidates complete their assessments, reports, and insights are generated to help organizations better understand each individual’s strengths and weaknesses and select the best talent.' },
  { q: 'How do talent assessments benefit recruiters?', a: 'Talent assessments are a powerful tool for recruiters as they provide insights into candidates’ skills and aptitudes, making it easier to evaluate and compare individuals and select the best fit for a job.' },
];

const CheckIcon = () => (
  <span className="chki">
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
  </span>
);

export default function SciencePage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <SiteHeader announcement="New — AI chat-simulation interviews are live. Assess real judgement, not just answers." announcementCta="See how" />

      <section className="hero"><div className="wrap"><div className="herogrid">
        <div>
          <div className="reveal" style={{ transitionDelay: '.02s' }}><span className="pill"><span className="pilltag">THE SCIENCE</span> Validity you can defend</span></div>
          <h1 className="h1 reveal" style={{ marginTop: '22px', transitionDelay: '.06s' }}>Made for people,<br />built on <span className="acc">science.</span></h1>
          <p className="lead reveal" style={{ marginTop: '22px', maxWidth: '520px', transitionDelay: '.1s' }}>The purpose of our talent assessments is to help organisations find the best people — an enjoyable experience for candidates and simple for recruiters to evaluate and compare individuals.</p>
          <div className="heroctas reveal" style={{ transitionDelay: '.14s' }}>
            <CtaButton label="Try for free" href="/pricing" variant="primary" size="md" icon="arrow" magnetic />
            <CtaButton label="Book a demo" href="#" variant="secondary" size="md" icon="play" />
          </div>
          <div className="trust reveal" style={{ transitionDelay: '.18s' }}><span style={{ display: 'inline-flex', alignItems: 'center', gap: '7px' }}><span style={{ color: '#F23F44', fontWeight: 700 }}>✓</span>7-day free trial</span><span style={{ display: 'inline-flex', alignItems: 'center', gap: '7px' }}><span style={{ color: '#F23F44', fontWeight: 700 }}>✓</span>No credit card required</span></div>
        </div>
        <div className="reveal" style={{ position: 'relative', transitionDelay: '.12s' }}>
          <div className="matchtag"><i></i> Auto-scored — 0 manual review</div>
          <div className="mock">
            <div className="mocktop"><span className="mc" style={{ background: '#FF5F57' }}></span><span className="mc" style={{ background: '#FEBC2E' }}></span><span className="mc" style={{ background: '#28C840' }}></span><span className="mockbar">app.testlify.com/report/senior-pm</span></div>
            <div className="mockbody">
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                <div className="ring"><div className="ringin"><div style={{ fontSize: '20px', fontWeight: 800, color: '#1A1014' }}>92</div><div className="plabel" style={{ fontSize: '8px' }}>Fit</div></div></div>
                <div><div className="h3" style={{ fontSize: '17px' }}>Amara Okoye</div><div className="body" style={{ fontSize: '13px', marginTop: '2px' }}>Senior Product Manager · verified assessment</div><div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', marginTop: '7px', background: '#FFF0F0', color: '#F23F44', fontSize: '11px', fontWeight: 700, letterSpacing: '.04em', padding: '3px 9px', borderRadius: '99px' }}>TOP 4%</div></div>
              </div>
              <div className="skrow"><div className="skhead"><span className="muted">Product strategy</span><span>Expert</span></div><div className="bar"><div className="barf" style={{ width: '94%' }}></div></div></div>
              <div className="skrow"><div className="skhead"><span className="muted">Stakeholder judgement</span><span>Strong</span></div><div className="bar"><div className="barf" style={{ width: '86%' }}></div></div></div>
              <div className="skrow"><div className="skhead"><span className="muted">Data &amp; analytics</span><span>Proven</span></div><div className="bar"><div className="barf" style={{ width: '81%' }}></div></div></div>
              <div style={{ marginTop: '16px', padding: '13px 15px', borderRadius: '12px', background: '#FCF3F2', border: '1px solid #F4E0E0', fontSize: '12.5px', color: '#5A4B4E', lineHeight: 1.5 }}><b className="acc">AI summary:</b> Consistent, evidence-backed reasoning under ambiguity. Chat-simulation flagged strong prioritisation instincts.</div>
            </div>
          </div>
          <div className="floattag"><span style={{ fontSize: '22px', fontWeight: 800, letterSpacing: '-1px', color: '#F23F44' }}>30<span style={{ fontSize: '12px' }}>min</span></span><div style={{ fontSize: '12px', fontWeight: 600, lineHeight: 1.3 }}>typical<br />assessment</div></div>
        </div>
      </div></div></section>

      <section className="sec" style={{ background: '#FBF3EE' }}><div className="wrap"><div className="split">
        <div className="reveal">
          <p className="eyebrow">Developed by experts<b>.</b></p>
          <h2 className="h2" style={{ marginBottom: '20px' }}>Developed by experts</h2>
          <p className="lead" style={{ marginBottom: '18px' }}>Our process of creating tests is guided by proven frameworks to maintain the highest standards possible. These frameworks guide how all our tests are written, reviewed, and approved.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '13px' }}>
            <div className="chk"><CheckIcon /><p className="body" style={{ margin: 0 }}>Subject-matter experts develop and structure questions for each area of expertise.</p></div>
            <div className="chk"><CheckIcon /><p className="body" style={{ margin: 0 }}>Guided by our testing team at every step.</p></div>
            <div className="chk"><CheckIcon /><p className="body" style={{ margin: 0 }}>Each test is further reviewed by experts before it goes live.</p></div>
          </div>
          <Link href="/features" className="intglink" style={{ marginTop: '26px' }}>Learn more<span>→</span></Link>
        </div>
        <div className="reveal" style={{ transitionDelay: '.08s' }}><div style={{ borderRadius: '20px', overflow: 'hidden', border: '1px solid #F0E2E3', boxShadow: '0 30px 60px rgba(110,11,14,.12)', background: '#fff' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://testlify.com/wp-content/uploads/2024/10/Developed-by-experts.png" alt="Developed by experts" style={{ width: '100%', height: 'auto', display: 'block' }} />
        </div></div>
      </div></div></section>

      <section className="sec" id="chat"><div className="wrap"><div className="split">
        <div className="reveal" style={{ transitionDelay: '.08s' }}><div style={{ borderRadius: '20px', overflow: 'hidden', border: '1px solid #F0E2E3', boxShadow: '0 30px 60px rgba(110,11,14,.12)', background: '#fff' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://testlify.com/wp-content/uploads/2024/10/Intelligent-monitoring.png" alt="Intelligent monitoring" style={{ width: '100%', height: 'auto', display: 'block' }} />
        </div></div>
        <div className="reveal" style={{ order: 2 }}>
          <p className="eyebrow">Intelligent monitoring<b>.</b></p>
          <h2 className="h2" style={{ marginBottom: '20px' }}>Intelligent monitoring</h2>
          <p className="lead" style={{ marginBottom: '18px' }}>Even after our tests are published, we monitor their effectiveness. We use intelligent data monitoring to constantly assess and identify test performance.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '13px' }}>
            <div className="chk"><CheckIcon /><p className="body" style={{ margin: 0 }}>We gather feedback from customers on the candidates they hire and how they perform on the job.</p></div>
            <div className="chk"><CheckIcon /><p className="body" style={{ margin: 0 }}>Constant review and refining delivers advanced, accurate skills assessments you can depend upon.</p></div>
          </div>
        </div>
      </div></div></section>

      <section className="sec" style={{ background: '#FBF3EE' }}><div className="wrap"><div className="split">
        <div className="reveal">
          <p className="eyebrow">Designed for diversity<b>.</b></p>
          <h2 className="h2" style={{ marginBottom: '20px' }}>Designed for diversity</h2>
          <p className="lead" style={{ marginBottom: '18px' }}>Diversity in the workplace is a priority more than ever. Our platform is engineered from the ground up with diversity in mind. This ensures that every candidate is evaluated on their merits.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '13px' }}>
            <div className="chk"><CheckIcon /><p className="body" style={{ margin: 0 }}>Constantly updated and refined to meet the needs of organizations committed to workplace diversity.</p></div>
            <div className="chk"><CheckIcon /><p className="body" style={{ margin: 0 }}>Hide details like gender, age or race so every candidate gets an equal chance at opportunities.</p></div>
          </div>
          <Link href="/solution-index" className="intglink" style={{ marginTop: '26px' }}>More on diversity<span>→</span></Link>
        </div>
        <div className="reveal" style={{ transitionDelay: '.08s' }}><div style={{ borderRadius: '20px', overflow: 'hidden', border: '1px solid #F0E2E3', boxShadow: '0 30px 60px rgba(110,11,14,.12)', background: '#fff' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://testlify.com/wp-content/uploads/2024/10/Designed-for-diversity.png" alt="Designed for diversity" style={{ width: '100%', height: 'auto', display: 'block' }} />
        </div></div>
      </div></div></section>

      <section className="sec"><div className="wrap"><div className="split">
        <div className="reveal" style={{ transitionDelay: '.08s' }}><div style={{ borderRadius: '20px', overflow: 'hidden', border: '1px solid #F0E2E3', boxShadow: '0 30px 60px rgba(110,11,14,.12)', background: '#fff' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://testlify.com/wp-content/uploads/2024/10/Insights-that-count.png" alt="Insights that count" style={{ width: '100%', height: 'auto', display: 'block' }} />
        </div></div>
        <div className="reveal" style={{ order: 2 }}>
          <p className="eyebrow">Insights that count<b>.</b></p>
          <h2 className="h2" style={{ marginBottom: '20px' }}>Insights that count</h2>
          <p className="lead" style={{ marginBottom: '18px' }}>Our insights are accurate and reliable. After candidates complete their assessments, effortlessly generate reports and insights. These insights help you and your team better understand each individual&rsquo;s strengths and weaknesses.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '13px' }}>
            <div className="chk"><CheckIcon /><p className="body" style={{ margin: 0 }}>Understand each individual&rsquo;s strengths and weaknesses by skill.</p></div>
            <div className="chk"><CheckIcon /><p className="body" style={{ margin: 0 }}>Select the candidates that best meet your requirements to shortlist the best talent.</p></div>
          </div>
        </div>
      </div></div></section>

      <section className="sec" style={{ background: '#FBF3EE' }} id="platform"><div className="wrap">
        <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 44px' }}>
          <p className="eyebrow reveal" style={{ justifyContent: 'center' }}>Integrations<b>.</b></p>
          <h2 className="h2 reveal" style={{ transitionDelay: '.06s' }}>Testlify integrates seamlessly with 100+ ATS tools</h2>
          <p className="lead reveal" style={{ marginTop: '14px', transitionDelay: '.12s' }}>Native integrations with Workday, Greenhouse, Lever, iCIMS and 97 more ATS platforms — no middleware, no data mapping required.</p>
        </div>
        <div className="reveal intg-grid" style={{ transitionDelay: '.16s' }}>
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
        <div className="reveal" style={{ textAlign: 'center', marginTop: '26px', transitionDelay: '.2s' }}><Link href="/integrations" className="intglink">View all ATS integrations<span>→</span></Link></div>
      </div></section>

      <SecuritySection eyebrow="Security &amp; compliance" heading="Built to keep your organisation secure" sub="Top-tier admin controls, strong data governance and comprehensive compliance audits — every assessment protected and EEOC-defensible." />

      <Testimonials eyebrow="Customer satisfaction" heading="What our customers are saying about Testlify" />

      <Recognition />

      <section className="sec" style={{ background: '#FBF3EE' }}><div className="wrap" style={{ maxWidth: '840px' }}>
        <div style={{ textAlign: 'center', marginBottom: '44px' }}>
          <p className="eyebrow reveal" style={{ justifyContent: 'center' }}>FAQ<b>.</b></p>
          <h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>Frequently asked questions (FAQs)</h2>
          <p className="lead reveal" style={{ marginTop: '14px', transitionDelay: '.08s' }}>Want to know more about Testlify? Here are answers to the most commonly asked questions about our company.</p>
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
