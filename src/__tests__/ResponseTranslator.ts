import { ResponseTranslator } from "../index";

test("translates reqsponse province in ja", () => {
  const responseTranslator = new ResponseTranslator("ja");

  expect(responseTranslator.translateProvince("Aichi")).toBe("愛知県");
});