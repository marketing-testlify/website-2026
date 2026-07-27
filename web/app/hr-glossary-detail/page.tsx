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
.hg-wrap{max-width:1200px;margin:0 auto;padding:0 28px;}
.hg-narrow{max-width:820px;}
.reveal{opacity:0;transform:translateY(20px);transition:opacity .6s cubic-bezier(.2,.7,.2,1),transform .6s cubic-bezier(.2,.7,.2,1);}
.reveal.in{opacity:1;transform:none;}
.hg-hero{padding:44px 28px 26px;}
.hg-back{display:inline-flex;align-items:center;gap:8px;font-size:13.5px;font-weight:600;color:#F23F44;margin-bottom:22px;}
.hg-back svg{transition:transform .2s;}
.hg-back:hover svg{transform:translateX(-3px);}
.hg-eyebrow{font-size:13px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:#F23F44;margin:0 0 14px;}
.hg-h1{font-size:44px;line-height:1.08;font-weight:800;letter-spacing:-1.4px;margin:0;}
.hg-intro{font-size:18px;line-height:1.6;color:#3C2C2F;font-weight:500;margin:20px 0 0;max-width:820px;}
.hg-layout{display:grid;grid-template-columns:210px minmax(0,1fr);gap:44px;align-items:start;}
.hg-toc{position:sticky;top:96px;background:#FBF3EE;border:1px solid #F0E2E3;border-radius:18px;padding:24px 26px;}
.hg-toc h4{font-size:13px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#8A7A7D;margin:0 0 16px;padding-bottom:14px;border-bottom:1px solid #EADDDE;}
.hg-side{position:sticky;top:96px;display:flex;flex-direction:column;gap:22px;}
.hg-sidecard{background:#FBF3EE;border:1px solid #F0E2E3;border-radius:18px;padding:24px 26px;}
.hg-side h4{font-size:13px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#8A7A7D;margin:0 0 16px;padding-bottom:14px;border-bottom:1px solid #EADDDE;}
.hg-summ{display:flex;align-items:center;gap:14px;flex-wrap:wrap;margin:24px 0 8px;}
.hg-summlbl{font-size:13.5px;font-weight:600;color:#8A7A7D;}
.hg-summicons{display:flex;align-items:center;gap:10px;}
.hg-summicons a{width:34px;height:34px;border-radius:50%;background:#fff;border:1px solid #F0E2E3;display:flex;align-items:center;justify-content:center;transition:border-color .2s,transform .2s;font-size:13px;font-weight:700;color:#5A4B4E;}
.hg-summicons a:hover{border-color:#F23F44;color:#F23F44;transform:translateY(-2px);}
.hg-faqside .hg-h4{font-size:15px;font-weight:700;margin:0 0 4px;}
.hg-faqitem2{border-bottom:1px solid #EADDDE;}
.hg-faqitem2:last-child{border-bottom:0;}
.hg-faqq2{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:14px 0;cursor:pointer;font-size:14.5px;font-weight:700;color:#1A1014;line-height:1.4;}
.hg-faqicon2{flex-shrink:0;color:#8A7A7D;transition:transform .25s;}
.hg-faqa2{padding:0 0 14px;margin:0;font-size:13.5px;line-height:1.6;color:#5A4B4E;}
.hg-sidelist{margin:0;padding:0;list-style:none;counter-reset:hgtoc;}
.hg-sideitem{counter-increment:hgtoc;position:relative;padding-left:32px;font-size:14.5px;line-height:1.45;margin-bottom:15px;}
.hg-sideitem:last-child{margin-bottom:0;}
.hg-sideitem::before{content:counter(hgtoc);position:absolute;left:0;top:-1px;width:22px;height:22px;border-radius:7px;background:#FCE0DE;color:#F23F44;font-size:11.5px;font-weight:700;display:flex;align-items:center;justify-content:center;}
.hg-sidelink{font-size:14.5px;font-weight:400;color:#5A4B4E;transition:color .2s;}
.hg-sidelink:hover{color:#F23F44;}
.hg-sidelink.on{color:#1A1014;}
.hg-main{max-width:780px;min-width:0;}

.hg-body{padding:40px 28px 30px;}
.hg-sec{scroll-margin-top:120px;margin-bottom:20px;}
.hg-h2{font-size:26px;font-weight:800;letter-spacing:-.5px;margin:44px 0 16px;color:#1A1014;}
.hg-main>.hg-sec:first-child .hg-h2,.hg-main>*:first-child .hg-h2{margin-top:0;}
.hg-h3{font-size:18px;font-weight:700;letter-spacing:-.2px;margin:26px 0 10px;color:#1A1014;}
.hg-p{font-size:16px;line-height:1.72;color:#4A3B3E;margin:0 0 16px;}
.hg-p a,.hg-li a,.hg-ul a{color:#F23F44;font-weight:600;}
.hg-ul{margin:0 0 18px;padding-left:22px;}
.hg-ul li{font-size:16px;line-height:1.7;color:#4A3B3E;margin-bottom:12px;}
.hg-ul li b{color:#1A1014;font-weight:700;}
.hg-callout{background:#FBF3EE;border-left:3px solid #F23F44;border-radius:0 14px 14px 0;padding:22px 26px;margin:10px 0 26px;}
.hg-callout p{font-size:16px;line-height:1.65;color:#3C2C2F;margin:0;font-style:italic;}
@media(max-width:760px){.hg-layout{grid-template-columns:1fr;}.hg-side{position:static;}.hg-toc{position:static;}.hg-main{max-width:none;}.hg-h1{font-size:32px;letter-spacing:-1px;}.hg-body{padding:32px 22px 24px;}}
h1,h2,h3,h4,.hg-h1,.hg-h2,.hg-h3{text-wrap:balance;}p,li,.hg-p,.hg-intro{text-wrap:pretty;}/*om-balance-rule*/
`;

const TERM = 'Employer of Record (EOR)';
const ONE_LINER =
  'An Employer of Record (EOR) is a third-party company that legally employs workers on your behalf in countries where you don’t have your own entity — handling contracts, payroll, taxes and compliance while you manage the day-to-day work.';
const CALLOUT =
  'The EOR signs the employment contract, runs payroll, withholds taxes, manages statutory benefits, and makes sure everything lines up with local labor law. Your role: you manage the person’s actual work.';

const SECTIONS: { id: string; title: string; paras: string[] }[] = [
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

const SUMM_TOOLS = [
  { name: 'ChatGPT', href: '#', letter: 'C' },
  { name: 'Gemini', href: '#', letter: 'G' },
  { name: 'Claude', href: '#', letter: 'A' },
  { name: 'Grok', href: '#', letter: 'X' },
  { name: 'Perplexity', href: '#', letter: 'P' },
];

export default function Page() {
  const [faqOpen, setFaqOpen] = useState<number | null>(0);

  const tabs = SECTIONS.map((s, i) => ({ label: s.title, anchor: '#' + s.id, cls: i === 0 ? 'on' : '' })).concat([
    { label: 'FAQ', anchor: '#faqs', cls: '' },
  ]);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      <SiteHeader
        announcement="The HR Glossary — 500+ hiring & assessment terms, defined in plain English"
        announcementCta="Browse the A–Z"
        homeHref="/"
      />

      <section className="hg-hero">
        <div className="hg-wrap">
          <Link className="hg-back" href="/hr-glossary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M11 6l-6 6 6 6"></path>
            </svg>
            Back to HR Glossary
          </Link>
          <h1 className="hg-h1 reveal" data-reveal>
            {TERM}
          </h1>
          <p className="hg-intro reveal" data-reveal>
            {ONE_LINER}
          </p>
          <div className="hg-summ reveal" data-reveal>
            <span className="hg-summlbl">Summarise this post with:</span>
            <div className="hg-summicons">
              {SUMM_TOOLS.map((s) => (
                <a key={s.name} href={s.href} title={s.name}>
                  {s.letter}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="hg-body">
        <div className="hg-wrap">
          <div className="hg-layout">
            <aside className="hg-toc">
              <h4>On this page</h4>
              <ol className="hg-sidelist">
                {tabs.map((t) => (
                  <li className="hg-sideitem" key={t.anchor}>
                    <a className={`hg-sidelink ${t.cls}`} href={t.anchor}>
                      {t.label}
                    </a>
                  </li>
                ))}
              </ol>
            </aside>

            <div className="hg-main">
              {SECTIONS.map((sec) => (
                <div className="hg-sec" id={sec.id} key={sec.id}>
                  <h2 className="hg-h2 reveal" data-reveal>
                    {sec.title}
                  </h2>
                  {sec.paras.map((p, i) => (
                    <p className="hg-p reveal" data-reveal key={i}>
                      {p}
                    </p>
                  ))}
                </div>
              ))}

              <div className="hg-callout reveal" data-reveal>
                <p>{CALLOUT}</p>
              </div>

              <div className="hg-sidecard hg-faqside" id="faqs">
                <h4>Frequently asked questions</h4>
                {FAQS.map((f, i) => {
                  const isOpen = faqOpen === i;
                  return (
                    <div className="hg-faqitem2" key={i}>
                      <div className="hg-faqq2" onClick={() => setFaqOpen(isOpen ? null : i)}>
                        <span>{f.q}</span>
                        <svg
                          className="hg-faqicon2"
                          style={isOpen ? { transform: 'rotate(180deg)' } : {}}
                          width="16"
                          height="16"
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
                      {isOpen && <p className="hg-faqa2">{f.a}</p>}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
