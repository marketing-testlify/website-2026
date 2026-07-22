'use client';

import { useState } from 'react';
import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaButton from '@/components/CtaButton';
import SecuritySection from '@/components/SecuritySection';
import Testimonials from '@/components/Testimonials';
import Recognition from '@/components/Recognition';
import CtaBand from '@/components/CtaBand';

const CSS = `
body{margin:0;font-family:'Poppins',sans-serif;color:#1A1014;background:#fff;}
.tsdw{max-width:1240px;margin:0 auto;padding:0 28px;}
.tsd-sec{padding:96px 0;}
.tsd-sand{background:#FBF3EE;}
.eyebrow{font-size:13px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:#8A7A7D;margin:0;}.eyebrow b{color:#F23F44;}
.tsd-h1{font-size:52px;font-weight:800;letter-spacing:-1.4px;line-height:1.08;margin:16px 0 0;}
.tac{color:#F23F44;}
.tsd-h2{font-size:34px;font-weight:800;letter-spacing:-.8px;line-height:1.16;margin:14px 0 0;}
.tsd-lead{font-size:17.5px;line-height:1.6;color:#5A4B4E;margin:20px 0 0;}
.tsd-p{font-size:15.5px;line-height:1.64;color:#5A4B4E;margin:14px 0 0;}
.tsd-crumb{font-size:13px;color:#8A7A7D;display:flex;gap:8px;align-items:center;margin-bottom:18px;}.tsd-crumb a{color:#8A7A7D;text-decoration:none;}.tsd-crumb a:hover{color:#F23F44;}
.tsd-hero{padding:74px 0 96px;background:linear-gradient(180deg,#FFF8F7 0%,#fff 82%);}
.tsd-hgrid{display:grid;grid-template-columns:1.04fr .96fr;gap:60px;align-items:center;}
.tsd-ticks{display:flex;gap:22px;flex-wrap:wrap;margin-top:24px;}
.tsd-tick{display:flex;align-items:center;gap:8px;font-size:13.5px;font-weight:600;color:#6C5A5D;}
.tsd-ctas{display:flex;gap:14px;flex-wrap:wrap;margin-top:26px;}
.tsd-stats{display:flex;gap:10px;flex-wrap:wrap;margin-top:26px;}
.tsd-statc{background:#fff;border:1px solid #F0E2E3;border-radius:999px;padding:8px 16px;font-size:13px;font-weight:600;color:#1A1014;box-shadow:0 8px 18px rgba(110,11,14,.06);}
.tsd-shot{background:#fff;border:1px solid #F0E2E3;border-radius:22px;padding:0;box-shadow:0 40px 90px rgba(110,11,14,.14);overflow:hidden;}
.tsd-shotimg{display:block;width:100%;height:360px;background-size:contain;background-repeat:no-repeat;background-position:center;background-color:#fff;border-radius:14px;}
/* animated hero graphic */
.ithero-wrap{position:relative;}
.ithero-card{position:relative;background:#fff;border:1px solid #F0E2E3;border-radius:20px;box-shadow:0 40px 90px rgba(110,11,14,.14);overflow:hidden;animation:itfloat 6s ease-in-out infinite;}
@keyframes itfloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)}}
.ithero-top{display:flex;align-items:center;gap:7px;padding:14px 18px;border-bottom:1px solid #F4E9E9;background:#FCF6F5;}
.ithero-dot{width:11px;height:11px;border-radius:50%;}.ithero-dot.r{background:#FF5F57;}.ithero-dot.y{background:#FEBC2E;}.ithero-dot.g{background:#28C840;}
.ithero-file{font-size:12.5px;color:#8A7A7D;font-weight:600;margin-left:8px;}
.ithero-live{margin-left:auto;font-size:11.5px;font-weight:700;color:#1FA463;}
.ithero-scores{padding:18px 20px 22px;display:flex;flex-direction:column;gap:13px;}
.ithero-scr{display:flex;align-items:center;gap:12px;}
.ithero-scl{font-size:12.5px;font-weight:600;color:#46383C;width:104px;flex:none;}
.ithero-scbar{flex:1;height:8px;border-radius:6px;background:#F4E7E8;overflow:hidden;}
.ithero-scbar i{display:block;height:100%;border-radius:6px;background:linear-gradient(90deg,#FF7A52,#F23F44);width:0;animation:itfill 1.5s cubic-bezier(.4,0,.2,1) forwards;}
@keyframes itfill{to{width:var(--w);}}
.ithero-scv{font-size:13px;font-weight:800;color:#F23F44;width:26px;text-align:right;flex:none;}
.ithero-badge{position:absolute;display:inline-flex;align-items:center;gap:7px;background:#fff;border:1px solid #F0E2E3;border-radius:12px;padding:9px 14px;font-size:12.5px;font-weight:700;color:#1A1014;box-shadow:0 14px 30px rgba(110,11,14,.14);}
.ithero-badge svg{color:#1FA463;}
.ithero-badge.b1{top:26px;right:-14px;animation:itfloat 5s ease-in-out infinite;}
.ithero-badge.b2{bottom:-20px;right:36px;animation:itfloat 5.6s ease-in-out .4s infinite;}
.rt-cand{display:flex;align-items:center;gap:12px;padding:16px 18px;border-bottom:1px solid #F4E9E9;}
.rt-av{width:42px;height:42px;border-radius:50%;background:linear-gradient(135deg,#FF7A52,#F23F44);color:#fff;font-weight:800;font-size:15px;display:flex;align-items:center;justify-content:center;flex:none;}
.rt-ci{display:flex;flex-direction:column;}
.rt-nm{font-size:15px;font-weight:700;color:#1A1014;}
.rt-role{font-size:12.5px;color:#8A7A7D;font-weight:500;}
.rt-fit{margin-left:auto;font-size:11.5px;font-weight:700;color:#1FA463;background:#E8F6EE;padding:5px 11px;border-radius:100px;}
/* real-logo ATS grid */
.itats-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:16px;margin-top:44px;}
.itats-tile{background:#fff;border:1px solid #F0E2E3;border-radius:14px;height:84px;display:flex;align-items:center;justify-content:center;padding:18px;box-shadow:0 10px 22px rgba(110,11,14,.06);transition:transform .25s ease,box-shadow .25s ease,border-color .25s ease;}
.itats-tile:hover{transform:translateY(-4px);border-color:#FBD0D1;box-shadow:0 18px 34px rgba(110,11,14,.10);}
.itats-tile img{max-width:100%;max-height:38px;object-fit:contain;}
.itats-more{text-align:center;margin-top:34px;}
.itats-more a{display:inline-flex;align-items:center;gap:8px;color:#F23F44;font-weight:700;font-size:15.5px;text-decoration:none;}
@media(max-width:960px){.ithero-badge.b1{right:6px;}.ithero-badge.b2{right:6px;left:auto;}.itats-grid{grid-template-columns:repeat(3,1fr);}}
@media(max-width:560px){.itats-grid{grid-template-columns:repeat(2,1fr);}}
.tsd-grid2{display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:center;}
.tsd-flip .tsd-copy{order:2;}.tsd-flip .tsd-media{order:1;}
.tsd-shead{text-align:center;max-width:720px;margin:0 auto;}
.tsd-cards{display:grid;grid-template-columns:repeat(3,1fr);gap:22px;margin-top:46px;}
.tsd-card{background:#fff;border:1px solid #F0E2E3;border-radius:18px;padding:28px 26px;transition:transform .3s cubic-bezier(.2,.7,.3,1),border-color .3s,box-shadow .3s;}
.tsd-card:hover{transform:translateY(-4px);border-color:#FBD0D1;box-shadow:0 16px 34px rgba(110,11,14,.10);}
.tsd-ic{width:44px;height:44px;border-radius:13px;background:#FFF0EF;color:#F23F44;display:flex;align-items:center;justify-content:center;margin-bottom:16px;}
.tsd-ct{font-size:17px;font-weight:700;margin:0;}
.tsd-cd{font-size:14px;line-height:1.6;color:#6C5A5D;margin:8px 0 0;}
.tsd-faqw{max-width:820px;margin:44px auto 0;}
.tsd-faq{border-bottom:1px solid #F0E2E3;padding:22px 2px;cursor:pointer;}
.tsd-faqq{display:flex;justify-content:space-between;align-items:center;gap:20px;font-size:16.5px;font-weight:700;color:#1A1014;}
.tsd-faqx{width:28px;height:28px;border-radius:50%;background:#FFF0EF;color:#F23F44;display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:700;flex:none;transition:transform .25s;}
.tsd-faqa{display:none;font-size:15px;line-height:1.64;color:#5A4B4E;margin-top:12px;max-width:720px;}
.tsd-open .tsd-faqa{display:block;}
.tsd-open .tsd-faqx{transform:rotate(45deg);}
.reveal{opacity:0;transform:translateY(26px);}
.reveal.in{opacity:1;transform:none;}
@media(max-width:960px){.tsd-hgrid,.tsd-grid2{grid-template-columns:1fr;gap:40px;}.tsd-flip .tsd-copy{order:1;}.tsd-flip .tsd-media{order:2;}.tsd-cards{grid-template-columns:1fr;}.tsd-h1{font-size:38px;}.tsd-h2{font-size:27px;}.tsd-sec{padding:64px 0;}.tsd-shotimg{height:280px;}}

h1,h2,h3,h4,.h1,.h2,.h3,.hero h1,.eyebrow{text-wrap:balance;}p,li,.body,.lead,.sub,figcaption,blockquote{text-wrap:pretty;}/*om-balance-rule*/
`;

