import { createBdd, DataTable } from 'playwright-bdd';
import { test } from '../../support/fixtures';
import { organizationPayload, organizationWithMissingFplOfficePayload } from '../../api/data/organization';
import { expectResponseStatus, expectResponseToContain } from '../../api/assertions/responseAssertions';

const { When, Then } = createBdd(test);

When('I create an organization', async ({ organizationClient, apiContext }) => {
  apiContext.response = await organizationClient.create(organizationPayload);
});

When('I create an organization with a non-existent FPL office', async ({ organizationClient, apiContext }) => {
  apiContext.response = await organizationClient.create(organizationWithMissingFplOfficePayload);
});

Then('the organization should be created successfully', async ({ apiContext }) => {
  expectResponseStatus(apiContext.response!, 200);
});

Then('the organization creation should fail because the FPL office does not exist', async ({ apiContext }) => {
  expectResponseStatus(apiContext.response!, 417);
});

Then('the organization response should contain:', async ({ apiContext }, dataTable: DataTable) => {
  await expectResponseToContain(apiContext.response!, dataTable);
});
