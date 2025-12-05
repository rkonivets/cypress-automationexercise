class ProductsPage {
    elements = {
        allProductsTitle: () => cy.contains('All Products'),
        productsList: () => cy.get('.features_items'),
        firstProductCard: () => cy.get('.features_items .product-image-wrapper').first(),
        firstProductViewButton: () => cy.get('.features_items .product-image-wrapper')
            .first().contains('View Product'),
        searchProductInput: ()   => cy.get('[id="search_product"]'),
        searchButton: () => cy.get('[id="submit_search"]'),
        searchedProductssTitle: () => cy.contains('Searched Products'),
        searchresultProduct: () => cy.get('.product-image-wrapper').contains('Soft Stretch Jeans'),

        // elements on the product page
        productName: () => cy.contains('h2', 'Blue Top'),
        productCategory: () => cy.get('.product-information p').contains('Category'),
        productPrice: () => cy.get('.product-information span span'),
        productAvailability: () => cy.get('.product-information p').contains('Availability'),
        productCondition: () => cy.get('.product-information p').contains('Condition'),
        productBrand: () => cy.get('.product-information p').contains('Brand'),
    }

    open() {
        cy.visit('/products')
    }

    searchProduct(productName) {
        this.elements.searchProductInput().type(productName)
        this.elements.searchButton().click()
    }
}

module.exports = new ProductsPage()