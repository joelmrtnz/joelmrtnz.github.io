import classNames from 'classnames/bind';
import { profile } from '@content/profile';
import styles from './SiteFooter.module.css';

const cx = classNames.bind(styles);

const SOURCE_URL = 'https://github.com/joelmrtnz/joelmrtnz.github.io';

export default function SiteFooter() {
  return (
    <footer className={cx('footer')}>
      <div className={cx('footer__inner')}>
        <p>{profile.name}</p>
        <p>
          <a className={cx('footer__link')} href={SOURCE_URL} target="_blank" rel="noreferrer">
            Source on GitHub
          </a>
        </p>
      </div>
    </footer>
  );
}
