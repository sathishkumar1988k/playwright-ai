import { Page, expect } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  
  // URLs
  readonly loginUrl = 'https://practicetestautomation.com/practice-test-login/';
  readonly successUrl = 'https://practicetestautomation.com/logged-in-successfully/';

  constructor(page: Page) {
    this.page = page;
  }

  // Locators
  get pageHeading() {
    return this.page.getByText('Test login');
  }

  get usernameField() {
    return this.page.getByRole('textbox', { name: 'Username' });
  }

  get passwordField() {
    return this.page.getByRole('textbox', { name: 'Password' });
  }

  get submitButton() {
    return this.page.getByRole('button', { name: 'Submit' });
  }

  get usernameHint() {
    return this.page.getByText('Username: student');
  }

  get passwordHint() {
    return this.page.getByText('Password: Password123');
  }

  get successHeading() {
    return this.page.getByText('Logged In Successfully');
  }

  get successMessage() {
    return this.page.getByText('Congratulations student. You successfully logged in!');
  }

  get logoutLink() {
    return this.page.getByRole('link', { name: 'Log out' });
  }

  // Navigation Actions
  async navigateToLoginPage() {
    await this.page.goto(this.loginUrl);
  }

  // Form Actions
  async enterUsername(username: string) {
    await this.usernameField.fill(username);
  }

  async enterPassword(password: string) {
    await this.passwordField.fill(password);
  }

  async clickSubmit() {
    await this.submitButton.click();
  }

  async performLogin(username: string = 'student', password: string = 'Password123') {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickSubmit();
  }

  // Verification Methods
  async verifyLoginPageLoaded() {
    await expect(this.pageHeading).toBeVisible();
  }

  async verifyFormElements() {
    await expect(this.usernameField).toBeVisible();
    await expect(this.passwordField).toBeVisible();
    await expect(this.submitButton).toBeVisible();
  }

  async verifyCredentialsHints() {
    await expect(this.usernameHint).toBeVisible();
    await expect(this.passwordHint).toBeVisible();
  }

  async verifyUsernameInput(expectedValue: string) {
    await expect(this.usernameField).toHaveValue(expectedValue);
  }

  async verifyPasswordInput(expectedValue: string) {
    await expect(this.passwordField).toHaveValue(expectedValue);
  }

  async verifySuccessPageContent() {
    await expect(this.successHeading).toBeVisible();
    await expect(this.successMessage).toBeVisible();
    await expect(this.logoutLink).toBeVisible();
  }

  async verifyLoginError() {
    // Wait for error message to appear
    await expect(this.page.locator('.error-message')).toBeVisible();
    await expect(this.page.locator('text=Invalid credentials')).toBeVisible();
  }

  async verifyLoginErrorBySelector(errorSelector: string = '.error') {
    await expect(this.page.locator(errorSelector)).toBeVisible();
  }

  // Combined Verification Methods
  async verifyLoginPageElements() {
    await this.verifyLoginPageLoaded();
    await this.verifyFormElements();
    await this.verifyCredentialsHints();
  }

  async verifyLoginSuccess() {
    await this.verifySuccessPageContent();
  }

  // Complete Workflows
  async completeSuccessfulLogin(username: string = 'student', password: string = 'Password123') {
    await this.navigateToLoginPage();
    await this.verifyLoginPageElements();
    await this.performLogin(username, password);
    await this.verifyUsernameInput(username);
    await this.verifyPasswordInput(password);
    await this.verifyLoginSuccess();
  }
}