import { Page } from '@playwright/test';
import { ForgotPasswordPageLocators } from '../locators/ForgotPasswordPageLocators';
import { BasePage } from './BasePage';

export class ForgotPasswordPage extends BasePage {
  private readonly locators: ForgotPasswordPageLocators;

  constructor(page: Page) {
    super(page);
    this.locators = new ForgotPasswordPageLocators(page);
  }

  async navigate() {
    await this.page.goto('/forgot-password');
    await this.dismissCookieBanner();
  }

  async clickGetResetToken() {
    await this.locators.submitButton.click();
  }

  async getEmailValidity() {
    return this.locators.emailInput.evaluate((el: HTMLInputElement) => ({
      valueMissing: el.validity.valueMissing,
      message: el.validationMessage,
    }));
  }

  get heading() {
    return this.locators.heading;
  }
}
