'use client';

import { useState } from 'react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaBand from '@/components/CtaBand';
import FAQ from '@/components/FAQ';

const css = `
*{box-sizing:border-box;}
html{scroll-behavior:smooth;}
body{margin:0;font-family:'Poppins',sans-serif;-webkit-font-smoothing:antialiased;color:#1A1014;background:#fff;}
a{text-decoration:none;color:inherit;}
a:hover{color:#F23F44;}
.afc-wrap{max-width:1200px;margin:0 auto;padding:0 28px;}
.reveal{opacity:0;transform:translateY(20px);transition:opacity .6s cubic-bezier(.2,.7,.2,1),transform .6s cubic-bezier(.2,.7,.2,1);}
.reveal.in{opacity:1;transform:none;}
.afc-hero{padding:64px 28px 30px;background:radial-gradient(900px 420px at 50% -18%,#FFF0EE 0%,rgba(255,240,238,0) 64%),#fff;}
.afc-back{display:inline-flex;align-items:center;gap:8px;font-size:13.5px;font-weight:600;color:#F23F44;margin-bottom:22px;}
.afc-back svg{transition:transform .2s;}
.afc-back:hover svg{transform:translateX(-3px);}
.afc-eyebrow{font-size:13px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:#8A7A7D;margin:0 0 14px;}
.afc-eyebrow b{color:#F23F44;font-weight:700;}
.afc-h1{font-size:44px;line-height:1.08;font-weight:800;letter-spacing:-1.4px;margin:0;max-width:820px;}
.afc-sub{font-size:18px;line-height:1.6;color:#5A4B4E;margin:18px 0 0;max-width:720px;}
.afc-ticks{display:flex;gap:26px;flex-wrap:wrap;margin:22px 0 0;}
.afc-tick{display:inline-flex;align-items:center;gap:8px;font-size:13.5px;font-weight:600;color:#6C5A5D;}
.afc-body{padding:36px 28px 40px;}
.afc-p{font-size:16px;line-height:1.72;color:#4A3B3E;margin:0 0 18px;}
.afc-sec{scroll-margin-top:110px;margin-bottom:34px;}
.afc-h2{font-size:26px;font-weight:800;letter-spacing:-.5px;margin:0 0 16px;color:#1A1014;}
.afc-calc{background:#fff;border:1px solid #F0E2E3;border-radius:22px;padding:34px;box-shadow:0 20px 44px rgba(110,11,14,.08);}
.afc-fields{display:grid;grid-template-columns:repeat(3,1fr);gap:16px 20px;margin-bottom:24px;}
.afc-field label{display:block;font-size:13.5px;font-weight:700;color:#1A1014;margin-bottom:8px;}
.afc-field input{width:100%;border:1.5px solid #EADDDE;border-radius:10px;padding:11px 14px;font-family:inherit;font-size:14.5px;font-weight:600;color:#1A1014;background:#FCFAFA;}
.afc-field input:focus{outline:none;border-color:#F23F44;background:#fff;}
.afc-calcbtn{background:#F23F44;color:#fff;border:0;border-radius:11px;padding:13px 24px;font-family:inherit;font-size:14.5px;font-weight:700;cursor:pointer;transition:transform .2s,box-shadow .2s;}
.afc-calcbtn:hover{transform:translateY(-2px);box-shadow:0 12px 26px rgba(242,63,68,.28);}
.afc-table{margin-top:26px;border-top:1px solid #F0E2E3;padding-top:22px;display:grid;grid-template-columns:1.4fr 1fr 1fr;gap:0 16px;}
.afc-table .h{font-size:11.5px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#8A7A7D;padding-bottom:10px;border-bottom:1px solid #F0E2E3;margin-bottom:10px;}
.afc-table .stage{font-size:14.5px;color:#1A1014;font-weight:600;padding:9px 0;}
.afc-table .rate{font-size:14.5px;font-weight:800;color:#F23F44;padding:9px 0;}
.afc-table .bench{font-size:14.5px;color:#8A7A7D;padding:9px 0;}
.afc-steps{display:grid;grid-template-columns:repeat(2,1fr);gap:20px;}
.afc-step{background:#fff;border:1px solid #F2E6E7;border-radius:18px;padding:26px;transition:transform .3s cubic-bezier(.2,.7,.3,1),border-color .3s,box-shadow .3s;}
.afc-step:hover{transform:translateY(-4px);border-color:#FBD0D1;box-shadow:0 16px 34px rgba(110,11,14,.10);}
.afc-stephead{display:flex;align-items:center;gap:12px;margin-bottom:14px;}
.afc-stepno{flex:none;width:34px;height:34px;border-radius:10px;background:#FFF0F0;color:#F23F44;font-weight:800;font-size:15px;display:flex;align-items:center;justify-content:center;}
.afc-step h3{font-size:17px;font-weight:700;letter-spacing:-.2px;margin:0;}
.afc-step p{font-size:15px;line-height:1.62;color:#5A4B4E;margin:0;}
.afc-formula{background:#FBF3EE;border:1px solid #F0E2E3;border-radius:14px;padding:20px 24px;font-size:16px;font-weight:600;color:#1A1014;margin:0 0 20px;}
.afc-chk{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:14px;}
.afc-chk li{display:flex;align-items:flex-start;gap:14px;font-size:15px;line-height:1.62;color:#5A4B4E;}
.afc-chk svg{color:#F23F44;flex:none;margin-top:2px;}
@media(max-width:900px){.afc-steps{grid-template-columns:1fr;}.afc-fields{grid-template-columns:1fr 1fr;}}
@media(max-width:860px){.afc-h1{font-size:32px;letter-spacing:-1px;}.afc-fields{grid-template-columns:1fr;}}
h1,h2,h3,h4,h5,.afc-h1,.afc-h2,.afc-eyebrow{text-wrap:balance;}p,li,.afc-p,.afc-sub{text-wrap:pretty;}/*om-balance-rule*/
`;