type SplitSection = {
  img: string;
  shotBg: string;
  h2: string;
  body: string[];
  bgClass: string;
  gridClass: string;
};

const splitSections: SplitSection[] = [
  {
    img: 'https://testlify.com/wp-content/uploads/2023/02/Freelance-hiring-one.png',
    shotBg: '#F3F6F9',
    h2: 'Efficient freelance hiring process',
    body: [
      'We offer an efficient hiring process for freelance positions, which helps save time and ensures that only the best candidates are considered.',
      'Organizations can easily screen and evaluate freelance candidates based on their skills and expertise, which allows them to identify the most qualified candidates for the job quickly. This streamlined process helps businesses find the right freelancer in less time and effort.',
    ],
    bgClass: 'tsd-sand',
    gridClass: 'tsd-grid2',
  },
  {
    img: 'https://testlify.com/wp-content/uploads/2022/11/Better-Skill-Set-Evaluation-Process.png',
    shotBg: '#FFF',
    h2: 'Objective evaluation of freelance candidates',
    body: [
      'Our talent assessment tests offer an objective evaluation process that enables businesses to assess the skills and abilities of freelance candidates.',
      'We help you to ensure that all candidates are evaluated fairly, based on their skills and expertise. This process helps businesses to make informed decisions when hiring freelancers and reduces the risk of hiring someone who is not a good fit for the job.',
    ],
    bgClass: '',
    gridClass: 'tsd-grid2 tsd-flip',
  },
  {
    img: 'https://testlify.com/wp-content/uploads/2022/11/Difficulty-Scaling-Recruitment-Efforts-1024x1024-1.png',
    shotBg: '#F3F6F9',
    h2: 'Highly skilled freelance hires',
    body: [
      'Hiring the right freelancer is crucial for the success of any project. Testlify helps businesses to evaluate freelance candidates thoroughly, ensuring that only the most qualified and skilled candidates are hired.',
      'By assessing the skills and abilities of freelance candidates, Testlify helps businesses to make informed hiring decisions that lead to better quality hires. This, in turn, can improve the quality of work delivered and reduce the risk of project failure.',
    ],
    bgClass: 'tsd-sand',
    gridClass: 'tsd-grid2',
  },
  {
    img: 'https://testlify.com/wp-content/uploads/2022/12/Get-deeper-insights-1.svg',
    shotBg: '#FFF',
    h2: 'Tailor your freelancer search to meet your project needs',
    body: [
      'We also provide customization options to assist you in finding freelancers with the skills that are most important to your project.',
      'Whether you require expertise in web development, content writing, or social media management, our platform enables you to personalize your search to suit your specific requirements.',
    ],
    bgClass: '',
    gridClass: 'tsd-grid2 tsd-flip',
  },
  {
    img: 'https://testlify.com/wp-content/uploads/2023/02/white-lable-1024x672.png',
    shotBg: '#F3F6F9',
    h2: 'How to begin your search for freelancers?',
    body: [
      "Starting your search for freelancers on our platform is hassle-free. First, create an account, then select the criteria that match your project needs, and begin evaluating candidates' skills.",
      "Our platform can be of great assistance, in finding freelancers with the right skill set for your project. With our vast library of assessments and user-friendly interface, you can quickly and effectively evaluate freelancers' skills to find the right match for your project needs.",
    ],
    bgClass: 'tsd-sand',
    gridClass: 'tsd-grid2',
  },
];

