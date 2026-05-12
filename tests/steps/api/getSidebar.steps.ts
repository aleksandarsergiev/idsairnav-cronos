import { createBdd, DataTable } from 'playwright-bdd';
import { test } from '../../support/fixtures';
import { expectResponseStatus, expectResponseToContain } from '../../api/assertions/responseAssertions';

const { When, Then } = createBdd(test);

When('I request the sidebar layout', async ({ layoutClient, apiContext }) => {
  apiContext.response = await layoutClient.getSidebar();
});

Then('the sidebar should be retrieved successfully', async ({ apiContext }) => {
  expectResponseStatus(apiContext.response!, 200);
});

Then('the sidebar response should contain:', async ({ apiContext }, dataTable: DataTable) => {
  await expectResponseToContain(apiContext.response!, dataTable);
});
