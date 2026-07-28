'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaBand from '@/components/CtaBand';
import CtaButton from '@/components/CtaButton';
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
.tsteps{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:44px;}
.tstep{background:#fff;border:1px solid #F2E6E7;border-radius:18px;padding:26px;transition:transform .3s cubic-bezier(.2,.7,.3,1),border-color .3s,box-shadow .3s;}
.tstep:hover{transform:translateY(-4px);border-color:#FBD0D1;box-shadow:0 16px 34px rgba(110,11,14,.10);}
.tstepn{width:34px;height:34px;border-radius:10px;background:#FFF0F0;color:#F23F44;font-weight:800;display:flex;align-items:center;justify-content:center;margin-bottom:14px;}
@media(max-width:900px){.tsteps{grid-template-columns:1fr;}}
.genout{background:#fff;border:1px solid #F0E2E3;border-radius:22px;padding:34px 36px;box-shadow:0 20px 44px rgba(110,11,14,.08);}
.jdh{font-size:26px;font-weight:800;letter-spacing:-.6px;margin:0 0 4px;color:#1A1014;}
.jdmeta{font-size:13.5px;color:#8A7A7D;font-weight:600;margin:0 0 22px;}
.jdsh{font-size:13px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:#F23F44;margin:22px 0 10px;}
.jdp{font-size:15px;line-height:1.65;color:#5A4B4E;margin:0;}
.jdul{margin:0;padding-left:20px;}
.jdul li{font-size:15px;line-height:1.6;color:#5A4B4E;margin-bottom:7px;}
.tselect{width:100%;height:50px;border:1.5px solid #EADDDE;border-radius:12px;padding:0 14px;font-family:inherit;font-size:15px;font-weight:600;color:#1A1014;background:#FCFAFA;}
.tselect:focus{outline:none;border-color:#F23F44;box-shadow:0 0 0 4px rgba(242,63,68,.12);background:#fff;}
@media(max-width:900px){.tcalc{grid-template-columns:1fr;}.th1{font-size:38px;letter-spacing:-1px;}.th2{font-size:28px;}.tsec{padding:64px 22px;}}
`;

const FAQ_ITEMS = [
  {
    q: 'What is a job description and why is it important?',
    a: "A job description describes a position’s key roles, responsibilities, and qualifications. It helps attract the right candidates and sets clear expectations for employers and employees.",
  },
  {
    q: 'What is the ideal length of a job description?',
    a: 'The ideal length of a job description is typically 300-700 words or no more than two pages. It should be concise yet detailed, covering responsibilities, skills, and qualifications.',
  },
  {
    q: 'How to write a job description with AI?',
    a: "Simply provide details like title, industry, language, and company name. Testlify’s AI Job Description Generator creates tailored, professional descriptions in seconds, saving time and effort.",
  },
  {
    q: 'What is a generative AI job description?',
    a: 'A generative AI job description is created using AI technology. It ensures clarity, accuracy, and relevance, mimicking the quality of a professionally written description.',
  },
  {
    q: 'How do I write a job description?',
    a: "Job descriptions often take over 2 hours to craft. With Testlify’s job description generator, enter key details like job title and industry, then click to instantly create high-quality, tailored JDs.",
  },
  {
    q: 'Which is the best AI job description generator tool?',
    a: "Testlify’s AI job description generator is built for accuracy, simplicity, and human-like, professional descriptions tailored to your needs.",
  },
];

export default function JobDescriptionGeneratorPage() {
  const [title, setTitle] = useState('Senior Product Designer');
  const [company, setCompany] = useState('Acme');
  const [location, setLocation] = useState('Remote');
  const [type, setType] = useState('Full-time');
  const [skills, setSkills] = useState('UX design, prototyping, design systems');

  const { displayTitle, displayCompany, displayLocation, about, responsibilities, requirements, hiring } =
    useMemo(() => {
      const t = title || 'This role';
      const c = company || 'Our company';
      const l = location || 'Remote';
      const skillList = (skills || '')
        .split(',')
        .map((x) => x.trim())
        .filter(Boolean);
      const skillsPhrase = skillList.length
        ? skillList.slice(0, 3).join(', ')
        : 'the core skills for this role';
      const aboutText = `${c} is looking for a ${t} to join our team in ${l}. You'll play a key role in our success, bringing strong ${skillsPhrase} and a bias for impact. We hire for what people can do — so if you can prove the skills, we want to meet you.`;
      const resp = [
        `Own and deliver work that draws on ${skillList[0] || 'your core skills'} day to day.`,
        `Collaborate across teams to move projects from idea to done.`,
        `Raise the bar on quality and share what you learn with the team.`,
        `Measure your impact and iterate based on results, not opinions.`,
      ];
      const reqs = [
        skillList.length
          ? `Proven strength in ${skillsPhrase}.`
          : 'Proven strength in the core skills for this role.',
        `Experience delivering results in a ${type.toLowerCase()} setting.`,
        `Clear communication and a collaborative, ownership mindset.`,
        `A track record you can demonstrate — we assess skills, not just resumes.`,
      ];
      const hiringText = `Shortlisted candidates complete a short skills assessment so everyone gets a fair, objective shot — no gut-feel screening. We aim to keep the process quick and respectful of your time.`;
      return {
        displayTitle: t,
        displayCompany: c,
        displayLocation: l,
        about: aboutText,
        responsibilities: resp,
        requirements: reqs,
        hiring: hiringText,
      };
    }, [title, company, location, type, skills]);

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
            <span>Job description generator</span>
          </div>
          <div style={{ maxWidth: 720 }}>
            <p className="eyebrow reveal">
              Job description generator<b>.</b>
            </p>
            <h1 className="th1 reveal" style={{ transitionDelay: '.04s' }}>
              Write a great job description, fast
            </h1>
            <p className="tlead reveal" style={{ transitionDelay: '.08s' }}>
              Fill in a few details and get a clear, structured, skills-first job
              description you can copy, tweak and post in minutes.
            </p>
          </div>
        </div>
      </section>

      <section className="tsec" style={{ background: '#FBF3EE', paddingTop: 40 }}>
        <div className="tw">
          <div className="tcalc reveal" style={{ gridTemplateColumns: '0.85fr 1.15fr' }}>
            <div className="tcard" style={{ alignSelf: 'start' }}>
              <p className="eyebrow" style={{ marginBottom: 22 }}>
                The role<b>.</b>
              </p>
              <div className="tfield">
                <label>Job title</label>
                <input
                  className="tinput"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="tfield">
                <label>Company</label>
                <input
                  className="tinput"
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </div>
              <div className="tfield">
                <label>Location</label>
                <input
                  className="tinput"
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              <div className="tfield">
                <label>Employment type</label>
                <select
                  className="tselect"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                >
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Contract">Contract</option>
                  <option value="Internship">Internship</option>
                </select>
              </div>
              <div className="tfield" style={{ marginBottom: 0 }}>
                <label>
                  Key skills <span className="thint">comma separated</span>
                </label>
                <input
                  className="tinput"
                  type="text"
                  value={skills}
                  onChange={(e) => setSkills(e.target.value)}
                />
              </div>
            </div>
            <div className="genout">
              <p className="jdh">{displayTitle}</p>
              <p className="jdmeta">
                {displayCompany} · {displayLocation} · {type}
              </p>
              <p className="jdsh">About the role</p>
              <p className="jdp">{about}</p>
              <p className="jdsh">What you&apos;ll do</p>
              <ul className="jdul">
                {responsibilities.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
              <p className="jdsh">What you&apos;ll bring</p>
              <ul className="jdul">
                {requirements.map((req, i) => (
                  <li key={i}>{req}</li>
                ))}
              </ul>
              <p className="jdsh">How we hire</p>
              <p className="jdp">{hiring}</p>
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
              How to use the job description generator
            </h2>
          </div>
          <div className="tsteps">
            <div className="tstep reveal">
              <div className="tstepn">1</div>
              <h3 className="th2" style={{ fontSize: 19, marginBottom: 8 }}>
                Enter job details
              </h3>
              <p className="tbody" style={{ margin: 0, fontSize: 14.5 }}>
                Fill in the job title, company name, and industry. These details help
                tailor the description to your specific needs.
              </p>
            </div>
            <div className="tstep reveal" style={{ transitionDelay: '.06s' }}>
              <div className="tstepn">2</div>
              <h3 className="th2" style={{ fontSize: 19, marginBottom: 8 }}>
                Choose your language
              </h3>
              <p className="tbody" style={{ margin: 0, fontSize: 14.5 }}>
                Select from English, Spanish, French, German and 6 more languages for
                multilingual, global hiring.
              </p>
            </div>
            <div className="tstep reveal" style={{ transitionDelay: '.12s' }}>
              <div className="tstepn">3</div>
              <h3 className="th2" style={{ fontSize: 19, marginBottom: 8 }}>
                Generate &amp; let AI do the rest
              </h3>
              <p className="tbody" style={{ margin: 0, fontSize: 14.5 }}>
                Hit Generate and get a compelling, industry-specific job description in
                seconds.
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
              Why use an AI-generated job description?
            </h2>
            <p className="tlead reveal" style={{ transitionDelay: '.08s' }}>
              Writing one job description takes over two hours — and 99% of job
              descriptions end up unnecessarily long and tedious. Candidates spend under
              5 seconds deciding if a listing is worth reading, so a bloated JD can cost
              you your best applicants.
            </p>
            <p className="tlead reveal" style={{ transitionDelay: '.1s' }}>
              An AI-generated job description saves time, optimizes for the right
              keywords and skills, and stays concise enough to actually get read.
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

      <section className="tsec">
        <div className="tw">
          <div style={{ maxWidth: 640 }}>
            <p className="eyebrow reveal">
              Then hire on skill<b>.</b>
            </p>
            <h2 className="th2 reveal" style={{ transitionDelay: '.04s' }}>
              A great JD deserves a fair process
            </h2>
            <p className="tlead reveal" style={{ transitionDelay: '.08s' }}>
              Once your role is live, screen applicants on verified skill — not just
              what&apos;s on the resume — with Testlify&apos;s 3,500+ validated tests.
            </p>
            <div className="reveal" style={{ marginTop: 26 }}>
              <CtaButton
                label="Browse the test library"
                href="/test-library"
                variant="primary"
                size="md"
                icon="arrow"
              />
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
