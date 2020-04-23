import { RequestTranslator } from "../index";

test("translates request order status in ja", () => {
  const requestTranslator = new RequestTranslator("ja");

  expect(requestTranslator.translateOrderStatus("open")).toBe("オープン");
});

test("returns order statuses in ja", () => {
  const requestTranslator = new RequestTranslator("ja");

  expect(requestTranslator.orderStatuses.get("open")).toBe("オープン");
});

test("translates request financial status in ja", () => {
  const requestTranslator = new RequestTranslator("ja");

  expect(requestTranslator.translateFinancialStatus("authorized")).toBe(
    "オーソリ済み"
  );
});

test("returns financial statuses in ja", () => {
  const requestTranslator = new RequestTranslator("ja");

  expect(requestTranslator.financialStatuses.get("authorized")).toBe("オーソリ済み");
});

test("translates request fulfillment status in ja", () => {
  const requestTranslator = new RequestTranslator("ja");

  expect(requestTranslator.translateFulfillmentStatus("shipped")).toBe(
    "発送済"
  );
});

test("returns fulfillment statuses in ja", () => {
  const requestTranslator = new RequestTranslator("ja");

  expect(requestTranslator.fulfillmentStatuses.get("shipped")).toBe("発送済");
});