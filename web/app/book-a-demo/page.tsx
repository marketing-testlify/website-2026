'use client';

import { useState } from 'react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaButton from '@/components/CtaButton';
import CtaBand from '@/components/CtaBand';

const CSS = `
.hero{padding:72px 28px 88px;background:radial-gradient(1100px 540px at 78% 6%,#FFF0EE 0%,rgba(255,240,238,0) 60%),#fff;position:relative;overflow:hidden;}
.bad-herogrid{display:grid;grid-template-columns:1.02fr 1.1fr;gap:60px;align-items:center;}
.pill{display:inline-flex;align-items:center;gap:9px;background:#fff;border:1px solid #F4D9DA;border-radius:999px;padding:7px 15px 7px 8px;font-size:13px;font-weight:600;color:#A8323A;box-shadow:0 6px 16px rgba(110,11,14,.06);}
.pilltag{background:#F23F44;color:#fff;font-size:11px;font-weight:700;letter-spacing:.04em;padding:3px 9px;border-radius:999px;}
.acc{color:#F23F44;}
.heroctas{display:flex;align-items:center;gap:14px;flex-wrap:wrap;margin-top:30px;}
.trust{display:flex;align-items:center;gap:13px;flex-wrap:wrap;font-size:13.5px;color:#8A7A7D;font-weight:600;margin-top:26px;}
.bad-trust-l{text-align:center;font-size:13.5px;font-weight:600;letter-spacing:1.5px;color:#A9999C;text-transform:uppercase;margin:0 0 30px;}
.bad-marq-wrap{position:relative;max-width:1100px;margin:0 auto;overflow:hidden;-webkit-mask-image:linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent);mask-image:linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent);}
.bad-marq{display:flex;width:max-content;gap:70px;animation:badmarquee 26s linear infinite;align-items:center;}
@keyframes badmarquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
.bad-marq img{height:46px;max-width:150px;object-fit:contain;filter:grayscale(100%);opacity:.75;transition:filter .25s,opacity .25s;}
.bad-marq img:hover{filter:none;opacity:1;}
@media(max-width:960px){.bad-herogrid{grid-template-columns:1fr !important;gap:44px;}.hero{padding:44px 22px 60px;}}
.form{background:#fff;border:1px solid #F0E2E3;border-radius:22px;padding:34px;box-shadow:0 40px 90px rgba(110,11,14,.16);}
.frow{display:grid;grid-template-columns:1fr 1fr;gap:14px;}
.field{margin-bottom:16px;}
.field label{display:block;font-size:13px;font-weight:600;color:#2A1A1D;margin-bottom:7px;}
.field input{width:100%;font-family:inherit;font-size:15px;color:#1A1014;padding:13px 15px;border:1.5px solid #EEDFE0;border-radius:12px;background:#FEFCFB;box-sizing:border-box;transition:border-color .2s,box-shadow .2s;}
.field input:focus{outline:none;border-color:#F23F44;box-shadow:0 0 0 4px rgba(242,63,68,.12);}
.submit{width:100%;border:0;font-family:inherit;cursor:pointer;background:#F23F44;color:#fff;font-weight:700;font-size:16px;padding:15px;border-radius:13px;box-shadow:0 12px 26px rgba(242,63,68,.3);transition:transform .2s;}
.submit:hover{transform:translateY(-2px);}
.ok{background:#EAF8F0;border:1px solid #BFE8D2;color:#1B7F4B;border-radius:14px;padding:22px;font-size:15px;font-weight:600;text-align:center;}
@media(max-width:700px){.bad-logos{gap:24px;}.frow{grid-template-columns:1fr;}}
`;

