# firefox-cookie-path

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
