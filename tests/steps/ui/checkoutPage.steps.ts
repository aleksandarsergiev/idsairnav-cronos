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

Then('I should see the following field errors:', async ({ checkoutPage }, table: DataTable) => {
  await checkoutPage.assertFieldErrors(table.raw().map((row: string[]) => row[0]));
});

Then('the payment confirmation should show:', async ({ checkoutPage }, table: DataTable) => {
  await checkoutPage.assertConfirmation(table.rowsHash());
});
