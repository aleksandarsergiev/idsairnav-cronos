import { createBdd } from 'playwright-bdd';
import { test } from '../../support/fixtures';
import { userWithMissingChildFplOfficePayload } from '../../api/data/user';
import { expectResponseStatus } from '../../api/assertions/responseAssertions';

const { When, Then } = createBdd(test);

When('I create a user linked to a non-existent child FPL office', async ({ userClient, apiContext }) => {
  apiContext.response = await userClient.create(userWithMissingChildFplOfficePayload);
});

Then('the user creation should fail because the child FPL office does not exist', async ({ apiContext }) => {
  console.log(await apiContext.response!.json());
  expectResponseStatus(apiContext.response!, 417);
});
