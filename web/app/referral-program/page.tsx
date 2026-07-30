'use client';

import { useState } from 'react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaButton from '@/components/CtaButton';
import CtaBand from '@/components/CtaBand';

const CSS = `
.rp-hero{background:radial-gradient(120% 100% at 50% 0%,#FFF0EF 0%,#FFF8F7 45%,#fff 100%);}
.rp-flow{display:flex;align-items:center;justify-content:center;gap:12px;flex-wrap:wrap;margin-top:34px;}
.rp-step{display:flex;align-items:center;gap:10px;font-size:15px;font-weight:700;color:#1A1014;background:#fff;border:1px solid #F0E2E3;border-radius:100px;padding:9px 22px 9px 9px;box-shadow:0 10px 24px rgba(110,11,14,.08);transition:transform .3s cubic-bezier(.2,.7,.3,1),box-shadow .3s;}
.rp-step:hover{transform:translateY(-3px);box-shadow:0 16px 32px rgba(110,11,14,.12);}
.rp-dot{width:26px;height:26px;border-radius:50%;background:#FBE0E1;color:#F23F44;font-size:13px;font-weight:800;display:flex;align-items:center;justify-content:center;flex:none;}
.rp-arrow{color:#D9B9BA;flex:none;}
.rp-field{margin-bottom:18px;}
.rp-field label{display:block;font-size:13.5px;font-weight:700;color:#1A1014;margin-bottom:7px;}
.rp-row2{display:grid;grid-template-columns:1fr 1fr;gap:14px;}
.rp-field input,.rp-field textarea,.rp-row2 input{width:100%;font-family:inherit;font-size:14.5px;color:#1A1014;background:#fff;border:1px solid #EADDDE;border-radius:10px;padding:12px 14px;box-sizing:border-box;transition:border-color .2s;}
.rp-field input:focus,.rp-field textarea:focus,.rp-row2 input:focus{outline:none;border-color:#F23F44;}
.rp-field textarea{resize:vertical;}
.faqitem{border-bottom:1px solid #F1E6E7;padding:20px 0;}
.faqq{display:flex;justify-content:space-between;align-items:center;cursor:pointer;font-weight:700;font-size:16px;color:#1A1014;gap:16px;}
.faqa{font-size:14.5px;line-height:1.65;color:#5A4B4E;margin-top:10px;max-width:760px;}
`;

const FAQS = [
  { q: "How much will I earn for a referral?", a: "You'll receive 10% of the revenue Testlify generates from your referral, up to a maximum of $500." },
  { q: "Can I earn more than one bonus?", a: "Absolutely. Earn 10% commission for every successful referral — up to $500. Simple as that. The more you refer, the more you earn." },
  { q: "How do I know if my referral was tracked correctly?", a: "You'll receive a confirmation email after submitting the referral. Once the company signs up, we'll notify you so you always know where things stand." },
  { q: "When will I get paid after my referral converts?", a: "Payouts are typically processed within 30 days after the referred company becomes a paying customer." },
  { q: "How will I receive my referral bonus?", a: "We support payouts via bank transfer or digital payment methods (details shared during confirmation)." },
  { q: "Do I need to be a Testlify customer to refer someone?", a: "Nope! Anyone can refer whether you're a client, a partner, or just someone who knows a company that could benefit from Testlify." },
  { q: "Are referral bonuses taxable?", a: "Referral rewards may be subject to local tax laws. Please consult your tax advisor for specific guidance. (Testlify will provide any required documentation if applicable.)" },
  { q: "What if two people refer the same company?", a: "The reward goes to whoever submitted the referral first." },
  { q: "How long does Testlify track my referral?", a: "We track referrals for 180 days from the date of submission. If the company signs up within that time, you'll earn your reward." },
  { q: "Are there any rules I need to follow?", a: "Yes. The program is meant for genuine referrals (friends, colleagues, and professional connections like recruiters, HR, or executives). Spam, fake referrals, false information, or unethical practices (like self-referrals or misrepresentation) will result in disqualification. Testlify reserves the right to remove participants who misuse the program." },
];

