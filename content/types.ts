export type Lang = 'en' | 'es';

export const LANGS: Lang[] = ['en', 'es'];

export const OTHER_LANG: Record<Lang, Lang> = { en: 'es', es: 'en' };

export const PATH_BY_LANG: Record<Lang, string> = { en: '/', es: '/es/' };

export type Role = {
  id: string;
  company: string;
  title: string;
  period: string;
  summary: string;
  highlights: string[];
};

export type ProfileLink = {
  label: string;
  value: string;
  href: string;
};

export type Profile = {
  name: string;
  role: string;
  location: string;
  timezone: string;
  lead: string;
  about: string[];
  links: ProfileLink[];
  stack: string[];
  education: { degree: string; institution: string };
  languages: { language: string; level: string }[];
};

export type Ui = {
  sections: { about: string; experience: string; contact: string };
  metrics: { modules: string; components: string; stories: string; clients: string };
  stack: string;
  facts: { education: string; languages: string; location: string };
  sourceOnGitHub: string;
  toggleTheme: string;
  switchLanguage: string;
  metaTitle: string;
  metaDescription: string;
};
