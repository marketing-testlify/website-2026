import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import Recognition from '@/components/Recognition';
import CtaBand from '@/components/CtaBand';

type Client = {
  img: string;
  name: string;
  role: string;
  rating: string;
  quote: string;
  imgStyle?: string;
};

const wave1: Client[] = [
  { img: 'https://testlify.com/wp-content/uploads/2026/02/LTM-Logo.svg', name: 'VP of Talent Acquisition', role: 'LTIMindtree', rating: '5.0', quote: "Managing large-scale hiring has always been a challenge, but Testlify have made it seamless. With automated screening and real-time insights, we've reduced the time-to-hire by 30%, while maintaining the quality of our hires." },
  { img: 'https://testlify.com/wp-content/uploads/2025/01/1361817.png', name: 'Talent Acquisition Manager', role: 'ConEdison', rating: '5.0', quote: "Testlify's video interview feature has transformed how we assess candidates in real-time, especially for roles that require technical expertise, saving us significant time while providing deeper insights into their capabilities." },
  { img: 'https://testlify.com/wp-content/uploads/2025/03/Solvay-1024x428.png', name: 'Head of Talent Acquisition', role: 'Solvay', rating: '5.0', quote: 'Scaling hiring while maintaining quality was a challenge. Testlify automated our evaluations, reducing hiring costs by 30% and giving our managers confidence in every shortlisted candidate.' },
  { img: 'https://testlify.com/wp-content/uploads/2025/01/Thales_LOGO_RGB-1024x385-1.png', name: 'Engineering Hiring Manager', role: 'Thales Group', rating: '5.0', quote: "Evaluating technical skills beyond resumes was a major challenge. Testlify's live coding platform gives us real-time insights into a developer's problem-solving abilities." },
  { img: 'https://testlify.com/wp-content/uploads/2025/01/TD-Bank-Logo-1024x576.png', name: 'Lead Talent Acquisition Manager', role: 'TD Bank', rating: '5.0', quote: "Testlify's Sales Profiler test helps us evaluate key skills like communication, persuasion, and problem-solving with real-world simulations, reducing early-stage churn by 30%." },
  { img: 'https://testlify.com/wp-content/uploads/2025/01/Bank-of-America-Emblem-1024x576.png', name: 'VP of Talent Strategy', role: 'Bank of America', rating: '5.0', quote: "Testlify's custom-curated assessments are tailored for banking, compliance, and financial analysis, helping us identify high-performing professionals, reducing hiring time by 40%." },
  { img: 'https://testlify.com/wp-content/uploads/2025/01/09cb194d0934f76-1024x576.png', name: 'VP of Human Resources', role: 'inDrive', rating: '5.0', quote: 'We used to rely heavily on resumes and gut feeling, leading to hiring mistakes sometimes. With Testlify, our hiring accuracy improved by 50%, ensuring we only move forward with the most qualified candidates.' },
  { img: 'https://testlify.com/wp-content/uploads/2025/01/ElringKlinger-Logo.svg-1024x399.png', name: 'Senior HR Manager', role: 'ElringKlinger', rating: '5.0', quote: "With candidates from diverse locations, the ability to assess their technical and soft skills through Testlify's video platform has allowed us to make more informed, unbiased decisions, reducing hiring time by 25%." },
  { img: 'https://testlify.com/wp-content/uploads/2025/01/United_Bank_for_Africa_logo.svg-1024x480.png', imgStyle: 'transform:scale(.7)', name: 'HR Director', role: 'UBA Group', rating: '5.0', quote: "Testlify's chat simulation feature has been pivotal in enhancing our customer support recruitment. By simulating real customer interactions, we've streamlined our hiring process and improved customer satisfaction by 15%." },
  { img: 'https://testlify.com/wp-content/uploads/2025/01/SSG-logo-2023-aug.webp', imgStyle: 'transform:scale(.7)', name: 'Talent Acquisition Head', role: 'Support Services Group', rating: '5.0', quote: "Testlify's chat simulation feature has been invaluable for scaling our customer experience (CX) hiring across global operations, ensuring we hire the right talent faster." },
];

