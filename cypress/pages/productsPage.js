class ProductsPage {
    elements = {
        allProductsTitle: () => cy.contains('All Products'),
        productsList: () => cy.get('.features_items'),
        firstProductCard: () => cy.get('.features_items .product-image-wrapper').first(),
        firstProductViewButton: () =>
            cy.get('.features_items .product-image-wrapper').first().contains('View Product'),
        searchProductInput: () => cy.get('#search_product'),
        searchButton: () => cy.get('#submit_search'),
        searchedProductssTitle: () => cy.contains('Searched Products'),
        searchresultProduct: () => cy.get('.product-image-wrapper').contains('Soft Stretch Jeans'),
        viewCartButton: () => cy.contains('View Cart'),
        continueShoppingButton: () => cy.get('.btn.btn-success.close-modal.btn-block'),
        productCards: () => cy.get('.features_items .product-image-wrapper'),

        // elements in the opened product page
        productName: () => cy.contains('h2', 'Blue Top'),
        productCategory: () => cy.get('.product-information p').contains('Category'),
        productPrice: () => cy.get('.product-information span span'),
        productAvailability: () => cy.get('.product-information p').contains('Availability'),
        productCondition: () => cy.get('.product-information p').contains('Condition'),
        productBrand: () => cy.get('.product-information p').contains('Brand'),
        productQuantity: () => cy.get('[id="quantity"]'),
        addToCartButton: () => cy.contains('Add to cart'),
    }

    open() {
        cy.visit('/products')
    }

    searchProduct(productName) {
        this.elements.searchProductInput().type(productName)
        this.elements.searchButton().click()
    }


    addProductToCartByIndex(index) {
        this.elements.productCards()
            .eq(index)
            .trigger('mouseover')
            .within(() => {
                cy.contains('Add to cart').click()
            })
    }


    hoverOverFirstProductAndAddToCart() {
        this.addProductToCartByIndex(0)
    }


    hoverOverSecondProductAndAddToCart() {
        this.addProductToCartByIndex(1)
    }

    clickViewCartButton() {
        this.elements.viewCartButton().click()
    }

    clickContinueShoppingButton() {
        this.elements.continueShoppingButton().click()
    }

    setProductQuantity(quantity) {
        this.elements.productQuantity().clear().type(quantity)
    }

    addCurrentProductToCart() {
        this.elements.addToCartButton().click()
    }

}

module.exports = new ProductsPage()
