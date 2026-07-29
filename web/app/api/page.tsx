import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaButton from '@/components/CtaButton';
import SecuritySection from '@/components/SecuritySection';
import Testimonials from '@/components/Testimonials';
import Recognition from '@/components/Recognition';
import FAQ from '@/components/FAQ';
import CtaBand from '@/components/CtaBand';

const css = `
body{margin:0;font-family:'Poppins',sans-serif;-webkit-font-smoothing:antialiased;color:#1A1014;background:#fff;}
.wrap{max-width:1240px;margin:0 auto;padding:0 28px;}
.sec{padding:96px 28px;}
.eyebrow{font-size:12.5px;font-weight:600;letter-spacing:.16em;text-transform:uppercase;color:#8A7A7D;margin:0 0 18px;}
.eyebrow b{color:#F23F44;font-weight:600;}
.h1{font-size:56px;line-height:1.06;font-weight:800;letter-spacing:-1.8px;margin:0;color:#1A1014;}
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
.figcard{border-radius:18px;overflow:hidden;border:1px solid #F0E2E3;box-shadow:0 16px 30px rgba(110,11,14,.10);}
.figcard img{display:block;width:100%;height:auto;}
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
  { q: "How does Testlify's API solution benefit businesses?", a: "Our API solution delivers a seamless candidate experience, provides sophisticated filtering and efficient pagination, and is secure and compliant." },
  { q: "What industries can benefit from our API solution?", a: "Industries such as gaming, fintech, consumer tech, and healthcare platforms can benefit from the API solution." },
  { q: "What features does our API solution offer?", a: "Powerful and reliable APIs, quick activation, a wide range of assessments, and secure and compliant features." },
  { q: "How can our API solution help businesses with data analytics?", a: "It provides advanced analytics and reporting tools, customizable dashboards and visualizations, and real-time data processing for timely insights and faster decision-making." },
  { q: "How can the API solution help enhance the candidate experience?", a: "It provides real-time notifications, multi-language support, sophisticated filtering options, and scalable and reliable infrastructure to handle high traffic volume." },
  { q: "Is Testlify's API solution developer-friendly?", a: "Yes — in-depth API documentation, a staging server environment for testing, and the latest coding standards." },
];

export default function ApiPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <SiteHeader
        announcement="Testlify AI is here — screen, interview & score candidates automatically."
        announcementCta="See what's new →"
        homeHref="/"
      />

      <section className="hero" data-screen-label="Hero">
        <div className="wrap">
          <div className="herogrid">
            <div>
              <div className="reveal" style={{ transitionDelay: '.02s' }}>
                <span className="pill"><span className="pilltag">DEVELOPER API</span> Build assessments into your platform</span>
              </div>
              <h1 className="h1 reveal" style={{ marginTop: 22, transitionDelay: '.06s' }}>
                Power up your pre-hiring assessments with <span style={{ color: '#F23F44' }}>Testlify&apos;s API</span>
              </h1>
              <p className="lead reveal" style={{ marginTop: 22, maxWidth: 540, transitionDelay: '.1s' }}>
                We are your one-stop solution for integrating pre-hiring assessments into your platform. Our APIs are designed with the latest coding standards and offer sophisticated filtering and efficient pagination — so you can deliver a seamless candidate experience.
              </p>
              <div className="heroctas reveal" style={{ transitionDelay: '.14s' }}>
                <CtaButton label="Try for free" href="/pricing" variant="primary" size="md" icon="arrow" magnetic />
                <CtaButton label="Read API docs" href="https://docs.testlify.com/" variant="ghost" size="md" icon="none" />
              </div>
              <div className="trust reveal" style={{ transitionDelay: '.18s' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7 }}><span style={{ color: '#F23F44', fontWeight: 700 }}>✓</span>7-day free trial</span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7 }}><span style={{ color: '#F23F44', fontWeight: 700 }}>✓</span>No credit card required</span>
              </div>
            </div>
            <div className="reveal" style={{ transitionDelay: '.1s' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://testlify.com/wp-content/uploads/2024/08/Power-up-your-pre-hiring-assessments-with-Testlifys-API.jpg" alt="Testlify API for platforms" style={{ display: 'block', width: '100%', height: 'auto' }} />
            </div>
          </div>
        </div>
      </section>

      <section className="sec" data-screen-label="Unlock data">
        <div className="wrap split">
          <div className="figcard reveal">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://testlify.com/wp-content/uploads/2024/08/Unlock-the-power-of-data-2.jpg" alt="Unlock the power of data" />
          </div>
          <div className="reveal" style={{ transitionDelay: '.06s' }}>
            <p className="eyebrow">Data &amp; insights<b>.</b></p>
            <h2 className="h2">Unlock the power of data</h2>
            <p className="lead" style={{ marginTop: 18 }}>Data is the lifeblood of modern businesses, and our APIs are designed to help you unlock its full potential. Gain deep insights into your business operations, candidate behavior, and hiring trends to drive growth and make data-driven decisions.</p>
            <ul className="chk">
              <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>Advanced analytics and reporting tools to track key performance metrics</li>
              <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>Customizable dashboards and visualizations to make sense of your data</li>
              <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>Real-time data processing for timely insights and faster decisions</li>
              <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>Secured platform with data encryption and other safeguards</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="sec" style={{ background: '#FBF3EE' }} data-screen-label="Candidate experience">
        <div className="wrap split">
          <div className="reveal">
            <p className="eyebrow">Candidate experience<b>.</b></p>
            <h2 className="h2">Elevate your candidate experience</h2>
            <p className="lead" style={{ marginTop: 18 }}>We understand that delivering a superior candidate experience is crucial for a successful hiring process. Whether you&apos;re in e-commerce, healthcare, or any other industry, our APIs help you create a seamless and engaging candidate journey.</p>
            <ul className="chk">
              <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>Real-time notifications to keep candidates informed and engaged</li>
              <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>Multi-language support to help you reach a global audience</li>
              <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>Sophisticated filtering options to tailor your content</li>
              <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>Scalable and reliable infrastructure for high traffic and peak usage</li>
            </ul>
          </div>
          <div className="figcard reveal" style={{ transitionDelay: '.06s' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://testlify.com/wp-content/uploads/2022/11/Better-Skill-Set-Evaluation-Process.png" alt="Evaluate candidates" />
          </div>
        </div>
      </section>

      <section className="sec" data-screen-label="Workflows">
        <div className="wrap split">
          <div className="figcard reveal">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://testlify.com/wp-content/uploads/2023/03/Reporting-and-Analytics-2.png" alt="Reporting and analytics" />
          </div>
          <div className="reveal" style={{ transitionDelay: '.06s' }}>
            <p className="eyebrow">Workflows<b>.</b></p>
            <h2 className="h2">Enhance your workflows</h2>
            <p className="lead" style={{ marginTop: 18 }}>If you&apos;re looking to optimize your hiring process and deliver a seamless candidate experience, our API solution is a perfect choice — built with the advanced features to take your hiring process to the next level.</p>
            <ul className="chk">
              <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>Simple, quick activation for seamless integration</li>
              <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>Efficient pagination to optimize network traffic and performance</li>
              <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>Customizable filters to request only what&apos;s relevant to your business</li>
              <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>Secure and compliant platform for complete data protection</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="sec" style={{ background: '#FBF3EE' }} data-screen-label="Integration">
        <div className="wrap">
          <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
            <p className="eyebrow reveal" style={{ justifyContent: 'center' }}>Integration<b>.</b></p>
            <h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>Maximize your business potential with seamless integration</h2>
            <p className="lead reveal" style={{ marginTop: 16, transitionDelay: '.08s' }}>Everything a modern engineering team needs to build assessments straight into their own platform.</p>
          </div>
          <div className="cardgrid reveal" style={{ transitionDelay: '.1s' }}>
            <div className="card">
              <div className="cic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg></div>
              <h3 style={{ fontSize: 18, fontWeight: 700, margin: '0 0 8px', color: '#1A1014' }}>Developer friendly</h3>
              <p style={{ fontSize: 14.5, lineHeight: 1.6, color: '#5A4B4E', margin: 0 }}>In-depth API documentation, a staging server for testing, and the latest coding standards — integrate with cURL, Ruby, Python, Java and more.</p>
            </div>
            <div className="card">
              <div className="cic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg></div>
              <h3 style={{ fontSize: 18, fontWeight: 700, margin: '0 0 8px', color: '#1A1014' }}>Customizable filters</h3>
              <p style={{ fontSize: 14.5, lineHeight: 1.6, color: '#5A4B4E', margin: 0 }}>Filter catalogs by country, region, and category so you request only the parts of the catalog relevant to your business.</p>
            </div>
            <div className="card">
              <div className="cic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M13 6h3a2 2 0 0 1 2 2v7"></path><line x1="6" y1="9" x2="6" y2="21"></line></svg></div>
              <h3 style={{ fontSize: 18, fontWeight: 700, margin: '0 0 8px', color: '#1A1014' }}>Version control</h3>
              <p style={{ fontSize: 14.5, lineHeight: 1.6, color: '#5A4B4E', margin: 0 }}>Keep using existing APIs and migrate to newer versions only when you&apos;re ready — full flexibility over your development process.</p>
            </div>
            <div className="card">
              <div className="cic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"></rect><line x1="3" y1="10" x2="21" y2="10"></line></svg></div>
              <h3 style={{ fontSize: 18, fontWeight: 700, margin: '0 0 8px', color: '#1A1014' }}>Efficient pagination</h3>
              <p style={{ fontSize: 14.5, lineHeight: 1.6, color: '#5A4B4E', margin: 0 }}>API pagination keeps network traffic in check, improving performance while reducing costs.</p>
            </div>
            <div className="card">
              <div className="cic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"></path></svg></div>
              <h3 style={{ fontSize: 18, fontWeight: 700, margin: '0 0 8px', color: '#1A1014' }}>Real-time data</h3>
              <p style={{ fontSize: 14.5, lineHeight: 1.6, color: '#5A4B4E', margin: 0 }}>Access to the latest information for faster decision-making and more accurate insights that drive business growth.</p>
            </div>
            <div className="card">
              <div className="cic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg></div>
              <h3 style={{ fontSize: 18, fontWeight: 700, margin: '0 0 8px', color: '#1A1014' }}>Scalability</h3>
              <p style={{ fontSize: 14.5, lineHeight: 1.6, color: '#5A4B4E', margin: 0 }}>Highly scalable infrastructure built to handle high traffic volume, ideal for startups and large corporations alike.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec" style={{ background: '#FBF3EE' }} data-screen-label="ATS integrations">
        <div className="wrap">
          <div style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto 44px' }}>
            <p className="eyebrow reveal" style={{ justifyContent: 'center' }}>Integrations<b>.</b></p>
            <h2 className="h2 reveal" style={{ transitionDelay: '.06s' }}>Testlify integrates seamlessly with 100+ ATS tools</h2>
            <p className="lead reveal" style={{ marginTop: 14, transitionDelay: '.12s' }}>Native integrations with Workday, Greenhouse, Lever, iCIMS, and 97 more ATS platforms — no middleware, no data mapping required.</p>
          </div>
          <div className="intg-grid reveal" style={{ transitionDelay: '.16s' }}>
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
          <div className="reveal" style={{ textAlign: 'center', marginTop: 26, transitionDelay: '.2s' }}>
            <a href="/integrations" className="intglink">View all ATS integrations<span>→</span></a>
          </div>
        </div>
      </section>

      <SecuritySection
        eyebrow="Security"
        heading="Built to keep your organization secure"
        sub="Top-tier admin management, enhanced security integrations, stringent data governance, comprehensive compliance audits and strong privacy protections."
      />

      <Testimonials />

      <Recognition />

      <section className="sec" style={{ background: '#FBF3EE' }} data-screen-label="FAQ">
        <div className="wrap" style={{ maxWidth: 840 }}>
          <div style={{ textAlign: 'center', marginBottom: 44 }}>
            <p className="eyebrow reveal" style={{ justifyContent: 'center' }}>FAQ<b>.</b></p>
            <h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>Frequently asked questions</h2>
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
