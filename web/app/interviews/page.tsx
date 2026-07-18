'use client';

import { useState, type ReactNode } from 'react';
import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaButton from '@/components/CtaButton';
import CtaBand from '@/components/CtaBand';

const CSS = `
*{box-sizing:border-box;}
html{scroll-behavior:smooth;}
body{margin:0;font-family:'Poppins',sans-serif;-webkit-font-smoothing:antialiased;color:#1A1014;background:#fff;}
a{text-decoration:none;color:inherit;}
@keyframes heroGrad{0%{background-position:0% 0%}50%{background-position:100% 100%}100%{background-position:0% 0%}}
@keyframes floaty{0%,100%{transform:translateY(0)}50%{transform:translateY(-14px)}}
@keyframes floaty2{0%,100%{transform:translateY(0)}50%{transform:translateY(12px)}}
@keyframes blob{0%,100%{transform:translate(0,0) scale(1)}33%{transform:translate(40px,-26px) scale(1.12)}66%{transform:translate(-26px,22px) scale(.93)}}
@keyframes sheen{0%{left:-140%}100%{left:140%}}
@property --cardbang{syntax:"<angle>";initial-value:0deg;inherits:false;}
@keyframes cardrun{to{--cardbang:360deg;}}
@keyframes shine{0%{transform:translateX(-130%) skewX(-18deg)}55%,100%{transform:translateX(260%) skewX(-18deg)}}
.tl-wrap{max-width:1240px;margin:0 auto;padding:0 28px;}
.tl-hero{position:relative;overflow:hidden;padding:78px 28px 56px;background:radial-gradient(1100px 520px at 82% 4%,#FCE0E1 0%,rgba(252,224,225,0) 58%),radial-gradient(900px 540px at 4% 62%,#FFEDED 0%,rgba(255,237,237,0) 52%),linear-gradient(180deg,#FFF8F7 0%,#FFFBFA 72%,#fff 100%);background-size:170% 170%;animation:heroGrad 30s ease-in-out infinite;}
.tl-blob{position:absolute;bottom:-140px;left:-90px;width:380px;height:380px;border-radius:50%;background:radial-gradient(circle at 60% 40%,#FDD5D6,#FBA3A5);filter:blur(34px);opacity:.16;animation:blob 22s ease-in-out infinite reverse;pointer-events:none;}
.tl-hgrid{position:relative;display:grid;grid-template-columns:1.06fr .94fr;gap:56px;align-items:center;}
.tl-badge{display:inline-flex;align-items:center;gap:9px;background:#fff;border:1px solid #FBD0D1;padding:8px 16px;border-radius:100px;box-shadow:0 6px 18px rgba(242,63,68,.10);}
.tl-badge span.d{width:8px;height:8px;border-radius:50%;background:#F23F44;}
.tl-badge span.t{font-size:13.5px;font-weight:600;color:#A91E23;letter-spacing:.2px;}
.tl-trust{display:flex;align-items:center;gap:26px;flex-wrap:wrap;margin-top:18px;font-size:14.5px;color:#8A7A7D;font-weight:500;}
.tl-trust span{display:inline-flex;align-items:center;gap:7px;}
.tl-trust b{color:#F23F44;font-weight:700;}
.tl-vis{position:relative;}
.tl-vcard{position:relative;background:#fff;border-radius:24px;box-shadow:0 30px 70px rgba(110,11,14,.18);padding:18px;border:1px solid #FBE4E5;z-index:2;}
.tl-vbrowser{display:flex;align-items:center;gap:7px;padding:0 2px 14px;border-bottom:1px solid #F4E7E8;margin-bottom:14px;}
.tl-dot{width:10px;height:10px;border-radius:50%;}
.tl-vurl{margin-left:10px;font-size:12px;color:#A9999C;font-weight:500;background:#FBF3F3;padding:4px 12px;border-radius:8px;flex:1;}
.tl-vsearch{display:flex;align-items:center;gap:9px;border:1.5px solid #F0DEDF;border-radius:11px;padding:11px 14px;color:#B79EA1;font-size:13.5px;font-weight:500;margin-bottom:12px;}
.tl-vsearch svg{color:#F23F44;flex:none;}
.tl-vchips{display:flex;gap:8px;margin-bottom:14px;}
.tl-vchip{font-size:12px;font-weight:600;color:#8A7A7D;background:#FBF3F3;border:1px solid #F2E4E5;padding:5px 13px;border-radius:100px;}
.tl-vchip.on{background:#F23F44;color:#fff;border-color:#F23F44;}
.tl-vlist{display:flex;flex-direction:column;gap:9px;}
.tl-vitem{display:flex;align-items:center;gap:12px;border:1.5px solid #F2E6E7;border-radius:13px;padding:11px 13px;transition:border-color .25s,box-shadow .25s;}
.tl-vitem:first-child{background:#FFF6F6;border-color:#FBD0D1;}
.tl-vico{width:38px;height:38px;border-radius:11px;display:flex;align-items:center;justify-content:center;flex-shrink:0;}
.tl-vinfo{flex:1;display:flex;flex-direction:column;gap:3px;min-width:0;}
.tl-vnm{font-size:14.5px;font-weight:700;color:#1A1014;letter-spacing:-.2px;}
.tl-vmeta{font-size:12px;color:#8A7A7D;font-weight:500;}
.tl-vtag{font-size:10.5px;font-weight:700;letter-spacing:.03em;text-transform:uppercase;color:#1F9D6B;background:#E7F6EE;padding:4px 9px;border-radius:100px;flex-shrink:0;}
.tl-float{position:absolute;background:#fff;border-radius:16px;box-shadow:0 18px 40px rgba(110,11,14,.16);padding:13px 17px;display:flex;align-items:center;gap:12px;border:1px solid #FBE4E5;z-index:3;}
.tl-float .fl{font-size:12px;color:#8A7A7D;font-weight:500;}
.tl-float .fv{font-size:15.5px;font-weight:700;color:#1A1014;}
.tl-f1{top:-26px;right:14px;animation:floaty 6s ease-in-out infinite;}
.tl-f2{bottom:-24px;left:-30px;animation:floaty2 7s ease-in-out infinite;}
[data-reveal]{opacity:0;transform:translateY(28px);}
[data-reveal].in{opacity:1;transform:none;transition:opacity .7s cubic-bezier(.22,1,.36,1),transform .7s cubic-bezier(.22,1,.36,1);}
.tl-eyebrow{font-size:13px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:#F23F44;margin:0 0 16px;}
.tl-eyebrow span{color:#CBB6B9;}
.tl-h1{font-size:52px;line-height:1.05;font-weight:800;letter-spacing:-1.4px;margin:0;max-width:780px;}
.tl-h1 em{font-style:normal;color:#F23F44;}
.tl-sub{font-size:18px;line-height:1.62;color:#5A4B4E;margin:20px 0 0;max-width:600px;}
.tl-hbtns{display:flex;flex-wrap:wrap;gap:14px;margin-top:34px;}
.tl-hstats{display:flex;gap:34px;margin-top:30px;}
.tl-hstat{display:flex;flex-direction:column;gap:2px;}
.tl-hstat b{font-size:28px;font-weight:800;letter-spacing:-1px;color:#F23F44;line-height:1;}
.tl-hstat span{font-size:13.5px;font-weight:500;color:#8A7A7D;}
.tl-search{position:relative;max-width:none;flex:1;min-width:230px;margin:0;}
.tl-search .si{position:absolute;left:17px;top:50%;transform:translateY(-50%);color:#C0989B;display:flex;}
.tl-search .si svg{width:18px;height:18px;}
.tl-search input{width:100%;border:1.6px solid #F0DBDC;border-radius:14px;padding:13px 18px 13px 48px;font-size:15px;font-family:inherit;color:#1A1014;background:#fff;box-shadow:0 12px 36px rgba(110,11,14,.06);transition:border-color .2s, box-shadow .2s;}
.tl-search input:focus{outline:none;border-color:#F23F44;box-shadow:0 12px 40px rgba(242,63,68,.12);}
.tl-search input::placeholder{color:#B79DA0;}
.pops{display:flex;align-items:center;gap:9px;flex-wrap:wrap;margin-top:18px;}
.pops .pl{font-size:13px;color:#8A767A;font-weight:500;margin-right:2px;}
.pchip{font-size:13.5px;font-weight:600;color:#46383C;background:#fff;border:1px solid #EFDDDE;padding:7px 14px;border-radius:100px;cursor:pointer;transition:all .18s;}
.pchip:hover{border-color:#F23F44;color:#F23F44;background:#FFF4F3;}
.tl-stats{display:flex;align-items:center;gap:30px;flex-wrap:wrap;margin-top:34px;padding-top:30px;border-top:1px solid #F2E3E4;}
.tl-stat .num{font-size:30px;font-weight:800;letter-spacing:-.5px;color:#1A1014;}
.tl-stat .lab{font-size:13.5px;color:#7C6A6D;font-weight:500;margin-top:1px;}
.tl-sdiv{width:1px;height:38px;background:#EEDFE0;}
.tl-cats{padding:56px 28px 8px;}
.sec-head{display:flex;align-items:center;justify-content:space-between;gap:24px 20px;flex-wrap:wrap;margin-bottom:8px;}
.sh-tools{display:flex;align-items:center;gap:10px;flex-wrap:wrap;flex:1;min-width:280px;justify-content:flex-end;}
.sec-h2{font-size:30px;font-weight:800;letter-spacing:-.8px;margin:0;}
.sec-p{font-size:15px;color:#7C6A6D;margin:5px 0 0;}
.catgrid{display:flex;flex-wrap:wrap;gap:10px;}
.cattile{display:inline-flex;align-items:center;gap:10px;text-align:left;background:#fff;border:1.4px solid #F0E2E3;border-radius:100px;padding:8px 15px 8px 9px;cursor:pointer;font-family:inherit;transition:all .16s;}
.cattile:hover{border-color:#F4B9BB;box-shadow:0 8px 18px rgba(110,11,14,.07);transform:translateY(-1px);}
.cattile.on{border-color:#F23F44;background:#FFF6F5;box-shadow:0 8px 18px rgba(242,63,68,.12);}
.catico{flex:none;width:30px;height:30px;border-radius:50%;background:#FFF0EF;color:#F23F44;display:flex;align-items:center;justify-content:center;transition:all .16s;}
.catico svg{width:16px;height:16px;}
.cattile.on .catico{background:#F23F44;color:#fff;}
.cattile .cnm{font-size:14px;font-weight:600;color:#27181B;line-height:1;}
.cattile .cct{font-size:12px;color:#B29A9E;font-weight:600;background:#F7ECEC;padding:2px 8px;border-radius:100px;line-height:1.3;}
.cattile.on .cct{background:#FCE0DE;color:#C43439;}
.tl-res{padding:40px 28px 30px;}
.toolbar{display:flex;align-items:center;justify-content:flex-end;gap:18px;flex-wrap:wrap;margin-bottom:20px;min-height:8px;}
.tb-left{display:flex;align-items:center;gap:14px;flex-wrap:wrap;}
.tb-lab{font-size:13px;font-weight:600;color:#8A767A;}
.lvsel{position:relative;display:inline-flex;}
.lvbtn{display:inline-flex;align-items:center;gap:24px;font-family:inherit;font-size:15px;font-weight:600;color:#46383C;background:#fff;border:1.6px solid #F0DBDC;border-radius:14px;padding:13px 15px 13px 17px;cursor:pointer;box-shadow:0 12px 36px rgba(110,11,14,.06);transition:all .16s;white-space:nowrap;}
.lvbtn:hover{border-color:#F4B9BB;}
.lvsel.open .lvbtn{border-color:#F23F44;box-shadow:0 12px 40px rgba(242,63,68,.12);}
.lvbtn .lvcaret{color:#B79DA0;display:flex;transition:transform .22s cubic-bezier(.2,.7,.3,1);}
.lvsel.open .lvbtn .lvcaret{transform:rotate(180deg);color:#F23F44;}
.lvback{position:fixed;inset:0;z-index:55;background:transparent;}
.lvmenu{position:absolute;top:calc(100% + 8px);right:0;min-width:190px;background:#fff;border:1px solid #F4E4E5;border-radius:14px;padding:6px;box-shadow:0 26px 54px rgba(110,11,14,.16);z-index:60;display:flex;flex-direction:column;gap:2px;}
.lvopt{display:flex;align-items:center;width:100%;text-align:left;font-family:inherit;font-size:14px;font-weight:600;color:#2A1A1D;background:none;border:0;padding:10px 13px;border-radius:10px;cursor:pointer;transition:background .14s,color .14s;}
.lvopt:hover{background:#FFF0F0;color:#F23F44;}
.lvopt.on{background:#FFF4F3;color:#F23F44;}
.lvpill{border:0;background:transparent;font-family:inherit;font-size:13.5px;font-weight:600;color:#6A585B;padding:8px 15px;border-radius:8px;cursor:pointer;transition:all .16s;}
.lvpill:hover{color:#F23F44;}
.lvpill.on{background:#fff;color:#F23F44;box-shadow:0 2px 8px rgba(110,11,14,.1);}
.tb-right{display:flex;align-items:center;gap:16px;}
.rescount{font-size:14px;color:#6A585B;font-weight:500;}
.rescount b{color:#1A1014;font-weight:700;}
.actchip{display:inline-flex;align-items:center;gap:8px;font-size:13px;font-weight:600;color:#F23F44;background:#FFF0EF;border:1px solid #F8CFD0;padding:7px 8px 7px 13px;border-radius:100px;}
.actx{width:18px;height:18px;border-radius:50%;background:#F23F44;color:#fff;border:0;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:11px;line-height:1;}
.clearbtn{font-size:13.5px;font-weight:600;color:#8A767A;background:none;border:0;cursor:pointer;font-family:inherit;text-decoration:underline;text-underline-offset:3px;}
.clearbtn:hover{color:#F23F44;}
.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;}
.acc{display:flex;flex-direction:column;gap:14px;}
.accg{border:1.4px solid #EFE1E2;border-radius:18px;background:#fff;overflow:hidden;transition:box-shadow .2s,border-color .2s;}
.accg.on{border-color:#F4C7C8;box-shadow:0 16px 34px rgba(110,11,14,.08);}
.acch{display:flex;align-items:center;gap:15px;width:100%;background:none;border:0;font-family:inherit;cursor:pointer;padding:20px 24px;text-align:left;transition:background .16s;}
.acch:hover{background:#FFFAF9;}
.acci{flex:none;width:40px;height:40px;border-radius:11px;background:#FFF0EF;color:#F23F44;display:flex;align-items:center;justify-content:center;transition:all .18s;}
.acci svg{width:20px;height:20px;}
.accg.on .acci{background:#F23F44;color:#fff;}
.accl{font-size:17px;font-weight:700;letter-spacing:-.3px;color:#1A1014;}
.accc{font-size:13px;font-weight:600;color:#8A767A;background:#F7ECEC;padding:3px 11px;border-radius:100px;}
.accg.on .accc{background:#FCE0DE;color:#C43439;}
.accsub{font-size:13px;color:#9A868A;font-weight:500;margin-left:2px;}
.accx{margin-left:auto;color:#C0989B;display:flex;transition:transform .24s cubic-bezier(.2,.7,.3,1);}
.accg.on .accx{transform:rotate(180deg);color:#F23F44;}
.accb{padding:2px 24px 26px;}
.card{display:flex;flex-direction:column;background:#fff;border:1.4px solid #EFE1E2;border-radius:16px;padding:22px 22px 18px;transition:transform .3s cubic-bezier(.2,.7,.3,1),border-color .3s,box-shadow .3s;position:relative;overflow:hidden;}
.card::after{content:"";position:absolute;inset:0;border-radius:16px;padding:1.8px;background:conic-gradient(from var(--cardbang),transparent 0deg,var(--cbc,#F23F44) 55deg,transparent 150deg,transparent 360deg);-webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);mask-composite:exclude;opacity:0;transition:opacity .35s ease;pointer-events:none;z-index:1;}
.cbc-beg{--cbc:#8FD9AE;}
.cbc-int{--cbc:#F4C36A;}
.cbc-adv{--cbc:#F39BA0;}
.card:hover{border-color:transparent;box-shadow:0 22px 46px rgba(110,11,14,.12);transform:translateY(-4px);}
.card:hover::after{opacity:1;animation:cardrun 2.4s linear infinite;}
.card-top{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-bottom:15px;}
.tbadge{display:inline-flex;align-items:center;gap:8px;font-size:12px;font-weight:600;color:#7A686B;white-space:nowrap;min-width:0;}
.tbadge>span:last-child{overflow:hidden;text-overflow:ellipsis;}
.tbico{width:30px;height:30px;border-radius:8px;background:#FFF0EF;color:#F23F44;display:flex;align-items:center;justify-content:center;flex:none;}
.lvtag{font-size:11px;font-weight:700;letter-spacing:.03em;padding:4px 10px;border-radius:100px;flex:none;}
.lv-beg{background:#E8F6EE;color:#1B7F4B;}
.lv-int{background:#FFF3E0;color:#B5740F;}
.lv-adv{background:#FDE7E7;color:#D23B40;}
.card-title{font-size:18.5px;font-weight:700;letter-spacing:-.3px;color:#1A1014;margin:0 0 8px;line-height:1.25;}
.card-desc{font-size:14px;line-height:1.55;color:#6C5A5D;margin:0 0 18px;flex:1;}
.card-meta{display:flex;align-items:center;gap:16px;padding-top:15px;border-top:1px solid #F4E7E8;}
.mi{display:flex;align-items:center;gap:6px;font-size:12.5px;color:#7C6A6D;font-weight:500;}
.mi svg{color:#C0989B;flex:none;}
.card-cta{display:flex;align-items:center;gap:6px;margin-left:auto;font-size:13px;font-weight:700;color:#F23F44;opacity:0;transform:translateX(-6px);transition:all .2s;}
.card:hover .card-cta{opacity:1;transform:translateX(0);}
.empty{text-align:center;padding:64px 20px;border:1.5px dashed #EAD7D9;border-radius:18px;background:#FDF7F6;}
.empty h3{font-size:20px;font-weight:700;margin:14px 0 6px;}
.empty p{font-size:15px;color:#7C6A6D;margin:0 0 20px;}
.empty .eico{width:54px;height:54px;border-radius:14px;background:#FFF0EF;color:#F23F44;display:inline-flex;align-items:center;justify-content:center;}
.btn{display:inline-flex;align-items:center;gap:9px;font-weight:700;font-size:15px;border-radius:12px;padding:14px 24px;cursor:pointer;border:0;font-family:inherit;transition:all .2s;}
.btn-p{position:relative;overflow:hidden;background:#F23F44;color:#fff;box-shadow:0 12px 28px rgba(242,63,68,.28);}
.btn-p::after{content:"";position:absolute;top:0;left:-140%;width:60%;height:100%;background:linear-gradient(115deg,transparent,rgba(255,255,255,.45),transparent);transform:skewX(-20deg);transition:none;}
.btn-p:hover{background:#DC3137;transform:translateY(-2px);box-shadow:0 18px 36px rgba(242,63,68,.36);}
.btn-p:hover::after{animation:sheen .8s ease;}
.btn-p svg{transition:transform .25s ease;}
.btn-p:hover svg{transform:translateX(4px);}
.btn-g{background:#fff;color:#1A1014;border:1.5px solid #EADDDE;}
.btn-g:hover{border-color:#F23F44;color:#F23F44;}
.reqband{padding:40px 28px;}
.reqcard{max-width:1240px;margin:0 auto;background:#FBF3EE;border:1px solid #F1E0DC;border-radius:22px;padding:40px 44px;display:flex;align-items:center;justify-content:space-between;gap:30px;flex-wrap:wrap;}
.reqcard h3{font-size:24px;font-weight:800;letter-spacing:-.5px;margin:0 0 7px;}
.reqcard p{font-size:15px;color:#6C5A5D;margin:0;max-width:520px;line-height:1.55;}
.cta-btns{display:flex;align-items:center;justify-content:center;gap:14px;flex-wrap:wrap;}
.cta-mini{display:flex;align-items:center;justify-content:center;gap:22px;flex-wrap:wrap;margin-top:24px;font-size:13.5px;color:#B7A4A7;}
.cta-mini span{display:inline-flex;align-items:center;gap:7px;}
.fx-sec{padding:56px 28px 8px;}
.fx-head{margin-bottom:22px;}
.fx-head .sec-p{margin:6px 0 0;}
.fx-mainhead{display:flex;align-items:center;justify-content:flex-end;gap:14px 20px;flex-wrap:wrap;margin-bottom:6px;position:sticky;top:84px;z-index:50;background:#fff;padding:12px 0 14px;}
.fx-search{position:relative;max-width:none;width:100%;flex:none;min-width:0;margin:0 0 26px;}
.fx-layout{display:grid;grid-template-columns:264px 1fr;gap:34px;align-items:start;}
.fx-rail{position:sticky;top:96px;display:flex;flex-direction:column;gap:8px;background:#fff;border:1.4px solid #F0E2E3;border-radius:18px;padding:20px 18px;box-shadow:0 16px 34px rgba(110,11,14,.06);}
.fx-railhead{display:flex;align-items:center;justify-content:space-between;font-size:12px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#8A767A;padding:0 6px 4px;}
.fx-rh-title{display:inline-flex;align-items:center;}
.fx-badge{margin-left:9px;font-size:11px;font-weight:700;letter-spacing:0;text-transform:none;color:#F23F44;background:#FFF0EF;border:1px solid #F8CFD0;padding:2px 9px;border-radius:100px;}
.fradio .fdot{flex:none;width:18px;height:18px;border-radius:50%;border:1.7px solid #E2D0D2;position:relative;transition:all .14s;}
.fradio.on .fdot{border-color:#F23F44;}
.fradio.on .fdot::after{content:"";position:absolute;inset:3.5px;border-radius:50%;background:#F23F44;}
.fx-clear{font-size:12px;font-weight:600;letter-spacing:0;text-transform:none;color:#F23F44;background:none;border:0;cursor:pointer;font-family:inherit;}
.fx-clear:hover{text-decoration:underline;}
.facet{border-top:1px solid #F4E7E8;padding-top:12px;margin-top:4px;}
.facet:first-of-type{border-top:0;padding-top:8px;margin-top:0;}
.facet-t{font-size:13.5px;font-weight:700;color:#1A1014;padding:0 6px 6px;}
.facet-body{display:flex;flex-direction:column;gap:1px;}
.facet-scroll{max-height:250px;overflow-y:auto;}
.facet-scroll::-webkit-scrollbar{width:6px;}
.facet-scroll::-webkit-scrollbar-thumb{background:#EAD7D9;border-radius:100px;}
.fopt{display:flex;align-items:center;gap:10px;width:100%;text-align:left;background:none;border:0;font-family:inherit;padding:7px 8px;border-radius:9px;cursor:pointer;transition:background .14s;}
.fopt:hover{background:#FFF6F5;}
.fbox{flex:none;width:18px;height:18px;border-radius:6px;border:1.7px solid #E2D0D2;display:flex;align-items:center;justify-content:center;color:#fff;transition:all .14s;}
.fopt.on .fbox{background:#F23F44;border-color:#F23F44;}
.fbox svg{opacity:0;transition:opacity .12s;}
.fopt.on .fbox svg{opacity:1;}
.flab{font-size:14px;font-weight:500;color:#3C2C2F;line-height:1.2;}
.fopt.on .flab{font-weight:600;color:#1A1014;}
.fcount{margin-left:auto;font-size:12px;font-weight:600;color:#B29A9E;}
.fopt.on .fcount{color:#F23F44;}
.fx-bar{display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap;margin-bottom:18px;}
.fx-mainhead .srtsel{margin-top:0;}
.fx-mainhead>div:first-child{flex:1;min-width:240px;}
.fx-mhright{display:flex;align-items:center;gap:16px;margin-top:0;flex:1;min-width:220px;justify-content:flex-end;}
.fx-hsearch{max-width:none;width:100%;min-width:180px;flex:1;margin:0;}
.fx-hsearch input{padding-top:15px;padding-bottom:15px;box-shadow:none;font-size:15px;}
.fx-count{font-size:13px;color:#9A868A;font-weight:500;}
.fx-count b{color:#6A585B;font-weight:700;}
.fx-mainhead .sec-p{margin:5px 0 0;}
.srtsel{position:relative;display:inline-flex;align-items:center;gap:10px;}
.srt-lbl{font-size:13px;font-weight:600;color:#8A767A;}
.srtsel .lvbtn{gap:16px;padding:15px 16px;font-size:15px;box-shadow:none;min-width:172px;justify-content:space-between;flex:none;}
.srtsel .lvbtn>span:first-child{text-align:left;}
@media(max-width:860px){.srtsel,.srtsel .lvbtn{min-width:0;width:100%;}}
.fx-chips{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:20px;}
.fx-chip{display:inline-flex;align-items:center;gap:7px;font-family:inherit;font-size:13px;font-weight:600;color:#C0242B;background:#FFF0EF;border:1px solid #F8CFD0;padding:6px 8px 6px 13px;border-radius:100px;cursor:pointer;transition:all .14s;}
.fx-chip:hover{background:#FCE0DE;}
.fx-chipx{display:flex;width:17px;height:17px;border-radius:50%;background:#F23F44;color:#fff;align-items:center;justify-content:center;}
.fx-grid{grid-template-columns:repeat(3,1fr);}
@media(max-width:1080px){.fx-grid{grid-template-columns:repeat(2,1fr);}}
@media(max-width:860px){.fx-layout{grid-template-columns:1fr;gap:22px;}.fx-rail{position:static;flex-direction:row;flex-wrap:wrap;gap:18px 26px;}.facet{border-top:0;padding-top:0;margin-top:0;flex:1;min-width:160px;}.fx-railhead{width:100%;}.facet-scroll{max-height:none;}.fx-grid{grid-template-columns:repeat(2,1fr);}}
@media(max-width:960px){.catgrid{grid-template-columns:repeat(3,1fr);}.grid{grid-template-columns:repeat(2,1fr);}.tl-hgrid{grid-template-columns:1fr;gap:44px;}.tl-vis{max-width:460px;}}
@media(max-width:760px){.tl-h1{font-size:36px;}.tl-hero{padding:44px 22px 30px;}.catgrid{grid-template-columns:repeat(2,1fr);}.grid{grid-template-columns:1fr;}.fx-grid{grid-template-columns:1fr;}.tl-stats{gap:20px;}.tl-sdiv{display:none;}.toolbar{flex-direction:column;align-items:flex-start;}.reqcard{padding:30px 26px;}.ctaband h2{font-size:30px;}.sec-h2{font-size:25px;}}

h1,h2,h3,h4,.h1,.h2,.h3,.hero h1,.eyebrow{text-wrap:balance;}p,li,.body,.lead,.sub,figcaption,blockquote{text-wrap:pretty;}/*om-balance-rule*/
`;

