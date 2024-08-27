'use client';

import Link from 'next/link';
import { locales } from '@/src/i18n/settings';
import { Locale } from '@/src/i18n';
import { usePathname } from 'next/navigation';

const removeLocale = (input: string) => {
  const match = input.match(/\/[^]*\/([^]*)/);
  return match ? `/${match[1]}` : '';
};

export const Footer = ({ locale }: { locale: Locale }) => {
  const pathname = usePathname();
  const pathWithoutLocale = removeLocale(pathname);

  return (
    <footer style={{ marginTop: 50 }}>
      {locales
        .filter((l) => locale !== l)
        .map((l, index) => {
          return (
            <span key={l}>
              {index > 0 && ' or '}
              <Link href={`/${l}${pathWithoutLocale}`}>{l}</Link>
            </span>
          );
        })}
    </footer>
  );
};
