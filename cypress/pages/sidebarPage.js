class SidebarPage {
    elements = {
        categoryTitle: () => cy.get('[class="panel-group category-products"]'),
        brandsTitle: () => cy.get('[class="brands_products"]'),
        womenDressProductsTitle: () => cy.contains('Women - Dress Products'),
        menJeansProductsTitle: () => cy.contains('Men - Jeans Products'),
        brandBabyhugProductsTitle: () => cy.contains('Brand - Babyhug Products'),
        brandPoloProductsTitle: () => cy.contains('Brand - Polo Products'),

        //CATEGORY
        womenCategory: () => cy.contains('Women'),
        menCategory: () => cy.contains('Men'),
        //SUBCATEGORY
        dressSubCategory: () => cy.contains('Dress'),
        jeansSubCategory: () => cy.contains('Jeans'),

        //BRANDS
        babyhugBrand: () => cy.contains('Babyhug'),
        poloBrand: () => cy.contains('Polo'),
    }

    verifyCategorySidebar() {
        this.elements.categoryTitle()
            .should('contain.text', 'Women')
            .and('contain.text', 'Men')
            .and('contain.text', 'Kids')

    }

    verifyBrandsSidebar() {
        this.elements.brandsTitle()
            .should('contain.text', 'Polo')
            .and('contain.text', 'H&M')
            .and('contain.text', 'Madame')
            .and('contain.text', 'Mast & Harbour')
            .and('contain.text', 'Babyhug')
            .and('contain.text', 'Allen Solly Junior')
            .and('contain.text', 'Kookie Kids')
            .and('contain.text', 'Biba')
    }
}

module.exports = new SidebarPage()