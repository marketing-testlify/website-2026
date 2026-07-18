'use client';

import { useEffect, useRef, useState } from 'react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import UseCaseCard from '@/components/UseCaseCard';
import Testimonials from '@/components/Testimonials';
import Recognition from '@/components/Recognition';
import SecuritySection from '@/components/SecuritySection';
import FAQ from '@/components/FAQ';
import CtaBand from '@/components/CtaBand';

const CSS = `
*{box-sizing:border-box;}
@keyframes floaty{0%,100%{transform:translateY(0)}50%{transform:translateY(-16px)}}
@keyframes floaty2{0%,100%{transform:translateY(0)}50%{transform:translateY(13px)}}
@keyframes heroGrad{0%{background-position:0% 0%}50%{background-position:100% 100%}100%{background-position:0% 0%}}
@keyframes marquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
@keyframes blob{0%,100%{transform:translate(0,0) scale(1)}33%{transform:translate(40px,-26px) scale(1.12)}66%{transform:translate(-26px,22px) scale(.93)}}
@keyframes pulsering{0%{transform:scale(.75);opacity:.65}100%{transform:scale(1.7);opacity:0}}
@keyframes shimmer{0%{background-position:0% 50%}100%{background-position:200% 50%}}
@keyframes shine{0%{transform:translateX(-130%) skewX(-18deg)}55%,100%{transform:translateX(260%) skewX(-18deg)}}
.shimmer-word{background:linear-gradient(100deg,#F23F44 0%,#FF7A52 30%,#A91E23 52%,#FF7A52 74%,#F23F44 100%);background-size:200% auto;-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;color:transparent;animation:shimmer 5s linear infinite;}
.btnsheen{position:relative;overflow:hidden;transition:transform .2s cubic-bezier(.2,.7,.3,1),box-shadow .25s ease;}
.btnsheen::after{content:"";position:absolute;top:0;left:0;width:38%;height:100%;background:linear-gradient(100deg,transparent,rgba(255,255,255,.5),transparent);transform:translateX(-130%) skewX(-18deg);pointer-events:none;}
.btnsheen:hover::after{animation:shine 1.05s ease;}
.btnsheen:not(.hero-cta):hover{transform:translateY(-2px);box-shadow:0 18px 38px rgba(242,63,68,.42)!important;}
.progbar{position:fixed;top:0;left:0;height:3px;width:0;z-index:400;background:linear-gradient(90deg,#FF7A52,#F23F44);box-shadow:0 0 12px rgba(242,63,68,.5);transition:width .1s linear;}
.tilt-card{transition:transform .25s cubic-bezier(.2,.7,.3,1), box-shadow .25s ease;will-change:transform;}
.mani-eyebrow{font-size:13px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:#F23F44;margin:0 0 26px;}
.mani-title{font-size:clamp(30px,4vw,52px);font-weight:800;letter-spacing:-.03em;line-height:1.05;margin:0 0 38px;max-width:980px;color:#1A1014;}
.mani-title .coral{color:#F23F44;}
.mani-body{font-size:clamp(21px,2.3vw,33px);font-weight:600;line-height:1.46;letter-spacing:-.018em;max-width:1000px;color:#1A1014;}
.mani-body p{margin:0;}
.mani-body p+p{margin-top:.7em;}
.shiftgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:66px;}
.shiftcard{background:#fff;border:1px solid #F4E4E5;border-radius:20px;padding:28px 28px 26px;box-shadow:0 14px 38px rgba(110,11,14,.05);transition:transform .25s cubic-bezier(.2,.7,.3,1),box-shadow .25s ease,border-color .25s ease;}
.shiftcard:hover{border-color:#FBD0D1;box-shadow:0 22px 50px rgba(110,11,14,.10);}
.shiftold{display:block;font-size:16px;color:#A1908F;text-decoration:line-through;text-decoration-color:#E6CCCE;}
.shiftarrow{display:flex;align-items:center;color:#F23F44;margin:12px 0;}
.shiftnew{display:block;font-size:20px;font-weight:700;color:#1A1014;letter-spacing:-.35px;line-height:1.25;}
@media(max-width:760px){.shiftgrid{grid-template-columns:1fr;gap:14px;margin-top:48px;}}
.hw{transition:opacity .12s linear;}
.tt-ic{display:inline-flex;align-items:center;justify-content:center;width:38px;height:38px;border-radius:11px;margin-bottom:9px;}
.tt-tile{transition:transform .26s cubic-bezier(.2,.7,.3,1),box-shadow .26s ease,border-color .26s ease;}
.tt-tile:hover{transform:translateY(-5px);box-shadow:0 16px 30px rgba(110,11,14,.10);border-color:#E7D7D9;}
.screencre{position:relative;overflow:hidden;border-radius:14px;}
.scanbeam{position:absolute;left:0;right:0;height:54px;top:-54px;z-index:4;pointer-events:none;background:linear-gradient(180deg,rgba(242,63,68,0),rgba(242,63,68,.16) 45%,rgba(242,63,68,.16) 55%,rgba(242,63,68,0));animation:scanmove 3s ease-in-out infinite;}
.scanbeam::after{content:"";position:absolute;left:0;right:0;top:50%;height:2px;background:linear-gradient(90deg,transparent,#F23F44,transparent);box-shadow:0 0 12px rgba(242,63,68,.6);}
@keyframes scanmove{0%{top:-54px}100%{top:100%}}
.skline{position:relative;overflow:hidden;}
.skline::after{content:"";position:absolute;inset:0;background:linear-gradient(90deg,transparent,rgba(255,255,255,.75),transparent);transform:translateX(-100%);animation:sksheen 2s linear infinite;}
@keyframes sksheen{100%{transform:translateX(120%)}}
.scanbadge{display:inline-flex;align-items:center;gap:8px;font-size:12.5px;font-weight:600;color:#A91E23;background:#FFF0F0;border:1px solid #FBD0D1;padding:6px 13px;border-radius:100px;margin-bottom:14px;}
.spin{display:inline-flex;animation:spin360 1.1s linear infinite;}
@keyframes spin360{100%{transform:rotate(360deg)}}
.rowglow{animation:rowglow 3s ease-in-out infinite;}
@keyframes rowglow{0%,100%{box-shadow:0 0 0 rgba(242,63,68,0);border-color:#FBD0D1}50%{box-shadow:0 10px 30px rgba(242,63,68,.22);border-color:#F23F44}}
.ticyc{animation:ticyc 5.4s ease-in-out infinite;}
@keyframes ticyc{0%,74%,100%{transform:scale(1);box-shadow:0 0 0 rgba(242,63,68,0)}84%{transform:scale(1.16);box-shadow:0 8px 20px rgba(242,63,68,.32)}}
.chartwrap{position:relative;overflow:hidden;border-radius:12px;}
.chartwrap::after{content:"";position:absolute;top:0;bottom:0;width:40%;left:-50%;background:linear-gradient(100deg,transparent,rgba(255,255,255,.55),transparent);transform:skewX(-16deg);animation:chartsheen 3.6s ease-in-out infinite;pointer-events:none;z-index:3;}
@keyframes chartsheen{0%{left:-50%}60%,100%{left:130%}}
.barcap{position:absolute;top:-7px;left:50%;width:12px;height:12px;margin-left:-6px;border-radius:50%;background:#F23F44;box-shadow:0 0 0 0 rgba(242,63,68,.5);animation:barcap 1.9s ease-out infinite;}
@keyframes barcap{0%{box-shadow:0 0 0 0 rgba(242,63,68,.5)}70%,100%{box-shadow:0 0 0 12px rgba(242,63,68,0)}}
.livedot{display:inline-block;width:7px;height:7px;border-radius:50%;background:#F23F44;margin-right:6px;vertical-align:middle;animation:livepulse 1.5s ease-in-out infinite;}
@keyframes livepulse{0%,100%{box-shadow:0 0 0 0 rgba(242,63,68,.5);opacity:1}50%{box-shadow:0 0 0 5px rgba(242,63,68,0);opacity:.45}}
.optglow{animation:optglow 3.8s ease-in-out infinite;}
@keyframes optglow{0%,60%,100%{border-color:#FBD0D1;box-shadow:0 0 0 rgba(242,63,68,0)}74%{border-color:#F23F44;box-shadow:0 10px 24px rgba(242,63,68,.22)}}
.okbadge{animation:okbadge 3.8s ease-in-out infinite;}
@keyframes okbadge{0%,62%,100%{opacity:0;transform:translateY(5px)}76%,93%{opacity:1;transform:translateY(0)}}
.playpulse::before,.playpulse::after{content:"";position:absolute;left:50%;top:50%;width:54px;height:54px;margin:-27px 0 0 -27px;border-radius:50%;border:2px solid rgba(242,63,68,.55);animation:playring 2.4s ease-out infinite both;pointer-events:none;}
.playpulse::after{animation-delay:1.2s;}
@keyframes playring{0%{transform:scale(.7);opacity:0}14%{opacity:.7}100%{transform:scale(2.3);opacity:0}}
.recdot{display:inline-block;width:7px;height:7px;border-radius:50%;background:#FF5A5F;margin-right:6px;vertical-align:middle;animation:recblink 1.1s steps(1) infinite;}
@keyframes recblink{0%,50%{opacity:1}51%,100%{opacity:.25}}
.stripemove{animation:stripeslide 2.6s linear infinite;}
@keyframes stripeslide{0%{background-position:0 0}100%{background-position:34px 0}}
.starseq i{opacity:.28;animation:starseq 4s ease-in-out infinite;}
@keyframes starseq{0%,50%,100%{opacity:.28}62%,88%{opacity:1}}
@media(prefers-reduced-motion:reduce){.scanbeam,.skline::after,.spin,.rowglow,.ticyc,.chartwrap::after,.barcap,.livedot,.optglow,.okbadge,.playpulse::before,.playpulse::after,.recdot,.stripemove,.starseq i{animation:none!important}}
@media(max-width:700px){.mani-body{font-size:21px;}.mani-title{font-size:30px;}}
.nl:hover{color:#F23F44 !important;}
.flink:hover{color:#F23F44 !important;}
@media(max-width:900px){
  .hero-grid{grid-template-columns:1fr !important;gap:48px !important;}
  .nav-links{display:none !important;}
  .feat-grid{grid-template-columns:1fr !important;}
  .frow{grid-template-columns:1fr !important;gap:34px !important;}
  .frow-v{order:-1 !important;}
  .how-grid{grid-template-columns:1fr !important;}
  .how-visual{position:static !important;}
  .stat-grid{grid-template-columns:1fr 1fr !important;}
  .foot-grid{grid-template-columns:1fr 1fr !important;gap:36px !important;}
  .h1-big{font-size:50px !important;line-height:1.04 !important;}
  .sec-pad{padding-left:20px !important;padding-right:20px !important;}
  .demo-tabs{flex-wrap:wrap !important;}
  .intg-grid{grid-template-columns:repeat(3,1fr) !important;}
  .sec-grid{grid-template-columns:repeat(2,1fr) !important;}
  .medal-row{gap:18px !important;}
  .vidframe{aspect-ratio:16/10 !important;}
}
.intg-tile{display:flex;align-items:center;justify-content:center;height:88px;background:#fff;border:1px solid #F2E6E7;border-radius:16px;padding:16px 20px;transition:transform .28s ease, box-shadow .28s ease, border-color .28s ease;}
.intg-tile:hover{transform:translateY(-4px);border-color:#FBD0D1;box-shadow:0 16px 34px rgba(110,11,14,.10);}
.intg-tile img{max-width:100%;max-height:40px;object-fit:contain;}
.faqitem{border-bottom:1px solid #F1E2E3;}
.dwrap{display:grid;grid-template-columns:1fr 1.05fr;gap:54px;align-items:center;}
.dash{position:relative;background:#fff;border:1px solid #F2E6E7;border-radius:22px;overflow:hidden;box-shadow:0 30px 70px rgba(110,11,14,.14);}
.dashbar{display:flex;align-items:center;gap:8px;padding:14px 18px;box-shadow:inset 0 -1px 0 #F4E4E5;}
.ddot{width:11px;height:11px;border-radius:50%;}
.ddot.r{background:#FF5F57;}.ddot.y{background:#FEBC2E;}.ddot.g{background:#28C840;}
.dashtitle{font-size:13px;font-weight:600;color:#8A7A7D;margin-left:8px;}
.dashlive{margin-left:auto;font-size:11px;font-weight:700;letter-spacing:.04em;color:#F23F44;display:inline-flex;align-items:center;gap:6px;}
.dashlive i{width:7px;height:7px;border-radius:50%;background:#F23F44;animation:pulse 1.8s ease-out infinite;font-style:normal;}
@keyframes pulse{0%{box-shadow:0 0 0 0 rgba(242,63,68,.5)}70%{box-shadow:0 0 0 8px rgba(242,63,68,0)}100%{box-shadow:0 0 0 0 rgba(242,63,68,0)}}
.dashbody{display:grid;grid-template-columns:auto 1fr;gap:26px;padding:26px;align-items:center;}
.gaugewrap{position:relative;width:148px;height:148px;flex:none;}
.gaugewrap svg{width:148px;height:148px;transform:rotate(-90deg);}
.gtrack{fill:none;stroke:#F4E4E5;stroke-width:9;}
.gfill{fill:none;stroke:url(#gg);stroke-width:9;stroke-linecap:round;}
.gaugectr{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;}
.gaugeval{font-size:38px;font-weight:800;color:#1A1014;letter-spacing:-.03em;line-height:1;}
.gaugeval i{font-size:18px;font-style:normal;color:#F23F44;margin-left:1px;}
.gaugelbl{font-size:11px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:#8A7A7D;margin-top:6px;}
.skills{display:flex;flex-direction:column;gap:13px;}
.skrow{display:flex;flex-direction:column;gap:6px;}
.skhead{display:flex;justify-content:space-between;font-size:13px;font-weight:600;color:#5A4B4E;}
.skhead b{color:#1A1014;font-weight:700;}
.sktrack{height:7px;border-radius:7px;background:#F4EBEC;overflow:hidden;}
.skfill{height:100%;width:0;border-radius:7px;background:linear-gradient(90deg,#F23F44,#FF8A6B);}
.dashfoot{grid-column:1/-1;display:flex;flex-direction:column;gap:9px;padding:0 26px 26px;}
.rankrow{display:flex;align-items:center;gap:12px;padding:10px 12px;border-radius:12px;background:#FFF8F8;border:1px solid #F4E4E5;transition:background .4s,border-color .4s,box-shadow .4s;}
.rankrow.won{background:linear-gradient(90deg,#FFE4E4,#FFF3F3);border-color:#F23F44;box-shadow:0 8px 22px rgba(242,63,68,.18);}
.rankrow.won .rankscore{color:#F23F44;}
.rankav{width:34px;height:34px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;color:#fff;flex:none;}
.rankname{font-size:14px;font-weight:600;color:#1A1014;}
.rankrole{font-size:11.5px;color:#8A7A7D;}
.rankscore{margin-left:auto;font-size:15px;font-weight:800;color:#1A1014;letter-spacing:-.02em;}
.rankbadge{font-size:10px;font-weight:800;letter-spacing:.04em;text-transform:uppercase;color:#fff;background:#18A957;padding:4px 9px;border-radius:100px;opacity:0;transition:opacity .4s;}
.rankrow.won .rankbadge{opacity:1;}
.dscan{position:absolute;left:0;right:0;top:0;height:120px;background:linear-gradient(180deg,rgba(242,63,68,.14),transparent);pointer-events:none;opacity:.7;}
.dchk{width:30px;height:30px;border-radius:9px;background:#FFF0F0;border:1px solid #FBD0D1;display:flex;align-items:center;justify-content:center;color:#F23F44;font-size:14px;font-weight:700;flex-shrink:0;}
.vs{display:grid;grid-template-columns:1fr 1fr;gap:18px;margin-top:46px;}
.vscol{border-radius:24px;padding:36px 32px;}
.vsold{background:transparent;border:1px solid transparent;}
.vsnew{position:relative;background:linear-gradient(160deg,#FFF0F0,#FFF8F6);border:1.5px solid #F7B4B6;box-shadow:0 24px 50px rgba(242,63,68,.18),0 0 0 4px rgba(242,63,68,.06);}
.vshead{display:flex;align-items:center;gap:12px;margin-bottom:22px;}
.vstag{font-size:13px;font-weight:700;letter-spacing:.04em;text-transform:uppercase;}
.vsicon{width:34px;height:34px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;flex:none;}
.vsrow{display:flex;align-items:flex-start;gap:13px;padding:13px 0;font-size:15.5px;line-height:1.45;border-top:1px solid #F1E2E3;color:#46383C;}
.vsrow:first-of-type{border-top:0;}
.vsmark{width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;flex:none;margin-top:1px;}
.ucards{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-top:46px;}
.statband{position:relative;border-radius:32px;overflow:hidden;padding:74px 40px 92px;transition:background .5s ease,border-color .5s ease;}
.statband.fullbleed{border-radius:0;}
.tlib-wrap{max-width:1180px;margin:0 auto;}
.tlib-chips{display:flex;flex-wrap:wrap;gap:9px;margin-bottom:36px;}
.tlib-chip{font-size:13.5px;font-weight:600;color:#6C5A5D;background:#fff;border:1.5px solid #F0E2E3;border-radius:100px;padding:8px 15px;}
.tlib-chip.on{background:#1A1014;color:#fff;border-color:#1A1014;}
.tlib-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;}
.tlib-count{font-size:13.5px;font-weight:600;color:#8A7A7D;margin:0 0 16px;}
.tlib-card2{position:relative;background:#fff;border:1px solid #F0E2E3;border-radius:16px;padding:20px;display:flex;flex-direction:column;transition:transform .25s,box-shadow .25s,border-color .25s;animation:tlibin .35s ease both;cursor:pointer;}
.tlib-card2:hover{transform:translateY(-4px);border-color:#F23F44;box-shadow:0 22px 46px rgba(110,11,14,.12);}
.tlib-c2top{display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;gap:10px;}
.tlib-cat2{font-size:10.5px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;color:#F23F44;background:#FFF0F0;border:1px solid #FBD0D1;padding:4px 10px;border-radius:100px;white-space:nowrap;}
.tlib-fmt{font-size:12px;font-weight:600;color:#8A7A7D;white-space:nowrap;}
.tlib-name{font-size:17px;font-weight:700;color:#1A1014;letter-spacing:-.3px;margin:0 0 16px;line-height:1.3;}
.tlib-meta2{font-size:12.5px;font-weight:600;color:#8A7A7D;margin-top:auto;}
.tlib-empty{text-align:center;padding:44px 20px;color:#8A7A7D;font-size:15px;font-weight:600;background:#fff;border:1px dashed #F0E2E3;border-radius:16px;}
.tlib-chip{cursor:pointer;transition:border-color .2s,color .2s,background .2s;}
.tlib-chip:hover{border-color:#F23F44;color:#F23F44;}
.tlib-chip.on:hover{color:#fff;border-color:#1A1014;}
.tlib-foot{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:20px;margin-top:36px;}
.tlib-stats{display:flex;flex-wrap:wrap;gap:24px;font-size:14px;color:#6C5A5D;font-weight:600;}
.tlib-stats b{color:#1A1014;}
[data-pulse]{animation:pulsedot 1.4s ease-in-out infinite;}
@keyframes pulsedot{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.4;transform:scale(.7)}}
@keyframes tlibin{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}
@media(max-width:860px){.tlib-grid{grid-template-columns:1fr 1fr;}}
@media(max-width:560px){.tlib-grid{grid-template-columns:1fr;}}
.sb-net{position:absolute;inset:0;z-index:1;width:100%;height:100%;display:block;}
.gr2stat{position:relative;transition:opacity .3s;}
.gr2stat.active{text-shadow:0 0 16px rgba(242,63,68,.5);}
.gr2stat.active::after{content:'';position:absolute;left:50%;bottom:-14px;transform:translateX(-50%);width:30px;height:3px;border-radius:2px;background:#F23F44;box-shadow:0 0 10px rgba(242,63,68,.7);}
.statband.light{background:linear-gradient(180deg,#FFFFFF 0%,#FFF7F5 60%,#FFF1EE 100%);border:1px solid #F4E4E5;box-shadow:0 30px 70px rgba(110,11,14,.06);}
.statband.dark{background:linear-gradient(165deg,#2A0E10 0%,#1A0A0C 60%,#12080A 100%);border:1px solid transparent;box-shadow:0 30px 70px rgba(0,0,0,.18);}
.sb-fade{position:absolute;inset:0;z-index:2;pointer-events:none;}
.statband.light .sb-fade{background:linear-gradient(180deg,#FFFFFF 0%,rgba(255,255,255,0) 26%);}
.statband.dark .sb-fade{background:radial-gradient(58% 58% at 50% 46%,transparent 34%,rgba(18,8,10,.9) 86%);}
.statband.dark .sb-eyebrow{color:#B5A4A7;}
.statband.light .sb-eyebrow{color:#9A878A;}
.statband.dark .sb-h{color:#fff;}
.statband.light .sb-h{color:#1A1014;}
.statband.dark .sb-sub{color:rgba(255,255,255,.66);}
.statband.light .sb-sub{color:#6E5B5E;}
.statband.dark .sb-num{color:#fff;}
.statband.light .sb-num{color:#1A1014;}
.statband.dark .sb-lbl{color:rgba(255,255,255,.6);}
.statband.light .sb-lbl{color:#8A7A7D;}
@media(max-width:900px){.dwrap{grid-template-columns:1fr;gap:30px;}.dashbody{grid-template-columns:1fr;}.vs{grid-template-columns:1fr;}.ucards{grid-template-columns:1fr 1fr;}}
@media(max-width:560px){.ucards{grid-template-columns:1fr;}}
.demo-tab{display:flex;align-items:center;gap:9px;font-family:inherit;cursor:pointer;font-weight:600;font-size:15.5px;padding:12px 22px;border-radius:13px;border:1.5px solid #F0D9DA;background:#fff;color:#1A1014;transition:all .25s ease;}
.demo-tab.on{border-color:#F23F44;background:#F23F44;color:#fff;box-shadow:0 10px 24px rgba(242,63,68,.3);}
.dpanel{display:none;}
.dpanel.on{display:block;}
.tl-grid-bg{background-image:linear-gradient(rgba(0,0,0,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,.04) 1px,transparent 1px);background-size:64px 64px;}
.tl-orb-red{background:radial-gradient(rgba(212,9,36,.12),transparent 65%);}
.tl-orb-orange{background:radial-gradient(rgba(222,104,0,.1),transparent 65%);}
.tl-orb-rose{background:radial-gradient(rgba(229,39,84,.08),transparent 65%);}
.tl-gradient-text{-webkit-text-fill-color:transparent;background:linear-gradient(135deg,#df202e,#db0c26,#d50022 22.5%,#c6001e 45%,#d1000b 58.75%,#d40c00,#d52400 72.5%,#d74b00);-webkit-background-clip:text;background-clip:text;}
.tl-glow-text{text-shadow:0 0 28px rgba(242,63,68,.35);}
.tl-hero-line{display:block;}
@keyframes tl-pulsedot-kf{0%,100%{transform:scale(1);opacity:1;}50%{transform:scale(1.45);opacity:.7;}}
@keyframes tl-partfloat{0%,100%{transform:translateY(-10px);opacity:.3;}50%{transform:translateY(10px);opacity:.8;}}
@media(max-width:860px){#bolthow .bhow-row{grid-template-columns:1fr !important;gap:32px !important;}#bolthow .bhow-axis{display:none !important;}}
h1,h2,h3,h4,.h1,.h2,.h3,.hero h1,.eyebrow{text-wrap:balance;}p,li,.body,.lead,.sub,figcaption,blockquote{text-wrap:pretty;}/*om-balance-rule*/
`;

