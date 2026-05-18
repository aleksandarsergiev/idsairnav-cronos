import { Page, Locator } from '@playwright/test';

export class ForgotPasswordPageLocators {
  readonly heading: Locator;
  readonly emailInput: Locator;
  readonly submitButton: Locator;

  constructor(page: Page) {
    this.heading = page.getByRole('heading', { name: 'Forgot Password?' });
    this.emailInput = page.getByLabel('Email Address');
    this.submitButton = page.getByRole('button', { name: 'Get Reset Token' });
  }
}
