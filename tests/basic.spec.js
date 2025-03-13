const { test, expect } = require('@playwright/test');

test.describe('Basic Authentication Tests', () => {
  test('should show registration form', async ({ page }) => {
    // Go to homepage
    await page.goto('http://localhost:8080');
    
    // Click register button
    await page.click('#register-button');
    
    // Verify registration form is shown
    await expect(page.locator('#registration-form')).toBeVisible();
  });
});