class PaymentPage {
  elements = {
    nameOnCardInput: () => cy.get('[data-qa="name-on-card"]'),
    CardNumberInput: () => cy.get('[data-qa="card-number"]'),
    cvcNumberInput: () => cy.get('[data-qa="cvc"]'),
    expirationMonthInput: () => cy.get('[data-qa="expiry-month"]'),
    expirationYearInput: () => cy.get('[data-qa="expiry-year"]'),
    payAndConfirmOrderButton: () => cy.get('[data-qa="pay-button"]'),
    orderSuccessfullMessage: () => cy.contains('Congratulations! Your order has been confirmed!'),
    downloadInvoiceButton: () => cy.contains('Download Invoice'),
    continueButton: () => cy.contains('Continue'),
  }

  enterPaymentDetailsAndConfirm() {
    this.elements.nameOnCardInput().type('Roman TestCard')
    this.elements.CardNumberInput().type('7777 8888 9999 3333')
    this.elements.cvcNumberInput().type('888')
    this.elements.expirationMonthInput().type('12')
    this.elements.expirationYearInput().type('2035')
    this.elements.payAndConfirmOrderButton().click()

  }

  verifyInvoiceDownloaded() {
    const invoicePath = 'cypress/downloads/invoice.txt'

    cy.readFile(invoicePath, { timeout: 15000 }).should('exist')
  }

  deleteInvoiceFile() {
    cy.task('deleteFile', 'invoice.txt')
  }





}

module.exports = new PaymentPage