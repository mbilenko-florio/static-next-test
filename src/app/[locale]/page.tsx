import type { Locale } from '@//i18n';
import { getTranslation } from '@//i18n';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default async function Home({ params: { locale } }: { params: { locale: Locale } }) {
  const { t } = await getTranslation(locale);

  return (
    <div className="flex flex-col justify-center gap-8 px-12 py-24">
      <h1 className="text-5xl font-bold">{t('title')}</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae omnis possimus ducimus
        assumenda atque distinctio rem adipisci ipsam at, dignissimos voluptates quis culpa
        perferendis. Impedit exercitationem vitae dolores vel aperiam.
      </p>
      <Button asChild className="w-min gap-2">
        <Link href={`/${locale}/dashboard`}>
          {t('dashboard')}
          <ArrowRight className="h-5 w-5" />
        </Link>
      </Button>
    </div>
  );
}
