import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import enCommon from './locales/en/common.json'
import enLanding from './locales/en/landing.json'
import jaCommon from './locales/ja/common.json'
import jaLanding from './locales/ja/landing.json'

/** Default namespace used when t() is called without an explicit namespace. */
export const defaultNS = 'common'

/**
 * Translation resources for every supported language.
 * This object also drives the type-safe t() keys (see i18next.d.ts).
 */
export const resources = {
  en: { common: enCommon, landing: enLanding },
  ja: { common: jaCommon, landing: jaLanding },
} as const

i18n.use(LanguageDetector).use(initReactI18next)

void i18n.init({
  resources,
  fallbackLng: 'ja',
  supportedLngs: ['ja', 'en'],
  defaultNS,
  ns: ['common', 'landing'],
  // Resources are bundled statically, so initialize synchronously.
  initAsync: false,
  interpolation: {
    // React already escapes values against XSS.
    escapeValue: false,
  },
  detection: {
    // Default to Japanese (fallbackLng); only a previously saved choice overrides it.
    order: ['localStorage'],
    caches: ['localStorage'],
  },
  react: {
    useSuspense: false,
  },
})

// Keep <html lang> in sync with the active language (accessibility / SEO).
const applyHtmlLang = (lng: string) => {
  document.documentElement.lang = lng
}
applyHtmlLang(i18n.resolvedLanguage ?? 'ja')
i18n.on('languageChanged', applyHtmlLang)

export default i18n
