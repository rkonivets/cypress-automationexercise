class HomePage {
    elements = {
        heroText: () => cy.contains('Full-Fledged practice website for Automation Engineers'),
        signupLoginLink: () => cy.contains('Signup / Login'),
        contactUsLink: () => cy.contains('Contact us'),
        testCasesLink: () => cy.contains('Test Cases'),
        productsLink: () => cy.contains(' Products'),
        subscriptionTitle: () => cy.contains(/subscription/i),
        yourEmailAddressInput: () => cy.get('[id="susbscribe_email"]'),
        submitSubscriptionButton: () => cy.get('[id="subscribe"]'),
        successSubscriptionMessage: () => cy.contains('You have been successfully subscribed!'),
        cartLink: () => cy.contains('Cart'),
        firstProductCard: () => cy.get('.features_items .product-image-wrapper').first(),
        loggedInAsUser: (username) => cy.get('a').contains(`Logged in as ${username}`),
        deleteAccountLink: () => cy.contains('Delete Account'),
        accountDeletedText: () => cy.contains(/ACCOUNT DELETED!/i),
        recommendedItemsTitle: () => cy.contains('recommended items'),
        addFirstVisibleRecommended: () =>
            cy.get('.recommended_items a.add-to-cart:visible').first(),
        scrollUpArrowButton: () => cy.get('[class="fa fa-angle-up"]'),


    }

    open() {
        cy.visit('/')
    }

    scrollToTheBottom() {
        cy.scrollTo('bottom')
    }
    scrollToTheTop() {
        cy.scrollTo('top')
    }

    makeSubscription(email) {
        this.elements.yourEmailAddressInput().type(email)
        this.elements.submitSubscriptionButton().click()
    }

    openAndVerifyHomePage() {
        cy.visit('/')
        this.elements.heroText().should('be.visible')
    }

    deleteAccountAndVerifyMessage() {
        this.elements.deleteAccountLink().click()
        this.elements.accountDeletedText().should('be.visible')
    }
}

module.exports = new HomePage()