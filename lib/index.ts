import { SupportedLanguages, translations, hasTranslation } from './i18n'

interface ReadingTime {
  minutes: number
  words: number
  text: string
}

const parseWords = (data: string) =>
  data.match(/[\w\d\s,.\u00C0-\u024F]+/giu) ?? []

const parseChineseWords = (data: string) =>
  data.match(/[\u4E00-\u9FA5]/gu) ?? []

const getNumberOfWords = (data: string) =>
  parseWords(data).reduce(
    (accumulator, word) =>
      accumulator +
      (!word.trim().length ? 0 : word.trim().split(/\s+/u).length),
    0
  ) + parseChineseWords(data).length

const isLessThanAMinute = (words: number) => words < 1.00001

const getLocale = (words: number, locale = SupportedLanguages.EN) =>
  translations[hasTranslation(locale) ? locale : SupportedLanguages.EN][
    isLessThanAMinute(words) ? 'less' : 'default'
  ]

const readingTime = (
  data: string,
  wordsPerMinute = 300,
  language = SupportedLanguages.EN
): ReadingTime => {
  const words = getNumberOfWords(data ?? '')
  const minutes = +Math.round(words / wordsPerMinute).toFixed(2)

  return {
    minutes,
    words,
    text: `${isLessThanAMinute(minutes) ? '' : minutes} ${getLocale(
      words,
      language
    )}`.trimLeft(),
  }
}

export { readingTime }
