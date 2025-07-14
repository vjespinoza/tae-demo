import { Logger } from "tslog";
import { addStep } from "@wdio/allure-reporter";
import { Status } from "allure-js-commons";

const logger = new Logger({ name: "myLogger" });

export enum Wait {
  XS = 2000,
  S = 5000,
  M = 10000,
  L = 15000,
  XL = 30000,
}

export const Path = {
  ALLURE_REPORT: `${process.cwd()}/reports/allure-report/`,
  ALLURE_RESULT: `${process.cwd()}/reports/allure-result/`,
};

export const DEFAULT_BROWSER = "chrome";
export const DEFAULT_TIMEOUT = Wait.M;

export function getEnvVar(varName: string, defaultValue?: string): string {
  const val = process.env[varName] ?? defaultValue;
  if (!val || val === "") {
    throw new Error(`Environment variable ${varName} is not set.`);
  }
  return val;
}

export function isTrue(value: string): boolean {
  const trueValues = ["true", "yes", "1"];
  return trueValues.includes(value.toLowerCase());
}

export function logInfo(message: string) {
  logger.info(message);
  addStep(message);
}

export function logError(message: string) {
  logger.error(message);
  addStep(message, {}, Status.FAILED);
}

export function logWarn(message: string) {
  logger.warn(message);
  addStep(message, {}, Status.BROKEN);
}
