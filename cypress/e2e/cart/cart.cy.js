const cartPage = require("../../pages/cartPage");
const homePage = require("../../pages/homePage");
const productsPage = require("../../pages/productsPage");

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
})