const LIB_CATS: [string, string][] = [
  ['all', 'All tests'],
  ['engineering', 'Engineering'],
  ['sales', 'Sales & Revenue'],
  ['data', 'Data & Analytics'],
  ['support', 'Customer Support'],
  ['cognitive', 'Cognitive'],
  ['language', 'Language'],
  ['marketing', 'Marketing'],
];
const LIB_LABEL: Record<string, string> = {
  engineering: 'Engineering',
  sales: 'Sales & Revenue',
  data: 'Data & Analytics',
  support: 'Customer Support',
  cognitive: 'Cognitive ability',
  language: 'Language & Comms',
  marketing: 'Marketing',
};
type Test = { n: string; c: string; f: string; q: number; m: number; k: string };
const LIB_TESTS: Test[] = [
  { n: 'JavaScript (Coding)', c: 'engineering', f: 'Live coding', q: 18, m: 25, k: 'js es6 frontend' },
  { n: 'React', c: 'engineering', f: 'MCQ + coding', q: 16, m: 20, k: 'jsx hooks frontend' },
  { n: 'Python (Coding)', c: 'engineering', f: 'Live coding', q: 20, m: 30, k: 'backend django' },
  { n: 'Java', c: 'engineering', f: 'MCQ + coding', q: 15, m: 25, k: 'spring backend' },
  { n: 'TypeScript', c: 'engineering', f: 'MCQ', q: 14, m: 18, k: 'ts types frontend' },
  { n: 'Node.js', c: 'engineering', f: 'MCQ', q: 14, m: 18, k: 'backend express' },
  { n: 'SQL', c: 'engineering', f: 'Live coding', q: 16, m: 20, k: 'database query' },
  { n: 'Data Structures & Algorithms', c: 'engineering', f: 'Live coding', q: 12, m: 35, k: 'dsa leetcode' },
  { n: 'HTML & CSS', c: 'engineering', f: 'MCQ + task', q: 18, m: 15, k: 'frontend markup' },
  { n: 'DevOps (CI/CD)', c: 'engineering', f: 'MCQ', q: 15, m: 20, k: 'docker kubernetes pipeline' },
  { n: 'AWS Cloud', c: 'engineering', f: 'MCQ', q: 16, m: 22, k: 'cloud devops amazon' },
  { n: 'Sales Aptitude', c: 'sales', f: 'MCQ', q: 20, m: 15, k: 'selling' },
  { n: 'SDR / BDR', c: 'sales', f: 'Scenario', q: 12, m: 18, k: 'prospecting outbound' },
  { n: 'Account Executive', c: 'sales', f: 'Scenario', q: 10, m: 20, k: 'closing quota' },
  { n: 'Negotiation', c: 'sales', f: 'Scenario', q: 8, m: 15, k: 'deal' },
  { n: 'Salesforce CRM', c: 'sales', f: 'MCQ', q: 15, m: 18, k: 'crm pipeline' },
  { n: 'Cold Calling', c: 'sales', f: 'Audio response', q: 6, m: 12, k: 'outbound phone' },
  { n: 'SQL for Analysts', c: 'data', f: 'Live coding', q: 16, m: 20, k: 'query database' },
  { n: 'Microsoft Excel', c: 'data', f: 'MCQ + task', q: 18, m: 25, k: 'spreadsheet formulas' },
  { n: 'Power BI', c: 'data', f: 'MCQ', q: 15, m: 20, k: 'dashboard bi' },
  { n: 'Tableau', c: 'data', f: 'MCQ', q: 14, m: 18, k: 'dashboard viz' },
  { n: 'Data Analysis', c: 'data', f: 'MCQ', q: 16, m: 22, k: 'analytics insights' },
  { n: 'Statistics', c: 'data', f: 'MCQ', q: 15, m: 20, k: 'probability stats' },
  { n: 'Customer Service', c: 'support', f: 'Scenario', q: 14, m: 15, k: 'cs help' },
  { n: 'Email Etiquette', c: 'support', f: 'Work sample', q: 8, m: 12, k: 'writing tone' },
  { n: 'Zendesk', c: 'support', f: 'MCQ', q: 12, m: 15, k: 'ticketing helpdesk' },
  { n: 'Live Chat Support', c: 'support', f: 'Work sample', q: 8, m: 12, k: 'chat tone' },
  { n: 'Conflict Resolution', c: 'support', f: 'Scenario', q: 10, m: 15, k: 'de-escalation' },
  { n: 'Numerical Reasoning', c: 'cognitive', f: 'Aptitude', q: 15, m: 18, k: 'maths logic' },
  { n: 'Verbal Reasoning', c: 'cognitive', f: 'Aptitude', q: 15, m: 18, k: 'comprehension logic' },
  { n: 'Logical Reasoning', c: 'cognitive', f: 'Aptitude', q: 15, m: 18, k: 'deductive logic' },
  { n: 'Abstract Reasoning', c: 'cognitive', f: 'Aptitude', q: 12, m: 15, k: 'pattern logic' },
  { n: 'Attention to Detail', c: 'cognitive', f: 'Aptitude', q: 20, m: 12, k: 'accuracy' },
  { n: 'English Proficiency', c: 'language', f: 'Proficiency', q: 20, m: 20, k: 'comms grammar' },
  { n: 'Business Communication', c: 'language', f: 'MCQ', q: 15, m: 18, k: 'writing comms' },
  { n: 'Spanish', c: 'language', f: 'Proficiency', q: 20, m: 20, k: 'language' },
  { n: 'French', c: 'language', f: 'Proficiency', q: 20, m: 20, k: 'language' },
  { n: 'German', c: 'language', f: 'Proficiency', q: 20, m: 20, k: 'language' },
  { n: 'SEO', c: 'marketing', f: 'MCQ', q: 16, m: 18, k: 'search organic' },
  { n: 'Content Marketing', c: 'marketing', f: 'MCQ', q: 14, m: 18, k: 'copy blog' },
  { n: 'Google Ads', c: 'marketing', f: 'MCQ', q: 15, m: 20, k: 'ppc sem ads' },
  { n: 'Social Media Marketing', c: 'marketing', f: 'MCQ', q: 14, m: 18, k: 'smm social' },
  { n: 'Digital Marketing', c: 'marketing', f: 'MCQ', q: 18, m: 22, k: 'growth funnel' },
];

