import { ResponseTranslator } from "../index";

test("returns provinces in ja", () => {
  const responseTranslator = new ResponseTranslator("ja");

  expect(responseTranslator.provinces.get("Aichi")).toBe("愛知県");
});