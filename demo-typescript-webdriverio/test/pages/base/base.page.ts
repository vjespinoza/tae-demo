import { browser } from "@wdio/globals";
import DataModel from "../../data/DataModel.ts";
import WebOperations from "./web.operations.ts";
import { logInfo } from "../../utils/common.ts";

export default class BasePage extends WebOperations {
  public async open(url?: string): Promise<void> {
    const baseUrl = url ?? DataModel.getBaseUrl();
    logInfo(`Navigating to: ${baseUrl}`);
    await browser.url(baseUrl);
  }
}
