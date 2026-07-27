'use client';

import { useState } from 'react';
import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaBand from '@/components/CtaBand';

const css = `
*{box-sizing:border-box;}
html{scroll-behavior:smooth;}
.jdd-wrap{max-width:1200px;margin:0 auto;padding:0 28px;}
.jdd-hero{padding:44px 28px 30px;background:radial-gradient(900px 420px at 50% -18%,#FFF0EE 0%,rgba(255,240,238,0) 64%),#fff;}
.jdd-back{display:inline-flex;align-items:center;gap:8px;font-size:13.5px;font-weight:600;color:#F23F44;margin-bottom:22px;}
.jdd-back svg{transition:transform .2s;}
.jdd-back:hover svg{transform:translateX(-3px);}
.jdd-eyebrow{font-size:13px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:#8A7A7D;margin:0 0 14px;}
.jdd-eyebrow b{color:#F23F44;font-weight:700;}
.jdd-h1{font-size:44px;line-height:1.08;font-weight:800;letter-spacing:-1.4px;margin:0;}
.jdd-h1 em{font-style:normal;color:#F23F44;}
.jdd-sub{font-size:18px;line-height:1.6;color:#5A4B4E;margin:18px 0 0;max-width:720px;}
.jdd-bar{display:grid;grid-template-columns:repeat(4,minmax(0,1fr)) auto;align-items:center;gap:10px;margin:26px 0 0;background:#fff;border:1px solid #F0E2E3;border-radius:16px;padding:14px 16px;box-shadow:0 12px 30px rgba(110,11,14,.07);max-width:1060px;}
.jdd-field{display:flex;align-items:center;gap:9px;border:1.5px solid #F0E2E3;border-radius:11px;padding:10px 13px;background:#fff;transition:border-color .2s;}
.jdd-field:focus-within{border-color:#FBD0D1;}
.jdd-field svg{color:#B29A9E;flex:none;}
.jdd-field input,.jdd-field select{border:0;outline:0;background:transparent;font-family:inherit;font-size:14.5px;color:#1A1014;min-width:0;width:100%;}
.jdd-copy{display:inline-flex;white-space:nowrap;align-items:center;gap:8px;background:linear-gradient(97deg,#7B77E9 0%,#9B8CEE 52%,#C293EA 100%);color:#fff;border:0;border-radius:11px;padding:12px 20px;font-family:inherit;font-size:14.5px;font-weight:700;cursor:pointer;transition:transform .2s,box-shadow .2s,background .2s;}
.jdd-copy:hover{filter:saturate(1.06);transform:translateY(-2px);box-shadow:0 12px 26px rgba(96,88,200,.30);}
.jdd-field{padding:9px 12px;}
.jdd-field input,.jdd-field select{font-size:14px;}
.jdd-gen{display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap;background:#FBF3EE;border:1px solid #F0E2E3;border-radius:14px;padding:12px 16px;margin:0 0 18px;scroll-margin-top:110px;}
.jdd-genlbl{font-size:12.5px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#8A7A7D;}
.jdd-genacts{display:flex;align-items:center;gap:10px;}
.jdd-ghost{display:inline-flex;align-items:center;gap:7px;background:#fff;border:1.5px solid #F0E2E3;border-radius:10px;padding:8px 14px;font-family:inherit;font-size:13.5px;font-weight:600;color:#5A4B4E;cursor:pointer;transition:border-color .2s,color .2s,transform .2s;}
.jdd-ghost:hover{border-color:#FBD0D1;color:#F23F44;transform:translateY(-1px);}
.jdd-body{padding:0 28px 40px;}
.jdd-layout{display:grid;grid-template-columns:250px minmax(0,1fr);gap:48px;align-items:start;}
.jdd-side{position:sticky;top:96px;display:flex;flex-direction:column;gap:20px;}
.jdd-card{background:#FBF3EE;border:1px solid #F0E2E3;border-radius:18px;padding:24px 26px;}
.jdd-card h4{font-size:13px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#8A7A7D;margin:0 0 16px;padding-bottom:14px;border-bottom:1px solid #EADDDE;}
.jdd-toclist{margin:0;padding:0;list-style:none;counter-reset:jdd;}
.jdd-tocitem{counter-increment:jdd;position:relative;padding-left:32px;font-size:14.5px;line-height:1.45;margin-bottom:15px;}
.jdd-tocitem:last-child{margin-bottom:0;}
.jdd-tocitem::before{content:counter(jdd);position:absolute;left:0;top:-1px;width:22px;height:22px;border-radius:7px;background:#FCE0DE;color:#F23F44;font-size:11.5px;font-weight:700;display:flex;align-items:center;justify-content:center;}
.jdd-toclink{color:#5A4B4E;transition:color .2s;}
.jdd-toclink:hover{color:#F23F44;}
.jdd-hire h5{font-size:16px;font-weight:800;letter-spacing:-.3px;margin:0 0 8px;color:#1A1014;}
.jdd-hire p{font-size:14px;line-height:1.6;color:#5A4B4E;margin:0 0 16px;}
.jdd-link{display:inline-flex;align-items:center;gap:7px;font-size:14px;font-weight:700;color:#F23F44;}
.jdd-link svg{transition:transform .2s;}
.jdd-link:hover svg{transform:translateX(3px);}
.jdd-main{max-width:780px;min-width:0;}
.jdd-p{font-size:16px;line-height:1.72;color:#4A3B3E;margin:0 0 18px;}
.jdd-p a{color:#F23F44;font-weight:600;}
.jdd-shot{width:100%;aspect-ratio:1024/683;border-radius:18px;border:1px solid #F0E2E3;display:block;margin:6px 0 28px;box-shadow:0 16px 30px rgba(110,11,14,.10);background:#FBF3EE center/cover no-repeat;}
.jdd-meta{display:grid;grid-template-columns:repeat(3,1fr);gap:2px;background:#F0E2E3;border:1px solid #F0E2E3;border-radius:16px;overflow:hidden;margin:0 0 34px;}
.jdd-metacell{background:#fff;padding:16px 20px;}
.jdd-metalbl{font-size:11.5px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#A9999C;margin:0 0 5px;}
.jdd-metaval{font-size:15px;font-weight:700;color:#1A1014;margin:0;}
.jdd-sec{scroll-margin-top:110px;margin-bottom:34px;}
.jdd-h2{font-size:26px;font-weight:800;letter-spacing:-.5px;margin:0 0 16px;color:#1A1014;}
.jdd-chk{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:14px;}
.jdd-chk li{display:flex;align-items:flex-start;gap:14px;font-size:15px;line-height:1.62;color:#5A4B4E;}
.jdd-chk svg{color:#F23F44;flex:none;margin-top:2px;}
.jdd-eeo{background:#FBF3EE;border-left:3px solid #F23F44;border-radius:0 14px 14px 0;padding:22px 26px;margin:6px 0 30px;}
.jdd-eeo p{font-size:15px;line-height:1.65;color:#3C2C2F;margin:0;}
.jdd-more{border-top:1px solid #F0E2E3;padding-top:26px;}
.jdd-more h3{font-size:20px;font-weight:800;letter-spacing:-.4px;margin:0 0 8px;}
.jdd-more p{font-size:15px;line-height:1.6;color:#5A4B4E;margin:0 0 14px;}
@media(max-width:860px){.jdd-layout{grid-template-columns:1fr;}.jdd-side{position:static;}.jdd-main{max-width:none;}.jdd-h1{font-size:32px;letter-spacing:-1px;}.jdd-meta{grid-template-columns:1fr;}.jdd-bar{grid-template-columns:1fr;}}
h1,h2,h3,h4,h5,.jdd-h1,.jdd-h2,.jdd-eyebrow{text-wrap:balance;}p,li,.jdd-p,.jdd-sub{text-wrap:pretty;}/*om-balance-rule*/
`;

