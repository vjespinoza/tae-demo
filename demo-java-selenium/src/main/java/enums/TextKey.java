package enums;

public enum TextKey {
    PRODUCTS_SALE_TAG("products.saleTag"),
    PRODUCTS_AVAILABILITY_IN_STOCK("products.availability.inStock"),
    PRODUCTS_AVAILABILITY_OUT_OF_STOCK("products.availability.outOfStock"),
    PRODUCTS_CATEGORIES_PHONE("products.categories.phone"),
    PRODUCTS_CATEGORIES_LAPTOP("products.categories.laptop"),
    PRODUCTS_CATEGORIES_CONSOLE("products.categories.console"),
    PRODUCTS_CATEGORIES_ACCESSORY("products.categories.accessory"),
    PRODUCTS_BRANDS_OPPO("products.brands.oppo"),
    PRODUCTS_BRANDS_XIAOMI("products.brands.xiaomi"),
    PRODUCTS_BRANDS_SAMSUNG("products.brands.samsung"),
    PRODUCTS_BRANDS_APPLE("products.brands.apple"),
    PRODUCTS_BRANDS_SONY("products.brands.sony"),
    PRODUCTS_BRANDS_LOGITECH("products.brands.logitech"),
    PRODUCTS_FILTERS_BEST_SELLING("products.filters.bestSelling"),
    PRODUCTS_FILTERS_LOWEST_PRICE("products.filters.lowestPrice"),
    PRODUCTS_FILTERS_HIGHEST_PRICE("products.filters.highestPrice"),
    PRODUCTS_FILTERS_ASCENDING("products.filters.ascending"),
    PRODUCTS_FILTERS_DESCENDING("products.filters.descending"),
    PAGES_CART_EMPTY_CART_MESSAGE("pages.cart.emptyCartMessage"),
    PAGES_CHECKOUT_TITLE("pages.checkout.title"),
    PAGES_CHECKOUT_EMPTY_CART_MESSAGE("pages.checkout.emptyCartMessage"),
    PAGES_PAYMENT_TITLE("pages.payment.title"),
    PAGES_CONFIRMATION_SUCCESS_MESSAGE("pages.confirmation.successMessage"),
    PAGES_CONFIRMATION_THANK_YOU_MESSAGE("pages.confirmation.thankYouMessage");


    private final String key;

    TextKey(String key) {
        this.key = key;
    }

    public String getKey() {
        return key;
    }
}