const LOGOS = [
  { src: 'https://testlify.com/wp-content/uploads/2023/06/logo.psd_0006_xneelo.jpg', alt: 'Xneelo' },
  { src: 'https://testlify.com/wp-content/uploads/2023/06/db133d44-cc80-4cf2-b33e-9338dd329384.png', alt: 'Ascensos' },
  { src: 'https://testlify.com/wp-content/uploads/2023/06/logo.psd_0000_Kimp.jpg', alt: 'Kimp' },
  { src: 'https://testlify.com/wp-content/uploads/2023/06/IMG_20230627_235816.jpg', alt: 'Endiprev' },
  { src: 'https://testlify.com/wp-content/uploads/2024/01/logo-removebg-preview-1-1.png', alt: 'Newjaisa' },
  { src: 'https://testlify.com/wp-content/uploads/2023/06/join.png', alt: 'Join' },
  { src: 'https://testlify.com/wp-content/uploads/2023/09/virtual-gurus.jpeg', alt: 'Virtual Gurus' },
];

export default function BookADemoPage() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <SiteHeader
        announcement="Get a personalised walkthrough — see Testlify on your own roles."
        announcementCta="Book a demo"
        homeHref="/"
      />

      <section className="hero">
        <div className="wrap" style={{ maxWidth: 1180 }}>
          <div className="bad-herogrid">
            <div style={{ textAlign: 'left' }}>
              <div className="reveal" data-reveal style={{ transitionDelay: '.02s' }}>
                <span className="pill">
                  <span className="pilltag">DEMO</span> Personalised walkthrough
                </span>
              </div>
              <h1 className="h1 reveal" data-reveal style={{ marginTop: 22, transitionDelay: '.06s' }}>
                Book a demo and
                <br />
                <span className="acc">streamline</span> your hiring!
              </h1>
              <p className="lead reveal" data-reveal style={{ marginTop: 22, maxWidth: 480, transitionDelay: '.1s' }}>
                Unlock the potential of our platform, delve into the features, and explore affordable pricing plans
                that align with your recruitment strategy.
              </p>
              <div className="heroctas reveal" data-reveal style={{ transitionDelay: '.14s' }}>
                <CtaButton label="Try for free" href="/pricing" variant="primary" size="md" icon="arrow" magnetic />
                <CtaButton label="Contact us" href="/contact" variant="secondary" size="md" icon="none" />
              </div>
              <div className="trust reveal" data-reveal style={{ transitionDelay: '.18s' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7 }}>
                  <span style={{ color: '#F23F44', fontWeight: 700 }}>✓</span>No credit card required
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7 }}>
                  <span style={{ color: '#F23F44', fontWeight: 700 }}>✓</span>Used by 1,500+ teams
                </span>
              </div>
            </div>
            <div>
              {sent ? (
                <div className="ok reveal" data-reveal>
                  Thanks — we&apos;ll be in touch shortly to schedule your personal demo.
                </div>
              ) : (
                <form className="form reveal" data-reveal onSubmit={onSubmit}>
                  <div className="frow">
                    <div className="field">
                      <label>First name</label>
                      <input type="text" required placeholder="Jane" />
                    </div>
                    <div className="field">
                      <label>Last name</label>
                      <input type="text" required placeholder="Doe" />
                    </div>
                  </div>
                  <div className="field">
                    <label>Email</label>
                    <input type="email" required placeholder="jane@company.com" />
                  </div>
                  <div className="field">
                    <label>Phone number</label>
                    <input type="tel" required placeholder="(555) 123-4567" />
                  </div>
                  <button type="submit" className="submit">
                    Book your personal demo
                  </button>
                </form>
              )}
            </div>
          </div>
          <p className="bad-trust-l reveal" data-reveal style={{ marginTop: 56, transitionDelay: '.2s' }}>
            Trusted by <strong style={{ color: '#F23F44', fontWeight: 800 }}>1,500+</strong> hiring teams worldwide
          </p>
          <div className="bad-marq-wrap reveal" data-reveal style={{ transitionDelay: '.22s' }}>
            <div className="bad-marq">
              {[...LOGOS, ...LOGOS].map((logo, i) => (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img key={i} src={logo.src} alt={logo.alt} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
