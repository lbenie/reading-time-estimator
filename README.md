# reading-time-estimator

[![Test](https://github.com/lbenie/reading-time-estimator/actions/workflows/test.yml/badge.svg)](https://github.com/lbenie/reading-time-estimator/actions/workflows/test.yml)
[![Lint commit messages](https://github.com/lbenie/reading-time-estimator/actions/workflows/commintlint.yml/badge.svg)](https://github.com/lbenie/reading-time-estimator/actions/workflows/commintlint.yml)
[![Release](https://github.com/lbenie/reading-time-estimator/actions/workflows/release.yml/badge.svg)](https://github.com/lbenie/reading-time-estimator/actions/workflows/release.yml)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![npm](https://img.shields.io/npm/l/reading-time-estimator.svg)](https://github.com/lbenie/reading-time-estimator/blob/main/LICENSE)
[![npm](https://img.shields.io/npm/dt/reading-time-estimator.svg)](https://www.npmjs.com/package/reading-time-estimator)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/reading-time-estimator.svg)](https://www.npmjs.com/package/reading-time-estimator)

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-12-orange.svg?style=flat-square)](#contributors-)
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

The API is fairly simple. `readingTime` accepts the text to analyze plus an optional options object.

Per default the locale is set to english `en`.

Per default the words per minute is set to `200`.

Inputs are parsed as Markdown and sanitized as HTML automatically before word counting.

You can also provide `translations` to override locale strings or `htmlSanitizerOptions` to customize how markup is handled.

At the moment it supports these locales: `'en', 'fr', 'es', 'zh-cn', 'zh-tw', 'ja', 'de', 'pt-br', 'tr', 'ro', 'bn', 'sk', 'cs', 'ru', 'vi', 'it' and 'id'`

### Usage

Try it live [here](https://codesandbox.io/s/condescending-rosalind-lll23r?file=/src/App.tsx)

```typescript
import { readingTime } from 'reading-time-estimator'

const text = 'some text to parse'

// custom words per minute
const result = readingTime(text, { wordsPerMinute: 10 })

// output:
// {
//   minutes: 4,
//   words: 43,
//   text: `4 min read`
// }

// with french locale
import { fr } from 'reading-time-estimator/i18n/fr'

const frenchResult = readingTime(text, {
  wordsPerMinute: 10,
  language: 'fr',
  {
    fr,
  },
})

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
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="http://contrails.space"><img src="https://avatars.githubusercontent.com/u/41533924?v=4?s=100" width="100px;" alt="凝结尾迹"/><br /><sub><b>凝结尾迹</b></sub></a><br /><a href="https://github.com/lbenie/reading-time-estimator/commits?author=zS1m" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://www.steempro.com"><img src="https://avatars.githubusercontent.com/u/53206866?v=4?s=100" width="100px;" alt="Muhammad Faisal Amin"/><br /><sub><b>Muhammad Faisal Amin</b></sub></a><br /><a href="https://github.com/lbenie/reading-time-estimator/commits?author=faisalamin9696" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Grolicek"><img src="https://avatars.githubusercontent.com/u/58747066?v=4?s=100" width="100px;" alt="Oliver Groma"/><br /><sub><b>Oliver Groma</b></sub></a><br /><a href="https://github.com/lbenie/reading-time-estimator/commits?author=Grolicek" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://qnury.es"><img src="https://avatars.githubusercontent.com/u/50016379?v=4?s=100" width="100px;" alt="Luo Wenjie"/><br /><sub><b>Luo Wenjie</b></sub></a><br /><a href="https://github.com/lbenie/reading-time-estimator/commits?author=Qnurye" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://focussedflyer3.hashnode.dev"><img src="https://avatars.githubusercontent.com/u/36317458?v=4?s=100" width="100px;" alt="CK Wong"/><br /><sub><b>CK Wong</b></sub></a><br /><a href="https://github.com/lbenie/reading-time-estimator/commits?author=FocussedFlyer3" title="Code">💻</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
