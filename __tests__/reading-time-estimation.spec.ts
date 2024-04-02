import { readingTime } from '../lib'
import { translations } from '../lib/i18n'
import type { SupportedLanguages } from '../lib/i18n'

const englishText = `I never took the time to properly build my website even though I am a Frontend Developer. I started to look at some technologies in 2018 and 2019, I found some amazing projects (nuxt, vuepress, etc...) but I never did finish my website.`

const chineseText = `中文 多来几个字`

const frenchText = `Reading Time Estimator a été créé pour fournir une estimation de la durée de lecture d'un article ou d'un blog comme vu sur medium`

const spanishText = `Reading Time Estimator fue creado para proporcionar una estimación del tiempo de lectura de un artículo o blog como se ve en el medio`

const japaneseText = `どういたしまして。`

const germanText = `Ich habe mir nie die Zeit genommen, meine Website richtig zu bauen, obwohl ich ein Frontend-Entwickler bin. Ich habe 2018 und 2019 begonnen, mich mit einigen Technologien zu beschäftigen, ich habe einige tolle Projekte gefunden (nuxt, vuepress, etc...), aber ich habe meine Website nie fertiggestellt`

const brazilianPortugueseText =
  'Eu gostaria de ter um site que eu achasse incrível, com cores belas e que se casem uma com a outra, mas nunca chegou perto disso'

const turkishText =
  'Güvenemem servetime, malıma, Ümidim yok bugün ile yarına, Toprak beni de basacak bağrına, Adaletin bu mu dünya, Ne yar verdin, ne mal, dünya, Kötülerinsin sen dünya, İyileri öldüren dünya, Ne insanlar gelip geçti kapından, Memnun gelip giden var mı yolundan, Kimi fakir, kimi ayrılmış yarinden'

const romanianText =
  '„Nu mi-am făcut niciodată timp să-mi construiesc site-ul corect, chiar dacă sunt dezvoltator Frontend. Am început să mă uit la unele tehnologii în 2018 și 2019, am găsit niște proiecte uimitoare (nuxt, vuepress, etc...) dar nu mi-am terminat niciodată site-ul.'

const banglaText = `Riḍiṁ ṭā'ima ēsṭimēṭara tairi karā haẏēchila ēkaṭi ārṭikēla bā blagēra paṛāra samaẏēra ēkaṭi anumāna pradāna karāra jan'ya yā miḍiẏāmē dēkhā yāẏa`

const slovakText = `Reading Time Estimator bol vytvorený s cieľom poskytnúť odhad, aký dlhý čas je potrebný na prečítanie článku alebo blogu tak, ako je to implementované na stránke medium.`

const czechText = `Reading Time Estimator byl vytvořen s cílem poskytnout odhad, jak dlouhou dobu je zapotřebí k přečtení článku nebo blogu tak, jak je to implementováno na stránce medium.`


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
  it.each<TestSetup>([
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
    {
      language: 'en',
      words: '',
      wordsPerMinute: undefined,
      expectedResult: { minutes: 0, words: 0, text: translations['en'].less },
    },
    {
      language: undefined,
      words: undefined,
      wordsPerMinute: undefined,
      expectedResult: { minutes: 0, words: 0, text: translations['en'].less },
    },
    {
      language: 'cn',
      words: chineseText,
      wordsPerMinute: 2,
      expectedResult: {
        minutes: 4,
        words: 7,
        text: `4 ${translations['cn'].default}`,
      },
    },
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
    {
      language: 'ja',
      words: japaneseText,
      wordsPerMinute: 10,
      expectedResult: {
        minutes: 0,
        words: 1,
        text: translations['ja'].less,
      },
    },
    {
      language: 'de',
      words: germanText,
      wordsPerMinute: 10,
      expectedResult: {
        minutes: 5,
        words: 47,
        text: `5 ${translations['de'].default}`,
      },
    },
    {
      language: 'pt-br',
      words: brazilianPortugueseText,
      wordsPerMinute: 10,
      expectedResult: {
        minutes: 3,
        words: 26,
        text: `3 ${translations['pt-br'].default}`,
      },
    },
    {
      language: 'tr',
      words: turkishText,
      wordsPerMinute: 10,
      expectedResult: {
        minutes: 5,
        words: 45,
        text: `5 ${translations['tr'].default}`,
      },
    },
    {
      language: 'ro',
      words: romanianText,
      wordsPerMinute: 10,
      expectedResult: {
        minutes: 5,
        words: 45,
        text: `5 ${translations['ro'].default}`,
      },
    },
    {
      language: 'bn',
      words: banglaText,
      wordsPerMinute: 10,
      expectedResult: {
        minutes: 4,
        words: 35,
        text: `4 ${translations['bn'].default}`,
      },
    },
    {
      language: 'sk',
      words: slovakText,
      wordsPerMinute: 10,
      expectedResult: {
        minutes: 3,
        words: 27,
        text: `3 ${translations['sk'].default}`,
      },
    },
    {
      language: 'cs',
      words: czechText,
      wordsPerMinute: 10,
      expectedResult: {
        minutes: 3,
        words: 27,
        text: `3 ${translations['cs'].default}`,
      },
    },
  ])(
    'approximates time to read a text in %s',
    ({ words, wordsPerMinute, language, expectedResult }) => {
      const result = readingTime(words ?? '', wordsPerMinute, language)

      expect(result).toStrictEqual(expectedResult)
    },
  )
})