const wave2: Client[] = [
  { img: 'https://testlify.com/wp-content/uploads/2025/02/sky.webp', imgStyle: 'transform:scale(2)', name: 'Talent Acquisition Manager', role: 'Sky Climber LLC', rating: '5.0', quote: "Testlify's comprehensive assessments provide a 360-degree evaluation of candidates, ensuring we make informed hiring decisions. The in-depth skill analysis and structured insights help us identify the best-fit talent efficiently." },
  { img: 'https://testlify.com/wp-content/uploads/2025/01/sonatafy_dark_logo.png', name: 'Director of Engineering', role: 'Sonatafy Technology', rating: '5.0', quote: "Testlify's technical assessments and live coding platform have significantly improved our hiring process, allowing us to evaluate developers in real-time and hire top talent with the right skills." },
  { img: 'https://testlify.com/wp-content/uploads/2025/01/cogitotech.png', imgStyle: 'transform:scale(1.3)', name: 'Talent Acquisition Lead', role: 'Cogitotech', rating: '5.0', quote: "Testlify's language testing solution has been invaluable for hiring multilingual talent across our global client projects, with assessments in 10+ languages ensuring precise hiring decisions." },
  { img: 'https://testlify.com/wp-content/uploads/2025/01/201709070344211295744190-1024x313.png', imgStyle: 'transform:scale(.7)', name: 'HR Head', role: 'Kratikal', rating: '5.0', quote: "Testlify's assessments for 40+ programming languages have been invaluable in helping us hire top talent for a variety of projects." },
  { img: 'https://testlify.com/wp-content/uploads/2025/01/Xneelo.jpg', imgStyle: 'transform:scale(1.4)', name: 'HR Director', role: 'Xneelo (Pty)', rating: '5.0', quote: "Using Testlify's technical assessments has revolutionized our hiring process. With over 500 assessments completed in 6 months, we've reduced our time-to-hire by 30%." },
  { img: 'https://testlify.com/wp-content/uploads/2025/01/download.png', imgStyle: 'transform:scale(.7)', name: 'VP of Talent Acquisition', role: 'Tendencys Innovations', rating: '5.0', quote: "Testlify's comprehensive assessment suite has allowed us to scale our hiring process while ensuring technical excellence, reducing the hiring cycle by 25%." },
  { img: 'https://testlify.com/wp-content/uploads/2025/01/images-8.png', name: 'Senior Technical Recruiter', role: 'Third Bridge', rating: '5.0', quote: "Testlify's technical assessments have streamlined our hiring process by accurately evaluating candidates' skills, reducing our time-to-hire significantly." },
  { img: 'https://testlify.com/wp-content/uploads/2025/01/Virtual-1.png', name: 'Talent Acquisition Manager', role: 'VRC Network', rating: '5.0', quote: 'Testlify has been a one-stop solution for our hiring team, offering a wide range of technical, non-technical, and personality assessments.' },
  { img: 'https://testlify.com/wp-content/uploads/2025/01/images-10.png', imgStyle: 'transform:scale(.7)', name: 'Technical Hiring Manager', role: 'Netconomy', rating: '5.0', quote: "Testlify's live coding platform has significantly enhanced our ability to assess developers' real-time problem-solving skills, ensuring we hire top-tier talent that aligns with our client's needs." },
  { img: 'https://testlify.com/wp-content/uploads/2025/01/ugh9xewud27phlegol7k.webp', imgStyle: 'transform:scale(.7)', name: 'Founder & CEO', role: 'Zignuts Technolab', rating: '5.0', quote: "Testlify's developer assessments have streamlined our hiring process. The in-depth coding challenges and real-time evaluations help us assess technical skills accurately." },
];

