const homePage = require('../../../pages/homePage');
const testCasesPage = require('../../../pages/testCasesPage');


describe ('Test Cases page is opened', () => {
    it('TC7: Verify Test Cases Page', () => {
        homePage.open()
        homePage.elements.heroText().should('be.visible')

        homePage.elements.testCasesLink().click()
        testCasesPage.elements.testCasesTitle().should('be.visible')
    });
})