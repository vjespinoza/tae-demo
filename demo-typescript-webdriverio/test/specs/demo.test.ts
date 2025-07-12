import HomePage from "../pages/home.page.ts";

describe("Demo", () => {
  it("should ", async () => {
    await HomePage.open();
    console.log("###", await HomePage.isProductSortSelectorVisible());
  });
});
