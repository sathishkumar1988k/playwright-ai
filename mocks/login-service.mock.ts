/*
 * How to run these scripts:
 * 
 * 1. Run mock tests only:
 *    npx playwright test tests/specs/ --grep "mock"
 * 
 * 2. Run e2e tests only:
 *    npx playwright test tests/e2e/
 * 
 * 3. Run all tests:
 *    npx playwright test
 * 
 * 4. Run specific mock test:
 *    npx playwright test tests/specs/login-mock.spec.ts
 * 
 * 5. Run with UI mode:
 *    npx playwright test --ui
 */

import { Page } from '@playwright/test';

export class LoginServiceMock {
  constructor(private page: Page) {}

  async mockSuccessfulLogin() {
    await this.page.route('**/api/login', async route => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          success: true,
          token: 'mock-jwt-token',
          user: { id: 1, username: 'student', role: 'user' }
        })
      });
    });
  }

  async mockFailedLogin() {
    await this.page.route('**/api/login', async route => {
      await route.fulfill({
        status: 401,
        contentType: 'application/json',
        body: JSON.stringify({
          success: false,
          message: 'Invalid credentials'
        })
      });
    });
  }

  async mockNetworkError() {
    await this.page.route('**/api/login', async route => {
      await route.abort('networkfailure');
    });
  }
}
