'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaBand from '@/components/CtaBand';
import FAQ from '@/components/FAQ';

const css = `
*{box-sizing:border-box;}
.art-wrap{max-width:1200px;margin:0 auto;padding:0 28px;}
.art-hero{padding:44px 28px 30px;background:radial-gradient(900px 420px at 50% -18%,#FFF0EE 0%,rgba(255,240,238,0) 64%),#fff;}
.art-back{display:inline-flex;align-items:center;gap:8px;font-size:13.5px;font-weight:600;color:#F23F44;margin-bottom:22px;}
.art-back svg{transition:transform .2s;}
.art-back:hover svg{transform:translateX(-3px);}
.art-eyebrow{font-size:13px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:#8A7A7D;margin:0 0 14px;}
.art-eyebrow b{color:#F23F44;font-weight:700;}
.art-h1{font-size:44px;line-height:1.08;font-weight:800;letter-spacing:-1.4px;margin:0;max-width:820px;}
.art-sub{font-size:18px;line-height:1.6;color:#5A4B4E;margin:18px 0 0;max-width:720px;}
.art-ticks{display:flex;gap:26px;flex-wrap:wrap;margin:22px 0 0;}
.art-tick{display:inline-flex;align-items:center;gap:8px;font-size:13.5px;font-weight:600;color:#6C5A5D;}
.art-body{padding:36px 28px 40px;}
.art-p{font-size:16px;line-height:1.72;color:#4A3B3E;margin:0 0 18px;}
.art-sec{scroll-margin-top:110px;margin-bottom:34px;}
.art-h2{font-size:26px;font-weight:800;letter-spacing:-.5px;margin:0 0 16px;color:#1A1014;}
.art-calc{display:grid;grid-template-columns:1fr 1fr;gap:30px;background:#fff;border:1px solid #F0E2E3;border-radius:22px;padding:34px;box-shadow:0 20px 44px rgba(110,11,14,.08);}
.art-field{margin-bottom:16px;}
.art-field:last-child{margin-bottom:0;}
.art-field label{display:block;font-size:13.5px;font-weight:700;color:#1A1014;margin-bottom:8px;}
.art-field label span{font-weight:500;color:#8A7A7D;}
.art-field input{width:100%;border:1.5px solid #EADDDE;border-radius:10px;padding:11px 14px;font-family:inherit;font-size:14.5px;font-weight:600;color:#1A1014;background:#FCFAFA;}
.art-field input:focus{outline:none;border-color:#F23F44;background:#fff;}
.art-calcbtn{margin-top:6px;background:#F23F44;color:#fff;border:0;border-radius:11px;padding:13px 22px;font-family:inherit;font-size:14.5px;font-weight:700;cursor:pointer;transition:transform .2s,box-shadow .2s;}
.art-calcbtn:hover{transform:translateY(-2px);box-shadow:0 12px 26px rgba(242,63,68,.28);}
.art-result{background:#FBF3EE;border:1px solid #F0E2E3;border-radius:16px;padding:26px;text-align:center;display:flex;flex-direction:column;justify-content:center;}
.art-result p{margin:0 0 6px;font-size:13px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:#8A7A7D;}
.art-result .n{font-size:44px;font-weight:800;letter-spacing:-1.4px;color:#F23F44;}
.art-result .note{margin-top:8px;font-size:13.5px;font-weight:500;color:#5A4B4E;text-transform:none;letter-spacing:0;}
.art-breakdown{margin-top:16px;border-top:1px solid #F0E2E3;padding-top:14px;display:flex;flex-direction:column;gap:8px;}
.art-brow{display:flex;justify-content:space-between;font-size:13px;color:#5A4B4E;}
.art-brow b{color:#1A1014;font-weight:700;}
.art-steps{display:grid;grid-template-columns:repeat(2,1fr);gap:20px;}
.art-step{background:#fff;border:1px solid #F2E6E7;border-radius:18px;padding:26px;transition:transform .3s cubic-bezier(.2,.7,.3,1),border-color .3s,box-shadow .3s;}
.art-step:hover{transform:translateY(-4px);border-color:#FBD0D1;box-shadow:0 16px 34px rgba(110,11,14,.10);}
.art-stephead{display:flex;align-items:center;gap:12px;margin-bottom:14px;}
.art-stepno{flex:none;width:34px;height:34px;border-radius:10px;background:#FFF0F0;color:#F23F44;font-weight:800;font-size:15px;display:flex;align-items:center;justify-content:center;}
.art-step h3{font-size:17px;font-weight:700;letter-spacing:-.2px;margin:0;}
.art-step p{font-size:15px;line-height:1.62;color:#5A4B4E;margin:0;}
.art-formula{background:#FBF3EE;border:1px solid #F0E2E3;border-radius:14px;padding:20px 24px;font-size:17px;font-weight:700;color:#1A1014;margin:0 0 20px;text-align:center;}
.art-chk{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:14px;}
.art-chk li{display:flex;align-items:flex-start;gap:14px;font-size:15px;line-height:1.62;color:#5A4B4E;}
.art-chk svg{color:#F23F44;flex:none;margin-top:2px;}
@media(max-width:900px){.art-steps{grid-template-columns:1fr;}}
@media(max-width:860px){.art-h1{font-size:32px;letter-spacing:-1px;}.art-calc{grid-template-columns:1fr;}}
h1,h2,h3,h4,h5,.art-h1,.art-h2,.art-eyebrow{text-wrap:balance;}p,li,.art-p,.art-sub{text-wrap:pretty;}/*om-balance-rule*/
`;

