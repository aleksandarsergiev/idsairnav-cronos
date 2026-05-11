import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { test } from '../../support/fixtures';

const { When, Then } = createBdd(test);

When('I send a get sidebar request', async ({ layoutClient, apiContext }) => {
  apiContext.response = await layoutClient.getSidebar();
});

Then('the response status should be {int}', async ({ apiContext }, status: number) => {
  expect(apiContext.response!.status()).toBe(status);
});

Then('the response field {string} should be {string}', async ({ apiContext }, field: string, expected: string) => {
  const body = await apiContext.response!.json();
  console.log(body);
  expect(body[field]).toBe(expected);
});
