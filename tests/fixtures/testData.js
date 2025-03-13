// tests/pages/loginPage.js
exports.LoginPage = class LoginPage {
  constructor(page) {
    this.page = page;
    this.loginButton = page.locator('#login-button');
    this.nicknameInput = page.locator('#nickname');
    this.passwordInput = page.locator('#password');
    this.submitButton = page.locator('input[type="submit"]');
    this.errorMessage = page.locator('.message');
  }

  async navigateToLogin() {
    await this.page.goto('/');
    await this.loginButton.click();
  }

  async login(nickname, password) {
    await this.nicknameInput.fill(nickname);
    await this.passwordInput.fill(password);
    await this.submitButton.click();
  }

  async getErrorMessage() {
    return await this.errorMessage.textContent();
  }
}