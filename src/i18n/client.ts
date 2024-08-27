'use client';

import { useEffect, useState } from 'react';
import i18next from 'i18next';
import {
  initReactI18next,
  UseTranslationOptions,
  useTranslation as useTranslationOrg,
} from 'react-i18next';
import { useCookies } from 'react-cookie';
import resourcesToBackend from 'i18next-resources-to-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { getOptions, locales, cookieName } from './settings';
import { Locale } from './settings';

const runsOnServerSide = typeof window === 'undefined';

//
i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(resourcesToBackend((locale: Locale, ns: string) => import(`./locales/${locale}/${ns}.json`)))
  .init({
    ...getOptions(),
    lng: undefined, // let detect the language on client side
    detection: {
      order: ['path', 'htmlTag', 'cookie', 'navigator'],
    },
    preload: runsOnServerSide ? locales : [],
  });

export function useTranslation(
  locale: Locale,
  ns?: string,
  options?: UseTranslationOptions<undefined>,
) {
  const [cookies, setCookie] = useCookies([cookieName]);
  const ret = useTranslationOrg(ns, options);
  const { i18n } = ret;
  if (runsOnServerSide && locale && i18n.resolvedLanguage !== locale) {
    i18n.changeLanguage(locale);
  } else {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [activeLng, setActiveLng] = useState(i18n.resolvedLanguage);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (activeLng === i18n.resolvedLanguage) return;
      setActiveLng(i18n.resolvedLanguage);
    }, [activeLng, i18n.resolvedLanguage]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (!locale || i18n.resolvedLanguage === locale) return;
      i18n.changeLanguage(locale);
    }, [locale, i18n]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (cookies.i18next === locale) return;
      setCookie(cookieName, locale, { path: '/' });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [locale, cookies.i18next]);
  }
  return ret;
}
