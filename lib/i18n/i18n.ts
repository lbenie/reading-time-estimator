/**
 * Localization object shared by all locales
 */
export type I18n = {
  /**
   * Translation for less than a minute
   */
  readonly less: string
  /**
   * Translation for more than a minute
   */
  readonly default: string
}
