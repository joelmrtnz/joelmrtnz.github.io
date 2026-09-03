import type { Lang, Role } from './types';

export const experience: Record<Lang, Role[]> = {
  en: [
    {
      id: 'calcubox',
      company: 'Calcubox',
      title: 'Frontend Engineer',
      period: 'Jan 2024 - Present',
      summary:
        'A financial operations platform for SMBs. I have owned the frontend since the first commit in January 2024.',
      highlights: [
        '18 business modules on Next.js 16, React 19, TypeScript and RTK Query, replacing the legacy system 11 client companies ran on.',
        'Built the in-house design system from scratch: 116 components, 96 Storybook stories, and the conventions the codebase follows.',
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
      period: 'Apr 2023 - Jan 2024',
      summary: 'Software consultancy.',
      highlights: [
        "Built Supplier Poll: a B2B directory of manufacturers' production capabilities, on Next.js, TypeScript, Mantine and Firebase.",
        'Built a data importer: a migration tool that loads client data from Excel spreadsheets into the destination application, mapping each sheet onto the target entities.',
        "Maintained a legacy ERP and the consultancy's internal administrative applications: bug fixing and small features on long-lived codebases patched by many hands over the years.",
      ],
    },
  ],
  es: [
    {
      id: 'calcubox',
      company: 'Calcubox',
      title: 'Frontend Engineer',
      period: 'Ene 2024 - Presente',
      summary:
        'Una plataforma de operaciones financieras para pymes. Tengo a cargo el frontend desde el primer commit, en enero de 2024.',
      highlights: [
        '18 módulos de negocio sobre Next.js 16, React 19, TypeScript y RTK Query, en reemplazo del sistema legacy con el que operaban 11 empresas cliente.',
        'Construí desde cero el design system interno: 116 componentes, 96 historias de Storybook y las convenciones que sigue el código.',
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
      period: 'Abr 2023 - Ene 2024',
      summary: 'Consultora de software.',
      highlights: [
        'Construí Supplier Poll: un directorio B2B de capacidades productivas de fabricantes, sobre Next.js, TypeScript, Mantine y Firebase.',
        'Construí un importador de datos: una herramienta de migración que carga datos de clientes desde planillas Excel hacia la aplicación de destino, mapeando cada planilla contra las entidades correspondientes.',
        'Mantuve un ERP legacy y las aplicaciones administrativas internas de la consultora: corrección de bugs y features chicas sobre código de años, parchado por muchas manos.',
      ],
    },
  ],
};
