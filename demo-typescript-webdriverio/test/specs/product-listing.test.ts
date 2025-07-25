import ProductListingPage from "../pages/product-listing.page.ts";
import {
  assertNotEquals,
  assertTruthy,
} from "../utils/assertions/assertions.ts";
import {
  checkFilteredProductsAvailability,
  checkFilteredProductsPriceRange,
} from "../utils/predicates.ts";

describe("Product Listing Page Test", () => {
  it("ID-001: Filter products by availability", async () => {
    const initialProductCount =
      await ProductListingPage.getListingProductCount();

    await ProductListingPage.filterProductsByStock(true);

    const productCards = await ProductListingPage.getProductCardComponents();
    const listingAvailability = await checkFilteredProductsAvailability(
      productCards,
      "In Stock",
    );

    assertTruthy(listingAvailability, "All listed products are in stock.");
    assertNotEquals(
      initialProductCount,
      await ProductListingPage.getListingProductCount(),
      "Cart item count is updated.",
    );
  });

  it("ID-002: Filter products by price range", async () => {
    const { minPrice, maxPrice } = { minPrice: "25", maxPrice: "100" };
    const initialProductCount =
      await ProductListingPage.getListingProductCount();

    await ProductListingPage.filterProductsByPriceRange(minPrice, maxPrice);

    assertNotEquals(
      initialProductCount,
      await ProductListingPage.getListingProductCount(),
      "Cart item count is updated",
    );

    const productCards = await ProductListingPage.getProductCardComponents();
    const listingPriceRange = await checkFilteredProductsPriceRange(
      productCards,
      minPrice,
      maxPrice,
    );

    assertTruthy(
      listingPriceRange,
      "Listed products are within the price range",
    );
  });

  it("ID-003: Filter products by category", () => {
    // Given I am viewing the product listing
    // When I select "Mobile Phones (3)" under Product type
    // Then only mobile phone products should be displayed
    // And the count should show 3 products
  });
  it("ID-004: Sort products", () => {
    // Given I am viewing a product
    // When I click the "+" button to increase quantity to 2
    // And I click the "Add to cart" button
    // Then the product should be added to the cart
    // And the cart total should update to reflect the purchase
  });
  it("ID-005: Filter by multiple criteria", () => {
    // Given I am viewing the product listing
    // When I select "Samsung (1)" under Brand
    // And I select "128GB (2)" under Storage
    // Then only Samsung products with 128GB storage should display
  });
  it("ID-006: Clear filters and sorting", () => {
    // Given I am viewing the product listing
    // When I select multiple filters and sorting
    // And I click the "Clear all" button
    // Then all filters a soring are cleared
  });
  it("ID-007: Add product to cart", () => {
    // Given I am viewing a product
    // When I click the "+" button to increase quantity to 2
    // And I click the "Add to cart" button
    // Then the product should be added to the cart
    // And the cart total should update to reflect the purchase
  });
});
