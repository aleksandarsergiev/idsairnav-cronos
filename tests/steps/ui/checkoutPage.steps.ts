import { createBdd, DataTable } from 'playwright-bdd';
import { test } from '../../support/fixtures';

const { Given, When, Then } = createBdd(test);

Given('I navigate to the Checkout Page', async ({ checkoutPage }) => {
  await checkoutPage.navigate();
});

When('I click the Pay button without entering any of the required fields', async ({ checkoutPage }) => {
  await checkoutPage.clickPay();
});

Then('I should see the following field errors:', async ({ checkoutPage }, table: DataTable) => {
  const expectedErrors = table.raw().map((row: string[]) => row[0]);
  await checkoutPage.assertFieldErrors(expectedErrors);
});
