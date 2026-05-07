import { chromium } from '@playwright/test';
import 'dotenv/config';

async function globalSetup() {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto(`${process.env.BASE_URL}/login`);

  const acceptButton = page.getByRole('button', { name: 'Accept' });
  if (await acceptButton.isVisible()) {
    await acceptButton.click();
  }

  await page.getByLabel('Username or Email').fill(process.env.USER1_USERNAME ?? '');
  await page.getByLabel('Password').fill(process.env.USER1_PASSWORD ?? '');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.waitForURL(/panel/);

  await page.context().storageState({ path: 'storageState.json' });
  await browser.close();
}

export default globalSetup;
