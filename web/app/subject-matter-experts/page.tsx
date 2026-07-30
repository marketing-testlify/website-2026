'use client';

import { useState } from 'react';
import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import SecuritySection from '@/components/SecuritySection';
import Testimonials from '@/components/Testimonials';
import Recognition from '@/components/Recognition';
import CtaBand from '@/components/CtaBand';

const CSS = `
.smesplit{display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:center;}
.smesplit>div:first-child{order:1;}
.smesplit .smeimg{order:2;}
.smesplit.flip .smeimg{order:0;}
.smeimg{border-radius:20px;border:1px solid #F0E2E3;background:linear-gradient(160deg,#FFF6F4,#FBEDEA);height:300px;display:flex;align-items:center;justify-content:center;box-shadow:0 16px 30px rgba(110,11,14,.10);overflow:hidden;}
.smeimg img{width:100%;height:100%;object-fit:contain;}
.form{background:#fff;border:1px solid #F0E2E3;border-radius:22px;padding:34px;box-shadow:0 30px 70px rgba(110,11,14,.10);}
.frow{display:grid;grid-template-columns:1fr 1fr;gap:14px;}
.field{margin-bottom:16px;}
.field label{display:block;font-size:13px;font-weight:600;color:#2A1A1D;margin-bottom:7px;}
.field input,.field select,.field textarea{width:100%;font-family:inherit;font-size:15px;color:#1A1014;padding:13px 15px;border:1.5px solid #EEDFE0;border-radius:12px;background:#FEFCFB;box-sizing:border-box;}
.field select{appearance:none;-webkit-appearance:none;-moz-appearance:none;background-image:url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="%238A7A7D" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>');background-repeat:no-repeat;background-position:right 15px center;background-size:14px;padding-right:42px;cursor:pointer;}
.field input:focus,.field select:focus,.field textarea:focus{outline:none;border-color:#F23F44;box-shadow:0 0 0 4px rgba(242,63,68,.12);}
.field textarea{resize:vertical;min-height:96px;}
.submit{width:100%;border:0;font-family:inherit;cursor:pointer;background:#F23F44;color:#fff;font-weight:700;font-size:16px;padding:15px;border-radius:13px;box-shadow:0 12px 26px rgba(242,63,68,.3);transition:transform .2s;}
.submit:hover{transform:translateY(-2px);}
.ok{background:#EAF8F0;border:1px solid #BFE8D2;color:#1B7F4B;border-radius:14px;padding:22px;font-size:15px;font-weight:600;text-align:center;}
.intg-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:14px;}
.intg-tile{display:flex;align-items:center;justify-content:center;height:88px;background:#fff;border:1px solid #F2E6E7;border-radius:16px;padding:16px 20px;transition:transform .28s ease,box-shadow .28s ease,border-color .28s ease;}
.intg-tile:hover{transform:translateY(-4px);border-color:#FBD0D1;box-shadow:0 16px 34px rgba(110,11,14,.10);}
.intg-tile img{max-width:100%;max-height:40px;object-fit:contain;}
.stepno{flex:none;display:inline-flex;align-items:center;justify-content:center;width:34px;height:34px;border-radius:10px;background:#FFF0F0;color:#F23F44;font-weight:800;font-size:15px;}
.stephead{display:flex;align-items:center;gap:14px;margin-bottom:14px;}
.ss-sec{background:#FBF3EE !important;}
@media(max-width:920px){.smesplit{grid-template-columns:1fr;gap:28px;}.smesplit>div:first-child,.smesplit .smeimg{order:0;}.frow{grid-template-columns:1fr;}.intg-grid{grid-template-columns:repeat(2,1fr);}}
`;

