import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaButton from '@/components/CtaButton';
import SecuritySection from '@/components/SecuritySection';
import Testimonials from '@/components/Testimonials';
import Recognition from '@/components/Recognition';
import FAQ from '@/components/FAQ';
import CtaBand from '@/components/CtaBand';

const css = `
.hero{padding:72px 28px 88px;background:radial-gradient(1100px 540px at 78% 6%,#FFF0EE 0%,rgba(255,240,238,0) 60%),#fff;position:relative;overflow:hidden;}
.herogrid{display:grid;grid-template-columns:1.02fr 1.1fr;gap:60px;align-items:center;}
.pill{display:inline-flex;align-items:center;gap:9px;background:#fff;border:1px solid #F4D9DA;border-radius:999px;padding:7px 15px 7px 8px;font-size:13px;font-weight:600;color:#A8323A;box-shadow:0 6px 16px rgba(110,11,14,.08);}
.pilltag{background:#F23F44;color:#fff;font-size:11px;font-weight:700;letter-spacing:.04em;padding:3px 9px;border-radius:999px;}
.heroctas{display:flex;align-items:center;gap:14px;flex-wrap:wrap;margin-top:30px;}
.trust{display:flex;align-items:center;gap:13px;flex-wrap:wrap;font-size:13.5px;color:#8A7A7D;font-weight:600;margin-top:26px;}
.acc{color:#F23F44;}
@media(max-width:960px){.herogrid{grid-template-columns:1fr !important;gap:44px;}.hero{padding:44px 22px 60px;}}
.crimg{border-radius:20px;border:1px solid #F0E2E3;background:#fff;height:320px;display:flex;align-items:center;justify-content:center;overflow:hidden;box-shadow:0 16px 30px rgba(110,11,14,.10);}
.crimg img{width:100%;height:100%;object-fit:contain;padding:24px;box-sizing:border-box;}
.intg-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:14px;}
.intg-tile{display:flex;align-items:center;justify-content:center;height:88px;background:#fff;border:1px solid #F2E6E7;border-radius:16px;padding:16px 20px;transition:transform .28s ease,box-shadow .28s ease,border-color .28s ease;}
.intg-tile:hover{transform:translateY(-4px);border-color:#FBD0D1;box-shadow:0 16px 34px rgba(110,11,14,.10);}
.intg-tile img{max-width:100%;max-height:40px;object-fit:contain;}
@media(max-width:920px){.intg-grid{grid-template-columns:repeat(2,1fr);}}
.stepno{flex:none;display:inline-flex;align-items:center;justify-content:center;width:34px;height:34px;border-radius:10px;background:#FFF0F0;color:#F23F44;font-weight:800;font-size:15px;}
.stephead{display:flex;align-items:center;gap:14px;margin-bottom:14px;}
`;

const faqItems = [
  { q: 'What types of positions are available at Testlify?', a: 'We offer a wide range of positions, including technical, managerial, and administrative roles.' },
  { q: 'Does Testlify offer internships or co-op programs?', a: 'Yes, we have internship and co-op programs available. Check our website for current opportunities.' },
  { q: 'What qualifications are required to work at Testlify?', a: 'Qualifications vary by position, but generally include relevant education, experience, and skills.' },
  { q: 'What is the hiring process at Testlify?', a: 'Our hiring process typically involves resume screening, interviews, and reference checks.' },
  { q: 'Are there opportunities for career growth at Testlify?', a: 'Absolutely! We prioritize internal promotions and offer professional development programs.' },
  { q: 'Does Testlify provide employee benefits?', a: 'Yes, we offer a comprehensive benefits package, including healthcare, workations and more.' },
];

