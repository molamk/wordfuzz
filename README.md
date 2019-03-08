# wordfuzz

A Datamuse API wrapper

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![codecov](https://codecov.io/gh/molamk/wordfuzz/branch/master/graph/badge.svg)](https://codecov.io/gh/molamk/wordfuzz)
[![Build Status](https://travis-ci.com/molamk/wordfuzz.svg?branch=master)](https://travis-ci.com/molamk/wordfuzz)
[![Maintainability](https://api.codeclimate.com/v1/badges/29acd35d15206058f8ff/maintainability)](https://codeclimate.com/github/molamk/wordfuzz/maintainability)
[![Known Vulnerabilities](https://snyk.io/test/github/molamk/wordfuzz/badge.svg?targetFile=package.json)](https://snyk.io/test/github/molamk/wordfuzz?targetFile=package.json)
[![npm (scoped)](https://img.shields.io/npm/v/wordfuzz.svg)](https://www.npmjs.com/package/wordfuzz)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/wordfuzz.svg)](https://www.npmjs.com/package/wordfuzz)

## Install dependency

```bash
# With npm
npm install --save wordfuzz

# With yarn
yarn add wordfuzz
```

## How to use

```javascript
const fuzz = require('wordfuzz');

fuzz()
  .meansLike('Hello')
  .max(3)
  .then(console.log)
  .catch(console.error);

/* Outputs
[{
    word: 'hi',
    score: 43130,
    tags: ['syn', 'n']
  },
  {
    word: 'howdy',
    score: 42247,
    tags: ['syn', 'n']
  },
  {
    word: 'hullo',
    score: 39883,
    tags: ['syn', 'n']
  }
]
/*
```