import { logError, logInfo, logWarn } from "../helpers/common.ts";

describe("Demo suite", () => {
  it("should test something", async () => {
    logError("ERROR");
    logInfo("INFO");
    logWarn("WARN");
    await browser.pause(5000);
  });
});
