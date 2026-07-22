import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaButton from '@/components/CtaButton';
import CtaBand from '@/components/CtaBand';

const css = `
*{box-sizing:border-box;}
html{scroll-behavior:smooth;}
body{margin:0;font-family:'Poppins',sans-serif;-webkit-font-smoothing:antialiased;color:#1A1014;background:#fff;}
a{text-decoration:none;color:inherit;}
a.lnk{color:#F23F44;}a.lnk:hover{color:#DC3137;}
.wrap{max-width:1240px;margin:0 auto;padding:0 28px;}
.sec{padding:104px 28px;}
.eyebrow{font-size:12.5px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:#8A7A7D;margin:0 0 18px;}
.eyebrow b{color:#F23F44;font-weight:600;}
.h1{font-size:62px;line-height:1.04;font-weight:800;letter-spacing:-2px;margin:0;color:#1A1014;}
.h2{font-size:43px;line-height:1.08;font-weight:800;letter-spacing:-1.4px;margin:0;color:#1A1014;}
.h3{font-size:22px;line-height:1.25;font-weight:700;letter-spacing:-.4px;margin:0;color:#1A1014;}
.lead{font-size:19px;line-height:1.6;color:#5A4B4E;font-weight:400;}
.body{font-size:16px;line-height:1.66;color:#5A4B4E;}
.lhero{padding:70px 28px 44px;background:radial-gradient(1100px 520px at 50% -10%,#FFF0EE 0%,rgba(255,240,238,0) 62%),#fff;text-align:center;}
.reveal{opacity:0;transform:translateY(26px);transition:opacity .7s cubic-bezier(.2,.7,.2,1), transform .7s cubic-bezier(.2,.7,.2,1);}
.reveal.in{opacity:1;transform:none;}
.founders{display:grid;grid-template-columns:repeat(4,1fr);gap:22px;}
.fcard{background:#fff;border:1px solid #F2E6E7;border-radius:20px;padding:28px 24px 26px;transition:transform .3s cubic-bezier(.2,.7,.3,1),border-color .3s,box-shadow .3s;}
.fcard:hover{transform:translateY(-4px);border-color:#FBD0D1;box-shadow:0 16px 34px rgba(110,11,14,.10);}
.fav{width:88px;height:88px;border-radius:22px;margin:0 0 20px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:800;font-size:30px;letter-spacing:.5px;}
.fname{font-size:19px;font-weight:700;margin:0;letter-spacing:-.3px;}
.frole{font-size:13.5px;color:#F23F44;font-weight:600;margin:5px 0 14px;}
.fbio{font-size:14px;line-height:1.6;color:#6C5A5D;margin:0;}
.flink{display:inline-flex;align-items:center;gap:7px;margin-top:16px;font-size:13px;font-weight:600;color:#8A7A7D;}
.flink:hover{color:#0A66C2;}
.team{display:grid;grid-template-columns:repeat(4,1fr);gap:18px;}
.tmember{text-align:left;background:#fff;border:1px solid #F2E6E7;border-radius:16px;padding:22px 22px 20px;transition:transform .3s cubic-bezier(.2,.7,.3,1),border-color .3s,box-shadow .3s;}
.tmember:hover{transform:translateY(-4px);border-color:#FBD0D1;box-shadow:0 16px 34px rgba(110,11,14,.10);}
.tav{width:56px;height:56px;border-radius:50%;margin:0 0 14px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:800;font-size:19px;}
.tname{font-size:16px;font-weight:700;margin:0;}
.trole{font-size:13px;color:#9A878A;margin:4px 0 0;}
.prin{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;}
.pcard{background:#fff;border:1px solid #EFE2E3;border-radius:20px;padding:30px 26px;transition:transform .25s ease,box-shadow .25s ease,border-color .25s;}
.pcard:hover{transform:translateY(-4px);box-shadow:0 22px 46px rgba(110,11,14,.10);border-color:#F4D2D3;}
.pic{width:46px;height:46px;border-radius:13px;background:#FFF0F0;color:#F23F44;display:flex;align-items:center;justify-content:center;margin-bottom:18px;}
.backers{display:flex;flex-wrap:wrap;gap:14px;justify-content:center;}
.backer{font-size:14.5px;font-weight:600;color:#5A4B4E;background:#fff;border:1px solid #EADDDE;border-radius:100px;padding:11px 22px;}
@media(max-width:920px){
  .h1{font-size:42px;letter-spacing:-1.4px;}
  .h2{font-size:32px;letter-spacing:-1px;}
  .sec{padding:72px 22px;}
  .founders{grid-template-columns:1fr 1fr;}
  .team{grid-template-columns:1fr 1fr;}
  .prin{grid-template-columns:1fr;}
}
@media(max-width:560px){ .founders{grid-template-columns:1fr;} .team{grid-template-columns:1fr;} }
h1,h2,h3,h4,.h1,.h2,.h3,.hero h1,.eyebrow{text-wrap:balance;}p,li,.body,.lead,.sub,figcaption,blockquote{text-wrap:pretty;}/*om-balance-rule*/
`;

const LinkedInIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path></svg>
);

export default function OurLeadershipPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <SiteHeader announcement="We're hiring across product, engineering and GTM" announcementCta="See openings" />

      <section className="lhero"><div className="wrap" style={{ maxWidth: '860px' }}>
        <p className="eyebrow reveal">Our leadership<b>.</b></p>
        <h1 className="h1 reveal" style={{ transitionDelay: '.04s' }}>The people betting<br />everything on skill</h1>
        <p className="lead reveal" style={{ margin: '22px auto 0', maxWidth: '640px', transitionDelay: '.08s' }}>Testlify&apos;s leadership team sets the strategic direction and vision of the company — driving growth, product innovation and a hiring standard built on proof, not pedigree.</p>
      </div></section>

      <section className="sec" style={{ paddingTop: '24px' }}><div className="wrap">
        <div style={{ maxWidth: '640px', margin: '0 auto 46px', textAlign: 'center' }}>
          <p className="eyebrow reveal">Founders &amp; executives<b>.</b></p>
          <h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>Meet the leadership team</h2>
        </div>
        <div className="founders reveal">
          <div className="fcard">
            <div className="fav" style={{ background: 'linear-gradient(150deg,#F23F44,#FF7A52)' }}>AS</div>
            <p className="fname">Abhishek Shah</p>
            <p className="frole">Founder &amp; Chief Executive Officer</p>
            <p className="fbio">Sets Testlify&apos;s north star — an AI-native platform where every hire is backed by verified skill. Leads company strategy, product vision and the team.</p>
            <a className="flink" href="https://www.linkedin.com/company/testlify" target="_blank" rel="noopener"><LinkedInIcon />LinkedIn</a>
          </div>
          <div className="fcard">
            <div className="fav" style={{ background: 'linear-gradient(150deg,#2A6FDB,#4E9BE8)' }}>JM</div>
            <p className="fname">Jiten Modi</p>
            <p className="frole">Co-Founder &amp; Chief Technology Officer</p>
            <p className="fbio">Owns the technology and engineering roadmap — from the assessment engine and AI scoring models to the security and scale that 1,500+ hiring teams rely on.</p>
            <a className="flink" href="https://www.linkedin.com/company/testlify" target="_blank" rel="noopener"><LinkedInIcon />LinkedIn</a>
          </div>
          <div className="fcard">
            <div className="fav" style={{ background: 'linear-gradient(150deg,#6B3FA0,#9B6DD1)' }}>NK</div>
            <p className="fname">Namrata Kamdar</p>
            <p className="frole">Co-Founder &amp; Chief Operating Officer</p>
            <p className="fbio">Runs day-to-day operations across the business — aligning people, process and customer experience so Testlify delivers at speed without losing its standards.</p>
            <a className="flink" href="https://www.linkedin.com/company/testlify" target="_blank" rel="noopener"><LinkedInIcon />LinkedIn</a>
          </div>
          <div className="fcard">
            <div className="fav" style={{ background: 'linear-gradient(150deg,#1F8A5B,#3FB77E)' }}>HD</div>
            <p className="fname">Hemal Doshi</p>
            <p className="frole">Group Chief Financial Officer</p>
            <p className="fbio">Leads finance, planning and governance — building the financial discipline that lets Testlify invest boldly in product while scaling responsibly.</p>
            <a className="flink" href="https://www.linkedin.com/company/testlify" target="_blank" rel="noopener"><LinkedInIcon />LinkedIn</a>
          </div>
        </div>
      </div></section>

      <section className="sec" style={{ background: '#FBF3EE', paddingTop: '88px', paddingBottom: '88px' }}><div className="wrap">
        <div style={{ maxWidth: '640px', margin: '0 auto 44px', textAlign: 'center' }}>
          <p className="eyebrow reveal">The wider team<b>.</b></p>
          <h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>The people who make it happen</h2>
          <p className="body reveal" style={{ marginTop: '14px', transitionDelay: '.08s' }}>Behind the founders is a 100+ strong team across product, engineering, and customer success — building the platform every day.</p>
        </div>
        <div className="team reveal">
          <div className="tmember"><div className="tav" style={{ background: '#F23F44' }}>KJ</div><p className="tname">Karan Jain</p><p className="trole">Product &amp; Growth</p></div>
          <div className="tmember"><div className="tav" style={{ background: '#2A6FDB' }}>AP</div><p className="tname">Akash Patange</p><p className="trole">Engineering</p></div>
          <div className="tmember"><div className="tav" style={{ background: '#1F8A5B' }}>JS</div><p className="tname">Jitendra Singh</p><p className="trole">Engineering</p></div>
          <div className="tmember"><div className="tav" style={{ background: '#6B3FA0' }}>SG</div><p className="tname">Shraddha Gupta</p><p className="trole">Marketing</p></div>
          <div className="tmember"><div className="tav" style={{ background: '#C4562B' }}>PP</div><p className="tname">Pradeep Panicker</p><p className="trole">Customer Success</p></div>
          <div className="tmember"><div className="tav" style={{ background: '#0E7C86' }}>NB</div><p className="tname">Nitin Bisht</p><p className="trole">Sales</p></div>
          <div className="tmember"><div className="tav" style={{ background: '#B03A6E' }}>NH</div><p className="tname">Narendra Hampole</p><p className="trole">Customer Success</p></div>
          <div className="tmember"><div className="tav" style={{ background: '#4A5AA8' }}>+</div><p className="tname">100+ Testlifers</p><p className="trole">Across 4 continents</p></div>
        </div>
      </div></section>

      <section className="sec"><div className="wrap">
        <div style={{ maxWidth: '640px', margin: '0 auto 44px', textAlign: 'center' }}>
          <p className="eyebrow reveal">How we lead<b>.</b></p>
          <h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>The principles behind every decision</h2>
        </div>
        <div className="prin">
          <div className="pcard reveal"><span className="pic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg></span><h3 className="h3" style={{ fontSize: '18px', marginBottom: '8px' }}>Proof over pedigree</h3><p className="body" style={{ fontSize: '14px' }}>We hold ourselves to the same bar we sell — measure what people can do, not where they came from.</p></div>
          <div className="pcard reveal" style={{ transitionDelay: '.06s' }}><span className="pic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9z"></path></svg></span><h3 className="h3" style={{ fontSize: '18px', marginBottom: '8px' }}>Move with urgency</h3><p className="body" style={{ fontSize: '14px' }}>Hiring teams can&apos;t wait. We ship fast, learn faster, and obsess over our customers&apos; time.</p></div>
          <div className="pcard reveal" style={{ transitionDelay: '.12s' }}><span className="pic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg></span><h3 className="h3" style={{ fontSize: '18px', marginBottom: '8px' }}>Earn trust daily</h3><p className="body" style={{ fontSize: '14px' }}>Security, fairness and candidate experience aren&apos;t features — they&apos;re commitments we renew every release.</p></div>
        </div>
      </div></section>

      <section className="sec" style={{ background: '#FBF3EE', textAlign: 'center' }}><div className="wrap" style={{ maxWidth: '820px' }}>
        <p className="eyebrow reveal">Backed by<b>.</b></p>
        <h2 className="h2 reveal" style={{ transitionDelay: '.04s', marginBottom: '30px' }}>In good company</h2>
        <div className="backers reveal" style={{ transitionDelay: '.08s' }}>
          <span className="backer">SHRM Labs</span>
          <span className="backer">Google for Startups</span>
          <span className="backer">Microsoft for Startups</span>
          <span className="backer">NVIDIA Inception</span>
        </div>
      </div></section>

      <section className="sec" style={{ background: '#1A1014', color: '#fff', textAlign: 'center' }}><div className="wrap" style={{ maxWidth: '720px' }}>
        <h2 className="h2 reveal" style={{ color: '#fff' }}>Come build the future of hiring</h2>
        <p className="lead reveal" style={{ color: 'rgba(255,255,255,.78)', margin: '18px auto 30px', transitionDelay: '.04s' }}>We&apos;re a remote-first team on a mission to make hiring fair. We&apos;d love to meet you.</p>
        <div className="reveal" style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap', transitionDelay: '.08s' }}>
          <CtaButton label="View open roles" href="/careers" variant="light" size="md" icon="arrow" />
          <CtaButton label="Our story" href="/about" variant="outline-light" size="md" icon="none" />
        </div>
      </div></section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
