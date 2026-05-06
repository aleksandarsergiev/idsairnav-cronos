import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { test } from '../support/fixtures';

const { Then } = createBdd(test);

Then('the forgot password page heading should be {string}', async ({ forgotPasswordPage }, heading: string) => {
  await expect(forgotPasswordPage.heading).toHaveText(heading);
});

Then('the forgot password page url should contain {string}', async ({ page }, url: string) => {
  await expect(page).toHaveURL(new RegExp(url));
});
