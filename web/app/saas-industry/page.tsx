import Link from "next/link";
import Reveal from "@/components/Reveal";
import CtaButton from "@/components/CtaButton";
import FAQ from "@/components/FAQ";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { routes } from "@/lib/routes";

export const metadata = {
  title: "SaaS hiring assessments",
  description:
    "Screen every SaaS role on real skills. Test sales aptitude, live coding, and role-specific skills before the first interview. One platform. Every SaaS function. Ranked shortlist.",
};

const PAGE_CSS = `
.rtw{max-width:1240px;margin:0 auto;padding:0 28px;}
.rtsec{padding:96px 0;}
.rtsand{background:#FBF3EE;}
.eyebrow{font-size:13px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:#8A7A7D;margin:0;}.eyebrow b{color:#F23F44;}
.rt-h1{font-size:52px;font-weight:800;letter-spacing:-1.6px;line-height:1.06;margin:16px 0 0;}
.rt-h2{font-size:34px;font-weight:800;letter-spacing:-.8px;line-height:1.16;margin:14px 0 0;}
.rt-lead{font-size:17.5px;line-height:1.6;color:#5A4B4E;margin:20px 0 0;}
.rt-p{font-size:15.5px;line-height:1.64;color:#5A4B4E;margin:14px 0 0;}
.rt-crumb{font-size:13px;color:#8A7A7D;display:flex;gap:8px;align-items:center;margin-bottom:18px;}.rt-crumb a{color:#8A7A7D;}.rt-crumb a:hover{color:#F23F44;}
.rt-hero{padding:74px 0 80px;background:linear-gradient(180deg,#FFF8F7 0%,#fff 82%);}
.rt-hgrid{display:grid;grid-template-columns:1.02fr .98fr;gap:56px;align-items:center;}
.rt-ticks{display:flex;gap:22px;flex-wrap:wrap;margin-top:24px;}
.rt-tick{display:flex;align-items:center;gap:8px;font-size:13.5px;font-weight:600;color:#6C5A5D;}
.rt-ctas{display:flex;gap:14px;flex-wrap:wrap;margin-top:26px;}
.fin-hero-card{background:linear-gradient(180deg,#FFF1EF,#FFF8F7);border:1px solid #F6DAD9;border-radius:24px;padding:24px;box-shadow:0 40px 90px rgba(110,11,14,.14);animation:rtfloat 6s ease-in-out infinite;}
@keyframes rtfloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
.fin-pipe{position:relative;display:flex;justify-content:space-between;padding:12px 6px 24px;}
.fin-pipe::before{content:"";position:absolute;top:38px;left:36px;right:36px;height:2px;background:repeating-linear-gradient(90deg,#F0B9B9 0 6px,transparent 6px 12px);}
.fin-node{position:relative;z-index:1;display:flex;flex-direction:column;align-items:center;gap:9px;flex:1;}
.fin-dot{width:52px;height:52px;border-radius:50%;background:#fff;border:2px solid #F23F44;display:flex;align-items:center;justify-content:center;box-shadow:0 0 0 7px rgba(242,63,68,.07);}
.fin-dot i{width:15px;height:15px;border-radius:50%;background:#F23F44;display:block;}
.fin-node span{font-size:11px;font-weight:600;color:#6C5A5D;text-align:center;line-height:1.2;}
.fin-score{background:#fff;border-radius:16px;padding:18px 20px;box-shadow:0 12px 26px rgba(110,11,14,.08);}
.fin-score-top{display:flex;justify-content:space-between;align-items:baseline;font-size:13px;font-weight:600;color:#6C5A5D;margin-bottom:16px;}
.fin-score-top b{font-size:20px;font-weight:800;color:#F23F44;letter-spacing:-.5px;}
.rt-scores{display:flex;flex-direction:column;gap:11px;}
.rt-scr{display:flex;align-items:center;gap:12px;}
.rt-scl{font-size:12.5px;font-weight:600;color:#46383C;width:132px;flex:none;}
.rt-scbar{flex:1;height:8px;border-radius:6px;background:#F4E7E8;overflow:hidden;}
.rt-scbar i{display:block;height:100%;border-radius:6px;background:linear-gradient(90deg,#FF7A52,#F23F44);width:0;animation:rtfill 1.4s cubic-bezier(.4,0,.2,1) forwards;}
@keyframes rtfill{to{width:var(--w);}}
.rt-scv{font-size:13px;font-weight:800;color:#F23F44;width:34px;text-align:right;flex:none;}
.statrow{display:grid;grid-template-columns:repeat(4,1fr);}
.statrow3{grid-template-columns:repeat(3,1fr);}
.stat{text-align:center;padding:4px 22px;}
.stat + .stat{border-left:1px solid #EFE3E4;}
.statn{font-size:34px;font-weight:700;letter-spacing:-1px;line-height:1;color:#1A1014;font-variant-numeric:tabular-nums;}
.statn .u{color:#D98C8F;font-weight:600;}
.statl{font-size:14px;color:#6C5A5D;font-weight:500;margin-top:10px;line-height:1.45;}
.rt-g2{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;}
.rt-flip .rt-copy{order:2;}
.rt-chk{display:flex;flex-direction:column;gap:12px;margin-top:22px;}
.rt-ci{display:flex;gap:10px;align-items:flex-start;font-size:15px;line-height:1.5;color:#46383C;font-weight:500;}
.rt-ci svg{flex:none;margin-top:2px;color:#1FA463;width:20px;height:20px;stroke-width:3;}
.rt-shead{text-align:center;max-width:760px;margin:0 auto;}
.sa-vs{display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-top:46px;}
.sa-vscol{border-radius:24px;padding:36px 32px;}
.sa-bad{background:transparent;border:1px solid transparent;}
.sa-good{position:relative;background:linear-gradient(160deg,#FFF0F0,#FFF8F6);border:1.5px solid #F7B4B6;box-shadow:0 24px 50px rgba(242,63,68,.18),0 0 0 4px rgba(242,63,68,.06);}
.sa-vshead{display:flex;align-items:center;gap:12px;margin-bottom:22px;}
.sa-vsicon{width:34px;height:34px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;flex:none;}
.sa-vstag{font-size:13px;font-weight:700;letter-spacing:.04em;text-transform:uppercase;}
.sa-vsi{display:flex;gap:13px;align-items:flex-start;font-size:15.5px;line-height:1.45;padding:13px 0;border-top:1px solid #F1E2E3;color:#46383C;}
.sa-vsi:first-of-type{border-top:0;}
.sa-vsmark{width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;flex:none;margin-top:1px;}
.sat-grid{display:grid;grid-template-columns:1fr 1fr;gap:28px;margin-top:44px;}
.sat-card{background:#fff;border:1px solid #F0E2E3;border-radius:20px;padding:38px 36px;}
.sat-stars{display:flex;gap:5px;margin-bottom:20px;}
.sat-stars svg{width:20px;height:20px;}
.sat-q{font-size:20px;line-height:1.5;font-style:italic;color:#2A1D21;margin:0 0 26px;text-wrap:pretty;}
.sat-nm{font-weight:700;font-size:17px;color:#1A1014;}
.sat-role{font-size:14.5px;color:#6C5A5D;margin-top:4px;}
.sat-badge{display:inline-block;margin-top:20px;background:#FCE0DE;color:#F23F44;font-size:12.5px;font-weight:700;padding:7px 14px;border-radius:100px;}
.rt-roles{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:46px;}
.rt-role{position:relative;background:#fff;border:1px solid #F0E2E3;border-radius:18px;padding:28px 26px;box-shadow:0 16px 30px rgba(110,11,14,.08);transition:transform .3s cubic-bezier(.2,.7,.3,1),border-color .3s,box-shadow .3s;}
.rt-role:hover{transform:translateY(-4px);border-color:#FBD0D1;box-shadow:0 22px 44px rgba(110,11,14,.12);}
.rt-role-h{display:flex;align-items:center;justify-content:space-between;margin-bottom:18px;}
.rt-role-ic{width:46px;height:46px;border-radius:13px;background:#FFF0F0;color:#F23F44;display:flex;align-items:center;justify-content:center;}
.rt-role h3{font-size:18px;font-weight:700;margin:0 0 6px;letter-spacing:-.3px;}
.rt-role-d{font-size:13.5px;line-height:1.5;color:#6C5A5D;margin:0 0 16px;}
.rt-tags{display:flex;flex-wrap:wrap;gap:8px;}
.rt-tag{font-size:12px;font-weight:600;color:#B23A3F;background:#FDECEC;border:1px solid #F8DADA;border-radius:100px;padding:6px 12px;white-space:nowrap;}
.rt-viewall{display:inline-flex;align-items:center;gap:8px;margin-top:34px;color:#F23F44;font-weight:700;font-size:15.5px;}
.fin-card{background:#fff;border:1px solid #F0E2E3;border-radius:20px;box-shadow:0 24px 50px rgba(110,11,14,.10);overflow:hidden;}
.fin-card-bar{display:flex;align-items:center;gap:8px;padding:13px 20px;border-bottom:1px solid #F4E9E9;background:#FCF7F7;}
.fin-dots{display:flex;gap:6px;}
.fin-dots i{width:11px;height:11px;border-radius:50%;display:block;}
.fin-card-t{font-size:12.5px;font-weight:600;color:#8A7A7D;margin-left:6px;}
.fin-card-b{padding:20px 22px;}
.sa-rt-head{display:flex;align-items:center;font-size:10.5px;font-weight:700;color:#8A7A7D;text-transform:uppercase;letter-spacing:.04em;padding:0 8px 10px;}
.sa-rt-head .h1{flex:1;}.sa-rt-head .h2{width:52px;text-align:right;}.sa-rt-head .h3{width:70px;text-align:right;}.sa-rt-head .h4{width:88px;text-align:right;}
.sa-rt-row{display:flex;align-items:center;gap:10px;padding:12px;border-radius:12px;margin-bottom:8px;background:#FCF9F9;}
.sa-rt-row.hot{background:#FDECEC;}
.sa-av{width:34px;height:34px;border-radius:50%;background:#C9B9BC;color:#fff;font-size:11.5px;font-weight:800;display:flex;align-items:center;justify-content:center;flex:none;}
.sa-av.c{background:#F23F44;}
.sa-nm{flex:1;min-width:0;}
.sa-nm b{font-size:13.5px;font-weight:700;color:#1A1014;display:block;}
.sa-nm span{font-size:11px;color:#8A7A7D;}
.sa-sc{width:52px;text-align:right;font-weight:800;font-size:14px;color:#1A1014;}
.sa-sc.c{color:#F23F44;}
.sa-pc{width:70px;text-align:right;font-size:12.5px;font-weight:600;color:#46383C;}
.sa-ac{width:88px;text-align:right;}
.sa-badge{font-size:11px;font-weight:700;border-radius:100px;padding:5px 12px;}
.sa-b-sl{background:#F23F44;color:#fff;}
.sa-b-rv{background:#E8F6EE;color:#1FA463;}
.sa-b-ps{background:#F1E9E9;color:#8A7A7D;}
.sa-bd{margin-top:4px;background:#FBF7F7;border-radius:12px;padding:16px;}
.sa-bd-t{font-size:10.5px;font-weight:700;color:#8A7A7D;letter-spacing:.05em;margin:0 0 12px;}
.sa-bd-row{display:flex;align-items:center;justify-content:space-between;font-size:13px;font-weight:700;color:#1A1014;margin-bottom:6px;}
.sa-bd-row .v{color:#F23F44;font-weight:800;}
.sa-bd-bar{height:7px;border-radius:5px;background:#EFE1E1;overflow:hidden;margin-bottom:13px;}
.sa-bd-bar i{display:block;height:100%;background:linear-gradient(90deg,#FF7A52,#F23F44);}
.sa-code{margin:0;font-family:'SF Mono',Menlo,Consolas,monospace;font-size:12.5px;line-height:1.7;color:#E6E1E5;background:#1B1420;border-radius:12px;padding:18px 20px;overflow-x:auto;white-space:pre;}
.sa-code .c{color:#8A7A8F;}.sa-code .k{color:#F76A6E;}.sa-code .s{color:#7FE0A6;}.sa-code .n{color:#F5A623;}.sa-code .fn{color:#7FB0FF;}
.sa-code-tags{display:flex;flex-wrap:wrap;gap:8px;margin-top:16px;}
.sa-code-tag{font-size:12px;font-weight:600;color:#B23A3F;background:#FDECEC;border:1px solid #F8DADA;border-radius:100px;padding:6px 12px;}
.sa-code-tag.mut{color:#8A7A7D;background:#F5EFEF;border-color:#EADDDE;}
.sa-code-res{margin-top:16px;border:1px solid #EFE3E4;border-radius:14px;padding:16px 18px;}
.sa-code-res-t{font-size:10.5px;font-weight:700;color:#8A7A7D;letter-spacing:.05em;margin:0 0 10px;}
.sa-code-res-h{display:flex;justify-content:space-between;align-items:center;}
.sa-code-res-h b{font-size:14.5px;color:#1A1014;}
.sa-code-res-h .v{font-size:18px;font-weight:800;color:#F23F44;}
.sa-code-res p{font-size:13px;color:#6C5A5D;margin:8px 0 0;}
.sa-al-row{display:flex;align-items:center;gap:12px;border:1px solid #EFE3E4;border-radius:14px;padding:15px 16px;margin-bottom:10px;background:#fff;}
.sa-al-row.hot{background:#FDECEC;border-color:#F8D2D2;}
.sa-al-nm{flex:1;}
.sa-al-nm b{font-size:14.5px;font-weight:700;color:#1A1014;display:block;}
.sa-al-nm span{font-size:12px;color:#8A7A7D;}
.sa-rank{font-size:12px;font-weight:700;border-radius:100px;padding:6px 13px;white-space:nowrap;}
.sa-rank.c{background:#F23F44;color:#fff;}
.sa-rank.g{background:#E8F6EE;color:#1FA463;}
.sa-al-note{text-align:center;font-size:12.5px;color:#8A7A7D;margin-top:14px;}
.fin-cmpw{margin:44px -24px -48px;overflow-x:auto;padding:24px 24px 48px;}
.fin-cmp{width:100%;border-collapse:collapse;background:#fff;border:1px solid #F0E2E3;border-radius:18px;overflow:hidden;min-width:720px;box-shadow:0 18px 40px rgba(110,11,14,.09);}
.fin-cmp th,.fin-cmp td{padding:16px 18px;text-align:left;font-size:14.5px;border-bottom:1px solid #F4ECEC;color:#6C5A5D;}
.fin-cmp thead th{font-size:13px;font-weight:700;color:#1A1014;background:#FBF3EE;}
.fin-cmp thead th.tl{color:#F23F44;}
.fin-cmp td.cap{font-weight:600;color:#1A1014;}
.fin-cmp td.tlcol{font-weight:700;color:#1A1014;background:#FFF8F7;}
.fin-cmp tbody tr:last-child td{border-bottom:none;}
.fin-yes{color:#1FA463;font-weight:700;}
.fin-no{color:#C79A9C;}
.rt-ats{display:grid;grid-template-columns:repeat(5,1fr);gap:16px;margin-top:44px;}
.rt-atst{background:#fff;border:1px solid #F0E2E3;border-radius:14px;height:84px;display:flex;align-items:center;justify-content:center;padding:18px;box-shadow:0 10px 22px rgba(110,11,14,.06);transition:transform .25s,box-shadow .25s,border-color .25s;}
.rt-atst:hover{transform:translateY(-4px);border-color:#FBD0D1;box-shadow:0 18px 34px rgba(110,11,14,.10);}
.rt-atst img{max-width:100%;max-height:38px;object-fit:contain;}
.rt-atsmore{text-align:center;margin-top:34px;}
.rt-atsmore a{display:inline-flex;align-items:center;gap:8px;color:#F23F44;font-weight:700;font-size:15.5px;}
@media(max-width:960px){.rt-hgrid,.rt-g2{grid-template-columns:1fr;gap:40px;}.rt-flip .rt-copy{order:1;}.statrow{grid-template-columns:1fr 1fr;row-gap:34px;}.statrow3{grid-template-columns:1fr 1fr;}.stat + .stat{border-left:none;}.rt-roles,.sa-vs,.sat-grid{grid-template-columns:1fr;}.rt-ats{grid-template-columns:repeat(3,1fr);}.rt-h1{font-size:38px;}.rt-h2{font-size:27px;}.rtsec{padding:64px 0;}}
@media(max-width:560px){.rt-ats{grid-template-columns:repeat(2,1fr);}.statrow,.statrow3{grid-template-columns:1fr;}.fin-node span{font-size:9px;}}
h1,h2,h3,h4,.rt-h1,.rt-h2,.eyebrow{text-wrap:balance;}p,li,.rt-p,.rt-lead{text-wrap:pretty;}
`;

