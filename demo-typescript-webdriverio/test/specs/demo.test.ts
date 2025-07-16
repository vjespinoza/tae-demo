import { assertEquals } from "../utils/assertions/assertions.ts";

describe("Demo suite", () => {
  it("ID-123: has 1 error", async () => {
    await assertEquals(1, 2);
    await assertEquals(1, 1);
  });
});
