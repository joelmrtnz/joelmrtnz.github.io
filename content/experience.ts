import type { Lang, Role } from './types';

export const experience: Record<Lang, Role[]> = {
  en: [
    {
      id: 'calcubox',
      company: 'Calcubox',
      title: 'Frontend Engineer',
      period: 'Jan 2025 - Present',
      summary:
        'A financial operations platform for SMBs. I have owned the frontend since the first commit in January 2024, first through Miniviable and full-time from 2025.',
      highlights: [
        '18 business modules on Next.js 16, React 19, TypeScript and RTK Query, replacing the legacy system 11 client companies ran on.',
        'Built the in-house design system: 116 components, 96 Storybook stories, and the conventions the codebase follows.',
        "Built the electronic invoicing UI across sales, purchases and contacts, including the logic that resolves document type from the seller's and customer's tax status.",
        'Built the custom fields and saved views system.',
        "Built the chat interface for the product's AI agent: conversation UI, input and overlay, wired to its streaming responses.",
        'Defined API contracts with the NestJS and MongoDB backend team, and set up the Playwright E2E suite as its own repository.',
      ],
    },
    {
      id: 'miniviable',
      company: 'Miniviable',
      title: 'Frontend Developer',
      period: 'Apr 2023 - Jan 2025',
      summary: 'Software consultancy.',
      highlights: [
        "Built Supplier Poll: a B2B directory of manufacturers' production capabilities, on Next.js, TypeScript, Mantine and Firebase.",
        'Built the first Calcubox design system, 20 components on Radix UI and Tailwind, then rebuilt it from scratch on Mantine in January 2024. That rewrite is what the product runs on today.',
      ],
    },
  ],
  es: [
    {
      id: 'calcubox',
      company: 'Calcubox',
      title: 'Frontend Engineer',
      period: 'Ene 2025 - Presente',
      summary:
        'Una plataforma de operaciones financieras para pymes. Tengo a cargo el frontend desde el primer commit en enero de 2024, inicialmente a través de Miniviable y de forma full-time desde 2025.',
      highlights: [
        '18 módulos de negocio sobre Next.js 16, React 19, TypeScript y RTK Query, en reemplazo del sistema legacy con el que operaban 11 empresas cliente.',
        'Construí el design system interno: 116 componentes, 96 historias de Storybook y las convenciones que sigue el código.',
        'Construí la UI de facturación electrónica en ventas, compras y contactos, incluida la lógica que resuelve el tipo de documento según la condición fiscal del vendedor y del cliente.',
        'Construí el sistema de campos personalizados y vistas guardadas.',
        'Construí la interfaz de chat del agente de IA del producto: UI de conversación, input y overlay, conectados a sus respuestas en streaming.',
        'Definí los contratos de API con el equipo de backend de NestJS y MongoDB, y armé la suite E2E de Playwright como repositorio propio.',
      ],
    },
    {
      id: 'miniviable',
      company: 'Miniviable',
      title: 'Frontend Developer',
      period: 'Abr 2023 - Ene 2025',
      summary: 'Consultora de software.',
      highlights: [
        'Construí Supplier Poll: un directorio B2B de capacidades productivas de fabricantes, sobre Next.js, TypeScript, Mantine y Firebase.',
        'Construí el primer design system de Calcubox, 20 componentes sobre Radix UI y Tailwind, y después lo rehice desde cero sobre Mantine en enero de 2024. Esa reescritura es la que el producto usa hoy.',
      ],
    },
  ],
};
