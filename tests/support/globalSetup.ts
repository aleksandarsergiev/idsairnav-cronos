import { chromium } from '@playwright/test';
import { LoginPage } from '../pages/page/LoginPage';
import { required } from './env';

async function globalSetup() {
  const browser = await chromium.launch();
  const context = await browser.newContext({ baseURL: required('BASE_URL') });
  const page = await context.newPage();

  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  await loginPage.fillUsername(required('USER1_USERNAME'));
  await loginPage.fillPassword(required('USER1_PASSWORD'));
  await loginPage.clickSignIn();
  await page.waitForURL(/panel/);

  await page.context().storageState({ path: 'storageState.json' });
  await browser.close();
}

export default globalSetup;
