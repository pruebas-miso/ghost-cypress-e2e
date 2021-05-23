/// <reference types="cypress" />

export class MemberPage {

    version = Cypress.config("versionGhost");
    takeScreenshoot = Cypress.config("takeScreenshoot");

    clickToNewMember(scenarioFunctionality,step) {
        cy.get('[class="ember-view gh-btn gh-btn-green"]').first().click({ force: true });
    }

    typeName(name, scenarioFunctionality,step) {
        cy.get('#member-name').type(name, { force: true });
    }

    typeEmail(email, scenarioFunctionality,step) {
        cy.get('#member-email').type(email, { force: true });
    }

    typeNote(note, scenarioFunctionality,step) {
        cy.get('#member-note').type(note, { force : true });
    }

    clickSaveMember() {
        cy.get(".gh-btn-blue").first().click({ force: true });
    }

    clickToMember(scenarioFunctionality,step) {
        cy.visit('http://localhost:2368/ghost/#/members');
        cy.get('ol>li').last().click();
    }

    deleteMember(scenarioFunctionality,step) {
        cy.get(".gh-btn-red").first().click({ force: true });
        cy.wait(500);
        cy.get('[class="gh-btn gh-btn-red gh-btn-icon ember-view"]').click( { force: true } );
    }

    searchMember(name, scenarioFunctionality,step) {
        cy.visit('http://localhost:2368/ghost/#/members');
        cy.get('[class="ember-text-field gh-input ember-view gh-members-list-searchfield "]').type(name, { force : true });
        cy.wait(500);
        cy.get('[class="ma0 pa0 gh-members-list-name "]').should('contain', name);
    }

    validateMemberCreation(){
        cy.get('[class="response"]').should('contain', 'Invalid Email.');
    }

    validateMemberEdit(){
        cy.get('[class="response"]').should('contain', 'Name cannot be longer than 191 characters.');
    }

    validateMemberEmailCreation(email){
        cy.visit('http://localhost:2368/ghost/#/members');
        cy.get('[class="ember-text-field gh-input ember-view gh-members-list-searchfield "]').type(email, { force : true });
        cy.wait(500);
        cy.get('[class="ma0 pa0 gh-members-list-name gh-members-name-noname"]').should('contain', email);
    }

    validateMemberNoteEdit(){
        cy.get('[class="response"]').should('contain', 'Note is too long.');
    }
}