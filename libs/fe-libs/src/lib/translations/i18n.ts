import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import en from "./assets/i18n/en.json";
import fr from "./assets/i18n/fr.json";

i18n.use(initReactI18next).init({
  debug: true,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: en,
    },
    fr: {
      translation: fr,
    },
  },
});

export default i18n;
