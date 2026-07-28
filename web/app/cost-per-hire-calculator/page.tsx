'use client';

import { useState } from 'react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaBand from '@/components/CtaBand';
import FAQ from '@/components/FAQ';

const CSS = `
*{box-sizing:border-box;}
html{scroll-behavior:smooth;}
body{margin:0;font-family:'Poppins',sans-serif;-webkit-font-smoothing:antialiased;color:#1A1014;background:#fff;}
a{text-decoration:none;color:inherit;}
a:hover{color:#F23F44;}
.cph-wrap{max-width:1200px;margin:0 auto;padding:0 28px;}
.reveal{opacity:0;transform:translateY(20px);transition:opacity .6s cubic-bezier(.2,.7,.2,1),transform .6s cubic-bezier(.2,.7,.2,1);}
.reveal.in{opacity:1;transform:none;}
.cph-hero{padding:44px 28px 30px;background:radial-gradient(900px 420px at 50% -18%,#FFF0EE 0%,rgba(255,240,238,0) 64%),#fff;}
.cph-back{display:inline-flex;align-items:center;gap:8px;font-size:13.5px;font-weight:600;color:#F23F44;margin-bottom:22px;}
.cph-back svg{transition:transform .2s;}
.cph-back:hover svg{transform:translateX(-3px);}
.cph-eyebrow{font-size:13px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:#8A7A7D;margin:0 0 14px;}
.cph-eyebrow b{color:#F23F44;font-weight:700;}
.cph-h1{font-size:44px;line-height:1.08;font-weight:800;letter-spacing:-1.4px;margin:0;max-width:820px;}
.cph-sub{font-size:18px;line-height:1.6;color:#5A4B4E;margin:18px 0 0;max-width:720px;}
.cph-body{padding:36px 28px 40px;}
.cph-main{max-width:none;margin:0;min-width:0;}
.cph-p{font-size:16px;line-height:1.72;color:#4A3B3E;margin:0 0 18px;}
.cph-sec{scroll-margin-top:110px;margin-bottom:34px;}
.cph-h2{font-size:26px;font-weight:800;letter-spacing:-.5px;margin:0 0 16px;color:#1A1014;}
.cph-calc{display:flex;flex-direction:column;background:#fff;border:1px solid #F0E2E3;border-radius:22px;padding:34px;box-shadow:0 20px 44px rgba(110,11,14,.08);width:100%;}
.cph-collabel{font-size:20px;font-weight:800;letter-spacing:-.4px;color:#1A1014;margin:0 0 18px;}
.cph-grid2{display:grid;grid-template-columns:1fr 1fr;gap:0 40px;}
.cph-sep{border:none;border-top:1px solid #F0E2E3;margin:28px 0;}
.cph-item{display:flex;align-items:center;gap:14px;margin-bottom:16px;}
.cph-item label{flex:1;font-size:14.5px;color:#4A3B3E;line-height:1.4;display:flex;gap:8px;}
.cph-item label b{flex:none;color:#8A7A7D;font-weight:700;}
.cph-item input{width:110px;flex:none;border:1.5px solid #EADDDE;border-radius:9px;padding:9px 12px;font-family:inherit;font-size:14px;font-weight:600;color:#1A1014;background:#FCFAFA;text-align:right;}
.cph-item input:focus{outline:none;border-color:#F23F44;background:#fff;}
.cph-hires{display:flex;align-items:center;gap:14px;flex-wrap:wrap;}
.cph-hires label{font-size:14px;font-weight:700;color:#1A1014;flex:none;}
.cph-hires input{width:120px;flex:none;border:1.5px solid #EADDDE;border-radius:10px;padding:12px 14px;font-family:inherit;font-size:14.5px;font-weight:600;color:#1A1014;background:#FCFAFA;}
.cph-hires input:focus{outline:none;border-color:#F23F44;background:#fff;}
.cph-calcbtn{flex:none;background:#F23F44;color:#fff;border:0;border-radius:11px;padding:14px 22px;font-family:inherit;font-size:14px;font-weight:700;cursor:pointer;transition:transform .2s,box-shadow .2s;white-space:nowrap;}
.cph-calcbtn:hover{transform:translateY(-2px);box-shadow:0 12px 26px rgba(242,63,68,.28);}
.cph-result{margin-left:auto;flex:none;background:#FBF3EE;border:1px solid #F0E2E3;border-radius:16px;padding:12px 18px;text-align:center;display:flex;align-items:center;gap:10px;white-space:nowrap;}
.cph-result p{margin:0;font-size:11.5px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;color:#8A7A7D;white-space:nowrap;}
.cph-result .n{font-size:22px;font-weight:800;letter-spacing:-.8px;color:#F23F44;white-space:nowrap;}
.cph-steps{display:grid;grid-template-columns:repeat(4,1fr);gap:18px;}
.cph-step{background:#fff;border:1px solid #F2E6E7;border-radius:18px;padding:24px;transition:transform .3s cubic-bezier(.2,.7,.3,1),border-color .3s,box-shadow .3s;}
.cph-step:hover{transform:translateY(-4px);border-color:#FBD0D1;box-shadow:0 16px 34px rgba(110,11,14,.10);}
.cph-stephead{display:flex;align-items:center;gap:12px;margin-bottom:12px;}
.cph-stepno{flex:none;width:32px;height:32px;border-radius:9px;background:#FFF0F0;color:#F23F44;font-weight:800;font-size:14px;display:flex;align-items:center;justify-content:center;}
.cph-step h3{font-size:15.5px;font-weight:700;letter-spacing:-.2px;margin:0;}
.cph-step p{font-size:14px;line-height:1.58;color:#5A4B4E;margin:0;}
.cph-formula{background:#FBF3EE;border:1px solid #F0E2E3;border-radius:14px;padding:20px 24px;font-size:17px;font-weight:700;color:#1A1014;margin:0 0 20px;text-align:center;}
.cph-chk{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:14px;}
.cph-chk li{display:flex;align-items:flex-start;gap:14px;font-size:15px;line-height:1.62;color:#5A4B4E;}
.cph-chk svg{color:#F23F44;flex:none;margin-top:2px;}
.cph-faqlist{border-top:1px solid #F0E2E3;}
.cph-faqitem{border-bottom:1px solid #F0E2E3;padding:20px 0;}
.cph-faqitem h3{font-size:17px;font-weight:700;margin:0 0 10px;}
.cph-faqitem p{font-size:15px;line-height:1.65;color:#5A4B4E;margin:0 0 10px;}
.cph-faqitem p:last-child{margin-bottom:0;}
.cph-faqitem ul{margin:8px 0 0;padding-left:20px;}
.cph-faqitem li{font-size:14.5px;line-height:1.6;color:#5A4B4E;margin-bottom:5px;}
@media(max-width:900px){.cph-steps{grid-template-columns:1fr 1fr;}}
@media(max-width:640px){.cph-h1{font-size:32px;letter-spacing:-1px;}.cph-grid2{grid-template-columns:1fr;}.cph-hires{flex-direction:column;align-items:stretch;}.cph-hires input,.cph-calcbtn{width:100%;}.cph-result{margin-left:0;width:100%;justify-content:center;}}
@media(max-width:560px){.cph-steps{grid-template-columns:1fr;}}
h1,h2,h3,h4,h5,.cph-h1,.cph-h2,.cph-eyebrow{text-wrap:balance;}p,li,.cph-p,.cph-sub{text-wrap:pretty;}/*om-balance-rule*/
`;

