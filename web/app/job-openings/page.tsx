'use client';

import { useState } from 'react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaBand from '@/components/CtaBand';

const css = `
.jhero{position:relative;overflow:hidden;padding:96px 28px 70px;background:radial-gradient(1100px 560px at 50% -12%,#FFE9E7 0%,rgba(255,240,238,0) 60%),#fff;text-align:center;}
.jhero-in{position:relative;z-index:2;max-width:900px;margin:0 auto;}
.jblob{position:absolute;border-radius:50%;filter:blur(46px);opacity:.55;z-index:0;pointer-events:none;}
.jblob.b1{width:400px;height:400px;background:radial-gradient(circle,#FF7A52,rgba(255,122,82,0));top:-120px;left:-80px;animation:jblur 9s ease-in-out infinite;}
.jblob.b2{width:360px;height:360px;background:radial-gradient(circle,#F23F44,rgba(242,63,68,0));top:-10px;right:-90px;animation:jblur 12s ease-in-out infinite 1s;}
@keyframes jblur{0%,100%{filter:blur(40px);opacity:.42;transform:scale(1);}50%{filter:blur(84px);opacity:.7;transform:scale(1.16);}}
.jrow{display:flex;flex-direction:column;gap:14px;background:#fff;border:1px solid #EFE2E3;border-radius:16px;padding:24px 26px;transition:transform .3s cubic-bezier(.2,.7,.3,1),border-color .3s,box-shadow .3s;height:100%;}
.jrow:hover{transform:translateY(-3px);border-color:#FBD0D1;box-shadow:0 16px 34px rgba(110,11,14,.10);}
.jgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;}
@media(max-width:1080px){.jgrid{grid-template-columns:repeat(2,1fr);}}
@media(max-width:640px){.jgrid{grid-template-columns:1fr;}}
.jmeta{display:flex;gap:10px;flex-wrap:wrap;margin-top:8px;}
.jtag{font-size:12.5px;font-weight:600;color:#8A7A7D;background:#FBF3EE;border-radius:100px;padding:5px 12px;}
.japply{font-size:14px;font-weight:700;color:#F23F44;white-space:nowrap;}
.jdesc{font-size:14px;line-height:1.55;color:#5A4B4E;margin:10px 0 0;max-width:600px;}
.jfilters{display:flex;gap:14px;flex-wrap:wrap;margin-bottom:28px;}
.jsel{font-family:inherit;font-size:14px;font-weight:600;color:#1A1014;background:#fff;border:1.5px solid #EADDDE;border-radius:12px;padding:11px 16px;cursor:pointer;}
.jempty{text-align:center;color:#8A7A7D;font-size:15px;padding:20px 0;}
.jstrip{display:flex;align-items:flex-start;justify-content:center;max-width:1100px;margin:0 auto;}
.jstat{flex:1;text-align:center;padding:4px 30px;}
.jstat + .jstat{border-left:1px solid #EADDDE;}
.jstatn{display:block;font-size:34px;font-weight:800;letter-spacing:-1px;color:#1A1014;line-height:1;font-variant-numeric:tabular-nums;}
.jstatn b{color:#F76A6E;font-weight:800;}
.jstatl{display:block;font-size:14px;color:#6C5A5D;margin-top:12px;line-height:1.5;max-width:190px;margin-left:auto;margin-right:auto;}
@media(max-width:720px){.jstrip{flex-direction:column;gap:18px;padding:6px;}.jstat+.jstat{border-left:none;}}
.jtabset{position:relative;display:inline-flex;align-items:center;gap:4px;background:#F3E9E9;border:1px solid #EADDDE;border-radius:100px;padding:5px;flex-wrap:wrap;justify-content:center;}
.jtabbtn{font-family:inherit;font-size:14px;font-weight:600;color:#6A585B;background:transparent;border:0;padding:10px 20px;border-radius:100px;cursor:pointer;transition:color .2s,background .2s,box-shadow .2s;}
.jtabbtn:hover{color:#1A1014;}
.jtabbtn.on{background:#fff;color:#1A1014;box-shadow:0 2px 8px rgba(110,11,14,.14);}
.jproc{display:grid;grid-template-columns:repeat(4,1fr);gap:0;position:relative;}
.jstep{text-align:center;padding:0 18px;position:relative;}
.jstepn{width:44px;height:44px;border-radius:50%;background:#fff;border:2px solid #F23F44;color:#F23F44;font-weight:800;font-size:17px;display:flex;align-items:center;justify-content:center;margin:0 auto 18px;position:relative;z-index:2;}
.jstep::before{content:"";position:absolute;top:22px;left:-50%;width:100%;height:2px;background:#F0DEDE;z-index:1;}
.jstep:first-child::before{display:none;}
.jsteph{font-size:16px;font-weight:700;color:#1A1014;margin:0 0 6px;}
.jstepd{font-size:13.5px;color:#8A7A7D;line-height:1.5;max-width:190px;margin:0 auto;}
@media(max-width:920px){ .jproc{grid-template-columns:1fr;gap:34px;} .jstep::before{display:none;} }
.jcollage{display:grid;grid-template-columns:repeat(12,1fr);gap:10px;max-width:1140px;margin:0 auto 40px;height:230px;}
.jtimeline{position:relative;max-width:1000px;margin:0 auto;padding-top:10px;}
.jtimeline::before{content:"";position:absolute;left:0;right:0;top:17px;height:2px;background:#F0DEDE;}
.jtl-row{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;}
.jtl-item{position:relative;padding-top:36px;text-align:center;}
.jtl-dot{position:absolute;top:9px;left:50%;transform:translateX(-50%);width:17px;height:17px;border-radius:50%;background:#F23F44;border:3px solid #fff;box-shadow:0 0 0 2px #F0DEDE;}
.jtl-y{font-size:13px;font-weight:700;color:#F23F44;display:block;margin-bottom:6px;}
.jtl-t{font-size:13.5px;color:#5A4B4E;line-height:1.4;max-width:170px;margin:0 auto;}
.jval{display:flex;flex-direction:column;gap:2px;}
.jval-row{display:flex;align-items:center;justify-content:space-between;padding:22px 4px;border-bottom:1px solid rgba(255,255,255,.12);cursor:default;}
.jval-row:first-child{border-top:1px solid rgba(255,255,255,.12);}
.jval-n{font-size:20px;font-weight:700;color:#fff;}
.jval-d{font-size:14.5px;color:rgba(255,255,255,.6);max-width:420px;text-align:right;line-height:1.5;}
.jfaq{max-width:800px;margin:0 auto;}
.jfaq-item{border-bottom:1px solid #EFE2E3;padding:20px 4px;cursor:pointer;}
.jfaq-q{display:flex;align-items:center;justify-content:space-between;font-size:16px;font-weight:700;color:#1A1014;}
.jfaq-q svg{flex:none;transition:transform .25s ease;color:#F23F44;}
.jfaq-a{font-size:14.5px;line-height:1.6;color:#5A4B4E;max-height:0;overflow:hidden;transition:max-height .3s ease,margin-top .3s ease;margin-top:0;}
.jfaq-item.open .jfaq-a{margin-top:12px;}
.jfaq-item.open .jfaq-q svg{transform:rotate(45deg);}
.jteamgrid{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;}
.jcollage img,.jteamgrid img{box-shadow:0 16px 34px rgba(110,11,14,.16);border-radius:16px;overflow:hidden;object-fit:cover;}
@keyframes jfloaty{0%,100%{transform:translateY(0);}50%{transform:translateY(-10px);}}
.jteamgrid img{animation:jfloaty 6.5s ease-in-out infinite;}
@media(max-width:920px){ .jcollage{grid-template-columns:repeat(3,1fr);height:auto;} .jcollage>div{height:110px!important;transform:none!important;} .jtl-row{grid-template-columns:1fr 1fr;row-gap:30px;} .jval-row{flex-direction:column;align-items:flex-start;gap:8px;} .jval-d{text-align:left;} .jteamgrid{grid-template-columns:1fr 1fr;} }
`;

