import classNames from 'classnames/bind';
import { profile } from '@content/profile';
import styles from './Hero.module.css';

const cx = classNames.bind(styles);

export default function Hero() {
  return (
    <header className={cx('hero')}>
      <div className={cx('hero__inner')}>
        <p className={cx('hero__eyebrow')}>
          <span>{profile.role}</span>
          <span aria-hidden="true">/</span>
          <span>{profile.location}</span>
        </p>

        <h1 className={cx('hero__name')}>{profile.name}</h1>

        <p className={cx('hero__lead')}>{profile.lead}</p>

        <ul className={cx('hero__links')}>
          {profile.links.map((link) => {
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
