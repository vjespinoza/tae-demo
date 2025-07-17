import BasePage from "./base/base.page.ts";

class ProductListingPage extends BasePage {
  constructor() {
    super();
  }

  public get productSortSelector() {
    return $("#sort-select");
  }
}

export default new ProductListingPage();
