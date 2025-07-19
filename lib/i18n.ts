import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

// Import translation files
import enCommon from '../public/locales/en/common.json'
import frCommon from '../public/locales/fr/common.json'
import arCommon from '../public/locales/ar/common.json'

const resources = {
  en: {
    common: enCommon,
  },
  fr: {
    common: frCommon,
  },
  ar: {
    common: arCommon,
  },
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,
    defaultNS: 'common',
    ns: ['common'],
    
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },

    interpolation: {
      escapeValue: false,
    },

    react: {
      useSuspense: false,
    },
  })

export default i18n
