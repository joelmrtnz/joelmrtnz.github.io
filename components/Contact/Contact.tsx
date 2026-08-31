import classNames from 'classnames/bind';
import { profile } from '@content/profile';
import styles from './Contact.module.css';

const cx = classNames.bind(styles);

const email = profile.links.find((link) => link.label === 'Email');

export default function Contact() {
  return (
    <div>
      {email ? (
        <a className={cx('contact__email')} href={email.href}>
          {email.value}
        </a>
      ) : null}

      <ul className={cx('contact__links')}>
        {profile.links
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
          <dt className={cx('contact__fact-key')}>Education</dt>
          <dd className={cx('contact__fact-value')}>
            {profile.education.degree}, {profile.education.institution} ({profile.education.status})
          </dd>
        </div>
        <div className={cx('contact__fact')}>
          <dt className={cx('contact__fact-key')}>Languages</dt>
          <dd className={cx('contact__fact-value')}>
            {profile.languages.map((entry) => `${entry.language} (${entry.level})`).join(', ')}
          </dd>
        </div>
        <div className={cx('contact__fact')}>
          <dt className={cx('contact__fact-key')}>Based in</dt>
          <dd className={cx('contact__fact-value')}>
            {profile.location}, {profile.timezone}
          </dd>
        </div>
      </dl>
    </div>
  );
}
