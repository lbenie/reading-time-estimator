---
sidebar: auto
---

# Introduction

Reading Time Estimator a été créé pour fournir une estimation de la durée de
lecture d'un article ou d'un blog comme vu sur [medium](https://medium.com/).

## Comment ça fonctionne

### Installation

Avec NPM

```bash
  npm install reading-time-estimator
```

ou Yarn

```bash
  yarn add reading-time-estimator
```

### API

L'api est assez simple. Voici la définition des types pour ce module.


Il s'agit d'une fonction simple qui prend les données comme argument requis avec les mots par minute et les paramètres régionaux comme arguments facultatifs.

Par défaut, les paramètres régionaux sont définis en anglais `en`.

Par défaut, le mot par minute a comme valeur `300`.

Pour le moment, il n'y a que 6 paramètres régionaux prises en charge: `en`,` fr`, `es`, `cn`, `ja` et `de`. Si un
paramètre régionale n'existe pas, il sera traiter comme la valeur `en`.

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

- Ajouter d'autres langues

## Pourquoi pas ...?

### reading-time

Ce [package](https://www.npmjs.com/package/reading-time) n'offre pas la
possibilité à l'internationalisation qui était un requis pour moi.
