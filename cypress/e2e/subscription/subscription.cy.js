const homePage = require('../../pages/homePage')

describe('Check subscription functionality', () => {
    it('TC10: Verify Subscription in home page', () => {
        homePage.openAndVerifyHomePage()

        cy.scrollTo('bottom')

        homePage.elements.subscriptionTitle().should('be.visible')

        const email = 'romatest123@test.com'
        homePage.makeSubscription(email)

        homePage.elements.successSubscriptionMessage().should('be.visible')


    });

    it('TC11:  Verify Subscription in Cart page', () => {
        homePage.openAndVerifyHomePage()
        homePage.elements.cartLink().click()

        homePage.elements.subscriptionTitle().should('be.visible')

        const email = 'romatest222@test.com'
        homePage.makeSubscription(email)
        homePage.elements.successSubscriptionMessage().should('be.visible')
    });
})

