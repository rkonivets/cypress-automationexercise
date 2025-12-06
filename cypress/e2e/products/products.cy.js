const homePage = require('../../pages/homePage');
const productsPage = require('../../pages/productsPage');
const ProductsPage = require('../../pages/productsPage');

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
        productsPage.elements.searchresultProduct().should('be.visible')


    });
})