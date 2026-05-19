import { expect } from '@playwright/test';
import { createBdd, DataTable } from 'playwright-bdd';
import { test } from '../../support/fixtures';

const { Given, When, Then } = createBdd(test);

Given('I navigate to the Checkout Page', async ({ checkoutPage }) => {
  await checkoutPage.navigate();
});

When('I fill in the checkout form with the following details:', async ({ checkoutPage }, table: DataTable) => {
  await checkoutPage.fillForm(table.rowsHash());
});

When('I click the Pay button', async ({ checkoutPage }) => {
  await checkoutPage.clickPay();
});

Then('I should see the success message {string}', async ({ checkoutPage }, message: string) => {
  await expect(checkoutPage.successHeading).toHaveText(message);
});

Then('I should see the following field errors:', async ({ checkoutPage }, table: DataTable) => {
  const expected = table.raw().map((row: string[]) => row[0]);
  const actual = await checkoutPage.getAllFieldErrors();
  expect(actual).toEqual(expect.arrayContaining(expected));
});
