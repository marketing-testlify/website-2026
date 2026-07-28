'use client';

import { useState } from 'react';
import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaBand from '@/components/CtaBand';
import FAQ from '@/components/FAQ';

const CSS = `
*{box-sizing:border-box;}
html{scroll-behavior:smooth;}
.aiq-wrap{max-width:1200px;margin:0 auto;padding:0 28px;}
.reveal{opacity:0;transform:translateY(20px);transition:opacity .6s cubic-bezier(.2,.7,.2,1),transform .6s cubic-bezier(.2,.7,.2,1);}
.reveal.in{opacity:1;transform:none;}
.aiq-hero{padding:44px 28px 30px;background:radial-gradient(900px 420px at 50% -18%,#FFF0EE 0%,rgba(255,240,238,0) 64%),#fff;}
.aiq-back{display:inline-flex;align-items:center;gap:8px;font-size:13.5px;font-weight:600;color:#F23F44;margin-bottom:22px;}
.aiq-back svg{transition:transform .2s;}
.aiq-back:hover svg{transform:translateX(-3px);}
.aiq-eyebrow{font-size:13px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:#8A7A7D;margin:0 0 14px;}
.aiq-eyebrow b{color:#F23F44;font-weight:700;}
.aiq-h1{font-size:44px;line-height:1.08;font-weight:800;letter-spacing:-1.4px;margin:0;}
.aiq-h1 em{font-style:normal;color:#F23F44;}
.aiq-sub{font-size:18px;line-height:1.6;color:#5A4B4E;margin:18px 0 0;max-width:720px;}
.aiq-bar{display:grid;grid-template-columns:1.5fr 1.1fr 1.3fr 1.1fr auto;align-items:center;gap:10px;margin:26px 0 0;background:#fff;border:1px solid #F0E2E3;border-radius:16px;padding:14px 16px;box-shadow:0 12px 30px rgba(110,11,14,.07);max-width:1060px;}
.aiq-field{display:flex;align-items:center;gap:9px;border:1.5px solid #F0E2E3;border-radius:11px;padding:9px 12px;background:#fff;transition:border-color .2s;}
.aiq-field:focus-within{border-color:#FBD0D1;}
.aiq-field svg{color:#B29A9E;flex:none;}
.aiq-field input,.aiq-field select{border:0;outline:0;background:transparent;font-family:inherit;font-size:13.5px;color:#1A1014;min-width:0;width:100%;text-overflow:ellipsis;}
.aiq-gobtn{display:inline-flex;white-space:nowrap;align-items:center;gap:8px;background:linear-gradient(97deg,#7B77E9 0%,#9B8CEE 52%,#C293EA 100%);color:#fff;border:0;border-radius:11px;padding:12px 20px;font-family:inherit;font-size:14.5px;font-weight:700;cursor:pointer;transition:transform .2s,box-shadow .2s;}
.aiq-gobtn:hover{filter:saturate(1.06);transform:translateY(-2px);box-shadow:0 12px 26px rgba(96,88,200,.30);}
.aiq-pills{display:flex;gap:26px;flex-wrap:wrap;margin:22px 0 0;}
.aiq-pill{display:inline-flex;align-items:center;gap:8px;font-size:13.5px;font-weight:600;color:#6C5A5D;}
.aiq-body{padding:36px 28px 40px;}
.aiq-main{max-width:none;margin:0;min-width:0;}
.aiq-link{display:inline-flex;align-items:center;gap:7px;font-size:14px;font-weight:700;color:#F23F44;}
.aiq-link svg{transition:transform .2s;}
.aiq-link:hover svg{transform:translateX(3px);}
.aiq-langshot{width:100%;aspect-ratio:1916/1746;border-radius:18px;border:1px solid #F0E2E3;background:#FBF3EE center/cover no-repeat;box-shadow:0 16px 30px rgba(110,11,14,.10);}
@media(max-width:700px){#languages{grid-template-columns:1fr!important;}}
.aiq-p{font-size:16px;line-height:1.72;color:#4A3B3E;margin:0 0 18px;}
.aiq-gen{display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap;background:#FBF3EE;border:1px solid #F0E2E3;border-radius:14px;padding:12px 16px;margin:0 0 6px;scroll-margin-top:110px;}
.aiq-genlbl{font-size:12.5px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#8A7A7D;}
.aiq-genacts{display:flex;align-items:center;gap:10px;}
.aiq-ghost{display:inline-flex;align-items:center;gap:7px;background:#fff;border:1.5px solid #F0E2E3;border-radius:10px;padding:8px 14px;font-family:inherit;font-size:13.5px;font-weight:600;color:#5A4B4E;cursor:pointer;transition:border-color .2s,color .2s,transform .2s;}
.aiq-ghost:hover{border-color:#FBD0D1;color:#F23F44;transform:translateY(-1px);}
.aiq-ghost.on{background:#FFF0EF;border-color:#FBD0D1;color:#F23F44;}
.aiq-out{background:#fff;border:1px solid #F0E2E3;border-radius:18px;padding:8px 22px 6px;margin:0 0 34px;}
.qitem{display:grid;grid-template-columns:30px 1fr;gap:14px;padding:16px 0;border-top:1px solid #F4EAEA;}
.qitem:first-of-type{border-top:none;}
.qn{width:28px;height:28px;border-radius:8px;background:#FFF0F0;color:#F23F44;font-weight:800;font-size:13px;display:flex;align-items:center;justify-content:center;}
.qtag{display:inline-block;font-size:11px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;color:#8A7A7D;margin-bottom:4px;}
.qtext{font-size:15.5px;line-height:1.55;color:#1A1014;font-weight:500;margin:0 0 6px;}
.qans{font-size:13.5px;line-height:1.55;color:#6C5A5D;background:#FBF3EE;border-radius:10px;padding:10px 12px;margin:0;}
.aiq-sec{scroll-margin-top:110px;margin-bottom:34px;}
.aiq-h2{font-size:26px;font-weight:800;letter-spacing:-.5px;margin:0 0 16px;color:#1A1014;}
.aiq-chk{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:14px;}
.aiq-chk li{display:flex;align-items:flex-start;gap:14px;font-size:15px;line-height:1.62;color:#5A4B4E;}
.aiq-chk svg{color:#F23F44;flex:none;margin-top:2px;}
.aiq-steps{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;}
.aiq-step{background:#fff;border:1px solid #F2E6E7;border-radius:18px;padding:26px;transition:transform .3s cubic-bezier(.2,.7,.3,1),border-color .3s,box-shadow .3s;}
.aiq-step:hover{transform:translateY(-4px);border-color:#FBD0D1;box-shadow:0 16px 34px rgba(110,11,14,.10);}
.aiq-stepno{flex:none;width:34px;height:34px;border-radius:10px;background:#FFF0F0;color:#F23F44;font-weight:800;font-size:15px;display:flex;align-items:center;justify-content:center;}
.aiq-stephead{display:flex;align-items:center;gap:12px;margin-bottom:14px;}
.aiq-step h3{font-size:17px;font-weight:700;letter-spacing:-.2px;margin:0;}
.aiq-step p{font-size:15px;line-height:1.62;color:#5A4B4E;margin:0;}
@media(max-width:900px){.aiq-steps{grid-template-columns:1fr;}}
.aiq-more{border-top:1px solid #F0E2E3;padding-top:26px;}
.aiq-more h3{font-size:20px;font-weight:800;letter-spacing:-.4px;margin:0 0 8px;}
.aiq-more p{font-size:15px;line-height:1.6;color:#5A4B4E;margin:0 0 14px;}
@media(max-width:860px){.aiq-layout{grid-template-columns:1fr;}.aiq-side{position:static;}.aiq-main{max-width:none;}.aiq-h1{font-size:32px;letter-spacing:-1px;}.aiq-bar{grid-template-columns:1fr;}}
h1,h2,h3,h4,h5,.aiq-h1,.aiq-h2,.aiq-eyebrow{text-wrap:balance;}p,li,.aiq-p,.aiq-sub{text-wrap:pretty;}/*om-balance-rule*/
`;

