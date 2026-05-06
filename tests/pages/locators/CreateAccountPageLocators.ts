import { Page, Locator } from '@playwright/test';

export class CreateAccountPageLocators {
  readonly heading: Locator;

  constructor(page: Page) {
    this.heading = page.getByRole('heading', { name: 'Create an account' });
  }
}
