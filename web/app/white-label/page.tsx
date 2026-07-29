import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaButton from '@/components/CtaButton';
import SecuritySection from '@/components/SecuritySection';
import Testimonials from '@/components/Testimonials';
import Recognition from '@/components/Recognition';
import FAQ from '@/components/FAQ';
import CtaBand from '@/components/CtaBand';

const pageStyles = `
body{margin:0;font-family:'Poppins',sans-serif;-webkit-font-smoothing:antialiased;color:#1A1014;background:#fff;}
.wrap{max-width:1240px;margin:0 auto;padding:0 28px;}
.sec{padding:96px 28px;}
.eyebrow{font-size:12.5px;font-weight:600;letter-spacing:.16em;text-transform:uppercase;color:#8A7A7D;margin:0 0 18px;}
.eyebrow b{color:#F23F44;font-weight:600;}
.h1{font-size:54px;line-height:1.08;font-weight:800;letter-spacing:-1.8px;margin:0;color:#1A1014;}
.h2{font-size:42px;line-height:1.08;font-weight:800;letter-spacing:-1.4px;margin:0;color:#1A1014;}
.lead{font-size:18px;line-height:1.6;color:#5A4B4E;margin:0;}
.hero{padding:72px 28px 88px;background:radial-gradient(1100px 540px at 78% 6%,#FFF0EE 0%,rgba(255,240,238,0) 60%),#fff;position:relative;overflow:hidden;}
.herogrid{display:grid;grid-template-columns:1.02fr 1.1fr;gap:60px;align-items:center;}
.pill{display:inline-flex;align-items:center;gap:9px;background:#fff;border:1px solid #F4D9DA;border-radius:999px;padding:7px 15px 7px 8px;font-size:13px;font-weight:600;color:#A8323A;box-shadow:0 6px 16px rgba(110,11,14,.08);}
.pilltag{background:#F23F44;color:#fff;font-size:11px;font-weight:700;letter-spacing:.04em;padding:3px 9px;border-radius:999px;}
.heroctas{display:flex;align-items:center;gap:14px;flex-wrap:wrap;margin-top:30px;}
.trust{display:flex;align-items:center;gap:13px;flex-wrap:wrap;font-size:13.5px;color:#8A7A7D;font-weight:600;margin-top:26px;}
.herofig{border-radius:22px;overflow:hidden;box-shadow:0 30px 70px rgba(110,11,14,.14);border:1px solid #F0E2E3;}
.herofig img{display:block;width:100%;height:auto;}
.split{display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:center;}
.chk{list-style:none;margin:20px 0 0;padding:0;display:flex;flex-direction:column;gap:14px;}
.chk li{position:relative;padding-left:32px;font-size:15px;line-height:1.55;color:#5A4B4E;}
.chk li>svg{position:absolute;left:0;top:2px;color:#22A05B;}
.figcard{border-radius:18px;overflow:hidden;border:1px solid #F0E2E3;box-shadow:0 16px 30px rgba(110,11,14,.10);position:relative;}
.figcard img{display:block;width:100%;height:auto;}
.playbtn{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:64px;height:64px;border-radius:50%;background:#fff;display:flex;align-items:center;justify-content:center;box-shadow:0 12px 30px rgba(110,11,14,.22);color:#F23F44;}
.cardgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px;margin-top:46px;}
.card{background:#fff;border:1px solid #F0E2E3;border-radius:18px;padding:28px 26px;box-shadow:0 16px 30px rgba(110,11,14,.10);transition:transform .3s cubic-bezier(.2,.7,.3,1),box-shadow .3s;}
.card:hover{transform:translateY(-4px);box-shadow:0 22px 46px rgba(110,11,14,.12);}
.cic{width:44px;height:44px;border-radius:13px;background:#FFF0EF;color:#F23F44;display:flex;align-items:center;justify-content:center;margin-bottom:16px;}
.intg-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:14px;}
.intg-tile{display:flex;align-items:center;justify-content:center;height:88px;background:#fff;border:1px solid #F2E6E7;border-radius:16px;padding:16px 20px;transition:transform .28s ease,box-shadow .28s ease,border-color .28s ease;}
.intg-tile:hover{transform:translateY(-4px);border-color:#FBD0D1;box-shadow:0 16px 34px rgba(110,11,14,.10);}
.intg-tile img{max-width:100%;max-height:40px;object-fit:contain;}
.intglink{display:inline-flex;align-items:center;gap:8px;color:#F23F44;font-weight:700;font-size:15px;text-decoration:none;}
.intglink:hover{color:#A91E23;}
.reveal{opacity:0;transform:translateY(26px);transition:opacity .6s ease,transform .6s cubic-bezier(.2,.7,.3,1);}
.reveal.in{opacity:1;transform:none;}
@media(max-width:960px){.herogrid,.split,.cardgrid,.intg-grid{grid-template-columns:1fr!important;}}
h1,h2,h3,.h1,.h2{text-wrap:balance;}p,li,.lead{text-wrap:pretty;}
`;

