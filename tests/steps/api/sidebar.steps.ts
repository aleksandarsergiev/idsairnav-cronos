import { createBdd, DataTable } from 'playwright-bdd';
import { test } from '../../support/fixtures';
import { expectResponseStatus, expectResponseToContain } from '../../api/assertions/responseAssertions';

const { When, Then } = createBdd(test);

When('I request the sidebar layout', async ({ layoutClient, apiContext }) => {
  apiContext.response = await layoutClient.getSidebar();
});

Then('the response status code should be {int}', async ({ apiContext }, status: number) => {
  expectResponseStatus(apiContext.response!, status);
});

Then('the response should contain:', async ({ apiContext }, dataTable: DataTable) => {
  await expectResponseToContain(apiContext.response!, dataTable);
});
