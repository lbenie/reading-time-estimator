const en = {
    less: 'less than a minute read',
    default: 'min. read'
};

const fr = {
    less: `moins d'une minute de lecture`,
    default: 'min. de lecture'
};

const es = {
    less: `menos de un minuto leyendo`,
    default: 'min. leer'
};

const translations = {
    en,
    fr,
    es
};
const hasTranslation = (language) => Object.keys(translations).some(x => x === language);

const defaultOpts = {
    wordsPerMinute: 500,
    locale: 'en'
};
const readingTime = (data, opts) => {
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
    const sum = words.reduce((acc, word) => (acc += word.trim().split(/\s+/).length), 0);
    const minutes = sum / options.wordsPerMinute;
    const time = minutes * 60 * 1000;
    const displayedTime = Math.round(minutes);
    const hasLocale = hasTranslation(options.locale);
    let text = `${displayedTime} ${hasLocale ? translations[options.locale].default : translations.en.default}`;
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

export { readingTime };
