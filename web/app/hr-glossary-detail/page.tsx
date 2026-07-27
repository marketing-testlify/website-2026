'use client';

import { useState } from 'react';
import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaBand from '@/components/CtaBand';

const CSS = `
*{box-sizing:border-box;}
html{scroll-behavior:smooth;}
body{margin:0;font-family:'Poppins',sans-serif;-webkit-font-smoothing:antialiased;color:#1A1014;background:#fff;}
a{text-decoration:none;color:inherit;}
a:hover{color:#F23F44;}
@property --bang{syntax:"<angle>";initial-value:0deg;inherits:false;}
@keyframes runborder{to{--bang:360deg;}}
.artwrap{max-width:760px;margin:0 auto;padding:0 28px;}
.arttop{max-width:1120px;}
.crumb{font-size:13px;color:#9A878A;font-weight:500;margin:14px 0 24px;display:flex;gap:9px;flex-wrap:wrap;align-items:center;}
.crumb a{color:#8A7A7D;font-weight:600;}
.crumb .sep{color:#C9B9BC;}
.crumb .cur{color:#C9B9BC;}
.backlink{display:inline-flex;align-items:center;gap:8px;font-size:13.5px;font-weight:600;color:#F23F44;margin:34px 0 24px;}
.backlink svg{transition:transform .2s;}
.backlink:hover svg{transform:translateX(-3px);}
.reveal{opacity:0;transform:translateY(22px);transition:opacity .7s cubic-bezier(.2,.7,.2,1), transform .7s cubic-bezier(.2,.7,.2,1);}
.reveal.in{opacity:1;transform:none;}
.catpill{display:inline-block;font-size:11.5px;font-weight:700;letter-spacing:.07em;text-transform:uppercase;color:#F23F44;background:#FFF0EF;border-radius:999px;padding:6px 14px;}
.arttitle{font-size:38px;line-height:1.16;font-weight:800;letter-spacing:-1px;margin:0 0 18px;}
.artlead{font-size:19px;line-height:1.6;color:#5A4B4E;margin:0 0 26px;}
.share{display:flex;gap:9px;align-items:center;}
.sbtn{width:38px;height:38px;border-radius:10px;border:1px solid #EFE2E3;display:flex;align-items:center;justify-content:center;color:#6A5A5D;font-weight:700;font-size:13px;transition:all .2s;}
.sbtn:hover{border-color:#FBD0D1;color:#F23F44;transform:translateY(-2px);}
.toc{background:#FBF3EE;border:1px solid #F0E2E3;border-radius:18px;padding:24px 26px;margin:0 0 26px;}
.toc h4{font-size:13px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#8A7A7D;margin:0 0 16px;padding-bottom:14px;border-bottom:1px solid #EADDDE;}
.toc ol{margin:0;padding:0;list-style:none;counter-reset:toc;}
.toc li{counter-increment:toc;position:relative;padding-left:32px;font-size:14.5px;line-height:1.45;margin-bottom:15px;color:#5A4B4E;}
.toc li:last-child{margin-bottom:0;}
.toc li::before{content:counter(toc);position:absolute;left:0;top:-1px;width:22px;height:22px;border-radius:7px;background:#FCE0DE;color:#F23F44;font-size:11.5px;font-weight:700;display:flex;align-items:center;justify-content:center;}
.toc a{color:#5A4B4E;transition:color .2s;}
.toc a:hover{color:#F23F44;}
.artlayout{max-width:1120px;margin:0 auto;padding:0 28px;display:grid;grid-template-columns:260px 1fr;gap:52px;align-items:start;}
.tocside{position:sticky;top:104px;}
.tocside .toc{margin:0;}
.artmain{min-width:0;}
@media(max-width:920px){ .artlayout{grid-template-columns:1fr;gap:0;padding:0;} .tocside{position:static;} .artmain{padding:0 28px;} }
.aichips{border-top:1px solid #F1E6E7;border-bottom:1px solid #F1E6E7;padding:20px 0;margin:0 0 40px;display:flex;align-items:center;gap:12px;flex-wrap:wrap;}
.aichips .lbl{font-size:14px;font-weight:600;color:#6A5A5D;margin-right:2px;}
.aichip{display:inline-flex;align-items:center;gap:8px;border:1px solid #EFE2E3;border-radius:999px;padding:7px 15px 7px 9px;font-size:13.5px;font-weight:600;color:#3A2C30;transition:all .2s;background:#fff;}
.aichip .aichiplogo{width:20px;height:20px;flex:none;border-radius:5px;display:inline-block;background-size:cover;}
.aichip:hover{border-color:#FBD0D1;color:#F23F44;transform:translateY(-2px);box-shadow:0 8px 18px rgba(110,11,14,.08);}
.pp{font-size:17.5px;line-height:1.75;color:#3A2C30;margin:0 0 22px;}
.pp a{color:#F23F44;font-weight:600;}
.ph2{font-size:28px;font-weight:800;letter-spacing:-.6px;margin:46px 0 16px;color:#1A1014;scroll-margin-top:110px;}
.pul{margin:0 0 22px;padding-left:24px;}
.pul li{font-size:17px;line-height:1.7;color:#3A2C30;margin-bottom:9px;}
.pul li b{color:#1A1014;font-weight:700;}
.verdict{background:#FBF3EE;border-left:3px solid #F23F44;border-radius:0 14px 14px 0;padding:22px 26px;margin:10px 0 26px;}
.verdict p{font-size:16px;line-height:1.65;color:#3A2C30;margin:0;font-style:italic;}
.faqsec{max-width:760px;margin:16px auto 0;padding:0 28px;}
.faqsec h2{font-size:28px;font-weight:800;letter-spacing:-.6px;margin:0 0 22px;}
.afaqi{border-bottom:1px solid #F0E2E3;padding:20px 2px;cursor:pointer;}
.afaqq{display:flex;justify-content:space-between;align-items:center;gap:20px;font-size:16px;font-weight:700;color:#1A1014;}
.afaqx{flex-shrink:0;color:#8A7A7D;transition:transform .25s;}
.afaqa{margin:12px 0 0;font-size:15.5px;line-height:1.65;color:#5A4B4E;}
.related{background:#FBF3EE;padding:72px 28px;margin-top:60px;}
.relhead{display:flex;justify-content:space-between;align-items:flex-end;gap:20px;max-width:1180px;margin:0 auto 32px;}
.relhead h2{font-size:30px;font-weight:800;letter-spacing:-.9px;margin:0;}
.relall{font-size:14.5px;font-weight:600;color:#F23F44;}
.relgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;max-width:1180px;margin:0 auto;}
.relcard{position:relative;background:#fff;border:1px solid #EFE2E3;border-radius:18px;overflow:hidden;padding:22px 22px;transition:box-shadow .3s, border-color .3s, transform .3s;}
.relcard::before{content:"";position:absolute;inset:0;border-radius:18px;padding:1.8px;background:conic-gradient(from var(--bang),transparent 0deg,#FF7A52 35deg,#F23F44 80deg,transparent 150deg,transparent 360deg);-webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask-composite:exclude;opacity:0;transition:opacity .3s;pointer-events:none;}
.relcard:hover{transform:translateY(-4px);box-shadow:0 22px 46px rgba(110,11,14,.10);}
.relcard:hover::before{opacity:1;animation:runborder 2.4s linear infinite;}
.relcat{font-size:11px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:#F23F44;margin:0 0 9px;}
.reltitle{font-size:16px;font-weight:700;line-height:1.35;margin:0;color:#1A1014;}
@media(max-width:920px){
  .arttitle{font-size:33px;letter-spacing:-1px;}
  .pp,.pul li{font-size:16.5px;}
  .ph2{font-size:25px;}
  .relgrid{grid-template-columns:1fr 1fr;}
}
@media(max-width:620px){ .relgrid{grid-template-columns:1fr;} }
h1,h2,h3,h4,.arttitle,.ph2,.reltitle{text-wrap:balance;}p,li,.artlead,.pp,.afaqa{text-wrap:pretty;}/*om-balance-rule*/
`;

