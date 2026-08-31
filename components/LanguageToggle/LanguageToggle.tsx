import classNames from 'classnames/bind';
import { OTHER_LANG, PATH_BY_LANG } from '@content/types';
import type { Lang } from '@content/types';
import { ui } from '@content/ui';
import styles from './LanguageToggle.module.css';

const cx = classNames.bind(styles);

/* A plain anchor, not next/link: the two languages have separate root layouts, so Next does a full
   document load either way and Link would only add a prefetch that cannot be used. */
export default function LanguageToggle({ lang }: { lang: Lang }) {
  const other = OTHER_LANG[lang];
  const label = ui[lang].switchLanguage;

  return (
    <a
      className={cx('language-toggle')}
      href={PATH_BY_LANG[other]}
      hrefLang={other}
      aria-label={label}
      title={label}
    >
      <span aria-hidden="true">{other.toUpperCase()}</span>
    </a>
  );
}
