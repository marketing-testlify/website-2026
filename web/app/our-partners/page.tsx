import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaButton from '@/components/CtaButton';
import CtaBand from '@/components/CtaBand';

export default function OurPartnersPage() {
  return (
    <>
      <SiteHeader announcement="Grow with Testlify — partner programs now open" />

      <section className="phero">
        <div className="wrap" style={{ maxWidth: '860px' }}>
          <p className="eyebrow reveal">Our partners<b>.</b></p>
          <h1 className="h1 reveal" style={{ transitionDelay: '.04s' }}>Let&apos;s grow<br />hiring together</h1>
          <p className="lead reveal" style={{ margin: '22px auto 0', maxWidth: '640px', transitionDelay: '.08s' }}>Whether you resell, refer, or integrate, Testlify&apos;s partner programs help you add value for your clients and unlock new revenue — with the fastest-growing skills assessment platform behind you.</p>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="center-head">
            <p className="eyebrow reveal">Ways to partner<b>.</b></p>
            <h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>Choose your program</h2>
          </div>
          <div className="grid3">
            <div className="card reveal">
              <span className="cic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 12v10H4V12M2 7h20v5H2zM12 22V7M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path></svg></span>
              <h3 className="h3" style={{ fontSize: '18px', marginBottom: '8px' }}>Referral program</h3>
              <p className="body" style={{ fontSize: '14px' }}>Refer hiring teams to Testlify and earn recurring commission for every account you bring in.</p>
              <Link className="lnk" href="/referral-program" style={{ display: 'inline-block', marginTop: '14px', fontSize: '14px' }}>Explore referrals →</Link>
            </div>
            <div className="card reveal" style={{ transitionDelay: '.06s' }}>
              <span className="cic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"></path></svg></span>
              <h3 className="h3" style={{ fontSize: '18px', marginBottom: '8px' }}>Partnership program</h3>
              <p className="body" style={{ fontSize: '14px' }}>Consultancies, agencies and HR platforms: resell Testlify and deliver assessment to your clients.</p>
              <Link className="lnk" href="/partnership" style={{ display: 'inline-block', marginTop: '14px', fontSize: '14px' }}>Explore partnerships →</Link>
            </div>
            <div className="card reveal" style={{ transitionDelay: '.12s' }}>
              <span className="cic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16v16H4z"></path><path d="M4 9h16M9 4v16"></path></svg></span>
              <h3 className="h3" style={{ fontSize: '18px', marginBottom: '8px' }}>Integration program</h3>
              <p className="body" style={{ fontSize: '14px' }}>Build a native integration with Testlify and reach 50,000+ recruiters through our marketplace.</p>
              <Link className="lnk" href="/integration-program" style={{ display: 'inline-block', marginTop: '14px', fontSize: '14px' }}>Explore integrations →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="sec" style={{ background: '#FBF3EE' }}>
        <div className="wrap split">
          <div className="reveal">
            <p className="eyebrow">Why partner with us<b>.</b></p>
            <h2 className="h2" style={{ marginBottom: '22px' }}>A platform your clients will love</h2>
            <ul className="chk">
              <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>3,500+ validated tests and AI interviews on one platform</li>
              <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>100+ ATS integrations included on every paid plan</li>
              <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>Transparent, per-candidate pricing with no annual lock-in</li>
              <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>Dedicated partner support and co-marketing</li>
            </ul>
          </div>
          <div className="reveal" style={{ transitionDelay: '.08s', background: 'linear-gradient(160deg,#FFF4F3,#FBE9E9)', border: '1px solid #F6DCDD', borderRadius: '24px', padding: '40px' }}>
            <p className="h3" style={{ fontSize: '22px', lineHeight: 1.4, fontWeight: 600 }}>Ready to build something together? Tell us how you&apos;d like to partner and we&apos;ll get you set up.</p>
            <div style={{ marginTop: '24px' }}>
              <CtaButton label="Become a partner" href="/contact" variant="primary" size="md" icon="arrow" />
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
