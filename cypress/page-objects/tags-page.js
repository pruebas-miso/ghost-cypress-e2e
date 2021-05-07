
/// <reference types="cypress" />

export function navigate() {
  cy.visit('http://localhost:2368/ghost/#/signin')
  cy.get('.email.ember-text-field.gh-input.ember-view').type('pedro3087@gmail.com')
  cy.get('.password.ember-text-field.gh-input.ember-view').type('administrador')
  cy.get('#ember12 > span').click()
}

export class TagsPage {

    navigate() {
      cy.visit('http://todomvc-app-for-testing.surge.sh/')
    }

    login() {
        cy.visit('http://localhost:2368/ghost/')
      }
  
    addTodo(todoText) {
      cy.get('.new-todo').type(todoText + '{enter}')
    }
}