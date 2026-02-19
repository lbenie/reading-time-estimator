/**
 * Localization object shared by all locales
 */
export type I18n = {
  /**
   * Translation for less than a minute
   */
  readonly less: string;
  /**
   * Translation for more than a minute
   */
  readonly default: string;
};

/**
 * Supported languages of the library
 */
export const supportedLanguages = [
  "en",
  "fr",
  "es",
  "zh-cn",
  "zh-tw",
  "ja",
  "de",
  "pt-br",
  "tr",
  "ro",
  "bn",
  "sk",
  "cs",
  "ru",
  "vi",
  "it",
  "id",
] as const;

/**
 * Supported languages types of the library
 */
export type SupportedLanguages = (typeof supportedLanguages)[number];

/**
 * A partial, user-supplied translation map enabling tree shaking.
 */
export type TranslationMap = Readonly<Partial<Record<SupportedLanguages, I18n>>>;
