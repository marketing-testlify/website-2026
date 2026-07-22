import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaBand from '@/components/CtaBand';

export default function DesignedForHighCompletionRatePage() {
  return (
    <>
      <SiteHeader announcement="Assessments candidates actually finish" announcementCta="Try for free" />

      <section className="phero">
        <div className="wrap" style={{ maxWidth: '860px' }}>
          <p className="eyebrow reveal">High completion rate<b>.</b></p>
          <h1 className="h1 reveal" style={{ transitionDelay: '.04s' }}>
            Assessments people<br />actually finish
          </h1>
          <p className="lead reveal" style={{ margin: '22px auto 0', maxWidth: '640px', transitionDelay: '.08s' }}>
            A great candidate experience means more completed assessments and stronger pipelines. Testlify is designed to be short, clear and fair — so candidates finish, and you get the data.
          </p>
        </div>
      </section>

      <section style={{ padding: '10px 28px 0' }}>
        <div className="wrap">
          <div className="statrow reveal">
            <div className="stat"><div className="statn">94%</div><div className="statl">candidate satisfaction</div></div>
            <div className="stat"><div className="statn">30 min</div><div className="statl">typical assessment</div></div>
            <div className="stat"><div className="statn">9</div><div className="statl">candidate UI languages</div></div>
            <div className="stat"><div className="statn">Any</div><div className="statl">device, anywhere</div></div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="center-head">
            <p className="eyebrow reveal">Why they finish<b>.</b></p>
            <h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>Built around the candidate</h2>
          </div>
          <div className="grid3">
            <div className="card reveal">
              <span className="cic">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z"></path><path d="M12 6v6l4 2"></path></svg>
              </span>
              <h3 className="h3" style={{ fontSize: '18px', marginBottom: '8px' }}>Short and focused</h3>
              <p className="body" style={{ fontSize: '14px' }}>Assessments respect candidates' time — typically around 30 minutes.</p>
            </div>
            <div className="card reveal" style={{ transitionDelay: '.06s' }}>
              <span className="cic">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"></rect><path d="M12 18h.01"></path></svg>
              </span>
              <h3 className="h3" style={{ fontSize: '18px', marginBottom: '8px' }}>Mobile-friendly</h3>
              <p className="body" style={{ fontSize: '14px' }}>A clean experience on any device means fewer drop-offs.</p>
            </div>
            <div className="card reveal" style={{ transitionDelay: '.12s' }}>
              <span className="cic">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M2 12h20"></path></svg>
              </span>
              <h3 className="h3" style={{ fontSize: '18px', marginBottom: '8px' }}>Clear &amp; fair</h3>
              <p className="body" style={{ fontSize: '14px' }}>Plain instructions and a fair format keep candidates engaged to the end.</p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
