'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaButton from '@/components/CtaButton';
import CtaBand from '@/components/CtaBand';

const CSS = `
*{box-sizing:border-box;}
html{scroll-behavior:smooth;}
body{margin:0;font-family:'Poppins',sans-serif;-webkit-font-smoothing:antialiased;color:#1A1014;background:#fff;}
a{text-decoration:none;color:inherit;}
.gl-wrap{max-width:1240px;margin:0 auto;padding:0 28px;}
.gl-eyebrow{font-size:13px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:#F23F44;margin:0 0 16px;}
.gl-eyebrow .dot{color:#F23F44;}
/* hero */
.gl-hero{position:relative;overflow:hidden;padding:66px 28px 44px;background:radial-gradient(1000px 460px at 50% -12%,#FFF0EE 0%,rgba(255,240,238,0) 62%),#fff;text-align:center;}
.gl-crumb{font-size:13px;color:#8A7A7D;display:flex;gap:8px;align-items:center;justify-content:center;margin-bottom:18px;}
.gl-crumb a:hover{color:#F23F44;}
.gl-h1{font-size:54px;line-height:1.04;font-weight:800;letter-spacing:-1.8px;margin:0;}
.gl-h1 em{font-style:normal;color:#F23F44;}
.gl-sub{font-size:18px;line-height:1.6;color:#5A4B4E;margin:18px auto 0;max-width:600px;}
.gl-search{display:flex;align-items:center;gap:11px;max-width:520px;margin:30px auto 0;background:#fff;border:1.5px solid #F0E2E3;border-radius:14px;padding:13px 18px;box-shadow:0 12px 30px rgba(110,11,14,.07);transition:border-color .2s,box-shadow .2s;}
.gl-search:focus-within{border-color:#FBD0D1;box-shadow:0 12px 34px rgba(242,63,68,.14);}
.gl-search svg{color:#B29A9E;flex:none;}
.gl-search input{border:0;outline:0;font-family:inherit;font-size:16px;color:#1A1014;background:transparent;width:100%;}
.gl-search input::placeholder{color:#B29A9E;}
.gl-count{font-size:13.5px;color:#8A7A7D;font-weight:500;margin-top:16px;}
.gl-count b{color:#F23F44;font-weight:700;}
/* alphabet bar */
.gl-alpha{position:sticky;top:64px;z-index:20;background:rgba(255,255,255,.92);backdrop-filter:blur(10px);border-top:1px solid #F4E7E8;border-bottom:1px solid #F4E7E8;padding:12px 0;}
.gl-alphabar{display:flex;flex-wrap:wrap;gap:5px;justify-content:center;}
.gl-al{width:33px;height:33px;border-radius:9px;display:flex;align-items:center;justify-content:center;font-size:13.5px;font-weight:700;color:#6C5A5D;border:1px solid transparent;background:none;cursor:pointer;font-family:inherit;transition:all .16s;}
.gl-al:hover{background:#FFF0EF;color:#F23F44;}
.gl-al.on{background:#F23F44;color:#fff;}
.gl-al.dis{color:#D9C9CB;cursor:default;}
.gl-al.dis:hover{background:none;color:#D9C9CB;}
/* body */
.gl-body{padding:56px 28px 96px;}
.gl-group{margin-bottom:46px;scroll-margin-top:130px;}
.gl-letter{display:flex;align-items:center;gap:16px;margin:0 0 22px;}
.gl-letter b{font-size:30px;font-weight:800;color:#F23F44;letter-spacing:-1px;width:44px;height:44px;border-radius:12px;background:#FFF0EF;display:flex;align-items:center;justify-content:center;flex:none;}
.gl-letter span{height:1px;flex:1;background:#F0E2E3;}
.gl-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;}
.gl-term{display:block;background:#fff;border:1px solid #F2E6E7;border-radius:15px;padding:20px 22px;transition:transform .3s cubic-bezier(.2,.7,.3,1),border-color .3s,box-shadow .3s;}
.gl-term:hover{transform:translateY(-4px);border-color:#FBD0D1;box-shadow:0 16px 34px rgba(110,11,14,.10);}
.gl-tt{font-size:16.5px;font-weight:700;letter-spacing:-.3px;margin:0 0 7px;display:flex;align-items:center;justify-content:space-between;gap:10px;}
.gl-tt svg{color:#E0B9BC;flex:none;transition:transform .25s,color .25s;}
.gl-term:hover .gl-tt svg{color:#F23F44;transform:translateX(3px);}
.gl-td{font-size:13.5px;line-height:1.55;color:#7C6A6D;margin:0;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;}
.gl-empty{text-align:center;padding:60px 20px;color:#8A7A7D;font-size:16px;}
.gl-empty b{color:#1A1014;}
/* letter-request / cta strip */
.gl-strip{background:#FBF3EE;border-radius:22px;padding:44px;display:flex;align-items:center;justify-content:space-between;gap:30px;flex-wrap:wrap;margin-top:20px;}
.gl-strip h3{font-size:24px;font-weight:800;letter-spacing:-.5px;margin:0 0 8px;}
.gl-strip p{font-size:15px;line-height:1.55;color:#6C5A5D;margin:0;max-width:440px;}
@media(max-width:1000px){.gl-grid{grid-template-columns:repeat(2,1fr);}}
@media(max-width:640px){.gl-h1{font-size:36px;}.gl-grid{grid-template-columns:1fr;}.gl-hero{padding:44px 22px 34px;}.gl-body{padding:40px 22px 64px;}.gl-alpha{top:56px;}}

h1,h2,h3,h4,.h1,.h2,.h3,.hero h1,.eyebrow{text-wrap:balance;}p,li,.body,.lead,.sub,figcaption,blockquote{text-wrap:pretty;}/*om-balance-rule*/
`;

