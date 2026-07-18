import Link from "next/link";
import { routes } from "@/lib/routes";

const ROADMAP_URL = "https://roadmap.testlify.com/";
const HELP_URL = "https://help.testlify.com/";
const CODING_TESTS = "/solutions/coding-tests";

const FOOTER_COLS: { heading: string; links: [string, string][] }[] = [
  {
    heading: "Product",
    links: [
      ["Testlify AI", routes.productTestlifyAi],
      ["Test library", routes.testLibrary],
      ["ATS integrations", routes.integrations],
      ["Science", routes.productScience],
      ["Analytics", "#"],
      ["API", `${routes.productFeatures}#developers`],
      ["Reseller plan", "#"],
      ["Features", routes.productFeatures],
      ["What's new", ROADMAP_URL],
      ["White label", "#"],
      ["Video interviewing", routes.productVideoInterviewing],
      ["Product roadmap", ROADMAP_URL],
    ],
  },
  {
    heading: "Test type",
    links: [
      ["Role specific tests", routes.testLibrary],
      ["Language tests", routes.testLibrary],
      ["Programming tests", routes.testLibrary],
      ["Software skills tests", routes.testLibrary],
      ["Cognitive ability tests", routes.testLibrary],
      ["Situational judgment", routes.testLibrary],
      ["CEFR test", routes.testLibrary],
      ["Typing test", routes.testLibrary],
      ["Coding tests", CODING_TESTS],
      ["Psychometric tests", routes.testLibrary],
      ["Engineering tests", routes.testLibrary],
      ["Process knowledge tests", routes.testLibrary],
    ],
  },
  {
    heading: "Resources",
    links: [
      ["Blog", routes.blog],
      ["Join Testlify SME", "#"],
      ["Integration program", "#"],
      ["Sitemap", routes.sitemap],
      ["Knowledge base", "#"],
      ["Podcast", "#"],
      ["Referral program", "#"],
      ["Partnership program", "#"],
      ["Success stories", routes.customers],
      ["Competitors", routes.resourcesCompetitors],
      ["Hiring guides", routes.resourcesHiringGuides],
      ["HR glossary", routes.resourcesGlossary],
      ["HR tools", routes.resourcesTools],
    ],
  },
  {
    heading: "Terms",
    links: [
      ["Privacy policy", routes.legal],
      ["Terms & conditions", routes.legal],
      ["Refund policy", routes.legal],
      ["GDPR compliance", routes.legal],
      ["Cookie policy", routes.legal],
      ["Security practices", "#"],
      ["Security", routes.security],
      ["Data processing agreement", "#"],
      ["Data privacy framework", "#"],
      ["CCPA", routes.legal],
      ["Trust center", routes.trustCenter],
    ],
  },
  {
    heading: "Company",
    links: [
      ["About us", routes.about],
      ["Careers", routes.careers],
      ["For subject matter experts", "#"],
      ["Clients", routes.customers],
      ["Our partners", routes.partners],
      ["Press room", "#"],
      ["Investors", "#"],
      ["Write for us", "#"],
      ["Contact us", routes.contact],
      ["Help center", HELP_URL],
    ],
  },
];

const BACKERS: [string, string][] = [
  ["https://testlify.com/wp-content/uploads/2023/12/image-2-1.png", "Google for Startups"],
  ["https://testlify.com/wp-content/uploads/2023/12/image-1-1-1024x430.png", "Microsoft for Startups"],
  ["https://testlify.com/wp-content/uploads/2023/12/NV_Inception_Program_Logo_NV_Inception_Logo_H_CMYK-1080x662.png.webp", "NVIDIA Inception"],
  ["https://testlify.com/wp-content/uploads/2023/12/image-13.png", "SHRM Labs"],
];

