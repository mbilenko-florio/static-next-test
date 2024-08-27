import type { Locale } from '@/src/i18n';
import { getTranslation } from '@/src/i18n';
import Link from 'next/link';

export default async function Home({ params: { locale } }: { params: { locale: Locale } }) {
  const { t } = await getTranslation(locale);

  return (
    <div>
      <h1>{t('title')}</h1>
      <Link href={`/${locale}/about`}>{t('about')}</Link>
    </div>
  );
}
