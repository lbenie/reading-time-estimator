import translations from './i18n';

export interface IOptions {
  wordsPerMinute?: number | null | undefined;
  locale?: string | null | undefined;
}

export interface IReadingTime {
  text: string;
  minutes: number;
  time: number;
  words: string;
}

const defaultOpts: IOptions = {
  wordsPerMinute: 200,
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

  const minutes = words.length / options.wordsPerMinute;
  const time = minutes * 60 * 1000;
  const displayedTime = Math.round(minutes);
  let text: string;

  if (displayedTime <= 1) {
    text =
      (translations[options.locale] && translations[options.locale].less) ||
      translations.en.less;
  } else {
    text = `${displayedTime} ${(translations[options.locale] &&
      translations[options.locale].default) ||
      translations.en.default}`;
  }

  return {
    text,
    minutes,
    time,
    words: words.join(' ')
  };
};

export { readingTime };
