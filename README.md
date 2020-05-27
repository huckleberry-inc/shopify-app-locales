# Welcome to @huckleberry-inc/shopify-app-locales 👋
![Version](https://img.shields.io/badge/version-0.1.1-blue.svg?cacheSeconds=2592000)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](#)
![Test](https://github.com/huckleberry-inc/shopify-app-locales/workflows/Test/badge.svg)

> Locale library for Shopify app (Supports Japanese only for now)

### 🏠 [Homepage](https://github.com/huckleberry-inc/shopify-app-locales)

## Usage

```ts
import { Translator } from "@huckleberry-inc/shopify-app-locales"

// Initializes Translator instance
const translator = new Translator("ja")

// Traslates words
translator.provinces.get("Aichi") // 愛知県
translator.orderStatuses.get("open") // オープン
translator.financialStatuses.get("authorized") // オーソリ済
translator.fulfillmentStatuses.get("shipped") // 発送済

// Words are Set instance. You can iterate it.
translator.fulfillmentStatuses.forEach(([key, value]) => {
  ...
})

Array.from(translator.fulfillmentStatuses).map(([key, value]) => {
  return { value, key }
}
```

## Install

```sh
yarn add @huckleberry-inc/shopify-app-locales
```

## Run tests

```sh
yarn test
```

## Author

👤 **Huckleberry, inc. <dev@huckleberry-inc.com>**


## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check [issues page](https://github.com/huckleberry-inc/shopify-app-locales/issues). 

## Show your support

Give a ⭐️ if this project helped you!


***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_