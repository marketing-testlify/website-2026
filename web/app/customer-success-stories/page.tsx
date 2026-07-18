import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaBand from '@/components/CtaBand';

export default function CustomerSuccessStoriesPage() {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
*{box-sizing:border-box;}
html{scroll-behavior:smooth;}
body{margin:0;font-family:'Poppins',sans-serif;-webkit-font-smoothing:antialiased;color:#1A1014;background:#fff;}
a{text-decoration:none;color:inherit;}
.wrap{max-width:1240px;margin:0 auto;padding:0 28px;}
.sec{padding:104px 28px;}
.eyebrow{font-size:12.5px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:#8A7A7D;margin:0 0 18px;}
.eyebrow b{color:#F23F44;font-weight:600;}
.h1{font-size:62px;line-height:1.04;font-weight:800;letter-spacing:-2px;margin:0;color:#1A1014;}
.h2{font-size:43px;line-height:1.08;font-weight:800;letter-spacing:-1.4px;margin:0;color:#1A1014;}
.h3{font-size:22px;line-height:1.25;font-weight:700;letter-spacing:-.4px;margin:0;color:#1A1014;}
.lead{font-size:19px;line-height:1.6;color:#5A4B4E;font-weight:400;}
.body{font-size:16px;line-height:1.66;color:#5A4B4E;}
.btn{display:inline-flex;align-items:center;gap:9px;font-weight:600;font-size:15.5px;padding:14px 26px;border-radius:13px;transition:transform .25s ease, box-shadow .25s ease;cursor:pointer;border:none;}
.btn-primary{background:#F23F44;color:#fff;box-shadow:0 12px 26px rgba(242,63,68,.30);}
.btn-primary:hover{transform:translateY(-2px);box-shadow:0 16px 34px rgba(242,63,68,.40);}
.btn-ghost{background:#fff;color:#1A1014;border:1.5px solid #EADDDE;}
.btn-ghost:hover{transform:translateY(-2px);border-color:#F2B7B9;box-shadow:0 10px 24px rgba(110,11,14,.08);}
.dot{width:4px;height:4px;border-radius:50%;background:#D9C7C9;}
.reveal{opacity:0;transform:translateY(26px);transition:opacity .7s cubic-bezier(.2,.7,.2,1), transform .7s cubic-bezier(.2,.7,.2,1);}
.reveal.in{opacity:1;transform:none;}
.chero{padding:64px 28px 40px;background:radial-gradient(1100px 520px at 50% -10%,#FFF0EE 0%,rgba(255,240,238,0) 62%),#fff;text-align:center;}
.feat{display:grid;grid-template-columns:1.05fr .95fr;gap:46px;align-items:start;background:#fff;border:1px solid #EFE2E3;border-radius:26px;padding:44px;box-shadow:0 24px 60px rgba(110,11,14,.08);}
.bigquote{font-size:27px;line-height:1.4;font-weight:600;letter-spacing:-.5px;color:#1A1014;margin:0 0 24px;}
.bigquote span{color:#F23F44;}
.statrow{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-top:30px;}
.statn{font-size:36px;font-weight:800;letter-spacing:-1.5px;color:#F23F44;line-height:1;}
.cgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;}
.ccard{display:flex;flex-direction:column;background:#fff;border:1px solid #EFE2E3;border-radius:20px;padding:28px;transition:transform .25s ease, box-shadow .25s ease, border-color .25s;}
.ccard:hover{transform:translateY(-4px);box-shadow:0 22px 46px rgba(110,11,14,.10);border-color:#F4D2D3;}
.clogo{font-weight:800;font-size:18px;color:#C0242B;margin-bottom:16px;}
.cquote{font-size:15.5px;line-height:1.6;color:#3A2C30;font-weight:500;margin:0 0 20px;}
.cby{display:flex;align-items:center;gap:11px;margin-top:auto;}
.cav{width:40px;height:40px;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:14px;flex:none;}
.metric{font-size:12px;font-weight:700;color:#1FA463;background:#E9F7EF;padding:5px 10px;border-radius:999px;align-self:flex-start;margin-bottom:16px;}
.cmeta{font-size:13px;line-height:1.3;}
.cname{font-weight:700;color:#1A1014;}
.crole{color:#9A878A;}
.pkicker{font-size:12.5px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#C0242B;margin:0 0 12px;}
@media(max-width:920px){
  .h1{font-size:42px;letter-spacing:-1.4px;}
  .h2{font-size:32px;letter-spacing:-1px;}
  .sec{padding:72px 22px;}
  .feat{grid-template-columns:1fr;padding:30px;gap:28px;}
  .bigquote{font-size:22px;}
  .cgrid{grid-template-columns:1fr;}
}

h1,h2,h3,h4,.h1,.h2,.h3,.hero h1,.eyebrow{text-wrap:balance;}p,li,.body,.lead,.sub,figcaption,blockquote{text-wrap:pretty;}/*om-balance-rule*/
`,
        }}
      />
      <SiteHeader announcement="Read how inDrive cut time-to-hire from 3 weeks to 1 week" />
      <section className="chero">
        <div className="wrap" style={{ maxWidth: '820px' }}>
          <p className="eyebrow reveal">
            Customers<b>.</b>
          </p>
          <h1 className="h1 reveal" style={{ transitionDelay: '.04s' }}>
            Hiring teams that<br />made the switch
          </h1>
          <p
            className="lead reveal"
            style={{ margin: '22px auto 0', maxWidth: '600px', transitionDelay: '.08s' }}
          >
            From fast-growing startups to global enterprises — see how teams use Testlify to hire
            faster, fairer and with more confidence.
          </p>
        </div>
      </section>
      <section style={{ padding: '20px 28px 0' }}>
        <div className="wrap">
          <div className="feat reveal">
            <div>
              <div className="clogo" style={{ fontSize: '22px' }}>
                inDrive
              </div>
              <p className="bigquote">
                &quot;The biggest change was moving from a process we were managing to a{' '}
                <span>system we could trust</span>. Now we hire faster, develop smarter, and make
                decisions backed by real data.&quot;
              </p>
              <div className="cby">
                <span className="cav" style={{ background: '#F23F44' }}>
                  AI
                </span>
                <div className="cmeta">
                  <div className="cname">Andrei Ivanov</div>
                  <div className="crole">Training Co-ordinator, inDrive</div>
                </div>
              </div>
              <div className="statrow">
                <div>
                  <div className="statn">67%</div>
                  <p className="body" style={{ fontSize: '13.5px', margin: '6px 0 0' }}>
                    faster time-to-hire
                  </p>
                </div>
                <div>
                  <div className="statn">82%</div>
                  <p className="body" style={{ fontSize: '13.5px', margin: '6px 0 0' }}>
                    more L&amp;D participation
                  </p>
                </div>
                <div>
                  <div className="statn">4×</div>
                  <p className="body" style={{ fontSize: '13.5px', margin: '6px 0 0' }}>
                    recruiter efficiency
                  </p>
                </div>
              </div>
            </div>
            <div
              style={{
                background: 'linear-gradient(160deg,#FFF4F3,#FBE9E9)',
                borderRadius: '20px',
                padding: '34px',
                border: '1px solid #F6DCDD',
              }}
            >
              <p className="pkicker">The challenge</p>
              <p className="body" style={{ fontSize: '14.5px', margin: '0 0 22px' }}>
                Hiring was mostly manual, and assessing English and role skills consistently across
                global teams was a constant challenge.
              </p>
              <p className="pkicker" style={{ marginTop: '22px' }}>
                The result
              </p>
              <p className="body" style={{ fontSize: '14.5px', margin: '0' }}>
                Skills assessments and AI interviews brought consistency to hiring, cut
                time-to-hire from three weeks to one, and lifted L&amp;D participation by 82%.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="sec">
        <div className="wrap">
          <div style={{ maxWidth: '640px', margin: '0 auto 44px', textAlign: 'center' }}>
            <p className="eyebrow reveal">
              Success stories<b>.</b>
            </p>
            <h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>
              Results across every industry
            </h2>
          </div>
          <div className="cgrid">
            <div className="ccard reveal" id="voices">
              <span className="metric">↓ 41% time to activation</span>
              <div className="clogo">Xneelo</div>
              <p className="cquote">
                &quot;We filled key sales and marketing roles in under a month and cut time to
                activation by 41% with Testlify.&quot;
              </p>
              <div className="cby">
                <span className="cav" style={{ background: '#2A6FDB' }}>
                  CB
                </span>
                <div className="cmeta">
                  <div className="cname">Chrissie Blom</div>
                  <div className="crole">Head of Talent, Xneelo</div>
                </div>
              </div>
            </div>
            <div className="ccard reveal" style={{ transitionDelay: '.06s' }}>
              <span className="metric">96% hiring effectiveness</span>
              <div className="clogo">Virtual Gurus</div>
              <p className="cquote">
                &quot;White-label assessments cut our phone-interview time by 93% and pushed hiring
                effectiveness to 96%.&quot;
              </p>
              <div className="cby">
                <span className="cav" style={{ background: '#1F8A5B' }}>
                  AB
                </span>
                <div className="cmeta">
                  <div className="cname">Abby Belin</div>
                  <div className="crole">Virtual Gurus</div>
                </div>
              </div>
            </div>
            <div className="ccard reveal" style={{ transitionDelay: '.12s' }}>
              <span className="metric">↓ 35% poor hiring fits</span>
              <div className="clogo">Kimp</div>
              <p className="cquote">
                &quot;Skill-based assessments reduced poor hiring fits by 35% and cut turnover by
                20%.&quot;
              </p>
              <div className="cby">
                <span className="cav" style={{ background: '#B8521A' }}>
                  SV
                </span>
                <div className="cmeta">
                  <div className="cname">Senthu Velnayagam</div>
                  <div className="crole">Kimp</div>
                </div>
              </div>
            </div>
            <div className="ccard reveal">
              <span className="metric">83% hiring effectiveness</span>
              <div className="clogo">Endiprev</div>
              <p className="cquote">
                &quot;Skills assessments cut our blue-collar turnover and improved hiring
                effectiveness by 83%.&quot;
              </p>
              <div className="cby">
                <span className="cav" style={{ background: '#6B3FA0' }}>
                  DS
                </span>
                <div className="cmeta">
                  <div className="cname">Daniela Santos</div>
                  <div className="crole">Endiprev</div>
                </div>
              </div>
            </div>
            <div className="ccard reveal" style={{ transitionDelay: '.06s' }}>
              <span className="metric">116 hires in 45 days</span>
              <div className="clogo">Gorin Systems</div>
              <p className="cquote">
                &quot;We hired 116 fresh graduates in 45 days using Testlify&apos;s campus
                recruitment assessments.&quot;
              </p>
              <div className="cby">
                <span className="cav" style={{ background: '#C0242B' }}>
                  GS
                </span>
                <div className="cmeta">
                  <div className="cname">Gorin Systems</div>
                  <div className="crole">Software Development</div>
                </div>
              </div>
            </div>
            <div className="ccard reveal" style={{ transitionDelay: '.12s' }}>
              <span className="metric">↓ 75% candidate drop-offs</span>
              <div className="clogo">Unity Communications</div>
              <p className="cquote">
                &quot;Testlify cut candidate drop-offs by 75% and improved new-hire retention by
                30%.&quot;
              </p>
              <div className="cby">
                <span className="cav" style={{ background: '#16607A' }}>
                  UC
                </span>
                <div className="cmeta">
                  <div className="cname">Unity Communications</div>
                  <div className="crole">Outsourcing &amp; Offshoring</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CtaBand />
      <SiteFooter />
    </>
  );
}
