class HomePage {
    elements = {
        heroText: () => cy.contains('Full-Fledged practice website for Automation Engineers'),
        signupLoginLink: () => cy.contains('Signup / Login'),
        contactUsLink: () => cy.contains('Contact us')
    }

    open() {
        cy.visit('/')       // baseUrl + '/'
    }
}

module.exports = new HomePage()