export default function SiteFooter() {
  return (
    <>
      {/* Global CTA band — sits directly above the footer on every page */}
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#F23F44_0%,#A91E23_60%,#6E0B0E_100%)] px-7 py-24 text-center">
        <div className="absolute -top-[100px] -left-[60px] w-[340px] h-[340px] rounded-full bg-white/10" />
        <div className="absolute -bottom-[130px] -right-[50px] w-[320px] h-[320px] rounded-full bg-white/[0.08]" />
        <div className="relative z-[2] max-w-[1180px] mx-auto">
          <p className="text-[13px] font-bold tracking-[0.16em] uppercase text-white/[0.82] m-0 mb-4">
            Start hiring on skill<span className="text-white">.</span>
          </p>
          <h2 className="text-[48px] leading-[1.08] font-extrabold tracking-[-1.6px] text-white m-0 mx-auto max-w-[1010px] max-[600px]:text-[34px]">
            Your next great hire is already in
            <br />
            your pipeline
          </h2>
          <p className="text-[19px] text-[#FFE2E3] mt-5 mx-auto max-w-[560px] leading-[1.6]">
            Build your first assessment in about two minutes and start surfacing proven talent today — free for 7 days.
          </p>
          <div className="flex justify-center flex-wrap gap-3.5 mt-9">
            <Link href={routes.pricing} className="inline-flex items-center gap-2.5 bg-white text-coral font-bold text-[17px] px-8 py-4 rounded-[15px] shadow-[0_16px_34px_rgba(0,0,0,0.2)] hover:-translate-y-[3px] transition-transform">
              Try for free<span>→</span>
            </Link>
            <Link href={routes.contact} className="inline-flex items-center bg-white/15 text-white font-semibold text-[17px] px-[30px] py-4 rounded-[15px] border-[1.5px] border-white/35 hover:bg-white/25 transition-colors">
              Book a demo
            </Link>
          </div>
          <div className="flex justify-center flex-wrap gap-[26px] mt-[30px] text-[#FFD2D3] text-[14.5px] font-medium">
            <span>✓ Full feature access</span>
            <span>✓ No credit card required</span>
            <span>✓ Cancel anytime</span>
          </div>
        </div>
      </section>

      <footer className="bg-ink text-faint2 px-7 pt-12 pb-6">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-[1.7fr_1fr_1fr_1fr_1fr_1fr] gap-10 pb-12 border-b border-[#3A2D30] max-[900px]:grid-cols-2 max-[900px]:gap-[30px]">
            <div>
              <Link href={routes.home} className="block">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/brand/testlify-logo-white.svg" alt="Testlify" className="h-[30px] w-auto block" />
              </Link>
              <p className="text-[15px] leading-[1.6] my-4 mb-[22px] max-w-[280px] text-faint">
                The AI-powered skills assessment and interviewing platform helping teams hire the best talent — quickly, fairly, efficiently.
              </p>
              <div className="flex gap-[11px]">
                {[
                  ["LinkedIn", "in"],
                  ["X", "X"],
                  ["Facebook", "f"],
                  ["YouTube", "▶"],
                ].map(([label, glyph]) => (
                  <a key={label} href="#" aria-label={label} className="w-[38px] h-[38px] rounded-[11px] bg-[#2B2023] flex items-center justify-center text-faint2 text-[13px] font-semibold hover:bg-coral hover:text-white transition-colors">{glyph}</a>
                ))}
              </div>
            </div>
            {FOOTER_COLS.map((col) => (
              <div key={col.heading}>
                <div className="font-semibold text-[14px] text-white mb-[18px] tracking-[0.3px]">{col.heading}</div>
                <div className="flex flex-col gap-3 text-[14.5px]">
                  {col.links.map(([label, href]) => {
                    const isExternal = href.startsWith("http");
                    if (isExternal || href === "#") {
                      return (
                        <a
                          key={label}
                          href={href}
                          {...(isExternal ? { target: "_blank", rel: "noopener" } : {})}
                          className="text-faint hover:text-coral transition-colors"
                        >
                          {label}
                        </a>
                      );
                    }
                    return (
                      <Link key={label} href={href} className="text-faint hover:text-coral transition-colors">{label}</Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between flex-wrap gap-4 py-6 mb-6 border-b border-[#3A2D30] max-[900px]:justify-start">
            <span className="text-[12.5px] font-semibold tracking-[0.14em] uppercase text-muted">Backed by</span>
            <div className="flex items-center flex-wrap gap-3">
              {BACKERS.map(([src, alt]) => (
                <span key={alt} className="flex items-center justify-center h-12 px-3.5 rounded-xl bg-white shadow-[0_6px_18px_rgba(0,0,0,0.16)]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt={alt} className="max-h-6 max-w-[108px] object-contain" />
                </span>
              ))}
            </div>
          </div>

          <div className="flex justify-between items-center flex-wrap gap-4 text-[13.5px] text-muted">
            <span>© 2026 Testlify. All rights reserved.</span>
            <div className="flex gap-6 flex-wrap">
              {[
                ["Privacy policy", routes.legal],
                ["Terms & conditions", routes.legal],
                ["Security", routes.security],
                ["GDPR", routes.legal],
                ["Cookie policy", routes.legal],
              ].map(([label, href]) => (
                <Link key={label} href={href} className="text-muted hover:text-coral transition-colors">{label}</Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
