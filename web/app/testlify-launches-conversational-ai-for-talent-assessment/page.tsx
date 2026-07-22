import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaButton from '@/components/CtaButton';
import CtaBand from '@/components/CtaBand';

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
.artwrap{max-width:740px;margin:0 auto;padding:0 28px;}
.crumb{font-size:13px;color:#9A878A;font-weight:600;margin:36px 0 22px;}
.crumb a{color:#F23F44;}
.arttitle{font-size:46px;line-height:1.08;font-weight:800;letter-spacing:-1.6px;margin:0 0 22px;}
.artmeta{display:flex;align-items:center;gap:12px;font-size:13.5px;color:#9A878A;margin-bottom:30px;}
.artav{width:42px;height:42px;border-radius:50%;background:#F23F44;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:15px;}
.artname{font-weight:700;color:#1A1014;font-size:14px;}
.arthero{height:360px;border-radius:22px;background:linear-gradient(150deg,#6B3FA0,#2E1A4A);margin-bottom:44px;}
.prose p{font-size:18px;line-height:1.75;color:#3A2C30;margin:0 0 24px;}
.prose h2{font-size:30px;font-weight:800;letter-spacing:-.8px;margin:46px 0 18px;color:#1A1014;}
.prose ul{margin:0 0 24px;padding-left:24px;}
.prose li{font-size:18px;line-height:1.7;color:#3A2C30;margin-bottom:10px;}
.prose strong{color:#1A1014;font-weight:700;}
.pull{border-left:4px solid #F23F44;padding:6px 0 6px 24px;margin:32px 0;font-size:24px;line-height:1.45;font-weight:600;letter-spacing:-.4px;color:#1A1014;}
@media(max-width:920px){.arttitle{font-size:34px;letter-spacing:-1px;}.arthero{height:220px;}.prose p,.prose li{font-size:16.5px;}}
` }} />

      <SiteHeader announcement="New · Conversational AI for talent assessment" announcementCta="Read the announcement" />

      <article className="artwrap">
        <p className="crumb reveal in"><Link href="/blog">Blog</Link> &nbsp;·&nbsp; Product news</p>
        <h1 className="arttitle reveal in">Testlify launches conversational AI for talent assessment</h1>
        <div className="artmeta reveal in"><span className="artav">TL</span><div><div className="artname">Testlify Team</div><div>Product</div></div><span>·</span><span>4 min read</span><span>·</span><span>July 2026</span></div>
      </article>
      <div className="artwrap reveal in"><div className="arthero"></div></div>
      <div className="artwrap prose">
        <p className="reveal in">Today we&apos;re launching conversational AI across Testlify — bringing automated, scored video, audio and chat interviews to the platform teams already use to assess skills. It&apos;s the biggest step yet toward our mission: helping hiring teams stop guessing and start proving who can actually do the job.</p>
        <div className="pull reveal in">&quot;Every candidate deserves a fair, consistent conversation. Now every team can offer one — at any scale.&quot;</div>
        <h2 className="reveal in">What&apos;s new</h2>
        <p className="reveal in">Conversational AI interviews let you screen and interview candidates automatically, in the format that fits the role:</p>
        <ul className="reveal in">
          <li><strong>Video interviews</strong> for roles where presence and communication matter.</li>
          <li><strong>Audio interviews</strong> for quick, low-friction spoken screening.</li>
          <li><strong>Chat interviews</strong> for asynchronous, text-based assessment at scale.</li>
        </ul>
        <p className="reveal in">Every interview is scored against a structured rubric, so candidates are compared like-for-like — no drift between reviewers, no unstructured gut calls.</p>
        <h2 className="reveal in">Why it matters</h2>
        <p className="reveal in">Interviews are where hiring is slowest and most inconsistent. By automating the early rounds and scoring them objectively, teams reclaim hours, widen their funnels, and keep every decision defensible — while candidates get a faster, fairer experience.</p>
        <h2 className="reveal in">Available now</h2>
        <p className="reveal in">Conversational AI is rolling out across Testlify plans today, on top of the 3,500+ validated tests, AI resume screening and 100+ ATS integrations you already know. One platform, from application to offer.</p>
      </div>

      <section className="sec darkcta" style={{ marginTop: '56px' }}><div className="wrap" style={{ maxWidth: '640px' }}>
        <h2 className="h2 reveal">Try conversational AI interviews</h2>
        <p className="lead reveal" style={{ margin: '16px auto 28px', transitionDelay: '.04s' }}>Start free and run your first AI interview in minutes.</p>
        <div className="reveal btnrow" style={{ transitionDelay: '.08s' }}>
          <CtaButton label="Try for free" href="#" variant="light" size="md" icon="arrow" />
          <CtaButton label="Explore interviews" href="/interviews" variant="outline-light" size="md" icon="none" />
        </div>
      </div></section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
