# Welcome to @huckleberry-inc/shopify-app-locales 👋
![Version](https://img.shields.io/badge/version-0.0.2-blue.svg?cacheSeconds=2592000)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](#)

> Locale library for Shopify app

### 🏠 [Homepage](https://github.com/huckleberry-inc/shopify-app-locales)

## Usage

```ts
import { RequestTranslator, ResponseTranslator } from "@huckleberry-inc/shopify-app-locales"

// Initializes RequestTranslator instance
const requestTranslator = new RequestTranslator("ja")

// Traslates request parameters
requestTranslator.orderStatuses.get("open") // オープン
requestTranslator.financialStatuses.get("authorized") // オーソリ済
requestTranslator.fulfillmentStatuses.get("shipped") // 発送済


// Initializes ResponseTranslator instance
const responseTranslator = new ResponseTranslator("ja")

// Traslates response parameters
responseTranslator.provinces.get("Aichi") // 愛知県


// "Statuses" is Set instance. You can iterate it.
requestTranslator.fulfillmentStatuses.forEach(([key, value]) => {
  ...
})

Array.from(requestTranslator.fulfillmentStatuses).map(([key, value]) => {
  return { value, key }
}
```

## Install

```sh
yarn install
```

## Run tests

```sh
yarn run test
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