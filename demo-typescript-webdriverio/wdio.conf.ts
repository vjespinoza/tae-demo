import Browser from "./test/utils/browser.ts";
import {
  clearAllureResults,
  generateAllureReport,
} from "./test/utils/allure.report.ts";
import HomePage from "./test/pages/home.page.ts";
import { getEnvVar, Path } from "./test/utils/common.ts";

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
  },
  async onPrepare() {
    await clearAllureResults();
  },
  async beforeTest() {
    await Browser.setUp();
    await HomePage.open();
  },
  async onComplete() {
    await generateAllureReport();
  },
};
