import { spawn } from "child_process";
import { Path } from "./common.ts";

export async function generateAllureReport(): Promise<void> {
  const reportError = new Error("Could not generate Allure report");
  const generation = spawn(
    "allure",
    [
      "generate",
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
      //TODO: Optimize logging
      console.error("Failed to start Allure report generation process:", err);
      reject(reportError);
    });

    generation.on("exit", (exitCode: number) => {
      clearTimeout(generationTimeout);

      if (exitCode !== 0) {
        //TODO: Optimize logging
        console.error(
          `Allure report generation failed with exit code: ${exitCode}`,
        );
        return reject(reportError);
      }
      //TODO: Optimize logging
      console.log("Allure report successfully generated");
      resolve();
    });
  });
}
