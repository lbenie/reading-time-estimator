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

It is a simple function that takes the data as a required argument with the words per minute and locale as optional arguments.

Per default the locale is set to english `en`.

Per default the word per minute is set to `300`.

At the moment there is only 5 supported locales: `en`, `fr`, `es`, `cn` and `ja`. If a
locale does not exist, it will fallback to `en`.

### Usage

```typescript
import { readingTime } from 'reading-time-estimator';

// default options
const result = readingTime(text, 10);

output:
{
  minutes: 4,
  words: 43,
  text: `4 min read`
}


// with french locale
const result = readingTime(text, 10, 'fr');

output:
{
  minutes: 4,
  words: 43,
  text: `4 min de lecture`
}
```

## TODOs

- Add more languages

## Why Not ...?

### reading-time

This [package](https://www.npmjs.com/package/reading-time) does not offer
internationalization support which was a must for me.
