// spec: specs/login-happy-path.plan.md
// seed: tests/seed.spec.ts

import { test } from '@playwright/test';
import { LoginPage } from '../pages/login-page';

test.describe('Login Happy Path Scenarios', () => {
  test('Successful Login with Valid Credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    // 1. Navigate to the login page at https://practicetestautomation.com/practice-test-login/
    await loginPage.navigateToLoginPage();
    
    // Verify page loads successfully and all elements are present
    await loginPage.verifyLoginPageElements();

    // 2. Enter valid username 'student' in the Username field
    await loginPage.enterUsername('student');
    
    // Verify username field accepts the input and text 'student' is displayed
    await loginPage.verifyUsernameInput('student');

    // 3. Enter valid password 'Password123' in the Password field
    await loginPage.enterPassword('Password123');
    
    // Verify password field accepts the input
    await loginPage.verifyPasswordInput('Password123');

    // 4. Click the Submit button
    await loginPage.clickSubmit();

    // 5. Verify successful login page content
    await loginPage.verifyLoginSuccess();
  });
});