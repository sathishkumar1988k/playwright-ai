import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login-page';
import { LoginServiceMock } from '../../mocks/login-service.mock';

test.describe('Login Scenarios with Mocked Services', () => {
  test('Successful Login with Mocked API Response', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const loginMock = new LoginServiceMock(page);

    // Setup mock for successful login
    await loginMock.mockSuccessfulLogin();

    await loginPage.navigateToLoginPage();
    await loginPage.verifyLoginPageElements();
    await loginPage.enterUsername('student');
    await loginPage.enterPassword('Password123');
    await loginPage.clickSubmit();
    await loginPage.verifyLoginSuccess();
  });

  test('Failed Login with Mocked Error Response', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const loginMock = new LoginServiceMock(page);

    await loginPage.navigateToLoginPage();
    
    // Setup mock for failed login BEFORE submitting
    await loginMock.mockFailedLogin();

    await loginPage.enterUsername('invalid-user');
    await loginPage.enterPassword('wrong-password');
    await loginPage.clickSubmit();
    
    // Wait for the page to process the response
    await page.waitForTimeout(1000);
    
    // Check for error message - adjust selector based on actual page structure
    await expect(page.locator('#error')).toBeVisible();
    // OR try alternative selectors if the above fails:
    // await expect(page.locator('text=Your username is invalid!')).toBeVisible();
  });
});