type Job = { title: string; dept: string; loc: string; desc: string };

const ALL_JOBS: Job[] = [
  { title: 'Integration Platform Reliability Engineer', dept: 'Development', loc: 'Hybrid', desc: 'Hiring an Integration Platform Reliability Engineer to ensure scalable, secure system integrations. Drive reliability, automation, and performance.' },
  { title: 'Senior Platform Engineer', dept: 'Development', loc: 'Hybrid', desc: 'Hiring a Senior Platform Engineer to design, scale, and optimize cloud infrastructure. Lead platform reliability, automation, and performance.' },
  { title: 'AI / ML Engineer', dept: 'Development', loc: 'Hybrid', desc: 'Seeking an AI/ML Engineer experienced in designing, developing, and deploying machine learning models to solve complex problems.' },
  { title: 'Full-Stack Software Engineer (AI / ML Exposure)', dept: 'Development', loc: 'Hybrid', desc: 'Seeking a Full-Stack Software Engineer skilled in building scalable web apps across frontend and backend with modern frameworks.' },
  { title: 'PR & Communications Manager — North America focus', dept: 'Marketing', loc: 'Mumbai', desc: "We're seeking a PR & Communications Manager skilled in strategy, media relations, and brand messaging to elevate communication efforts across platforms." },
  { title: 'Senior Software Engineer (AI Engineer)', dept: 'Development', loc: 'Mumbai', desc: 'We are looking for a Senior Software Engineer (AI Engineer) to develop and scale AI-driven solutions.' },
  { title: 'Copywriter', dept: 'Marketing', loc: 'Mumbai', desc: 'We are hiring for a full-time Copywriter role, suitable for technical and non-technical people looking to learn managerial skills.' },
  { title: 'Sr. Sales Executive (B2B SaaS)', dept: 'Sales', loc: 'Mumbai', desc: 'Seeking a Senior Sales Executive experienced in driving revenue growth and building lasting client relationships.' },
  { title: 'Senior UI/UX Designer (Figma, B2B SaaS)', dept: 'Development', loc: 'Mumbai', desc: 'Seeking a Senior UI/UX Designer proficient in Figma, specializing in B2B SaaS design and intuitive interfaces.' },
  { title: 'Senior DevOps Engineer', dept: 'Development', loc: 'Remote', desc: 'Responsible for managing infrastructure, automation, and CI/CD pipelines for efficient development and deployment.' },
  { title: 'Lead QA Engineer (Automation in Cypress)', dept: 'Development', loc: 'Mumbai', desc: 'Looking for a Lead QA Engineer experienced in Cypress automation, leading QA efforts to ensure software reliability.' },
  { title: 'Architect', dept: 'Development', loc: 'Remote', desc: 'Seeking an Architect experienced in designing scalable software systems and implementing robust architectures.' },
];

