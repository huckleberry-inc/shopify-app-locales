import * as jaTranslation from "./locales/response/ja.json";

const translations = {
  ja: jaTranslation,
};

type Locale = "ja";
type Translation = typeof jaTranslation;
type OrderStatus = keyof Translation["orderStatuses"];
type FinancialStatus = keyof Translation["financialStatuses"];
type FulfillmentStatus = keyof Translation["fulfillmentStatuses"];

export class RequestTranslator {
  private translation: Translation;
  public orderStatuses: Map<OrderStatus, string>;
  public financialStatuses: Map<FinancialStatus, string>;
  public fulfillmentStatuses: Map<FulfillmentStatus, string>;

  constructor(locale: Locale) {
    this.translation = translations[locale];

    const orderStatuses: [OrderStatus, string][] = Object.keys(
      this.translation.orderStatuses
    ).map((key) => [
      key as OrderStatus,
      this.translation.orderStatuses[key as OrderStatus],
    ]);
    this.orderStatuses = new Map<OrderStatus, string>(orderStatuses);

    const financialStatuses: [FinancialStatus, string][] = Object.keys(
      this.translation.financialStatuses
    ).map((key) => [
      key as FinancialStatus,
      this.translation.financialStatuses[key as FinancialStatus],
    ]);
    this.financialStatuses = new Map<FinancialStatus, string>(financialStatuses);

    const fulfillmentStatuses: [FulfillmentStatus, string][] = Object.keys(
      this.translation.fulfillmentStatuses
    ).map((key) => [
      key as FulfillmentStatus,
      this.translation.fulfillmentStatuses[key as FulfillmentStatus],
    ]);
    this.fulfillmentStatuses = new Map<FulfillmentStatus, string>(fulfillmentStatuses);
  }

  translateOrderStatus(status: OrderStatus) {
    return this.translation.orderStatuses[status];
  }

  translateFinancialStatus(status: FinancialStatus) {
    return this.translation.financialStatuses[status];
  }

  translateFulfillmentStatus(status: FulfillmentStatus) {
    return this.translation.fulfillmentStatuses[status];
  }
}
