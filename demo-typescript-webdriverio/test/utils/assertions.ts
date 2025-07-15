import { logAssert, removeAnsiCharacters } from "./common.ts";

const errors: Error[] = [];

function handleAssertion(condition: Function, message: string) {
  try {
    condition();
    logAssert(message, true);
  } catch (e) {
    logAssert(
      `Assertion failed:\n ${removeAnsiCharacters((e as Error).message)}`,
      false,
    );
    errors.push(e as Error);
  }
}

export function assertAll(): Error[] {
  return errors;
}

export async function assertEquals(
  expected: string | number | boolean,
  actual: string | number | boolean,
) {
  const message = `Expect ${expected} to equal to ${actual}`;
  handleAssertion(() => expect(actual).toEqual(expected), message);
}

export async function assertNotEquals(
  expected: string | number | boolean,
  actual: string | number | boolean,
) {
  const message = `Expect ${expected} to not be equal to ${actual}`;
  handleAssertion(() => expect(actual).not.toEqual(expected), message);
}

export async function assertTruthy(condition: boolean) {
  const message = `Expect ${condition} to equal to true`;
  handleAssertion(() => expect(condition).toBeTruthy(), message);
}

export async function assertFalsy(condition: boolean) {
  const message = `Expect ${condition} to equal to false`;
  handleAssertion(() => expect(condition).toBeFalsy(), message);
}

export async function assertHasText(
  element: ChainablePromiseElement,
  text: string,
) {
  const message = `Expect ${element.selector} to have text: ${text}`;
  handleAssertion(() => expect(element).toHaveText(text), message);
}

export async function assertIsVisible(element: ChainablePromiseElement) {
  const message = `Expect ${element.selector} to be visible`;
  handleAssertion(() => expect(element).toBeDisplayedInViewport(), message);
}

export async function assertIsNotVisible(element: ChainablePromiseElement) {
  const message = `Expect ${element.selector} to not be visible`;
  handleAssertion(() => expect(element).not.toBeDisplayedInViewport(), message);
}

export async function assertIsEnabled(element: ChainablePromiseElement) {
  const message = `Expect ${element.selector} to be enabled`;
  handleAssertion(() => expect(element).toBeEnabled(), message);
}

export async function assertIsDisabled(element: ChainablePromiseElement) {
  const message = `Expect ${element.selector} to be disabled`;
  handleAssertion(() => expect(element).toBeDisabled(), message);
}

export async function assertIsSelected(element: ChainablePromiseElement) {
  const message = `Expect ${element.selector} to be selected`;
  handleAssertion(() => expect(element).toBeSelected(), message);
}

export async function assertIsNotSelected(element: ChainablePromiseElement) {
  const message = `Expect ${element.selector} to not be selected`;
  handleAssertion(() => expect(element).not.toBeSelected(), message);
}

export async function assertIsClickable(element: ChainablePromiseElement) {
  const message = `Expect ${element.selector} to be clickable`;
  handleAssertion(() => expect(element).toBeClickable(), message);
}
