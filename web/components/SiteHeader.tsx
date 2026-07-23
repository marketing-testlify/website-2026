'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

type SubItem = { label: string; d: string; href: string };
type Group = { name: string; cta: string; ctaLabel: string; subs: SubItem[] };

// Rewrite a design href to a Next.js route.
// - external / hash links pass through
// - any trust link -> /security
// - strip .dc.html, strip a leading "core-", core-home -> "/"
function rw(href: string): string {
  if (!href) return '#';
  if (href.startsWith('http') || href.startsWith('#') || href.startsWith('/')) return href;
  const trustPages = ['trust.dc.html', 'company-trust-center.dc.html', 'company-trust-compliances.dc.html'];
  if (trustPages.includes(href)) return '/security';
  let slug = href.replace(/\.dc\.html$/, '');
  if (slug === 'core-home') return '/';
  if (slug.startsWith('core-')) slug = slug.slice(5);
  return '/' + slug;
}

const SOL: Group[] = [
  {
    name: 'By industry type',
    cta: 'solution-industry-template.dc.html',
    ctaLabel: 'View all industries →',
    subs: [
      { label: 'Information & technology', d: 'Developers, DevOps, data & security', href: 'it-industry.dc.html' },
      { label: 'Logistics & supply chain', d: 'Ops, warehouse & driver roles', href: 'logistics-supply-chain-industry.dc.html' },
      { label: 'Retail', d: 'High-volume frontline hiring', href: 'retail-industry.dc.html' },
      { label: 'Recruitment', d: 'Agency & in-house recruiters', href: 'recruitment-industry.dc.html' },
      { label: 'Financial', d: 'Analysts, ops & compliance', href: 'financial-industry.dc.html' },
      { label: 'SaaS', d: 'GTM, product & engineering', href: 'saas-industry.dc.html' },
      { label: 'Energy', d: 'Field, technical & safety roles', href: 'energy-industry.dc.html' },
      { label: 'Hospitality', d: 'Service & front-of-house teams', href: 'hospitality-industry.dc.html' },
      { label: 'Health care', d: 'Clinical & administrative screening', href: 'health-care-industry.dc.html' },
      { label: 'BPO', d: 'Multilingual, high-ramp hiring', href: 'bpo-industry.dc.html' },
      { label: 'Edtech', d: 'Educators & product teams', href: 'edtech-industry.dc.html' },
      { label: 'Real estate', d: 'Sales, ops & support roles', href: 'real-estate-industry.dc.html' },
      { label: 'Media', d: 'Creative, editorial & production', href: 'media-industry.dc.html' },
    ],
  },
  {
    name: 'By use case',
    cta: 'solution-usecase-template.dc.html',
    ctaLabel: 'View all use cases →',
    subs: [
      { label: 'Lateral hiring', d: 'Experienced, role-specific hires', href: 'lateral-hiring.dc.html' },
      { label: 'Diversity and inclusion', d: 'Bias-free, EEOC-defensible screening', href: 'diversity-and-inclusions.dc.html' },
      { label: 'Volume hiring', d: 'Screen thousands in hours', href: 'volume-hiring.dc.html' },
      { label: 'Remote hiring', d: 'Hire anywhere with proctoring', href: 'remote-hiring.dc.html' },
      { label: 'Blue collar hiring', d: 'Practical, on-the-job skills', href: 'blue-collar-hiring.dc.html' },
      { label: 'Freelance hiring', d: 'Vet contractors fast', href: 'freelance-hiring.dc.html' },
      { label: 'Campus hiring', d: 'Rank graduates without resumes', href: 'campus-hiring.dc.html' },
      { label: 'Technical hiring', d: '45+ coding languages, live IDE', href: 'technical-hiring.dc.html' },
      { label: 'Sales hiring', d: 'Role-plays & sales aptitude', href: 'sales-hiring.dc.html' },
      { label: 'Skills validation', d: 'Verify skills at scale', href: 'skills-validation.dc.html' },
    ],
  },
  {
    name: 'By test type',
    cta: 'solution-testtype-template.dc.html',
    ctaLabel: 'View all test types →',
    subs: [
      { label: 'Role specific', d: '4,500+ job-specific assessments', href: 'role-specific-tests.dc.html' },
      { label: 'Language', d: 'Proficiency across 16+ languages', href: 'language-tests.dc.html' },
      { label: 'Programming', d: 'Real-world dev challenges', href: 'coding-tests.dc.html' },
      { label: 'Software skills', d: 'Tools & platform proficiency', href: 'software-skills-tests.dc.html' },
      { label: 'Personality & culture', d: 'Work style & culture fit', href: 'psychometric-tests.dc.html' },
      { label: 'Cognitive ability', d: 'Reasoning & problem-solving', href: 'cognitive-ability-tests.dc.html' },
      { label: 'Situational judgment', d: 'Real scenario decisions', href: 'situational-judgment.dc.html' },
      { label: 'CEFR', d: 'Standardised language levels', href: 'cefr-test.dc.html' },
      { label: 'Typing', d: 'Speed & accuracy', href: 'typing-test.dc.html' },
      { label: 'Coding', d: 'Live coding, 45+ languages', href: 'coding-tests.dc.html' },
      { label: 'Engineering', d: 'Applied engineering skills', href: 'engineering-skills.dc.html' },
      { label: 'Process knowledge', d: 'SOP & workflow competence', href: 'process-knowledge-tests.dc.html' },
    ],
  },
  {
    name: 'By company type',
    cta: 'solution-company-template.dc.html',
    ctaLabel: 'View all company types →',
    subs: [
      { label: 'For startups', d: 'Hire fast without a TA team', href: 'for-startups.dc.html' },
      { label: "SMB's", d: 'Standardize hiring as you scale', href: 'small-medium-businesses.dc.html' },
      { label: 'Enterprises', d: 'SSO, compliance & audit trails', href: 'enterprise.dc.html' },
      { label: 'Non-profits', d: 'Fair, defensible selection', href: 'non-profits.dc.html' },
      { label: 'Public sector', d: 'Transparent, auditable hiring', href: 'public-sector-talent-assessment-solution.dc.html' },
    ],
  },
];

