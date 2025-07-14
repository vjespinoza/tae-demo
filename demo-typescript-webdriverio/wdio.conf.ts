import Browser from "./test/helpers/browser.ts";
import { generateAllureReport } from "./test/helpers/allure.report.ts";
import HomePage from "./test/pages/home.page.ts";
import { getEnvVar, Path } from "./test/helpers/common.ts";

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
  beforeTest() {
    Browser.setUp();
    HomePage.open();
  },
  async onComplete() {
    await generateAllureReport();
  },
};