const DEFAULT = {
  role: 'Data Scientist',
  image:
    'https://testlify.com/wp-content/uploads/2023/01/Data-Scientist-Job-Description-Template-1024x683.jpg',
  imageAlt:
    'Explore the Data Scientist job description template and hire the right candidate for your team.',
  intro:
    'Explore Testlify’s Data scientist job description template. This comprehensive job description template outlines the key roles and responsibilities of a data scientist. It’s fully customizable and suitable for posting on various job boards. Utilize this tool to streamline your hiring process, attract top-tier talent, and build a stellar team.',
  summary: [
    'The data scientist is responsible for using data to inform business decisions and solve complex problems for [Company]. They will work closely with stakeholders to understand their data needs, and will use a variety of tools and techniques to extract, clean, and analyze data.',
    'The data scientist will also be responsible for developing and implementing machine learning models, and for presenting findings and recommendations in a clear and concise manner.',
  ],
  responsibilities: [
    'Use data to inform business decisions and solve complex problems',
    'Work closely with stakeholders to understand their data needs',
    'Use a variety of tools and techniques to extract, clean, and analyze data',
    'Develop and implement machine learning models',
    'Present findings and recommendations in a clear and concise manner',
    'Stay up-to-date on the latest data analysis tools and techniques',
    'Collaborate with other departments to develop and implement data-driven solutions',
  ],
  requirements: [
    'Bachelor’s degree in a related field, such as computer science, mathematics, or statistics',
    'Experience in data analysis or a related field',
    'Strong understanding of data analysis tools and techniques, such as SQL and Excel',
    'Experience with machine learning models and algorithms',
    'Excellent problem-solving and analytical skills',
    'Ability to work independently and as part of a team',
  ],
};

