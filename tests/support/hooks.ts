import { createBdd } from 'playwright-bdd';
import { test } from './fixtures';

const { Before } = createBdd(test);

Before(async () => {
  // global setup before each scenario
});
