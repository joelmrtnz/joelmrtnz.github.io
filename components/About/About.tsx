import Image from 'next/image';
import classNames from 'classnames/bind';
import Metric from '@components/Metric/Metric';
import { profile } from '@content/profile';
import { ui } from '@content/ui';
import type { Lang } from '@content/types';
import portrait from '@assets/portrait.jpg';
import styles from './About.module.css';

const cx = classNames.bind(styles);

export default function About({ lang }: { lang: Lang }) {
  const content = profile[lang];
  const t = ui[lang];

  const metrics = [
    { value: '18', label: t.metrics.modules },
    { value: '116', label: t.metrics.components },
    { value: '96', label: t.metrics.stories },
    { value: '11', label: t.metrics.clients },
  ];

  return (
    <div>
      <div className={cx('about__intro')}>
        <div className={cx('about__prose')}>
          {content.about.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
        </div>

        <figure className={cx('about__portrait')}>
          <Image
            src={portrait}
            alt={content.name}
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
        <h3 className={cx('about__stack-title')}>{t.stack}</h3>
        <ul className={cx('about__stack-list')}>
          {content.stack.map((item) => (
            <li key={item} className={cx('about__stack-item')}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
