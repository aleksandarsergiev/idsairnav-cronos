import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';
import 'dotenv/config';

const testDir = defineBddConfig({
  features: 'tests/features/**/*.feature',
  steps: ['tests/steps/**/*.ts', 'tests/support/**/*.ts'],
});

export default defineConfig({
  testDir,
  globalSetup: './tests/support/globalSetup.ts',
  timeout: 30000,
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ['list'],
    ['html', { open: process.env.CI ? 'never' : 'always' }],
  ],
  use: {
    baseURL: process.env.BASE_URL,
    viewport: { width: 1920, height: 1200 },
    actionTimeout: 10000,
    navigationTimeout: 30000,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  projects: [
    {
      name: 'Smoke Tests',
      grep: /@smoke/,
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'Regression Tests',
      grep: /@regression/,
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'E2E Tests',
      grep: /@e2e/,
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'Authenticated Tests',
      grep: /@authenticated/,
      use: {
        ...devices['Desktop Chrome'],
        storageState: 'storageState.json',
      },
    },
  ],
});
