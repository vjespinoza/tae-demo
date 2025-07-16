import { logAssert, logError, Path, removeAnsiCharacters } from "../common.ts";
import { getValue, setValue } from "@wdio/shared-store-service";

const assertionSummary = (errorList: string[]) => `
  \n\t############### ASSERTION ERROR SUMMARY ###############\n
  \tThis execution resulted in 1 or more assertion errors.
  \tPlease review the summary below or check the Allure report saved at
  \t${Path.ALLURE_REPORT}\n
  \t${errorList.join("\n\t")}
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
  const globalErrors: GlobalAssertionErrors = JSON.parse(
    <string>await getValue("globalAssertionErrors"),
  );
  globalErrors.assertionErrors.push(testErrors);
  await setValue("globalAssertionErrors", JSON.stringify(globalErrors));
  errorList = [];
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
  const errorList: string[] = errorSummary.assertionErrors.map(
    (assertionError) => {
      return `>>> Assertion Errors: [${assertionError.errorMessages.length}] | Test: [${assertionError.testPath}]`;
    },
  );

  logError(assertionSummary(errorList));
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
