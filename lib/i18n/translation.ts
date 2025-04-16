import { en } from './en'
import { fr } from './fr'
import { es } from './es'
import { zhCn } from './zh-cn'
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
import { zhTw } from './zh-tw'
import { ru } from './ru'
import { vi } from './vi'
import { it } from './it'
import { id } from './id'

export const translations: Record<SupportedLanguages, I18n> = {
  en,
  fr,
  es,
  'zh-cn': zhCn,
  'zh-tw': zhTw,
  cn: zhCn,
  ja,
  de,
  'pt-br': ptBr,
  tr,
  ro,
  bn,
  sk,
  cs,
  ru,
  vi,
  it,
  id,
}