const check = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const star = (
  <svg viewBox="0 0 24 24" fill="#F23F44">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const cardDots = (
  <span className="fin-dots">
    <i style={{ background: "#F26B6B" }} />
    <i style={{ background: "#F5B93F" }} />
    <i style={{ background: "#4CC38A" }} />
  </span>
);

const roles = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <line x1="23" y1="6" x2="13.5" y2="15.5" /><polyline points="23 6 23 11 18 11" /><line x1="1" y1="20" x2="10" y2="11" />
      </svg>
    ),
    title: "Reps who can sell",
    desc: "SDRs, AEs, and account managers.",
    tags: ["SJT", "Discovery", "Sales aptitude"],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: "CS and support",
    desc: "CSMs, support, and onboarding specialists.",
    tags: ["Communication", "Problem-solving", "Empathy"],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    ),
    title: "PM and design talent",
    desc: "Product managers, product ops, and UX or UI.",
    tags: ["Cognitive", "Role-specific", "Software skills"],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    title: "Builders who ship",
    desc: "Frontend, backend, full-stack, and DevOps.",
    tags: ["Coding", "Engineering", "System design"],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 11l18-5v12L3 14v-3z" /><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
      </svg>
    ),
    title: "Demand and operations",
    desc: "Marketers, growth, and revenue operations.",
    tags: ["Marketing", "Analytics", "Tools"],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5v14a9 3 0 0 0 18 0V5" /><path d="M3 12a9 3 0 0 0 18 0" />
      </svg>
    ),
    title: "Analysts and scientists",
    desc: "Data analysts, data engineers, and scientists.",
    tags: ["SQL", "Data analysis", "Reasoning"],
  },
];

