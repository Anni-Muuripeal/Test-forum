class UserPage {
    constructor(page) {
      this.page = page;
      this.newPostButton = page.locator('#newpost');
      this.logoutButton = page.locator('#logout-button');
      this.postContainer = page.locator('#postContainer');
      this.userList = page.locator('#user-list-container');
      this.unreadMessages = page.locator('#unread-messages');
    }
  
    async createNewPost(postData) {
      await this.newPostButton.click();
      await this.page.locator('#title').fill(postData.title);
      await this.page.locator('#content').fill(postData.content);
      if (postData.categories) {
        for (const category of postData.categories) {
          await this.page.locator(`#${category}`).check();
        }
      }
      await this.page.locator('button[type="submit"]').click();
    }
  
    async logout() {
      await this.logoutButton.click();
    }
  
    async getAllPosts() {
      return await this.postContainer.locator('.post').all();
    }
  }
  