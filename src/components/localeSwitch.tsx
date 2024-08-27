'use client';

import { Locale, locales } from '@/i18n';
import { usePathname, useRouter } from 'next/navigation';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

const getLocaleFromPath = (pathname: string): Locale => {
  const match = pathname.match(/^\/([^/]+)(?:\/|$)/);
  return match && locales.includes(match[1] as Locale) ? (match[1] as Locale) : 'en';
};

export const LocaleSwitch = () => {
  const pathname = usePathname();
  const router = useRouter();

  const currentLocale = getLocaleFromPath(pathname);

  const handleLocaleChange = (newLocale: Locale) => {
    const newUrl = pathname.replace(`/${currentLocale}`, `/${newLocale}`);
    router.push(newUrl);
  };

  return (
    <Select value={currentLocale} onValueChange={handleLocaleChange}>
      <SelectTrigger className="w-32">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="en">🇬🇧 English</SelectItem>
        <SelectItem value="de">🇩🇪 German</SelectItem>
      </SelectContent>
    </Select>
  );
};
