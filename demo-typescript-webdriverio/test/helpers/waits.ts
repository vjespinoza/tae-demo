async function waitFor(
  condition: Promise<boolean>,
  errorMessage: string,
  timeout: number = 10000,
  shouldFail: boolean,
): Promise<boolean> {
  try {
    return await browser.waitUntil(async () => await condition, {
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
  timeout: number = 10000,
  shouldFail: boolean = true,
): Promise<boolean> {
  const msg = `Element ${await element.selector} is not visible within ${timeout}ms`;
  return await waitFor(element.isDisplayed(), msg, timeout, shouldFail);
}

export async function waitForClickable(
  element: ChainablePromiseElement,
  timeout: number = 10000,
  shouldFail: boolean = true,
): Promise<boolean> {
  const msg = `Element ${await element.selector} is not clickable within ${timeout}ms`;
  return await waitFor(element.isClickable(), msg, timeout, shouldFail);
}
