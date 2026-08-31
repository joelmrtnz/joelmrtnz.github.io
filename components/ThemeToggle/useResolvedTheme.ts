'use client';

import { useEffect, useState } from 'react';

export type Theme = 'light' | 'dark';

export function readTheme(): Theme {
  const chosen = document.documentElement.dataset.theme;
  if (chosen === 'light' || chosen === 'dark') return chosen;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

/** The theme actually in force: an explicit choice when there is one, the OS preference otherwise. */
export function useResolvedTheme(): Theme {
  // 'light' until mounted, so the server and first client render agree.
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    const sync = () => setTheme(readTheme());
    sync();

    const query = window.matchMedia('(prefers-color-scheme: dark)');
    query.addEventListener('change', sync);

    const observer = new MutationObserver(sync);
    observer.observe(document.documentElement, { attributeFilter: ['data-theme'] });

    return () => {
      query.removeEventListener('change', sync);
      observer.disconnect();
    };
  }, []);

  return theme;
}
