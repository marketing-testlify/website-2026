export const routes = {
  pricing: '/pricing',
  contact: '/contact',
  testLibrary: '/test-library',
  solutions: '/solutions',
  home: '/',
  blog: '/blog',
  integrations: '/integrations',
} as const;

export type Routes = typeof routes;
