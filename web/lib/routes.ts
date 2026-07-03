/**
 * Central route map. The design prototype linked to ".dc.html" files;
 * here every destination is a real Next.js route so cross-page links
 * (header mega-menu, footer, cards) resolve consistently.
 */
export const routes = {
  home: "/",
  product: "/product",
  productTestlifyAi: "/product/testlify-ai",
  aiResumeScreener: "/product/ai-resume-screener",
  testLibrary: "/test-library",
  testDetail: "/test-library/attention-to-detail-textual",
  pricing: "/pricing",
  solutions: "/solutions",
  integrations: "/integrations",
  customers: "/customers",
  blog: "/blog",
  blogArticle: "/blog/skills-based-hiring-guide",
  resources: "/resources",
  about: "/about",
  careers: "/careers",
  security: "/security",
  legal: "/legal",
  sectionTemplates: "/section-templates",
} as const;

export type RouteKey = keyof typeof routes;
