export class BasePage {
    constructor(page) {
    this.page = page;
    }

    async clickElement(selector, options = {}){
        await this.page.click (selector, {
            timeout: 10000,
            ...options
        });
    }

    async fillField(selector, value) {
        await this.page.fill(selector, value);
    }
}