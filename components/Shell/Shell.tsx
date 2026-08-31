import type { ReactNode } from 'react';
import { Archivo, Fraunces, IBM_Plex_Mono } from 'next/font/google';
import Controls from '@components/Controls/Controls';
import type { Lang } from '@content/types';

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

// Runs before the first paint, so a stored choice never flashes the other scheme.
const THEME_SCRIPT =
  "try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark')document.documentElement.dataset.theme=t}catch(e){}";

export default function Shell({ lang, children }: { lang: Lang; children: ReactNode }) {
  return (
    // THEME_SCRIPT writes data-theme before hydration, so the server HTML is missing an
    // attribute the client already has. Suppression is one level deep: only this element.
    <html
      lang={lang}
      className={`${fraunces.variable} ${archivo.variable} ${plexMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
        <Controls lang={lang} />
        {children}
      </body>
    </html>
  );
}
