"use client";

import { useState } from "react";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import CtaButton from "@/components/CtaButton";
import CtaBand from "@/components/CtaBand";

const css = `
.genout{background:#fff;border:1px solid #F0E2E3;border-radius:22px;padding:30px 32px;box-shadow:0 20px 44px rgba(110,11,14,.08);min-height:360px;}
.qitem{display:grid;grid-template-columns:30px 1fr;gap:14px;padding:16px 0;border-top:1px solid #F4EAEA;}
.qitem:first-of-type{border-top:none;}
.qn{width:28px;height:28px;border-radius:8px;background:#FFF0F0;color:#F23F44;font-weight:800;font-size:13px;display:flex;align-items:center;justify-content:center;}
.qtag{display:inline-block;font-size:11px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;color:#8A7A7D;margin-bottom:4px;}
.qtext{font-size:15.5px;line-height:1.55;color:#1A1014;font-weight:500;margin:0;}
.tselect{width:100%;height:50px;border:1.5px solid #EADDDE;border-radius:12px;padding:0 14px;font-family:inherit;font-size:15px;font-weight:600;color:#1A1014;background:#FCFAFA;}
.tselect:focus{outline:none;border-color:#F23F44;box-shadow:0 0 0 4px rgba(242,63,68,.12);background:#fff;}
`;

export default function Page() {
  const [role, setRole] = useState("Product Manager");
  const [skill, setSkill] = useState("Prioritisation");
  const [level, setLevel] = useState("Mid-level");
  const [count, setCount] = useState(8);

  const roleV = role || "this role";
  const skillV = skill || "the core skill";
  const lvl = level;
  const s = skillV.toLowerCase();
  const r = roleV.toLowerCase();

  const bank = [
    { tag: "Behavioural", text: `Tell me about a time your ${s} made a measurable difference in a ${r} role.` },
    { tag: "Technical", text: `How do you approach ${s} when the requirements are ambiguous or changing?` },
    { tag: "Situational", text: `Imagine a stakeholder disagrees with your ${s} decision. How do you handle it?` },
    { tag: "Behavioural", text: `Describe the hardest ${r} problem you've solved and the role ${s} played.` },
    { tag: "Technical", text: `What tools, frameworks or methods do you rely on for ${s}, and why?` },
    { tag: "Situational", text: `You're under a tight deadline and ${s} is slipping. What do you prioritise?` },
    { tag: "Behavioural", text: `Give an example of feedback that improved your ${s}. What changed?` },
    { tag: "Technical", text: `How would you measure success for ${s} in this ${r} position?` },
    { tag: "Situational", text: `A ${lvl.toLowerCase()} teammate asks you to explain ${s}. How do you coach them?` },
    { tag: "Behavioural", text: `Tell me about a ${s} decision you got wrong. What did you learn?` },
  ];
  const n = Math.max(1, Math.min(10, count));
  const questions = bank.slice(0, n).map((q, i) => ({ n: i + 1, tag: q.tag, text: q.text }));

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <SiteHeader announcement="Free HR tools — calculators, templates and interview kits." announcementCta="Browse tools" />

      <section className="tsec" style={{ background: "radial-gradient(1000px 500px at 80% 4%,#FFF0EE 0%,rgba(255,240,238,0) 60%),#fff" }}>
        <div className="tw">
          <div className="tcrumb reveal">
            <Link href="/blog">Resources</Link><span>/</span>
            <Link href="/hr-tools">HR tools</Link><span>/</span>
            <span>AI interview question generator</span>
          </div>
          <div style={{ maxWidth: 720 }}>
            <p className="eyebrow reveal">AI interview question generator<b>.</b></p>
            <h1 className="th1 reveal" style={{ transitionDelay: ".04s" }}>Generate interview questions in seconds</h1>
            <p className="tlead reveal" style={{ transitionDelay: ".08s" }}>Enter the role, focus skill and seniority and instantly get a structured set of interview questions — behavioural, technical and situational — ready to use.</p>
          </div>
        </div>
      </section>

      <section className="tsec" style={{ background: "#FBF3EE", paddingTop: 40 }}>
        <div className="tw">
          <div className="tcalc reveal" style={{ gridTemplateColumns: "0.85fr 1.15fr" }}>
            <div className="tcard" style={{ alignSelf: "start" }}>
              <p className="eyebrow" style={{ marginBottom: 22 }}>Your role<b>.</b></p>
              <div className="tfield"><label>Job title</label><input className="tinput" type="text" value={role} onInput={(e) => setRole((e.target as HTMLInputElement).value)} onChange={(e) => setRole(e.target.value)} /></div>
              <div className="tfield"><label>Focus skill</label><input className="tinput" type="text" value={skill} onInput={(e) => setSkill((e.target as HTMLInputElement).value)} onChange={(e) => setSkill(e.target.value)} /></div>
              <div className="tfield"><label>Seniority</label>
                <select className="tselect" value={level} onChange={(e) => setLevel(e.target.value)}>
                  <option value="Junior">Junior</option>
                  <option value="Mid-level">Mid-level</option>
                  <option value="Senior">Senior</option>
                  <option value="Lead">Lead</option>
                </select>
              </div>
              <div className="tfield" style={{ marginBottom: 0 }}><label>Number of questions</label>
                <select className="tselect" value={count} onChange={(e) => setCount(parseInt(e.target.value, 10) || 8)}>
                  <option value="5">5</option>
                  <option value="8">8</option>
                  <option value="10">10</option>
                </select>
              </div>
            </div>
            <div className="genout">
              <p className="eyebrow" style={{ marginBottom: 6 }}>{roleV} · {lvl}<b>.</b></p>
              <p className="tbody" style={{ fontSize: "13.5px", margin: "0 0 8px", color: "#8A7A7D" }}>Focus: {skillV}</p>
              {questions.map((q) => (
                <div className="qitem" key={q.n}>
                  <div className="qn">{q.n}</div>
                  <div><span className="qtag">{q.tag}</span><p className="qtext">{q.text}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="tsec">
        <div className="tw">
          <div style={{ maxWidth: 640 }}>
            <p className="eyebrow reveal">Beyond questions<b>.</b></p>
            <h2 className="th2 reveal" style={{ transitionDelay: ".04s" }}>Score answers, not just ask them</h2>
            <p className="tlead reveal" style={{ transitionDelay: ".08s" }}>Good questions are a start. Testlify's AI interviews run and score video, audio and chat interviews automatically — so every candidate is assessed consistently and fairly.</p>
            <div className="reveal" style={{ marginTop: 26 }}>
              <CtaButton label="Explore AI interviews" href="/interviews" variant="primary" size="md" icon="arrow" />
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
