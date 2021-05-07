export class DashboardPage {

    navigate() {
      cy.visit('http://google.com/')
    }

    login() {
        cy.visit('http://localhost:2368/ghost/')
      }
  
    clickOnViewSite(todoText) {
      cy.get('.new-todo').type(todoText + '{enter}')
    }
}