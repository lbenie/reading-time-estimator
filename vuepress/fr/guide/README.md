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

```typescript
interface Options {
  wordsPerMinute?: number | null
  locale?: string | null
}

interface ReadingTime {
  text: string
  minutes: number
  time: number
  words: number
}

const defaultOpts: Options = {
  wordsPerMinute: 500,
  locale: 'en'
}

export { readingTime, Options, ReadingTime }
```

Si `data` est null ou undefined, une erreur est générée.

Si les paramètres `locale` ou`wordsPerMinute` sont nulls, une erreur est
générée.

Les options sont facultatives, si elles ne sont pas définies, elles auront leurs
valeur par défaut:

```typescript
const defaultOpts: IOptions = {
  wordsPerMinute: 500,
  locale: 'en',
};
```

Pour le moment, il n'y a que 3 locales supportées: `en`,`fr` et `es`. Si une
locale n’existe pas, elle retournera `en`.

## TODOs

- Ajouter d'autres langues

## Pourquoi pas ...?

### reading-time

Ce [package](https://www.npmjs.com/package/reading-time) n'offre pas la
possibilité à l'internationalisation qui était un requis pour moi.
