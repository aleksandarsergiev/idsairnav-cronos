import { createBdd } from 'playwright-bdd';
import { test } from '../../support/fixtures';

const { Given, When } = createBdd(test);

Given('I navigate to the Home Page', async ({ homePage }) => {
  await homePage.navigate();
});

When('I click the login button', async ({ homePage }) => {
  await homePage.clickLogin();
});
