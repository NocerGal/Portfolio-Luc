import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

import LanguageDetector from 'i18next-browser-languagedetector';

import translationFr from './data/fr.json';
import translationEn from './data/en.json';

const resources = {
  en: {
    translation: translationEn,
  },
  fr: {
    translation: translationFr,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
