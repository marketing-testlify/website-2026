'use client';

import { useState } from 'react';
import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaButton from '@/components/CtaButton';
import CtaBand from '@/components/CtaBand';

const css = `
.genout{background:#fff;border:1px solid #F0E2E3;border-radius:22px;padding:34px 36px;box-shadow:0 20px 44px rgba(110,11,14,.08);}
.jdh{font-size:26px;font-weight:800;letter-spacing:-.6px;margin:0 0 4px;color:#1A1014;}
.jdmeta{font-size:13.5px;color:#8A7A7D;font-weight:600;margin:0 0 22px;}
.jdsh{font-size:13px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:#F23F44;margin:22px 0 10px;}
.jdp{font-size:15px;line-height:1.65;color:#5A4B4E;margin:0;}
.jdul{margin:0;padding-left:20px;}
.jdul li{font-size:15px;line-height:1.6;color:#5A4B4E;margin-bottom:7px;}
.tselect{width:100%;height:50px;border:1.5px solid #EADDDE;border-radius:12px;padding:0 14px;font-family:inherit;font-size:15px;font-weight:600;color:#1A1014;background:#FCFAFA;}
.tselect:focus{outline:none;border-color:#F23F44;box-shadow:0 0 0 4px rgba(242,63,68,.12);background:#fff;}
`;

export default function JobDescriptionGeneratorPage() {
  const [state, setState] = useState({
    title: 'Senior Product Designer',
    company: 'Acme',
    location: 'Remote',
    type: 'Full-time',
    skills: 'UX design, prototyping, design systems',
  });

  const bind = (k: keyof typeof state) => (
    e: React.SyntheticEvent<HTMLInputElement | HTMLSelectElement>,
  ) => setState((s) => ({ ...s, [k]: e.currentTarget.value }));

  const s = state;
  const title = s.title || 'This role';
  const company = s.company || 'Our company';
  const location = s.location || 'Remote';
  const skillList = (s.skills || '').split(',').map((x) => x.trim()).filter(Boolean);
  const skillsPhrase = skillList.length ? skillList.slice(0, 3).join(', ') : 'the core skills for this role';
  const about = `${company} is looking for a ${title} to join our team in ${location}. You'll play a key role in our success, bringing strong ${skillsPhrase} and a bias for impact. We hire for what people can do — so if you can prove the skills, we want to meet you.`;
  const responsibilities = [
    `Own and deliver work that draws on ${skillList[0] || 'your core skills'} day to day.`,
    `Collaborate across teams to move projects from idea to done.`,
    `Raise the bar on quality and share what you learn with the team.`,
    `Measure your impact and iterate based on results, not opinions.`,
  ];
  const requirements = [
    skillList.length ? `Proven strength in ${skillsPhrase}.` : 'Proven strength in the core skills for this role.',
    `Experience delivering results in a ${s.type.toLowerCase()} setting.`,
    `Clear communication and a collaborative, ownership mindset.`,
    `A track record you can demonstrate — we assess skills, not just resumes.`,
  ];
  const hiring = `Shortlisted candidates complete a short skills assessment so everyone gets a fair, objective shot — no gut-feel screening. We aim to keep the process quick and respectful of your time.`;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <SiteHeader announcement="Free HR tools — calculators, templates and interview kits." announcementCta="Browse tools" />

      <section className="tsec" style={{ background: 'radial-gradient(1000px 500px at 80% 4%,#FFF0EE 0%,rgba(255,240,238,0) 60%),#fff' }}>
        <div className="tw">
          <div className="tcrumb reveal">
            <Link href="/blog">Resources</Link><span>/</span><Link href="/hr-tools">HR tools</Link><span>/</span><span>Job description generator</span>
          </div>
          <div style={{ maxWidth: '720px' }}>
            <p className="eyebrow reveal">Job description generator<b>.</b></p>
            <h1 className="th1 reveal" style={{ transitionDelay: '.04s' }}>Write a great job description, fast</h1>
            <p className="tlead reveal" style={{ transitionDelay: '.08s' }}>Fill in a few details and get a clear, structured, skills-first job description you can copy, tweak and post in minutes.</p>
          </div>
        </div>
      </section>

      <section className="tsec" style={{ background: '#FBF3EE', paddingTop: '40px' }}>
        <div className="tw">
          <div className="tcalc reveal" style={{ gridTemplateColumns: '0.85fr 1.15fr' }}>
            <div className="tcard" style={{ alignSelf: 'start' }}>
              <p className="eyebrow" style={{ marginBottom: '22px' }}>The role<b>.</b></p>
              <div className="tfield"><label>Job title</label><input className="tinput" type="text" value={s.title} onInput={bind('title')} onChange={bind('title')} /></div>
              <div className="tfield"><label>Company</label><input className="tinput" type="text" value={s.company} onInput={bind('company')} onChange={bind('company')} /></div>
              <div className="tfield"><label>Location</label><input className="tinput" type="text" value={s.location} onInput={bind('location')} onChange={bind('location')} /></div>
              <div className="tfield"><label>Employment type</label><select className="tselect" value={s.type} onChange={bind('type')}><option value="Full-time">Full-time</option><option value="Part-time">Part-time</option><option value="Contract">Contract</option><option value="Internship">Internship</option></select></div>
              <div className="tfield" style={{ marginBottom: 0 }}><label>Key skills <span className="thint">comma separated</span></label><input className="tinput" type="text" value={s.skills} onInput={bind('skills')} onChange={bind('skills')} /></div>
            </div>
            <div className="genout">
              <p className="jdh">{title}</p>
              <p className="jdmeta">{company} · {location} · {s.type}</p>
              <p className="jdsh">About the role</p>
              <p className="jdp">{about}</p>
              <p className="jdsh">What you&apos;ll do</p>
              <ul className="jdul">{responsibilities.map((r, i) => <li key={i}>{r}</li>)}</ul>
              <p className="jdsh">What you&apos;ll bring</p>
              <ul className="jdul">{requirements.map((req, i) => <li key={i}>{req}</li>)}</ul>
              <p className="jdsh">How we hire</p>
              <p className="jdp">{hiring}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="tsec">
        <div className="tw">
          <div style={{ maxWidth: '640px' }}>
            <p className="eyebrow reveal">Then hire on skill<b>.</b></p>
            <h2 className="th2 reveal" style={{ transitionDelay: '.04s' }}>A great JD deserves a fair process</h2>
            <p className="tlead reveal" style={{ transitionDelay: '.08s' }}>Once your role is live, screen applicants on verified skill — not just what&apos;s on the resume — with Testlify&apos;s 3,500+ validated tests.</p>
            <div className="reveal" style={{ marginTop: '26px' }}>
              <CtaButton label="Browse the test library" href="/test-library" variant="primary" size="md" icon="arrow" />
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
