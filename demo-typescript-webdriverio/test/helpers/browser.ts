import {
  DEFAULT_BROWSER,
  getEnvVar,
  isHeadless,
  isSafari,
  logInfo,
  logWarn,
} from "./common.ts";
import { browser } from "@wdio/globals";

class Browser {
  private getChromeOptions() {
    return {
      browserName: "chrome",
      "goog:chromeOptions": {
        args: isHeadless()
          ? ["--headless", "--disable-gpu", "--window-size=1920,1080"]
          : [],
      },
    };
  }

  private getFirefoxOptions() {
    return {
      browserName: "firefox",
      "moz:firefoxOptions": {
        args: isHeadless()
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
    await this.handleBrowserSetUpMessage();
    await browser.maximizeWindow();
  }

  private async handleBrowserSetUpMessage() {
    const windowSize = await browser.getWindowSize();
    const resolution = `${windowSize.width}x${windowSize.height}`;
    const browserName = this.get().browserName.toUpperCase();
    const baseMessage = `Starting new [${browserName}] session at [${resolution}] resolution`;

    if (isSafari() && isHeadless()) {
      logWarn("Safari does not support headless mode!!!");
      logInfo(`${baseMessage} in GUI mode.`);
    } else {
      logInfo(`${baseMessage} in [${isHeadless() ? "HEADLESS" : "GUI"}] mode.`);
    }
  }
}

export default new Browser();
