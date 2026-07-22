import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaButton from '@/components/CtaButton';
import CtaBand from '@/components/CtaBand';

export default function ResellerPlanPage() {
  return (
    <>
      <SiteHeader announcement="Resell Testlify and grow your revenue" announcementCta="Become a reseller" />

      <section className="phero">
        <div className="wrap" style={{ maxWidth: 860 }}>
          <p className="eyebrow reveal">Reseller plan<b>.</b></p>
          <h1 className="h1 reveal" style={{ transitionDelay: '.04s' }}>Sell the platform<br />teams already love</h1>
          <p className="lead reveal" style={{ margin: '22px auto 0', maxWidth: 640, transitionDelay: '.08s' }}>Add Testlify to your portfolio and earn healthy margins reselling the assessment platform 1,500+ teams trust — with dedicated support and flexible packaging.</p>
          <div className="reveal btnrow" style={{ marginTop: 30, transitionDelay: '.12s' }}>
            <CtaButton label="Become a reseller" href="/contact" variant="primary" size="md" icon="arrow" />
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="center-head">
            <p className="eyebrow reveal">Why resell Testlify<b>.</b></p>
            <h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>A plan built for growth</h2>
          </div>
          <div className="grid3">
            <div className="card reveal">
              <span className="cic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg></span>
              <h3 className="h3" style={{ fontSize: 18, marginBottom: 8 }}>Healthy margins</h3>
              <p className="body" style={{ fontSize: 14 }}>Competitive reseller pricing with volume incentives as you grow.</p>
            </div>
            <div className="card reveal" style={{ transitionDelay: '.06s' }}>
              <span className="cic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l2.4 7.4H22l-6 4.5 2.3 7.1L12 16.9 5.7 21l2.3-7.1-6-4.5h7.6z"></path></svg></span>
              <h3 className="h3" style={{ fontSize: 18, marginBottom: 8 }}>A product that sells</h3>
              <p className="body" style={{ fontSize: 14 }}>3,500+ tests, AI interviews and 100+ integrations — easy to recommend.</p>
            </div>
            <div className="card reveal" style={{ transitionDelay: '.12s' }}>
              <span className="cic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg></span>
              <h3 className="h3" style={{ fontSize: 18, marginBottom: 8 }}>Dedicated support</h3>
              <p className="body" style={{ fontSize: 14 }}>A partner manager, enablement and co-marketing to help you win.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec darkcta">
        <div className="wrap" style={{ maxWidth: 720 }}>
          <h2 className="h2 reveal">Ready to resell Testlify?</h2>
          <p className="lead reveal" style={{ margin: '18px auto 30px', transitionDelay: '.04s' }}>Tell us about your business and we&apos;ll build a reseller plan that fits.</p>
          <div className="reveal btnrow" style={{ transitionDelay: '.08s' }}>
            <CtaButton label="Talk to our team" href="/contact" variant="light" size="md" icon="arrow" />
            <CtaButton label="Partnerships" href="/partnership" variant="outline-light" size="md" icon="none" />
          </div>
        </div>
      </section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