const whyCards = [
  {
    iconD: 'M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 19.5A2.5 2.5 0 0 0 6.5 22H20V2H6.5A2.5 2.5 0 0 0 4 4.5v15z',
    title: 'Diverse test library',
    desc: 'Our comprehensive test library covers a broad range of skills essential to freelancing. You can choose from pre-built assessments or customize your own tests to meet your specific hiring needs.',
  },
  {
    iconD: 'M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11',
    title: 'Streamlined test administration',
    desc: 'With our platform, you can easily assign tests to freelancers and track their progress in real-time.',
  },
  {
    iconD: 'M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6',
    title: 'Affordable pricing',
    desc: "We offer cost-effective pricing plans suitable for businesses of all sizes. You can assess freelancers' skills without exceeding your budget.",
  },
  {
    iconD: 'M12 8v4l3 2M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0z',
    title: 'Time-saving features',
    desc: 'Our platform includes features like automated scoring and reporting, making it easy to evaluate freelancer skills efficiently.',
  },
  {
    iconD: 'M5 2h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zM12 18h.01',
    title: 'Mobile-friendly',
    desc: 'Our platform is mobile-responsive, allowing you to access it from anywhere and at any time.',
  },
  {
    iconD: 'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z',
    title: 'Personalized feedback',
    desc: 'Our platform enables you to provide personalized feedback to freelancers after completing their assessments.',
  },
];