const FAQ_ITEMS = [
  { q: 'What is Testlify?', a: "Testlify is a skills assessment and interviewing platform that helps companies hire top talent quickly, accurately and affordably. We take the stress out of finding the best candidates with deep analysis that's accurate, automated and unbiased." },
  { q: 'How does Testlify help in my hiring process?', a: "Testlify's AI-powered pre-hire assessments measure the skills and job fitment of a candidate. These tests allow for quick screening, eliminate bias in hiring, and increase the productivity of recruiters and hiring managers — a proven solution against high employee turnover." },
  { q: 'How are the pre-employment tests created?', a: 'Tests are built by subject-matter experts and I/O psychologists, validated psychometrically to accurately measure skills and predict job performance. Randomized question banks prevent answer sharing, while bias reviews ensure every candidate is assessed purely on merit.' },
  { q: 'How is Testlify different from other tools?', a: 'Our assessments are validated by I/O psychologists and built to withstand EEOC scrutiny. We prioritize on-the-job skills over trick questions, use non-googleable questions with advanced proctoring, and keep tests low-stress and adaptive — just 30 minutes, with minimal drop-off.' },
  { q: 'What types of questions can I ask?', a: 'Depending on the role: multiple choice, descriptive, video and audio questions, open-ended, typing tests, file upload, Google Docs/Sheets/Slides questions, programming questions and live coding challenges.' },
];

