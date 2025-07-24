import { DEFAULT_TIMEOUT } from "./common.ts";

async function waitFor(
  condition: () => Promise<boolean>,
  errorMessage: string,
  timeout: number = DEFAULT_TIMEOUT,
  shouldFail: boolean,
): Promise<boolean> {
  try {
    return await browser.waitUntil(async () => await condition(), {
      timeout: timeout,
      timeoutMsg: errorMessage,
    });
  } catch (e) {
    if (shouldFail) throw e;
    return false;
  }
}

export async function waitForVisibility(
  element: ChainablePromiseElement,
  timeout: number = DEFAULT_TIMEOUT,
  shouldFail: boolean = true,
): Promise<boolean> {
  const msg = `Element ${await element.selector} is not visible within ${timeout}ms`;
  return await waitFor(() => element.isDisplayed(), msg, timeout, shouldFail);
}

export async function waitForClickable(
  element: ChainablePromiseElement,
  timeout: number = DEFAULT_TIMEOUT,
  shouldFail: boolean = true,
): Promise<boolean> {
  const msg = `Element ${await element.selector} is not clickable within ${timeout}ms`;
  return await waitFor(() => element.isClickable(), msg, timeout, shouldFail);
}

export async function waitForText(
  element: ChainablePromiseElement,
  text: string,
  timeout: number = DEFAULT_TIMEOUT,
  shouldFail: boolean = true,
) {
  const msg = `Text ${text} is not present in element ${element.selector} within ${timeout}ms`;
  return await waitFor(
    async () => (await element.getText()) === text,
    msg,
    timeout,
    shouldFail,
  );
}
