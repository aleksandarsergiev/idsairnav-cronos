import { createBdd, DataTable } from 'playwright-bdd';
import { test } from '../../support/fixtures';
import { userWithMissingChildFplOfficePayload } from '../../api/data/user';
import { expectResponseStatus, expectResponseToContain } from '../../api/assertions/responseAssertions';

const { When, Then } = createBdd(test);

When('I create a user linked to a non-existent child FPL office', async ({ userClient, apiContext }) => {
  apiContext.response = await userClient.create(userWithMissingChildFplOfficePayload);
});

Then('the user creation should fail because the child FPL office does not exist', async ({ apiContext }) => {
  expectResponseStatus(apiContext.response!, 404);
});

Then('the user response should contain:', async ({ apiContext }, dataTable: DataTable) => {
  await expectResponseToContain(apiContext.response!, dataTable);
});
