import * as text from "../../../global/data/texts.json";

export default class DataModel {
  static getProductsSaleTag = (): string => text.products.saleTag;
  static getProductsAvailabilityInStock = (): string =>
    text.products.availability.inStock;
  static getProductsAvailabilityOutOfStock = (): string =>
    text.products.availability.outOfStock;
  static getProductsCategoriesPhone = (): string =>
    text.products.categories.phone;
  static getProductsCategoriesLaptop = (): string =>
    text.products.categories.laptop;
  static getProductsCategoriesConsole = (): string =>
    text.products.categories.console;
  static getProductsCategoriesAccessory = (): string =>
    text.products.categories.accessory;
  static getProductsBrandsOppo = (): string => text.products.brands.oppo;
  static getProductsBrandsXiaomi = (): string => text.products.brands.xiaomi;
  static getProductsBrandsSamsung = (): string => text.products.brands.samsung;
  static getProductsBrandsApple = (): string => text.products.brands.apple;
  static getProductsBrandsSony = (): string => text.products.brands.sony;
  static getProductsBrandsLogitech = (): string =>
    text.products.brands.logitech;
  static getProductsFiltersBestSelling = (): string =>
    text.products.filters.bestSelling;
  static getProductsFiltersLowestPrice = (): string =>
    text.products.filters.lowestPrice;
  static getProductsFiltersHighestPrice = (): string =>
    text.products.filters.highestPrice;
  static getProductsFiltersAscending = (): string =>
    text.products.filters.ascending;
  static getProductsFiltersDescending = (): string =>
    text.products.filters.descending;
  static getPagesCartEmptyCartMessage = (): string =>
    text.pages.cart.emptyCartMessage;
  static getPagesCheckoutTitle = (): string => text.pages.checkout.title;
  static getPagesCheckoutEmptyCartMessage = (): string =>
    text.pages.checkout.emptyCartMessage;
  static getPagesPaymentTitle = (): string => text.pages.payment.title;
  static getPagesConfirmationSuccessMessage = (): string =>
    text.pages.confirmation.successMessage;
  static getPagesConfirmationThankYouMessage = (): string =>
    text.pages.confirmation.thankYouMessage;
}
