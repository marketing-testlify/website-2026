import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaButton from '@/components/CtaButton';
import CtaBand from '@/components/CtaBand';

export default function WhiteLabelPage() {
  return (
    <>
      <SiteHeader announcement="Make Testlify your own with white label" announcementCta="Learn more" />

      <section className="phero">
        <div className="wrap" style={{ maxWidth: 860 }}>
          <p className="eyebrow reveal">White label<b>.</b></p>
          <h1 className="h1 reveal" style={{ transitionDelay: '.04s' }}>Your brand,<br />our platform</h1>
          <p className="lead reveal" style={{ margin: '22px auto 0', maxWidth: 640, transitionDelay: '.08s' }}>Put your logo, colours and domain front and centre. White-label Testlify to give candidates and clients a seamless, on-brand assessment experience.</p>
          <div className="reveal btnrow" style={{ marginTop: 30, transitionDelay: '.12s' }}>
            <CtaButton label="Talk to sales" href="/contact" variant="primary" size="md" icon="arrow" />
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="center-head">
            <p className="eyebrow reveal">Make it yours<b>.</b></p>
            <h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>Branding, end to end</h2>
          </div>
          <div className="grid3">
            <div className="card reveal">
              <span className="cic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="13.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="10.5" r="2.5"></circle><circle cx="8.5" cy="7.5" r="2.5"></circle><circle cx="6.5" cy="12.5" r="2.5"></circle><path d="M12 2a10 10 0 0 0 0 20c1.5 0 2-1 2-2s-.5-1.5-.5-2.5.5-1.5 1.5-1.5H18a4 4 0 0 0 4-4 10 10 0 0 0-10-10z"></path></svg></span>
              <h3 className="h3" style={{ fontSize: 18, marginBottom: 8 }}>Your logo &amp; colours</h3>
              <p className="body" style={{ fontSize: 14 }}>Apply your brand across the assessment and candidate experience.</p>
            </div>
            <div className="card reveal" style={{ transitionDelay: '.06s' }}>
              <span className="cic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M2 12h20"></path></svg></span>
              <h3 className="h3" style={{ fontSize: 18, marginBottom: 8 }}>Custom domain</h3>
              <p className="body" style={{ fontSize: 14 }}>Host assessments on your own domain for a fully branded journey.</p>
            </div>
            <div className="card reveal" style={{ transitionDelay: '.12s' }}>
              <span className="cic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16v12H4z"></path><path d="M2 20h20"></path></svg></span>
              <h3 className="h3" style={{ fontSize: 18, marginBottom: 8 }}>Branded reports</h3>
              <p className="body" style={{ fontSize: 14 }}>Deliver results and reports that carry your identity, not ours.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec" style={{ background: '#FBF3EE' }}>
        <div className="wrap split">
          <div className="reveal">
            <p className="eyebrow">Who it&apos;s for<b>.</b></p>
            <h2 className="h2" style={{ marginBottom: 22 }}>Perfect for agencies &amp; platforms</h2>
            <ul className="chk">
              <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>Staffing agencies delivering assessment to clients</li>
              <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>HR platforms embedding testing in their product</li>
              <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>Consultancies offering branded skills assessment</li>
              <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>Enterprises standardising assessment under one brand</li>
            </ul>
            <div style={{ marginTop: 26 }}>
              <CtaButton label="Explore partnerships" href="/partnership" variant="ghost" size="md" icon="arrow" />
            </div>
          </div>
          <div className="reveal" style={{ transitionDelay: '.08s', background: 'linear-gradient(160deg,#FFF4F3,#FBE9E9)', border: '1px solid #F6DCDD', borderRadius: 24, padding: 40 }}>
            <p className="h3" style={{ fontSize: 22, lineHeight: 1.4, fontWeight: 600 }}>Want to see white label in action? Book a walkthrough with our team.</p>
            <div style={{ marginTop: 24 }}>
              <CtaButton label="Book a demo" href="/demo" variant="primary" size="md" icon="arrow" />
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