const RES: Group[] = [
  {
    name: 'Learn',
    cta: 'blog.dc.html',
    ctaLabel: 'Visit the blog →',
    subs: [
      { label: 'Blogs', d: 'Hiring science, playbooks & news', href: 'blog.dc.html' },
      { label: 'Hiring guides', d: 'Deep dives on skills-based hiring', href: 'hiring-guides.dc.html' },
      { label: 'HR glossary', d: '500+ hiring terms, defined', href: 'hr-glossary.dc.html' },
      { label: 'Ebooks', d: 'Downloadable playbooks & reports', href: 'knowledge-base.dc.html' },
      { label: 'Podcasts', d: 'Conversations with talent leaders', href: 'podcast.dc.html' },
      { label: 'Customer success stories', d: 'How 1,500+ teams hire on proof', href: 'customer-success-stories.dc.html' },
      { label: 'Job description templates', d: 'Role-ready JDs in minutes', href: 'job-description-templates.dc.html' },
      { label: 'Competitors', d: 'How Testlify compares', href: 'alternatives.dc.html' },
      { label: 'Sitemap', d: 'Every page, in one place', href: 'sitemap.dc.html' },
    ],
  },
  {
    name: 'HR tools',
    cta: 'hr-tools.dc.html',
    ctaLabel: 'All HR tools →',
    subs: [
      { label: 'AI Interview question generator', d: 'Generate role-ready questions', href: 'ai-interview-question-generator.dc.html' },
      { label: 'AI Job description generator', d: 'Draft JDs in seconds', href: 'job-description-generator.dc.html' },
      { label: 'Cost per hire calculator', d: '', href: 'cost-per-hire-calculator.dc.html' },
      { label: 'Attrition rate calculator', d: '', href: 'attrition-rate-calculator.dc.html' },
      { label: 'Employee NPS calculator', d: '', href: 'free-employee-net-promoter-score-enps-calculator.dc.html' },
      { label: 'Applicant funnel calculator', d: '', href: 'applicant-funnel-calculator.dc.html' },
      { label: 'Average Time to Hire', d: '', href: 'average-time-to-hire-calculator.dc.html' },
      { label: 'Employee turnover', d: '', href: 'cost-of-employee-turnover-calculator.dc.html' },
      { label: 'Sourcing channel efficiency', d: '', href: 'sourcing-channel-efficiency-calculator.dc.html' },
      { label: 'Remote work cost savings', d: '', href: 'remote-work-cost-savings-calculator.dc.html' },
      { label: 'Quality of hire calculator', d: '', href: 'quality-of-hire-calculator.dc.html' },
      { label: 'Interview-to-hire offer', d: '', href: 'interview-to-offer-ratio-calculator.dc.html' },
      { label: 'Recruiting conversion rate', d: '', href: 'recruiting-conversion-rate-calculator.dc.html' },
      { label: 'Job offer acceptance rate', d: '', href: 'job-offer-acceptance-rate-calculator.dc.html' },
      { label: 'Hiring manager satisfaction', d: '', href: 'hiring-manager-satisfaction-calculator.dc.html' },
    ],
  },
  {
    name: 'Programs',
    cta: 'referral-program.dc.html',
    ctaLabel: 'All programs →',
    subs: [
      { label: 'Referral program', d: 'Refer a team, earn rewards', href: 'referral-program.dc.html' },
      { label: 'Partnership program', d: 'Grow with Testlify', href: 'partnership.dc.html' },
      { label: 'Integration program', d: 'Build on the Testlify API', href: 'integration-program.dc.html' },
    ],
  },
];

const CARET = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

