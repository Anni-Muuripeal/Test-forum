import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  fullyParallel: true,
  timeout: 30000,
   // Opt out of parallel tests on CI.
  workers: process.env.CI ? 1 : undefined,
  // Retry on CI only.
  retries: process.env.CI ? 2 : 0,

  reporter: [
    ['html', { open: 'always' }],
    ['dot'],
    //['list'],
      //['line'],
    ['json', { outputFile: 'test-results.json' }],
    //npm install -D allure-playwright
    //["allure-playwright"]
  ],

  expect: {
    timeout: 5000,
  },

  use: {
   // baseURL: process.env.BASE_URL || 'http://127.0.0.1:3000',
   baseURL: 'http://localhost:8080',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  webServer: {
    command: 'go run main.go',  // go specific
    url: 'http://localhost:8080',
    reuseExistingServer: !process.env.CI,
    timeout: 120000,
  },

  //projects can be scaled, currently only Chrome is used to test out tests
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});