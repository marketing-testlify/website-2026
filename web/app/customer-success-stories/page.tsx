'use client';

import { useMemo, useState } from 'react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaBand from '@/components/CtaBand';
import CtaButton from '@/components/CtaButton';

type Story = {
  company: string;
  industry: string;
  size: string;
  useCase: string;
  title: string;
  img: string;
};

const STORIES: Story[] = [
  { company: 'Eleserv', industry: 'Business Consulting and Services', size: '11-50', useCase: 'Technical screening', title: 'How Eleserv delivered 1,000+ candidate assessments with near-zero technical errors', img: 'https://testlify.com/wp-content/uploads/2026/06/Eleserv-Talent-Solutions.png' },
  { company: 'inDrive', industry: 'IT Services and IT Consulting', size: '1,001-5,000', useCase: 'Global hiring', title: 'How inDrive cut time-to-hire from 3 weeks to 1 week and increased L&D participation by 82% with Testlify', img: 'https://testlify.com/wp-content/uploads/2025/11/inDrive-1024x683.png' },
  { company: 'Procurement Garage', industry: 'Business Consulting and Services', size: '11-50', useCase: 'Client skill evaluation', title: 'How Procurement Garage transformed client skill evaluation with Testlify', img: 'https://testlify.com/wp-content/uploads/2025/11/Procurement-Garage-1024x683.png' },
  { company: 'Hamat', industry: 'Real Estate & Retail', size: '201-500', useCase: 'Enterprise hiring', title: 'How Hamat cut time-to-hire by 50% and brought hiring fully in-house with Testlify', img: 'https://testlify.com/wp-content/uploads/2025/11/Hamat-1024x683.png' },
  { company: 'Group Bayport', industry: 'Printing Services', size: '201-500', useCase: 'Technical screening', title: 'How Group Bayport cut phone interview time by 52% and improved hiring effectiveness by 86% with skills-based assessments', img: 'https://testlify.com/wp-content/uploads/2023/11/bayport-1024x683.png' },
  { company: 'Netconomy', industry: 'Software Development', size: '201-500', useCase: 'Technical screening', title: 'How Netconomy reduced phone interview time by 53% and improved hiring effectiveness by 86% for specialized tech roles', img: 'https://testlify.com/wp-content/uploads/2023/11/Netconomy-1-1024x683.png' },
  { company: 'NewJaisa', industry: 'Computers & Electronics Manufacturing', size: '51-200', useCase: 'Cultural fit assessment', title: 'How NewJaisa built a sustainability-aligned workforce and cut hiring time by 47% with Testlify', img: 'https://testlify.com/wp-content/uploads/2023/11/Newjaisa-1024x683.png' },
  { company: 'Anima Health', industry: 'Hospitals and Health Care', size: '51-200', useCase: 'Enterprise hiring', title: 'How Anima Health cut phone interview time by 53% and brought consistency to hiring across engineering, design, and sales', img: 'https://testlify.com/wp-content/uploads/2023/11/anima-1024x683.png' },
  { company: 'Northeastern University', industry: 'Higher Education', size: '5,001-10,000', useCase: 'High-volume screening', title: 'How Northeastern University achieved 86% hiring effectiveness and cut phone interview time by 53% with Testlify', img: 'https://testlify.com/wp-content/uploads/2023/11/northeastern-university-1024x683.png' },
  { company: 'Doctors Without Borders Canada', industry: 'Non-profit organization', size: '501-1,000', useCase: 'Global hiring', title: 'How Doctors Without Borders Canada achieved 86% hiring effectiveness using video interviews and skills assessments with Testlify', img: 'https://testlify.com/wp-content/uploads/2023/11/Medecins-Sans-Frontieres-1024x683.png' },
  { company: 'Agilisium', industry: 'Business Consulting and Services', size: '201-500', useCase: 'Technical screening', title: 'Agilisium’s tale of transformation through Testlify’s talent assessments', img: 'https://testlify.com/wp-content/uploads/2023/11/Agilisium-1024x683.png' },
  { company: 'Endiprev', industry: 'Services for Renewable Energy', size: '201-500', useCase: 'Blue-collar hiring', title: 'How Endiprev cut blue-collar turnover and improved hiring effectiveness by 83% with skills assessments', img: 'https://testlify.com/wp-content/uploads/2023/11/Endiprev-1024x683.png' },
  { company: 'Covalent', industry: 'IT Services and IT Consulting', size: '51-200', useCase: 'Technical screening', title: 'How Covalent Systems used video interviews and technical assessments to cut phone screening time by 77%', img: 'https://testlify.com/wp-content/uploads/2023/11/Covalent-1024x683.png' },
  { company: 'Xneelo', industry: 'Technology, Information and Internet', size: '201-500', useCase: 'Enterprise hiring', title: 'How Xneelo filled key sales and marketing roles in under a month and cut time to activation by 41% with Testlify', img: '' },
  { company: 'Unity Communications', industry: 'Outsourcing and Offshoring Consulting', size: '501-1,000', useCase: 'High-volume hiring', title: 'How Unity Communications cut candidate drop-offs by 75% and improved new hire retention by 30% with Testlify', img: '' },
  { company: 'Gorin Systems', industry: 'Software Development', size: '51-200', useCase: 'Campus hiring', title: 'How Gorin Systems hired 116 fresh graduates in 45 days using Testlify’s campus recruitment assessments', img: '' },
  { company: 'Virtual Gurus', industry: 'Staffing and Recruiting', size: '11-50', useCase: 'ATS integration', title: 'How Virtual Gurus used Testlify’s white-label assessments to cut phone interview time by 93% and improve hiring effectiveness by 96%', img: '' },
  { company: 'Growzilla', industry: 'Internet Publishing', size: '11-50', useCase: 'Technical screening', title: 'How Growzilla hired 20 technically strong engineers and cut recruitment cycle time by 86% with real-world coding assessments', img: '' },
  { company: 'Kimp', industry: 'Design services', size: '51-200', useCase: 'High-volume screening', title: 'How Kimp reduced poor hiring fits by 35% and cut turnover by 20% with skill-based assessments', img: '' },
];

