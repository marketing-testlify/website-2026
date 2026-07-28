'use client';

import { useMemo, useState } from 'react';
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
.trelgrid{display:grid;gap:20px;margin-top:34px;}
.trelcard{background:#fff;border:1px solid #F2E6E7;border-radius:18px;padding:26px;}
.trelt{font-size:22px;font-weight:800;letter-spacing:-.5px;color:#F23F44;margin:0 0 8px;}
.treld{font-size:14.5px;line-height:1.55;color:#5A4B4E;margin:0;}
@media(max-width:900px){.tcalc{grid-template-columns:1fr;}.th1{font-size:38px;letter-spacing:-1px;}.th2{font-size:28px;}.tsec{padding:64px 22px;}.tsteps{grid-template-columns:1fr;}.trelgrid{grid-template-columns:1fr !important;}}
`;

const FAQ_ITEMS = [
  {
    q: 'How do you calculate the offer acceptance rate?',
    a: 'Divide the number of accepted offers by the total offers made, then multiply by 100 to get the acceptance rate as a percentage.',
  },
  {
    q: 'What is a good offer acceptance rate?',
    a: 'A good offer acceptance rate is typically 85–90% or higher, indicating your offers are competitive and appealing to top candidates.',
  },
  {
    q: 'How do you calculate acceptance ratio?',
    a: 'Acceptance ratio is the number of accepted offers divided by total offers made, shown as a ratio (e.g., 9:10) rather than a percentage.',
  },
];

function num(v: string): number {
  const n = parseFloat(v);
  return isNaN(n) || n < 0 ? 0 : n;
}

export default function JobOfferAcceptanceRateCalculatorPage() {
  const [acc, setAcc] = useState('9');
  const [made, setMade] = useState('10');

  const { result, note } = useMemo(() => {
    const accNum = num(acc);
    const madeNum = Math.max(1, num(made));
    const rate = Math.min(100, (accNum / madeNum) * 100);
    return {
      result: rate.toFixed(0) + '%',
      note:
        rate >= 85
          ? 'Above the 85% benchmark — a strong candidate experience.'
          : 'Below 85% — review pay, speed and candidate experience.',
    };
  }, [acc, made]);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: calcCss }} />
      <SiteHeader
        announcement="Free HR tools — calculators, templates and interview kits."
        announcementCta="Browse tools"
        homeHref="/"
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
            <span>Job offer acceptance rate calculator</span>
          </div>
          <div style={{ maxWidth: 720 }}>
            <p className="eyebrow reveal">
              Offer acceptance rate<b>.</b>
            </p>
            <h1 className="th1 reveal" style={{ transitionDelay: '.04s' }}>
              Calculate your offer acceptance rate
            </h1>
            <p className="tlead reveal" style={{ transitionDelay: '.08s' }}>
              What share of your offers get accepted? A high acceptance rate signals a
              strong candidate experience and well-aligned expectations.
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
                <label>Offers accepted</label>
                <input
                  className="tinput"
                  type="number"
                  min="0"
                  value={acc}
                  onChange={(e) => setAcc(e.target.value)}
                />
              </div>
              <div className="tfield" style={{ marginBottom: 0 }}>
                <label>Offers made</label>
                <input
                  className="tinput"
                  type="number"
                  min="1"
                  value={made}
                  onChange={(e) => setMade(e.target.value)}
                />
              </div>
            </div>
            <div className="tresult">
              <p className="trlabel">Offer acceptance rate</p>
              <p className="trbig">{result}</p>
              <p className="trsub">{note}</p>
              <div className="trbreak">
                <div className="trrow">
                  <span>Offers accepted</span>
                  <span>{acc}</span>
                </div>
                <div className="trrow">
                  <span>Offers made</span>
                  <span>{made}</span>
                </div>
                <div className="trrow">
                  <span>Healthy benchmark</span>
                  <span>&gt; 85%</span>
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
              Acceptance rate, explained
            </h2>
            <p className="tlead reveal" style={{ transitionDelay: '.08s' }}>
              Offer acceptance rate is offers accepted divided by offers made. A low
              rate can point to slow processes, misaligned pay, or a weak candidate
              experience — all fixable.
            </p>
          </div>
          <div className="tsteps">
            <div className="tstep reveal">
              <div className="tstepn">1</div>
              <h3 className="th2" style={{ fontSize: 19, marginBottom: 8 }}>
                Count acceptances
              </h3>
              <p className="tbody" style={{ margin: 0, fontSize: 14.5 }}>
                Offers that turned into signed acceptances.
              </p>
            </div>
            <div className="tstep reveal" style={{ transitionDelay: '.06s' }}>
              <div className="tstepn">2</div>
              <h3 className="th2" style={{ fontSize: 19, marginBottom: 8 }}>
                Count offers made
              </h3>
              <p className="tbody" style={{ margin: 0, fontSize: 14.5 }}>
                Every formal offer you extended.
              </p>
            </div>
            <div className="tstep reveal" style={{ transitionDelay: '.12s' }}>
              <div className="tstepn">3</div>
              <h3 className="th2" style={{ fontSize: 19, marginBottom: 8 }}>
                See the rate
              </h3>
              <p className="tbody" style={{ margin: 0, fontSize: 14.5 }}>
                Aim for above the 85% healthy benchmark.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="tsec" style={{ background: '#FBF3EE' }}>
        <div className="tw">
          <div style={{ maxWidth: 720 }}>
            <p className="eyebrow reveal">
              Definition<b>.</b>
            </p>
            <h2 className="th2 reveal" style={{ transitionDelay: '.04s' }}>
              What is offer acceptance rate?
            </h2>
            <p className="tlead reveal" style={{ transitionDelay: '.08s' }}>
              Offer acceptance rate measures the percentage of job offers accepted by
              candidates. It signals how appealing your offers are on salary, benefits,
              role fit and company brand. A low rate can point to uncompetitive pay,
              unclear roles, or a poor candidate experience.
            </p>
          </div>
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
            <FAQ items={FAQ_ITEMS} />
          </div>
        </div>
      </section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
