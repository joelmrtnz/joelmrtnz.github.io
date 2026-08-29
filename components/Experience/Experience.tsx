import classNames from 'classnames/bind';
import { experience } from '@content/experience';
import styles from './Experience.module.css';

const cx = classNames.bind(styles);

export default function Experience() {
  return (
    <ol className={cx('experience')}>
      {experience.map((role) => (
        <li key={role.id} className={cx('experience__role')}>
          <div className={cx('experience__head')}>
            <h3 className={cx('experience__company')}>{role.company}</h3>
            <p className={cx('experience__meta')}>
              <span>{role.title}</span>
              <span className={cx('experience__period')}>{role.period}</span>
            </p>
          </div>

          <p className={cx('experience__summary')}>{role.summary}</p>

          <ul className={cx('experience__highlights')}>
            {role.highlights.map((highlight) => (
              <li key={highlight} className={cx('experience__highlight')}>
                {highlight}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}
