import { dir } from 'i18next';
import { locales } from '@//i18n/settings';
import { Locale } from '@//i18n';
import { Header } from '@/components/header';

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  return (
    <div lang={locale} dir={dir(locale)}>
      <Header locale={locale} />
      {children}
    </div>
  );
}
