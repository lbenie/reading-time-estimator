import translations from './i18n';

interface IOptions {
  wordsPerMinute?: number;
  locale?: string;
}

interface IReadingTime {
  text: string;
  minutes: number;
  time: number;
  words: string;
}

const defaultOpts: IOptions = {
  wordsPerMinute: 200,
  locale: 'en',
}

const readingTime = (data: string, opts?: IOptions): IReadingTime => {
  const words: RegExpMatchArray | null = data.match(/[\w\d\s]+/gi);
  const options = { ...defaultOpts, ...opts };

  if (!words) {
    throw new Error('Data provided is invalid');
  }

  if (!options.wordsPerMinute) {
    throw new Error(`Please provide a 'wordPerMinute' option`);
  }

  if (!options.locale) {
    throw new Error(`Please provide a 'locale' option`);
  }

  const minutes: number = words.length / options.wordsPerMinute;
  const time: number = minutes * 60 * 1000;
  const displayedTime: number = Math.round(parseInt(minutes.toFixed(2), 10));
  let text: string;

  if (displayedTime <= 1) {
    text = translations[options.locale].less
  } else {
    text = `${displayedTime} ${translations[options.locale].default}`
  }

  return {
    text,
    minutes,
    time,
    words: words.join(' ')
  }
}

export {
  readingTime
};

