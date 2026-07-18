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
  productVideoInterviewing: "/video-interviewing-tool",
  productScience: "/science",
  productLiveDemo: "/demo",
  productFeatures: "/features",
  libraryInterviews: "/interviews",
  libraryBuildYourOwn: "/library/build-your-own",
  testLibrary: "/test-library",
  testDetail: "/test-library/attention-to-detail-textual",
  pricing: "/pricing",
  solutions: "/solutions",
  integrations: "/integrations",
  customers: "/customer-success-stories",
  blog: "/blog",
  blogArticle: "/blog/skills-based-hiring-guide",
  resourcesGlossary: "/hr-glossary",
  resourcesTools: "/hr-tools",
  resourcesHiringGuides: "/hiring-guides",
  resourcesJdTemplates: "/job-description-templates",
  resourcesCompetitors: "/alternatives",
  partners: "/our-partners",
  about: "/about",
  careers: "/careers",
  contact: "/contact",
  security: "/trust",
  trustCenter: "/trust-center",
  compliance: "/compliance",
  compare: "/compare",
  sitemap: "/sitemap",
  legal: "/legal",
  sectionTemplates: "/section-templates",
} as const;

export type RouteKey = keyof typeof routes;
