import { Page, expect } from '@playwright/test';
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

  async assertSuccessMessage(message: string) {
    await expect(this.locators.successHeading).toHaveText(message);
  }

  async getAllFieldErrors(): Promise<string[]> {
    await this.locators.fieldErrors.filter({ hasText: /.+/ }).first().waitFor();
    const texts = await this.locators.fieldErrors.allTextContents();
    return texts.filter(t => t.trim() !== '');
  }

  async assertFieldErrors(expectedErrors: string[]): Promise<void> {
    const actualErrors = await this.getAllFieldErrors();
    for (const error of expectedErrors) {
      expect(actualErrors).toContain(error);
    }
  }
}