const EXTERNAL_LABELS = [
  'Background verification and work eligibility checks', 'Job fair and recruiting event costs', 'Pre-employment health screenings',
  'Technology-related expenses', 'Drug/medical testing procedures', 'Pre-screening charges', 'Employee referral incentives/payments',
  'Recruitment outsourcing expenses', 'Consulting services', 'Relocation expenses', 'Third-party service fees',
  'Advertising and promotional costs', 'Sourcing expenses', 'Contingency-based fees', 'Sign-on incentives/bonuses',
  'Immigration-related expenses', 'Recruitment process expenses', 'Travel and miscellaneous costs',
];
const INTERNAL_LABELS = [
  'Recruiting costs', 'Recruitment Learning and Development (L&D)', 'Sourcing expenses', 'Costs associated with management time',
  'Internal compliance overhead expenses', 'Additional management time costs for recruitment', 'Non-labor office-related expenses',
];

const faqItems = [
  { q: 'What are the factors that affect cost-per-hire?', a: 'Several factors can affect the Cost-per-Hire (CPH): Position level — senior-level positions often have higher CPHs due to more complex interview processes and greater involvement of additional staff. Type of position — roles that are in high demand, such as engineers, web developers, or data scientists, may result in higher CPHs. Recruitment strategies — more intensive recruitment strategies for senior or specialized positions can increase CPH.' },
  { q: 'How does the employee turnover rate impact Cost-per-hire calculations?', a: 'Employee turnover can significantly impact Cost-per-Hire (CPH) calculations. When a company loses an employee, replacing them can cost anywhere from half to twice the employee’s salary. A high turnover rate means more frequent hiring, which directly increases CPH. Hiring new employees is more expensive than keeping existing ones — each new hire requires investment in job postings, recruitment events, training, and onboarding, leading to recurring expenses as turnover remains high.' },
  { q: 'What are the components of cost-per-hire?', a: 'The Cost Per Hire (CPH) encompasses all expenses incurred in hiring a new employee, categorized into two primary groups. External costs: recruitment events, job advertising, background screening, candidate travel and lodging, agency and search firm fees. Internal costs: interviewing time, recruitment training, internal systems, employee referral bonuses, recruiter salaries.' },
];

