import * as testData from "../../../global/data/testData.json";

export default class DataModel {
  static getBaseUrl = (): string => testData.baseUrl;
  static getCustomerOneFullName = (): string =>
    testData.data.customerDetails.customerOne.fullName;
  static getCustomerOneEmail = (): string =>
    testData.data.customerDetails.customerOne.email;
  static getCustomerTwoFullName = (): string =>
    testData.data.customerDetails.customerTwo.fullName;
  static getCustomerTwoEmail = (): string =>
    testData.data.customerDetails.customerTwo.email;
  static getShippingAddressLineOne = (): string =>
    testData.data.addresses.shipping.addressLineOne;
  static getShippingAddressLineTwo = (): string =>
    testData.data.addresses.shipping.addressLineTwo;
  static getShippingAddressCity = (): string =>
    testData.data.addresses.shipping.city;
  static getShippingAddressState = (): string =>
    testData.data.addresses.shipping.state;
  static getShippingAddressZipCode = (): string =>
    testData.data.addresses.shipping.zipCode;
  static getShippingAddressCountry = (): string =>
    testData.data.addresses.shipping.country;
  static getBillingAddressLineOne = (): string =>
    testData.data.addresses.billing.addressLineOne;
  static getBillingAddressLineTwo = (): string =>
    testData.data.addresses.billing.addressLineTwo;
  static getBillingAddressCity = (): string =>
    testData.data.addresses.billing.city;
  static getBillingAddressState = (): string =>
    testData.data.addresses.billing.state;
  static getBillingAddressZipCode = (): string =>
    testData.data.addresses.billing.zipCode;
  static getBillingAddressCountry = (): string =>
    testData.data.addresses.billing.country;
  static getPaymentCardNumber = (): string =>
    testData.data.paymentInfo.cardNumber;
  static getPaymentCardHolderName = (): string =>
    testData.data.paymentInfo.cardHolderName;
  static getPaymentExpiryDate = (): string =>
    testData.data.paymentInfo.expiryDate;
  static getPaymentCvv = (): string => testData.data.paymentInfo.cvv;
}
