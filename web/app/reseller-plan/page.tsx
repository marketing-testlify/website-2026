import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaButton from '@/components/CtaButton';
import CtaBand from '@/components/CtaBand';
import SecuritySection from '@/components/SecuritySection';
import Testimonials from '@/components/Testimonials';
import Recognition from '@/components/Recognition';
import FAQ from '@/components/FAQ';

const CSS = `
.hero{padding:72px 28px 88px;background:radial-gradient(1100px 540px at 78% 6%,#FFF0EE 0%,rgba(255,240,238,0) 60%),#fff;position:relative;overflow:hidden;}
.acc{color:#F23F44;}
.herogrid{display:grid;grid-template-columns:1.02fr 1.1fr;gap:60px;align-items:center;}
.pill{display:inline-flex;align-items:center;gap:9px;background:#fff;border:1px solid #F4D9DA;border-radius:999px;padding:7px 15px 7px 8px;font-size:13px;font-weight:600;color:#A8323A;box-shadow:0 6px 16px rgba(110,11,14,.06);}
.pilltag{background:#F23F44;color:#fff;font-size:11px;font-weight:700;letter-spacing:.04em;padding:3px 9px;border-radius:999px;}
.heroctas{display:flex;align-items:center;gap:14px;flex-wrap:wrap;margin-top:30px;}
.trust{display:flex;align-items:center;gap:13px;flex-wrap:wrap;font-size:13.5px;color:#8A7A7D;font-weight:600;margin-top:26px;}
.mock{background:#fff;border:1px solid #F0E2E3;border-radius:20px;box-shadow:0 40px 90px rgba(110,11,14,.16);overflow:hidden;}
.mocktop{display:flex;align-items:center;gap:8px;padding:13px 16px;border-bottom:1px solid #F4ECEC;background:#FCFAFA;}
.mc{width:11px;height:11px;border-radius:50%;}
.mockbar{margin-left:12px;flex:1;height:26px;border-radius:8px;background:#F3EAEA;display:flex;align-items:center;padding:0 12px;font-size:11.5px;color:#A9999C;font-weight:500;}
.mockbody{padding:20px;}
.rs-brandbar{display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;}
.rs-brandbar .yourlogo{display:flex;align-items:center;gap:9px;font-weight:800;font-size:15px;color:#1A1014;}
.rs-brandbar .yourlogo i{width:26px;height:26px;border-radius:8px;background:linear-gradient(135deg,#F23F44,#FF7A52);display:inline-block;}
.rs-plan{display:flex;align-items:center;gap:13px;padding:13px 14px;border:1px solid #F1E6E7;border-radius:14px;margin-bottom:10px;background:#fff;}
.rs-plan.top{border-color:#FBC9CB;box-shadow:0 14px 30px rgba(242,63,68,.12);background:linear-gradient(180deg,#FFF8F8,#fff);}
.rs-picon{width:38px;height:38px;border-radius:11px;flex:none;display:flex;align-items:center;justify-content:center;color:#fff;}
.rs-pname{font-size:14px;font-weight:700;color:#1A1014;line-height:1.2;}
.rs-pdesc{font-size:11.5px;color:#9A878A;font-weight:500;}
.rs-pmargin{margin-left:auto;font-size:16px;font-weight:800;color:#1F9D6B;}
.matchtag{position:absolute;top:-14px;right:30px;background:#1A1014;color:#fff;font-size:12.5px;font-weight:600;padding:9px 15px;border-radius:12px;box-shadow:0 16px 34px rgba(26,16,20,.30);display:flex;align-items:center;gap:8px;}
.matchtag i{width:7px;height:7px;border-radius:50%;background:#3DDC84;display:inline-block;box-shadow:0 0 0 4px rgba(61,220,132,.2);}
@media(max-width:960px){.herogrid{grid-template-columns:1fr !important;gap:44px;}.hero{padding:44px 22px 60px;}}
.rsimg{border-radius:20px;overflow:hidden;box-shadow:0 20px 40px rgba(110,11,14,.10);}
`;