const TERM = 'Employer of Record (EOR)';
const ONE_LINER =
  'An Employer of Record (EOR) is a third-party company that legally employs workers on your behalf in countries where you don’t have your own entity — handling contracts, payroll, taxes and compliance while you manage the day-to-day work.';
const CALLOUT =
  'The EOR signs the employment contract, runs payroll, withholds taxes, manages statutory benefits, and makes sure everything lines up with local labor law. Your role: you manage the person’s actual work.';

type Section = { id: string; title: string; paras: string[]; list?: { b: string; rest: string }[] };

const SECTIONS: Section[] = [
  {
    id: 'what-is',
    title: 'What is an Employer of Record (EOR)?',
    paras: [
      'Picture this: you have found the perfect senior developer in Portugal. She’s ready to start next month. But your company is based in Chicago, and you have zero legal presence in Europe. Now what?',
      'You could incorporate a Portuguese subsidiary — about four months if things go smoothly, and somewhere between $20,000 and $50,000 once lawyers, notaries and registration fees are accounted for, for a single hire. Alternatively, you could engage an Employer of Record and have the employee onboarded within two weeks.',
      'That split — you manage the work, the EOR carries the legal paperwork — is what makes the whole model work. It gives companies a way to tap into global talent pools without spending months building corporate infrastructure in every country where a great candidate happens to live.',
    ],
  },
  {
    id: 'how-it-works',
    title: 'How does an EOR actually work?',
    paras: [
      'Stay with the Portugal example. You’ve picked your candidate. The EOR drafts a Portuguese-compliant employment contract and hires her through its own legal entity in Lisbon. She goes on their local payroll — every month the EOR handles her salary, deducts income tax and social security at the correct rates, and files with the tax authorities.',
      'You pay the EOR a per-employee management fee for all of this — most providers charge somewhere between $300 and $700 per month per person, though the number swings based on country and how complex the local rules are. Some charge flat rates; others sneak in percentage-of-salary markups or FX spreads that quietly inflate the bill.',
      'From the employee’s side, the experience feels pretty normal: a proper local contract, local benefits, payslips in the right format — while she works with your team, uses your tools, and attends your standups.',
    ],
  },
  {
    id: 'why-not-entity',
    title: 'Why not just set up a local entity?',
    paras: [
      'Plenty of companies do exactly that, and it makes sense when the numbers justify it. But setting up a subsidiary abroad is a real commitment — registering with local authorities, appointing directors, opening bank accounts, enrolling in tax and social insurance systems. In Germany the process typically runs three to five months; in Brazil, even longer.',
      'An EOR skips all of that: days, not months, and you pay as you go instead of a large upfront investment.',
      'The trade-off is recurring fees. If you’re hiring one to fifteen people in a country, an EOR almost always costs less than incorporation. Push past that range and the per-head economics begin to tilt — the crossover point depends on the country, the provider’s pricing, and how long you plan to keep the team there.',
    ],
  },
  {
    id: 'eor-vs-peo',
    title: 'EOR vs. PEO: what’s the difference',
    paras: [
      'People mix these up constantly. A PEO (Professional Employer Organization) enters a co-employment arrangement with you — you stay the legal employer, and the PEO sits alongside you handling payroll, benefits administration and some HR tasks. A PEO can only work in countries where your company already has a registered legal entity. No entity, no PEO.',
      'An EOR does something fundamentally different: it becomes the legal employer so that you don’t need an entity at all. If your company has no presence in the country where the employee lives, a PEO can’t help you — you need an EOR.',
    ],
  },
  {
    id: 'when-to-use',
    title: 'When does using an EOR make sense?',
    paras: [
      'Speed is the most common reason — you’ve found somebody great and don’t want to lose them to a competitor while you spend four months incorporating abroad. An EOR closes that gap; the hire starts in weeks.',
      'Compliance is the second big one. Employment law is wildly inconsistent across borders — notice periods in the Netherlands can stretch to months, Brazil mandates a thirteenth salary payment, France requires works council consultations above certain thresholds. An EOR takes on that legal responsibility.',
      'Then there’s market testing: bring on three or four people through an EOR, see if the market pans out, and decide later whether to incorporate — without burning $40,000 on entity setup. There’s also the contractor problem: converting freelance relationships that look like employment under local law through an EOR cleans up misclassification risk without building a local entity from scratch.',
    ],
  },
  {
    id: 'picking-provider',
    title: 'Picking the right EOR provider',
    paras: [
      'The EOR space has gotten crowded fast — there are probably 50+ providers competing globally, and they are not interchangeable. Some own legal entities in every country they cover; others outsource to local partners, adding another layer of cost and complexity.',
      'Ask about pricing transparency first: is the monthly fee genuinely flat, or do FX markups and offboarding charges show up later? Ask about entity ownership, and check contract flexibility — minimum terms, exit costs, and how painful it gets to move an employee to your own entity down the road.',
      'Don’t just go off a provider’s own marketing — look for independent comparisons that rate EOR companies on the same criteria, especially from sources that aren’t financially tied to the providers they review.',
    ],
  },
  {
    id: 'downsides',
    title: 'What are the downsides?',
    paras: [
      'The employee technically works for the EOR, not your company — on paper, you’re not the employer. That creates friction around stock option grants, IP ownership and non-compete clauses. Reputable providers handle this with tripartite agreements, but the specifics depend heavily on the jurisdiction.',
      'Some countries don’t allow the EOR model, or regulate it so heavily it barely functions — always confirm the setup is actually legal where you want to hire, don’t assume.',
      'And there’s cost: an EOR that saves you money with five employees might bleed you dry with forty. Per-head fees never go away — at some point the math tips and setting up your own entity becomes the cheaper long-term play.',
    ],
  },
  {
    id: 'bottom-line',
    title: 'The bottom line',
    paras: [
      'An EOR removes the single biggest obstacle to hiring internationally: the need for a legal entity in every country where a candidate lives. It lets you move fast, stay on the right side of local employment law, and reach talent that would otherwise be off limits.',
      'The model shines when headcount is small and speed matters. As your presence in a country grows, the EOR can serve as a bridge toward a permanent entity — or it stays the long-term setup in markets where a handful of employees never justifies full incorporation.',
    ],
  },
];

