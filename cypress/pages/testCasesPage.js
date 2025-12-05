class TestCasesPage {
    elements = {
        testCasesTitle: () => cy.contains('h2', 'Test Cases')
    }
}

module.exports = new TestCasesPage()