import * as jaTranslation from "./locales/response/ja.json";

const translations = {
  ja: jaTranslation,
};

type Locale = "ja";
type Translation = typeof jaTranslation;
type Province = keyof Translation["provinces"];

export class ResponseTranslator {
  public provinces: Map<Province, string>;
  private translation: Translation;

  constructor(locale: Locale) {
    this.translation = translations[locale];

    const provinces: [Province, string][] = Object.keys(
      this.translation.provinces
    ).map((key) => [
      key as Province,
      this.translation.provinces[key as Province],
    ]);
    this.provinces = new Map<Province, string>(provinces)
  }
}
