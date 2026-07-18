import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

const CSS = `
.legalhero{padding:64px 28px 30px;background:linear-gradient(180deg,#FFF6F4,#fff);border-bottom:1px solid #F0E2E3;}
.legalhero .wrap{max-width:900px;}
.legalhero h1{font-size:44px;line-height:1.06;font-weight:800;letter-spacing:-1.4px;margin:10px 0 0;color:#1A1014;}
.updated{font-size:13.5px;color:#8A7A7D;margin:14px 0 0;font-weight:500;}
.legalbody{padding:56px 28px 90px;}
.legalbody .wrap{max-width:820px;}
.legalbody h2{font-size:24px;font-weight:700;letter-spacing:-.5px;margin:44px 0 14px;color:#1A1014;}
.legalbody h2:first-child{margin-top:0;}
.legalbody h3{font-size:18px;font-weight:700;margin:26px 0 10px;color:#1A1014;}
.legalbody p{font-size:15.5px;line-height:1.72;color:#5A4B4E;margin:0 0 14px;}
.legalbody ul{margin:0 0 16px;padding-left:22px;}
.legalbody li{font-size:15.5px;line-height:1.72;color:#5A4B4E;margin:0 0 8px;}
.legalbody a{color:#F23F44;font-weight:600;}
.legalbody a:hover{color:#DC3137;}
.legalnote{background:#FBF3EE;border:1px solid #F0E2E3;border-radius:14px;padding:20px 24px;margin:24px 0;}
.legalnote p{margin:0;font-size:14.5px;}
.toc{background:#fff;border:1px solid #EFE2E3;border-radius:16px;padding:22px 26px;margin:0 0 34px;}
.toc p{font-size:12.5px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#8A7A7D;margin:0 0 12px;}
.toc ol{margin:0;padding-left:20px;}
.toc li{font-size:14.5px;margin:0 0 7px;}
.toc a{color:#5A4B4E;font-weight:500;}
.toc a:hover{color:#F23F44;}
@media(max-width:920px){.legalhero h1{font-size:34px;}.legalbody{padding:44px 22px 70px;}}
`;

export default function CcpaPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <SiteHeader
        announcement="Your data, protected — SOC 2, ISO 27001, GDPR & CCPA"
        announcementCta="Trust center"
        announcementHref="/trust"
        homeHref="/"
      />

      <section className="legalhero"><div className="wrap">
        <p className="eyebrow">Trust &amp; compliance<b>.</b></p>
        <h1>CCPA Compliance</h1>
        <p className="updated">Last updated: July 2026</p>
      </div></section>

      <section className="legalbody"><div className="wrap">
        <p>Testlify supports compliance with the California Consumer Privacy Act (CCPA) and respects the privacy rights of California residents.</p>

        <h2>1. We do not sell personal data</h2>
        <p>Testlify does not sell personal information. We process data solely to provide and improve the Services.</p>

        <h2>2. Your CCPA rights</h2>
        <ul>
          <li>The right to know what personal information we collect and how it is used;</li>
          <li>The right to request deletion of your personal information;</li>
          <li>The right to opt out of the sale of personal information (we do not sell data);</li>
          <li>The right not to be discriminated against for exercising your rights.</li>
        </ul>

        <h2>3. How to exercise your rights</h2>
        <p>Submit a request through <Link href="/contact">Contact us</Link>. We will verify your identity and respond within the timeframes required by law.</p>

        <h2>4. Categories of information</h2>
        <p>We collect account, billing, assessment and usage data as described in our <Link href="/privacy-policy">Privacy Policy</Link>.</p>

        <div className="legalnote"><p>This is a plain-language summary for this recreation. For definitive CCPA terms, please refer to official Testlify documentation.</p></div>
      </div></section>

      <SiteFooter />
    </>
  );
}
