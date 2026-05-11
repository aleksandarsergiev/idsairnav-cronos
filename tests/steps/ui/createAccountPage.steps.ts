import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { test } from '../../support/fixtures';

const { Then } = createBdd(test);

Then('the create account page heading should be {string}', async ({ createAccountPage }, heading: string) => {
  await expect(createAccountPage.heading).toHaveText(heading);
});

Then('the create account page url should contain {string}', async ({ page }, url: string) => {
  await expect(page).toHaveURL(new RegExp(url));
});
