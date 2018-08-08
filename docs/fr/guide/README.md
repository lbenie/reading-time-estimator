---
sidebar: auto
---

# Introduction

Reading Time Estimator a été créé pour fournir une estimation de la durée de
lecture d'un article ou d'un blog comme vu sur [medium](// medium.com).

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

`` `typeScript interface IOptions { wordsPerMinute ?: nombre | nul; locale?:
chaîne | nul; }

interface IReadingTime { text: string; minutes: nombre; heure: numéro; mots:
numéro; }

declare const readingTime: ( data: string | null | indéfini, opte?: IOptions |
indéfini, ) => IReadingTime;

export {readingTime, IOptions, IReadingTime}; `` `

Si `data` est null ou undefined, une erreur est générée.

Si les paramètres `locale` ou`wordsPerMinute` sont nulls, une erreur est
générée.

Les options sont facultatives, si elles ne sont pas définies, elles auront leurs
valeur par défaut:

`` `typeScript const defaultOpts: IOptions = { motsPerMinute: 500, locale: 'en', }; ``
`

Pour le moment, il n'y a que 3 locales supportées: `en`,`fr` et `es`. Si un
locale n’existe pas, elle retournera en `en`.

## Fonctionnalités

- i18n support (en, fr, es and more to come)
- Typescript + typings intellisense
- semver

## Todo

- Add more languages

## Pourquoi pas ...?

### reading-time

This [package](https://www.npmjs.com/package/reading-time) does not offer
internationalization support which was a must for me.