const wave3: Client[] = [
  { img: 'https://testlify.com/wp-content/uploads/2025/01/Ivy-Professional-School.png', imgStyle: 'transform:scale(1.3)', name: 'Career Services Manager', role: 'Ivy Professional School', rating: '5.0', quote: "Testlify's tailored assessments helped us screen students for technical and soft skills, leading to a 30% higher placement rate in industry roles." },
  { img: 'https://testlify.com/wp-content/uploads/2025/01/y4j-logo-transparent.webp', imgStyle: 'transform:scale(.7)', name: 'Recruitment Lead', role: 'Youth4Jobs Foundation', rating: '5.0', quote: 'With Testlify, we efficiently assess job-readiness for over 500 youth with disabilities, resulting in a 40% reduction in recruitment time.' },
  { img: 'https://testlify.com/wp-content/uploads/2025/01/N-Wordmark-Lockup_NNortheastern_RB-1024x379.webp', imgStyle: 'transform:scale(.7)', name: 'Talent Acquisition Specialist', role: 'Northeastern University', rating: '5.0', quote: "Testlify's customizable assessments for academic and research roles have resulted in a 15% higher quality of candidate fit." },
  { img: 'https://testlify.com/wp-content/uploads/2025/01/Hickman-Mills-School-District.png', name: 'Recruitment Coordinator', role: 'Hickman Mills School District', rating: '5.0', quote: "Testlify's role-specific assessments improved our teacher recruitment process, achieving a 20% higher retention rate in the first year." },
  { img: 'https://testlify.com/wp-content/uploads/2025/01/logo-v1.1-300x92-1.webp', imgStyle: 'transform:scale(.7)', name: 'Placement Officer', role: 'Future Academy', rating: '5.0', quote: 'Testlify helped us assess 100+ students in career readiness programs, resulting in a 25% improvement in job placement rates.' },
  { img: 'https://testlify.com/wp-content/uploads/2025/01/images-9.png', imgStyle: 'transform:scale(.7)', name: 'Technical Recruiting Lead', role: 'Clever', rating: '5.0', quote: "Testlify's customizable assessment options allowed us to tailor tests for various technical roles. The platform's flexibility, detailed feedback, and intuitive interface have made it our go-to tool." },
  { img: 'https://testlify.com/wp-content/uploads/2025/01/logo-1.png', imgStyle: 'transform:scale(.7)', name: 'HR Manager', role: 'OES', rating: '5.0', quote: "With Testlify, we've used AI-powered assessments tailored for specific job roles. The easy-to-share candidate reports have significantly improved collaboration, reducing hiring time by 30%." },
  { img: 'https://testlify.com/wp-content/uploads/2025/01/images-13.png', imgStyle: 'transform:scale(.7)', name: 'Program Manager', role: 'Ashesi University', rating: '5.0', quote: "By leveraging Testlify's aptitude tests for our engineering programs, we've increased internship placement success by 35%." },
  { img: 'https://testlify.com/wp-content/uploads/2025/01/UUC-logo-2022-hr-1-1-1024x259.jpg', name: 'HR Director', role: 'University of Southern California', rating: '5.0', quote: "With Testlify, we've screened over 150 candidates for research and academic roles, ensuring a 10% improvement in quality hires." },
  { img: 'https://testlify.com/wp-content/uploads/2025/01/GetLogoFileById.png', name: 'Senior HR Manager', role: 'employU', rating: '5.0', quote: "Using Testlify's technical and personality assessments in our hiring, we reduced turnover by 20%, matching candidates to long-term career opportunities." },
];

