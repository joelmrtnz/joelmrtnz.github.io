import type { ReactNode } from 'react';
import Shell from '@components/Shell/Shell';
import { buildMetadata, viewport } from '@components/Shell/metadata';
import '../globals.css';

export const metadata = buildMetadata('en');
export { viewport };

export default function RootLayout({ children }: { children: ReactNode }) {
  return <Shell lang="en">{children}</Shell>;
}
