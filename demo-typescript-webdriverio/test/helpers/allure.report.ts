import { spawn } from "child_process";
import { logError, logInfo, Path } from "./common.ts";
import * as fs from "node:fs";

export async function generateAllureReport(): Promise<void> {
  const reportError = new Error("Could not generate Allure report");
  const generation = spawn(
    "allure",
    [
      "generate",
      Path.ALLURE_RESULT,
      "-o",
      Path.ALLURE_REPORT,
      "--name",
      "allure-report",
      "--clean",
      "--single-file",
    ],
    {
      stdio: "inherit",
    },
  );

  return new Promise<void>((resolve, reject) => {
    const generationTimeout = setTimeout(() => {
      generation.kill();
      reject(reportError);
    }, 60000);

    generation.on("error", (err) => {
      clearTimeout(generationTimeout);
      logError(`Failed to start Allure report generation process: ${err}`);
      reject(reportError);
    });

    generation.on("exit", (exitCode: number) => {
      clearTimeout(generationTimeout);

      if (exitCode !== 0) {
        logError(`Allure report generation failed with exit code: ${exitCode}`);
        return reject(reportError);
      }
      logInfo("Allure report successfully generated");
      resolve();
    });
  });
}

export async function clearAllureResults(): Promise<void> {
  const dir = Path.ALLURE_RESULT;
  if (fs.existsSync(dir)) {
    logInfo(`Cleared Allure results: ${dir}`);
    fs.rmSync(dir, { recursive: true, force: true });
  }
}
