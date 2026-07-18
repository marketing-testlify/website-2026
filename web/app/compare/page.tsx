import { Fragment } from 'react';
import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import FAQ from '@/components/FAQ';
import CtaBand from '@/components/CtaBand';

const CSS = `
*{box-sizing:border-box;}
html{scroll-behavior:smooth;}
body{margin:0;font-family:'Poppins',sans-serif;-webkit-font-smoothing:antialiased;color:#1A1014;background:#fff;}
a{text-decoration:none;color:inherit;}
::selection{background:#F23F44;color:#fff;}
.wrap{max-width:1240px;margin:0 auto;padding:0 28px;}
.sec{padding:80px 28px;}
.eyebrow{font-size:12.5px;font-weight:600;letter-spacing:.16em;text-transform:uppercase;color:#8A7A7D;margin:0 0 16px;}
.eyebrow b{color:#F23F44;font-weight:600;}
.h1{font-size:52px;line-height:1.06;font-weight:800;letter-spacing:-1.8px;margin:0;color:#1A1014;}
.h2{font-size:38px;line-height:1.1;font-weight:800;letter-spacing:-1.2px;margin:0;color:#1A1014;}
.lead{font-size:19px;line-height:1.6;color:#5A4B4E;font-weight:400;}
.body{font-size:16px;line-height:1.66;color:#5A4B4E;}
.acc{color:#F23F44;}
.reveal{opacity:0;transform:translateY(28px);}
.phero{padding:72px 28px 40px;background:radial-gradient(1000px 480px at 50% 0%,#FFF0EE 0%,rgba(255,240,238,0) 62%),#fff;text-align:center;}
/* comparison table */
.cmp-wrap{overflow-x:auto;border:1px solid #F0E2E3;border-radius:20px;background:#fff;box-shadow:0 30px 70px rgba(110,11,14,.10);}
table.cmp{border-collapse:collapse;width:100%;min-width:900px;}
table.cmp th,table.cmp td{text-align:left;padding:16px 20px;font-size:14px;border-bottom:1px solid #F4ECEC;}
table.cmp thead th{position:sticky;top:0;background:#fff;z-index:2;vertical-align:bottom;border-bottom:2px solid #F0E2E3;}
.pl-name{font-size:17px;font-weight:800;color:#1A1014;letter-spacing:-.4px;}
.pl-name.hot{color:#F23F44;}
.pl-price{font-size:24px;font-weight:800;letter-spacing:-.8px;margin-top:6px;}
.pl-per{font-size:12.5px;color:#8A7A7D;font-weight:500;}
.pl-bill{font-size:11.5px;color:#A9999C;margin-top:2px;}
.pl-cta{display:inline-block;margin-top:14px;font-size:13px;font-weight:700;padding:9px 16px;border-radius:11px;transition:transform .2s cubic-bezier(.2,.7,.3,1),box-shadow .25s ease,border-color .2s ease;}
.cta-primary{background:#F23F44;color:#fff;box-shadow:0 10px 22px rgba(242,63,68,.28);}
.cta-primary:hover{transform:translateY(-2px);box-shadow:0 16px 32px rgba(242,63,68,.42);}
.cta-ghost{border:1.5px solid #E7D3D4;color:#1A1014;}
.cta-ghost:hover{transform:translateY(-2px);border-color:#F23F44;color:#F23F44;box-shadow:0 10px 22px rgba(110,11,14,.08);}
table.cmp tbody tr:hover td{background:#FFF6F5;}
table.cmp tbody tr:hover td.rowlabel{background:#FBEFEF;}
table.cmp tbody tr:hover td.cell-hot{background:#FFE7E4;}
table.cmp tbody tr.grp:hover td{background:#1A1014;}
td.rowlabel{font-weight:600;color:#2A1A1D;background:#FDFAF8;}
tr.grp td{background:#1A1014;color:#fff;font-weight:700;font-size:12px;letter-spacing:.08em;text-transform:uppercase;}
.chk{color:#1F9D6B;font-weight:700;}
.no{color:#C9B9BC;}
.cell-hot{background:#FFF8F8;}
.mini{font-size:12px;color:#8A7A7D;}
.tag{display:inline-block;font-size:10.5px;font-weight:700;letter-spacing:.04em;padding:3px 8px;border-radius:99px;background:#FFF4E6;color:#C7791B;}
@media(max-width:960px){.h1{font-size:38px;letter-spacing:-1.2px;}.h2{font-size:28px;}.sec{padding:60px 22px;}.phero{padding:44px 22px 30px;}}

h1,h2,h3,h4,.h1,.h2,.h3,.hero h1,.eyebrow{text-wrap:balance;}p,li,.body,.lead,.sub,figcaption,blockquote{text-wrap:pretty;}/*om-balance-rule*/
`;

