import sanitizeHtml, { type IOptions } from 'sanitize-html'
import {
  type I18n,
  type SupportedLanguages,
  type TranslationMap,
} from './i18n/types.js'
import { type ReadingTime, type Options } from './types.js'
import { en } from './i18n/en.js'

/**
 * Parses the text and returns an array of tokens (words / characters)
 * Fallback version without Unicode Script property escapes.
 * Strategy:
 *  - Each Han / Hiragana / Katakana character is its own token
 *  - Other scripts form contiguous word runs
 *  - Combining marks for Latin (Vietnamese) are attached to the base letter
 *  - Full-width punctuation (、。) and ideographic spaces are normalized to plain spaces
 *  - Punctuation outside recognized ranges is ignored
 */
const TOKEN_REGEX =
  /[\u4E00-\u9FFF\u3400-\u4DBF\u3040-\u309F\u30A0-\u30FF]|[A-Za-z0-9\u00C0-\u024F\u0400-\u052F\u2DE0-\u2DFF\uA640-\uA69F\u0980-\u09FF\uAC00-\uD7AF\u0590-\u05FF\u0600-\u06FF]+(?:[\u0300-\u036F\u0610-\u061A\u064B-\u065F]+)*(?:['’‑-][A-Za-z0-9\u00C0-\u024F\u0400-\u052F\u2DE0-\u2DFF\uA640-\uA69F\u0980-\u09FF\uAC00-\uD7AF\u0590-\u05FF\u0600-\u06FF]+)*|[0-9]+(?:[.,][0-9]+)*/g

/**
 * Normalizes input text before tokenization.
 * Steps:
 *  1. NFC normalize (combining marks standardized)
 *  2. Map all "space-like" Unicode chars to ASCII space
 *  3. Remove zero-width & directional formatting
 *  4. Replace common East Asian punctuation (、 。 ， ．) with space
 *  5. Collapse multiple spaces
 * @param {string} input - input string
 * @returns {string} normalized string
 */
const normalizeInput = (input: string) =>
  input
    .normalize('NFC')
    .replace(/[\u00A0\u1680\u2000-\u200A\u202F\u205F\u3000]/gu, ' ')
    .replace(/[\u200B-\u200F\u202A-\u202E\u2060]/gu, '')
    .replace(/[\u3001\u3002\uFF0C\uFF0E]/gu, ' ')
    .replace(/\s+/gu, ' ')
    .trim()

/**
 * Parses the text and returns an array of words
 * @param {string} data - The text to be analyzed
 * @param {Readonly<IOptions>} options - The options for HTML sanitization
 * @returns {ReadonlyArray<string>} Parsed chinese, japanese and accented text
 */
// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
const parseWords = (data: string, options: Readonly<IOptions>) => {
  const strippedHTML = sanitizeHtml(data, options)
  const normalized = normalizeInput(strippedHTML)
  const tokens = normalized.match(TOKEN_REGEX) ?? []
  return tokens
}

/**
 * Calculates the number of words in the text
 * @param {string} data - The text to be analyzed
 * @param {Readonly<IOptions>} options - The options for HTML sanitization
 * @returns {number} number of words in the text
 */
// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
const getNumberOfWords = (data: string, options: Readonly<IOptions>) =>
  parseWords(data, options).reduce(
    (accumulator, token) => accumulator + (token.trim().length ? 1 : 0),
    0,
  )

/**
 * Checks if the number of minutes is less than 1
 * @param {number} minutes - Number of minutes to read the text
 * @returns {boolean} True if the number of minutes is less than 1, otherwise false
 */
const isLessThanAMinute = (minutes: number) => minutes < 1 + Number.EPSILON

/**
 * Resolves the correct translation for a locale.
 * Falls back to provided English (baseline) if the requested locale is missing.
 * @param {SupportedLanguages} language - Requested language
 * @param {boolean} isLessThanOne - Whether reading time is below one minute
 * @param {TranslationMap | undefined} translations - Optional user-supplied translation map
 * @returns {string} localized string segment
 */
const resolveTranslation = (
  language: SupportedLanguages,
  isLessThanOne: boolean,
  translations?: TranslationMap,
) => {
  const locale: I18n =
    translations?.[language] ??
    (language === 'en' ? en : (translations?.en ?? en))
  return locale[isLessThanOne ? 'less' : 'default']
}
/**
 *
 * @param {string} data - The text to be estimated
 * @param {Options} options - The options for the reading time estimation
 * @returns {ReadingTime} The estimated reading time
 */
export const readingTime = (
  data: string,
  options: Options = {},
): ReadingTime => {
  const {
    wordsPerMinute = 200,
    language = 'en',
    translations = {},
    htmlSanitizerOptions = { allowedTags: [], allowedAttributes: {} },
  } = options
  const words = getNumberOfWords(data, htmlSanitizerOptions)
  const minutes = Math.round(words / wordsPerMinute)
  const isLessThanOne = isLessThanAMinute(minutes)

  return {
    minutes,
    words,
    text: `${isLessThanOne ? '' : `${minutes} `}${resolveTranslation(
      language,
      isLessThanOne,
      translations,
    )}`,
  } as const
}
