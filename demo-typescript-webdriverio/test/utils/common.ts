import { Logger } from "tslog";
import { addStep } from "@wdio/allure-reporter";
import { Status } from "allure-js-commons";
import { color } from "console-log-colors";

export enum Wait {
  XS = 2000,
  S = 5000,
  M = 10000,
  L = 15000,
  XL = 30000,
}

const logger = new Logger({
  prettyLogTemplate:
    "{{yyyy}}.{{mm}}.{{dd}} {{hh}}:{{MM}}:{{ss}}:{{ms}}\t{{logLevelName}}\t",
  prettyErrorTemplate:
    "\n{{errorName}} {{errorMessage}}\nerror stack:\n{{errorStack}}",
  prettyErrorStackTemplate:
    "  • {{fileName}}\t{{method}}\n\t{{filePathWithLine}}",
  prettyLogStyles: {
    fileName: "white",
    logLevelName: {
      INFO: ["bold", "whiteBright"],
      WARN: ["bold", "yellowBright"],
      ERROR: ["bold", "redBright"],
      FAILED: ["bold", "redBright"],
      PASSED: ["bold", "greenBright"],
    },
  },
});

export const Path = {
  ALLURE_REPORT: `${process.cwd()}/reports/allure-report/`,
  ALLURE_RESULT: `${process.cwd()}/reports/allure-result/`,
};

export const DEFAULT_BROWSER = "chrome";
export const DEFAULT_TIMEOUT = Wait.M;

export function getEnvVar(varName: string, defaultValue?: string): string {
  return process.env[varName] ?? defaultValue ?? "";
}

export function isTrue(value: string): boolean {
  const trueValues = ["true", "yes", "1"];
  return trueValues.includes(value.toLowerCase());
}

export function isSafari(): boolean {
  return getEnvVar("BROWSER") === "safari";
}

export function isHeadless(): boolean {
  return isTrue(getEnvVar("HEADLESS", "false"));
}

export function getEnvGrep() {
  return getEnvVar("MOCHA_GREP");
}

export function logInfo(message: string) {
  logger.info(message);
  addStep(message);
}

export function logError(message: string) {
  logger.error(color.red(message));
  addStep(message, {}, Status.FAILED);
}

export function logWarn(message: string) {
  logger.warn(color.yellow(message));
  addStep(message, {}, Status.BROKEN);
}

export function logAssert(message: string, pass: boolean) {
  const concatMsg = `[CHECK] ${message}`;
  pass
    ? logger.log(0, "PASSED", color.greenBright(concatMsg))
    : logger.log(0, "FAILED", color.redBright(concatMsg));

  addStep(concatMsg, {}, pass ? Status.PASSED : Status.FAILED);
}

/**
 * Removes ANSI escape codes from a string.
 * These codes are often used for terminal text formatting (colors, bold, etc.).
 *
 * @param {string} text The input string potentially containing ANSI escape codes.
 * @returns {string} The string with all ANSI escape codes removed.
 */
export function removeAnsiCharacters(text: string): string {
  const ansiRegex =
    /\x1b\[[0-9;]*[ABCDHJKLMSTfmsu]|\x1b\[[0-9;]*K|\x1b\[\?25[lh]/g;

  return text.replace(ansiRegex, "");
}

export function getCurrencyAsNumber(currencyString: string): number {
  const cleanedString = currencyString.replace(/[^0-9.]/g, "");
  return parseFloat(cleanedString);
}
