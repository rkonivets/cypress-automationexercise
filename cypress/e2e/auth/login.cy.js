
const registerPage = require('../../pages/registerPage')
const homePage = require('../../pages/homePage')
const loginPage = require('../../pages/loginPage')
const accountInfoPage = require('../../pages/accountInfoPage')



describe('Auth - Login', () => {
    it('TC2: Login user with correct email and password', () => {
        const timestamp = Date.now()
        const name = `TestQA${timestamp}`
        const email = `romaqa${timestamp}@test.com`
        const password = `Test1234`

        homePage.open()
        homePage.elements.heroText().should('be.visible')

        registerPage.open()
        registerPage.startSignup(name, email)

        cy.contains(/enter account information/i).should('be.visible')

        accountInfoPage.fillBasicInfo(password)
        accountInfoPage.fillAddress()
        accountInfoPage.submit()

        cy.contains(/account created/i).should('be.visible')
        cy.contains('Continue').click()
        cy.contains('Logged in as').should('be.visible')

        cy.contains('Logout').click()



        homePage.elements.signupLoginLink().click()
        loginPage.elements.loginTitle().should('be.visible')

        loginPage.login(email, password)

        loginPage.elements.loggedInAsText().should('be.visible')
        loginPage.elements.deleteAccountLink().click()
        loginPage.elements.accountDeletedText().should('be.visible')

    });

    it('TC3: Login User with incorrect email and password', () => {
        homePage.open()
        homePage.elements.signupLoginLink().click()
        loginPage.elements.loginTitle().should('be.visible')

        loginPage.login('wrongEmail@wrong.com', 'wrongpass123')

        loginPage.elements.errorMessage().should('be.visible')

    });

    it('TC4: Log out user', () => {
        const timestamp = Date.now()
        const name = `TestQA${timestamp}`
        const email = `romaqa${timestamp}@test.com`
        const password = `Test1234`

        homePage.open()
        homePage.elements.heroText().should('be.visible')

        registerPage.open()
        registerPage.startSignup(name, email)

        cy.contains(/enter account information/i).should('be.visible')

        accountInfoPage.fillBasicInfo(password)
        accountInfoPage.fillAddress()
        accountInfoPage.submit()

        cy.contains(/account created/i).should('be.visible')
        cy.contains('Continue').click()
        cy.contains('Logged in as').should('be.visible')

        cy.contains('Logout').click()

        loginPage.elements.loginTitle().should('be.visible')

    });


})