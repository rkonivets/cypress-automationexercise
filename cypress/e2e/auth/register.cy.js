const registerPage = require('../../pages/registerPage')
const accountInfoPage = require('../../pages/accountInfoPage')

describe('User registration', () => {
    it('TC1: Register new user', () => {
        // Date.now() - generates unique name/email
        const timestamp = Date.now()
        const name = `RomanQA${timestamp}`
        const email = `romanqa${timestamp}@test.com`

        //Open login page/registration
        registerPage.open()

        //Fill out the “New User Signup!” form and click the button.
        registerPage.startSignup(name, email)

        // We check that the next step of registration has opened.
        cy.contains(/enter account information/i).should('be.visible')
    })
})

describe('User registration negativ', () => {
    it('TC5: Register with existing email', () => {
        const timestamp = Date.now()
        const name = `RomanQA${timestamp}`
        const email = `romanqa+${timestamp}@test.com`

        //Create new user
        registerPage.open()
        registerPage.startSignup(name, email)
        cy.contains(/enter account information/i).should('be.visible')

        //Have to fill out Account information to pass TC5
        accountInfoPage.fillBasicInfo()
        accountInfoPage.fillAddress()
        accountInfoPage.submit()

        //Check that account is created
        cy.contains(/account created/i).should('be.visible')
        cy.contains('Continue').click()

        //Open the login page
        cy.visit('/login')

        cy.contains('Logged in as').should('be.visible')

        //Log out as registered user
        cy.contains('Logout').click()
        cy.contains('Signup / Login').click()

        //Try to registrate existing email
        registerPage.startSignup('SomeName', email)

        //Chech validation error message
        cy.contains('Email Address already exist').should('be.visible')
    })
})
