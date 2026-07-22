import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaButton from '@/components/CtaButton';
import CtaBand from '@/components/CtaBand';

const CSS = `
.ep{display:grid;grid-template-columns:88px 1fr auto;gap:22px;align-items:center;background:#fff;border:1px solid #EFE2E3;border-radius:18px;padding:22px 26px;transition:transform .3s cubic-bezier(.2,.7,.3,1),border-color .3s,box-shadow .3s;}
.ep:hover{transform:translateY(-3px);border-color:#FBD0D1;box-shadow:0 16px 34px rgba(110,11,14,.10);}
.epart{width:88px;height:88px;border-radius:14px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:800;font-size:26px;}
.epplay{width:46px;height:46px;border-radius:50%;background:#FFF0F0;color:#F23F44;display:flex;align-items:center;justify-content:center;flex-shrink:0;}
.epnum{font-size:12.5px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#8A7A7D;}
@media(max-width:640px){.ep{grid-template-columns:64px 1fr;}.epart{width:64px;height:64px;font-size:20px;}.epplay{display:none;}}
`;

export default function PodcastPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <SiteHeader announcement="The Testlify podcast — hiring, unfiltered" announcementCta="Listen now" />

      <section className="phero">
        <div className="wrap" style={{ maxWidth: '860px' }}>
          <p className="eyebrow reveal">Podcast<b>.</b></p>
          <h1 className="h1 reveal" style={{ transitionDelay: '.04s' }}>Real talk on<br />hiring &amp; talent</h1>
          <p className="lead reveal" style={{ margin: '22px auto 0', maxWidth: '640px', transitionDelay: '.08s' }}>Conversations with TA leaders, founders and people scientists on what actually works in hiring. New episodes every fortnight.</p>
        </div>
      </section>

      <section className="sec">
        <div className="wrap" style={{ maxWidth: '900px' }}>
          <div className="center-head">
            <p className="eyebrow reveal">Latest episodes<b>.</b></p>
            <h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>Tune in</h2>
          </div>
          <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div className="ep"><div className="epart" style={{ background: 'linear-gradient(150deg,#F23F44,#FF7A52)' }}>12</div><div><span className="epnum">Episode 12 · 42 min</span><h3 className="h3" style={{ fontSize: '18px', margin: '6px 0 0' }}>Killing the phone screen: a TA leader&apos;s story</h3></div><span className="epplay"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"></path></svg></span></div>
            <div className="ep"><div className="epart" style={{ background: 'linear-gradient(150deg,#6B3FA0,#9B6DD1)' }}>11</div><div><span className="epnum">Episode 11 · 38 min</span><h3 className="h3" style={{ fontSize: '18px', margin: '6px 0 0' }}>Do degrees still matter? The skills-first debate</h3></div><span className="epplay"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"></path></svg></span></div>
            <div className="ep"><div className="epart" style={{ background: 'linear-gradient(150deg,#1F8A5B,#3FB77E)' }}>10</div><div><span className="epnum">Episode 10 · 45 min</span><h3 className="h3" style={{ fontSize: '18px', margin: '6px 0 0' }}>Scaling hiring from 10 to 1,000 without losing your standards</h3></div><span className="epplay"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"></path></svg></span></div>
            <div className="ep"><div className="epart" style={{ background: 'linear-gradient(150deg,#2A6FDB,#4E9BE8)' }}>09</div><div><span className="epnum">Episode 9 · 40 min</span><h3 className="h3" style={{ fontSize: '18px', margin: '6px 0 0' }}>Fair by design: removing bias from the funnel</h3></div><span className="epplay"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"></path></svg></span></div>
          </div>
        </div>
      </section>

      <section className="sec darkcta">
        <div className="wrap" style={{ maxWidth: '720px' }}>
          <h2 className="h2 reveal">Never miss an episode</h2>
          <p className="lead reveal" style={{ margin: '18px auto 30px', transitionDelay: '.04s' }}>Subscribe wherever you listen, or read the blog for more.</p>
          <div className="reveal btnrow" style={{ transitionDelay: '.08s' }}>
            <CtaButton label="Subscribe" href="#" variant="light" size="md" icon="arrow" />
            <CtaButton label="Read the blog" href="/blog" variant="outline-light" size="md" icon="none" />
          </div>
        </div>
      </section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
