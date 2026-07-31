import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaBand from '@/components/CtaBand';

export const metadata = {
  title: 'Testlify launches conversational AI interviews to redefine talent assessment at scale',
  description:
    'Testlify, trusted by 1,500+ teams across 50+ countries, launches Conversational AI Interviews in video, audio, and text formats — real-time, scenario-based interviews powered by AI.',
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
.artwrap{max-width:740px;margin:0 auto;padding:0 28px;}
.crumb{font-size:13px;color:#8A7A7D;font-weight:600;display:flex;gap:8px;align-items:center;margin:36px 0 22px;}
.crumb a{color:#8A7A7D;text-decoration:none;}
.crumb a:hover{color:#F23F44;}
.arttitle{font-size:44px;line-height:1.12;font-weight:800;letter-spacing:-1.4px;margin:0 0 22px;color:#1A1014;}
.artmeta{display:flex;align-items:center;gap:12px;font-size:13.5px;color:#9A878A;margin-bottom:30px;flex-wrap:wrap;}
.arthero{border-radius:22px;overflow:hidden;margin-bottom:44px;border:1px solid #F0E2E3;box-shadow:0 16px 30px rgba(110,11,14,.10);}
.arthero img{display:block;width:100%;height:auto;}
.prose p{font-size:18px;line-height:1.75;color:#3A2C30;margin:0 0 24px;}
.prose h2{font-size:28px;font-weight:800;letter-spacing:-.6px;margin:44px 0 18px;color:#1A1014;}
.prose h3{font-size:20px;font-weight:700;letter-spacing:-.3px;margin:32px 0 10px;color:#1A1014;}
.prose strong{color:#1A1014;font-weight:700;}
.pull{border-left:4px solid #F23F44;padding:6px 0 6px 24px;margin:32px 0;font-size:22px;line-height:1.45;font-weight:600;letter-spacing:-.4px;color:#1A1014;font-style:italic;}
.share{display:flex;gap:10px;align-items:center;margin:48px 0;padding:24px 0;border-top:1px solid #F1E6E7;border-bottom:1px solid #F1E6E7;}
.sbtn{width:42px;height:42px;border-radius:11px;border:1px solid #EFE2E3;display:flex;align-items:center;justify-content:center;color:#6A5A5D;font-weight:700;font-size:14px;transition:all .2s ease;}
.sbtn:hover{border-color:#F2B7B9;color:#F23F44;transform:translateY(-2px);}
@media(max-width:920px){.arttitle{font-size:30px;letter-spacing:-1px;}.prose p{font-size:16.5px;}}
` }} />

      <SiteHeader
        announcement="Press release · Conversational AI interviews"
        announcementCta="Read now"
        homeHref="/"
      />

      <article className="artwrap">
        <h1 className="arttitle reveal" style={{ marginTop: '36px' }}>Testlify launches conversational AI interviews to redefine talent assessment at scale</h1>
        <div className="artmeta reveal" style={{ transitionDelay: '.08s' }}><span>Bensalem, PA</span><span>·</span><span>June 11, 2025</span><span>·</span><span>3 min read</span></div>
      </article>

      <div className="artwrap reveal" style={{ transitionDelay: '.1s' }}>
        <div className="arthero">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://testlify.com/wp-content/uploads/2025/06/Testlify-Launches-Conversational-AI-Interviews.png" alt="Testlify launches conversational AI interviews" />
        </div>
      </div>

      <div className="artwrap prose">
        <p className="reveal"><strong>Bensalem, PA – 11th June 2025</strong> – Testlify, a renowned talent assessment platform trusted by over 1,500+ teams across 50+ countries, has launched its latest innovation, Conversational AI Interviews in video, audio, and text formats.</p>
        <p className="reveal">This game-changing feature is designed to help companies streamline candidate evaluation with real-time, scenario-based interviews powered by AI. Testlify continues to elevate the hiring experience for leading global brands, including LTIMindtree, Solvay, InDrive, and Ditto Insurance, among many others.</p>
        <p className="reveal">With this launch, Testlify is redefining how enterprises and staffing firms assess talent — faster, smarter, and more accurately than ever before.</p>

        <h2 className="reveal">Solving a long-standing hiring problem</h2>
        <p className="reveal">Traditional interviews often fail to predict how candidates will perform in real workplace situations. Static Q&amp;As, interviewer bias, and inconsistent evaluation frameworks have long hindered effective hiring.</p>
        <p className="reveal">Testlify&apos;s Conversational AI solves this by replicating real-world challenges in a controlled, AI-driven environment. So recruiters can evaluate candidates not just for what they know, but how they act under pressure.</p>
        <div className="pull reveal">&quot;Too often, interviews only scratch the surface. We built this conversational AI engine to go deeper, revealing the mindset, adaptability, and real-world judgment of each candidate before they&apos;re hired.&quot; — Abhishek Shah, Founder of Testlify</div>

        <h2 className="reveal">Explore the power of multi-format conversational AI</h2>
        <p className="reveal">The platform&apos;s latest release includes three advanced formats:</p>

        <h3 className="reveal">Chat AI</h3>
        <p className="reveal">Engage candidates in realistic, text-based workplace scenarios — like resolving a billing dispute or calming an irate customer. This helps recruiters assess problem-solving, written communication, and critical thinking in real time.</p>

        <h3 className="reveal">Voice AI</h3>
        <p className="reveal">Allow candidates to respond to dynamic, voice-based interview prompts tailored to roles in sales, customer support, or technical helpdesks — capturing verbal fluency, tone, and persuasion skills in action.</p>

        <h3 className="reveal">Video AI</h3>
        <p className="reveal">AI avatars guide candidates through complex job scenarios via asynchronous video interviews. Employers can now analyze non-verbal communication, confidence, and emotional intelligence with ease.</p>

        <p className="reveal">All formats are meticulously crafted to reflect real-life job functions, whether it&apos;s managing a missed delivery, leading a team meeting, or troubleshooting a product issue. Each interview simulates realistic stakes, offering employers a deeper and more predictive lens on candidate performance.</p>

        <h2 className="reveal">A game-changer for enterprise hiring teams</h2>
        <p className="reveal">With hiring becoming increasingly distributed, inconsistent interviews slow down decisions and introduce bias. Testlify&apos;s Conversational AI brings consistency, objectivity, and scale to every candidate interaction without sacrificing the human element.</p>
        <div className="pull reveal">&quot;We&apos;re not just testing skills, we&apos;re uncovering true potential. Our clients can now build stronger teams by hiring people who don&apos;t just look good on paper, but thrive in real-world environments.&quot; — Abhishek Shah</div>

        <h2 className="reveal">Available now</h2>
        <p className="reveal">Testlify&apos;s Conversational AI interviews are now live and available to all users across plans. Companies can start building customized, role-specific interviews in minutes or explore the platform with a free trial.</p>

        <h2 className="reveal">About Testlify</h2>
        <p className="reveal">Testlify is a fast-growing, AI-powered skills assessment and interviewing platform that helps companies hire better, faster, and more objectively. With a test library of 3,500+ assessments covering 4,500+ job roles in 50+ countries, Testlify enables organizations to screen, assess, and interview candidates using real-world scenarios that go far beyond resumes.</p>
        <p className="reveal">To learn more or start your free trial, visit <Link className="lnk" href="/">testlify.com</Link>.</p>

        <div className="share reveal">
          <span style={{ fontSize: '13.5px', fontWeight: 700, color: '#6A5A5D', marginRight: '6px' }}>Share</span>
          <a className="sbtn" href="#">in</a>
          <a className="sbtn" href="#">X</a>
          <a className="sbtn" href="#">f</a>
          <a className="sbtn" href="#">↗</a>
        </div>
      </div>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
