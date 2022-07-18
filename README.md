# firefox-cookie-path

[![Build](https://github.com/arshadkazmi42/firefox-cookie-path/actions/workflows/nodejs.yml/badge.svg)](https://github.com/arshadkazmi42/firefox-cookie-path/actions/workflows/nodejs.yml)
[![NPM Version](https://img.shields.io/npm/v/firefox-cookie-path.svg)](https://www.npmjs.com/package/firefox-cookie-path)
[![NPM Downloads](https://img.shields.io/npm/dt/firefox-cookie-path.svg)](https://www.npmjs.com/package/firefox-cookie-path)
[![Github Repo Size](https://img.shields.io/github/repo-size/arshadkazmi42/firefox-cookie-path.svg)](https://github.com/arshadkazmi42/firefox-cookie-path)
[![LICENSE](https://img.shields.io/npm/l/firefox-cookie-path.svg)](https://github.com/arshadkazmi42/firefox-cookie-path/blob/master/LICENSE)
[![Contributors](https://img.shields.io/github/contributors/arshadkazmi42/firefox-cookie-path.svg)](https://github.com/arshadkazmi42/firefox-cookie-path/graphs/contributors)
[![Commit](https://img.shields.io/github/last-commit/arshadkazmi42/firefox-cookie-path.svg)](https://github.com/arshadkazmi42/firefox-cookie-path/commits/master)


Get firefox cookie sqlite database path - crossplatform

## Install

```
npm i firefox-cookie-path
```

## Usage

```javascript

const firefoxCookiePath = require('firefox-cookie-path');

const cookiePath = firefoxCookiePath('default', 'darwin');
console.log(cookiePath);

// Output
// /Users/arshad/Library/Application Support/Firefox/Profiles/w2ddsss2.default

```

## Contributing

Interested in contributing to this project?
You can log any issues or suggestion related to this library [here](https://github.com/arshadkazmi42/firefox-cookie-path/issues/new)

Read our contributing [guide](CONTRIBUTING.md) on getting started with contributing to the codebase
