import { Translator } from "../index";

const translator = new Translator("ja");

test("returns order statuses in ja", () => {
  expect(translator.provinces.get("Aichi")).toBe("愛知県");
});

test("returns order statuses in ja", () => {
  expect(translator.orderStatuses.get("open")).toBe("オープン");
});

test("returns financial statuses in ja", () => {
  expect(translator.financialStatuses.get("authorized")).toBe("オーソリ済");
});

test("returns fulfillment statuses in ja", () => {
  expect(translator.fulfillmentStatuses.get("shipped")).toBe("発送済");
});