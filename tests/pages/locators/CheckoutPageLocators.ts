import { Page, Locator } from '@playwright/test';

export class CheckoutPageLocators {
  readonly submitButton: Locator;
  readonly fieldErrors: Locator;
  readonly successHeading: Locator;

  constructor(page: Page) {
    this.submitButton = page.getByRole('button', { name: 'Pay $42.00 (Demo)' });
    this.fieldErrors = page.locator('.field-error');
    this.successHeading = page.getByRole('heading', { name: 'Order Confirmed' });
  }
}
