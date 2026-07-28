import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaButton from '@/components/CtaButton';
import SecuritySection from '@/components/SecuritySection';
import Testimonials from '@/components/Testimonials';
import Recognition from '@/components/Recognition';
import FAQ from '@/components/FAQ';
import CtaBand from '@/components/CtaBand';

const CSS = `
.hero{padding:72px 28px 88px;background:radial-gradient(1100px 540px at 78% 6%,#FFF0EE 0%,rgba(255,240,238,0) 60%),#fff;position:relative;overflow:hidden;}
.herogrid{display:grid;grid-template-columns:1.02fr 1.1fr;gap:60px;align-items:center;}
.pill{display:inline-flex;align-items:center;gap:9px;background:#fff;border:1px solid #F4D9DA;border-radius:999px;padding:7px 15px 7px 8px;font-size:13px;font-weight:600;color:#A8323A;box-shadow:0 6px 16px rgba(110,11,14,.08);}
.pilltag{background:#F23F44;color:#fff;font-size:11px;font-weight:700;letter-spacing:.04em;padding:3px 9px;border-radius:999px;}
.heroctas{display:flex;align-items:center;gap:14px;flex-wrap:wrap;margin-top:30px;}
.trust{display:flex;align-items:center;gap:13px;flex-wrap:wrap;font-size:13.5px;color:#8A7A7D;font-weight:600;margin-top:26px;}
.acc{color:#F23F44;}
.herochk{display:flex;flex-direction:column;gap:11px;margin-top:26px;}
.herochk div{display:flex;align-items:center;gap:10px;font-size:14.5px;font-weight:600;color:#4A3B3E;}
.herochk svg{flex:none;color:#F23F44;}
.mock{background:#fff;border:1px solid #F0E2E3;border-radius:20px;box-shadow:0 40px 90px rgba(110,11,14,.16);overflow:hidden;}
.mocktop{display:flex;align-items:center;gap:8px;padding:13px 16px;border-bottom:1px solid #F4ECEC;background:#FCFAFA;}
.mc{width:11px;height:11px;border-radius:50%;}
.mockbar{margin-left:12px;flex:1;height:26px;border-radius:8px;background:#F3EAEA;display:flex;align-items:center;padding:0 12px;font-size:11.5px;color:#A9999C;font-weight:500;}
.mockbody{padding:0;}
.mockbody img{width:100%;display:block;}
@media(max-width:960px){.herogrid{grid-template-columns:1fr !important;gap:44px;}.hero{padding:44px 22px 60px;}}
.tourrow{display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:center;}
.tourrow.flip .tourtxt{order:2;}
.shot{border-radius:20px;border:1px solid #F0E2E3;background:#fff;height:340px;display:flex;align-items:center;justify-content:center;box-shadow:0 16px 30px rgba(110,11,14,.10);overflow:hidden;padding:20px;}
.shot img{width:100%;height:100%;object-fit:contain;}
.pt-sub3{display:grid;grid-template-columns:repeat(3,1fr);gap:22px;margin-top:40px;}
.pt-sub3 .card{background:#fff;border:1px solid #F2E6E7;border-radius:16px;padding:24px;transition:transform .3s cubic-bezier(.2,.7,.3,1),border-color .3s,box-shadow .3s;}
.pt-sub3 .card:hover{transform:translateY(-4px);border-color:#FBD0D1;box-shadow:0 16px 34px rgba(110,11,14,.10);}
.pt-sub3 .cic{width:42px;height:42px;border-radius:11px;background:#FFF0F0;color:#F23F44;display:flex;align-items:center;justify-content:center;margin-bottom:14px;}
.pt-sub3 h3{font-size:17px;font-weight:700;letter-spacing:-.2px;margin:0 0 8px;}
.pt-sub3 p{font-size:14.5px;line-height:1.6;color:#5A4B4E;margin:0;}
.pt-pair{display:grid;grid-template-columns:1fr 1fr;gap:26px;}
.pt-pcard{background:#fff;border:1px solid #F2E6E7;border-radius:18px;padding:28px;transition:transform .3s cubic-bezier(.2,.7,.3,1),border-color .3s,box-shadow .3s;}
.pt-pcard:hover{transform:translateY(-4px);border-color:#FBD0D1;box-shadow:0 16px 34px rgba(110,11,14,.10);}
.pt-pshot{border-radius:14px;overflow:hidden;height:190px;margin-bottom:20px;background:#FBF3EE;display:flex;align-items:center;justify-content:center;box-sizing:border-box;padding:12px;}
.pt-pshot img{width:100%;height:100%;object-fit:contain;}
.pt-pcard h3{font-size:18px;font-weight:700;margin:0 0 8px;letter-spacing:-.2px;}
.pt-pcard p{font-size:14.5px;line-height:1.6;color:#5A4B4E;margin:0;}
.intg-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:14px;}
.intg-tile{display:flex;align-items:center;justify-content:center;height:88px;background:#fff;border:1px solid #F2E6E7;border-radius:16px;padding:16px 20px;transition:transform .28s ease,box-shadow .28s ease,border-color .28s ease;}
.intg-tile:hover{transform:translateY(-4px);border-color:#FBD0D1;box-shadow:0 16px 34px rgba(110,11,14,.10);}
.intg-tile img{max-width:100%;max-height:40px;object-fit:contain;}
@media(max-width:920px){.tourrow{grid-template-columns:1fr;gap:28px;}.tourrow.flip .tourtxt{order:0;}.pt-sub3{grid-template-columns:1fr;}.pt-pair{grid-template-columns:1fr;}.intg-grid{grid-template-columns:repeat(2,1fr);}}
`;

