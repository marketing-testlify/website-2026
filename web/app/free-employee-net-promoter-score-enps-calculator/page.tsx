'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaBand from '@/components/CtaBand';
import FAQ from '@/components/FAQ';

const css = `
*{box-sizing:border-box;}
html{scroll-behavior:smooth;}
.enp-wrap{max-width:1200px;margin:0 auto;padding:0 28px;}
.enp-hero{padding:44px 28px 30px;background:radial-gradient(900px 420px at 50% -18%,#FFF0EE 0%,rgba(255,240,238,0) 64%),#fff;}
.enp-back{display:inline-flex;align-items:center;gap:8px;font-size:13.5px;font-weight:600;color:#F23F44;margin-bottom:22px;}
.enp-back svg{transition:transform .2s;}
.enp-back:hover svg{transform:translateX(-3px);}
.enp-eyebrow{font-size:13px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:#8A7A7D;margin:0 0 14px;}
.enp-eyebrow b{color:#F23F44;font-weight:700;}
.enp-h1{font-size:44px;line-height:1.08;font-weight:800;letter-spacing:-1.4px;margin:0;max-width:820px;}
.enp-sub{font-size:18px;line-height:1.6;color:#5A4B4E;margin:18px 0 0;max-width:720px;}
.enp-body{padding:36px 28px 40px;}
.enp-p{font-size:16px;line-height:1.72;color:#4A3B3E;margin:0 0 18px;}
.enp-sec{scroll-margin-top:110px;margin-bottom:34px;}
.enp-h2{font-size:26px;font-weight:800;letter-spacing:-.5px;margin:0 0 16px;color:#1A1014;}
.enp-calc{display:grid;grid-template-columns:1fr 1fr;gap:30px;background:#fff;border:1px solid #F0E2E3;border-radius:22px;padding:34px;box-shadow:0 20px 44px rgba(110,11,14,.08);}
.enp-field{margin-bottom:16px;}
.enp-field:last-child{margin-bottom:0;}
.enp-field label{display:block;font-size:13.5px;font-weight:700;color:#1A1014;margin-bottom:8px;}
.enp-field label span{font-weight:500;color:#8A7A7D;}
.enp-field input{width:100%;border:1.5px solid #EADDDE;border-radius:10px;padding:11px 14px;font-family:inherit;font-size:14.5px;font-weight:600;color:#1A1014;background:#FCFAFA;}
.enp-field input:focus{outline:none;border-color:#F23F44;background:#fff;}
.enp-result{background:#FBF3EE;border:1px solid #F0E2E3;border-radius:16px;padding:26px;text-align:center;display:flex;flex-direction:column;justify-content:center;}
.enp-result p{margin:0 0 6px;font-size:13px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:#8A7A7D;}
.enp-result .n{font-size:44px;font-weight:800;letter-spacing:-1.4px;color:#F23F44;}
.enp-result .note{margin-top:8px;font-size:13.5px;font-weight:500;color:#5A4B4E;text-transform:none;letter-spacing:0;}
.enp-breakdown{margin-top:16px;border-top:1px solid #F0E2E3;padding-top:14px;display:flex;flex-direction:column;gap:8px;}
.enp-brow{display:flex;justify-content:space-between;font-size:13px;color:#5A4B4E;}
.enp-brow b{color:#1A1014;font-weight:700;}
.enp-steps{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;}
.enp-step{background:#fff;border:1px solid #F2E6E7;border-radius:18px;padding:26px;transition:transform .3s cubic-bezier(.2,.7,.3,1),border-color .3s,box-shadow .3s;}
.enp-step:hover{transform:translateY(-4px);border-color:#FBD0D1;box-shadow:0 16px 34px rgba(110,11,14,.10);}
.enp-stephead{display:flex;align-items:center;gap:12px;margin-bottom:14px;}
.enp-stepno{flex:none;width:34px;height:34px;border-radius:10px;background:#FFF0F0;color:#F23F44;font-weight:800;font-size:15px;display:flex;align-items:center;justify-content:center;}
.enp-step h3{font-size:17px;font-weight:700;letter-spacing:-.2px;margin:0;}
.enp-step p{font-size:15px;line-height:1.62;color:#5A4B4E;margin:0;}
.enp-formula{background:#FBF3EE;border:1px solid #F0E2E3;border-radius:14px;padding:20px 24px;font-size:17px;font-weight:700;color:#1A1014;margin:0 0 20px;text-align:center;}
.enp-chk{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:14px;}
.enp-chk li{display:flex;align-items:flex-start;gap:14px;font-size:15px;line-height:1.62;color:#5A4B4E;}
.enp-chk svg{color:#F23F44;flex:none;margin-top:2px;}
.enp-bench{display:grid;grid-template-columns:repeat(5,1fr);gap:14px;}
.enp-benchcard{background:#fff;border:1px solid #F2E6E7;border-radius:16px;padding:18px 16px;}
.enp-benchcard .t{font-size:15px;font-weight:800;color:#F23F44;margin:0 0 8px;}
.enp-benchcard .d{font-size:13px;line-height:1.5;color:#5A4B4E;margin:0;}
@media(max-width:1000px){.enp-bench{grid-template-columns:repeat(2,1fr);}}
@media(max-width:900px){.enp-steps{grid-template-columns:1fr;}}
@media(max-width:860px){.enp-h1{font-size:32px;letter-spacing:-1px;}.enp-calc{grid-template-columns:1fr;}}
h1,h2,h3,h4,h5,.enp-h1,.enp-h2,.enp-eyebrow{text-wrap:balance;}p,li,.enp-p,.enp-sub{text-wrap:pretty;}/*om-balance-rule*/
`;

