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
        searchresultProduct: (productName) => cy.get('.product-image-wrapper').contains(productName),
        viewCartButton: () => cy.contains('View Cart'),
        continueShoppingButton: () => cy.get('.btn.btn-success.close-modal.btn-block'),
        productCards: () => cy.get('.features_items .product-image-wrapper'),

        // Elements in the opened product page
        productName: () => cy.contains('h2', 'Blue Top'),
        productCategory: () => cy.get('.product-information p').contains('Category'),
        productPrice: () => cy.get('.product-information span span'),
        productAvailability: () => cy.get('.product-information p').contains('Availability'),
        productCondition: () => cy.get('.product-information p').contains('Condition'),
        productBrand: () => cy.get('.product-information p').contains('Brand'),
        productQuantity: () => cy.get('[id="quantity"]'),
        addToCartButton: () => cy.contains('Add to cart'),
        // WRITE YOUR REVIEW section
        writeYourReviewTitle: () => cy.contains('Write Your Review'),
        yourNameInput: () => cy.get('[id="name"]'),
        emailAddressInput: () => cy.get('[id="email"]'),
        addReviewHereTextArea: () => cy.get('[id="review"]'),
        submitButton: () => cy.get('[id="button-review"]'),
        thankYouForReviewSuccessMessage: () => cy.contains('Thank you for your review.'),


    }

    open() {
        cy.visit('/products')
    }
    writeReviewAboutProductAndSubmit() {
        this.elements.yourNameInput().type('RomaTestName')
        this.elements.emailAddressInput().type('testroma321@test.com')
        this.elements.addReviewHereTextArea().type('This is some test review message!')
        this.elements.submitButton().click()
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
