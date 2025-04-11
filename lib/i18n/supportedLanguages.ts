/**
 * Supported languages of the library
 */
export const supportedLanguages = [
  'en',
  'fr',
  'es',
  'cn',
  'ja',
  'de',
  'pt-br',
  'tr',
  'ro',
  'bn',
  'sk',
  'cs',
  'ru',
  'vi',
  'it',
  'id',
] as const

/**
 * Supported languages types of the library
 */
export type SupportedLanguages = (typeof supportedLanguages)[number]
