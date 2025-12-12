describe('Verify Login API', () => {

    it('API 7: Verify Login with valid details', () => {

        cy.request({
            method: 'POST',
            url: 'https://automationexercise.com/api/verifyLogin',
            form: true,
            body: {
                email: 'testrom123@rom.com',
                password: '123456'
            }
        }).then((response) => {

            expect(response.status).to.eq(200)


            const body = JSON.parse(response.body)

            expect(body.responseCode).to.eq(200)
            expect(body.message).to.eq('User exists!')
        })
       

        })
        it('API 8: POST To Verify Login without email parameter', () => {

            cy.request({
                method: 'POST',
                url: 'https://automationexercise.com/api/verifyLogin',
                form: true,
                body: {
                    password: '123456'
                }
            }).then((response) => {

                expect(response.status).to.eq(200)


                const body = JSON.parse(response.body)

                expect(body.responseCode).to.eq(400)
                expect(body.message).to.eq('Bad request, email or password parameter is missing in POST request.')
            })
        })
        it('API 9: DELETE To Verify Login', () => {

            cy.request({
                method: 'DELETE',
                url: 'https://automationexercise.com/api/verifyLogin',

            }).then((response) => {

                expect(response.status).to.eq(200)


                const body = JSON.parse(response.body)

                expect(body.responseCode).to.eq(405)
                expect(body.message).to.eq('This request method is not supported.')
            })
        })
        it('API 10: POST To Verify Login with invalid details', () => {
            cy.request({
                method: 'POST',
                url: 'https://automationexercise.com/api/verifyLogin',
                form: true,
                body: {
                    email: 'testRoman@example.com',
                    password: '123456'
                }
            }).then((response) => {

                expect(response.status).to.eq(200)

                const body = JSON.parse(response.body)

                expect(body.responseCode).to.eq(404)
                expect(body.message).to.eq('User not found!')
            })
        })



    })

