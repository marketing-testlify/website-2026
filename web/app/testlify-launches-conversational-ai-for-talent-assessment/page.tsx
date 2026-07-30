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
        <h1 className="arttitle reveal in">Testlify launches conversational AI interviews to redefine talent assessment at scale</h1>
        <div className="artmeta reveal in"><span className="artav">TL</span><div><div className="artname">Testlify Team</div><div>Product</div></div><span>·</span><span>4 min read</span><span>·</span><span>June 11, 2025</span></div>
      </article>
      <div className="artwrap reveal in"><div className="arthero"></div></div>
      <div className="artwrap prose">
        <p className="reveal in">Bensalem, PA – 11th June 2025 – Testlify, a renowned talent assessment platform trusted by over 1,500+ teams across 50+ countries, has launched its latest innovation, Conversational AI Interviews in video, audio, and text formats.</p>
        <p className="reveal in">This game-changing feature is designed to help companies streamline candidate evaluation with real-time, scenario-based interviews powered by AI. Testlify continues to elevate the hiring experience for leading global brands, including LTIMindtree, Solvay, InDrive, and Ditto Insurance, among many others.</p>
        <p className="reveal in">With this launch, Testlify is redefining how enterprises and staffing firms assess talent — faster, smarter, and more accurately than ever before.</p>
        <h2 className="reveal in">Solving a long-standing hiring problem</h2>
        <p className="reveal in">Traditional interviews often fail to predict how candidates will perform in real workplace situations. Static Q&amp;As, interviewer bias, and inconsistent evaluation frameworks have long hindered effective hiring.</p>
        <p className="reveal in">Testlify&apos;s Conversational AI solves this by replicating real-world challenges in a controlled, AI-driven environment. So recruiters can evaluate candidates not just for what they know, but how they act under pressure.</p>
        <div className="pull reveal in">&quot;Too often, interviews only scratch the surface. We built this conversational AI engine to go deeper, revealing the mindset, adaptability, and real-world judgment of each candidate before they&apos;re hired.&quot; — Abhishek Shah, Founder of Testlify</div>
        <h2 className="reveal in">Explore the power of multi-format conversational AI</h2>
        <p className="reveal in">The platform&apos;s latest release includes three advanced formats:</p>
        <ul className="reveal in">
          <li><strong>Chat AI</strong> — engage candidates in realistic, text-based workplace scenarios, like resolving a billing dispute or calming an irate customer. This helps recruiters assess problem-solving, written communication, and critical thinking in real time.</li>
          <li><strong>Voice AI</strong> — allow candidates to respond to dynamic, voice-based interview prompts tailored to roles in sales, customer support, or technical helpdesks, capturing verbal fluency, tone, and persuasion skills in action.</li>
          <li><strong>Video AI</strong> — AI avatars guide candidates through complex job scenarios via asynchronous video interviews. Employers can now analyze non-verbal communication, confidence, and emotional intelligence with ease.</li>
        </ul>
        <p className="reveal in">All formats are meticulously crafted to reflect real-life job functions, whether it&apos;s managing a missed delivery, leading a team meeting, or troubleshooting a product issue. Each interview simulates realistic stakes, offering employers a deeper and more predictive lens on candidate performance.</p>
        <h2 className="reveal in">A game-changer for enterprise hiring teams</h2>
        <p className="reveal in">With hiring becoming increasingly distributed, inconsistent interviews slow down decisions and introduce bias. Testlify&apos;s Conversational AI brings consistency, objectivity, and scale to every candidate interaction without sacrificing the human element.</p>
        <p className="reveal in">&quot;We&apos;re not just testing skills, we&apos;re uncovering true potential,&quot; Abhishek Shah added. &quot;Our clients can now build stronger teams by hiring people who don&apos;t just look good on paper, but thrive in real-world environments.&quot;</p>
        <h2 className="reveal in">Available now</h2>
        <p className="reveal in">Testlify&apos;s Conversational AI interviews are now live and available to all users across plans. Companies can start building customized, role-specific interviews in minutes or explore the platform with a free trial.</p>
        <h2 className="reveal in">About Testlify</h2>
        <p className="reveal in">Testlify is a fast-growing, AI-powered skills assessment and interviewing platform that helps companies hire better, faster, and more objectively. With a test library of 3,500+ assessments covering 4,500+ job roles in 50+ countries, Testlify enables organizations to screen, assess, and interview candidates using real-world scenarios that go far beyond resumes.</p>
        <p className="reveal in">To learn more or start your free trial, visit <a href="https://testlify.com/" style={{ color: '#F23F44', fontWeight: 700 }}>testlify.com</a>.</p>
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
