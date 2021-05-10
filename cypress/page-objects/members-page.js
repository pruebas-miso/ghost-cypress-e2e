/// <reference types="cypress" />

export class MemberPage {
    clickToNewMember() {
        cy.get('[class="ember-view gh-btn gh-btn-green"]').first().click({ force: true });
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
        cy.get(".gh-btn-blue").first().click({ force: true });
    }

    clickToMember() {
        cy.visit('http://localhost:2368/ghost/#/members');
        cy.get('ol>li').last().click();
    }

    deleteMember() {
        cy.get(".gh-btn-red").first().click({ force: true });
        cy.wait(500);
        cy.get('[class="gh-btn gh-btn-red gh-btn-icon ember-view"]').click( { force: true } );
    }

    searchMember(name) {
        cy.visit('http://localhost:2368/ghost/#/members');
        cy.get('[class="ember-text-field gh-input ember-view gh-members-list-searchfield "]').type(name, { force : true });
        cy.wait(500);
        cy.get('[class="ma0 pa0 gh-members-list-name "]').should('contain', name);
    }
    
}