export default function SubjectMatterExpertsPage() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      <SiteHeader
        announcement="Join 500+ SMEs shaping the world's best assessments"
        announcementCta="Apply now"
        homeHref="/"
      />

      <section className="phero">
        <div className="wrap" style={{ maxWidth: '760px' }}>
          <p className="eyebrow reveal">Subject matter experts<b>.</b></p>
          <h1 className="h1 reveal" style={{ transitionDelay: '.04s' }}>
            Join Testlify <span style={{ color: '#F23F44' }}>SME community</span>
          </h1>
          <p className="lead reveal" style={{ margin: '22px auto 0', maxWidth: '560px', transitionDelay: '.08s' }}>
            Earn and grow your reputation in your industry.
          </p>
        </div>
      </section>

      <section className="sec">
        <div className="wrap smesplit reveal">
          <div>
            <p className="eyebrow">Showcase your expertise<b>.</b></p>
            <h2 className="h2" style={{ marginBottom: '18px' }}>Showcase your expertise</h2>
            <p className="body" style={{ marginBottom: '22px' }}>Establish yourself as a subject matter expert and earn money by applying your experience. Write screening tests on subjects you have extensive knowledge to help organizations find the best talent.</p>
            <p className="body" style={{ marginBottom: '22px' }}>To start earning, contact us to find out more.</p>
            <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#F23F44', fontWeight: 700, fontSize: '15.5px' }}>Contact us<span>&rarr;</span></Link>
          </div>
          <div className="smeimg" style={{ background: '#fff' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://testlify.com/wp-content/uploads/2022/08/Showcase-Your-Expertise-01-1024x692.png" alt="Showcase your expertise" />
          </div>
        </div>
      </section>

      <section className="sec" style={{ background: '#FBF3EE' }}>
        <div className="wrap smesplit flip reveal">
          <div>
            <p className="eyebrow">Grow your reputation<b>.</b></p>
            <h2 className="h2" style={{ marginBottom: '18px' }}>Grow your reputation</h2>
            <p className="body" style={{ marginBottom: '22px' }}>You&apos;ve been working in your industry for years. You have accumulated extensive experience in your field.</p>
            <p className="body" style={{ marginBottom: '22px' }}>Simply write tests to evaluate candidates&apos; skills on our platform. Build your credibility as an expert and further strengthen your reputation in your industry.</p>
            <Link href="/test-library" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#F23F44', fontWeight: 700, fontSize: '15.5px' }}>Check our test library<span>&rarr;</span></Link>
          </div>
          <div className="smeimg" style={{ background: '#fff' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://testlify.com/wp-content/uploads/2022/08/Be-an-Industry-Expert.jpg" alt="Grow your reputation" />
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap smesplit reveal">
          <div>
            <p className="eyebrow">Join an exciting startup<b>.</b></p>
            <h2 className="h2" style={{ marginBottom: '18px' }}>Join an exciting startup</h2>
            <p className="body" style={{ marginBottom: '22px' }}>Testlify is a bustling SaaS startup driven by our passion for people, recruitment and building solutions to make hiring easier, better, and faster.</p>
            <p className="body" style={{ marginBottom: '22px' }}>Our team is building an amazing assessment solution that helps organizations evaluate candidates&apos; skills and aptitudes in a host of fields.</p>
            <Link href="/about" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#F23F44', fontWeight: 700, fontSize: '15.5px' }}>More about Testlify<span>&rarr;</span></Link>
          </div>
          <div className="smeimg" style={{ background: '#fff' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://testlify.com/wp-content/uploads/2022/08/Expert.png" alt="Join an exciting startup" />
          </div>
        </div>
      </section>

      <section className="sec" style={{ background: '#FBF3EE' }}>
        <div className="wrap">
          <div className="center-head">
            <p className="eyebrow reveal">Why join<b>.</b></p>
            <h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>Why join Testlify as a subject matter expert?</h2>
            <p className="lead reveal" style={{ marginTop: '14px', transitionDelay: '.08s' }}>Testlify is a rapidly growing recruitment startup building talent assessment tools for recruiters. Our solutions are changing the way organizations evaluate and hire candidates allowing them to hire the best people, faster.</p>
          </div>
          <div className="grid3 reveal">
            <div className="card">
              <span className="cic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4z"></path></svg></span>
              <h3 className="h3" style={{ fontSize: '18px', marginBottom: '8px' }}>Make a contribution</h3>
              <p className="body" style={{ fontSize: '14px' }}>Contribute to an exciting new product that is quickly becoming a tool of choice for organizations and recruitment specialists.</p>
            </div>
            <div className="card">
              <span className="cic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg></span>
              <h3 className="h3" style={{ fontSize: '18px', marginBottom: '8px' }}>Guides &amp; resources</h3>
              <p className="body" style={{ fontSize: '14px' }}>Once you are approved you will have access to our guides to help you understand how to create your tests.</p>
            </div>
            <div className="card">
              <span className="cic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg></span>
              <h3 className="h3" style={{ fontSize: '18px', marginBottom: '8px' }}>We pay you well</h3>
              <p className="body" style={{ fontSize: '14px' }}>We value your contribution and pay you favorably for every test you create and is approved.</p>
            </div>
            <div className="card">
              <span className="cic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="4"></rect><path d="M9 12l2 2 4-4"></path></svg></span>
              <h3 className="h3" style={{ fontSize: '18px', marginBottom: '8px' }}>Easy to use</h3>
              <p className="body" style={{ fontSize: '14px' }}>Our interface is simple and easy to use, so you can focus on writing your tests with ease.</p>
            </div>
            <div className="card">
              <span className="cic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l2.4 7.4H22l-6 4.5 2.3 7.1L12 16.9 5.7 21l2.3-7.1-6-4.5h7.6z"></path></svg></span>
              <h3 className="h3" style={{ fontSize: '18px', marginBottom: '8px' }}>Build your reputation</h3>
              <p className="body" style={{ fontSize: '14px' }}>Establish yourself as an expert in your field by contributing to our platform.</p>
            </div>
            <div className="card">
              <span className="cic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M18.36 5.64a9 9 0 1 1-12.73 0"></path><line x1="12" y1="2" x2="12" y2="12"></line></svg></span>
              <h3 className="h3" style={{ fontSize: '18px', marginBottom: '8px' }}>Get support</h3>
              <p className="body" style={{ fontSize: '14px' }}>Have a question or struggling with anything? We have a team ready to assist you.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="center-head">
            <p className="eyebrow reveal">How it works<b>.</b></p>
            <h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>Starting is simple</h2>
          </div>
          <div className="grid4 reveal">
            <div className="card">
              <div className="stephead"><span className="stepno">1</span><h3 className="h3" style={{ fontSize: '17px' }}>Register</h3></div>
              <p className="body" style={{ fontSize: '14px' }}>Simply fill out our form with your details, and we will create your account.</p>
            </div>
            <div className="card">
              <div className="stephead"><span className="stepno">2</span><h3 className="h3" style={{ fontSize: '17px' }}>Get approved</h3></div>
              <p className="body" style={{ fontSize: '14px' }}>After registration, your application will be processed for approval.</p>
            </div>
            <div className="card">
              <div className="stephead"><span className="stepno">3</span><h3 className="h3" style={{ fontSize: '17px' }}>Submit questions</h3></div>
              <p className="body" style={{ fontSize: '14px' }}>After you submit your questions they will then be approved by our team.</p>
            </div>
            <div className="card">
              <div className="stephead"><span className="stepno">4</span><h3 className="h3" style={{ fontSize: '17px' }}>Get paid</h3></div>
              <p className="body" style={{ fontSize: '14px' }}>Once your questions are reviewed, you will be paid for every question approved.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec" style={{ background: '#FBF3EE' }}>
        <div className="wrap" style={{ maxWidth: '920px', margin: '0 auto' }}>
          <div className="center-head">
            <p className="eyebrow reveal">Apply<b>.</b></p>
            <h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>Make the most of your skill set</h2>
            <p className="lead reveal" style={{ marginTop: '14px', transitionDelay: '.08s' }}>Create a test with us today.</p>
          </div>

          {sent ? (
            <div className="ok reveal">Thanks — we&apos;ll review your application and be in touch.</div>
          ) : (
            <form className="form reveal" onSubmit={onSubmit}>
              <div className="frow" style={{ gridTemplateColumns: '1fr 1fr 1fr' }}>
                <div className="field"><label>Subject</label><input type="text" required /></div>
                <div className="field">
                  <label>Field of expertise</label>
                  <select required defaultValue="">
                    <option value="">Select</option>
                    <option>HR</option>
                    <option>Administration</option>
                    <option>Customer Success</option>
                    <option>Data Analysis</option>
                    <option>Engineering</option>
                    <option>Finance</option>
                    <option>Leadership</option>
                    <option>Marketing</option>
                    <option>Sales</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="field"><label>How did you hear about Testlify?</label><input type="text" required /></div>
              </div>
              <div className="field">
                <label>Tell us more about your expertise and experience, and specify the tests/topics you&apos;re interested in developing</label>
                <textarea required style={{ minHeight: '60px' }}></textarea>
              </div>
              <div className="frow" style={{ gridTemplateColumns: '1fr 1fr 1fr 1fr' }}>
                <div className="field"><label>First name</label><input type="text" required /></div>
                <div className="field"><label>Last name</label><input type="text" required /></div>
                <div className="field"><label>Email</label><input type="email" required placeholder="jane@company.com" /></div>
                <div className="field"><label>Linkedin URL</label><input type="url" required placeholder="linkedin.com/in/jane" /></div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button type="submit" className="submit" style={{ width: 'auto', padding: '15px 32px' }}>Submit</button>
              </div>
            </form>
          )}
        </div>
      </section>

      <section className="sec">
        <div className="wrap" style={{ maxWidth: '680px', margin: '0 auto 44px', textAlign: 'center' }}>
          <p className="eyebrow reveal">Integrations<b>.</b></p>
          <h2 className="h2 reveal" style={{ marginBottom: '14px', transitionDelay: '.04s' }}>Testlify integrates seamlessly with 100+ ATS tools</h2>
          <p className="lead reveal" style={{ transitionDelay: '.08s' }}>Native integrations with Workday, Greenhouse, Lever, iCIMS and 97 more ATS platforms — no middleware, no data mapping required.</p>
        </div>
        <div className="wrap reveal intg-grid">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <div className="intg-tile"><img src="https://testlify.com/wp-content/uploads/2024/09/Workday_Inc.-Logo.wine_-1-2048x1365-2.png" alt="Workday" /></div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <div className="intg-tile"><img src="https://testlify.com/wp-content/uploads/2023/03/629a0bbcb04c5ae587c411c2-1-1.png" alt="Greenhouse" /></div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <div className="intg-tile"><img src="https://testlify.com/wp-content/uploads/2025/10/Lever_Employ_Logo_Horizontal_Turquoise_Black-300x43-1.png?wsr" alt="Lever" /></div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <div className="intg-tile"><img src="https://testlify.com/wp-content/uploads/2025/10/SR-SAP-Logo.svg" alt="SmartRecruiters" /></div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <div className="intg-tile"><img src="https://testlify.com/wp-content/uploads/2024/09/BambooHR-Logo-1-2048x1152-2.png" alt="BambooHR" /></div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <div className="intg-tile"><img src="https://testlify.com/wp-content/uploads/2025/10/Successfactors-Logo-Vector.svg-.png?wsr" alt="SuccessFactors" /></div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <div className="intg-tile"><img src="https://testlify.com/wp-content/uploads/2025/10/logo.svg" alt="UKG" /></div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <div className="intg-tile"><img src="https://testlify.com/wp-content/uploads/2025/10/681b1f74457e6f968fdaaa8d_MASTER_RECRUITEE_COLOUR_PREFERRED-LOGO-TO-USE-1024x313.png?wsr" alt="Recruitee" /></div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <div className="intg-tile"><img src="https://testlify.com/wp-content/uploads/2024/08/zoho-recruit-logo-1.png" alt="Zoho Recruit" /></div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <div className="intg-tile"><img src="https://testlify.com/wp-content/uploads/2025/10/JazzHR_Employ_Logo_Horizontal_Purple_Black-1024x131.png?wsr" alt="JazzHR" /></div>
        </div>
      </section>

      <SecuritySection
        eyebrow="Security"
        heading="Built to keep your organization secure"
        sub="Top-tier admin management, enhanced security integrations, stringent data governance, comprehensive compliance audits and strong privacy protections."
      />

      <Testimonials />
      <Recognition bg="#FBF3EE" />

      <CtaBand />
      <SiteFooter />
    </>
  );
}
