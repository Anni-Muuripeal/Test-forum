import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/loginPage';
import { RegisterPage } from './pages/registerPage';
import { testUsers } from './fixtures/testData';

test.describe('Authentication', () => {
  let loginPage;
  let registerPage;
  let registeredUser;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    registerPage = new RegisterPage(page);
  });

  test('should successfully register a new user', async ({ page }) => {
    await registerPage.navigateToRegister();
    registeredUser = await registerPage.registerWithUniqueUsername(testUsers.validUser);
    await expect(page.locator('#login-form')).toBeVisible();
  });

  test('should successfully login with valid credentials', async ({ page }) => {
    await loginPage.navigateToLogin();
    await loginPage.login(testUsers.validUser.nickname, testUsers.validUser.password);
    await expect(page.locator('.name')).toContainText('Welcome');
  });

  test('should show error with invalid credentials', async ({ page }) => {
    await loginPage.navigateToLogin();
    await loginPage.login(testUsers.invalidUser.nickname, testUsers.invalidUser.password);
    const errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage).toContain('Nickname or password is not correct');
  });
});