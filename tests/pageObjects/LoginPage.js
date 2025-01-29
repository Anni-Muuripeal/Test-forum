import { BasePage } from "./BasePage";

/**
 * Constants for selector management
 */
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
    /**
     * @param {object} page - Playwright page object
     */
    constructor(page) {
        super(page);
        this.page = page;
    }

    /**
     * Navigates to login page and waits for critical element
     */
    async goto() {
        await this.page.goto(URL.BASE);
        await this.page.waitForSelector(SELECTORS.LOGIN_BUTTON, {
            state: 'visible',
            timeout: 15000
        });
    }

    /**
     * Clicks login button
     */
    async initiateLogin() {
        await this.clickElement(SELECTORS.LOGIN_BUTTON);
    }

    /**
     * Submits login form
     * @param {string} username
     * @param {string} password
     */
    async submitLoginForm(username, password) {
        await this.enterCredentials(username, password);
        await this.submitForm();
    }

    /**
     * Enters credentials
     * @param {string} username
     * @param {string} password
     */
    async enterCredentials(username, password) {
        await this.fillField(SELECTORS.NICKNAME_INPUT, username);
        await this.fillField(SELECTORS.PASSWORD_INPUT, password);
    }

    /**
     * Submits the form
     */
    async submitForm() {
        await this.clickElement(SELECTORS.SUBMIT_BUTTON);
    }

    /**
     * Gets error message
     * @returns {Promise<string|null>}
     */
    async getErrorMessage() {
        return this.page.textContent(SELECTORS.ERROR_MESSAGE)
            .catch(() => null);
    }
}