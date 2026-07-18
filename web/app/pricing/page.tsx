'use client';

import { useState } from 'react';
import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import FAQ from '@/components/FAQ';
import SecuritySection from '@/components/SecuritySection';
import CtaBand from '@/components/CtaBand';

const CSS = `
*{box-sizing:border-box;}
html{scroll-behavior:smooth;}
body{margin:0;font-family:'Poppins',sans-serif;-webkit-font-smoothing:antialiased;color:#1A1014;background:#fff;}
a{text-decoration:none;color:inherit;}
.wrap{max-width:1240px;margin:0 auto;padding:0 28px;}
.sec{padding:104px 28px;}
.eyebrow{font-size:12.5px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:#8A7A7D;margin:0 0 18px;}
.eyebrow b{color:#F23F44;font-weight:600;}
.h1{font-size:62px;line-height:1.04;font-weight:800;letter-spacing:-2px;margin:0;color:#1A1014;}
.h2{font-size:43px;line-height:1.08;font-weight:800;letter-spacing:-1.4px;margin:0;color:#1A1014;}
.h3{font-size:22px;line-height:1.25;font-weight:700;letter-spacing:-.4px;margin:0;color:#1A1014;}
.lead{font-size:19px;line-height:1.6;color:#5A4B4E;font-weight:400;}
.leadpill{display:inline-flex;align-items:center;flex-wrap:nowrap;white-space:nowrap;justify-content:center;gap:10px;background:#FFF1F0;border:1px solid #F8D6D5;border-radius:100px;padding:11px 24px;margin:26px auto 0;font-size:14px;color:#5A4B4E;font-weight:500;}
.leadpill b{color:#1A1014;font-weight:700;margin-right:4px;}
.ldot{color:#E69A9C;font-weight:700;}
.body{font-size:16px;line-height:1.66;color:#5A4B4E;}
.muted{color:#8A7A7D;}
.btn{display:inline-flex;align-items:center;gap:9px;font-weight:600;font-size:15.5px;padding:14px 26px;border-radius:13px;transition:transform .25s ease, box-shadow .25s ease;cursor:pointer;border:none;position:relative;overflow:hidden;}
.btn-primary::after{content:"";position:absolute;top:0;left:-140%;width:55%;height:100%;background:linear-gradient(120deg,transparent,rgba(255,255,255,.5),transparent);transform:skewX(-20deg);transition:left .6s cubic-bezier(.2,.7,.2,1);pointer-events:none;}
.btn-primary:hover::after{left:140%;}
.btn-primary{background:#F23F44;color:#fff;box-shadow:0 12px 26px rgba(242,63,68,.30);}
.btn-primary:hover{transform:translateY(-2px);box-shadow:0 16px 34px rgba(242,63,68,.40);}
.btn-ghost{background:#fff;color:#1A1014;border:1.5px solid #EADDDE;}
.btn-ghost:hover{transform:translateY(-2px);border-color:#F2B7B9;box-shadow:0 10px 24px rgba(110,11,14,.08);}
.trust{display:flex;align-items:center;gap:14px;flex-wrap:wrap;font-size:13.5px;color:#8A7A7D;font-weight:600;justify-content:center;}
.dot{width:4px;height:4px;border-radius:50%;background:#D9C7C9;}
.phero{padding:64px 28px 26px;background:radial-gradient(1100px 540px at 50% -8%,#FFF0EE 0%,rgba(255,240,238,0) 62%),#fff;text-align:center;}
.npromo{display:inline-flex;align-items:center;gap:14px;background:#fff;border:1px solid #F1D9DA;border-radius:14px;padding:11px 16px 11px 13px;box-shadow:0 12px 30px rgba(110,11,14,.07);transition:transform .25s ease, box-shadow .25s ease, border-color .25s;text-align:left;}
.npromo:hover{transform:translateY(-2px);box-shadow:0 18px 40px rgba(242,63,68,.16);border-color:#F2B7B9;}
.npromo-ic{flex:none;width:38px;height:38px;border-radius:11px;background:#FFF0F0;color:#F23F44;display:flex;align-items:center;justify-content:center;}
.npromo-txt{display:flex;flex-direction:column;line-height:1.25;}
.npromo-txt b{font-size:14.5px;font-weight:700;color:#1A1014;letter-spacing:-.2px;}
.npromo-txt i{font-style:normal;font-size:12.5px;font-weight:500;color:#8A7A7D;}
.npromo-arrow{flex:none;width:30px;height:30px;border-radius:50%;background:#F23F44;color:#fff;display:flex;align-items:center;justify-content:center;box-shadow:0 6px 14px rgba(242,63,68,.30);}
.toggle{display:inline-flex;align-items:center;gap:4px;background:#F4ECE9;border:1px solid #EADFDB;border-radius:999px;padding:5px;margin-top:10px;}
.tgl{border:none;background:none;font-family:inherit;font-size:14.5px;font-weight:600;color:#8A7A7D;padding:9px 20px;border-radius:999px;cursor:pointer;transition:all .2s ease;display:inline-flex;align-items:center;gap:8px;}
.tgl.on{background:#1A1014;color:#fff;box-shadow:0 4px 12px rgba(26,16,20,.20);}
.tsave{background:#F23F44;color:#fff;font-size:11px;font-weight:700;letter-spacing:.02em;padding:2px 8px;border-radius:999px;}
.pgrid{display:grid;grid-template-columns:1.15fr 1fr;gap:24px;align-items:stretch;max-width:1180px;margin:0 auto;}
.pcard{position:relative;display:flex;flex-direction:column;background:#fff;border:1px solid #EFE2E3;border-radius:24px;padding:34px 32px;transition:transform .25s ease, box-shadow .25s ease, border-color .25s;}
.pcard:hover{transform:translateY(-4px);box-shadow:0 24px 50px rgba(110,11,14,.10);border-color:#F4D2D3;}
.pcard.feat{border-color:#F23F44;box-shadow:0 28px 60px rgba(242,63,68,.16);}
@property --bang{syntax:"<angle>";initial-value:0deg;inherits:false;}
@keyframes runborder{to{--bang:360deg;}}
.pcard::before{content:"";position:absolute;inset:0;border-radius:24px;padding:1.8px;background:conic-gradient(from var(--bang),transparent 0deg,#FF7A52 35deg,#F23F44 80deg,transparent 150deg,transparent 360deg);-webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);mask-composite:exclude;opacity:0;transition:opacity .35s ease;pointer-events:none;}
.pcard:hover::before{opacity:1;animation:runborder 2.4s linear infinite;}
.pbot{margin-top:auto;height:22px;}
.pname{font-size:19px;font-weight:700;letter-spacing:-.3px;margin:0;}
.pdesc{font-size:13.6px;color:#8A7A7D;line-height:1.5;margin:8px 0 14px;min-height:62px;}
.credlbl{font-size:11.5px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#A9999C;margin:0 0 7px;}
.ptoprow{display:flex;align-items:flex-start;justify-content:space-between;gap:20px;margin-top:0;}
.pcol{display:flex;flex-direction:column;min-width:0;}
.pright{flex:none;width:215px;}
.credwrap{position:relative;margin:0;}
.creddrop{appearance:none;-webkit-appearance:none;width:100%;font-family:inherit;font-size:14.5px;font-weight:700;color:#1A1014;background:#FBF3EE;border:1px solid #F1E2DC;border-radius:13px;padding:13px 42px 13px 16px;cursor:pointer;}
.creddrop:focus{outline:none;border-color:#F2B7B9;box-shadow:0 0 0 3px rgba(242,63,68,.12);}
.credchev{position:absolute;right:15px;top:50%;transform:translateY(-50%);pointer-events:none;color:#8A7A7D;display:flex;}
.pfeat li.aon{color:#8A7A7D;}
.plsep{display:flex;align-items:center;gap:12px;margin:22px 0 8px;font-size:11.5px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#8A7A7D;}
.padlbl{display:flex;align-items:center;font-size:13.5px;font-weight:700;color:#1A1014;margin:18px 0 16px;padding-top:18px;border-top:1px solid #F1E6E7;}
.plsep::before,.plsep::after{content:"";height:1px;flex:1;background:#ECDDDE;}
.plus{flex:none;width:16px;height:16px;border-radius:5px;background:#F4E7E2;color:#B98A5A;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;line-height:1;margin-top:1px;}
.prow{display:flex;align-items:baseline;justify-content:space-between;gap:12px;margin-top:2px;}
.pprice{display:flex;align-items:baseline;gap:5px;margin-top:0;}
.pamt{font-size:48px;font-weight:800;letter-spacing:-2px;line-height:1;}
.pper{font-size:14px;color:#8A7A7D;font-weight:500;}
.pbill{font-size:12.5px;color:#A9999C;text-align:right;}
.credmeta{display:flex;flex-wrap:wrap;gap:6px 14px;font-size:12.8px;color:#46383C;font-weight:600;margin:14px 0 0;}
.credmeta span{display:inline-flex;align-items:center;gap:6px;}
.credmeta i{width:5px;height:5px;border-radius:50%;background:#F2B7B9;font-style:normal;}
.pcta{width:100%;justify-content:center;margin-top:22px;}
.pcta-bottom{margin-top:0;}
.pcta.btn-primary{background:linear-gradient(95deg,#FF7A52,#F23F44 62%);}
.pfeat{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:14px;}
.pfeat li{display:flex;align-items:flex-start;gap:12px;font-size:14.5px;color:#33282B;font-weight:500;line-height:1.5;}
.pfeat svg{flex:none;margin-top:1px;color:#9A8A8D;background:#fff;border:1.5px solid #E2D6D7;border-radius:50%;width:20px;height:20px;padding:3.5px;box-sizing:border-box;}
.flab{font-size:14.5px;color:#33282B;font-weight:500;line-height:1.5;}
.qmk{display:inline-flex;align-items:center;justify-content:center;width:15px;height:15px;border:1.3px solid #DACDCE;border-radius:50%;color:#A9999C;font-size:9.5px;font-weight:700;margin-left:6px;vertical-align:middle;}
.tipword{border-bottom:1px dashed #C9B9BC;}
.unlim{display:flex;align-items:center;justify-content:space-between;gap:20px;flex-wrap:wrap;background:#fff;border:1px solid #EFE2E3;border-radius:18px;padding:22px 28px;margin-top:30px;font-size:16px;font-weight:600;color:#1A1014;}
.pfeat{padding-bottom:0;}
.phead{display:flex;align-items:center;gap:13px;margin-bottom:14px;}
.picon{flex:none;width:46px;height:46px;border-radius:13px;display:flex;align-items:center;justify-content:center;color:#fff;background:linear-gradient(135deg,#FF7A52,#F23F44);box-shadow:0 8px 18px rgba(242,63,68,.28);transition:transform .35s cubic-bezier(.2,.7,.3,1),box-shadow .35s ease;}
.pcard:hover .picon{transform:translateY(-2px) scale(1.08) rotate(-3deg);box-shadow:0 14px 26px rgba(242,63,68,.4);}
.ptag{margin-left:auto;font-size:11.5px;font-weight:600;color:#8A7A7D;background:#F5EFEC;border:1px solid #ECE0DB;border-radius:100px;padding:5px 11px;}
.ptag-hot{color:#F23F44;background:#FFF0F0;border-color:#F8CFD0;font-weight:700;}
.pcsub{font-size:12.5px;color:#A9999C;margin:8px 0 0;}
.pdiv{height:1px;background:#F1E6E7;margin:22px 0 18px;}
.pinc{font-size:13.5px;font-weight:700;color:#1A1014;margin:0 0 16px;}
.psec{padding:34px 28px 64px;}
.switch-wrap{display:inline-flex;align-items:center;gap:12px;}
.sw-label{font-size:14.5px;font-weight:600;color:#8A7A7D;transition:color .2s;}
.sw-label.on{color:#1A1014;}
.switch{width:46px;height:26px;border-radius:100px;background:#E1D3CF;cursor:pointer;position:relative;transition:background .25s;border:none;padding:0;}
.switch.on{background:#F23F44;}
.switch-knob{position:absolute;top:3px;left:3px;width:20px;height:20px;border-radius:50%;background:#fff;box-shadow:0 2px 5px rgba(0,0,0,.2);transition:transform .25s;}
.switch.on .switch-knob{transform:translateX(20px);}
.hpill{display:inline-flex;align-items:center;gap:8px;background:#fff;border:1px solid #F0E2E3;border-radius:100px;padding:7px 15px;font-size:12.5px;font-weight:600;color:#5A4B4E;box-shadow:0 4px 14px rgba(110,11,14,.05);}
.hdot{width:7px;height:7px;border-radius:50%;background:#F23F44;}
.note{text-align:center;color:#A9999C;font-size:13.5px;margin-top:22px;}
.ctbl{width:100%;border-collapse:collapse;}
.ctbl th,.ctbl td{padding:15px 18px;text-align:center;border-bottom:1px solid #F1E6E7;font-size:14px;}
.ctbl th{font-size:14.5px;font-weight:700;color:#1A1014;}
.ctbl td:first-child,.ctbl th:first-child{text-align:left;color:#46383C;font-weight:500;}
.ctbl thead th{padding-top:0;}
.ctbl thead .feat{color:#F23F44;}
.ctbl .grp td{background:#FBF3EE;font-weight:700;color:#8A4A2A;font-size:12px;letter-spacing:.08em;text-transform:uppercase;text-align:left;}
.ctbl .feat{color:#1A1014;}
.chk{color:#1FA463;}
.dash{color:#C9B6B8;}
.tag{font-size:12px;color:#B98A5A;font-weight:600;}
.addon{display:flex;gap:16px;align-items:flex-start;background:#fff;border:1px solid #EFE2E3;border-radius:18px;padding:24px;transition:transform .2s ease, box-shadow .2s ease, border-color .2s;}
.addon:hover{transform:translateY(-3px);box-shadow:0 18px 38px rgba(110,11,14,.08);border-color:#F4D2D3;}
.addonic{flex:none;width:46px;height:46px;border-radius:13px;background:#FFF0F0;color:#F23F44;display:flex;align-items:center;justify-content:center;}
.guar{position:relative;overflow:hidden;background:linear-gradient(135deg,#FFF4F3 0%,#fff 58%);border:1px solid #F4D2D3;border-radius:24px;padding:40px;box-shadow:0 30px 64px rgba(242,63,68,.12);}
.guar::before{content:"";position:absolute;top:-90px;right:-70px;width:260px;height:260px;border-radius:50%;background:radial-gradient(circle,rgba(242,63,68,.10),transparent 70%);pointer-events:none;}
.guar-row{display:flex;align-items:center;gap:40px;position:relative;}
.guar-copy{flex:1;}
.guar-tag{display:inline-flex;align-items:center;gap:7px;font-size:11.5px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#F23F44;background:#FFF0F0;border:1px solid #FBD0D1;padding:6px 13px;border-radius:100px;margin-bottom:16px;}
.guar-h{font-size:31px;font-weight:800;letter-spacing:-1px;margin:0;color:#1A1014;line-height:1.06;}
.guar-p{font-size:16px;line-height:1.62;color:#5A4B4E;margin:14px 0 0;max-width:560px;}
.guar-policy{margin:18px 0 0;font-size:14.5px;font-weight:600;color:#1A1014;}
.guar-seal{flex:none;width:158px;height:158px;border-radius:50%;background:radial-gradient(circle at 50% 32%,#F76A6E,#C0242B);color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;box-shadow:0 22px 46px rgba(192,36,43,.34);position:relative;}
.guar-seal::before{content:"";position:absolute;inset:9px;border-radius:50%;border:2px dashed rgba(255,255,255,.5);}
.guar-seal b{font-size:52px;font-weight:800;line-height:.9;letter-spacing:-2.5px;}
.guar-seal span{font-size:13px;font-weight:700;letter-spacing:.22em;margin-top:2px;}
.guar-seal i{font-style:normal;font-size:11px;font-weight:600;opacity:.88;margin-top:5px;letter-spacing:.04em;}
.guarx{position:relative;max-width:1180px;margin:0 auto;}
.guarx-bg{position:absolute;inset:-56px -12px;pointer-events:none;overflow:hidden;z-index:0;}
.gx-glow{position:absolute;border-radius:50%;}
.gx-g1{width:360px;height:360px;left:-70px;top:-50px;background:radial-gradient(circle,rgba(242,63,68,.13),transparent 68%);animation:gxfloat 14s ease-in-out infinite;}
.gx-g2{width:320px;height:320px;right:1%;bottom:-90px;background:radial-gradient(circle,rgba(255,122,82,.14),transparent 70%);animation:gxfloat2 17s ease-in-out infinite;}
.gx-rings{position:absolute;right:6%;top:50%;width:380px;height:380px;margin-top:-190px;border-radius:50%;border:1.6px dashed rgba(242,63,68,.15);animation:gxspin 75s linear infinite;}
.gx-rings::before{content:"";position:absolute;inset:40px;border-radius:50%;border:1.4px dashed rgba(255,122,82,.13);}
.gx-rings::after{content:"";position:absolute;inset:84px;border-radius:50%;border:1.2px dashed rgba(242,63,68,.1);}
.guarx .guar-row{position:relative;z-index:1;padding:8px 6px;}
@keyframes gxfloat{0%,100%{transform:translate(0,0)}50%{transform:translate(22px,-16px)}}
@keyframes gxfloat2{0%,100%{transform:translate(0,0)}50%{transform:translate(-24px,16px)}}
@keyframes gxspin{to{transform:rotate(360deg)}}
@media(prefers-reduced-motion:reduce){.gx-g1,.gx-g2,.gx-rings{animation:none;}}
.gcompliance{display:flex;align-items:center;gap:9px;margin:30px 0 0;padding:22px 0 0;border-top:1px solid #F1E6E7;font-size:13.5px;font-weight:500;color:#5A4B4E;position:relative;}
.gcompliance svg{flex:none;}
.compstrip{display:flex;align-items:center;justify-content:center;flex-wrap:wrap;gap:14px 22px;margin-top:30px;}
.compstrip-lbl{font-size:13px;font-weight:600;color:#8A7A7D;}
.compbadges{display:flex;flex-wrap:wrap;justify-content:center;gap:10px;}
.compbadge{display:inline-flex;align-items:center;gap:8px;background:#fff;border:1px solid #EFE2E3;border-radius:100px;padding:8px 15px;font-size:13px;font-weight:600;color:#46383C;box-shadow:0 4px 12px rgba(110,11,14,.05);}
.cgdot{flex:none;width:7px;height:7px;border-radius:50%;background:#1FA463;}
.npill{display:inline-flex;align-items:center;gap:8px;background:#FFF0F0;color:#C0242B;border:1px dashed #F2B7B9;border-radius:10px;padding:8px 14px;font-size:13.5px;font-weight:700;letter-spacing:.02em;}
.faq{background:#fff;border:1px solid #F0E2E3;border-radius:15px;padding:0 22px;overflow:hidden;}
.faq summary{list-style:none;cursor:pointer;display:flex;align-items:center;justify-content:space-between;gap:16px;padding:20px 0;font-size:17px;font-weight:600;color:#1A1014;}
.faq summary::-webkit-details-marker{display:none;}
.faqx{flex:none;width:20px;height:20px;position:relative;}
.faqx::before,.faqx::after{content:"";position:absolute;background:#F23F44;border-radius:2px;transition:transform .25s ease, opacity .25s ease;}
.faqx::before{top:9px;left:2px;width:16px;height:2px;}
.faqx::after{left:9px;top:2px;width:2px;height:16px;}
.faq[open] .faqx::after{transform:scaleY(0);opacity:0;}
.faq p{margin:0;padding:0 0 22px;font-size:15.5px;line-height:1.66;color:#5A4B4E;max-width:760px;}
.tblwrap{overflow-x:auto;}
@media(max-width:920px){
  .h1{font-size:42px;letter-spacing:-1.4px;}
  .h2{font-size:32px;letter-spacing:-1px;}
  .sec{padding:72px 22px;}
  .pgrid{grid-template-columns:1fr;}
  .addgrid{grid-template-columns:1fr !important;}
  .guar-row{flex-direction:column-reverse;align-items:flex-start;gap:24px;}
  .ctbl th,.ctbl td{padding:13px 12px;font-size:13px;}
}

h1,h2,h3,h4,.h1,.h2,.h3,.hero h1,.eyebrow{text-wrap:balance;}p,li,.body,.lead,.sub,figcaption,blockquote{text-wrap:pretty;}/*om-balance-rule*/
`;

