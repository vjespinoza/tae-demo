export const config: WebdriverIO.Config = {
    baseUrl: "https://tech-store-vjespinoza.netlify.app/",
    runner: "local",
    tsConfigPath: "./tsconfig.json",
    specs: ["./test/specs/**/*.ts"],
    exclude: [],
    maxInstances: 10,
    capabilities: [
        {
            browserName: "chrome",
        },
    ],
    logLevel: "info",
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: "mocha",
    reporters: ["spec"],
    mochaOpts: {
        ui: "bdd",
        timeout: 60000,
    },
};
