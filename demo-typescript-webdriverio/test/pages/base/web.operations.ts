import { waitForClickable, waitForVisibility } from "../../helpers/waits.ts";
import { DEFAULT_TIMEOUT, logInfo } from "../../helpers/common.ts";

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
  }

  public async type(
    input: ChainablePromiseElement,
    text: string,
    timeout: number = DEFAULT_TIMEOUT,
  ): Promise<void> {
    await waitForVisibility(input, timeout, false);
    logInfo(`Typing [${text}] into input: ${await input.selector}`);
    await input.setValue(text);
  }
}

export default WebOperations;
