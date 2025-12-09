const homePage = require('../../pages/homePage');
const sidebarPage = require('../../pages/sidebarPage')


describe('Verify sidebar CATEGORY and BRANDS', () => {
    it('TC18: View & Cart Brand Products', () => {
        homePage.openAndVerifyHomePage()

        sidebarPage.elements.categoryTitle().should('be.visible')
        sidebarPage.verifyCategorySidebar()

        sidebarPage.elements.womenCategory().click()
        sidebarPage.elements.dressSubCategory().click()
        sidebarPage.elements.womenDressProductsTitle().should('be.visible')

        sidebarPage.elements.menCategory().click()
        sidebarPage.elements.jeansSubCategory().click()
        sidebarPage.elements.menJeansProductsTitle().should('be.visible')

    });

    it('TC19: View & Cart Brand Products', () => {
        homePage.openAndVerifyHomePage()

        homePage.elements.productsLink().click()
        sidebarPage.verifyBrandsSidebar()

        sidebarPage.elements.babyhugBrand().click()
        sidebarPage.elements.brandBabyhugProductsTitle().should('be.visible')

        sidebarPage.elements.poloBrand().click()
        sidebarPage.elements.brandPoloProductsTitle().should('be.visible')

    });
}) 