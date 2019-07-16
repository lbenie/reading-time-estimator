import { en } from './en'
import { fr } from './fr'
import { es } from './es'
import { I18n } from './II18n'

const translations: { [key: string]: I18n } = {
  en,
  fr,
  es
}

const hasTranslation = (language: string) =>
  Object.keys(translations).some(x => x === language)

export { translations, hasTranslation }
