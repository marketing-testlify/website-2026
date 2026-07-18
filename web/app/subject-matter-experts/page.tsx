import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaButton from '@/components/CtaButton';
import CtaBand from '@/components/CtaBand';

export default function SubjectMatterExpertsPage() {
  return (
    <>
      <SiteHeader announcement="Join 500+ SMEs shaping the world's best assessments" />

      <section className="phero">
        <div className="wrap" style={{ maxWidth: '860px' }}>
          <p className="eyebrow reveal">For subject matter experts<b>.</b></p>
          <h1 className="h1 reveal" style={{ transitionDelay: '.04s' }}>Turn your expertise<br />into better hiring</h1>
          <p className="lead reveal" style={{ margin: '22px auto 0', maxWidth: '640px', transitionDelay: '.08s' }}>Every Testlify test is built by an expert in that field. Join our SME network to author assessments used by 1,500+ hiring teams — and get paid for the knowledge you already have.</p>
          <div className="reveal btnrow" style={{ marginTop: '30px', transitionDelay: '.12s' }}>
            <CtaButton label="Become an SME" href="/contact" variant="primary" size="md" icon="arrow" />
            <CtaButton label="How it works" href="/science" variant="ghost" size="md" icon="none" />
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="center-head">
            <p className="eyebrow reveal">Why join<b>.</b></p>
            <h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>Expertise that reaches millions</h2>
          </div>
          <div className="grid3">
            <div className="card reveal"><span className="cic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg></span><h3 className="h3" style={{ fontSize: '18px', marginBottom: '8px' }}>Get paid for your knowledge</h3><p className="body" style={{ fontSize: '14px' }}>Earn competitive per-test compensation for authoring and reviewing assessments in your domain.</p></div>
            <div className="card reveal" style={{ transitionDelay: '.06s' }}><span className="cic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h20v14H2z"></path><path d="M8 21h8M12 17v4"></path></svg></span><h3 className="h3" style={{ fontSize: '18px', marginBottom: '8px' }}>Real-world impact</h3><p className="body" style={{ fontSize: '14px' }}>Your tests decide real hires across 50+ industries and 150+ countries every single day.</p></div>
            <div className="card reveal" style={{ transitionDelay: '.12s' }}><span className="cic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l2.4 7.4H22l-6 4.5 2.3 7.1L12 16.9 5.7 21l2.3-7.1-6-4.5h7.6z"></path></svg></span><h3 className="h3" style={{ fontSize: '18px', marginBottom: '8px' }}>Build your reputation</h3><p className="body" style={{ fontSize: '14px' }}>Join a vetted network of experts and add published, peer-reviewed assessments to your credentials.</p></div>
          </div>
        </div>
      </section>

      <section className="sec" style={{ background: '#FBF3EE' }}>
        <div className="wrap">
          <div className="center-head">
            <p className="eyebrow reveal">Our standard<b>.</b></p>
            <h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>How our tests are built</h2>
          </div>
          <div className="grid4">
            <div className="card reveal"><div style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#F23F44', color: '#fff', fontWeight: 800, fontSize: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>1</div><h3 className="h3" style={{ fontSize: '17px', marginBottom: '8px' }}>Vetted experts</h3><p className="body" style={{ fontSize: '14px' }}>We evaluate SMEs on expertise, capability and market reputation before they author.</p></div>
            <div className="card reveal" style={{ transitionDelay: '.05s' }}><div style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#F23F44', color: '#fff', fontWeight: 800, fontSize: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>2</div><h3 className="h3" style={{ fontSize: '17px', marginBottom: '8px' }}>Peer reviewed</h3><p className="body" style={{ fontSize: '14px' }}>Every test is reviewed by other experts before it is ever published.</p></div>
            <div className="card reveal" style={{ transitionDelay: '.1s' }}><div style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#F23F44', color: '#fff', fontWeight: 800, fontSize: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>3</div><h3 className="h3" style={{ fontSize: '17px', marginBottom: '8px' }}>Calibrated</h3><p className="body" style={{ fontSize: '14px' }}>Tests are calibrated on data from thousands of skilled test-takers.</p></div>
            <div className="card reveal" style={{ transitionDelay: '.15s' }}><div style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#F23F44', color: '#fff', fontWeight: 800, fontSize: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>4</div><h3 className="h3" style={{ fontSize: '17px', marginBottom: '8px' }}>Continuously refined</h3><p className="body" style={{ fontSize: '14px' }}>Built-in feedback loops let SMEs keep improving tests over time.</p></div>
          </div>
        </div>
      </section>

      <section className="sec darkcta">
        <div className="wrap" style={{ maxWidth: '720px' }}>
          <h2 className="h2 reveal">Share what you know</h2>
          <p className="lead reveal" style={{ margin: '18px auto 30px', transitionDelay: '.04s' }}>Apply to join the Testlify SME network and help set the standard for skills-based hiring.</p>
          <div className="reveal btnrow" style={{ transitionDelay: '.08s' }}>
            <CtaButton label="Apply to become an SME" href="/contact" variant="light" size="md" icon="arrow" />
          </div>
        </div>
      </section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