const atsLogos = [
  { src: "https://testlify.com/wp-content/uploads/2024/09/Workday_Inc.-Logo.wine_-1-2048x1365-2.png", alt: "Workday" },
  { src: "https://testlify.com/wp-content/uploads/2025/10/Successfactors-Logo-Vector.svg-.png", alt: "SAP SuccessFactors" },
  { src: "https://testlify.com/wp-content/uploads/2025/10/Lever_Employ_Logo_Horizontal_Turquoise_Black-300x43-1.png", alt: "Lever" },
  { src: "https://testlify.com/wp-content/uploads/2025/10/SR-SAP-Logo.svg", alt: "SmartRecruiters" },
  { src: "https://testlify.com/wp-content/uploads/2025/10/681b1f74457e6f968fdaaa8d_MASTER_RECRUITEE_COLOUR_PREFERRED-LOGO-TO-USE-1024x313.png", alt: "Recruitee" },
  { src: "https://testlify.com/wp-content/uploads/2025/10/logo.svg", alt: "UKG Pro Recruiting" },
  { src: "https://testlify.com/wp-content/uploads/2024/09/BambooHR-Logo-1-2048x1152-2.png", alt: "BambooHR" },
  { src: "https://testlify.com/wp-content/uploads/2023/03/629a0bbcb04c5ae587c411c2-1-1.png", alt: "Greenhouse" },
  { src: "https://testlify.com/wp-content/uploads/2024/08/zoho-recruit-logo-1.png", alt: "Zoho Recruit" },
  { src: "https://testlify.com/wp-content/uploads/2025/10/JazzHR_Employ_Logo_Horizontal_Purple_Black-1024x131.png", alt: "JazzHR" },
];

