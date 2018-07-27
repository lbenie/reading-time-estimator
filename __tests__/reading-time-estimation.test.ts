import { readingTime, IOptions } from '../lib';
import { translations } from '../lib/i18n';
const loremIpsum = require('lorem-ipsum');

describe('readingTime()', () => {
  let smallText: string;
  let bigText: string;

  beforeAll(() => {
    smallText = loremIpsum({
      count: 1,
      units: 'paragraphs',
      paragraphLowerBound: 5,
      paragraphUpperBound: 20
    });

    bigText = loremIpsum({
      count: 40,
      units: 'paragraphs',
      paragraphLowerBound: 20,
      paragraphUpperBound: 40
    });
  });

  afterAll(() => {
    smallText = '';
    bigText = '';
  });

  it('given_a_null_input_readingTime()_should_throw_an_error', () => {
    expect(() => {
      readingTime(null);
    }).toThrowError(`Data provided is invalid`);
  });

  it('given_a_small_input_and_a_null_locale_readingTime()_should_throw_an_error', () => {
    expect(() => {
      readingTime(smallText, {
        locale: null
      });
    }).toThrowError(`Please provide a 'locale' option`);
  });

  it('given_a_small_input_and_a_null_wordsPerMinute_readingTime()_should_throw_an_error', () => {
    expect(() => {
      readingTime(smallText, {
        wordsPerMinute: null
      });
    }).toThrowError(`Please provide a 'wordPerMinute' option`);
  });

  it('given_a_undefined_input_readingTime()_should_throw_an_error', () => {
    expect(() => {
      readingTime(undefined);
    }).toThrowError(`Data provided is invalid`);
  });

  it('given_a_small_input_translations_should_be_in_english_and_less_than_a_minute', () => {
    const result = readingTime(smallText);

    expect(result.text).toContain(translations.en.default);
  });

  it('given_a_small_input_words_should_be_defined_and_greater_than_zero', () => {
    const result = readingTime(smallText);

    expect(result.words).toBeGreaterThan(0);
  });

  it('given_a_small_input_words_should_be_equals_to_data_argument', () => {
    const result = readingTime(smallText);

    expect(result.words).toBe(smallText.length);
  });

  it('given_a_small_input_time_should_be_greater_than_or_equal_to_100000', () => {
    const result = readingTime(smallText);

    expect(result.time).toBeGreaterThanOrEqual(100000);
  });

  it('given_a_small_input_minutes_should_be_greater_than_or_equal_to_1', () => {
    const result = readingTime(smallText);

    expect(result.minutes).toBeGreaterThanOrEqual(1);
  });

  it('given_an_invalid_input_should_throw_data_is_invalid', () => {
    expect(() => {
      readingTime('©');
    }).toThrowError('Data provided is invalid');
  });

  it('given_a_big_input_translations_should_be_in_french_and_contain_min. read', () => {
    const result = readingTime(bigText, {
      locale: 'fr'
    });

    expect(result.text).toContain(translations.fr.default);
  });

  it('given_a_big_input_translations_and_an_undefined_locale_locale_should_be_in_english_and_contain_min. read', () => {
    const result = readingTime(bigText, {
      locale: 'it'
    });

    expect(result.text).toContain(translations.en.default);
  });
  it('given_a_big_input_translations_and_a_french_locale_locale_should_be_in_french_and_contain_min. de lecture', () => {
    const result = readingTime(bigText, {
      locale: 'fr'
    });

    expect(result.text).toContain(translations.fr.default);
  });
});
