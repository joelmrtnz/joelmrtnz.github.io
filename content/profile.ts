import type { Profile } from './types';

export const profile: Profile = {
  name: 'Joel Martinez',
  role: 'Frontend Engineer',
  location: 'Buenos Aires, Argentina',
  timezone: 'UTC-3',
  lead: 'I build the frontend of Calcubox, a financial operations platform for SMBs: 18 business modules, the design system underneath them, the electronic invoicing UI, and the chat interface for its AI agent. I am heading further into AI engineering and full stack work to build AI systems and the products around them.',
  about: [
    'I have been the frontend on Calcubox since January 2024, first through Miniviable, full time since 2025.',
    'Every module has to hold up against real data and a real migration, not a demo with twenty records. Most of the work is deciding where state lives, what the API contract should be, and which abstraction earns its complexity.',
  ],
  links: [
    {
      label: 'Email',
      value: 'joel.martinez.2001@outlook.com',
      href: 'mailto:joel.martinez.2001@outlook.com',
    },
    { label: 'GitHub', value: 'joelmrtnz', href: 'https://github.com/joelmrtnz' },
    { label: 'LinkedIn', value: 'in/joelmrtnz', href: 'https://www.linkedin.com/in/joelmrtnz/' },
  ],
  stack: [
    'React',
    'TypeScript',
    'Next.js',
    'Redux Toolkit',
    'RTK Query',
    'Mantine',
    'CSS Modules',
    'Tailwind',
    'Storybook',
    'TanStack Virtual',
    'Node.js',
    'REST APIs',
    'Firebase',
    'Playwright',
    'Git',
  ],
  education: {
    degree: 'BSc Information Technology Management',
    institution: 'Universidad Abierta Interamericana',
  },
  languages: [
    { language: 'Spanish', level: 'Native' },
    { language: 'English', level: 'Professional working proficiency' },
  ],
};
