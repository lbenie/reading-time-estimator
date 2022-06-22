import { readingTime } from '../lib'
import { translations } from '../lib/i18n'
import type { SupportedLanguages } from '../lib/i18n'

const englishText = `I never took the time to properly build my website even though I am a Frontend Developer. I started to look at some technologies in 2018 and 2019, I found some amazing projects (nuxt, vuepress, etc...) but I never did finish my website.`

const chineseText = `春眠不觉晓，处处闻啼鸟。`

const frenchText = `Reading Time Estimator a été créé pour fournir une estimation de la durée de lecture d'un article ou d'un blog comme vu sur medium`

const spanishText = `Reading Time Estimator fue creado para proporcionar una estimación del tiempo de lectura de un artículo o blog como se ve en el medio`

const japaneseText = `どういたしまして。`

interface TestSetup {
  readonly language: SupportedLanguages | undefined
  readonly words: string | undefined
  readonly wordsPerMinute: number | undefined
  readonly expectedResult: {
    readonly minutes: number
    readonly words: number
    readonly text: string
  }
}

describe('readingTime', () => {
  it.each<readonly TestSetup[]>([
    [
      {
        language: 'en',
        words: englishText,
        wordsPerMinute: 10,
        expectedResult: {
          minutes: 4,
          words: 43,
          text: `4 ${translations['en'].default}`,
        },
      },
    ],
    [
      {
        language: 'en',
        words: englishText,
        wordsPerMinute: undefined,
        expectedResult: {
          minutes: 0,
          words: 43,
          text: `${translations['en'].less}`,
        },
      },
    ],
    [
      {
        language: 'en',
        words: '',
        wordsPerMinute: undefined,
        expectedResult: { minutes: 0, words: 0, text: translations['en'].less },
      },
    ],
    [
      {
        language: undefined,
        words: undefined,
        wordsPerMinute: undefined,
        expectedResult: { minutes: 0, words: 0, text: translations['en'].less },
      },
    ],
    [
      {
        language: 'cn',
        words: chineseText,
        wordsPerMinute: 2,
        expectedResult: {
          minutes: 5,
          words: 10,
          text: `5 ${translations['cn'].default}`,
        },
      },
    ],
    [
      {
        language: 'fr',
        words: frenchText,
        wordsPerMinute: 10,
        expectedResult: {
          minutes: 3,
          words: 26,
          text: `3 ${translations['fr'].default}`,
        },
      },
    ],
    [
      {
        language: 'es',
        words: spanishText,
        wordsPerMinute: 10,
        expectedResult: {
          minutes: 2,
          words: 24,
          text: `2 ${translations['es'].default}`,
        },
      },
    ],
    [
      {
        language: 'ja',
        words: japaneseText,
        wordsPerMinute: 10,
        expectedResult: {
          minutes: 1,
          words: 8,
          text: `${translations['ja'].less}`,
        },
      },
    ],
  ])(
    'approximates time to read a text in %s',
    ({ words, wordsPerMinute, language, expectedResult }) => {
      const result = readingTime(words ?? '', wordsPerMinute, language)

      expect(result).toStrictEqual(expectedResult)
    }
  )
})
