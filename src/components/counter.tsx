'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useTranslation } from '@/i18n';

import { Minus, Plus } from 'lucide-react';
import { useState } from 'react';

export const Counter = () => {
  const { t } = useTranslation();
  const [counter, setCounter] = useState(0);

  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle>{t('counter')}</CardTitle>
      </CardHeader>
      <CardContent className="flex h-max flex-1 items-center justify-center text-8xl font-bold">
        {counter}
      </CardContent>
      <CardFooter className="flex gap-4">
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
      </CardFooter>
    </Card>
  );
};
