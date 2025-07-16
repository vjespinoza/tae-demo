import { assertEquals } from "../utils/assertions/assertions.ts";

describe("Demo suite", () => {
  it("ID-456: has 3 errors", async () => {
    await assertEquals(1, 20);
    await assertEquals(1, 200);
    await assertEquals(1, 2000);
    await assertEquals(1, 1);
  });
  it("ID-789: has 2 errors", async () => {
    await assertEquals(1, 50);
    await assertEquals(1, 500);
    await assertEquals(1, 1);
  });
});
