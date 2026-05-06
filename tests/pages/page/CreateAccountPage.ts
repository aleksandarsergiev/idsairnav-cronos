import { Page } from '@playwright/test';
import { CreateAccountPageLocators } from '../locators/CreateAccountPageLocators';
import { BasePage } from './BasePage';

export class CreateAccountPage extends BasePage {
  private readonly locators: CreateAccountPageLocators;

  constructor(page: Page) {
    super(page);
    this.locators = new CreateAccountPageLocators(page);
  }

  get heading() {
    return this.locators.heading;
  }
}