function fill(text: string, company: string) {
  const co = (company || '').trim() || '[Company]';
  return String(text).split('[Company Name]').join(co).split('[Company]').join(co);
}

export default function JobDescriptionTemplatesDetailPage() {
  const [jobTitle, setJobTitle] = useState('');
  const [company, setCompany] = useState('');
  const [industry, setIndustry] = useState('');
  const [location, setLocation] = useState('');
  const [language, setLanguage] = useState('English');
  const [copied, setCopied] = useState(false);
  const [generating, setGenerating] = useState(false);
  const [generated, setGenerated] = useState(false);

  const d = DEFAULT;
  const roleName = (jobTitle || '').trim() || d.role;
  const roleLower = roleName.charAt(0) + roleName.slice(1).toLowerCase();
  const intro = fill(d.intro, company);
  const summary = d.summary.map((p) => fill(p, company));
  const responsibilities = d.responsibilities.map((r) => fill(r, company));
  const requirements = d.requirements.map((r) => fill(r, company));
  const eeo = fill(
    '[Company Name] is an equal opportunity employer and does not discriminate on the basis of race, religion, color, national origin, gender, sexual orientation, age, marital status, veteran status, or disability status.',
    company,
  );
  const locationLabel = (location || '').trim() || '[City, State]';
  const copyLabel = copied ? 'Copied' : 'Copy';
  const genLabel = generating ? 'Generating…' : generated ? 'Regenerate' : 'Generate now';

  const toc = [
    { label: roleLower + ' job summary', anchor: '#summary' },
    { label: d.role + ' roles and responsibilities', anchor: '#responsibilities' },
    { label: roleLower + ' job requirements and qualifications', anchor: '#requirements' },
  ];

  let genTimer: ReturnType<typeof setTimeout>;
  const onGenerate = () => {
    setGenerating(true);
    clearTimeout(genTimer);
    genTimer = setTimeout(() => {
      setGenerating(false);
      setGenerated(true);
      const el = document.getElementById('generated');
      if (el) {
        window.scrollTo({
          top: el.getBoundingClientRect().top + window.pageYOffset - 110,
          behavior: 'smooth',
        });
      }
    }, 700);
  };

  let copyTimer: ReturnType<typeof setTimeout>;
  const onCopy = () => {
    const loc = (location || '').trim() || '[City, State]';
    const lines = [
      roleName,
      'Location: ' + loc,
      'Job type: [Full-time/Part-time/Contract]',
      '',
      roleName + ' job summary',
      ...summary,
      '',
      roleName + ' roles and responsibilities',
      ...responsibilities.map((r) => '• ' + r),
      '',
      roleName + ' job requirements and qualifications',
      ...requirements.map((r) => '• ' + r),
    ];
    const text = lines.join('\n');
    try {
      navigator.clipboard.writeText(text);
    } catch {
      /* noop */
    }
    setCopied(true);
    clearTimeout(copyTimer);
    copyTimer = setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <SiteHeader
        announcement="Free job description templates — copy-ready JDs for 500+ roles, then screen for the skills"
        announcementCta="Browse templates"
        homeHref="/"
      />

      <section className="jdd-hero">
        <div className="jdd-wrap">
          <Link className="jdd-back" href="/job-description-templates">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M11 6l-6 6 6 6"></path></svg>
            Back to job description templates
          </Link>

          <h1 className="jdd-h1 reveal"><em>{roleName}</em> job description template</h1>
          <p className="jdd-sub reveal">Enter details and craft the perfect job descriptions for any role with one click.</p>
          <div className="jdd-bar reveal">
            <label className="jdd-field">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="7" width="18" height="13" rx="2"></rect><path d="M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2"></path></svg>
              <input type="text" placeholder="Job title" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} />
            </label>
            <label className="jdd-field">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18M5 21V7l7-4 7 4v14"></path><path d="M10 12h4"></path></svg>
              <input type="text" placeholder="Company name" value={company} onChange={(e) => setCompany(e.target.value)} />
            </label>
            <label className="jdd-field">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21V9l6-4v16"></path><path d="M9 21V13h12v8"></path><path d="M13 17h4"></path></svg>
              <input type="text" placeholder="Industry" value={industry} onChange={(e) => setIndustry(e.target.value)} />
            </label>
            <label className="jdd-field">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M3 12h18M12 3a15 15 0 010 18 15 15 0 010-18z"></path></svg>
              <select value={language} onChange={(e) => setLanguage(e.target.value)}>
                <option>English</option><option>Spanish</option><option>French</option><option>German</option><option>Chinese</option><option>Japanese</option><option>Korean</option><option>Italian</option><option>Portuguese</option><option>Russian</option>
              </select>
            </label>
            <button className="jdd-copy" onClick={onGenerate}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z"></path></svg>
              {genLabel}
            </button>
          </div>
        </div>
      </section>

      <div className="jdd-body">
        <div className="jdd-wrap">
          <div className="jdd-layout">
            <aside className="jdd-side">
              <div className="jdd-card">
                <h4>On this page</h4>
                <ol className="jdd-toclist">
                  {toc.map((t) => (
                    <li className="jdd-tocitem" key={t.anchor}>
                      <a className="jdd-toclink" href={t.anchor}>{t.label}</a>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="jdd-card jdd-hire">
                <h5>Looking to hire a {roleName}?</h5>
                <p>Explore our validated tests to identify the best candidates for the {roleName} role.</p>
                <Link className="jdd-link" href="/test-library">
                  View all tests
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </Link>
              </div>
            </aside>

            <div className="jdd-main">
              <p className="jdd-p reveal">{intro}</p>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <div
                className="jdd-shot reveal"
                role="img"
                aria-label={d.imageAlt}
                style={{ backgroundImage: d.image ? `url("${d.image}")` : undefined }}
              ></div>

              <div className="jdd-gen reveal" id="generated">
                <span className="jdd-genlbl">Generated template</span>
                <div className="jdd-genacts">
                  <button className="jdd-ghost" onClick={onCopy}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="12" height="12" rx="2"></rect><path d="M5 15H4a1 1 0 01-1-1V4a1 1 0 011-1h10a1 1 0 011 1v1"></path></svg>
                    {copyLabel}
                  </button>
                  <Link className="jdd-ghost" href="/job-description-generator">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4z"></path></svg>
                    Edit
                  </Link>
                </div>
              </div>

              <div className="jdd-meta reveal">
                <div className="jdd-metacell"><p className="jdd-metalbl">Title</p><p className="jdd-metaval">{roleName}</p></div>
                <div className="jdd-metacell"><p className="jdd-metalbl">Location</p><p className="jdd-metaval">{locationLabel}</p></div>
                <div className="jdd-metacell"><p className="jdd-metalbl">Job type</p><p className="jdd-metaval">[Full-time/Part-time/Contract]</p></div>
              </div>

              <div className="jdd-sec reveal" id="summary">
                <h2 className="jdd-h2">{roleLower} job summary</h2>
                {summary.map((p, i) => (
                  <p className="jdd-p" key={i}>{p}</p>
                ))}
              </div>

              <div className="jdd-sec" id="responsibilities">
                <h2 className="jdd-h2 reveal">{roleName} roles and responsibilities</h2>
                <ul className="jdd-chk reveal">
                  {responsibilities.map((r, i) => (
                    <li key={i}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="jdd-sec" id="requirements">
                <h2 className="jdd-h2 reveal">{roleLower} job requirements and qualifications</h2>
                <ul className="jdd-chk reveal">
                  {requirements.map((r, i) => (
                    <li key={i}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="jdd-eeo reveal"><p>{eeo}</p></div>

              <div className="jdd-more reveal">
                <h3>Looking for more job description templates?</h3>
                <p>Browse copy-ready JDs for 500+ roles across 20 job families.</p>
                <Link className="jdd-link" href="/job-description-templates">
                  Job description template library
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
