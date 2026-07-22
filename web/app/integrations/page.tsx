'use client';

import { useState } from 'react';
import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaButton from '@/components/CtaButton';
import CtaBand from '@/components/CtaBand';

const B = 'https://testlify.com/wp-content/uploads/';
const DATA = [
  { name: 'Workday', cat: 'ATS', tag: 'Native', logo: B + '2023/01/Workday-230x230-1.png' },
  { name: 'SAP SuccessFactors', cat: 'ATS', tag: 'Native', logo: B + '2023/01/SAP-SuccessFactors-230x230-1.png' },
  { name: 'Lever', cat: 'ATS', tag: 'Native', logo: B + '2023/01/Lever.png' },
  { name: 'Greenhouse', cat: 'ATS', tag: 'Native', logo: B + '2023/01/greenhouse-230x230-1.png' },
  { name: 'BambooHR', cat: 'ATS', tag: 'Native', logo: B + '2023/01/BambooHR.png' },
  { name: 'Workable', cat: 'ATS', tag: 'Native', logo: B + '2023/01/Workable.png' },
  { name: 'UKG Pro Recruiting', cat: 'ATS', tag: 'Native', logo: B + '2023/01/UKG-Pro-Recruiting.png' },
  { name: 'SmartRecruiters', cat: 'ATS', tag: 'Native', logo: B + '2023/01/SmartRecruiters.png' },
  { name: 'Fountain', cat: 'ATS', tag: 'Native', logo: B + '2023/01/download-5.png' },
  { name: 'Pinpoint', cat: 'ATS', tag: 'Native', logo: B + '2023/01/Pinpoint.png' },
  { name: 'Teamtailor', cat: 'ATS', tag: 'Native', logo: B + '2023/01/Teamtailor.png' },
  { name: 'Manatal', cat: 'ATS', tag: 'Native', logo: B + '2024/08/Manatal.png' },
  { name: 'JazzHR', cat: 'ATS', tag: 'Native', logo: B + '2025/10/JazzHR_Employ_Logo_Horizontal_Purple_Black-1024x131.png?wsr' },
  { name: 'Zoho Recruit', cat: 'ATS', tag: 'Native', logo: B + '2024/08/zoho-recruit-logo-1.png' },
  { name: 'Recruitee', cat: 'ATS', tag: 'Native', logo: B + '2025/10/681b1f74457e6f968fdaaa8d_MASTER_RECRUITEE_COLOUR_PREFERRED-LOGO-TO-USE-1024x313.png?wsr' },
];

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
.body{font-size:16px;line-height:1.66;color:#5A4B4E;}
.muted{color:#8A7A7D;}
.btn{display:inline-flex;align-items:center;gap:9px;font-weight:600;font-size:15.5px;padding:14px 26px;border-radius:13px;transition:transform .25s ease, box-shadow .25s ease;cursor:pointer;border:none;}
.btn-primary{background:#F23F44;color:#fff;box-shadow:0 12px 26px rgba(242,63,68,.30);}
.btn-primary:hover{transform:translateY(-2px);box-shadow:0 16px 34px rgba(242,63,68,.40);}
.btn-ghost{background:#fff;color:#1A1014;border:1.5px solid #EADDDE;}
.btn-ghost:hover{transform:translateY(-2px);border-color:#F2B7B9;box-shadow:0 10px 24px rgba(110,11,14,.08);}
.dot{width:4px;height:4px;border-radius:50%;background:#D9C7C9;}
.reveal{opacity:0;transform:translateY(26px);transition:opacity .7s cubic-bezier(.2,.7,.2,1), transform .7s cubic-bezier(.2,.7,.2,1);}
.reveal.in{opacity:1;transform:none;}
.ihero{padding:64px 28px 40px;background:radial-gradient(1100px 520px at 50% -10%,#FFF0EE 0%,rgba(255,240,238,0) 62%),#fff;text-align:center;}
.cats{display:flex;gap:10px;justify-content:center;flex-wrap:wrap;margin-top:14px;}
.cat{border:1px solid #EFE2E3;background:#fff;border-radius:999px;padding:9px 18px;font-size:13.5px;font-weight:600;color:#6A5A5D;cursor:pointer;transition:all .2s ease;font-family:inherit;}
.cat.on{background:#F23F44;color:#fff;border-color:#F23F44;}
.intgrid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;}
.intcard{display:flex;flex-direction:column;background:#fff;border:1px solid #EFE2E3;border-radius:18px;padding:22px;transition:transform .22s ease, box-shadow .22s ease, border-color .22s;}
.intcard:hover{transform:translateY(-4px);box-shadow:0 20px 42px rgba(110,11,14,.10);border-color:#F4D2D3;}
.intlogo{width:64px;height:64px;border-radius:14px;background:#FBF3EE;background-size:44px 44px;background-repeat:no-repeat;background-position:center;display:flex;align-items:center;justify-content:center;margin-bottom:16px;overflow:hidden;transition:transform .3s cubic-bezier(.2,.7,.3,1),background-color .3s;}
.intlogo img{max-width:44px;max-height:44px;object-fit:contain;transition:transform .3s cubic-bezier(.2,.7,.3,1);}
.intcard:hover .intlogo{transform:scale(1.06);background-color:#FFF0EF;}
.intload{display:flex;justify-content:center;margin-top:36px;}
.intloadbtn{display:inline-flex;align-items:center;gap:10px;background:#fff;border:1.5px solid #EADDDE;color:#1A1014;font-family:inherit;font-weight:600;font-size:15px;padding:13px 26px;border-radius:13px;cursor:pointer;transition:transform .25s,border-color .25s,box-shadow .25s;}
.intloadbtn:hover{transform:translateY(-2px);border-color:#F2B7B9;box-shadow:0 10px 24px rgba(110,11,14,.08);}
.intspin{width:16px;height:16px;border-radius:50%;border:2px solid #F4D2D3;border-top-color:#F23F44;animation:intspin .7s linear infinite;}
@keyframes intspin{to{transform:rotate(360deg);}}
.intnative{display:inline-flex;align-self:flex-start;font-size:11px;font-weight:700;letter-spacing:.04em;text-transform:uppercase;color:#1F9D6B;background:#E7F6EE;padding:3px 10px;border-radius:100px;margin-bottom:10px;}
.isearch{display:flex;align-items:center;gap:10px;max-width:none;margin:28px 0 0;background:#fff;border:1px solid #EFE2E3;border-radius:12px;padding:12px 16px;box-shadow:0 8px 20px rgba(110,11,14,.05);}
.isearch input{border:none;outline:none;font-family:inherit;font-size:15px;color:#1A1014;flex:1;background:transparent;}
.isearch svg{color:#A9999C;flex:none;}
.intmore{text-align:center;margin-top:34px;}
.intmore a{display:inline-flex;align-items:center;gap:8px;color:#F23F44;font-weight:700;font-size:15.5px;}
.intname{font-size:15.5px;font-weight:700;margin:0 0 4px;}
.intcat{font-size:12px;color:#A9999C;font-weight:600;margin:0 0 12px;}
.intdesc{font-size:13px;color:#6A5A5D;line-height:1.5;margin:0 0 14px;}
.intlink{font-size:12.5px;font-weight:700;color:#F23F44;margin-top:auto;}
.feature3{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;}
.fcard{background:#fff;border:1px solid #EFE2E3;border-radius:20px;padding:30px 26px;}
.fic{width:46px;height:46px;border-radius:13px;background:#FFF0F0;color:#F23F44;display:flex;align-items:center;justify-content:center;margin-bottom:18px;}
@media(max-width:1080px){.intgrid{grid-template-columns:1fr 1fr;}}
@media(max-width:920px){
  .h1{font-size:42px;letter-spacing:-1.4px;}
  .h2{font-size:32px;letter-spacing:-1px;}
  .sec{padding:72px 22px;}
  .intgrid{grid-template-columns:1fr 1fr;}
  .feature3{grid-template-columns:1fr;}
}

h1,h2,h3,h4,.h1,.h2,.h3,.hero h1,.eyebrow{text-wrap:balance;}p,li,.body,.lead,.sub,figcaption,blockquote{text-wrap:pretty;}/*om-balance-rule*/
`;

export default function IntegrationsPage() {
  const [query, setQuery] = useState('');
  const [limit, setLimit] = useState(8);
  const [loading, setLoading] = useState(false);

  const q = query.toLowerCase().trim();
  const filtered = q ? DATA.filter((d) => d.name.toLowerCase().includes(q)) : DATA;
  const shown = filtered.slice(0, limit);
  const hasMore = filtered.length > shown.length;

  const loadMore = () => {
    if (loading) return;
    setLoading(true);
    setTimeout(() => {
      setLimit((l) => l + 8);
      setLoading(false);
    }, 650);
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <SiteHeader announcement="New · Native two-way sync with Workday" announcementCta="View integration" />
      <section className="ihero">
        <div className="wrap" style={{ maxWidth: '860px' }}>
          <p className="eyebrow reveal">Integrations<b>.</b></p>
          <h1 className="h1 reveal" style={{ transitionDelay: '.04s' }}>Testlify integration with third-party platforms</h1>
          <p className="lead reveal" style={{ margin: '22px auto 0', maxWidth: '640px', transitionDelay: '.08s' }}>Our platform is designed with integration in mind and can be seamlessly connected to a variety of third-party tools including applicant tracking, communications, email tools, and more.</p>
          <div className="reveal" style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '28px', transitionDelay: '.1s' }}>
            <CtaButton label="Book a demo" href="/contact" variant="primary" size="md" icon="arrow" magnetic />
            <CtaButton label="API docs" href="#" variant="secondary" size="md" icon="none" />
          </div>
          <div className="reveal isearch" style={{ transitionDelay: '.14s' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            <input placeholder="Search integrations" value={query} onChange={(e) => { setQuery(e.target.value); setLimit(8); }} />
          </div>
        </div>
      </section>
      <section style={{ padding: '18px 28px 0' }}>
        <div className="wrap">
          <div className="intgrid">
            {shown.map((it, i) => (
              <div className="intcard reveal in" key={i}>
                <div className="intlogo" style={{ backgroundImage: `url(${it.logo})` }}></div>
                <span className="intnative">{it.tag}</span>
                <p className="intname">{it.name}</p>
                <p className="intcat">{it.cat}</p>
              </div>
            ))}
          </div>
          {hasMore && (
            <div className="intload">
              <button className="intloadbtn" onClick={loadMore}>
                {loading ? <><span className="intspin"></span>Loading…</> : 'Load more integrations'}
              </button>
            </div>
          )}
          <div className="intmore reveal"><a href="#">Explore all 100+ native integrations<span>→</span></a></div>
        </div>
      </section>
      <section className="sec" style={{ paddingTop: '84px' }}>
        <div className="wrap">
          <div style={{ maxWidth: '640px', margin: '0 auto 44px', textAlign: 'center' }}>
            <p className="eyebrow reveal">Why it matters<b>.</b></p>
            <h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>One source of truth for hiring</h2>
          </div>
          <div className="feature3">
            <div className="fcard reveal"><span className="fic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg></span><h3 className="h3" style={{ fontSize: '18px', marginBottom: '8px' }}>Two-way sync</h3><p className="body" style={{ fontSize: '14px' }}>Candidates, stages and scores flow both ways automatically — no copy-paste, no stale data.</p></div>
            <div className="fcard reveal" style={{ transitionDelay: '.06s' }}><span className="fic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9z"></path></svg></span><h3 className="h3" style={{ fontSize: '18px', marginBottom: '8px' }}>Set up in minutes</h3><p className="body" style={{ fontSize: '14px' }}>Authenticate once and you&apos;re live. Most integrations connect in under five minutes, no engineering needed.</p></div>
            <div className="fcard reveal" style={{ transitionDelay: '.12s' }}><span className="fic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg></span><h3 className="h3" style={{ fontSize: '18px', marginBottom: '8px' }}>Open API &amp; webhooks</h3><p className="body" style={{ fontSize: '14px' }}>Build exactly the workflow you need with a fully documented REST API and real-time event webhooks.</p></div>
          </div>
        </div>
      </section>
      <section className="sec" style={{ background: '#1A1014', color: '#fff', textAlign: 'center' }}>
        <div className="wrap" style={{ maxWidth: '720px' }}>
          <h2 className="h2 reveal" style={{ color: '#fff' }}>Don&apos;t see your tool?</h2>
          <p className="lead reveal" style={{ color: 'rgba(255,255,255,.78)', margin: '18px auto 30px', transitionDelay: '.04s' }}>Our API connects Testlify to anything. Tell us what you use and we&apos;ll help you wire it up.</p>
          <div className="reveal" style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap', transitionDelay: '.08s' }}>
            <CtaButton label="Read API docs" href="#" variant="light" size="md" icon="arrow" />
            <CtaButton label="Request an integration" href="#" variant="outline-light" size="md" icon="none" />
          </div>
        </div>
      </section>
      <CtaBand />
      <SiteFooter />
    </>
  );
}