const faqItems = [
  { q: 'What is Testlify white label?', a: "Testlify White Label is a customizable and scalable testing solution that allows businesses to rebrand the platform to fit their own company's look and feel." },
  { q: 'What are the benefits of using Testlify white label?', a: 'Personalize your brand experience, access premium test libraries, and create unlimited assessments.' },
  { q: 'How does Testlify help streamline the hiring process?', a: 'Testlify integrates easily with your existing ATS, making it simple to manage your entire hiring process in one place.' },
  { q: 'Is Testlify white label cost-effective?', a: 'Yes — Testlify White Label offers all the features at an affordable price, giving you a cost-effective way to elevate your brand.' },
];

export default function WhiteLabelPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: pageStyles }} />

      <SiteHeader
        announcement="Testlify AI is here — screen, interview & score candidates automatically."
        announcementCta="See what's new →"
        homeHref="/"
      />

      <section className="hero" data-screen-label="Hero"><div className="wrap"><div className="herogrid">
        <div>
          <div className="reveal" style={{ transitionDelay: '.02s' }}><span className="pill"><span className="pilltag">WHITE LABEL</span> Your brand, our platform</span></div>
          <h1 className="h1 reveal" style={{ marginTop: 22, transitionDelay: '.06s' }}>Customize your testing experience with Testlify <span style={{ color: '#F23F44' }}>white label</span></h1>
          <p className="lead reveal" style={{ marginTop: 22, maxWidth: 540, transitionDelay: '.1s' }}>With Testlify White Label, you have the ability to rebrand our platform to fit the look and feel of your own company — a seamless, professional testing experience for clients and team members, all while retaining full control over your brand identity.</p>
          <div className="heroctas reveal" style={{ transitionDelay: '.14s' }}>
            <CtaButton label="Try for free" href="/pricing" variant="primary" size="md" icon="arrow" magnetic />
            <CtaButton label="Book a Demo" href="/contact" variant="secondary" size="md" icon="play" />
          </div>
          <div className="trust reveal" style={{ transitionDelay: '.18s' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7 }}><span style={{ color: '#F23F44', fontWeight: 700 }}>✓</span>7-day free trial</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7 }}><span style={{ color: '#F23F44', fontWeight: 700 }}>✓</span>No credit card required</span>
          </div>
        </div>
        <div className="reveal" style={{ transitionDelay: '.1s' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://testlify.com/wp-content/uploads/2024/08/Customize-your-testing-experience-with-Testlify-white-label-1.jpg" alt="White label panel" style={{ display: 'block', width: '100%', height: 'auto' }} />
        </div>
      </div></div></section>

      <section className="sec" data-screen-label="How it works"><div className="wrap" style={{ textAlign: 'center' }}>
        <div className="reveal" style={{ maxWidth: 640, margin: '0 auto' }}>
          <p className="eyebrow" style={{ justifyContent: 'center' }}>How it works<b>.</b></p>
          <h2 className="h2">See how white label works</h2>
          <p className="lead" style={{ marginTop: 18 }}>Make the platform truly yours with a fully branded experience. Deliver assessments under your own domain, logo, and colors.</p>
        </div>
        <div className="figcard reveal" style={{ transitionDelay: '.06s', maxWidth: 840, margin: '40px auto 0' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://testlify.com/wp-content/uploads/2026/03/White-Label.png" alt="White label preview" />
          <a href="https://youtu.be/Zbn1ZBPyeEA" target="_blank" rel="noopener" className="playbtn"><svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"></path></svg></a>
        </div>
      </div></section>

      <section className="sec" style={{ background: '#FBF3EE' }} data-screen-label="Flexible and scalable"><div className="wrap split">
        <div className="figcard reveal">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://testlify.com/wp-content/uploads/2024/08/The-flexible-and-scalable-solution-for-your-testing-needs-3-1024x527.jpg" alt="Flexible and scalable solution" />
        </div>
        <div className="reveal" style={{ transitionDelay: '.06s' }}>
          <p className="eyebrow">Built to scale<b>.</b></p>
          <h2 className="h2">The flexible and scalable solution for your testing needs</h2>
          <p className="lead" style={{ marginTop: 18 }}>Our White Label solution is designed to meet the needs of businesses and organizations of all sizes. Whether you're a small startup or a large enterprise, Testlify White Label has the flexibility and scalability to meet your testing requirements.</p>
        </div>
      </div></section>

      <section className="sec" data-screen-label="Why choose"><div className="wrap">
        <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
          <p className="eyebrow reveal" style={{ justifyContent: 'center' }}>Why choose Testlify<b>.</b></p>
          <h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>Why choose Testlify white label?</h2>
        </div>
        <div className="cardgrid reveal" style={{ transitionDelay: '.1s' }}>
          <div className="card"><div className="cic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z"></path></svg></div><h3 style={{ fontSize: 18, fontWeight: 700, margin: '0 0 8px' }}>Personalize your brand experience</h3><p style={{ fontSize: 14.5, lineHeight: 1.6, color: '#5A4B4E', margin: 0 }}>Add your company logo, favicon, and brand color, and preview how it will look on your test platform.</p></div>
          <div className="card"><div className="cic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg></div><h3 style={{ fontSize: 18, fontWeight: 700, margin: '0 0 8px' }}>Access to premium test libraries</h3><p style={{ fontSize: 14.5, lineHeight: 1.6, color: '#5A4B4E', margin: 0 }}>Full access to Testlify's premium test libraries, spanning a wide range of assessments and question types.</p></div>
          <div className="card"><div className="cic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg></div><h3 style={{ fontSize: 18, fontWeight: 700, margin: '0 0 8px' }}>Unlimited assessments and candidates</h3><p style={{ fontSize: 14.5, lineHeight: 1.6, color: '#5A4B4E', margin: 0 }}>Create unlimited assessments and invite an unlimited number of candidates to take them.</p></div>
          <div className="card"><div className="cic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg></div><h3 style={{ fontSize: 18, fontWeight: 700, margin: '0 0 8px' }}>Use your custom domain</h3><p style={{ fontSize: 14.5, lineHeight: 1.6, color: '#5A4B4E', margin: 0 }}>Use your own domain name for a professional, personalized URL on your testing platform.</p></div>
          <div className="card"><div className="cic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16v16H4z"></path><path d="M22 6l-10 7L2 6"></path></svg></div><h3 style={{ fontSize: 18, fontWeight: 700, margin: '0 0 8px' }}>Setup your SMTP</h3><p style={{ fontSize: 14.5, lineHeight: 1.6, color: '#5A4B4E', margin: 0 }}>Invitations, reminders and results are sent from your own email server for reliable communication.</p></div>
          <div className="card"><div className="cic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg></div><h3 style={{ fontSize: 18, fontWeight: 700, margin: '0 0 8px' }}>Cost-effective solution</h3><p style={{ fontSize: 14.5, lineHeight: 1.6, color: '#5A4B4E', margin: 0 }}>A cost-effective way for companies to take their brand to the next level.</p></div>
        </div>
      </div></section>

      <section className="sec" style={{ background: '#FBF3EE' }} data-screen-label="Take control"><div className="wrap split">
        <div className="reveal">
          <p className="eyebrow">Take control<b>.</b></p>
          <h2 className="h2">Take control of your testing process</h2>
          <p className="lead" style={{ marginTop: 18 }}>Tired of generic testing platforms that lack customization and control? Testlify gives you the power to take control of your testing process — with a range of features and customization options tailored to meet your needs.</p>
        </div>
        <div className="figcard reveal" style={{ transitionDelay: '.06s' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://testlify.com/wp-content/uploads/2024/08/Take-control-of-your-testing-process.jpg" alt="Assessment questions customization" />
        </div>
      </div></section>

      <section className="sec" data-screen-label="What else"><div className="wrap">
        <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
          <p className="eyebrow reveal" style={{ justifyContent: 'center' }}>More than white label<b>.</b></p>
          <h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>What else does Testlify have to offer?</h2>
          <p className="lead reveal" style={{ marginTop: 16, transitionDelay: '.08s' }}>A complete solution for all your role-specific and technical skills assessment needs — seamless, efficient, and packed with features.</p>
        </div>
        <div className="cardgrid reveal" style={{ transitionDelay: '.1s' }}>
          <div className="card"><div className="cic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4z"></path></svg></div><h3 style={{ fontSize: 18, fontWeight: 700, margin: '0 0 8px' }}>Customizable tests</h3><p style={{ fontSize: 14.5, lineHeight: 1.6, color: '#5A4B4E', margin: 0 }}>Design tests that accurately measure technical skills, problem-solving, or interpersonal ability.</p></div>
          <div className="card"><div className="cic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg></div><h3 style={{ fontSize: 18, fontWeight: 700, margin: '0 0 8px' }}>Automated reporting</h3><p style={{ fontSize: 14.5, lineHeight: 1.6, color: '#5A4B4E', margin: 0 }}>Quickly generate detailed reports on candidate performance to make informed hiring decisions.</p></div>
          <div className="card"><div className="cic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg></div><h3 style={{ fontSize: 18, fontWeight: 700, margin: '0 0 8px' }}>Easy test administration</h3><p style={{ fontSize: 14.5, lineHeight: 1.6, color: '#5A4B4E', margin: 0 }}>Simple to administer tests, even with no prior experience with assessment software.</p></div>
          <div className="card"><div className="cic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg></div><h3 style={{ fontSize: 18, fontWeight: 700, margin: '0 0 8px' }}>Integration with ATS</h3><p style={{ fontSize: 14.5, lineHeight: 1.6, color: '#5A4B4E', margin: 0 }}>Easily integrates with your existing ATS to manage your entire hiring process in one place.</p></div>
          <div className="card"><div className="cic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg></div><h3 style={{ fontSize: 18, fontWeight: 700, margin: '0 0 8px' }}>Mobile optimization</h3><p style={{ fontSize: 14.5, lineHeight: 1.6, color: '#5A4B4E', margin: 0 }}>Fully optimized for mobile, so candidates can complete tests anytime, anywhere.</p></div>
          <div className="card"><div className="cic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg></div><h3 style={{ fontSize: 18, fontWeight: 700, margin: '0 0 8px' }}>Test library</h3><p style={{ fontSize: 14.5, lineHeight: 1.6, color: '#5A4B4E', margin: 0 }}>Over 1,400 pre-built tests to assess technical knowledge, personality traits, and specific skills.</p></div>
        </div>
      </div></section>

      <section className="sec" style={{ background: '#FBF3EE' }} data-screen-label="ATS integrations"><div className="wrap">
        <div style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto 44px' }}>
          <p className="eyebrow reveal" style={{ justifyContent: 'center' }}>Integrations<b>.</b></p>
          <h2 className="h2 reveal" style={{ transitionDelay: '.06s' }}>Testlify integrates seamlessly with 100+ ATS tools</h2>
          <p className="lead reveal" style={{ marginTop: 14, transitionDelay: '.12s' }}>Native integrations with Workday, Greenhouse, Lever, iCIMS, and 97 more ATS platforms — no middleware, no data mapping required.</p>
        </div>
        <div className="intg-grid reveal" style={{ transitionDelay: '.16s' }}>
          <div className="intg-tile">{/* eslint-disable-next-line @next/next/no-img-element */}<img src="https://testlify.com/wp-content/uploads/2024/09/Workday_Inc.-Logo.wine_-1-2048x1365-2.png" alt="Workday" /></div>
          <div className="intg-tile">{/* eslint-disable-next-line @next/next/no-img-element */}<img src="https://testlify.com/wp-content/uploads/2023/03/629a0bbcb04c5ae587c411c2-1-1.png" alt="Greenhouse" /></div>
          <div className="intg-tile">{/* eslint-disable-next-line @next/next/no-img-element */}<img src="https://testlify.com/wp-content/uploads/2025/10/Lever_Employ_Logo_Horizontal_Turquoise_Black-300x43-1.png?wsr" alt="Lever" /></div>
          <div className="intg-tile">{/* eslint-disable-next-line @next/next/no-img-element */}<img src="https://testlify.com/wp-content/uploads/2025/10/SR-SAP-Logo.svg" alt="SmartRecruiters" /></div>
          <div className="intg-tile">{/* eslint-disable-next-line @next/next/no-img-element */}<img src="https://testlify.com/wp-content/uploads/2024/09/BambooHR-Logo-1-2048x1152-2.png" alt="BambooHR" /></div>
          <div className="intg-tile">{/* eslint-disable-next-line @next/next/no-img-element */}<img src="https://testlify.com/wp-content/uploads/2025/10/Successfactors-Logo-Vector.svg-.png?wsr" alt="SuccessFactors" /></div>
          <div className="intg-tile">{/* eslint-disable-next-line @next/next/no-img-element */}<img src="https://testlify.com/wp-content/uploads/2025/10/logo.svg" alt="UKG" /></div>
          <div className="intg-tile">{/* eslint-disable-next-line @next/next/no-img-element */}<img src="https://testlify.com/wp-content/uploads/2025/10/681b1f74457e6f968fdaaa8d_MASTER_RECRUITEE_COLOUR_PREFERRED-LOGO-TO-USE-1024x313.png?wsr" alt="Recruitee" /></div>
          <div className="intg-tile">{/* eslint-disable-next-line @next/next/no-img-element */}<img src="https://testlify.com/wp-content/uploads/2024/08/zoho-recruit-logo-1.png" alt="Zoho Recruit" /></div>
          <div className="intg-tile">{/* eslint-disable-next-line @next/next/no-img-element */}<img src="https://testlify.com/wp-content/uploads/2025/10/JazzHR_Employ_Logo_Horizontal_Purple_Black-1024x131.png?wsr" alt="JazzHR" /></div>
        </div>
        <div className="reveal" style={{ textAlign: 'center', marginTop: 26, transitionDelay: '.2s' }}><a href="/integrations" className="intglink">View all ATS integrations<span>→</span></a></div>
      </div></section>

      <SecuritySection
        eyebrow="Security"
        heading="Built to keep your organization secure"
        sub="Top-tier admin management, enhanced security integrations, stringent data governance, comprehensive compliance audits and strong privacy protections."
      />

      <Testimonials />

      <Recognition />

      <section className="sec" style={{ background: '#FBF3EE' }} data-screen-label="FAQ"><div className="wrap" style={{ maxWidth: 840 }}>
        <div style={{ textAlign: 'center', marginBottom: 44 }}>
          <p className="eyebrow reveal" style={{ justifyContent: 'center' }}>FAQ<b>.</b></p>
          <h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>Frequently asked questions</h2>
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
