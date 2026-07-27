'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaBand from '@/components/CtaBand';

const CSS = `
*{box-sizing:border-box;}
html{scroll-behavior:smooth;}
body{margin:0;font-family:'Poppins',sans-serif;-webkit-font-smoothing:antialiased;color:#1A1014;background:#fff;}
a{text-decoration:none;color:inherit;}
.gl-wrap{max-width:1240px;margin:0 auto;padding:0 28px;}
[data-reveal]{opacity:0;transform:translateY(24px);}
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
/* A-Z filter pills */
.gl-alpha{position:sticky;top:64px;z-index:20;background:rgba(255,255,255,.92);backdrop-filter:blur(10px);border-top:1px solid #F4E7E8;border-bottom:1px solid #F4E7E8;padding:14px 0;}
.gl-alphabar{display:flex;flex-wrap:wrap;gap:6px;justify-content:center;}
.gl-al{min-width:33px;height:33px;padding:0 10px;border-radius:9px;display:flex;align-items:center;justify-content:center;font-size:13.5px;font-weight:700;color:#6C5A5D;border:1px solid transparent;background:none;cursor:pointer;font-family:inherit;transition:all .16s;}
.gl-al:hover{background:#FFF0EF;color:#F23F44;}
.gl-al.on{background:#F23F44;color:#fff;}
.gl-al.dis{color:#D9C9CB;cursor:default;}
.gl-al.dis:hover{background:none;color:#D9C9CB;}
/* body */
.gl-body{padding:56px 28px 96px;}
@property --bang{syntax:'<angle>';initial-value:0deg;inherits:false;}
@keyframes runborder{to{--bang:360deg;}}
.gl-list{max-width:1180px;margin:0 auto;display:grid;grid-template-columns:repeat(3,1fr);gap:16px;align-items:start;}
.gl-term{position:relative;display:block;background:#fff;border:1px solid #F2E6E7;border-radius:18px;padding:26px 28px;transition:transform .3s cubic-bezier(.2,.7,.3,1),box-shadow .3s;}
.gl-term:hover{transform:translateY(-4px);box-shadow:0 16px 34px rgba(110,11,14,.10);}
.gl-term::before{content:'';position:absolute;inset:0;border-radius:18px;padding:1.8px;background:conic-gradient(from var(--bang),transparent 0deg,#FF7A52 35deg,#F23F44 80deg,transparent 150deg,transparent 360deg);-webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask-composite:exclude;opacity:0;pointer-events:none;}
.gl-term:hover::before{opacity:1;animation:runborder 2.4s linear infinite;}
.gl-term:hover .gl-tt{color:#F23F44;}
.gl-tt{font-size:20px;font-weight:800;letter-spacing:-.4px;margin:0 0 10px;color:#1A1014;transition:color .2s;}
.gl-td{font-size:14px;line-height:1.58;color:#5A4B4E;margin:0 0 12px;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;}
.gl-more{display:inline-flex;align-items:center;gap:7px;font-size:14px;font-weight:700;color:#F23F44;}
.gl-more svg{transition:transform .2s;}
.gl-term:hover .gl-more svg{transform:translateX(3px);}
.gl-empty{text-align:center;padding:60px 20px;color:#8A7A7D;font-size:16px;}
.gl-empty b{color:#1A1014;}
.gl-pager{display:flex;gap:8px;justify-content:center;align-items:center;margin-top:48px;flex-wrap:wrap;}
.gl-pg{min-width:42px;height:42px;padding:0 10px;display:flex;align-items:center;justify-content:center;border-radius:11px;border:1px solid #EFE2E3;background:#fff;font-size:14px;font-weight:600;color:#6A5A5D;cursor:pointer;font-family:inherit;}
.gl-pg.on{background:#F23F44;color:#fff;border-color:#F23F44;}
.gl-pg:hover:not(.on){border-color:#FBD0D1;color:#1A1014;}
.gl-pgdots{color:#A9999C;padding:0 4px;}
/* letter-request / cta strip */
.gl-strip{background:#FBF3EE;border-radius:22px;padding:44px;display:flex;align-items:center;justify-content:space-between;gap:30px;flex-wrap:wrap;margin-top:20px;}
.gl-strip h3{font-size:24px;font-weight:800;letter-spacing:-.5px;margin:0 0 8px;}
.gl-strip p{font-size:15px;line-height:1.55;color:#6C5A5D;margin:0;max-width:440px;}
@media(max-width:1000px){.gl-list{grid-template-columns:repeat(2,1fr);}}
@media(max-width:640px){.gl-h1{font-size:36px;}.gl-list{grid-template-columns:1fr;}.gl-hero{padding:44px 22px 34px;}.gl-body{padding:40px 22px 64px;}.gl-alpha{top:56px;}}

h1,h2,h3,h4,.h1,.h2,.h3,.hero h1,.eyebrow{text-wrap:balance;}p,li,.body,.lead,.sub,figcaption,blockquote{text-wrap:pretty;}/*om-balance-rule*/
`;

