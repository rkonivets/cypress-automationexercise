const cartPage = require("../../../pages/cartPage");
const homePage = require("../../../pages/homePage");
const productsPage = require("../../../pages/productsPage");

describe('Check Cart functionality', () => {
    it('TC12: Add Products in Cart', () => {
        homePage.openAndVerifyHomePage()
        homePage.elements.productsLink().click()

        productsPage.hoverOverFirstProductAndAddToCart()
        productsPage.clickContinueShoppingButton()

        productsPage.hoverOverSecondProductAndAddToCart()
        productsPage.clickViewCartButton()

        cartPage.verifyTwoProductsInCart()
        cartPage.verifyPricesQuantitiesAndTotals()
    });

    it('TC13:  Verify Product quantity in Cart', () => {
        homePage.openAndVerifyHomePage()

        productsPage.elements.firstProductViewButton().click()

        productsPage.setProductQuantity(4)
        productsPage.addCurrentProductToCart()

        productsPage.clickViewCartButton()

        cartPage.verifyProductQuantity(4)


    });

    it('TC17: Remove Products From Cart', () => {
        homePage.openAndVerifyHomePage()

        productsPage.hoverOverFirstProductAndAddToCart()
        productsPage.clickContinueShoppingButton()

        homePage.elements.cartLink().click()
        cartPage.elements.cartPageIsOpened().should('be.visible')

        cartPage.elements.removeProductButton().click()
        cartPage.elements.cartIsEmtyText().should('be.visible')

    });

    it('TC22: Add to cart from Recommended items', () => {
        homePage.openAndVerifyHomePage()

        cy.scrollTo('bottom')

        homePage.elements.recommendedItemsTitle().should('be.visible')

        homePage.elements.addFirstVisibleRecommended().click()

        productsPage.clickViewCartButton()

        cartPage.elements.cartPageIsOpened().should('be.visible')

        cartPage.verifyCartHasProducts()



    });





})
