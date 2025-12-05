class HomePage {
    elements = {
        heroText: () => cy.contains('Full-Fledged practice website for Automation Engineers'),
        signupLoginLink: () => cy.contains('Signup / Login'),
        contactUsLink: () => cy.contains('Contact us'),
        testCasesLink: () => cy.contains('Test Cases'),
        productsLink: () => cy.contains(' Products'),
        subscriptionTitle: () => cy.contains('Subscription'),
        yourEmailAddressInput: () => cy.get('[id="susbscribe_email"]'),
        submitSubscriptionButton: () => cy.get('[id="subscribe"]'),
        successSubscriptionMessage: () => cy.contains('You have been successfully subscribed!')
    }

    open() {
        cy.visit('/') 
    }
    makeSubscription(email) {
        this.elements.yourEmailAddressInput().type(email)
        this.elements.submitSubscriptionButton().click()
    }
}

module.exports = new HomePage()