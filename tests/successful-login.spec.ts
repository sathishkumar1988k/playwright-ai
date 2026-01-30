// spec: specs/login-happy-path.plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Login Happy Path Scenarios', () => {
  test('Successful Login with Valid Credentials', async ({ page }) => {
    // 1. Navigate to the login page at https://practicetestautomation.com/practice-test-login/
    await page.goto('https://practicetestautomation.com/practice-test-login/');

    // 2. Enter valid username 'student' in the Username field
    await page.getByRole('textbox', { name: 'Username' }).fill('student');

    // 3. Enter valid password 'Password123' in the Password field
    await page.getByRole('textbox', { name: 'Password' }).fill('Password123');

    // 4. Click the Submit button
    await page.getByRole('button', { name: 'Submit' }).click();

    // 5. Verify successful login page content
    await expect(page.getByRole('heading', { name: 'Logged In Successfully' })).toBeVisible();
    await expect(page.getByText('Congratulations student. You successfully logged in!')).toBeVisible();
    await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();
  });
});