export default function CareersPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <SiteHeader announcement="We're hiring — remote-first roles across every team" announcementCta="View job openings" homeHref="/" />

      <section className="hero">
        <div className="wrap">
          <div className="herogrid">
            <div>
              <div className="reveal" style={{ transitionDelay: '.02s' }}>
                <span className="pill"><span className="pilltag">CAREERS</span> We're hiring</span>
              </div>
              <h1 className="h1 reveal" style={{ marginTop: 22, transitionDelay: '.06s' }}>
                Join our team of <span className="acc">amazing professionals.</span>
              </h1>
              <p className="lead reveal" style={{ marginTop: 22, maxWidth: 500, transitionDelay: '.1s' }}>
                Testlify brings together individuals with diverse skills and experiences to ensure the success of our clients' hiring. We work collaboratively, embracing innovation and the latest assessment methodologies.
              </p>
              <div className="heroctas reveal" style={{ transitionDelay: '.14s' }}>
                <CtaButton label="View job openings" href="/job-openings" variant="primary" size="md" icon="arrow" magnetic={true} />
              </div>
              <div className="trust reveal" style={{ transitionDelay: '.18s' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7 }}><span style={{ color: '#F23F44', fontWeight: 700 }}>✓</span>Remote-first teams</span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7 }}><span style={{ color: '#F23F44', fontWeight: 700 }}>✓</span>Comprehensive benefits</span>
              </div>
            </div>
            <div className="crimg reveal" style={{ transitionDelay: '.12s' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://testlify.com/wp-content/uploads/2023/03/empolyee-growth.png" alt="Employee growth at Testlify" />
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap split" style={{ alignItems: 'center' }}>
          <div className="reveal">
            <p className="eyebrow">Who are we<b>.</b></p>
            <h2 className="h2" style={{ marginBottom: 18 }}>Who are we?</h2>
            <p className="body">We are a diverse and talented group of professionals who are committed to delivering exceptional results. We value collaboration, innovation, and continuous learning. With a focus on talent assessment, we work on our platform to keep improvising and providing new features to build the best teams.</p>
          </div>
          <div className="crimg reveal" style={{ transitionDelay: '.08s' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://testlify.com/wp-content/uploads/2023/03/teacher.png" alt="Work with purpose" />
          </div>
        </div>
      </section>

      <section className="sec" style={{ background: '#FBF3EE' }}>
        <div className="wrap">
          <div className="center-head">
            <p className="eyebrow reveal">What we look for<b>.</b></p>
            <h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>What kind of people do we look for?</h2>
            <p className="lead reveal" style={{ marginTop: 14, transitionDelay: '.08s' }}>We are always on the lookout for talented individuals who are passionate and driven to make a difference. Here are the qualities and skills we seek in potential team members:</p>
          </div>
          <div className="grid3 reveal">
            <div className="card">
              <span className="cic">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"></path><path d="M18.7 8l-5.1 5.1-2.8-2.8L7 14"></path></svg>
              </span>
              <h3 className="h3" style={{ fontSize: 18, marginBottom: 8 }}>Analytical thinkers</h3>
              <p className="body" style={{ fontSize: 14.5 }}>Strong analytical and problem-solving skills are crucial for every role. We seek individuals who can think critically, analyze complex scenarios, and identify potential risks and issues.</p>
            </div>
            <div className="card">
              <span className="cic">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              </span>
              <h3 className="h3" style={{ fontSize: 18, marginBottom: 8 }}>Attention to detail</h3>
              <p className="body" style={{ fontSize: 14.5 }}>For us, every detail matters. We look for individuals who possess a meticulous eye for detail and have the ability to identify even the smallest issues or inconsistencies.</p>
            </div>
            <div className="card">
              <span className="cic">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
              </span>
              <h3 className="h3" style={{ fontSize: 18, marginBottom: 8 }}>Continuous learners</h3>
              <p className="body" style={{ fontSize: 14.5 }}>The field of HRtech is constantly evolving. We value individuals who are eager to learn and stay updated with the latest trends, tools, and technologies in the domain.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="center-head">
            <p className="eyebrow reveal">How we hire<b>.</b></p>
            <h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>The interview/hiring process</h2>
            <p className="lead reveal" style={{ marginTop: 14, transitionDelay: '.08s' }}>At Testlify, we follow a comprehensive and fair hiring process to ensure that we select the best candidates for our team. Here's an overview of our interview process:</p>
          </div>
          <div className="grid3 reveal">
            <div className="card">
              <div className="stephead"><span className="stepno">1</span><h3 className="h3" style={{ fontSize: 17 }}>Application review &amp; screening</h3></div>
              <p className="body" style={{ fontSize: 14.5 }}>Once you submit your application, our hiring team will review your resume and assess your qualifications and experience.</p>
            </div>
            <div className="card">
              <div className="stephead"><span className="stepno">2</span><h3 className="h3" style={{ fontSize: 17 }}>Technical assessment</h3></div>
              <p className="body" style={{ fontSize: 14.5 }}>Depending on the position, we may ask you to complete a technical assessment to evaluate your knowledge and problem-solving abilities related to software testing.</p>
            </div>
            <div className="card">
              <div className="stephead"><span className="stepno">3</span><h3 className="h3" style={{ fontSize: 17 }}>In-person/remote interviews</h3></div>
              <p className="body" style={{ fontSize: 14.5 }}>If you pass the technical assessment, we'll invite you for in-person or remote interviews with our hiring team. These interviews will focus on assessing your skills, cultural fit, and ability to contribute to our team.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec" style={{ background: '#FBF3EE' }}>
        <div className="wrap" style={{ maxWidth: 680, margin: '0 auto 44px', textAlign: 'center' }}>
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
      </section>

      <SecuritySection
        eyebrow="Security"
        heading="Built to keep your organization secure"
        sub="Top-tier admin management, enhanced security integrations, stringent data governance, comprehensive compliance audits and strong privacy protections."
      />

      <Testimonials />
      <Recognition bg="#fff" />

      <section className="sec" style={{ background: '#FBF3EE' }}>
        <div className="wrap" style={{ maxWidth: 820, margin: '0 auto' }}>
          <div className="center-head">
            <p className="eyebrow reveal">FAQ<b>.</b></p>
            <h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>Frequently asked questions</h2>
            <p className="lead reveal" style={{ marginTop: 14, transitionDelay: '.08s' }}>Want to know more about Testlify? Here are answers to the most commonly asked questions about our company.</p>
          </div>
          <div className="reveal">
            <FAQ items={faqItems} />
          </div>
        </div>
      </section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
