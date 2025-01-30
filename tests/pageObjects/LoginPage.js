import { BasePage } from "./BasePage";

const SELECTORS = {
    LOGIN_BUTTON: '[data-testid="login-button"]',
    NICKNAME_INPUT: '#nickname',
    PASSWORD_INPUT: '[data-testid="password-input"]',
    SUBMIT_BUTTON: '[data-testid="submit-button"]',
    ERROR_MESSAGE: '[data-testid="error-message"]'
};

const URL = {
    BASE: process.env.BASE_URL || 'http://localhost:8080'
};

export class LoginPage extends BasePage {

    constructor(page) {
        super(page);
        this.page = page;
    }

    async goto() {
        await this.page.goto(URL.BASE);
        await this.page.waitForSelector(SELECTORS.LOGIN_BUTTON, {
            state: 'visible',
            timeout: 15000
        });
    }

    async initiateLogin() {
        await this.clickElement(SELECTORS.LOGIN_BUTTON);
    }

    async submitLoginForm(username, password) {
        await this.enterCredentials(username, password);
        await this.submitForm();
    }

    async enterCredentials(username, password) {
        await this.fillField(SELECTORS.NICKNAME_INPUT, username);
        await this.fillField(SELECTORS.PASSWORD_INPUT, password);
    }

    async submitForm() {
        await this.clickElement(SELECTORS.SUBMIT_BUTTON);
    }

    async getErrorMessage() {
        return this.page.textContent(SELECTORS.ERROR_MESSAGE)
            .catch(() => null);
    }
}