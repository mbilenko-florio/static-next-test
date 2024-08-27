'use client';

import { Button } from '@/components/ui/button';
import { Locale, useTranslation } from '@/i18n';
import Link from 'next/link';
import { useState } from 'react';

export default function Page({ params: { locale } }: { params: { locale: Locale } }) {
  const { t } = useTranslation(locale);
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>{t('about')}</h1>
      <Link href={`/${locale}/`}>{t('title')}</Link>

      <p>{t('counter', { count: counter })}</p>
      <div className="flex gap-4">
        <Button onClick={() => setCounter(Math.max(0, counter - 1))}>-</Button>
        <Button onClick={() => setCounter(Math.min(10, counter + 1))}>+</Button>
      </div>
    </div>
  );
}