const LEVELS = ['Intern', 'Junior', 'Mid-Level', 'Senior', 'Lead', 'Manager', 'C-Level'];
const TYPES = ['All question types', 'Technical', 'Behavioral', 'Competency-based', 'Fact-based', 'Situational', 'Skill-based'];
const LANGUAGES = ['English', 'Spanish', 'French', 'German', 'Chinese', 'Japanese', 'Korean', 'Italian', 'Portuguese', 'Russian', 'Arabic'];

const FAQS = [
  { q: 'What is an interview question generator?', a: 'An interview question generator is an AI-powered tool that creates role-specific interview questions based on inputs such as job title, seniority level, and required skills. It helps recruiters and hiring managers quickly prepare structured, relevant interview questions without starting from scratch.' },
  { q: 'How does the interview question generator work?', a: 'The interview question generator analyzes the job title and related role requirements to identify key skills, competencies, and experience levels. Using AI, it then generates interview questions aligned with those criteria, ensuring relevance and consistency across interviews.' },
  { q: 'Why should I use an interview questions generator?', a: 'Using an interview questions generator saves time, improves interview quality, and promotes consistency. It helps reduce subjective or ad-hoc questioning by providing structured, role-relevant questions that support fair and objective candidate evaluation.' },
  { q: 'How accurate are the generated questions?', a: 'The generated questions are designed to be highly relevant to the role and seniority level provided. Accuracy depends on the quality of inputs, such as a clear job title or description. For best results, questions should be reviewed and aligned with your internal hiring criteria.' },
  { q: 'Can I use this tool for any type of job or industry?', a: 'Yes. The interview question generator can be used across a wide range of roles and industries, including technology, sales, marketing, operations, finance, and more. It adapts questions based on role requirements rather than a single industry template.' },
  { q: 'How many questions does the generator typically produce?', a: 'The number of questions generated depends on the selected role, seniority level, and question type. Typically, the tool produces a set of multiple role-specific questions suitable for technical, behavioral, or HR interview rounds.' },
  { q: 'Does an AI interview question generator free provide answers to the generated questions?', a: "Yes. Testlify's free AI interview question generator focuses on creating interview questions and apt answers. This allows interviewers to evaluate candidates based on their own responses using structured criteria or scorecards." },
  { q: 'Do I have to sign up to use this tool?', a: 'No. The free AI interview question generator can be used without signing up, allowing you to generate interview questions instantly and explore the tool before committing to an account.' },
  { q: 'What type of questions does this tool generate?', a: 'The tool generates multiple types of interview questions, including technical, situational, and behavioral interview questions.' },
  { q: "Are AI-generated interview questions enough to make better hiring decisions?", a: "AI-generated interview questions are a strong starting point, but questions alone don't guarantee better hiring outcomes. To make interviews truly effective, questions must be paired with structured evaluation methods such as scorecards, clear success criteria, and consistent benchmarking." },
];

