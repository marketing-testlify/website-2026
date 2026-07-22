import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaBand from '@/components/CtaBand';

export default function CaseStudyPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
.csgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;}
.cscard{display:block;background:#fff;border:1px solid #EFE2E3;border-radius:18px;padding:28px;transition:transform .3s cubic-bezier(.2,.7,.3,1),border-color .3s,box-shadow .3s;}
.cscard:hover{transform:translateY(-4px);border-color:#FBD0D1;box-shadow:0 16px 34px rgba(110,11,14,.10);}
.csm{font-size:26px;font-weight:800;letter-spacing:-.8px;color:#F23F44;margin-bottom:12px;}
.csco{font-size:15px;font-weight:700;color:#1A1014;margin:0 0 8px;}
@media(max-width:920px){.csgrid{grid-template-columns:1fr;}}
` }} />

      <SiteHeader announcement="Real teams, real results with Testlify" announcementCta="Read stories" />

      <section className="phero"><div className="wrap" style={{ maxWidth: '860px' }}>
        <p className="eyebrow reveal">Case studies<b>.</b></p>
        <h1 className="h1 reveal" style={{ transitionDelay: '.04s' }}>Proof, from teams<br />like yours</h1>
        <p className="lead reveal" style={{ margin: '22px auto 0', maxWidth: '640px', transitionDelay: '.08s' }}>See how hiring teams across industries replaced resume guesswork with verified skill — and the results they got.</p>
      </div></section>

      <section className="sec"><div className="wrap">
        <div className="csgrid reveal">
          <Link className="cscard" href="/whire"><div className="csm">50% less screening</div><p className="csco">Whire</p><p className="body" style={{ fontSize: '14px' }}>Skills-first shortlists in half the time.</p></Link>
          <Link className="cscard" href="/udder"><div className="csm">3× qualified hires</div><p className="csco">Udder</p><p className="body" style={{ fontSize: '14px' }}>Scaled technical hiring without lowering the bar.</p></Link>
          <Link className="cscard" href="/playroll"><div className="csm">44% lower cost</div><p className="csco">Playroll</p><p className="body" style={{ fontSize: '14px' }}>One fair hiring bar across every country.</p></Link>
          <Link className="cscard" href="/comeet"><div className="csm">3.4× qualified hires</div><p className="csco">Comeet</p><p className="body" style={{ fontSize: '14px' }}>Structured assessment tightened the funnel.</p></Link>
          <Link className="cscard" href="/customer-success-stories-detail"><div className="csm">58% less time-to-hire</div><p className="csco">Arch Advisory Group</p><p className="body" style={{ fontSize: '14px' }}>Replaced gut-feel screening with verified skills.</p></Link>
          <Link className="cscard" href="/customer-success-stories"><div className="csm">See all</div><p className="csco">More stories</p><p className="body" style={{ fontSize: '14px' }}>Browse every customer success story.</p></Link>
        </div>
      </div></section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
