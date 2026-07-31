import React from 'react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaButton from '@/components/CtaButton';
import FAQ from '@/components/FAQ';
import SecuritySection from '@/components/SecuritySection';
import CtaBand from '@/components/CtaBand';

const CSS = `
*{box-sizing:border-box;}
html{scroll-behavior:smooth;}
body{margin:0;font-family:'Poppins',sans-serif;-webkit-font-smoothing:antialiased;color:#1A1014;background:#fff;}
a{text-decoration:none;color:#F23F44;}
a:hover{color:#DC3137;}
.wrap{max-width:1240px;margin:0 auto;padding:0 28px;}
.sec{padding:96px 28px;}
.eyebrow{font-size:12.5px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:#8A7A7D;margin:0 0 16px;}
.eyebrow b{color:#F23F44;font-weight:700;}
.h2{font-size:34px;line-height:1.12;font-weight:800;letter-spacing:-1.2px;margin:0;color:#1A1014;}
.lead{font-size:18px;line-height:1.62;color:#5A4B4E;margin:0;}
.reveal{opacity:0;transform:translateY(26px);transition:opacity .7s cubic-bezier(.2,.7,.2,1), transform .7s cubic-bezier(.2,.7,.2,1);}
.reveal.in{opacity:1;transform:none;}
.ft-hero{background:radial-gradient(1000px 520px at 82% -12%,#FFF0EE 0%,rgba(255,240,238,0) 62%),#fff;padding:46px 28px 80px;}
.ft-crumb{font-size:13px;color:#9A878A;font-weight:600;margin:0 0 26px;display:flex;align-items:center;gap:9px;flex-wrap:wrap;}
.ft-crumb .sep{color:#D6C4C7;}
.ft-grid{display:grid;grid-template-columns:1.05fr 1fr;gap:56px;align-items:center;}
.ft-tag{display:inline-flex;align-items:center;gap:7px;background:#FFF0F0;color:#C0242B;font-size:12px;font-weight:700;letter-spacing:.04em;padding:6px 13px;border-radius:999px;}
.ft-title{font-size:50px;line-height:1.04;font-weight:800;letter-spacing:-2px;margin:17px 0 18px;}
.ft-title .acc{color:#F23F44;}
.ft-lede{font-size:18.5px;line-height:1.6;color:#5A4B4E;margin:0;max-width:560px;}
.ft-cta{display:flex;gap:12px;flex-wrap:wrap;margin-top:34px;}
.ft-ticks{display:flex;align-items:center;gap:24px;flex-wrap:wrap;margin-top:22px;font-size:14.5px;color:#8A7A7D;font-weight:500;}
.ft-ticks .tick{display:inline-flex;align-items:center;gap:7px;}
.ft-ticks .tk{color:#F23F44;font-weight:700;}
.ft-mock{background:#fff;border:1px solid #EFE2E3;border-radius:22px;box-shadow:0 30px 70px rgba(110,11,14,.14);overflow:hidden;display:flex;align-items:center;justify-content:center;aspect-ratio:4/3;}
.ft-mockimg{width:100%;height:100%;display:block;object-fit:contain;padding:24px;background:#FBF3EE;}
.ft-sh{max-width:680px;margin:0 0 40px;}
.ft-sh.ctr{margin-left:auto;margin-right:auto;text-align:center;}
.ft-split{display:grid;grid-template-columns:1fr 1.05fr;gap:60px;align-items:center;}
.ft-split.rev .ft-splitcopy{order:2;}
.ft-split.ctr{grid-template-columns:1fr;max-width:760px;margin:0 auto;justify-items:center;text-align:center;}
.ft-split.ctr .ft-playbtn{margin-left:auto;margin-right:auto;}
.ft-split.ctr .eyebrow{justify-content:center;}
.ft-chks{display:flex;flex-direction:column;gap:12px;margin-top:22px;}
.chk{display:flex;align-items:flex-start;gap:10px;font-size:15px;line-height:1.5;color:#46383C;font-weight:500;}
.chki{flex:none;width:20px;height:20px;color:#1FA463;margin-top:1px;}
.ft-panel{background:#fff;border:1px solid #EFE2E3;border-radius:20px;box-shadow:0 22px 50px rgba(110,11,14,.09);overflow:hidden;display:flex;align-items:center;justify-content:center;aspect-ratio:5/4;}
.ft-panelimg{width:100%;height:100%;display:block;object-fit:contain;padding:28px;background:#FBF3EE;}
.ft-playbtn{display:inline-flex;align-items:center;gap:9px;margin-top:22px;font-weight:600;font-size:14.5px;color:#F23F44;}
@media(max-width:920px){
  .ft-title{font-size:36px;letter-spacing:-1.2px;}
  .h2{font-size:27px;}
  .sec{padding:64px 22px;}
  .ft-grid,.ft-split{grid-template-columns:1fr;gap:38px;}
  .ft-split.rev .ft-splitcopy{order:0;}
  .ft-tolgrid{grid-template-columns:1fr;}}
h1,h2,h3,h4,.h1,.h2,.h3,.hero h1,.eyebrow{text-wrap:balance;}p,li,.body,.lead,.sub,figcaption,blockquote{text-wrap:pretty;}/*om-balance-rule*/
`;

