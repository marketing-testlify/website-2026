'use client';

import { useState } from 'react';
import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaBand from '@/components/CtaBand';
import FAQ from '@/components/FAQ';

const calcCss = `
.tw{max-width:1180px;margin:0 auto;padding:0 28px;}
.tsec{padding:88px 28px;}
.th1{font-size:52px;line-height:1.06;font-weight:800;letter-spacing:-1.6px;margin:0;color:#1A1014;}
.th2{font-size:34px;line-height:1.12;font-weight:800;letter-spacing:-1px;margin:0;color:#1A1014;}
.tlead{font-size:19px;line-height:1.6;color:#5A4B4E;margin:16px 0 0;}
.tbody{font-size:16px;line-height:1.66;color:#5A4B4E;}
.tcrumb{display:flex;align-items:center;gap:9px;font-size:13px;font-weight:600;color:#A9999C;margin:0 0 18px;}
.tcrumb a{color:#F23F44;}
.tcalc{display:grid;grid-template-columns:1.05fr 1fr;gap:28px;align-items:stretch;}
.tcard{background:#fff;border:1px solid #F0E2E3;border-radius:22px;padding:32px;box-shadow:0 20px 44px rgba(110,11,14,.08);}
.tfield{margin-bottom:20px;}
.tfield label{display:block;font-size:13.5px;font-weight:700;color:#1A1014;margin-bottom:8px;}
.tfield .thint{font-weight:500;color:#8A7A7D;font-size:12px;margin-left:6px;}
.tinput{width:100%;height:50px;border:1.5px solid #EADDDE;border-radius:12px;padding:0 16px;font-family:inherit;font-size:16px;font-weight:600;color:#1A1014;background:#FCFAFA;transition:border-color .2s,box-shadow .2s;}
.tinput:focus{outline:none;border-color:#F23F44;box-shadow:0 0 0 4px rgba(242,63,68,.12);background:#fff;}
.tprefix{position:relative;}
.tprefix .tsym{position:absolute;left:14px;top:50%;transform:translateY(-50%);font-weight:700;color:#A9999C;font-size:15px;}
.tprefix .tinput{padding-left:32px;}
.tprefix.suf .tsym{left:auto;right:14px;}
.tprefix.suf .tinput{padding-left:16px;padding-right:34px;}
.tresult{background:linear-gradient(160deg,#1A1014,#2A1418);border-radius:22px;padding:34px;color:#fff;display:flex;flex-direction:column;justify-content:center;}
.trlabel{font-size:12.5px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#C9A9AB;margin:0;}
.trbig{font-size:64px;font-weight:800;letter-spacing:-2px;line-height:1;margin:12px 0 0;background:linear-gradient(180deg,#fff,#FFC9BD);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;}
.trsub{font-size:14.5px;color:#C2B1B4;margin:14px 0 0;line-height:1.5;}
.trbreak{margin-top:22px;padding-top:20px;border-top:1px solid #3A2529;display:flex;flex-direction:column;gap:10px;}
.trrow{display:flex;align-items:center;justify-content:space-between;font-size:13.5px;}
.trrow span:first-child{color:#A38E92;}
.trrow span:last-child{font-weight:700;color:#F1E7E8;}
.tsteps{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:44px;}
.tstep{background:#fff;border:1px solid #F2E6E7;border-radius:18px;padding:26px;transition:transform .3s cubic-bezier(.2,.7,.3,1),border-color .3s,box-shadow .3s;}
.tstep:hover{transform:translateY(-4px);border-color:#FBD0D1;box-shadow:0 16px 34px rgba(110,11,14,.10);}
.tstepn{width:34px;height:34px;border-radius:10px;background:#FFF0F0;color:#F23F44;font-weight:800;display:flex;align-items:center;justify-content:center;margin-bottom:14px;}
@media(max-width:900px){.tcalc{grid-template-columns:1fr;}.th1{font-size:38px;letter-spacing:-1px;}.th2{font-size:28px;}.tsec{padding:64px 22px;}.tsteps{grid-template-columns:1fr;}}
`;

const faqItems = [
  {
    q: 'How long does the average job take to hire?',
    a: 'The average time to hire is typically around 30-45 days, varying by role, industry and how quickly candidates are evaluated.',
  },
  {
    q: 'How do you calculate time to recruit?',
    a: 'Measure the days from when a job is posted to when an offer is accepted, then average across roles to track recruitment efficiency.',
  },
  {
    q: 'What is the time to hire KPI?',
    a: 'The time to hire KPI measures the time taken to fill a position, from job posting to candidate acceptance — an indicator of hiring-process efficiency.',
  },
  {
    q: 'How to improve time-to-hire?',
    a: 'Streamline your recruitment process, use technology for faster candidate screening, maintain a strong talent pool, and communicate clearly with candidates and hiring managers.',
  },
  {
    q: 'What is the average time-to-hire?',
    a: 'According to SHRM, the average time to hire is 24 days between screening candidates and accepting a job offer.',
  },
];

