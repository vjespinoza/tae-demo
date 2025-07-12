import { waitForClickable, waitForVisibility } from "../../helpers/waits.ts";

class WebOperations {
  public async isVisible(
    element: ChainablePromiseElement,
    timeout: number,
  ): Promise<boolean> {
    return waitForVisibility(element, timeout, false);
  }

  public async click(
    element: ChainablePromiseElement,
    timeout: number,
  ): Promise<boolean> {
    return waitForClickable(element, timeout, false);
  }
}

export default WebOperations;
