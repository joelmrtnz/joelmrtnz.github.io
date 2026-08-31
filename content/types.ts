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
  education: { degree: string; institution: string; status: string };
  languages: { language: string; level: string }[];
};
