import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaButton from '@/components/CtaButton';
import CtaBand from '@/components/CtaBand';

const CSS = `
.ebook{background:#fff;border:1px solid #EFE2E3;border-radius:20px;overflow:hidden;transition:transform .3s cubic-bezier(.2,.7,.3,1),border-color .3s,box-shadow .3s;}
.ebook:hover{transform:translateY(-4px);border-color:#FBD0D1;box-shadow:0 16px 34px rgba(110,11,14,.10);}
.ecover{height:180px;display:flex;align-items:flex-end;padding:22px;color:#fff;font-weight:700;font-size:18px;line-height:1.25;}
.ebody{padding:22px 24px 26px;}
.etag{font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#F23F44;}
`;

export default function KnowledgeBasePage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <SiteHeader announcement="Free ebooks &amp; guides for hiring teams" />

      <section className="phero"><div className="wrap" style={{ maxWidth: '860px' }}>
        <p className="eyebrow reveal">Ebooks &amp; guides<b>.</b></p>
        <h1 className="h1 reveal" style={{ transitionDelay: '.04s' }}>Deep dives for<br />better hiring</h1>
        <p className="lead reveal" style={{ margin: '22px auto 0', maxWidth: '640px', transitionDelay: '.08s' }}>Practical, no-fluff guides on skills-based hiring, assessment design and recruiting operations — free to download, written by the Testlify team and our SMEs.</p>
      </div></section>

      <section className="sec"><div className="wrap">
        <div className="grid3">
          <div className="ebook reveal"><div className="ecover" style={{ background: 'linear-gradient(150deg,#F23F44,#FF7A52)' }}>The Skills-Based Hiring Playbook</div><div className="ebody"><span className="etag">Ebook</span><p className="body" style={{ fontSize: '14.5px', margin: '8px 0 16px' }}>A step-by-step framework for moving from resume screening to verified skill.</p><a className="lnk" href="#" style={{ fontSize: '14px' }}>Download →</a></div></div>
          <div className="ebook reveal" style={{ transitionDelay: '.06s' }}><div className="ecover" style={{ background: 'linear-gradient(150deg,#6B3FA0,#9B6DD1)' }}>Reducing Bias in Your Hiring Funnel</div><div className="ebody"><span className="etag">Guide</span><p className="body" style={{ fontSize: '14.5px', margin: '8px 0 16px' }}>Where bias creeps in — and the structured methods that keep it out.</p><a className="lnk" href="#" style={{ fontSize: '14px' }}>Download →</a></div></div>
          <div className="ebook reveal" style={{ transitionDelay: '.12s' }}><div className="ecover" style={{ background: 'linear-gradient(150deg,#1F8A5B,#3FB77E)' }}>Building a Remote Hiring Process</div><div className="ebody"><span className="etag">Ebook</span><p className="body" style={{ fontSize: '14.5px', margin: '8px 0 16px' }}>How to assess, interview and hire great people anywhere in the world.</p><a className="lnk" href="#" style={{ fontSize: '14px' }}>Download →</a></div></div>
          <div className="ebook reveal"><div className="ecover" style={{ background: 'linear-gradient(150deg,#2A6FDB,#4E9BE8)' }}>The Complete Guide to AI Interviews</div><div className="ebody"><span className="etag">Guide</span><p className="body" style={{ fontSize: '14.5px', margin: '8px 0 16px' }}>Video, audio and chat interviews — when to use each and how to score them.</p><a className="lnk" href="#" style={{ fontSize: '14px' }}>Download →</a></div></div>
          <div className="ebook reveal" style={{ transitionDelay: '.06s' }}><div className="ecover" style={{ background: 'linear-gradient(150deg,#C4562B,#E0894A)' }}>Volume Hiring Without the Chaos</div><div className="ebody"><span className="etag">Ebook</span><p className="body" style={{ fontSize: '14.5px', margin: '8px 0 16px' }}>Screen thousands of applicants fairly and fast, without burning out your team.</p><a className="lnk" href="#" style={{ fontSize: '14px' }}>Download →</a></div></div>
          <div className="ebook reveal" style={{ transitionDelay: '.12s' }}><div className="ecover" style={{ background: 'linear-gradient(150deg,#0E7C86,#2FB3BD)' }}>Assessment Design 101</div><div className="ebody"><span className="etag">Guide</span><p className="body" style={{ fontSize: '14.5px', margin: '8px 0 16px' }}>What makes a test valid, reliable and fair — the fundamentals explained.</p><a className="lnk" href="#" style={{ fontSize: '14px' }}>Download →</a></div></div>
        </div>
      </div></section>

      <section className="sec darkcta"><div className="wrap" style={{ maxWidth: '720px' }}>
        <h2 className="h2 reveal">Prefer to just try it?</h2>
        <p className="lead reveal" style={{ margin: '18px auto 30px', transitionDelay: '.04s' }}>Start free and run your first skills-based assessment in minutes.</p>
        <div className="reveal btnrow" style={{ transitionDelay: '.08s' }}>
          <CtaButton label="Try for free" href="#" variant="light" size="md" icon="arrow" />
          <CtaButton label="Read the blog" href="/blog" variant="outline-light" size="md" icon="none" />
        </div>
      </div></section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
