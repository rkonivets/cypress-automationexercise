const registerPage = require('../../../pages/registerPage')
const accountInfoPage = require('../../../pages/accountInfoPage')

describe('User registration', () => {
    it('TC1: Register new user', () => {
        // Date.now() - generates unique name/email
        const timestamp = Date.now()
        const name = `RomanQA${timestamp}`
        const email = `romanqa${timestamp}@test.com`
        
        registerPage.open()
       
        registerPage.startSignup(name, email)
        
        cy.contains(/enter account information/i).should('be.visible')
        
    })
})

describe('User registration negativ', () => {
    it('TC5: Register with existing email', () => {
        const timestamp = Date.now()
        const name = `RomanQA${timestamp}`
        const email = `romanqa+${timestamp}@test.com`

        
        registerPage.open()
        registerPage.startSignup(name, email)
        cy.contains(/enter account information/i).should('be.visible')

        
        accountInfoPage.fillBasicInfo()
        accountInfoPage.fillAddress()
        accountInfoPage.submit()
       
        accountInfoPage.verifyAndContinueCreationAccount()
               
        cy.visit('/login')

        cy.contains('Logged in as').should('be.visible')

        
        cy.contains('Logout').click()
        cy.contains('Signup / Login').click()

        
        registerPage.startSignup('SomeName', email)

        
        cy.contains('Email Address already exist').should('be.visible')
    })
})
