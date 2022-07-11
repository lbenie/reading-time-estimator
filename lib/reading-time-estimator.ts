import { translations } from './i18n'
import type { SupportedLanguages } from './i18n'

interface ReadingTime {
  readonly minutes: number
  readonly words: number
  readonly text: string
}
/**
 *
 * @param data - The text to be analyzed
 * @returns Parsed chinese, japanese and accented text
 */
const parseWords = (data: string) =>
  data.match(/[\w|\d|\s|,|.|\u00C0-\u024F|\u4E00-\u9FA5|\u3041-\u309F]+/giu) ??
  []

const getNumberOfWords = (data: string) =>
  parseWords(data).reduce(
    (accumulator, word) =>
      accumulator +
      (!word.trim().length ? 0 : word.trim().split(/\s+/u).length),
    0
  )

const isLessThanAMinute = (minutes: number) => minutes < 1 + Number.EPSILON

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
  const minutes = +Math.round(words / wordsPerMinute).toFixed(2)

  return {
    minutes,
    words,
    text: `${isLessThanAMinute(minutes) ? '' : `${minutes} `}${getLocale(
      minutes,
      language
    )}`,
  } as const
}
