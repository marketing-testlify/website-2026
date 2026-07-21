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
.tsd-h1{font-size:52px;font-weight:800;letter-spacing:-1.4px;line-height:1.08;margin:16px 0 0;}.tsd-h1 .tac{color:#F23F44;}
.tsd-h2{font-size:34px;font-weight:800;letter-spacing:-.8px;line-height:1.16;margin:14px 0 0;}
.tsd-lead{font-size:17.5px;line-height:1.6;color:#5A4B4E;margin:20px 0 0;}
.tsd-p{font-size:15.5px;line-height:1.64;color:#5A4B4E;margin:14px 0 0;}
.tsd-crumb{font-size:13px;color:#8A7A7D;display:flex;gap:8px;align-items:center;margin-bottom:18px;}.tsd-crumb a{color:#8A7A7D;text-decoration:none;}.tsd-crumb a:hover{color:#F23F44;}
.tsd-hero{padding:74px 0 96px;background:linear-gradient(180deg,#FFF8F7 0%,#fff 82%);}
.tsd-hgrid{display:grid;grid-template-columns:1.04fr .96fr;gap:60px;align-items:center;}
.tsd-ticks{display:flex;gap:22px;flex-wrap:wrap;margin-top:24px;}
.tsd-tick{display:flex;align-items:center;gap:8px;font-size:13.5px;font-weight:600;color:#6C5A5D;}
.tsd-ctas{display:flex;gap:14px;flex-wrap:wrap;margin-top:26px;}
.tsd-stats{display:flex;gap:10px;flex-wrap:nowrap;margin-top:26px;}
.tsd-statc{background:#fff;border:1px solid #F0E2E3;border-radius:999px;padding:8px 16px;font-size:13px;font-weight:600;color:#1A1014;box-shadow:0 8px 18px rgba(110,11,14,.06);}
.tsd-shot{background:#fff;border:1px solid #F0E2E3;border-radius:22px;padding:10px;box-shadow:0 40px 90px rgba(110,11,14,.14);}
.tsd-shot image-slot{display:block;width:100%;height:360px;border-radius:14px;overflow:hidden;}
.tsd-shotimg{display:block;width:100%;height:360px;background-size:contain;background-repeat:no-repeat;background-position:center;background-color:#fff;border-radius:14px;}
.tsd-shotimg.cover{background-size:cover;}
.itats-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:16px;margin-top:44px;}
.itats-tile{background:#fff;border:1px solid #F0E2E3;border-radius:14px;height:84px;display:flex;align-items:center;justify-content:center;padding:18px;box-shadow:0 10px 22px rgba(110,11,14,.06);transition:transform .3s cubic-bezier(.2,.7,.3,1),border-color .3s,box-shadow .3s;}
.itats-tile:hover{transform:translateY(-4px);border-color:#FBD0D1;box-shadow:0 18px 34px rgba(110,11,14,.10);}
.itats-tile img{max-width:100%;max-height:38px;object-fit:contain;}
.itats-more{text-align:center;margin-top:34px;}
.itats-more a{display:inline-flex;align-items:center;gap:8px;color:#F23F44;font-weight:700;font-size:15.5px;text-decoration:none;}
@media(max-width:960px){.itats-grid{grid-template-columns:repeat(3,1fr);}}
@media(max-width:560px){.itats-grid{grid-template-columns:repeat(2,1fr);}}
.tsm-sec{background:#FBF3EE!important;}
.tsd-logos{margin-top:40px;}
/* D&I blind-shortlist hero graphic */
.dih-wrap{position:relative;}
.dih-card{position:relative;background:#fff;border:1px solid #F0E2E3;border-radius:20px;box-shadow:0 40px 90px rgba(110,11,14,.14);overflow:hidden;animation:dihfloat 6s ease-in-out infinite;}
@keyframes dihfloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)}}
.dih-top{display:flex;align-items:center;gap:7px;padding:14px 18px;border-bottom:1px solid #F4E9E9;background:#FCF6F5;}
.dih-dot{width:11px;height:11px;border-radius:50%;}.dih-dot.r{background:#FF5F57;}.dih-dot.y{background:#FEBC2E;}.dih-dot.g{background:#28C840;}
.dih-file{font-size:12.5px;color:#8A7A7D;font-weight:600;margin-left:8px;}
.dih-live{margin-left:auto;font-size:11px;font-weight:700;color:#1FA463;display:flex;align-items:center;gap:5px;}
.dih-note{display:flex;align-items:center;gap:9px;padding:13px 18px;font-size:12.5px;font-weight:600;color:#6C5A5D;background:#FFF6F5;border-bottom:1px solid #F4E9E9;}
.dih-note svg{color:#F23F44;flex:none;}
.dih-list{padding:6px 0;}
.dih-row{display:flex;align-items:center;gap:13px;padding:12px 18px;}
.dih-row+.dih-row{border-top:1px solid #F7EEEF;}
.dih-av{width:40px;height:40px;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:800;font-size:15px;flex:none;}
.dih-av.a{background:linear-gradient(135deg,#FF7A52,#F23F44);}
.dih-av.b{background:linear-gradient(135deg,#F7B955,#F2913F);}
.dih-av.c{background:linear-gradient(135deg,#46C39B,#1FA463);}
.dih-av.d{background:linear-gradient(135deg,#9B7BE0,#6D4FC7);}
.dih-ci{min-width:0;flex:1;}
.dih-nm{font-size:13.5px;font-weight:700;color:#1A1014;display:flex;align-items:center;gap:8px;}
.dih-pill{font-size:10px;font-weight:800;letter-spacing:.04em;text-transform:uppercase;color:#1FA463;background:#E4F6EC;border-radius:999px;padding:2px 8px;}
.dih-role{font-size:11.5px;color:#8A7A7D;margin-top:2px;}
.dih-sc{display:flex;align-items:center;gap:10px;width:118px;flex:none;}
.dih-scbar{flex:1;height:7px;border-radius:6px;background:#F4E7E8;overflow:hidden;}
.dih-scbar i{display:block;height:100%;border-radius:6px;background:linear-gradient(90deg,#FF7A52,#F23F44);width:0;animation:dihfill 1.5s cubic-bezier(.4,0,.2,1) forwards;}
@keyframes dihfill{to{width:var(--w);}}
.dih-scv{font-size:13px;font-weight:800;color:#F23F44;width:26px;text-align:right;flex:none;}
.dih-badge{position:absolute;display:inline-flex;align-items:center;gap:7px;background:#fff;border:1px solid #F0E2E3;border-radius:12px;padding:9px 14px;font-size:12.5px;font-weight:700;color:#1A1014;box-shadow:0 16px 30px rgba(110,11,14,.12);}
.dih-badge svg{color:#1FA463;}
.dih-badge.b1{top:18px;right:-14px;animation:dihfloat 5s ease-in-out infinite;}
.dih-badge.b2{bottom:-18px;left:22px;animation:dihfloat 5.6s ease-in-out .4s infinite;}
@media(max-width:960px){.dih-badge.b1{right:6px;}.dih-badge.b2{left:6px;}}
.tsd-logos-l{font-size:12.5px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#A9999C;margin:0 0 14px;}
.tsd-logos-r{display:flex;gap:12px;flex-wrap:wrap;}
.tsd-logo{background:#fff;border:1px solid #F0E2E3;border-radius:10px;padding:8px 16px;font-size:14px;font-weight:700;color:#8A7A7D;}
.tsd-grid2{display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:center;}
.tsd-flip .tsd-copy{order:2;}.tsd-flip .tsd-media{order:1;}
.tsd-num{display:inline-flex;align-items:center;justify-content:center;width:34px;height:34px;border-radius:50%;background:#FCE0DE;color:#A91E23;font-size:13px;font-weight:800;margin-bottom:12px;}
.tsd-bl{display:grid;grid-template-columns:1fr 1fr;gap:12px 24px;margin-top:22px;}
.tsd-bl1{grid-template-columns:1fr;}
.tsd-bi{display:flex;gap:10px;align-items:flex-start;}
.tsd-bi svg{flex:none;margin-top:2px;color:#1FA463;}
.tsd-bt{font-size:14.5px;font-weight:600;color:#1A1014;display:block;}
.tsd-bt a{color:#1A1014;text-decoration:none;border-bottom:1.5px solid #FCE0DE;}.tsd-bt a:hover{color:#F23F44;}
.tsd-bd{display:block;font-size:13px;line-height:1.5;color:#8A7A7D;margin-top:2px;font-weight:400;}
.tsd-link{display:inline-flex;align-items:center;gap:7px;margin-top:24px;font-size:15px;font-weight:700;color:#F23F44;text-decoration:none;}.tsd-link:hover{color:#A91E23;}
.tsd-shead{text-align:center;max-width:720px;margin:0 auto;}
.tsd-cards{display:grid;grid-template-columns:repeat(3,1fr);gap:22px;margin-top:46px;}
.tsd-card{background:#fff;border:1px solid #F0E2E3;border-radius:18px;padding:28px 26px;box-shadow:0 16px 30px rgba(110,11,14,.10);}
.tsd-ic{width:44px;height:44px;border-radius:13px;background:#FFF0EF;color:#F23F44;display:flex;align-items:center;justify-content:center;margin-bottom:16px;}
.tsd-ct{font-size:17px;font-weight:700;margin:0;}
.tsd-cd{font-size:14px;line-height:1.6;color:#6C5A5D;margin:8px 0 0;}
.tsd-card,.tsd-fcard,.tsd-step,.tsd-tcard{transition:transform .3s cubic-bezier(.2,.7,.3,1),border-color .3s,box-shadow .3s;}
.tsd-card:hover,.tsd-fcard:hover,.tsd-step:hover,.tsd-tcard:hover{transform:translateY(-4px)!important;border-color:#FBD0D1;box-shadow:0 20px 40px rgba(110,11,14,.12);}
.tsd-fgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:46px;}
.tsd-fcard{background:#fff;border:1px solid #F0E2E3;border-radius:16px;padding:26px 24px;}
.tsd-fn{width:32px;height:32px;border-radius:9px;background:#1A1014;color:#fff;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:800;margin-bottom:14px;}
.tsd-steps{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;margin-top:46px;}
.tsd-step{background:#fff;border:1px solid #F0E2E3;border-radius:18px;padding:26px 22px;box-shadow:0 16px 30px rgba(110,11,14,.10);}
.tsd-sn{width:34px;height:34px;border-radius:50%;background:#F23F44;color:#fff;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:800;margin-bottom:14px;}
.tsd-chips{display:flex;gap:10px;flex-wrap:wrap;margin-top:28px;}
.tsd-chip{background:#fff;border:1px solid #EADDDE;border-radius:999px;padding:9px 18px;font-size:13.5px;font-weight:600;color:#5A4B4E;}
.tsd-trust{border-top:1px solid #F0E2E3;border-bottom:1px solid #F0E2E3;padding:40px 0;background:#fff;}
.tsd-trow{display:flex;align-items:center;justify-content:space-between;gap:30px;flex-wrap:wrap;}
.tsd-badges{display:flex;gap:10px;flex-wrap:wrap;}
.tsd-badge{border:1.5px solid #1A1014;border-radius:999px;padding:7px 15px;font-size:12px;font-weight:700;letter-spacing:.03em;color:#1A1014;}
.tsd-g2{display:flex;align-items:center;gap:12px;}
.tsd-g2n{font-size:34px;font-weight:800;color:#F23F44;letter-spacing:-1px;}
.tsd-g2l{font-size:13px;font-weight:600;color:#6C5A5D;line-height:1.4;}
.tsd-faqw{max-width:820px;margin:44px auto 0;}
.tsd-faq{border-bottom:1px solid #F0E2E3;padding:22px 2px;cursor:pointer;}
.tsd-faqq{display:flex;justify-content:space-between;align-items:center;gap:20px;font-size:16.5px;font-weight:700;color:#1A1014;}
.tsd-faqx{width:28px;height:28px;border-radius:50%;background:#FFF0EF;color:#F23F44;display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:700;flex:none;transition:transform .25s;}
.tsd-faqa{display:none;font-size:15px;line-height:1.64;color:#5A4B4E;margin-top:12px;max-width:720px;}
.tsd-open .tsd-faqa{display:block;}
.tsd-open .tsd-faqx{transform:rotate(45deg);}
.tsd-cta{background:#1A1014;color:#fff;padding:100px 0;text-align:center;}
.tsd-cta .tsd-h2{color:#fff;font-size:42px;}
.tsd-cta .tsd-lead{color:#C9B9BC;max-width:640px;margin:20px auto 0;}
.tsd-cta .tsd-tick{color:#C9B9BC;}
.tsd-cta .tsd-ctas{justify-content:center;margin-top:30px;}
.tsd-cta .tsd-ticks{justify-content:center;margin-top:26px;}
.tsd-tgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px;margin-top:46px;}
.tsd-tcard{background:#fff;border:1px solid #F0E2E3;border-radius:18px;padding:28px 26px;box-shadow:0 16px 30px rgba(110,11,14,.10);display:flex;flex-direction:column;}
.tsd-stars{display:flex;gap:3px;color:#F23F44;margin-bottom:14px;}
.tsd-quote{font-size:15.5px;line-height:1.6;color:#3A2C30;margin:0 0 20px;}
.tsd-author{display:flex;align-items:center;gap:12px;margin-top:auto;}
.tsd-avatar{width:42px;height:42px;border-radius:50%;background:#FCE0DE;color:#A91E23;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:15px;flex:none;}
.tsd-aname{font-size:14.5px;font-weight:700;color:#1A1014;display:block;}
.tsd-arole{font-size:12.5px;color:#8A7A7D;display:block;}
.tsd-atsgrid{display:flex;gap:12px;flex-wrap:wrap;justify-content:center;margin-top:40px;}
.tsd-atslogo{background:#fff;border:1px solid #F0E2E3;border-radius:12px;padding:14px 22px;font-size:15px;font-weight:700;color:#6C5A5D;box-shadow:0 8px 18px rgba(110,11,14,.06);}
.tsd-atsmore{background:#FFF0EF;border:1px solid #FCE0DE;color:#F23F44;border-radius:12px;padding:14px 22px;font-size:15px;font-weight:700;text-decoration:none;display:inline-flex;align-items:center;gap:6px;}.tsd-atsmore:hover{background:#FCE0DE;}
.tsd-awgrid{display:flex;gap:16px;flex-wrap:wrap;justify-content:center;margin-top:40px;}
.tsd-award{display:flex;flex-direction:column;align-items:center;gap:10px;background:#fff;border:1px solid #F0E2E3;border-radius:16px;padding:22px 26px;min-width:150px;box-shadow:0 12px 26px rgba(110,11,14,.08);}
.tsd-awic{width:44px;height:44px;border-radius:50%;background:#FFF0EF;color:#F23F44;display:flex;align-items:center;justify-content:center;}
.tsd-awt{font-size:13.5px;font-weight:700;color:#1A1014;text-align:center;}
.tsd-aws{font-size:11.5px;color:#8A7A7D;}
.reveal{opacity:0;transform:translateY(26px);}
.reveal.in{opacity:1;transform:none;}
@media(max-width:960px){.tsd-hgrid,.tsd-grid2{grid-template-columns:1fr;gap:40px;}.tsd-flip .tsd-copy{order:1;}.tsd-flip .tsd-media{order:2;}.tsd-cards,.tsd-fgrid,.tsd-tgrid{grid-template-columns:1fr;}.tsd-steps{grid-template-columns:1fr 1fr;}.tsd-h1{font-size:38px;}.tsd-h2{font-size:27px;}.tsd-sec{padding:64px 0;}.tsd-bl{grid-template-columns:1fr;}.tsd-shot image-slot{height:280px;}}

h1,h2,h3,h4,.h1,.h2,.h3,.hero h1,.eyebrow{text-wrap:balance;}p,li,.body,.lead,.sub,figcaption,blockquote{text-wrap:pretty;}/*om-balance-rule*/
`;

const stats = ['Blind screening', 'EEOC-defensible', '16+ languages'];

type Split = {
  h2: string;
  body: string[];
  img: string;
  bgClass: string;
  flip: boolean;
};

const sections: Split[] = [
  {
    h2: 'Creating an inclusive work environment',
    body: [
      'We actively promote diversity and inclusion through ongoing education and training. We provide opportunities for employees to participate in workshops, seminars, and webinars focused on topics such as unconscious bias, cultural competence, and inclusive leadership.',
      'By equipping our team with the necessary knowledge and skills, we empower them to create a supportive and inclusive work environment for all.',
    ],
    img: 'https://testlify.com/wp-content/uploads/2023/07/Before-you-continue-01-2-16-1024x761.png',
    bgClass: '',
    flip: false,
  },
  {
    h2: 'Advocating for equity and inclusion',
    body: [
      'We leverage our platform to amplify underrepresented communities and the impactful work they are doing. Whether it’s through highlighting customer case studies, featuring diverse voices in our annual events, or using our social media channels to showcase their achievements, we strive to create space for these communities to shine.',
      'By actively promoting equity and inclusion, we aim to contribute to a more equitable world, where everyone has equal opportunities to succeed and thrive.',
    ],
    img: 'https://testlify.com/wp-content/uploads/2023/03/Work-time-pana-300x300.png',
    bgClass: 'tsd-sand',
    flip: true,
  },
  {
    h2: 'Amplifying underrepresented communities',
    body: [
      'Whether through customer case studies, our annual Testlify event speaker lineup, or the voices we uplift on social media, we strive to create space rather than occupy it.',
      'At Testlify, we are dedicated to creating an environment where everyone can thrive. We understand that diversity, inclusion, and belonging are integral to achieving excellence, and we are committed to continually improving and fostering a community where you can truly flourish. Together, let’s build a better future.',
    ],
    img: 'https://testlify.com/wp-content/uploads/2023/03/Psychometric-Tests-2-266x300.png',
    bgClass: '',
    flip: false,
  },
];

const faqs = [
  { q: 'What does Testlify do to promote diversity and inclusion?', a: 'We prioritize building an inclusive culture, publish diversity data, and support employee resource groups.' },
  { q: 'How does Testlify support underrepresented communities?', a: 'We amplify their voices, share impactful work, and provide allyship resources.' },
  { q: 'What is the goal of Testlify’s DI&B programming?', a: 'To create an inclusive work environment where all employees feel they belong.' },
  { q: 'What is Testlify doing to advocate for equity?', a: 'We use our platform to support underrepresented groups, challenge norms, and advocate for equal access.' },
  { q: 'How can Testlify assist me in my allyship journey?', a: 'We provide resources and support, regardless of where you are on your allyship path.' },
  { q: 'How does Testlify amplify diverse perspectives?', a: 'We showcase minority-owned businesses, female founders, and BIPOC leaders through various channels.' },
];

const ctaTicks = ['7-day free trial', 'Unlimited assessments', 'Cancel anytime'];

const Check = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#F23F44" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
);

function SplitSection({ s }: { s: Split }) {
  return (
    <section className={('tsd-sec ' + s.bgClass).trim()}>
      <div className="tsdw">
        <div className={('tsd-grid2 ' + (s.flip ? 'tsd-flip' : '')).trim()}>
          <div className="tsd-copy reveal">
            <h2 className="tsd-h2">{s.h2}</h2>
            {s.body.map((para, pi) => (<p className="tsd-p" key={pi}>{para}</p>))}
          </div>
          <div className="tsd-media reveal">
            <div className="tsd-shot">
              <div className="tsd-shotimg" style={{ backgroundImage: `url("${s.img}")` }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function DiversityAndInclusionsPage() {
  const [open, setOpen] = useState<Record<number, boolean>>({});
  const toggle = (i: number) => setOpen((prev) => ({ ...prev, [i]: !prev[i] }));

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <SiteHeader announcement="Testlify AI is here — screen, interview & score candidates automatically." />

      <section className="tsd-hero" data-screen-label="Hero">
        <div className="tsdw tsd-hgrid">
          <div className="tsd-copy reveal">
            <div className="tsd-crumb">
              <Link href="/solution-index">Solutions</Link>
              <span>/</span>
              <span>Use case / Diversity &amp; inclusion</span>
            </div>
            <p className="eyebrow">Diversity &amp; inclusion<b>.</b></p>
            <h1 className="tsd-h1">Fostering <span className="tac">diversity and inclusion</span></h1>
            <p className="tsd-lead">We’re dedicated to building a company you’ll be proud to grow with. At Testlify, we understand the significance of diversity, inclusion, and belonging (DI&amp;B) and consider them essential to our mission, not mere add-ons.</p>
            <div className="tsd-stats">
              {stats.map((t) => (<span className="tsd-statc" key={t}>{t}</span>))}
            </div>
            <div className="tsd-ctas">
              <CtaButton label="Try for free" href="/pricing" variant="primary" size="md" icon="arrow" magnetic />
              <CtaButton label="Book a demo" href="#demo" variant="secondary" size="md" icon="play" />
            </div>
            <div className="tsd-ticks">
              <span className="tsd-tick"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#F23F44" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>No credit card required</span>
              <span className="tsd-tick"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#F23F44" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>7-day free trial</span>
            </div>
          </div>
          <div className="tsd-media reveal">
            <div className="dih-wrap">
              <div className="dih-card">
                <div className="dih-top">
                  <span className="dih-dot r"></span>
                  <span className="dih-dot y"></span>
                  <span className="dih-dot g"></span>
                  <span className="dih-file">blind-shortlist</span>
                  <span className="dih-live"><svg width="9" height="9" viewBox="0 0 24 24" fill="#1FA463"><circle cx="12" cy="12" r="12"></circle></svg>LIVE</span>
                </div>
                <div className="dih-note">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>Identities hidden — ranked on skills only
                </div>
                <div className="dih-list">
                  <div className="dih-row"><span className="dih-av a">A</span><div className="dih-ci"><span className="dih-nm">Candidate A<span className="dih-pill">Top match</span></span><span className="dih-role">Applied · Product Designer</span></div><span className="dih-sc"><span className="dih-scbar"><i style={{ ['--w']: '96%', animationDelay: '.15s' } as React.CSSProperties}></i></span><span className="dih-scv">96</span></span></div>
                  <div className="dih-row"><span className="dih-av b">B</span><div className="dih-ci"><span className="dih-nm">Candidate B</span><span className="dih-role">Applied · Product Designer</span></div><span className="dih-sc"><span className="dih-scbar"><i style={{ ['--w']: '91%', animationDelay: '.3s' } as React.CSSProperties}></i></span><span className="dih-scv">91</span></span></div>
                  <div className="dih-row"><span className="dih-av c">C</span><div className="dih-ci"><span className="dih-nm">Candidate C</span><span className="dih-role">Applied · Product Designer</span></div><span className="dih-sc"><span className="dih-scbar"><i style={{ ['--w']: '88%', animationDelay: '.45s' } as React.CSSProperties}></i></span><span className="dih-scv">88</span></span></div>
                  <div className="dih-row"><span className="dih-av d">D</span><div className="dih-ci"><span className="dih-nm">Candidate D</span><span className="dih-role">Applied · Product Designer</span></div><span className="dih-sc"><span className="dih-scbar"><i style={{ ['--w']: '84%', animationDelay: '.6s' } as React.CSSProperties}></i></span><span className="dih-scv">84</span></span></div>
                </div>
              </div>
              <div className="dih-badge b1"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>Bias removed</div>
              <div className="dih-badge b2"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>EEOC-defensible</div>
            </div>
          </div>
        </div>
      </section>

      {sections.map((s, i) => (<SplitSection s={s} key={i} />))}

      <section className="tsd-sec tsd-sand">
        <div className="tsdw">
          <div className="tsd-shead reveal">
            <p className="eyebrow">Integrations<b>.</b></p>
            <h2 className="tsd-h2">Testlify integrates seamlessly with 100+ ATS tools</h2>
            <p className="tsd-lead">Native integrations with Workday, Greenhouse, Lever, iCIMS, and 97 more ATS platforms — no middleware, no data mapping required.</p>
          </div>
          <div className="itats-grid reveal">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <div className="itats-tile"><img src="https://testlify.com/wp-content/uploads/2024/09/Workday_Inc.-Logo.wine_-1-2048x1365-2.png" alt="Workday" /></div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <div className="itats-tile"><img src="https://testlify.com/wp-content/uploads/2025/10/Successfactors-Logo-Vector.svg-.png" alt="SAP SuccessFactors" /></div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <div className="itats-tile"><img src="https://testlify.com/wp-content/uploads/2025/10/Lever_Employ_Logo_Horizontal_Turquoise_Black-300x43-1.png" alt="Lever" /></div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <div className="itats-tile"><img src="https://testlify.com/wp-content/uploads/2025/10/SR-SAP-Logo.svg" alt="SmartRecruiters" /></div>
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

      <SecuritySection
        eyebrow="Security"
        heading="Built to keep your organization secure"
        sub="Ensure the security of your recruitment data with top-tier admin management, enhanced security integrations, stringent data governance, comprehensive compliance audits, and strong privacy protections."
      />

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

      <section className="tsd-cta" id="demo">
        <div className="tsdw reveal">
          <p className="eyebrow" style={{ color: '#F76A6E' }}>Get started<b style={{ color: '#F23F44' }}>.</b></p>
          <h2 className="tsd-h2">Build a team that reflects the world.</h2>
          <p className="tsd-lead">Give every candidate a fair, skills-first shot — and find the talent traditional screening overlooks. Start free.</p>
          <div className="tsd-ctas">
            <CtaButton label="Try for free" href="/pricing" variant="primary" size="lg" icon="arrow" magnetic />
            <CtaButton label="Book a demo" href="#" variant="light" size="lg" icon="play" />
          </div>
          <div className="tsd-ticks">
            {ctaTicks.map((tk) => (
              <span className="tsd-tick" key={tk}><Check />{tk}</span>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
