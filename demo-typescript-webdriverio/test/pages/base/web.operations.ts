import { waitForClickable, waitForVisibility } from "../../helpers/waits.ts";
import { DEFAULT_TIMEOUT } from "../../helpers/common.ts";

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
    await waitForClickable(element, timeout, false);
  }

  public async type(
    input: ChainablePromiseElement,
    text: string,
    timeout: number = DEFAULT_TIMEOUT,
  ): Promise<void> {
    await waitForVisibility(input, timeout, false);
    await input.setValue(text);
  }
}

export default WebOperations;
