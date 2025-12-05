class AccountInfoPage {

  elements = {
    mrRadio: () => cy.get('#id_gender1'),
    passwordInput: () => cy.get('[data-qa="password"]'),
    daysSelect: () => cy.get('[data-qa="days"]'),
    monthsSelect: () => cy.get('[data-qa="months"]'),
    yearsSelect: () => cy.get('[data-qa="years"]'),
    firstName: () => cy.get('[data-qa="first_name"]'),
    lastName: () => cy.get('[data-qa="last_name"]'),
    address: () => cy.get('[data-qa="address"]'),
    country: () => cy.get('[data-qa="country"]'),
    state: () => cy.get('[data-qa="state"]'),
    city: () => cy.get('[data-qa="city"]'),
    zipcode: () => cy.get('[data-qa="zipcode"]'),
    mobile: () => cy.get('[data-qa="mobile_number"]'),
    createAccountButton: () => cy.get('[data-qa="create-account"]'),
  }

  fillBasicInfo(password = 'Test1234') {
    this.elements.mrRadio().click()
    this.elements.passwordInput().type(password)
    this.elements.daysSelect().select('10')
    this.elements.monthsSelect().select('June')
    this.elements.yearsSelect().select('1995')
  }

  fillAddress() {
    this.elements.firstName().type('Roman')
    this.elements.lastName().type('Tester')
    this.elements.address().type('Test Street 123')
    this.elements.country().select('Canada')
    this.elements.state().type('Ontario')
    this.elements.city().type('Toronto')
    this.elements.zipcode().type('12345')
    this.elements.mobile().type('1234567890')
  }

  submit() {
    this.elements.createAccountButton().click()
  }
}

module.exports = new AccountInfoPage()