describe('Home page', () => {
  it('should open home page and show logo', () => {
    cy.visit('/')
    cy.url().should('include', 'automationexercise')
    cy.get('img[alt="Website for automation practice"]')
      .should('be.visible')
  })
})