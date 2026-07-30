import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaButton from '@/components/CtaButton';
import CtaBand from '@/components/CtaBand';
import FAQ from '@/components/FAQ';

const CSS = `
.pssplit img{width:100%;border-radius:20px;box-shadow:0 20px 40px rgba(110,11,14,.10);display:block;}
.hero{padding:72px 28px 88px;background:radial-gradient(1100px 540px at 78% 6%,#FFF0EE 0%,rgba(255,240,238,0) 60%),#fff;position:relative;overflow:hidden;}
.herogrid{display:grid;grid-template-columns:1.02fr 1.1fr;gap:60px;align-items:center;}
.pill{display:inline-flex;align-items:center;gap:9px;background:#fff;border:1px solid #F4D9DA;border-radius:999px;padding:7px 15px 7px 8px;font-size:13px;font-weight:600;color:#A8323A;box-shadow:0 6px 16px rgba(110,11,14,.06);}
.pilltag{background:#F23F44;color:#fff;font-size:11px;font-weight:700;letter-spacing:.04em;padding:3px 9px;border-radius:999px;}
.heroctas{display:flex;align-items:center;gap:14px;flex-wrap:wrap;margin-top:30px;}
.trust{display:flex;align-items:center;gap:13px;flex-wrap:wrap;font-size:13.5px;color:#8A7A7D;font-weight:600;margin-top:26px;}
.acc{color:#F23F44;}
.mock{background:#fff;border:1px solid #F0E2E3;border-radius:20px;box-shadow:0 40px 90px rgba(110,11,14,.16);overflow:hidden;}
.mocktop{display:flex;align-items:center;gap:8px;padding:13px 16px;border-bottom:1px solid #F4ECEC;background:#FCFAFA;}
.mc{width:11px;height:11px;border-radius:50%;}
.mockbar{margin-left:12px;flex:1;height:26px;border-radius:8px;background:#F3EAEA;display:flex;align-items:center;padding:0 12px;font-size:11.5px;color:#A9999C;font-weight:500;}
.mockbody{padding:20px;display:flex;flex-direction:column;gap:12px;}
.ptrack{display:flex;align-items:center;gap:13px;padding:13px 14px;border:1px solid #F1E6E7;border-radius:14px;background:#fff;}
.ptrack.top{border-color:#FBC9CB;box-shadow:0 14px 30px rgba(242,63,68,.12);background:linear-gradient(180deg,#FFF8F8,#fff);}
.pticon{width:38px;height:38px;border-radius:11px;flex:none;display:flex;align-items:center;justify-content:center;color:#fff;}
.ptname{font-size:14px;font-weight:700;color:#1A1014;line-height:1.2;}
.ptdesc{font-size:11.5px;color:#9A878A;font-weight:500;}
.ptbadge{margin-left:auto;font-size:11px;font-weight:700;color:#1FA463;background:#E8F6EE;padding:5px 11px;border-radius:100px;}
.matchtag{position:absolute;top:-38px;right:30px;background:#1A1014;color:#fff;font-size:12.5px;font-weight:600;padding:9px 15px;border-radius:12px;box-shadow:0 16px 34px rgba(26,16,20,.30);display:flex;align-items:center;gap:8px;}
.matchtag i{width:7px;height:7px;border-radius:50%;background:#3DDC84;display:inline-block;box-shadow:0 0 0 4px rgba(61,220,132,.2);}
@media(max-width:960px){.herogrid{grid-template-columns:1fr !important;gap:44px;}.hero{padding:44px 22px 60px;}}
`;

