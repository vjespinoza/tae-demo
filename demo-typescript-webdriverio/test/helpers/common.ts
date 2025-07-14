export enum Wait {
  XS = 2000,
  S = 5000,
  M = 10000,
  L = 15000,
  XL = 30000,
}

export const DEFAULT_BROWSER = "chrome";
export const DEFAULT_TIMEOUT = Wait.M;

export function getEnvVar(
  varName: string,
  defaultValue: string | number | boolean,
): string | number | boolean {
  return process.env[varName] ?? defaultValue;
}
