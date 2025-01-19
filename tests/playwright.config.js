// playwright.config.js
// @ts-check

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  testDir: './tests',
  timeout: 30000,
  expect: {
    timeout: 5000
  },
  use: {
    baseURL: 'http://localhost:8080',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
  },
  projects: [
    {
      name: 'Chrome',
      use: {
        browserName: 'chromium',
      },
    },
    {
      name: 'Firefox',
      use: {
        browserName: 'firefox',
      },
    },
  ],
  reporter: [
    ['html'],
    ['list']
  ],
};

module.exports = config;