type Test = [name: string, cat: string, level: string, dur: number, q: number, desc: string];

const TYPES: [string, string][] = [
  ['writing', 'Writing'],
  ['product', 'Product'],
  ['business', 'Business'],
  ['marketing', 'Marketing'],
  ['engineering', 'Engineering'],
  ['hr', 'HR & recruiting'],
  ['sales', 'Sales'],
  ['support', 'Customer support'],
  ['data', 'Data & analytics'],
  ['finance', 'Finance'],
  ['operations', 'Operations'],
  ['design', 'Design'],
];

const TESTS: Test[] = [
  ['Background Check', 'hr', 'Intermediate', 15, 10, "A thorough AI interview to verify a candidate's identity, work history, education, certifications, references and eligibility to work."],
  ['Content Strategy for Writing', 'writing', 'Intermediate', 15, 8, 'Evaluates the ability to develop content strategies, conduct audience research, and create and optimize content.'],
  ['Copywriting for Writing', 'writing', 'Beginner', 15, 7, 'Evaluates persuasive copy, tone control and message clarity across formats.'],
  ['Technical Writing for Writing', 'writing', 'Advanced', 20, 9, 'Assesses the ability to document complex products clearly for technical and non-technical readers.'],
  ['Metrics and KPIs for Product Performance', 'product', 'Intermediate', 15, 8, 'Evaluates the ability to define, analyze and report KPIs, with insight into data analysis and strategy.'],
  ['Product Roadmapping for Product', 'product', 'Advanced', 20, 9, 'Evaluates prioritisation, stakeholder alignment and roadmap trade-off reasoning.'],
  ['User Research for Product', 'product', 'Intermediate', 15, 8, 'Assesses method selection, synthesis and turning insight into product decisions.'],
  ['Competitive Analysis for Business', 'business', 'Intermediate', 15, 8, 'Evaluates skills in competitive analysis, strategy formulation and process improvement.'],
  ['Process Improvement for Business', 'business', 'Intermediate', 15, 8, 'Evaluates the ability to identify inefficiencies, apply improvement methodologies and measure success.'],
  ['Stakeholder Management for Business', 'business', 'Intermediate', 15, 8, 'Assesses communication, alignment and influence across stakeholders.'],
  ['SEO for Marketing Strategy', 'marketing', 'Intermediate', 15, 9, 'Evaluates the ability to plan and execute SEO — keyword research, on-page and technical SEO, content optimization and analytics.'],
  ['Email Marketing Strategies for Marketing', 'marketing', 'Intermediate', 15, 8, 'Evaluates skills in list segmentation, content creation, performance tracking, A/B testing and deliverability.'],
  ['Brand Strategy for Marketing', 'marketing', 'Advanced', 20, 9, 'Evaluates positioning, messaging and go-to-market reasoning.'],
  ['Quality Assurance for Engineering', 'engineering', 'Intermediate', 15, 9, 'Assesses expertise in QA processes, risk management, testing, automation, defect handling and collaboration.'],
  ['Engineering Project Risk Management', 'engineering', 'Intermediate', 15, 8, 'Evaluates the ability to identify, assess and mitigate risks in engineering projects.'],
  ['System Design for Engineering', 'engineering', 'Advanced', 30, 10, 'Assesses architecture trade-offs, scalability and reliability reasoning.'],
  ['Debugging for Engineering', 'engineering', 'Intermediate', 15, 8, 'Evaluates structured troubleshooting and root-cause analysis.'],
  ['Recruitment Screening for HR', 'hr', 'Beginner', 15, 7, 'Evaluates structured screening, candidate experience and sourcing judgement.'],
  ['Employee Relations for HR', 'hr', 'Intermediate', 15, 8, 'Assesses coaching, conflict resolution and policy judgement.'],
  ['Lead Generation for Sales', 'sales', 'Intermediate', 15, 8, 'Evaluates prospecting, qualification and pipeline-building judgement.'],
  ['Negotiation for Sales', 'sales', 'Advanced', 20, 8, 'Assesses discovery, objection handling and closing under realistic scenarios.'],
  ['Ticket Handling for Customer Support', 'support', 'Beginner', 15, 6, 'Evaluates tone, accuracy and resolution in realistic support scenarios.'],
  ['Escalation Management for Customer Support', 'support', 'Intermediate', 15, 7, 'Assesses judgement in prioritising, de-escalating and resolving complex issues.'],
  ['Data Analysis for Data & Analytics', 'data', 'Intermediate', 15, 8, 'Evaluates SQL reasoning, metric definitions and insight communication.'],
  ['Experiment Design for Data & Analytics', 'data', 'Advanced', 20, 9, 'Assesses hypothesis framing, test design and interpretation of results.'],
  ['Financial Modeling for Finance', 'finance', 'Advanced', 20, 9, 'Evaluates modelling logic, assumptions and scenario analysis for decision-making.'],
  ['Budgeting and Forecasting for Finance', 'finance', 'Intermediate', 15, 8, 'Assesses forecasting accuracy, variance analysis and financial storytelling.'],
  ['Operations Planning for Operations', 'operations', 'Intermediate', 15, 8, 'Evaluates process bottlenecks, staffing and vendor trade-off scenarios.'],
  ['UX Design for Design', 'design', 'Intermediate', 15, 8, 'Evaluates process, rationale and usability judgement through portfolio prompts.'],
  ['Visual Design for Design', 'design', 'Beginner', 15, 7, 'Assesses hierarchy, typography and brand-consistent execution.'],
];

