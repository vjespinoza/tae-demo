import { logAssert, logError, Path, removeAnsiCharacters } from "../common.ts";
import { getValue, setValue } from "@wdio/shared-store-service";
import { endStep } from "@wdio/allure-reporter";
import { Status } from "allure-js-commons";

const assertionSummary = (errorList: string[]) => `
  \n############### ASSERTION ERROR SUMMARY ###############\n
  This execution resulted in 1 or more assertion errors.
  Please review the summary below or check the Allure report saved at
  ${Path.ALLURE_REPORT}\n
  ${errorList.join("\n")}
  \n\t#######################################################
 `;

export interface TestAssertionErrors {
  testPath: string;
  errorMessages: string[];
}

export interface GlobalAssertionErrors {
  assertionErrors: TestAssertionErrors[];
}

let errorList: string[] = [];

function handleAssertion(condition: Function, message: string) {
  try {
    condition();
    logAssert(message, true);
  } catch (e) {
    logAssert(
      message ??
        `Assertion failed:\n ${removeAnsiCharacters((e as Error).message)}`,
      false,
    );
    errorList.push(removeAnsiCharacters((e as Error).message));
  }
}

async function setGlobalErrors(testPath: string) {
  const testErrors: TestAssertionErrors = {
    testPath: testPath,
    errorMessages: [],
  };
  errorList.forEach((error) => {
    testErrors.errorMessages.push(error);
  });

  if (errorList.length === 0) return;

  const globalErrors: GlobalAssertionErrors = JSON.parse(
    <string>await getValue("globalAssertionErrors"),
  );
  globalErrors.assertionErrors.push(testErrors);
  await setValue("globalAssertionErrors", JSON.stringify(globalErrors));
  errorList = [];
  endStep(Status.FAILED);
}

export async function assertAll(
  testName: string,
  testFile: string,
): Promise<void> {
  const testPath = `${testFile.split("/").reverse().shift()}::${testName}`;
  await setGlobalErrors(testPath);
}

export async function logAssertionSummary() {
  const errorSummary: GlobalAssertionErrors = JSON.parse(
    <string>await getValue("globalAssertionErrors"),
  );

  if (errorSummary.assertionErrors.length === 0) return;

  const errorList: string[] = errorSummary.assertionErrors.map(
    (assertionError) => {
      return `>>> Assertion Errors: [${assertionError.errorMessages.length}] | Test: [${assertionError.testPath}]`;
    },
  );

  logError(assertionSummary(errorList));
}

export function assertEquals(
  expected: string | number | boolean,
  actual: string | number | boolean,
  description?: string,
) {
  const message = description ?? `Expect ${expected} to equal to ${actual}`;
  handleAssertion(() => expect(actual).toEqual(expected), message);
}

export function assertNotEquals(
  expected: string | number | boolean,
  actual: string | number | boolean,
  description?: string,
) {
  const message =
    description ?? `Expect ${expected} to not be equal to ${actual}`;
  handleAssertion(() => expect(actual).not.toEqual(expected), message);
}

export function assertTruthy(condition: boolean, description?: string) {
  const message = description ?? `Expect ${condition} to equal to true`;
  handleAssertion(() => expect(condition).toBeTruthy(), message);
}

export function assertFalsy(condition: boolean, description?: string) {
  const message = description ?? `Expect ${condition} to equal to false`;
  handleAssertion(() => expect(condition).toBeFalsy(), message);
}

export function assertHasText(
  element: ChainablePromiseElement,
  text: string,
  description?: string,
) {
  const message =
    description ?? `Expect ${element.selector} to have text: ${text}`;
  handleAssertion(() => expect(element).toHaveText(text), message);
}

export function assertIsVisible(
  element: ChainablePromiseElement,
  description?: string,
) {
  const message = description ?? `Expect ${element.selector} to be visible`;
  handleAssertion(() => expect(element).toBeDisplayedInViewport(), message);
}

export function assertIsNotVisible(
  element: ChainablePromiseElement,
  description?: string,
) {
  const message = description ?? `Expect ${element.selector} to not be visible`;
  handleAssertion(() => expect(element).not.toBeDisplayedInViewport(), message);
}

export function assertIsEnabled(
  element: ChainablePromiseElement,
  description?: string,
) {
  const message = description ?? `Expect ${element.selector} to be enabled`;
  handleAssertion(() => expect(element).toBeEnabled(), message);
}

export function assertIsDisabled(
  element: ChainablePromiseElement,
  description?: string,
) {
  const message = description ?? `Expect ${element.selector} to be disabled`;
  handleAssertion(() => expect(element).toBeDisabled(), message);
}

export function assertIsSelected(
  element: ChainablePromiseElement,
  description?: string,
) {
  const message = description ?? `Expect ${element.selector} to be selected`;
  handleAssertion(() => expect(element).toBeSelected(), message);
}

export function assertIsNotSelected(
  element: ChainablePromiseElement,
  description?: string,
) {
  const message =
    description ?? `Expect ${element.selector} to not be selected`;
  handleAssertion(() => expect(element).not.toBeSelected(), message);
}

export function assertIsClickable(
  element: ChainablePromiseElement,
  description?: string,
) {
  const message = description ?? `Expect ${element.selector} to be clickable`;
  handleAssertion(() => expect(element).toBeClickable(), message);
}
