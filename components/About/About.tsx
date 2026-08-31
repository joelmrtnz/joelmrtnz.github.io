import Image from 'next/image';
import type { CSSProperties } from 'react';
import classNames from 'classnames/bind';
import Metric from '@components/Metric/Metric';
import { profile } from '@content/profile';
import portrait from '@assets/portrait.jpg';
import styles from './About.module.css';

const cx = classNames.bind(styles);

const metrics = [
  { value: '18', label: 'business modules' },
  { value: '116', label: 'components' },
  { value: '96', label: 'Storybook stories' },
  { value: '11', label: 'client companies' },
];

export default function About() {
  return (
    <div>
      <div className={cx('about__intro')}>
        <div className={cx('about__prose')}>
          {profile.about.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
        </div>

        <figure
          className={cx('about__portrait')}
          style={{ '--portrait': `url(${portrait.src})` } as CSSProperties}
        >
          <Image
            src={portrait}
            alt={profile.name}
            sizes="(max-width: 760px) 168px, 232px"
            placeholder="blur"
          />
        </figure>
      </div>

      <div className={cx('about__metrics')}>
        {metrics.map((metric) => (
          <Metric key={metric.label} value={metric.value} label={metric.label} />
        ))}
      </div>

      <div className={cx('about__stack')}>
        <h3 className={cx('about__stack-title')}>Stack</h3>
        <ul className={cx('about__stack-list')}>
          {profile.stack.map((item) => (
            <li key={item} className={cx('about__stack-item')}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
