import { waitForClickable, waitForVisibility } from "../../utils/waits.ts";
import { DEFAULT_TIMEOUT, logInfo } from "../../utils/common.ts";

class WebOperations {
  public async isVisible(
    element: ChainablePromiseElement,
    timeout: number = DEFAULT_TIMEOUT,
  ): Promise<boolean> {
    return waitForVisibility(element, timeout, false);
  }

  public async click(
    element: ChainablePromiseElement,
    timeout: number = DEFAULT_TIMEOUT,
  ): Promise<void> {
    logInfo(`Clicking on element: ${await element.selector}`);
    await waitForClickable(element, timeout, false);
    await element.click();
  }

  public async type(
    input: ChainablePromiseElement,
    text: string,
    timeout: number = DEFAULT_TIMEOUT,
  ): Promise<void> {
    logInfo(`Typing [${text}] into input: ${await input.selector}`);
    await waitForVisibility(input, timeout, false);
    await input.setValue(text);
  }

  public async getText(
    element: ChainablePromiseElement,
    timeout: number = DEFAULT_TIMEOUT,
  ): Promise<string> {
    logInfo(`Getting text content from: ${await element.selector}`);
    await waitForVisibility(element, timeout, false);
    return (await element.getText()).trim();
  }

  public async getValue(
    element: ChainablePromiseElement,
    timeout: number = DEFAULT_TIMEOUT,
  ): Promise<string> {
    logInfo(`Getting value from: ${await element.selector}`);
    await waitForVisibility(element, timeout, false);
    return (await element.getValue()).trim();
  }

  public async selectOptionByAttribute(
    element: ChainablePromiseElement,
    attribute: string,
    value: string | number,
    timeout: number = DEFAULT_TIMEOUT,
  ) {
    logInfo(`Selecting option by value from: ${await element.selector}`);
    await waitForVisibility(element, timeout, false);
    return await element.selectByAttribute(attribute, value);
  }
}

export default WebOperations;
