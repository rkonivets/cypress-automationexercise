const homePage = require("../../../pages/homePage");


describe ('Verify scroll functionality', () => {
    it('TC25: Verify Scroll Up using Arrow button and Scroll Down functionality', () => {
         homePage.openAndVerifyHomePage()

         homePage.scrollToTheBottom()
         homePage.elements.subscriptionTitle().should('be.visible')

         homePage.elements.scrollUpArrowButton().click()
         homePage.elements.heroText().should('be.visible')

    });

    it('TC26: Verify Scroll Up without Arrow button and Scroll Down functionality', () => {
         homePage.openAndVerifyHomePage()

          homePage.scrollToTheBottom()
          homePage.elements.subscriptionTitle().should('be.visible')

          homePage.scrollToTheTop()
          homePage.elements.heroText().should('be.visible')



    });

})