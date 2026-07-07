import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";
import { routes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Sitemap",
  description:
    "The full Testlify site — every section and page, grouped the way the navigation is organised.",
};

type Status = "built" | "template" | "pending" | "audited";

const DOT: Record<Status, string> = {
  built: "#2A6FDB",
  template: "#8A5A3C",
  pending: "#E14B50",
  audited: "#22A05B",
};

type Chip = { label: string; href: string; status: Status; note?: string };
type Block = { glabel?: string; chips: Chip[] };
type Card = { title: string; tag?: string; sub: string; blocks: Block[] };

/* Slugged template instances that already ship a real page. */
const featureDetail = `${routes.productFeatures}/anti-cheating-proctoring`;
const caseStudy = `${routes.customers}/arch-advisory-group`;

const CARDS: Card[] = [
  {
    title: "Core & nav",
    sub: "Top level: Product · Library · Solutions · Pricing · Resources",
    blocks: [
      {
        chips: [
          { label: "Home", href: routes.home, status: "audited" },
          { label: "Pricing", href: routes.pricing, status: "audited" },
          { label: "Compare plans", href: routes.compare, status: "built" },
        ],
      },
    ],
  },
  {
    title: "Product",
    sub: "The product story: screen → assess → interview → hire",
    blocks: [
      {
        chips: [
          { label: "Testlify AI", href: routes.productTestlifyAi, status: "built", note: "(+platform hub)" },
          { label: "AI resume screener", href: routes.aiResumeScreener, status: "built" },
          { label: "Skill assessments", href: routes.productSkillAssessments, status: "built" },
          { label: "AI interviews", href: routes.libraryInterviews, status: "built" },
          { label: "Video interviewing", href: routes.productVideoInterviewing, status: "built", note: "(distinct page)" },
          { label: "Features", href: routes.productFeatures, status: "built", note: "(1 page ← 27)" },
          { label: "Features detail", href: featureDetail, status: "template", note: "(1 template → all features)" },
          { label: "ATS integrations", href: routes.integrations, status: "built" },
          { label: "Why it works", href: routes.productScience, status: "built", note: "(science + trust)" },
          { label: "Live product demo", href: routes.productLiveDemo, status: "built" },
        ],
      },
    ],
  },
  {
    title: "Library",
    sub: "Tests + interviews in one catalogue; test-type solution pages fold into filters",
    blocks: [
      {
        chips: [
          { label: "Test library", href: routes.testLibrary, status: "built" },
          { label: "Test library detail", href: routes.testDetail, status: "template" },
          { label: "Interview library", href: routes.libraryInterviews, status: "built" },
          { label: "Interview library detail", href: routes.libraryInterviews, status: "template" },
          { label: "Build your own", href: routes.libraryBuildYourOwn, status: "built" },
        ],
      },
    ],
  },
  {
    title: "Solutions",
    sub: "Hub + pages, 4 groups (test-type retained)",
    blocks: [
      { chips: [{ label: "Solutions hub", href: routes.solutions, status: "built" }] },
      {
        glabel: "By use case (10)",
        chips: [{ label: "Use-case page", href: routes.solutions, status: "built", note: "(1 template → Volume, Remote, Campus…)" }],
      },
      {
        glabel: "By industry (13)",
        chips: [{ label: "Industry page", href: routes.solutions, status: "built", note: "(1 template → IT, SaaS, Healthcare…)" }],
      },
      {
        glabel: "By company size (5)",
        chips: [{ label: "Company-size page", href: routes.solutions, status: "built", note: "(1 template → Startups, Mid-market…)" }],
      },
      {
        glabel: "By test type (retained)",
        chips: [{ label: "Test-type page", href: routes.solutions, status: "built", note: "(1 template → Coding, Cognitive…)" }],
      },
    ],
  },
  {
    title: "Resources",
    sub: "Content & tools only; programs merged; ebooks/podcasts fold into Blog",
    blocks: [
      {
        chips: [
          { label: "Blog", href: routes.blog, status: "built" },
          { label: "Blog detail", href: routes.blogArticle, status: "template" },
        ],
      },
      {
        glabel: "Tools",
        chips: [
          { label: "HR tools landing", href: routes.resourcesTools, status: "built" },
          { label: "HR tools detail", href: routes.resourcesTools, status: "template", note: "(1 template → all calculators)" },
          { label: "JD templates", href: routes.resourcesJdTemplates, status: "built" },
        ],
      },
      {
        glabel: "Learn & decide",
        chips: [
          { label: "Hiring guides landing", href: routes.resourcesHiringGuides, status: "built" },
          { label: "Hiring guides detail", href: routes.resourcesHiringGuides, status: "template", note: "(1 template → ~90 role guides)" },
          { label: "HR glossary archive", href: routes.resourcesGlossary, status: "built", note: "(500+ terms)" },
          { label: "Glossary detail", href: routes.resourcesGlossary, status: "template", note: "(1 template → all terms)" },
          { label: "Competitors landing", href: routes.resourcesCompetitors, status: "built" },
          { label: "Competitors detail", href: routes.resourcesCompetitors, status: "template" },
          { label: "Partners", href: routes.partners, status: "built", note: "(3 programs merged)" },
        ],
      },
    ],
  },
  {
    title: "Company",
    tag: "· footer only",
    sub: "Not in top nav — destinations from the footer",
    blocks: [
      {
        chips: [
          { label: "About", href: routes.about, status: "built", note: "(+leadership, 1 page)" },
          { label: "Customers", href: routes.customers, status: "built" },
          { label: "Case study detail", href: caseStudy, status: "template", note: "(1 template → all stories)" },
          { label: "Careers", href: routes.careers, status: "built" },
          { label: "Contact", href: routes.contact, status: "built", note: "(+book a demo)" },
        ],
      },
      {
        glabel: "Trust center — subpages become tabs",
        chips: [
          { label: "Trust landing", href: routes.trustCenter, status: "built" },
          { label: "Compliances", href: routes.compliance, status: "built" },
          { label: "Trust center", href: routes.trustCenter, status: "built", note: "(Data · Privacy · Security tabs)" },
        ],
      },
    ],
  },
  {
    title: "Legal & policy",
    sub: "All 13 policies covered by one legal hub",
    blocks: [{ chips: [{ label: "Legal hub", href: routes.legal, status: "built" }] }],
  },
  {
    title: "Shared components",
    tag: "· imported, not copied",
    sub: "Reusable building blocks imported across pages",
    blocks: [
      {
        chips: [
          { label: "Site header", href: routes.sectionTemplates, status: "built", note: "(mega-menu)" },
          { label: "Site footer", href: routes.sectionTemplates, status: "built" },
          { label: "CTA button", href: routes.sectionTemplates, status: "built" },
          { label: "FAQ accordion", href: routes.sectionTemplates, status: "built" },
          { label: "Security section", href: routes.sectionTemplates, status: "built" },
          { label: "Use-case card", href: routes.sectionTemplates, status: "built" },
          { label: "Section templates", href: routes.sectionTemplates, status: "built", note: "(dev reference)" },
        ],
      },
    ],
  },
  {
    title: "Page templates",
    tag: "· data-driven",
    sub: "One template renders every instance in its family — edit data, not layout",
    blocks: [
      { glabel: "Product", chips: [{ label: "Feature detail", href: featureDetail, status: "template" }] },
      { glabel: "Company", chips: [{ label: "Case study", href: caseStudy, status: "template" }] },
      {
        glabel: "Solutions",
        chips: [
          { label: "Use-case", href: routes.solutions, status: "template" },
          { label: "Industry", href: routes.solutions, status: "template" },
          { label: "Company size", href: routes.solutions, status: "template" },
          { label: "Test type", href: routes.solutions, status: "template" },
        ],
      },
      {
        glabel: "Resources",
        chips: [
          { label: "List / index", href: routes.resources, status: "template" },
          { label: "Article / detail", href: routes.blog, status: "template" },
          { label: "Hiring guide detail", href: routes.resourcesHiringGuides, status: "template" },
          { label: "Tool / calculator", href: routes.resourcesTools, status: "template" },
          { label: "Competitor", href: routes.resourcesCompetitors, status: "template" },
          { label: "Glossary term", href: routes.resourcesGlossary, status: "template" },
        ],
      },
    ],
  },
];

