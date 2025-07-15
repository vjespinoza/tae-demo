import { assertEquals } from "../utils/assertions.ts";

describe("Demo suite", () => {
  it("should test something", async () => {
    await assertEquals(1, 2);
    await assertEquals(1, 1);
  });
});
