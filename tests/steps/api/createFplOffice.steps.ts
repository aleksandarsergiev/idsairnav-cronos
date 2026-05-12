import { createBdd } from 'playwright-bdd';
import { test } from '../../support/fixtures';
import { fplOfficePayload } from '../../api/data/fplOffice';
import { expectResponseStatus } from '../../api/assertions/responseAssertions';

const { When, Then } = createBdd(test);

When('I create an FPL office', async ({ fplOfficeClient, apiContext }) => {
  apiContext.response = await fplOfficeClient.create(fplOfficePayload);
});

Then('the FPL office should be created successfully', async ({ apiContext }) => {
  expectResponseStatus(apiContext.response!, 200);
});
