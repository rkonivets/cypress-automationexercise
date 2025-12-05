class RegisterPage {
  elements = {
    // block "New User Signup!"
    nameInput: () => cy.get('[data-qa="signup-name"]'),
    emailInput: () => cy.get('[data-qa="signup-email"]'),
    signupButton: () => cy.get('[data-qa="signup-button"]'),
  }

  open() {
    // open login/registration page
    cy.visit('/login')
  }

  startSignup(name, email) {
    this.elements.nameInput().type(name)
    this.elements.emailInput().type(email)
    this.elements.signupButton().click()
  }
}

module.exports = new RegisterPage()