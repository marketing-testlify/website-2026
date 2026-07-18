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

export default function PrivacyPolicyPage() {
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
        <p className="eyebrow">Legal<b>.</b></p>
        <h1>Privacy Policy</h1>
        <p className="updated">Last updated: July 2026</p>
      </div></section>

      <section className="legalbody"><div className="wrap">
        <div className="toc">
          <p>On this page</p>
          <ol>
            <li><a href="#collect">What we collect</a></li>
            <li><a href="#use">How we use data</a></li>
            <li><a href="#share">Sharing &amp; disclosure</a></li>
            <li><a href="#rights">Your rights</a></li>
            <li><a href="#security">Security &amp; retention</a></li>
            <li><a href="#contact">Contact</a></li>
          </ol>
        </div>

        <p>Testlify is committed to protecting your privacy. This Policy explains what personal data we collect, how we use it, and the rights you have. We comply with GDPR, CCPA and other applicable data-protection laws.</p>

        <h2 id="collect">1. What we collect</h2>
        <p>We collect information you provide directly (account details, billing information, assessment content) and data generated through use of the Services (candidate responses, results, usage analytics, device and log data).</p>

        <h2 id="use">2. How we use data</h2>
        <ul>
          <li>To provide, maintain and improve the Services;</li>
          <li>To score assessments and generate results for hiring teams;</li>
          <li>To communicate with you about your account and updates;</li>
          <li>To meet legal, security and compliance obligations.</li>
        </ul>

        <h2 id="share">3. Sharing &amp; disclosure</h2>
        <p>We do not sell personal data. We share data only with sub-processors who help us run the Services under strict contractual safeguards, with your organisation (for candidate data), or where required by law. See our <Link href="/data-processing-agreement">Data Processing Agreement</Link> for details.</p>

        <h2 id="rights">4. Your rights</h2>
        <p>Depending on your location, you may have the right to access, correct, delete or port your data, and to object to or restrict certain processing. To exercise these rights, contact us — see also our <Link href="/gdpr-compliance">GDPR</Link> and <Link href="/ccpa">CCPA</Link> resources.</p>

        <h2 id="security">5. Security &amp; retention</h2>
        <p>We protect personal data with enterprise-grade safeguards, including encryption in transit and at rest. We are SOC 2 Type II and ISO 27001 certified. We retain data only as long as needed to provide the Services or meet legal obligations. Learn more in our <Link href="/security-practices">Security Practices</Link>.</p>

        <div className="legalnote"><p>This is a plain-language summary for this recreation. For the definitive privacy terms governing the live product, please refer to the official Testlify Privacy Policy.</p></div>

        <h2 id="contact">6. Contact</h2>
        <p>For any privacy question or data request, <Link href="/contact">contact our team</Link>.</p>
      </div></section>

      <SiteFooter />
    </>
  );
}
