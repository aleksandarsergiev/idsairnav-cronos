import { createBdd, DataTable } from 'playwright-bdd';
import { test } from '../../support/fixtures';
import {
  childFplOfficeWithMissingParentFplOfficePayload,
  fplOfficeMissingEmailPayload,
  fplOfficePayload,
} from '../../api/data/fplOffice';
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

When('I create a child FPL office with a non-existent parent FPL office', async ({ fplOfficeClient, apiContext }) => {
  apiContext.response = await fplOfficeClient.create(childFplOfficeWithMissingParentFplOfficePayload);
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

Then('the child FPL office creation should fail because the parent FPL office does not exist', async ({ apiContext }) => {
  console.log(await apiContext.response!.json());
  expectResponseStatus(apiContext.response!, 417);
});

Then('the FPL office response should contain:', async ({ apiContext }, dataTable: DataTable) => {
  await expectResponseToContain(apiContext.response!, dataTable);
});
