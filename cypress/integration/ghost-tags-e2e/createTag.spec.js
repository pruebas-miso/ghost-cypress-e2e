/// <reference types="cypress" />

import { navigate, TagsPage } from "../../page-objects/tags-page";

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

import {navigate} from './'

describe("tag actions", () => {


  beforeEach(() => {
    cy.visit('http://localhost:2368/ghost/#/signin')
    // cy.get('.email.ember-text-field.gh-input.ember-view').type('pedro3087@gmail.com')
    // cy.get('.password.ember-text-field.gh-input.ember-view').type('administrador')
    // cy.get('#ember12 > span').click()

    // cy.wait(200)
  });

  it("should add a new tag to the list", () => {


    // cy.get('#ember40').click()
    
  });
});
