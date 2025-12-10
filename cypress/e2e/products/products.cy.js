const cartPage = require('../../pages/cartPage');
const homePage = require('../../pages/homePage');
const productsPage = require('../../pages/productsPage');
const registerPage = require('../../pages/registerPage');
const accountInfoPage = require('../../pages/accountInfoPage');


describe('All Products and product details', () => {
    it('TC8: Verify All Products and product detail page', () => {
        homePage.openAndVerifyHomePage()

        homePage.elements.productsLink().click()
        productsPage.elements.allProductsTitle().should('be.visible')

        productsPage.elements.productsList().should('be.visible')
        productsPage.elements.firstProductViewButton().click()

        productsPage.elements.productName().should('be.visible')
        productsPage.elements.productCategory().should('be.visible')
        productsPage.elements.productPrice().should('be.visible')
        productsPage.elements.productAvailability().should('be.visible')
        productsPage.elements.productCondition().should('be.visible')
        productsPage.elements.productBrand().should('be.visible')




    });
    it('TC9: Search Product', () => {
        homePage.openAndVerifyHomePage()

        homePage.elements.productsLink().click()
        productsPage.elements.allProductsTitle().should('be.visible')

        const productName = 'Soft Stretch Jeans'
        productsPage.searchProduct(productName)

        productsPage.elements.searchedProductssTitle().should('be.visible')
        productsPage.elements.searchresultProduct(productName).should('be.visible')

    });

    it('TC20: Search Products and Verify Cart After Login', () => {
        homePage.openAndVerifyHomePage()

        homePage.elements.productsLink().click()
        productsPage.elements.allProductsTitle().should('be.visible')

        const productName = 'Pure Cotton Neon Green Tshirt'
        productsPage.searchProduct(productName)

        productsPage.elements.searchedProductssTitle().should('be.visible')
        productsPage.elements.searchresultProduct(productName).should('be.visible')

        productsPage.hoverOverFirstProductAndAddToCart()
        productsPage.clickViewCartButton()
        cartPage.elements.productIsDisplayedInCartPage(productName).should('be.visible')

        homePage.elements.signupLoginLink().click()

        const timestamp = Date.now()
        const name = `TestQA${timestamp}`
        const email = `romaqa${timestamp}@test.com`
        const password = `Test1234`

        registerPage.startSignup(name, email)

        cy.contains(/enter account information/i).should('be.visible')

        accountInfoPage.fillBasicInfo(password)
        accountInfoPage.fillAddress()
        accountInfoPage.submit()

        cy.contains(/account created/i).should('be.visible')
        cy.contains('Continue').click()
        cy.contains('Logged in as').should('be.visible')

        cartPage.open()

        cartPage.elements.productIsDisplayedInCartPage(productName).should('be.visible')

        homePage.deleteAccountAndVerifyMessage()

    });

    it('TC21: Add review on product', () => {
        homePage.openAndVerifyHomePage()

        homePage.elements.productsLink().click()
        productsPage.elements.allProductsTitle().should('be.visible')

        productsPage.elements.firstProductViewButton().click()
        productsPage.elements.writeYourReviewTitle().should('be.visible')

        productsPage.writeReviewAboutProductAndSubmit()
        productsPage.elements.thankYouForReviewSuccessMessage().should('be.visible')
      
    });
})