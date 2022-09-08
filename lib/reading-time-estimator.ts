import { translations } from './i18n'
import type { SupportedLanguages } from './i18n'

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
 * Parses the text and returns an array of words
 * @param data - The text to be analyzed
 * @returns Parsed chinese, japanese and accented text
 */
const parseWords = (data: string) =>
  data.match(/[\w|\d|\s|,|.|\u00C0-\u024F|\u4E00-\u9FA5|\u3041-\u309F]+/giu) ??
  []

/**
 * Calculates the number of words in the text
 * @param data - The text to be analyzed
 * @returns number of words in the text
 */
const getNumberOfWords = (data: string) =>
  parseWords(data).reduce(
    (accumulator, word) =>
      accumulator +
      (!word.trim().length ? 0 : word.trim().split(/\s+/u).length),
    0
  )

/**
 * Checks if the number of minutes is less than 1
 * @param minutes - Number of minutes to read the text
 * @returns True if the number of minutes is less than 1, otherwise false
 */
const isLessThanAMinute = (minutes: number) => minutes < 1 + Number.EPSILON

/**
 * Grabs the correct translation
 * @param minutes - Number of minutes to read the text
 * @param locale - Locale to be used in the result
 * @returns localized message with the number of minutes to read the text
 */
const getLocale = (minutes: number, locale: SupportedLanguages = 'en') =>
  translations[locale][isLessThanAMinute(minutes) ? 'less' : 'default']

/**
 *
 * @param data - The text to be estimated
 * @param wordsPerMinute - The number of words per minute
 * @param language - The language of the text
 * @returns The estimated reading time
 */
export const readingTime = (
  data: string,
  wordsPerMinute = 300,
  language: SupportedLanguages = 'en'
): ReadingTime => {
  const words = getNumberOfWords(data)
  const minutes = Number(Math.round(words / wordsPerMinute).toFixed(2))

  return {
    minutes,
    words,
    text: `${isLessThanAMinute(minutes) ? '' : `${minutes} `}${getLocale(
      minutes,
      language
    )}`,
  } as const
}
