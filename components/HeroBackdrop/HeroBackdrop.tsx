'use client';

import { Component, useCallback, useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import dynamic from 'next/dynamic';
import classNames from 'classnames/bind';
import { useResolvedTheme } from '@components/ThemeToggle/useResolvedTheme';
import { useMediaQuery } from './useMediaQuery';
import styles from './HeroBackdrop.module.css';

const cx = classNames.bind(styles);

const HeroBackdropScene = dynamic(() => import('./HeroBackdropScene'), { ssr: false });

const IDLE_TIMEOUT = 2000;
const IDLE_FALLBACK_DELAY = 300;

function hasWebGL(): boolean {
  try {
    const probe = document.createElement('canvas');
    const gl = probe.getContext('webgl2') ?? probe.getContext('webgl');
    if (!gl) return false;
    gl.getExtension('WEBGL_lose_context')?.loseContext();
    return true;
  } catch {
    return false;
  }
}

function readAccent(): string | null {
  const raw = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim();
  if (!raw) return null;

  // Round-trips through canvas so any CSS colour syntax normalises, and unparseable values fail closed.
  const ctx = document.createElement('canvas').getContext('2d');
  if (!ctx) return null;

  ctx.fillStyle = '#000000';
  ctx.fillStyle = raw;
  const first = ctx.fillStyle;
  ctx.fillStyle = '#ffffff';
  ctx.fillStyle = raw;

  return first === ctx.fillStyle ? String(first) : null;
}

class SilentBoundary extends Component<{ children: ReactNode; onError: () => void }> {
  state = { crashed: false };

  static getDerivedStateFromError() {
    return { crashed: true };
  }

  componentDidCatch() {
    this.props.onError();
  }

  render() {
    return this.state.crashed ? null : this.props.children;
  }
}

export default function HeroBackdrop() {
  const isDark = useResolvedTheme() === 'dark';
  const reducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');

  const hostRef = useRef<HTMLDivElement>(null);
  const [supported, setSupported] = useState(false);
  const [accent, setAccent] = useState<string | null>(null);
  const [onScreen, setOnScreen] = useState(true);

  const disable = useCallback(() => setSupported(false), []);

  useEffect(() => {
    let cancelled = false;
    let cancelIdle = () => {};

    const probe = () => {
      if (!cancelled) setSupported(hasWebGL());
    };

    const schedule = () => {
      if (typeof window.requestIdleCallback === 'function') {
        const handle = window.requestIdleCallback(probe, { timeout: IDLE_TIMEOUT });
        cancelIdle = () => window.cancelIdleCallback(handle);
        return;
      }

      const handle = window.setTimeout(probe, IDLE_FALLBACK_DELAY);
      cancelIdle = () => window.clearTimeout(handle);
    };

    if (document.readyState === 'complete') schedule();
    else window.addEventListener('load', schedule, { once: true });

    return () => {
      cancelled = true;
      cancelIdle();
      window.removeEventListener('load', schedule);
    };
  }, []);

  useEffect(() => {
    setAccent(readAccent());
  }, [isDark]);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const observer = new IntersectionObserver(([entry]) =>
      setOnScreen(entry?.isIntersecting ?? true),
    );
    observer.observe(host);

    return () => observer.disconnect();
    // supported gates the ref: the host element does not exist until the scene is allowed to mount.
  }, [supported]);

  if (!supported || !accent) return null;

  return (
    <div ref={hostRef} className={cx('backdrop')} aria-hidden="true">
      <SilentBoundary onError={disable}>
        <HeroBackdropScene
          accent={accent}
          animate={!reducedMotion && onScreen}
          isDark={isDark}
          onLost={disable}
        />
      </SilentBoundary>
    </div>
  );
}
