

class CartPage {
    elements = {
        cartPageIsOpened: () => cy.contains('Shopping Cart'),
        cartRows: () => cy.get('#cart_info_table tbody tr'),
        productNames: () => cy.get('#cart_info_table tbody tr .cart_description h4 a'),
        procceedToCheckoutButton: () => cy.get('[class="btn btn-default check_out"]'),
        registerLoginLink: () => cy.get('a').contains('Register / Login'),
        cartIsEmtyText: () => cy.contains('Cart is empty!'),
        removeProductButton: () => cy.get('[class="cart_quantity_delete"]'),
        productIsDisplayedInCartPage: (productName) => cy.get('.cart_description').contains(productName),
        cartTable: () => cy.get('#cart_info_table'),
        cartTableRows: () => cy.get('#cart_info_table tbody tr'),
    }

    open() {
        cy.visit('/view_cart')
    }
    verifyCartHasProducts() {
    this.elements.cartTable().should('be.visible')
    
  }

    verifyTwoProductsInCart() {
        this.elements.cartRows().should('have.length', 2)

        this.elements.productNames().eq(0).should('contain', 'Blue Top')
        this.elements.productNames().eq(1).should('contain', 'Men Tshirt')
    }


    verifyPricesQuantitiesAndTotals() {

        this.elements.cartRows().eq(0).within(() => {
            cy.get('.cart_price').should('contain', 'Rs. 500')
            cy.get('.cart_quantity').should('contain', '1')
            cy.get('.cart_total').should('contain', 'Rs. 500')
        })


        this.elements.cartRows().eq(1).within(() => {
            cy.get('.cart_price').should('contain', 'Rs. 400')
            cy.get('.cart_quantity').should('contain', '1')
            cy.get('.cart_total').should('contain', 'Rs. 400')
        })
    }

    verifyProductQuantity(expectedQty) {
        cy.get('.cart_quantity').should('contain', expectedQty)
    }

}

module.exports = new CartPage()
