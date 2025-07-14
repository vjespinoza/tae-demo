import BasePage from "./base/base.page.ts";

class HomePage extends BasePage {
  constructor() {
    super();
  }

  public get productSortSelector() {
    return $("#sort-select");
  }
}

export default new HomePage();