const faqs = [
  {
    q: 'How does the partnership program work?',
    a: 'Our partnership program is designed to be flexible and tailored to the value you offer your customers. You can choose the role that best fits your capabilities: referral, reseller, or integration.',
  },
  {
    q: "What's the first step to get started?",
    a: 'To embark on this journey, get in touch with us to explore the abundant growth possibilities offered by our partnership program.',
  },
  {
    q: 'How can I increase my earnings through this program?',
    a: "You can earn in two ways: the referral model pays a flat 15% commission on every customer you refer who purchases Testlify (up to 20% if you take a more active role in the sales process); the reseller model has you purchase Testlify's white-labeled platform at a partner price and resell it at your own pricing, with earnings coming from the margin you set. These are two separate earning paths — choose whichever works best for your business.",
  },
  {
    q: 'What benefits do I offer my clients as a Testlify Partner?',
    a: "You extend your digital service portfolio by actively engaging in your clients' HR management, providing continuous support, product updates, and technical assistance — fostering trust and building lasting relationships.",
  },
  {
    q: 'Whom do we integrate with?',
    a: 'We integrate with any platform that caters to HR professionals or recruiters, including HRMS, ATS, employee performance, and management tools.',
  },
  {
    q: 'Which tools are integrated with Testlify?',
    a: 'The top HR tools and ATS including BambooHR, 100Hires, ATS Anywhere, Breezy HR, and many more are already integrated with Testlify.',
  },
];

