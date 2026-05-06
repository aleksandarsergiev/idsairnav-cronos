import { Page } from '@playwright/test';
import { ForgotPasswordPageLocators } from '../locators/ForgotPasswordPageLocators';
import { BasePage } from './BasePage';

export class ForgotPasswordPage extends BasePage {
  private readonly locators: ForgotPasswordPageLocators;

  constructor(page: Page) {
    super(page);
    this.locators = new ForgotPasswordPageLocators(page);
  }

  get heading() {
    return this.locators.heading;
  }
}
