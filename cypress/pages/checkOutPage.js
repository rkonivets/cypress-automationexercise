class CheckoutPage {
    elements = {
        deliveryAddressBlock: () => cy.contains('Your delivery address').closest('ul'),
        billingAddressBlock: () => cy.contains('Your billing address').closest('ul'),
        reviewOrderSection: () => cy.contains('Review Your Order').parent(),
        commentAboutOrderTextArea: () => cy.get('[class="form-control"]'),
        placeOrederButton: () => cy.get('[class="btn btn-default check_out"]')
    }

    enterCommentAndClickPlaceOrderBtn(comment) {
        this.elements.commentAboutOrderTextArea().type(comment)
        this.elements.placeOrederButton().click()
    }


    verifyAddressDetails() {
        this.elements.deliveryAddressBlock()
            .should('contain.text', 'Roman Tester')
            .and('contain.text', 'Test Street 123')
            .and('contain.text', 'Toronto')
            .and('contain.text', 'Ontario')
            .and('contain.text', '12345')
            .and('contain.text', 'Canada')
            .and('contain.text', '1234567890')

        this.elements.billingAddressBlock()
            .should('contain.text', 'Roman Tester')
            .and('contain.text', 'Test Street 123')
            .and('contain.text', 'Toronto')
            .and('contain.text', 'Ontario')
            .and('contain.text', '12345')
            .and('contain.text', 'Canada')
            .and('contain.text', '1234567890')
    }


    verifyOrderReview() {
        cy.contains('Blue Top').should('be.visible')
        cy.contains('Men Tshirt').should('be.visible')
        cy.contains('Rs. 500').should('be.visible')
        cy.contains('Rs. 400').should('be.visible')
        cy.contains( 'Rs. 900').should('be.visible')
    }
}

module.exports = new CheckoutPage()