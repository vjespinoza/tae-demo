import Browser from "./test/utils/browser.ts";
import {
  clearAllureResults,
  generateAllureReport,
} from "./test/utils/allure.report.ts";
import ProductListingPage from "./test/pages/product-listing.page.ts";
import { getEnvGrep, getEnvVar, Path } from "./test/utils/common.ts";
import {
  assertAll,
  logAssertionSummary,
} from "./test/utils/assertions/assertions.ts";
import { setValue } from "@wdio/shared-store-service";

export const config: WebdriverIO.Config = {
  runner: "local",
  tsConfigPath: "./tsconfig.json",
  specs: ["./test/specs/**/*.ts"],
  exclude: [],
  maxInstances: parseInt(getEnvVar("MAX_INSTANCES", "1")),
  capabilities: [Browser.get()],
  logLevel: "error",
  bail: 0,
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  framework: "mocha",
  reporters: [
    "spec",
    [
      "allure",
      {
        outputDir: Path.ALLURE_RESULT,
        disableWebdriverStepsReporting: true,
      },
    ],
  ],
  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
    grep: getEnvGrep(),
  },
  services: ["shared-store"],
  async onPrepare() {
    await clearAllureResults();
    await setValue(
      "globalAssertionErrors",
      JSON.stringify({
        assertionErrors: [],
      }),
    );
  },
  async beforeTest() {
    await Browser.setUp();
    await ProductListingPage.open();
  },
  async afterTest(test: Test) {
    await assertAll(test.title, test.file);
  },
  async onComplete() {
    await generateAllureReport();
    await logAssertionSummary();
  },
};
