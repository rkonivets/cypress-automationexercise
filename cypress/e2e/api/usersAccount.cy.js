describe('User Account API', () => {

    const testUser = {
        name: 'RomanTest',
        email: `roman.api.${Date.now()}@example.com`,
        password: '123456',
        title: 'Mr',
        birth_date: '15',
        birth_month: 'May',
        birth_year: '1990',
        firstname: 'Roman',
        lastname: 'Konivets',
        company: 'QA Test Company',
        address1: 'Test Street 12',
        address2: 'Apartment 34',
        country: 'Canada',
        zipcode: '12345',
        state: 'Ontario',
        city: 'Toronto',
        mobile_number: '+1234567890'
    }

    it('API 11: POST To Create/Register User Account', () => {
        cy.request({
            method: 'POST',
            url: 'https://automationexercise.com/api/createAccount',
            form: true,
            body: testUser
        }).then((response) => {
            expect(response.status).to.eq(200)

            const body = JSON.parse(response.body)
            expect(body.responseCode).to.eq(201)
            expect(body.message).to.eq('User created!')
        })
    })

    it('API 13: PUT METHOD To Update User Account', () => {
        const updatedUser = {
            ...testUser,
            name: 'RomanTestUpdated',
            firstname: 'RomanUpdated',
            lastname: 'KonivetsUpdated',
            company: 'Updated QA Company',
            address1: 'Updated Street 99',
            city: 'Vancouver',
            state: 'British Columbia',
            mobile_number: '+1999999999'
        }

        cy.request({
            method: 'PUT',
            url: 'https://automationexercise.com/api/updateAccount',
            form: true,
            body: updatedUser
        }).then((response) => {
            expect(response.status).to.eq(200)

            const body = JSON.parse(response.body)
            expect(body.responseCode).to.eq(200)
            expect(body.message).to.eq('User updated!')
        })
    })

    it('API 14: Get user details by email', () => {
        cy.request(
            'GET',
            `https://automationexercise.com/api/getUserDetailByEmail?email=${encodeURIComponent(testUser.email)}`
        ).then((response) => {

            expect(response.status).to.eq(200)

            const body = JSON.parse(response.body)
            expect(body.responseCode).to.eq(200)

            expect(body.user).to.exist
            expect(body.user.email).to.eq(testUser.email)
        })
    })

    it('API 12: DELETE METHOD To Delete User Account', () => {
        cy.request({
            method: 'DELETE',
            url: 'https://automationexercise.com/api/deleteAccount',
            form: true,
            body: {
                email: testUser.email,
                password: testUser.password
            }
        }).then((response) => {
            expect(response.status).to.eq(200)

            const body = JSON.parse(response.body)
            expect(body.responseCode).to.eq(200)
            expect(body.message).to.eq('Account deleted!')
        })
    })

})
