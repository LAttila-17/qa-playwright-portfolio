# QA Playwright Portfolio

## 🔎 Live Test Execution Dashboard

👉 **Check the latest automated test run here:**

[![Playwright Test Report](https://img.shields.io/badge/Playwright%20Test%20Report-View%20Results-blue)](https://LAttila-17.github.io/qa-playwright-portfolio/)

*This report is automatically generated daily after each test run via GitHub Actions.*

---

## Overview

![Playwright Tests](https://github.com/LAttila-17/qa-playwright-portfolio/actions/workflows/playwright.yml/badge.svg)


This project is a QA Automation portfolio built with Playwright and TypeScript, showcasing end-to-end testing, scalable test architecture, and CI/CD integration.

It demonstrates real-world testing scenarios and modern QA automation best practices.

---

## Tech Stack

![Playwright](https://img.shields.io/badge/Tested%20with-Playwright-blue) ![Node.js](https://img.shields.io/badge/Node.js-24-green)


- Playwright
- TypeScript
- Node.js / npm
- GitHub Actions (CI/CD)
- HTML test reporting

---

## Test Coverage

This portfolio includes end-to-end scenarios for:

- Login functionality (valid / invalid cases)
- Product inventory validation
- Add to cart and cart state persistence
- Checkout process (form validation and completion)
- Error handling and validation messages

---

## Test Architecture

- Page Object Model (POM) design pattern
- Separation of test data, assertions, and page logic
- Reusable components (header, navigation)
- Scalable structure for adding new test scenarios

---

## CI/CD

This project uses GitHub Actions to automatically run Playwright tests on each push.

- Automated cross-browser test execution
- Continuous validation of test stability
- HTML report generation
- Test artifacts available after pipeline runs

---

## Test Results & Reporting

- Playwright HTML reports generated after each run
- Detailed test results including steps, errors, and traces
- Reports can be viewed locally or downloaded from CI

### View in CI (GitHub Actions)

- Go to the **Actions** tab in this repository
- Open the latest workflow run
- Download the **playwright-report** artifact

![Playwright Report](./docs/report.jpg)


---

## Run Locally (Optional)

```bash
npm install
npx playwright install
npx playwright test
```

To view the HTML report:

```bash
npx playwright show-report
```

---

## Future Improvements

- API mocking and network interception
- Advanced test scenarios
- Test data parameterization