const faqs = [
  { q: "What is a SaaS hiring assessment?", a: "A SaaS hiring assessment is a structured pre-employment test that verifies the skills a SaaS role actually needs — sales aptitude, live coding, product thinking, and cognitive ability — across GTM, product, and engineering, so decisions are based on proven ability rather than a resume." },
  { q: "How does Testlify test sales and SDR or AE aptitude?", a: "With SaaS-specific sales assessments: discovery instincts, objection handling, situational judgment, and consultative selling scenarios like demos and multi-stakeholder deals — scored automatically and ranked before your first screen call." },
  { q: "Can Testlify screen both GTM and engineering roles?", a: "Yes. One platform covers the entire org — sales, CS, marketing, product, and design alongside live coding and system design for engineers — each with role-specific tests scored on consistent criteria." },
  { q: "How does skills testing reduce sales ramp time and turnover?", a: "By hiring on proven ability instead of interview performance. Reps who demonstrate discovery and closing skills up front ramp faster and hit quota more often, which cuts early attrition on the GTM team." },
  { q: "Which ATS does Testlify integrate with?", a: "Testlify connects natively to 100+ ATS and HRIS tools, including Workday, Greenhouse, Lever, and SmartRecruiters, plus an open API. Assessments fire automatically and results sync back." },
  { q: "Can Testlify handle high-volume hiring?", a: "Yes. Send one assessment link to your whole applicant pool and get a ranked shortlist in hours — screening hundreds of candidates a month without adding recruiters." },
  { q: "What skills should you test when hiring for SaaS roles?", a: "It depends on the function: sales aptitude and situational judgment for GTM, live coding and system design for engineering, product thinking and cognitive ability for PM, and communication and problem-solving for CS." },
  { q: "Does Testlify offer a free trial?", a: "Yes — a 7-day free trial with unlimited assessments and no credit card required. You can build and send a full SaaS assessment before you pay anything." },
];

