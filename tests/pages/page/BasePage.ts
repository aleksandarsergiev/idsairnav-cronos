import { Page } from '@playwright/test';

export abstract class BasePage {
  constructor(protected page: Page) {}

  protected async dismissCookieBanner() {
    const acceptButton = this.page.getByRole('button', { name: 'Accept' });
    if (await acceptButton.isVisible()) {
      await acceptButton.click();
    }
  }
}
