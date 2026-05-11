import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { test } from '../../support/fixtures';
import { apiCredentials } from '../../credentials/apiCredentials';

const { When, Then } = createBdd(test);

When('I send a sign in request with valid credentials', async ({ sessionClient, apiContext }) => {
  apiContext.response = await sessionClient.login(apiCredentials.userLogin, apiCredentials.password);
});

Then('the response status should be {int}', async ({ apiContext }, status: number) => {
  expect(apiContext.response!.status()).toBe(status);
});
