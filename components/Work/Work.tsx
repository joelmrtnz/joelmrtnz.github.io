import classNames from 'classnames/bind';
import WorkCard from '@components/WorkCard/WorkCard';
import { work } from '@content/work';
import styles from './Work.module.css';

const cx = classNames.bind(styles);

export default function Work() {
  return (
    <div className={cx('work')}>
      <p className={cx('work__preface')}>
        All of this is client work living in private repositories, so there is no source to link.
        What follows is what I built and the decisions behind it.
      </p>

      <ol className={cx('work__list')}>
        {work.map((entry) => (
          <li key={entry.id} className={cx('work__item')}>
            <WorkCard entry={entry} />
          </li>
        ))}
      </ol>
    </div>
  );
}
