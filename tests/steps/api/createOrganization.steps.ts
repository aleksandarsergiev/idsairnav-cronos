import { createBdd, DataTable } from 'playwright-bdd';
import { test } from '../../support/fixtures';
import {
  organizationPayload,
  organizationWithMissingEmailRulePayload,
  organizationWithMissingFplOfficePayload,
} from '../../api/data/organization';
import { expectResponseStatus, expectResponseToContain } from '../../api/assertions/responseAssertions';

const { Given, When, Then } = createBdd(test);

Given('an organization exists', async ({ organizationClient, apiContext }) => {
  const response = await organizationClient.create(organizationPayload);
  expectResponseStatus(response, 200);
  const body = await response.json();
  apiContext.createdOrganizationId = body.data.id;
});

When('I create an organization', async ({ organizationClient, apiContext }) => {
  apiContext.response = await organizationClient.create(organizationPayload);
  const body = await apiContext.response.json();
  apiContext.createdOrganizationId = body.data.id;
});

When('I create an organization with a non-existent FPL office', async ({ organizationClient, apiContext }) => {
  apiContext.response = await organizationClient.create(organizationWithMissingFplOfficePayload);
});

When('I create an organization without an email notification rule', async ({ organizationClient, apiContext }) => {
  apiContext.response = await organizationClient.create(organizationWithMissingEmailRulePayload);
});

Then('the organization should be created successfully', async ({ apiContext }) => {
  expectResponseStatus(apiContext.response!, 200);
});

Then('the organization creation should fail because the FPL office does not exist', async ({ apiContext }) => {
  expectResponseStatus(apiContext.response!, 417);
});

Then('the organization creation should fail because the email notification rule is required', async ({ apiContext }) => {
  expectResponseStatus(apiContext.response!, 417);
});

Then('the organization response should contain:', async ({ apiContext }, dataTable: DataTable) => {
  await expectResponseToContain(apiContext.response!, dataTable);
});
