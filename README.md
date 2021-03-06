# Font Awesome Icon Character List
[![license](https://img.shields.io/github/license/gluons/Font-Awesome-Icon-Chars.svg?style=flat-square)](./LICENSE)
[![npm](https://img.shields.io/npm/v/font-awesome-icon-chars.svg?style=flat-square)](https://www.npmjs.com/package/font-awesome-icon-chars)
[![npm](https://img.shields.io/npm/dt/font-awesome-icon-chars.svg?style=flat-square)](https://www.npmjs.com/package/font-awesome-icon-chars)
[![Known Vulnerabilities](https://snyk.io/test/github/gluons/font-awesome-icon-chars/badge.svg?style=flat-square)](https://snyk.io/test/github/gluons/font-awesome-icon-chars)
[![Travis](https://img.shields.io/travis/gluons/Font-Awesome-Icon-Chars.svg?style=flat-square)](https://travis-ci.org/gluons/Font-Awesome-Icon-Chars)
[![TSLint](https://img.shields.io/badge/TSLint-gluons-15757B.svg?style=flat-square)](https://github.com/gluons/tslint-config-gluons)
[![Renovate enabled](https://img.shields.io/badge/renovate-enabled-brightgreen.svg?style=flat-square)](https://renovateapp.com/)

The list of [Font Awesome](https://fontawesome.com/) icon **unicode characters** in several file format.

> This list contains only [**free**](https://fontawesome.com/icons?d=gallery&m=free) icons.

## Installation

**Via [NPM](https://www.npmjs.com/):**

[![NPM](https://nodei.co/npm/font-awesome-icon-chars.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/font-awesome-icon-chars)

```
npm install font-awesome-icon-chars
```

**Via [Yarn](https://yarnpkg.com/):**

```
yarn add font-awesome-icon-chars
```

## Usage

### Assets

You can use characters list file in [character-list](./character-list) directory.  
All characters list files will be placed in this directory.

### Node.js

You can also get list of icon from this module.

```javascript
const faIconChars = require('font-awesome-icon-chars');
const { solid, regular, brands } = faIconChars;

// Solid icons
for (let icon of solid) {
	console.log(`Icon ID: ${icon.name}, Icon Unicode: ${icon.unicode}`);
}
// Regular icons
for (let icon of regular) {
	console.log(`Icon ID: ${icon.name}, Icon Unicode: ${icon.unicode}`);
}
// Brands icons
for (let icon of brands) {
	console.log(`Icon ID: ${icon.name}, Icon Unicode: ${icon.unicode}`);
}
```

## Schema

### 📜 [CSON](https://github.com/bevry/cson), [JSON](https://www.json.org/), [TOML](https://github.com/toml-lang/toml), [YAML](http://yaml.org/)

- `solid` (`Icon[]`) — Font Awesome [solid icons](https://fontawesome.com/icons?d=gallery&s=solid&m=free)
- `regular` (`Icon[]`) — Font Awesome [regular icons](https://fontawesome.com/icons?d=gallery&s=regular&m=free)
- `brands` (`Icons[]`) — Font Awesome [brands icons](https://fontawesome.com/icons?d=gallery&s=brands&m=free)

#### Icon

- `name` (`string`) — Font Awesome icon name.
- `unicode` (`string`) — An unicode of Font Awesome icon.

### 📜 [XML](https://www.w3.org/XML/)

- `<style>`
  - `<solid>` — Font Awesome [solid icons](https://fontawesome.com/icons?d=gallery&s=solid&m=free)
    - `<icon id="...icon name...">`
      - `id` (attribute) — Font Awesome icon name  
      - `<unicode>` — Contain an unicode of Font Awesome icon.
  - `<regular>` — Font Awesome [regular icons](https://fontawesome.com/icons?d=gallery&s=regular&m=free)
    - `<icon id="...icon name...">`
      - `id` (attribute) — Font Awesome icon name  
      - `<unicode>` — Contain an unicode of Font Awesome icon.
  - `<brands>` — Font Awesome [brands icons](https://fontawesome.com/icons?d=gallery&s=brands&m=free)
    - `<icon id="...icon name...">`
      - `id` (attribute) — Font Awesome icon name  
      - `<unicode>` — Contain an unicode of Font Awesome icon.
