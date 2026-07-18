import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaButton from '@/components/CtaButton';
import CtaBand from '@/components/CtaBand';

export default function TestlifyTheRecruiterWhoNeverSleeps() {
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
.arthero{height:360px;border-radius:22px;background:linear-gradient(150deg,#F23F44,#7A1418);margin-bottom:44px;}
.prose p{font-size:18px;line-height:1.75;color:#3A2C30;margin:0 0 24px;}
.prose h2{font-size:30px;font-weight:800;letter-spacing:-.8px;margin:46px 0 18px;color:#1A1014;}
.prose ul{margin:0 0 24px;padding-left:24px;}
.prose li{font-size:18px;line-height:1.7;color:#3A2C30;margin-bottom:10px;}
.prose strong{color:#1A1014;font-weight:700;}
.pull{border-left:4px solid #F23F44;padding:6px 0 6px 24px;margin:32px 0;font-size:24px;line-height:1.45;font-weight:600;letter-spacing:-.4px;color:#1A1014;}
@media(max-width:920px){.arttitle{font-size:34px;letter-spacing:-1px;}.arthero{height:220px;}.prose p,.prose li{font-size:16.5px;}}
` }} />

      <SiteHeader announcement="Meet Testlify AI — the recruiter who never sleeps" />

      <article className="artwrap">
        <p className="crumb reveal in"><Link href="/blog">Blog</Link> &nbsp;·&nbsp; AI &amp; hiring</p>
        <h1 className="arttitle reveal in">Testlify: the recruiter who never sleeps</h1>
        <div className="artmeta reveal in"><span className="artav">TL</span><div><div className="artname">Testlify Team</div><div>Product</div></div><span>·</span><span>6 min read</span><span>·</span><span>July 2026</span></div>
      </article>
      <div className="artwrap reveal in"><div className="arthero"></div></div>
      <div className="artwrap prose">
        <p className="reveal in">Recruiting has a math problem. There are always more applicants than hours in the day, and the highest-leverage work — actually evaluating whether someone can do the job — is the first thing to get squeezed. So teams fall back on shortcuts: skim the résumé, trust the logo, run a quick call, hope for the best.</p>
        <p className="reveal in">What if the evaluation never had to wait? What if every applicant, at any hour, could be screened fairly and consistently the moment they applied?</p>
        <div className="pull reveal in">&quot;AI doesn&apos;t replace the recruiter. It gives them back the hours they spend guessing.&quot;</div>
        <h2 className="reveal in">Screening that runs around the clock</h2>
        <p className="reveal in">Testlify AI assesses candidates automatically — skills tests, resume screening and conversational interviews — and scores them against the same structured rubric every time. A candidate who applies at 2am gets the same fair, thorough evaluation as one who applies at 2pm.</p>
        <p className="reveal in">By the time a recruiter sits down, the pile of PDFs has become a ranked shortlist with evidence attached: skill scores, breakdowns and integrity flags. The work that used to eat a morning is already done.</p>
        <h2 className="reveal in">Consistent, and defensible</h2>
        <p className="reveal in">A tireless recruiter is only valuable if it&apos;s also a fair one. Because every candidate is measured the same way, the output is consistent and EEOC-defensible — no drift between reviewers, no gut calls that can&apos;t be explained.</p>
        <ul className="reveal in">
          <li><strong>Faster:</strong> shortlists ready before you open your inbox.</li>
          <li><strong>Fairer:</strong> the same structured bar for everyone.</li>
          <li><strong>Defensible:</strong> every decision backed by evidence.</li>
        </ul>
        <h2 className="reveal in">The recruiter&apos;s job gets better</h2>
        <p className="reveal in">This isn&apos;t about removing humans from hiring. It&apos;s about removing the parts humans shouldn&apos;t be doing — the repetitive, bias-prone first pass — so recruiters can spend their time where it matters: building relationships, selling the role, and making great final decisions with better information.</p>
        <p className="reveal in">That&apos;s the promise of a recruiter who never sleeps. Not fewer people in hiring — better hiring, for everyone.</p>
      </div>

      <section className="sec darkcta" style={{ marginTop: '56px' }}><div className="wrap" style={{ maxWidth: '640px' }}>
        <h2 className="h2 reveal">See Testlify AI in action</h2>
        <p className="lead reveal" style={{ margin: '16px auto 28px', transitionDelay: '.04s' }}>Run your first AI-screened assessment free — set up in minutes.</p>
        <div className="reveal btnrow" style={{ transitionDelay: '.08s' }}>
          <CtaButton label="Try for free" href="#" variant="light" size="md" icon="arrow" />
          <CtaButton label="Explore Testlify AI" href="/ai-powered-talent-assessment-platform" variant="outline-light" size="md" icon="none" />
        </div>
      </div></section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
