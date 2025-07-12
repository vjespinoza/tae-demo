import { browser } from "@wdio/globals";
import DataModel from "../../data/DataModel.ts";
import WebOperations from "./web.operations.ts";

export default class BasePage extends WebOperations {
  public async open(url?: string): Promise<void> {
    await browser.url(url ?? DataModel.getBaseUrl());
  }
}