const faqItems = [
  {
    q: "What is Testlify's anti cheating and proctoring features?",
    a: "Testlify's anti cheating and proctoring Features are designed to mitigate cheating concerns, maintain assessment integrity, ensure fair and accurate evaluations, and provide advanced security measures.",
  },
  {
    q: 'How is asking for webcam access helpful?',
    a: 'There are webcam snapshots captured to ensure the integrity and fairness of the assessment.',
  },
  {
    q: 'How is asking for location access helpful?',
    a: "Location Access verifies the candidate's location to ensure there are no multiple devices logged in from the same location or if the candidate has changed the location in between the assessment.",
  },
  {
    q: 'How is asking for a screen recording feature helpful?',
    a: 'The screen recording gives the whole recording of the assessment session of the candidate providing a complete insight on what the candidate was doing during the whole assessment.',
  },
  {
    q: "How do Testlify's anti-cheating features empower recruiters?",
    a: "Testlify's Anti-Cheating Features empower recruiters by providing them with the tools and features they need to create a more robust and reliable pre-employment assessment process.",
  },
  {
    q: "How can recruiters and employers try Testlify's anti-cheating features for themselves?",
    a: "Recruiters can try Testlify's anti-cheating features by signing up for a Testlify account and creating pre-employment assessments with the features enabled.",
  },
  {
    q: "Can candidates cheat during the test-taking process even with Testlify's anti-cheating features?",
    a: "Testlify's Anti-Cheating Features are designed to mitigate cheating concerns and prevent cheating during the test-taking process to the best of their ability.",
  },
];

type Feature = {
  title: React.ReactNode;
  alt: string;
  body: string;
  checks: string[];
  img: string;
};

