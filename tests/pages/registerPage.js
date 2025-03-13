export class RegisterPage {
  constructor(page) {
    this.page = page;
    this.registerButton = page.locator('#register-button');
    this.nicknameInput = page.locator('#nickname');
    this.ageInput = page.locator('#age');
    this.genderSelect = page.locator('#gender');
    this.firstNameInput = page.locator('#firstName');
    this.lastNameInput = page.locator('#lastName');
    this.emailInput = page.locator('#email');
    this.passwordInput = page.locator('#password');
    this.passwordRepeatInput = page.locator('#password-repeat');
    this.submitButton = page.locator('input[type="submit"]');
  }

  async navigateToRegister() {
    await this.page.goto('/');
    await this.registerButton.click();
  }

  async register(userData) {
    await this.nicknameInput.fill(userData.nickname);
    await this.ageInput.fill(userData.age.toString());
    await this.genderSelect.selectOption(userData.gender);
    await this.firstNameInput.fill(userData.firstName);
    await this.lastNameInput.fill(userData.lastName);
    await this.emailInput.fill(userData.email);
    await this.passwordInput.fill(userData.password);
    await this.passwordRepeatInput.fill(userData.password);
    await this.submitButton.click();
  }

  async registerWithUniqueUsername(baseUserData) {
    const timestamp = Date.now();
    const uniqueUser = {
      ...baseUserData,
      nickname: `${baseUserData.nickname}_${timestamp}`,
      email: `${baseUserData.nickname}_${timestamp}@example.com`
    };
    
    await this.register(uniqueUser);
    
    return uniqueUser;
  }
}