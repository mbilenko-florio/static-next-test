import { dir } from 'i18next';
import { locales } from '@/src/i18n/settings';
import { Footer } from './_components/Footer';
import { Locale } from '@/src/i18n';

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
      {children}
      <Footer locale={locale} />
    </div>
  );
}
