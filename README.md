Cypress Automation Framework — AutomationExercise.com

This project contains a collection of automated end-to-end tests for the demo website https://automationexercise.com, implemented using Cypress and the Page Object Model (POM) design pattern.

The goal of this project is to demonstrate practical automation skills, including UI testing, file upload handling, dynamic test data generation, and clean project structure.

Project Structure:
cypress/
  e2e/
    auth/              - Login and Registration test suites
    contact/           - Contact Us form tests
    smoke/             - Basic smoke tests
  pages/               - Page Object Model classes
  fixtures/            - Test data and upload files
  support/             - Commands and utilities
cypress.config.js
package.json
README.md

Implemented Test Cases:
Authentication:
- TC1 — Register a new user
- TC5 — Register with an existing email (negative case)
- TC2 — Login with correct email and password
- TC3 — Login with incorrect email/password (negative case)
- TC4 — Logout user

Contact Us:
- TC6 — Submit Contact Us form including file upload and alert confirmation

Technologies & Key Features:
- Cypress
- JavaScript (ES6)
- Page Object Model (POM) architecture
- Dynamic user creation using timestamps
- File upload testing using selectFile
- Alert/confirmation handling with cy.on('window:confirm')
- Regex-based text validation
- Modular and scalable test structure

How to Run the Tests:
Install dependencies:
npm install

Open Cypress Test Runner (UI mode):
npx cypress open

Run all tests in headless mode:
npx cypress run

Roadmap:
- Add remaining AutomationExercise test cases (TC7–TC26)
- Integrate Allure Reports or Mochawesome reporting
- Add reusable custom commands
- Improve utility functions (user creation, data generators)
- GitHub Actions CI/CD integration
- Environment-based configuration files

Author:
Roman Konivets — QA Engineer
This project is being actively developed as part of learning and advancing automation testing skills.

