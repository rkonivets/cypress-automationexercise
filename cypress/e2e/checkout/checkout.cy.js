const accountInfoPage = require("../../pages/accountInfoPage");
const cartPage = require("../../pages/cartPage");
const checkOutPage = require("../../pages/checkOutPage");
const homePage = require("../../pages/homePage");
const loginPage = require("../../pages/loginPage");
const paymentPage = require("../../pages/paymentPage");
const productsPage = require("../../pages/productsPage");
const registerPage = require("../../pages/registerPage");



describe('Checkout flow', () => {
    // it('TC14: Place Order: Register while Checkout', () => {
    //     homePage.openAndVerifyHomePage()

    //     productsPage.hoverOverFirstProductAndAddToCart()
    //     productsPage.clickContinueShoppingButton()
    //     productsPage.hoverOverSecondProductAndAddToCart()
    //     productsPage.clickContinueShoppingButton()

    //     homePage.elements.cartLink().click()
    //     cartPage.elements.cartPageIsOpened().should('be.visible')

    //     cartPage.elements.procceedToCheckoutButton().click()
    //     cartPage.elements.registerLoginLink().click()

    //     const timestamp = Date.now()
    //     const name = 'RomName'
    //     const email = `romanqa+${timestamp}@test.com`

    //     registerPage.startSignup(name, email)
    //     accountInfoPage.fillBasicInfo()
    //     accountInfoPage.fillAddress()
    //     accountInfoPage.submit()

    //     accountInfoPage.verifyAndContinueCreationAccount()
    //     homePage.elements.loggedInAsUser(name).should('be.visible')

    //     homePage.elements.cartLink().click()
    //     cartPage.elements.procceedToCheckoutButton().click()

    //     checkOutPage.verifyAddressDetails()
    //     checkOutPage.verifyOrderReview()

    //     checkOutPage.enterCommentAndClickPlaceOrderBtn('Test comment')

    //     paymentPage.enterPaymentDetailsAndConfirm()
    //     paymentPage.elements.orderSuccessfullMessage().should('be.visible')

    //     homePage.deleteAccountAndVerifyMessage()

    // });

    // it('TC15: Place Order: Register before Checkout ', () => {
    //     homePage.openAndVerifyHomePage()

    //     homePage.elements.signupLoginLink().click()

    //     const timestamp = Date.now()
    //     const name = 'RomName'
    //     const email = `romanqa+${timestamp}@test.com`

    //     registerPage.startSignup(name, email)
    //     accountInfoPage.fillBasicInfo()
    //     accountInfoPage.fillAddress()
    //     accountInfoPage.submit()

    //     accountInfoPage.verifyAndContinueCreationAccount()
    //     homePage.elements.loggedInAsUser(name).should('be.visible')

    //     productsPage.hoverOverFirstProductAndAddToCart()
    //     productsPage.clickContinueShoppingButton()
    //     productsPage.hoverOverSecondProductAndAddToCart()
    //     productsPage.clickContinueShoppingButton()

    //     homePage.elements.cartLink().click()
    //     cartPage.elements.cartPageIsOpened().should('be.visible')

    //     cartPage.elements.procceedToCheckoutButton().click()

    //     checkOutPage.verifyAddressDetails()
    //     checkOutPage.verifyOrderReview()

    //     checkOutPage.enterCommentAndClickPlaceOrderBtn('Test comment')

    //     paymentPage.enterPaymentDetailsAndConfirm()
    //     paymentPage.elements.orderSuccessfullMessage().should('be.visible')

    //     homePage.deleteAccountAndVerifyMessage()

    // });

    // it('TC16: Place Order: Login before Checkout ', () => {
    //     const timestamp = Date.now()
    //     const name = `TestQA${timestamp}`
    //     const email = `romaqa${timestamp}@test.com`
    //     const password = `Test1234`

    //     homePage.openAndVerifyHomePage()

    //     registerPage.open()
    //     registerPage.startSignup(name, email)

    //     cy.contains(/enter account information/i).should('be.visible')

    //     accountInfoPage.fillBasicInfo(password)
    //     accountInfoPage.fillAddress()
    //     accountInfoPage.submit()

    //     cy.contains(/account created/i).should('be.visible')
    //     cy.contains('Continue').click()
    //     cy.contains('Logged in as').should('be.visible')

    //     cy.contains('Logout').click()
    //     loginPage.elements.loginTitle().should('be.visible')

    //     homePage.elements.signupLoginLink().click()

    //     loginPage.login(email, password)
    //     loginPage.elements.loggedInAsText(name).should('be.visible')

    //     productsPage.hoverOverFirstProductAndAddToCart()
    //     productsPage.clickContinueShoppingButton()
    //     productsPage.hoverOverSecondProductAndAddToCart()
    //     productsPage.clickContinueShoppingButton()

    //     homePage.elements.cartLink().click()
    //     cartPage.elements.cartPageIsOpened().should('be.visible')

    //     cartPage.elements.procceedToCheckoutButton().click()

    //     checkOutPage.verifyAddressDetails()
    //     checkOutPage.verifyOrderReview()

    //     checkOutPage.enterCommentAndClickPlaceOrderBtn('Test comment')

    //     paymentPage.enterPaymentDetailsAndConfirm()
    //     paymentPage.elements.orderSuccessfullMessage().should('be.visible')

    //     homePage.deleteAccountAndVerifyMessage()

    // });

    // it('TC23: Verify address details in checkout page', () => {
    //     const timestamp = Date.now()
    //     const name = `TestQA${timestamp}`
    //     const email = `romaqa${timestamp}@test.com`
    //     const password = `Test1234`

    //     homePage.openAndVerifyHomePage()

    //     registerPage.open()
    //     registerPage.startSignup(name, email)

    //     cy.contains(/enter account information/i).should('be.visible')

    //     accountInfoPage.fillBasicInfo(password)
    //     accountInfoPage.fillAddress()
    //     accountInfoPage.submit()

    //     cy.contains(/account created/i).should('be.visible')
    //     cy.contains('Continue').click()
    //     cy.contains('Logged in as').should('be.visible')

    //     productsPage.hoverOverFirstProductAndAddToCart()
    //     productsPage.clickContinueShoppingButton()
    //     productsPage.hoverOverSecondProductAndAddToCart()
    //     productsPage.clickContinueShoppingButton()

    //     homePage.elements.cartLink().click()
    //     cartPage.elements.cartPageIsOpened().should('be.visible')

    //     cartPage.elements.procceedToCheckoutButton().click()

    //     checkOutPage.verifyAddressDetails()

    //     homePage.deleteAccountAndVerifyMessage()

    // });

    it('TS24: Download Invoice after purchase order', () => {
        const timestamp = Date.now()
        const name = `TestQA${timestamp}`
        const email = `romaqa${timestamp}@test.com`
        const password = `Test1234`

        homePage.openAndVerifyHomePage()

        productsPage.hoverOverFirstProductAndAddToCart()
        productsPage.clickContinueShoppingButton()
        productsPage.hoverOverSecondProductAndAddToCart()
        productsPage.clickContinueShoppingButton()

        registerPage.open()
        registerPage.startSignup(name, email)

        cy.contains(/enter account information/i).should('be.visible')

        accountInfoPage.fillBasicInfo(password)
        accountInfoPage.fillAddress()
        accountInfoPage.submit()

        cy.contains(/account created/i).should('be.visible')
        cy.contains('Continue').click()
        cy.contains('Logged in as').should('be.visible')

        homePage.elements.cartLink().click()

        cartPage.elements.procceedToCheckoutButton().click()

        checkOutPage.verifyAddressDetails()
        checkOutPage.verifyOrderReview()

        checkOutPage.enterCommentAndClickPlaceOrderBtn('Test comment')

        paymentPage.enterPaymentDetailsAndConfirm()
        paymentPage.elements.orderSuccessfullMessage().should('be.visible')

        paymentPage.elements.downloadInvoiceButton().click()
        paymentPage.verifyInvoiceDownloaded()

        paymentPage.elements.continueButton().click()

        homePage.deleteAccountAndVerifyMessage()

        //paymentPage.deleteInvoiceFile()
        

    });
})