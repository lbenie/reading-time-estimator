import { en } from './en'
import { fr } from './fr'
import { es } from './es'
import { cn } from './cn'
import { ja } from './ja'
import { I18n } from './II18n'

enum SupportedLanguages {
  EN = 'en',
  FR = 'fr',
  ES = 'es',
  CN = 'cn',
  JA = 'ja',
}

const translations: Record<SupportedLanguages, I18n> = {
  en,
  fr,
  es,
  cn,
  ja,
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const hasTranslation = (language: SupportedLanguages) => translations[language]

export { translations, hasTranslation, SupportedLanguages }