const LAB: Record<string, string> = Object.fromEntries(TYPES.map((t) => [t[0], t[1]]));
const LV_CLASS: Record<string, string> = { Beginner: 'lv-beg', Intermediate: 'lv-int', Advanced: 'lv-adv' };
const CBC_CLASS: Record<string, string> = { Beginner: 'cbc-beg', Intermediate: 'cbc-int', Advanced: 'cbc-adv' };
const DUR_DEFS: [string, string][] = [['short', '15 min or less'], ['mid', '16–20 min'], ['long', '20+ min']];
const DUR_LAB: Record<string, string> = Object.fromEntries(DUR_DEFS.map((d) => [d[0], d[1]]));
const SORT_DEFS: [string, string][] = [['popular', 'Most popular'], ['az', 'Name (A–Z)'], ['dur', 'Shortest first']];
const SORT_LAB: Record<string, string> = Object.fromEntries(SORT_DEFS.map((s) => [s[0], s[1]]));

function durBucket(m: number): string {
  return m <= 15 ? 'short' : m <= 20 ? 'mid' : 'long';
}

const CheckIcon = (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 6"></path></svg>
);

export default function InterviewsPage() {
  const [query, setQuery] = useState('');
  const [levels, setLevels] = useState<string[]>([]);
  const [durs, setDurs] = useState<string[]>([]);
  const [sort, setSort] = useState('popular');
  const [srtOpen, setSrtOpen] = useState(false);

  const toggle = (list: string[], set: (v: string[]) => void, val: string) => {
    set(list.includes(val) ? list.filter((x) => x !== val) : list.concat(val));
  };

  const q = query.trim().toLowerCase();

  const matches = (t: Test, ignore: string | null) => {
    if (ignore !== 'lvl' && levels.length && !levels.includes(t[2])) return false;
    if (ignore !== 'dur' && durs.length && !durs.includes(durBucket(t[3]))) return false;
    if (q) {
      const hay = (t[0] + ' ' + t[5] + ' ' + LAB[t[1]]).toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  };

  let filtered = TESTS.filter((t) => matches(t, null));
  if (sort === 'az') filtered = filtered.slice().sort((a, b) => a[0].localeCompare(b[0]));
  else if (sort === 'dur') filtered = filtered.slice().sort((a, b) => a[3] - b[3]);

  const levelFacets = ['Beginner', 'Intermediate', 'Advanced'].map((lv) => ({
    key: lv,
    label: lv,
    count: TESTS.filter((t) => t[2] === lv && matches(t, 'lvl')).length,
    cls: levels.includes(lv) ? 'on' : '',
    onToggle: () => toggle(levels, setLevels, lv),
  }));

  const durFacets = DUR_DEFS.map(([k, l]) => ({
    key: k,
    label: l,
    count: TESTS.filter((t) => durBucket(t[3]) === k && matches(t, 'dur')).length,
    cls: durs.includes(k) ? 'on' : '',
    onToggle: () => toggle(durs, setDurs, k),
  }));

  const chips: { key: string; label: string; onRemove: () => void }[] = [
    ...levels.map((l) => ({ key: 'l' + l, label: l, onRemove: () => toggle(levels, setLevels, l) })),
    ...durs.map((d) => ({ key: 'd' + d, label: DUR_LAB[d], onRemove: () => toggle(durs, setDurs, d) })),
  ];

  const sortOpts = SORT_DEFS.map(([v, l]) => ({
    key: v,
    label: l,
    cls: sort === v ? 'on' : '',
    onSelect: () => {
      setSort(v);
      setSrtOpen(false);
    },
  }));

  const active = !!(q || levels.length || durs.length);
  const count = levels.length + durs.length;
  const clearAll = () => {
    setQuery('');
    setLevels([]);
    setDurs([]);
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <SiteHeader announcement="AI video, audio and chat interviews — one platform, every role" />

      <section className="tl-hero">
        <div className="tl-blob"></div>
        <div className="tl-wrap">
          <div className="tl-hgrid">
            <div>
              <div className="tl-badge" data-reveal=""><span className="d"></span><span className="t">Ready-to-use, AI-scored interviews</span></div>
              <h1 className="tl-h1" data-reveal="" data-delay="80" style={{ marginTop: '22px' }}>Ready-to-use interviews<br /><em>for every role you hire.</em></h1>
              <p className="tl-sub" data-reveal="" data-delay="150">Discover ready-to-use interview questions for every role — designed for fast, consistent and effective candidate evaluation, scored automatically in video, audio and chat.</p>
              <div className="tl-hstats" data-reveal="" data-delay="190"><div className="tl-hstat"><b>500+</b><span>Ready-to-use interviews</span></div><div className="tl-hstat"><b>4,500+</b><span>Job roles</span></div><div className="tl-hstat"><b>15 min</b><span>Average length</span></div></div>
              <div className="tl-hbtns" data-reveal="" data-delay="230">
                <CtaButton label="Try for free" href="pricing.dc.html" variant="primary" size="lg" icon="arrow" magnetic />
                <CtaButton label="Book a demo" href="#" variant="secondary" size="lg" icon="play" />
              </div>
              <div className="tl-trust" data-reveal="" data-delay="270"><span><b>✓</b> 7-day free trial</span><span><b>✓</b> No credit card required</span></div>
            </div>
            <div className="tl-vis" data-reveal="" data-delay="180">
              <div className="tl-vcard">
                <div className="tl-vbrowser"><span className="tl-dot" style={{ background: '#FF5F57' }}></span><span className="tl-dot" style={{ background: '#FEBC2E' }}></span><span className="tl-dot" style={{ background: '#28C840' }}></span><span className="tl-vurl">testlify.com/interviews</span></div>
                <div className="tl-vsearch"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="7"></circle><path d="M21 21l-4.3-4.3"></path></svg><span>Search interviews…</span></div>
                <div className="tl-vchips"><span className="tl-vchip on">All</span><span className="tl-vchip">Beginner</span><span className="tl-vchip">Intermediate</span><span className="tl-vchip">Advanced</span></div>
                <div className="tl-vlist">
                  <div className="tl-vitem"><span className="tl-vico" style={{ background: 'linear-gradient(135deg,#F76A6E,#F23F44)' }}><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"></circle><path d="M2 12h20"></path><path d="M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20"></path></svg></span><div className="tl-vinfo"><span className="tl-vnm">Content Strategy for Writing</span><span className="tl-vmeta">Intermediate · 15 min</span></div><span className="tl-vtag">AI-scored</span></div>
                  <div className="tl-vitem"><span className="tl-vico" style={{ background: 'linear-gradient(135deg,#7C5CFF,#5B7BFF)' }}><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round"><rect x="3" y="3" width="18" height="18" rx="2"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path></svg></span><div className="tl-vinfo"><span className="tl-vnm">Metrics &amp; KPIs for Product</span><span className="tl-vmeta">Intermediate · 15 min</span></div><span className="tl-vtag">AI-scored</span></div>
                  <div className="tl-vitem"><span className="tl-vico" style={{ background: 'linear-gradient(135deg,#1FB57A,#12A063)' }}><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg></span><div className="tl-vinfo"><span className="tl-vnm">SEO for Marketing Strategy</span><span className="tl-vmeta">Intermediate · 15 min</span></div><span className="tl-vtag">AI-scored</span></div>
                  <div className="tl-vitem"><span className="tl-vico" style={{ background: 'linear-gradient(135deg,#FF9F43,#F76A2E)' }}><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round"><path d="M9 11l3 3L22 4"></path><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg></span><div className="tl-vinfo"><span className="tl-vnm">Quality Assurance for Engineering</span><span className="tl-vmeta">Intermediate · 15 min</span></div><span className="tl-vtag">AI-scored</span></div>
                </div>
              </div>
              <div className="tl-float tl-f1"><span style={{ width: '38px', height: '38px', borderRadius: '11px', background: 'linear-gradient(135deg,#F76A6E,#F23F44)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: '12.5px' }}>500+</span><div><div className="fl">Ready to use</div><div className="fv">Interviews</div></div></div>
              <div className="tl-float tl-f2"><span style={{ width: '38px', height: '38px', borderRadius: '50%', background: '#E7F6EE', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1F9D6B', fontWeight: 700 }}>✓</span><div><div className="fl">Every answer</div><div className="fv">AI-scored</div></div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="fx-sec">
        <div className="tl-wrap">
          <div className="fx-head" data-reveal=""><h2 className="sec-h2">Browse the interview library</h2><p className="sec-p">Filter ready-to-use AI interviews by level and length.</p></div>
          <div className="fx-layout" data-reveal="" data-delay="130">
            <aside className="fx-rail">
              <div className="fx-railhead"><span className="fx-rh-title">Filters<span className="fx-badge">{count}</span></span>{active && (<button className="fx-clear" onClick={clearAll}>Clear all</button>)}</div>
              <div className="facet"><div className="facet-t">Level</div><div className="facet-body">
                {levelFacets.map((f) => (
                  <button type="button" key={f.key} className={`fopt ${f.cls}`} onClick={f.onToggle}><span className="fbox">{CheckIcon}</span><span className="flab">{f.label}</span><span className="fcount">{f.count}</span></button>
                ))}
              </div></div>
              <div className="facet"><div className="facet-t">Duration</div><div className="facet-body">
                {durFacets.map((f) => (
                  <button type="button" key={f.key} className={`fopt ${f.cls}`} onClick={f.onToggle}><span className="fbox">{CheckIcon}</span><span className="flab">{f.label}</span><span className="fcount">{f.count}</span></button>
                ))}
              </div></div>
            </aside>
            <div className="fx-main">
              <div className="fx-mainhead"><div className="fx-mhright"><div className="tl-search fx-hsearch"><span className="si"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="7"></circle><path d="M21 21l-4.3-4.3"></path></svg></span><input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search interviews…" /></div><div className={`srtsel ${srtOpen ? 'open' : ''}`}><button type="button" className="lvbtn" onClick={() => setSrtOpen((o) => !o)}><span>{SORT_LAB[sort]}</span><span className="lvcaret"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"></path></svg></span></button>{srtOpen && (<><div className="lvback" onClick={() => setSrtOpen(false)}></div><div className="lvmenu">{sortOpts.map((o) => (<button type="button" key={o.key} className={`lvopt ${o.cls}`} onClick={o.onSelect}>{o.label}</button>))}</div></>)}</div></div></div>
              {chips.length > 0 && (
                <div className="fx-chips">{chips.map((c) => (<button type="button" key={c.key} className="fx-chip" onClick={c.onRemove}>{c.label}<span className="fx-chipx"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18"></path></svg></span></button>))}</div>
              )}
              {filtered.length > 0 ? (
                <div className="grid fx-grid">
                  {filtered.map((c, i) => (
                    <Link className={`card ${CBC_CLASS[c[2]]}`} href="/interviews-detail" key={c[0] + i}>
                      <div className="card-top"><span className={`lvtag ${LV_CLASS[c[2]]}`}>{c[2]}</span></div>
                      <h3 className="card-title">{c[0]}</h3>
                      <p className="card-desc">{c[5]}</p>
                      <div className="card-meta"><span className="mi"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 7v5l3 2"></path></svg>{c[3]} min</span><span className="card-cta">View<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6"></path></svg></span></div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="empty"><span className="eico"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="7"></circle><path d="M21 21l-4.3-4.3"></path></svg></span><h3>No interviews matched your filters</h3><p>Try a different keyword or clear your filters to see the full library.</p><button className="btn btn-g" onClick={clearAll}>Clear filters</button></div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="reqband"><div className="reqcard"><div><h3>Need an interview for a different role?</h3><p>Tell us the role and we&apos;ll generate a structured, AI-scored interview for it — questions, follow-ups and scoring criteria included.</p></div><a className="btn btn-p" href="#">Request an interview<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6"></path></svg></a></div></section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
