import { RequestTranslator } from "../index";

test("returns order statuses in ja", () => {
  const requestTranslator = new RequestTranslator("ja");

  expect(requestTranslator.orderStatuses.get("open")).toBe("オープン");
});

test("returns financial statuses in ja", () => {
  const requestTranslator = new RequestTranslator("ja");

  expect(requestTranslator.financialStatuses.get("authorized")).toBe("オーソリ済");
});

test("returns fulfillment statuses in ja", () => {
  const requestTranslator = new RequestTranslator("ja");

  expect(requestTranslator.fulfillmentStatuses.get("shipped")).toBe("発送済");
});