const faqs = [
  {
    q: 'What is the Testlify reseller plan?',
    a: 'The Testlify reseller plan allows HRtech companies and businesses to sell the platform under their brand name.',
  },
  {
    q: 'What does the Testlify reseller plan offer?',
    a: 'The reseller plan provides a white-labeled version of the platform, customizable to match your brand identity.',
  },
  {
    q: 'Can I customize the platform with my brand identity?',
    a: 'Yes, our reseller plan provides a white-labeled version of the platform that you can customize to match your brand identity.',
  },
  {
    q: 'What kind of support do you offer?',
    a: 'We offer technical support to our resellers. Our support team is available 24/7 to answer any questions or concerns you may have.',
  },
  {
    q: 'How much revenue can I earn?',
    a: 'The amount you earn in the reseller program completely depends on the price that you want to sell the tool to your customers.',
  },
  {
    q: 'Can I integrate Testlify with my existing HRtech solutions?',
    a: 'Yes, Testlify can be integrated with any HRtech solution that caters to HR industry professionals including HRMS and ATS, making it easier for your customers to use the platform.',
  },
];

export default function ResellerPlanPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      <SiteHeader announcement="Resell Testlify and grow your revenue" announcementCta="Become a reseller" />

      <section className="hero">
        <div className="wrap">
          <div className="herogrid">
            <div>
              <div className="reveal" style={{ transitionDelay: '.02s' }}>
                <span className="pill">
                  <span className="pilltag">RESELLER</span> White-labeled, ready to sell
                </span>
              </div>
              <h1 className="h1 reveal" style={{ marginTop: '22px', transitionDelay: '.06s' }}>
                Become a reseller and <span className="acc">diversify</span> your product portfolio
              </h1>
              <p className="lead reveal" style={{ marginTop: '22px', maxWidth: '520px', transitionDelay: '.1s' }}>
                Diversify your product portfolio seamlessly by becoming a reseller. Integrate our top-tier assessment
                tool effortlessly into your lineup. HR tech companies can make the most of it to expand their
                offering.
              </p>
              <div className="heroctas reveal" style={{ transitionDelay: '.14s' }}>
                <CtaButton label="Become a reseller" href="/contact" variant="primary" size="md" icon="arrow" magnetic />
                <CtaButton label="Book a demo" href="/contact" variant="secondary" size="md" icon="play" />
              </div>
              <div className="trust reveal" style={{ transitionDelay: '.18s' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '7px' }}>
                  <span style={{ color: '#F23F44', fontWeight: 700 }}>✓</span>Dedicated partner support
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '7px' }}>
                  <span style={{ color: '#F23F44', fontWeight: 700 }}>✓</span>Full white-label branding
                </span>
              </div>
            </div>
            <div className="reveal" style={{ position: 'relative', transitionDelay: '.12s' }}>
              <div className="matchtag">
                <i></i> You set the price
              </div>
              <div className="mock">
                <div className="mocktop">
                  <span className="mc" style={{ background: '#FF5F57' }}></span>
                  <span className="mc" style={{ background: '#FEBC2E' }}></span>
                  <span className="mc" style={{ background: '#28C840' }}></span>
                  <span className="mockbar">assess.yourbrand.com/reseller</span>
                </div>
                <div className="mockbody">
                  <div className="rs-brandbar">
                    <span className="yourlogo">
                      <i></i>Your Brand
                    </span>
                    <span
                      style={{
                        fontSize: '11.5px',
                        fontWeight: 700,
                        color: '#1FA463',
                        background: '#E8F6EE',
                        padding: '5px 11px',
                        borderRadius: '100px',
                      }}
                    >
                      White-labeled
                    </span>
                  </div>
                  <div className="rs-plan top">
                    <span className="rs-picon" style={{ background: 'linear-gradient(135deg,#F23F44,#FF7A52)' }}>
                      Ent
                    </span>
                    <div>
                      <div className="rs-pname">Enterprise reseller</div>
                      <div className="rs-pdesc">Unlimited seats · full platform</div>
                    </div>
                    <span
                      className="rs-pmargin"
                      style={{ fontSize: '11px', background: '#E8F6EE', color: '#1FA463', padding: '5px 11px', borderRadius: '100px' }}
                    >
                      Your price
                    </span>
                  </div>
                  <div className="rs-plan">
                    <span className="rs-picon" style={{ background: 'linear-gradient(135deg,#6E62F2,#9A8BFF)' }}>
                      Pro
                    </span>
                    <div>
                      <div className="rs-pname">Pro reseller</div>
                      <div className="rs-pdesc">Growth tier · priority support</div>
                    </div>
                    <span
                      className="rs-pmargin"
                      style={{ fontSize: '11px', background: '#E8F6EE', color: '#1FA463', padding: '5px 11px', borderRadius: '100px' }}
                    >
                      Your price
                    </span>
                  </div>
                  <div className="rs-plan">
                    <span className="rs-picon" style={{ background: 'linear-gradient(135deg,#2AA6F2,#67C9FF)' }}>
                      Std
                    </span>
                    <div>
                      <div className="rs-pname">Standard reseller</div>
                      <div className="rs-pdesc">Core platform · self-serve</div>
                    </div>
                    <span
                      className="rs-pmargin"
                      style={{ fontSize: '11px', background: '#E8F6EE', color: '#1FA463', padding: '5px 11px', borderRadius: '100px' }}
                    >
                      Your price
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap split">
          <div className="reveal rsimg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://testlify.com/wp-content/uploads/2024/08/Customize-the-platform-to-match-your-branding.jpg"
              alt="Customize the platform to match your branding"
              style={{ width: '100%', display: 'block' }}
            />
          </div>
          <div className="reveal" style={{ transitionDelay: '.06s' }}>
            <h2 className="h2">Customize the platform to match your branding</h2>
            <p className="lead" style={{ margin: '16px 0 22px' }}>
              Tailor the platform to mirror your brand effortlessly. From logo to colors and even your domain name,
              make it yours. Boost trust, recognition, and customer confidence.
            </p>
            <ul className="chk">
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F23F44" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
                Brand the platform with your logo and color
              </li>
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F23F44" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
                Use your custom domain
              </li>
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F23F44" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
                Setup your SMTP
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="sec" style={{ background: '#FBF3EE' }}>
        <div className="wrap split">
          <div className="reveal" style={{ order: 2 }}>
            <h2 className="h2">Top-tier reseller features</h2>
            <p className="lead" style={{ margin: '16px 0 22px' }}>
              Offer your customers a suite of premium features to enhance their talent assessment experience.
            </p>
            <ul className="chk">
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F23F44" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
                1200+ ready-to-use test templates
              </li>
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F23F44" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
                Assessment templates based on job roles
              </li>
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F23F44" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
                Advanced reporting and analytics
              </li>
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F23F44" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
                Anti-cheating measures for fair evaluation
              </li>
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F23F44" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
                Mobile-friendly
              </li>
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F23F44" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
                Brand assessments with your logo and color
              </li>
            </ul>
            <div style={{ marginTop: '22px' }}>
              <CtaButton label="Explore features" href="/features" variant="primary" size="md" icon="arrow" />
            </div>
          </div>
          <div className="reveal rsimg" style={{ order: 1, transitionDelay: '.06s' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://testlify.com/wp-content/uploads/2024/08/Top-tier-reseller-features-2-1024x484.jpg"
              alt="Top-tier reseller features"
              style={{ width: '100%', display: 'block' }}
            />
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap split">
          <div className="reveal rsimg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://testlify.com/wp-content/uploads/2024/08/How-does-the-reseller-plan-work-4.jpg"
              alt="How does the reseller plan work"
              style={{ width: '100%', display: 'block' }}
            />
          </div>
          <div className="reveal" style={{ transitionDelay: '.06s' }}>
            <h2 className="h2">How does the reseller plan work?</h2>
            <p className="lead" style={{ margin: '16px 0 22px' }}>
              The Testlify reseller plan is straightforward. You buy our platform and resell it to your customers
              under your brand name. We handle all the technical aspects of the platform, such as hosting, updates,
              and maintenance.
            </p>
            <a
              href="https://help.testlify.com/article/47-testlify-reseller-program-faqs"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#F23F44', fontWeight: 700, fontSize: '15px', textDecoration: 'none' }}
            >
              Learn more
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </section>

      <section className="sec" style={{ background: '#FBF3EE' }}>
        <div className="wrap">
          <div className="center-head">
            <p className="eyebrow reveal">
              Why partner with us<b>.</b>
            </p>
            <h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>
              Benefits of reselling Testlify
            </h2>
            <p className="lead reveal" style={{ transitionDelay: '.06s' }}>
              Unlock a range of advantages by joining Testlify&apos;s reseller program.
            </p>
          </div>
          <div className="grid3">
            <div className="card reveal">
              <span className="cic">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12a9 9 0 1 1-2.64-6.36M21 3v6h-6"></path>
                </svg>
              </span>
              <h3 className="h3" style={{ fontSize: '18px', marginBottom: '8px' }}>
                Continuous updates and improvements
              </h3>
              <p className="body" style={{ fontSize: '14px' }}>
                Regular updates and enhancements, ensuring you always have the latest features for your clients.
              </p>
            </div>
            <div className="card reveal" style={{ transitionDelay: '.06s' }}>
              <span className="cic">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 3v18h18M18 17V9M13 17V5M8 17v-4"></path>
                </svg>
              </span>
              <h3 className="h3" style={{ fontSize: '18px', marginBottom: '8px' }}>
                Scalable solution
              </h3>
              <p className="body" style={{ fontSize: '14px' }}>
                Accommodates the growth of your business, serving more clients without compromising performance.
              </p>
            </div>
            <div className="card reveal" style={{ transitionDelay: '.12s' }}>
              <span className="cic">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </span>
              <h3 className="h3" style={{ fontSize: '18px', marginBottom: '8px' }}>
                Generate revenue
              </h3>
              <p className="body" style={{ fontSize: '14px' }}>
                Reselling Testlify creates an additional stream of revenue for your business.
              </p>
            </div>
            <div className="card reveal">
              <span className="cic">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.59 13.41 12 22l-9-9V3h10l9 9-1.41 1.41zM7 7h.01"></path>
                </svg>
              </span>
              <h3 className="h3" style={{ fontSize: '18px', marginBottom: '8px' }}>
                White-labeled version
              </h3>
              <p className="body" style={{ fontSize: '14px' }}>
                Customize the platform to match your brand identity, making it look like your own product.
              </p>
            </div>
            <div className="card reveal" style={{ transitionDelay: '.06s' }}>
              <span className="cic">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                </svg>
              </span>
              <h3 className="h3" style={{ fontSize: '18px', marginBottom: '8px' }}>
                Expand your product offerings
              </h3>
              <p className="body" style={{ fontSize: '14px' }}>
                Grow your HRtech product lineup and make your business more competitive.
              </p>
            </div>
            <div className="card reveal" style={{ transitionDelay: '.12s' }}>
              <span className="cic">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </span>
              <h3 className="h3" style={{ fontSize: '18px', marginBottom: '8px' }}>
                Access to technical support
              </h3>
              <p className="body" style={{ fontSize: '14px' }}>
                Technical support to ensure your reselling experience is smooth and trouble-free.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap split">
          <div className="reveal rsimg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://testlify.com/wp-content/uploads/2024/08/Pricing-for-the-reseller-program-2.jpg"
              alt="Pricing for the reseller program"
              style={{ width: '100%', display: 'block' }}
            />
          </div>
          <div className="reveal" style={{ transitionDelay: '.06s' }}>
            <h2 className="h2">Pricing for the reseller program</h2>
            <p className="lead" style={{ margin: '16px 0 22px' }}>
              We believe in fairness and flexibility. Our reseller program comes with a basic infrastructure cost and
              a small commitment from partners. You have the freedom to set your own prices when reselling to your
              customers.
            </p>
            <CtaButton label="Get a quote" href="/contact" variant="primary" size="md" icon="arrow" />
          </div>
        </div>
      </section>

      <section className="sec" style={{ background: '#FBF3EE' }}>
        <div className="wrap split">
          <div className="reveal" style={{ order: 2 }}>
            <h2 className="h2">Training, onboarding, and support</h2>
            <p className="lead" style={{ margin: '16px 0' }}>
              We provide comprehensive training and onboarding to help you get started. Our team will guide you
              through the platform&apos;s features, help you customize the platform, and provide marketing materials
              to promote it to your customers.
            </p>
            <p className="lead">Our support team is available 24/7 to answer any questions or concerns you may have.</p>
          </div>
          <div className="reveal rsimg" style={{ order: 1, transitionDelay: '.06s' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://testlify.com/wp-content/uploads/2024/08/Training-onboarding-and-support.jpg"
              alt="Training, onboarding, and support"
              style={{ width: '100%', display: 'block' }}
            />
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="center-head">
            <p className="eyebrow reveal">
              Integrations<b>.</b>
            </p>
            <h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>
              Testlify integrates seamlessly with 100+ ATS tools
            </h2>
            <p className="lead reveal" style={{ transitionDelay: '.06s' }}>
              Native integrations with Workday, Greenhouse, Lever, iCIMS, and 97 more ATS platforms — no middleware,
              no data mapping required.
            </p>
          </div>
          <div className="grid4 reveal" style={{ marginTop: '44px' }}>
            <div className="card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '84px', padding: '16px' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://testlify.com/wp-content/uploads/2024/09/Workday_Inc.-Logo.wine_-1-2048x1365-2.png"
                alt="Workday"
                style={{ maxWidth: '100%', maxHeight: '38px', objectFit: 'contain' }}
              />
            </div>
            <div className="card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '84px', padding: '16px' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://testlify.com/wp-content/uploads/2025/10/Successfactors-Logo-Vector.svg-.png"
                alt="SAP SuccessFactors"
                style={{ maxWidth: '100%', maxHeight: '38px', objectFit: 'contain' }}
              />
            </div>
            <div className="card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '84px', padding: '16px' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://testlify.com/wp-content/uploads/2025/10/Lever_Employ_Logo_Horizontal_Turquoise_Black-300x43-1.png"
                alt="Lever"
                style={{ maxWidth: '100%', maxHeight: '38px', objectFit: 'contain' }}
              />
            </div>
            <div className="card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '84px', padding: '16px' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://testlify.com/wp-content/uploads/2025/10/SR-SAP-Logo.svg"
                alt="SmartRecruiters"
                style={{ maxWidth: '100%', maxHeight: '38px', objectFit: 'contain' }}
              />
            </div>
            <div className="card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '84px', padding: '16px' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://testlify.com/wp-content/uploads/2024/09/BambooHR-Logo-1-2048x1152-2.png"
                alt="BambooHR"
                style={{ maxWidth: '100%', maxHeight: '38px', objectFit: 'contain' }}
              />
            </div>
            <div className="card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '84px', padding: '16px' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://testlify.com/wp-content/uploads/2023/03/629a0bbcb04c5ae587c411c2-1-1.png"
                alt="Greenhouse"
                style={{ maxWidth: '100%', maxHeight: '38px', objectFit: 'contain' }}
              />
            </div>
            <div className="card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '84px', padding: '16px' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://testlify.com/wp-content/uploads/2024/08/zoho-recruit-logo-1.png"
                alt="Zoho Recruit"
                style={{ maxWidth: '100%', maxHeight: '38px', objectFit: 'contain' }}
              />
            </div>
            <div className="card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '84px', padding: '16px' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://testlify.com/wp-content/uploads/2025/10/JazzHR_Employ_Logo_Horizontal_Purple_Black-1024x131.png"
                alt="JazzHR"
                style={{ maxWidth: '100%', maxHeight: '38px', objectFit: 'contain' }}
              />
            </div>
          </div>
          <div className="reveal" style={{ textAlign: 'center', marginTop: '34px' }}>
            <a
              href="/integrations"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#F23F44', fontWeight: 700, fontSize: '15.5px', textDecoration: 'none' }}
            >
              View all ATS integrations
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </section>

      <SecuritySection
        eyebrow="Security"
        heading="Built to keep your organization secure"
        sub="Ensure the security of your recruitment data with top-tier admin management, enhanced security integrations, stringent data governance, comprehensive compliance audits, and strong privacy protections."
      />
      <Testimonials eyebrow="Testimonials" heading="What our customers are saying about Testlify" />
      <Recognition bg="#FBF3EE" />

      <section className="sec">
        <div className="wrap">
          <div className="center-head">
            <p className="eyebrow reveal">
              FAQ<b>.</b>
            </p>
            <h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>
              Frequently asked questions (FAQs)
            </h2>
          </div>
          <div style={{ maxWidth: '820px', margin: '44px auto 0' }}>
            <FAQ items={faqs} />
          </div>
        </div>
      </section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
