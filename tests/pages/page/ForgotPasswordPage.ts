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

  async fillEmail(email: string) {
    await this.locators.emailInput.fill(email);
  }

  async clickGetResetToken() {
    await this.locators.submitButton.click();
  }

  get errorMessage() {
    return this.locators.errorMessage;
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
