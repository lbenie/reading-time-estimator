import { readingTime } from '../lib'
import { translations, SupportedLanguages } from '../lib/i18n'

const englishText = `I never took the time to properly build my website even though I am a Frontend Developer. I started to look at some technologies in 2018 and 2019, I found some amazing projects (nuxt, vuepress, etc...) but I never did finish my website.`

const chineseText = `春眠不觉晓，处处闻啼鸟。`

const frenchText = `Reading Time Estimator a été créé pour fournir une estimation de la durée de lecture d'un article ou d'un blog comme vu sur medium`

describe('readingTime', () => {
  it.each`
    language                 | words          | wordsPerMinute | expectedResult
    ${SupportedLanguages.EN} | ${englishText} | ${10}          | ${{ minutes: 4, words: 43, text: `4 ${translations[SupportedLanguages.EN].default}` }}
    ${SupportedLanguages.EN} | ${englishText} | ${undefined}   | ${{ minutes: 0, words: 43, text: `${translations[SupportedLanguages.EN].default}` }}
    ${SupportedLanguages.EN} | ${''}          | ${undefined}   | ${{ minutes: 0, words: 0, text: translations[SupportedLanguages.EN].less }}
    ${undefined}             | ${undefined}   | ${undefined}   | ${{ minutes: 0, words: 0, text: translations[SupportedLanguages.EN].less }}
    ${SupportedLanguages.CN} | ${chineseText} | ${2}           | ${{ minutes: 5, words: 10, text: `5 ${translations[SupportedLanguages.CN].default}` }}
    ${SupportedLanguages.FR} | ${frenchText}  | ${10}          | ${{ minutes: 3, words: 26, text: `3 ${translations[SupportedLanguages.FR].default}` }}
  `(
    'approximates time to read a text in $language',
    ({
      language,
      words,
      wordsPerMinute,
      expectedResult,
    }: {
      language: SupportedLanguages
      words: string
      wordsPerMinute?: number
      expectedResult: { minutes: number; words: number }
    }) => {
      const result = readingTime(words, wordsPerMinute, language)

      expect(result).toEqual(expectedResult)
    }
  )
})
