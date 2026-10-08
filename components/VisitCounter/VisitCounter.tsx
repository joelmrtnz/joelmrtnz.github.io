'use client';

import { useEffect, useState } from 'react';
import { ui } from '@content/ui';
import type { Lang } from '@content/types';
import { GOATCOUNTER_URL } from './goatcounter';

export default function VisitCounter({ lang }: { lang: Lang }) {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    fetch(`${GOATCOUNTER_URL}/counter/TOTAL.json`)
      .then((response) => (response.ok ? response.json() : null))
      // GoatCounter sends count as a string with thousands separators, e.g. "2,583".
      .then((data: { count: string } | null) => {
        if (data) setCount(Number(data.count.replace(/\D/g, '')));
      })
      .catch(() => {
        // A blocked or failed request just leaves the counter out.
      });
  }, []);

  if (count === null) return null;

  return <p>{ui[lang].visits(count.toLocaleString(lang))}</p>;
}