const stats = ['3,500+ validated tests', 'Objective evaluation', 'Any device, anywhere'];

const faqs = [
  { q: 'Why should businesses use Testlify?', a: 'Businesses should use Testlify because it offers a streamlined and objective evaluation process to find highly skilled freelancers efficiently.' },
  { q: 'What kind of assessments does Testlify offer?', a: 'Testlify offers a diverse test library covering various skills essential to freelancing, including web development, content writing, and social media management.' },
  { q: 'How does Testlify help businesses find the right freelancer?', a: 'Testlify helps businesses find the right freelancer by providing a standardized and objective evaluation process based on their skills and expertise.' },
  { q: 'How does Testlify make the hiring process more efficient?', a: 'Testlify makes the hiring process more efficient by providing businesses with a streamlined process to screen and evaluate candidates based on their skills and expertise.' },
  { q: 'What customization options does Testlify offer for businesses?', a: 'Testlify offers customization options like including your own questions, selecting the duration of the test, and establishing the minimum score required to pass.' },
];

function SplitBlock({ s }: { s: SplitSection }) {
  return (
    <section className={('tsd-sec ' + s.bgClass).trim()}>
      <div className="tsdw">
        <div className={s.gridClass}>
          <div className="tsd-copy reveal">
            <h2 className="tsd-h2">{s.h2}</h2>
            {s.body.map((para, pi) => (
              <p className="tsd-p" key={pi}>{para}</p>
            ))}
          </div>
          <div className="tsd-media reveal">
            <div className="tsd-shot" style={{ background: s.shotBg }}>
              <div className="tsd-shotimg" style={{ backgroundColor: s.shotBg, backgroundImage: `url("${s.img}")` }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function FreelanceHiringPage() {
  const [open, setOpen] = useState<Record<number, boolean>>({});
  const toggle = (i: number) => setOpen((s) => ({ ...s, [i]: !s[i] }));

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <SiteHeader
        announcement="Testlify AI is here — screen, interview & score candidates automatically."
        announcementCta="Explore Testlify AI"
      />

      <section className="tsd-hero" data-screen-label="Hero">
        <div className="tsdw tsd-hgrid">
          <div className="tsd-copy reveal">
            <div className="tsd-crumb">
              <Link href="/solution-index">Solutions</Link>
              <span>/</span>
              <span>Use case / Freelance hiring</span>
            </div>
            <p className="eyebrow">For freelance hiring<b>.</b></p>
            <h1 className="tsd-h1">Find the best <span className="tac">freelance talent</span> with Testlify&apos;s hiring assessments</h1>
            <p className="tsd-lead">Testlify is your go-to talent assessment tool for freelance hiring! If you&apos;re in need of top-notch freelance talent, you&apos;ve come to the right place. We can help you choose highly skilled and experienced freelancers who can help you take your business to the next level with our skill assessment tests.</p>
            <div className="tsd-stats">
              {stats.map((t) => (
                <span className="tsd-statc" key={t}>{t}</span>
              ))}
            </div>
            <div className="tsd-ctas">
              <CtaButton label="Try for free" href="/pricing" variant="primary" size="md" icon="arrow" magnetic />
              <CtaButton label="Book a demo" href="/contact" variant="secondary" size="md" icon="play" />
            </div>
            <div className="tsd-ticks">
              <span className="tsd-tick"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#F23F44" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>No credit card required</span>
              <span className="tsd-tick"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#F23F44" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>7-day free trial</span>
            </div>
          </div>
          <div className="tsd-media">
            <div className="ithero-wrap">
              <div className="ithero-card">
                <div className="ithero-top"><span className="ithero-dot r"></span><span className="ithero-dot y"></span><span className="ithero-dot g"></span><span className="ithero-file">freelancer-report</span><span className="ithero-live">Match 94%</span></div>
                <div className="rt-cand"><span className="rt-av">MA</span><div className="rt-ci"><span className="rt-nm">Marcus Alvarez</span><span className="rt-role">Freelance Web Developer</span></div><span className="rt-fit">Project-ready</span></div>
                <div className="ithero-scores">
                  <div className="ithero-scr"><span className="ithero-scl">Web development</span><span className="ithero-scbar"><i style={{ ['--w' as string]: '94%', animationDelay: '.15s' }}></i></span><span className="ithero-scv">94</span></div>
                  <div className="ithero-scr"><span className="ithero-scl">Communication</span><span className="ithero-scbar"><i style={{ ['--w' as string]: '90%', animationDelay: '.3s' }}></i></span><span className="ithero-scv">90</span></div>
                  <div className="ithero-scr"><span className="ithero-scl">Reliability</span><span className="ithero-scbar"><i style={{ ['--w' as string]: '88%', animationDelay: '.45s' }}></i></span><span className="ithero-scv">88</span></div>
                  <div className="ithero-scr"><span className="ithero-scl">Problem solving</span><span className="ithero-scbar"><i style={{ ['--w' as string]: '86%', animationDelay: '.6s' }}></i></span><span className="ithero-scv">86</span></div>
                </div>
              </div>
              <div className="ithero-badge b1"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>Vetted</div>
              <div className="ithero-badge b2"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>AI-scored</div>
            </div>
          </div>
        </div>
      </section>

      {splitSections.map((s, i) => (
        <SplitBlock s={s} key={i} />
      ))}

      <section className="tsd-sec">
        <div className="tsdw">
          <div className="tsd-shead reveal">
            <p className="eyebrow">Why Testlify<b>.</b></p>
            <h2 className="tsd-h2">Why use our freelancer assessment platform?</h2>
            <p className="tsd-lead">Our freelancer assessment platform is tailored to meet the specific needs of businesses looking for skilled freelancers. Here are some of the benefits of using our platform:</p>
          </div>
          <div className="tsd-cards reveal">
            {whyCards.map((c, i) => (
              <div className="tsd-card" key={i}>
                <div className="tsd-ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={c.iconD}></path></svg></div>
                <p className="tsd-ct">{c.title}</p>
                <p className="tsd-cd">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="tsd-sec tsd-sand">
        <div className="tsdw">
          <div className="tsd-shead reveal">
            <p className="eyebrow">Integrations<b>.</b></p>
            <h2 className="tsd-h2">Testlify integrates seamlessly with 100+ ATS tools</h2>
            <p className="tsd-lead">Streamline your hiring process from assessment to onboarding. Sync candidate data effortlessly, automate workflows, and gain deeper insights to make informed hiring decisions faster.</p>
          </div>
          <div className="itats-grid reveal">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <div className="itats-tile"><img src="https://testlify.com/wp-content/uploads/2024/09/Workday_Inc.-Logo.wine_-1-2048x1365-2.png" alt="Workday" /></div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <div className="itats-tile"><img src="https://testlify.com/wp-content/uploads/2025/10/Successfactors-Logo-Vector.svg-.png" alt="SAP SuccessFactors" /></div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <div className="itats-tile"><img src="https://testlify.com/wp-content/uploads/2025/10/Lever_Employ_Logo_Horizontal_Turquoise_Black-300x43-1.png" alt="Lever" /></div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <div className="itats-tile"><img src="https://testlify.com/wp-content/uploads/2025/10/681b1f74457e6f968fdaaa8d_MASTER_RECRUITEE_COLOUR_PREFERRED-LOGO-TO-USE-1024x313.png" alt="Recruitee" /></div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <div className="itats-tile"><img src="https://testlify.com/wp-content/uploads/2025/10/logo.svg" alt="UKG Pro Recruiting" /></div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <div className="itats-tile"><img src="https://testlify.com/wp-content/uploads/2024/09/BambooHR-Logo-1-2048x1152-2.png" alt="BambooHR" /></div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <div className="itats-tile"><img src="https://testlify.com/wp-content/uploads/2023/03/629a0bbcb04c5ae587c411c2-1-1.png" alt="Greenhouse" /></div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <div className="itats-tile"><img src="https://testlify.com/wp-content/uploads/2024/08/zoho-recruit-logo-1.png" alt="Zoho Recruit" /></div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <div className="itats-tile"><img src="https://testlify.com/wp-content/uploads/2025/10/JazzHR_Employ_Logo_Horizontal_Purple_Black-1024x131.png" alt="JazzHR" /></div>
          </div>
          <div className="itats-more reveal"><Link href="/integrations">View all ATS integrations<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></Link></div>
        </div>
      </section>

      <SecuritySection eyebrow="Security" heading="Built to keep your organization secure" sub="Ensure the security of your recruitment data with top-tier admin management, enhanced security integrations, stringent data governance, comprehensive compliance audits, and strong privacy protections." />

      <Testimonials eyebrow="Testimonials" heading="What our customers are saying about Testlify" />

      <Recognition bg="#fff" />

      <section className="tsd-sec tsd-sand">
        <div className="tsdw">
          <div className="tsd-shead reveal">
            <p className="eyebrow">FAQ<b>.</b></p>
            <h2 className="tsd-h2">Frequently asked questions (FAQs)</h2>
          </div>
          <div className="tsd-faqw">
            {faqs.map((f, i) => (
              <div className={('tsd-faq reveal ' + (open[i] ? 'tsd-open' : '')).trim()} key={i} onClick={() => toggle(i)}>
                <div className="tsd-faqq">{f.q}<span className="tsd-faqx">+</span></div>
                <div className="tsd-faqa">{f.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Get started"
        heading="Cut through the noise, hire with clarity."
        sub="Resumes don't tell you everything! Testlify gives you the insights you need to hire the right people with skills assessments that are accurate, automated, and unbiased."
      />
      <SiteFooter />
    </>
  );
}
