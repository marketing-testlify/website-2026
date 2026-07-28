'use client';

import { useState } from 'react';
import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import CtaBand from '@/components/CtaBand';
import SiteFooter from '@/components/SiteFooter';

const DATA = {
  name: 'Workday',
  logo: 'https://testlify.com/wp-content/uploads/2023/01/Workday-230x230-1.png',
  languages: 'English',
  pricing: 'Add on',
  category: 'ATS',
  description: [
    'Workday is a modern financial management system that enables organizations to efficiently handle financial processes, drive growth, and monitor risk. It allows businesses to focus on taking action rather than transaction processing by providing automated financial management processes and real-time insights. Unlike traditional ERP systems, which consist of multiple disconnected applications, Workday combines finance and HR applications into a single, robust design. This allows for the seamless integration of financial and people data, allowing organizations to make informed and confident decisions.',
    'Workday is designed to be adaptable and flexible, allowing businesses to change and evolve as needed. The platform is open, extensible, and configurable and automatically delivers the latest innovation, keeping organizations ready for what’s next, whether in finance, HR, or IT.',
  ],
  features: [
    'Seamless Workday-ATS integration',
    'Real-time syncing of candidate information',
    'Automated offer letter and contract generation',
    'Single sign-on for candidates and hiring managers',
    'Improved candidate experience',
    'Recruitment metrics tracking and analytics',
    'Streamlined recruitment process',
    'Applicant Data Management',
    'Hiring Processes Tracking',
  ],
};

