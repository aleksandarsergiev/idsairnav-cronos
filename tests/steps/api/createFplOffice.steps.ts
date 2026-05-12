import { createBdd, DataTable } from 'playwright-bdd';
import { test } from '../../support/fixtures';
import { fplOfficePayload, fplOfficeMissingEmailPayload } from '../../api/data/fplOffice';
import { expectResponseStatus, expectResponseToContain } from '../../api/assertions/responseAssertions';

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

When('I create an FPL office with email distribution but no email', async ({ fplOfficeClient, apiContext }) => {
  apiContext.response = await fplOfficeClient.create(fplOfficeMissingEmailPayload);
});

Then('the FPL office should be created successfully', async ({ apiContext }) => {
  expectResponseStatus(apiContext.response!, 200);
});

Then('the FPL office creation should fail because the id already exists', async ({ apiContext }) => {
  expectResponseStatus(apiContext.response!, 417);
});

Then('the FPL office creation should fail because email is required', async ({ apiContext }) => {
  expectResponseStatus(apiContext.response!, 417);
});

Then('the FPL office response should contain:', async ({ apiContext }, dataTable: DataTable) => {
  await expectResponseToContain(apiContext.response!, dataTable);
});
