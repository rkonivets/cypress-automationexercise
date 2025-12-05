class ContactUsPage {
    elements = {
        contactUsTitle: () => cy.contains('Get In Touch'),
        nameInput: () => cy.get('[data-qa="name"]'),
        emailInput: () => cy.get('[data-qa="email"]'),
        subjectInput: () => cy.get('[data-qa="subject"]'),
        yourMessageHereTextArea: () => cy.get('[data-qa="message"]'),
        chooseFileButton: () => cy.get('input[name="upload_file"]'),
        submitButton: () => cy.get('[data-qa="submit-button"]'),
        successMessage: () => cy.contains('Success! Your details have been submitted successfully.'),
        homeButton: () => cy.contains('a.btn.btn-success', 'Home')

    }

    open() {
        cy.visit('/contact_us')
    }

    fillForm(name, email, subject, message) {
        this.elements.nameInput().type(name)
        this.elements.emailInput().type(email)
        this.elements.subjectInput().type(subject)
        this.elements.yourMessageHereTextArea().type(message)
    }

    uploadFile(filePath) {
        this.elements.chooseFileButton().selectFile(filePath)
    }

    submit() {
        this.elements.submitButton().click()
    }
}

module.exports = new ContactUsPage()