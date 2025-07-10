import { browser } from "@wdio/globals";

export default class BasePage {
  public open() {
    return browser.url(`https://teach-store.netlify.app`);
  }
}
