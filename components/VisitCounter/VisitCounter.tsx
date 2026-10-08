'use client';

import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { ui } from '@content/ui';
import type { Lang } from '@content/types';
import { GOATCOUNTER_URL } from './goatcounter';

// GoatCounter caches each URL for 4h but keys on `start`; any date before the first visit returns the full total.
function cacheBustingStart() {
  const minute = Math.floor(Date.now() / 60_000);
  return new Date(Date.UTC(2000, 0, 1) + (minute % 9000) * 86_400_000).toISOString().slice(0, 10);
}

export default function VisitCounter({ lang, children }: { lang: Lang; children?: ReactNode }) {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    fetch(`${GOATCOUNTER_URL}/counter/TOTAL.json?start=${cacheBustingStart()}`)
      .then((response) => (response.ok ? response.json() : null))
      // GoatCounter sends count as a string with thousands separators, e.g. "2,583".
      .then((data: { count: string } | null) => {
        // +1: this visit is recorded in parallel and persisted ~10s later, so the total never includes it yet.
        if (data) setCount(Number(data.count.replace(/\D/g, '')) + 1);
      })
      .catch(() => {
        // A blocked or failed request just leaves the counter out.
      });
  }, []);

  if (count === null) return null;

  return (
    <p>
      {ui[lang].visits(count.toLocaleString(lang))} {children}
    </p>
  );
}