const faqItems = [
  { q: 'What is Testlify?', a: "Testlify is the talent assessment platform helping companies hire the best talent quickly, easily, accurately and affordably. We take the stress out of finding the best candidates with analysis that's accurate, automated and unbiased." },
  { q: 'What is pre-employment testing software?', a: "Pre-employment testing software analyzes prospective employees quickly and efficiently. Testlify's 3,500+ tests are carefully created to match your needs, covering all major recruitment requirements." },
  { q: 'Why is pre-employment testing important?', a: 'Pre-employment testing helps companies find candidates with relevant skills, saving time and training costs while increasing productivity — testing on-the-job skills, finding top talent faster, building diverse pipelines and championing a data-driven HR culture.' },
  { q: 'How does Testlify help in my hiring process?', a: "Testlify's AI-powered pre-hire assessments measure a candidate's skills and job fit, enabling quick, bias-free screening that increases recruiter and hiring-manager productivity." },
  { q: 'What are the different types of questions asked in the assessment?', a: 'Questions depend on the industry and role, and can include MCQs, video-based questions and open-ended written answers, alongside programming questions for coding tests.' },
  { q: 'What are the different types of tests on Testlify?', a: 'Tests fall into three main types: Technical Tests (programming, software, role-specific, DevOps, finance, accounting), Cognitive Ability Tests, and Personality, Culture & Situational Judgment Tests.' },
  { q: 'How is Testlify different from other pre-employment tools?', a: 'Testlify removes unconscious bias from screening, prioritizes on-the-job skills over trick questions, and uses non-googleable questions, advanced proctoring and video responses in low-stress, adaptive tests that take just 30 minutes.' },
];

