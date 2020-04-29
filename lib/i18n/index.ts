import { en } from './en'
import { fr } from './fr'
import { es } from './es'
import { cn } from './cn'
import { I18n } from './II18n'

enum SupportedLanguages {
  EN = 'en',
  FR = 'fr',
  ES = 'es',
  CN = 'cn',
}

const translations: Record<SupportedLanguages, I18n> = {
  en,
  fr,
  es,
  cn,
}

const hasTranslation = (language: SupportedLanguages) => translations[language]

export { translations, hasTranslation, SupportedLanguages }
