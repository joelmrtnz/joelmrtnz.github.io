'use client';

import { useCallback } from 'react';
import type { MouseEvent } from 'react';
import classNames from 'classnames/bind';
import { readTheme } from './useResolvedTheme';
import styles from './ThemeToggle.module.css';

const cx = classNames.bind(styles);

export const THEME_STORAGE_KEY = 'theme';

export default function ThemeToggle({ label }: { label: string }) {
  const handleClick = useCallback((event: MouseEvent<HTMLButtonElement>) => {
    const root = document.documentElement;
    const next = readTheme() === 'dark' ? 'light' : 'dark';

    const apply = () => {
      root.dataset.theme = next;
      try {
        localStorage.setItem(THEME_STORAGE_KEY, next);
      } catch {
        // Private mode and blocked storage both throw; the theme still applies for this visit.
      }
    };

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced || typeof document.startViewTransition !== 'function') {
      apply();
      return;
    }

    const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;

    root.style.setProperty('--reveal-x', `${x}px`);
    root.style.setProperty('--reveal-y', `${y}px`);
    // Reach the furthest corner, or the circle stops before it has covered the page.
    root.style.setProperty(
      '--reveal-r',
      `${Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y))}px`,
    );

    document.startViewTransition(apply);
  }, []);

  return (
    <button
      type="button"
      className={cx('theme-toggle')}
      onClick={handleClick}
      aria-label={label}
      title={label}
    >
      <svg
        className={cx('theme-toggle__icon', 'theme-toggle__icon--sun')}
        viewBox="0 0 24 24"
        width="18"
        height="18"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4.2" />
        <path d="M12 2.6v2.2M12 19.2v2.2M2.6 12h2.2M19.2 12h2.2M5.4 5.4l1.6 1.6M17 17l1.6 1.6M18.6 5.4L17 7M7 17l-1.6 1.6" />
      </svg>

      <svg
        className={cx('theme-toggle__icon', 'theme-toggle__icon--moon')}
        viewBox="0 0 24 24"
        width="18"
        height="18"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M20 14.2A8.2 8.2 0 0 1 9.8 4a8.2 8.2 0 1 0 10.2 10.2z" />
      </svg>
    </button>
  );
}