export default function IntegrationsDetailPage() {
  const [tab, setTab] = useState<'desc' | 'feat'>('desc');

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
*{box-sizing:border-box;}
html{scroll-behavior:smooth;}
body{margin:0;font-family:'Poppins',sans-serif;-webkit-font-smoothing:antialiased;color:#1A1014;background:#fff;}
a{text-decoration:none;color:inherit;}
a:hover{color:#F23F44;}
.iw{max-width:1140px;margin:0 auto;padding:0 28px;}
.reveal{opacity:0;transform:translateY(22px);transition:opacity .7s cubic-bezier(.2,.7,.2,1),transform .7s cubic-bezier(.2,.7,.2,1);}
.reveal.in{opacity:1;transform:none;}
.iback{display:inline-flex;align-items:center;gap:8px;font-size:13.5px;font-weight:600;color:#F23F44;margin:0 0 24px;}
.iback svg{transition:transform .2s;}
.iback:hover svg{transform:translateX(-3px);}
.ihead{display:flex;align-items:center;gap:20px;margin-bottom:34px;flex-wrap:wrap;}
.ihead .ilogo{width:76px;height:76px;border-radius:16px;border:1px solid #F0E2E3;background:#fff;display:flex;align-items:center;justify-content:center;padding:12px;flex:none;}
.ihead .ilogo img{max-width:100%;max-height:100%;object-fit:contain;}
.ih1{font-size:34px;font-weight:800;letter-spacing:-1px;margin:0;color:#1A1014;}
.ibody{padding:44px 28px 60px;}
.ilayout{display:grid;grid-template-columns:minmax(0,1fr) 280px;gap:48px;align-items:start;}
.iside{position:sticky;top:96px;display:flex;flex-direction:column;gap:20px;}
.icard{background:#FBF3EE;border:1px solid #F0E2E3;border-radius:18px;padding:24px 26px;}
.icard h4{font-size:12.5px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#8A7A7D;margin:0 0 10px;}
.icard p{font-size:14.5px;font-weight:700;color:#1A1014;margin:0 0 18px;}
.icard p:last-of-type{margin-bottom:0;}
.imeta{margin-bottom:18px;}
.imeta:last-child{margin-bottom:0;}
.imeta .imhead{display:flex;align-items:center;gap:8px;margin-bottom:3px;}
.imeta .imic{flex:none;width:16px;height:16px;color:#F23F44;display:flex;align-items:center;justify-content:center;}
.imeta h4{margin:0;}
.imeta p{margin:0;padding-left:24px;}
.iaddbtn{display:flex;align-items:center;justify-content:center;gap:8px;background:#F23F44;color:#fff;border:0;border-radius:12px;padding:13px 20px;font-family:inherit;font-weight:700;font-size:14.5px;cursor:pointer;width:100%;margin-bottom:20px;transition:transform .2s,box-shadow .2s;}
.iaddbtn:hover{transform:translateY(-2px);box-shadow:0 12px 26px rgba(242,63,68,.28);}
.ilinks{list-style:none;margin:0;padding:0;}
.ilinks li{display:flex;align-items:center;gap:10px;margin-bottom:11px;}
.ilinks li:last-child{margin-bottom:0;}
.ilinks svg{flex:none;color:#8A7A7D;}
.ilinks a{font-size:13.5px;color:#5A4B4E;}
.ilinks a:hover{color:#F23F44;}
.imain{max-width:760px;min-width:0;}
.itabs{display:flex;gap:8px;border-bottom:1px solid #F0E2E3;margin-bottom:28px;}
.itab{font-family:inherit;font-size:14.5px;font-weight:700;color:#8A7A7D;background:none;border:0;padding:12px 6px;cursor:pointer;position:relative;}
.itab.on{color:#F23F44;}
.itab.on::after{content:'';position:absolute;left:0;right:0;bottom:-1px;height:2px;background:#F23F44;border-radius:2px;}
.ipara{font-size:16px;line-height:1.72;color:#4A3B3E;margin:0 0 18px;}
.ipara:last-child{margin-bottom:0;}
.ifeatlist{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:14px;}
.ifeatlist li{display:flex;align-items:flex-start;gap:14px;font-size:15px;line-height:1.6;color:#5A4B4E;}
.ifeatlist svg{color:#F23F44;flex:none;margin-top:2px;}
.iconfig{font-size:15px;line-height:1.7;color:#5A4B4E;}
.imore{border-top:1px solid #F0E2E3;padding-top:26px;margin-top:34px;}
.imore h3{font-size:19px;font-weight:800;letter-spacing:-.3px;margin:0 0 8px;}
.imore p{font-size:14.5px;line-height:1.6;color:#5A4B4E;margin:0 0 14px;}
.ilink{display:inline-flex;align-items:center;gap:7px;font-size:14px;font-weight:700;color:#F23F44;}
.ilink svg{transition:transform .2s;}
.ilink:hover svg{transform:translateX(3px);}
@media(max-width:860px){.ilayout{grid-template-columns:1fr;}.iside{position:static;}.imain{max-width:none;}.ih1{font-size:26px;}}
h1,h2,h3,.ih1{text-wrap:balance;}p,li,.ipara{text-wrap:pretty;}/*om-balance-rule*/
`,
        }}
      />

      <SiteHeader
        announcement="Free HR calculators & generators — see all 100+ native ATS integrations"
        announcementCta="Browse integrations"
        homeHref="/"
      />

      <div className="ibody">
        <div className="iw">
          <div className="ilayout">
            <div className="imain">
              <Link className="iback reveal in" href="/integrations">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M11 6l-6 6 6 6"></path></svg>
                Back to Integrations
              </Link>
              <div className="ihead reveal in">
                <div className="ilogo">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={DATA.logo} alt={DATA.name} loading="lazy" />
                </div>
                <h1 className="ih1">Testlify + {DATA.name} Integration</h1>
              </div>
              <div className="itabs reveal">
                <button className={`itab ${tab === 'desc' ? 'on' : ''}`} onClick={() => setTab('desc')}>Description</button>
                <button className={`itab ${tab === 'feat' ? 'on' : ''}`} onClick={() => setTab('feat')}>Features</button>
              </div>

              {tab === 'desc' && (
                <div className="reveal">
                  {DATA.description.map((p, i) => (
                    <p className="ipara" key={i}>{p}</p>
                  ))}
                </div>
              )}

              {tab === 'feat' && (
                <div className="reveal">
                  <ul className="ifeatlist">
                    {DATA.features.map((f, i) => (
                      <li key={i}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <aside className="iside" style={{ paddingTop: 140 }}>
              <button className="iaddbtn">Add to Testlify</button>
              <div className="icard">
                <div className="imeta">
                  <div className="imhead">
                    <span className="imic">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M3 12h18M12 3a15 15 0 010 18 15 15 0 010-18z"></path></svg>
                    </span>
                    <h4>Supported languages</h4>
                  </div>
                  <p>{DATA.languages}</p>
                </div>
                <div className="imeta">
                  <div className="imhead">
                    <span className="imic">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"></path></svg>
                    </span>
                    <h4>Pricing</h4>
                  </div>
                  <p>{DATA.pricing}</p>
                </div>
                <div className="imeta">
                  <div className="imhead">
                    <span className="imic">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                    </span>
                    <h4>Category</h4>
                  </div>
                  <p>{DATA.category}</p>
                </div>
              </div>
              <div className="icard">
                <h4>Learn more &amp; support</h4>
                <ul className="ilinks">
                  <li>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 015.83 1c0 2-3 2-3 4"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                    <Link href="/contact">Get app support</Link>
                  </li>
                  <li>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16v16H4z" opacity="0"></path><path d="M22 6l-10 7L2 6"></path><rect x="2" y="4" width="20" height="16" rx="2"></rect></svg>
                    <a href="mailto:support@testlify.com">support@testlify.com</a>
                  </li>
                  <li>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4.5 8-11V5l-8-3-8 3v6c0 6.5 8 11 8 11z"></path></svg>
                    <Link href="/privacy-policy">Privacy policy</Link>
                  </li>
                  <li>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>
                    <Link href="/terms">Terms</Link>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </div>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