const Tick = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
);

type Tier = { credits: string; name: string; users: number; yr?: number; mo?: number; extra?: number; custom?: boolean };

const annualTiers: Tier[] = [
  { credits: '100', name: 'Starter', yr: 1663, users: 3, extra: 21 },
  { credits: '300', name: 'Basic', yr: 3343, users: 5, extra: 11 },
  { credits: '1,000', name: 'Business', yr: 8383, users: 10, extra: 10 },
  { credits: '3,000+', name: 'Premium', custom: true, users: 20 },
];
const monthlyTiers: Tier[] = [
  { credits: '10', name: 'Starter', mo: 198, users: 3, extra: 20 },
  { credits: '30', name: 'Basic', mo: 398, users: 3, extra: 14 },
  { credits: '100', name: 'Business', mo: 998, users: 5, extra: 10 },
  { credits: '300', name: 'Premium', custom: true, users: 10 },
  { credits: '1,000', name: 'Enterprise', custom: true, users: 20 },
  { credits: '2,500', name: 'Enterprise Plus', custom: true, users: 30 },
];

const faqItems = [
  { q: "How does Testlify's pricing work?", a: "Testlify uses flexible credit-based and unlimited plans. You pick a plan by the number of credits and user seats you need. A credit is only spent when a qualified candidate starts an assessment — one credit per candidate. Need more features like ATS integrations or white-labeling? Reach out to sales for a custom plan." },
  { q: "Is there a free trial available?", a: "Yes — every plan starts with a 7-day free trial so you can explore the full platform. No credit card is required during the trial period." },
  { q: "Will my pricing change after I sign up?", a: "No. Your base plan pricing is locked for 24 months from your original purchase date, with no changes during this period. After 24 months your plan transitions to the then-current pricing unless agreed otherwise. New add-ons, features, upgrades or additional usage are billed at the applicable rates at the time." },
  { q: "What happens if I don't use all my credits?", a: "Credits do not roll over and expire at the end of the billing cycle. If you expect lower usage going forward, you can adjust your plan to better match your needs — or buy additional credits any time if you run out." },
  { q: "Can I pay monthly or yearly?", a: "Yes — you can pay monthly or annually on every available plan. Annual billing saves you roughly 20% versus paying month to month." },
  { q: "How can I pay?", a: "You can pay directly via credit or debit card by adding your card on file. Wire transfer is also available as a payment option. Additional candidate usage is billed monthly to the card on file." },
];