type Term = { term: string; short: string };

const TERMS: Term[] = [
  { term: 'Employer of record (EOR)', short: 'An Employer of Record (usually just called an EOR) is a third-party company that legally employs workers on your behalf in countries where you don’t have your own entity.' },
  { term: 'Zero Based Budgeting', short: 'Zero-based budgeting (ZBB) is a budgeting method in which all expenses must be justified for each new budget period, regardless of whether they were incurred in the prior budget period.' },
  { term: 'Yellow Dog Contract', short: 'A yellow-dog contract is an agreement between an employer and an employee that prohibits the employee from joining or being a member of a labor union while employed by the company.' },
  { term: 'XML and HR-XML (Extensive Markup language)', short: 'XML is a markup language that provides a standardized format for structuring and storing data. HR-XML is a standardized data definition and guidelines for representing human resources information in XML.' },
  { term: 'Wrongful dismissal/ wrongful termination', short: 'Wrongful dismissal is a legal term used to describe a situation where an employee is terminated from their job in a manner that breaches the terms of their employment contract.' },
  { term: 'WorldatWork', short: 'WorldatWork is a global non-profit organization that provides education, certification, research, and advocacy in the field of compensation and total rewards.' },
  { term: 'Workweek', short: 'A workweek is a regularly recurring period of seven consecutive 24-hour periods designated in advance by an employer as the basis for computing regular pay and overtime pay for employees.' },
  { term: 'Position', short: 'A position in HR refers to a specific job or role within an organization, with its own set of duties, responsibilities, and requirements.' },
  { term: 'Market Pricing', short: 'Market Pricing is a HR technique to determine job value and set fair, data-driven compensation.' },
  { term: 'Johari window', short: 'The Johari Window is a model used to improve self-awareness and relationship awareness through communication and self-discovery by dividing self-knowledge into four categories: open, hidden, blind, and unknown.' },
  { term: 'Job Sharing', short: 'Job sharing is a flexible work arrangement where two employees split responsibilities and duties of a full-time job by working part-time schedules that overlap.' },
  { term: 'Hosted Delivery Model', short: 'A hosted delivery model for HR software provides internet-based access, cost savings, scalability, and automatic updates from a third-party provider.' },
  { term: 'Host-country nationals (HCNs)', short: 'Host-country nationals (HCNs) are individuals who are citizens or permanent residents of the country where an organization operates and works, serving as locally hired employees.' },
  { term: 'Host-country', short: 'The host-country is where an organization operates and its HR policies and laws differ from home-country for international assignments.' },
  { term: 'Workplace Relationships', short: 'Workplace relationships refer to the connections and interactions between individuals in a professional setting.' },
  { term: 'Workplace Phobia', short: 'Workplace phobia, also known as work-related social phobia or occupational phobia, is a type of anxiety disorder characterized by intense fear and avoidance of work-related situations.' },
  { term: 'Déformation Professionnelle', short: 'Déformation professionnelle refers to the way a job shapes a person’s behavior and thinking, often resulting in both positive and negative effects on work and personal life.' },
  { term: 'Workplace Health Surveillance', short: 'Workplace health surveillance is the systematic monitoring of the health of workers who are exposed to specific health risks as a result of their work.' },
  { term: 'Workplace Gossip', short: 'Workplace gossip is the sharing of personal, unverified, and often negative information about coworkers, managers, or the organization.' },
  { term: 'Training And Development', short: 'Training and Development refer to the process of acquiring knowledge, skills, and abilities in order to perform a task or job more effectively.' },
  { term: 'Training Needs Analysis', short: 'Training Needs Analysis is the process of identifying the gap between an organization’s current and desired performance, and determining the training and development needs of employees to close that gap.' },
  { term: 'Training', short: 'Training is the process of acquiring knowledge, skills, and abilities in order to perform a task or job more effectively.' },
  { term: 'Traditional Authority', short: 'Traditional Authority is a form of governance that is based on customary laws, traditions, and cultural practices that have been passed down through generations.' },
  { term: 'Workplace Flexibility', short: 'Workplace flexibility refers to the ability for employees to have control over when, where, and how they work, allowing for a better work-life balance and improved job satisfaction.' },
  { term: 'Workplace Deviance', short: 'Workplace deviance refers to behaviors that break organizational norms. This includes theft, harassment, unethical practices, and more.' },
  { term: 'Workplace Democracy', short: 'Workplace democracy is a management style where employees have a say in decision-making and running of a company, leading to a democratic and participatory work environment.' },
  { term: 'What Is Workplace Bullying?', short: 'Workplace bullying is repeated behavior that undermines employees. Learn types, legal status, investigation steps, and enterprise HR prevention policies.' },
  { term: 'Working Capital Management', short: 'Working capital management is the process of efficiently managing a company’s short-term assets and liabilities to balance liquidity and investment in growth, with the goal of financial stability.' },
  { term: 'Workforce Readiness', short: 'Workforce readiness refers to the skills, knowledge, and attributes required for success in the workplace. It impacts both individual and organizational success by promoting productivity, competitiveness, and job satisfaction.' },
  { term: 'Workforce Management Software', short: 'Workforce management software is a tool that helps organizations manage and optimize their workforce, improving productivity, efficiency, and profitability through scheduling, staffing, time tracking, performance management, and budgeting.' },
  { term: 'Absenteeism', short: 'The habitual, unplanned absence of an employee from work, often tracked as a workforce health metric.' },
  { term: 'Applicant Tracking System (ATS)', short: 'Software that manages job applications and moves candidates through each hiring stage.' },
  { term: 'At-Will Employment', short: 'An arrangement where either the employer or employee can end the relationship at any time, for any lawful reason.' },
  { term: 'Attrition Rate', short: 'The rate at which employees leave an organization and are not replaced over a given period.' },
  { term: 'Background Check', short: 'Verification of a candidate’s history — employment, education, criminal or credit records — before hiring.' },
  { term: 'Benefits Administration', short: 'The process of creating, managing and updating the benefits an organization offers its employees.' },
  { term: 'Bereavement Leave', short: 'Paid or unpaid time off granted to an employee following the death of a family member or loved one.' },
  { term: 'Bradford Factor', short: 'A formula that weights frequent short absences more heavily than occasional long ones.' },
  { term: 'Compa-Ratio', short: 'An employee’s pay expressed as a percentage of the midpoint of their salary range.' },
  { term: 'Contingent Worker', short: 'A non-permanent worker — contractor, freelancer or temp — hired for a defined scope or period.' },
  { term: 'Core Competencies', short: 'The defining skills and capabilities that give an organization or role its competitive edge.' },
  { term: 'Deferred Compensation', short: 'Earnings set aside to be paid to an employee at a later date, such as retirement.' },
  { term: 'Diversity, Equity & Inclusion (DEI)', short: 'Practices that build a fair, representative and inclusive workforce.' },
  { term: 'Employee Engagement', short: 'The degree of emotional commitment employees have to their organization and its goals.' },
  { term: 'Exit Interview', short: 'A conversation with a departing employee to understand why they are leaving and improve retention.' },
  { term: 'Full-Time Equivalent (FTE)', short: 'A unit that expresses a workload as the equivalent number of full-time employees.' },
  { term: 'Garnishment', short: 'A legal process where a portion of an employee’s wages is withheld to pay a debt.' },
  { term: 'Gig Economy', short: 'A labor market built on short-term, flexible and freelance work rather than permanent jobs.' },
  { term: 'Grievance', short: 'A formal complaint raised by an employee about a workplace issue or breach of policy.' },
  { term: 'Gross Pay', short: 'An employee’s total earnings before taxes and deductions are taken out.' },
  { term: 'Headcount', short: 'The total number of employees on an organization’s payroll at a given time.' },
  { term: 'Human Capital Management (HCM)', short: 'The set of practices for recruiting, managing and developing an organization’s workforce.' },
  { term: 'Independent Contractor', short: 'A self-employed worker engaged for a specific task, not treated as an employee for tax or benefits.' },
  { term: 'Job Analysis', short: 'A systematic study of a role’s tasks and requirements to define what to assess and expect.' },
  { term: 'Job Description', short: 'A written summary of a role’s duties, responsibilities, requirements and reporting lines.' },
  { term: 'Key Performance Indicator (KPI)', short: 'A measurable value that shows how effectively a person or team is meeting an objective.' },
  { term: 'Knowledge Management', short: 'Capturing, organizing and sharing an organization’s collective knowledge and expertise.' },
  { term: 'Learning Management System (LMS)', short: 'Software for delivering, tracking and managing employee training and courses.' },
  { term: 'Leave of Absence', short: 'An approved period away from work, paid or unpaid, while remaining employed.' },
  { term: 'Merit Increase', short: 'A pay raise awarded on the basis of an employee’s performance rather than tenure or cost of living.' },
  { term: 'Net Pay', short: 'The amount an employee actually takes home after all taxes and deductions.' },
  { term: 'Non-Compete Agreement', short: 'A contract restricting an employee from working for competitors for a set time after leaving.' },
  { term: 'Offboarding', short: 'The structured process of separating an employee from an organization when they leave.' },
  { term: 'Onboarding', short: 'The process of integrating and equipping a new hire to be productive quickly.' },
  { term: 'Organizational Development', short: 'A planned effort to improve an organization’s effectiveness, culture and capacity to change.' },
  { term: 'Performance Appraisal', short: 'A structured review of an employee’s job performance against expectations and goals.' },
  { term: 'Probation Period', short: 'An initial trial phase of employment used to assess a new hire’s suitability.' },
  { term: 'Quality of Hire', short: 'A measure of the value a new hire adds, from performance to retention.' },
  { term: 'Quiet Quitting', short: 'Doing only the minimum a job requires, without going above and beyond, due to disengagement.' },
  { term: 'Recruitment', short: 'The end-to-end process of attracting, screening and selecting people for a role.' },
  { term: 'Retention Rate', short: 'The percentage of employees who remain with an organization over a given period.' },
  { term: 'Severance Pay', short: 'Compensation provided to an employee upon termination, often based on tenure.' },
  { term: 'Succession Planning', short: 'Identifying and developing internal talent to fill key roles as they become vacant.' },
  { term: 'Talent Management', short: 'The full strategy for attracting, developing, motivating and retaining high-performing employees.' },
  { term: 'Time to Hire', short: 'The number of days from a candidate applying to accepting an offer.' },
  { term: 'Turnover Rate', short: 'The rate at which employees leave and are replaced within an organization.' },
  { term: 'Unconscious Bias', short: 'Automatic assumptions that influence decisions without the person realizing it.' },
  { term: 'Upskilling', short: 'Teaching existing employees new skills to keep pace with evolving role requirements.' },
  { term: 'Vesting', short: 'The process by which an employee earns full rights to employer-provided benefits over time.' },
  { term: 'Voluntary Turnover', short: 'Departures initiated by the employee, such as resignations, rather than the employer.' },
  { term: 'Workforce Planning', short: 'Aligning an organization’s workforce with its future business needs and goals.' },
  { term: 'Work-Life Balance', short: 'The equilibrium between an employee’s professional responsibilities and personal life.' },
  { term: 'Zero-Hour Contract', short: 'An agreement with no guaranteed minimum hours; the worker is paid only for time worked.' },
];

