import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaButton from '@/components/CtaButton';
import CtaBand from '@/components/CtaBand';

export default function IntegrationProgramPage() {
  return (
    <>
      <SiteHeader announcement="Build a native Testlify integration" />

      <section className="phero">
        <div className="wrap" style={{ maxWidth: '860px' }}>
          <p className="eyebrow reveal">
            Integration program<b>.</b>
          </p>
          <h1 className="h1 reveal" style={{ transitionDelay: '.04s' }}>
            Connect your tool
            <br />
            to Testlify
          </h1>
          <p className="lead reveal" style={{ margin: '22px auto 0', maxWidth: '640px', transitionDelay: '.08s' }}>
            Build a native integration with Testlify and put skills assessment in front of 50,000+ recruiters. Join 100+
            platforms already connected through our marketplace.
          </p>
          <div className="reveal btnrow" style={{ marginTop: '30px', transitionDelay: '.12s' }}>
            <CtaButton label="Start building" href="/contact" variant="primary" size="md" icon="arrow" />
            <CtaButton label="View integrations" href="/integrations" variant="ghost" size="md" icon="none" />
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="center-head">
            <p className="eyebrow reveal">
              Why build with us<b>.</b>
            </p>
            <h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>
              Reach, tools and support
            </h2>
          </div>
          <div className="grid3">
            <div className="card reveal">
              <span className="cic">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
              </span>
              <h3 className="h3" style={{ fontSize: '18px', marginBottom: '8px' }}>
                A ready audience
              </h3>
              <p className="body" style={{ fontSize: '14px' }}>
                Get listed in our marketplace in front of 50,000+ active recruiters.
              </p>
            </div>
            <div className="card reveal" style={{ transitionDelay: '.06s' }}>
              <span className="cic">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              </span>
              <h3 className="h3" style={{ fontSize: '18px', marginBottom: '8px' }}>
                A robust API
              </h3>
              <p className="body" style={{ fontSize: '14px' }}>
                Well-documented REST API and webhooks make integration straightforward.
              </p>
            </div>
            <div className="card reveal" style={{ transitionDelay: '.12s' }}>
              <span className="cic">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                </svg>
              </span>
              <h3 className="h3" style={{ fontSize: '18px', marginBottom: '8px' }}>
                Engineering support
              </h3>
              <p className="body" style={{ fontSize: '14px' }}>
                Our team helps you design, test and launch a rock-solid integration.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec" style={{ background: '#FBF3EE' }}>
        <div className="wrap split">
          <div className="reveal">
            <p className="eyebrow">
              Getting started<b>.</b>
            </p>
            <h2 className="h2" style={{ marginBottom: '22px' }}>
              From idea to listed
            </h2>
            <ul className="chk">
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
                Apply and tell us what you want to build
              </li>
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
                Get API access, sandbox keys and docs
              </li>
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
                Build and test with our team&apos;s help
              </li>
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
                Launch to the marketplace and grow together
              </li>
            </ul>
          </div>
          <div
            className="reveal"
            style={{
              transitionDelay: '.08s',
              background: 'linear-gradient(160deg,#FFF4F3,#FBE9E9)',
              border: '1px solid #F6DCDD',
              borderRadius: '24px',
              padding: '40px',
            }}
          >
            <p className="h3" style={{ fontSize: '22px', lineHeight: '1.4', fontWeight: 600 }}>
              Have a tool recruiters would love connected to Testlify? Let&apos;s talk.
            </p>
            <div style={{ marginTop: '24px' }}>
              <CtaButton label="Apply to build" href="/contact" variant="primary" size="md" icon="arrow" />
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