function uniq(list: Story[], key: keyof Story): string[] {
  return [...new Set(list.map((x) => String(x[key])))].sort();
}

const industries = uniq(STORIES, 'industry');
const sizes = uniq(STORIES, 'size');
const useCases = uniq(STORIES, 'useCase');

const CSS = `
*{box-sizing:border-box;}
html{scroll-behavior:smooth;}
body{margin:0;font-family:'Poppins',sans-serif;-webkit-font-smoothing:antialiased;color:#1A1014;background:#fff;}
a{text-decoration:none;color:inherit;}
a:hover{color:#F23F44;}
.cp-wrap{max-width:1240px;margin:0 auto;padding:0 28px;}
.reveal{opacity:0;transform:translateY(20px);transition:opacity .6s cubic-bezier(.2,.7,.2,1),transform .6s cubic-bezier(.2,.7,.2,1);}
.reveal.in{opacity:1;transform:none;}
.cp-eyebrow{font-size:13px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:#8A7A7D;margin:0 0 16px;}
.cp-eyebrow b{color:#F23F44;font-weight:700;}
.cp-hero{position:relative;overflow:hidden;padding:62px 28px 44px;background:radial-gradient(1000px 460px at 50% -12%,#FFF0EE 0%,rgba(255,240,238,0) 62%),#fff;text-align:center;}
.cp-h1{font-size:46px;line-height:1.08;font-weight:800;letter-spacing:-1.4px;margin:0;}
.cp-h1 em{font-style:normal;color:#F23F44;}
.cp-sub{font-size:18px;line-height:1.62;color:#5A4B4E;margin:20px auto 0;max-width:660px;}
.cp-btns{display:flex;gap:12px;justify-content:center;margin-top:28px;flex-wrap:wrap;}
.cp-btns .ctabtn .cta-play{width:24px!important;height:24px!important;}
.cp-btns .ctabtn.v-primary,.cp-btns .ctabtn.v-light{border:1.5px solid transparent!important;}
.cp-sec{padding:52px 28px 90px;}
.cp-filters{display:flex;flex-wrap:wrap;gap:12px;align-items:center;justify-content:center;margin:0 auto 34px;max-width:960px;}
.cp-select-wrap{position:relative;display:flex;align-items:center;}
.cp-select-wrap select{appearance:none;-webkit-appearance:none;font-family:inherit;font-size:14.5px;font-weight:600;color:#1A1014;background:#fff;border:1px solid #EFE2E3;border-radius:12px;padding:13px 38px 13px 16px;cursor:pointer;outline:0;transition:border-color .2s,box-shadow .2s;}
.cp-select-wrap select:hover{border-color:#FBD0D1;}
.cp-select-wrap select:focus{border-color:#F23F44;box-shadow:0 0 0 3px rgba(242,63,68,.13);}
.cp-select-wrap .cp-selcar{position:absolute;right:16px;color:#8A7A7D;pointer-events:none;}
.cp-clear{font-size:13.5px;font-weight:700;color:#F23F44;background:none;border:0;cursor:pointer;padding:8px;}
.cp-clear:disabled{color:#C9B9BC;cursor:not-allowed;}
.cp-clear:hover{color:#DC3137;}
.cp-count{font-size:13.5px;color:#8A7A7D;font-weight:500;margin:0 0 30px;text-align:center;}
.cp-count b{color:#F23F44;font-weight:700;}
.cp-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;}
@property --bang{syntax:'<angle>';initial-value:0deg;inherits:false;}
@keyframes runborder{to{--bang:360deg;}}
.cp-card{position:relative;display:flex;flex-direction:column;background:#fff;border:1px solid #EFE2E3;border-radius:20px;overflow:hidden;transition:transform .3s cubic-bezier(.2,.7,.3,1),box-shadow .3s,border-color .3s;}
.cp-card::before{content:'';position:absolute;inset:0;z-index:2;border-radius:20px;padding:1.8px;background:conic-gradient(from var(--bang),transparent 0deg,#FF7A52 35deg,#F23F44 80deg,transparent 150deg,transparent 360deg);-webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask-composite:exclude;opacity:0;pointer-events:none;}
.cp-img,.cp-body{position:relative;z-index:1;}
.cp-card:hover{transform:translateY(-4px);box-shadow:0 22px 46px rgba(110,11,14,.10);}
.cp-card:hover::before{opacity:1;animation:runborder 2.4s linear infinite;}
.cp-img{position:relative;aspect-ratio:16/9;overflow:hidden;background:#FBF3EE center/cover no-repeat;transition:transform .55s cubic-bezier(.2,.7,.3,1);}
.cp-card:hover .cp-img{transform:scale(1.06);}
.cp-body{padding:22px 22px 24px;display:flex;flex-direction:column;flex:1;}
.cp-cat{font-size:11px;font-weight:700;letter-spacing:.07em;text-transform:uppercase;color:#F23F44;margin:0 0 11px;}
.cp-title{font-size:16.5px;font-weight:700;letter-spacing:-.2px;line-height:1.34;margin:0;color:#1A1014;}
.cp-empty{text-align:center;padding:60px 20px;color:#8A7A7D;font-size:16px;}
.cp-empty b{color:#1A1014;}
@media(max-width:1000px){.cp-grid{grid-template-columns:repeat(2,1fr);}}
@media(max-width:600px){.cp-grid{grid-template-columns:1fr;}}
@media(max-width:480px){.cp-h1{font-size:32px;}.cp-hero{padding:44px 22px 32px;}}
h1,h2,h3,h4,.cp-h1,.cp-eyebrow{text-wrap:balance;}p,li,.cp-sub{text-wrap:pretty;}/*om-balance-rule*/
`;

