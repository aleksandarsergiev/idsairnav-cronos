import { createBdd } from 'playwright-bdd';
import { test } from '../../support/fixtures';
import { organizationWithMissingFplOfficePayload } from '../../api/data/organization';
import { expectResponseStatus } from '../../api/assertions/responseAssertions';

const { When, Then } = createBdd(test);

When('I create an organization with a non-existent FPL office', async ({ organizationClient, apiContext }) => {
  apiContext.response = await organizationClient.create(organizationWithMissingFplOfficePayload);
});

Then('the organization creation should fail because the FPL office does not exist', async ({ apiContext }) => {
  console.log(await apiContext.response!.json());
  expectResponseStatus(apiContext.response!, 400);
});
