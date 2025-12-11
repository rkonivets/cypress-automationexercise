

describe('Products API', () => {
    it('API 1: Get All Products List', () => {
        cy.request('GET', 'https://automationexercise.com/api/productsList').then((response) => {

            expect(response.status).to.eq(200)

            const body = JSON.parse(response.body)
            expect(body).to.have.property('responseCode', 200)
            expect(body).to.have.property('products')
            expect(body.products).to.be.an('array')
            expect(body.products.length).to.be.greaterThan(0)
        })
    })

    it('API 2: POST To All Products List', () => {
        cy.request('POST', 'https://automationexercise.com/api/productsList').then((response) => {

            expect(response.status).to.eq(200)

            const body = JSON.parse(response.body)

            expect(body).to.have.property('responseCode', 405)
            expect(body).to.have.property('message', 'This request method is not supported.')
        })
    })
})