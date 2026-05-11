import { APIResponse } from '@playwright/test';
import { test as base } from 'playwright-bdd';
import { LoginPage } from '../pages/page/LoginPage';
import { HomePage } from '../pages/page/HomePage';
import { ForgotPasswordPage } from '../pages/page/ForgotPasswordPage';
import { CreateAccountPage } from '../pages/page/CreateAccountPage';
import { SessionClient } from '../api/clients/SessionClient';

export type ApiContext = {
  response?: APIResponse;
  csrfToken?: string;
};

export const test = base.extend<{
  loginPage: LoginPage;
  homePage: HomePage;
  forgotPasswordPage: ForgotPasswordPage;
  createAccountPage: CreateAccountPage;
  sessionClient: SessionClient;
  apiContext: ApiContext;
}>({
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
  sessionClient: async ({ request }, use) => {
    await use(new SessionClient(request));
  },
  apiContext: async ({}, use) => {
    await use({});
  },
});