export default function Page() {
  const [tab, setTab] = useState(1);
  const [libCat, setLibCat] = useState('all');
  const rootRef = useRef<HTMLDivElement>(null);
  const progRef = useRef<HTMLDivElement>(null);
  const dashRef = useRef<HTMLDivElement>(null);
  const netRef = useRef<HTMLCanvasElement>(null);

  const res = LIB_TESTS.filter((t) => libCat === 'all' || t.c === libCat);
  const libResults = res.slice(0, 6).map((t) => ({
    name: t.n,
    cat: LIB_LABEL[t.c] || t.c,
    fmt: t.f,
    meta: t.q + ' questions · ' + t.m + ' min',
  }));
  const libCount = res.length
    ? 'Showing ' + Math.min(res.length, 6) + (res.length > 6 ? '+' : '') + ' of 3,500+ validated tests'
    : 'No tests match — try another role or skill.';

  // reveal + count-up + dashboard + network canvas
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const active = new Set<Element>();

    const animateReveal = (el: HTMLElement) => {
      const delay = parseFloat(el.getAttribute('data-delay') || '0') * 1000;
      const dur = 620,
        startY = 28;
      const run = () => {
        const start = performance.now();
        const step = (t: number) => {
          const p = Math.min((t - start) / dur, 1);
          const e = 1 - Math.pow(1 - p, 3);
          el.style.opacity = String(e);
          el.style.transform = 'translateY(' + (startY * (1 - e)).toFixed(2) + 'px)';
          if (p < 1) requestAnimationFrame(step);
          else {
            el.style.opacity = '1';
            el.style.transform = 'none';
          }
        };
        requestAnimationFrame(step);
      };
      if (delay > 0) setTimeout(run, delay);
      else run();
    };
    const animateCount = (el: HTMLElement) => {
      const target = parseFloat(el.getAttribute('data-count') || '0');
      const suffix = el.getAttribute('data-suffix') || '';
      const dur = 1500,
        start = performance.now();
      const isInt = target % 1 === 0;
      const step = (t: number) => {
        const p = Math.min((t - start) / dur, 1);
        const e = 1 - Math.pow(1 - p, 3);
        const v = target * e;
        el.textContent = (isInt ? Math.round(v).toLocaleString('en-US') : v.toFixed(1)) + suffix;
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    const reveals = Array.from(root.querySelectorAll<HTMLElement>('[data-reveal]'));
    const counts = Array.from(root.querySelectorAll<HTMLElement>('[data-count]'));
    const inView = (el: HTMLElement) => {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || 800;
      return r.top < vh * 0.94 && r.bottom > 0;
    };
    const activate = (el: HTMLElement) => {
      if (active.has(el)) return;
      active.add(el);
      if (el.hasAttribute('data-reveal')) animateReveal(el);
      else if (el.hasAttribute('data-count')) animateCount(el);
    };
    const scan = () => {
      reveals.forEach((el) => inView(el) && activate(el));
      counts.forEach((el) => inView(el) && activate(el));
    };
    window.addEventListener('scroll', scan, { passive: true });
    window.addEventListener('resize', scan, { passive: true });
    scan();
    const fb = setTimeout(() => {
      reveals.forEach(activate);
      counts.forEach(activate);
    }, 1400);

    // progress bar
    const onScroll = () => {
      const pb = progRef.current;
      if (pb) {
        const h = document.documentElement.scrollHeight - window.innerHeight;
        pb.style.width = (h > 0 ? Math.min(window.scrollY / h, 1) * 100 : 0) + '%';
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // dashboard
    let dashRAF = 0;
    const panel = dashRef.current;
    if (panel) {
      const gfill = panel.querySelector<SVGCircleElement>('[data-gfill]');
      const gv = panel.querySelector<HTMLElement>('[data-gauge]');
      const scanEl = panel.querySelector<HTMLElement>('[data-dscan]');
      const sks = Array.from(panel.querySelectorAll<HTMLElement>('[data-sk]'));
      const skvs = Array.from(panel.querySelectorAll<HTMLElement>('[data-skv]'));
      const rows = Array.from(panel.querySelectorAll<HTMLElement>('[data-rank]'));
      if (gfill && gv) {
        const C = 2 * Math.PI * 52;
        gfill.style.strokeDasharray = String(C);
        gfill.style.strokeDashoffset = String(C);
        const target = 94;
        const cycle = 7600;
        const ease = (p: number) => (p <= 0 ? 0 : p >= 1 ? 1 : 1 - Math.pow(1 - p, 3));
        const seg = (t: number, a: number, b: number) => ease(Math.min(Math.max((t - a) / (b - a), 0), 1));
        const tick = (now: number) => {
          const t = (now % cycle) / cycle;
          const gp = seg(t, 0.1, 0.46);
          gfill.style.strokeDashoffset = String(C * (1 - gp * (target / 100)));
          gv.textContent = String(Math.round(target * gp));
          sks.forEach((el, i) => {
            const v = parseFloat(el.getAttribute('data-sk') || '0');
            const sp = seg(t, 0.22 + i * 0.05, 0.55 + i * 0.05);
            el.style.width = v * sp + '%';
            if (skvs[i]) skvs[i].textContent = Math.round(v * sp) + '%';
          });
          rows.forEach((el) => {
            const idx = parseInt(el.getAttribute('data-rank') || '1', 10) - 1;
            const rp = seg(t, 0.04 + idx * 0.08, 0.3 + idx * 0.08);
            el.style.opacity = String(rp);
            el.style.transform = 'translateX(' + ((1 - rp) * 26).toFixed(1) + 'px)';
            if (el.getAttribute('data-rank') === '1') {
              const won = t > 0.52;
              el.classList.toggle('won', won);
              const pop = won ? 1 + 0.025 * Math.max(0, 1 - (t - 0.52) / 0.12) : 1;
              el.style.transform = 'translateX(' + ((1 - rp) * 26).toFixed(1) + 'px) scale(' + pop.toFixed(3) + ')';
            }
          });
          if (scanEl) {
            const sp = (t % 0.5) / 0.5;
            scanEl.style.transform = 'translateY(' + (sp * 460).toFixed(0) + 'px)';
            scanEl.style.opacity = String(t < 0.5 ? 0.6 * (1 - sp) : 0);
          }
          dashRAF = requestAnimationFrame(tick);
        };
        dashRAF = requestAnimationFrame(tick);
      }
    }

    // global network canvas (dark stat band)
    let netRAF = 0;
    const canvas = netRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d')!;
      let W = 0,
        H = 0;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const S: { mapDots: { x: number; y: number; nx: number }[]; cx: number; cy: number; cur: number; prev: number; fade: number } = {
        mapDots: [],
        cx: 0,
        cy: 0,
        cur: 0,
        prev: 0,
        fade: 1,
      };
      const build = () => {
        const r = canvas.getBoundingClientRect();
        W = r.width;
        H = r.height;
        canvas.width = Math.max(1, W * dpr);
        canvas.height = Math.max(1, H * dpr);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        S.cx = W / 2;
        S.cy = H / 2;
        const regions = [
          [0.16, 0.34, 0.1, 0.13, 22],
          [0.28, 0.66, 0.055, 0.13, 14],
          [0.49, 0.3, 0.045, 0.07, 10],
          [0.53, 0.57, 0.075, 0.15, 20],
          [0.68, 0.34, 0.14, 0.13, 30],
          [0.85, 0.72, 0.05, 0.05, 7],
        ];
        const mpx = W * 0.06,
          mpw = W * 0.88,
          mpy = H * 0.12,
          mph = H * 0.74;
        S.mapDots = [];
        regions.forEach((rg) => {
          for (let i = 0; i < rg[4]; i++) {
            const ang = Math.random() * 6.283,
              rad = Math.sqrt(Math.random());
            const nx = rg[0] + Math.cos(ang) * rg[2] * rad,
              ny = rg[1] + Math.sin(ang) * rg[3] * rad;
            S.mapDots.push({ x: mpx + nx * mpw, y: mpy + ny * mph, nx });
          }
        });
      };
      build();
      window.addEventListener('resize', build, { passive: true });
      const stats = Array.from(root.querySelectorAll<HTMLElement>('#stats .stat-grid > div'));
      const setActive = (idx: number) => {
        if (S.cur === idx) return;
        S.prev = S.cur;
        S.cur = idx;
        S.fade = 0;
        stats.forEach((el, i) => el.classList.toggle('active', i === idx));
      };
      stats.forEach((el, i) => {
        el.classList.add('gr2stat');
        el.style.pointerEvents = 'auto';
        el.style.cursor = 'pointer';
        el.addEventListener('pointerenter', () => setActive(i));
      });
      if (stats[0]) stats[0].classList.add('active');
      let last = performance.now();
      const draw = (idx: number, t: number, a: number) => {
        if (a <= 0) return;
        ctx.save();
        ctx.globalAlpha = Math.max(0, Math.min(1, a));
        if (idx === 0) {
          const dots = S.mapDots;
          const sweep = (t * 0.12) % 1.15;
          dots.forEach((d) => {
            const on = d.nx <= sweep;
            const edge = Math.max(0, 1 - Math.abs(d.nx - sweep) / 0.06);
            if (on) {
              const glow = 0.4 + 0.6 * edge;
              ctx.fillStyle = 'rgba(242,63,68,' + glow.toFixed(3) + ')';
              ctx.beginPath();
              ctx.arc(d.x, d.y, 1.8 + 1.9 * edge, 0, 7);
              ctx.fill();
              if (edge > 0.25) {
                ctx.strokeStyle = 'rgba(242,63,68,' + (0.4 * edge).toFixed(3) + ')';
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.arc(d.x, d.y, 4 + 6 * (1 - edge), 0, 7);
                ctx.stroke();
              }
            } else {
              ctx.fillStyle = 'rgba(255,206,197,0.13)';
              ctx.beginPath();
              ctx.arc(d.x, d.y, 1.3, 0, 7);
              ctx.fill();
            }
          });
        } else if (idx === 1) {
          const cw = 54,
            chh = 78,
            gapX = 46,
            gapY = 26,
            step = chh + gapY;
          const cols = Math.max(1, Math.floor((W - gapX) / (cw + gapX)));
          const totalW = cols * (cw + gapX) - gapX,
            x0 = (W - totalW) / 2,
            speed = 82;
          const rr = (x: number, y: number, w: number, h: number, r: number) => {
            ctx.beginPath();
            ctx.moveTo(x + r, y);
            ctx.arcTo(x + w, y, x + w, y + h, r);
            ctx.arcTo(x + w, y + h, x, y + h, r);
            ctx.arcTo(x, y + h, x, y, r);
            ctx.arcTo(x, y, x + w, y, r);
            ctx.closePath();
          };
          for (let c = 0; c < cols; c++) {
            const colOff = (t * speed + c * 60) % step,
              x = x0 + c * (cw + gapX);
            for (let i = -1; i < Math.ceil(H / step) + 1; i++) {
              const y = H - (i * step - colOff);
              ctx.fillStyle = 'rgba(255,255,255,0.022)';
              rr(x, y, cw, chh, 6);
              ctx.fill();
              ctx.fillStyle = 'rgba(242,63,68,0.22)';
              rr(x + 8, y + 8, cw - 16, 7, 2);
              ctx.fill();
              ctx.fillStyle = 'rgba(255,255,255,0.07)';
              rr(x + 8, y + 24, cw - 16, 3.5, 2);
              ctx.fill();
              ctx.fillStyle = 'rgba(255,255,255,0.045)';
              rr(x + 8, y + 31, (cw - 16) * 0.64, 3.5, 2);
              ctx.fill();
              ctx.fillStyle = 'rgba(242,63,68,0.2)';
              rr(x + 8, y + chh - 14, 14, 7, 2);
              ctx.fill();
            }
          }
        } else {
          const x0 = W * 0.06,
            x1 = W * 0.94,
            L = x1 - x0;
          const lanes = [
            { c: '255,255,255', s: 0.11, r: 2 },
            { c: '242,63,68', s: 0.11 * 1.55, r: 2.8 },
            { c: '255,255,255', s: 0.13, r: 2 },
            { c: '242,63,68', s: 0.13 * 1.55, r: 2.8 },
            { c: '255,255,255', s: 0.095, r: 2 },
            { c: '242,63,68', s: 0.095 * 1.55, r: 2.8 },
            { c: '255,255,255', s: 0.12, r: 2 },
            { c: '242,63,68', s: 0.12 * 1.55, r: 2.8 },
          ];
          const top = H * 0.15,
            bot = H * 0.85,
            gap = (bot - top) / (lanes.length - 1);
          ctx.strokeStyle = 'rgba(255,255,255,0.14)';
          ctx.lineWidth = 1;
          lanes.forEach((ln, i) => {
            const y = top + i * gap;
            ctx.beginPath();
            ctx.moveTo(x0, y);
            ctx.lineTo(x1, y);
            ctx.stroke();
          });
          lanes.forEach((ln, i) => {
            const y = top + i * gap;
            const base = t * ln.s + i * 0.12;
            const n = ln.c === '242,63,68' ? 3 : 1;
            for (let d = 0; d < n; d++) {
              const pos = (base + d / n) % 1;
              const x = x0 + pos * L;
              ctx.fillStyle = 'rgba(' + ln.c + ',0.95)';
              ctx.beginPath();
              ctx.arc(x, y, ln.r, 0, 7);
              ctx.fill();
            }
          });
        }
        ctx.restore();
      };
      const tick = () => {
        if (!canvas.isConnected) {
          cancelAnimationFrame(netRAF);
          return;
        }
        const now = performance.now();
        const t = now / 1000;
        if (S.fade < 1) S.fade = Math.min(1, S.fade + (now - last) / 420);
        last = now;
        ctx.clearRect(0, 0, W, H);
        if (S.fade < 1) draw(S.prev, t, 1 - S.fade);
        draw(S.cur, t, S.fade);
        netRAF = requestAnimationFrame(tick);
      };
      netRAF = requestAnimationFrame(tick);
    }

    return () => {
      window.removeEventListener('scroll', scan);
      window.removeEventListener('resize', scan);
      window.removeEventListener('scroll', onScroll);
      clearTimeout(fb);
      if (dashRAF) cancelAnimationFrame(dashRAF);
      if (netRAF) cancelAnimationFrame(netRAF);
    };
  }, []);

  return (
    <div ref={rootRef} style={{ position: 'relative', overflowX: 'hidden' }}>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div
        data-bgwash=""
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: -1,
          pointerEvents: 'none',
          background:
            'radial-gradient(1200px 700px at 80% 12%,rgba(251,163,165,.16),transparent 60%),rgb(255,247,246)',
        }}
      />
      <div ref={progRef} className="progbar" />

      <SiteHeader
        overlay
        announcement="Testlify AI is here — screen, interview & score candidates automatically."
        announcementCta="See what's new →"
        announcementHref="#demo"
      />

      {/* HERO */}
      <section
        id="bolthero"
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          padding: '150px 28px 72px',
          background: 'linear-gradient(180deg,#FFF8F7 0%,#FFF0EF 60%,#FFF8F7 100%)',
          textAlign: 'center',
        }}
      >
        <div aria-hidden className="tl-grid-bg" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }} />
        <div aria-hidden className="tl-orb-red" style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '900px', height: '600px', pointerEvents: 'none', opacity: 0.7, zIndex: 0 }} />
        <div aria-hidden className="tl-orb-orange" style={{ position: 'absolute', top: '33%', left: 0, width: '500px', height: '500px', pointerEvents: 'none', opacity: 0.5, zIndex: 0 }} />
        <div aria-hidden className="tl-orb-rose" style={{ position: 'absolute', top: '50%', right: 0, width: '400px', height: '400px', pointerEvents: 'none', opacity: 0.4, zIndex: 0 }} />
        <div aria-hidden data-bh-particles="" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden', zIndex: 0 }} />

        <div style={{ position: 'relative', zIndex: 2, maxWidth: '860px', margin: '0 auto' }}>
          <div data-reveal="" style={{ opacity: 0, transform: 'translateY(28px)', display: 'inline-flex', alignItems: 'center', gap: '9px', background: '#fff', border: '1px solid #FBD0D1', padding: '9px 16px', borderRadius: '100px', boxShadow: '0 6px 18px rgba(242,63,68,.10)', marginBottom: '32px' }}>
            <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#F23F44', display: 'inline-block', animation: 'tl-pulsedot-kf 2s ease-in-out infinite' }} />
            <span style={{ fontSize: '13.5px', fontWeight: 600, color: '#A91E23', letterSpacing: '.2px' }}>AI-powered skills assessment</span>
          </div>

          <h1 style={{ fontSize: 'clamp(48px,7.5vw,92px)', lineHeight: 1.0, fontWeight: 800, letterSpacing: '-3px', margin: '0 0 28px' }}>
            <span className="tl-hero-line" style={{ color: '#1A1014' }}>Hire on skill,</span>
            <span className="tl-hero-line tl-gradient-text tl-glow-text">not on</span>
            <span className="tl-hero-line" style={{ color: '#1A1014' }}>a résumé.</span>
          </h1>

          <p data-reveal="" data-delay="0.9" style={{ opacity: 0, transform: 'translateY(28px)', fontSize: '20px', lineHeight: 1.65, color: '#6C5A5D', maxWidth: '700px', margin: '0 auto 40px', fontWeight: 400 }}>Your next great hire is already in your pipeline. Testlify surfaces them in 30 minutes with validated assessments — no resume bias, no gut-check interviews, no bad-hire regret.</p>

          <div data-reveal="" data-delay="1.05" style={{ opacity: 0, transform: 'translateY(28px)', display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center', marginBottom: '24px' }}>
            <a href="#" className="btnsheen hero-cta" style={{ display: 'inline-flex', alignItems: 'center', gap: '9px', background: '#F23F44', color: '#fff', fontWeight: 600, fontSize: '17px', padding: '17px 34px', borderRadius: '16px', boxShadow: '0 4px 30px rgba(212,9,36,.18),0 0 60px rgba(212,9,36,.08)', transition: 'all .3s' }}>Try for free<span style={{ fontSize: '18px', lineHeight: 1 }}>→</span></a>
            <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', background: '#fff', color: '#1A1014', fontWeight: 600, fontSize: '17px', padding: '17px 30px', borderRadius: '16px', border: '1.5px solid #F0D9DA', transition: 'all .3s' }}>
              <span style={{ width: '30px', height: '30px', borderRadius: '50%', background: '#FFF0F0', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: '#F23F44', flexShrink: 0 }}><svg width="9" height="11" viewBox="0 0 9 11" fill="currentColor"><path d="M0 0.6v9.8l9-4.9z" /></svg></span>Book a demo
            </a>
          </div>

          <div data-reveal="" data-delay="1.2" style={{ opacity: 0, transform: 'translateY(28px)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '24px', flexWrap: 'wrap' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', fontSize: '14px', color: '#8A7A7D', fontWeight: 500 }}><span style={{ color: '#F23F44', fontWeight: 700, fontSize: '15px' }}>✓</span>7-day free trial</span>
            <span style={{ width: '1px', height: '16px', background: '#E8D8DA' }} aria-hidden />
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', fontSize: '14px', color: '#8A7A7D', fontWeight: 500 }}><span style={{ color: '#F23F44', fontWeight: 700, fontSize: '15px' }}>✓</span>No credit card required</span>
            <span style={{ width: '1px', height: '16px', background: '#E8D8DA' }} aria-hidden />
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', fontSize: '14px', color: '#8A7A7D', fontWeight: 500 }}><span style={{ color: '#F23F44', fontWeight: 700, fontSize: '15px' }}>✓</span>Setup in under 5 minutes</span>
          </div>

          <div data-reveal="" data-delay="1.34" className="bh-chips" style={{ opacity: 0, transform: 'translateY(28px)', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '12px', marginTop: '40px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#fff', border: '1px solid #F0D9DA', borderRadius: '100px', padding: '10px 20px', boxShadow: '0 4px 14px rgba(242,63,68,.07)' }}><span style={{ fontSize: '15px', fontWeight: 800, color: '#F23F44', letterSpacing: '-.5px' }}>1,500+</span><span style={{ fontSize: '13px', fontWeight: 500, color: '#8A7A7D' }}>talent teams</span></div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#fff', border: '1px solid #F0D9DA', borderRadius: '100px', padding: '10px 20px', boxShadow: '0 4px 14px rgba(242,63,68,.07)' }}><span style={{ fontSize: '15px', fontWeight: 800, color: '#F23F44', letterSpacing: '-.5px' }}>3,500+</span><span style={{ fontSize: '13px', fontWeight: 500, color: '#8A7A7D' }}>validated tests</span></div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#fff', border: '1px solid #F0D9DA', borderRadius: '100px', padding: '10px 20px', boxShadow: '0 4px 14px rgba(242,63,68,.07)' }}><span style={{ fontSize: '15px', fontWeight: 800, color: '#F23F44', letterSpacing: '-.5px' }}>94%</span><span style={{ fontSize: '13px', fontWeight: 500, color: '#8A7A7D' }}>candidate satisfaction</span></div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#fff', border: '1px solid #F0D9DA', borderRadius: '100px', padding: '10px 20px', boxShadow: '0 4px 14px rgba(242,63,68,.07)' }}><span style={{ fontSize: '15px', fontWeight: 800, color: '#F23F44', letterSpacing: '-.5px' }}>55%</span><span style={{ fontSize: '13px', fontWeight: 500, color: '#8A7A7D' }}>faster hiring</span></div>
          </div>
        </div>
      </section>

      {/* TRUST MARQUEE */}
      <section style={{ padding: '44px 28px 54px', background: 'transparent' }}>
        <p style={{ textAlign: 'center', fontSize: '13.5px', fontWeight: 600, letterSpacing: '1.5px', color: '#A9999C', textTransform: 'uppercase', margin: '0 0 30px' }}>Trusted by <strong style={{ color: '#F23F44', fontWeight: 800 }}>1,500+</strong> talent teams worldwide</p>
        <div style={{ position: 'relative', maxWidth: '1100px', margin: '0 auto', overflow: 'hidden', WebkitMaskImage: 'linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent)', maskImage: 'linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent)' }}>
          <div data-marquee="" style={{ display: 'flex', width: 'max-content', gap: '64px', animation: 'marquee 28s linear infinite', alignItems: 'center' }}>
            {['Solvay', 'Airtel', 'inDrive', 'Northeastern University', 'Doctors Without Borders', 'Agilisium', 'Netconomy', 'Xneelo', 'Solvay', 'Airtel', 'inDrive', 'Northeastern University', 'Doctors Without Borders', 'Agilisium', 'Netconomy', 'Xneelo'].map((n, i) => (
              <span key={i} style={{ fontSize: '24px', fontWeight: 700, color: '#C9B9BC', letterSpacing: '-.5px' }}>{n}</span>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section id="why" className="sec-pad" style={{ padding: '96px 28px', background: '#fff' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          <div style={{ maxWidth: '720px', margin: '0 0 8px' }}>
            <p data-reveal="" style={{ opacity: 0, transform: 'translateY(20px)', fontSize: '14px', fontWeight: 700, letterSpacing: '1px', color: '#9A878A', textTransform: 'uppercase', margin: '0 0 14px' }}>Why Testlify<span style={{ color: '#F23F44' }}>.</span></p>
            <h2 data-reveal="" data-delay="0.06" style={{ opacity: 0, transform: 'translateY(24px)', fontSize: '42px', lineHeight: 1.1, fontWeight: 800, letterSpacing: '-1.3px', margin: '0 0 14px', color: '#1A1014' }}>Stop screening on resumes. Start hiring on proof.</h2>
            <p data-reveal="" data-delay="0.12" style={{ opacity: 0, transform: 'translateY(24px)', fontSize: '17px', lineHeight: 1.6, color: '#5A4B4E', margin: 0 }}>Resumes tell you where someone has been — not what they can actually do. Testlify replaces guesswork with verified, job-relevant evidence.</p>
          </div>
          <div className="vs">
            <div data-reveal="" className="vscol vsold" style={{ opacity: 0, transform: 'translateY(24px)' }}>
              <div className="vshead"><span className="vsicon" style={{ background: '#F0E4E5', color: '#8A7A7D' }}>✕</span><span className="vstag" style={{ color: '#8A7A7D' }}>Resume-first hiring</span></div>
              {['Hours lost manually reading resumes for every role', 'Keyword matching misses people who can really do the job', 'Unconscious bias creeps into every shortlist', 'A single mis-hire costs months of salary and momentum', 'No defensible audit trail when decisions are questioned'].map((txt, i) => (
                <div key={i} className="vsrow" data-reveal="" data-delay={(0.06 * (i + 1)).toFixed(2)} style={{ opacity: 0, transform: 'translateY(16px)' }}><span className="vsmark" style={{ background: '#EADDDE', color: '#8A7A7D' }}>✕</span><span>{txt}</span></div>
              ))}
            </div>
            <div data-reveal="" data-delay="0.1" className="vscol vsnew" style={{ opacity: 0, transform: 'translateY(24px)' }}>
              <div className="vshead"><span className="vsicon" style={{ background: '#F23F44', color: '#fff' }}>✓</span><span className="vstag" style={{ color: '#F23F44' }}>Skills-first with Testlify</span></div>
              {[['Screen a full pipeline in 30 minutes, not days', '0.16'], ['Verified skills that genuinely predict on-the-job performance', '0.22'], ['Bias-controlled and EEOC-defensible by design', '0.28'], ['Up to 75% less screening time, with higher quality of hire', '0.34'], ['Every decision scored, documented and fair', '0.40']].map(([txt, d], i) => (
                <div key={i} className="vsrow" data-reveal="" data-delay={d} style={{ opacity: 0, transform: 'translateY(16px)' }}><span className="vsmark" style={{ background: '#F23F44', color: '#fff' }}>✓</span><span style={{ color: '#1A1014', fontWeight: 500 }}>{txt}</span></div>
              ))}
            </div>
          </div>
          <div data-reveal="" data-delay="0.16" style={{ opacity: 0, transform: 'translateY(24px)', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '20px', marginTop: '46px', textAlign: 'center' }}>
            <a href="#" className="btnsheen" style={{ display: 'inline-flex', alignItems: 'center', gap: '9px', background: '#F23F44', color: '#fff', fontWeight: 600, fontSize: '16.5px', padding: '15px 30px', borderRadius: '14px', boxShadow: '0 14px 30px rgba(242,63,68,.32)' }}>Try for free<span style={{ fontSize: '18px', color: '#fff' }}>→</span></a>
            <span style={{ fontSize: '14.5px', color: '#8A7A7D', fontWeight: 500 }}>See a proof-based shortlist in 30 minutes. No credit card.</span>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="bolthow" className="sec-pad" style={{ padding: '112px 28px', background: '#FFF8F7', position: 'relative', overflow: 'hidden' }}>
        <div className="tl-grid-bg" style={{ position: 'absolute', inset: 0, opacity: 0.15, pointerEvents: 'none', zIndex: 0 }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '1120px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '88px' }}>
            <p data-reveal="" style={{ opacity: 0, transform: 'translateY(20px)', fontSize: '13px', fontWeight: 700, letterSpacing: '.16em', color: '#F23F44', textTransform: 'uppercase', margin: '0 0 14px' }}>How it works<span style={{ color: '#F23F44' }}>.</span></p>
            <h2 data-reveal="" data-delay="0.06" style={{ opacity: 0, transform: 'translateY(24px)', fontSize: 'clamp(32px,4.5vw,52px)', lineHeight: 1.1, fontWeight: 800, letterSpacing: '-1.4px', margin: 0, color: '#1A1014' }}>From open role to offer, <span className="tl-gradient-text">watch it build</span></h2>
          </div>
          <div id="bhow-timeline" style={{ position: 'relative' }}>
            <div className="bhow-axis" style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: 0, bottom: 0, width: '1px', background: '#F0E2E3', zIndex: 0 }}><div data-bhow-fill="" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 0, background: 'linear-gradient(to bottom,rgba(242,63,68,.6),rgba(242,63,68,.2))', borderRadius: '100px' }} /></div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '96px', position: 'relative', zIndex: 1 }}>
              {/* Step 01 */}
              <div className="bhow-row" data-reveal="" data-delay="0.05" style={{ opacity: 0, transform: 'translateY(28px)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '72px', alignItems: 'center' }}>
                <div className="bhow-text">
                  <div style={{ fontSize: '88px', fontWeight: 900, lineHeight: 1, marginBottom: '10px', color: 'rgba(242,63,68,.16)', letterSpacing: '-3px', userSelect: 'none' }}>01</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}><span style={{ width: '48px', height: '48px', borderRadius: '16px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(242,63,68,.14)', color: '#F23F44', flexShrink: 0 }}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="8" y="2" width="8" height="4" rx="1" /><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /><path d="M12 11h4" /><path d="M12 16h4" /><path d="M8 11h.01" /><path d="M8 16h.01" /></svg></span><h3 style={{ fontSize: 'clamp(22px,2.4vw,30px)', fontWeight: 700, color: '#1A1014', letterSpacing: '-.5px', margin: 0 }}>Build the assessment</h3></div>
                  <p style={{ fontSize: '16px', lineHeight: 1.6, color: '#5A4B4E', margin: 0, maxWidth: '440px' }}>Pick from 3,500+ ready tests or let AI generate a custom one from your job description in under a minute.</p>
                </div>
                <div className="bhow-visual"><div style={{ background: '#fff', borderRadius: '18px', border: '1px solid #F0E2E3', padding: '20px', boxShadow: '0 16px 34px rgba(110,11,14,.08)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}><span style={{ fontSize: '12.5px', fontWeight: 700, color: '#1A1014' }}>Assessment Builder</span><span style={{ fontSize: '11px', color: '#F23F44', fontWeight: 600 }}>4 modules selected</span></div>
                  {[['JavaScript Fundamentals'], ['React & State Management'], ['System Design'], ['Problem Solving']].map(([nm], i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 12px', borderRadius: '12px', background: '#FFF8F8', border: '1px solid #F4E4E5', marginBottom: '9px' }}><span style={{ width: '16px', height: '16px', borderRadius: '6px', border: '1px solid rgba(242,63,68,.6)', background: 'rgba(242,63,68,.2)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><span style={{ width: '8px', height: '8px', borderRadius: '3px', background: '#F23F44' }} /></span><span style={{ fontSize: '12.5px', fontWeight: 500, color: '#1A1014' }}>{nm}</span><span style={{ marginLeft: 'auto', fontSize: '11px', color: '#8A7A7D' }}>~10 min</span></div>
                  ))}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '8px' }}><span style={{ fontSize: '11px', color: '#8A7A7D' }}>Est. time: 40 min</span><span style={{ padding: '7px 16px', borderRadius: '10px', background: '#F23F44', fontSize: '11.5px', fontWeight: 600, color: '#fff' }}>Generate Assessment →</span></div>
                </div></div>
              </div>
              {/* Step 02 */}
              <div className="bhow-row" data-reveal="" data-delay="0.05" style={{ opacity: 0, transform: 'translateY(28px)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '72px', alignItems: 'center' }}>
                <div className="bhow-visual"><div style={{ background: '#fff', borderRadius: '18px', border: '1px solid #F0E2E3', padding: '20px', boxShadow: '0 16px 34px rgba(110,11,14,.08)' }}>
                  <div style={{ fontSize: '12.5px', fontWeight: 700, color: '#1A1014', marginBottom: '16px' }}>Invite Candidates</div>
                  <div style={{ background: '#FFF8F8', borderRadius: '12px', border: '1px solid #F4E4E5', padding: '12px', marginBottom: '16px' }}><div style={{ fontSize: '9px', color: '#8A7A7D', textTransform: 'uppercase', letterSpacing: '.14em', marginBottom: '6px' }}>Shareable Link</div><div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ fontSize: '11px', color: '#6C5A5D', fontFamily: 'monospace', flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>testlify.com/a/sr-eng-2024</span><span style={{ fontSize: '10px', color: '#F23F44', fontWeight: 600, border: '1px solid rgba(242,63,68,.3)', padding: '2px 9px', borderRadius: '7px' }}>Copy</span></div></div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '8px', textAlign: 'center', marginBottom: '16px' }}>
                    {[['247', 'Sent'], ['184', 'Started'], ['156', 'Completed']].map(([v, l], i) => (
                      <div key={i} style={{ background: '#FFF8F8', borderRadius: '12px', padding: '10px', border: '1px solid #F4E4E5' }}><div style={{ fontSize: '16px', fontWeight: 800, color: '#1A1014' }}>{v}</div><div style={{ fontSize: '9px', color: '#8A7A7D', marginTop: '2px' }}>{l}</div></div>
                    ))}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {[['#22A35B', 'sarah.chen@company.com', 'Completed', '32 min', '#22A35B'], ['#D69100', 'marcus.webb@startup.io', 'In Progress', '18 min', '#D69100'], ['#A9999C', 'priya.sharma@corp.com', 'Pending', '—', '#A9999C']].map(([dot, email, status, time, sc], i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '10px', padding: '6px 8px', borderRadius: '9px', background: '#FFF8F8', border: '1px solid #F4E4E5' }}><span style={{ width: '6px', height: '6px', borderRadius: '50%', background: dot, flexShrink: 0 }} /><span style={{ color: '#8A7A7D', flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{email}</span><span style={{ fontWeight: 600, color: sc }}>{status}</span><span style={{ color: '#A9999C' }}>{time}</span></div>
                    ))}
                  </div>
                </div></div>
                <div className="bhow-text">
                  <div style={{ fontSize: '88px', fontWeight: 900, lineHeight: 1, marginBottom: '10px', color: 'rgba(217,112,30,.16)', letterSpacing: '-3px', userSelect: 'none' }}>02</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}><span style={{ width: '48px', height: '48px', borderRadius: '16px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(217,112,30,.14)', color: '#D9701E', flexShrink: 0 }}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></svg></span><h3 style={{ fontSize: 'clamp(22px,2.4vw,30px)', fontWeight: 700, color: '#1A1014', letterSpacing: '-.5px', margin: 0 }}>Invite candidates</h3></div>
                  <p style={{ fontSize: '16px', lineHeight: 1.6, color: '#5A4B4E', margin: 0, maxWidth: '440px' }}>Share one link or sync from your ATS. Candidates complete a fair, proctored experience on any device.</p>
                </div>
              </div>
              {/* Step 03 */}
              <div className="bhow-row" data-reveal="" data-delay="0.05" style={{ opacity: 0, transform: 'translateY(28px)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '72px', alignItems: 'center' }}>
                <div className="bhow-text">
                  <div style={{ fontSize: '88px', fontWeight: 900, lineHeight: 1, marginBottom: '10px', color: 'rgba(247,106,110,.18)', letterSpacing: '-3px', userSelect: 'none' }}>03</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}><span style={{ width: '48px', height: '48px', borderRadius: '16px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(247,106,110,.16)', color: '#F76A6E', flexShrink: 0 }}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><path d="M18 17V9" /><path d="M13 17V5" /><path d="M8 17v-3" /></svg></span><h3 style={{ fontSize: 'clamp(22px,2.4vw,30px)', fontWeight: 700, color: '#1A1014', letterSpacing: '-.5px', margin: 0 }}>Compare &amp; shortlist</h3></div>
                  <p style={{ fontSize: '16px', lineHeight: 1.6, color: '#5A4B4E', margin: 0, maxWidth: '440px' }}>Get an objective, ranked leaderboard. Move the strongest people forward in 30 minutes — bias left behind.</p>
                </div>
                <div className="bhow-visual"><div style={{ background: '#fff', borderRadius: '18px', border: '1px solid #F0E2E3', padding: '20px', boxShadow: '0 16px 34px rgba(110,11,14,.08)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}><span style={{ fontSize: '12.5px', fontWeight: 700, color: '#1A1014' }}>Ranked Results</span><span style={{ fontSize: '10px', color: '#8A7A7D' }}>156 candidates</span></div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {[
                      { rank: '#1', name: 'Sarah C.', badge: 'Top Match', badgeBg: 'rgba(34,163,91,.15)', badgeC: '#22A35B', score: '94', border: '1px solid rgba(242,63,68,.3)', bg: 'rgba(242,63,68,.05)', bars: [92, 96, 88, 98] },
                      { rank: '#2', name: 'Marcus W.', badge: 'Strong Fit', badgeBg: 'rgba(217,112,30,.15)', badgeC: '#D9701E', score: '87', border: '1px solid #F4E4E5', bg: '#FFF8F8', bars: [85, 90, 82, 91] },
                      { rank: '#3', name: 'Priya S.', badge: 'Good Fit', badgeBg: '#F1ECED', badgeC: '#8A7A7D', score: '79', border: '1px solid #F4E4E5', bg: '#FFF8F8', bars: [76, 82, 74, 84] },
                    ].map((r, i) => (
                      <div key={i} style={{ padding: '12px', borderRadius: '12px', border: r.border, background: r.bg }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}><span style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(242,63,68,.2)', color: '#F23F44', fontSize: '10px', fontWeight: 800, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>{r.rank}</span><span style={{ fontSize: '12.5px', fontWeight: 700, color: '#1A1014', flex: 1 }}>{r.name}</span><span style={{ fontSize: '9px', fontWeight: 800, padding: '2px 9px', borderRadius: '100px', background: r.badgeBg, color: r.badgeC }}>{r.badge}</span><span style={{ fontSize: '15px', fontWeight: 900, color: '#1A1014' }}>{r.score}</span></div>
                        <div style={{ display: 'flex', gap: '4px' }}>{r.bars.map((w, j) => (<div key={j} style={{ flex: 1, height: '4px', borderRadius: '100px', background: '#F1ECED', overflow: 'hidden' }}><div style={{ height: '100%', borderRadius: '100px', background: 'rgba(242,63,68,.7)', width: w + '%' }} /></div>))}</div>
                      </div>
                    ))}
                  </div>
                </div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LIBRARY */}
      <section id="library" className="sec-pad" style={{ padding: '96px 28px', background: '#fff' }}>
        <div className="tlib-wrap">
          <div style={{ maxWidth: '720px', margin: '0 0 30px' }}>
            <p data-reveal="" style={{ opacity: 0, transform: 'translateY(20px)', fontSize: '14px', fontWeight: 700, letterSpacing: '1px', color: '#9A878A', textTransform: 'uppercase', margin: '0 0 14px' }}>The test library<span style={{ color: '#F23F44' }}>.</span></p>
            <h2 data-reveal="" data-delay="0.06" style={{ opacity: 0, transform: 'translateY(24px)', fontSize: '42px', lineHeight: 1.1, fontWeight: 800, letterSpacing: '-1.3px', margin: '0 0 14px', color: '#1A1014' }}>3,500+ validated tests. A match for every role you hire.</h2>
            <p data-reveal="" data-delay="0.12" style={{ opacity: 0, transform: 'translateY(24px)', fontSize: '17px', lineHeight: 1.6, color: '#5A4B4E', margin: 0 }}>Search by role, skill or language — Testlify pulls a job-ready assessment in minutes, every test expert-validated and bias-checked.</p>
          </div>
          <div data-reveal="" data-delay="0.16" style={{ opacity: 0, transform: 'translateY(24px)' }}>
            <div className="tlib-chips">
              {LIB_CATS.map(([key, label]) => (
                <span key={key} className={libCat === key ? 'tlib-chip on' : 'tlib-chip'} data-cat={key} onClick={() => setLibCat(key)}>{label}</span>
              ))}
            </div>
          </div>
          <p className="tlib-count">{libCount}</p>
          {libResults.length > 0 ? (
            <div className="tlib-grid">
              {libResults.map((t, i) => (
                <div key={i} className="tlib-card2"><div className="tlib-c2top"><span className="tlib-cat2">{t.cat}</span><span className="tlib-fmt">{t.fmt}</span></div><p className="tlib-name">{t.name}</p><div className="tlib-meta2">{t.meta}</div></div>
              ))}
            </div>
          ) : (
            <div className="tlib-empty">No tests match — try another role or skill.</div>
          )}
          <div className="tlib-foot" data-reveal="" style={{ opacity: 0, transform: 'translateY(20px)' }}>
            <div className="tlib-stats"><span><b>3,500+</b> tests</span><span><b>4,500+</b> roles</span><span><b>45+</b> coding languages</span><span><b>13+</b> question formats</span></div>
            <a href="#" className="btnsheen" style={{ display: 'inline-flex', alignItems: 'center', gap: '9px', background: '#F23F44', color: '#fff', fontWeight: 600, fontSize: '16px', padding: '14px 26px', borderRadius: '14px', boxShadow: '0 14px 30px rgba(242,63,68,.32)', whiteSpace: 'nowrap' }}>Browse the full library<span style={{ fontSize: '18px', color: '#fff' }}>→</span></a>
          </div>
        </div>
      </section>

      {/* SKILLS INTELLIGENCE */}
      <section id="intelligence" className="sec-pad" style={{ padding: '96px 28px', background: '#FBF3EE' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          <div className="dwrap">
            <div>
              <p data-reveal="" style={{ opacity: 0, transform: 'translateY(20px)', fontSize: '14px', fontWeight: 700, letterSpacing: '1px', color: '#9A878A', textTransform: 'uppercase', margin: '0 0 14px' }}>Skills intelligence<span style={{ color: '#F23F44' }}>.</span></p>
              <h2 data-reveal="" data-delay="0.06" style={{ opacity: 0, transform: 'translateY(24px)', fontSize: '42px', lineHeight: 1.1, fontWeight: 800, letterSpacing: '-1.3px', margin: 0, color: '#1A1014' }}>From application to ranked shortlist — automatically</h2>
              <p data-reveal="" data-delay="0.1" style={{ opacity: 0, transform: 'translateY(24px)', fontSize: '17.5px', lineHeight: 1.6, color: '#5A4B4E', margin: '22px 0 0' }}>Every candidate is scored the moment they finish. Testlify validates skills, weighs them against the role, and surfaces your strongest people — no spreadsheets, no bias, no waiting.</p>
              <div data-reveal="" data-delay="0.16" style={{ opacity: 0, transform: 'translateY(24px)', display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '28px' }}>
                {['Objective, role-weighted skill scoring', 'Automatic, bias-controlled ranking', 'Shortlist-ready in minutes, not days'].map((t, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><span className="dchk">✓</span><span style={{ fontSize: '15.5px', fontWeight: 500, color: '#33282B' }}>{t}</span></div>
                ))}
              </div>
            </div>
            <div data-reveal="" data-delay="0.12" ref={dashRef} className="dash" style={{ opacity: 0, transform: 'translateY(28px)' }}>
              <div className="dscan" data-dscan="" />
              <div className="dashbar"><span className="ddot r" /><span className="ddot y" /><span className="ddot g" /><span className="dashtitle">Testlify · Assessment results</span><span className="dashlive"><i />Live scoring</span></div>
              <div className="dashbody">
                <div className="gaugewrap">
                  <svg viewBox="0 0 120 120"><defs><linearGradient id="gg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#F23F44" /><stop offset="1" stopColor="#FF8A6B" /></linearGradient></defs><circle className="gtrack" cx="60" cy="60" r="52" /><circle className="gfill" data-gfill="" cx="60" cy="60" r="52" /></svg>
                  <div className="gaugectr"><div className="gaugeval"><span data-gauge="">0</span><i>%</i></div><div className="gaugelbl">Skill match</div></div>
                </div>
                <div className="skills">
                  {[['JavaScript', 92], ['Problem solving', 88], ['Communication', 95], ['Cognitive ability', 90]].map(([nm, v], i) => (
                    <div key={i} className="skrow"><div className="skhead"><span>{nm}</span><b data-skv={v}>0%</b></div><div className="sktrack"><div className="skfill" data-sk={v} /></div></div>
                  ))}
                </div>
              </div>
              <div className="dashfoot">
                <div className="rankrow" data-rank="1"><span className="rankav" style={{ background: 'linear-gradient(135deg,#F23F44,#FF7A52)' }}>AK</span><div><div className="rankname">Aanya Kapoor</div><div className="rankrole">Senior Frontend Engineer</div></div><span className="rankbadge">Top match</span><span className="rankscore">94</span></div>
                <div className="rankrow" data-rank="2"><span className="rankav" style={{ background: 'linear-gradient(135deg,#7C3AED,#F23F44)' }}>DM</span><div><div className="rankname">Diego Morales</div><div className="rankrole">Senior Frontend Engineer</div></div><span className="rankscore">87</span></div>
                <div className="rankrow" data-rank="3"><span className="rankav" style={{ background: 'linear-gradient(135deg,#0EA5A4,#2A6FDB)' }}>LC</span><div><div className="rankname">Lin Chen</div><div className="rankrole">Senior Frontend Engineer</div></div><span className="rankscore">82</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DEMO TABS */}
      <section id="demo" className="sec-pad" data-demo="" style={{ padding: '96px 28px', background: '#fff' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 40px' }}>
            <p data-reveal="" style={{ opacity: 0, transform: 'translateY(20px)', fontSize: '14px', fontWeight: 700, letterSpacing: '1px', color: '#9A878A', textTransform: 'uppercase', margin: '0 0 14px' }}>See it in action<span style={{ color: '#F23F44' }}>.</span></p>
            <h2 data-reveal="" data-delay="0.06" style={{ opacity: 0, transform: 'translateY(24px)', fontSize: '46px', lineHeight: 1.08, fontWeight: 800, letterSpacing: '-1.4px', margin: 0, color: '#1A1014' }}>One platform, the whole funnel</h2>
          </div>
          <div data-reveal="" data-delay="0.1" className="demo-tabs" style={{ opacity: 0, transform: 'translateY(20px)', display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '34px' }}>
            <button data-tab="1" onClick={() => setTab(1)} className={'demo-tab ' + (tab === 1 ? 'on' : '')}>Test library</button>
            <button data-tab="2" onClick={() => setTab(2)} className={'demo-tab ' + (tab === 2 ? 'on' : '')}>Video interview</button>
            <button data-tab="0" onClick={() => setTab(0)} className={'demo-tab ' + (tab === 0 ? 'on' : '')}>AI resume screener</button>
          </div>

          <div style={{ position: 'relative', background: '#fff', border: '1px solid #F2E6E7', borderRadius: '26px', boxShadow: '0 26px 60px rgba(110,11,14,.10)', padding: '30px', minHeight: '380px' }}>
            {/* Panel 0: Resume screener */}
            <div data-panel="0" className={'dpanel ' + (tab === 0 ? 'on' : '')}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '26px', alignItems: 'center' }}>
                <div>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#FFF0F0', color: '#A91E23', fontWeight: 600, fontSize: '13px', padding: '7px 14px', borderRadius: '100px', marginBottom: '16px' }}><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M13 2L3 14h7l-1 8 10-12h-7z" /></svg>Screens 248 resumes in 11 seconds</div>
                  <h3 style={{ fontSize: '27px', fontWeight: 700, letterSpacing: '-.6px', margin: '0 0 12px', color: '#1A1014' }}>AI reads every résumé so you don&apos;t have to</h3>
                  <p style={{ fontSize: '16px', lineHeight: 1.6, color: '#5A4B4E', margin: '0 0 18px' }}>Every applicant is scored against the role&apos;s must-have skills and ranked instantly — surfacing real signal long before the first interview.</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px', color: '#33282B' }}><span style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#FFF0F0', color: '#F23F44', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 700 }}>✓</span>Knockout questions &amp; must-have filters</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px', color: '#33282B' }}><span style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#FFF0F0', color: '#F23F44', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 700 }}>✓</span>Bias-controlled, explainable scoring</div>
                  </div>
                </div>
                <div style={{ background: '#FFF8F8', border: '1px solid #F4E4E5', borderRadius: '18px', padding: '18px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}><span style={{ fontSize: '13px', fontWeight: 700, color: '#8A7A7D', letterSpacing: '.3px' }}>SCREENING QUEUE</span><span style={{ fontSize: '12px', fontWeight: 600, color: '#F23F44', background: '#fff', border: '1px solid #FBD0D1', padding: '4px 10px', borderRadius: '8px' }}><span className="livedot" />Live</span></div>
                  <div className="screencre"><div className="scanbeam" /><div style={{ display: 'flex', flexDirection: 'column', gap: '9px' }}>
                    {[['JL', 'linear-gradient(135deg,#F76A6E,#F23F44)', '#fff', 'Jordan L.', 'React · TypeScript · 6 yrs', '94', '#F23F44'], ['AM', 'linear-gradient(135deg,#FBA3A5,#F76A6E)', '#fff', 'Aisha M.', 'Vue · CSS · 4 yrs', '88', '#A91E23'], ['RK', 'linear-gradient(135deg,#FDD5D6,#FBA3A5)', '#A91E23', 'Rahul K.', 'Angular · 5 yrs', '81', '#C13238']].map((r, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '11px', background: '#fff', border: '1px solid #F2E6E7', borderRadius: '12px', padding: '11px 13px' }}><span style={{ width: '34px', height: '34px', borderRadius: '9px', background: r[1], color: r[2], display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, fontSize: '13px' }}>{r[0]}</span><div style={{ flex: 1 }}><div style={{ fontWeight: 600, fontSize: '14px' }}>{r[3]}</div><div style={{ fontSize: '12px', color: '#8A7A7D' }}>{r[4]}</div></div><span style={{ fontWeight: 700, color: r[6], fontSize: '15px' }}>{r[5]}</span></div>
                    ))}
                  </div></div>
                </div>
              </div>
            </div>
            {/* Panel 1: Test library */}
            <div data-panel="1" className={'dpanel ' + (tab === 1 ? 'on' : '')}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '26px', alignItems: 'center' }}>
                <div>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#FFF0F0', color: '#A91E23', fontWeight: 600, fontSize: '13px', padding: '7px 14px', borderRadius: '100px', marginBottom: '16px' }}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>3,500+ expert-validated tests</div>
                  <h3 style={{ fontSize: '27px', fontWeight: 700, letterSpacing: '-.6px', margin: '0 0 12px', color: '#1A1014' }}>A test for every role, skill and level</h3>
                  <p style={{ fontSize: '16px', lineHeight: 1.6, color: '#5A4B4E', margin: '0 0 18px' }}>Role-specific, cognitive, coding, language and personality assessments — or let AI generate a custom one from your job description in under a minute.</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '9px' }}>
                    {['Coding', 'Cognitive', 'Language', 'Personality', 'Situational'].map((c, i) => (
                      <span key={i} style={{ fontSize: '13.5px', fontWeight: 600, color: '#A91E23', background: '#FFF0F0', border: '1px solid #FBD0D1', padding: '7px 13px', borderRadius: '100px' }}>{c}</span>
                    ))}
                  </div>
                </div>
                <div style={{ background: '#FFF8F8', border: '1px solid #F4E4E5', borderRadius: '18px', padding: '20px' }}>
                  <div style={{ fontSize: '12px', fontWeight: 700, color: '#8A7A7D', letterSpacing: '.3px', marginBottom: '12px' }}>SAMPLE QUESTION · JAVASCRIPT</div>
                  <div style={{ fontSize: '15.5px', fontWeight: 600, color: '#1A1014', lineHeight: 1.5, marginBottom: '16px' }}>What does <span style={{ fontFamily: 'monospace', background: '#FFF0F0', color: '#A91E23', padding: '2px 7px', borderRadius: '6px' }}>Array.prototype.flat()</span> return on a nested array by default?</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '9px' }}>
                    <div className="optglow" style={{ display: 'flex', alignItems: 'center', gap: '11px', background: '#fff', border: '1.5px solid #FBD0D1', borderRadius: '11px', padding: '12px 14px', fontSize: '14.5px', fontWeight: 500 }}><span style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#F23F44', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 700 }}>A</span>Flattens one level deep<span className="okbadge" style={{ marginLeft: 'auto', display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '11.5px', fontWeight: 700, color: '#1F8A5B', background: '#E3F5EE', padding: '4px 9px', borderRadius: '7px' }}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>Correct</span></div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '11px', background: '#fff', border: '1px solid #F2E6E7', borderRadius: '11px', padding: '12px 14px', fontSize: '14.5px', fontWeight: 500, color: '#5A4B4E' }}><span style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#F4EBEC', color: '#8A7A7D', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 700 }}>B</span>Flattens infinitely</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '11px', background: '#fff', border: '1px solid #F2E6E7', borderRadius: '11px', padding: '12px 14px', fontSize: '14.5px', fontWeight: 500, color: '#5A4B4E' }}><span style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#F4EBEC', color: '#8A7A7D', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 700 }}>C</span>Throws a TypeError</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Panel 2: Video interview */}
            <div data-panel="2" className={'dpanel ' + (tab === 2 ? 'on' : '')}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '26px', alignItems: 'center' }}>
                <div>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#FFF0F0', color: '#A91E23', fontWeight: 600, fontSize: '13px', padding: '7px 14px', borderRadius: '100px', marginBottom: '16px' }}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7" /><rect x="1" y="5" width="15" height="14" rx="2" /></svg>One-way &amp; live interviews</div>
                  <h3 style={{ fontSize: '27px', fontWeight: 700, letterSpacing: '-.6px', margin: '0 0 12px', color: '#1A1014' }}>Structured interviews everyone scores fairly</h3>
                  <p style={{ fontSize: '16px', lineHeight: 1.6, color: '#5A4B4E', margin: '0 0 18px' }}>Async and live video with shared scorecards, so every reviewer judges the same things the same way — and bias has nowhere to hide.</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px', color: '#33282B' }}><span style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#FFF0F0', color: '#F23F44', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 700 }}>✓</span>Pre-set questions &amp; rating rubrics</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px', color: '#33282B' }}><span style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#FFF0F0', color: '#F23F44', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 700 }}>✓</span>Side-by-side candidate comparison</div>
                  </div>
                </div>
                <div style={{ background: '#FFF8F8', border: '1px solid #F4E4E5', borderRadius: '18px', padding: '18px' }}>
                  <div className="stripemove" style={{ position: 'relative', borderRadius: '14px', overflow: 'hidden', background: 'repeating-linear-gradient(135deg,#FBE4E5,#FBE4E5 12px,#FDD5D6 12px,#FDD5D6 24px)', height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
                    <span className="playpulse" style={{ position: 'relative', width: '54px', height: '54px', borderRadius: '50%', background: 'rgba(255,255,255,.92)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#F23F44', fontSize: '18px', boxShadow: '0 8px 22px rgba(110,11,14,.18)' }}>▶</span>
                    <span style={{ position: 'absolute', top: '10px', right: '12px', background: 'rgba(26,16,20,.78)', color: '#fff', fontSize: '11px', fontWeight: 700, padding: '4px 9px', borderRadius: '7px' }}><span className="recdot" />REC</span>
                    <span style={{ position: 'absolute', bottom: '10px', left: '12px', background: 'rgba(26,16,20,.78)', color: '#fff', fontSize: '11.5px', fontWeight: 600, padding: '4px 10px', borderRadius: '7px' }}>Q2 · Tell us about a tradeoff you made</span>
                  </div>
                  <div style={{ fontSize: '12px', fontWeight: 700, color: '#8A7A7D', letterSpacing: '.3px', marginBottom: '9px' }}>SCORECARD</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '14px' }}><span style={{ color: '#33282B' }}>Communication</span><span className="starseq" style={{ color: '#F23F44', letterSpacing: '1px' }}><i style={{ fontStyle: 'normal', animationDelay: '0s' }}>★</i><i style={{ fontStyle: 'normal', animationDelay: '.12s' }}>★</i><i style={{ fontStyle: 'normal', animationDelay: '.24s' }}>★</i><i style={{ fontStyle: 'normal', animationDelay: '.36s' }}>★</i><i style={{ fontStyle: 'normal', animationDelay: '.48s' }}>★</i></span></div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '14px' }}><span style={{ color: '#33282B' }}>Problem solving</span><span className="starseq" style={{ color: '#F23F44', letterSpacing: '1px' }}><i style={{ fontStyle: 'normal', animationDelay: '.2s' }}>★</i><i style={{ fontStyle: 'normal', animationDelay: '.32s' }}>★</i><i style={{ fontStyle: 'normal', animationDelay: '.44s' }}>★</i><i style={{ fontStyle: 'normal', animationDelay: '.56s' }}>★</i><i style={{ fontStyle: 'normal', opacity: 0.28, animation: 'none' }}>★</i></span></div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '14px' }}><span style={{ color: '#33282B' }}>Culture add</span><span className="starseq" style={{ color: '#F23F44', letterSpacing: '1px' }}><i style={{ fontStyle: 'normal', animationDelay: '.1s' }}>★</i><i style={{ fontStyle: 'normal', animationDelay: '.22s' }}>★</i><i style={{ fontStyle: 'normal', animationDelay: '.34s' }}>★</i><i style={{ fontStyle: 'normal', animationDelay: '.46s' }}>★</i><i style={{ fontStyle: 'normal', animationDelay: '.58s' }}>★</i></span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section id="usecases" className="sec-pad" style={{ padding: '96px 28px', background: '#FBF3EE', position: 'relative', overflow: 'hidden' }}>
        <div data-parallax="-0.24" style={{ position: 'absolute', top: '20px', left: '-50px', width: '220px', height: '220px', borderRadius: '50%', background: 'radial-gradient(circle at 55% 40%,#FFE1E1,#FBB6B8)', filter: 'blur(32px)', opacity: 0.26, pointerEvents: 'none' }} />
        <div data-parallax="0.18" style={{ position: 'absolute', bottom: '-60px', right: '4%', width: '180px', height: '180px', borderRadius: '50%', background: 'radial-gradient(circle at 45% 40%,#FFEDED,#FDD5D6)', filter: 'blur(28px)', opacity: 0.32, pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1180px', margin: '0 auto', position: 'relative' }}>
          <div style={{ maxWidth: '720px', margin: '0 0 8px' }}>
            <p data-reveal="" style={{ opacity: 0, transform: 'translateY(20px)', fontSize: '14px', fontWeight: 700, letterSpacing: '1px', color: '#9A878A', textTransform: 'uppercase', margin: '0 0 14px' }}>Built for every hiring scenario<span style={{ color: '#F23F44' }}>.</span></p>
            <h2 data-reveal="" data-delay="0.06" style={{ opacity: 0, transform: 'translateY(24px)', fontSize: '42px', lineHeight: 1.1, fontWeight: 800, letterSpacing: '-1.3px', margin: '0 0 14px', color: '#1A1014' }}>One platform, every way you hire</h2>
            <p data-reveal="" data-delay="0.12" style={{ opacity: 0, transform: 'translateY(24px)', fontSize: '17px', lineHeight: 1.6, color: '#5A4B4E', margin: 0 }}>From high-volume frontline roles to senior leadership, teams use Testlify to hire fairly and fast across every function and region.</p>
          </div>
          <div className="ucards">
            <UseCaseCard icon="chart" tint="#FFEDED" ink="#F23F44" href="#" title="Volume hiring" desc="Screen thousands of applicants automatically and surface the top few in minutes." />
            <UseCaseCard icon="globe" tint="#E6F0FD" ink="#2A74E0" href="#" title="Remote & global" desc="Assess candidates anywhere, in 9 languages, with a consistent, fair experience." />
            <UseCaseCard icon="cap" tint="#E3F5EE" ink="#1F9D7A" href="#" title="Campus & early talent" desc="Evaluate potential and aptitude at scale — no experience required to shine." />
            <UseCaseCard icon="users" tint="#FCF1DC" ink="#D69100" href="#" title="Diversity & inclusion" desc="Remove bias from screening and build teams on merit, not pedigree." />
            <UseCaseCard icon="code" tint="#EEEBFB" ink="#6D5BD0" href="#" title="Technical & coding" desc="Live coding, real-world dev tasks and auto-scored challenges across 50+ stacks." />
            <UseCaseCard icon="headset" tint="#FFEDED" ink="#F23F44" href="#" title="Sales & customer-facing" desc="Role-play simulations and situational judgement tests that mirror the real job." />
            <UseCaseCard icon="compass" tint="#E6F0FD" ink="#2A74E0" href="#" title="Leadership & psychometric" desc="Personality, aptitude and cognitive insight to build cohesive, high-trust teams." />
            <UseCaseCard icon="bolt" tint="#E3F5EE" ink="#1F9D7A" href="#" title="Lateral & specialist" desc="Validate deep, role-specific expertise before you commit to a senior hire." />
          </div>
        </div>
      </section>

      <Testimonials />

      {/* STATS BAND */}
      <section id="stats" className="sec-pad" style={{ padding: 0, background: '#FFF8F7' }}>
        <div style={{ maxWidth: '100%', margin: 0 }}>
          <div className="statband fullbleed dark">
            <canvas ref={netRef} className="sb-net" />
            <div className="sb-fade" />
            <div style={{ position: 'relative', zIndex: 3, textAlign: 'center', pointerEvents: 'none', maxWidth: '1180px', margin: '0 auto' }}>
              <p data-reveal="" className="sb-eyebrow" style={{ opacity: 0, transform: 'translateY(20px)', fontSize: '14px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', margin: '0 0 14px' }}>Global reach<span style={{ color: '#F23F44' }}>.</span></p>
              <h2 data-reveal="" data-delay="0.06" className="sb-h" style={{ opacity: 0, transform: 'translateY(24px)', fontSize: '42px', lineHeight: 1.1, fontWeight: 800, letterSpacing: '-1.3px', margin: '0 auto 12px', maxWidth: '1000px' }}>Find the best talent anywhere in the world</h2>
              <p data-reveal="" data-delay="0.1" className="sb-sub" style={{ opacity: 0, transform: 'translateY(24px)', fontSize: '16.5px', lineHeight: 1.6, margin: '0 auto 50px', maxWidth: '540px' }}>A smooth, simple hiring experience that candidates and hiring teams love every step of the way.</p>
              <div className="stat-grid" data-reveal="" data-delay="0.14" style={{ opacity: 0, transform: 'translateY(28px)', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '24px', textAlign: 'center' }}>
                <div>
                  <div className="sb-num" style={{ fontSize: '52px', fontWeight: 800, letterSpacing: '-2px', lineHeight: 1 }}><span data-count="1500" data-suffix="+">0</span></div>
                  <div className="sb-lbl" style={{ fontSize: '14.5px', fontWeight: 500, marginTop: '10px' }}>Talent teams hiring smarter</div>
                </div>
                <div>
                  <div className="sb-num" style={{ fontSize: '52px', fontWeight: 800, letterSpacing: '-2px', lineHeight: 1 }}><span data-count="3500" data-suffix="+">0</span></div>
                  <div className="sb-lbl" style={{ fontSize: '14.5px', fontWeight: 500, marginTop: '10px' }}>Expert-validated tests</div>
                </div>
                <div>
                  <div className="sb-num" style={{ fontSize: '52px', fontWeight: 800, letterSpacing: '-2px', lineHeight: 1 }}><span data-count="94" data-suffix="%">0</span></div>
                  <div className="sb-lbl" style={{ fontSize: '14.5px', fontWeight: 500, marginTop: '10px' }}>Candidate satisfaction</div>
                </div>
                <div>
                  <div className="sb-num" style={{ fontSize: '52px', fontWeight: 800, letterSpacing: '-2px', lineHeight: 1 }}><span data-count="55" data-suffix="%">0</span></div>
                  <div className="sb-lbl" style={{ fontSize: '14.5px', fontWeight: 500, marginTop: '10px' }}>Faster time to hire</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTEGRATIONS */}
      <section id="integrations" className="sec-pad" style={{ padding: '96px 28px', background: 'transparent' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 44px' }}>
            <p data-reveal="" style={{ opacity: 0, transform: 'translateY(20px)', fontSize: '14px', fontWeight: 700, letterSpacing: '1px', color: '#9A878A', textTransform: 'uppercase', margin: '0 0 14px' }}>Integrations<span style={{ color: '#F23F44' }}>.</span></p>
            <h2 data-reveal="" data-delay="0.06" style={{ opacity: 0, transform: 'translateY(24px)', fontSize: '42px', lineHeight: 1.1, fontWeight: 800, letterSpacing: '-1.3px', margin: '0 0 14px', color: '#1A1014' }}>Connected to 100+ ATS tools</h2>
            <p data-reveal="" data-delay="0.12" style={{ opacity: 0, transform: 'translateY(24px)', fontSize: '17px', lineHeight: 1.6, color: '#5A4B4E', margin: 0 }}>Native two-way sync with Workday, Greenhouse, Lever and 97 more — no middleware, no data mapping.</p>
          </div>
          <div data-reveal="" data-delay="0.16" className="intg-grid" style={{ opacity: 0, transform: 'translateY(28px)', display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: '14px' }}>
            {[
              ['https://testlify.com/wp-content/uploads/2024/09/Workday_Inc.-Logo.wine_-1-2048x1365-2.png', 'Workday'],
              ['https://testlify.com/wp-content/uploads/2023/03/629a0bbcb04c5ae587c411c2-1-1.png', 'Greenhouse'],
              ['https://testlify.com/wp-content/uploads/2025/10/Lever_Employ_Logo_Horizontal_Turquoise_Black-300x43-1.png?wsr', 'Lever'],
              ['https://testlify.com/wp-content/uploads/2025/10/SR-SAP-Logo.svg', 'SmartRecruiters'],
              ['https://testlify.com/wp-content/uploads/2024/09/BambooHR-Logo-1-2048x1152-2.png', 'BambooHR'],
              ['https://testlify.com/wp-content/uploads/2025/10/Successfactors-Logo-Vector.svg-.png?wsr', 'SuccessFactors'],
              ['https://testlify.com/wp-content/uploads/2025/10/logo.svg', 'UKG'],
              ['https://testlify.com/wp-content/uploads/2025/10/681b1f74457e6f968fdaaa8d_MASTER_RECRUITEE_COLOUR_PREFERRED-LOGO-TO-USE-1024x313.png?wsr', 'Recruitee'],
              ['https://testlify.com/wp-content/uploads/2024/08/zoho-recruit-logo-1.png', 'Zoho Recruit'],
              ['https://testlify.com/wp-content/uploads/2025/10/JazzHR_Employ_Logo_Horizontal_Purple_Black-1024x131.png?wsr', 'JazzHR'],
            ].map(([src, alt], i) => (
              /* eslint-disable-next-line @next/next/no-img-element */
              <div key={i} className="intg-tile"><img src={src} alt={alt} /></div>
            ))}
          </div>
          <div data-reveal="" data-delay="0.2" style={{ opacity: 0, transform: 'translateY(20px)', textAlign: 'center', marginTop: '26px' }}><a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#F23F44', fontWeight: 600, fontSize: '16px' }}>View all integrations<span>→</span></a></div>
        </div>
      </section>

      <section id="awards">
        <Recognition bg="#FBF3EE" />
      </section>

      <section id="security">
        <SecuritySection eyebrow="Security & compliance" heading="Built to keep your organization secure" sub="Audited controls, strong data governance and privacy protections — every assessment validated and EEOC-defensible." />
      </section>

      <section id="faq" className="sec-pad" style={{ padding: '96px 28px', background: '#FBF3EE' }}>
        <div style={{ maxWidth: '840px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', margin: '0 auto 38px' }}>
            <p data-reveal="" style={{ opacity: 0, transform: 'translateY(20px)', fontSize: '14px', fontWeight: 700, letterSpacing: '1px', color: '#9A878A', textTransform: 'uppercase', margin: '0 0 14px' }}>FAQ<span style={{ color: '#F23F44' }}>.</span></p>
            <h2 data-reveal="" data-delay="0.06" style={{ opacity: 0, transform: 'translateY(24px)', fontSize: '42px', lineHeight: 1.1, fontWeight: 800, letterSpacing: '-1.3px', margin: 0, color: '#1A1014' }}>Questions, answered</h2>
          </div>
          <div data-reveal="" data-delay="0.1" style={{ opacity: 0, transform: 'translateY(24px)' }}>
            <FAQ items={FAQ_ITEMS} />
          </div>
        </div>
      </section>

      <CtaBand />
      <SiteFooter />
    </div>
  );
}