export default function PricingPage() {
  const [annual, setAnnual] = useState(true);
  const [tier, setTier] = useState(0);

  const fmt = (n: number) => '$' + n.toLocaleString();
  const tiers = annual ? annualTiers : monthlyTiers;
  const i = Math.min(tier, tiers.length - 1);
  const t = tiers[i];
  const credLbl = annual ? 'Credits per year' : 'Credits per month';
  const planName = t.name;

  const f1 = t.credits + ' credits';
  const f2 = t.users + ' users';
  const credNum = parseInt(t.credits.replace(/[^0-9]/g, ''), 10);

  let stdPrice = '', stdPer = '', stdCta = '', stdCtaCls = '', perCredit = '', billRight = '', f3 = '';
  if (t.custom) {
    stdPrice = 'Custom'; stdPer = '';
    billRight = annual ? 'Billed annually · contact sales' : 'Contact sales';
    perCredit = 'Volume-based per-credit pricing.';
    stdCta = 'Contact sales'; stdCtaCls = 'btn-ghost'; f3 = 'Volume per-credit pricing';
  } else if (annual) {
    stdPrice = fmt(Math.round(t.yr! / 12)); stdPer = '/mo';
    billRight = 'Billed at ' + fmt(t.yr!) + '/year';
    perCredit = '$' + Math.round(t.yr! / credNum) + ' per candidate credit.';
    f3 = fmt(t.extra!) + ' per additional credits';
    stdCta = 'Start 7 days free trial'; stdCtaCls = 'btn-primary';
  } else {
    stdPrice = fmt(t.mo!); stdPer = '/mo';
    billRight = 'Billed monthly';
    perCredit = '$' + Math.round(t.mo! / credNum) + ' per candidate credit.';
    f3 = fmt(t.extra!) + ' per additional credits';
    stdCta = 'Start 7 days free trial'; stdCtaCls = 'btn-primary';
  }

  const tierOpts = tiers.map((x, idx) => ({ value: String(idx), label: x.credits + ' credits' }));

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <SiteHeader announcement="New · Pay less per credit as your hiring volume grows" />
      <section className="phero"><div className="wrap" style={{ maxWidth: '1000px' }}>
        <p className="eyebrow reveal" style={{ marginBottom: '14px' }}>Pricing<b>.</b></p>
        <h1 className="h1 reveal" style={{ transitionDelay: '.04s' }}>Pay only for what you use</h1>
        <p className="lead reveal" style={{ margin: '20px auto 0', maxWidth: '760px', transitionDelay: '.06s' }}>No annual contract, no per-seat fees — you only spend a credit when a candidate actually starts an assessment, so every dollar maps to real screening, not applicants who drop off.</p>
        <div className="leadpill reveal" style={{ transitionDelay: '.08s' }}><b>How credits work</b><span style={{ fontWeight: 300 }}>Used only when a candidate starts an assessment</span><span className="ldot">•</span><span style={{ fontWeight: 300 }}>One credit per candidate</span><span className="ldot">•</span><span style={{ fontWeight: 300 }}>Credits reset each cycle</span></div>
        <div className="reveal" style={{ marginTop: '30px', transitionDelay: '.12s' }}>
          <div className="toggle">
            <button className={`tgl ${annual ? '' : 'on'}`} onClick={() => { setAnnual(false); setTier(2); }}>Monthly</button>
            <button className={`tgl ${annual ? 'on' : ''}`} onClick={() => { setAnnual(true); setTier(0); }}>Annual <span className="tsave">Save 20%</span></button>
          </div>
        </div>
        <h2 className="h2 reveal" style={{ fontSize: '30px', letterSpacing: '-1px', margin: '46px 0 0', transitionDelay: '.16s' }}>Trusted by 1,500+ hiring teams</h2>
        <p className="reveal" style={{ fontSize: '14px', fontWeight: 500, color: '#8A7A7D', margin: '10px 0 0', transitionDelay: '.18s' }}>5M+ candidates assessed · 100+ ATS integrations on every plan · 4.7 on G2</p>
      </div></section>
      <section className="psec"><div className="wrap">
        <div className="pgrid">
          <div className="pcard feat reveal" style={{ transitionDelay: '.02s' }}>
            <div className="phead"><span className="picon"><svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" /></svg></span><p className="pname">Standard</p><span className="ptag ptag-hot">Most popular</span></div>
            <p className="pdesc">A credit plan that scales with your hiring. The more you assess, the less each credit costs.</p>

            <div className="ptoprow"><div className="pcol"><p className="credlbl">{planName} plan</p><div className="pprice"><span className="pamt">{stdPrice}</span><span className="pper">{stdPer}</span></div><p className="pcsub">{billRight}</p></div><div className="pright"><p className="credlbl">{credLbl}</p><div className="credwrap"><select className="creddrop" value={String(i)} onChange={(e) => setTier(parseInt(e.target.value, 10))}>{tierOpts.map((o) => (<option key={o.value} value={o.value}>{o.label}</option>))}</select><span className="credchev"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg></span></div><p className="pcsub">{perCredit}</p></div></div>
            <a className={`btn ${stdCtaCls} pcta`} href="#">{stdCta}</a>
            <div className="pdiv"></div>
            <p className="pinc">Testlify interview assessments:</p>
            <ul className="pfeat">
              <li><Tick /><span className="flab"><span className="tipword">{f1}</span><span className="qmk">?</span></span></li>
              <li><Tick /><span className="flab"><span className="tipword">{f2}</span><span className="qmk">?</span></span></li>
              <li><Tick /><span className="flab"><span className="tipword">{f3}</span><span className="qmk">?</span></span></li>
              <li><Tick /><span className="flab">Unlimited assessments</span></li>
              <li><Tick /><span className="flab">3,000+ science-backed tests</span></li>
              <li><Tick /><span className="flab">180k+ validated questions</span></li>
              <li><Tick /><span className="flab">150+ interview templates</span></li>
              <li><Tick /><span className="flab">25+ custom question types</span></li>
              <li><Tick /><span className="flab">Custom tests and coding challenges</span></li>
              <li><Tick /><span className="flab">Role-based job simulations<span className="qmk">?</span></span></li>
              <li><Tick /><span className="flab">AI video, audio, and phone interviews<span className="qmk">?</span></span></li>
              <li><Tick /><span className="flab">AI resume scoring<span className="qmk">?</span></span></li>
              <li><Tick /><span className="flab">Secure proctoring</span></li>
              <li><Tick /><span className="flab">Custom brand appearance<span className="qmk">?</span></span></li>
              <li><Tick /><span className="flab">Email and chat support</span></li>
              <li className="padlbl">Add-ons:<span className="qmk">?</span></li>
              <li><Tick /><span className="flab">Integrations<span className="qmk">?</span></span></li>
              <li><Tick /><span className="flab">White label<span className="qmk">?</span></span></li>
              <li><Tick /><span className="flab">User seats</span></li>
              <li><Tick /><span className="flab">Analytics</span></li>
            </ul>
            <div className="pbot"></div>
            <a className="btn btn-ghost pcta pcta-bottom" href="#">{stdCta}</a>
          </div>
          <div className="pcard reveal" style={{ transitionDelay: '.08s' }}>
            <div className="phead"><span className="picon"><svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8z" /></svg></span><p className="pname">Custom</p><span className="ptag">Built for you</span></div>
            <p className="pdesc">For organizations assessing 25,000+ candidates a year that need custom workflows and compliance.</p>
            <div className="pcol"><p className="credlbl">Custom plan</p><div className="pprice"><span className="pamt">Custom</span></div></div>
            <p className="pcsub">Tailored pricing for your volume.</p>
            <a className="btn btn-ghost pcta" href="#">Contact sales</a>
            <div className="pdiv"></div>
            <p className="pinc">Everything from plans, and:</p>
            <ul className="pfeat">
              <li><Tick /><span className="flab">100+ ATS integrations</span></li>
              <li><Tick /><span className="flab">API access and webhooks</span></li>
              <li><Tick /><span className="flab">Advanced proctoring</span></li>
              <li><Tick /><span className="flab">ID verification and system checks</span></li>
              <li><Tick /><span className="flab">Enterprise-grade security controls</span></li>
              <li><Tick /><span className="flab">Regional data storage options</span></li>
              <li><Tick /><span className="flab">Single Sign-On (SSO)</span></li>
              <li><Tick /><span className="flab">Guaranteed uptime SLA</span></li>
              <li><Tick /><span className="flab">Priority support SLAs</span></li>
              <li><Tick /><span className="flab">Remove Testlify branding</span></li>
              <li><Tick /><span className="flab">Custom domain support and SMTP setup</span></li>
              <li><Tick /><span className="flab">Custom reporting and analytics</span></li>
              <li><Tick /><span className="flab">Onboarding and team training program</span></li>
              <li><Tick /><span className="flab">White label and reseller setup</span></li>
              <li><Tick /><span className="flab">Dedicated customer success manager</span></li>
            </ul>
            <div className="pbot"></div>
            <a className="btn btn-ghost pcta pcta-bottom" href="#">Contact sales</a>
          </div>
        </div>
        <div className="unlim reveal"><span>Looking for an unlimited credit plan? We&apos;ve got you covered.</span><a className="btn btn-ghost" href="#">Contact sales</a></div>
        <p className="note reveal">No credit card required · Cancel anytime · Base plan pricing locked for 24 months · 25% off for non-profits with code TESTLIFYCARES25</p>
      </div></section>
      <section className="sec" style={{ background: '#FBF3EE', padding: '74px 28px' }}><div className="wrap">
        <div className="guarx reveal">
          <div className="guarx-bg" aria-hidden="true"><span className="gx-glow gx-g1"></span><span className="gx-glow gx-g2"></span><span className="gx-rings"></span></div>
          <div className="guar-row">
            <div className="guar-copy">
              <span className="guar-tag"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>Risk-free</span>
              <h2 className="guar-h">Try Testlify risk-free for 30 days</h2>
              <p className="guar-p">Run real assessments, shortlist real candidates, and see the hiring-quality difference for yourself. If Testlify isn&apos;t right for your team, we&apos;ll refund your first 30 days in full.</p>
              <p className="guar-policy">No questions asked. Cancel anytime.</p>
            </div>
            <div className="guar-seal"><b>30</b><span>DAYS</span><i>money-back</i></div>
          </div>
        </div>
      </div></section>
      <section className="sec" style={{ paddingTop: '84px' }}><div className="wrap">
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 48px' }}>
          <p className="eyebrow reveal">Compare plans<b>.</b></p>
          <h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>Standard vs Custom, side by side</h2>
        </div>
        <div className="tblwrap reveal">
          <table className="ctbl">
            <thead><tr><th style={{ width: '42%' }}></th><th className="feat">Standard</th><th>Custom</th></tr></thead>
            <tbody>
              <tr className="grp"><td colSpan={3}>Workspace</td></tr>
              <tr><td>Test library</td><td className="feat">3,000+</td><td>3,000+</td></tr>
              <tr><td>Tests &amp; custom questions per assessment</td><td className="feat">Unlimited</td><td>Unlimited</td></tr>
              <tr><td>AI resume screening</td><td className="feat">Free</td><td>Free</td></tr>
              <tr><td>Multilingual support</td><td className="feat">15+ languages</td><td>15+ languages</td></tr>
              <tr><td>White labeling</td><td className="feat"><span className="tag">Add-on</span></td><td><span className="chk">✓ Included</span></td></tr>
              <tr><td>100+ ATS integrations</td><td className="feat"><span className="tag">Add-on</span></td><td><span className="chk">✓ Included</span></td></tr>
              <tr><td>SAML SSO &amp; 2FA</td><td className="feat"><span className="tag">Add-on</span></td><td><span className="chk">✓ Included</span></td></tr>
              <tr><td>Additional user seats</td><td className="feat">$15 / seat</td><td><span className="chk">✓ Included</span></td></tr>
              <tr className="grp"><td colSpan={3}>Interviews &amp; simulations</td></tr>
              <tr><td>One-way video &amp; audio interviews</td><td className="feat"><span className="chk">✓</span></td><td><span className="chk">✓</span></td></tr>
              <tr><td>Two-way video, audio &amp; chat AI interviews</td><td className="feat"><span className="chk">✓</span></td><td><span className="chk">✓</span></td></tr>
              <tr><td>MS Office &amp; Google Workspace simulations</td><td className="feat"><span className="chk">✓</span></td><td><span className="chk">✓</span></td></tr>
              <tr><td>Live coding &amp; typing simulations</td><td className="feat"><span className="chk">✓</span></td><td><span className="chk">✓</span></td></tr>
              <tr className="grp"><td colSpan={3}>Proctoring &amp; anti-cheat</td></tr>
              <tr><td>Tab tracking, face detection &amp; AI-assist detection</td><td className="feat"><span className="chk">✓</span></td><td><span className="chk">✓</span></td></tr>
              <tr><td>Photo ID verification</td><td className="feat">$0.50 / attempt</td><td>$0.50 / attempt</td></tr>
              <tr><td>Live video proctoring &amp; screen recording</td><td className="feat">$5 / attempt</td><td>$5 / attempt</td></tr>
              <tr className="grp"><td colSpan={3}>Security &amp; compliance</td></tr>
              <tr><td>SOC 2 Type II · ISO 27001 · GDPR · CCPA</td><td className="feat"><span className="chk">✓</span></td><td><span className="chk">✓</span></td></tr>
              <tr><td>Role-based access control</td><td className="feat"><span className="chk">✓</span></td><td><span className="chk">✓</span></td></tr>
              <tr className="grp"><td colSpan={3}>Support</td></tr>
              <tr><td>Help center, chat, email &amp; call support</td><td className="feat"><span className="chk">✓</span></td><td><span className="chk">✓</span></td></tr>
              <tr><td>Personalized onboarding</td><td className="feat"><span className="dash">—</span></td><td><span className="chk">✓</span></td></tr>
              <tr><td>Dedicated customer success manager</td><td className="feat"><span className="dash">—</span></td><td><span className="chk">✓</span></td></tr>
            </tbody>
          </table>
        </div>
      </div></section>
      <section className="sec" style={{ background: '#FBF3EE', padding: '88px 28px' }}><div className="wrap" style={{ maxWidth: '840px' }}>
        <div style={{ textAlign: 'center', margin: '0 auto 44px' }}>
          <p className="eyebrow reveal">Questions<b>.</b></p>
          <h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>Pricing FAQ</h2>
        </div>
        <div className="reveal">
          <FAQ items={faqItems} />
        </div>
      </div></section>
      <SecuritySection eyebrow="Security" heading="Built to keep your hiring data secure" sub="Your candidate and recruitment data is protected by independently audited controls and global privacy compliance." />
      <CtaBand />
      <SiteFooter />
    </>
  );
}