const FAQ_DATA = [
  { q: 'What types of roles are available at Testlify?', a: "We hire across engineering, product, design, marketing and sales — see the open roles above for what's live right now." },
  { q: 'Is Testlify remote-friendly?', a: 'Yes. We run a mix of remote, hybrid and Mumbai-based roles — each listing states where that role sits.' },
  { q: 'What does the interview process look like?', a: 'A resume review, a short screening call, a working interview with the team, then an offer — usually within a couple of weeks.' },
  { q: 'Do you offer internships?', a: 'We open internship and early-career slots periodically — check back here or introduce yourself via the contact page.' },
  { q: "What's it like to work here?", a: 'Small, accountable teams shipping fast, with the flexibility of remote-first work and real ownership over your area.' },
];

const HERO_PHOTOS: { id: string; src: string; wrapStyle: React.CSSProperties; anim: string }[] = [
  { id: 'job-photo-1', src: 'https://testlify.com/wp-content/uploads/2024/03/9G6A2603-1536x1024.jpg-1024x683.webp', wrapStyle: { gridColumn: 'span 2', alignSelf: 'end', height: '80%', transform: 'rotate(-3deg)' }, anim: 'jfloaty 6s ease-in-out infinite' },
  { id: 'job-photo-2', src: 'https://testlify.com/wp-content/uploads/2024/03/6S5A7284-1536x1024.jpg-1024x683.webp', wrapStyle: { gridColumn: 'span 2', height: '96%', transform: 'rotate(1deg)' }, anim: 'jfloaty 7s ease-in-out infinite .3s' },
  { id: 'job-photo-3', src: 'https://testlify.com/wp-content/uploads/2024/03/9G6A2911-1536x1024.jpg-1024x683.webp', wrapStyle: { gridColumn: 'span 3', height: '100%', transform: 'translateY(-8px)' }, anim: 'jfloaty 6.5s ease-in-out infinite .6s' },
  { id: 'job-photo-4', src: 'https://testlify.com/wp-content/uploads/2024/03/9G6A2940-1536x1024.jpg-1024x683.webp', wrapStyle: { gridColumn: 'span 2', height: '90%', alignSelf: 'end', transform: 'rotate(2deg)' }, anim: 'jfloaty 7.5s ease-in-out infinite .2s' },
  { id: 'job-photo-5', src: 'https://testlify.com/wp-content/uploads/2024/03/9G6A2941-1536x1024.jpg-1024x683.webp', wrapStyle: { gridColumn: 'span 2', height: '74%', alignSelf: 'start', transform: 'rotate(-1deg)' }, anim: 'jfloaty 6.2s ease-in-out infinite .5s' },
  { id: 'job-photo-6', src: 'https://testlify.com/wp-content/uploads/2024/03/IMG_1459-1536x1152.jpg-1024x768.webp', wrapStyle: { gridColumn: 'span 1', height: '56%', alignSelf: 'end', transform: 'rotate(3deg)' }, anim: 'jfloaty 6.8s ease-in-out infinite .1s' },
];

