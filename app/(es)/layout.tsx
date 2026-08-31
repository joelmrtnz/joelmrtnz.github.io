import type { ReactNode } from 'react';
import Shell from '@components/Shell/Shell';
import { buildMetadata, viewport } from '@components/Shell/metadata';
import '../globals.css';

export const metadata = buildMetadata('es');
export { viewport };

export default function RootLayout({ children }: { children: ReactNode }) {
  return <Shell lang="es">{children}</Shell>;
}
