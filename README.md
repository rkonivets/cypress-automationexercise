# Cypress Automation Framework — AutomationExercise.com

This project contains a comprehensive collection of **UI and API automated tests**
for the demo website https://automationexercise.com, implemented using **Cypress**.

The project demonstrates practical automation skills across **end-to-end UI testing**
and **REST API testing**, with a clean structure, readable tests, and realistic scenarios.

---

## Project Goals

- Demonstrate real-world Cypress automation skills  
- Cover **UI and API layers** of a public demo application  
- Use clean, readable, junior-friendly test code  
- Apply best practices where reasonable, without overengineering  

---

## Project Structure

```text
cypress/
  e2e/
    api/
      brands.cy.js
      products.cy.js
      searchProduct.cy.js
      authLogin.cy.js
      usersAccount.cy.js
    ui/
      auth/
      cart/
      checkout/
      contact/
      products/
      scroll/
      sidebar/
      smoke/
      subscription/
  pages/        - Page Object Model (POM) classes
  fixtures/     - Test data and upload files
  support/
    commands.js - Custom commands
    e2e.js      - Global Cypress setup

cypress.config.js
package.json
README.md
Implemented UI Test Cases
Authentication
TC1 — Register a new user

TC2 — Login with correct email and password

TC3 — Login with incorrect email/password (negative case)

TC4 — Logout user

TC5 — Register with an existing email (negative case)

Contact Us
TC6 — Submit Contact Us form including file upload and alert confirmation

Navigation & Pages
TC7 — Verify Test Cases page opens successfully

Products
TC8 — Verify All Products page and product detail page

TC9 — Verify Search Product

TC10 — Verify Subscription in Home Page

Functional Scenarios
TC25 — Verify Scroll Down functionality

TC26 — Verify Scroll Up functionality (with and without arrow button)

Implemented API Test Cases
Products & Brands API
API 1 — GET All Products List

API 2 — POST to All Products List (method not supported)

API 3 — GET All Brands List

API 4 — PUT/POST to All Brands List (method not supported)

Search Product API
API 5 — POST Search Product (positive case)

API 6 — POST Search Product without search_product parameter (negative case)

Verify Login API
API 7 — Verify Login with valid details

API 8 — Verify Login without email parameter

API 9 — DELETE Verify Login (method not supported)

API 10 — Verify Login with invalid details

User Account API (Full CRUD Flow)
API 11 — POST Create/Register User Account

API 12 — DELETE User Account

API 13 — PUT Update User Account

API 14 — GET User Details by Email

User data is generated dynamically using timestamps to ensure test isolation and repeatability.

Technologies & Key Features
Cypress

JavaScript (ES6)

UI + API testing in one framework

Page Object Model (POM)

REST API testing with cy.request

Dynamic test data generation

File upload testing using selectFile

Alert/confirmation handling

Clean, readable test structure

Realistic positive and negative scenarios

How to Run the Tests
Install dependencies:

bash
Копировать код
npm install
Open Cypress Test Runner (UI mode):

bash
Копировать код
npx cypress open
Run all tests in headless mode:

bash
Копировать код
npx cypress run
Author
Roman Konivets — QA Engineer