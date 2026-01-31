// ...existing code from successful-login.spec.ts...
import { test } from '@playwright/test';
import { LoginPage } from '../../pages/login-page';

test.describe('Login E2E Tests with Actual Services', () => {
  test('Successful Login with Valid Credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigateToLoginPage();
    await loginPage.verifyLoginPageElements();
    await loginPage.enterUsername('student');
    await loginPage.verifyUsernameInput('student');
    await loginPage.enterPassword('Password123');
    await loginPage.verifyPasswordInput('Password123');
    await loginPage.clickSubmit();
    await loginPage.verifyLoginSuccess();
  });
});
