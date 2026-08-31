import type { Metadata } from 'next';
import { PATH_BY_LANG } from '@content/types';
import type { Lang } from '@content/types';
import { ui } from '@content/ui';

const SITE_URL = 'https://joelmrtnz.github.io';

const OG_LOCALE: Record<Lang, string> = { en: 'en_US', es: 'es_AR' };

export function buildMetadata(lang: Lang): Metadata {
  const { metaTitle, metaDescription } = ui[lang];

  return {
    metadataBase: new URL(SITE_URL),
    title: metaTitle,
    description: metaDescription,
    alternates: {
      canonical: PATH_BY_LANG[lang],
      languages: {
        en: PATH_BY_LANG.en,
        es: PATH_BY_LANG.es,
        'x-default': PATH_BY_LANG.en,
      },
    },
    openGraph: {
      type: 'website',
      url: `${SITE_URL}${PATH_BY_LANG[lang]}`,
      siteName: 'Joel Martinez',
      title: metaTitle,
      description: metaDescription,
      locale: OG_LOCALE[lang],
    },
    twitter: {
      card: 'summary',
      title: metaTitle,
      description: metaDescription,
    },
  };
}

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f7f3ec' },
    { media: '(prefers-color-scheme: dark)', color: '#130d04' },
  ],
};
