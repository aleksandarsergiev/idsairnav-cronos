import { test as base } from 'playwright-bdd';
import { LoginPage } from '../pages/page/LoginPage';
import { HomePage } from '../pages/page/HomePage';
import { ForgotPasswordPage } from '../pages/page/ForgotPasswordPage';

export const test = base.extend<{
  loginPage: LoginPage;
  homePage: HomePage;
  forgotPasswordPage: ForgotPasswordPage;
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
});
