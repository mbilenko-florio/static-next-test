'use client';
import { AreaChart } from '@/components/charts/areaChart';
import { DonutChart } from '@/components/charts/donutChart';
import { Counter } from '@/components/counter';
import { useTranslation } from '@/i18n';
import { useEffect, useState } from 'react';

export default function Page() {
  const { t } = useTranslation();
  const [people, setPeople] = useState<{ name: string }[]>([]);
  useEffect(() => {
    const fn = async () => {
      const res = await fetch('https://swapi.dev/api/people/');
      const data = await res.json();
      console.log(data);
      setPeople(data.results);
    };
    fn();
  }, []);

  return (
    <div className="flex flex-col justify-center gap-8 px-12 py-24">
      <h1 className="text-5xl font-bold">{t('dashboard')}</h1>

      {people && people.map((person) => <p key={person.name}>{person.name}</p>)}

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Counter />
        <DonutChart />
        <div className="md:col-span-2">
          <AreaChart />
        </div>
      </div>
    </div>
  );
}