type Term = { term: string; short: string };

const TERMS: Term[] = [
  { term: 'Adverse Impact', short: 'When a hiring practice disproportionately screens out a protected group, even without intent to discriminate.' },
  { term: 'Applicant Tracking System (ATS)', short: 'Software that manages job applications and moves candidates through each hiring stage.' },
  { term: 'Aptitude Test', short: 'An assessment that measures a candidate’s natural ability to learn or perform specific tasks.' },
  { term: 'Assessment', short: 'A structured method of measuring a candidate’s skills, knowledge or traits against the job.' },
  { term: 'Behavioral Interview', short: 'An interview technique that asks about past situations to predict future on-the-job behavior.' },
  { term: 'Benchmarking', short: 'Comparing candidate scores against a role-specific or industry standard to judge fit.' },
  { term: 'Blind Hiring', short: 'Removing identifying details from applications to reduce unconscious bias in screening.' },
  { term: 'Candidate Experience', short: 'The overall impression a candidate forms of your company across the hiring process.' },
  { term: 'Cognitive Ability Test', short: 'A test of reasoning, problem-solving and learning speed — a strong predictor of job performance.' },
  { term: 'Competency', short: 'A measurable skill, knowledge area or behavior required to perform a role well.' },
  { term: 'Cost Per Hire', short: 'The total recruiting spend divided by the number of hires made in a period.' },
  { term: 'Culture Add', short: 'Hiring for the perspectives and strengths a candidate brings that your team currently lacks.' },
  { term: 'Diversity, Equity & Inclusion (DEI)', short: 'Practices that build a fair, representative and inclusive workforce.' },
  { term: 'EEOC Compliance', short: 'Meeting U.S. Equal Employment Opportunity Commission rules against discriminatory hiring.' },
  { term: 'Employer Branding', short: 'How a company presents itself as a place to work to attract and retain talent.' },
  { term: 'Job Analysis', short: 'A systematic study of a role’s tasks and requirements to define what to assess.' },
  { term: 'Job Simulation', short: 'A realistic task that mimics actual work so you can see how a candidate performs.' },
  { term: 'Onboarding', short: 'The process of integrating and equipping a new hire to be productive quickly.' },
  { term: 'Predictive Validity', short: 'How well an assessment score actually forecasts future job performance.' },
  { term: 'Proctoring', short: 'Monitoring an online assessment to keep results honest and defensible.' },
  { term: 'Quality of Hire', short: 'A measure of the value a new hire adds, from performance to retention.' },
  { term: 'Screening', short: 'The early filtering of applicants to identify who is worth a closer look.' },
  { term: 'Situational Judgment Test', short: 'A test presenting realistic scenarios to assess decision-making and judgment.' },
  { term: 'Skills-Based Hiring', short: 'Hiring on proven ability rather than degrees, titles or years of experience.' },
  { term: 'Structured Interview', short: 'A consistent interview using the same questions and scoring for every candidate.' },
  { term: 'Time to Hire', short: 'The number of days from a candidate applying to accepting an offer.' },
  { term: 'Unconscious Bias', short: 'Automatic assumptions that influence hiring decisions without the recruiter realizing.' },
  { term: 'Validity', short: 'The degree to which an assessment measures what it claims to measure.' },
  { term: 'Work Sample Test', short: 'A hands-on task drawn from real job duties to evaluate practical skill.' },
];

