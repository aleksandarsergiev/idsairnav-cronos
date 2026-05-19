import { Page, Locator } from '@playwright/test';

export class CheckoutPageLocators {
  readonly submitButton: Locator;
  readonly fieldErrors: Locator;
  readonly successHeading: Locator;
  readonly receiptName: Locator;
  readonly receiptAmount: Locator;
  readonly receiptCard: Locator;
  readonly receiptOrderId: Locator;

  constructor(page: Page) {
    this.submitButton = page.getByRole('button', { name: 'Pay $42.00 (Demo)' });
    this.fieldErrors = page.locator('.field-error');
    this.successHeading = page.getByRole('heading', { name: 'Order Confirmed' });
    this.receiptName = page.locator('.receipt-row').filter({ hasText: 'Name' }).locator('strong');
    this.receiptAmount = page.locator('.receipt-row').filter({ hasText: 'Amount' }).locator('strong');
    this.receiptCard = page.locator('.receipt-row').filter({ hasText: 'Card' }).locator('strong');
    this.receiptOrderId = page.locator('.receipt-row').filter({ hasText: 'Order ID' }).locator('strong');
  }
}
