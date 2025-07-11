import {browser} from "@wdio/globals";
import DataModel from "../data/DataModel.ts";

export default class BasePage {
    public async open(url?: string): Promise<void> {
        await browser.url(url ?? DataModel.getBaseUrl());
    }
}