const FAQS: { q: string; a: string }[] = [
  {
    q: 'What is an employer of record (EOR)?',
    a: 'An EOR is a third-party organization that becomes the legal employer of a client company’s workers for payroll, tax, benefits and compliance purposes, while the client retains day-to-day management of those workers — enabling companies to hire in countries where they don’t have a legal entity.',
  },
  {
    q: 'How does an EOR differ from a PEO?',
    a: 'A PEO co-employs workers alongside the client — both are employers, and it only works where the client already has a legal entity. An EOR becomes the sole legal employer, which is why it’s the right tool for international hiring where the client has no local entity.',
  },
  {
    q: 'What are the primary use cases for EOR services?',
    a: 'Global hiring without establishing a legal entity in each country, remote worker compliance across states or countries, contractor-to-employee conversion, workforce flexibility without a permanent entity commitment, transitioning an acquired workforce during M&A, and compliance in complex local labor law environments.',
  },
  {
    q: 'What are the advantages of using an EOR for global hiring?',
    a: 'Hiring anywhere in days rather than months, local employment law compliance handled by specialists, payroll in local currency with correct statutory deductions, standard global benefits access, reduced permanent-establishment tax risk, and the ability to test new markets before committing to full entity setup.',
  },
  {
    q: 'What are the limitations and risks of EOR arrangements?',
    a: 'Higher per-employee cost than direct employment (typically $400–$800+/employee/month), less direct control since the EOR is the legal employer, employee data flowing through a third party, restrictions in some jurisdictions, IP ownership needing careful contractual structuring, and some perceived distance in the employment relationship.',
  },
];