const LEGEND: { status: Status; label: string }[] = [
  { status: "built", label: "Built" },
  { status: "template", label: "Template (data-driven)" },
  { status: "pending", label: "Pending" },
  { status: "audited", label: "Audited" },
];

function Dot({ status }: { status: Status }) {
  return (
    <span
      className="w-2 h-2 rounded-full shrink-0"
      style={{ background: DOT[status] }}
      aria-hidden
    />
  );
}

function ChipLink({ chip }: { chip: Chip }) {
  return (
    <Link
      href={chip.href}
      className="inline-flex items-center gap-1.5 bg-[#FDFAF8] border border-warm rounded-full pl-[9px] pr-3 py-[3px] text-[12.5px] text-ink whitespace-nowrap transition-[translate,box-shadow,border-color] duration-150 hover:-translate-y-px hover:border-[#FBD0D1] hover:shadow-[0_6px_16px_rgba(110,11,14,0.08)]"
    >
      <Dot status={chip.status} />
      {chip.label}
      {chip.note && <span className="text-faint">{chip.note}</span>}
    </Link>
  );
}

export default function SitemapPage() {
  return (
    <>
      <SiteHeader
        announcement="One platform to screen, assess, interview and hire on skill"
        announcementCta="See pricing"
        announcementHref={routes.pricing}
      />

      <section className="px-7 pt-14 pb-24 max-[720px]:px-5">
        <div className="max-w-[1200px] mx-auto">
          {/* Intro */}
          <Reveal className="mb-6">
            <p className="text-[12px] font-bold tracking-[0.16em] uppercase text-muted mb-2">
              Site structure<b className="text-coral font-bold">.</b>
            </p>
            <h1 className="text-[34px] leading-[1.1] font-extrabold tracking-[-1px] text-ink m-0 mb-2">
              Testlify sitemap
            </h1>
            <p className="text-[15px] leading-[1.6] text-body m-0 max-w-[720px]">
              Every section and page on the site, grouped the way the navigation
              is organised. A five-item nav — <b>Product · Library · Solutions ·
              Pricing · Resources</b> — with company, trust and legal pages
              living in the footer.
            </p>
          </Reveal>

          {/* Stats */}
          <Reveal className="flex gap-6 flex-wrap my-4 mb-7">
            <div>
              <span className="text-[22px] font-extrabold text-ink">31</span>
              <span className="text-[12px] text-body ml-1.5">pages built</span>
            </div>
            <div>
              <span className="text-[22px] font-extrabold text-faint2">15</span>
              <span className="text-[12px] text-body ml-1.5">
                templates (data-driven)
              </span>
            </div>
          </Reveal>

          {/* Legend */}
          <Reveal className="flex gap-4 flex-wrap mb-6 text-[12.5px] text-body items-center">
            {LEGEND.map((l) => (
              <span key={l.status} className="inline-flex items-center gap-1.5">
                <Dot status={l.status} />
                {l.label}
              </span>
            ))}
            <span className="text-muted">— every chip links to its page</span>
          </Reveal>

          {/* Card grid */}
          <div className="grid grid-cols-[repeat(auto-fill,minmax(360px,1fr))] gap-4 items-start max-[720px]:grid-cols-1">
            {CARDS.map((card, ci) => (
              <Reveal
                key={card.title}
                delay={(ci % 3) * 0.05}
                className="bg-white border border-warm rounded-2xl px-6 py-[22px]"
              >
                <h2 className="text-[16px] font-bold m-0 mb-1 text-coral">
                  {card.title}
                  {card.tag && (
                    <span className="font-medium text-[12px] text-faint">
                      {" "}
                      {card.tag}
                    </span>
                  )}
                </h2>
                <p className="text-[12px] text-faint m-0 mb-3">{card.sub}</p>
                {card.blocks.map((block, bi) => (
                  <div key={bi}>
                    {block.glabel && (
                      <p className="text-[11px] font-bold tracking-[0.08em] uppercase text-muted mt-3 mb-1.5">
                        {block.glabel}
                      </p>
                    )}
                    <div className="flex flex-wrap gap-1.5 items-center">
                      {block.chips.map((chip) => (
                        <ChipLink key={chip.label} chip={chip} />
                      ))}
                    </div>
                  </div>
                ))}
              </Reveal>
            ))}
          </div>

          {/* IA note */}
          <Reveal className="mt-7 bg-white border border-warm rounded-2xl px-6 py-[22px] text-[13px] leading-[1.8] text-body">
            <b className="text-ink">Naming convention.</b> Every detail or
            template page keeps its landing&apos;s full name plus{" "}
            <code className="text-[12px]">-detail</code> — so{" "}
            <code className="text-[12px]">library-tests</code> becomes{" "}
            <code className="text-[12px]">library-tests-detail</code>,{" "}
            <code className="text-[12px]">company-customers</code> becomes{" "}
            <code className="text-[12px]">company-customers-detail</code>, and
            the parent-child relation reads at a glance. Multi-category solution
            templates and the generic resource list/detail templates keep their
            own names.
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
