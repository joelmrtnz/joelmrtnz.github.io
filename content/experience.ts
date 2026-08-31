import type { Role } from './types';

export const experience: Role[] = [
  {
    id: 'calcubox',
    company: 'Calcubox',
    title: 'Frontend Engineer',
    period: 'Jan 2025 - Present',
    summary:
      'A financial operations platform for SMBs. I have owned the frontend since the first commit in January 2024, first through Miniviable and full time from 2025.',
    highlights: [
      '18 business modules on Next.js 16, React 19, TypeScript and RTK Query, replacing the legacy system 11 client companies ran on.',
      'Designed and built the in-house design system: 116 components, 96 Storybook stories, and the conventions the codebase follows.',
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
      "Built Supplier Poll alone: a B2B directory of manufacturers' production capabilities, on Next.js, TypeScript, Mantine and Firebase.",
      'Built the first Calcubox design system, 20 components on Radix UI and Tailwind, then rebuilt it from scratch on Mantine in January 2024. That rewrite is what the product runs on today.',
    ],
  },
];
