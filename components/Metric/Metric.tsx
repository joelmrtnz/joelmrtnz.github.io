import classNames from 'classnames/bind';
import styles from './Metric.module.css';

const cx = classNames.bind(styles);

type MetricProps = {
  value: string;
  label: string;
};

export default function Metric({ value, label }: MetricProps) {
  return (
    <div className={cx('metric')}>
      <span className={cx('metric__value')}>{value}</span>
      <span className={cx('metric__label')}>{label}</span>
    </div>
  );
}