const wave4: Client[] = [
  { img: 'https://testlify.com/wp-content/uploads/2025/01/images-11-1.jpg', name: 'HR Manager', role: 'HRCI', rating: '5.0', quote: "As a global leader in HR certifications, HRCI requires professionals with strong analytical skills. Testlify's tailored assessments have enabled us to efficiently evaluate both soft skills and technical expertise." },
  { img: 'https://testlify.com/wp-content/uploads/2025/01/Untitled-design-8.png', name: 'Talent Acquisition Specialist', role: 'Great Place to Work', rating: '5.0', quote: "Testlify's personality and situational judgment tests have helped us screen candidates for cultural fit and emotional intelligence, ensuring we hire people who truly align with our values." },
  { img: 'https://testlify.com/wp-content/uploads/2025/01/infojini.png', name: 'Tech Recruiter', role: 'Infojini', rating: '5.0', quote: "Testlify's live coding assessments and technical evaluations have made the screening process more streamlined, allowing us to hire top-tier talent for highly technical roles." },
  { img: 'https://testlify.com/wp-content/uploads/2025/01/ascensos-logo-1.png', imgStyle: 'transform:scale(.7)', name: 'Head of Talent Acquisition', role: 'Ascensos', rating: '5.0', quote: "Testlify's chat simulation and personality assessments have been instrumental in evaluating candidates for client-facing roles, improving both customer experience and hiring outcomes." },
  { img: 'https://testlify.com/wp-content/uploads/2025/01/download-1.png', imgStyle: 'transform:scale(.7)', name: 'Talent Acquisition Lead', role: 'Virtual Gurus', rating: '5.0', quote: "Testlify's multi-layered assessments for remote positions, including situational judgment tests and communication skills assessments, have led to better candidate selection." },
  { img: 'https://testlify.com/wp-content/uploads/2025/04/images.png', name: 'Head of HR', role: 'Apollo.io', rating: '5.0', quote: 'Expanding our hiring efforts without compromising quality was difficult. Testlify streamlined our assessment process, cutting hiring expenses by 30%.' },
  { img: 'https://testlify.com/wp-content/uploads/2025/04/Royal-Dutch-Shell-Logo-PNG-HD-Quality.png', imgStyle: 'transform:scale(.7)', name: 'Talent Acquisition Head', role: 'Shell', rating: '5.0', quote: 'We previously depended a lot on resumes and intuition, which occasionally resulted in poor hires. Since using Testlify, our hiring accuracy has increased by 50%.' },
  { img: 'https://testlify.com/wp-content/uploads/2025/04/GNE-Sponsor-Logo_Frost-Sullivan.png', name: 'Senior Recruiter', role: 'Frost & Sullivan', rating: '5.0', quote: "Testlify's comprehensive assessments for remote roles have become a crucial element of our hiring process, resulting in stronger candidate selection." },
  { img: 'https://testlify.com/wp-content/uploads/2025/04/images-1.png', imgStyle: 'transform:scale(.7)', name: 'Talent Acquisition Lead', role: 'The Scottish Government', rating: '5.0', quote: "Hiring candidates from various locations, we've relied on Testlify's video platform to effectively evaluate both technical and soft skills, cutting our hiring time by 25%." },
  { img: 'https://testlify.com/wp-content/uploads/2025/04/bloom.png', imgStyle: 'transform:scale(.7)', name: 'Talent Sourcing Head', role: 'Bloom', rating: '5.0', quote: "Testlify's live coding platform has greatly improved our evaluation of developers' real-time problem-solving abilities, helping us consistently hire top-tier talent." },
];

