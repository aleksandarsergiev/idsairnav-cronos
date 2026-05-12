import { createBdd } from 'playwright-bdd';
import { test } from './fixtures';
import { fplOfficePayload } from '../api/data/fplOffice';
import { expectResponseStatus } from '../api/assertions/responseAssertions';

const { Before, After } = createBdd(test);

Before(async () => {
  // global setup before each scenario
});

After({ tags: '@createsFplOffice' }, async ({ fplOfficeClient }) => {
  const response = await fplOfficeClient.delete(fplOfficePayload.id);
  expectResponseStatus(response, 200);
});