const CSS = `
.sh,.sh *{box-sizing:border-box;font-family:'Poppins',sans-serif;}
.sh a{text-decoration:none;}
.sh-fixed{position:fixed;top:0;left:0;right:0;}
.sh-sticky{position:sticky;top:0;}
.sh{z-index:300;transition:background .35s ease, box-shadow .35s ease;border-bottom:1px solid transparent;}
.sh.solid{background:rgba(255,255,255,.9);backdrop-filter:saturate(180%) blur(14px);box-shadow:0 8px 30px rgba(110,11,14,.07);border-bottom-color:rgba(242,63,68,.10);}
.ribbon{background:#1A1014;color:#D8C9CC;overflow:hidden;max-height:46px;transition:max-height .35s ease, opacity .25s ease;opacity:1;}
.sh.collapsed .ribbon{max-height:0;opacity:0;}
.ribbon-inner{max-width:1240px;margin:0 auto;padding:0 28px;height:46px;display:flex;align-items:center;justify-content:space-between;gap:18px;font-size:13px;}
.ribann{display:flex;align-items:center;gap:11px;min-width:0;}
.ribann .rpill{flex:none;font-size:10.5px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#fff;background:#F23F44;padding:3px 9px;border-radius:100px;}
.ribann p{margin:0;color:#E7DADD;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
.ribann a{color:#fff;font-weight:600;border-bottom:1px solid rgba(255,255,255,.35);padding-bottom:1px;white-space:nowrap;}
.ribann a:hover{border-bottom-color:#fff;}
.ributil{display:flex;align-items:center;gap:2px;flex:none;}
.rlink{display:inline-flex;align-items:center;gap:6px;color:#C2B1B5;padding:6px 12px;border-radius:8px;font-weight:500;transition:color .18s, background .18s;white-space:nowrap;}
.rlink:hover{color:#fff;background:rgba(255,255,255,.07);}
.rlink svg{opacity:.75;}
.rdiv{width:1px;height:15px;background:rgba(255,255,255,.14);margin:0 4px;}
.sh-bar{max-width:1240px;margin:0 auto;padding:16px 28px;display:flex;align-items:center;gap:30px;}
.sh-logo{display:flex;align-items:center;}
.sh-logo img{height:22px;width:auto;display:block;}
.nav-links{display:flex;align-items:center;gap:18px;margin-left:6px;}
.nl{color:#46383C;font-weight:500;font-size:15px;transition:color .2s;}
.nl:hover{color:#F23F44;}
.navitem{position:relative;}
.navtrigger{display:inline-flex;align-items:center;gap:6px;color:#46383C;font-weight:500;font-size:15px;cursor:pointer;background:none;border:0;font-family:inherit;padding:6px 2px;transition:color .2s;}
.navitem:hover .navtrigger{color:#F23F44;}
.navcar{font-size:8px;opacity:.6;transition:transform .25s ease;}
.navitem:hover .navcar{transform:rotate(180deg);}
.mega{position:absolute;top:calc(100% + 14px);left:0;background:#fff;border:1px solid #F4E4E5;border-radius:18px;padding:18px;box-shadow:0 30px 70px rgba(110,11,14,.16);opacity:0;visibility:hidden;transform:translateY(8px);transition:opacity .2s ease, transform .2s ease;z-index:60;}
.mega::before{content:"";position:absolute;top:-14px;left:0;right:0;height:14px;}
.navitem:hover .mega{opacity:1;visibility:visible;transform:translateY(0);}
.mega.mctr{left:50%;transform:translate(-50%,8px);}
.navitem:hover .mega.mctr{transform:translate(-50%,0);}
.mega.mend{left:auto;right:0;}
.megacols{display:flex;gap:20px;}
.megacol{min-width:178px;}
.megacol-w{min-width:236px;}
.megah{font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#B59A9D;margin:2px 0 8px;padding:0 10px;}
.megalink{display:block;font-size:14px;font-weight:500;color:#2A1A1D;padding:9px 10px;border-radius:9px;white-space:nowrap;transition:background .15s, color .15s;}
.megalink:hover{background:#FFF0F0;color:#F23F44;}
.mlrich{display:flex;align-items:flex-start;gap:11px;padding:9px 10px;border-radius:11px;transition:background .15s;}
.mlrich:hover{background:#FFF4F3;}
.mlic{flex:none;width:34px;height:34px;border-radius:9px;background:#FFF0F0;color:#F23F44;display:flex;align-items:center;justify-content:center;margin-top:1px;}
.mlt{display:block;font-size:14px;font-weight:600;color:#1A1014;line-height:1.25;}
.mld{display:block;font-size:12px;color:#9A878A;line-height:1.35;margin-top:2px;white-space:normal;}
.megafeat{width:216px;background:linear-gradient(150deg,#FFF1F0,#FFE7E4);border-radius:14px;padding:18px;display:flex;flex-direction:column;justify-content:center;gap:7px;}
.megafeat-t{font-size:15px;font-weight:700;color:#1A0E10;margin:0;}
.megafeat-d{font-size:12.5px;color:#6B4F52;margin:0;line-height:1.45;}
.megafeat-a{font-size:13px;font-weight:700;color:#F23F44;margin-top:4px;}
.sh-right{margin-left:auto;display:flex;align-items:center;gap:18px;}
.hdr-login{color:#46383C;font-weight:600;font-size:15px;transition:color .2s;}
.hdr-login:hover{color:#F23F44;}
.btnsheen{position:relative;overflow:hidden;}
.btnsheen::after{content:"";position:absolute;top:0;left:0;width:38%;height:100%;background:linear-gradient(100deg,transparent,rgba(255,255,255,.5),transparent);transform:translateX(-130%) skewX(-18deg);}
.btnsheen:hover::after{animation:shsheen 1.05s ease;}
@keyframes shsheen{0%{transform:translateX(-130%) skewX(-18deg)}55%,100%{transform:translateX(260%) skewX(-18deg)}}
.hdr-cta{display:inline-flex;align-items:center;gap:7px;background:#F23F44 !important;color:#fff !important;font-weight:600;font-size:15px;padding:11px 22px;border-radius:13px;box-shadow:0 10px 22px rgba(242,63,68,.32);transition:transform .25s ease, box-shadow .25s ease;}
.hdr-cta:hover{transform:translateY(-2px);box-shadow:0 14px 30px rgba(242,63,68,.42);}
.navtoggle{display:none;width:44px;height:44px;border:1px solid #F0E0E1;border-radius:12px;background:#fff;align-items:center;justify-content:center;cursor:pointer;color:#1A1014;flex:none;}
.mobscrim{position:fixed;inset:0;background:rgba(20,8,10,.44);z-index:1190;opacity:0;visibility:hidden;transition:opacity .3s,visibility .3s;}
.mobscrim.open{opacity:1;visibility:visible;}
.mobnav{position:fixed;top:0;right:0;bottom:0;width:min(84vw,360px);background:#fff;box-shadow:-22px 0 60px rgba(80,20,30,.20);z-index:1200;transform:translateX(105%);transition:transform .34s cubic-bezier(.2,.7,.2,1);padding:74px 26px 30px;overflow-y:auto;-webkit-overflow-scrolling:touch;}
.mobnav.open{transform:translateX(0);}
.moblink{display:block;font-size:18px;font-weight:600;color:#1A1014;padding:15px 6px;border-bottom:1px solid #F4E8E9;}
.moblink:hover{color:#F23F44;}
.mobclose{position:absolute;top:20px;right:22px;width:42px;height:42px;border:none;background:#FAF0F0;border-radius:11px;font-size:20px;color:#1A1014;cursor:pointer;line-height:1;}
.mobsub{display:block;font-size:12px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#B59A9D;margin:22px 6px 4px;}
.mobcta{display:block;text-align:center;background:#F23F44 !important;color:#fff !important;font-weight:700;font-size:16px;padding:15px;border-radius:13px;margin-top:22px;box-shadow:0 12px 26px rgba(242,63,68,.3);}
.mobacc{border-bottom:1px solid #F4E8E9;}
.mobacc-t{display:flex;align-items:center;justify-content:space-between;width:100%;background:none;border:0;font-family:inherit;font-size:18px;font-weight:600;color:#1A1014;padding:15px 6px;cursor:pointer;text-align:left;}
.mobacc-t .cv{width:22px;height:22px;display:flex;align-items:center;justify-content:center;color:#B59A9D;transition:transform .28s;flex:none;}
.mobacc.open .mobacc-t{color:#F23F44;}
.mobacc.open .mobacc-t .cv{transform:rotate(180deg);color:#F23F44;}
.mobacc-p{max-height:0;overflow:hidden;transition:max-height .36s cubic-bezier(.4,0,.2,1);}
.mobacc.open .mobacc-p{max-height:3200px;}
.mobacc2{border-top:1px solid #F4E8E9;}
.mobacc-sub .mobacc2:first-child{border-top:0;}
.mobacc2-t{display:flex;align-items:center;justify-content:space-between;width:100%;background:none;border:0;font-family:inherit;font-size:15px;font-weight:700;color:#1A1014;padding:13px 12px;cursor:pointer;text-align:left;}
.mobacc2-t .cv2{width:18px;height:18px;color:#C9AEB1;transition:transform .26s;flex:none;display:flex;align-items:center;justify-content:center;}
.mobacc2.open .mobacc2-t{color:#F23F44;}
.mobacc2.open .mobacc2-t .cv2{transform:rotate(180deg);color:#F23F44;}
.mobacc2-p{max-height:0;overflow:hidden;transition:max-height .3s cubic-bezier(.4,0,.2,1);}
.mobacc2.open .mobacc2-p{max-height:1200px;}
.mobacc2-p .mobacc-link{padding-left:22px;}
.mobacc-sub{display:flex;flex-direction:column;gap:2px;padding:2px 4px 14px;}
.mobacc-link{display:flex;flex-direction:column;gap:1px;padding:10px 12px;border-radius:11px;}
.mobacc-link:hover,.mobacc-link:active{background:#FCF0F0;}
.mobacc-link .mt{font-size:15px;font-weight:600;color:#1A1014;}
.mobacc-link .md{font-size:12.5px;color:#8A7A7D;line-height:1.4;}
@media(max-width:1080px){.ribann p{display:none;}}
@media(max-width:900px){.nav-links{display:none;}.navtoggle{display:inline-flex;}}
@media(min-width:901px){.mobnav,.mobscrim{display:none;}}
@media(max-width:720px){.rlink span.rtxt{display:none;}.rdiv{margin:0 1px;}}
@media(max-width:560px){.hdr-login{display:none;}}
.ptwo{display:flex;gap:0;}
.plist{display:flex;flex-direction:column;gap:2px;min-width:250px;border-right:1px solid #F4E4E5;padding-right:12px;margin-right:14px;}
.mlrich.on{background:#FFF4F3;}
.ppane{display:block;column-count:2;column-gap:14px;width:560px;min-width:560px;padding-top:2px;margin-right:6px;}
.ppane::-webkit-scrollbar{width:6px;}.ppane::-webkit-scrollbar-thumb{background:#EAD6D8;border-radius:8px;}
.psub{break-inside:avoid;-webkit-column-break-inside:avoid;}
.psub{display:flex;flex-direction:column;gap:1px;padding:8px 12px;border-radius:10px;transition:background .15s;}
.psub:hover{background:#FFF0F0;}
.ppane-cta{margin-top:4px;font-size:13px;font-weight:700;color:#F23F44;padding:8px 12px;}
.ppane-cta:hover{color:#A91E23;}
.magrid{display:flex;gap:16px;}
.macc{width:530px;display:flex;flex-direction:column;gap:2px;}
.maccitem{border-radius:12px;}
.maccbtn{display:flex;align-items:center;gap:11px;width:100%;background:none;border:0;font-family:inherit;cursor:pointer;padding:10px 12px;border-radius:12px;text-align:left;transition:background .15s;}
.maccbtn:hover{background:#FFF4F3;}
.maccitem.on .maccbtn{background:#FFF0F0;}
.maccbtn .macctx{display:flex;flex-direction:column;min-width:0;}
.maccbtn .macctx .mlt{font-size:14px;font-weight:600;color:#1A1014;line-height:1.25;}
.maccbtn .macctx .mld{font-size:12px;color:#9A878A;line-height:1.35;margin-top:1px;}
.macccv{margin-left:auto;color:#B59A9D;display:flex;flex:none;transition:transform .28s;}
.maccitem.on .macccv{transform:rotate(180deg);color:#F23F44;}
.maccp{max-height:0;overflow:hidden;transition:max-height .34s cubic-bezier(.4,0,.2,1);}
.maccitem.on .maccp{max-height:660px;}
.maccp-inner{display:grid;grid-template-columns:1fr 1fr;gap:1px 8px;padding:4px 8px 4px 53px;}
.maccp .ppane-cta{padding-left:53px;}

h1,h2,h3,h4,.h1,.h2,.h3,.hero h1,.eyebrow{text-wrap:balance;}p,li,.body,.lead,.sub,figcaption,blockquote{text-wrap:pretty;}/*om-balance-rule*/
`;

