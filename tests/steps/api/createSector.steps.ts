import { createBdd, DataTable } from 'playwright-bdd';
import { test } from '../../support/fixtures';
import { sectorPayload, sectorWithInvalidFlightLevelLimitsPayload } from '../../api/data/sector';
import { expectResponseStatus, expectResponseToContain } from '../../api/assertions/responseAssertions';

const { When, Then } = createBdd(test);

When('I create a sector', async ({ sectorClient, apiContext }) => {
  apiContext.response = await sectorClient.create(sectorPayload);
});

When('I create a sector with lower limit flight level greater than upper limit flight level', async ({ sectorClient, apiContext }) => {
  apiContext.response = await sectorClient.create(sectorWithInvalidFlightLevelLimitsPayload);
});

Then('the sector should be created successfully', async ({ apiContext }) => {
  expectResponseStatus(apiContext.response!, 200);
});

Then('the sector creation should fail because the lower limit flight level is greater than the upper limit flight level', async ({ apiContext }) => {
  expectResponseStatus(apiContext.response!, 417);
});

Then('the sector response should contain:', async ({ apiContext }, dataTable: DataTable) => {
  await expectResponseToContain(apiContext.response!, dataTable);
});
