import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { test } from '../../support/fixtures';

const { Given, When, Then } = createBdd(test);

Given('I navigate to the Forgot Password Page', async ({ forgotPasswordPage }) => {
  await forgotPasswordPage.navigate();
});

When('I enter {string} as the email address', async ({ forgotPasswordPage }, email: string) => {
  await forgotPasswordPage.fillEmail(email);
});

When('I click the get reset token button', async ({ forgotPasswordPage }) => {
  await forgotPasswordPage.clickGetResetToken();
});

Then('the forgot password page heading should be {string}', async ({ forgotPasswordPage }, heading: string) => {
  await expect(forgotPasswordPage.heading).toHaveText(heading);
});

Then('the forgot password page url should contain {string}', async ({ page }, url: string) => {
  await expect(page).toHaveURL(new RegExp(url));
});

Then('I should see the forgot password error message {string}', async ({ forgotPasswordPage }, message: string) => {
  await expect(forgotPasswordPage.errorMessage).toContainText(message);
});

Then('the email field should report a required validation error', async ({ forgotPasswordPage }) => {
  const { valueMissing, message } = await forgotPasswordPage.getEmailValidity();
  expect(valueMissing).toBe(true);
  expect(message).not.toBe('');
});
