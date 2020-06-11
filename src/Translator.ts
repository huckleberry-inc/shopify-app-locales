import * as jaTranslation from './locales/ja.json';

const translations = {
  ja: jaTranslation,
};

type Locale = 'ja';
type Translation = typeof jaTranslation;
export type Province = keyof Translation['provinces'];
export type OrderStatus = keyof Translation['orderStatuses'];
export type FinancialStatus = keyof Translation['financialStatuses'];
export type FulfillmentStatus = keyof Translation['fulfillmentStatuses'];

export class Translator {
  public provinces: Map<Province, string>;

  public orderStatuses: Map<OrderStatus, string>;

  public financialStatuses: Map<FinancialStatus, string>;

  public fulfillmentStatuses: Map<FulfillmentStatus, string>;

  constructor(locale: Locale) {
    const translation = translations[locale];

    const provinces: [Province, string][] = Object.keys(
      translation.provinces,
    ).map((key) => [key as Province, translation.provinces[key as Province]]);
    this.provinces = new Map<Province, string>(provinces);

    const orderStatuses: [OrderStatus, string][] = Object.keys(
      translation.orderStatuses,
    ).map((key) => [
      key as OrderStatus,
      translation.orderStatuses[key as OrderStatus],
    ]);
    this.orderStatuses = new Map<OrderStatus, string>(orderStatuses);

    const financialStatuses: [FinancialStatus, string][] = Object.keys(
      translation.financialStatuses,
    ).map((key) => [
      key as FinancialStatus,
      translation.financialStatuses[key as FinancialStatus],
    ]);
    this.financialStatuses = new Map<FinancialStatus, string>(
      financialStatuses,
    );

    const fulfillmentStatuses: [FulfillmentStatus, string][] = Object.keys(
      translation.fulfillmentStatuses,
    ).map((key) => [
      key as FulfillmentStatus,
      translation.fulfillmentStatuses[key as FulfillmentStatus],
    ]);
    this.fulfillmentStatuses = new Map<FulfillmentStatus, string>(
      fulfillmentStatuses,
    );
  }
}
