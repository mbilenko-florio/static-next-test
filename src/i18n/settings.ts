export const fallbackLocale = 'en' as const;
export const locales = [fallbackLocale, 'de'] as const;
export const defaultNS = 'translation' as const;
export const cookieName = 'i18next' as const;

export type Locale = (typeof locales)[number];

export function getOptions(locale: Locale = fallbackLocale, ns: string = defaultNS) {
  return {
    // debug: true,
    supportedLocales: locales,
    fallbackLng: fallbackLocale,
    locale: locale,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}
