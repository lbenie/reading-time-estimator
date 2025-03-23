import { translations } from './i18n'
import type { SupportedLanguages } from './i18n'
import sanitizeHtml from 'sanitize-html'

/**
 * Reading time estimator result shape
 */
type ReadingTime = {
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
 * Strips HTML tags from the input text
 * @param {string} data - The text to be stripped of HTML tags
 * @returns {string} The text without HTML tags
 */
const stripHtmlTags = (data: string) =>
  sanitizeHtml(data, { allowedTags: [], allowedAttributes: {} })

/**
 * Parses the text and returns an array of words
 * @param {string} data - The text to be analyzed
 * @returns {ReadonlyArray<string>} Parsed chinese, japanese and accented text
 */
const parseWords = (data: string) => {
  const strippedHTML = stripHtmlTags(data)
  const words =
    strippedHTML.match(
      /[\w|\d|\s|,|.|\u00C0-\u024F|\u4E00-\u9FA5|\u3041-\u309F]+/giu,
    ) ?? []
  return words.flatMap((word) => word.match(/[\u4E00-\u9FA5]/gu) ?? word)
}

/**
 * Calculates the number of words in the text
 * @param {string} data - The text to be analyzed
 * @returns {number} number of words in the text
 */
const getNumberOfWords = (data: string) =>
  parseWords(data).reduce(
    (accumulator, word) =>
      accumulator +
      (!word.trim().length ? 0 : word.trim().split(/\s+/u).length),
    0,
  )

/**
 * Checks if the number of minutes is less than 1
 * @param {number} minutes - Number of minutes to read the text
 * @returns {boolean} True if the number of minutes is less than 1, otherwise false
 */
const isLessThanAMinute = (minutes: number) => minutes < 1 + Number.EPSILON

/**
 * Grabs the correct translation
 * @param {boolean} isLessThanOne - True if the number of minutes is less than 1, otherwise false
 * @param {SupportedLanguages} locale - Locale to be used in the result
 * @returns {string} localized message with the number of minutes to read the text
 */
const getLocale = (isLessThanOne: boolean, locale: SupportedLanguages = 'en') =>
  translations[locale][isLessThanOne ? 'less' : 'default']

/**
 *
 * @param {string} data - The text to be estimated
 * @param {number} wordsPerMinute - The number of words per minute
 * @param {SupportedLanguages} language - The language of the text
 * @returns {ReadingTime} The estimated reading time
 */
export const readingTime = (
  data: string,
  wordsPerMinute = 300,
  language: SupportedLanguages = 'en',
): ReadingTime => {
  const words = getNumberOfWords(data)
  const minutes = Math.round(words / wordsPerMinute)
  const isLessThanOne = isLessThanAMinute(minutes)

  return {
    minutes,
    words,
    text: `${isLessThanOne ? '' : `${minutes} `}${getLocale(
      isLessThanOne,
      language,
    )}`,
  } as const
}
