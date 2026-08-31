import classNames from 'classnames/bind';
import ThemeToggle from '@components/ThemeToggle/ThemeToggle';
import LanguageToggle from '@components/LanguageToggle/LanguageToggle';
import { ui } from '@content/ui';
import type { Lang } from '@content/types';
import styles from './Controls.module.css';

const cx = classNames.bind(styles);

export default function Controls({ lang }: { lang: Lang }) {
  return (
    <div className={cx('controls')}>
      <LanguageToggle lang={lang} />
      <ThemeToggle label={ui[lang].toggleTheme} />
    </div>
  );
}
