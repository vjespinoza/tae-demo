import BasePage from "./base/base.page.ts";

class HomePage extends BasePage {
  constructor() {
    super();
  }

  public get productSortSelector() {
    return $("#sort-select87");
  }

  public async isProductSortSelectorVisible() {
    return this.isVisible(this.productSortSelector, 10000);
  }
}

export default new HomePage();
