import { DEFAULT_BROWSER, getEnvVar } from "./common.ts";
import { browser } from "@wdio/globals";

class Browser {
  private getChromeOptions() {
    return {
      browserName: "chrome",
      "goog:chromeOptions": {
        args: getEnvVar("HEADLESS", false)
          ? ["--headless", "--disable-gpu"]
          : [],
      },
    };
  }

  private getFirefoxOptions() {
    return {
      browserName: "firefox",
      "moz:firefoxOptions": {
        args: getEnvVar("HEADLESS", false) ? ["--headless"] : [],
      },
    };
  }

  public get() {
    const browserName = getEnvVar("BROWSER", DEFAULT_BROWSER);
    switch (browserName) {
      case "chrome":
        return this.getChromeOptions();
      case "firefox":
        return this.getFirefoxOptions();
      default:
        throw new Error(
          `Browser "${browserName}" is not supported. Please choose 'chrome' or 'firefox'.`,
        );
    }
  }

  public setUp() {
    browser.deleteAllCookies();
    browser.maximizeWindow();
  }
}

export default new Browser();