const TOTAL = 500;
const DETAIL_HREF = '/hr-glossary-detail';

export default function HrGlossaryPage() {
  const [query, setQuery] = useState('');

  const { groups, present, resultCount, totalLabel, isEmpty } = useMemo(() => {
    const q = query.trim().toLowerCase();
    const filtered = q
      ? TERMS.filter((t) => t.term.toLowerCase().includes(q) || t.short.toLowerCase().includes(q))
      : TERMS;

    const byLetter: Record<string, Term[]> = {};
    filtered.forEach((t) => {
      const L = t.term[0].toUpperCase();
      (byLetter[L] = byLetter[L] || []).push(t);
    });
    const letters = Object.keys(byLetter).sort();
    const groups = letters.map((L) => ({
      letter: L,
      anchor: 'gl-' + L,
      terms: byLetter[L].map((t) => ({ term: t.term, short: t.short, href: DETAIL_HREF })),
    }));

    return {
      groups,
      present: new Set(letters),
      resultCount: filtered.length,
      totalLabel: q ? String(filtered.length) : TOTAL + '+',
      isEmpty: filtered.length === 0,
    };
  }, [query]);

  const jumpTo = (letter: string) => {
    const el = document.getElementById('gl-' + letter);
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 118;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <SiteHeader announcement="The HR Glossary — 500+ hiring & assessment terms, defined in plain English" />

      <section className="gl-hero">
        <div className="gl-wrap" style={{ maxWidth: '820px' }}>
          <div className="gl-crumb">
            <Link href="/blog">Resources</Link>
            <span>/</span>
            <span>HR Glossary</span>
          </div>
          <p className="gl-eyebrow">
            The HR Glossary<span className="dot">.</span>
          </p>
          <h1 className="gl-h1">
            Every hiring term,
            <br />
            <em>defined in plain English</em>
          </h1>
          <p className="gl-sub">
            From adverse impact to zero-based hiring — an A–Z reference for recruiters and HR leaders,
            written to be actually useful, not academic.
          </p>
          <div className="gl-search">
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="7"></circle>
              <path d="M21 21l-4.3-4.3"></path>
            </svg>
            <input
              type="text"
              placeholder="Search 500+ terms…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <p className="gl-count">
            Showing <b>{resultCount}</b> of {totalLabel} terms
          </p>
        </div>
      </section>

      <div className="gl-alpha">
        <div className="gl-wrap">
          <div className="gl-alphabar">
            {alphabet.map((a) => {
              const dis = !present.has(a);
              return (
                <button
                  key={a}
                  className={`gl-al ${dis ? 'dis' : ''}`}
                  onClick={dis ? undefined : () => jumpTo(a)}
                >
                  {a}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <section className="gl-body">
        <div className="gl-wrap">
          {isEmpty && (
            <div className="gl-empty">
              No terms match “<b>{query}</b>”. Try another word, or{' '}
              <Link href="/contact" style={{ color: '#F23F44', fontWeight: 700 }}>
                suggest a term
              </Link>
              .
            </div>
          )}
          {groups.map((g) => (
            <div className="gl-group" id={g.anchor} key={g.anchor}>
              <div className="gl-letter">
                <b>{g.letter}</b>
                <span></span>
              </div>
              <div className="gl-grid">
                {g.terms.map((t, i) => (
                  <Link className="gl-term" href={t.href} key={i}>
                    <span className="gl-tt">
                      {t.term}
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </span>
                    <p className="gl-td">{t.short}</p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
          <div className="gl-strip">
            <div>
              <h3>Can&apos;t find a term?</h3>
              <p>
                The glossary grows every week. Tell us what you&apos;d like defined and we&apos;ll add it — with
                the same plain-English clarity.
              </p>
            </div>
            <CtaButton label="Suggest a term" href="/contact" variant="primary" size="md" icon="arrow" magnetic />
          </div>
        </div>
      </section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
