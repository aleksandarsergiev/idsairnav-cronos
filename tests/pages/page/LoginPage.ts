import { Page } from '@playwright/test';
import { LoginPageLocators } from '../locators/LoginPageLocators';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  private readonly locators: LoginPageLocators;

  constructor(page: Page) {
    super(page);
    this.locators = new LoginPageLocators(page);
  }

  async navigate() {
    await this.page.goto('/login');
    await this.dismissCookieBanner();
  }

  async fillUsername(username: string) {
    await this.locators.usernameInput.fill(username);
  }

  async fillPassword(password: string) {
    await this.locators.passwordInput.fill(password);
  }

  async clickSignIn() {
    await this.locators.signInButton.click();
  }

  async clickForgotPassword() {
    await this.locators.forgotPasswordLink.click();
  }

  async clickSignUp() {
    await this.locators.signUpLink.click();
  }

  get errorMessage() {
    return this.locators.errorMessage;
  }
}