const CHK = <span className="chk">✓</span>;
const ADDON = <span className="tag">Add-on</span>;
const INCL = <span className="chk">Included</span>;

type Row = { label: string; std: React.ReactNode; cust: React.ReactNode };
type SpanRow = { label: string; span: string };
type Block = { group: string; rows: (Row | SpanRow)[] };

const isSpan = (r: Row | SpanRow): r is SpanRow => 'span' in r;

const BLOCKS: Block[] = [
  {
    group: 'Workspace features',
    rows: [
      { label: 'Test library', std: '3,500+', cust: '3,500+' },
      { label: 'Tests per assessment', std: 'Unlimited', cust: 'Unlimited' },
      { label: 'AI resume screening', std: 'Free', cust: 'Free' },
      { label: 'Custom questions per assessment', std: 'Unlimited', cust: 'Unlimited' },
      { label: 'Qualifying questions', std: CHK, cust: CHK },
      { label: 'Test recommendations based on job roles', std: CHK, cust: CHK },
      { label: 'Assessment templates based on job role', std: CHK, cust: CHK },
      { label: 'Build your own tests from scratch', std: CHK, cust: CHK },
      { label: 'Customize invitation and rejection emails', std: CHK, cust: CHK },
      { label: 'Multilingual support', std: '16+', cust: '16+' },
      { label: 'White labeling', std: ADDON, cust: INCL },
      { label: '100+ ATS integrations', std: ADDON, cust: INCL },
      { label: 'Additional user seats', std: ADDON, cust: INCL },
      { label: 'SAML SSO & 2FA', std: ADDON, cust: INCL },
    ],
  },
  {
    group: 'Testlify assessments',
    rows: [
      { label: 'Role-specific skill tests', std: CHK, cust: CHK },
      { label: 'Software skills tests', std: CHK, cust: CHK },
      { label: 'Programming skills tests', std: CHK, cust: CHK },
      { label: 'Situational judgment tests (SJTs)', std: CHK, cust: CHK },
      { label: 'Cognitive ability tests', std: CHK, cust: CHK },
      { label: 'Language proficiency tests', std: CHK, cust: CHK },
      { label: 'Engineering skills tests', std: CHK, cust: CHK },
      { label: 'Blue-collar tests', std: CHK, cust: CHK },
      { label: 'Personality & culture tests', std: CHK, cust: CHK },
      { label: 'Typing tests', std: CHK, cust: CHK },
    ],
  },
  {
    group: 'Testlify interviews',
    rows: [
      { label: 'One-way video interviews', std: CHK, cust: CHK },
      { label: 'One-way audio interviews', std: CHK, cust: CHK },
      { label: 'Two-way video interviews (Video AI)', std: CHK, cust: CHK },
      { label: 'Two-way audio interviews (Audio AI)', std: CHK, cust: CHK },
      { label: 'Two-way chat interviews (Chat AI)', std: CHK, cust: CHK },
    ],
  },
  {
    group: 'Testlify simulations',
    rows: [
      { label: 'MS Office (Excel, Word, PowerPoint)', std: CHK, cust: CHK },
      { label: 'Google Workspace (Sheets, Docs, Slides)', std: CHK, cust: CHK },
      { label: 'Live coding platform', std: CHK, cust: CHK },
      { label: 'Typing simulations', std: CHK, cust: CHK },
      { label: 'Conversational AI interviews', std: CHK, cust: CHK },
    ],
  },
  {
    group: 'Anti-cheating & proctoring',
    rows: [
      { label: 'Full-screen mode', std: CHK, cust: CHK },
      { label: 'Live environment check', std: CHK, cust: CHK },
      { label: 'Mouse out tracking', std: CHK, cust: CHK },
      { label: 'Restrict multiple monitors', std: CHK, cust: CHK },
      { label: 'Session recording', std: CHK, cust: CHK },
      { label: 'Snapshot proctoring', std: CHK, cust: CHK },
      { label: 'Tab proctoring', std: CHK, cust: CHK },
      { label: 'Internet speed enforcement check', std: CHK, cust: CHK },
      { label: 'Face detection', std: CHK, cust: CHK },
      { label: 'Talking prohibition detection', std: CHK, cust: CHK },
      { label: 'AI assistance detection', std: CHK, cust: CHK },
      { label: 'Copy/paste tracking', std: CHK, cust: CHK },
      { label: 'Question-level activity logs', std: CHK, cust: CHK },
      { label: 'Focus Guard (Anti-Cheat Mode)', std: CHK, cust: CHK },
      { label: 'IP proctoring', std: CHK, cust: CHK },
      { label: 'System requirement check', span: '$0.25 per system check' },
      { label: 'Photo ID verification', span: '$0.50 per attempt' },
      { label: 'Live video proctoring & screen recording', span: '$5 per attempt' },
    ],
  },
  {
    group: 'White label',
    rows: [
      { label: 'Hide Testlify branding', std: ADDON, cust: INCL },
      { label: 'Set up your SMTP', std: ADDON, cust: INCL },
      { label: 'Use your custom domain', std: ADDON, cust: INCL },
      { label: 'Custom support email and links', std: ADDON, cust: INCL },
    ],
  },
  {
    group: 'Integrations',
    rows: [
      { label: 'API access', std: ADDON, cust: INCL },
      { label: '100+ ATS integrations', std: ADDON, cust: INCL },
      { label: 'Webhooks', std: ADDON, cust: INCL },
    ],
  },
  {
    group: 'Security, privacy & compliance',
    rows: [
      { label: 'ISO 27001', std: CHK, cust: CHK },
      { label: 'SOC 2 Type II', std: CHK, cust: CHK },
      { label: 'GDPR compliant', std: CHK, cust: CHK },
      { label: 'CCPA compliant', std: CHK, cust: CHK },
      { label: 'Role-based access control', std: CHK, cust: CHK },
    ],
  },
  {
    group: 'Reporting & analytics',
    rows: [
      { label: 'CSV and PDF downloads', std: CHK, cust: CHK },
      { label: 'Automated scoring', std: CHK, cust: CHK },
      { label: 'Global benchmarking', std: CHK, cust: CHK },
      { label: 'Assessment-level benchmarking', std: CHK, cust: CHK },
      { label: 'Shareable public link for candidate reports', std: CHK, cust: CHK },
    ],
  },
  {
    group: 'Customer support',
    rows: [
      { label: 'Help center', std: CHK, cust: CHK },
      { label: 'Chat support', std: CHK, cust: CHK },
      { label: 'Email support', std: CHK, cust: CHK },
      { label: 'Call support', std: CHK, cust: CHK },
      {
        label: 'Personalized onboarding',
        std: <span className="mini">Business &amp; Premium only</span>,
        cust: CHK,
      },
      {
        label: 'Dedicated customer success manager',
        std: <span className="mini">Business &amp; Premium only</span>,
        cust: CHK,
      },
    ],
  },
];

