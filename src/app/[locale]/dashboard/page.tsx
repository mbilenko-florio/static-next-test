import { AreaChart } from '@/components/charts/areaChart';
import { DonutChart } from '@/components/charts/donutChart';
import { Counter } from '@/components/counter';
import { getTranslation, Locale } from '@/i18n';

export default async function Page({ params: { locale } }: { params: { locale: Locale } }) {
  const { t } = await getTranslation(locale);

  return (
    <div className="flex flex-col justify-center gap-8 px-12 py-24">
      <h1 className="text-5xl font-bold">{t('dashboard')}</h1>

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
