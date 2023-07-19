# reading-time-estimator

![Test](https://github.com/lbenie/reading-time-estimator/workflows/Test/badge.svg)
![Lint](https://github.com/lbenie/reading-time-estimator/workflows/Lint/badge.svg)
![Semantic Release](https://github.com/lbenie/reading-time-estimator/workflows/Semantic%20Release/badge.svg)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![npm](https://img.shields.io/npm/l/reading-time-estimator.svg)](https://github.com/lbenie/reading-time-estimator/blob/main/LICENSE)
[![npm](https://img.shields.io/npm/dt/reading-time-estimator.svg)](https://www.npmjs.com/package/reading-time-estimator)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/reading-time-estimator.svg)](https://www.npmjs.com/package/reading-time-estimator)

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-7-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/made-with-typescript.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/uses-badges.svg)](https://forthebadge.com)

A [medium](https://medium.com/)'s like reading time estimator with
internationalization support.

## Documentation

Reading Time Estimator was created to provide an estimate of how long to read an
article or blog as seen on [medium](https://medium.com/).

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

At the moment there is only 9 supported locales: `en`, `fr`, `es`, `pt-br`, `cn`, `ja`, `de`, `tr` and `ro`. If a
locale does not exist, it will fallback to `en`.

### Usage

Try it live [here](https://codesandbox.io/s/condescending-rosalind-lll23r?file=/src/App.tsx)

```typescript
import { readingTime } from 'reading-time-estimator'

const text = 'some text to parse'

// default options
const result = readingTime(text, 10)

// output:
// {
//   minutes: 4,
//   words: 43,
//   text: `4 min read`
// }

// with french locale
const result = readingTime(text, 10, 'fr')

// output:
// {
//   minutes: 4,
//   words: 43,
//   text: `4 min de lecture`
// }
```

## Why Not ...?

### reading-time

This [package](https://www.npmjs.com/package/reading-time) does not offer
internationalization support which was a must for me.

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://lbenie.xyz/"><img src="https://avatars.githubusercontent.com/u/7316046?v=4?s=100" width="100px;" alt="Lucien Bénié"/><br /><sub><b>Lucien Bénié</b></sub></a><br /><a href="https://github.com/lbenie/reading-time-estimator/commits?author=lbenie" title="Code">💻</a> <a href="https://github.com/lbenie/reading-time-estimator/commits?author=lbenie" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/visierrat"><img src="https://avatars.githubusercontent.com/u/1642224?v=4?s=100" width="100px;" alt="Victor Sierra"/><br /><sub><b>Victor Sierra</b></sub></a><br /><a href="https://github.com/lbenie/reading-time-estimator/commits?author=visierrat" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/zchazc"><img src="https://avatars.githubusercontent.com/u/10862234?v=4?s=100" width="100px;" alt="ZhangC"/><br /><sub><b>ZhangC</b></sub></a><br /><a href="https://github.com/lbenie/reading-time-estimator/commits?author=zchazc" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/RichardMEN11"><img src="https://avatars.githubusercontent.com/u/34884710?v=4?s=100" width="100px;" alt="Rich11"/><br /><sub><b>Rich11</b></sub></a><br /><a href="https://github.com/lbenie/reading-time-estimator/commits?author=RichardMEN11" title="Code">💻</a> <a href="https://github.com/lbenie/reading-time-estimator/commits?author=RichardMEN11" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://matheusinit-blog.vercel.app/"><img src="https://avatars.githubusercontent.com/u/68296035?v=4?s=100" width="100px;" alt="Matheus Oliveira"/><br /><sub><b>Matheus Oliveira</b></sub></a><br /><a href="https://github.com/lbenie/reading-time-estimator/commits?author=matheusinit" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/can-guven"><img src="https://avatars.githubusercontent.com/u/76837895?v=4?s=100" width="100px;" alt="Can Güven"/><br /><sub><b>Can Güven</b></sub></a><br /><a href="https://github.com/lbenie/reading-time-estimator/commits?author=can-guven" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/astrutz"><img src="https://avatars.githubusercontent.com/u/22653731?v=4?s=100" width="100px;" alt="Alexander Strutz"/><br /><sub><b>Alexander Strutz</b></sub></a><br /><a href="https://github.com/lbenie/reading-time-estimator/commits?author=astrutz" title="Code">💻</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
