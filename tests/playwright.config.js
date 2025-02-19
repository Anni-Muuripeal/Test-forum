const { defineConfig, devices } = require('@playwright/test');
const dotenv = require('dotenv');
const path = require('path');

// Read environment variables from file.
// See https://github.com/motdotla/dotenv
try {
  dotenv.config({ path: path.resolve(__dirname, '.env') });
} catch (error) {
  console.warn('Error loading .env file:', error);
}

// See https://playwright.dev/docs/test-configuration
module.exports = defineConfig({
  // Run tests in files in parallel
  fullyParallel: true,
  timeout: 30000,
  workers: process.env.CI ? 1 : undefined,
  retries: process.env.CI ? 2 : 0,

  // Configure reporters. See https://playwright.dev/docs/test-reporters
  reporter: [
    [['html', { open: 'always' }]],
    //['line'],
    //['dot'],
    ['list'],
    ['json', { outputFile: 'test-results.json' }],
    //[['junit', { outputFile: 'results.xml' }]]
    //npm install -D allure-playwright
    ["allure-playwright"]
  ],

  // Configure timeouts. See https://playwright.dev/docs/test-timeouts
  expect: {
    timeout: 5000,
  },

  // Configure browser context. See https://playwright.dev/docs/api/class-browser
  use: {
    baseURL: process.env.BASE_URL || 'http://127.0.0.1:3000',
    
    // Collect trace, screenshots and video when tests fail
    // See https://playwright.dev/docs/trace-viewer
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  // Configure development server. See https://playwright.dev/docs/test-webserver
  webServer: {
    command: 'npm run start',
    url: 'http://127.0.0.1:3000',
    reuseExistingServer: !process.env.CI,
    timeout: 120000,
  },

  // Configure projects for multiple browsers. See https://playwright.dev/docs/test-projects
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: 'mobile-chrome',
      use: { ...devices['Pixel 5'] },
    },
    {
      name: 'mobile-safari',
      use: { ...devices['iPhone 12'] },
    },
  ],
});