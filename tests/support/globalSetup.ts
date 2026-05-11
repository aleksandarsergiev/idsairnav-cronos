import { chromium } from '@playwright/test';
import 'dotenv/config';
import { LoginPage } from '../pages/page/LoginPage';

async function globalSetup() {
  const browser = await chromium.launch();
  const context = await browser.newContext({ baseURL: process.env.BASE_URL });
  const page = await context.newPage();

  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  await loginPage.fillUsername(process.env.USER1_USERNAME ?? '');
  await loginPage.fillPassword(process.env.USER1_PASSWORD ?? '');
  await loginPage.clickSignIn();
  await page.waitForURL(/panel/);

  await page.context().storageState({ path: 'storageState.json' });
  await browser.close();
}

export default globalSetup;