const FAQ_ITEMS = [
  {
    q: 'How is the employee NPS score calculated?',
    a: 'eNPS is calculated by subtracting the percentage of Detractors from Promoters based on employee responses to how likely they are to recommend your company.',
  },
  {
    q: 'What is the best Employee Net Promoter Score (eNPS) calculator?',
    a: 'Testlify’s eNPS calculator is the best. It provides accurate scores and compares them to industry benchmarks, offering valuable insights into employee engagement.',
  },
  {
    q: 'How do you measure employee Net Promoter Score?',
    a: 'eNPS is measured by asking employees how likely they are to recommend your company. Responses are categorized, and the score is calculated by subtracting Detractors from Promoters.',
  },
  {
    q: 'What is the formula for eNPS?',
    a: 'eNPS = % of Promoters − % of Detractors. The score ranges from -100 (all Detractors) to +100 (all Promoters).',
  },
];

function num(v: string): number {
  const n = parseFloat(v);
  return isNaN(n) || n < 0 ? 0 : n;
}

export default function FreeEmployeeNetPromoterScoreEnpsCalculatorPage() {
  const [prom, setProm] = useState('42');
  const [pass, setPass] = useState('30');
  const [detr, setDetr] = useState('12');

  const { result, note, total, promPct, detrPct } = useMemo(() => {
    const promNum = num(prom);
    const passNum = num(pass);
    const detrNum = num(detr);
    const totalNum = promNum + passNum + detrNum;
    const pp = totalNum ? (promNum / totalNum) * 100 : 0;
    const dp = totalNum ? (detrNum / totalNum) * 100 : 0;
    const enps = Math.round(pp - dp);

    let noteText = 'Neutral — a mix of promoters and detractors.';
    if (enps > 30) noteText = 'Excellent — your team would strongly recommend you.';
    else if (enps > 0) noteText = 'Good — more promoters than detractors.';
    else if (enps < 0) noteText = 'Below zero — more detractors than promoters.';

    return {
      result: (enps > 0 ? '+' : '') + enps,
      note: noteText,
      total: totalNum,
      promPct: Math.round(pp) + '%',
      detrPct: Math.round(dp) + '%',
    };
  }, [prom, pass, detr]);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <SiteHeader
        announcement="Free HR tools — calculators, templates and interview kits."
        announcementCta="Browse tools"
        homeHref="/"
      />

      <section className="enp-hero">
        <div className="enp-wrap">
          <Link className="enp-back" href="/hr-tools">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M11 6l-6 6 6 6"></path>
            </svg>
            Back to HR tools
          </Link>
          <p className="enp-eyebrow reveal">
            Employee NPS calculator<b>.</b>
          </p>
          <h1 className="enp-h1 reveal">
            Best free <span style={{ color: '#F23F44' }}>Employee Net Promoter Score (eNPS)</span> calculator
          </h1>
          <p className="enp-sub reveal">
            Measure employee loyalty and satisfaction with our simple eNPS calculator. Get quick
            insights into your workforce and improve workplace culture.
          </p>
        </div>
      </section>

      <div className="enp-body">
        <div className="enp-wrap">
          <div>
            <div className="enp-sec">
              <div className="enp-calc reveal">
                <div>
                  <div className="enp-field">
                    <label>
                      Promoters <span>scored 9–10</span>
                    </label>
                    <input
                      type="number"
                      min="0"
                      value={prom}
                      onChange={(e) => setProm(e.target.value)}
                    />
                  </div>
                  <div className="enp-field">
                    <label>
                      Passives <span>scored 7–8</span>
                    </label>
                    <input
                      type="number"
                      min="0"
                      value={pass}
                      onChange={(e) => setPass(e.target.value)}
                    />
                  </div>
                  <div className="enp-field">
                    <label>
                      Detractors <span>scored 0–6</span>
                    </label>
                    <input
                      type="number"
                      min="0"
                      value={detr}
                      onChange={(e) => setDetr(e.target.value)}
                    />
                  </div>
                </div>
                <div className="enp-result">
                  <p>Your eNPS</p>
                  <span className="n">{result}</span>
                  <p className="note">{note}</p>
                  <div className="enp-breakdown">
                    <div className="enp-brow">
                      <span>Total responses</span>
                      <b>{total}</b>
                    </div>
                    <div className="enp-brow">
                      <span>% Promoters</span>
                      <b>{promPct}</b>
                    </div>
                    <div className="enp-brow">
                      <span>% Detractors</span>
                      <b>{detrPct}</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="enp-sec" id="how-it-works">
              <h2 className="enp-h2 reveal">How to use the Employee Net Promoter Score (eNPS) calculator</h2>
              <div className="enp-steps reveal">
                <div className="enp-step">
                  <div className="enp-stephead">
                    <div className="enp-stepno">1</div>
                    <h3>Input employee responses</h3>
                  </div>
                  <p>Ask employees to rate, &quot;On a scale of 0 to 10, how likely are you to recommend this company?&quot;</p>
                </div>
                <div className="enp-step">
                  <div className="enp-stephead">
                    <div className="enp-stepno">2</div>
                    <h3>Categorize responses</h3>
                  </div>
                  <p>Divide the responses into Promoters (9–10), Passives (7–8), and Detractors (0–6).</p>
                </div>
                <div className="enp-step">
                  <div className="enp-stephead">
                    <div className="enp-stepno">3</div>
                    <h3>Calculate eNPS score</h3>
                  </div>
                  <p>Subtract the percentage of Detractors from Promoters to get the eNPS score.</p>
                </div>
              </div>
            </div>

            <div className="enp-sec">
              <h2 className="enp-h2 reveal">What is an Employee Net Promoter Score (eNPS)?</h2>
              <p className="enp-p reveal">
                The Employee Net Promoter Score (eNPS) is a recruitment metric that measures
                employee engagement and loyalty within an organization. eNPS assesses how likely
                employees are to recommend their workplaces to others, including friends and
                family. The eNPS score will be between -100 and 100.
              </p>
            </div>

            <div className="enp-sec">
              <h2 className="enp-h2 reveal">How does an Employee Net Promoter Score (eNPS) calculator work?</h2>
              <p className="enp-p reveal">
                An eNPS calculator is the best tool to quantify employee satisfaction based on
                survey responses. Here&apos;s how it works in detail:
              </p>
              <p className="enp-p reveal">
                <b>Survey questions:</b> employees are asked a single question — &quot;On a scale
                of 0 to 10, how likely are you to recommend this company to others as a
                workplace?&quot;
              </p>
              <p className="enp-p reveal">
                <b>Categorization of responses:</b> Promoters score 9 or 10 and are loyal and
                enthusiastic. Passives score 7 or 8 — satisfied but not enthusiastic enough to be
                promoters. Detractors score 0 to 6 — unhappy, and may discourage others from
                joining.
              </p>
              <p className="enp-p reveal">
                <b>Percentage calculation:</b> after gathering responses, the percentage of
                employees in each category is calculated based on the total number of respondents.
              </p>
              <p className="enp-formula reveal">eNPS = % of Promoters − % of Detractors</p>
              <p className="enp-p reveal">
                For example, if 70% of respondents are Promoters and 10% are Detractors, eNPS =
                70% − 10% = 60. The score ranges from -100 (all Detractors) to +100 (all
                Promoters) — a higher score shows greater employee engagement and satisfaction.
              </p>
            </div>

            <div className="enp-sec">
              <h2 className="enp-h2 reveal">Why use the Employee Net Promoter Score (eNPS) calculator?</h2>
              <ul className="enp-chk reveal">
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                  <span>
                    <b>Measure employee satisfaction:</b> eNPS helps you determine how happy
                    employees are with their jobs, giving a good sense of overall satisfaction and
                    morale.
                  </span>
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                  <span>
                    <b>Identify engagement levels:</b> the eNPS score shows how many employees are
                    Promoters, Passives, or Detractors — helping you spot areas that might need
                    improvement.
                  </span>
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                  <span>
                    <b>Benchmarking and comparisons:</b> compare eNPS scores across teams or
                    locations to spot areas needing extra attention.
                  </span>
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                  <span>
                    <b>Track changes over time:</b> measuring eNPS regularly helps you see if your
                    efforts to improve workplace culture are making a difference.
                  </span>
                </li>
              </ul>
            </div>

            <div className="enp-sec">
              <h2 className="enp-h2 reveal">What is a good Employee Net Promoter Score (eNPS)?</h2>
              <p className="enp-p reveal">A good eNPS typically falls between 10 and 30:</p>
              <div className="enp-bench reveal">
                <div className="enp-benchcard">
                  <p className="t">-100 to 0</p>
                  <p className="d">
                    More detractors than promoters, which could point to issues with employee
                    engagement, management, or company culture.
                  </p>
                </div>
                <div className="enp-benchcard">
                  <p className="t">0 to 10</p>
                  <p className="d">A balance between promoters and detractors, indicating room for improvement.</p>
                </div>
                <div className="enp-benchcard">
                  <p className="t">10 to 30</p>
                  <p className="d">A positive work environment with good employee engagement and satisfaction.</p>
                </div>
                <div className="enp-benchcard">
                  <p className="t">30 to 50</p>
                  <p className="d">Above average, showing effective strategies to boost employee engagement and loyalty.</p>
                </div>
                <div className="enp-benchcard">
                  <p className="t">50+</p>
                  <p className="d">Excellent, suggesting an outstanding employee experience and a culture encouraging advocacy.</p>
                </div>
              </div>
              <p className="enp-p reveal" style={{ marginTop: 18 }}>
                Note: eNPS scores can vary based on factors like industry and company size. It&apos;s
                important to compare your score with similar companies to understand where you
                stand.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section style={{ background: '#FBF3EE', padding: '96px 28px' }}>
        <div style={{ maxWidth: 640, margin: '0 auto', textAlign: 'center' }}>
          <p className="enp-eyebrow reveal">
            FAQ<b>.</b>
          </p>
          <h2 className="enp-h2 reveal">Frequently asked questions</h2>
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
