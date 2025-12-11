describe('Brands API', () => {
    it('Get All Brands List', () => {
        cy.request('GET', 'https://automationexercise.com/api/brandsList').then((response) => {

            expect(response.status).to.eq(200)

            const body = JSON.parse(response.body)
            expect(body).to.have.property('responseCode', 200)
            expect(body).to.have.property('brands')
            expect(body.brands).to.be.an('array')
            expect(body.brands.length).to.be.greaterThan(0)
        })
    })

    it('API 4: PUT To All Brands List', () => {
        cy.request('PUT', 'https://automationexercise.com/api/brandsList').then((response) => {

            expect(response.status).to.eq(200)

            const body = JSON.parse(response.body)

            expect(body).to.have.property('responseCode', 405)
            expect(body).to.have.property('message', 'This request method is not supported.')
        })
    })
})