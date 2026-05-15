import { createBdd, DataTable } from 'playwright-bdd';
import { test } from '../../support/fixtures';
import { permissionGroupPayload } from '../../api/data/permissionGroup';
import { expectResponseStatus, expectResponseToContain } from '../../api/assertions/responseAssertions';

const { When, Then } = createBdd(test);

When('I create a permission group', async ({ permissionGroupClient, apiContext }) => {
  apiContext.response = await permissionGroupClient.create(permissionGroupPayload);
  const body = await apiContext.response.json();
  apiContext.createdPermissionGroupId = body.data.id;
});

Then('the permission group should be created successfully', async ({ apiContext }) => {
  expectResponseStatus(apiContext.response!, 200);
});

Then('the permission group response should contain:', async ({ apiContext }, dataTable: DataTable) => {
  await expectResponseToContain(apiContext.response!, dataTable);
});
