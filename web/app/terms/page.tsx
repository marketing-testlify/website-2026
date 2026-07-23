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

export default function TermsPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <SiteHeader
        announcement="Your data, protected — SOC 2, ISO 27001, GDPR & CCPA"
        announcementCta="Trust center"
        announcementHref="/security"
        homeHref="/"
      />

      <section className="legalhero"><div className="wrap">
        <p className="eyebrow">Legal<b>.</b></p>
        <h1>Terms &amp; Conditions</h1>
        <p className="updated">Last updated: July 2026</p>
      </div></section>

      <section className="legalbody"><div className="wrap">
        <div className="toc">
          <p>On this page</p>
          <ol>
            <li><a href="#accept">Acceptance of terms</a></li>
            <li><a href="#accounts">Accounts &amp; eligibility</a></li>
            <li><a href="#use">Acceptable use</a></li>
            <li><a href="#billing">Subscriptions &amp; billing</a></li>
            <li><a href="#ip">Intellectual property</a></li>
            <li><a href="#liability">Limitation of liability</a></li>
            <li><a href="#term">Termination</a></li>
            <li><a href="#contact">Contact</a></li>
          </ol>
        </div>

        <p>These Terms &amp; Conditions (&quot;Terms&quot;) govern your access to and use of the Testlify platform, websites and services (collectively, the &quot;Services&quot;). By using the Services, you agree to these Terms. Please read them carefully.</p>

        <h2 id="accept">1. Acceptance of terms</h2>
        <p>By creating an account, accessing, or using the Services, you confirm that you have read, understood and agree to be bound by these Terms and our <Link href="/privacy-policy">Privacy Policy</Link>. If you are using the Services on behalf of an organisation, you represent that you have authority to bind that organisation.</p>

        <h2 id="accounts">2. Accounts &amp; eligibility</h2>
        <p>You must be at least 18 years old and capable of forming a binding contract to use the Services. You are responsible for maintaining the confidentiality of your account credentials and for all activity under your account.</p>

        <h2 id="use">3. Acceptable use</h2>
        <p>You agree not to misuse the Services. In particular, you will not:</p>
        <ul>
          <li>Use the Services for any unlawful, fraudulent or discriminatory hiring practice;</li>
          <li>Attempt to reverse engineer, copy or resell any part of the Services without authorisation;</li>
          <li>Upload malicious code or attempt to disrupt the integrity or performance of the Services;</li>
          <li>Share assessment content in a way that compromises test validity.</li>
        </ul>

        <h2 id="billing">4. Subscriptions &amp; billing</h2>
        <p>Paid plans are billed according to the pricing selected at checkout. Testlify offers per-candidate and subscription pricing with no long-term annual lock-in unless expressly agreed. Fees are non-refundable except as set out in our <Link href="/fair-refund-policy">Fair Refund Policy</Link>.</p>

        <h2 id="ip">5. Intellectual property</h2>
        <p>All rights, title and interest in the Services — including assessment content, software and trademarks — remain the property of Testlify or its licensors. You retain ownership of the data you upload, and grant Testlify a limited licence to process it to provide the Services.</p>

        <h2 id="liability">6. Limitation of liability</h2>
        <p>To the maximum extent permitted by law, Testlify will not be liable for any indirect, incidental or consequential damages arising from your use of the Services. The Services are provided &quot;as is&quot; without warranties of any kind, except as required by law.</p>

        <h2 id="term">7. Termination</h2>
        <p>You may cancel your account at any time. We may suspend or terminate access if you breach these Terms. On termination, your right to use the Services ends, though certain provisions survive as required.</p>

        <div className="legalnote"><p>These Terms are a plain-language summary for this recreation. For the definitive terms governing the live product, please refer to the official Testlify legal documents.</p></div>

        <h2 id="contact">8. Contact</h2>
        <p>Questions about these Terms? <Link href="/contact">Contact our team</Link> and we&apos;ll be glad to help.</p>
      </div></section>

      <SiteFooter />
    </>
  );
}
