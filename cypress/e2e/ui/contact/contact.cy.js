const homePage = require('../../../pages/homePage')
const contactUsPage = require('../../../pages/contactUsPage');

describe('should submit contact us form successfully', () => {
    it('TC6: Contact Us Form', () => {
        homePage.openAndVerifyHomePage()

        homePage.elements.contactUsLink().click()

        contactUsPage.elements.contactUsTitle().should('be.visible')

        const name = 'RomaTets'
        const email = 'romatest@TextDecoderStream.com'
        const subject = 'This is test subject'
        const message = 'Hello world'

        contactUsPage.fillForm(name, email, subject, message)


        contactUsPage.uploadFile('cypress/fixtures/uploads/testFile.png')
        contactUsPage.submit()

        cy.on('window:confirm', () => true)

        contactUsPage.elements.successMessage().should('be.visible')

        contactUsPage.elements.homeButton().click()

        homePage.elements.heroText().should('be.visible')

    });
})