const faqItems = [
  { q: "What is Testlify's pricing model?", a: 'Testlify offers a fixed monthly subscription model for its pricing. You can choose between yearly or monthly billing.' },
  { q: 'Is there a free trial available?', a: 'Yes, Testlify provides a 7-day free trial for users to explore and experience the platform. No credit card is required during the trial period.' },
  { q: 'Can I upgrade or downgrade my subscription plan?', a: 'Yes, you can upgrade or downgrade your subscription plan at any time based on your changing needs. Testlify offers flexibility in adjusting your plan according to your requirements.' },
  { q: 'Can I pay monthly or yearly?', a: 'Yes, you can pay both monthly or annually for all the available plans.' },
  { q: 'Does Testlify offer customer support for pricing-related queries?', a: 'Yes, Testlify provides customer support to address any pricing-related queries or concerns you may have. You can reach out to our support team for assistance.' },
  { q: 'What is the usage policy for unlimited candidate invites?', a: "Testlify's usage policy for unlimited candidate invites includes 1,000 invitations for the monthly plan and 10,000 invitations for the annual plan as part of the fair platform usage policy. Thereafter, every additional invite would cost $1." },
];

export default function ComparePage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <SiteHeader announcement="Pay less per credit as your hiring volume grows — compare every plan." />

      <section className="phero">
        <div className="wrap" style={{ maxWidth: 860 }}>
          <p className="eyebrow reveal" style={{ justifyContent: 'center' }}>
            Compare plans<b>.</b>
          </p>
          <h1 className="h1 reveal" style={{ transitionDelay: '.04s' }}>
            Compare and find a perfect<br />plan that <span className="acc">suits your need.</span>
          </h1>
          <p className="lead reveal" style={{ margin: '20px auto 0', maxWidth: 660, transitionDelay: '.08s' }}>
            Go through the detailed plan comparison to find the perfect fit for your organization&apos;s talent assessment needs. Discover key features, pricing structures, and benefits to make an informed decision in unleashing your team&apos;s full potential.
          </p>
          <Link className="pl-cta cta-primary reveal" href="/pricing" style={{ marginTop: 24, fontSize: 15, padding: '14px 28px', transitionDelay: '.12s' }}>
            View plans
          </Link>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="reveal cmp-wrap">
            <table className="cmp">
              <thead>
                <tr>
                  <th style={{ minWidth: 340 }}>
                    <span className="mini">Features</span>
                  </th>
                  <th>
                    <div className="pl-name">Standard Plan</div>
                    <div className="pl-bill">Everything you need to start hiring on skills</div>
                    <Link className="pl-cta cta-ghost" href="/pricing">View plans</Link>
                  </th>
                  <th className="cell-hot">
                    <div className="pl-name hot">Custom Plan</div>
                    <div className="pl-bill">Tailored for scale, security &amp; compliance</div>
                    <Link className="pl-cta cta-primary" href="/contact">Contact sales</Link>
                  </th>
                </tr>
              </thead>
              <tbody>
                {BLOCKS.map((block) => (
                  <Fragment key={block.group}>
                    <tr className="grp">
                      <td colSpan={3}>{block.group}</td>
                    </tr>
                    {block.rows.map((r) =>
                      isSpan(r) ? (
                        <tr key={r.label}>
                          <td className="rowlabel">{r.label}</td>
                          <td colSpan={2}>{r.span}</td>
                        </tr>
                      ) : (
                        <tr key={r.label}>
                          <td className="rowlabel">{r.label}</td>
                          <td>{r.std}</td>
                          <td className="cell-hot">{r.cust}</td>
                        </tr>
                      )
                    )}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
          <div className="reveal" style={{ textAlign: 'center', marginTop: 22 }}>
            <p className="mini">
              All plans include a 7-day free trial — no credit card required ·{' '}
              <Link href="/pricing" className="acc" style={{ fontWeight: 600 }}>See full pricing →</Link>
            </p>
          </div>
        </div>
      </section>

      <section className="sec" style={{ background: '#FBF3EE' }}>
        <div className="wrap">
          <div
            className="reveal"
            style={{
              maxWidth: 900,
              margin: '0 auto',
              display: 'flex',
              flexWrap: 'wrap',
              gap: 20,
              alignItems: 'center',
              justifyContent: 'space-between',
              background: '#1A1014',
              borderRadius: 24,
              padding: '40px 44px',
            }}
          >
            <div style={{ maxWidth: 520 }}>
              <h2 className="h2" style={{ color: '#fff', fontSize: 28 }}>Looking for an unlimited credit plan?</h2>
              <p className="body" style={{ color: '#C2B1B4', margin: '12px 0 0' }}>
                For high-volume hiring, our unlimited plan gives you full platform access with no per-credit limits. Talk to sales for a custom quote.
              </p>
            </div>
            <Link className="pl-cta cta-primary" href="/contact" style={{ fontSize: 15, padding: '14px 26px' }}>
              Contact sales →
            </Link>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap" style={{ maxWidth: 840 }}>
          <div style={{ textAlign: 'center', marginBottom: 44 }}>
            <p className="eyebrow reveal" style={{ justifyContent: 'center' }}>FAQ<b>.</b></p>
            <h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>Pricing questions, answered</h2>
          </div>
          <div className="reveal">
            <FAQ items={faqItems} />
          </div>
        </div>
      </section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
