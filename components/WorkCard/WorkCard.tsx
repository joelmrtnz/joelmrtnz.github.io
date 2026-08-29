import classNames from 'classnames/bind';
import Metric from '@components/Metric/Metric';
import type { WorkEntry } from '@content/types';
import styles from './WorkCard.module.css';

const cx = classNames.bind(styles);

type WorkCardProps = {
  entry: WorkEntry;
};

export default function WorkCard({ entry }: WorkCardProps) {
  return (
    <article className={cx('card')}>
      <div className={cx('card__head')}>
        <h3 className={cx('card__title')}>{entry.title}</h3>
        <p className={cx('card__meta')}>
          <span>{entry.org}</span>
          <span className={cx('card__period')}>{entry.period}</span>
        </p>
      </div>

      <p className={cx('card__summary')}>{entry.summary}</p>

      {entry.metrics ? (
        <div className={cx('card__metrics')}>
          {entry.metrics.map((metric) => (
            <Metric key={metric.label} value={metric.value} label={metric.label} />
          ))}
        </div>
      ) : null}

      <ul className={cx('card__contributions')}>
        {entry.contributions.map((contribution) => (
          <li key={contribution} className={cx('card__contribution')}>
            {contribution}
          </li>
        ))}
      </ul>

      <div className={cx('card__foot')}>
        <ul className={cx('card__stack')}>
          {entry.stack.map((item) => (
            <li key={item} className={cx('card__stack-item')}>
              {item}
            </li>
          ))}
        </ul>

        {entry.availability === 'private' ? (
          <p className={cx('card__note')}>{entry.note}</p>
        ) : (
          <ul className={cx('card__links')}>
            {entry.links.map((link) => (
              <li key={link.href}>
                <a className={cx('card__link')} href={link.href} target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
