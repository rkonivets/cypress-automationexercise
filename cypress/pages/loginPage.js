class LoginPage {
    elements = {
        loginTitle: () => cy.contains('Login to your account'),
        emailInput: () => cy.get('[data-qa="login-email"]'),
        passwordInput: () => cy.get('[data-qa="login-password"]'),
        loginButton: () => cy.get('[data-qa="login-button"]'),
        loggedInAsText: () => cy.contains('Logged in as'),
        errorMessage: () => cy.contains('Your email or password is incorrect!')

    }

    open() {
        cy.visit('/login')
    }

    login(email, password) {
        this.elements.emailInput().type(email)
        this.elements.passwordInput().type(password)
        this.elements.loginButton().click()

    }
}

module.exports = new LoginPage