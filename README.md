# Playwright AI Test Automation

A demonstration of AI-powered test automation using Playwright with planning, generation, and healing capabilities.

## Project Overview

This repository showcases an end-to-end workflow for creating robust test automation using AI-powered tools that can:
- **Plan** comprehensive test scenarios
- **Generate** reliable test scripts 
- **Heal** and fix failing tests automatically

## Target Application

We're testing the login functionality of: https://practicetestautomation.com/practice-test-login/

**Valid Test Credentials:**
- Username: `student`
- Password: `Password123`

## Repository Structure

```
playwright-ai/
├── specs/
│   ├── login-happy-path.plan.md     # Test plan created by Planner
│   └── README.md                    # Specs documentation
├── tests/
│   ├── example.spec.ts              # Default Playwright example
│   ├── seed.spec.ts                 # Base seed file for test generation
│   └── successful-login.spec.ts     # Generated test script
├── playwright.config.ts             # Playwright configuration
├── package.json                     # Project dependencies
└── README.md                        # This file
```

## AI Test Automation Workflow

### 1. 🎯 **Planner Phase**
The AI Planner analyzes the target application and creates comprehensive test plans.

**What we did:**
- Navigated to the login page
- Explored the interface and functionality
- Identified the happy path user flow
- Created a detailed test plan with 4 test scenarios

**Generated:** [specs/login-happy-path.plan.md](specs/login-happy-path.plan.md)

**Test Scenarios Created:**
1. **Successful Login with Valid Credentials** - Core login functionality
2. **Successful Logout Functionality** - Session termination 
3. **Complete Login-Logout Cycle** - Full user journey
4. **Page Navigation and UI Elements Verification** - UI validation

### 2. 🔧 **Generator Phase**
The AI Generator converts test plans into executable Playwright test scripts.

**What we did:**
- Selected the "Successful Login with Valid Credentials" scenario
- Set up page interaction and executed each test step
- Generated reliable locators using Playwright best practices
- Created comprehensive assertions for validation

**Generated:** [tests/successful-login.spec.ts](tests/successful-login.spec.ts)

**Key Features:**
- Uses robust `getByRole()` locators
- Implements proper Playwright assertions
- Follows testing best practices
- Clear step-by-step comments

### 3. 🩺 **Healer Phase**  
The AI Healer identifies and fixes failing tests automatically.

**What we encountered:**
- Test was failing with timeout error
- Root cause: Incorrect button locator (`'Login'` instead of `'Submit'`)

**How it was healed:**
- Ran the failing test to identify the issue
- Used debug mode to inspect the actual page elements
- Found the correct button text was "Submit"
- Updated the locator from `name: 'Login'` to `name: 'Submit'`
- Verified the fix by re-running the test

**Result:** ✅ Test now passes on all browsers (Chromium, Firefox, WebKit)

## Getting Started

### Prerequisites
- Node.js (16+)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd playwright-ai
```

2. Install dependencies:
```bash
npm install
```

3. Install Playwright browsers:
```bash
npx playwright install
```

### Running Tests

Execute all tests:
```bash
npx playwright test
```

Run specific test:
```bash
npx playwright test tests/successful-login.spec.ts
```

Run with UI mode:
```bash
npx playwright test --ui
```

Generate test report:
```bash
npx playwright show-report
```

## Test Plan Details

Our comprehensive test plan covers:

### Happy Path Scenarios
- ✅ Valid credential authentication
- ✅ Successful page redirection  
- ✅ Success message validation
- ✅ Logout functionality
- ✅ UI element verification
- ✅ Complete user flow validation

### Technical Implementation
- **Robust Locators**: Uses Playwright's `getByRole()` for reliable element selection
- **Comprehensive Assertions**: Validates all critical page elements
- **Cross-browser Testing**: Runs on Chromium, Firefox, and WebKit
- **No Flaky Waits**: Avoids unreliable timing-based waits

## Key Learnings

1. **AI Planning** creates comprehensive test scenarios that cover edge cases
2. **AI Generation** produces reliable, maintainable test code following best practices
3. **AI Healing** can quickly identify and fix common test failures
4. **The workflow** significantly reduces manual test creation and maintenance effort

## Test Results

Current test status: ✅ **All tests passing**

| Browser | Status | Duration |
|---------|--------|----------|
| Chromium | ✅ Pass | 3.2s |
| Firefox | ✅ Pass | 3.9s |  
| WebKit | ✅ Pass | 2.8s |

## Next Steps

To extend this project:

1. **Generate remaining scenarios** from the test plan:
   - Successful Logout Functionality
   - Complete Login-Logout Cycle  
   - UI Elements Verification

2. **Add negative test cases** for error scenarios:
   - Invalid username testing
   - Invalid password testing
   - Empty field validation

3. **Implement data-driven testing** with multiple credential sets

4. **Add API testing** for backend validation

5. **Integrate CI/CD pipeline** for automated test execution

## Contributing

This project demonstrates AI-powered test automation capabilities. Feel free to:
- Add more test scenarios
- Improve existing tests
- Extend to other applications
- Share feedback and suggestions

## License

This project is for educational and demonstration purposes.