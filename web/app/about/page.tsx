"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import CtaButton from "@/components/CtaButton";
import CtaBand from "@/components/CtaBand";

const css = `
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
.reveal{opacity:0;transform:translateY(26px);transition:opacity .7s cubic-bezier(.2,.7,.2,1), transform .7s cubic-bezier(.2,.7,.2,1);}
.reveal.in{opacity:1;transform:none;}
.ahero{padding:64px 28px 40px;background:radial-gradient(1100px 520px at 50% -10%,#FFF0EE 0%,rgba(255,240,238,0) 62%),#fff;text-align:center;}
.statgrid{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;text-align:center;}
.statn{font-size:52px;font-weight:800;letter-spacing:-2px;color:#F23F44;line-height:1;}
.metricrow{display:grid;grid-template-columns:repeat(4,1fr);}
.metric{text-align:center;padding:4px 22px;}
.metric + .metric{border-left:1px solid #EFE3E4;}
.metricnum{font-size:34px;font-weight:700;letter-spacing:-1px;line-height:1;color:#1A1014;font-variant-numeric:tabular-nums;}
.metricnum .u{color:#D98C8F;font-weight:600;}
.metriclbl{font-size:14px;color:#6C5A5D;font-weight:500;margin-top:10px;line-height:1.45;}
.valgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;}
.valcard{background:#fff;border:1px solid #EFE2E3;border-radius:20px;padding:30px 26px;transition:transform .25s ease, box-shadow .25s ease, border-color .25s;}
.valcard:hover{transform:translateY(-4px);box-shadow:0 22px 46px rgba(110,11,14,.10);border-color:#F4D2D3;}
.valic{width:46px;height:46px;border-radius:13px;background:#FFF0F0;color:#F23F44;display:flex;align-items:center;justify-content:center;margin-bottom:18px;}
.team{display:grid;grid-template-columns:repeat(4,1fr);gap:18px;}
.tmember{text-align:center;}
.tav{width:96px;height:96px;border-radius:50%;margin:0 auto 14px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:800;font-size:30px;}
.tname{font-size:16px;font-weight:700;margin:0;}
.trole{font-size:13px;color:#9A878A;margin:4px 0 0;}
.tl{position:relative;padding-left:30px;border-left:2px solid #F1DDDE;display:flex;flex-direction:column;gap:30px;}
.tlitem{position:relative;}
.tldot{position:absolute;left:-39px;top:2px;width:16px;height:16px;border-radius:50%;background:#F23F44;border:4px solid #fff;box-shadow:0 0 0 2px #F4D2D3;}
.tlyear{font-size:14px;font-weight:800;color:#F23F44;margin:0 0 4px;}
@media(max-width:920px){
  .h1{font-size:42px;letter-spacing:-1.4px;}
  .h2{font-size:32px;letter-spacing:-1px;}
  .sec{padding:72px 22px;}
  .statgrid{grid-template-columns:1fr 1fr;}
  .metricrow{grid-template-columns:repeat(2,1fr);row-gap:34px;}
  .metric + .metric{border-left:none;}
  .valgrid{grid-template-columns:1fr;}
  .team{grid-template-columns:1fr 1fr;}
}

h1,h2,h3,h4,.h1,.h2,.h3,.hero h1,.eyebrow{text-wrap:balance;}p,li,.body,.lead,.sub,figcaption,blockquote{text-wrap:pretty;}/*om-balance-rule*/
`;

