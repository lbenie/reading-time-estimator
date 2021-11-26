import { translations } from './i18n'
import type { SupportedLanguages } from './i18n'

interface ReadingTime {
  minutes: number
  words: number
  text: string
}

const parseWords = (data: string) =>
  data.match(/[\w\d\s,.\u00C0-\u024F]+/giu) ?? []

const parseChineseWords = (data: string) =>
  data.match(/[\u4E00-\u9FA5]/gu) ?? []

const parseJapaneseWords = (data: string) =>
  data.match(/[\u3041-\u3096]/gu) ?? []

const getNumberOfWords = (data: string) =>
  parseWords(data).reduce(
    (accumulator, word) =>
      accumulator +
      (!word.trim().length ? 0 : word.trim().split(/\s+/u).length),
    0
  ) +
  parseChineseWords(data).length +
  parseJapaneseWords(data).length

const isLessThanAMinute = (minutes: number) => minutes < 1 + Number.EPSILON

const getLocale = (minutes: number, locale: SupportedLanguages = 'en') =>
  translations[locale][isLessThanAMinute(minutes) ? 'less' : 'default']

const readingTime = (
  data: string,
  wordsPerMinute = 300,
  language: SupportedLanguages = 'en'
): ReadingTime => {
  const words = getNumberOfWords(data ?? '')
  const minutes = +Math.round(words / wordsPerMinute).toFixed(2)

  return {
    minutes,
    words,
    text: `${isLessThanAMinute(minutes) ? '' : minutes} ${getLocale(
      minutes,
      language
    )}`.trimLeft(),
  }
}

export { readingTime }
