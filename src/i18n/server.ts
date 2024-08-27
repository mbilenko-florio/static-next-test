import { createInstance } from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { initReactI18next } from 'react-i18next/initReactI18next';
import { getOptions, Locale } from './settings';
import { UseTranslationOptions } from 'react-i18next';

const initI18next = async (locale: Locale, ns?: string) => {
  const i18nInstance = createInstance();
  await i18nInstance
    .use(initReactI18next)
    .use(resourcesToBackend((l: Locale, ns: string) => import(`./locales/${locale}/${ns}.json`)))
    .init(getOptions(locale, ns));
  return i18nInstance;
};

export async function getTranslation(
  locale: Locale,
  ns?: string,
  options: UseTranslationOptions<undefined> = {},
) {
  const i18nextInstance = await initI18next(locale, ns);
  return {
    t: i18nextInstance.getFixedT(locale, Array.isArray(ns) ? ns[0] : ns, options.keyPrefix),
    i18n: i18nextInstance,
  };
}