export default function JobOpeningsPage() {
  const [cat, setCat] = useState('All');
  const [loc, setLoc] = useState('All');
  const [openFaq, setOpenFaq] = useState(0);

  const count = (key: keyof Job) => {
    const c: Record<string, number> = {};
    ALL_JOBS.forEach((j) => { c[j[key]] = (c[j[key]] || 0) + 1; });
    return c;
  };
  const dc = count('dept');
  const lc = count('loc');
  const catOptions = [{ value: 'All', label: `All (${ALL_JOBS.length})` }, ...Object.keys(dc).map((k) => ({ value: k, label: `${k} (${dc[k]})` }))];
  const locOptions = [{ value: 'All', label: 'All locations' }, ...Object.keys(lc).map((k) => ({ value: k, label: `${k} (${lc[k]})` }))];

  const jobs = ALL_JOBS.filter((j) => (cat === 'All' || j.dept === cat) && (loc === 'All' || j.loc === loc));
  const noResults = jobs.length === 0;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <SiteHeader announcement="We're hiring across product, engineering and GTM" announcementCta="See all roles" />

      <section className="jhero">
        <div className="jblob b1"></div>
        <div className="jblob b2"></div>
        <div className="jhero-in wrap" style={{ maxWidth: 860 }}>
          <p className="eyebrow reveal">Job openings<b>.</b></p>
          <h1 className="h1 reveal" style={{ transitionDelay: '.04s' }}>Build the future<br /><span style={{ color: '#F23F44' }}>of hiring</span> with us</h1>
          <p className="lead reveal" style={{ margin: '22px auto 0', maxWidth: 640, transitionDelay: '.08s' }}>Explore exciting career opportunities with us! Join our innovative team and help shape the future with your skills and passion.</p>
        </div>
      </section>

      <div className="wrap"><div className="jcollage reveal">
        {HERO_PHOTOS.map((p) => (
          <div key={p.id} style={p.wrapStyle}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={p.src} alt="Team photo" style={{ width: '100%', height: '100%', animation: p.anim }} />
          </div>
        ))}
      </div></div>

      <div style={{ background: '#FBF3EE', padding: '28px 28px' }}><div className="wrap reveal jstrip">
        <div className="jstat"><span className="jstatn">100<b>+</b></span><span className="jstatl">People across product, engineering and GTM</span></div>
        <div className="jstat"><span className="jstatn">50,000<b>+</b></span><span className="jstatl">Recruiters trust the platform we build</span></div>
        <div className="jstat"><span className="jstatn">5<b>M+</b></span><span className="jstatl">Candidates assessed through our product</span></div>
        <div className="jstat"><span className="jstatn">3</span><span className="jstatl">Global hubs — Mumbai, hybrid and remote</span></div>
      </div></div>

      <section className="sec" style={{ paddingTop: 64 }}><div className="wrap">
        <div className="center-head">
          <p className="eyebrow reveal">Our journey<b>.</b></p>
          <h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>Founded in 2021</h2>
        </div>
        <div className="jtimeline reveal"><div className="jtl-row">
          <div className="jtl-item"><span className="jtl-dot"></span><span className="jtl-y">2021</span><p className="jtl-t">Testlify is founded to replace gut-feel hiring with proven skill.</p></div>
          <div className="jtl-item"><span className="jtl-dot"></span><span className="jtl-y">Backed by</span><p className="jtl-t">Google for Startups, Microsoft for Startups and NVIDIA Inception.</p></div>
          <div className="jtl-item"><span className="jtl-dot"></span><span className="jtl-y">Today</span><p className="jtl-t">100+ people and 5M+ candidates assessed through our platform.</p></div>
          <div className="jtl-item"><span className="jtl-dot"></span><span className="jtl-y">What&apos;s next</span><p className="jtl-t">Growing the team across product, engineering and go-to-market.</p></div>
        </div></div>
      </div></section>

      <section className="sec" style={{ background: '#1A1014' }}><div className="wrap" style={{ maxWidth: 820 }}>
        <div className="center-head" style={{ marginBottom: 24 }}>
          <p className="eyebrow reveal" style={{ color: '#C9B9BC' }}>Our values<b>.</b></p>
          <h2 className="h2 reveal" style={{ color: '#fff', transitionDelay: '.04s' }}>How we work</h2>
        </div>
        <div className="jval reveal">
          <div className="jval-row"><span className="jval-n">Prove it</span><span className="jval-d">We trust evidence over instinct — in hiring, in shipping, in everything.</span></div>
          <div className="jval-row"><span className="jval-n">Obsess over fairness</span><span className="jval-d">Every candidate deserves an equal, objective shot. We build like it.</span></div>
          <div className="jval-row"><span className="jval-n">Own the outcome</span><span className="jval-d">Small teams, real accountability. You ship it, you own it.</span></div>
          <div className="jval-row"><span className="jval-n">Move with urgency</span><span className="jval-d">We&apos;re scaling fast — speed and quality both matter, always.</span></div>
          <div className="jval-row"><span className="jval-n">Win together</span><span className="jval-d">Remote-first doesn&apos;t mean alone. We support each other relentlessly.</span></div>
        </div>
      </div></section>

      <section className="sec" id="roles" style={{ background: '#FBF3EE' }}><div className="wrap" style={{ maxWidth: 1160 }}>
        <div className="center-head">
          <p className="eyebrow reveal">Open roles<b>.</b></p>
          <h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>Find your team</h2>
        </div>
        <div className="reveal jfilters" style={{ justifyContent: 'center' }}>
          <select className="jsel" value={cat} onChange={(e) => setCat(e.target.value)}>
            {catOptions.map((opt) => (<option key={opt.value} value={opt.value}>{opt.label}</option>))}
          </select>
          <select className="jsel" value={loc} onChange={(e) => setLoc(e.target.value)}>
            {locOptions.map((opt) => (<option key={opt.value} value={opt.value}>{opt.label}</option>))}
          </select>
        </div>
        <div className="reveal jgrid">
          {jobs.map((job, i) => (
            <div className="jrow" key={i}><div><h3 className="h3" style={{ fontSize: 17 }}>{job.title}</h3><div className="jmeta"><span className="jtag">{job.dept}</span><span className="jtag">{job.loc}</span></div><p className="jdesc">{job.desc}</p></div><a className="japply" href="/job-openings-detail" target="_self" rel="noopener">Job details →</a></div>
          ))}
          {noResults && <p className="jempty">No roles match these filters right now.</p>}
        </div>
        <p className="body reveal" style={{ textAlign: 'center', marginTop: 28 }}>Don&apos;t see your role? <a className="lnk" href="/contact">Introduce yourself</a> — we&apos;re always meeting great people.</p>
      </div></section>

      <section className="sec" style={{ background: '#FBF3EE' }}><div className="wrap">
        <div className="center-head">
          <p className="eyebrow reveal">FAQ<b>.</b></p>
          <h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>Questions candidates ask</h2>
        </div>
        <div className="jfaq reveal">
          {FAQ_DATA.map((f, i) => (
            <div className={`jfaq-item ${openFaq === i ? 'open' : ''}`} key={i} onClick={() => setOpenFaq(openFaq === i ? -1 : i)}>
              <div className="jfaq-q">{f.q}<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14"></path></svg></div>
              <div className="jfaq-a" style={{ maxHeight: openFaq === i ? '300px' : '0px' }}>{f.a}</div>
            </div>
          ))}
        </div>
      </div></section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
