describe('Search Product API', () => {

  it('API 5: Search product by keyword (positive case)', () => {
    cy.request({
      method: 'POST',
      url: 'https://automationexercise.com/api/searchProduct',
      form: true,
      body: {
        search_product: 'top'
      }
    }).then((response) => {

      expect(response.status).to.eq(200)

      const body = typeof response.body === 'string'
        ? JSON.parse(response.body)
        : response.body

      expect(body).to.have.property('responseCode', 200)
      expect(body).to.have.property('products')
      expect(body.products).to.be.an('array')
      expect(body.products.length).to.be.greaterThan(0)
    })
  })

  it('API 6: Search product without search_product parameter (negative case)', () => {
    cy.request({
      method: 'POST',
      url: 'https://automationexercise.com/api/searchProduct',
      form: true,
      failOnStatusCode: false
    }).then((response) => {

      expect(response.status).to.eq(200)

      const body = typeof response.body === 'string'
        ? JSON.parse(response.body)
        : response.body

      expect(body).to.have.property('responseCode', 400)
      expect(body).to.have.property(
        'message',
        'Bad request, search_product parameter is missing in POST request.'
      )
    })
  })

})
