import { Page, Locator } from '@playwright/test';

export class ForgotPasswordPageLocators {
  readonly heading: Locator;

  constructor(page: Page) {
    this.heading = page.getByRole('heading', { name: 'Forgot Password?' });
  }
}