const features: Feature[] = [
  {
    title: 'Session recording and webcam snapshots',
    alt: 'Session recording and webcam snapshots',
    body: "Our platform records the candidate's entire test session, including real-time webcam snapshots at intervals. This creates a verifiable audit trail that helps confirm identity, detect impersonation, and provide visual context for any flagged behavior.",
    checks: [
      'Build trust in your hiring decisions',
      'Great for validating remote test-taking integrity',
      'Helps resolve disputes or candidate challenges',
    ],
    img: 'https://testlify.com/wp-content/uploads/2023/04/Webcam-access-1.png',
  },
  {
    title: <>Location access &amp; IP address tracking</>,
    alt: 'Location access & IP address tracking',
    body: 'With IP and geolocation tracking, you can verify that assessments are taken from authorized locations. This helps prevent proxy test-taking and outsourced assessments.',
    checks: [
      'Identify suspicious access or geographic mismatches',
      'Block unauthorized access or VPN masking',
      'Adds a powerful layer of authentication',
    ],
    img: 'https://testlify.com/wp-content/uploads/2023/03/Current-location-pana.png',
  },
  {
    title: <>Copy/paste blocking &amp; screen switch detection</>,
    alt: 'Copy/paste blocking & screen switch detection',
    body: 'Our system disables copy-paste functionality and tracks any attempt to switch tabs or windows during the test. You can set tolerance limits and automatically terminate sessions if violations occur.',
    checks: [
      'Enforces strict exam-like discipline',
      'Prevents external answer sourcing',
      'Keeps candidates focused on the test',
    ],
    img: 'https://testlify.com/wp-content/uploads/2023/04/Session-recording-1.png',
  },
  {
    title: 'Question randomization',
    alt: 'Question randomization',
    body: 'Testlify automatically randomizes questions and answers to reduce the risk of answer sharing or memorization. You can even pull from question pools to create thousands of unique combinations.',
    checks: [
      'Makes cheating nearly impossible',
      'Encourages individual performance',
      'Improves fairness across the board',
    ],
    img: 'https://testlify.com/wp-content/uploads/2023/03/Benefits-of-psychometric-tests-for-recruitment-.png',
  },
  {
    title: 'AI assistance detection',
    alt: 'AI assistance detection',
    body: 'Our AI monitors test behavior and analyzes answers for signs of ChatGPT, code generators, or AI writing tools. You get notified when we suspect AI-assisted responses.',
    checks: [
      'Protect the credibility of technical tests',
      'Stay ahead of modern cheating trends',
      'Red-flag potentially fabricated work',
    ],
    img: 'https://testlify.com/wp-content/uploads/2023/04/Session-recording-1.png',
  },
  {
    title: 'Snapshot proctoring',
    alt: 'Snapshot proctoring',
    body: "Enable interval-based webcam snapshots to see the candidate's environment at multiple points. It's a lightweight but effective way to catch unauthorized behavior.",
    checks: [
      'Easy to set up',
      'Reduces the need for full live proctoring',
      'Adds accountability for the entire session',
    ],
    img: 'https://testlify.com/wp-content/uploads/2024/02/How-to-simplify-candidate-screening-with-salesforce-test-1024x761.png',
  },
  {
    title: <>Full-screen &amp; forced full-screen mode</>,
    alt: 'Full-screen & forced full-screen mode',
    body: 'By enforcing full-screen mode, candidates are locked into the assessment interface. Exiting or minimizing the window can trigger warnings or auto-termination.',
    checks: [
      'Minimizes distractions and side-searching',
      'Increases engagement and integrity',
      'Useful for all test types',
    ],
    img: 'https://testlify.com/wp-content/uploads/2023/12/Diversity-is-Not-just-an-Ideal-1-1536x1536.png-3-1024x1024.webp',
  },
  {
    title: <>Mouse-out &amp; tab proctoring</>,
    alt: 'Mouse-out & tab proctoring',
    body: "Monitor how long a candidate's mouse is outside the test area or how often they switch tabs. Set tolerance levels and auto-terminate based on severity.",
    checks: [
      'Perfect for high-stakes roles or tests',
      'Detects focus loss and suspicious actions',
      'Customize thresholds based on your risk tolerance',
    ],
    img: 'https://testlify.com/wp-content/uploads/2023/06/Product-image-1-4-1024x741.png',
  },
  {
    title: <>Honesty agreements &amp; private invites</>,
    alt: 'Honesty agreements & private invites',
    body: 'Require candidates to agree to a customized honesty declaration before starting the test. Combine that with private invites to limit access and boost compliance.',
    checks: [
      'Creates a sense of responsibility',
      'Prevents test link sharing',
      'Adds professionalism and control',
    ],
    img: 'https://testlify.com/wp-content/uploads/2023/04/Session-recording-1.png',
  },
  {
    title: 'Question-level activity logs',
    alt: 'Question-level activity logs',
    body: 'See how long each candidate spent on every question, if they switched tabs during specific answers, and whether their behavior aligned with expectations.',
    checks: [
      'Enables data-driven decisions beyond just scores',
      'Spot inconsistencies in performance',
      'Identify rushed or skipped questions',
    ],
    img: 'https://testlify.com/wp-content/uploads/2022/11/Better-Skill-Set-Evaluation-Process.png',
  },
  {
    title: 'Advanced AI identity verification',
    alt: 'Advanced AI identity verification',
    body: "Using facial recognition and AI image analysis, we match the candidate's live camera feed against their submitted ID or profile image for real-time identity verification.",
    checks: [
      'Fully automated for scale and speed',
      'Stops impersonation and ghost test-taking',
      'Ideal for remote hiring and contractor screening',
    ],
    img: 'https://testlify.com/wp-content/uploads/2023/04/Session-recording-1.png',
  },
  {
    title: 'Make screen sharing mandatory',
    alt: 'Make screen sharing mandatory',
    body: 'Require candidates to share their screen for the entire duration of the test. Monitor all activity and catch cheating attempts instantly.',
    checks: [
      'Simple to enable, hard to cheat',
      'Works well for whiteboard interviews and coding tasks',
      'Adds transparency to technical skill validation',
    ],
    img: 'https://testlify.com/wp-content/uploads/2023/03/Benefits-of-psychometric-tests-for-recruitment-.png',
  },
  {
    title: 'Set your own violation tolerance',
    alt: 'Set your own violation tolerance',
    body: 'Every organization is different, so we let you define your own thresholds.',
    checks: [
      'Tab-switching tolerance (in seconds)',
      'Mouse-out limits',
      'Violation counts before auto-termination',
      'Custom honesty agreements',
    ],
    img: 'https://testlify.com/wp-content/uploads/2023/04/Session-recording-1.png',
  },
];

function CheckIcon() {
  return (
    <svg
      className="chki"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6L9 17l-5-5"></path>
    </svg>
  );
}

