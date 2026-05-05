import { Page, Locator } from '@playwright/test';

export class HomePageLocators {
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.loginButton = page.getByRole('link', { name: 'Login', exact: true });
  }
}