const TOTAL = 500;
const PAGE_SIZE = 12;
const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

type PageBtn =
  | { isDots: true }
  | { isBtn: true; label: string; cls: string; go: () => void };

export default function HrGlossaryPage() {
  const [query, setQuery] = useState('');
  const [letter, setLetter] = useState('');
  const [page, setPage] = useState(1);

  const goPage = (n: number) => {
    setPage(n);
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const { filtered, present } = useMemo(() => {
    const q = query.trim().toLowerCase();
    const f = q
      ? TERMS.filter((t) => t.term.toLowerCase().includes(q) || t.short.toLowerCase().includes(q))
      : TERMS;
    const p = new Set(f.map((t) => t.term[0].toUpperCase()));
    return { filtered: f, present: p };
  }, [query]);

  const finalFiltered = useMemo(() => {
    if (!letter) return filtered;
    return filtered.filter((t) => t.term[0].toUpperCase() === letter);
  }, [filtered, letter]);

  const alphabet = ALPHABET.map((L) => ({
    letter: L,
    cls: (present.has(L) ? '' : 'dis') + (letter === L ? ' on' : ''),
    disabled: !present.has(L),
  }));

  const totalPages = Math.max(1, Math.ceil(finalFiltered.length / PAGE_SIZE));
  const curPage = Math.min(page, totalPages);
  const pageTerms = finalFiltered
    .slice((curPage - 1) * PAGE_SIZE, curPage * PAGE_SIZE)
    .map((t) => ({ term: t.term, short: t.short, href: '/hr-glossary-detail' }));

  const pageBtns: PageBtn[] = [];
  for (let n = 1; n <= totalPages; n++) {
    if (n === 1 || n === totalPages || Math.abs(n - curPage) <= 1) {
      pageBtns.push({ isBtn: true, label: String(n), cls: n === curPage ? 'on' : '', go: () => goPage(n) });
    } else {
      const last = pageBtns[pageBtns.length - 1];
      if (last && !('isDots' in last)) pageBtns.push({ isDots: true });
    }
  }
  if (curPage < totalPages) pageBtns.push({ isBtn: true, label: 'Next →', cls: '', go: () => goPage(curPage + 1) });

  const q = query.trim();
  const totalLabel = q || letter ? String(finalFiltered.length) : `${TOTAL}+`;
  const isEmpty = finalFiltered.length === 0;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <SiteHeader
        announcement="The HR Glossary — 500+ hiring & assessment terms, defined in plain English"
        announcementCta="Browse the A–Z"
        homeHref="/"
      />

      <section className="gl-hero">
        <div className="gl-wrap" style={{ maxWidth: 820 }}>
          <div className="gl-crumb">
            <Link href="/blog">Resources</Link>
            <span>/</span>
            <span>HR Glossary</span>
          </div>
          <p className="gl-eyebrow" data-reveal="">
            Glossary<span className="dot">.</span>
          </p>
          <h1 className="gl-h1" data-reveal="" data-delay="60">
            HR Glossary
          </h1>
          <div className="gl-search" data-reveal="" data-delay="170">
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="7"></circle>
              <path d="M21 21l-4.3-4.3"></path>
            </svg>
            <input
              type="text"
              placeholder="Search content"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setPage(1);
              }}
            />
          </div>
          <p className="gl-count" data-reveal="" data-delay="210">
            Showing <b>{finalFiltered.length}</b> of {totalLabel} terms
          </p>
        </div>
      </section>

      <div className="gl-alpha">
        <div className="gl-wrap">
          <div className="gl-alphabar">
            <button
              className={`gl-al ${letter ? '' : 'on'}`}
              onClick={() => {
                setLetter('');
                setPage(1);
              }}
            >
              All
            </button>
            {alphabet.map((a) => (
              <button
                key={a.letter}
                className={`gl-al ${a.cls}`}
                onClick={() => {
                  if (a.disabled) return;
                  setLetter(a.letter);
                  setPage(1);
                }}
              >
                {a.letter}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className="gl-body">
        <div className="gl-wrap">
          {isEmpty && (
            <div className="gl-empty">
              No terms match &ldquo;<b>{q}</b>&rdquo;. Try another word, or{' '}
              <Link href="/contact" style={{ color: '#F23F44', fontWeight: 700 }}>
                suggest a term
              </Link>
              .
            </div>
          )}
          <div className="gl-list">
            {pageTerms.map((t, i) => (
              <Link className="gl-term" href={t.href} key={i}>
                <h2 className="gl-tt">{t.term}</h2>
                <p className="gl-td">{t.short}</p>
                <span className="gl-more">
                  Learn more
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </span>
              </Link>
            ))}
          </div>
          {totalPages > 1 && (
            <div className="gl-pager">
              {pageBtns.map((p, i) =>
                'isDots' in p ? (
                  <span className="gl-pgdots" key={i}>
                    …
                  </span>
                ) : (
                  <button className={`gl-pg ${p.cls}`} onClick={p.go} key={i}>
                    {p.label}
                  </button>
                )
              )}
            </div>
          )}
        </div>
      </section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
