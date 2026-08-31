import classNames from 'classnames/bind';
import { profile } from '@content/profile';
import type { Lang } from '@content/types';
import HeroBackdrop from '@components/HeroBackdrop/HeroBackdrop';
import styles from './Hero.module.css';

const cx = classNames.bind(styles);

export default function Hero({ lang }: { lang: Lang }) {
  const content = profile[lang];

  return (
    <header className={cx('hero')}>
      <HeroBackdrop />

      <div className={cx('hero__inner')}>
        <p className={cx('hero__eyebrow')}>
          <span>{content.role}</span>
          <span aria-hidden="true">/</span>
          <span>{content.location}</span>
        </p>

        <h1 className={cx('hero__name')}>{content.name}</h1>

        <p className={cx('hero__lead')}>{content.lead}</p>

        <ul className={cx('hero__links')}>
          {content.links.map((link) => {
            const isExternal = link.href.startsWith('http');

            return (
              <li key={link.label}>
                <a
                  className={cx('hero__link')}
                  href={link.href}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noreferrer' : undefined}
                >
                  <span className={cx('hero__link-label')}>{link.label}</span>
                  <span className={cx('hero__link-value')}>{link.value}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
