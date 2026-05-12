import { expect } from '@playwright/test';
import { createBdd, DataTable } from 'playwright-bdd';
import { test } from '../../support/fixtures';

const { When, Then } = createBdd(test);

When('I request the sidebar layout', async ({ layoutClient, apiContext }) => {
  apiContext.response = await layoutClient.getSidebar();
});

Then('the response status code should be {int}', async ({ apiContext }, status: number) => {
  expect(apiContext.response!.status()).toBe(status);
});

Then('the response should contain:', async ({ apiContext }, dataTable: DataTable) => {
  const body = await apiContext.response!.json();
  for (const row of dataTable.hashes()) {
    expect(body[row.field]).toBe(row.value);
  }
});
