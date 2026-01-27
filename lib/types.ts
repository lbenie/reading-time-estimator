import type { IOptions } from 'sanitize-html'
import type { MarkedOptions } from 'marked'
import { type TranslationMap, type SupportedLanguages } from './i18n/types.js'

/**
 * Reading time estimator result shape
 */
export type ReadingTime = {
  /**
   * Number of minutes to read the text
   */
  readonly minutes: number
  /**
   * Number of words in the text
   */
  readonly words: number
  /**
   * Localized message with the number of minutes to read the text
   */
  readonly text: string
}

/**
 * Reading time estimator options shape
 */
export type Options = {
  /**
   * Number of words per minute to read the text (default: 200)
   */
  readonly wordsPerMinute?: number
  /**
   * Language code for localization (default: 'en')
   */
  readonly language?: SupportedLanguages
  /**
   * Translation map to override or add locales (default: undefined)
   */
  readonly translations?: TranslationMap
  /**
   * Options for the HTML sanitizer (default: {allowedTags: [], allowedAttributes: {}})
   */
  readonly htmlSanitizerOptions?: Readonly<IOptions>
  /**
   * Options for the markdown parser (default: {}), always sets async to false, you cannot override that
   */
  readonly markdownParserOptions?: Readonly<MarkedOptions>
}
