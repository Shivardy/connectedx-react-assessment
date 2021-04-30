import i18next from 'i18next'
import i18nextLanguageDetector from 'i18next-browser-languagedetector'
import i18nextHttp from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'

i18next.use(i18nextHttp).use(i18nextLanguageDetector).use(initReactI18next).init({
  lang: 'en',
  fallbackLng: 'en',
  detection: {
    order: ['queryString', 'cookie'],
    cache: ['cookie']
  },
  interpolation: {
    escapeValue: false
  }
})

export default i18next
