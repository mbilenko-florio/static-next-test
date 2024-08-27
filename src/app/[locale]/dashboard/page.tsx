'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Locale, useTranslation } from '@/i18n';
import { Minus, Plus } from 'lucide-react';
import { useState } from 'react';

export default function Page({ params: { locale } }: { params: { locale: Locale } }) {
  const { t } = useTranslation(locale);
  const [counter, setCounter] = useState(0);

  return (
    <div className="flex flex-col justify-center gap-8 px-12 py-24">
      <h1 className="text-5xl font-bold">{t('dashboard')}</h1>

      <Card className="w-64">
        <CardHeader>
          <CardTitle>{t('counter')}</CardTitle>
          <CardDescription>{t('counter', { count: counter })}</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-evenly gap-4">
          <Button
            className="w-full"
            onClick={() => setCounter(Math.max(0, counter - 1))}
            disabled={counter <= 0}
          >
            <Minus className="size-5" />
          </Button>
          <Button
            className="w-full"
            onClick={() => setCounter(Math.min(10, counter + 1))}
            disabled={counter >= 10}
          >
            <Plus className="size-5" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
