---
sidebar: auto
---

# Introduction

Reading Time Estimator was created to provide an estimate of how long to read an
article or blog as seen on [medium](https://medium.com/).

## How it works

### Installation

With NPM

```bash
  npm install reading-time-estimator
```

or Yarn

```bash
  yarn add reading-time-estimator
```

### API

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

If `data` is null or undefined an error is thrown.

If either `locale` or `wordsPerMinute` are null an error is thrown.

Options are optional, if not defined they will fallback to their default value :

```typescript
const defaultOpts: IOptions = {
  wordsPerMinute: 500,
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
//    text: '23 min. read',
//    minutes: 22.944,
//    time: 1376639.9999999998,
//    words: 5736
//  }

// with french locale
const result = readingTime(text, { locale: 'fr' });
// result: {
//    text: '23 min. de lecture',
//    minutes: 22.944,
//    time: 1376639.9999999998,
//    words: 5736
//  }
```

## TODOs

- Add more languages

## Why Not ...?

### reading-time

This [package](https://www.npmjs.com/package/reading-time) does not offer
internationalization support which was a must for me.
