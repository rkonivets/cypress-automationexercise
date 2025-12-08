const accountInfoPage = require("../../pages/accountInfoPage");
const cartPage = require("../../pages/cartPage");
const checkOutPage = require("../../pages/checkOutPage");
const homePage = require("../../pages/homePage");
const paymentPage = require("../../pages/paymentPage");
const productsPage = require("../../pages/productsPage");
const registerPage = require("../../pages/registerPage");



describe('Checkout flow', () => {
    it('TC14: Place Order: Register while Checkout', () => {
        homePage.openAndVerifyHomePage()

        productsPage.hoverOverFirstProductAndAddToCart()
        productsPage.clickContinueShoppingButton()
        productsPage.hoverOverSecondProductAndAddToCart()
        productsPage.clickContinueShoppingButton()

        homePage.elements.cartLink().click()
        cartPage.elements.cartPageIsOpened().should('be.visible')

        cartPage.elements.procceedToCheckoutButton().click()
        cartPage.elements.registerLoginLink().click()

        const timestamp = Date.now()
        const name = 'RomName'
        const email = `romanqa+${timestamp}@test.com`

        registerPage.startSignup(name, email)
        accountInfoPage.fillBasicInfo()
        accountInfoPage.fillAddress()
        accountInfoPage.submit()

        accountInfoPage.verifyAndContinueCreationAccount()
        homePage.elements.loggedInAsUser(name).should('be.visible')

        homePage.elements.cartLink().click()
        cartPage.elements.procceedToCheckoutButton().click()

        checkOutPage.verifyAddressDetails()
        checkOutPage.verifyOrderReview()

        checkOutPage.enterCommentAndClickPlaceOrderBtn('Test comment')
        
        paymentPage.enterPaymentDetailsAndConfirm()
        paymentPage.elements.orderSuccessfullMessage().should('be.visible')









    });
})