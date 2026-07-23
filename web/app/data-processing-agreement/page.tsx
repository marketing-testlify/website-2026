import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

const legalCss = `
/* Testlify legal / policy doc layout — pairs with site-base.css */
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

export default function DataProcessingAgreementPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: legalCss }} />
      <SiteHeader
        announcement="Your data, protected — SOC 2, ISO 27001, GDPR & CCPA"
        announcementCta="Trust center"
        announcementHref="/security"
      />

      <section className="legalhero"><div className="wrap">
        <p className="eyebrow">Legal<b>.</b></p>
        <h1>Data Processing Agreement</h1>
        <p className="updated">Last updated: July 2026</p>
      </div></section>

      <section className="legalbody"><div className="wrap">
        <p>This Data Processing Agreement (&quot;DPA&quot;) forms part of the agreement between Testlify (&quot;Processor&quot;) and the customer (&quot;Controller&quot;) and governs the processing of personal data under GDPR and other applicable laws.</p>

        <h2>1. Roles</h2>
        <p>The Controller determines the purposes and means of processing personal data. Testlify acts as Processor, processing personal data only on the Controller&apos;s documented instructions.</p>

        <h2>2. Scope of processing</h2>
        <p>Testlify processes candidate and user personal data to provide assessment, interviewing and related Services, for the duration of the agreement.</p>

        <h2>3. Sub-processors</h2>
        <p>The Controller authorises Testlify to engage vetted sub-processors under written terms that impose data-protection obligations equivalent to this DPA. A current list is available on request.</p>

        <h2>4. Security measures</h2>
        <p>Testlify implements appropriate technical and organisational measures, including encryption, access controls and monitoring, aligned to SOC 2 Type II and ISO 27001. See our <Link href="/security-practices">Security Practices</Link>.</p>

        <h2>5. International transfers</h2>
        <p>Where personal data is transferred across borders, Testlify relies on approved transfer mechanisms such as Standard Contractual Clauses. See our <Link href="/data-privacy-framework">Data Privacy Framework</Link>.</p>

        <h2>6. Data subject rights &amp; breach</h2>
        <p>Testlify assists the Controller in responding to data-subject requests and will notify the Controller without undue delay after becoming aware of a personal-data breach.</p>

        <div className="legalnote"><p>This is a plain-language summary for this recreation. For the definitive DPA governing the live product, please refer to the official Testlify document.</p></div>
      </div></section>

      <SiteFooter />
    </>
  );
}
