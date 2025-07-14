import {
  DEFAULT_BROWSER,
  getEnvVar,
  isTrue,
  logInfo,
  logWarn,
} from "./common.ts";
import { browser } from "@wdio/globals";

class Browser {
  private getChromeOptions() {
    return {
      browserName: "chrome",
      "goog:chromeOptions": {
        args: isTrue(getEnvVar("HEADLESS", "false"))
          ? ["--headless", "--disable-gpu", "--window-size=1920,1080"]
          : [],
      },
    };
  }

  private getFirefoxOptions() {
    return {
      browserName: "firefox",
      "moz:firefoxOptions": {
        args: isTrue(getEnvVar("HEADLESS", "false"))
          ? ["--headless", "--width=1920", "--height=1080"]
          : [],
      },
    };
  }

  private getSafariOptions() {
    return {
      browserName: "safari",
      "safari:options": {
        technologyPreview: true,
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
      case "safari":
        return this.getSafariOptions();
      default:
        throw new Error(`Browser "${browserName}" is not supported.`);
    }
  }

  public async setUp() {
    await this.handleHeadless();
    logInfo("Maximizing window...");
    await browser.maximizeWindow();
  }

  private async handleHeadless() {
    const isHeadless = isTrue(getEnvVar("HEADLESS", "false"));
    const windowSize = await browser.getWindowSize();
    const resolution = `${windowSize.width}x${windowSize.height}`;
    const browserName = this.get().browserName.toUpperCase();
    const baseMessage = `Starting new [${browserName}] session at [${resolution}] resolution`;

    if (getEnvVar("BROWSER") === "safari" && isHeadless) {
      logWarn("Safari does not support headless mode.");
      logInfo(`${baseMessage} and GUI mode...`);
    } else {
      logInfo(`${baseMessage} in [${isHeadless ? "HEADLESS" : "GUI"}] mode`);
    }
  }
}

export default new Browser();