export default function CustomerSuccessStoriesPage() {
  const [industry, setIndustry] = useState('');
  const [size, setSize] = useState('');
  const [useCase, setUseCase] = useState('');

  const stories = useMemo(() => {
    return STORIES
      .filter((s) => !industry || s.industry === industry)
      .filter((s) => !size || s.size === size)
      .filter((s) => !useCase || s.useCase === useCase)
      .map((s) => ({
        ...s,
        imgStyle: s.img
          ? { backgroundImage: `url("${s.img}")` }
          : { background: 'linear-gradient(135deg,#FFF0EF,#FBE0DE)' },
      }));
  }, [industry, size, useCase]);

  const noFilter = !(industry || size || useCase);
  const isEmpty = stories.length === 0;
  const storyWord = stories.length === 1 ? 'story' : 'stories';

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      <SiteHeader
        announcement="How inDrive cut time-to-hire from 3 weeks to 1 week with Testlify"
        announcementCta="Read story"
        homeHref="/"
      />

      <section className="cp-hero">
        <div className="cp-wrap" style={{ maxWidth: 820 }}>
          <p className="cp-eyebrow reveal">
            Customers<b>.</b>
          </p>
          <h1 className="cp-h1 reveal">
            Customer <em>success stories</em>
          </h1>
          <p className="cp-sub reveal">
            Be the first to discover innovative HR and recruitment strategies. See how hiring teams use
            Testlify to hire faster, fairer and with more confidence.
          </p>
          <div className="cp-btns reveal">
            <CtaButton
              label="Try for free"
              href="https://app.testlify.com/register"
              variant="primary"
              size="lg"
              icon="arrow"
              magnetic
            />
            <CtaButton
              label="Book a demo"
              href="https://hs.testlify.com/meetings/testlify/demo"
              variant="secondary"
              size="lg"
              icon="play"
            />
          </div>
        </div>
      </section>

      <section className="cp-sec">
        <div className="cp-wrap">
          <div className="cp-filters reveal">
            <div className="cp-select-wrap">
              <select value={industry} onChange={(e) => setIndustry(e.target.value)}>
                <option value="">Industry (all)</option>
                {industries.map((i) => (
                  <option key={i} value={i}>
                    {i}
                  </option>
                ))}
              </select>
              <svg
                className="cp-selcar"
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
            <div className="cp-select-wrap">
              <select value={size} onChange={(e) => setSize(e.target.value)}>
                <option value="">Company size (all)</option>
                {sizes.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
              <svg
                className="cp-selcar"
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
            <div className="cp-select-wrap">
              <select value={useCase} onChange={(e) => setUseCase(e.target.value)}>
                <option value="">Use case (all)</option>
                {useCases.map((u) => (
                  <option key={u} value={u}>
                    {u}
                  </option>
                ))}
              </select>
              <svg
                className="cp-selcar"
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
            <button
              className="cp-clear"
              onClick={() => {
                setIndustry('');
                setSize('');
                setUseCase('');
              }}
              disabled={noFilter}
            >
              Clear filter
            </button>
          </div>

          <p className="cp-count reveal">
            <b>{stories.length}</b> success {storyWord}
          </p>
          {isEmpty && <div className="cp-empty">No stories match these filters.</div>}

          <div className="cp-grid reveal">
            {stories.map((c) => (
              <a className="cp-card" href="/customer-success-stories-detail" key={c.company}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <div className="cp-img" role="img" aria-label={c.company} style={c.imgStyle}></div>
                <div className="cp-body">
                  <p className="cp-cat">{c.industry}</p>
                  <h3 className="cp-title">{c.title}</h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
