import { createBdd } from 'playwright-bdd';
import { test } from '../../support/fixtures';
import { fplOfficePayload } from '../../api/data/fplOffice';
import { expectResponseStatus } from '../../api/assertions/responseAssertions';

const { Given, When, Then } = createBdd(test);

Given('an FPL office exists', async ({ fplOfficeClient }) => {
  const response = await fplOfficeClient.create(fplOfficePayload);
  expectResponseStatus(response, 200);
});

When('I create an FPL office', async ({ fplOfficeClient, apiContext }) => {
  apiContext.response = await fplOfficeClient.create(fplOfficePayload);
});

When('I create the same FPL office', async ({ fplOfficeClient, apiContext }) => {
  apiContext.response = await fplOfficeClient.create(fplOfficePayload);
});

Then('the FPL office should be created successfully', async ({ apiContext }) => {
  expectResponseStatus(apiContext.response!, 200);
});

Then('the FPL office creation should fail because the id already exists', async ({ apiContext }) => {
  expectResponseStatus(apiContext.response!, 417);
});
