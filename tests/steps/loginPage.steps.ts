import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { test } from '../support/fixtures';
import { users } from '../data/users';

const { Given, When, Then } = createBdd(test);

Given('I navigate to the Login Page', async ({ loginPage }) => {
  await loginPage.navigate();
});

When('I fill in the username with {string}', async ({ loginPage }, username: string) => {
  await loginPage.fillUsername(username);
});

When('I fill in the password with {string}', async ({ loginPage }, password: string) => {
  await loginPage.fillPassword(password);
});

When('I click the sign in button', async ({ loginPage }) => {
  await loginPage.clickSignIn();
});

When('I sign in as {string}', async ({ loginPage }, userKey: string) => {
  const user = users[userKey];
  await loginPage.fillUsername(user.username);
  await loginPage.fillPassword(user.password);
  await loginPage.clickSignIn();
});

When('I click the Forgot password link', async ({ loginPage }) => {
  await loginPage.clickForgotPassword();
});

Then('I should be signed in successfully', async ({ page }) => {
  await expect(page).toHaveURL(/panel/);
});

Then('I should see the error message {string}', async ({ loginPage }, message: string) => {
  await expect(loginPage.locators.errorMessage).toContainText(message);
});
