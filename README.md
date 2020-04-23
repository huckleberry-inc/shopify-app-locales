# Welcome to @huckleberry-inc/shopify-app-locales 👋
![Version](https://img.shields.io/badge/version-0.0.1-blue.svg?cacheSeconds=2592000)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](#)

> Locale library for Shopify app

### 🏠 [Homepage](https://github.com/huckleberry-inc/shopify-app-locales)

## Usage

```ts
import { RequestTranslator, ResponseTranslator } from "@huckleberry-inc/shopify-app-locales"

// Translate GraphQL request parameters
const requestTranslator = new RequestTranslator("ja")
requestTranslator.translateOrderStatus("open") // オープン
requestTranslator.translateFinancialStatus("authorized") // オーソリ済み 
requestTranslator.translateFulfillmentStatus("shipped") // 発送済

// Fetch statuses
requestTranslator.orderStatuses
requestTranslator.financialStatuses
requestTranslator.fulfillmentStatuses


// Translate GraphQL response parameters
const responseTranslator = new ResponseTranslator("ja")
responseTranslator.translateProvince("Aichi") // 愛知県
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