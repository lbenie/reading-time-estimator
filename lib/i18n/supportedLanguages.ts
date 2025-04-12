/**
 * Supported languages of the library
 */
export const supportedLanguages = [
  'en',
  'fr',
  'es',
  'cn', // keeping for compatibility
  'zh-cn',
  'zh-tw',
  'ja',
  'de',
  'pt-br',
  'tr',
  'ro',
  'bn',
  'sk',
  'cs',
] as const

/**
 * Supported languages types of the library
 */
export type SupportedLanguages = (typeof supportedLanguages)[number]