const css = `
*{box-sizing:border-box;}
html{scroll-behavior:smooth;}
body{margin:0;font-family:'Poppins',sans-serif;-webkit-font-smoothing:antialiased;color:#1A1014;background:#fff;}
a{text-decoration:none;color:inherit;}
a.lnk{color:#F23F44;}a.lnk:hover{color:#DC3137;}
.wrap{max-width:1240px;margin:0 auto;padding:0 28px;}
.sec{padding:104px 28px;}
.eyebrow{font-size:12.5px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:#8A7A7D;margin:0 0 18px;}
.eyebrow b{color:#F23F44;font-weight:600;}
.h1{font-size:62px;line-height:1.04;font-weight:800;letter-spacing:-2px;margin:0;color:#1A1014;}
.h2{font-size:43px;line-height:1.08;font-weight:800;letter-spacing:-1.4px;margin:0;color:#1A1014;}
.h3{font-size:22px;line-height:1.25;font-weight:700;letter-spacing:-.4px;margin:0;color:#1A1014;}
.lead{font-size:19px;line-height:1.6;color:#5A4B4E;font-weight:400;}
.body{font-size:16px;line-height:1.66;color:#5A4B4E;}
.clhero{position:relative;overflow:hidden;padding:96px 28px 60px;background:radial-gradient(1100px 560px at 50% -12%,#FFE9E7 0%,rgba(255,240,238,0) 60%),#fff;text-align:center;}
.hero-in{position:relative;z-index:2;max-width:760px;margin:0 auto;}
.hblob{position:absolute;border-radius:50%;filter:blur(46px);opacity:.55;z-index:0;pointer-events:none;}
.hblob.b1{width:380px;height:380px;background:radial-gradient(circle,#FF7A52,rgba(255,122,82,0));top:-120px;left:-80px;animation:hblur 9s ease-in-out infinite;}
.hblob.b2{width:340px;height:340px;background:radial-gradient(circle,#F23F44,rgba(242,63,68,0));top:-10px;right:-90px;animation:hblur 12s ease-in-out infinite 1s;}
@keyframes hblur{0%,100%{filter:blur(40px);opacity:.42;transform:scale(1);}50%{filter:blur(84px);opacity:.7;transform:scale(1.16);}}
.acc{color:#F23F44;}
.reveal{opacity:0;transform:translateY(26px);transition:opacity .7s cubic-bezier(.2,.7,.2,1), transform .7s cubic-bezier(.2,.7,.2,1);}
.reveal.in{opacity:1;transform:none;}
.clstat{display:grid;grid-template-columns:repeat(4,1fr);}
.cst{text-align:center;padding:4px 22px;}
.cst + .cst{border-left:1px solid #EFE3E4;}
.cstn{font-size:44px;font-weight:800;letter-spacing:-1.6px;line-height:1;color:#F23F44;font-variant-numeric:tabular-nums;}
.cstl{font-size:14px;color:#6C5A5D;font-weight:500;margin-top:12px;line-height:1.45;}
.logogrid{display:grid;grid-template-columns:repeat(5,1fr);gap:16px;}
.logocell{height:96px;border:1px solid #F0E2E3;border-radius:16px;display:flex;align-items:center;justify-content:center;background:#fff;font-size:19px;font-weight:800;letter-spacing:-.4px;color:#B4A3A6;transition:transform .3s cubic-bezier(.2,.7,.3,1),border-color .3s,box-shadow .3s,color .3s;}
.logocell:hover{transform:translateY(-4px);border-color:#FBD0D1;box-shadow:0 16px 34px rgba(110,11,14,.10);color:#7A686B;}
.indgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;}
.indcard{background:#fff;border:1px solid #EFE2E3;border-radius:20px;padding:30px 26px;transition:transform .25s ease,box-shadow .25s ease,border-color .25s;}
.indcard:hover{transform:translateY(-4px);box-shadow:0 22px 46px rgba(110,11,14,.10);border-color:#F4D2D3;}
.indic{width:46px;height:46px;border-radius:13px;background:#FFF0F0;color:#F23F44;display:flex;align-items:center;justify-content:center;margin-bottom:18px;}
.compgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px;}
.compcard{background:#fff;border:1px solid #F2E6E7;border-radius:18px;padding:30px 26px;display:flex;flex-direction:column;transition:transform .3s cubic-bezier(.2,.7,.3,1),border-color .3s,box-shadow .3s;}
.compcard:hover{transform:translateY(-4px);border-color:#FBD0D1;box-shadow:0 16px 34px rgba(110,11,14,.10);}
.compcard .cclogo{height:64px;width:100%;display:flex;align-items:center;justify-content:center;margin:0 -10px 20px;}
.compcard .cclogo img{max-height:64px;max-width:100%;width:auto;object-fit:contain;}
.compcard .ccq{font-size:15px;line-height:1.6;color:#5A4B4E;flex:1;margin:0 0 20px;}
.compcard .ccatt{border-top:1px solid #F2E6E7;padding-top:16px;}
.compcard .ccname{font-size:14.5px;font-weight:700;color:#1A1014;}
.compcard .ccrole{font-size:13.5px;color:#8A7A7D;margin-top:2px;}
@media(max-width:920px){ .compgrid{grid-template-columns:1fr;} }
@media(max-width:920px){
  .h1{font-size:42px;letter-spacing:-1.4px;}
  .h2{font-size:32px;letter-spacing:-1px;}
  .sec{padding:72px 22px;}
  .clstat{grid-template-columns:1fr 1fr;row-gap:34px;}
  .cst + .cst{border-left:none;}
  .logogrid{grid-template-columns:repeat(3,1fr);}
  .indgrid{grid-template-columns:1fr;}
}
h1,h2,h3,h4,.h1,.h2,.h3,.hero h1,.eyebrow{text-wrap:balance;}p,li,.body,.lead,.sub,figcaption,blockquote{text-wrap:pretty;}/*om-balance-rule*/
`;

