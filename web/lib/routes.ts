/**
 * Central route map. The design prototype linked to ".dc.html" files;
 * here every destination is a real Next.js route so cross-page links
 * (header mega-menu, footer, cards) resolve consistently.
 */
export const routes = {
  home: "/",
  productTestlifyAi: "/ai-powered-talent-assessment-platform",
  aiResumeScreener: "/ai-resume-screener",
  productSkillAssessments: "/product/skill-assessments",
  productVideoInterviewing: "/product/video-interviewing",
  productScience: "/product/science",
  productLiveDemo: "/product/live-demo",
  productFeatures: "/product/features",
  libraryInterviews: "/library/interviews",
  libraryBuildYourOwn: "/library/build-your-own",
  testLibrary: "/test-library",
  testDetail: "/test-library/attention-to-detail-textual",
  pricing: "/pricing",
  solutions: "/solutions",
  integrations: "/integrations",
  customers: "/customers",
  blog: "/blog",
  blogArticle: "/blog/skills-based-hiring-guide",
  resourcesGlossary: "/resources/glossary",
  resourcesTools: "/resources/tools",
  resourcesHiringGuides: "/resources/hiring-guides",
  resourcesJdTemplates: "/resources/jd-templates",
  resourcesCompetitors: "/resources/competitors",
  partners: "/resources/partners",
  about: "/about",
  careers: "/careers",
  contact: "/contact",
  security: "/security",
  trustCenter: "/trust-center",
  compliance: "/compliance",
  compare: "/compare",
  sitemap: "/sitemap",
  legal: "/legal",
  sectionTemplates: "/section-templates",
} as const;

export type RouteKey = keyof typeof routes;