export default function SaasIndustryPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: PAGE_CSS }} />
      <SiteHeader announcement="Testlify AI is here — screen, interview & score candidates automatically." />

      {/* Hero */}
      <section className="rt-hero">
        <div className="rtw rt-hgrid">
          <Reveal className="rt-copy">
            <div className="rt-crumb">
              <Link href={routes.solutions}>Solutions</Link>
              <span>/</span>
              <span>Industry / SaaS</span>
            </div>
            <p className="eyebrow">For SaaS teams<b>.</b></p>
            <h1 className="rt-h1">
              Screen every SaaS role on real skills. Hire people who{" "}
              <span style={{ color: "#F23F44" }}>ramp, ship, and retain</span>
            </h1>
            <p className="rt-lead">
              Test sales aptitude, live coding, and role-specific skills before the first interview. One platform. Every SaaS function. Ranked shortlist.
            </p>
            <div className="rt-ctas">
              <CtaButton label="Try for Free" href={routes.pricing} variant="primary" size="md" icon="arrow" magnetic />
              <CtaButton label="Book a Demo" href={routes.contact} variant="secondary" size="md" icon="play" />
            </div>
            <div className="rt-ticks">
              <span className="rt-tick">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#F23F44" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                7-day free trial
              </span>
              <span className="rt-tick">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#F23F44" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                Unlimited assessments
              </span>
              <span className="rt-tick">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#F23F44" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                No credit card required
              </span>
            </div>
          </Reveal>
          <Reveal className="rt-media">
            <div className="fin-hero-card">
              <div className="fin-pipe">
                {["Role input", "AI builder", "Skills test", "Interview", "Auto score", "Ranked list"].map((n) => (
                  <div className="fin-node" key={n}>
                    <span className="fin-dot"><i /></span>
                    <span>{n}</span>
                  </div>
                ))}
              </div>
              <div className="fin-score">
                <div className="fin-score-top"><span>Candidate assessment score</span><b>89/100</b></div>
                <div className="rt-scores">
                  {[
                    ["Sales aptitude", "96%", "96", ".15s"],
                    ["Product knowledge", "87%", "87", ".28s"],
                    ["Coding", "88%", "88", ".41s"],
                    ["Communication", "77%", "77", ".54s"],
                    ["Cognitive", "86%", "86", ".67s"],
                  ].map(([label, w, v, delay]) => (
                    <div className="rt-scr" key={label}>
                      <span className="rt-scl">{label}</span>
                      <span className="rt-scbar"><i style={{ ["--w" as string]: w, animationDelay: delay }} /></span>
                      <span className="rt-scv">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stat band */}
      <section className="rtsec rtsand" style={{ paddingTop: 44, paddingBottom: 44 }}>
        <div className="rtw">
          <Reveal className="statrow statrow3">
            <div className="stat"><div className="statn">4,500<span className="u">+</span></div><div className="statl">SaaS and tech roles you can assess</div></div>
            <div className="stat"><div className="statn">3,500<span className="u">+</span></div><div className="statl">Validated, ready-to-use tests</div></div>
            <div className="stat"><div className="statn">45<span className="u">+</span></div><div className="statl">Programming languages tested</div></div>
          </Reveal>
        </div>
      </section>

      {/* The stakes */}
      <section className="rtsec">
        <div className="rtw">
          <Reveal className="rt-shead">
            <p className="eyebrow">The stakes<b>.</b></p>
            <h2 className="rt-h2">Resumes can&apos;t tell you who will actually perform</h2>
            <p className="rt-lead">SaaS hiring is fast, expensive, and unforgiving. Getting the SaaS pre-employment test wrong costs a full quarter. The cost of guessing wrong is a lost quarter.</p>
          </Reveal>
          <Reveal className="sa-vs">
            <div className="sa-vscol sa-bad">
              <div className="sa-vshead">
                <span className="sa-vsicon" style={{ background: "#F0E4E5", color: "#8A7A7D" }}>✕</span>
                <span className="sa-vstag" style={{ color: "#8A7A7D" }}>The hiring gamble</span>
              </div>
              {[
                "SaaS reps take 5.7 months to ramp and roughly 3x base salary to get there.",
                "Only about half of AEs hit quota, and interviews rarely predict who will.",
                "You hire GTM and engineering at once, two completely different bars.",
                "A wrong hire costs a full quarter of missed pipeline or shipped features.",
              ].map((t) => (
                <div className="sa-vsi" key={t}><span className="sa-vsmark" style={{ background: "#EADDDE", color: "#8A7A7D" }}>✕</span>{t}</div>
              ))}
            </div>
            <div className="sa-vscol sa-good">
              <div className="sa-vshead">
                <span className="sa-vsicon" style={{ background: "#F23F44", color: "#fff" }}>✓</span>
                <span className="sa-vstag" style={{ color: "#F23F44" }}>Skills-based hiring with Testlify</span>
              </div>
              {[
                "Verify selling, technical, and role skills with a GTM hiring assessment before the offer.",
                "Hire on proven ability, so more reps ramp fast and hit quota.",
                "One platform screens every function — GTM, product, and engineering — to the right bar.",
                "Ranked shortlist in hours, with a documented, defensible score behind every decision.",
              ].map((t) => (
                <div className="sa-vsi" key={t}><span className="sa-vsmark" style={{ background: "#F23F44", color: "#fff" }}>✓</span>{t}</div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* SaaS roles */}
      <section className="rtsec rtsand">
        <div className="rtw">
          <Reveal className="rt-shead">
            <p className="eyebrow">SaaS roles<b>.</b></p>
            <h2 className="rt-h2">Assess every SaaS role with the right test</h2>
            <p className="rt-lead">From SDRs to senior engineers, Testlify&apos;s SaaS hiring assessment covers every role with validated skills tests on one platform.</p>
          </Reveal>
          <Reveal className="rt-roles">
            {roles.map((r) => (
              <div className="rt-role" key={r.title}>
                <div className="rt-role-h"><span className="rt-role-ic">{r.icon}</span></div>
                <h3>{r.title}</h3>
                <p className="rt-role-d">{r.desc}</p>
                <div className="rt-tags">{r.tags.map((t) => <span className="rt-tag" key={t}>{t}</span>)}</div>
              </div>
            ))}
          </Reveal>
          <div style={{ textAlign: "center" }}>
            <Reveal>
              <Link href={routes.testLibrary} className="rt-viewall">
                View all test library
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* The platform */}
      <section className="rtsec">
        <div className="rtw">
          <Reveal className="rt-shead">
            <p className="eyebrow">The platform<b>.</b></p>
            <h2 className="rt-h2">The SaaS skills tests that predict who ramps, ships, and stays</h2>
            <p className="rt-lead">Most assessments test theory. Testlify tests what SaaS roles actually demand. From discovery calls to shipping code, every assessment is built around real on-the-job performance signals.</p>
          </Reveal>
          <div className="rt-g2" style={{ marginTop: 56 }}>
            <Reveal className="rt-copy">
              <h2 className="rt-h2" style={{ marginTop: 0 }}>Stop hiring AEs who interview well but can&apos;t close</h2>
              <p className="rt-p">The average AE takes 5.7 months to ramp. Skills tests surface who actually has the discovery instincts, objection handling, and consultative selling ability to hit quota fast. Interview performance does not predict this. Structured SaaS sales assessments do.</p>
              <div className="rt-chk">
                {[
                  "Sales aptitude, discovery skills, and situational judgment",
                  "SaaS-specific scenarios: demos, objections, multi-stakeholder deals",
                  "Covers SDRs, AEs, CSMs, and account management roles",
                  "Ranked shortlist before your first screen call",
                ].map((t) => (
                  <div className="rt-ci" key={t}>{check}{t}</div>
                ))}
              </div>
            </Reveal>
            <Reveal className="rt-media">
              <div className="fin-card">
                <div className="fin-card-bar">{cardDots}<span className="fin-card-t">Assessment results · Senior AE · 18 candidates</span></div>
                <div className="fin-card-b">
                  <div className="sa-rt-head"><span className="h1">Candidate</span><span className="h2">Score</span><span className="h3">Percentile</span><span className="h4">Action</span></div>
                  <div className="sa-rt-row hot"><span className="sa-av c">MT</span><span className="sa-nm"><b>Marcus T.</b><span>AE · Completed 1h ago</span></span><span className="sa-sc c">92%</span><span className="sa-pc">Top 5%</span><span className="sa-ac"><span className="sa-badge sa-b-sl">Shortlist</span></span></div>
                  <div className="sa-rt-row"><span className="sa-av">JL</span><span className="sa-nm"><b>Jess Liu</b><span>AE · Completed 3h ago</span></span><span className="sa-sc">84%</span><span className="sa-pc">Top 12%</span><span className="sa-ac"><span className="sa-badge sa-b-rv">Review</span></span></div>
                  <div className="sa-rt-row"><span className="sa-av">RK</span><span className="sa-nm"><b>Ravi K.</b><span>AE · Completed 5h ago</span></span><span className="sa-sc">71%</span><span className="sa-pc">Top 28%</span><span className="sa-ac"><span className="sa-badge sa-b-ps">Pass</span></span></div>
                  <div className="sa-bd">
                    <p className="sa-bd-t">MARCUS T. · SKILL BREAKDOWN</p>
                    <div className="sa-bd-row"><span>Discovery questioning</span><span className="v">94%</span></div><div className="sa-bd-bar"><i style={{ width: "94%" }} /></div>
                    <div className="sa-bd-row"><span>Sales aptitude</span><span className="v">89%</span></div><div className="sa-bd-bar" style={{ marginBottom: 0 }}><i style={{ width: "89%" }} /></div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Engineers who ship */}
      <section className="rtsec rtsand">
        <div className="rtw rt-g2 rt-flip">
          <Reveal className="rt-copy">
            <h2 className="rt-h2" style={{ marginTop: 0 }}>Hire engineers who ship in sprint one, not sprint ten</h2>
            <p className="rt-p">Whiteboard interviews miss the engineers who actually deliver. Live coding tests, system design challenges, and real debugging exercises in 45+ languages tell you who can contribute from day one. Not who studied the right algorithm book the night before.</p>
            <div className="rt-chk">
              {[
                "Live coding in 45+ programming languages",
                "System design, debugging, and code review challenges",
                "Frontend, backend, full-stack, and DevOps roles covered",
                "AI-scored with detailed per-skill breakdown",
              ].map((t) => (
                <div className="rt-ci" key={t}>{check}{t}</div>
              ))}
            </div>
          </Reveal>
          <Reveal className="rt-media">
            <div className="fin-card">
              <div className="fin-card-bar">{cardDots}<span className="fin-card-t">Live coding · Senior Backend Engineer · Python</span></div>
              <div className="fin-card-b">
                <pre className="sa-code" dangerouslySetInnerHTML={{ __html: `<span class="c"># Fix the bug in this rate limiter</span>
<span class="k">def</span> <span class="fn">check_rate_limit</span>(user_id, limit=<span class="n">100</span>):
    key = <span class="s">f"rate:{user_id}"</span>
    count = redis.get(key) <span class="k">or</span> <span class="n">0</span>
    <span class="k">if</span> count &gt;= limit:
        <span class="k">return</span> <span class="n">False</span>
    redis.incr(key)
    <span class="c"># Bug: expiry never set</span>
    <span class="k">return</span> <span class="n">True</span>` }} />
                <div className="sa-code-tags"><span className="sa-code-tag">Python</span><span className="sa-code-tag">Redis</span><span className="sa-code-tag">System design</span><span className="sa-code-tag mut">45+ languages</span></div>
                <div className="sa-code-res">
                  <p className="sa-code-res-t">AUTO-SCORE RESULT</p>
                  <div className="sa-code-res-h"><b>Priya R. · Backend Engineer</b><span className="v">91%</span></div>
                  <p>Identified race condition and missing TTL. Clean fix.</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* One platform */}
      <section className="rtsec">
        <div className="rtw rt-g2">
          <Reveal className="rt-copy">
            <h2 className="rt-h2" style={{ marginTop: 0 }}>One platform. Every SaaS function. One consistent bar</h2>
            <p className="rt-p">Most SaaS teams end up with separate tools for technical and non-technical hiring. Testlify covers the entire org, GTM, product, engineering, data, and ops, with role-specific SaaS skills tests, AI scoring, and a single ranked shortlist per role. No duct tape between tools.</p>
            <div className="rt-chk">
              {[
                "SaaS pre-employment tests for every function in one platform",
                "Consistent scoring criteria across all roles and hiring managers",
                "100+ ATS integrations so results live in your existing workflow",
                "Audit-ready records for every hiring decision",
              ].map((t) => (
                <div className="rt-ci" key={t}>{check}{t}</div>
              ))}
            </div>
          </Reveal>
          <Reveal className="rt-media">
            <div className="fin-card">
              <div className="fin-card-bar">{cardDots}<span className="fin-card-t">Assessments · Q3 hiring · All functions</span></div>
              <div className="fin-card-b">
                <div className="sa-al-row hot"><span className="sa-al-nm"><b>Senior AE</b><span>Sales aptitude · Discovery · SJT</span></span><span className="sa-rank c">14 ranked</span></div>
                <div className="sa-al-row"><span className="sa-al-nm"><b>Backend Engineer</b><span>Live coding · System design · Python</span></span><span className="sa-rank g">9 ranked</span></div>
                <div className="sa-al-row"><span className="sa-al-nm"><b>Senior PM</b><span>Product thinking · Data · Cognitive</span></span><span className="sa-rank g">11 ranked</span></div>
                <div className="sa-al-row"><span className="sa-al-nm"><b>Customer Success Manager</b><span>Communication · Empathy · Problem-solving</span></span><span className="sa-rank g">7 ranked</span></div>
                <p className="sa-al-note">All scored on the same objective criteria. All in one platform.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why Testlify */}
      <section className="rtsec rtsand">
        <div className="rtw">
          <Reveal className="rt-shead">
            <p className="eyebrow">Why Testlify<b>.</b></p>
            <h2 className="rt-h2">A better way than how most SaaS teams hire</h2>
          </Reveal>
          <Reveal className="fin-cmpw">
            <table className="fin-cmp">
              <thead><tr><th className="cap">What you need</th><th className="tl">Testlify</th><th>Manual / CV screening</th><th>Generic test tools</th><th>Recruiting agency</th></tr></thead>
              <tbody>
                <tr><td className="cap">Verifies real skills across GTM and tech</td><td className="tlcol"><span className="fin-yes">✓</span> Yes</td><td><span className="fin-no">✗</span></td><td>Limited</td><td>Varies</td></tr>
                <tr><td className="cap">Sales, coding, and cognitive in one place</td><td className="tlcol"><span className="fin-yes">✓</span> Yes</td><td><span className="fin-no">✗</span></td><td>Partial</td><td><span className="fin-no">✗</span></td></tr>
                <tr><td className="cap">AI auto-scoring and ranked shortlists</td><td className="tlcol"><span className="fin-yes">✓</span> Yes</td><td><span className="fin-no">✗</span></td><td>Partial</td><td><span className="fin-no">✗</span></td></tr>
                <tr><td className="cap">Proctoring and anti-cheating</td><td className="tlcol"><span className="fin-yes">✓</span> Yes</td><td><span className="fin-no">✗</span></td><td>Partial</td><td><span className="fin-no">✗</span></td></tr>
                <tr><td className="cap">Handles volume without extra recruiters</td><td className="tlcol"><span className="fin-yes">✓</span> Yes</td><td>Slow</td><td>Partial</td><td><span className="fin-no">✗</span></td></tr>
                <tr><td className="cap">Cost per role at volume</td><td className="tlcol"><span className="fin-yes">✓</span> Low</td><td>High (time)</td><td>Medium</td><td>High (fees)</td></tr>
              </tbody>
            </table>
          </Reveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="rtsec">
        <div className="rtw">
          <Reveal className="rt-shead" style={{ textAlign: "left", maxWidth: "none" }}>
            <h2 className="rt-h2" style={{ fontSize: 44 }}>What SaaS hiring teams say about skills-based hiring</h2>
          </Reveal>
          <Reveal className="sat-grid">
            <div className="sat-card">
              <div className="sat-stars">{star}{star}{star}{star}{star}</div>
              <p className="sat-q">&ldquo;We screen sales aptitude and engineering skills on one platform now, which sped up hiring and cut early attrition on the GTM team.&rdquo;</p>
              <div className="sat-nm">Head of Talent</div>
              <div className="sat-role">B2B SaaS, 200 to 2,000 employees</div>
              <span className="sat-badge">G2 High Performer</span>
            </div>
            <div className="sat-card">
              <div className="sat-stars">{star}{star}{star}{star}{star}</div>
              <p className="sat-q">&ldquo;During a growth push we screened hundreds of candidates a month without dropping our quality bar or adding recruiters.&rdquo;</p>
              <div className="sat-nm">VP, People</div>
              <div className="sat-role">High-growth SaaS</div>
              <span className="sat-badge">G2 Leader</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Integrations */}
      <section className="rtsec rtsand">
        <div className="rtw">
          <Reveal className="rt-shead">
            <p className="eyebrow">Integrations<b>.</b></p>
            <h2 className="rt-h2">Testlify integrates seamlessly with 100+ ATS tools</h2>
            <p className="rt-lead">Streamline your hiring process from assessment to onboarding. Sync candidate data effortlessly, automate workflows, and gain deeper insights to make informed hiring decisions faster.</p>
          </Reveal>
          <Reveal className="rt-ats">
            {atsLogos.map((l) => (
              <div className="rt-atst" key={l.alt}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={l.src} alt={l.alt} />
              </div>
            ))}
          </Reveal>
          <Reveal className="rt-atsmore">
            <Link href={routes.integrations}>
              View all ATS integration
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="rtsec">
        <div className="rtw">
          <Reveal className="rt-shead">
            <p className="eyebrow">FAQ<b>.</b></p>
            <h2 className="rt-h2">Frequently asked questions (FAQs)</h2>
            <p className="rt-lead">Want to know more about Testlify? Here are answers to the most commonly asked questions about our company.</p>
          </Reveal>
          <div style={{ maxWidth: 820, margin: "44px auto 0" }}>
            <FAQ items={faqs} />
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