type Props = {
  announcement?: string;
  announcementCta?: string;
  announcementHref?: string;
  homeHref?: string;
  overlay?: boolean;
  ctaLabel?: string;
  ctaHref?: string;
  loginHref?: string;
  contactHref?: string;
};

export default function SiteHeader({
  announcement = 'Testlify AI is here — screen, interview & score candidates automatically.',
  announcementCta = "See what's new →",
  announcementHref = '#demo',
  homeHref = 'core-home.dc.html',
  overlay = false,
  ctaLabel = 'Try for free',
  ctaHref = 'pricing.dc.html',
  loginHref = '#',
  contactHref = 'contact.dc.html',
}: Props) {
  const rootRef = useRef<HTMLElement>(null);
  const spacerRef = useRef<HTMLDivElement>(null);
  const [mobOpen, setMobOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [solAcc, setSolAcc] = useState(0);
  const [resAcc, setResAcc] = useState(0);
  const [mobExp, setMobExp] = useState('');

  useEffect(() => {
    const syncSpacer = () => {
      const sp = spacerRef.current;
      const root = rootRef.current;
      if (!sp || !root) return;
      sp.style.height = overlay ? '0px' : root.offsetHeight + 'px';
    };
    let spTO: ReturnType<typeof setTimeout>;
    const onScroll = () => {
      setScrolled(window.scrollY > 18);
      syncSpacer();
      clearTimeout(spTO);
      spTO = setTimeout(syncSpacer, 400);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', syncSpacer);
    onScroll();
    const timers = [60, 250, 600].map((t) => setTimeout(syncSpacer, t));
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', syncSpacer);
      clearTimeout(spTO);
      timers.forEach(clearTimeout);
    };
  }, [overlay]);

  const posClass = 'sh-fixed';
  const solidClass =
    (overlay ? (scrolled ? 'solid collapsed' : '') : 'solid') + (scrolled ? ' collapsed' : '');
  const mobOpenCls = mobOpen ? 'open' : '';

  const solActive = SOL[solAcc] ?? SOL[0];
  const resActive = RES[resAcc] ?? RES[0];
  const closeMob = () => {
    setMobOpen(false);
    setMobExp('');
  };
  const toggle = (k: string) => setMobExp((e) => (e === k ? '' : k));

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <header ref={rootRef} className={`sh ${posClass} ${solidClass}`}>
        <div className="ribbon">
          <div className="ribbon-inner">
            <div className="ribann">
              <span className="rpill">New</span>
              <p>
                {announcement} <a href={rw(announcementHref)}>{announcementCta}</a>
              </p>
            </div>
            <div className="ributil">
              <a className="rlink" href={rw(contactHref)}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
                <span className="rtxt">EN</span>
              </a>
              <span className="rdiv"></span>
              <a className="rlink" href={rw(contactHref)}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22 6 12 13 2 6"></polyline>
                </svg>
                <span className="rtxt">Contact sales</span>
              </a>
            </div>
          </div>
        </div>
        <div className="sh-bar">
          <Link className="sh-logo" href={rw(homeHref)} aria-label="Testlify home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brand/testlify-logo-main.svg" alt="Testlify" />
          </Link>
          <nav className="nav-links" aria-label="Primary">
            {/* Product */}
            <div className="navitem">
              <button className="navtrigger">
                Product<span className="navcar">▼</span>
              </button>
              <div className="mega">
                <div className="megacols">
                  <div className="megacol megacol-w" style={{ borderRight: '1px solid #F4E4E5', paddingRight: '14px' }}>
                    <a className="mlrich" href={rw('ai-powered-talent-assessment-platform.dc.html')}>
                      <span className="mlic">
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l1.6 5.4L19 9l-5.4 1.6L12 16l-1.6-5.4L5 9l5.4-1.6z"></path></svg>
                      </span>
                      <span><span className="mlt">Testlify AI</span><span className="mld">The full hiring platform, end to end</span></span>
                    </a>
                    <a className="mlrich" href={rw('ai-resume-screener.dc.html')}>
                      <span className="mlic">
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
                      </span>
                      <span><span className="mlt">AI resume screener</span><span className="mld">Rank applicants by verified fit in seconds</span></span>
                    </a>
                    <a className="mlrich" href={rw('features.dc.html')}>
                      <span className="mlic">
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                      </span>
                      <span><span className="mlt">Features</span><span className="mld">Question types, proctoring, analytics &amp; API</span></span>
                    </a>
                    <a className="mlrich" href={rw('video-interviewing-tool.dc.html')}>
                      <span className="mlic">
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2"></rect></svg>
                      </span>
                      <span><span className="mlt">Video interviewing</span><span className="mld">One-way &amp; live two-way interviews</span></span>
                    </a>
                  </div>
                  <div className="megacol megacol-w">
                    <a className="mlrich" href={rw('science.dc.html')}>
                      <span className="mlic">
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 3v6l-5 9a2 2 0 0 0 2 3h12a2 2 0 0 0 2-3l-5-9V3"></path><path d="M8 3h8"></path></svg>
                      </span>
                      <span><span className="mlt">Science behind tests</span><span className="mld">Validity, reliability &amp; fairness</span></span>
                    </a>
                    <a className="mlrich" href={rw('demo.dc.html')}>
                      <span className="mlic">
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
                      </span>
                      <span><span className="mlt">Live product demo</span><span className="mld">See the full workflow, end to end</span></span>
                    </a>
                    <a className="mlrich" href="https://roadmap.testlify.com/" target="_blank" rel="noopener">
                      <span className="mlic">
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line></svg>
                      </span>
                      <span><span className="mlt">Roadmap</span><span className="mld">See what we&apos;re building next</span></span>
                    </a>
                    <a className="mlrich" href={rw('integrations.dc.html')}>
                      <span className="mlic">
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.5 1.5"></path><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7L12 19"></path></svg>
                      </span>
                      <span><span className="mlt">ATS integrations</span><span className="mld">Native two-way sync with 100+ ATS tools</span></span>
                    </a>
                  </div>
                  <div className="megafeat">
                    <p className="megafeat-t">New · Testlify AI</p>
                    <p className="megafeat-d">Screen, interview and score candidates automatically with conversational AI.</p>
                    <a className="megafeat-a" href={rw('ai-powered-talent-assessment-platform.dc.html')}>Explore Testlify AI →</a>
                  </div>
                </div>
              </div>
            </div>
            <a href={rw('test-library.dc.html')} className="nl">Test library</a>
            <a href={rw('interviews.dc.html')} className="nl">Interviews</a>
            <a href={rw('pricing.dc.html')} className="nl">Pricing</a>
            {/* Solutions */}
            <div className="navitem">
              <button className="navtrigger">
                Solutions<span className="navcar">▼</span>
              </button>
              <div className="mega mctr">
                <div className="ptwo">
                  <div className="plist">
                    {[
                      { i: 0, t: 'By industry type', d: 'IT, SaaS, finance, healthcare & more', icon: <><path d="M3 21h18"></path><path d="M5 21V7l8-4v18"></path><path d="M19 21V11l-6-4"></path></> },
                      { i: 1, t: 'By use case', d: 'Volume, remote, campus, technical & more', icon: <><path d="M12 2l10 5-10 5L2 7z"></path><path d="M2 12l10 5 10-5"></path><path d="M2 17l10 5 10-5"></path></> },
                      { i: 2, t: 'By test type', d: 'Coding, cognitive, personality & more', icon: <><path d="M9 11l3 3L22 4"></path><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></> },
                      { i: 3, t: 'By company type', d: 'Startup to enterprise & public sector', icon: <><line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line></> },
                    ].map((it) => (
                      <div key={it.i} className={`mlrich ${solAcc === it.i ? 'on' : ''}`} onMouseEnter={() => setSolAcc(it.i)}>
                        <span className="mlic">
                          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{it.icon}</svg>
                        </span>
                        <span><span className="mlt">{it.t}</span><span className="mld">{it.d}</span></span>
                      </div>
                    ))}
                  </div>
                  <div className="ppane">
                    {solActive.subs.map((s, idx) => (
                      <a key={idx} className="psub" href={rw(s.href)}>
                        <span className="mlt">{s.label}</span>
                        <span className="mld">{s.d}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* Resources */}
            <div className="navitem">
              <button className="navtrigger">
                Resources<span className="navcar">▼</span>
              </button>
              <div className="mega mctr">
                <div className="ptwo">
                  <div className="plist">
                    {[
                      { i: 0, t: 'Learn', d: 'Blog, guides, glossary & podcast', icon: <><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></> },
                      { i: 1, t: 'HR tools', d: 'AI generators & 13 calculators', icon: <><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></> },
                      { i: 2, t: 'Programs', d: 'Referral, partnership & integrations', icon: <><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></> },
                    ].map((it) => (
                      <div key={it.i} className={`mlrich ${resAcc === it.i ? 'on' : ''}`} onMouseEnter={() => setResAcc(it.i)}>
                        <span className="mlic">
                          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{it.icon}</svg>
                        </span>
                        <span><span className="mlt">{it.t}</span><span className="mld">{it.d}</span></span>
                      </div>
                    ))}
                  </div>
                  <div className="ppane">
                    {resActive.subs.map((s, idx) => (
                      <a key={idx} className="psub" href={rw(s.href)}>
                        <span className="mlt">{s.label}</span>
                        <span className="mld">{s.d}</span>
                      </a>
                    ))}
                    <a className="ppane-cta" href={rw(resActive.cta)}>{resActive.ctaLabel}</a>
                  </div>
                </div>
              </div>
            </div>
            {/* About */}
            <div className="navitem">
              <button className="navtrigger">
                About<span className="navcar">▼</span>
              </button>
              <div className="mega mend">
                <div className="megacols">
                  <div className="megacol megacol-w" style={{ borderRight: '1px solid #F4E4E5', paddingRight: '14px' }}>
                    <a className="mlrich" href={rw('about.dc.html')}>
                      <span className="mlic"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg></span>
                      <span><span className="mlt">Our story</span><span className="mld">Why we built Testlify</span></span>
                    </a>
                    <a className="mlrich" href={rw('contact.dc.html')}>
                      <span className="mlic"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8z"></path></svg></span>
                      <span><span className="mlt">Contact us</span><span className="mld">Talk to sales or support</span></span>
                    </a>
                    <a className="mlrich" href={rw('our-leadership.dc.html')}>
                      <span className="mlic"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg></span>
                      <span><span className="mlt">Our leadership</span><span className="mld">The team behind Testlify</span></span>
                    </a>
                    <a className="mlrich" href="/security">
                      <span className="mlic"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg></span>
                      <span><span className="mlt">Trust center</span><span className="mld">SOC 2, ISO 27001, GDPR</span></span>
                    </a>
                  </div>
                  <div className="megacol megacol-w">
                    <a className="mlrich" href={rw('clients.dc.html')}>
                      <span className="mlic"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></span>
                      <span><span className="mlt">Clients</span><span className="mld">Teams hiring with Testlify</span></span>
                    </a>
                    <a className="mlrich" href={rw('our-partners.dc.html')}>
                      <span className="mlic"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg></span>
                      <span><span className="mlt">Partners</span><span className="mld">Refer, resell or build with us</span></span>
                    </a>
                    <a className="mlrich" href={rw('job-openings.dc.html')}>
                      <span className="mlic"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"></rect><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"></path></svg></span>
                      <span><span className="mlt">Job openings</span><span className="mld">Join the team behind Testlify</span></span>
                    </a>
                    <a className="mlrich" href={rw('write-for-us.dc.html')}>
                      <span className="mlic"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4z"></path></svg></span>
                      <span><span className="mlt">Write for us</span><span className="mld">Contribute to the blog</span></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <div className="sh-right">
            <a href={rw(loginHref)} className="nl hdr-login">Login</a>
            <a href={rw(ctaHref)} className="btnsheen hdr-cta" style={{ color: '#fff' }}>
              {ctaLabel}
              <span style={{ fontSize: '18px', lineHeight: 1, color: '#fff' }}>→</span>
            </a>
            <button className="navtoggle" onClick={() => setMobOpen((o) => !o)} aria-label="Open menu">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </header>
      <div className="sh-spacer" ref={spacerRef}></div>
      <div className={`mobscrim ${mobOpenCls}`} onClick={closeMob}></div>
      <nav className={`mobnav ${mobOpenCls}`} aria-label="Mobile">
        <button className="mobclose" onClick={closeMob} aria-label="Close menu">✕</button>
        <a className="moblink" href={rw(homeHref)} onClick={closeMob}>Home</a>
        {/* Product accordion */}
        <div className={`mobacc ${mobExp === 'pro' ? 'open' : ''}`}>
          <button className="mobacc-t" onClick={() => toggle('pro')}>
            Product<span className="cv">{CARET}</span>
          </button>
          <div className="mobacc-p">
            <div className="mobacc-sub">
              <a className="mobacc-link" href={rw('ai-powered-talent-assessment-platform.dc.html')} onClick={closeMob}><span className="mt">Testlify AI</span><span className="md">The full hiring platform, end to end</span></a>
              <a className="mobacc-link" href={rw('ai-resume-screener.dc.html')} onClick={closeMob}><span className="mt">AI resume screener</span><span className="md">Rank applicants by verified fit in seconds</span></a>
              <a className="mobacc-link" href={rw('features.dc.html')} onClick={closeMob}><span className="mt">Features</span><span className="md">Question types, proctoring, analytics &amp; API</span></a>
              <a className="mobacc-link" href={rw('video-interviewing-tool.dc.html')} onClick={closeMob}><span className="mt">Video interviewing</span><span className="md">One-way &amp; live two-way interviews</span></a>
              <a className="mobacc-link" href={rw('science.dc.html')} onClick={closeMob}><span className="mt">Science behind tests</span><span className="md">Validity, reliability &amp; fairness</span></a>
              <a className="mobacc-link" href={rw('demo.dc.html')} onClick={closeMob}><span className="mt">Live product demo</span><span className="md">See the full workflow, end to end</span></a>
              <a className="mobacc-link" href="https://roadmap.testlify.com/" target="_blank" rel="noopener" onClick={closeMob}><span className="mt">Roadmap</span><span className="md">See what we&apos;re building next</span></a>
              <a className="mobacc-link" href={rw('integrations.dc.html')} onClick={closeMob}><span className="mt">ATS integrations</span><span className="md">Native two-way sync with 100+ ATS tools</span></a>
            </div>
          </div>
        </div>
        <a className="moblink" href={rw('test-library.dc.html')} onClick={closeMob}>Test library</a>
        <a className="moblink" href={rw('interviews.dc.html')} onClick={closeMob}>Interviews</a>
        <a className="moblink" href={rw('pricing.dc.html')} onClick={closeMob}>Pricing</a>
        {/* Solutions accordion */}
        <div className={`mobacc ${mobExp === 'sol' ? 'open' : ''}`}>
          <button className="mobacc-t" onClick={() => toggle('sol')}>
            Solutions<span className="cv">{CARET}</span>
          </button>
          <div className="mobacc-p">
            <div className="mobacc-sub">
              <span className="mobsub" style={{ margin: '6px 6px 2px' }}>By industry type</span>
              {SOL[0].subs.map((s, i) => (
                <a key={i} className="mobacc-link" href={rw(s.href)} onClick={closeMob}><span className="mt">{s.label}</span><span className="md">{s.d}</span></a>
              ))}
              <span className="mobsub">By use case</span>
              {SOL[1].subs.map((s, i) => (
                <a key={i} className="mobacc-link" href={rw(s.href)} onClick={closeMob}><span className="mt">{s.label}</span><span className="md">{s.d}</span></a>
              ))}
              <span className="mobsub">By test type</span>
              {SOL[2].subs.map((s, i) => (
                <a key={i} className="mobacc-link" href={rw(s.href)} onClick={closeMob}><span className="mt">{s.label}</span><span className="md">{s.d}</span></a>
              ))}
              <span className="mobsub">By company type</span>
              {SOL[3].subs.map((s, i) => (
                <a key={i} className="mobacc-link" href={rw(s.href)} onClick={closeMob}><span className="mt">{s.label}</span><span className="md">{s.d}</span></a>
              ))}
              <a className="mobacc-link" href={rw('solution-index.dc.html')} onClick={closeMob}><span className="mt" style={{ color: '#F23F44' }}>All solutions →</span></a>
            </div>
          </div>
        </div>
        {/* Resources accordion */}
        <div className={`mobacc ${mobExp === 'res' ? 'open' : ''}`}>
          <button className="mobacc-t" onClick={() => toggle('res')}>
            Resources<span className="cv">{CARET}</span>
          </button>
          <div className="mobacc-p">
            <div className="mobacc-sub">
              <span className="mobsub" style={{ margin: '6px 6px 2px' }}>Learn</span>
              {RES[0].subs.map((s, i) => (
                <a key={i} className="mobacc-link" href={rw(s.href)} onClick={closeMob}><span className="mt">{s.label}</span><span className="md">{s.d}</span></a>
              ))}
              <span className="mobsub">HR tools</span>
              {RES[1].subs.map((s, i) => (
                <a key={i} className="mobacc-link" href={rw(s.href)} onClick={closeMob}><span className="mt">{s.label}</span><span className="md">{s.d}</span></a>
              ))}
              <span className="mobsub">Programs</span>
              {RES[2].subs.map((s, i) => (
                <a key={i} className="mobacc-link" href={rw(s.href)} onClick={closeMob}><span className="mt">{s.label}</span><span className="md">{s.d}</span></a>
              ))}
              <a className="mobacc-link" href={rw('sitemap.dc.html')} onClick={closeMob}><span className="mt" style={{ color: '#F23F44' }}>Sitemap →</span></a>
            </div>
          </div>
        </div>
        {/* About accordion */}
        <div className={`mobacc ${mobExp === 'abt' ? 'open' : ''}`}>
          <button className="mobacc-t" onClick={() => toggle('abt')}>
            About<span className="cv">{CARET}</span>
          </button>
          <div className="mobacc-p">
            <div className="mobacc-sub">
              <a className="mobacc-link" href={rw('about.dc.html')} onClick={closeMob}><span className="mt">Our story</span><span className="md">Why we built Testlify</span></a>
              <a className="mobacc-link" href={rw('contact.dc.html')} onClick={closeMob}><span className="mt">Contact us</span><span className="md">Talk to sales or support</span></a>
              <a className="mobacc-link" href="/security" onClick={closeMob}><span className="mt">Trust center</span><span className="md">SOC 2, ISO 27001, GDPR</span></a>
              <a className="mobacc-link" href={rw('clients.dc.html')} onClick={closeMob}><span className="mt">Clients</span><span className="md">Teams hiring with Testlify</span></a>
              <a className="mobacc-link" href={rw('our-partners.dc.html')} onClick={closeMob}><span className="mt">Partners</span><span className="md">Refer, resell or build with us</span></a>
              <a className="mobacc-link" href={rw('job-openings.dc.html')} onClick={closeMob}><span className="mt">Job openings</span><span className="md">Join the team behind Testlify</span></a>
            </div>
          </div>
        </div>
        <span className="mobsub">Account</span>
        <a className="moblink" href={rw(loginHref)} onClick={closeMob}>Login</a>
        <a className="mobcta" href={rw(ctaHref)} onClick={closeMob}>{ctaLabel}</a>
      </nav>
    </>
  );
}
