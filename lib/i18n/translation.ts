import { en } from './en'
import { fr } from './fr'
import { es } from './es'
import { cn } from './cn'
import { ja } from './ja'
import { de } from './de'
import type { I18n } from './i18n'
import type { SupportedLanguages } from './supportedLanguages'
import { ptBr } from './pt-br'
import { tr } from './tr'
import { ro } from './ro'
import { bn } from './bn'
import { sk } from './sk'
import { cs } from './cs'
import { ru } from './ru'

export const translations: Record<SupportedLanguages, I18n> = {
  en,
  fr,
  es,
  cn,
  ja,
  de,
  'pt-br': ptBr,
  tr,
  ro,
  bn,
  sk,
  cs,
  ru,
}
