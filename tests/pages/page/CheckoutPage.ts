import { expect, Page } from '@playwright/test';
import { CheckoutPageLocators } from '../locators/CheckoutPageLocators';
import { BasePage } from './BasePage';

export class CheckoutPage extends BasePage {
  private readonly locators: CheckoutPageLocators;

  constructor(page: Page) {
    super(page);
    this.locators = new CheckoutPageLocators(page);
  }

  async navigate() {
    await this.page.goto('/checkout');
    await this.dismissCookieBanner();
  }

  async fillForm(data: Record<string, string>) {
    for (const [label, value] of Object.entries(data)) {
      await this.page.getByLabel(label).fill(value);
    }
  }

  async clickPay() {
    await this.locators.submitButton.click();
  }

  async assertFieldErrors(expected: string[]) {
    await this.locators.fieldErrors.filter({ hasText: /.+/ }).first().waitFor();
    const actual = (await this.locators.fieldErrors.allTextContents()).filter(t => t.trim() !== '');
    expect(actual).toEqual(expect.arrayContaining(expected));
  }

  async assertConfirmation(data: Record<string, string>) {
    await expect(this.locators.successHeading).toHaveText(data['success message']);
    await expect(this.locators.receiptName).toHaveText(data['cardholder name']);
    await expect(this.locators.receiptAmount).toHaveText(data['amount']);
    await expect(this.locators.receiptCard).toContainText(data['card ending']);
    await expect(this.locators.receiptOrderId).toHaveText(/^#[A-Z0-9]+$/);
  }
}
