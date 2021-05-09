/// <reference types="cypress" />

export class MemberPage {
    clickToNewMember() {
        cy.get(".ember-view gh-btn gh-btn-green").first().click({ force: true });
    }

    typeName(name) {
        cy.get('#member-name').type(name, { force: true });
    }

    typeEmail(email) {
        cy.get('#member-email').type(email, { force: true });
    }

    typeNote(note) {
        cy.get('#member-note').type(note, { force : true });
    }

    clickSaveMember() {
        cy.get(".gh-btn gh-btn-blue gh-btn-icon ember-view").first().click({ force: true });
    }

    clickToMember() {
        cy.visit('http://localhost:2368/ghost/#/members');
        cy.get('.members-list gh-list li:nth-child(1)').click();
    }

    deleteMember() {
        cy.get(".gh-btn.gh-btn-red.gh-btn-icon.ember-view").first().click({ force: true });
    }

    searchMember() {
        cy.visit('http://localhost:2368/ghost/#/members');
        cy.get(".ember-text-field gh-input ember-view gh-members-list-searchfield").type("Roberto", { force : true });
    }
    
}