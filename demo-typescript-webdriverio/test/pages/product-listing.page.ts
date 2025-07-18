import BasePage from "./base/base.page.ts";
import ProductCard from "./components/product-card.ts";

class ProductListingPage extends BasePage {
  constructor() {
    super();
  }

  private get cartButton() {
    return $("#cart-button");
  }

  private get cartItemCount() {
    return $("#cart-item-count");
  }

  private get cartTotalPrice() {
    return $("#cart-total");
  }

  private get productCards() {
    return $$('[data-testid="product-card"]');
  }

  private get productSortSelector() {
    return $("#sort-select");
  }

  private get inStockProductFilter() {
    return $("#inStockFilter");
  }

  private get outOfStockProductFilter() {
    return $("#outOfStockFilter");
  }

  private get minPriceFilter() {
    return $("#minPrice");
  }

  private get maxPriceFilter() {
    return $("#maxPrice");
  }

  private get categoryFilters() {
    return $$("[id^='category']");
  }

  private get clearFiltersButton() {
    return $("button[aria-label^='Clear']");
  }

  public async openCartModal(): Promise<void> {
    await this.click(this.cartButton);
  }

  public async getCartItemCount(): Promise<number> {
    const count = await this.getText(this.cartItemCount);
    return parseInt(count);
  }

  public async getCartTotalPrice(): Promise<string> {
    return await this.getText(this.cartTotalPrice);
  }

  public async getListingProductCount() {
    return await this.productCards.length;
  }

  //TODO: Fix this
  public async getProductByName(productName: string) {
    const filteredProd = await (
      await this.productCards.getElements()
    ).find(async (prod) => {
      return (await new ProductCard(prod).getProductTitle()) === productName;
    });
    return new ProductCard(filteredProd);
  }

  public async sortProduct(option: string): Promise<void> {
    await this.selectOptionByAttribute(
      this.productSortSelector,
      "value",
      option,
    );
  }

  public async filterProductsByStock(inStock: boolean): Promise<void> {
    inStock
      ? await this.click(this.inStockProductFilter)
      : await this.click(this.outOfStockProductFilter);
  }

  public async filterProductsByPriceRange(
    minPrice: string,
    maxPrice: string,
  ): Promise<void> {
    await this.type(this.minPriceFilter, minPrice);
    await this.type(this.maxPriceFilter, maxPrice);
  }

  public async filterProductByCategory(categoryName: string) {
    const filteredCategory = this.categoryFilters.filter(async (category) => {
      return (await this.getText(category)).includes(categoryName);
    });
    await this.click(filteredCategory);
  }

  public async clearFilters() {
    await this.click(this.clearFiltersButton);
  }

  public async areAllListedProductsInStock() {
    const listedProducts = this.productCards;

    return listedProducts.every(async (product) => {
      return (
        (await new ProductCard(product).getProductAvailability()) === "In Stock"
      );
    });
  }
}

export default new ProductListingPage();
