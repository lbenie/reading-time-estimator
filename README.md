# reading-time-estimator

[![Build Status](https://travis-ci.org/lbenie/reading-time-estimator.svg?branch=master)](https://travis-ci.org/lbenie/reading-time-estimator)
[![Mutation testing badge](https://badge.stryker-mutator.io/github.com/lbenie/reading-time-estimator/master)](https://stryker-mutator.github.io)

A [medium](https://medium.com/)'s like reading time estimator with
internationalization support.

## Installation

with npm

```sh
npm install reading-time-estimator --save
```

or with Yarn

```sh
yarn install reading-time-estimator
```

## API

The api is fairly simple. Here are the types definition for this module.

```typescript
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

declare const readingTime: (
  data: string | null | undefined,
  opts?: IOptions | undefined,
) => IReadingTime;

export { readingTime, IOptions, IReadingTime };
```

If `data`, is null or undefined an error is thrown.

If either `locale` or `wordsPerMinute` is null an error is thrown.

Options are optional, if not defined they will fallback to their default value :

```typescript
const defaultOpts: IOptions = {
  wordsPerMinute: 250,
  locale: 'en',
};
```

At the moment there is only 3 supported locales: `en`, `fr` and `es`. If a
locale does not exist, it will fallback to `en`.

### Usage

```typescript
import { readingTime } from 'reading-time-estimator';

// default options
const result = readingTime(text);

// result: {
//    text: '409 min. read',
//    minutes: 408.615,
//    time: 24516900,
//    words: 81723
//  }

// with french locale
const result = readingTime(text, { locale: 'fr' });
// result: {
//    text: '409 min. de lecture',
//    minutes: 408.615,
//    time: 24516900,
//    words: 81723
//  }
```

## TODOs

- [ ] add more languages
