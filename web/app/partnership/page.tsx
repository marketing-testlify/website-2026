import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaButton from '@/components/CtaButton';
import CtaBand from '@/components/CtaBand';

export default function PartnershipPage() {
  return (
    <>
      <SiteHeader announcement="Resell Testlify to your clients" announcementCta="Partner with us" />

      <section className="phero">
        <div className="wrap" style={{ maxWidth: 860 }}>
          <p className="eyebrow reveal">Partnership program<b>.</b></p>
          <h1 className="h1 reveal" style={{ transitionDelay: '.04s' }}>Deliver better hiring<br />to your clients</h1>
          <p className="lead reveal" style={{ margin: '22px auto 0', maxWidth: 640, transitionDelay: '.08s' }}>Consultancies, staffing agencies and HR platforms: add Testlify to your offering, unlock new revenue, and give your clients the assessment platform 1,500+ teams trust.</p>
          <div className="reveal btnrow" style={{ marginTop: 30, transitionDelay: '.12s' }}>
            <CtaButton label="Become a partner" href="/contact" variant="primary" size="md" icon="arrow" />
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="center-head">
            <p className="eyebrow reveal">Who it&apos;s for<b>.</b></p>
            <h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>Built for partners like you</h2>
          </div>
          <div className="grid3">
            <div className="card reveal">
              <span className="cic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path></svg></span>
              <h3 className="h3" style={{ fontSize: 18, marginBottom: 8 }}>HR consultancies</h3>
              <p className="body" style={{ fontSize: 14 }}>Bring objective, skills-based assessment into every client engagement.</p>
            </div>
            <div className="card reveal" style={{ transitionDelay: '.06s' }}>
              <span className="cic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4"></path></svg></span>
              <h3 className="h3" style={{ fontSize: 18, marginBottom: 8 }}>Staffing agencies</h3>
              <p className="body" style={{ fontSize: 14 }}>Screen and shortlist candidates faster and place with confidence.</p>
            </div>
            <div className="card reveal" style={{ transitionDelay: '.12s' }}>
              <span className="cic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16v16H4z"></path><path d="M4 9h16M9 4v16"></path></svg></span>
              <h3 className="h3" style={{ fontSize: 18, marginBottom: 8 }}>HR platforms</h3>
              <p className="body" style={{ fontSize: 14 }}>Embed assessment into your product with our API and native integrations.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec" style={{ background: '#FBF3EE' }}>
        <div className="wrap split">
          <div className="reveal">
            <p className="eyebrow">What you get<b>.</b></p>
            <h2 className="h2" style={{ marginBottom: 22 }}>A program built to grow with you</h2>
            <ul className="chk">
              <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>Competitive margins and volume incentives</li>
              <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>Dedicated partner manager and onboarding</li>
              <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>Co-marketing and sales enablement</li>
              <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>White-label options for the full platform</li>
            </ul>
          </div>
          <div className="reveal" style={{ transitionDelay: '.08s', background: 'linear-gradient(160deg,#FFF4F3,#FBE9E9)', border: '1px solid #F6DCDD', borderRadius: 24, padding: 40 }}>
            <p className="h3" style={{ fontSize: 22, lineHeight: 1.4, fontWeight: 600 }}>Let&apos;s build a partnership that works for your business and your clients.</p>
            <div style={{ marginTop: 24 }}>
              <CtaButton label="Talk to our team" href="/contact" variant="primary" size="md" icon="arrow" />
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
