# Practice Test Automation Login - Happy Path Test Plan

## Application Overview

This test plan covers the happy path scenarios for the Practice Test Automation login functionality at https://practicetestautomation.com/practice-test-login/. The application provides a simple login form that authenticates users and redirects them to a success page with logout functionality.

## Test Scenarios

### 1. Login Happy Path Scenarios

**Seed:** `tests/seed.spec.ts`

#### 1.1. Successful Login with Valid Credentials

**File:** `tests/login-happy-path/successful-login.spec.ts`

**Steps:**
  1. Navigate to the login page at https://practicetestautomation.com/practice-test-login/
    - expect: Page loads successfully with title 'Test Login | Practice Test Automation'
    - expect: Login form is visible with Username and Password fields
    - expect: Submit button is present and clickable
    - expect: Page displays credentials hint: 'Username: student, Password: Password123'
  2. Enter valid username 'student' in the Username field
    - expect: Username field accepts the input
    - expect: Text 'student' is displayed in the Username field
    - expect: No validation errors appear
  3. Enter valid password 'Password123' in the Password field
    - expect: Password field accepts the input
    - expect: Password text is masked/hidden for security
    - expect: No validation errors appear
  4. Click the Submit button
    - expect: Page redirects to the success page
    - expect: URL changes to 'https://practicetestautomation.com/logged-in-successfully/'
    - expect: Page title changes to 'Logged In Successfully | Practice Test Automation'
  5. Verify successful login page content
    - expect: Page displays heading 'Logged In Successfully'
    - expect: Success message 'Congratulations student. You successfully logged in!' is visible
    - expect: Log out button/link is present and clickable

#### 1.2. Successful Logout Functionality

**File:** `tests/login-happy-path/successful-logout.spec.ts`

**Steps:**
  1. Complete successful login process (prerequisite: login with valid credentials)
    - expect: User is successfully logged in
    - expect: Success page is displayed
    - expect: Log out link is visible
  2. Click the 'Log out' link
    - expect: Page redirects back to the login page
    - expect: URL changes to 'https://practicetestautomation.com/practice-test-login/'
    - expect: Login form is displayed again
    - expect: Username and Password fields are empty/cleared
  3. Verify logout state
    - expect: User is successfully logged out
    - expect: Login form is ready for new login attempt
    - expect: No session data persists from previous login

#### 1.3. Complete Login-Logout Cycle

**File:** `tests/login-happy-path/complete-login-cycle.spec.ts`

**Steps:**
  1. Navigate to the login page
    - expect: Login page loads successfully
    - expect: All form elements are present and functional
  2. Complete successful login with valid credentials (student/Password123)
    - expect: Login succeeds
    - expect: Success page is displayed with confirmation message
    - expect: User session is established
  3. Click logout to end the session
    - expect: Logout succeeds
    - expect: User is redirected back to login page
    - expect: Session is terminated
  4. Attempt to login again with the same valid credentials
    - expect: Second login attempt succeeds
    - expect: Application handles multiple login cycles correctly
    - expect: No residual state issues from previous session

#### 1.4. Page Navigation and UI Elements Verification

**File:** `tests/login-happy-path/ui-elements-verification.spec.ts`

**Steps:**
  1. Navigate to the login page
    - expect: Page loads without errors
    - expect: All navigation menu items are present (Home, Practice, Courses, Blog, Contact)
    - expect: Practice Test Automation logo is visible and clickable
  2. Verify form elements accessibility and labels
    - expect: Username field has proper label 'Username'
    - expect: Password field has proper label 'Password'
    - expect: Submit button is clearly labeled 'Submit'
    - expect: Form elements are properly associated with their labels
  3. Verify instructional content
    - expect: Page heading 'Test login' is clearly visible
    - expect: Instructions about the login functionality are displayed
    - expect: Valid credentials are clearly communicated to users
    - expect: Test case examples are provided for reference
  4. Complete login and verify success page elements
    - expect: Success page maintains consistent navigation header
    - expect: Content area shows appropriate success message
    - expect: Footer information is consistent across pages
