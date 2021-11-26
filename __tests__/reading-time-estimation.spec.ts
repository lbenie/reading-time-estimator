import { readingTime } from '../lib'
import { translations, SupportedLanguages } from '../lib/i18n'

const englishText = `I never took the time to properly build my website even though I am a Frontend Developer. I started to look at some technologies in 2018 and 2019, I found some amazing projects (nuxt, vuepress, etc...) but I never did finish my website.`

const chineseText = `春眠不觉晓，处处闻啼鸟。`

const frenchText = `Reading Time Estimator a été créé pour fournir une estimation de la durée de lecture d'un article ou d'un blog comme vu sur medium`

const spanishText = `Reading Time Estimator fue creado para proporcionar una estimación del tiempo de lectura de un artículo o blog como se ve en el medio`

const japaneseText = `どういたしまして。`

describe('readingTime', () => {
  it.each`
    language     | words           | wordsPerMinute | expectedResult
    ${'en'}      | ${englishText}  | ${10}          | ${{ minutes: 4, words: 43, text: `4 ${translations['en'].default}` }}
    ${'en'}      | ${englishText}  | ${undefined}   | ${{ minutes: 0, words: 43, text: `${translations['en'].less}` }}
    ${'en'}      | ${''}           | ${undefined}   | ${{ minutes: 0, words: 0, text: translations['en'].less }}
    ${undefined} | ${undefined}    | ${undefined}   | ${{ minutes: 0, words: 0, text: translations['en'].less }}
    ${'cn'}      | ${chineseText}  | ${2}           | ${{ minutes: 5, words: 10, text: `5 ${translations['cn'].default}` }}
    ${'fr'}      | ${frenchText}   | ${10}          | ${{ minutes: 3, words: 26, text: `3 ${translations['fr'].default}` }}
    ${'es'}      | ${spanishText}  | ${10}          | ${{ minutes: 2, words: 24, text: `2 ${translations['es'].default}` }}
    ${'ja'}      | ${japaneseText} | ${10}          | ${{ minutes: 1, words: 8, text: `${translations['ja'].less}` }}
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
