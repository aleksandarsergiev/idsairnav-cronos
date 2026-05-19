import { Page } from '@playwright/test';

export abstract class BasePage {
  constructor(protected page: Page) {}

  protected async dismissCookieBanner() {
    const acceptButton = this.page.getByRole('button', { name: 'Accept' });
    await acceptButton.click({ timeout: 2000 }).catch(() => {});
  }
}
