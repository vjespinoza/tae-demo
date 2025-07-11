package enums;

public enum DataKey {
    BASE_URL("baseUrl"),
    CUSTOMER_ONE_FULL_NAME("data.customerDetails.customerOne.fullName"),
    CUSTOMER_ONE_EMAIL("data.customerDetails.customerOne.email"),
    CUSTOMER_TWO_FULL_NAME("data.customerDetails.customerTwo.fullName"),
    CUSTOMER_TWO_EMAIL("data.customerDetails.customerTwo.email"),
    SHIPPING_ADDRESS_LINE_ONE("data.addresses.shipping.addressLineOne"),
    SHIPPING_ADDRESS_LINE_TWO("data.addresses.shipping.addressLineTwo"),
    SHIPPING_ADDRESS_CITY("data.addresses.shipping.city"),
    SHIPPING_ADDRESS_STATE("data.addresses.shipping.state"),
    SHIPPING_ADDRESS_ZIP_CODE("data.addresses.shipping.zipCode"),
    SHIPPING_ADDRESS_COUNTRY("data.addresses.shipping.country"),
    BILLING_ADDRESS_LINE_ONE("data.addresses.billing.addressLineOne"),
    BILLING_ADDRESS_LINE_TWO("data.addresses.billing.addressLineTwo"),
    BILLING_ADDRESS_CITY("data.addresses.billing.city"),
    BILLING_ADDRESS_STATE("data.addresses.billing.state"),
    BILLING_ADDRESS_ZIP_CODE("data.addresses.billing.zipCode"),
    BILLING_ADDRESS_COUNTRY("data.addresses.billing.country"),
    PAYMENT_CARD_NUMBER("data.paymentInfo.cardNumber"),
    PAYMENT_CARD_HOLDER_NAME("data.paymentInfo.cardHolderName"),
    PAYMENT_EXPIRY_DATE("data.paymentInfo.expiryDate"),
    PAYMENT_CVV("data.paymentInfo.cvv");


    private final String key;

    DataKey(String key) {
        this.key = key;
    }

    public String getKey() {
        return key;
    }
}