export default function ProductFeatureAntiCheatingAndProctoringPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      <SiteHeader
        announcement="New — AI assistance detection catches ChatGPT-written answers"
        announcementCta="See all features"
        homeHref="/"
      />

      <section className="ft-hero">
        <div className="wrap">
          <div className="ft-grid">
            <div>
              <span className="ft-tag reveal in">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
                Anti-cheating &amp; proctoring
              </span>
              <h1 className="ft-title reveal in">
                Anti-cheating and <span className="acc">proctoring features</span> that HR leaders trust
              </h1>
              <p className="ft-lede reveal in">
                Testlify&apos;s advanced anti-cheating and remote proctoring features ensure every assessment reflects
                real skill and genuine effort — so you can hire candidates who&apos;ve earned their results.
              </p>
              <div className="ft-cta reveal in">
                <CtaButton label="Try for free" href="#" variant="primary" size="lg" icon="arrow" magnetic={true} />
                <CtaButton label="Book a demo" href="/contact" variant="secondary" size="lg" icon="none" />
              </div>
              <div className="ft-ticks reveal in">
                <span className="tick">
                  <b className="tk">✓</b>Free 7-day trial
                </span>
                <span className="tick">
                  <b className="tk">✓</b>No credit card required
                </span>
              </div>
            </div>
            <div className="ft-mock reveal in">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="ft-mockimg"
                src="https://testlify.com/wp-content/uploads/2023/04/online-test-main-1.png"
                alt="Anti-cheating features"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="sec" style={{ background: '#FBF3EE' }}>
        <div className="wrap">
          <div className="ft-split ctr">
            <div className="ft-splitcopy">
              <p className="eyebrow reveal">
                Overview<b>.</b>
              </p>
              <h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>
                See how proctoring features works
              </h2>
              <p className="lead reveal" style={{ transitionDelay: '.08s', marginTop: '18px' }}>
                Ensure assessment integrity with advanced AI-powered proctoring. Monitor behavior, detect violations,
                and maintain fairness at scale.
              </p>
            </div>
            <div className="ft-panel reveal" style={{ transitionDelay: '.06s', aspectRatio: '16/9' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="ft-panelimg"
                style={{ padding: 0, objectFit: 'cover' }}
                src="https://testlify.com/wp-content/uploads/2026/03/Proctoring-Features.png"
                alt="Proctoring features"
              />
            </div>
            <a
              className="ft-playbtn reveal"
              style={{ transitionDelay: '.12s' }}
              href="https://youtu.be/toG0agFgXgg"
              target="_blank"
              rel="noopener"
            >
              <svg width="34" height="34" viewBox="0 0 24 24" fill="#F23F44">
                <circle cx="12" cy="12" r="11" fill="none" stroke="#F23F44" strokeWidth="1.6"></circle>
                <path d="M10 8l6 4-6 4z"></path>
              </svg>
              Watch the walkthrough
            </a>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="ft-sh ctr">
            <p className="eyebrow reveal">
              Capabilities<b>.</b>
            </p>
            <h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>
              Twelve layers of integrity, on by default
            </h2>
          </div>
        </div>
      </section>

      {features.map((f, i) => {
        const alt = i % 2 === 1;
        return (
          <section
            key={i}
            className="sec"
            style={{ background: alt ? '#FBF3EE' : '#fff', padding: '56px 28px' }}
          >
            <div className="wrap">
              <div className={alt ? 'ft-split rev' : 'ft-split'}>
                <div className="ft-splitcopy">
                  <h2 className="h2 reveal" style={{ fontSize: '27px' }}>
                    {f.title}
                  </h2>
                  <p
                    className="lead reveal"
                    style={{ transitionDelay: '.06s', marginTop: '16px', fontSize: '16px' }}
                  >
                    {f.body}
                  </p>
                  <div className="ft-chks reveal" style={{ transitionDelay: '.1s' }}>
                    {f.checks.map((c, j) => (
                      <div className="chk" key={j}>
                        <CheckIcon />
                        {c}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="ft-panel reveal" style={{ transitionDelay: '.06s' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img className="ft-panelimg" src={f.img} alt={f.alt} />
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <SecuritySection
        eyebrow="Security & compliance"
        heading="Enterprise-grade security by default"
        sub="SOC 2 Type II, ISO 27001 and GDPR compliance, granular admin controls and a full audit trail — so every assessment is defensible."
      />

      <section className="sec" style={{ background: '#FBF3EE' }}>
        <div className="wrap">
          <div className="ft-sh ctr">
            <p className="eyebrow reveal">
              FAQ<b>.</b>
            </p>
            <h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>
              Frequently asked questions
            </h2>
            <p className="lead reveal" style={{ transitionDelay: '.08s', marginTop: '12px' }}>
              Want to know more about Testlify? Here are answers to the most commonly asked questions about our
              company.
            </p>
          </div>
          <FAQ items={faqItems} />
        </div>
      </section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
