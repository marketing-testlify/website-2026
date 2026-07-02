"use client";

import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import CtaButton from "@/components/CtaButton";

type DocKey = "privacy" | "terms" | "gdpr";

const TITLES: Record<DocKey, string> = {
  privacy: "Privacy Policy",
  terms: "Terms & Conditions",
  gdpr: "GDPR Compliance",
};

const NAV: { key: DocKey; label: string }[] = [
  { key: "privacy", label: "Privacy Policy" },
  { key: "terms", label: "Terms & Conditions" },
  { key: "gdpr", label: "GDPR" },
];

export default function LegalClient() {
  const [doc, setDoc] = useState<DocKey>("privacy");

  const select = (key: DocKey) => {
    setDoc(key);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <SiteHeader announcement="Testlify AI is here — screen, interview & score candidates automatically." />

      {/* Hero */}
      <section className="bg-[radial-gradient(1000px_440px_at_50%_-10%,#FFF0EE_0%,rgba(255,240,238,0)_60%),#fff] px-7 pt-[54px] pb-[30px] text-center">
        <div className="max-w-[760px] mx-auto">
          <p className="text-[12.5px] font-semibold tracking-[0.14em] uppercase text-[#8A7A7D] m-0 mb-[14px]">
            Legal<b className="text-[#F23F44] font-semibold">.</b>
          </p>
          <h1 className="text-[46px] leading-[1.06] font-extrabold tracking-[-1.6px] mt-[6px] mb-3 text-[#1A1014] max-[920px]:text-[34px] max-[920px]:tracking-[-1px]">
            {TITLES[doc]}
          </h1>
          <p className="text-[13.5px] text-[#9A878A] font-semibold m-0">
            Last updated · June 1, 2026
          </p>
        </div>
      </section>

      {/* Body grid */}
      <div className="grid grid-cols-[230px_1fr] gap-[54px] max-w-[1100px] mx-auto pt-[54px] px-7 pb-24 max-[920px]:grid-cols-1 max-[920px]:gap-7">
        <nav className="sticky top-[130px] self-start flex flex-col gap-1 max-[920px]:static max-[920px]:flex-row max-[920px]:flex-wrap">
          {NAV.map((n) => {
            const on = doc === n.key;
            return (
              <button
                key={n.key}
                onClick={() => select(n.key)}
                className={`text-left border-none font-[inherit] text-[15px] font-semibold py-[11px] px-[14px] rounded-[11px] cursor-pointer transition-all duration-200 ${
                  on
                    ? "bg-[#FFF0F0] text-[#F23F44]"
                    : "bg-transparent text-[#6A5A5D] hover:bg-[#FBF3EE]"
                }`}
              >
                {n.label}
              </button>
            );
          })}
        </nav>

        <div className="ldoc">
          {doc === "privacy" && (
            <div>
              <p className="intro">
                This Privacy Policy explains how Testlify collects, uses and protects personal information when you use our skills assessment and interviewing platform. We&apos;ve written it to be readable — if anything is unclear, contact privacy@testlify.com.
              </p>
              <h3>Information we collect</h3>
              <p>
                We collect information you provide directly — such as your name, email and company details when you create an account — and information generated as you use Testlify, including assessment results, usage logs and device data.
              </p>
              <h3>How we use information</h3>
              <ul>
                <li>To provide, maintain and improve the Testlify platform.</li>
                <li>To deliver assessment results and analytics to authorized users.</li>
                <li>To communicate with you about your account and our services.</li>
                <li>To detect, prevent and address security and integrity issues.</li>
              </ul>
              <h3>Candidate data</h3>
              <p>
                When you take an assessment, the hiring organization is the controller of your data and Testlify acts as a processor on their behalf. You may request access to or deletion of your data at any time via the controls in your account or by contacting us.
              </p>
              <h3>Data retention &amp; security</h3>
              <p>
                We retain personal data only as long as necessary to provide our services and meet legal obligations. Data is encrypted in transit and at rest, and access is strictly controlled and logged.
              </p>
              <h3>Your rights</h3>
              <p>
                Depending on your location, you may have rights to access, correct, delete or port your personal data, and to object to or restrict certain processing. We honor these requests in line with applicable law.
              </p>
            </div>
          )}

          {doc === "terms" && (
            <div>
              <p className="intro">
                These Terms &amp; Conditions govern your access to and use of Testlify. By creating an account or using the platform, you agree to these terms.
              </p>
              <h3>Your account</h3>
              <p>
                You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account. You must provide accurate information and keep it up to date.
              </p>
              <h3>Acceptable use</h3>
              <ul>
                <li>Do not use Testlify for any unlawful or discriminatory purpose.</li>
                <li>Do not attempt to disrupt, reverse-engineer or gain unauthorized access to the platform.</li>
                <li>Do not misuse candidate data or violate applicable employment and privacy laws.</li>
              </ul>
              <h3>Subscriptions &amp; billing</h3>
              <p>
                Paid plans are billed in advance on a monthly or annual basis and renew automatically unless cancelled. Fees are non-refundable except where required by law. We may change pricing with reasonable notice.
              </p>
              <h3>Intellectual property</h3>
              <p>
                Testlify and its content, including the test library, remain the property of Testlify and its licensors. You retain ownership of the data you submit, and grant us a limited license to process it to provide the service.
              </p>
              <h3>Limitation of liability</h3>
              <p>
                Testlify is provided &quot;as is&quot;. To the maximum extent permitted by law, Testlify is not liable for indirect, incidental or consequential damages arising from your use of the platform.
              </p>
            </div>
          )}

          {doc === "gdpr" && (
            <div>
              <p className="intro">
                Testlify is committed to compliance with the EU General Data Protection Regulation (GDPR). This section explains how we meet those obligations as both a controller and a processor.
              </p>
              <h3>Roles</h3>
              <p>
                For our customers&apos; candidate data, the hiring organization is the data controller and Testlify is the data processor. For account and billing data of our direct customers, Testlify is the controller.
              </p>
              <h3>Lawful basis</h3>
              <p>
                We process personal data on the basis of contract performance, legitimate interests, legal obligation, or consent — as appropriate to each processing activity.
              </p>
              <h3>Data Processing Agreement</h3>
              <p>
                We offer a GDPR-compliant Data Processing Agreement (DPA) to all customers, available on request or through your account settings. Our DPA includes the EU Standard Contractual Clauses for international transfers.
              </p>
              <h3>Sub-processors</h3>
              <p>
                We maintain a current list of sub-processors and provide notice of changes. All sub-processors are bound by data protection obligations consistent with this policy.
              </p>
              <h3>Data subject requests</h3>
              <ul>
                <li>Right of access, rectification and erasure.</li>
                <li>Right to restrict or object to processing.</li>
                <li>Right to data portability.</li>
                <li>Right to lodge a complaint with a supervisory authority.</li>
              </ul>
              <p>
                To exercise any of these rights, contact dpo@testlify.com and we&apos;ll respond within the statutory timeframe.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Questions CTA */}
      <section style={{ background: "#1A1014", color: "#fff", textAlign: "center", padding: "72px 28px" }}>
        <div className="max-w-[640px] mx-auto">
          <h2 style={{ fontSize: "32px", fontWeight: 800, letterSpacing: "-1px", color: "#fff", margin: "0 0 14px" }}>
            Questions about our policies?
          </h2>
          <p style={{ fontSize: "18px", color: "rgba(255,255,255,.78)", margin: "0 0 26px" }}>
            Our team is happy to help. Reach us at legal@testlify.com.
          </p>
          <CtaButton label="Contact us" href="#" variant="light" size="md" icon="arrow" />
        </div>
      </section>

      {/* Scoped styles for the legal document typography */}
      <style>{`
        .ldoc h2 { font-size:28px; font-weight:800; letter-spacing:-.8px; margin:0 0 10px; }
        .ldoc h3 { font-size:18px; font-weight:700; letter-spacing:-.3px; margin:30px 0 10px; color:#1A1014; }
        .ldoc p { font-size:16px; line-height:1.72; color:#3A2C30; margin:0 0 16px; }
        .ldoc ul { margin:0 0 18px; padding-left:22px; list-style:disc; }
        .ldoc li { font-size:16px; line-height:1.7; color:#3A2C30; margin-bottom:8px; }
        .ldoc .intro { font-size:17px; color:#5A4B4E; margin-bottom:26px; }
      `}</style>

      <SiteFooter />
    </>
  );
}
