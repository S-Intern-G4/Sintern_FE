import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { TRANSLATIONS_EN } from './en';

i18n
  .use(initReactI18next)
  .init({
    keySeparator: false,
    interpolation: {
      escapeValue: false
    },
    lng: 'en',
    resources: {
      en: {
        translation: TRANSLATIONS_EN
      }
    }
  });