const faqItems = [
  {
    q: 'How to calculate the recruitment funnel?',
    a: 'To calculate the recruitment funnel, divide the number of candidates at each stage by the number at the previous stage. Multiply by 100 to determine conversion rates and identify bottlenecks.',
  },
  {
    q: 'What is the funnel ratio?',
    a: 'The funnel ratio is the conversion rate between each stage of the recruitment process. It measures the percentage of candidates progressing from one stage to the next, helping optimize hiring efficiency.',
  },
  {
    q: 'What is a candidate funnel?',
    a: 'A candidate funnel represents the stages candidates go through in the recruitment process. It tracks how applicants move from job views to hired, helping employers assess and improve hiring strategies.',
  },
];

export default function ApplicantFunnelCalculatorPage() {
  const [views, setViews] = useState('5000');
  const [appl, setAppl] = useState('400');
  const [intv, setIntv] = useState('60');
  const [offers, setOffers] = useState('12');
  const [accepted, setAccepted] = useState('8');
  const [days, setDays] = useState('38');
  const [calculated, setCalculated] = useState(false);

  const num = (v: string) => {
    const n = parseFloat(v);
    return isNaN(n) || n < 0 ? 0 : n;
  };
  const pct = (a: number, b: number) => (b ? (a / b * 100).toFixed(1) + '%' : '—');

  const viewsNum = num(views);
  const applNum = num(appl);
  const intvNum = num(intv);
  const offersNum = num(offers);
  const acceptedNum = num(accepted);
  const daysNum = num(days);

  const r1 = calculated ? pct(applNum, viewsNum) : '—';
  const r2 = calculated ? pct(intvNum, applNum) : '—';
  const r3 = calculated ? pct(offersNum, intvNum) : '—';
  const r4 = calculated ? pct(acceptedNum, offersNum) : '—';
  const daysLabel = calculated ? daysNum + ' days' : '—';

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <SiteHeader
        announcement="Free HR tools — calculators, templates and interview kits."
        announcementCta="Browse tools"
        homeHref="/"
      />

      <section className="afc-hero">
        <div className="afc-wrap">
          <a className="afc-back" href="/hr-tools">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5M11 6l-6 6 6 6"></path>
            </svg>
            Back to HR tools
          </a>
          <p className="afc-eyebrow reveal">
            Applicant funnel calculator<b>.</b>
          </p>
          <h1 className="afc-h1 reveal">Applicant funnel calculator</h1>
          <p className="afc-sub reveal">
            Identify bottlenecks and inefficiencies in your hiring process using Testlify&apos;s
            free applicant funnel calculator.
          </p>
          <div className="afc-ticks reveal">
            <span className="afc-tick">
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#F23F44"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
              No sign-up required
            </span>
            <span className="afc-tick">
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#F23F44"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
              Track candidate progression
            </span>
            <span className="afc-tick">
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#F23F44"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
              Measure funnel performance
            </span>
          </div>
        </div>
      </section>

      <section style={{ background: '#FBF3EE', padding: '36px 28px' }}>
        <div className="afc-wrap">
          <div className="afc-calc reveal">
            <p className="afc-eyebrow" style={{ marginBottom: 22 }}>
              What are my recruiting conversion rates?<b>.</b>
            </p>
            <div className="afc-fields">
              <div className="afc-field">
                <label># of Job Posting Views</label>
                <input
                  type="number"
                  min={0}
                  value={views}
                  onChange={(e) => setViews(e.target.value)}
                />
              </div>
              <div className="afc-field">
                <label># of Applicants</label>
                <input
                  type="number"
                  min={0}
                  value={appl}
                  onChange={(e) => setAppl(e.target.value)}
                />
              </div>
              <div className="afc-field">
                <label># of Interviews</label>
                <input
                  type="number"
                  min={0}
                  value={intv}
                  onChange={(e) => setIntv(e.target.value)}
                />
              </div>
              <div className="afc-field">
                <label># of Offers</label>
                <input
                  type="number"
                  min={0}
                  value={offers}
                  onChange={(e) => setOffers(e.target.value)}
                />
              </div>
              <div className="afc-field">
                <label># Accepted Offers</label>
                <input
                  type="number"
                  min={0}
                  value={accepted}
                  onChange={(e) => setAccepted(e.target.value)}
                />
              </div>
              <div className="afc-field">
                <label>
                  Average Time to Hire{' '}
                  <span style={{ fontWeight: 500, color: '#8A7A7D' }}>(days)</span>
                </label>
                <input
                  type="number"
                  min={0}
                  value={days}
                  onChange={(e) => setDays(e.target.value)}
                />
              </div>
            </div>
            <button className="afc-calcbtn" onClick={() => setCalculated(true)}>
              Calculate
            </button>
            <div className="afc-table">
              <div className="h">Stage</div>
              <div className="h">Your Conversion Rate</div>
              <div className="h">Jobvite Benchmark</div>
              <div className="stage"># of Applicants</div>
              <div className="rate">{r1}</div>
              <div className="bench">11.0%</div>
              <div className="stage"># of Interviews</div>
              <div className="rate">{r2}</div>
              <div className="bench">12.0%</div>
              <div className="stage"># of Offers</div>
              <div className="rate">{r3}</div>
              <div className="bench">17.0%</div>
              <div className="stage">Accepted Offers</div>
              <div className="rate">{r4}</div>
              <div className="bench">89.0%</div>
              <div className="stage">Average Time to Hire</div>
              <div className="rate">{daysLabel}</div>
              <div className="bench">43 days</div>
            </div>
          </div>
        </div>
      </section>

      <div className="afc-body">
        <div className="afc-wrap">
          <div>
            <div className="afc-sec" id="how-it-works">
              <h2 className="afc-h2 reveal">How to use the Applicant funnel calculator</h2>
              <div className="afc-steps reveal">
                <div className="afc-step">
                  <div className="afc-stephead">
                    <div className="afc-stepno">1</div>
                    <h3>Enter recruitment data</h3>
                  </div>
                  <p>
                    Input key recruitment metrics: the number of job posting views, applicants,
                    interviews, offers, accepted offers, and average time to hire. These data
                    points help calculate your recruitment conversion rates.
                  </p>
                </div>
                <div className="afc-step">
                  <div className="afc-stephead">
                    <div className="afc-stepno">2</div>
                    <h3>Click &apos;Calculate&apos; to analyze</h3>
                  </div>
                  <p>
                    Hit the &apos;Calculate&apos; button to instantly view your conversion rates
                    at each stage of the hiring process. This will allow you to identify areas for
                    improvement.
                  </p>
                </div>
              </div>
            </div>

            <div className="afc-sec">
              <h2 className="afc-h2 reveal">What is an applicant funnel calculator?</h2>
              <p className="afc-p reveal">
                An applicant funnel calculator, also known as a hiring funnel calculator or
                recruitment funnel calculator, is a tool for defining the recruitment process,
                from when talent acquisition posts a job description to when the candidate
                accepts and signs the offer letter.
              </p>
              <p className="afc-p reveal">
                This funnel tracks, measures, and analyzes a candidate&apos;s journey through each
                stage of the recruitment process. Calculating conversion rates at each point
                allows organizations to optimize their hiring strategies and identify areas for
                improvement.
              </p>
            </div>

            <div className="afc-sec">
              <h2 className="afc-h2 reveal">Why use a recruitment funnel calculator?</h2>
              <ul className="afc-chk reveal">
                <li>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                  <span>
                    <b>Optimize recruitment efficiency:</b> tracking every stage of the hiring
                    process helps organizations identify where candidates drop off, enabling
                    targeted improvements.
                  </span>
                </li>
                <li>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                  <span>
                    <b>Make data-driven decisions:</b> accessing real-time data at each
                    recruitment stage empowers your hiring team to make better, more informed
                    decisions.
                  </span>
                </li>
                <li>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                  <span>
                    <b>Reduce time-to-hire and recruitment costs:</b> spotting and fixing
                    inefficiencies speeds up hiring while maintaining high-quality standards.
                  </span>
                </li>
              </ul>
              <p className="afc-p reveal" style={{ marginTop: 18 }}>
                Using an Applicant Funnel Calculator gives you a comprehensive view of your
                hiring pipeline, enabling smarter decisions.
              </p>
            </div>

            <div className="afc-sec">
              <h2 className="afc-h2 reveal">Applicant funnel formula</h2>
              <p className="afc-p reveal">
                The applicant or recruitment funnel formula involves calculating conversion rates
                at each stage of the recruitment process. It involves calculating metrics such as
                number of job posting views, number of applicants, number of interviews, number
                of offers, number of accepted offers, and average time to hire.
              </p>
            </div>

            <div className="afc-sec">
              <h2 className="afc-h2 reveal">
                How does the applicant funnel calculator help your business?
              </h2>
              <p className="afc-p reveal">
                An Applicant Funnel Calculator is a powerful tool that helps businesses optimize
                their recruitment process by tracking candidates through each stage, from job
                posting views to accepted offers.
              </p>
              <p className="afc-p reveal">
                The calculator provides valuable insights into conversion rates at every stage by
                inputting key data such as job views, number of applicants, interviews, offers,
                and accepted offers. This analysis helps organizations identify bottlenecks,
                streamline the hiring process, and make informed, data-driven decisions to
                improve recruitment efficiency and effectiveness.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section style={{ background: '#FBF3EE', padding: '96px 28px' }}>
        <div style={{ maxWidth: 640, margin: '0 auto', textAlign: 'center' }}>
          <p className="afc-eyebrow reveal">
            FAQ<b>.</b>
          </p>
          <h2 className="afc-h2 reveal">Frequently asked questions</h2>
        </div>
        <div className="reveal" style={{ maxWidth: 820, margin: '34px auto 0' }}>
          <FAQ items={faqItems} />
        </div>
      </section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