export default function AboutPage() {
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const row = rowRef.current;
    if (!row) return;
    const runCount = (el: HTMLElement) => {
      const to = +(el.dataset.to || "0");
      const comma = el.dataset.comma === "1";
      const dec = +(el.dataset.dec || 0);
      const dur = 1500;
      let st: number | null = null;
      const fmt = (n: number) => {
        if (dec) return n.toFixed(dec);
        const r = Math.round(n);
        return comma ? r.toLocaleString("en-US") : String(r);
      };
      const tick = (t: number) => {
        if (st === null) st = t;
        const p = Math.min(1, (t - st) / dur);
        const e = 1 - Math.pow(1 - p, 3);
        el.textContent = fmt(to * e);
        if (p < 1) requestAnimationFrame(tick);
        else el.textContent = fmt(to);
      };
      requestAnimationFrame(tick);
    };
    const io = new IntersectionObserver(
      (ents) => {
        ents.forEach((en) => {
          if (en.isIntersecting) {
            en.target
              .querySelectorAll<HTMLElement>(".v[data-to]")
              .forEach(runCount);
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(row);
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <SiteHeader announcement="We're hiring across product, engineering and GTM" />
      <section className="ahero">
        <div className="wrap" style={{ maxWidth: "840px" }}>
          <p className="eyebrow reveal">
            About us<b>.</b>
          </p>
          <h1 className="h1 reveal" style={{ transitionDelay: ".04s" }}>
            Hiring should be<br />about skill, not luck
          </h1>
          <p
            className="lead reveal"
            style={{ margin: "22px auto 0", maxWidth: "620px", transitionDelay: ".08s" }}
          >
            We started Testlify because the best person for a job is so often missed — filtered out by a keyword, a school, or a gut feeling. We&apos;re building the platform that puts proven ability first.
          </p>
        </div>
      </section>
      <section style={{ padding: "30px 28px 0" }}>
        <div className="wrap">
          <div className="metricrow reveal" ref={rowRef}>
            <div className="metric">
              <div className="metricnum">
                <span className="v" data-to="12000" data-comma="1">0</span>
                <span className="u">+</span>
              </div>
              <div className="metriclbl">teams hiring with us</div>
            </div>
            <div className="metric">
              <div className="metricnum">
                <span className="v" data-to="3500" data-comma="1">0</span>
                <span className="u">+</span>
              </div>
              <div className="metriclbl">validated tests</div>
            </div>
            <div className="metric">
              <div className="metricnum">
                <span className="v" data-to="8">0</span>
                <span className="u">M+</span>
              </div>
              <div className="metriclbl">assessments taken</div>
            </div>
            <div className="metric">
              <div className="metricnum">
                <span className="v" data-to="120">0</span>
                <span className="u">+</span>
              </div>
              <div className="metriclbl">countries served</div>
            </div>
          </div>
        </div>
      </section>
      <section className="sec">
        <div
          className="wrap"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "60px",
            alignItems: "center",
          }}
        >
          <div className="reveal">
            <p className="eyebrow">
              Our mission<b>.</b>
            </p>
            <h2 className="h2" style={{ marginBottom: "20px" }}>
              Open the door to opportunity for everyone
            </h2>
            <p className="body">
              Talent is everywhere — opportunity isn&apos;t. Traditional hiring rewards the candidates who look right on paper and quietly overlooks millions of others.
            </p>
            <p className="body" style={{ marginTop: "14px" }}>
              Testlify replaces guesswork with evidence. By measuring what people can actually do, we help companies find better hires while giving every candidate a fair shot, regardless of background.
            </p>
          </div>
          <div
            className="reveal"
            style={{
              transitionDelay: ".08s",
              background: "linear-gradient(160deg,#FFF4F3,#FBE9E9)",
              border: "1px solid #F6DCDD",
              borderRadius: "24px",
              padding: "40px",
            }}
          >
            <p
              className="h3"
              style={{ fontSize: "24px", lineHeight: "1.4", fontWeight: 600 }}
            >
              &quot;The question was never &apos;who has the best résumé?&apos; It was always &apos;who can do the job best?&apos; We built Testlify to finally answer it.&quot;
            </p>
            <p
              className="body"
              style={{
                fontSize: "14px",
                marginTop: "20px",
                fontWeight: 600,
                color: "#1A1014",
              }}
            >
              — The Testlify founders
            </p>
          </div>
        </div>
      </section>
      <section className="sec" style={{ background: "#FBF3EE" }}>
        <div className="wrap">
          <div style={{ maxWidth: "640px", margin: "0 auto 44px", textAlign: "center" }}>
            <p className="eyebrow reveal">
              Our values<b>.</b>
            </p>
            <h2 className="h2 reveal" style={{ transitionDelay: ".04s" }}>
              What we stand for
            </h2>
          </div>
          <div className="valgrid">
            <div className="valcard reveal">
              <span className="valic">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </span>
              <h3 className="h3" style={{ fontSize: "18px", marginBottom: "8px" }}>
                Fairness first
              </h3>
              <p className="body" style={{ fontSize: "14px" }}>
                Every product decision starts with one question: does this make hiring more fair?
              </p>
            </div>
            <div className="valcard reveal" style={{ transitionDelay: ".06s" }}>
              <span className="valic">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
              </span>
              <h3 className="h3" style={{ fontSize: "18px", marginBottom: "8px" }}>
                Evidence over opinion
              </h3>
              <p className="body" style={{ fontSize: "14px" }}>
                We trust data, run the experiment, and let results — not hierarchy — win the argument.
              </p>
            </div>
            <div className="valcard reveal" style={{ transitionDelay: ".12s" }}>
              <span className="valic">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9z"></path>
                </svg>
              </span>
              <h3 className="h3" style={{ fontSize: "18px", marginBottom: "8px" }}>
                Move with urgency
              </h3>
              <p className="body" style={{ fontSize: "14px" }}>
                Hiring teams can&apos;t wait. We ship fast, learn faster, and obsess over our customers&apos; time.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="sec">
        <div className="wrap">
          <div style={{ maxWidth: "640px", margin: "0 auto 44px", textAlign: "center" }}>
            <p className="eyebrow reveal">
              Leadership<b>.</b>
            </p>
            <h2 className="h2 reveal" style={{ transitionDelay: ".04s" }}>
              The team behind Testlify
            </h2>
          </div>
          <div className="team">
            <div className="tmember reveal">
              <div className="tav" style={{ background: "#F23F44" }}>AR</div>
              <p className="tname">Aditya Rao</p>
              <p className="trole">Co-founder &amp; CEO</p>
            </div>
            <div className="tmember reveal" style={{ transitionDelay: ".05s" }}>
              <div className="tav" style={{ background: "#2A6FDB" }}>SK</div>
              <p className="tname">Sneha Kulkarni</p>
              <p className="trole">Co-founder &amp; CPO</p>
            </div>
            <div className="tmember reveal" style={{ transitionDelay: ".1s" }}>
              <div className="tav" style={{ background: "#1F8A5B" }}>DM</div>
              <p className="tname">Daniel Mwangi</p>
              <p className="trole">VP Engineering</p>
            </div>
            <div className="tmember reveal" style={{ transitionDelay: ".15s" }}>
              <div className="tav" style={{ background: "#6B3FA0" }}>EL</div>
              <p className="tname">Elena Costa</p>
              <p className="trole">VP Customer Success</p>
            </div>
          </div>
        </div>
      </section>
      <section className="sec" style={{ background: "#FBF3EE" }}>
        <div className="wrap" style={{ maxWidth: "760px" }}>
          <div style={{ margin: "0 auto 44px", textAlign: "center" }}>
            <p className="eyebrow reveal">
              Our journey<b>.</b>
            </p>
            <h2 className="h2 reveal" style={{ transitionDelay: ".04s" }}>
              From idea to 12,000 teams
            </h2>
          </div>
          <div className="tl reveal">
            <div className="tlitem">
              <span className="tldot"></span>
              <p className="tlyear">2021</p>
              <p className="body" style={{ fontSize: "15px" }}>
                Testlify is founded with a simple test library and a big belief: skills should come first.
              </p>
            </div>
            <div className="tlitem">
              <span className="tldot"></span>
              <p className="tlyear">2022</p>
              <p className="body" style={{ fontSize: "15px" }}>
                We cross 1,000 hiring teams and launch coding assessments and anti-cheat proctoring.
              </p>
            </div>
            <div className="tlitem">
              <span className="tldot"></span>
              <p className="tlyear">2023</p>
              <p className="body" style={{ fontSize: "15px" }}>
                Video interviewing and our first AI scoring models ship; the library passes 3,000 tests.
              </p>
            </div>
            <div className="tlitem">
              <span className="tldot"></span>
              <p className="tlyear">2025</p>
              <p className="body" style={{ fontSize: "15px" }}>
                Testlify AI launches — conversational screening and interviewing that reads every applicant.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        className="sec"
        style={{ background: "#1A1014", color: "#fff", textAlign: "center" }}
      >
        <div className="wrap" style={{ maxWidth: "720px" }}>
          <h2 className="h2 reveal" style={{ color: "#fff" }}>
            Come build the future of hiring
          </h2>
          <p
            className="lead reveal"
            style={{
              color: "rgba(255,255,255,.78)",
              margin: "18px auto 30px",
              transitionDelay: ".04s",
            }}
          >
            We&apos;re a remote-first team on a mission to make hiring fair. We&apos;d love to meet you.
          </p>
          <div
            className="reveal"
            style={{
              display: "flex",
              gap: "14px",
              justifyContent: "center",
              flexWrap: "wrap",
              transitionDelay: ".08s",
            }}
          >
            <CtaButton label="View open roles" href="/careers" variant="light" size="md" icon="arrow" />
            <CtaButton label="Contact us" href="#" variant="outline-light" size="md" icon="none" />
          </div>
        </div>
      </section>
      <CtaBand />
      <SiteFooter />
    </>
  );
}
