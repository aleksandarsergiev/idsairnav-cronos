import { Page } from '@playwright/test';
import { HomePageLocators } from '../locators/HomePageLocators';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  readonly locators: HomePageLocators;

  constructor(page: Page) {
    super(page);
    this.locators = new HomePageLocators(page);
  }

  async navigate() {
    await this.page.goto('/');
    await this.dismissCookieBanner();
  }

  async clickLogin() {
    await this.locators.loginButton.click();
  }
}