function num(v: string): number {
  const n = parseFloat(v);
  return isNaN(n) ? 0 : n;
}

export default function CostPerHireCalculatorPage() {
  const [ext, setExt] = useState<Record<number, string>>({});
  const [int, setInt] = useState<Record<number, string>>({});
  const [hires, setHires] = useState('');
  const [calculated, setCalculated] = useState(false);

  const extTotal = EXTERNAL_LABELS.reduce((s, _l, i) => s + num(ext[i] || ''), 0);
  const intTotal = INTERNAL_LABELS.reduce((s, _l, i) => s + num(int[i] || ''), 0);
  const hiresN = num(hires);
  const cph = hiresN > 0 ? (extTotal + intTotal) / hiresN : 0;
  const resultLabel = calculated ? '$' + cph.toLocaleString('en-US', { maximumFractionDigits: 2 }) : '$0';

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <SiteHeader
        announcement="Free HR tools — calculators, templates and interview kits."
        announcementCta="Browse tools"
        homeHref="/"
      />

      <section className="cph-hero"><div className="cph-wrap">
        <a className="cph-back" href="/hr-tools"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M11 6l-6 6 6 6"></path></svg>Back to HR tools</a>
        <p className="cph-eyebrow reveal">Cost per hire calculator<b>.</b></p>
        <h1 className="cph-h1 reveal"><em style={{ fontStyle: 'normal', color: '#F23F44' }}>Cost per hire</em> (CPH) calculator</h1>
        <p className="cph-sub reveal">Discover the true cost of recruitment with our cost-per-hire (CPH) calculator, which is aligned with the CPHC Standard. It breaks down in-house and external recruitment costs for better-informed hiring decisions.</p>
      </div></section>

      <div className="cph-body"><div className="cph-wrap"><div className="cph-main">

        <div className="cph-sec">
          <div className="cph-calc reveal">
            <p className="cph-collabel">External costs</p>
            <div className="cph-grid2">
              {EXTERNAL_LABELS.map((label, i) => (
                <div className="cph-item" key={i}>
                  <label><b>{i + 1}.</b>{label}</label>
                  <input
                    type="number"
                    min={0}
                    placeholder="0"
                    value={ext[i] || ''}
                    onChange={(e) => setExt((s) => ({ ...s, [i]: e.target.value }))}
                  />
                </div>
              ))}
            </div>
            <hr className="cph-sep" />
            <p className="cph-collabel">Internal costs</p>
            <div className="cph-grid2">
              {INTERNAL_LABELS.map((label, i) => (
                <div className="cph-item" key={i}>
                  <label><b>{i + 1}.</b>{label}</label>
                  <input
                    type="number"
                    min={0}
                    placeholder="0"
                    value={int[i] || ''}
                    onChange={(e) => setInt((s) => ({ ...s, [i]: e.target.value }))}
                  />
                </div>
              ))}
            </div>
            <hr className="cph-sep" />
            <div className="cph-hires">
              <label>Number of hires</label>
              <input type="number" min={0} placeholder="0" value={hires} onChange={(e) => setHires(e.target.value)} />
              <button className="cph-calcbtn" onClick={() => setCalculated(true)}>Calculate your CPH</button>
              <div className="cph-result"><p>Your cost per hire is</p><span className="n">{resultLabel}</span></div>
            </div>
          </div>
        </div>

        <div className="cph-sec" id="how-to-use">
          <h2 className="cph-h2 reveal">How to use the Cost per hire (CPH) calculator</h2>
          <div className="cph-steps reveal">
            <div className="cph-step"><div className="cph-stephead"><div className="cph-stepno">1</div><h3>Input internal recruitment costs</h3></div><p>Fill your internal hiring expenses, such as consulting services, sourcing expenses, operational costs, bonuses, etc.</p></div>
            <div className="cph-step"><div className="cph-stephead"><div className="cph-stepno">2</div><h3>Enter external recruitment costs</h3></div><p>Add any external expenses, like recruiting costs, agency commissions, internal compliance overhead expenses, etc.</p></div>
            <div className="cph-step"><div className="cph-stephead"><div className="cph-stepno">3</div><h3>Add the total number of hires</h3></div><p>Specify the number of employees hired during the chosen timeframe.</p></div>
            <div className="cph-step"><div className="cph-stephead"><div className="cph-stepno">4</div><h3>Hit &apos;calculate&apos; to see results</h3></div><p>Click the &apos;Calculate&apos; button to see your cost per hire within seconds.</p></div>
          </div>
        </div>

        <div className="cph-sec">
          <h2 className="cph-h2 reveal">What is cost-per-hire (CPH)?</h2>
          <p className="cph-p reveal">Cost-per-hire (CPH) is a key recruiting metric that tracks the total cost of hiring a new employee. This includes expenses such as advertising costs, recruitment agency fees, employee referrals, and the salaries of HR staff involved in the hiring process.</p>
        </div>

        <div className="cph-sec">
          <h2 className="cph-h2 reveal">How does the cost-per-hire calculator work?</h2>
          <p className="cph-p reveal">The cost-per-hire calculator uses the following formula to calculate the total hiring costs:</p>
          <p className="cph-formula reveal">CPH = (External costs + Internal costs) ÷ Total number of hires</p>
          <p className="cph-p reveal"><b>External recruitment costs:</b> These are expenses involved in hiring from outside sources (outside companies). Examples include salaries for recruitment agencies, advertising fees, recruitment technology, candidate travel costs, and pre-employment screening costs.</p>
          <p className="cph-p reveal"><b>Internal recruitment costs:</b> These are expenses involved in hiring from sources within a company. Examples include salaries for HR professionals or recruiting staff, operating internal job boards, rewards for employee referrals, interview costs, recruiter travel costs, etc.</p>
          <p className="cph-p reveal"><b>Total number of employees hired:</b> This involves the number of people recruited and onboarded, excluding whether they remained in the company afterward.</p>
          <p className="cph-p reveal">This metric is crucial for understanding the efficiency of hiring processes and helps organizations make informed budgeting decisions. For instance, if a company spends $40,000 recruiting and hiring ten employees, the cost-per-hire would be $4,000. Monitoring CPH over time can also help identify trends and areas for improvement in the recruitment strategy.</p>
        </div>

        <div className="cph-sec">
          <h2 className="cph-h2 reveal">Why use a cost-per-hire calculator?</h2>
          <p className="cph-p reveal">A cost-per-hire calculator is a strategic tool that improves hiring efficiency and supports informed decision-making in HR practices. Using a cost-per-hire calculator offers several benefits:</p>
          <ul className="cph-chk reveal">
            <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg><span><b>Better tracking:</b> It helps companies track all recruitment costs, including hidden ones, providing a clear view for better budgeting and resource planning.</span></li>
            <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg><span><b>Benchmarking:</b> Calculating CPH allows companies to compare their hiring costs with industry standards or competitors to assess the efficiency of their recruitment process.</span></li>
            <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg><span><b>Continuous improvement:</b> Regular CPH measurements help HR teams evaluate and improve their hiring strategies by testing different approaches.</span></li>
            <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg><span><b>Budget planning:</b> Knowing the average cost per hire helps predict total recruitment expenses, making financial planning easier.</span></li>
            <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg><span><b>Identifying improvement areas:</b> Analyzing CPH can highlight areas with high costs, helping companies refine their recruitment processes and reduce unnecessary spending.</span></li>
          </ul>
        </div>

      </div></div></div>
      <section style={{ background: '#FBF3EE', padding: '96px 28px' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto', textAlign: 'center' }}><p className="cph-eyebrow reveal">FAQ<b>.</b></p><h2 className="cph-h2 reveal">Frequently asked questions</h2></div>
        <div className="reveal" style={{ maxWidth: '820px', margin: '34px auto 0' }}><FAQ items={faqItems} /></div>
      </section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
