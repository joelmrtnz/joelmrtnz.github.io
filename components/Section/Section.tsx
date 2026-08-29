import type { ReactNode } from 'react';
import classNames from 'classnames/bind';
import styles from './Section.module.css';

const cx = classNames.bind(styles);

type SectionProps = {
  id: string;
  label: string;
  children: ReactNode;
};

export default function Section({ id, label, children }: SectionProps) {
  return (
    <section id={id} className={cx('section')} aria-labelledby={`${id}-label`}>
      <div className={cx('section__inner')}>
        <h2 id={`${id}-label`} className={cx('section__label')}>
          {label}
        </h2>
        <div className={cx('section__body')}>{children}</div>
      </div>
    </section>
  );
}
