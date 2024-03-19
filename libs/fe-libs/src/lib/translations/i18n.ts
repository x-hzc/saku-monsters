import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import i18n from 'i18next';
import en from './assets/i18n/en.json';
import fr from './assets/i18n/fr.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en-US',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      ['en-US']: {
        translation: en,
      },
      ['fr-FR']: {
        translation: fr,
      },
    },
  });

export default i18n;
