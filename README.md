# Multi-Language, Multi-Framework Demo Repository

This repository showcases a collection of demos integrating various programming languages and frameworks, including Java (with Maven), JavaScript, and TypeScript (with npm). Each demo is designed to illustrate best practices in application structure, testing, and automation for its respective technology stack.

---

## Project Structure

- Each demo is organized in its own directory under the project root.
- Demos are self-contained, with their own source code, tests, and configuration files.
- The repository is intended as a reference for developers looking to understand or compare different technology stacks and their typical project setups.

---

## Demos Overview

### 1. Java Maven Demo

**Tech Stack:**
- Java
- Maven
- JUnit (for testing)
- Selenium (for browser automation)

**Content & Structure:**
- Source code: `src/main/java`
- Tests: `src/test/java`
- Maven for dependency management and build automation

**Purpose:**
Demonstrates a typical Java application setup with Maven, including unit testing and browser automation.

**How to Run Automated Tests:**
1. Install Maven dependencies:
```bash
  mvn clean install
```
2. Run tests
```bash
  mvn test
```

---

### 2. JavaScript Cypress Demo

**Tech Stack:**
- JavaScript
- Cypress (for end-to-end testing)
- npm (for dependency management)

**Content & Structure:**
- Source code: `demo-javascript-cypress/src`
- Tests: `demo-javascript-cypress/cypress/e2e`
- Configuration: `demo-javascript-cypress/cypress.config.js`

**Purpose:**
Demonstrates a JavaScript project setup with Cypress for end-to-end testing, showcasing modern testing practices for web applications.

**How to Run Automated Tests:**
1. Install dependencies:
```bash
  npm install
```
2. Run Cypress tests:
```bash
  npx cypress open
```
---

### 3. TypeScript Playwright Demo

**Tech Stack:**
- TypeScript
- Playwright (for end-to-end testing)
- npm (for dependency management)

**Content & Structure:**
- Source code: `demo-typescript-playwright/src`
- Tests: `demo-typescript-playwright/tests`
- Configuration: `demo-typescript-playwright/playwright.config.ts`

**Purpose:**
Demonstrates a TypeScript project setup with Playwright for end-to-end testing, showcasing modern testing practices for web applications with strong typing.

**How to Run Automated Tests:**
1. Install dependencies:
```bash
  npm install
```

2. Run Playwright tests:
```bash
  npx playwright test
```

---

### 4. TypeScript WebdriverIO Demo

**Tech Stack:**
- TypeScript
- WebdriverIO (for end-to-end testing)
- npm (for dependency management)

**Content & Structure:**
- Source code: `demo-typescript-webdriverio/src`
- Tests: `demo-typescript-webdriverio/tests`
- Configuration: `demo-typescript-webdriverio/wdio.conf.ts`

**Purpose:**
Demonstrates a TypeScript project setup with WebdriverIO for end-to-end testing, showcasing modern testing practices for web applications with strong typing and WebDriver protocol support.

**How to Run Automated Tests:**
1. Install dependencies:
```bash
  npm install
```
2. Run WebdriverIO tests:
```bash
   npm wdio
```