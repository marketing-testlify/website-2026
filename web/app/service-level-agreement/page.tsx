import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

export default function ServiceLevelAgreementPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
.legalhero{padding:72px 0 28px;background:#fff;}
.legalhero .eyebrow{font-size:13px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:#8A7A7D;}
.legalhero .eyebrow b{color:#F23F44;}
.legalhero h1{font-size:44px;font-weight:800;letter-spacing:-1px;color:#1A1014;margin:10px 0 8px;text-wrap:balance;}
.legalhero .updated{font-size:14px;color:#8A7A7D;}
.legalbody{padding:24px 0 96px;background:#fff;}
.legalbody p,.legalbody li{font-size:16px;line-height:1.64;color:#5A4B4E;text-wrap:pretty;}
.legalbody h2{font-size:22px;font-weight:800;color:#1A1014;margin:34px 0 12px;text-wrap:balance;}
.legalbody ul{margin:12px 0 12px 0;padding-left:20px;}
.legalbody li{margin-bottom:8px;}
.legalbody strong{color:#1A1014;}
.legalnote{margin-top:36px;padding:20px 24px;background:#FFF8F7;border:1px solid #F0E2E3;border-radius:16px;}
.legalnote p{font-size:14.5px;color:#6C5A5D;margin:0;}
` }} />

      <SiteHeader announcement="Your data, protected — SOC 2, ISO 27001, GDPR & CCPA" />

      <section className="legalhero"><div className="wrap">
        <p className="eyebrow">Legal<b>.</b></p>
        <h1>Service Level Agreement</h1>
        <p className="updated">Last updated: July 2026</p>
      </div></section>

      <section className="legalbody"><div className="wrap">
        <p>This Service Level Agreement (&quot;SLA&quot;) describes the availability commitment and support standards Testlify provides to eligible customers.</p>

        <h2>1. Uptime commitment</h2>
        <p>Testlify targets 99.9% monthly uptime for the core Services, measured excluding scheduled maintenance and events outside our reasonable control.</p>

        <h2>2. Scheduled maintenance</h2>
        <p>We aim to perform maintenance during low-traffic windows and to give advance notice of any planned downtime that may affect the Services.</p>

        <h2>3. Support response times</h2>
        <ul>
          <li><strong>Critical</strong> (Service down): initial response within 1 business hour;</li>
          <li><strong>High</strong> (major feature impaired): within 4 business hours;</li>
          <li><strong>Normal</strong> (general issues): within 1 business day.</li>
        </ul>

        <h2>4. Status &amp; monitoring</h2>
        <p>We monitor the platform continuously and publish incident updates. Enterprise customers receive additional monitoring and escalation options.</p>

        <h2>5. Service credits</h2>
        <p>Where we fall short of the uptime commitment in a given month, eligible customers may request service credits in line with their agreement.</p>

        <div className="legalnote"><p>This is a plain-language summary for this recreation. For the definitive SLA governing the live product, please refer to the official Testlify document.</p></div>
      </div></section>

      <SiteFooter />
    </>
  );
}
