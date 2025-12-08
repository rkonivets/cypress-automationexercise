class PaymentPage {
    elements = {
        nameOnCardInput: () => cy.get('[data-qa="name-on-card"]'),
        CardNumberInput: () => cy.get('[data-qa="card-number"]'),
        cvcNumberInput: () => cy.get('[data-qa="cvc"]'),
        expirationMonthInput: () => cy.get('[data-qa="expiry-month"]'),
        expirationYearInput: () => cy.get('[data-qa="expiry-year"]'),
        payAndConfirmOrderButton: () => cy.get('[data-qa="pay-button"]'),
        orderSuccessfullMessage: () => cy.contains('Congratulations! Your order has been confirmed!')
    }

    enterPaymentDetailsAndConfirm() {
        this.elements.nameOnCardInput().type('Roman TestCard')
        this.elements.CardNumberInput().type('7777 8888 9999 3333')
        this.elements.cvcNumberInput().type('888')
        this.elements.expirationMonthInput().type('12')
        this.elements.expirationYearInput().type('2035')
        this.elements.payAndConfirmOrderButton().click()

    }
}

module.exports = new PaymentPage