const homePage = require('../../pages/homePage')

describe('Subscription on the bottom of the home page', () => {
    it('TC10: Verify Subscription in home page', () => {
        homePage.open()
        homePage.elements.heroText().should('be.visible')

        cy.scrollTo('bottom')

        homePage.elements.subscriptionTitle().should('be.visible')
        
        const email = 'romatest123@test.com'
        homePage.makeSubscription(email)
        
        homePage.elements.successSubscriptionMessage().should('be.visible')

        
    });
})

