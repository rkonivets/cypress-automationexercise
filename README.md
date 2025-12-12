Cypress Automation Framework — AutomationExercise.com
This project contains a comprehensive collection of automated UI and API tests for the demo website
https://automationexercise.com, implemented using Cypress.
The project demonstrates practical automation skills across end-to-end UI testing and REST API testing, with a clean structure, readable tests, and realistic test scenarios.
________________________________________
Project Goals
•	Demonstrate real-world Cypress automation skills
•	Cover UI and API layers of a public demo application
•	Use clean, readable test code (junior–middle friendly)
•	Apply best practices where reasonable, without overengineering
________________________________________
Project Structure
cypress/
  e2e/
    api/
      brands.cy.js          - Brands API tests
      products.cy.js        - Products API tests
      searchProduct.cy.js   - Search Product API tests
      authLogin.cy.js       - Verify Login API tests
      usersAccount.cy.js    - User Account API tests (CRUD)
    auth/
      login.cy.js           - UI Login tests
      register.cy.js        - UI Registration tests
    contact/
      contact.cy.js         - Contact Us form tests
    products/
      products.cy.js        - Products UI tests
    cart/
      cart.cy.js            - Cart functionality tests
    checkout/
      checkout.cy.js        - Checkout tests
    smoke/
      home.cy.js            - Smoke tests
      navigation.cy.js      - Navigation tests
    sidebar/
      sidebar.cy.js         - Sidebar navigation tests
    subscription/
      subscription.cy.js    - Subscription tests
    scroll/
      scroll.cy.js          - Scroll functionality tests
  pages/
    *.js                    - Page Object Model (POM) classes
  fixtures/
    *.json                  - Test data and upload files
  support/
    commands.js             - Custom commands
    e2e.js                  - Global Cypress setup

cypress.config.js  
package.json  
README.md
________________________________________
Implemented UI Test Cases
Authentication
•	TC1 — Register a new user
•	TC2 — Login with correct email and password
•	TC3 — Login with incorrect email/password (negative case)
•	TC4 — Logout user
•	TC5 — Register with an existing email (negative case)
Contact Us
•	TC6 — Submit Contact Us form including file upload and alert confirmation
Navigation & Pages
•	TC7 — Verify Test Cases page opens successfully
Products
•	TC8 — Verify All Products page and product detail page
•	TC9 — Verify Search Product
•	TC10 — Verify Subscription in Home Page
UI Functional Scenarios
•	TC25 — Verify Scroll Down functionality
•	TC26 — Verify Scroll Up functionality (with and without arrow button)
________________________________________
Implemented API Test Cases
Products & Brands API
•	API 1 — GET All Products List
•	API 2 — POST To All Products List (method not supported)
•	API 3 — GET All Brands List
•	API 4 — PUT/POST To All Brands List (method not supported)
Search Product API
•	API 5 — POST To Search Product (positive case)
•	API 6 — POST To Search Product without search_product parameter (negative case)
Verify Login API
•	API 7 — Verify Login with valid details
•	API 8 — Verify Login without email parameter
•	API 9 — DELETE To Verify Login (method not supported)
•	API 10 — Verify Login with invalid details
User Account API (Full CRUD Flow)
•	API 11 — POST To Create/Register User Account
•	API 13 — PUT METHOD To Update User Account
•	API 14 — GET User Details by Email
•	API 12 — DELETE METHOD To Delete User Account
User data is generated dynamically using timestamps to ensure test isolation and repeatability.
________________________________________
Technologies & Key Features
•	Cypress
•	JavaScript (ES6)
•	UI + API testing in one framework
•	Page Object Model (POM)
•	REST API testing using cy.request
•	Dynamic test data generation
•	File upload testing using selectFile
•	Alert and confirmation handling
•	Clean, readable test structure
•	Minimal but practical assertions
•	Realistic positive and negative test scenarios
________________________________________
How to Run the Tests
Install dependencies
npm install
Open Cypress Test Runner (UI mode)
npx cypress open
Run all tests in headless mode
npx cypress run
________________________________________
Roadmap (Optional Improvements)
•	Add reporting (Allure / Mochawesome)
•	Extract reusable API helpers
•	Add environment-based configs
•	Add CI pipeline (GitHub Actions)
•	Extend API negative scenarios
•	Improve test data factories
________________________________________
Author
Roman Konivets — QA Engineer
This project is part of a personal automation portfolio and demonstrates hands-on experience with Cypress UI and API testing.

