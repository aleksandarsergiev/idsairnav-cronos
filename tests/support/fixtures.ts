import { APIResponse, request as apiRequest } from '@playwright/test';
import { test as base } from 'playwright-bdd';
import { LoginPage } from '../pages/page/LoginPage';
import { HomePage } from '../pages/page/HomePage';
import { ForgotPasswordPage } from '../pages/page/ForgotPasswordPage';
import { CreateAccountPage } from '../pages/page/CreateAccountPage';
import { SessionClient } from '../api/clients/SessionClient';
import { LayoutClient } from '../api/clients/LayoutClient';
import { apiCredentials } from '../credentials/apiCredentials';

export type ApiContext = {
  response?: APIResponse;
};

export type ApiAuth = {
  csrfToken: string;
};

export const test = base.extend<
  {
    loginPage: LoginPage;
    homePage: HomePage;
    forgotPasswordPage: ForgotPasswordPage;
    createAccountPage: CreateAccountPage;
    apiContext: ApiContext;
    layoutClient: LayoutClient;
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
  apiContext: async ({}, use) => {
    await use({});
  },

  apiAuth: [
    async ({}, use) => {
      const request = await apiRequest.newContext();
      const session = new SessionClient(request);
      const response = await session.login(apiCredentials.userLogin, apiCredentials.password);
      const csrfToken = response.headers()['x-csrf-token'];
      await use({ csrfToken });
      await request.dispose();
    },
    { scope: 'worker' },
  ],

  layoutClient: async ({ apiAuth }, use) => {
    const request = await apiRequest.newContext({
      extraHTTPHeaders: { 'X-CSRF-TOKEN': apiAuth.csrfToken },
    });
    await use(new LayoutClient(request));
    await request.dispose();
  },
});
