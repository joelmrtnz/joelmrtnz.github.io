import type { WorkEntry } from './types';

export const work: WorkEntry[] = [
  {
    id: 'calcubox-platform',
    title: 'Calcubox',
    org: 'Calcubox',
    period: '2024 - Present',
    availability: 'private',
    note: 'Private repository, commercial product.',
    summary:
      'A financial operations platform for SMBs covering sales, electronic invoicing, inventory and treasury. It replaces a legacy system that 11 client companies were already running on, so every module had to work against real migrated data from day one.',
    contributions: [
      'Owned the frontend end to end since the first commit, across 18 business modules.',
      "Built the electronic invoicing UI for sales, purchases and contacts, including the rules that resolve document type from the seller's and the customer's tax status.",
      'Built the custom fields and saved views system, so each company can extend records and persist its own filtered views.',
      "Built the chat interface for the product's AI agent: conversation UI, input and overlay, wired to the agent's streaming responses.",
      'Defined the API contracts with the backend team and set up the Playwright E2E suite as its own repository.',
    ],
    stack: ['Next.js', 'React', 'TypeScript', 'Redux Toolkit', 'RTK Query', 'Mantine', 'TanStack Virtual', 'Playwright'],
    metrics: [
      { value: '18', label: 'business modules' },
      { value: '11', label: 'client companies' },
    ],
  },
  {
    id: 'calcubox-design-system',
    title: 'Calcubox Design System',
    org: 'Calcubox',
    period: '2024 - Present',
    availability: 'private',
    note: 'Private repository, internal to Calcubox.',
    summary:
      'The in-house component library every Calcubox module is built from. I wrote the first version at Miniviable on Radix UI and Tailwind, then rebuilt it from scratch on Mantine in January 2024. That rewrite is what the product runs on today.',
    contributions: [
      'Designed the component API and the architecture conventions the rest of the codebase follows.',
      'Built and documented the library in Storybook so the patterns are enforced by example, not by review.',
      'Set the composition rules that keep shared components free of variant switches.',
    ],
    stack: ['React', 'TypeScript', 'Mantine', 'CSS Modules', 'Storybook'],
    metrics: [
      { value: '116', label: 'components' },
      { value: '96', label: 'Storybook stories' },
    ],
  },
  {
    id: 'supplier-poll',
    title: 'Supplier Poll',
    org: 'Miniviable',
    period: '2023 - 2024',
    availability: 'private',
    note: 'Private repository, client project.',
    summary:
      "A B2B directory of manufacturers' production capabilities, letting buyers search suppliers by what they can actually produce. I was the sole developer.",
    contributions: [
      'Built the product on my own, from the data model through to the interface.',
      'Designed the search and filtering over supplier capabilities.',
    ],
    stack: ['Next.js', 'TypeScript', 'Mantine', 'Firebase'],
  },
];
