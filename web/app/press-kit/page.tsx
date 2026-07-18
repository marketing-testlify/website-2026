import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaButton from '@/components/CtaButton';
import CtaBand from '@/components/CtaBand';

export default function PressKitPage() {
  return (
    <>
      <SiteHeader announcement="Press &amp; media enquiries welcome" announcementCta="Contact press" />

      <section className="phero">
        <div className="wrap" style={{ maxWidth: '860px' }}>
          <p className="eyebrow reveal">Press kit<b>.</b></p>
          <h1 className="h1 reveal" style={{ transitionDelay: '.04s' }}>Everything you<br />need to tell our story</h1>
          <p className="lead reveal" style={{ margin: '22px auto 0', maxWidth: '640px', transitionDelay: '.08s' }}>Logos, brand assets, company facts and executive bios — all in one place. Writing about Testlify? Grab what you need or reach out to our team.</p>
          <div className="reveal btnrow" style={{ marginTop: '30px', transitionDelay: '.12s' }}>
            <CtaButton label="Download brand assets" href="/brand" variant="primary" size="md" icon="arrow" />
            <CtaButton label="Contact press" href="/contact" variant="ghost" size="md" icon="none" />
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="center-head">
            <p className="eyebrow reveal">Company facts<b>.</b></p>
            <h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>Testlify at a glance</h2>
          </div>
          <div className="grid4">
            <div className="card reveal" style={{ textAlign: 'center' }}><div className="statn" style={{ fontSize: '36px' }}>2021</div><p className="body" style={{ fontSize: '13.5px', marginTop: '10px' }}>Founded</p></div>
            <div className="card reveal" style={{ transitionDelay: '.05s', textAlign: 'center' }}><div className="statn" style={{ fontSize: '36px' }}>100+</div><p className="body" style={{ fontSize: '13.5px', marginTop: '10px' }}>Team members</p></div>
            <div className="card reveal" style={{ transitionDelay: '.1s', textAlign: 'center' }}><div className="statn" style={{ fontSize: '36px' }}>3,500+</div><p className="body" style={{ fontSize: '13.5px', marginTop: '10px' }}>Validated tests</p></div>
            <div className="card reveal" style={{ transitionDelay: '.15s', textAlign: 'center' }}><div className="statn" style={{ fontSize: '36px' }}>1,500+</div><p className="body" style={{ fontSize: '13.5px', marginTop: '10px' }}>Hiring teams</p></div>
          </div>
        </div>
      </section>

      <section className="sec" style={{ background: '#FBF3EE' }}>
        <div className="wrap split">
          <div className="reveal">
            <p className="eyebrow">Boilerplate<b>.</b></p>
            <h2 className="h2" style={{ marginBottom: '20px' }}>About Testlify</h2>
            <p className="body">Testlify is an AI-native, skills-based talent assessment platform helping companies hire the best talent quickly, easily and affordably. With 3,500+ validated tests, AI video, audio and chat interviews, and 100+ ATS integrations, Testlify replaces resume guesswork with verified skill.</p>
            <p className="body" style={{ marginTop: '14px' }}>Founded in 2021 and backed by SHRM Labs, Google for Startups, Microsoft for Startups and NVIDIA Inception, Testlify serves 1,500+ hiring teams across 50+ industries and 150+ countries.</p>
          </div>
          <div className="reveal" style={{ transitionDelay: '.08s' }}>
            <div className="card" style={{ marginBottom: '16px' }}><h3 className="h3" style={{ fontSize: '17px', marginBottom: '6px' }}>Media enquiries</h3><p className="body" style={{ fontSize: '14px' }}>Reach our communications team for interviews, quotes and data requests.</p><Link className="lnk" href="/contact" style={{ display: 'inline-block', marginTop: '10px', fontSize: '14px' }}>press@testlify.com →</Link></div>
            <div className="card"><h3 className="h3" style={{ fontSize: '17px', marginBottom: '6px' }}>Awards &amp; recognition</h3><p className="body" style={{ fontSize: '14px' }}>See the badges, medals and honours Testlify has earned.</p><Link className="lnk" href="/awards" style={{ display: 'inline-block', marginTop: '10px', fontSize: '14px' }}>View awards →</Link></div>
          </div>
        </div>
      </section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
