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

const css = `
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
.tsd-stats{display:flex;gap:10px;flex-wrap:wrap;margin-top:26px;}
.tsd-statc{background:#fff;border:1px solid #F0E2E3;border-radius:999px;padding:8px 16px;font-size:13px;font-weight:600;color:#1A1014;box-shadow:0 8px 18px rgba(110,11,14,.06);}
.tsd-shot{background:#fff;border:1px solid #F0E2E3;border-radius:22px;padding:0;box-shadow:0 40px 90px rgba(110,11,14,.14);overflow:hidden;}
.tsd-shotimg{display:block;width:100%;height:360px;background-size:contain;background-repeat:no-repeat;background-position:center;background-color:#fff;border-radius:14px;}
.itats-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:16px;margin-top:44px;}
.itats-tile{background:#fff;border:1px solid #F0E2E3;border-radius:14px;height:84px;display:flex;align-items:center;justify-content:center;padding:18px;box-shadow:0 10px 22px rgba(110,11,14,.06);transition:transform .3s cubic-bezier(.2,.7,.3,1),border-color .3s,box-shadow .3s;}
.itats-tile:hover{transform:translateY(-4px);border-color:#FBD0D1;box-shadow:0 18px 34px rgba(110,11,14,.10);}
.itats-tile img{max-width:100%;max-height:38px;object-fit:contain;}
.itats-more{text-align:center;margin-top:34px;}
.itats-more a{display:inline-flex;align-items:center;gap:8px;color:#F23F44;font-weight:700;font-size:15.5px;text-decoration:none;}
@media(max-width:960px){.itats-grid{grid-template-columns:repeat(3,1fr);}}
@media(max-width:560px){.itats-grid{grid-template-columns:repeat(2,1fr);}}
.tsm-sec{background:#FBF3EE!important;}
.tsd-shot image-slot{display:block;width:100%;height:360px;border-radius:14px;overflow:hidden;}
.tsd-logos{margin-top:40px;}
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
.tsd-card{background:#fff;border:1px solid #F0E2E3;border-radius:18px;padding:28px 26px;transition:transform .3s cubic-bezier(.2,.7,.3,1),border-color .3s,box-shadow .3s;}
.tsd-card:hover{transform:translateY(-4px);border-color:#FBD0D1;box-shadow:0 16px 34px rgba(110,11,14,.10);}
.tsd-ic{width:44px;height:44px;border-radius:13px;background:#FFF0EF;color:#F23F44;display:flex;align-items:center;justify-content:center;margin-bottom:16px;}
.tsd-ct{font-size:17px;font-weight:700;margin:0;}
.tsd-cd{font-size:14px;line-height:1.6;color:#6C5A5D;margin:8px 0 0;}
.tsd-fgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:46px;}
.tsd-fcard{background:#fff;border:1px solid #F0E2E3;border-radius:16px;padding:26px 24px;transition:transform .3s cubic-bezier(.2,.7,.3,1),border-color .3s,box-shadow .3s;}
.tsd-fcard:hover{transform:translateY(-4px);border-color:#FBD0D1;box-shadow:0 16px 34px rgba(110,11,14,.10);}
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

const DEFAULT_ICON = 'M12 8v4l3 2M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0z';

type Bullet = { label: string; href?: string; desc?: string };
type Section =
  | {
      kind: 'split';
      num?: string;
      h2: string;
      body: string[];
      bullets?: Bullet[];
      cta?: { label: string; href: string };
      img?: string;
      shotBg?: string;
    }
  | {
      kind: 'cards';
      eyebrow: string;
      h2: string;
      intro?: string;
      cards: { title: string; desc: string; icon?: string }[];
    };

const sections: Section[] = [
  {
    kind: 'split',
    num: '1',
    h2: 'Hiring at scale just got faster, smarter, and more precise',
    body: [
      'Move applicants through screening automatically, without manual review of every resume. Testlify surfaces the candidates worth your time so your team focuses on the shortlist, not the pile.',
    ],
    bullets: [
      { label: 'Video and audio interviewing' },
      { label: '3,500+ technical & non-technical tests' },
      { label: 'Best-in-class proctoring' },
      { label: 'Auto-advance candidates by results' },
    ],
    cta: { label: 'View our test library', href: '/test-library' },
  },
  {
    kind: 'cards',
    eyebrow: 'Confidence at scale',
    h2: 'Hire candidates in bulk with confidence',
    intro: "Speed doesn't have to mean compromise. Every high-volume hire is backed by data.",
    cards: [
      { title: 'Powerful proctoring', icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z', desc: 'Snapshots, tab-switch and mouse tracking keep results trustworthy at any volume.' },
      { title: 'Diverse assessment types', icon: 'M12 2 2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5', desc: 'Combine cognitive, role-specific and behavioral tests in one flow.' },
      { title: 'Robust reporting & analytics', icon: 'M12 20V10M18 20V4M6 20v-4', desc: 'Spot bottlenecks, benchmark candidates and prove time-to-hire gains.' },
    ],
  },
  {
    kind: 'split',
    num: '2',
    h2: 'Attract top talent with a skills-first approach',
    body: [
      'Combine ready-made tests, your existing candidate pool or your own questionnaire. Candidates advance automatically based on results — so quality rises even as volume grows.',
    ],
    cta: { label: 'Try for free', href: '/pricing' },
  },
  {
    kind: 'split',
    num: '3',
    h2: 'One-stop solution for every hiring need',
    body: ['Automate repetitive tasks, centralize candidates and let analytics find where applicants drop off.'],
    bullets: [
      { label: 'Identify skills gaps early' },
      { label: 'Improve time-to-hire' },
      { label: 'Benchmark against a global pool' },
    ],
  },
];

const faqs = [
  { q: 'What is the best volume hiring software?', a: 'Testlify is built for volume hiring — automated screening, proctoring and analytics let you assess thousands of candidates in hours without losing quality.' },
  { q: 'What is volume hiring?', a: "Volume hiring (or bulk hiring) is filling many open roles quickly, often for seasonal, frontline or high-turnover positions where manual screening can't keep up." },
  { q: 'How do I hire for high-volume roles with Testlify?', a: 'Create a skills-based assessment, invite candidates in bulk, and let auto-advancement surface top performers for interview.' },
  { q: 'What is volume staffing?', a: 'Volume staffing is sourcing and placing large numbers of candidates at once — Testlify standardizes the screening step so every applicant is evaluated fairly.' },
  { q: 'Can I customize the tests?', a: 'Yes. Build your own questions, set duration and passing scores, and weight sections to match the role.' },
];

const atsLogos = [
  { src: 'https://testlify.com/wp-content/uploads/2024/09/Workday_Inc.-Logo.wine_-1-2048x1365-2.png', alt: 'Workday' },
  { src: 'https://testlify.com/wp-content/uploads/2025/10/Successfactors-Logo-Vector.svg-.png', alt: 'SAP SuccessFactors' },
  { src: 'https://testlify.com/wp-content/uploads/2025/10/Lever_Employ_Logo_Horizontal_Turquoise_Black-300x43-1.png', alt: 'Lever' },
  { src: 'https://testlify.com/wp-content/uploads/2025/10/SR-SAP-Logo.svg', alt: 'SmartRecruiters' },
  { src: 'https://testlify.com/wp-content/uploads/2025/10/681b1f74457e6f968fdaaa8d_MASTER_RECRUITEE_COLOUR_PREFERRED-LOGO-TO-USE-1024x313.png', alt: 'Recruitee' },
  { src: 'https://testlify.com/wp-content/uploads/2025/10/logo.svg', alt: 'UKG Pro Recruiting' },
  { src: 'https://testlify.com/wp-content/uploads/2024/09/BambooHR-Logo-1-2048x1152-2.png', alt: 'BambooHR' },
  { src: 'https://testlify.com/wp-content/uploads/2023/03/629a0bbcb04c5ae587c411c2-1-1.png', alt: 'Greenhouse' },
  { src: 'https://testlify.com/wp-content/uploads/2024/08/zoho-recruit-logo-1.png', alt: 'Zoho Recruit' },
  { src: 'https://testlify.com/wp-content/uploads/2025/10/JazzHR_Employ_Logo_Horizontal_Purple_Black-1024x131.png', alt: 'JazzHR' },
];

const slotPlaceholder: React.CSSProperties = {
  display: 'block',
  width: '100%',
  height: 360,
  borderRadius: 14,
  overflow: 'hidden',
  background: '#FBF3EE',
};

export default function Page() {
  const [open, setOpen] = useState<Record<number, boolean>>({});
  const toggle = (i: number) => setOpen((s) => ({ ...s, [i]: !s[i] }));

  // Background rhythm + flip mirror the design's renderVals() logic.
  let bgToggle = sections.length % 2 === 0;
  let sflip = false;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <SiteHeader announcement="Testlify AI is here — screen, interview & score candidates automatically." announcementCta="See what's new →" homeHref="/" />

      <section className="tsd-hero">
        <div className="tsdw tsd-hgrid">
          <div className="tsd-copy reveal">
            <div className="tsd-crumb">
              <Link href="/solution-index">Solutions</Link>
              <span>/</span>
              <span>Use case / Volume hiring</span>
            </div>
            <p className="eyebrow">For high-volume hiring<b>.</b></p>
            <h1 className="tsd-h1">Bulk hiring made easy with Testlify&apos;s <span className="tac">volume hiring software</span></h1>
            <p className="tsd-lead">Overwhelmed with applications or need to fill roles fast? Screen high volumes accurately with AI-driven assessments that protect quality while saving you time.</p>
            <div className="tsd-stats">
              <span className="tsd-statc">Up to 75% less screening time</span>
              <span className="tsd-statc">Screen thousands in hours</span>
              <span className="tsd-statc">3,500+ validated tests</span>
            </div>
            <div className="tsd-ctas">
              <CtaButton label="Try for free" href="/pricing" variant="primary" size="md" icon="arrow" magnetic />
              <CtaButton label="Book a demo" href="/contact" variant="secondary" size="md" icon="play" />
            </div>
            <div className="tsd-ticks">
              <span className="tsd-tick">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#F23F44" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                No credit card required
              </span>
              <span className="tsd-tick">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#F23F44" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                7-day free trial
              </span>
            </div>
          </div>
          <div className="tsd-media reveal">
            <div className="tsd-shot" style={{ background: '#fff' }}>
              <svg viewBox="0 0 520 430" width="100%" style={{ display: 'block' }} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Freelancer shortlist ranked by verified skills">
                <rect x="0" y="0" width="520" height="430" fill="#FFF8F7" />
                <text x="38" y="52" fontFamily="Poppins,sans-serif" fontSize="18" fontWeight="700" fill="#1A1014">Candidate shortlist</text>
                <text x="38" y="74" fontFamily="Poppins,sans-serif" fontSize="12.5" fontWeight="500" fill="#8A7A7D">Ranked by verified skill score</text>
                <rect x="342" y="34" width="140" height="30" rx="15" fill="#FFF0EF" stroke="#FBD0D1" />
                <path d="M360 49l4 4 8-8" fill="none" stroke="#F23F44" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                <text x="380" y="53" fontFamily="Poppins,sans-serif" fontSize="11.5" fontWeight="700" fill="#F23F44">Skills verified</text>
                <g fontFamily="Poppins,sans-serif">
                  <rect x="32" y="96" width="456" height="92" rx="16" fill="#fff" stroke="#F0E2E3" strokeWidth="1" />
                  <circle cx="74" cy="142" r="22" fill="#F23F44" /><text x="74" y="148" textAnchor="middle" fontSize="15" fontWeight="700" fill="#fff">AR</text>
                  <text x="110" y="133" fontSize="14.5" fontWeight="700" fill="#1A1014">Ana Rossi</text>
                  <text x="110" y="152" fontSize="11.5" fill="#8A7A7D">Top-ranked candidate</text>
                  <rect x="110" y="162" width="150" height="7" rx="3.5" fill="#F0E2E3" /><rect x="110" y="162" width="142" height="7" rx="3.5" fill="#F23F44" />
                  <rect x="398" y="120" width="64" height="30" rx="9" fill="#1A1014" /><text x="430" y="140" textAnchor="middle" fontSize="15" fontWeight="800" fill="#fff">96</text>
                  <text x="430" y="167" textAnchor="middle" fontSize="10" fontWeight="700" fill="#F23F44">TOP MATCH</text>
                  <rect x="32" y="200" width="456" height="84" rx="16" fill="#fff" stroke="#F0E2E3" />
                  <circle cx="74" cy="242" r="22" fill="#FCE0DE" /><text x="74" y="248" textAnchor="middle" fontSize="15" fontWeight="700" fill="#A91E23">MK</text>
                  <text x="110" y="236" fontSize="14.5" fontWeight="700" fill="#1A1014">Marco Kim</text>
                  <text x="110" y="254" fontSize="11.5" fill="#8A7A7D">Strong match</text>
                  <rect x="110" y="263" width="150" height="7" rx="3.5" fill="#F0E2E3" /><rect x="110" y="263" width="128" height="7" rx="3.5" fill="#FF7A52" />
                  <rect x="406" y="226" width="56" height="28" rx="9" fill="#FFF0EF" /><text x="434" y="245" textAnchor="middle" fontSize="14" fontWeight="800" fill="#F23F44">91</text>
                  <rect x="32" y="296" width="456" height="84" rx="16" fill="#fff" stroke="#F0E2E3" />
                  <circle cx="74" cy="338" r="22" fill="#FCE0DE" /><text x="74" y="344" textAnchor="middle" fontSize="15" fontWeight="700" fill="#A91E23">JD</text>
                  <text x="110" y="332" fontSize="14.5" fontWeight="700" fill="#1A1014">Jade Dubois</text>
                  <text x="110" y="350" fontSize="11.5" fill="#8A7A7D">Qualified candidate</text>
                  <rect x="110" y="359" width="150" height="7" rx="3.5" fill="#F0E2E3" /><rect x="110" y="359" width="118" height="7" rx="3.5" fill="#FF7A52" />
                  <rect x="406" y="322" width="56" height="28" rx="9" fill="#FFF0EF" /><text x="434" y="341" textAnchor="middle" fontSize="14" fontWeight="800" fill="#F23F44">88</text>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {sections.map((s, i) => {
        const bgClass = bgToggle ? 'tsd-sand' : '';
        bgToggle = !bgToggle;

        if (s.kind === 'split') {
          const flipClass = sflip ? 'tsd-flip' : '';
          sflip = !sflip;
          const hasDesc = (s.bullets || []).some((b) => b.desc);
          const blClass = hasDesc ? 'tsd-bl tsd-bl1' : 'tsd-bl';
          const shotBg = s.shotBg || '#fff';
          return (
            <section className={`tsd-sec ${bgClass}`.trim()} key={i}>
              <div className="tsdw">
                <div className={`tsd-grid2 ${flipClass}`.trim()}>
                  <div className="tsd-copy reveal">
                    {s.num && <span className="tsd-num">{s.num}</span>}
                    <h2 className="tsd-h2">{s.h2}</h2>
                    {s.body.map((para, pi) => (
                      <p className="tsd-p" key={pi}>{para}</p>
                    ))}
                    {s.bullets && (
                      <div className={blClass}>
                        {s.bullets.map((b, bi) => (
                          <div className="tsd-bi" key={bi}>
                            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            <span className="tsd-bt">
                              {b.href ? <a href={b.href}>{b.label}</a> : b.label}
                              {b.desc && <span className="tsd-bd">{b.desc}</span>}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                    {s.cta && (
                      <Link className="tsd-link" href={s.cta.href}>
                        {s.cta.label}
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                      </Link>
                    )}
                  </div>
                  <div className="tsd-media reveal">
                    <div className="tsd-shot" style={{ background: shotBg }}>
                      {s.img ? (
                        <div className="tsd-shotimg" style={{ backgroundColor: shotBg, backgroundImage: `url("${s.img}")` }} />
                      ) : (
                        <div style={slotPlaceholder} />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        }

        // cards
        return (
          <section className={`tsd-sec ${bgClass}`.trim()} key={i}>
            <div className="tsdw">
              <div className="tsd-shead reveal">
                <p className="eyebrow">{s.eyebrow}<b>.</b></p>
                <h2 className="tsd-h2">{s.h2}</h2>
                {s.intro && <p className="tsd-lead">{s.intro}</p>}
              </div>
              <div className="tsd-cards reveal">
                {s.cards.map((c, ci) => (
                  <div className="tsd-card" key={ci}>
                    <div className="tsd-ic">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d={c.icon || DEFAULT_ICON}></path>
                      </svg>
                    </div>
                    <p className="tsd-ct">{c.title}</p>
                    <p className="tsd-cd">{c.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <section className="tsd-sec tsd-sand">
        <div className="tsdw">
          <div className="tsd-shead reveal">
            <p className="eyebrow">Integrations<b>.</b></p>
            <h2 className="tsd-h2">Testlify integrates seamlessly with 100+ ATS tools</h2>
            <p className="tsd-lead">Native integrations with Workday, Greenhouse, Lever, iCIMS, and 97 more ATS platforms — no middleware, no data mapping required.</p>
          </div>
          <div className="itats-grid reveal">
            {atsLogos.map((logo) => (
              <div className="itats-tile" key={logo.alt}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={logo.src} alt={logo.alt} />
              </div>
            ))}
          </div>
          <div className="itats-more reveal">
            <Link href="/integrations">
              View all ATS integrations
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </Link>
          </div>
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
            <h2 className="tsd-h2">Frequently asked questions</h2>
          </div>
          <div className="tsd-faqw">
            {faqs.map((f, i) => (
              <div className={`tsd-faq reveal ${open[i] ? 'tsd-open' : ''}`.trim()} onClick={() => toggle(i)} key={i}>
                <div className="tsd-faqq">
                  {f.q}
                  <span className="tsd-faqx">+</span>
                </div>
                <div className="tsd-faqa">{f.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Get started"
        heading="Cut through the noise. Hire with clarity."
        sub="Resumes don't tell you everything. Prove who can actually do the job — start screening at scale in minutes."
      />
      <SiteFooter />
    </>
  );
}
