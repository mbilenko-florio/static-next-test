import languageDetector from 'next-language-detector';
import { fallbackLocale, locales } from './settings';

export default languageDetector({
  fallbackLng: fallbackLocale,
  supportedLngs: locales.map((l) => l),
});
