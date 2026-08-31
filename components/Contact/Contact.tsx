import classNames from 'classnames/bind';
import { profile } from '@content/profile';
import { ui } from '@content/ui';
import type { Lang } from '@content/types';
import styles from './Contact.module.css';

const cx = classNames.bind(styles);

export default function Contact({ lang }: { lang: Lang }) {
  const content = profile[lang];
  const t = ui[lang];
  const email = content.links.find((link) => link.label === 'Email');

  return (
    <div>
      {email ? (
        <a className={cx('contact__email')} href={email.href}>
          {email.value}
        </a>
      ) : null}

      <ul className={cx('contact__links')}>
        {content.links
          .filter((link) => link.label !== 'Email')
          .map((link) => (
            <li key={link.label}>
              <a className={cx('contact__link')} href={link.href} target="_blank" rel="noreferrer">
                <span className={cx('contact__link-label')}>{link.label}</span>
                <span className={cx('contact__link-value')}>{link.value}</span>
              </a>
            </li>
          ))}
      </ul>

      <dl className={cx('contact__facts')}>
        <div className={cx('contact__fact')}>
          <dt className={cx('contact__fact-key')}>{t.facts.education}</dt>
          <dd className={cx('contact__fact-value')}>
            {content.education.degree}, {content.education.institution}
          </dd>
        </div>
        <div className={cx('contact__fact')}>
          <dt className={cx('contact__fact-key')}>{t.facts.languages}</dt>
          <dd className={cx('contact__fact-value')}>
            {content.languages.map((entry) => `${entry.language} (${entry.level})`).join(', ')}
          </dd>
        </div>
        <div className={cx('contact__fact')}>
          <dt className={cx('contact__fact-key')}>{t.facts.location}</dt>
          <dd className={cx('contact__fact-value')}>
            {content.location}, {content.timezone}
          </dd>
        </div>
      </dl>
    </div>
  );
}
