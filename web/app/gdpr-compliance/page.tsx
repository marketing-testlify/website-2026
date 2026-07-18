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

export default function GdprCompliancePage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: legalCss }} />
      <SiteHeader
        announcement="Your data, protected — SOC 2, ISO 27001, GDPR & CCPA"
        announcementCta="Trust center"
        announcementHref="/trust"
      />

      <section className="legalhero"><div className="wrap">
        <p className="eyebrow">Trust &amp; compliance<b>.</b></p>
        <h1>GDPR Compliance</h1>
        <p className="updated">Last updated: July 2026</p>
      </div></section>

      <section className="legalbody"><div className="wrap">
        <p>Testlify is built to help you hire in line with the EU General Data Protection Regulation (GDPR). Here&apos;s how we protect personal data and support your compliance.</p>

        <h2>1. Lawful, fair processing</h2>
        <p>We process personal data only on documented instructions and for clearly defined purposes — providing assessment, interviewing and related Services.</p>

        <h2>2. Data subject rights</h2>
        <p>We help you honour data-subject requests, including the rights to access, rectify, erase, restrict and port personal data, and to object to processing.</p>

        <h2>3. Data protection by design</h2>
        <p>Privacy is built into the product: encryption in transit and at rest, granular access controls, and data-minimisation by default.</p>

        <h2>4. International transfers</h2>
        <p>Cross-border transfers rely on approved mechanisms such as Standard Contractual Clauses. See our <Link href="/data-privacy-framework">Data Privacy Framework</Link>.</p>

        <h2>5. Sub-processors &amp; DPA</h2>
        <p>We engage vetted sub-processors under strict terms and offer a <Link href="/data-processing-agreement">Data Processing Agreement</Link> to all customers.</p>

        <h2>6. Certifications</h2>
        <p>Testlify maintains SOC 2 Type II and ISO 27001 certifications. Learn more in our <Link href="/security-practices">Security Practices</Link> and <Link href="/gdpr-faqs">GDPR FAQs</Link>.</p>

        <div className="legalnote"><p>This is a plain-language summary for this recreation. For definitive GDPR terms, please refer to official Testlify documentation.</p></div>
      </div></section>

      <SiteFooter />
    </>
  );
}