export default function PartnershipPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      <SiteHeader
        announcement="Partner with Testlify — referral, reseller or integration"
        announcementCta="Become a partner"
      />

      <section className="hero">
        <div className="wrap">
          <div className="herogrid">
            <div>
              <div className="reveal" style={{ transitionDelay: '.02s' }}>
                <span className="pill">
                  <span className="pilltag">PARTNERS</span> Referral · reseller · integration
                </span>
              </div>
              <h1 className="h1 reveal" style={{ marginTop: '22px', transitionDelay: '.06s' }}>
                Partner with <span className="acc">Testlify</span>
              </h1>
              <p className="lead reveal" style={{ marginTop: '22px', maxWidth: '520px', transitionDelay: '.1s' }}>
                Fuel your company&apos;s success with dynamic partnerships that drive results. Join hands with us to
                unlock exponential growth and pave the way for global expansion.
              </p>
              <div className="heroctas reveal" style={{ transitionDelay: '.14s' }}>
                <CtaButton label="Become a partner" href="/contact" variant="primary" size="md" icon="arrow" magnetic />
                <CtaButton label="Book a demo" href="/contact" variant="secondary" size="md" icon="play" />
              </div>
              <div className="trust reveal" style={{ transitionDelay: '.18s' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '7px' }}>
                  <span style={{ color: '#F23F44', fontWeight: 700 }}>✓</span>Dedicated partner manager
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '7px' }}>
                  <span style={{ color: '#F23F44', fontWeight: 700 }}>✓</span>Co-marketing support
                </span>
              </div>
            </div>
            <div className="reveal" style={{ position: 'relative', transitionDelay: '.12s' }}>
              <div className="matchtag">
                <i></i> Three ways to partner
              </div>
              <div className="mock">
                <div className="mocktop">
                  <span className="mc" style={{ background: '#FF5F57' }}></span>
                  <span className="mc" style={{ background: '#FEBC2E' }}></span>
                  <span className="mc" style={{ background: '#28C840' }}></span>
                  <span className="mockbar">partners.testlify.com/dashboard</span>
                </div>
                <div className="mockbody">
                  <div className="ptrack top">
                    <span className="pticon" style={{ background: 'linear-gradient(135deg,#F23F44,#FF7A52)' }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2l2.4 7.4H22l-6 4.5 2.3 7.1L12 16.9 5.7 21l2.3-7.1-6-4.5h7.6z"></path>
                      </svg>
                    </span>
                    <div>
                      <div className="ptname">Referral program</div>
                      <div className="ptdesc">Refer &amp; earn commission</div>
                    </div>
                    <span className="ptbadge">Active</span>
                  </div>
                  <div className="ptrack">
                    <span className="pticon" style={{ background: 'linear-gradient(135deg,#6E62F2,#9A8BFF)' }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20.59 13.41 12 22l-9-9V3h10l9 9-1.41 1.41zM7 7h.01"></path>
                      </svg>
                    </span>
                    <div>
                      <div className="ptname">Reseller program</div>
                      <div className="ptdesc">White-labeled &amp; your pricing</div>
                    </div>
                    <span className="ptbadge">Active</span>
                  </div>
                  <div className="ptrack">
                    <span className="pticon" style={{ background: 'linear-gradient(135deg,#2AA6F2,#67C9FF)' }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16v16H4z"></path>
                        <path d="M4 9h16M9 4v16"></path>
                      </svg>
                    </span>
                    <div>
                      <div className="ptname">Integration program</div>
                      <div className="ptdesc">Build on the Testlify API</div>
                    </div>
                    <span className="ptbadge">Active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="center-head">
            <p className="eyebrow reveal">
              Partner benefits<b>.</b>
            </p>
            <h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>
              Boost your outcomes with partner benefits
            </h2>
            <p className="lead reveal" style={{ transitionDelay: '.06s' }}>
              Explore a variety of collaboration options, including our referral program, reseller program, and
              integrations program. Together, let&apos;s supercharge your outcomes by delving into co-marketing
              adventures, tapping into customer referrals, and generating more leads.
            </p>
          </div>
          <div className="grid3">
            <div className="card reveal">
              <span className="cic">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2l2.4 7.4H22l-6 4.5 2.3 7.1L12 16.9 5.7 21l2.3-7.1-6-4.5h7.6z"></path>
                </svg>
              </span>
              <h3 className="h3" style={{ fontSize: '18px', marginBottom: '8px' }}>
                <a href="/referral-program" style={{ color: '#1A1014', textDecoration: 'none' }}>
                  Referral program
                </a>
              </h3>
              <p className="body" style={{ fontSize: '14px' }}>
                Refer Testlify to your HR network, delight your customers, and watch your commissions soar. It&apos;s
                more than just a partnership; it&apos;s a journey to mutual success!
              </p>
            </div>
            <div className="card reveal" style={{ transitionDelay: '.06s' }}>
              <span className="cic">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.59 13.41 12 22l-9-9V3h10l9 9-1.41 1.41zM7 7h.01"></path>
                </svg>
              </span>
              <h3 className="h3" style={{ fontSize: '18px', marginBottom: '8px' }}>
                <a href="/reseller-plan" style={{ color: '#1A1014', textDecoration: 'none' }}>
                  Reseller Program
                </a>
              </h3>
              <p className="body" style={{ fontSize: '14px' }}>
                Sell our cutting-edge talent assessment platform, seamlessly branded as your own creation. Elevate
                your offerings, elevate your brand!
              </p>
            </div>
            <div className="card reveal" style={{ transitionDelay: '.12s' }}>
              <span className="cic">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16v16H4z"></path>
                  <path d="M4 9h16M9 4v16"></path>
                </svg>
              </span>
              <h3 className="h3" style={{ fontSize: '18px', marginBottom: '8px' }}>
                <a href="/integration-program" style={{ color: '#1A1014', textDecoration: 'none' }}>
                  Integration program
                </a>
              </h3>
              <p className="body" style={{ fontSize: '14px' }}>
                Elevate your product by seamlessly integrating with Testlify. Unlock a world of possibilities and
                offer enhanced value to your users through this powerful partnership.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec" style={{ background: '#FBF3EE' }}>
        <div className="wrap split pssplit">
          <div className="reveal">
            <h2 className="h2" style={{ marginBottom: '18px' }}>
              Become a referral partner and earn more than a commission
            </h2>
            <p className="body" style={{ marginBottom: '20px' }}>
              Leverage your network, earn commissions, and enjoy mutual growth. No product creation, just trusted
              recommendations for a diversified income stream.
            </p>
            <ul className="chk">
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F23F44" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
                Earn commissions for successful referrals, adding to your business&apos;s income
              </li>
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F23F44" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
                Utilize your network to endorse a valuable product, building on trust and credibility
              </li>
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F23F44" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
                Enjoy flexibility in referral partnerships, adapting to your pace and business model
              </li>
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F23F44" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
                Access to resources, tools, or support for enhanced business operations
              </li>
            </ul>
            <a
              href="/referral-program"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: '#F23F44',
                fontWeight: 700,
                fontSize: '15px',
                textDecoration: 'none',
                marginTop: '22px',
              }}
            >
              Learn more
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>
          <div className="reveal" style={{ transitionDelay: '.06s' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://testlify.com/wp-content/uploads/2022/09/Hire-Fast-or-Lose-1024x786.png"
              alt="Hire fast or lose"
            />
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap split pssplit">
          <div className="reveal" style={{ order: 2 }}>
            <h2 className="h2" style={{ marginBottom: '18px' }}>
              Reap the benefits of our reseller partnership
            </h2>
            <p className="body" style={{ marginBottom: '20px' }}>
              Sell Testlify&apos;s finest assessment tool under your branding, offering a seamless solution that
              feels entirely your own, and watching your business thrive.
            </p>
            <ul className="chk">
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F23F44" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
                Sell assessment tool under your branding, establishing ownership and brand recognition
              </li>
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F23F44" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
                A seamless solution that even integrates effortlessly into your product lineup
              </li>
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F23F44" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
                Access new markets and clientele with a trusted and white-labeled solution
              </li>
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F23F44" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
                Expand and diversify your product line without investing in new product development
              </li>
            </ul>
            <a
              href="/reseller-plan"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: '#F23F44',
                fontWeight: 700,
                fontSize: '15px',
                textDecoration: 'none',
                marginTop: '22px',
              }}
            >
              Learn more
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>
          <div className="reveal" style={{ order: 1, transitionDelay: '.06s' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://testlify.com/wp-content/uploads/2023/06/Product-image-1-4-1024x741.png"
              alt="Sales skills"
            />
          </div>
        </div>
      </section>

      <section className="sec" style={{ background: '#FBF3EE' }}>
        <div className="wrap split pssplit">
          <div className="reveal">
            <h2 className="h2" style={{ marginBottom: '18px' }}>
              Seamlessly integrate with Testlify
            </h2>
            <p className="body" style={{ marginBottom: '20px' }}>
              Seamlessly integrate Testlify with your existing tools to create a unified platform, offering users a
              comprehensive and streamlined experience. Boost efficiency and optimize recruitment processes across HR
              tools with Testlify&apos;s advanced features.
            </p>
            <ul className="chk">
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F23F44" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
                Create a unified platform for your users, providing a seamless experience across multiple tools
              </li>
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F23F44" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
                Offer your customers a comprehensive solution by integrating Testlify with your existing tools
              </li>
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F23F44" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
                Boost efficiency by connecting your tools with Testlify&apos;s advanced features through APIs
              </li>
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F23F44" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
                Simplify complex workflows and optimize recruitment processes across HR tools with Testlify
              </li>
            </ul>
            <a
              href="/integration-program"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: '#F23F44',
                fontWeight: 700,
                fontSize: '15px',
                textDecoration: 'none',
                marginTop: '22px',
              }}
            >
              Learn more
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>
          <div className="reveal" style={{ transitionDelay: '.06s' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://testlify.com/wp-content/uploads/2022/08/Manage-More-Applications-1024x1024.png"
              alt="Manage more applications"
            />
          </div>
        </div>
      </section>

      <section className="sec darkcta">
        <div className="wrap" style={{ maxWidth: '720px' }}>
          <h2 className="h2 reveal">Testlify is committed to fostering collaborative success</h2>
          <p className="lead reveal" style={{ margin: '18px auto 30px', transitionDelay: '.04s' }}>
            We invite you to explore exciting partnership opportunities with us. Let&apos;s revolutionize the HR
            landscape together. Connect with us to discuss how our synergies can drive innovation and growth for both
            of our organizations. Your success is our shared journey!
          </p>
          <div className="reveal btnrow" style={{ transitionDelay: '.08s' }}>
            <CtaButton label="Become a partner" href="/contact" variant="light" size="md" icon="arrow" />
            <CtaButton label="Our partners" href="/our-partners" variant="outline-light" size="md" icon="none" />
          </div>
        </div>
      </section>

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
