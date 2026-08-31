import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { Archivo, Fraunces, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fraunces',
  axes: ['opsz'],
});

const archivo = Archivo({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-archivo',
});

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500'],
  variable: '--font-plex-mono',
});

const SITE_URL = 'https://joelmrtnz.github.io';
const DESCRIPTION =
  'Frontend engineer in Buenos Aires. I build the frontend of Calcubox, a financial operations platform for SMBs.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Joel Martinez - Frontend Engineer',
  description: DESCRIPTION,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'Joel Martinez',
    title: 'Joel Martinez - Frontend Engineer',
    description: DESCRIPTION,
    locale: 'en_US',
  },
  twitter: {
    card: 'summary',
    title: 'Joel Martinez - Frontend Engineer',
    description: DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f7f3ec' },
    { media: '(prefers-color-scheme: dark)', color: '#130d04' },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${archivo.variable} ${plexMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