const FAQ_ITEMS = [
  { q: 'How do you calculate the attrition rate?', a: 'Attrition rate = (Number of separations ÷ Average number of employees) × 100.' },
  { q: 'What is 10% of attrition?', a: 'A 10% attrition rate means that for every 100 employees, 10 staff members leave the company over a year.' },
  { q: 'Is 20% attrition high?', a: 'A 20% attrition rate is generally considered high, depending on your industry and company size. You must check the onboarding process if your new hire’s attrition rate is above 15% in the first 6 months of employment.' },
  { q: 'How do you prevent employee attrition?', a: 'Employee attrition is the reduction of the workforce through any form of separation, resignation, or retirement. To prevent a high attrition rate, a clear job description, a positive workplace culture, an effective recruitment process focusing on skills, and exceptional employee engagement are ways to ensure a low attrition rate.' },
];

function num(v: string): number {
  const n = parseFloat(v);
  return isNaN(n) || n < 0 ? 0 : n;
}

export default function AttritionRateCalculatorPage() {
  const [start, setStart] = useState('150');
  const [end, setEnd] = useState('140');
  const [left, setLeft] = useState('18');
  const [calculated, setCalculated] = useState(false);

  const { avgLabel, result, note } = useMemo(() => {
    const startNum = num(start);
    const endNum = num(end);
    const leftNum = num(left);
    const avg = Math.max(1, (startNum + endNum) / 2);
    const rate = (leftNum / avg) * 100;
    return {
      avgLabel: avg.toFixed(1),
      result: calculated ? rate.toFixed(2) + '%' : '0%',
      note: !calculated
        ? 'Enter your numbers and calculate.'
        : rate <= 10
        ? 'At or below the 10% healthy benchmark — a stable team.'
        : 'Above the 10% benchmark — worth investigating why people leave.',
    };
  }, [start, end, left, calculated]);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <SiteHeader
        announcement="Free HR tools — calculators, templates and interview kits."
        announcementCta="Browse tools"
        homeHref="/"
      />

      <section className="art-hero">
        <div className="art-wrap">
          <Link className="art-back" href="/hr-tools">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M11 6l-6 6 6 6"></path>
            </svg>
            Back to HR tools
          </Link>
          <p className="art-eyebrow reveal">
            Attrition rate calculator<b>.</b>
          </p>
          <h1 className="art-h1 reveal">Attrition rate calculator</h1>
          <p className="art-sub reveal">
            Use this attrition rate calculator to calculate the quarterly, half-yearly, and
            annual attrition rates in your company.
          </p>
          <div className="art-ticks reveal">
            <span className="art-tick">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#F23F44" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
              No hassle, no sign-ups
            </span>
            <span className="art-tick">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#F23F44" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
              Easy to use
            </span>
            <span className="art-tick">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#F23F44" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
              Understand your turnover instantly
            </span>
          </div>
        </div>
      </section>

      <div className="art-body">
        <div className="art-wrap">
          <div>
            <div className="art-sec">
              <div className="art-calc reveal">
                <div>
                  <div className="art-field">
                    <label>
                      Employees at start <span>of the period</span>
                    </label>
                    <input
                      type="number"
                      min="0"
                      value={start}
                      onChange={(e) => setStart(e.target.value)}
                    />
                  </div>
                  <div className="art-field">
                    <label>
                      Employees at end <span>of the period</span>
                    </label>
                    <input
                      type="number"
                      min="0"
                      value={end}
                      onChange={(e) => setEnd(e.target.value)}
                    />
                  </div>
                  <div className="art-field">
                    <label>
                      Employees who left <span>during the period</span>
                    </label>
                    <input
                      type="number"
                      min="0"
                      value={left}
                      onChange={(e) => setLeft(e.target.value)}
                    />
                  </div>
                  <button className="art-calcbtn" onClick={() => setCalculated(true)}>
                    Calculate now
                  </button>
                </div>
                <div className="art-result">
                  <p>Attrition rate</p>
                  <span className="n">{result}</span>
                  <p className="note">{note}</p>
                  <div className="art-breakdown">
                    <div className="art-brow">
                      <span>Average headcount</span>
                      <b>{avgLabel}</b>
                    </div>
                    <div className="art-brow">
                      <span>Employees who left</span>
                      <b>{left}</b>
                    </div>
                    <div className="art-brow">
                      <span>Healthy benchmark</span>
                      <b>&lt; 10%</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="art-sec" id="how-it-works">
              <h2 className="art-h2 reveal">How to use the attrition rate calculator</h2>
              <div className="art-steps reveal">
                <div className="art-step">
                  <div className="art-stephead">
                    <div className="art-stepno">1</div>
                    <h3>Enter employee data</h3>
                  </div>
                  <p>
                    Input the total employees at the start and end of the period, along with
                    the number of employees who left. These details are essential for an
                    accurate attrition rate calculation.
                  </p>
                </div>
                <div className="art-step">
                  <div className="art-stephead">
                    <div className="art-stepno">2</div>
                    <h3>Click &apos;calculate&apos; and get results</h3>
                  </div>
                  <p>Click the &apos;Calculate&apos; button to instantly see the attrition rate.</p>
                </div>
              </div>
            </div>

            <div className="art-sec">
              <h2 className="art-h2 reveal">What is attrition rate?</h2>
              <p className="art-p reveal">
                The attrition rate is the percentage of employees who leave your organization
                compared to the total number of employees during a specific period. This
                metric helps you understand the workplace culture, employee job satisfaction,
                and whether your compensation is fair.
              </p>
            </div>

            <div className="art-sec">
              <h2 className="art-h2 reveal">Attrition rate calculator formula</h2>
              <p className="art-formula reveal">
                Attrition rate = (Number of employees who left ÷ Average number of employees)
                × 100
              </p>
              <p className="art-p reveal">
                <b>Number of employees who left:</b> the total number of employees who left
                during the period.
              </p>
              <p className="art-p reveal">
                <b>Average number of employees:</b> the average headcount during the period,
                calculated as:
              </p>
              <p className="art-formula reveal" style={{ fontSize: 15 }}>
                Average number of employees = (Employees at start + Employees at end) ÷ 2
              </p>
            </div>

            <div className="art-sec">
              <h2 className="art-h2 reveal">How to calculate the attrition rate</h2>
              <p className="art-p reveal">
                Imagine your company had 150 employees at the start, 140 employees at the end,
                and 18 employees left during the quarter.
              </p>
              <p className="art-p reveal">
                <b>Step 1 — average number of employees:</b>
                <br />
                (150 + 140) ÷ 2 = 290 ÷ 2 = 145.
              </p>
              <p className="art-p reveal">
                <b>Step 2 — attrition rate:</b>
                <br />
                (18 ÷ 145) × 100 ≈ 12.41%.
              </p>
              <p className="art-p reveal">
                18 employees left during the quarter, out of an average headcount of 145 — an
                attrition rate of 12.41%, meaning about 12.4% of employees left during the
                quarter.
              </p>
            </div>

            <div className="art-sec">
              <h2 className="art-h2 reveal">
                How does the attrition rate calculator help your business?
              </h2>
              <p className="art-p reveal">
                Tracking your company&apos;s attrition rate provides valuable insights into
                various aspects of your business, helping you make informed decisions and
                improve your organization.
              </p>
              <ul className="art-chk reveal">
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                  <span>
                    <b>Understand employee retention:</b> a high attrition rate — usually over
                    20% — could indicate job satisfaction, work culture, or compensation
                    issues that must be addressed to retain talent.
                  </span>
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                  <span>
                    <b>Identify problems early:</b> regularly calculating your attrition rate
                    helps you spot trends early — a spike may signal poor management, lack of
                    growth opportunities, or low morale.
                  </span>
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                  <span>
                    <b>Assess workplace culture:</b> employee turnover often directly reflects
                    workplace culture, prompting you to evaluate leadership and engagement
                    efforts.
                  </span>
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                  <span>
                    <b>Measure HR strategy effectiveness:</b> if recruitment, development and
                    retention programs are working well, attrition should be lower — if not,
                    it&apos;s time to adjust your approach.
                  </span>
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                  <span>
                    <b>Improving hiring practices:</b> high turnover may mean employees
                    aren&apos;t a good fit — analyzing attrition helps refine recruitment and
                    onboarding.
                  </span>
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                  <span>
                    <b>Cost management:</b> high attrition is costly due to hiring, training
                    and onboarding expenses — tracking it helps you take proactive steps to
                    reduce turnover.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <section style={{ background: '#FBF3EE', padding: '96px 28px' }}>
        <div style={{ maxWidth: 640, margin: '0 auto', textAlign: 'center' }}>
          <p className="art-eyebrow reveal">
            FAQ<b>.</b>
          </p>
          <h2 className="art-h2 reveal">Frequently asked questions</h2>
        </div>
        <div className="reveal" style={{ maxWidth: 820, margin: '34px auto 0' }}>
          <FAQ items={FAQ_ITEMS} />
        </div>
      </section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
