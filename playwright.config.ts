import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'https://practicetestautomation.com',
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'mock-tests',
      testDir: './tests/specs',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'e2e-tests',
      testDir: './tests/e2e',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