function CompCard({ c }: { c: Client }) {
  return (
    <div className="compcard">
      <div className="cclogo">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={c.img} alt={c.role} style={c.imgStyle ? { transform: c.imgStyle.replace('transform:', '') } : undefined} />
      </div>
      <p className="ccq">&ldquo;{c.quote}&rdquo;</p>
      <div className="ccatt">
        <div className="ccname">{c.name}</div>
        <div className="ccrole">{c.role}</div>
      </div>
    </div>
  );
}

export default function ClientsPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <SiteHeader
        announcement="1,500+ hiring teams assess with Testlify"
        announcementCta="Read their stories"
        homeHref="/"
      />

      <section className="clhero">
        <div className="hblob b1"></div>
        <div className="hblob b2"></div>
        <div className="hero-in wrap" style={{ maxWidth: 980 }}>
          <p className="eyebrow reveal">Our clients<b>.</b></p>
          <h1 className="h1 reveal" style={{ transitionDelay: '.04s' }}>
            Trusted hiring assessment partner for <span className="acc">1500+ companies</span>
          </h1>
          <p className="lead reveal" style={{ margin: '22px auto 0', maxWidth: 780, transitionDelay: '.08s' }}>
            We empower businesses across 50+ industries to make data-driven hiring decisions by assessing candidates based on real job skills, ensuring the right talent is selected every time.
          </p>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <p className="eyebrow reveal" style={{ textAlign: 'center' }}>Enterprise &amp; finance<b>.</b></p>
          <h2 className="h2 reveal" style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto' }}>What global enterprises say</h2>
          <div className="compgrid reveal" style={{ marginTop: 52 }}>
            {wave1.map((c, i) => (<CompCard key={i} c={c} />))}
          </div>
        </div>
      </section>

      <section className="sec" style={{ background: '#FBF3EE' }}>
        <div className="wrap">
          <p className="eyebrow reveal" style={{ textAlign: 'center' }}>Technology &amp; engineering<b>.</b></p>
          <h2 className="h2 reveal" style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto' }}>What tech teams say</h2>
          <div className="compgrid reveal" style={{ marginTop: 52 }}>
            {wave2.map((c, i) => (<CompCard key={i} c={c} />))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <p className="eyebrow reveal" style={{ textAlign: 'center' }}>Education &amp; public sector<b>.</b></p>
          <h2 className="h2 reveal" style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto' }}>What academic teams say</h2>
          <div className="compgrid reveal" style={{ marginTop: 52 }}>
            {wave3.map((c, i) => (<CompCard key={i} c={c} />))}
          </div>
        </div>
      </section>

      <Recognition bg="#FBF3EE" />

      <section className="sec">
        <div className="wrap">
          <p className="eyebrow reveal" style={{ textAlign: 'center' }}>Global &amp; public sector<b>.</b></p>
          <h2 className="h2 reveal" style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto' }}>What global &amp; public sector teams say</h2>
          <div className="compgrid reveal" style={{ marginTop: 52 }}>
            {wave4.map((c, i) => (<CompCard key={i} c={c} />))}
          </div>
        </div>
      </section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