export default function AverageTimeToHireCalculatorPage() {
  const [days, setDays] = useState('216');
  const [hires, setHires] = useState('6');

  const num = (v: string) => {
    const n = parseFloat(v);
    return isNaN(n) || n < 0 ? 0 : n;
  };

  const daysNum = num(days);
  const hiresNum = Math.max(1, num(hires));
  const avg = daysNum / hiresNum;
  const result = avg.toFixed(1) + ' days';
  const note =
    avg <= 36
      ? 'Faster than the ~36-day industry benchmark.'
      : 'Slower than the ~36-day benchmark — room to speed up.';

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: calcCss }} />
      <SiteHeader
        announcement="Free HR tools — calculators, templates and interview kits."
        announcementCta="Browse tools"
      />

      <section
        className="tsec"
        style={{
          background:
            'radial-gradient(1000px 500px at 80% 4%,#FFF0EE 0%,rgba(255,240,238,0) 60%),#fff',
        }}
      >
        <div className="tw">
          <div className="tcrumb reveal">
            <Link href="/blog">Resources</Link>
            <span>/</span>
            <Link href="/hr-tools">HR tools</Link>
            <span>/</span>
            <span>Average time to hire calculator</span>
          </div>
          <div style={{ maxWidth: 720 }}>
            <p className="eyebrow reveal">
              Average time to hire<b>.</b>
            </p>
            <h1 className="th1 reveal" style={{ transitionDelay: '.04s' }}>
              Calculate your average time to hire
            </h1>
            <p className="tlead reveal" style={{ transitionDelay: '.08s' }}>
              Add up the days-to-hire across your recent roles and the number of
              hires to see your average — and how skills screening can shorten it.
            </p>
          </div>
        </div>
      </section>

      <section className="tsec" style={{ background: '#FBF3EE', paddingTop: 40 }}>
        <div className="tw">
          <div className="tcalc reveal">
            <div className="tcard">
              <p className="eyebrow" style={{ marginBottom: 22 }}>
                Your numbers<b>.</b>
              </p>
              <div className="tfield">
                <label>
                  Total days to hire <span className="thint">summed across roles</span>
                </label>
                <input
                  className="tinput"
                  type="number"
                  min="0"
                  value={days}
                  onChange={(e) => setDays(e.target.value)}
                />
              </div>
              <div className="tfield" style={{ marginBottom: 0 }}>
                <label>Number of hires</label>
                <input
                  className="tinput"
                  type="number"
                  min="1"
                  value={hires}
                  onChange={(e) => setHires(e.target.value)}
                />
              </div>
            </div>
            <div className="tresult">
              <p className="trlabel">Average time to hire</p>
              <p className="trbig">{result}</p>
              <p className="trsub">{note}</p>
              <div className="trbreak">
                <div className="trrow">
                  <span>Total days</span>
                  <span>{days}</span>
                </div>
                <div className="trrow">
                  <span>Hires</span>
                  <span>{hires}</span>
                </div>
                <div className="trrow">
                  <span>Industry benchmark</span>
                  <span>~36 days</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tsec">
        <div className="tw">
          <div style={{ maxWidth: 640 }}>
            <p className="eyebrow reveal">
              How it works<b>.</b>
            </p>
            <h2 className="th2 reveal" style={{ transitionDelay: '.04s' }}>
              Time to hire, explained
            </h2>
            <p className="tlead reveal" style={{ transitionDelay: '.08s' }}>
              Time to hire measures the days from a candidate entering your
              pipeline to accepting an offer, averaged across roles. The industry
              sits around 36 days — screening on skill early is one of the fastest
              ways to cut it.
            </p>
          </div>
          <div className="tsteps">
            <div className="tstep reveal">
              <div className="tstepn">1</div>
              <h3 className="th2" style={{ fontSize: 19, marginBottom: 8 }}>
                Sum the days
              </h3>
              <p className="tbody" style={{ margin: 0, fontSize: 14.5 }}>
                Add the days-to-hire for each role you filled.
              </p>
            </div>
            <div className="tstep reveal" style={{ transitionDelay: '.06s' }}>
              <div className="tstepn">2</div>
              <h3 className="th2" style={{ fontSize: 19, marginBottom: 8 }}>
                Count the hires
              </h3>
              <p className="tbody" style={{ margin: 0, fontSize: 14.5 }}>
                The number of roles filled in the same period.
              </p>
            </div>
            <div className="tstep reveal" style={{ transitionDelay: '.12s' }}>
              <div className="tstepn">3</div>
              <h3 className="th2" style={{ fontSize: 19, marginBottom: 8 }}>
                See the average
              </h3>
              <p className="tbody" style={{ margin: 0, fontSize: 14.5 }}>
                Compare against the ~36-day benchmark.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="tsec" style={{ background: '#FBF3EE' }}>
        <div className="tw">
          <div style={{ maxWidth: 640 }}>
            <p className="eyebrow reveal">
              Why it matters<b>.</b>
            </p>
            <h2 className="th2 reveal" style={{ transitionDelay: '.04s' }}>
              Why use an average time to hire calculator?
            </h2>
          </div>
          <ul className="chk reveal" style={{ marginTop: 30, maxWidth: 760 }}>
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
              <b>Improved efficiency:</b> spot bottlenecks in the hiring process and
              streamline recruitment stages.
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
              <b>Better candidate experience:</b> a shorter time-to-hire means
              transparent communication and swift decisions.
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
              <b>Data-driven decisions:</b> compare hiring times across roles and
              adjust strategy accordingly.
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
              <b>Resource allocation:</b> know which roles take longer to fill and
              plan support accordingly.
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
              <b>Talent retention:</b> a lengthy process risks losing candidates to
              other offers — track and shorten it.
            </li>
          </ul>
        </div>
      </section>

      <section className="tsec">
        <div className="tw">
          <div style={{ maxWidth: 640, margin: '0 auto', textAlign: 'center' }}>
            <p className="eyebrow reveal">
              FAQ<b>.</b>
            </p>
            <h2 className="th2 reveal" style={{ transitionDelay: '.04s' }}>
              Frequently asked questions
            </h2>
          </div>
          <div className="reveal" style={{ maxWidth: 820, margin: '34px auto 0' }}>
            <FAQ items={faqItems} />
          </div>
        </div>
      </section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
