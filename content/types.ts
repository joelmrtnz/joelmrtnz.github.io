export type Metric = {
  value: string;
  label: string;
};

export type WorkLink = {
  label: string;
  href: string;
};

type WorkEntryBase = {
  id: string;
  title: string;
  org: 'Calcubox' | 'Miniviable' | 'Personal';
  period: string;
  summary: string;
  contributions: string[];
  stack: string[];
  metrics?: Metric[];
};

/* Discriminated on availability so a future open-source entry cannot be added without links. */
export type WorkEntry = WorkEntryBase &
  ({ availability: 'private'; note: string } | { availability: 'public'; links: WorkLink[] });

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
