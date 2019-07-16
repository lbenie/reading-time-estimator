import { translations, hasTranslation } from './i18n';

interface IOptions {
  wordsPerMinute?: number | null;
  locale?: string | null;
}

interface IReadingTime {
  text: string;
  minutes: number;
  time: number;
  words: number;
}

const defaultOpts: IOptions = {
  wordsPerMinute: 500,
  locale: 'en'
};

const readingTime = (
  data: string | null | undefined,
  opts?: IOptions
): IReadingTime => {
  if (data == null) {
    throw new Error('Data provided is invalid');
  }

  const words = data.match(/[\w\d\s,.\u00C0-\u024F]+/gi);
  const options = Object.assign({}, defaultOpts, opts);

  if (words == null || words.length === 0) {
    throw new Error('Data provided is invalid');
  }

  if (options.wordsPerMinute == null || options.wordsPerMinute === 0) {
    throw new Error(`Please provide a 'wordPerMinute' option greater than 0`);
  }

  if (options.locale == null || options.locale.length === 0) {
    throw new Error(`Please provide a 'locale' option`);
  }

  const sum = words.reduce(
    (acc: any, word: string) => (acc += word.trim().split(/\s+/).length),
    0
  );

  const minutes = sum / options.wordsPerMinute;
  const time = minutes * 60 * 1000;
  const displayedTime = Math.round(minutes);
  const hasLocale = hasTranslation(options.locale);

  let text = `${displayedTime} ${
    hasLocale ? translations[options.locale].default : translations.en.default
  }`;

  if (displayedTime < 1.0001) {
    text = hasLocale ? translations[options.locale].less : translations.en.less;
  }

  return {
    text,
    minutes,
    time,
    words: sum
  };
};

export { readingTime, IOptions, IReadingTime };
