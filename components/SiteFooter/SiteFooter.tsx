import classNames from 'classnames/bind';
import { profile } from '@content/profile';
import VisitCounter from '@components/VisitCounter/VisitCounter';
import { ui } from '@content/ui';
import type { Lang } from '@content/types';
import styles from './SiteFooter.module.css';

const cx = classNames.bind(styles);

const SOURCE_URL = 'https://github.com/joelmrtnz/joelmrtnz.github.io';
const GOATCOUNTER_HOME_URL = 'https://www.goatcounter.com';

export default function SiteFooter({ lang }: { lang: Lang }) {
  return (
    <footer className={cx('footer')}>
      <div className={cx('footer__inner')}>
        <p>{profile[lang].name}</p>
        <VisitCounter lang={lang}>
          Powered by{' '}
          <a
            className={cx('footer__link')}
            href={GOATCOUNTER_HOME_URL}
            target="_blank"
            rel="noreferrer"
          >
            GoatCounter
          </a>
          .
        </VisitCounter>
        <p>
          <a className={cx('footer__link')} href={SOURCE_URL} target="_blank" rel="noreferrer">
            {ui[lang].sourceOnGitHub}
          </a>
        </p>
      </div>
    </footer>
  );
}
