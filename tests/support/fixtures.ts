import { APIRequestContext, APIResponse, request as apiRequest } from '@playwright/test';
import { test as base } from 'playwright-bdd';
import { LoginPage } from '../pages/page/LoginPage';
import { HomePage } from '../pages/page/HomePage';
import { ForgotPasswordPage } from '../pages/page/ForgotPasswordPage';
import { CreateAccountPage } from '../pages/page/CreateAccountPage';
import { CheckoutPage } from '../pages/page/CheckoutPage';
import { SessionClient } from '../api/clients/SessionClient';
import { LayoutClient } from '../api/clients/LayoutClient';
import { FplOfficeClient } from '../api/clients/FplOfficeClient';
import { OrganizationClient } from '../api/clients/OrganizationClient';
import { UserClient } from '../api/clients/UserClient';
import { SectorClient } from '../api/clients/SectorClient';
import { PermissionGroupClient } from '../api/clients/PermissionGroupClient';
import { apiCredentials } from '../credentials/apiCredentials';

export type ApiContext = {
  response?: APIResponse;
  createdOrganizationId?: number;
  createdUserId?: number;
  createdSectorId?: number;
  createdPermissionGroupId?: number;
};

type StorageState = Awaited<ReturnType<APIRequestContext['storageState']>>;

export type ApiAuth = {
  csrfToken: string;
  storageState: StorageState;
};

type ClientConstructor<T> = new (request: APIRequestContext) => T;

function authenticatedClient<T>(ClientClass: ClientConstructor<T>) {
  return async ({ apiAuth }: { apiAuth: ApiAuth }, use: (client: T) => Promise<void>) => {
    const request = await apiRequest.newContext({
      storageState: apiAuth.storageState,
      extraHTTPHeaders: { 'X-CSRF-TOKEN': apiAuth.csrfToken },
    });
    await use(new ClientClass(request));
    await request.dispose();
  };
}

export const test = base.extend<
  {
    loginPage: LoginPage;
    homePage: HomePage;
    forgotPasswordPage: ForgotPasswordPage;
    createAccountPage: CreateAccountPage;
    checkoutPage: CheckoutPage;
    apiContext: ApiContext;
    layoutClient: LayoutClient;
    fplOfficeClient: FplOfficeClient;
    organizationClient: OrganizationClient;
    userClient: UserClient;
    sectorClient: SectorClient;
    permissionGroupClient: PermissionGroupClient;
  },
  {
    apiAuth: ApiAuth;
  }
>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  forgotPasswordPage: async ({ page }, use) => {
    await use(new ForgotPasswordPage(page));
  },
  createAccountPage: async ({ page }, use) => {
    await use(new CreateAccountPage(page));
  },
  checkoutPage: async ({ page }, use) => {
    await use(new CheckoutPage(page));
  },
  apiContext: async ({}, use) => {
    await use({});
  },

  apiAuth: [
    async ({}, use) => {
      const request = await apiRequest.newContext();
      const session = new SessionClient(request);
      const response = await session.login(apiCredentials.userLogin, apiCredentials.password);
      const csrfToken = response.headers()['x-csrf-token'];
      const storageState = await request.storageState();
      await use({ csrfToken, storageState });
      await request.dispose();
    },
    { scope: 'worker' },
  ],

  layoutClient: authenticatedClient(LayoutClient),
  fplOfficeClient: authenticatedClient(FplOfficeClient),
  organizationClient: authenticatedClient(OrganizationClient),
  userClient: authenticatedClient(UserClient),
  sectorClient: authenticatedClient(SectorClient),
  permissionGroupClient: authenticatedClient(PermissionGroupClient),
});
