import type { Lang, Profile } from './types';

const LINKS = [
  {
    label: 'Email',
    value: 'joel.martinez.2001@outlook.com',
    href: 'mailto:joel.martinez.2001@outlook.com',
  },
  { label: 'GitHub', value: 'joelmrtnz', href: 'https://github.com/joelmrtnz' },
  { label: 'LinkedIn', value: 'in/joelmrtnz', href: 'https://www.linkedin.com/in/joelmrtnz/' },
];

// Tool and library names are the same in both languages, so the list is shared.
const STACK = [
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
];

export const profile: Record<Lang, Profile> = {
  en: {
    name: 'Joel Martinez',
    role: 'Frontend Engineer',
    location: 'Buenos Aires, Argentina',
    timezone: 'UTC-3',
    lead: 'I build the frontend of Calcubox, a financial operations platform for SMBs: 18 business modules, the design system underneath them, the electronic invoicing UI, and the chat interface for its AI agent. I am moving toward AI engineering and full stack development, with the goal of building AI systems.',
    about: [
      'I care about doing things right. Every module has to be thought through and ready for production data and real migrations. Much of the work is in the details: deciding where state lives, what the API contract should be, and when an abstraction really justifies its complexity.',
      "I have been building Calcubox's frontend since its first commit, in January 2024.",
    ],
    links: LINKS,
    stack: STACK,
    education: {
      degree: 'BSc in Information Technology Management',
      institution: 'Universidad Abierta Interamericana',
    },
    languages: [
      { language: 'Spanish', level: 'Native' },
      { language: 'English', level: 'Professional working proficiency' },
    ],
  },
  es: {
    name: 'Joel Martinez',
    role: 'Frontend Engineer',
    location: 'Buenos Aires, Argentina',
    timezone: 'UTC-3',
    lead: 'Construyo el frontend de Calcubox, una plataforma de operaciones financieras para pymes: 18 módulos de negocio, el design system que los sostiene, la UI de facturación electrónica y la interfaz de chat de su agente de IA. Estoy orientando mi carrera hacia AI engineering y desarrollo full stack, con el objetivo de construir sistemas de IA.',
    about: [
      'Me importa hacer las cosas bien. Cada módulo tiene que estar pensado y preparado para datos de producción y migraciones reales. Gran parte del trabajo está en los detalles: decidir dónde vive el estado, cuál tiene que ser el contrato de la API y cuándo una abstracción realmente justifica su complejidad.',
      'Trabajo en el frontend de Calcubox desde su primer commit, en enero de 2024.',
    ],
    links: LINKS,
    stack: STACK,
    education: {
      degree: 'Licenciatura en Gestión de Tecnología Informática',
      institution: 'Universidad Abierta Interamericana',
    },
    languages: [
      { language: 'Español', level: 'Nativo' },
      { language: 'Inglés', level: 'Competencia profesional' },
    ],
  },
};