export default function AiInterviewQuestionGeneratorPage() {
  const [role, setRole] = useState('Product Manager');
  const [level, setLevel] = useState('Mid-Level');
  const [type, setType] = useState('All question types');
  const [language, setLanguage] = useState('English');
  const [generating, setGenerating] = useState(false);

  const onGenerate = () => {
    setGenerating(true);
    setTimeout(() => {
      setGenerating(false);
      const el = document.getElementById('generated');
      if (el) {
        window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 110, behavior: 'smooth' });
      }
    }, 650);
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <SiteHeader
        announcement="Free HR tools — calculators, templates and interview kits."
        announcementCta="Browse tools"
        homeHref="/"
      />

      <section className="aiq-hero">
        <div className="aiq-wrap">
          <Link className="aiq-back" href="/hr-tools">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M11 6l-6 6 6 6"></path></svg>
            Back to HR tools
          </Link>
          <p className="aiq-eyebrow reveal">AI interview question generator<b>.</b></p>
          <h1 className="aiq-h1 reveal"><em>Free AI interview question</em> generator</h1>
          <p className="aiq-sub reveal">Create role-specific interview questions for free — tailored to any role, skill, seniority or industry.</p>
          <div className="aiq-pills reveal">
            <span className="aiq-pill"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#F23F44" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>Save time</span>
            <span className="aiq-pill"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#F23F44" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>Customized questions</span>
            <span className="aiq-pill"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#F23F44" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>Built-in answers</span>
          </div>
        </div>
      </section>

      <section style={{ background: '#FBF3EE', padding: '36px 28px' }}>
        <div className="aiq-wrap">
          <div className="aiq-bar reveal">
            <label className="aiq-field">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="7" width="18" height="13" rx="2"></rect><path d="M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2"></path></svg>
              <input type="text" placeholder="Job title" value={role} onChange={(e) => setRole(e.target.value)} />
            </label>
            <label className="aiq-field">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line></svg>
              <select value={level} onChange={(e) => setLevel(e.target.value)}>
                {LEVELS.map((l) => <option key={l}>{l}</option>)}
              </select>
            </label>
            <label className="aiq-field">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3L22 4"></path><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"></path></svg>
              <select value={type} onChange={(e) => setType(e.target.value)}>
                {TYPES.map((t) => <option key={t}>{t}</option>)}
              </select>
            </label>
            <label className="aiq-field">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M3 12h18M12 3a15 15 0 010 18 15 15 0 010-18z"></path></svg>
              <select value={language} onChange={(e) => setLanguage(e.target.value)}>
                {LANGUAGES.map((l) => <option key={l}>{l}</option>)}
              </select>
            </label>
            <button className="aiq-gobtn" onClick={onGenerate}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z"></path></svg>
              {generating ? 'Generating…' : 'Generate now'}
            </button>
          </div>
        </div>
      </section>

      <div className="aiq-body">
        <div className="aiq-wrap">
          <div className="aiq-main">
            <div className="aiq-sec" id="how-it-works">
              <h2 className="aiq-h2 reveal">How to use an AI interview question generator</h2>
              <div className="aiq-steps reveal">
                <div className="aiq-step">
                  <div className="aiq-stephead"><div className="aiq-stepno">1</div><h3>Enter the job title</h3></div>
                  <p>Start by typing the role you&apos;re hiring for. Our generator analyzes the job and its key skills to create questions tailored specifically to that position.</p>
                </div>
                <div className="aiq-step">
                  <div className="aiq-stephead"><div className="aiq-stepno">2</div><h3>Customize the interview</h3></div>
                  <p>Optionally, select the seniority level and the type of questions you want — technical, behavioral, situational or skill-based — to match the candidate&apos;s experience and the role.</p>
                </div>
                <div className="aiq-step">
                  <div className="aiq-stephead"><div className="aiq-stepno">3</div><h3>Generate &amp; use questions</h3></div>
                  <p>Click Generate and get ready-to-use interview questions with sample answers. Review, tweak if needed, and conduct faster, smarter interviews.</p>
                </div>
              </div>
            </div>

            <div className="aiq-sec" id="languages">
              <h2 className="aiq-h2 reveal">Generate questions in multiple languages</h2>
              <p className="aiq-p reveal">Our free AI interview question generator works in English, German, French, Spanish, Arabic, Portuguese, Italian and more. Break language barriers and easily interview candidates from anywhere in the world.</p>
            </div>

            <div className="aiq-sec">
              <h2 className="aiq-h2 reveal">How does it work?</h2>
              <p className="aiq-p reveal">Our free AI-powered interview question generator uses GPT to create role-specific, high-quality questions in seconds. Simply enter the job title, select the seniority level, choose your preferred question type, and pick from 7+ supported languages.</p>
              <p className="aiq-p reveal">Instantly generate in-depth, challenging interview questions and answers tailored precisely to the role you&apos;re hiring for, ensuring recruiters can assess key technical skills, non-technical skills, and cultural fit better.</p>
            </div>

            <div className="aiq-sec" id="why-use">
              <h2 className="aiq-h2 reveal">Why use an interview question generator?</h2>
              <p className="aiq-p reveal">AI interview question generators save time, reduce bias, improve the quality of interviews, and ensure structured sessions by automating the creation of role-specific questions. Key benefits include:</p>
              <ul className="aiq-chk reveal">
                <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg><span><b>Efficiency:</b> Accelerates question creation, enabling recruiters to prepare for interviews faster.</span></li>
                <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg><span><b>Customization:</b> Generates role- and candidate-specific questions for deeper evaluation of relevant skills and experience.</span></li>
                <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg><span><b>Consistency:</b> Uses standardized frameworks for technical and HR rounds, minimizing bias and ensuring comprehensive coverage.</span></li>
                <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg><span><b>Improved candidate experience:</b> Delivers highly relevant questions that acknowledge a candidate&apos;s background, for more engaging, meaningful interviews.</span></li>
                <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg><span><b>Role alignment:</b> Keeps interview questions tightly aligned with the job description and success criteria.</span></li>
                <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg><span><b>Scalability:</b> Enables teams to generate consistent, high-quality questions across roles, departments and geographies.</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <section style={{ background: '#FBF3EE', padding: '96px 28px' }}>
        <div style={{ maxWidth: 640, margin: '0 auto', textAlign: 'center' }}>
          <p className="aiq-eyebrow reveal">FAQ<b>.</b></p>
          <h2 className="aiq-h2 reveal">Frequently asked questions</h2>
        </div>
        <div className="reveal" style={{ maxWidth: 820, margin: '34px auto 0' }}>
          <FAQ items={FAQS} />
        </div>
      </section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
