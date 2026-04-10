import { Page } from '@playwright/test';

export class LoginPage {

  // Constructor that initializes the page object
  constructor(private page: Page) {}

  // Navigate to the login page
  async navigate() {
    await this.page.goto('/');
    await this.page.waitForSelector('#user-name');
  }

  // Login method
  async login(username: string, password: string) {
    await this.page.fill('#user-name', username);
    await this.page.fill('#password', password);
    await this.page.click('#login-button');
  }

  // Get the error message element on the page
  async getErrorMessage() {
    return this.page.locator('[data-test="error"]');
  }

}