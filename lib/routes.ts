export const ROUTES = {
  home: '/',
  dashboard: '/dashboard',
  news: '#',
  beginners: '#',
  support: '#',
  rules: '#',
  matching: '#',
  topics: '#',
  alumni: '#',
  privacy: '#',
  contact: '#',
} as const;

export type RouteKey = keyof typeof ROUTES;
