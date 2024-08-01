import Link from 'next/link';
import { Trans } from 'react-i18next/TransWithoutContext';
import { locales } from '@/src/i18n/settings';
import { Locale, getTranslation } from '@/src/i18n';

export const Footer = async ({ locale }: { locale: Locale }) => {
  const { t } = await getTranslation(locale, 'footer');
  return (
    <footer style={{ marginTop: 50 }}>
      <Trans i18nKey="languageSwitcher" t={t}>
        Switch from <strong>{{ locale }}</strong> to:{' '}
      </Trans>
      {locales
        .filter((l) => locale !== l)
        .map((l, index) => {
          return (
            <span key={l}>
              {index > 0 && ' or '}
              <Link href={`/${l}`}>{l}</Link>
            </span>
          );
        })}
    </footer>
  );
};