export default function ProductTourPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <SiteHeader announcement="Take the 2-minute product tour" announcementCta="Start free" />

      <section className="hero"><div className="wrap"><div className="herogrid">
        <div>
          <div className="reveal" style={{ transitionDelay: '.02s' }}><span className="pill"><span className="pilltag">PRODUCT TOUR</span> 2-minute walkthrough</span></div>
          <h1 className="h1 reveal" style={{ marginTop: 22, transitionDelay: '.06s' }}>Finest talent <span className="acc">assessment platform.</span></h1>
          <p className="lead reveal" style={{ marginTop: 22, maxWidth: 500, transitionDelay: '.1s' }}>See how Testlify takes you from job posting to verified shortlist — build an assessment, screen candidates and read results, end to end.</p>
          <div className="heroctas reveal" style={{ transitionDelay: '.16s' }}>
            <CtaButton label="Try for free" href="/pricing" variant="primary" size="md" icon="arrow" />
            <CtaButton label="Book a demo" href="/demo" variant="secondary" size="md" icon="play" />
          </div>
          <div className="trust reveal" style={{ transitionDelay: '.2s' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7 }}><span style={{ color: '#F23F44', fontWeight: 700 }}>✓</span>7-day free trial</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7 }}><span style={{ color: '#F23F44', fontWeight: 700 }}>✓</span>No credit card required</span>
          </div>
        </div>
        <div className="reveal" style={{ transitionDelay: '.12s' }}>
          <div className="mock">
            <div className="mocktop"><span className="mc" style={{ background: '#FF5F57' }}></span><span className="mc" style={{ background: '#FEBC2E' }}></span><span className="mc" style={{ background: '#28C840' }}></span><span className="mockbar">app.testlify.com/tour</span></div>
            <div className="mockbody">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://testlify.com/wp-content/uploads/2023/03/12-1024x759.png" alt="Testlify platform overview" />
            </div>
          </div>
        </div>
      </div></div></section>

      <section className="sec"><div className="wrap" style={{ maxWidth: 760, margin: '0 auto 48px', textAlign: 'center' }}>
        <p className="eyebrow reveal">How Testlify works<b>.</b></p>
        <h2 className="h2 reveal" style={{ marginBottom: 16, transitionDelay: '.04s' }}>Real-time programming evaluation to simulate real-world coding scenarios</h2>
        <p className="lead reveal" style={{ transitionDelay: '.08s' }}>Testlify&apos;s unique AI-powered assessment technology is a proven solution against high employee turnover rates. Automate the laborious processes from &apos;Apply&apos; to &apos;Hire&apos; with a fun, engaging assessment process that ensures minimal drop-off throughout your recruitment funnel.</p>
      </div>
      <div className="wrap tourrow reveal">
        <div className="tourtxt">
          <h3 style={{ fontSize: 19, fontWeight: 700, margin: '0 0 10px' }}>Real-time programming evaluation</h3>
          <p className="body" style={{ margin: '0 0 22px' }}>Candidates showcase their programming skills in a simulated real-world coding environment.</p>
          <h3 style={{ fontSize: 19, fontWeight: 700, margin: '0 0 10px' }}>Comprehensive reporting system</h3>
          <p className="body" style={{ margin: '0 0 22px' }}>Detailed insights into a candidate&apos;s performance, so you can make informed decisions for technical positions.</p>
          <h3 style={{ fontSize: 19, fontWeight: 700, margin: '0 0 10px' }}>Wide range of languages &amp; frameworks</h3>
          <p className="body" style={{ margin: 0 }}>Create tests that match the technical requirements of your specific positions.</p>
        </div>
        <div className="shot">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://testlify.com/wp-content/uploads/2024/08/Real-time-programming-evaluation-to-simulate-real-world-coding-scenarios-1-1-1024x764.jpg" alt="Real-time programming evaluation" />
        </div>
      </div></section>

      <section className="sec" style={{ background: '#FBF3EE' }}><div className="wrap" style={{ maxWidth: 680, margin: '0 auto 40px', textAlign: 'center' }}>
        <p className="eyebrow reveal">No more guessing<b>.</b></p>
        <h2 className="h2 reveal" style={{ marginBottom: 14, transitionDelay: '.04s' }}>Find the hidden gems in every shortlist</h2>
        <p className="lead reveal" style={{ transitionDelay: '.08s' }}>Identifying the best performer overall isn&apos;t always the way to find the ideal employee. Dig deeper into applicant results and view detailed score breakdowns by talent — then discuss and compare with hiring managers to identify the ideal candidate quickly.</p>
      </div>
      <div className="wrap pt-sub3 reveal">
        <div className="card"><div className="cic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 21l-4.35-4.35"></path><circle cx="11" cy="11" r="7"></circle></svg></div><h3>Insights</h3><p>Complete candidate report cards with a detailed summary per skill — analyze individual responses and contrast candidates side by side.</p></div>
        <div className="card"><div className="cic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 20V10"></path><path d="M12 20V4"></path><path d="M6 20v-6"></path></svg></div><h3>Distribution of scores</h3><p>Check whether your assessment is too easy, too difficult, or just right, and adjust it for the best completion rates.</p></div>
        <div className="card"><div className="cic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3L22 4"></path><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg></div><h3>Evaluation and review</h3><p>Review each question — in-depth insights flag which need to change and obstacles candidates needed to overcome.</p></div>
      </div></section>

      <section className="sec"><div className="wrap" style={{ maxWidth: 680, margin: '0 auto 40px', textAlign: 'center' }}>
        <p className="eyebrow reveal">Live coding &amp; white label<b>.</b></p>
        <h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>Assess real skill, wearing your brand</h2>
      </div>
      <div className="wrap pt-pair reveal">
        <div className="pt-pcard">
          <div className="pt-pshot">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://testlify.com/wp-content/uploads/2023/03/live-coding-test-interview-1024x776.png" alt="Live coding test interview" />
          </div>
          <h3>Live coding tests</h3>
          <p>Set up a coding assessment that lets candidates write and execute code within the platform — evaluating problem-solving ability, coding efficiency and debugging skill.</p>
        </div>
        <div className="pt-pcard">
          <div className="pt-pshot">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://testlify.com/wp-content/uploads/2023/02/white-lable-1024x672.png" alt="White-labeled assessment" />
          </div>
          <h3>White label</h3>
          <p>Customize assessments with your own branding for a seamless, professional candidate experience that reflects positively on your organization.</p>
        </div>
      </div></section>

      <section className="sec"><div className="wrap" style={{ maxWidth: 680, margin: '0 auto 44px', textAlign: 'center' }}>
        <p className="eyebrow reveal">Integrations<b>.</b></p>
        <h2 className="h2 reveal" style={{ marginBottom: 14, transitionDelay: '.04s' }}>Testlify integrates seamlessly with 100+ ATS tools</h2>
        <p className="lead reveal" style={{ transitionDelay: '.08s' }}>Native integrations with Workday, Greenhouse, Lever, iCIMS and 97 more ATS platforms — no middleware, no data mapping required.</p>
      </div>
      <div className="wrap reveal intg-grid">
        <div className="intg-tile">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://testlify.com/wp-content/uploads/2024/09/Workday_Inc.-Logo.wine_-1-2048x1365-2.png" alt="Workday" />
        </div>
        <div className="intg-tile">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://testlify.com/wp-content/uploads/2023/03/629a0bbcb04c5ae587c411c2-1-1.png" alt="Greenhouse" />
        </div>
        <div className="intg-tile">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://testlify.com/wp-content/uploads/2025/10/Lever_Employ_Logo_Horizontal_Turquoise_Black-300x43-1.png?wsr" alt="Lever" />
        </div>
        <div className="intg-tile">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://testlify.com/wp-content/uploads/2025/10/SR-SAP-Logo.svg" alt="SmartRecruiters" />
        </div>
        <div className="intg-tile">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://testlify.com/wp-content/uploads/2024/09/BambooHR-Logo-1-2048x1152-2.png" alt="BambooHR" />
        </div>
        <div className="intg-tile">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://testlify.com/wp-content/uploads/2025/10/Successfactors-Logo-Vector.svg-.png?wsr" alt="SuccessFactors" />
        </div>
        <div className="intg-tile">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://testlify.com/wp-content/uploads/2025/10/logo.svg" alt="UKG" />
        </div>
        <div className="intg-tile">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://testlify.com/wp-content/uploads/2025/10/681b1f74457e6f968fdaaa8d_MASTER_RECRUITEE_COLOUR_PREFERRED-LOGO-TO-USE-1024x313.png?wsr" alt="Recruitee" />
        </div>
        <div className="intg-tile">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://testlify.com/wp-content/uploads/2024/08/zoho-recruit-logo-1.png" alt="Zoho Recruit" />
        </div>
        <div className="intg-tile">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://testlify.com/wp-content/uploads/2025/10/JazzHR_Employ_Logo_Horizontal_Purple_Black-1024x131.png?wsr" alt="JazzHR" />
        </div>
      </div>
      <div className="wrap reveal" style={{ textAlign: 'center', marginTop: 26 }}><a href="/product-integrations" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#F23F44', fontWeight: 600, fontSize: 16 }}>View all ATS integrations<span>→</span></a></div>
      </section>

      <div className="sec" style={{ background: '#FBF3EE', padding: '96px 0' }}>
        <SecuritySection eyebrow="Security" heading="Built to keep your organization secure" sub="Top-tier admin management, enhanced security integrations, stringent data governance, comprehensive compliance audits and strong privacy protections." />
      </div>

      <Testimonials />

      <Recognition />

      <section className="sec"><div className="wrap" style={{ maxWidth: 640, margin: '0 auto', textAlign: 'center' }}>
        <p className="eyebrow reveal">FAQ<b>.</b></p>
        <h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>Frequently asked questions</h2>
      </div>
      <div className="reveal wrap" style={{ maxWidth: 820, margin: '34px auto 0' }}>
        <FAQ items={faqItems} />
      </div>
      </section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