export default function ReferralProgramPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <SiteHeader announcement="Earn up to $500 per referral" announcementCta="Refer now" homeHref="/" />

      <section className="phero rp-hero"><div className="wrap" style={{ maxWidth: 860 }}>
        <p className="eyebrow reveal">Referral program<b>.</b></p>
        <h1 className="h1 reveal" style={{ transitionDelay: '.04s' }}><span style={{ color: '#F23F44' }}>Earn $500</span> with Testlify&apos;s<br />referral program</h1>
        <p className="lead reveal" style={{ margin: '22px auto 0', maxWidth: 640, transitionDelay: '.08s' }}>Turn your recruiter connections, HR peers, or business contacts into cash. Earn 10% commission for every successful referral (up to $500). Simple as that.</p>
        <div className="rp-flow reveal" style={{ transitionDelay: '.12s' }}>
          <span className="rp-step"><span className="rp-dot">1</span>You refer</span>
          <svg className="rp-arrow" width="20" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>
          <span className="rp-step"><span className="rp-dot">2</span>They buy</span>
          <svg className="rp-arrow" width="20" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>
          <span className="rp-step"><span className="rp-dot">3</span>You earn $500</span>
        </div>
        <div className="reveal btnrow" style={{ marginTop: 30, justifyContent: 'center', transitionDelay: '.16s' }}>
          <CtaButton label="Refer now" href="#rp-form" variant="primary" size="md" icon="arrow" />
        </div>
      </div></section>

      <section className="sec"><div className="wrap">
        <div className="center-head">
          <p className="eyebrow reveal">How it works<b>.</b></p>
          <h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>Help teams hire smarter. Get rewarded.</h2>
        </div>
        <div className="grid3">
          <div className="card reveal"><div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}><div className="cic" style={{ marginBottom: 0, fontWeight: 800, fontSize: 18 }}>1</div><h3 className="h3" style={{ fontSize: 18, margin: 0 }}>Refer</h3></div><p className="body" style={{ fontSize: 14 }}>Share a quick referral form, it takes less than a minute.</p></div>
          <div className="card reveal" style={{ transitionDelay: '.06s' }}><div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}><div className="cic" style={{ marginBottom: 0, fontWeight: 800, fontSize: 18 }}>2</div><h3 className="h3" style={{ fontSize: 18, margin: 0 }}>They join</h3></div><p className="body" style={{ fontSize: 14 }}>Our team connects with your referral and walks them through Testlify.</p></div>
          <div className="card reveal" style={{ transitionDelay: '.12s' }}><div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}><div className="cic" style={{ marginBottom: 0, fontWeight: 800, fontSize: 18 }}>3</div><h3 className="h3" style={{ fontSize: 18, margin: 0 }}>You earn</h3></div><p className="body" style={{ fontSize: 14 }}>When they become a customer, you earn up to $500.</p></div>
        </div>
      </div></section>

      <section className="sec" style={{ background: '#FBF3EE' }}><div className="wrap">
        <div className="center-head">
          <p className="eyebrow reveal">Whom you can refer<b>.</b></p>
          <h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>Your network, our next customers</h2>
        </div>
        <div className="grid3 reveal" style={{ transitionDelay: '.06s', maxWidth: 940, margin: '0 auto' }}>
          <div className="card" style={{ textAlign: 'center' }}><div className="cic" style={{ margin: '0 auto 16px' }}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z"></path></svg></div><p className="body" style={{ fontWeight: 700, color: '#1A1014', margin: 0 }}>Startups</p></div>
          <div className="card" style={{ textAlign: 'center' }}><div className="cic" style={{ margin: '0 auto 16px' }}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18M6 21V9l6-4 6 4v12M10 21v-6h4v6"></path></svg></div><p className="body" style={{ fontWeight: 700, color: '#1A1014', margin: 0 }}>Small &amp; medium businesses</p></div>
          <div className="card" style={{ textAlign: 'center' }}><div className="cic" style={{ margin: '0 auto 16px' }}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18M5 21V7l4-3 4 3v14M13 21V11l4-2 4 2v10M9 9h.01M9 13h.01M9 17h.01"></path></svg></div><p className="body" style={{ fontWeight: 700, color: '#1A1014', margin: 0 }}>Enterprises</p></div>
          <div className="card" style={{ textAlign: 'center' }}><div className="cic" style={{ margin: '0 auto 16px' }}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"></path></svg></div><p className="body" style={{ fontWeight: 700, color: '#1A1014', margin: 0 }}>Recruitment agencies</p></div>
          <div className="card" style={{ textAlign: 'center' }}><div className="cic" style={{ margin: '0 auto 16px' }}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0"></path></svg></div><p className="body" style={{ fontWeight: 700, color: '#1A1014', margin: 0 }}>Talent partners</p></div>
        </div>
      </div></section>

      <section className="sec"><div className="wrap split">
        <div className="reveal">
          <p className="eyebrow">Why it&apos;s worth it<b>.</b></p>
          <h2 className="h2" style={{ marginBottom: 22 }}>Good for you, good for them</h2>
          <ul className="chk">
            <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>10% commission on every successful referral, up to $500</li>
            <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>No cap on how many teams you refer</li>
            <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>Anyone can refer — clients, partners, or just someone who knows a company that could benefit</li>
            <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>180-day tracking window on every referral you submit</li>
          </ul>
        </div>
        <div className="reveal" style={{ transitionDelay: '.08s', background: 'linear-gradient(160deg,#FFF4F3,#FBE9E9)', border: '1px solid #F6DCDD', borderRadius: 24, padding: 40 }}>
          <p className="h3" style={{ fontSize: 22, lineHeight: 1.4, fontWeight: 600 }}>Ready to start earning? Submit your referral in under a minute.</p>
          <div style={{ marginTop: 24 }}>
            <CtaButton label="Submit a referral" href="/contact" variant="primary" size="md" icon="arrow" />
          </div>
        </div>
      </div></section>

      <section className="sec" id="rp-form" style={{ paddingTop: 60 }}><div className="wrap">
        <div className="center-head">
          <p className="eyebrow reveal">Who you know<b>.</b></p>
          <h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>Tell us who could use Testlify</h2>
        </div>
        <form className="reveal" style={{ transitionDelay: '.06s', background: '#fff', border: '1px solid #F0E2E3', borderRadius: 20, padding: 34, boxShadow: '0 16px 34px rgba(110,11,14,.08)' }} onSubmit={(e) => e.preventDefault()}>
          <h3 className="h3" style={{ fontSize: 20, marginBottom: 20 }}>Referral information</h3>
          <div className="rp-row2">
            <div className="rp-field"><label>Name *</label><div className="rp-row2"><input type="text" placeholder="First name" required /><input type="text" placeholder="Last name" required /></div></div>
            <div className="rp-field"><label>Email *</label><input type="email" placeholder="Email address" required /></div>
          </div>
          <div className="rp-row2">
            <div className="rp-field"><label>Phone number *</label><input type="tel" placeholder="Phone number" required /></div>
            <div className="rp-field"><label>Company name *</label><input type="text" placeholder="Company name" required /></div>
          </div>
          <div className="rp-row2">
            <div className="rp-field"><label>LinkedIn profile URL *</label><input type="url" placeholder="LinkedIn profile URL" required /></div>
            <div className="rp-field"><label>Country *</label><input type="text" placeholder="Country" required /></div>
          </div>
          <div className="rp-field"><label>Additional comments (optional)</label><textarea rows={2} placeholder="Additional comments"></textarea></div>
          <h3 className="h3" style={{ fontSize: 20, margin: '24px 0 20px' }}>Your information</h3>
          <div className="rp-row2">
            <div className="rp-field"><label>Name *</label><div className="rp-row2"><input type="text" placeholder="First name" required /><input type="text" placeholder="Last name" required /></div></div>
            <div className="rp-field"><label>Email *</label><input type="email" placeholder="Email address" required /></div>
          </div>
          <CtaButton label="Submit" href="#" variant="primary" size="md" />
        </form>
      </div></section>

      <section className="sec" style={{ background: '#FBF3EE' }}><div className="wrap" style={{ maxWidth: 820 }}>
        <div className="center-head">
          <p className="eyebrow reveal">FAQs<b>.</b></p>
          <h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>Referral program FAQs</h2>
        </div>
        <div className="reveal" style={{ transitionDelay: '.06s' }}>
          {FAQS.map((f, i) => (
            <div className="faqitem" key={i}>
              <div className="faqq" onClick={() => setOpenIdx(openIdx === i ? null : i)} data-i={i}>
                {f.q}<span>{openIdx === i ? '−' : '+'}</span>
              </div>
              {openIdx === i && <p className="faqa">{f.a}</p>}
            </div>
          ))}
        </div>
      </div></section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
