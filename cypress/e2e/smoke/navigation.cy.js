describe('Navigation', () => {
  it('should open Test Cases page from header', () => {
    cy.visit('/')

    cy.contains('a', 'Test Cases').click()

    cy.url().should('include', '/test_cases')
    cy.contains('h2', 'Test Cases').should('be.visible')
  })
})