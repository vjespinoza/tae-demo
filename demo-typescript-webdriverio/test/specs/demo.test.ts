import { logAssert, logError, logInfo, logWarn } from "../utils/common.ts";

describe("Demo suite", () => {
  it("should test something", async () => {
    logError("ERROR");
    logInfo("INFO");
    logWarn("WARN");
    logAssert("qwerty", true);
    logAssert("asdfg", false);
  });
});
