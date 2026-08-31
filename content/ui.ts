import type { Lang, Ui } from './types';

export const ui: Record<Lang, Ui> = {
  en: {
    sections: { about: 'About', experience: 'Experience', contact: 'Contact' },
    metrics: {
      modules: 'business modules',
      components: 'components',
      stories: 'Storybook stories',
      clients: 'client companies',
    },
    stack: 'Stack',
    facts: { education: 'Education', languages: 'Languages', location: 'Based in' },
    sourceOnGitHub: 'Source on GitHub',
    toggleTheme: 'Toggle colour scheme',
    switchLanguage: 'Ver en español',
    metaTitle: 'Joel Martinez - Frontend Engineer',
    metaDescription:
      'Frontend engineer in Buenos Aires. I build the frontend of Calcubox, a financial operations platform for SMBs, including the interface for its AI agent. Moving toward AI engineering and full stack development.',
  },
  es: {
    sections: { about: 'Sobre mí', experience: 'Experiencia', contact: 'Contacto' },
    metrics: {
      modules: 'módulos de negocio',
      components: 'componentes',
      stories: 'historias de Storybook',
      clients: 'empresas cliente',
    },
    stack: 'Stack',
    facts: { education: 'Educación', languages: 'Idiomas', location: 'Ubicación' },
    sourceOnGitHub: 'Código en GitHub',
    toggleTheme: 'Cambiar el esquema de color',
    switchLanguage: 'View in English',
    metaTitle: 'Joel Martinez - Frontend Engineer',
    metaDescription:
      'Frontend engineer en Buenos Aires. Construyo el frontend de Calcubox, una plataforma de operaciones financieras para pymes, incluida la interfaz de su agente de IA. Estoy orientando mi carrera hacia AI engineering y desarrollo full stack.',
  },
};