const RELATED: string[] = [
  'Professional Employer Organization (PEO)',
  'Global Payroll',
  'Independent Contractor',
  'Contingent Worker',
  'Human Capital Management (HCM)',
  'Onboarding',
];

const SUMM_TOOLS = [
  { name: 'ChatGPT', img: '/logos/chatgpt.png' },
  { name: 'Gemini', img: '/logos/gemini.png' },
  { name: 'Claude', img: '/logos/claude.png' },
  { name: 'Grok', img: '/logos/grok.png' },
  { name: 'Perplexity', img: '/logos/perplexity.png' },
];

export default function Page() {
  const [faqOpen, setFaqOpen] = useState<number | null>(0);

  const tabs = SECTIONS.map((s) => ({ label: s.title, anchor: '#' + s.id }));

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      <SiteHeader
        announcement="The HR Glossary — 500+ hiring & assessment terms, defined in plain English"
        announcementCta="Browse the A–Z"
        homeHref="/"
      />

      <article className="artwrap arttop">
        <Link className="backlink reveal in" href="/hr-glossary">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M11 6l-6 6 6 6"></path>
          </svg>
          Back to HR Glossary
        </Link>
      </article>

      <div className="artlayout">
        <aside className="tocside">
          <div className="toc reveal in">
            <h4>On this page</h4>
            <ol>
              {tabs.map((t) => (
                <li key={t.anchor}>
                  <a href={t.anchor}>{t.label}</a>
                </li>
              ))}
            </ol>
          </div>
        </aside>
        <div className="artmain">
          <div className="reveal in" style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap', margin: '0 0 16px' }}>
            <span className="catpill">HR Glossary</span>
            <div className="share" style={{ marginLeft: 'auto' }}>
              <a className="sbtn" href="#" aria-label="Facebook">
                f
              </a>
              <a className="sbtn" href="#" aria-label="X">
                X
              </a>
              <a className="sbtn" href="#" aria-label="LinkedIn">
                in
              </a>
            </div>
          </div>
          <h1 className="arttitle reveal in">{TERM}</h1>
          <p className="artlead reveal in">{ONE_LINER}</p>
          <div className="aichips reveal in">
            <span className="lbl">Summarise this post with:</span>
            {SUMM_TOOLS.map((s) => (
              <a className="aichip" href="#" key={s.name}>
                <span className="aichiplogo" style={{ backgroundImage: `url("${s.img}")` }}></span>
                {s.name}
              </a>
            ))}
          </div>
          <div className="prose">
            {SECTIONS.map((sec) => (
              <div key={sec.id}>
                <h2 className="ph2 reveal in" id={sec.id}>
                  {sec.title}
                </h2>
                {sec.paras.map((p, i) => (
                  <p className="pp reveal in" key={i}>
                    {p}
                  </p>
                ))}
                {sec.list && (
                  <ul className="pul reveal in">
                    {sec.list.map((li, i) => (
                      <li key={i}>
                        <b>{li.b}</b> {li.rest}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
            <div className="verdict reveal in">
              <p>{CALLOUT}</p>
            </div>
          </div>
        </div>
      </div>

      <section className="faqsec reveal">
        <h2>Frequently asked questions</h2>
        {FAQS.map((f, i) => {
          const isOpen = faqOpen === i;
          return (
            <div className="afaqi" key={i} onClick={() => setFaqOpen(isOpen ? null : i)}>
              <div className="afaqq">
                <span>{f.q}</span>
                <svg
                  className="afaqx"
                  style={isOpen ? { transform: 'rotate(180deg)' } : {}}
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </div>
              {isOpen && <p className="afaqa">{f.a}</p>}
            </div>
          );
        })}
      </section>

      <section className="related">
        <div className="relhead">
          <h2 className="reveal">Related terms</h2>
          <Link className="relall reveal" href="/hr-glossary">
            View all →
          </Link>
        </div>
        <div className="relgrid reveal">
          {RELATED.map((r) => (
            <Link className="relcard" href="/hr-glossary-detail" key={r}>
              <p className="relcat">HR Glossary</p>
              <h3 className="reltitle">{r}</h3>
            </Link>
          ))}
        </div>
      </section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
