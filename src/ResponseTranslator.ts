import * as jaTranslation from "./locales/request/ja.json";

const translations = {
  ja: jaTranslation,
};

type Locale = "ja";
type Translation = typeof jaTranslation;
type Province = keyof Translation["provinces"];

export class ResponseTranslator {
  private translation: Translation;

  constructor(locale: Locale) {
    this.translation = translations[locale];
  }

  translateProvince(province: Province) {
    return this.translation.provinces[province];
  }
}
